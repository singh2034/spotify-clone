import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      {/* Home & Search Icon */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-5" src={assets.home_icon} alt="home-icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-5" src={assets.search_icon} alt="search-icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      {/* Library section */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-7" src={assets.stack_icon} alt="stack-icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4" src={assets.arrow_icon} alt="arrow-icon" />
            <img className="w-4" src={assets.plus_icon} alt="arrow-icon" />
          </div>
        </div>
        {/* create playlist section */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4">
          <h1 className="font-medium">Create Your First Playlist</h1>
          <p className="font-light">it&apos;s easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1 className="font-medium">
            let&apos;s find some podcast to follow
          </h1>
          <p className="font-light">
            we&apos;ll keep you update on new episodes
          </p>
          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
