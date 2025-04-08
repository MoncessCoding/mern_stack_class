import React from 'react'

const Product = (props) => {

    // console.log(props)
    //Destructure
    const {productName, description, cost} = props

  return (
    <div>
        <h1>Product Component</h1>
        <h2>{productName}</h2>
        <p>Description: {description}</p>
        <p>Cost: ${cost}</p>
    </div>
  )

}

export default Product