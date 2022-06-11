/**
 * 
 * @param {Object} props 
 * @param {String} props.message
 * @returns 
 */
export default function ErrorMessage (props) {
    return (
        <div className="flex justify-between items-center pt-1 text-red-400">
            <p className="text-xs">
                { props.message ? props.message : 'Something went wrong' }
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                <circle cx={12} cy={12} r={10} />
                <line x1={15} y1={9} x2={9} y2={15} />
                <line x1={9} y1={9} x2={15} y2={15} />
            </svg>
        </div>
    )
}