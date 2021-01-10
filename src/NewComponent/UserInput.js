import React from 'react'

const UserInput = (props) => {

    const inputCss = {
        border: "1px solid red",
        width: "50%",
        textAlign: "center",
        alignItems: "center",
        margin: "auto"
    }
    return (
        <div>
            <input  style={inputCss} type="text" onChange={props.change} placeholder="Type here"/>
        </div>
    )
}

export default UserInput;