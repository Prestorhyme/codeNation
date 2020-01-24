import React, {Component} from "react";

class ClearButton extends Component
{
    render()
    {
        return(
        <div className= "ClearButton">
        {this.props.children}
        </div>
        )
    }
}

export default ClearButton;  