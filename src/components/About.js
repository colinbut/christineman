import React from 'react'
import '../css/index.css';
import Footer from './Footer'
import Grid from '@material-ui/core/Grid'

export default function About() {
    return (
        <div className="about-page-container-wrapper">
            <h1>UI & UX Designer</h1>
            <p><em>based in London and Hong Kong</em></p>
            <p>
                I am enthusiastic and passionate about Design Thinking Process. I love
                working with different clients because there are so many unknown challenges 
                which keeps me motivated and stay curious. I enjoy creating meaningful and 
                delightful digital products through the use of design.
            </p>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <h2>Services</h2>
                    <p>
                        Web Design / Mobile Design / Interactive Prototyping
                        / User Interface / UX Design / Visual Design / Design Research /
                        Interactive Prototyping / Video Editing
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <h2>Clients</h2>
                    <p>
                        HKPC Academy / Being Sent Travel / TBM The Beauty Medical /
                        Beng Seng / Harbour City / apm
                    </p>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}