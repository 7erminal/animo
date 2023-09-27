import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props = {
    name: string
    desc: string
    image: string
    role: string
}

const ProfileBox: React.FC<Props> = ({name, role, desc, image}) => {
    return <Card style={{ width: '90%' }} bg="Light">
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Title>{name}<br/><h6>{ role }</h6></Card.Title>
        <Card.Text>
            { desc }
        </Card.Text>
        {/* <Button variant="primary"></Button> */}
        </Card.Body>
    </Card>
}

export default ProfileBox;