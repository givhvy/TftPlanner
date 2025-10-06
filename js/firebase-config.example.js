/**
 * Firebase Configuration Example
 *
 * INSTRUCTIONS:
 * 1. Copy this file to firebase-config.js: cp firebase-config.example.js firebase-config.js
 * 2. Replace the placeholder values below with your Firebase project credentials
 * 3. Get your config from: https://console.firebase.google.com/ → Project Settings → Your apps
 */

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
let app, db, storage;

try {
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    storage = firebase.storage();
    console.log('✓ Firebase initialized successfully');
    console.log('✓ Project ID:', firebaseConfig.projectId);
} catch (error) {
    console.error('❌ Firebase initialization error:', error);
}
