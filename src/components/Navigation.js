import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        
        <Nav className="justify-content-end" variant="pills" >
            <Nav.Item>
                <Nav.Link as={NavLink} exact={true} to="/">
                    Accueil
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/comments/create">
                    Créer un commentaire
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/comments/delete">
                    Supprimer un commentaire
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;