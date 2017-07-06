import React from 'react';
import { Link } from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, LinkContainer } from 'react-bootstrap';

import './components/InboxPage2.less';


const App = React.createClass({
    render() {
        return (
        <div className='app'>
            <Navbar inverse collapseOnSelect>
			    <Nav>
			            
			            <NavItem eventKey={1}><Link to="/Mercur">Меркурий</Link></NavItem>
			            <NavItem eventKey={2}><Link to="/Venera">Венера</Link></NavItem>
			             <NavItem eventKey={3}><Link to="/Zemlia">Земля</Link></NavItem>
			             <NavItem eventKey={4}><Link to="/Mars">Марс</Link></NavItem>
			              <NavItem eventKey={5}><Link to="/Jupiter">Юпитер</Link></NavItem>
			              <NavItem eventKey={6}><Link to="/Saturn">Сатурн</Link></NavItem>
			              <NavItem eventKey={7}><Link to="/Uran">Уран</Link></NavItem>
			              <NavItem eventKey={8}><Link to="/Neptun">Нептун</Link></NavItem>
			              <NavItem eventKey={9}><Link to="/Karlik">Карликовые планеты</Link></NavItem>
			            


          
			    </Nav>
			    </Navbar>
			   

                    <div className='content'>
                    {this.props.children}
                    </div>
                               
                  
                   
            </div>
           );
    }
});

export default App;
