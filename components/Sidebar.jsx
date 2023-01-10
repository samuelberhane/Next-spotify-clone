import Image from "next/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiHeartSquare } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="bg-black fixed left-0 top-0 bottom-0 w-64 text-white px-6">
      {/* Spotify Logo */}
      <div className="flex items-center text-green-500 mt-8 mb-10">
        <Image src="/img/logo.png" alt="spotify-logo" height={50} width={50} />
        <p className="text-3xl ml-2 font-semibold">Spotify</p>
      </div>

      <div className="flex flex-col gap-4 mb-10">
        <div className="flex items-center gap-4 text-lg">
          <AiFillHome className="text-3xl" /> <p>Home</p>
        </div>
        <div className="flex items-center gap-4 text-lg text-gray-400">
          <AiOutlineSearch className="text-3xl" /> <p>Search</p>
        </div>
        <div className="flex items-center gap-4 text-lg text-gray-400">
          <VscFolderLibrary className="text-3xl" /> <p>Your Library</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-10">
        <div className="flex items-center gap-4 text-lg text-gray-400">
          <BsFillPlusSquareFill className="text-3xl" /> <p>Create Playlist</p>
        </div>
        <div className="flex items-center gap-4 text-lg text-gray-400">
          <BiHeartSquare className="text-4xl text-[#67ca93]" />{" "}
          <p>Liked Songs</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
