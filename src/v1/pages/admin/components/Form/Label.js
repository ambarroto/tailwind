import { useState } from "react"

/**
 * 
 * @param {Object} props
 * @param {String} props.for
 * @param {String} props.label
 * @param {Boolean} props.error
 * @returns 
 */
export default function Label (props = {for: String, label: String, error: Boolean}) {
    const [normalClass] = useState('text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2')
    const [errorClass] = useState('text-red-800 text-sm font-bold leading-tight tracking-normal mb-2')
    return (
        <label htmlFor={props.for} className={ props.error ? errorClass : normalClass }>{ props.label ? props.label : 'Label' }</label>
    )
}