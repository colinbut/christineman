import React from 'react'
import './css/index.css';
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'

export default function Application() {
    return (
        <Router>
            <AnnouncementHeader />
            <Switch>
                <Route path="/projects/:id" component={Project}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route exact path="/">
                    <Redirect to="/projects"/>
                </Route>
            </Switch>
        </Router>
    )
}

const AnnouncementHeader = () => {
    return (
        <div id="announcement-header" className="announcement-header">
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <SiteHeader />
                </Grid>
                <Grid item xs={6}>
                    <NavMenu />
                </Grid>
            </Grid>
        </div>
    )
}

const SiteHeader = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

const NavMenu = () => {
    return (
        <div className="nav">
        <ul>
            <li className="nav-menu-item">
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="nav-menu-item">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-menu-item">
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        </div>
    )
}


