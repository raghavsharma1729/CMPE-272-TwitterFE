import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import ProjectLogo from './Logo';
/**
 * Author: Raghav Sharma <raghav.sharma01@sjsu.edu>
*/
const Footer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="footer">
            <Container>
                <Navbar.Brand href="#home" style={{ textAlign: 'left' }}>
                    <ProjectLogo />

                </Navbar.Brand>

                <Nav style={{ flexDirection: 'column' }}>
                    <div style={{ textAlign: 'left', color: 'white' }}>
                        <h5><Nav.Link href="https://www.linkedin.com/in/raghav-sharma-80629a147/" target="_blank"> Developed By : Team Leonidas</Nav.Link></h5>
                        <h5><Nav.Link href="mailto: raghav.sharma01@sjsu.edu">raghav.sharma01@sjsu.edu</Nav.Link></h5>
                        <h5><Nav.Link href="mailto: ramasaigurunadh.dara@sjsu.edu">ramasaigurunadh.dara@sjsu.edu</Nav.Link></h5>
                        <h5><Nav.Link href="mailto: sakshisanjay.kekre@sjsu.edu">sakshisanjay.kekre@sjsu.edu</Nav.Link></h5>
                        <h5><Nav.Link href="mailto: noharreddy.gurrala@sjsu.edu">noharreddy.gurrala@sjsu.edu</Nav.Link></h5>
                    </div>
                </Nav>
            </Container>
        </Navbar >

    );
}

export default Footer;