import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function cart() {
    const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);
  ////Mostrar productos del carrito
  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5500/carrito/:usuario');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error al obtener los datos del carrito:', error);
    }
  };
  ////Eliminar producto
  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5500/carrito/${itemId}`); // Ruta para eliminar un elemento del carrito
      fetchCartItems(); // Actualizar los datos del carrito después de eliminar un elemento
    } catch (error) {
      console.error('Error al eliminar el elemento del carrito:', error);
    }
  };
  return (
    <>
    {cartItems.map((item) => (
        <Container>
        <Row className='espacio' key={item.id}>
          <Col><Image src={item.foto} rounded /></Col>
          <Col><h6>{item.titulo}</h6></Col>
          <Col><h6>${item.precio}</h6></Col>
          <Col><a onClick={() => removeFromCart(item.id)}><img src={el}></img></a></Col>
        </Row>
        <Row className='espacio'>
          <Col>Total</Col>
          <Col></Col>
          <Col>$154</Col>
          <Col><Button className="redondo" variant="success" as={Link} to="/CheckOut">Pagar</Button></Col>
        </Row>
       </Container>
    ))}
      
    </>
  )
}
