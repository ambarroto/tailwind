export default function CheckColumn () {
    function tableInteract(element) {
        var single = element.target.parentElement.parentElement;
        single.classList.toggle("bg-gray-100");
        single.classList.toggle("dark:bg-gray-700");
    }

    return (
        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
            <input placeholder="check box" onClick={ (e) => tableInteract(e) } type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:outline-none focus:ring-2  focus:ring-gray-400" />
        </td>
    )
}