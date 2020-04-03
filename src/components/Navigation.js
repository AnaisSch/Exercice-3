import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        
        <Nav className="justify-content-end" variant="pills" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link as={Link} to="/" href="/">
                    Accueil
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/comments/create" eventKey="/comments/create">
                    Créer un commentaire
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/comments/delete" eventKey="/comments/delete">
                    Supprimer un commentaire
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;