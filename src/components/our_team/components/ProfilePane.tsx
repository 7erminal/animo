import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
    color_: string
    name: string
    picture: string
    role: string
    description: string
}

const ProfilePane: React.FC<Props> = ({color_, name, picture, role, description}) => {
    return <section style={{ position: 'relative', paddingTop: '10px', paddingBottom: '10px', width: '100%', backgroundColor: color_ }}>
        <Container fluid>
            <Row>
                <Col xs={12} md={4}><div className="pictureTeam" style={{backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div></Col>
                <Col xs={12} md={8} style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}><div className="contentTeam"><p>{description}</p></div></Col>
            </Row>
        </Container>
    </section>
}

export default ProfilePane