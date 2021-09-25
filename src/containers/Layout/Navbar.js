import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Image, Navbar, Nav } from 'react-bootstrap';

import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";

import { Link, scroller } from "react-scroll";
import TortugaImg from '../../assets/img/tortuga.png';
import TraderjoeImg from '../../assets/img/traderjoe.png';

const Navigation = () => {
    const history = useHistory();
    const [ walletAddress, setWalletAddress ] = useState("");
    const [ showWalletAddress, setShowWalletAddress ] = useState(false);
    const [ navBarShrink, setNavbarShrink ] = useState(false);
    
    const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
            qrcodeModalOptions: {
                mobileLinks: [
                  "rainbow",
                  "metamask",
                  "argent",
                  "trust",
                  "imtoken",
                  "pillar",
                ],
                desktopLinks: [
                  "encrypted ink",
                ]
            }
          }
        },
        torus: {
          package: Torus
        },
        authereum: {
          package: Authereum
        }
    };
      
      const web3Modal = new Web3Modal({
        network: "mainnet", 
        cacheProvider: true, 
        providerOptions
    });
    
      const [walletInfo, setWalletInfo] = useState({
        address: '',
        chainId: 0,
        networkId: 0,
        web3: '',
        provider: '',
        connected: false
    });

    const connect = async () => {
        const provider  = await web3Modal.connect();
        const web3      = getWeb3(provider);
        const accounts  = await web3.eth.getAccounts();
        const address   = accounts[0];
        const networkId = await web3.eth.net.getId();
        const chainId   = await web3.eth.chainId();

        setWalletInfo((prevStatus) => ({
            ...prevStatus,
            address: address,
            chainId: chainId,
            networkId: networkId,
            web3: web3,
            provider: provider,
            connected: true
        }));
        
        if (!provider.on) {
        return;
        }

        provider.on("close", () => resetWallet());

        provider.on("accountsChanged", async (accounts) => {
            setWalletInfo((prevStatus) => ({
                ...prevStatus,
                address: accounts[0]
            }));
        });

        provider.on("chainChanged", async (chainId) => {
            const networkId = await web3.eth.net.getId();
            setWalletInfo((prevStatus) => ({
                ...prevStatus,
                chainId: chainId,
                networkId: networkId
            }));
        });

        provider.on("networkChanged", async (networkId) => {
            setWalletInfo((prevStatus) => ({
                ...prevStatus,
                networkId: networkId
            }));
        });

        if(address) {
            const wallet_txt = getShortText(address);
            setWalletAddress(wallet_txt);
            setShowWalletAddress(true);
            history.push("/default");
        } else {
            setShowWalletAddress(false);
        }
    }

    const getWeb3 = (provider) => {
        const web3 = new Web3(provider);
      
        web3.eth.extend({
          methods: [
            {
              name: "chainId",
              call: "eth_chainId",
              outputFormatter: web3.utils.hexToNumber
            }
          ]
        });
    
        return web3;
    }
    
    const resetWallet = async () => {
        const web3 = walletInfo.web3;
        if (web3 && web3.currentProvider && web3.currentProvider.close) {
          await web3.currentProvider.close();
        }
        await web3Modal.clearCachedProvider();
        
        setWalletInfo((prevStatus) => ({
          ...prevStatus,
          address: '',
          chainId: 0,
          networkId: 0,
          web3: '',
          provider: '',
          connected: false
        }));

        setShowWalletAddress(false);
        history.push("/");
    };
    
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
                                    <div className="account-info">
                                        <div className="wallet-address">{walletAddress}</div>
                                        <div onClick={resetWallet} className="btn-disconnect">Log Out</div>
                                    </div>
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
