//import Button from 'react-bootstrap/Button';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ShopContext } from "../contexts/ShopContext";
import axios from 'axios';
import el from '../images/eliminar.png';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../components/Footer';

function CheckOut() {
  const { user } = useContext(UserContext);
  const [key, setKey] = useState('home');
  const { id } = user || {};
  const { cartShop, getProductos, deleteItem } = useContext(ShopContext);
  const total = getProductos().reduce((sum, producto) => sum + producto.precio, 0);
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
      {direcciones.map((addre) => (
          <option key={addre.id} value={addre.id}>
            {addre.direccion}
          </option>
        ))}
    </Form.Select>
      </Tab>
      <Tab eventKey="profile" title="Productos">
        <h4>Productos</h4>
        <Container>
        {getProductos().map((carts, index)=>(
          <Row className='espacio' >
          <Col><Image  rounded /></Col>
          <Col><h6 className="texto-blk">{carts.titulo}</h6></Col>
          <Col><h6 className="texto-blk">${carts.precio}</h6></Col>
          <Col><a onClick={() => deleteItem(index)}><img src={el}></img></a></Col>
        </Row>
        ))}
        <Row>
        <Col><h6 className="texto-blk">Total</h6></Col>
            <Col><h6 className="texto-blk">${total}</h6></Col>
        </Row>
        </Container>
      </Tab>
      <Tab eventKey="contact" title="Pago">
        <h4>Confirmacion del Producto</h4>
        <PayPalScriptProvider options={{ "ATa0-qWXgxuH61YlWaLdr0goBUf4604TtnBhB3NXQ9mglxMvRwBhFQ3HZT9FyX1d2H0HPzZIPgB8ThBT": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: {total},
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaccion completada por ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
      </Tab>
    </Tabs>
    
        
      </div>
     
    </div>
    <Footer></Footer>
    </>
    
    
    
  );
}

export default CheckOut;