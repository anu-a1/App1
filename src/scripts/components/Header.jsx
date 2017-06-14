import React, {Component} from 'react';
import {Navbar, Nav, Button, FormControl} from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import NavItemLink from '../components/NavItemLink';
import LogoIcon from '../../icons/logo.png';


export class Header extends Component {

    static propTypes = {
        menuItems: PropTypes.array.isRequired
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.location.pathname !== this.props.location.pathname;
    }

    render() {
        const {menuItems} = this.props;

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={LogoIcon} alt = "logotype"/>
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <div>
                    <Nav>
                        {
                            menuItems.map((item, index) => (
                                <NavItemLink isDefault={item.isDefault} eventKey={index+1} key={index} to={`/${item.path}`}>
                                    {item.title}
                                </NavItemLink>
                            ))
                        }
                    </Nav>
                </div>

            </Navbar>
        );
    }
}

export default withRouter(Header);