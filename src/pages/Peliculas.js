import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import mex from '../images/mexico_2000.jpg'
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
        <div>
          <Button variant="outline-primary">Europa</Button>
          <Button variant="outline-primary">Americano</Button>
          <Button variant="outline-primary">Asia</Button>
          <Button variant="outline-primary">Oceania</Button>
        </div>
      </Container>
      
      <Container>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mex} />
      <Card.Body>
        <Card.Title>Titulo peli</Card.Title>
        <Card.Text>
          Año.
        </Card.Text>
        <Card.Text>
          128min.
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
      </Card>
      </Container>
      
     
    </div>
  )
}
