import { useSelector } from "react-redux";
import { selectIsPlaying, selectActiveSong } from "../redux/slice/songSlice";
import { BiShuffle, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import { MdOutlineRestartAlt } from "react-icons/md";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RESTART_SONG, PAUSE_SONG } from "../redux/slice/songSlice";

const Player = () => {
  const isPlaying = useSelector(selectIsPlaying);
  const activeSong = useSelector(selectActiveSong);
  const dispatch = useDispatch();
  console.log("isPlaying", isPlaying);
  console.log("activeSong", activeSong);
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log(ref.current);
      ref.current.play();
    }
    if (!isPlaying) {
      ref?.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="bg-[rgb(20,20,22)] z-50 sm:left-24 md:left-56 fixed bottom-0 left-0 right-0 text-white">
      <div className="flex item-center py-4 px-1 sm:px-8 justify-between">
        <div className="hidden lg:flex items-center gap-2">
          <img
            src={
              activeSong?.images?.coverart ||
              activeSong?.images?.background ||
              activeSong?.images?.coverarthq
            }
            alt="poster"
            className="rounded-full  h-14 w-14"
          />

          <div className="w-full">
            <Link
              href={`/songs/${activeSong?.key}`}
              className="font-bold text-lg block"
            >
              {activeSong?.title?.length < 15
                ? activeSong?.title
                : activeSong?.title?.slice(0, 14) + "..."}
            </Link>
            <Link
              href={
                activeSong?.artists
                  ? `/artists/${activeSong?.artists[0]?.adamid}`
                  : "/"
              }
              className="mt-1 text-sm text-gray-300"
            >
              {activeSong?.share?.subject?.length < 40
                ? activeSong?.share?.subject
                : activeSong?.share?.subject?.slice(0, 38) + "..."}
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 justify-center text-xl mb-2">
            <MdOutlineRestartAlt className="cursor-pointer" />
            <BiSkipPrevious className="cursor-pointer" />
            {isPlaying ? (
              <BsFillPauseFill
                className="text-2xl cursor-pointer"
                onClick={() => dispatch(PAUSE_SONG())}
              />
            ) : (
              <BsPlayFill
                className="text-2xl cursor-pointer"
                onClick={() => dispatch(RESTART_SONG())}
              />
            )}

            <BiSkipNext className="cursor-pointer" />
            <BiShuffle className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm">0:00</p>
            <input type="range" name="" id="" className="vertical" />
            <p className="text-sm">1:40</p>
          </div>
        </div>
        <div className="flex items-end gap-1">
          <FaVolumeUp className="mb-[0.15rem]" />
          <input type="range" name="" id="" className="mb-2" />
        </div>
      </div>
      <audio src={activeSong?.hub?.actions[1]?.uri} ref={ref} loop={true} />
    </div>
  );
};

export default Player;
