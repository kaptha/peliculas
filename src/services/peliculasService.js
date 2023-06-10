import React from 'react'
import axios from "axios";

const pelis = async () => {
    try {
      const response = await axios.get('http://localhost:27017/peliculas/peliculas');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
export default function peliculasService() {
  return (
    <div>
      
    </div>
  )
}
