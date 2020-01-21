import React from 'react';
import Title from './Title';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation(props) {
    console.log(props)
    return (
        <>
            <Navbar bg="dark" variant="light" sticky="top">
                <Navbar.Brand>
                    <Title />
                </Navbar.Brand>
            </Navbar>
            <Nav className="flex-column" style={{width: '15%', backgroundColor: '#F7F7FF'}}>
                <Nav.Link>Active</Nav.Link>
                <Nav.Link>Link</Nav.Link>
                <Nav.Link>Link</Nav.Link>
                <Nav.Link>Link</Nav.Link>
            </Nav>
        </>
    )
}

export default Navigation