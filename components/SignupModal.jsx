import Image from "next/legacy/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../redux/slice/authSlice";

const SignupModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] z-[60] p-4 flex items-center justify-center flex-col gap-1">
      <div className="text-white">
        <div className="bg-gradient-to-b from-blue-700 via-gray-600  to-gray-700 px-6 pt-6 pb-10 rounded flex flex-col items-center justify-center gap-1">
          <div className="flex items-center text-green-500 mb-3">
            <Image
              src="/img/logo.png"
              alt="spotify-logo"
              height={40}
              width={40}
            />
            <p className="text-3xl md:text-4xl ml-2 font-bold">Spotify</p>
          </div>
          <h1 className="text-sm md:text-lg lg:text-xl font-bold mb-2">
            Start listening with a free Spotify account
          </h1>
          <Link href="/auth/signup" onClick={() => dispatch(CLOSE_MODAL())}>
            <button className="text-black bg-green-500 px-5 py-3 md:px-6 lg:px-8 rounded-3xl md:text-lg lg:text-xl font-bold hover:scale-105 whitespace-nowrap">
              Sign up free
            </button>
          </Link>
          <p className="mt-3">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="underline"
              onClick={() => dispatch(CLOSE_MODAL())}
            >
              Log in
            </Link>
          </p>
        </div>
        <p
          className="text-center font-semibold mt-2 cursor-pointer"
          onClick={() => dispatch(CLOSE_MODAL())}
        >
          Close
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
