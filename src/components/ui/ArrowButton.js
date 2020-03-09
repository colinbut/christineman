import React from 'react'
import Grid from '@material-ui/core/Grid'
import '../../css/index.css'

const ArrowButton = (props) => {
    const { buttonText, ArrowButton } = props
    return (
        <div className="arrow-button">
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <p className="arrow-button-text">{ buttonText }</p>
                </Grid>
                <Grid item xs={6}>
                    { ArrowButton }        
                </Grid>
            </Grid>
        </div>
    )
}

export default ArrowButton