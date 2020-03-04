import React from 'react'
import './index.css';
import { Link, useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CeramicsImg from './img/ceramics.jpg'
import WatchesImg from './img/watches.jpg'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
    media: {
        // height: 354.38
        minHeight: 354.38
    }
})

const Projects = () => {
    const classes = useStyles();
    let { url } = useRouteMatch();
    console.log(CeramicsImg);

    return (
        <div>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <Link to={`${url}/project1`}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={CeramicsImg} title="Ceramics"/>
                                <CardContent>
                                    HKPC Academy
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to={`${url}/project2`}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={WatchesImg} title="Watches"/>
                                <CardContent>
                                    5 Past Watches
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to={`${url}/project1`}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={CeramicsImg} title="Ceramics"/>
                                <CardContent>
                                    HKPC Academy
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to={`${url}/project2`}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={WatchesImg} title="Watches"/>
                                <CardContent>
                                    5 Past Watches
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to={`${url}/project1`}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={CeramicsImg} title="Ceramics"/>
                                <CardContent>
                                    HKPC Academy
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to={`${url}/project2`}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={WatchesImg} title="Watches"/>
                                <CardContent>
                                    5 Past Watches
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
            <Description />
        </div>
    )
}

function Description() {
    return (
        <div>
            <p>
                Hollie Beaumont is a photographer and art director based in London. She shoots a diverse range of subjects for commercial and editorial clients, all with a clean and elegant aesthetic.
            </p>
        </div>
    )
}

export default Projects