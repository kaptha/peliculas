import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function Address() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='formulario'>
      <div><Button variant="primary" onClick={handleShow}>Agregar Direccion</Button></div>      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Direccion de Envio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel  controlId="floatingInput" label="Direccion" className="mb-3">
          <Form.Control type="text" placeholder="Direccion" />
          </FloatingLabel>
          <FloatingLabel  controlId="floatingInput" label="Codigo Postal" className="mb-3">
          <Form.Control type="text" placeholder="Codigo Postal" />
          </FloatingLabel>
          <FloatingLabel  controlId="floatingInput" label="Ciudad" className="mb-3">
          <Form.Control type="text" placeholder="Ciudad" />
          </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    
        <Table striped bordered hover variant="dark">      
      <thead>
        <tr>
          <th>#</th>
          <th>Direccion</th>
          <th>Codigo Postal</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
        </Table>
    
      
    </div>
    
  );
}

export default Address;