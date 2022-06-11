/**
 * 
 * @param {Object} props 
 * @param {Number} props.id
 * @param {Function} props.delete
 * @returns 
 */
export default function ActionColumn (props) {
    function dropdownFunction(element) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        let list = element.target.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
        for (i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i] !== list) dropdowns[i].classList.add("hidden");
        }
        list.classList.toggle("hidden");
    }
    return (
        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
            <button onClick={ (e) => dropdownFunction(e) } aria-label="dropdown" className="dropbtn text-gray-500 rounded cursor-pointer border border-transparent  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg9.svg" alt="dropdown"/>
            </button>
            <div className="dropdown-content mt-1 absolute right-4 sm:right-auto -ml-12 shadow-md z-10 hidden w-32">
                <ul className="bg-white shadow rounded py-1">
                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal" onClick={ () => props.delete(props.id) }>Delete</li>
                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                </ul>
            </div>
        </td>
    )
}