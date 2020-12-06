import { GrInstagram } from "react-icons/gr";
import { RiWhatsappLine } from "react-icons/ri";

import './App.css';
import BottomFooter from './Components/features/BottomFooter/BottomFooter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mercato Bixiga</h1>
      </header>
      <div className="infos">
        <div className="sqre-background">
          <div className="text-infos">
            <span className="title-infos">Em breve, novidades por aqui.</span>
            <p>Enquanto isso, nos acompanhe em nosso Instagram, ou entre em contato pelo WhatsApp.</p>
          </div>
          <div className="contact-info">
            <div className="insta-info">
              <GrInstagram className="insta-icon" />
              <a href="https://www.instagram.com/mercatobixiga/" target="_blank" rel="noopener noreferrer" className="links">
                <span>mercatobixiga</span>
              </a>
            </div>
            <div className="whatsapp-info">
              <RiWhatsappLine className="whats-icon" />
              <a href="https://wa.me/5511910505047?text=Olá!%20Estava%20no%20site%20de%20vocês%20e%20gostaria%20de%20uma%20informação..." className="links" target="_blank" rel="noopener noreferrer">
                <span>(11) 91050-5047</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
}

export default App;
