import React, { Component } from 'react'
import {
    Nav,
    NavLink,
    NavItem,
} from 'reactstrap';
import './Nav.css';

class NavBar extends Component {


    goBack = () => {
        this.props.history.goBack()
    };

    render() {
        return (
            <Nav className='nav-bar' color='light'>
                <NavItem onClick={this.goBack} className='back'><i className="fas fa-arrow-left"></i></NavItem>
                <NavItem>
                    <NavLink href='/main' className='home'>Recruitr</NavLink>
                </NavItem>
            </Nav>
        )
    };
};

export default NavBar;