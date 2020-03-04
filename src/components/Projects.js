import React from 'react'
import '../css/index.css';
import { Link, useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CeramicsImg from '../img/ceramics.jpg'
import WatchesImg from '../img/watches.jpg'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Footer from '../components/Footer'

const useStyles = makeStyles({
    media: {
        // height: 354.38
        minHeight: 354.38
    }
})

const projectData = [
    {
        id: 1,
        name: "HKPC Academy",
        image: CeramicsImg,
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
        image: CeramicsImg,
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
        image: CeramicsImg,
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
    // console.log(CeramicsImg);

    const projectList = projectData.map((item, key) => 
        <Grid item xs={6}>
            <Link to={`${url}/${item.id}`}>
                <Card square={true}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={item.image} title={item.title}/>
                        <CardContent>
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
            <p>
                Hollie Beaumont is a photographer and art director based in London. She shoots a diverse range of subjects for commercial and editorial clients, all with a clean and elegant aesthetic.
            </p>
        </div>
    )
}

export default Projects