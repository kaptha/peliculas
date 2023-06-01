//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

function CheckOut() {
  return (
    <div className='formulario-pago'>
      <Tabs
    defaultActiveKey="Paso 1"
    id="uncontrolled-tab-example"
    className="mb-3"
    >
    <Tab eventKey="uno" title="Paso 1">
    <h4>Cliente</h4>
    </Tab>
    <Tab eventKey="dos" title="Paso 2">
    <h4>Direccion de Envio</h4>
    </Tab>
    <Tab eventKey="contact" title="Paso 3">
    <h4>Pago</h4>
    </Tab>
    </Tabs>
    </div>
    
    
  );
}

export default CheckOut;