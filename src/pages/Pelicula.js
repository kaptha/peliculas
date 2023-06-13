import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import imagen from '../images/mexico_2000.jpg';
import Footer from '../components/Footer';
import axios from 'axios';
export default function Pelicula(_id) {
  const { id } = useParams();
  const [dato, setDato] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5500/peliculas/${id}`);     
      setDato(response.data.pelicula);
    } catch (error) {
      console.error('Error al obtener el dato:', error);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <div className='pelicula'>
            
              {!dato ? 'Cargando' :
                <div className='glass-peli'>
                  <Container>
                  <Row>
                    
                     <Col><Image src={dato.foto}></Image></Col>
                     <Col>
                       <h5>{dato.titulo}</h5>
                       <h5>{dato.Duracion}</h5>
                       <h5>{dato.director}</h5>
                       <h5>{dato.pais}</h5>
                       <Button className='redondo' variant="outline-warning" onClick={handleShow}>Ver trailer</Button>
                       <Button className='redondo' variant="outline-danger">Regresar</Button>
                       <Button className='redondo' variant="success">Agregar al carrito</Button>
                     </Col>
                  </Row>
                    
                  <Row>
                      <Col>
                      <h4>Sinopsis</h4>
                      <p>{dato.sinopsis}</p>
                      </Col>
                  </Row>
              </Container>
              <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <video controls>
      <source src={dato.link} type="video/*" />
      Tu navegador no soporta la reproducción de video.
      </video>
      </Modal.Body>
      <Modal.Footer>
        <Button className='redondo' variant="outline-primary" onClick={handleClose}>
          Cerrar
        </Button>          
      </Modal.Footer>
    </Modal>
    </div>
  }
                
            
       </div>
       <Footer></Footer>
    </div>
  )
}
