import React, { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import DailyActivity from "../../Pages/DailyActivities/DailyActivity";
// import Header from "./Header";
import PageHeadings from "../PageHeadings";

export default function Index() {
    const [show, setShow] = useState(false);

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
                    <div className="w-full">
                        {/* Navigation starts */}
                        <Nav show={show} setShow={setShow} />
                        {/* Navigation ends */}
                        {/* Remove class [ h-64 ] when adding a card block */}
                        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12">
                            <PageHeadings />
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                            <div className="w-full h-full rounded">
                                <DailyActivity />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
