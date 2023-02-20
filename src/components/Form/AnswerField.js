import React from 'react'

export default function AnswerField({ type, options }) {
    const fieldStyle = {
        borderBottom: "dotted 1px grey",
        padding: "5px",
        marginTop: '10px',
        width: '30%',
    }

    function renderSwitch() {
        switch (type) {
            case 'shortAnswer':
                return (
                    <p style={fieldStyle}>Short answer text</p>
                )
            case 'paragraph':
                return (
                    <p style={fieldStyle}>Long answer text</p>
                )

            default:
                return (
                    <p style={fieldStyle}>Default</p>
                )

            // case 'multipleChoice':
            //     return (
            //         <>
            //             <label htmlFor="name1">
            //                 <input disabled type="checkbox" name="name1" value="value1" id='name1' />
            //                 Option 1
            //                 <br />
            //             </label>
            //             <label htmlFor="name2">
            //                 <input disabled type="checkbox" name="name2" value="value1" id='name2' />
            //                 Option 2
            //                 <br />
            //             </label>
            //             <label htmlFor="name3">
            //                 <input disabled type="checkbox" name="name3" value="value1" id='name3' />
            //                 Option 3
            //                 <br />
            //             </label>
            //         </>
            //     )

            // case 'dropdown':
            //     return (
            //         <select>
            //             {options.map(option => {
            //                 return (
            //                     <option value={option}>
            //                         {option}
            //                     </option>
            //                 )
            //             })}
            //         </select>
            //     )

            // case 'date':
            //     return (
            //         <input type="date" />
            //     )

            // case 'time':
            //     return (
            //         <input type="time" />
            //     )


        }
    }

    return (
        <div>{renderSwitch()}</div>
    )
}



