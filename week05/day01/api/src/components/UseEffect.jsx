import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)



// Pass 2 arguments -  callback function and dependency array (controls when the effect runs)
    useEffect(() => {
        alert("THIS IS USEEFFECT")
        // console.log("UseEffect is running")
    }, [count])

  return (
    <div>
        <h1>This is UseEffect Component</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  )
}

export default UseEffect