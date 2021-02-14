import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaGlobeAmericas } from 'react-icons/fa';
import { SiIfood } from 'react-icons/si';

import ROUTES from '../../../constants/routes';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-box">
        {/* <h1>MERCATO BIXIGA</h1> */}
        <img src="https://res.cloudinary.com/dpvoeecza/image/upload/v1610039720/Mercato/Logo_Mercato_Bixiga_PNG_Transparente_tmct3q.png" alt="Logo Mercato Roperto" className="logo"/>
        <div className="menu-control">
          <Link to={ROUTES.HOME} className="links">
            <div className="menu-btn">
              <FaGlobeAmericas />
              <span>
                SITE (em construção)
              </span>
            </div>
          </Link>
          
          <a href="https://www.instagram.com/mercatobixiga/" className="links">
            <div className="menu-btn">
              <FaInstagram />
              <span>
                INSTAGRAM
              </span>
            </div>
          </a>
          <a href="https://www.ifood.com.br/delivery/sao-paulo-sp/mercato-bixiga---grupo-roperto-bela-vista" className="links">
            <div className="menu-btn">
              <SiIfood />
              <span>
                IFOOD
              </span>
            </div>
          </a>
          <a href="https://wa.me/5511910505047?text=Olá!%20Estava%20no%20site%20de%20vocês%20e%20gostaria%20de%20uma%20informação..." className="links" target="_blank" rel="noopener noreferrer">
            <div className="menu-btn">
              <FaWhatsapp />
              <span>
                WHATSAPP
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;