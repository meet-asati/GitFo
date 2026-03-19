function Footer() {
    return (
        <div className="flex flex-col gap-10 justify-evenly items-center bg-[#222222] rounded-3xl shadow-2xl p-8">
            <h1 className="text-white text-6xl">GitFo</h1>
            <div className="flex gap-50">
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-2xl">Frameworks</h3>
                    <div>
                        <h4 className="text-[#8C8C8C]">React.js</h4>
                        <h4 className="text-[#8C8C8C]">Express.js</h4>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-2xl">Connect With me</h3>
                    <div>
                        <h4 className="text-[#8C8C8C]">GitHub</h4>
                        <h4 className="text-[#8C8C8C]">LinkedIn</h4>
                        <h4 className="text-[#8C8C8C]">Instagram</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;