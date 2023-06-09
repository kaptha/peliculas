//import Button from 'react-bootstrap/Button';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ShopContext } from "../contexts/ShopContext";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../components/Footer';

function CheckOut() {
  const { user } = useContext(UserContext);
  const { id } = user || {};
  const [key, setKey] = useState('home');
  const [address, setAddress] = useState([]);
  useEffect(() => {
    fetchAddress();
  }, []);
  const fetchAddress = async () => {
    try {
      const response = await axios.get('http://localhost:5500//direccions/:id');
      setAddress(response.data);
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
      {address.map((addre) => (
          <option key={addre.id} value={addre.id}>
            {addre.direccion}
          </option>
        ))}
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
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
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