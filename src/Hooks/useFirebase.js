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
  const [admin, setAdmin] = useState(false);
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
    if (!/(?=.*[0-9]).{6}/.test(password)) {
      setError(
        "Password should be at least of 6 characters and at least one digits"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // user's info after signed in
        setUserDetails();
        setUser(res.user);
        saveUser(email, name, "POST");
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

  const name = firstname + " " + lastname;
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
        saveUser(result.user.email, result.user.displayName, "PUT");
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

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://boiling-badlands-82832.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    let isAdmin = false;
    fetch(`https://boiling-badlands-82832.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.role === "admin") {
          isAdmin = true;
        }
        setAdmin(isAdmin);
      });
  }, [user.email]);

  // Log out code
  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setLoading(false);
        setError("");
      });
  };

  // returning all essentials
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
    admin,
    setAdmin,
  };
};

export default useFirebase;
