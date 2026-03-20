import { useNavigate } from "react-router-dom";


function HeroSection() {

    const navigate = useNavigate();

    function handleButton() {
        navigate(`/signup`)
    }

    return (
        <div className="flex flex-col gap-20 items-center bg-black rounded-2xl h-120 p-10">
            <div className="flex flex-col gap-10 p-10 text-center">
                <h1 className="text-white text-3xl">Decode Your Repositories. Drive Better Development.</h1>
                <h2 className="text-2xl text-[#8C8C8C]">GitFo transforms raw GitHub data into actionable insights. Track contributor impact, visualize repository health, and optimize your workflow with a single, powerful dashboard.</h2>
            </div>
            <button onClick={handleButton} className="text-white text-4xl bg-[#2C2C2C] p-6 border-white border-2 rounded-4xl">Start Decoding</button>
        </div>
    )
}

export default HeroSection;