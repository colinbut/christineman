import React from 'react'

const buttonStyle = {
    width: '110px',
    height: '60px',
    border: '2px solid black',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '60px'
}

const SubmitButton = (props) => {
    let buttonText = props.buttonText
    let submitForm = props.submitForm
    return (
        <div style={buttonStyle} onClick={submitForm}>
            { buttonText }
        </div>
    )
}

export default SubmitButton