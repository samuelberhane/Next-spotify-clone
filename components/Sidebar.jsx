import Image from "next/legacy/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiHeartSquare } from "react-icons/bi";
import { SET_SUBMENU, CLOSE_SUBMENU } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  const closeSubmenu = () => {
    const timeout = setTimeout(() => {
      dispatch(CLOSE_SUBMENU());
    }, 2000);
    return () => clearTimeout(timeout);
  };

  const handleSubmenu = (e) => {
    const location = e.target.getBoundingClientRect();
    const classList = e.target.classList;
    if (classList.contains("search"))
      dispatch(
        SET_SUBMENU({
          submenuTitle: "Search",
          submenuText: "Log in to search  songs,artists and playlists.",
          location: location.top,
        })
      );
    if (classList.contains("library"))
      dispatch(
        SET_SUBMENU({
          submenuTitle: "Enjoy Your Library",
          submenuText:
            "Log in to see saved songs,artists and playlists in Your Library.",
          location: location.top,
        })
      );
    if (classList.contains("playlist"))
      dispatch(
        SET_SUBMENU({
          submenuTitle: "Create Playlist",
          submenuText: "Log in to create and listen songs in Your Playlist.",
          location: location.top,
        })
      );
    if (classList.contains("liked"))
      dispatch(
        SET_SUBMENU({
          submenuTitle: "Liked Songs",
          submenuText: "Log in to see Liked songs.",
          location: location.top,
        })
      );
    closeSubmenu();
  };

  return (
    <div className="bg-black top-0   bottom-0 md:w-56 w-24 text-white px-6  -z-10 hidden sm:inline fixed">
      <div className="flex items-center text-green-500 mt-8 mb-6">
        <Image src="/img/logo.png" alt="spotify-logo" height={50} width={50} />
        <p className="text-3xl ml-2 font-semibold hidden md:inline">Spotify</p>
      </div>

      <div className="flex flex-col gap-4 mb-8 mt-4">
        <div className="flex items-center gap-4 text-lg cursor-pointer">
          <AiFillHome className="text-3xl" />{" "}
          <p className="hidden md:inline">Home</p>
        </div>
        <div
          className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer search"
          onClick={handleSubmenu}
        >
          <AiOutlineSearch className="text-3xl" />{" "}
          <p className="hidden md:inline search">Search</p>
        </div>
        <div
          className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer library"
          onClick={handleSubmenu}
        >
          <VscFolderLibrary className="text-3xl" />{" "}
          <p className="hidden md:inline library">Your Library</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-2">
        <div
          className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer playlist"
          onClick={handleSubmenu}
        >
          <BsFillPlusSquareFill className="text-3xl" />{" "}
          <p className="hidden md:inline playlist">Create Playlist</p>
        </div>
        <div
          className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer liked"
          onClick={handleSubmenu}
        >
          <BiHeartSquare className="text-4xl bg-[#2e153a] text-[#43a355]" />{" "}
          <p className="hidden md:inline liked">Liked Songs</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
