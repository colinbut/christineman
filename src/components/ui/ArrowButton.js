import React from 'react'

const ArrowButton = (props) => {
    const { buttonText, ArrowButton } = props
    return (
        <div>
            <p>{ buttonText }</p>
            { ArrowButton }        
        </div>
    )
}

export default ArrowButton