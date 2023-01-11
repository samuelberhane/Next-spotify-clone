import Image from "next/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiHeartSquare } from "react-icons/bi";

const MenuSidebar = ({ showSidebar }) => {
  return (
    <div
      className={`bg-black top-16 ${
        showSidebar ? "showSidebar" : "hideSidebar"
      }  bottom-0 w-56 text-white  fixed sm:hidden flex flex-col z-30`}
    >
      <div>
        <div className="flex flex-col gap-4 mb-10 mt-4 px-4">
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

        <div className="flex flex-col gap-4 mb-10 px-4">
          <div className="flex items-center gap-4 text-lg text-gray-400">
            <BsFillPlusSquareFill className="text-3xl" /> <p>Create Playlist</p>
          </div>
          <div className="flex items-center gap-4 text-lg text-gray-400">
            <BiHeartSquare className="text-4xl text-[#67ca93]" />{" "}
            <p>Liked Songs</p>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-end pb-2">
        <div></div>
        <div className="flex gap-1 items-center text-lg font-bold px-2">
          <button className="text-gray-300  border-none rounded-lg py-2 hover:scale-105 w-1/2 whitespace-nowrap hover:text-white">
            Sign up
          </button>
          <button className="text-black bg-white border-none rounded-3xl px-6 py-2 hover:scale-105 w-1/2">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
