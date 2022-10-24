// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZLHU5Wcg8D-T7f0Kt4c9sX0pXaB_vlCs",
    authDomain: "skillcrush-tech.firebaseapp.com",
    projectId: "skillcrush-tech",
    storageBucket: "skillcrush-tech.appspot.com",
    messagingSenderId: "1075848685809",
    appId: "1:1075848685809:web:e8cf07b022b2463814e150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;