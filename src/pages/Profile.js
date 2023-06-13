import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Profile() {
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
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Editar Nombre
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"  />
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
    </>
  )
}
