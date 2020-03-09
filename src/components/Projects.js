import React from 'react'
import '../css/index.css';
import { Link, useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import data from '../config/static.json'

const useStyles = makeStyles({
    root: {
        fontSize: '21px',
        textAlign: 'left'
    },
    media: {
        // height: 354.38
        minHeight: 500.38
    }
})

const Projects = () => {
    const classes = useStyles();
    let { url } = useRouteMatch();
    const projectData = data.projects.projectData
    const projectList = projectData.map((item, key) => 
        <Grid item xs={6}>
            <Link to={`${url}/${item.id}`}>
                <Card square={true}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={process.env.PUBLIC_URL + '/img/' + item.image} title={item.title}/>
                        <CardContent className={classes.root}>
                            { item.name }
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );

    return (
        <div>
            <Grid container spacing={10}>
                { projectList }
            </Grid>
            <Description />
            <Footer />
        </div>
    )
}

const Description = () => {
    return (
        <div>
            <h3 className="description">
                {data.projects.description}
            </h3>
            <div className="link">
            <NavLink to="/contact">
                <p className="description-link">Let's work together.</p>
            </NavLink>
            </div>
        </div>
    )
}

export default Projects