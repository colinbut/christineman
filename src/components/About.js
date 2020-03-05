import React from 'react'
import '../css/index.css';
import Footer from './Footer'
import Grid from '@material-ui/core/Grid'
import data from '../config/static.json'

export default function About() {
    const about = data.about
    return (
        <div className="about-page-container-wrapper">
            <h1>{about.heading}</h1>
            <p><em>{about.subHeading}</em></p>
            <p>{about.summary}</p>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <h2>Services</h2>
                    <p>{about.services}</p>
                </Grid>
                <Grid item xs={6}>
                    <h2>Clients</h2>
                    <p>{about.clients}</p>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}