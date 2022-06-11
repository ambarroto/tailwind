import { useNavigate } from "react-router-dom";

export default function FunctionButtton () {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto w-11/12 xl:w-full px-4">
            <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4" onClick={ () => navigate(-1) } type="button">Cancel</button>
                <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                    Save
                </button>
            </div>
        </div>
    )
}