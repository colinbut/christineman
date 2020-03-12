import React, { useContext } from 'react'
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
import DataContext from '../state/DataContext'
import { useRouteMatch, NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    media: {
        // height: 354.38
        minHeight: 500.38
    }
})


const Project = () => {
    const context = useContext(DataContext)
    let { url } = useRouteMatch();
    
    let projectId = url.slice(url.length - 1)
    let projects = context.projects.projectList
    let projectClicked = {}

    for (let projectIndex in projects) {
        let project = projects[projectIndex]
        if (project.id == projectId) {
            projectClicked = project
        }
    }
    console.log(projectClicked)

    const classes = useStyles()

    const projectNavData = {
        projects: projects,
        clickedProjectId: parseInt(projectId)
    }
    
    return (
        <div>
            <h1>{projectClicked.title}</h1>
            <p>{projectClicked.summary}</p>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card square={true}>
                        <CardActionArea>
                            <ProjectGallery images={projectClicked.gallery} classes={classes} />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <p>{projectClicked.closing_note}</p>
            <ProjectNavigation data={projectNavData} />
            <Footer/>
        </div>
    )
}

const ProjectGallery = (props) => {
    return (
        props.images.map((item, key) =>
            <CardMedia className={props.classes.media} image={process.env.PUBLIC_URL + "/img/" + item}/>
        )
    )
}


const ProjectNavigation = (props) => {
    let projects = props.data.projects
    let clickedProjectId = props.data.clickedProjectId
    let numberOfProjects = projects.length
    let previousProjectId = clickedProjectId - 1 
    let nextProjectId = clickedProjectId + 1
    return (
        <div id="project-catalog-nav">
            {previousProjectId !== 0 && 
                <NavLink to={`/projects/${previousProjectId}`}>
                    // this is clearly a hack!
                    <ArrowButton buttonText={projects[previousProjectId - 1].link_title} ArrowButton={<PreviousArrow/>} />
                </NavLink>
            }
            {nextProjectId <= numberOfProjects && 
                <NavLink to={`/projects/${nextProjectId}`}>
                    <ArrowButton buttonText={projects[nextProjectId - 1].link_title} ArrowButton={<NextArrow/>} />
                </NavLink>
            }
        </div>
    )
}

export default Project