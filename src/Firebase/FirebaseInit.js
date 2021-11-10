import { initializeApp } from "firebase/app"
import FirebaseConfig from "./FirebaseConfig"


const InitialAuthentication = () => {
    // configuration for the firebase and also initializing app
    initializeApp(FirebaseConfig);
}

export default InitialAuthentication;