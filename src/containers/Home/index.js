import Header from "./particles/Header";
import About from "./particles/About";
import Tokenomics from "./particles/Tokenomics";
import Quest from "./particles/Quest";
import Map from "./particles/Map";
import HowToBuy from "./particles/HowToBuy";
import Community from "./particles/Community";
import { Image } from "react-bootstrap";

import VagueImg from '../../assets/img/vague.png';
import TreasureMapImg from '../../assets/img/treasure-map.png';
import ExplainedMapImg from '../../assets/img/roadmap-explained.png';

import './Home.css';

const Home = () => {
  return (
    <div>
        <Header />
        <Image className="fullWidthImage" fluid src={VagueImg} alt=""/>
        <About />
        <Image className="fullWidthImage" src={VagueImg} alt="" />
        <Tokenomics />
        <Quest />
        <Map />
        <Image className="fluidImage" src={TreasureMapImg} alt="" />
        <Image className="fullWidthImage" src={ExplainedMapImg} alt="" />
        <HowToBuy />
        <Community />
        <div className="scroll-to-top d-lg-none position-fixed">
            <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
        </div>
    </div>
  );
}

export default Home;
