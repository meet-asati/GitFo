import Footer from "../components/Footer"
import NavBar from "../components/Navbar"
import SignUp from "../components/SignUp"

function SignUpPage() {
    return (
        <div className="flex flex-col gap-20 h-full mx-48 my-10">
            <NavBar />
            <SignUp />
            <Footer />
        </div>
    )
}

export default SignUpPage