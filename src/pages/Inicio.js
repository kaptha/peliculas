import React from 'react'
import Header from '../components/Header';
import Peliculas from './Peliculas';
import Footer from '../components/Footer';
export default function Inicio() {
  return (
    <div>
      <Header></Header>
      <Peliculas></Peliculas>
      <Footer></Footer>
    </div>
  )
}
