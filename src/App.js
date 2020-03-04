import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'

export default function Application() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}