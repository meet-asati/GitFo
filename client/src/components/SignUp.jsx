import gitHubLogo from '../assets/github-logo.png'

function SignUp() {
    return (
        <div className="flex flex-col items-center h-100 w-full p-10">
            <div className="flex flex-col gap-10 justify-center items-center  h-100 w-100 rounded-2xl p-10 bg-[#1A1A1A] border-2 border-[#737373]">
                <h2 className="text-4xl font-bold text-white text-center">Let’s create your account</h2>
                <button className="flex gap-4 justify-center h-12 w-72 bg-[#2C2C2C] align-middle rounded-xl text-xl text-white p-2">
                    <img src={gitHubLogo} alt="" />
                    Continue with GitHub
                </button>
            </div>
        </div>
    )
}

export default SignUp