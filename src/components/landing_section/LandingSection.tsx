import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingSection: React.FC = () => {
    return <section className='landing-section' style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Container className='landing-content'>
            <Row className='justify-content-center'>
                <Col lg={5} md={5} sm={5} className='l-content my-auto' style={{textAlign: 'right'}}>
                    <h3 className='l-title'>Animo Solutions</h3>
                    <p>Be Straightforward</p>
                </Col>
                <Col lg={7} md={7} sm={7}>
                    {/* <h3>Animo</h3> */}
                    <img src='/images/software.png' />
                </Col>
            </Row>
        </Container>
    </section>
}

export default LandingSection