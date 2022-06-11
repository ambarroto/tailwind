import SidebarIcon from "./SidebarIcon";
import SidebarMenu from "./SidebarMenu";

export default function MobileSidebar (props) {
    
    return (
        <div className={props.show ? "w-full h-full fixed z-40  transform  translate-x-0 " : "   w-full h-full fixed z-40  transform -translate-x-full"} id="mobile-nav">
            <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => props.setShow(!props.show) } />
            <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                <div className="flex flex-col justify-between h-full w-full">
                    <div>
                        <div className="flex items-center justify-between px-8">
                            <SidebarIcon />
                            <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => props.setShow(!props.show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                        <SidebarMenu text={'xl:text-base md:text-2xl text-base'} iconPosition={'w-6 h-6 md:w-8 md:h-8'} />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-center mb-4 w-full px-6">
                            <div className="relative w-full">
                                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div className="border-t border-gray-300">
                            <div className="w-full flex items-center justify-between px-6 pt-1">
                                <div className="flex items-center">
                                    <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                    <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                                </div>
                                <ul className="flex">
                                    <li className="cursor-pointer text-white pt-5 pb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                        </svg>
                                    </li>
                                    <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}