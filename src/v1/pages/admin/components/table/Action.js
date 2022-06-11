import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/**
 * 
 * @param {Object} props
 * @param {Number} props.pageLength - Number of total pages
 * @param {Number} props.view - Number of total data to be displayed
 * @param {Number} props.totalData - Number of all total data
 * @param {React.SetStateAction} props.setPage - State function to change current page to view
 * @returns 
 */
export default function Action (props) {
    const pageLength = useSelector((state) => state.table.pageLength)
    const totalData = useSelector((state) => state.table.totalData)
    const page = useSelector((state) => state.table.page)
    const from = useSelector((state) => state.table.from)
    const to = useSelector((state) => state.table.to)
    
    function pageView(val) {
        let _temp = page
        if (val) {
            if (_temp === pageLength - 1) {
                _temp = 0
            } else if (_temp > pageLength - 1) {
                _temp = pageLength - 1
            } else  {
                _temp += 1
            }
        } else {
            if (_temp !== 0) {
                _temp -= 1
            } else {
                _temp = pageLength - 1
            }
        }
        props.setPage(_temp)
    }
    
    return (
        <div className="flex bg-white flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
            <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                <div className="flex items-center">
                    <button className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" aria-label="Edit Table">
                        <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg1.svg" alt="Edit"/>
                        <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg1dark.svg" alt="Edit" />
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" aria-label="copy table">
                        <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg4.svg" alt="" />
                        <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg4dark.svg" alt="" />
                    </button>
                    <button className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" aria-label="delete table">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg5.svg" alt="delete" />
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                <div className="flex items-center lg:border-l lg:border-r border-gray-300 py-3 lg:py-0 lg:px-6">
                    <p className="text-base text-gray-600 dark:text-gray-400" id="page-view">
                        Viewing {from} - {to} of {totalData}
                    </p>
                    <button onClick={ () => pageView(false)} className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-gray-500 " aria-label="Goto previous page ">
                        <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg6.svg" alt="" />
                        <img className="dark:block hidden" src="../svgs/svg6dark.svg" alt="" />
                    </button>
                    <button onClick={ () => pageView(true)} className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer" aria-label="goto next page">
                        <img className="transform rotate-180 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg6.svg" alt="" />
                        <img className="transform rotate-180 dark:block hidden" src="../svgs/svg6dark.svg" alt="" />
                    </button>
                </div>

                <div className="lg:ml-6 flex items-center">
                    <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">Download All</button>
                    <Link to={props.add}>
                        <button aria-label="add table" className="text-white ml-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 border border-transparent bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg7.svg" alt="plus"/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}