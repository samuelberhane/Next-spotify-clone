import { LoggedCard } from ".";
import { useSelector } from "react-redux";
import { selectIsPlaying, selectActiveSong } from "../redux/slice/songSlice";

const LoggedFeeds = ({ playlists }) => {
  const isPlaying = useSelector(selectIsPlaying);
  const activeSong = useSelector(selectActiveSong);

  return (
    <div
      className={`absolute top-16 left-0 right-0 sm:pb-20 sm:left-24 md:left-56  bg-[#1e2427] text-white min-h-screen`}
    >
      <h1 className="font-bold text-2xl md:text-3xl mb-4 mx-4 mt-3">
        New Releases
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5">
        {playlists?.map((playlist, index) => (
          <LoggedCard
            key={index}
            playlist={playlist}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
};

export default LoggedFeeds;
