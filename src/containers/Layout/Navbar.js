import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from "react-scroll";
import TortugaImg from '../../assets/img/tortuga.png';
import TraderjoeImg from '../../assets/img/traderjoe.png';

const Navbar = () => {

    const [ walletAddress, setWalletAddress ] = useState("");
    const [ showWalletAddress, setShowWalletAddress ] = useState(false);
    const [ showWalletConnectBtn, setShowWalletConnectBtn ] = useState(true);
  
    const connect = async () => {
        // if (typeof window.ethereum !== 'undefined') {
        //     const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        //     const account = accounts[0];
        //     if(account) {
        //         const wallet_txt = getShortText(account);
        //         setWalletAddress(wallet_txt);
        //         setShowWalletAddress(true);
        //         setShowWalletConnectBtn(false);

        //     } else {
        //         setShowWalletAddress(false);
        //         setShowWalletConnectBtn(true);
        //     }
        // } else {
        //     alert('MetaMask is uninstalled!');
        // }
    }

    const getShortText = (text) => {
        var trim_text = text.trim();
        var length = trim_text.length;
        var first_txt = trim_text.substring(0,4);
        var last_txt = trim_text.substring(length-4, length);
        console.log(first_txt);
        console.log(last_txt);
        return first_txt + '...' + last_txt;
    }
    const [ navBarShrink, setNavbarShrink ] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 500) setNavbarShrink(true)
        else setNavbarShrink(false);
    }

    window.addEventListener("scroll", handleScroll);

    return (
        <nav className={ !navBarShrink ? ("navbar navbar-expand-lg bg-secondary text-uppercase fixed-top main_nav"): ("navbar navbar-expand-lg bg-secondary text-uppercase fixed-top main_nav navbar-shrink")}>
            <div className="container">
                <Image className="mini-logo" src={TortugaImg} alt=""/>
                <Link className="navbar-brand js-scroll-trigger" activeClass="active" to="header" spy={true} smooth={true} offset={-70} duration={500}>Tortuga Coin</Link>
                <button className="navbar-toggler navbar-toggxler-right text-uppercase font-weight-bold bg-primary text-blue rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" activeClass="active" to="features" spy={true} smooth={true} offset={0} duration={500}>Tokenomics</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" activeClass="active" to="quest" spy={true} smooth={true} offset={100} duration={500}>Quest</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" activeClass="active" to="tokenomics" spy={true} smooth={true} offset={130} duration={500}>Map</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" activeClass="active" to="community" spy={true} smooth={true} offset={0} duration={500}>Community</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://www.traderjoexyz.com/#/trade?outputCurrency=0xaB2712b217F0015B602C06E4fb66B8cf8B04F894"><Image className="traderjoe" src={TraderjoeImg} alt="" /></Link></li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <div className="wallet-connect">
                                {showWalletConnectBtn && <button onClick={connect} className="btn-connect">Connect</button>}
                                {showWalletAddress && <div className="wallet-address"></div>}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
