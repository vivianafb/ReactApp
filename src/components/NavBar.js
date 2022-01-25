import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import './NavBar.css'
function NavBar() {
  return (
    <Navbar className="color-nav" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="text-color" href="#">Pinki</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link  href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Productos</Nav.Link>      
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-light">Log In</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
