import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logouno from '../images/bbv.png';

export default function Footer() {
  return (
    <div className='footer'>     
      <footer style={{ margin: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '0 0 auto' }}>
        <img className="logo" src={logouno}></img>       
          <p>TERRACE VIEW BLVD</p>
          <p>OREGON, IL - Illinois</p>
        </div>
        <div style={{ flex: '1 1 auto', margin: '0 15px' }}>
          <ul style={{ listStyle: 'none', padding: '0' }}>
          <li>Peliculas Europeas</li>
          <li>Peliculas America</li>
          <li>Peliculas Asiaticas</li>
          </ul>
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <ul style={{ listStyle: 'none', padding: '0', display: 'flex', justifyContent: 'flex-end' }}>
            <li style={{ margin: '0 5px' }}>
            <img className='face'></img>
            </li>
            <li style={{ margin: '0 5px' }}>
            <img className='ins'></img>
            </li>
            <li style={{ margin: '0 5px' }}>
            <img className='tw'></img>
            </li>
          </ul>
        </div>
      </div>
    </footer>    
       
    </div>
  )
}

