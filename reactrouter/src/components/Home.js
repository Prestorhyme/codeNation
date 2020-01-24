import React from 'react'

const Home = (props) => {
    return (
        <div>
            <h1>This is the home page</h1>
            <h2>PS4 Sale: £{props.sale}</h2>
            <button onClick = {props.toBasket} className = "ps4Button">Add PS4 to Basket</button>
        </div>
    )
}

export default Home;