import { useSelector } from "react-redux";
import { selectIsPlaying, selectActiveSong } from "../redux/slice/songSlice";
import { BiShuffle, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import { MdOutlineRestartAlt } from "react-icons/md";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Link from "next/link";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  RESTART_SONG,
  PAUSE_SONG,
  selectShuffle,
  UPDATE_SHUFFLE,
  PREV_SONG,
  NEXT_SONG,
  SHUFFLE_SONG,
  SONG_ENDED,
} from "../redux/slice/songSlice";

const Player = () => {
  const isPlaying = useSelector(selectIsPlaying);
  const activeSong = useSelector(selectActiveSong);
  const shuffle = useSelector(selectShuffle);
  const ref = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    }
    if (!isPlaying) {
      ref?.current.pause();
    }
  }, [isPlaying, activeSong, dispatch]);

  // Volume change
  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  return (
    <div className="bg-[rgb(20,20,22)] z-50 sm:left-24 md:left-56 fixed bottom-0 left-0 right-0 text-white">
      <div className="flex item-center py-4 px-1 sm:px-8 justify-between">
        <div className="hidden lg:flex items-center gap-2 w-[300px]">
          <img
            src={
              activeSong?.images?.coverart ||
              activeSong?.images?.background ||
              activeSong?.images?.coverarthq
            }
            alt="poster"
            className={`rounded-full  h-14 w-14 ${isPlaying && "rotating"}`}
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
              {activeSong?.share?.subject?.length < 35
                ? activeSong?.share?.subject
                : activeSong?.share?.subject?.slice(0, 30) + "..."}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center text-xl mb-2">
          <MdOutlineRestartAlt
            className="cursor-pointer"
            onClick={() => (ref.current.currentTime = 0)}
          />
          <BiSkipPrevious
            className="cursor-pointer"
            onClick={() => {
              !shuffle ? dispatch(PREV_SONG()) : dispatch(SHUFFLE_SONG());
            }}
          />
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

          <BiSkipNext
            className="cursor-pointer"
            onClick={() => {
              !shuffle ? dispatch(NEXT_SONG()) : dispatch(SHUFFLE_SONG());
            }}
          />
          <BiShuffle
            className={`cursor-pointer ${shuffle && "text-green-400"}`}
            onClick={() => dispatch(UPDATE_SHUFFLE())}
          />
        </div>

        <div className="flex items-center gap-1">
          {!muted ? (
            <FaVolumeUp
              className="mb-[0.15rem] cursor-pointer"
              onClick={() => setMuted(true)}
            />
          ) : (
            <FaVolumeMute
              className="mb-[0.15rem] cursor-pointer"
              onClick={() => setMuted(false)}
            />
          )}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
      </div>
      <audio
        muted={muted}
        onEnded={() => {
          dispatch(SONG_ENDED());
        }}
        src={
          activeSong?.hub?.actions
            ? activeSong?.hub?.actions[1]?.uri
            : `/audio/defaultAudio.mp3`
        }
        ref={ref}
      />
    </div>
  );
};

export default Player;
