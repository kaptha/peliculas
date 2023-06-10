import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Carta() {
  return (
    <div>
      <Container fluid>
      <div className='cartas'>
        <Card className='glass-carta'>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>Titulo peli</Card.Title>
        <Card.Text>
          Año.
        </Card.Text>
        <Card.Text>
          Director
        </Card.Text>       
        <Button className='redondo' variant="outline-primary">Ver mas</Button>
      </Card.Body>
        </Card>
        </div>
     </Container>              
    </div>
  )
}
