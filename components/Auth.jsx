import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { AuthContent, AuthForm } from ".";
import { useRouter } from "next/router";
import { useState } from "react";
import { Loader } from ".";
import { useEffect } from "react";

// Toast Option
const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Auth = ({ head }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [userLoggedin, setUserLoggedin] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedin(user);
        router.push("/");
      }
      setPageLoading(false);
    });
  }, []);

  // Check Empty Input Field
  const checkInputs = () => {
    const { email, confirmEmail, password, confirmPassword } = inputData;
    if (email === "")
      toast.error("You need to enter your email.", toastOptions);
    if (confirmEmail === "" && head === "Signup")
      toast.error("You need to confirm your email.", toastOptions);
    if (password === "")
      toast.error("You need to enter a password.", toastOptions);
    if (confirmPassword === "" && head === "Signup")
      toast.error("You need to confirm your email.", toastOptions);
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // check inputs
    checkInputs();

    const { email, confirmEmail, password, confirmPassword } = inputData;

    // Signup User
    if (head === "Signup") {
      if (email !== confirmEmail)
        toast.error(
          "email and confirm email should be the same.",
          toastOptions
        );
      else if (password !== confirmPassword)
        toast.error(
          "password and confirm password should be the same.",
          toastOptions
        );
      else {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            toast.success("User Created Successufully.", toastOptions);
            router.push("/");
          })
          .catch((error) => {
            toast.error(error.message, toastOptions);
          })
          .finally(setLoading(false));
      }
    } else {
      // Login User
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          router.push("/");
        })
        .catch((error) => {
          toast.error(error.message, toastOptions);
        })
        .finally(setLoading(false));
    }
  };

  // Google Signup
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message, toastOptions);
      });
  };

  if (pageLoading || userLoggedin) return;

  return (
    <div>
      <Head>
        <title>{head} - Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {loading && <Loader />}
        <main className="text-center flex flex-col items-center justify-center">
          <AuthContent head={head} handleGoogle={handleGoogle} />
          <AuthForm
            head={head}
            handleSubmit={handleSubmit}
            inputData={inputData}
            setInputData={setInputData}
          />
        </main>
        <ToastContainer />
      </>
    </div>
  );
};

export default Auth;
