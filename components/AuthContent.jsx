import Image from "next/legacy/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const AuthContent = ({ head, handleGoogle }) => {
  return (
    <>
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

      <h1 className="font-bold text-3xl md:text-5xl w-[300px] md:w-[400px] mb-8">
        {head === "Login"
          ? "To continue, log in to Spotify."
          : "Sign up for free to start listening."}
      </h1>

      <button className="authBtn bg-blue-600 text-white mb-4">
        <BsFacebook className="text-2xl" />{" "}
        <span>{head === "Login" ? "Continue" : "Sign up"} with Facebook</span>
      </button>

      <button className="authBtn border-2 text-gray-600" onClick={handleGoogle}>
        <FcGoogle className="text-2xl" />{" "}
        <span>{head === "Login" ? "Continue" : "Sign up"} with Google</span>
      </button>

      <div className="flex items-center gap-2 mt-5 justify-center">
        <div className="line" />
        <p className="text-xl">or</p>
        <div className="line" />
      </div>

      <h2 className="mt-2 font-bold text-lg whitespace-nowrap mb-3">
        {head === "Login" ? "Login" : "Sign up"} with your email address
      </h2>
    </>
  );
};

export default AuthContent;
