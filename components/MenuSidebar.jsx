import Link from "next/link";
import { AiFillHome, AiOutlineBarChart } from "react-icons/ai";
import { SHOW_MODAL } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/router";
import { MdRecommend } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { GiSpinningTop } from "react-icons/gi";

const MenuSidebar = ({
  showSidebar,
  user,
  setPlaylists,
  newReleases,
  details,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div
      className={`bg-black top-16 ${
        showSidebar ? "showSidebar" : "hideSidebar"
      }  bottom-0 w-56 text-white  fixed sm:hidden flex flex-col z-30`}
    >
      <div>
        <div>
          <div className="flex flex-col gap-6 mb-6 mt-4 px-4">
            <Link
              href="/"
              onClick={() => {
                !details && setPlaylists(newReleases);
              }}
              className="flex items-center gap-4 text-lg cursor-pointer"
            >
              <AiFillHome className="text-3xl" /> <p>Home</p>
            </Link>

            <div
              className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer search"
              onClick={() => {
                !user && dispatch(SHOW_MODAL());
              }}
            >
              <MdRecommend className="text-3xl" /> <p>Recommended</p>
            </div>

            <div
              className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer library"
              onClick={() => {
                !user && dispatch(SHOW_MODAL());
              }}
            >
              <RiPlayListFill className="text-3xl" /> <p>Spotify Playlists</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 mb-1 px-4">
            <div
              className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer playlist"
              onClick={() => {
                !user && dispatch(SHOW_MODAL());
              }}
            >
              <GiSpinningTop className="text-3xl" /> <p>Top Artists</p>
            </div>
            <div
              className="flex items-center gap-4 text-lg text-gray-400 cursor-pointer liked"
              onClick={() => {
                !user && dispatch(SHOW_MODAL());
              }}
            >
              <AiOutlineBarChart className="text-3xl" /> <p>Top Charts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-end pt-2 pl-2">
        <div className="flex gap-1 items-center justify-between text-lg font-bold px-2 mb-4">
          {!user ? (
            <>
              <button className="text-black bg-white border-none rounded-3xl px-6 py-2 whitespace-nowrap hover:scale-105 ">
                <Link href="/auth/login">Log in</Link>
              </button>
              <button className="text-white border-none rounded-3xl px-6 py-2 whitespace-nowrap hover:scale-105 ">
                <Link href="/auth/signup">Sign up</Link>
              </button>
            </>
          ) : (
            <div className="text-[15px] bg-gray-700 rounded-2xl pr-1 gap-2 flex items-center justify-center relative shadow-lg">
              <img
                src={user?.photoURL || "/img/user.png"}
                alt="userImg"
                className="w-[40px] h-[40px] rounded-full cursor-pointer whitespace-nowrap"
              />
              <p>{user?.displayName}</p>
              <AiFillCaretDown
                className="text-2xl text-red-400 ml-1 cursor-pointer"
                onClick={() => {
                  signOut(auth).then(() => {
                    router.push("/auth/login");
                  });
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
