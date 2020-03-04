import React from 'react'
import './css/index.css';
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'

export default function Application() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
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


