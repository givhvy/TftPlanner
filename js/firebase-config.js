/**
 * Firebase Configuration
 * TFT Academy Firebase Project
 */

const firebaseConfig = {
    apiKey: "AIzaSyDRrigzs2RclyUQqIK22L0kcvm-dUOjOvE",
    authDomain: "thetft-d3f84.firebaseapp.com",
    projectId: "thetft-d3f84",
    storageBucket: "thetft-d3f84.firebasestorage.app",
    messagingSenderId: "445546720573",
    appId: "1:445546720573:web:707226bbc1293f14faa954"
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
