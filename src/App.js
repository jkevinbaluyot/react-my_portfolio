import './stylesheets/index.scss';
import Topbar from "./components/Topbar/Topbar";
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main>
      <Topbar />
      <Banner />
      <Skills />  
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
