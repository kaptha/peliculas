import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Swal from 'sweetalert2';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
import Footer from '../components/Footer';
import Modal from 'react-bootstrap/Modal';
//import el from '../images/eliminar.png';
//import ed from '../images/boton-editar.png';
  
function Address() {
  const { user } = useContext(UserContext);
  const { id } = user || {};
  

  //Modal crear
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Crear Direccion
  const [direccion, setDireccion] = useState('');
  const [ codigoPostal, setCodigoPostal ] = useState('');
  const [ ciudad, setCiudad ] = useState('');
  /////Agregar direccion
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5500/user', {
        direccion,
        codigoPostal,
        ciudad,
      });
      
      console.log(response.data);
      Swal.fire('Direccion agregada correctamente')
      
    } catch (error) {
      console.error('Error en el registro:', error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo algun error en el envio de datos!'
      })
      
    }
  };
  ////Obtener direccion del usuario 
    const [direcciones, setDirecciones] = useState([]);  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {       
        const url = "http://localhost:5500/direccions/"+id;        
        const response = await axios.get(url);        
        setDirecciones(response.data.address);
       
      } catch (error) {
        console.error('Error al obtener las direcciones:', error);
      }
    };
  

  return (
    <>
    <div className='formulario'>    
    
      <div className='cuadro-formulario'>
         <h4>Direccion de Envio</h4>
      <Table striped bordered hover variant="dark">   
           
           <thead>
             <tr>
               <th>#</th>
               <th>Direccion</th>
               <th>Codigo Postal</th>
               <th>Ciudad</th>
               <th>Acciones</th>
             </tr>
           </thead>
           <tbody>
           {direcciones.map((direccion) => (
            <tr key={direccion.id}>
              <td>{direccion.id}</td>
              <td>{direccion.direccion}</td>
              <td>{direccion.codigoPostal}</td>
              <td>{direccion.ciudad}</td>
              <td>Acciones</td>
            </tr>
          ))}
            
           </tbody>
             </Table> 
             <div><Button className='redondo' variant="outline-primary" onClick={handleShow}>Agregar Direccion</Button></div> 
      </div> 
           
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Direccion de Envio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <FloatingLabel  controlId="floatingInput" label="Direccion" className="mb-3">
          <Form.Control type="text" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
          </FloatingLabel>
          <FloatingLabel  controlId="floatingInput" label="Codigo Postal" className="mb-3">
          <Form.Control type="text" placeholder="Codigo Postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)}/>
          </FloatingLabel>
          <FloatingLabel  controlId="floatingInput" label="Ciudad" className="mb-3">
          <Form.Control type="text" placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
          </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='redondo' variant="outline-secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className='redondo' variant="outline-primary" onClick={handleClose} type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
               
      
    </div>
    <Footer></Footer>
    </>
    
    
  );
}

export default Address;