// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_FIREBASE,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN_FIREBASE ,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_FIREBASE,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDERID_FIREBASE,
  appId: process.env.NEXT_PUBLIC_APPID_FIREBASE
};

export default firebaseConfig
