import React from 'react'

const UserOutput = (props) => {

    return (
        <div>
            <h1>Hello There</h1>
            <p>My Name is <span style={{fontWeight: "bold", color: "blue"}}>{props.name}</span>, and im a React Developer. Nice to know you</p>
        </div>
    )
}

export default UserOutput;