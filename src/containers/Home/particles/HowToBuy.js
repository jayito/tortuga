import { Image } from "react-bootstrap";

const HowToBuy = () => {
  return (
    <section className="page-section text-white mb-0" id="howtobuy">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-white">How to buy</h2>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line" ref={(el) => el && el.style.setProperty("background-color", "#ffffff" , "important")}></div>
                <div className="divider-custom-icon" ref={(el) => el && el.style.setProperty("color", "#ffffff" , "important")}><i className="fas fa-coins"></i></div>
                <div className="divider-custom-line" ref={(el) => el && el.style.setProperty("background-color", "#ffffff" , "important")}></div>
            </div>
            <div className="row">
                <div className="col-lg-4 ml-auto"><p className="lead">Tortuga is now launched. It's the stealth launch and as a consequence more egalitarian than other tokens. If you are lucky to find us, congratulations.</p></div>
                <div className="col-lg-4 mr-auto"><p className="lead"> You can buy $TORTUGA on Trader Joe for now. Max 1% of the supply for each trx, 5% max total by wallet If you have trouble to buy, try to remove one last 0 and replace it by a 1. If it is still not working, increase slippage.</p></div>
            </div>
        </div>
        <Image id="vague4" src="/img/vague.png" alt="" />
    </section>
  );
}

export default HowToBuy;
