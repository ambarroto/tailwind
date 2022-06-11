import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAccessToken from "../../hooks/useAccessToken";
import MobileSidebar from "./components/MobileSidebar";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

export default function Index() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const accessToken = useAccessToken()

    useEffect(() => {
        if (!accessToken) navigate('/v1/login', { replace: true })
    }, [accessToken, navigate])

    return (
        <>
            <div className="w-full h-full bg-gray-200">
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <Sidebar />
                    {/*Mobile responsive sidebar*/}
                    <MobileSidebar show={show} setShow={setShow} />
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
                    <div className="w-full min-h-screen">
                        {/* Navigation starts */}
                        <Navigation show={show} setShow={setShow} />
                        {/* Navigation ends */}
                        {/* Remove class [ h-64 ] when adding a card block */}
                        <div className="container mx-auto md:mx-10 py-10 h-auto md:w-auto w-11/12">
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                            <div className="w-full h-auto rounded border-dashed border-2 border-gray-300">
                                {/* Place your content here */}
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
