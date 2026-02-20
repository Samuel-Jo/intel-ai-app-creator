import Header from './components/Header';
import Hero from './sections/Hero';
import ProgramOverview from './sections/ProgramOverview';
import Partners from './sections/Partners';
import Philosophy from './sections/Philosophy';
import TechStack from './sections/TechStack';
import Curriculum from './sections/Curriculum';
import Tools from './sections/Tools';
import Outcomes from './sections/Outcomes';
import Careers from './sections/Careers';
import Location from './sections/Location';
import Schedule from './sections/Schedule';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <Hero />
      <ProgramOverview />
      <Partners />
      <Philosophy />
      <TechStack />
      <Curriculum />
      <Tools />
      <Outcomes />
      <Careers />
      <Location />
      <Schedule />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
