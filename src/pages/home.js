import { Navbar } from "react-bootstrap";
import Banner from "../components/banner/banner";
import ScrollingLabel from "../components/animate/animbanner";
import Service from "../components/services/service";
import PirateBanner from "../components/pirateBanner/PirateBanner";
import JoinPirateCrew from "../components/join/JoinPirateCrew";
import Footer from "../components/footer/Footer";

function home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <ScrollingLabel />
      <Service />
      <PirateBanner />
      <JoinPirateCrew />
      <Footer />
    </div>
  );
}

export default home;
