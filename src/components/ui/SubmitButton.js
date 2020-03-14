import React from 'react'

const SubmitButton = (props) => {
    let buttonText = props.buttonText
    let submitForm = props.submitForm
    return (
        <div className="submit-button" onClick={submitForm}>
            { buttonText }
        </div>
    )
}

export default SubmitButton