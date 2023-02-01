import Image from "next/legacy/image";
import { AiFillHome, AiOutlineBarChart } from "react-icons/ai";
import { MdRecommend } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { GiSpinningTop } from "react-icons/gi";
import { SHOW_MODAL } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Sidebar = ({ user, setPlaylists, newReleases, details }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-black top-0 flex-col  bottom-0 md:w-56 w-24 text-white px-6  -z-10 hidden sm:flex fixed">
      <div>
        <div className="flex items-center text-green-500 mt-8 mb-8">
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
        <div className="flex flex-col gap-6 my-6">
          <Link
            href="/"
            className="flex items-center gap-4 text-lg cursor-pointer"
            onClick={() => {
              !details && setPlaylists(newReleases);
            }}
          >
            <AiFillHome className="text-3xl" />{" "}
            <p className="hidden md:inline">Home</p>
          </Link>

          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer search"
            onClick={() => {
              !user && dispatch(SHOW_MODAL());
            }}
          >
            <MdRecommend className="text-3xl" />{" "}
            <p className="hidden md:inline search">Recommended</p>
          </div>

          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer library"
            onClick={() => {
              !user && dispatch(SHOW_MODAL());
            }}
          >
            <RiPlayListFill className="text-3xl" />{" "}
            <p className="hidden md:inline library">Spotify Playlists</p>
          </div>
        </div>
        {/* create playlist and liked songs */}
        <div className="flex flex-col gap-6 mb-2">
          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer playlist"
            onClick={() => {
              !user && dispatch(SHOW_MODAL());
            }}
          >
            <GiSpinningTop className="text-3xl" />{" "}
            <p className="hidden md:inline playlist">Top Artists</p>
          </div>
          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer liked"
            onClick={() => {
              !user && dispatch(SHOW_MODAL());
            }}
          >
            <AiOutlineBarChart className="text-3xl" />{" "}
            <p className="hidden md:inline liked">Top Charts</p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-500 pt-2 overflow-y-scroll flex-grow mt-2 hidden md:inline scrollbar-hide"></div>
    </div>
  );
};

export default Sidebar;
