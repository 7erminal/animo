import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

type Props = {
  scrollToView_: (type_: string)=>void
}

const Header: React.FC<Props> = ({scrollToView_}) => {

    return <header id="header">
        <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home"><img src='/images/logo.jpeg' width='40px' height='40px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" onClick={()=>scrollToView_('interest_daily')} style={{color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="#link" onClick={()=>scrollToView_('about')} style={{color: 'white'}}>About</Nav.Link>
            <Nav.Link href="#link" onClick={()=>scrollToView_('features')} style={{color: 'white'}}>Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
}

export default Header;