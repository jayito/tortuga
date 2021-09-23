import { useEffect, useState } from 'react';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import Web3 from 'web3';
import { Link, scroller } from "react-scroll";
import TortugaImg from '../../assets/img/tortuga.png';
import TraderjoeImg from '../../assets/img/traderjoe.png';

const Navigation = () => {
    const [ walletAddress, setWalletAddress ] = useState("");
    const [ showWalletAddress, setShowWalletAddress ] = useState(false);
    const [ navBarShrink, setNavbarShrink ] = useState(false);
    
    useEffect(() => {
        connect();
    }, []);

    const connect = async () => {
        if (window.ethereum) {
            await window.ethereum.send('eth_requestAccounts');
            window.web3 = new Web3(window.ethereum);
            const accounts = await window.web3.eth.getAccounts();
            if(accounts) {
                const wallet_txt = getShortText(accounts[0]);
                setWalletAddress(wallet_txt);
                setShowWalletAddress(true);
            } else {
                setShowWalletAddress(false);
            }
        } else {
            alert('MetaMask is uninstalled!');
        }
    }

    const getShortText = (text) => {
        var trim_text = text.trim();
        var length = trim_text.length;
        var first_txt = trim_text.substring(0,4);
        var last_txt = trim_text.substring(length-4, length);
        return first_txt + '...' + last_txt;
    }

    const handleScroll = () => {
        if(window.scrollY > 300) setNavbarShrink(true)
        else setNavbarShrink(false);
        
    }
    const handleSelectLink = (to, eventKey) => {
        let offset = -70;
        if(window.outerWidth < 768 ){
            offset = -450;
        }
        scroller.scrollTo(to, {smooth: true, offset: offset , duration: 500,});
    }

    useEffect (() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    

    return (
        <Navbar collapseOnSelect expand="lg" className={ !navBarShrink ? ("navbar navbar-expand-lg bg-secondary text-uppercase fixed-top main_nav"): ("navbar navbar-expand-lg bg-secondary text-uppercase fixed-top main_nav navbar-shrink")} expand="lg" sticky="top">
            <Container>
                <Navbar.Brand>
                    <Image className="mini-logo" src={TortugaImg} alt=""/> 
                </Navbar.Brand>
                <Link className="navbar-brand js-scroll-trigger"  to="header" spy={true} smooth={true} offset={-70} duration={500}>Tortuga Coin</Link>
                <Navbar.Toggle className="text-uppercase bg-primary text-blue rounded" aria-controls="resoponsive-navbar-nav" >Menu<i className="fas fa-bars"></i></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" className="collapse navbar-collapse">
                    <Nav className="ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Nav.Link eventKey="1" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => handleSelectLink('about')}>About</Nav.Link></li> 
                        <li className="nav-item mx-0 mx-lg-1"><Nav.Link eventKey="2" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => handleSelectLink('features')}>Tokenomics</Nav.Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Nav.Link eventKey="3" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => handleSelectLink('quest')}>Quest</Nav.Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Nav.Link eventKey="4" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => handleSelectLink('tokenomics')}>Map</Nav.Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Nav.Link eventKey="5" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => handleSelectLink('community')}>Community</Nav.Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Nav.Link eventKey="6" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://www.traderjoexyz.com/#/trade?outputCurrency=0xaB2712b217F0015B602C06E4fb66B8cf8B04F894"><Image className="traderjoe" src={TraderjoeImg} alt="" /></Nav.Link></li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <div className="wallet-connect">
                                {showWalletAddress ? (
                                    <div className="wallet-address">{walletAddress}</div>
                                ) : (
                                    <div onClick={connect} className="btn-connect">Connect</div>
                                )}
                            </div>
                        </li>
                    </Nav>  
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default Navigation;
