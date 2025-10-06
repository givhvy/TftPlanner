/**
 * Firebase Service
 * Handle all Firebase Firestore and Storage operations for builds
 */

const FirebaseService = {
    // Collection name for builds
    BUILDS_COLLECTION: 'tft_builds',

    /**
     * Save a build to Firestore
     * @param {Object} build - Build object to save
     * @returns {Promise<string>} - Document ID of the saved build
     */
    async saveBuild(build) {
        try {
            const docRef = await db.collection(this.BUILDS_COLLECTION).add({
                ...build,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            console.log('✓ Build saved to Firebase:', docRef.id);

            // Also save to localStorage as backup
            this.saveToLocalStorage(build);

            return docRef.id;
        } catch (error) {
            console.error('Error saving build to Firebase:', error);
            // Fallback to localStorage
            this.saveToLocalStorage(build);
            throw error;
        }
    },

    /**
     * Load all builds from Firestore
     * @returns {Promise<Array>} - Array of build objects
     */
    async loadBuilds() {
        try {
            const snapshot = await db.collection(this.BUILDS_COLLECTION)
                .orderBy('createdAt', 'desc')
                .get();

            const builds = [];
            snapshot.forEach(doc => {
                builds.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            console.log(`✓ Loaded ${builds.length} builds from Firebase`);

            // Also save to localStorage as backup
            localStorage.setItem('tft_builds', JSON.stringify(builds));

            return builds;
        } catch (error) {
            console.error('Error loading builds from Firebase:', error);
            // Fallback to localStorage
            return this.loadFromLocalStorage();
        }
    },

    /**
     * Delete a build from Firestore
     * @param {string} buildId - ID of the build to delete
     * @returns {Promise<void>}
     */
    async deleteBuild(buildId) {
        try {
            await db.collection(this.BUILDS_COLLECTION).doc(buildId).delete();
            console.log('✓ Build deleted from Firebase:', buildId);

            // Also delete from localStorage
            this.deleteFromLocalStorage(buildId);
        } catch (error) {
            console.error('Error deleting build from Firebase:', error);
            // Fallback to localStorage
            this.deleteFromLocalStorage(buildId);
            throw error;
        }
    },

    /**
     * Update a build in Firestore
     * @param {string} buildId - ID of the build to update
     * @param {Object} updates - Object containing fields to update
     * @returns {Promise<void>}
     */
    async updateBuild(buildId, updates) {
        try {
            await db.collection(this.BUILDS_COLLECTION).doc(buildId).update({
                ...updates,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log('✓ Build updated in Firebase:', buildId);
        } catch (error) {
            console.error('Error updating build in Firebase:', error);
            throw error;
        }
    },

    /**
     * Get a single build by ID
     * @param {string} buildId - ID of the build to retrieve
     * @returns {Promise<Object>} - Build object
     */
    async getBuild(buildId) {
        try {
            const doc = await db.collection(this.BUILDS_COLLECTION).doc(buildId).get();

            if (doc.exists) {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            } else {
                throw new Error('Build not found');
            }
        } catch (error) {
            console.error('Error getting build from Firebase:', error);
            throw error;
        }
    },

    // LocalStorage fallback methods
    saveToLocalStorage(build) {
        try {
            const builds = JSON.parse(localStorage.getItem('tft_builds') || '[]');
            builds.unshift(build);
            localStorage.setItem('tft_builds', JSON.stringify(builds));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    },

    loadFromLocalStorage() {
        try {
            return JSON.parse(localStorage.getItem('tft_builds') || '[]');
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return [];
        }
    },

    deleteFromLocalStorage(buildId) {
        try {
            let builds = JSON.parse(localStorage.getItem('tft_builds') || '[]');
            builds = builds.filter(b => b.id !== buildId);
            localStorage.setItem('tft_builds', JSON.stringify(builds));
        } catch (error) {
            console.error('Error deleting from localStorage:', error);
        }
    },

    /**
     * Sync localStorage builds to Firebase (useful for migration)
     * @returns {Promise<void>}
     */
    async syncLocalToFirebase() {
        try {
            const localBuilds = this.loadFromLocalStorage();

            for (const build of localBuilds) {
                // Check if build already exists in Firebase
                const snapshot = await db.collection(this.BUILDS_COLLECTION)
                    .where('id', '==', build.id)
                    .get();

                if (snapshot.empty) {
                    await this.saveBuild(build);
                }
            }

            console.log('✓ LocalStorage builds synced to Firebase');
        } catch (error) {
            console.error('Error syncing to Firebase:', error);
        }
    },

    // ==================== FIREBASE STORAGE METHODS ====================

    /**
     * Upload an image to Firebase Storage
     * @param {File} file - File object to upload
     * @param {string} folder - Folder path in storage (e.g., 'builds', 'screenshots')
     * @param {Function} onProgress - Callback for upload progress (optional)
     * @returns {Promise<Object>} - Object containing downloadURL and fullPath
     */
    async uploadImage(file, folder = 'builds', onProgress = null) {
        try {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                throw new Error('File must be an image');
            }

            // Validate file size (max 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                throw new Error('File size must be less than 5MB');
            }

            // Create unique filename
            const timestamp = Date.now();
            const filename = `${timestamp}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
            const path = `${folder}/${filename}`;

            // Create storage reference
            const storageRef = storage.ref(path);

            // Upload file
            const uploadTask = storageRef.put(file);

            // Monitor upload progress
            return new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log(`Upload progress: ${progress.toFixed(2)}%`);

                        if (onProgress) {
                            onProgress(progress, snapshot);
                        }
                    },
                    (error) => {
                        console.error('Upload error:', error);
                        reject(error);
                    },
                    async () => {
                        // Upload complete, get download URL
                        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                        const result = {
                            downloadURL,
                            fullPath: path,
                            filename,
                            size: file.size,
                            type: file.type
                        };
                        console.log('✓ Image uploaded to Firebase Storage:', result);
                        resolve(result);
                    }
                );
            });
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    },

    /**
     * Delete an image from Firebase Storage
     * @param {string} path - Full path to the file in storage
     * @returns {Promise<void>}
     */
    async deleteImage(path) {
        try {
            const storageRef = storage.ref(path);
            await storageRef.delete();
            console.log('✓ Image deleted from Firebase Storage:', path);
        } catch (error) {
            console.error('Error deleting image:', error);
            throw error;
        }
    },

    /**
     * Upload multiple images
     * @param {FileList|Array} files - Array of File objects
     * @param {string} folder - Folder path in storage
     * @param {Function} onProgress - Callback for overall progress (optional)
     * @returns {Promise<Array>} - Array of upload results
     */
    async uploadMultipleImages(files, folder = 'builds', onProgress = null) {
        try {
            const uploadPromises = Array.from(files).map((file, index) => {
                return this.uploadImage(file, folder, (progress) => {
                    if (onProgress) {
                        onProgress(index, progress, files.length);
                    }
                });
            });

            const results = await Promise.all(uploadPromises);
            console.log(`✓ Uploaded ${results.length} images to Firebase Storage`);
            return results;
        } catch (error) {
            console.error('Error uploading multiple images:', error);
            throw error;
        }
    },

    /**
     * Get download URL for a file
     * @param {string} path - Full path to the file in storage
     * @returns {Promise<string>} - Download URL
     */
    async getDownloadURL(path) {
        try {
            const storageRef = storage.ref(path);
            const url = await storageRef.getDownloadURL();
            return url;
        } catch (error) {
            console.error('Error getting download URL:', error);
            throw error;
        }
    },

    /**
     * List all files in a folder
     * @param {string} folder - Folder path in storage
     * @param {number} maxResults - Maximum number of results (default: 100)
     * @returns {Promise<Array>} - Array of file metadata
     */
    async listFiles(folder, maxResults = 100) {
        try {
            const storageRef = storage.ref(folder);
            const result = await storageRef.listAll({ maxResults });

            const filesMetadata = await Promise.all(
                result.items.map(async (itemRef) => {
                    const metadata = await itemRef.getMetadata();
                    const downloadURL = await itemRef.getDownloadURL();
                    return {
                        name: itemRef.name,
                        fullPath: itemRef.fullPath,
                        downloadURL,
                        size: metadata.size,
                        contentType: metadata.contentType,
                        created: metadata.timeCreated,
                        updated: metadata.updated
                    };
                })
            );

            console.log(`✓ Listed ${filesMetadata.length} files from Firebase Storage`);
            return filesMetadata;
        } catch (error) {
            console.error('Error listing files:', error);
            throw error;
        }
    },

    /**
     * Upload build with screenshot
     * @param {Object} build - Build object
     * @param {File} screenshotFile - Screenshot file (optional)
     * @returns {Promise<Object>} - Build object with screenshot URL
     */
    async saveBuildWithScreenshot(build, screenshotFile = null) {
        try {
            let screenshotData = null;

            // Upload screenshot if provided
            if (screenshotFile) {
                screenshotData = await this.uploadImage(screenshotFile, 'build-screenshots');
                build.screenshot = {
                    url: screenshotData.downloadURL,
                    path: screenshotData.fullPath,
                    filename: screenshotData.filename
                };
            }

            // Save build to Firestore
            const buildId = await this.saveBuild(build);

            return {
                buildId,
                screenshotData,
                build
            };
        } catch (error) {
            console.error('Error saving build with screenshot:', error);
            throw error;
        }
    },

    /**
     * Delete build and its associated screenshot
     * @param {string} buildId - ID of the build to delete
     * @param {string} screenshotPath - Path to screenshot in storage (optional)
     * @returns {Promise<void>}
     */
    async deleteBuildWithScreenshot(buildId, screenshotPath = null) {
        try {
            // Delete build from Firestore
            await this.deleteBuild(buildId);

            // Delete screenshot if path provided
            if (screenshotPath) {
                await this.deleteImage(screenshotPath);
            }

            console.log('✓ Build and screenshot deleted');
        } catch (error) {
            console.error('Error deleting build with screenshot:', error);
            throw error;
        }
    }
};
