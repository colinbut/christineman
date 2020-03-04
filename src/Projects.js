import React from 'react'
import './index.css';
import { Link, useRouteMatch } from 'react-router-dom'


export default function Projects() {

    let { url } = useRouteMatch();
    console.log(url);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                <li>
                    <Link to={`${url}/project1`}>Project 1</Link>
                </li>
                <li>
                    <Link to={`${url}/project2`}>Project 2</Link>
                </li>
                <li>
                    <Link to={`${url}/project3`}>Project 3</Link>
                </li>
            </ul>
        </div>
    )
}