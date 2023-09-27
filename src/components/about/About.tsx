import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Slider from './components/slider'

const About: React.FC = () => {
    return <section className='about justify-content-center align-items-center'>
        <div className='about-container'>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col md={6} className='about-left'>
                        <h6 data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">SMART IDEAS TO BLOW YOUR MIND</h6>
                        <h1 data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">Innovations that <br/>will change your life</h1>
                        <p className='about-paragraph-header'><span data-aos="zoom-in" data-aos-delay="500" data-aos-duration="400">We are listening to your needs</span></p>
                        <p className='about-paragraph-header' style={{fontWeight: "300"}} data-aos="zoom-in" data-aos-delay="200" data-aos-duration="400">We are an innovative software development company with expertise in e-commerce apps, payment apps and data collection software. </p>
                    </Col>
                    <Col md={6} className='justify-content-center align-items-center'>
                        <div className='about-img-container' data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                            <Slider />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
}

export default About