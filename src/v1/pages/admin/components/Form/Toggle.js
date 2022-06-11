/**
 * 
 * @param {Object} props
 * @param {Function} props.onChange
 * @param {Boolean} props.value
 * @returns 
 */
export default function Toggle (props) {
    return (
        <div>
            <label className="relative inline-block w-11 h-6 mt-7">
                <input type="checkbox" checked={ props.value ? true : false } value={ props.value } onChange={ (e) => props.onChange(e) } className="opacity-0 width-0 heigth-0" name={ props.name } />
                <span className="slider round absolute cursor-pointer inset-0 bg-gray-400 rounded-xl"></span>
                <style>
                    {`
                        .slider {
                            -webkit-transition: .2s;
                            transition: .2s;
                        }

                        .slider:before {
                            position: absolute;
                            content: "";
                            height: 18px;
                            width: 18px;
                            left: 4px;
                            bottom: 4px;
                            background-color: white;
                            -webkit-transition: .2s;
                            transition: .2s;
                        }

                        input:checked + .slider {
                            background-color: #2196F3;
                        }

                        input:focus + .slider {
                            box-shadow: 0 0 1px #2196F3;
                        }

                        input:checked + .slider:before {
                            -webkit-transform: translateX(18px);
                            -ms-transform: translateX(18px);
                            transform: translateX(18px);
                        }

                        .slider.round:before {
                            border-radius: 50%;
                        }
                    `}
                </style>
            </label>
        </div>
    )
}