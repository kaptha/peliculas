import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/p1.jpg'
import img2 from '../images/p2.jpg'
import img3 from '../images/p3.jpg'
function Header() {
    return (
      <div>
          <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Amplio surtido de titulos</h3>
            <p>Tenemos toda variedad de peliculas y generos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Todos los formatos</h3>
            <p>Elige peliculas de todo tipo de dispositivos, Beta, VHS, CD.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>No encuentras un titulo?</h3>
            <p>
              Te encontramos la pelicula mas rara del mundo en cuestion de dias y recibela en la puerta de tu casa!!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      
    );
  }
  
  export default Header;