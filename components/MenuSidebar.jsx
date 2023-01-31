import Link from "next/link";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiHeartSquare } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import { SHOW_MODAL } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";

const MenuSidebar = ({ showSidebar }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

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

          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer"
            onClick={() => {
              !session && dispatch(SHOW_MODAL());
            }}
          >
            <AiOutlineSearch className="text-3xl" /> <p>Search</p>
          </div>

          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer"
            onClick={() => {
              !session && dispatch(SHOW_MODAL());
            }}
          >
            <VscFolderLibrary className="text-3xl" /> <p>Your Library</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-10 px-4">
          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer"
            onClick={() => {
              !session && dispatch(SHOW_MODAL());
            }}
          >
            <BsFillPlusSquareFill className="text-3xl" /> <p>Create Playlist</p>
          </div>
          <div
            className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer"
            onClick={() => {
              !session && useDispatch(SHOW_MODAL());
            }}
          >
            <BiHeartSquare className="text-4xl text-[#67ca93]" />{" "}
            <p>Liked Songs</p>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-end pb-2">
        <div></div>
        <div className="flex gap-1 items-center justify-between text-lg font-bold px-2">
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
                className="w-[40px] h-[40px] rounded-full"
              />
              <p>{session?.user?.name}</p>
              <AiFillCaretDown
                className="text-2xl text-red-400 ml-2 cursor-pointer"
                onClick={() => signOut()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
