import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const About: React.FC = () => {
    return <section className='about justify-content-center align-items-center'>
        <div className='about-container'>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col md={6} className='about-left'>
                        <h6>SMART IDEAS TO BLOW YOUR MIND</h6>
                        <h1>Innovations that <br/>will change your life</h1>
                        <p className='about-paragraph-header'><span>We are listening to your needs</span></p>
                        <p className='about-paragraph-header' style={{fontWeight: "300"}}>We are an innovative software development company with expertise in e-commerce apps, payment apps and data collection software. </p>
                    </Col>
                    <Col md={6} className='justify-content-center align-items-center'>
                        <div className='about-img-container'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
}

export default About