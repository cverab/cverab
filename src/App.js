import './App.css';
import Header from './component/Header';
import About from './component/About';
import Seccion from './component/Seccion';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { useState } from 'react';

function App() {
  const currentYear = new Date().getFullYear();
  const [retro, setRetro] = useState(false);
  const handleRetro = () => {
    setRetro(!retro);
  };
  return (
    <div className="App old">
      {retro ?
        <button className='retro' onClick={handleRetro}>{currentYear}</button>
        :
        <button className='retro' onClick={handleRetro}>1997</button>
      }
      <Header autor='Carlos Vera' oficio='Desarrollador Web' oldSchool={retro} />
      <About oldSchool={retro} />
      <Seccion title='Proyectos Realizados' jsonUrl="https://json-server-vercel-steel-sigma.vercel.app/proyectos/" color="#FFFFFF" back="#FFB923" oldSchool={retro} />
      <Seccion title='Formación Academica' jsonUrl="https://json-server-vercel-steel-sigma.vercel.app/formacion/" color="#000000" back="#FFFFFF" oldSchool={retro} />
      <Seccion title='Mis Intereses' jsonUrl="https://json-server-vercel-steel-sigma.vercel.app/intereses/" color="#FFFFFF" back="#FFB923" oldSchool={retro} />
      <Contact oldSchool={retro} />
      <Footer autor='Carlos Vera' back="#FFB923" oldSchool={retro} />
    </div>
  );
}

export default App;