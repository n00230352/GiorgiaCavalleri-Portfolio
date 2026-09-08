import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Me from './components/Me';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

// Keep the rest of the portfolio available while refining the Me and About Me sections.
const showFullPortfolio = false;

export default function App() {
  return (
    <div className={showFullPortfolio ? "portfolio" : "min-h-screen bg-white"}>
      <a className="skip-link" href="#main">Skip to content</a>
      {showFullPortfolio && <Navbar />}
      <main id="main">
        <Me />
        <AboutMe />
        <Projects />
        {showFullPortfolio && (
          <>
            <Intro />

            <About />
          </>
        )}
      </main>
      {showFullPortfolio && <Footer />}
    </div>
  );
}
