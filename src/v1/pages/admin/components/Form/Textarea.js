import { useState } from "react"

/**
 * 
 * @param {object} props
 * @param {String} props.id
 * @param {String} props.placeholder
 * @param {Boolean} props.error
 * @param {Boolean} props.disabled
 * @param {Number} props.rows
 * @param {Function} props.onInput
 * @returns 
 */
export default function Textarea (props) {
    const [normalClass] = useState('text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-full mt-3 flex items-center pl-3 text-sm border-gray-300 rounded border shadow')
    const [errorClass] = useState('text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:border-red-400 dark:focus:border-red-400 dark:border-red-400 placeholder-red-400 bg-white font-normal w-full mt-3 flex items-center pl-3 text-sm border-red-400 rounded border shadow')
    const [disabled] = useState('text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 font-normal w-full mt-3 flex items-center pl-3 text-sm border-gray-300 bg-gray-200 rounded border shadow')
    
    return (
        <textarea disabled={ props.disabled } id={ props.id ? props.id : '' } autoComplete="off" rows={ props.rows ? props.rows : 4 } className={ props.error ? errorClass : props.disabled ? disabled : normalClass } placeholder={ props.placeholder ? props.placeholder : 'Placeholder' } onInput={ (e) => props.onInput(e) } name={ props.name } />
    )
}