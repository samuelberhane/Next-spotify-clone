import Link from "next/link";

const SignupFooter = () => {
  return (
    <div className="z-10 hidden sm:flex bg-gradient-to-r from-red-500 via-green-500 to-blue-400 fixed bottom-0 left-0 w-full px-2 py-3 lg:px-6 md:px-4  justify-between items-center text-white">
      <div>
        <h1 className="uppercase mb-1 font-bold md:text-lg lg:text-xl">
          Preview of Spotify
        </h1>
        <p className="font-bold text ld:text-lg">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <Link href="/auth/signup">
        <button className="bg-white text-black px-5 py-3 md:px-6 lg:px-8 rounded-3xl md:text-lg lg:text-xl font-bold hover:scale-105 whitespace-nowrap">
          Sign up free
        </button>
      </Link>
    </div>
  );
};

export default SignupFooter;
