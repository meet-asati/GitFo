import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Login from "../components/Login"

function LoginPage() {
    return (
        <div className="flex flex-col justify-center bg-[#181818] min-h-screen">
            <div className="flex flex-col gap-20 h-full mx-48 my-10">
                <NavBar />
                <Login />
                <Footer />
            </div>
        </div>
    )
}

export default LoginPage