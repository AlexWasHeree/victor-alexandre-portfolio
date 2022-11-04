import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
