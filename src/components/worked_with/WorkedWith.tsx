import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ClientBox from "./components/ClientBox";

const WorkedWith: React.FC = () => {
    return <section className="workedWith">
        <Container>
            <Row className="d-flex justify-content-center">
                <div className="menu-content pb-60 col-lg-10">
                    <div className="title-container text-center">
                        <h1 className="mb-10 features-title">Top Clients</h1>
                        <p>Our reliability has taken us places</p>
                    </div>
                </div>
            </Row>
            <Row>
                <Col md={4} sm={6} xs={6}><ClientBox title="Solis Finance" desc="Financial Banking App" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox title="GeoMining Consults" desc="Environmental Awareness application in the mining fields" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox title="Solis Finance" desc="Financial Banking App" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox title="Solis Finance" desc="Financial Banking App" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox title="Solis Finance" desc="Financial Banking App" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox title="Solis Finance" desc="Financial Banking App" /></Col>
            </Row>
        </Container>
    </section>
}

export default WorkedWith