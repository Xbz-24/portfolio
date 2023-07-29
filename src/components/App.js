import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './styles.css'

const App = () => {

  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;