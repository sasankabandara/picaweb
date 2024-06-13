import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import ScrollingLabel from "./components/animate/animbanner";
import Service from "./components/services/service";
import JoinPirateCrew from "./components/join/JoinPirateCrew";
import PirateBanner from "./components/pirateBanner/PirateBanner";
import Footer from "./components/footer/Footer";
import Crew from "./pages/crew";
import Projects from "./pages/Projects";
import "./assets/fonts/fonts.css";
import Stats from './components/stat/stat';
import Meetteam from './components/meetteam/meetteam';


const Home = () => (
  <>
    <Banner />
    <ScrollingLabel />
    <Stats/>
    <Service />
    <Meetteam/>
    <PirateBanner />
    <JoinPirateCrew />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/crew" element={<Crew />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
