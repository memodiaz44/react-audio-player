import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav classsName='navbar nabbar-dark bg-dark navbar-expand-lg'>
                <Link to="/" className='nabvar-brand'>ExcerTracker</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <link to="/" className='nav-link'>Exercises</link>
                        </li>
                        <li className='navbar-item'>
                            <Link to="/create" className='nav-link'>Create Exercise log</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to="/user" className='nav-link'>Create user</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}