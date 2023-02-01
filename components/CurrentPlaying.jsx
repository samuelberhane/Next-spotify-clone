import Link from "next/link";
import { useSelector } from "react-redux";
import { selectIsPlaying } from "../redux/slice/songSlice";

const CurrentPlaying = ({ activeSong }) => {
  const isPlaying = useSelector(selectIsPlaying);

  return (
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
  );
};

export default CurrentPlaying;
