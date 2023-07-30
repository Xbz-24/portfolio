import React, { FC } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import GitHubCalendar, {ThemeInput} from 'react-github-calendar';
import './styles.css';

import ProfilePicture from '../image0.jpg';

const githubUsername = 'Xbz-24';

const minimalTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple']
};


const App: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="main-content">
          <div className="profile-container">
            <div className="profile-picture">
              <img src={ProfilePicture} alt="Profile" />
            </div>
            <GitHubCalendar username={githubUsername} theme={minimalTheme} />
          </div>
          <div className="about-container">
            <About />
          </div>
        </section>
        <h1 className="h1-projects-projects">Projects</h1>
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
