import { Container } from "react-bootstrap";

const Map = () => {
  return (
    <section className="page-section bg-primary text-blue mb-0" id="tokenomics">
        <Container>
            <h2 className="page-section-heading text-center text-uppercase text-blue" >Treasure Map</h2>
            <div className="divider-custom divider-light" style={{marginBottom: "-10px"}}>
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-coins"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        </Container>
    </section>
  );
}

export default Map;
