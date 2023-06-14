import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from 'react-router-dom';
import logouno from '../images/bbv.png';
import cart from '../images/carrito.png';
import el from '../images/eliminar.png';
function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
            <Nav.Link as={Link} to="/Profile">Perfil</Nav.Link>           
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Login">Iniciar Sesion</Nav.Link>
            <Nav.Link onClick={handleShow}>
            <img className="cart-logo" src={cart}></img>  
                   
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    <section>
       <Outlet></Outlet>
    </section>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compra</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Container>
          <Row className='espacio'>
            <Col><Image src="holder.js/171x180" rounded /></Col>
            <Col><h6>Pelicula</h6></Col>
            <Col><h6>$154</h6></Col>
            <Col><a href="#"><img src={el}></img></a></Col>
          </Row>
          <Row className='espacio'>
            <Col>Total</Col>
            <Col></Col>
            <Col>$154</Col>
            <Col><Button className="redondo" variant="outline-success" as={Link} to="/CheckOut">Pagar</Button></Col>
          </Row>
         </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    
  );
}

export default NavBar;