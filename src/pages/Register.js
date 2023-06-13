import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5500/user', {
        name,
        email,
        password,
      });
      
      console.log(response.data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu cuenta ha sido creada correctamente, ya puedes hacer login',
        showConfirmButton: false,
        timer: 4000
      })
      
    } catch (error) {
      console.error('Error en el registro:', error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo algun error en el envio de datos!'
      })
      
    }
  };
  const navigate = useNavigate();
  return (
    <div className='fondo-blk'>
      <div className='formulario'>
        <div className='glass'>
        <h4>Crea tu Cuenta</h4>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
      </FloatingLabel>  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <FloatingLabel
        controlId="floatingInput"
        label="Correo"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </FloatingLabel>  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <FloatingLabel controlId="floatingPassword" label="Contraseña">
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </FloatingLabel>
      </Form.Group>
      <Button onClick={()=>navigate(-1)} className='redondo' >Ingresar</Button>
      <Button className='redondo' variant="outline-primary" type="submit">
        Crear cuenta
      </Button>
    </Form>
        </div>

      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default Register;