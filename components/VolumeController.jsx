import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VolumeController = ({ muted, setMuted, setVolume, volume }) => {
  return (
    <div className="flex items-center gap-1">
      {!muted ? (
        <FaVolumeUp
          className="mb-[0.15rem] cursor-pointer"
          onClick={() => setMuted(true)}
        />
      ) : (
        <FaVolumeMute
          className="mb-[0.15rem] cursor-pointer"
          onClick={() => setMuted(false)}
        />
      )}
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  );
};

export default VolumeController;
