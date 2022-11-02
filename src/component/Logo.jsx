import React from 'react';
import { Badge, Image } from 'react-bootstrap';


const ProjectLogo = () => {
    return (
        <Badge bg="dark" style={{ paddingTop: "12px" }}>
            <Image src='../../twitter-icon.png' />
            <h3 style={{ lineHeight: "0.5", paddingTop: "12px" }}>Tweet Everything</h3>
        </Badge>);
};

export default ProjectLogo;