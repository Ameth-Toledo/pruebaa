import './App.css';
import Header from './components/Organism/Header/Header';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="banner-background">
        <h1 className="banner-background-h1">Tu Mejor Servicio de RadioTaxis</h1>
        <p className="banner-background-p">Servicio especializado en el servicio publico y seguro</p>
      </div>
      <div>
        <h1>¡ Bienvenido a RadioTaxis de Calidad Concord !</h1>
        <h2> Somos la cooperativa de taxis más confiable y amigable en la ciudad. Con Concord, tu viaje es nuestra prioridad. 
            Ofrecemos servicio rápido, seguro y cómodo, con conductores profesionales que conocen la ciudad como la palma de su mano. 
            ¡Viaja con nosotros y experimenta la diferencia!
        </h2>
      </div>
      <div className="content-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.9741152839279!2d-93.1110279!3d16.7818261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8ba6fb45a2b%3A0xaea91ff78a559bcd!2sFlor%20de%20Noche%20Buena%20MZ1%20LT14%2C%2012%20de%20Noviembre%2C%2029016%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1725059709485!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-info">
          <h2 className="contact-info-h2">Oficinas ubicadas en:</h2>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon location" />
            <p className='ubication-maps'>12 de noviembre mz. 1 lt. 1</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon phone" />
            <p className='ubication-maps'>961 000 0000</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon email" />
            <p className='ubication-maps'>taxis@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
