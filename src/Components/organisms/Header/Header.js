import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
class Header extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >Covid19</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
           <Nav>
            <Nav.Item>
                <Nav.Link><Link to="/assessment">assessment</Link></Nav.Link>
            </Nav.Item>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    }
}
export default Header;