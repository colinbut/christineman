import React from 'react'
import '../css/index.css';
import data from '../config/static.json'

export default function Footer() {
    const copyright = data.copyright
    return (
        <div className="footer">
            <strong>Copyright</strong>
            <p>{copyright.text}</p>
        </div>
    )
}