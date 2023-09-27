import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ClientBox from "./components/ClientBox";

const WorkedWith: React.FC = () => {
    return <section className="workedWith">
        <Container>
            <Row className="d-flex justify-content-center">
                <div className="menu-content pb-60 col-lg-10">
                    <div className="title-container text-center">
                        <h1 className="mb-10 features-title" data-aos="zoom-out" data-aos-delay="500" data-aos-duration="400">Top Clients</h1>
                        <p data-aos="zoom-in" data-aos-delay="600" data-aos-duration="600">Our reliability has taken us places</p>
                    </div>
                </div>
            </Row>
            <Row>
                <Col md={4} sm={12} xs={12} data-aos="zoom-out" data-aos-delay="400" data-aos-duration="600"><ClientBox image="/images/letsRideLogo1.jpeg" title="Let's Ride" desc="Transportation app" /></Col>
                <Col md={4} sm={12} xs={12} data-aos="zoom-out" data-aos-delay="600" data-aos-duration="600"><ClientBox image="/images/groupicon.jpeg" title="GeoMining Consults" desc="Environmental Awareness application in the mining fields" /></Col>
                <Col md={4} sm={12} xs={12} data-aos="zoom-out" data-aos-delay="800" data-aos-duration="600"><ClientBox image="/images/icon_i.png" title="Solis Finance" desc="Financial Banking App" /></Col>
                {/* <Col md={4} sm={6} xs={6}><ClientBox image="/images/icon_i.png" title="Solis Finance" desc="Financial Banking App" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox image="/images/icon_i.png" title="Solis Finance" desc="Financial Banking App" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox image="/images/icon_i.png" title="Solis Finance" desc="Financial Banking App" /></Col> */}
            </Row>
        </Container>
    </section>
}

export default WorkedWith