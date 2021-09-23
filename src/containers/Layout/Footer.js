const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <div>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        {/* <!-- Footer Location--> */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                TORTUGA ISLAND
                                <br />
                                The Caribbean
                            </p>
                        </div>
                        {/* <!-- Footer Social Icons--> */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Get on our ship !</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://t.me/TortugaCommunity"><i className="fab fa-telegram-plane"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/TortugaCoin"><i className="fab fa-fw fa-twitter"></i></a>
                            {/* <!-- <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-github"></i></a>--> */}
                            {/* <!-- <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fas fa-file-contract"></i></a>--> */}
                        </div>
                        {/* <!-- Footer About Text--> */}
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Tortuga dev</h4>
                            <p className="lead mb-0">
                                Engineers and devs loving pirates, ships and sea.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container">
                    <small>
                        Copyright &copy; Tortuga Coin {year}
                        {/* <!-- This script automatically adds the current year to your website footer--> */}
                        {/* <!-- (credit: https://updateyourfooter.com/)--> */}
                    </small>
                </div>
            </div>
            <div class="scroll-to-top d-lg-none position-fixed">
                <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
    );
}

export default Footer;
