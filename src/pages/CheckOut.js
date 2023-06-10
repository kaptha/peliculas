//import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../components/Footer';

function CheckOut() {
  const [key, setKey] = useState('home');
  return (
    <>
    <div className='formulario'>
      <div className='glass-pago'>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Direccion">
      <h4>Direccion de Envio</h4>
      <Form.Select aria-label="Default select example">
      <option>Selecciona una direccion</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Tab>
      <Tab eventKey="profile" title="Cliente">
        <h4>Datos Cliente</h4>
        <Form.Control
        type="text"
        placeholder="Nombre"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      </Tab>
      <Tab eventKey="contact" title="Pago">
        <h4>Confirmacion del Producto</h4>
      </Tab>
    </Tabs>
    
        
      </div>
     
    </div>
    <Footer></Footer>
    </>
    
    
    
  );
}

export default CheckOut;