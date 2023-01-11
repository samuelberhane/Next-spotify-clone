import { Feed } from ".";
import { focusData } from "../focusData";
import { playlistData } from "../playlistData";

const Feeds = () => {
  return (
    <div className="absolute top-16 left-0 right-0 py-4 sm:left-24 md:left-56 px-4  bg-[#1e2427] text-white min-h-screen">
      <Feed title="Focus" datas={focusData} />
      <Feed title="Spotify Playlists" datas={playlistData} />
    </div>
  );
};

export default Feeds;
