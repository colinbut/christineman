import React from 'react'
import '../css/index.css';
import Footer from './Footer'
import Grid from '@material-ui/core/Grid'
import data from '../config/about.json'

export default function About() {
    return (
        <div className="about-page-container-wrapper">
            <h1>{data.heading}</h1>
            <p><em>{data.subHeading}</em></p>
            <p>{data.summary}</p>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <h2>Services</h2>
                    <p>{data.services}</p>
                </Grid>
                <Grid item xs={6}>
                    <h2>Clients</h2>
                    <p>{data.clients}</p>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}