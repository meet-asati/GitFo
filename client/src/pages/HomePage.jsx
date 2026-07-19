import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SideBar from "../components/SideBar";

function HomePage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('token');

        if (token) {
            localStorage.setItem('access_token', token);

            navigate('/home', { replace: true });
        }
    }, [searchParams, navigate]);

    return (
        <div className="bg-[#181818] min-h-screen">
            <SideBar />
        </div>
    )
}

export default HomePage;