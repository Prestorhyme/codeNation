import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <h1>Picture ID's</h1>
                <ul>
                    
                    <li>{this.props.link1}</li>
                    <li>{this.props.link2}</li>
                    <li>{this.props.link3}</li>
                    <li>{this.props.pages}</li>
                </ul>
            </nav>
        )
    }
}
