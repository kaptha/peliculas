import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Footer from '../components/Footer';

import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  return (
    <div className='fondo-blk'>
      <div className='formulario'>
        <div className='glass'>
          <h4>Ingresa a tu Cuenta</h4>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Correo"/>
      </FloatingLabel>        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <FloatingLabel controlId="floatingPassword" label="Contraseña">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <h6>No tienes una cuenta?</h6><Button className='redondo' variant="outline-danger" onClick={()=>navigate("/Register")}>Registrarse</Button>
      </Form.Group>      
      <Button className='redondo' variant="outline-primary" type="submit">
        Ingresar
      </Button>
       </Form>
        </div>       
     </div>
     <Footer></Footer>
    </div>
    
    
  );
}

export default Login;