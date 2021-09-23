import { Image } from 'react-bootstrap';
import ShipQuestImg from '../../../assets/img/ship_quest.png';
import VagueImg from '../../../assets/img/vague.png';

const Quest = () => {
    return (
        <section className="page-section features text-white" id="quest" style={{marginTop: "-80px"}}>
            <div className="container" style={{paddingTop: "100px"}}>
                <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Quest and NFT ships</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line" ref={(el) => el && el.style.setProperty("background-color", "#ffffff" , "important")}></div>
                    <div className="divider-custom-icon" ref={(el) => el && el.style.setProperty("color", "#ffffff" , "important")}><i className="fas fa-ship"></i></div>
                    <div className="divider-custom-line" ref={(el) => el && el.style.setProperty("background-color", "#ffffff" , "important")}></div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{marginLeft: "auto !important", marginTop: "40px"}}>
                    <p className="lead">With Tortuga Coin, pirates will be able to buy their own NFT ship and to explore the ocean in Tortuga Quest Game. Rewards and NFT will be distributed to the best pirates !</p>
                    <p className="lead">All the ships will be exclusive and pirates will be able to submit their construction. NFT ships will be attached to one edition, for each edition we will change the theme and the design. With our Dapp, already owned and buyable NFT ships will be displayed in our animated island map. Once the Tortuga Quest is launched, you will explore the Ocean to get rewards. And maybe you will become a true legend of Tortuga Coin.</p>
                </div>
            </div>
            <Image id="shipart" src={ShipQuestImg} alt=""/>
            <Image id="vague3" src={VagueImg} alt=""/>
        </section>
    )
}

export default Quest;