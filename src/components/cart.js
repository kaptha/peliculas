import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ShopContext } from '../contexts/ShopContext';
import axios from 'axios';

export default function cart() {
  const { user } = useContext(UserContext);
  const { id } = user || {};
  const { cartShop } = useContext(ShopContext); 
 
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
  console.log(cartShop, "aui carrito");
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
