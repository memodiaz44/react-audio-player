import { render } from "@testing-library/react";
import '../stylesheets.css/header.css'
import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'

import { Container, FormControl, Navbar, Dropdown, Badge, Nav, Cart } from "react-bootstrap"
const Header = () => {
    return(
        <Navbar className="nav" bg='dark' variant="dark" style={{ height: 80}}>
            <Container className="cool">
                <Navbar.Brand>
                    <a href="/">Shopping cart</a>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500}} 
                    placeholder="Search beat"
                    className="m-auto"></FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown aligRight>
                        <Dropdown.Toggle variant="success">
                            <AiOutlineShoppingCart/>
                            <Badge>{10}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minwidth: 37}}>
                        <span style={{padding: 10}}>Cart is empty!</span>

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>



    )

}

export default Header