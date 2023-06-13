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
    <div className='peliculas'>
      <div className='titulo-peliculas'>
        <h5>
        Lo mejor en VHS y BETA <Badge bg="secondary">Nuevas</Badge>
        </h5>
        <h2>
        Peliculas de todo el Mundo!!
        </h2>
      </div>
      <Container fluid>
        <Row>
          <Col><Button className='redondo' variant="outline-primary">Europa</Button></Col>
          <Col><Button className='redondo' variant="outline-primary">Americano</Button></Col>
          <Col><Button className='redondo' variant="outline-primary">Asia</Button></Col>
          <Col><Button className='redondo' variant="outline-primary">Oceania</Button></Col>         
          
        </Row>
        <Row>
          <Carta></Carta>
        </Row>       
          
      </Container>
    
          
         
          
    </div>
  )
}
