import React, { useEffect } from 'react'

export default function NewTable (props) {
    function documentClick(event) {
        if (event.target.parentElement && !event.target.parentElement.matches(".dropbtn")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                openDropdown.classList.add("hidden");
            }
        }
    }

    function checkAll(element) {
        let rows = element.target.parentElement.parentElement.parentElement.nextElementSibling.children;
        for (var i = 0; i < rows.length; i++) {
            if (element.target.checked) {
                rows[i].classList.add("bg-gray-100");
                rows[i].classList.add("dark:bg-gray-700");
                let checkbox = rows[i].getElementsByTagName("input")[0];
                if (checkbox) {
                    checkbox.checked = true;
                }
            } else {
                rows[i].classList.remove("bg-gray-100");
                rows[i].classList.remove("dark:bg-gray-700");
                let checkbox = rows[i].getElementsByTagName("input")[0];
                if (checkbox) {
                    checkbox.checked = false;
                }
            }
        }
    }

    useEffect(() => {
        document.addEventListener('click', documentClick)

        return () => {
            document.removeEventListener('click', documentClick);
        }
    })

    return (
        <div className="mx-auto container bg-white dark:bg-gray-800 dark:bg-gray-800 shadow rounded">
            { props.action }
            <div className="w-full overflow-x-auto">
                <table className="w-full border border-gray-300 bg-white overflow-x-auto">
                    <thead>
                        <tr className="border border-gray-300 h-14">
                            <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                <input placeholder="check box" onClick={ (e) => checkAll(e) } type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:outline-none focus:ring-2  focus:ring-gray-400" />
                            </th>
                            { props.columns.map(column => {
                                return (
                                    <th key={ column } className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">{ column }</th>
                                )
                            }) }
                            <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">More</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.children }
                    </tbody>
                </table>
            </div>
        </div>
    );
}