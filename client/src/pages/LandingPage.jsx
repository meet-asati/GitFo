import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function LandingPage() {
    return (
        <div className="flex flex-col gap-20 h-full mx-48 my-10">
            <NavBar />
            <HeroSection />
            <Footer />
        </div>
    );
}

export default LandingPage;