import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from "react-bootstrap";
import {Container}
 from "react-bootstrap";
const  NavBar= ()=>
    {
        return(
            
            <Navbar expand="lg" className="nav">
            <Container fluid>
              <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={'/table'}>Employee Details</Nav.Link>
                  <Nav.Link as={Link} to={'/registration'}>Employee Registration</Nav.Link>
                  <Nav.Link as={Link} to={'/delete'}>Employee Deletion</Nav.Link>
                  <Nav.Link as={Link} to={'/update'}>Employee Update</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        );
    } 
export default NavBar;