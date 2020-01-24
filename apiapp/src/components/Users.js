import React from 'react'
import Spinner from './Spinner'


export const Users = (props) => {
    if (props.loading) {
        return <Spinner/>
    } else {
        return(
            <div>
                {props.data}
            </div>
        )
    }
}

