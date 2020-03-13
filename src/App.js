import React, { useContext } from 'react'
import './css/index.css';
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import MyProvider from './state/MyProvider'
import DataContext from './state/DataContext'
import ScrollToTop from 'react-router-scroll-top'

export default function Application() {
    return (
        <MyProvider>
            <Router>
                <ScrollToTop>
                <div className="container">
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
                </div>
                </ScrollToTop>
            </Router>
        </MyProvider>
    )
}

const AnnouncementHeader = () => {
    return (
        <div id="announcement-header" className="announcement-header">
            <Grid container spacing={10} justify="flex-end">
                <Grid item xs={9}>
                    <SiteHeader />
                </Grid>
                <Grid item xs={3}>
                    <NavMenu />
                </Grid>
            </Grid>
        </div>
    )
}

const SiteHeader = () => {
    const context = useContext(DataContext)
    return (
        <div>
            <NavLink to="/" className="site-title">{context.homepage.site_title}</NavLink>
        </div>
    )
}

const NavMenu = () => {
    return (
        <div className="nav">
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <NavLink to="/projects" activeClassName="active">Projects</NavLink>
                </Grid>
                <Grid item xs={4}>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </Grid>
                <Grid item xs={4}>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </Grid>
            </Grid>
        </div>
    )
}


