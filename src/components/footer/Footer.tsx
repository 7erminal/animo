import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

type Props = {
    scrollToView_: (type_: string)=>void
}

const Footer: React.FC<Props> = ({scrollToView_}) => {
    return <section className="footer">
        <Container>
            <Row >
                <Col>
                    <img src='/images/logo.jpeg' width='80px' height='80px' />
                </Col>
                <Col>
                    <h3>Contact Us</h3>
                    <p><FontAwesomeIcon icon={faPhone} size="lg" /> +233557881327</p>
                    <p><FontAwesomeIcon icon={faAddressBook} size="lg" /> support@animo.com</p>
                </Col>
                <Col>
                    <h3>Company</h3>
                    <p onClick={()=>scrollToView_('features')}>Features</p>
                    <p onClick={()=>scrollToView_('about')}>About</p>
                    <p onClick={()=>scrollToView_('workedWith')}>Clients</p>
                </Col>
                <Col>
                    <h3>Resources</h3>
                    <p>FAQs</p>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Footer;