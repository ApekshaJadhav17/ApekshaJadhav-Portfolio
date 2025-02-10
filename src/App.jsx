// App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Works } from './components';
import Projects from './components/Projects';
import Skills from './components/Skills';
import StarsCanvas from './components/canvas/Stars';



function App() {

  const About = lazy(() => import('./components/About'));
  const Works = lazy(() => import('./components/Works'));
  const Skills = lazy(() => import('./components/Skills'));
  const Projects = lazy(() => import('./components/Projects'));
  const Contact = lazy(() => import('./components/Contact')); 


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <div id='home' className='relative z-0'>
            <StarsCanvas />

            <Hero />
          </div>
        </div>

        <div id="about" >
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        </div>

        <div id="work" >
          <Suspense fallback={<div>Loading...</div>}>
            <Works />
          </Suspense>
        </div>



        <div id="skills" >
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        </div>



        <div id="projects" >
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        </div>

        <div className='relative z-0' id='contact' >
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
          <StarsCanvas />
        </div>







      </div>
    </BrowserRouter>
  );
}

export default App;
