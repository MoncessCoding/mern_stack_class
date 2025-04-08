import React from "react";


//* parent component is a component that calls other component

const ParentComponent = (props) => {
    return (
        <>
            <ChildComponent firstName = {"John"} lastName = {"Wick"}/>
        </>
    )
}

// props = {
//     firstName: "John",
//     lastName: "Wick"
// }



// React will automatically create a Js object named "props"
//

const ChildComponent = (props) => {
    return (
        <p>
            Hello! My Name is {props.firstName} {props.lastName}
        </p>
    )
}