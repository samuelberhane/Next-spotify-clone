import Image from "next/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiHeartSquare } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="bg-black top-0   bottom-0 md:w-64 w-24 text-white px-6  -z-10 hidden sm:inline fixed">
      <div className="flex items-center text-green-500 mt-8 mb-6">
        <Image src="/img/logo.png" alt="spotify-logo" height={50} width={50} />
        <p className="text-3xl ml-2 font-semibold hidden md:inline">Spotify</p>
      </div>

      <div className="flex flex-col gap-4 mb-8 mt-4">
        <div className="flex items-center gap-4 text-lg">
          <AiFillHome className="text-3xl" />{" "}
          <p className="hidden md:inline">Home</p>
        </div>
        <div className="flex items-center gap-4 text-lg text-gray-400">
          <AiOutlineSearch className="text-3xl" />{" "}
          <p className="hidden md:inline">Search</p>
        </div>
        <div className="flex items-center gap-4 text-lg text-gray-400">
          <VscFolderLibrary className="text-3xl" />{" "}
          <p className="hidden md:inline">Your Library</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-2">
        <div className="flex items-center gap-4 text-lg text-gray-400">
          <BsFillPlusSquareFill className="text-3xl" />{" "}
          <p className="hidden md:inline">Create Playlist</p>
        </div>
        <div className="flex items-center gap-4 text-lg text-gray-400">
          <BiHeartSquare className="text-4xl bg-[#2e153a] text-[#43a355]" />{" "}
          <p className="hidden md:inline">Liked Songs</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
