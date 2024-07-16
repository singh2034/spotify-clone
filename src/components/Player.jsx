import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time } =
    useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* player image and details */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="song-data-image" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      {/* music player functions */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="shuffle-icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="previous-icon"
          />
          {/* play & pause function */}
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="pause-icon"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="play-icon"
            />
          )}

          <img
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="next-icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="loop-icon"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute} : {time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 w-3 border-none bg-green-800 rounded-full "
            />
          </div>
          <p>
            {time.totalTime.minute} : {time.totalTime.second}
          </p>
        </div>
      </div>
      {/* extra functions right bottom */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} alt="plays-icons" className="w-4" />
        <img src={assets.mic_icon} alt="mic-icons" className="w-4" />
        <img src={assets.queue_icon} alt="queue-icons" className="w-4" />
        <img src={assets.speaker_icon} alt="speaker-icons" className="w-4" />
        <img src={assets.volume_icon} alt="volume-icons" className="w-4" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img
          src={assets.mini_player_icon}
          alt="mini-player-icons"
          className="w-4"
        />
        <img src={assets.zoom_icon} alt="zoom-icons" className="w-4" />
      </div>
    </div>
  );
};

export default Player;
