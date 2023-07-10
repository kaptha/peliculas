import React, { useState, useContext } from 'react';
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
import { UserContext } from '../contexts/UserContext';
import { ShopContext } from '../contexts/ShopContext';
function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useContext(UserContext);
  const { id } = user || {};
  //const { cartShop } = useContext(ShopContext); 
  //console.log(cartShop, "aui carrito");
  //console.log(id);
  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo" src={logouno}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {id && (<>
                <Nav.Link as={Link} to="/Address">Direcciones</Nav.Link>
                <Nav.Link as={Link} to="/Profile">Perfil</Nav.Link>
              </>)}
          </Nav>
          <Nav>
            {!id && (<>
            <Nav.Link as={Link} to="/Login">Iniciar Sesion</Nav.Link>
            </>)}            
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
    <Offcanvas className='canva' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h6>Carrito de Compra</h6></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Container>

         
         <Row className='espacio' >
          <Col><Image  rounded /></Col>
          <Col><h6>o</h6></Col>
          <Col><h6>p</h6></Col>
          <Col><a ><img ></img></a></Col>
        </Row>
       
          <Row className='espacio'>
            <Col><h6>Total</h6></Col>
            <Col></Col>
            <Col><h6>$155</h6></Col>
            <Col><Button className="redondo" variant="outline-success" as={Link} to="/CheckOut">Pagar</Button></Col>
          </Row>
         </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    
  );
}

export default NavBar;