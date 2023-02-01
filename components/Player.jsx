import { useSelector } from "react-redux";
import { selectIsPlaying, selectActiveSong } from "../redux/slice/songSlice";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SONG_ENDED } from "../redux/slice/songSlice";
import { CurrentPlaying, Controller, VolumeController } from ".";

const Player = () => {
  const isPlaying = useSelector(selectIsPlaying);
  const activeSong = useSelector(selectActiveSong);
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
        {/* Currently playing song */}
        <CurrentPlaying activeSong={activeSong} />

        {/* Song controller */}
        <Controller refValue={ref} />

        {/* Volume controller */}
        <VolumeController
          setMuted={setMuted}
          setVolume={setVolume}
          muted={muted}
          volume={volume}
        />
      </div>

      {/* Audio player */}
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
