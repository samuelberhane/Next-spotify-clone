import { getProviders, signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsSpotify } from "react-icons/bs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../../components";

function Signin({ providers }) {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (session) return <Loader />;

  return (
    <>
      <Head>
        <title>Sign in - Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center bg-black h-screen text-white">
        <Link href="/">
          <div className="flex items-center text-green-500 my-6">
            <Image
              src="/img/logo.png"
              alt="spotify-logo"
              height={40}
              width={40}
            />
            <p className="text-3xl md:text-4xl ml-2 font-bold">Spotify</p>
          </div>
        </Link>

        <h1 className="font-bold text-xl md:text-3xl w-[300px] md:w-[400px] mb-8 text-center">
          To start listening, log in to Spotify.
        </h1>

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="authBtn bg-blue-600 text-white mb-4"
              onClick={() => {
                signIn(provider.id, { callbackUrl: "/" });
              }}
            >
              <BsSpotify className="text-2xl" />
              <span> Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
