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
        <section className="main-content">
          <div className="profile-container">
            <div className="profile-picture">
              <img src={ProfilePicture} alt="Profile Picture" />
            </div>
          </div>
          <div className="about-container">
            <About /> 
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
