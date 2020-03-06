import React from 'react'
import '../css/index.css';
import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import NextArrow from './ui/NextArrow';
import PreviousArrow from './ui/PreviousArrow'
import ArrowButton from './ui/ArrowButton'

const useStyles = makeStyles({
    media: {
        // height: 354.38
        minHeight: 500.38
    }
})

const Project = (props) => {
    const classes = useStyles();
    const projectData = []

    let _project = {
        id: 0,
        title: "Test"
    }

    return (
        <div>
            <h1>Project Title</h1>
            <p>Project Description</p>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card square={true}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image={_project.image} title={_project.title}/>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <p>Project Closing Note</p>
            <div id="project-catalog-nav">
                {_project.id !== 0 && 
                    <ArrowButton buttonText={_project.title} ArrowButton={<PreviousArrow/>} />
                }
                {_project.id !== projectData.length - 1 && 
                    <ArrowButton buttonText={_project.title} ArrowButton={<NextArrow/>} />
                }
            </div>
            <Footer/>
        </div>
        
    )
}

export default Project