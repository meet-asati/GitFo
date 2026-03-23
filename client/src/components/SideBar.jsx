import { BiHomeAlt } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import profileImage from '../assets/profile_image.png';

function SideBar() {
    return (
        <div className="flex flex-col items-center gap-16 h-screen w-1/5 bg-[#222222] p-5 ">
            <h1 className="text-6xl text-white font-bold">GitFo</h1>
            <div className="flex flex-row w-full gap-2">
                <div className="bg-[#1C764D] w-2 h-full rounded-xl"></div>
                <div className="flex items-center gap-2 p-2 bg-[#181818] w-full rounded-lg text-xl text-white">
                    <BiHomeAlt />
                    <p>Home</p>
                </div>
            </div>
            <div className="flex flex-col w-full gap-6">
                <div className="flex justify-between items-center text-[#606060] w-full">
                    <p>Top Repositories</p>
                    <IoSearch />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2 items-center px-2 py-1   hover:bg-[#2d2d2d] hover:rounded-lg cursor-pointer">
                        <img src={profileImage} className="size-4 rounded-full border border-gray-500" />
                        <p className="text-white text-md break-all">user-name/git-hub-clone</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar;