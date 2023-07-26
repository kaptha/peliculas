import React from 'react'
//import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carta from '../components/Carta';

export default function Peliculas() {
  
  return (
    <Container fluid>
    <div className='peliculas'>
      <div className='titulo-peliculas'>
        <center>
          <h5>
        Lo mejor en VHS y BETA <Badge bg="secondary">Nuevas</Badge>
        </h5>
        <h2>
        Cine de arte de todo el Mundo!!
        </h2>
        </center>
        
      </div>
     
        <Row>
          <Col><Button className='redondo' variant="outline-primary">Europa</Button></Col>
          <Col><Button className='redondo' variant="outline-primary">Americano</Button></Col>
          <Col><Button className='redondo' variant="outline-primary">Asia</Button></Col>
          <Col><Button className='redondo' variant="outline-primary">Oceania</Button></Col>         
          
        </Row>
       
          <Carta></Carta>
            
          
     
          
         
          
    </div>
    </Container>
  )
}
