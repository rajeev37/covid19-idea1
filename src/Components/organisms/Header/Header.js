import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
class Header extends React.Component {
    render() {
        return <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand >Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
    }
}
export default Header;