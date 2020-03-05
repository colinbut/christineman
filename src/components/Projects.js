import React from 'react'
import '../css/index.css';
import { Link, useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CeramicsImg from '../img/ceramics.jpg'
import WatchesImg from '../img/watches.jpg'
import HKPC from '../img/HKPC.jpeg'
import HKPC_Portfolio from '../img/HKPC_Portfolio.jpeg'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

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

const projectData = [
    {
        id: 1,
        name: "HKPC Academy",
        image: HKPC,
        title: "Ceramics"
    },
    {
        id: 2,
        name: "5 Past Watches",
        image: WatchesImg,
        title: "Watches"
    },
    {
        id: 3,
        name: "HKPC Academy",
        image: HKPC,
        title: "Ceramics"
    },
    {
        id: 4,
        name: "5 Past Watches",
        image: WatchesImg,
        title: "Watches"
    },
    {
        id: 5,
        name: "HKPC Academy",
        image: HKPC,
        title: "Ceramics"
    },
    {
        id: 6,
        name: "5 Past Watches",
        image: WatchesImg,
        title: "Watches"
    }
]

const Projects = () => {
    const classes = useStyles();
    let { url } = useRouteMatch();

    const projectList = projectData.map((item, key) => 
        <Grid item xs={6}>
            <Link to={`${url}/${item.id}`}>
                <Card square={true}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={item.image} title={item.title}/>
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
                Hollie Beaumont is a photographer and art director based in London. 
                She shoots a diverse range of subjects for commercial and editorial clients, all with a clean and elegant 
                aesthetic.
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