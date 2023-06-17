import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
export default function Carta() {
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5500/peliculas');
      console.log(response.data.peliculas);
      setPelis(response.data.peliculas);
      return
    } catch (error) {
      console.error('Error al obtener los datos de las películas:', error);
    }
  };
  return (
    
    <div className='cartas'>
      {pelis.map((peli) => (
         
              
           
                <Card className='glass-carta' key={peli._id}>
          <Card.Img variant="top" src={peli.foto} />
          <Card.Body>
            <Card.Title>{peli.titulo}</Card.Title>
            <Card.Text>Año: {peli.año}</Card.Text>
            <Card.Text>Director: {peli.director}</Card.Text>
            <Link to={`/pelicula/${peli._id}`}>
              Ver más
            </Link>
          </Card.Body>
                </Card>
                            
       
        
        ))}
      </div>
          
        
        
             
        
                    

  )
}
