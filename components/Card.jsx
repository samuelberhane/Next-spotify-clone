import Image from "next/legacy/image";
import { useDispatch } from "react-redux";
import { SHOW_MODAL } from "../redux/slice/authSlice";

const Card = ({ data }) => {
  const { image, text, title } = data;
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center justify-center mb-4 cursor-pointer"
      onClick={() => dispatch(SHOW_MODAL())}
    >
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
          <p className="font-bold text-xl">
            {title.length < 19 ? title : title.slice(0, 18) + "..."}
          </p>
          <p className="mt-1 text-gray-300">
            {text.length < 50 ? text : text.slice(0, 47) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
