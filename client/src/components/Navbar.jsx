function NavBar() {
    return (
        <div className="flex flex-row justify-between items-center bg-[#222222] h-16 rounded-2xl shadow-2xl px-8">
            <h1 className="text-white text-3xl font-bold">GitFo</h1>
            <div className="flex flex-row gap-10 ">
                <button className="bg-[#151515] py-2 px-5 rounded-lg text-white text-lg shadow-inner">Login</button>
                <button className="bg-white py-2 px-5 rounded-lg text-lg">Sign Up</button>
            </div>
        </div>
    )
}

export default NavBar;