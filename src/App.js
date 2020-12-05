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
          <p>Em breve, novidades por aqui. Enquanto isso, nos acompanhe em nosso Instagram, ou entre em contato pelo WhatsApp.</p>
          <div className="contact-info">
            <div className="insta-info">
              <GrInstagram />
              <a href="https://www.instagram.com/mercatobixiga/" target="_blank" className="links">
                <span>mercatobixiga</span>
              </a>
            </div>
            <div className="whatsapp-info">
              <RiWhatsappLine />
              <a href="" className="links">
                <span>(11)xxxx-xxxx</span>
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
