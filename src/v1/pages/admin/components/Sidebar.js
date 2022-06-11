import SidebarIcon from "./SidebarIcon";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar () {
    return (
        <div className="absolute lg:relative w-64 h-auto shadow bg-gray-100 hidden lg:block">
            <SidebarIcon padding={'px-8'} />
            <SidebarMenu width={20} height={20} />
        </div>
    )
}