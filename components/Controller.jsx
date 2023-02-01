import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsFillPauseFill, BsPlayFill } from "react-icons/bs";
import { MdOutlineRestartAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  NEXT_SONG,
  PAUSE_SONG,
  PREV_SONG,
  RESTART_SONG,
  selectIsPlaying,
  SHUFFLE_SONG,
  UPDATE_SHUFFLE,
  selectShuffle,
} from "../redux/slice/songSlice";

const Controller = ({ refValue }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  const shuffle = useSelector(selectShuffle);

  return (
    <div className="flex items-center gap-4 justify-center text-xl mb-2">
      <MdOutlineRestartAlt
        className="cursor-pointer"
        onClick={() => (refValue.current.currentTime = 0)}
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
  );
};

export default Controller;
