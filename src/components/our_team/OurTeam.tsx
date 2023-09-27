import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileBox from "./components/ProfileBox";

const OurTeam: React.FC = () => {
    return <section className="workedWith">
        <Container>
            <Row className="d-flex justify-content-center">
                <div className="menu-content pb-60 col-lg-10">
                    <div className="title-container text-center">
                        <h1 className="mb-10 features-title" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="400">Our Team</h1>
                        <p data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600">Meet the team</p>
                    </div>
                </div>
            </Row>
            <Row>
                <Col md={3} sm={12} xs={12} data-aos="zoom-out" data-aos-delay="300" data-aos-duration="600"><ProfileBox image="/images/wilson.jpg" name="Wilson Abakisi" desc="A leader who shows dedication and commitment to whatever cause he's working for. Wilson has a 'never give up' attitude which has been fundamental in the progress of the company." role="Founder" /></Col>
                <Col md={3} sm={12} xs={12} data-aos="zoom-out" data-aos-delay="450" data-aos-duration="600"><ProfileBox image="/images/bede.jpeg" name="Bede Abbe" desc="Bede is a visionary who always takes innovation to the next level. An abled software engineer who has been working in the IT space for all of his working career, Bede is well informed and knowledgeable in matters concerning software development and system functionalities." role="Software Engineer" /></Col>
                <Col md={3} sm={12} xs={12} data-aos="zoom-out" data-aos-delay="600" data-aos-duration="600"><ProfileBox image="/images/eric.jpg" name="Solis Finance" desc="Eric Amankyim is Google Certified User Experience Engineer who is passionate about creating outstanding digital experiences. His unique blend of design and development expertise allows him to bring innovation and user-centricity to every project." role="UI/UX Engineer" /></Col>
                <Col md={3} sm={12} xs={12} data-aos="zoom-out" data-aos-delay="300" data-aos-duration="600"><ProfileBox image="/images/wilson.jpg" name="Louis Yelifari" desc="An brilliant and innovative individual, Louis has always challenged himself to do the impossible. Its no wonder he is a key figure in projects and solutions provided by the company." role="Solutions Architect and project manager" /></Col>
                {/* <Col md={3} sm={12} xs={12} data-aos="zoom-out" data-aos-delay="750" data-aos-duration="600"><ProfileBox image="/images/icon_i.png" name="Solis Finance" desc="Financial Banking App" role="UI/UX Engineer" /></Col> */}
                {/* <Col md={4} sm={6} xs={6}><ClientBox image="/images/icon_i.png" title="Solis Finance" desc="Financial Banking App" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox image="/images/icon_i.png" title="Solis Finance" desc="Financial Banking App" /></Col>
                <Col md={4} sm={6} xs={6}><ClientBox image="/images/icon_i.png" title="Solis Finance" desc="Financial Banking App" /></Col> */}
            </Row>
            <Row className="my-4" style={{display: 'flex', alignItems: 'right', textAlign: 'right', justifyContent: 'end'}}>
                <Col><span className="mx-4 my-4">See more</span></Col>
            </Row>
        </Container>
    </section>
}

export default OurTeam