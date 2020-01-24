import React from 'react'

export default function Picture(props) {

    return (
        <div className="Picture">
            <img src={props.image} alt="profile image"/>
            <div className="details">
                <h1>Name: {props.name}</h1>
                <h3>Ranking: {props.rank}</h3>
                <h4>Review: {props.review}</h4>
            </div>
        </div>
    )

}
