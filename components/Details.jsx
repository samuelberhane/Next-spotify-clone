import Image from "next/legacy/image";
import ReactPlayer from "react-player";

const Details = ({ songDetails }) => {
  return (
    <div className="absolute top-16 left-0 right-0 py-4 sm:pb-20 sm:left-24 md:left-56 px-4  bg-[#1e2427] text-white min-h-screen">
      <div>
        <div className="playerWrapper">
          {songDetails?.sections && (
            <ReactPlayer
              url={songDetails?.sections[2]?.youtubeurl?.actions[0]?.uri}
              height="100%"
              width="100%"
              controls={true}
              loop={true}
              className="reactPlayer"
            />
          )}
        </div>

        <div className="mt-4">
          {songDetails?.images && (
            <div className="p-4 px-3 py-3 rounded-lg  overflow-y-hidden relative flex w-full gap-4 shadow-md">
              <div className="relative h-44 w-[250px]  group">
                <Image
                  src={
                    songDetails?.images?.coverart ||
                    songDetails?.images?.background ||
                    songDetails?.images?.coverarthq
                  }
                  alt="poster"
                  layout="fill"
                  className="rounded-md"
                />
              </div>

              <div className="w-full mt-2">
                <p className="font-bold text-xl block">{songDetails?.title}</p>
                <p className="mt-1 text-gray-300">{songDetails?.subtitle}</p>
              </div>
            </div>
          )}

          <h1 className="font-bold text-2xl mb-2 text-green-400 mt-4">
            Lyrics
          </h1>
          <div className="pl-6 font-light">
            {songDetails?.sections &&
              songDetails?.sections[1]?.text?.map((lyric, index) => (
                <p key={index} className="text-white">
                  {lyric}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
