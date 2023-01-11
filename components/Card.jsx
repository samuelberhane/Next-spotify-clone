import Image from "next/legacy/image";

const Card = ({ data }) => {
  const { image, text, title } = data;
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="p-4 w-52 px-3 py-3 shadow bg-[#161a1a] rounded-lg">
        <div className="relative h-44 w-full">
          <Image
            src={image}
            alt="poster"
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="w-full mt-2">
          <p className="font-bold text-xl">{title}</p>
          <p className="mt-1 text-gray-300">
            {text.length < 40 ? text : text.slice(0, 40) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
