import './App.css';
import Header from './component/Header';
import About from './component/About';
import Seccion from './component/Seccion';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header autor='Carlos Vera' oficio='Desarrollador Web' />
      <About />
      <Seccion title='Proyectos Realizados' jsonUrl="https://json-server-vercel-steel-sigma.vercel.app/proyectos/" color="#FFFFFF" back="#FFB923" />
      <Seccion title='Formación Academica' jsonUrl="https://json-server-vercel-steel-sigma.vercel.app/formacion/" color="#000000" back="#FFFFFF" />
      <Seccion title='Mis Intereses' jsonUrl="https://json-server-vercel-steel-sigma.vercel.app/intereses/" color="#FFFFFF" back="#FFB923" />
      <Contact />
      <Footer autor='Carlos Vera' back="#FFB923" />
    </div>
  );
}

export default App;