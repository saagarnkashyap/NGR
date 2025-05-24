import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Experience from './components/Experience';

import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relative z-10">
        <Hero />
        <Navbar />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
export default App