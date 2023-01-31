import Head from "next/head";
import {
  Feeds,
  Header,
  Sidebar,
  SignupFooter,
  SignupModal,
  LoggedFeeds,
} from "../components";
import { selectShowModal } from "../redux/slice/authSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Home() {
  const showModal = useSelector(selectShowModal);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user);
      }
      setLoading(false);
    });
  }, []);

  console.log("user", user);
  if (loading) return;

  return (
    <>
      <Head>
        <title>Home - Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Sidebar */}
        <Sidebar user={user} />

        {/* Header */}
        <Header user={user} />

        {/***** User logged out Feeds *****/}
        {!user && <Feeds user={user} />}

        {/* <LoggedFeeds /> */}

        {/* Signup Footer Component */}
        {!user && <SignupFooter />}

        {/* Signup Modal */}
        {showModal && <SignupModal />}
      </main>
    </>
  );
}
