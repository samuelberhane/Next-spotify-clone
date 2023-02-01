import Image from "next/legacy/image";
import Link from "next/link";

const LoggedCard = ({ playlist }) => {
  const {
    title,
    share: { subject },
    images,
  } = playlist;
  return (
    <>
      {images && (
        <div className="text-white flex items-center justify-center mb-4 cursor-pointer">
          <div className="p-4 w-52 px-3 py-3 shadow bg-[#161a1a] rounded-lg h-[285px] overflow-y-hidden">
            <div className="relative h-44 w-full">
              <Image
                src={
                  images?.coverart || images?.background || images?.coverarthq
                }
                alt="poster"
                layout="fill"
                className="rounded-md"
              />
            </div>
            <div className="w-full mt-2">
              <Link
                href={`/songs/${playlist?.key}`}
                className="font-bold text-xl"
              >
                {title.length < 15 ? title : title.slice(0, 14) + "..."}
              </Link>
              <Link
                href={
                  playlist?.artists
                    ? `/artists/${playlist?.artists[0]?.adamid}`
                    : "/"
                }
                className="mt-1 text-gray-300"
              >
                {subject.length < 40 ? subject : subject.slice(0, 38) + "..."}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoggedCard;
