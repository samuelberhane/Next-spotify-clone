import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MenuSidebar } from ".";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between px-4 bg-[#1b1b25] py-2 text-white h-16 z-50 sm:ml-24 md:ml-64">
        <div className="flex items-center text-green-500 sm:hidden">
          <Image
            src="/img/logo.png"
            alt="spotify-logo"
            height={40}
            width={40}
          />
          <p className="text-3xl ml-2 font-semibold">Spotify</p>
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className="sm:hidden">
          <AiOutlineMenu className="text-xl cursor-pointer" />
        </div>
        <div className="w-full  sm:flex justify-end hidden">
          <div className="gap-4  items-center text-lg font-bold  sm:flex">
            <button className="text-gray-300  border-none rounded-lg py-2 hover:scale-105  whitespace-nowrap hover:text-white">
              Sign up
            </button>
            <button className="text-black bg-white border-none rounded-3xl px-6 py-2 whitespace-nowrap hover:scale-105 ">
              Log in
            </button>
          </div>
        </div>
      </div>
      <MenuSidebar showSidebar={showSidebar} />
    </>
  );
};

export default Header;
