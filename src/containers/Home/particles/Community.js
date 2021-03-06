import { Container } from "react-bootstrap";

const Community = () => {
  return (
    <section className="page-section" id="community">
        <Container>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Community</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-anchor"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="community-content"></div>
        </Container>
    </section>
  );
}

export default Community;
