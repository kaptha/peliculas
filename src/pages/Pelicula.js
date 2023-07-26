import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import YouTube, { YouTubeProps } from 'react-youtube';
import Footer from '../components/Footer';
import axios from 'axios';
import { ShopContext } from '../contexts/ShopContext';

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
  ////Youtube
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts: YouTubeProps['opts'] = {
    height: '450',
    width: '450',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
 ////Agregar al carrito
  const { addProduct } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div>
       <div className='pelicula'>
            
              {!dato ? 'Cargando' :
                <div className='glass-peli'>
                  <Container>
                  <Row>
                    
                     <Col><Image className='foto-peli' src={dato.foto}></Image></Col>
                     <Col>
                       <h5>{dato.titulo}</h5>
                       <h5>{dato.Duracion}</h5>
                       <h5>{dato.director}</h5>
                       <h5>{dato.pais}, {dato.año}</h5>
                       <h5>Precio: ${dato.precio}</h5>
                       <Button className='redondo' variant="outline-warning" onClick={handleShow}>Ver trailer</Button>
                       <Button onClick={()=>navigate(-1)} className='redondo' variant="outline-danger" >Regresar</Button>
                      
                       <Button className='redondo' variant="success" onClick={() => addProduct(dato)} >Agregar al carrito</Button>
                     </Col>
                  </Row>
                    
                  <Row>
                      <Col>
                      <h5>Sinopsis</h5>
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
      <Modal.Header  closeButton>
        <Modal.Title>{dato.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body >      
      <YouTube videoId={dato.link} opts={opts} onReady={onPlayerReady} />
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

