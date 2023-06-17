import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Footer from '../components/Footer';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { login } from '../services/userLogin';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    setToken,
    setIsuser
  } = useContext(UserContext)

const onSubmit= async()=>{
 
 if(email !== '' && password !== ''){
  const data = await login(email, password)
  if(!data){

  }
 }
    

}
  return (
    <div className='fondo-blk'>
      <div className='formulario'>
        <div className='glass'>
          <h4>Ingresa a tu Cuenta</h4>
          <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Correo" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </FloatingLabel>        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <FloatingLabel controlId="floatingPassword" label="Contraseña">
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <h6>No tienes una cuenta?</h6><Button className='redondo' variant="outline-danger" onClick={()=>navigate("/Register")}>Registrarse</Button>
      </Form.Group>      
      <Button className='redondo' onClick={onSubmit} variant="outline-primary" type="submit">
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