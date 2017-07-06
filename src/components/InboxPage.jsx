import React from 'react';
import { Route, RouteHandler, Link} from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, LinkContainer } from 'react-bootstrap';




const InboxPage = React.createClass({

    render() {
        
        return (

        <Navbar inverse collapseOnSelect>
			<Navbar.Header>
						<Navbar.Brand>
						<a href="#">React-Bootstrap</a>
						</Navbar.Brand>            
               <Navbar.Toggle />
            </Navbar.Header>

			    <Navbar.Collapse>
			    <Nav>
			            
			            <NavItem eventKey={1}><Link to="/login">Home</Link></NavItem>
			            <NavItem eventKey={2}>LoginPage</NavItem>
			                        
			    </Nav>

			    </Navbar.Collapse>
         </Navbar>
        );
    }
});

export default InboxPage;