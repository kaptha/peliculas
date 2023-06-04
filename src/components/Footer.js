import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logouno from '../images/bbv.png';

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
      <Row>
        <Col>
        <img className="logo" src={logouno}></img>
        <ul>
          <img className='mapa'></img>
          <li>TERRACE VIEW BLVD</li>
          <li>OREGON, IL - Illinois</li>
        </ul>
        </Col>
        <Col>
        <h5>Links</h5>
        <ul>
          <li>Peliculas Europeas</li>
          <li>Peliculas America</li>
          <li>Peliculas Asiaticas</li>
        </ul>
        </Col>
        <Col>
        <h5>Siguenos</h5>
        <ul>
          <li><img className='face'></img></li>
          <li><img className='ins'></img></li>
          <li><img className='tw'></img></li>
        </ul>
        </Col>
      </Row>      
    </Container>
    </div>
  )
}

