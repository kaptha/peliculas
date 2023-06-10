import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import logouno from '../images/bbv.png';
import cart from '../images/carrito.png';

function NavBar() {
  
  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo" src={logouno}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Features</Nav.Link>
            <Nav.Link as={Link} to="/Address">Direcciones</Nav.Link>
            <Nav.Link as={Link} to="/Register">Reg</Nav.Link>
            <Nav.Link as={Link} to="/Pelicula">Peli</Nav.Link>           
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Login">Iniciar Sesion</Nav.Link>
            <Nav.Link as={Link} to="/CheckOut">
            <img className="cart-logo" src={cart}></img>  
                   
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    <section>
       <Outlet></Outlet>
    </section>
    </>
    
  );
}

export default NavBar;