import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MenuSidebar } from ".";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { FaUserAlt } from "react-icons/fa";

const Header = ({ user }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className=" px-4 bg-[rgba(20,20,22,0.78)] py-2  fixed top-0 right-0 left-0 h-16 z-50 sm:left-24 md:left-56">
        <div className="flex items-center justify-between  text-white w-full">
          <Link href="/">
            <div className="flex items-center text-green-500 sm:hidden">
              <Image
                src="/img/logo.png"
                alt="spotify-logo"
                height={40}
                width={40}
              />
              <p className="text-3xl ml-2 font-semibold">Spotify</p>
            </div>
          </Link>
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="sm:hidden"
          >
            <AiOutlineMenu className="text-xl cursor-pointer" />
          </div>
          <div className="w-full  sm:flex justify-end hidden">
            <div className="gap-4  items-center text-lg font-bold  sm:flex">
              {!user ? (
                <>
                  {" "}
                  <button className="text-gray-300  border-none rounded-lg py-2 hover:scale-105  whitespace-nowrap hover:text-white">
                    <Link href="/auth/signup">Sign up</Link>
                  </button>
                  <button className="text-black bg-white border-none rounded-3xl px-6 py-2 whitespace-nowrap hover:scale-105 ">
                    <Link href="/auth/login">Log in</Link>
                  </button>
                </>
              ) : (
                <>
                  <div className="text-[15px] bg-black pr-4 rounded-2xl flex items-center gap-2">
                    {user.photoURL ? (
                      <div className="relative h-8 w-8 rounded-full">
                        <Image
                          src={user.photoURL}
                          alt="user"
                          layout="fill"
                          className="rounded-full"
                        />
                      </div>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-[#171a19] flex items-center justify-center">
                        <FaUserAlt />
                      </div>
                    )}
                    <p>{user.displayName || user.email}</p>
                  </div>
                  <button
                    className="text-black bg-white border-none rounded-3xl px-6 py-2 whitespace-nowrap hover:scale-105"
                    onClick={() => signOut(auth)}
                  >
                    Log out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <MenuSidebar showSidebar={showSidebar} user={user} />
    </>
  );
};

export default Header;
