import Image from "next/legacy/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiHeartSquare } from "react-icons/bi";
import { SHOW_MODAL } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-black top-0 flex-col  bottom-0 md:w-56 w-24 text-white px-6  -z-10 hidden sm:flex fixed">
      <div>
        <div className="flex items-center text-green-500 mt-8 mb-6">
          <Image
            src="/img/logo.png"
            alt="spotify-logo"
            height={50}
            width={50}
          />
          <p className="text-3xl ml-2 font-semibold hidden md:inline">
            Spotify
          </p>
        </div>

        {/* Home,search and library */}
        <div className="flex flex-col gap-4 mb-8 mt-4">
          <div className="flex items-center gap-4 text-lg cursor-pointer">
            <AiFillHome className="text-3xl" />{" "}
            <p className="hidden md:inline">Home</p>
          </div>

          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer search"
            onClick={() => {
              dispatch(SHOW_MODAL());
            }}
          >
            <AiOutlineSearch className="text-3xl" />{" "}
            <p className="hidden md:inline search">Search</p>
          </div>
          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer library"
            onClick={() => {
              dispatch(SHOW_MODAL());
            }}
          >
            <VscFolderLibrary className="text-3xl" />{" "}
            <p className="hidden md:inline library">Your Library</p>
          </div>
        </div>
        {/* create playlist and liked songs */}
        <div className="flex flex-col gap-4 mb-2">
          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer playlist"
            onClick={() => {
              dispatch(SHOW_MODAL());
            }}
          >
            <BsFillPlusSquareFill className="text-3xl" />{" "}
            <p className="hidden md:inline playlist">Create Playlist</p>
          </div>
          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer liked"
            onClick={() => {
              dispatch(SHOW_MODAL());
            }}
          >
            <BiHeartSquare className="text-4xl bg-[#2e153a] text-[#43a355]" />{" "}
            <p className="hidden md:inline liked">Liked Songs</p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-500 pt-2 overflow-y-scroll flex-grow mt-2 hidden md:inline scrollbar-hide"></div>
    </div>
  );
};

export default Sidebar;
