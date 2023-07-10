import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

export default function Profile() {
  const { user } = useContext(UserContext);
  const { id } = user || {};
  /////Obtener datos de usuario
   ////Obtener direccion del usuario 
   const [datouser, setDatuser] = useState([]);  
   useEffect(() => {
     fetchData();
   }, []);
 
   const fetchData = async () => {
     try {       
       const url = "http://localhost:5500/user/"+id;        
       const response = await axios.get(url);    
       console.log(response.data.user)    
       setDatuser(response.data.user);
      
     } catch (error) {
       console.error('Error al obtener datos de usuario:', error);
     }
   };
   console.log(datouser);
  return (
    <>
      <div className='formulario'>
        <div className='cuadro-formulario'>
        <h4>Datos Usuario</h4>
        <Form>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly value={datouser.email} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Editar Nombre
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"  value={datouser.name}/>
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Editar Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Button className='redondo' variant="outline-primary" type="submit">Editar perfil</Button>
        
      
      
    </Form>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
