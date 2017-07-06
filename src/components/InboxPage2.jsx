import React from 'react';
import {Button, ButtonGroup, Nav, NavItem, Navbar, buttonsInstance} from "react-bootstrap";



const InboxPage2 = React.createClass({

    render() {
        
        return (
            <div className='InboxPage2'>
              This is Inbox page 2 
              <ButtonGroup vertical>
              <Button className="primary">Button</Button>
              <Button bsStyle="success" bsSize="small">Button</Button>
              <Button>Button</Button>
             <Button>Button</Button>
             </ButtonGroup>
             <Nav>         
              <NavItem>Время</NavItem>
              <NavItem>Счетчики</NavItem>
              <NavItem>Счетчики</NavItem>
              <NavItem>Счетчики</NavItem>
              <NavItem>Счетчики</NavItem>
            </Nav>
            </div>
                                     
        );
    }
});




export default InboxPage2;