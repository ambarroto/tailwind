import React from "react";
import Icon from "./Icon";
import Menu from "./Menu";

export default function Sidebar () {
    return (
        <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
            <div className="h-16 w-full flex items-center px-8">
                <Icon />
            </div>
            <Menu />
        </div>
    )
}