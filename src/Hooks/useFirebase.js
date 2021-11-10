import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import InitialAuthentication from "../Firebase/FirebaseInit";
import { useHistory, useLocation } from "react-router";

// calling the initial authentication as InitialAuthentication function to run the authentication related firebase code
InitialAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // this part is for changing route of user after login
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location?.state?.from || "/";

  const auth = getAuth();

  const gAuthProvider = new GoogleAuthProvider();

  // Signup and Signin with Email and password
  const SingUpWithEmail = (e) => {
    e.preventDefault();
    // verifying password strength
     if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6}/.test(password)) {
       setError(
         "Password should be at least of 6 characters also must have one uppercase letter, one digits and one lowercase letter"
       );
       return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // user's info after signed in
        setUserDetails();
        setUser(res.user);
        history.push(redirect_url);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // user's info after logged in
        setUser(res.user);
        history.push(redirect_url);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const name = firstname + ' ' + lastname
  const setUserDetails = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };


  // Function for signin with google
  const googleSignin = () => {
    setLoading(true);

    signInWithPopup(auth, gAuthProvider)
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
      })
      .finally(() => setLoading(false));
  };

  // this is a auth observer with observe all changes for the user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, []);

  // Log out code
  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  // returning all essential function and others
  return {
    user,
    loading,
    googleSignin,
    googleSignOut,
    signInWithEmail,
    SingUpWithEmail,
    setPassword,
    setEmail,
    error,
    setError,
    setFirstName,
    setLastName,
  };
};

export default useFirebase;
