import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  return (
    <div className='fondo-blk'>
      <div className='formulario'>
        <div className='glass'>
        <h4>Crea tu Cuenta</h4>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Nombre"/>
      </FloatingLabel>  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <FloatingLabel
        controlId="floatingInput"
        label="Correo"
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