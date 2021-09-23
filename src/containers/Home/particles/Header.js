import { Image } from 'react-bootstrap';
import TortugaImg from '../../../assets/img/tortuga.png';

const Header = () => {
  return (
    <header className="masthead bg-primary text-blue text-center" id="header">
        <div className="container d-flex align-items-center flex-column" style={{marginTop: "-50px"}}>
            <Image className="masthead-avatar mb-5" src={TortugaImg} alt="..." />
            <h1 className="masthead-heading text-uppercase mb-0" style={{marginTop: "-25px"}}>Tortuga Coin</h1>
            <div className="divider-custom divider-light" style={{marginTop: "-5px"}}>
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-dharmachakra"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <p style={{marginTop: "-25px"}}>Land on Tortuga Pirate island, share our treasure and get your NFT ship !</p>
            <p style={{wordBreak: "break-all"}}>0xaB2712b217F0015B602C06E4fb66B8cf8B04F894</p>
        </div>
    </header>

  );
}

export default Header;
