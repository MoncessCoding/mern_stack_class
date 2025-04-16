import {useState}  from 'react'

const Product = (props) => {

//  Destructure
    const {productName, price, description, inStock} = props

//       ....getter............setter
    const [allInStock, setAllInStock] = useState(inStock)

    console.log("This getter",allInStock)
    // console.log('This is setter', setAllInStock(allInStock - 5))

    const h1Alert = () => {
        alert("You clicked on the event")
    }

  return (
    <div>
        <button onClick = {(event) => alert("This button is clicked")}>Click</button>
        <h1 onClick={h1Alert}>This is Product Component</h1>
        <h1>{productName}</h1>
        <h2>${price}</h2>
        <h2>{description}</h2>
        {/* <h3>In stock: {inStock}</h3> */}
        <h3>In stock: {allInStock}</h3>
        <button onClick={ (event) => setAllInStock(allInStock - 1)}>Buy {productName}</button>
    </div>
  )
}

export default Product