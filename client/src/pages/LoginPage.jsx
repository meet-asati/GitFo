import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Login from "../components/Login"

function LoginPage() {
    return (
        <>
            <div className="flex flex-col gap-20 h-full mx-48 my-10">
                <NavBar />
                <Login />
                <Footer />
            </div>
        </>
    )
}

export default LoginPage