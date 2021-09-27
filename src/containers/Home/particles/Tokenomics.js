import { Container, Image } from "react-bootstrap";
import FeaturesImg from '../../../assets/img/features.png';

const Tokenomics = () => {
    return (
        <section className="page-section features text-white" id="features">
            <Container style={{minHeight: "200px"}}>
                <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Tokenomics</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line" ref={(el) => el && el.style.setProperty("background-color", "#ffffff" , "important")}></div>
                    <div className="divider-custom-icon" ref={(el) => el && el.style.setProperty("color", "#ffffff" , "important")} ><i className="fas fa-skull-crossbones"></i></div>
                    <div className="divider-custom-line" ref={(el) => el && el.style.setProperty("background-color", "#ffffff" , "important")}></div>
                </div>
            </Container>
            <Image id="imgfeatures" src={FeaturesImg} alt=""/>
            <Container>
                <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Whales hunters</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line" ref={(el) => el && el.style.setProperty("background-color", "#ffffff" , "important")}></div>
                    <div className="divider-custom-icon" ref={(el) => el && el.style.setProperty("color", "#ffffff" , "important")}><i className="fas fa-dharmachakra"></i></div>
                    <div className="divider-custom-line" ref={(el) => el && el.style.setProperty("background-color", "#ffffff" , "important")}></div>
                </div>
                <div className="row" style={{marginLeft: "auto !important", marginTop: "40px"}}>
                    <p className="lead">Tortuga crew also implemented two anti-whales mechanisms. Indeed for each pirate, the maximum wallet balance of Tortuga Coin is 5% of the total supply. Moreover, pirates won't be able to make a transaction of more than 1% of the total supply, avoiding huge price impact. Notice that Reflect and Burn fees can't be increased, Tresor fee can be increased up to 2% during special events of rewards for Tortuga Holders.</p>
                </div>
            </Container>
        </section>
    )
}

export default Tokenomics;