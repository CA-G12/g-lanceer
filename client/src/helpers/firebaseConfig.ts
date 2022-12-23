import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAT8iZEyOFKJSaIOg4hg4b-KV7Rj6KXTaw',
  authDomain: 'g-lancer1.firebaseapp.com',
  projectId: 'g-lancer1',
  storageBucket: 'g-lancer1.appspot.com',
  messagingSenderId: '814334930947',
  appId: '1:814334930947:web:3f72a591907839ae2e9e36',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
