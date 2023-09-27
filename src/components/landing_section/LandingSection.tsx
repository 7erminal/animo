import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Atropos from 'atropos';

const LandingSection: React.FC = () => {
    const myAtropos = Atropos({
        el: '.my-atropos',
        // rest of parameters
        activeOffset: 40,
        shadowScale: 0.05,
        // shadow: false,
        onEnter() {
            console.log('Enter');
        },
        onLeave() {
            console.log('Leave');
        },
        onRotate(x, y) {
            console.log('Rotate', x, y);
        }
      });

      useEffect(()=>{
        const myAtropos = Atropos({
            el: '.my-atropos',
            // rest of parameters
            activeOffset: 60,
            // shadowScale: 0.01,
            shadow: false,
            onEnter() {
                console.log('Enter');
            },
            onLeave() {
                console.log('Leave');
            },
            onRotate(x, y) {
                console.log('Rotate', x, y);
            }
          });
      },[])


    return <section className='landing-section' style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Container className='landing-content'>
            <Row className='justify-content-center'>
                <Col lg={5} md={5} sm={5} className='l-content my-auto' style={{textAlign: 'right'}}>
                    <h3 className='l-title' data-aos="fade-down" data-aos-delay="400" data-aos-duration="500">Animo Solutions</h3>
                    <p data-aos="fade-right" data-aos-delay="600" data-aos-duration="850">Be Straightforward</p>
                </Col>
                <Col lg={7} md={7} sm={7}>
                    {/* <h3>Animo</h3> */}
                    <div className='landing-image-wrapper'>
                        <div className="atropos my-atropos">
                            <div className="atropos-scale">
                                <div className="atropos-rotate">
                                    <div className="atropos-inner">
                                        <img className='landing-header-image atropos my-atropos' src='/images/software.png' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default LandingSection