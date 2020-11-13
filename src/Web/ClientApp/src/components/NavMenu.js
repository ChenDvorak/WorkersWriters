import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Link to="/">Workers Writers</Link>
                <p />
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
                <Link to='/login'>Login</Link>
            </header>
        );
    }
}
