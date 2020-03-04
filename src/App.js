import React from 'react'
import './index.css';
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'

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
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
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


