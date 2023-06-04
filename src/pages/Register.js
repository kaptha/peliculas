import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Footer from '../components/Footer';
function Register() {
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
        </div>

      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default Register;