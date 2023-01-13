import Link from "next/link";
import { useSelector } from "react-redux";
import {
  selectShowSubmenu,
  selectSubmenuTitle,
  selectSubmenuText,
  selectLocation,
} from "../redux/slice/authSlice";

const Submenu = () => {
  const showSubmenu = useSelector(selectShowSubmenu);
  const title = useSelector(selectSubmenuTitle);
  const text = useSelector(selectSubmenuText);
  const location = Math.round(useSelector(selectLocation));

  return (
    <>
      {showSubmenu && (
        <div
          className={`absolute left-48 ${
            location && "top-[" + location + "px]"
          } z-[60]`}
        >
          <div className="bg-[#06568f] text-white px-5 py-3 w-[300px] rounded">
            <h1 className="font-bold text-lg md:text-xl">{title}</h1>
            <p className="mt-2 mb-4">{text}</p>
            <div className="flex justify-end">
              <Link href="/auth/login">
                <button className="bg-white py-2 px-7 text-bold hover:scale-105 rounded-2xl text-black font-bold">
                  Log in
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute w-[20px] h-[20px] top-2 -left-2 arrow" />
        </div>
      )}
    </>
  );
};

export default Submenu;
