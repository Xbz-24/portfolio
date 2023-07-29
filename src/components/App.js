import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './styles.css'

import ProfilePicture from '../image0.jpg';
const App = () => {

  return (
    <div>
      <Header />
      <main>
        <section className="profile-container">
          <img src={ProfilePicture} alt="Profile Picture" />
          <About />
        </section>
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;