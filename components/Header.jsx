import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { MenuSidebar } from ".";
import { signOut, useSession } from "next-auth/react";

const Header = ({ user }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { data: session } = useSession();
  const [showLogout, setShowLogout] = useState(false);

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
              {!session ? (
                <>
                  <button className="text-black bg-white border-none rounded-3xl px-6 py-2 whitespace-nowrap hover:scale-105 ">
                    <Link href="/auth/signin">Sign in</Link>
                  </button>
                </>
              ) : (
                <div className="text-[15px] bg-black rounded-2xl pr-2 gap-2 flex items-center justify-center relative">
                  <img
                    src={session?.user?.image || "/img/user.png"}
                    alt="userImg"
                    className="w-[40px] h-[40px] rounded-full cursor-pointer"
                  />
                  <p>{session?.user?.name}</p>
                  <AiFillCaretDown
                    className="text-2xl text-red-400 ml-2"
                    onClick={() => signOut()}
                  />
                </div>
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
