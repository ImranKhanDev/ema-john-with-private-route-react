import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;
