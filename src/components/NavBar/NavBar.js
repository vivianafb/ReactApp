import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="color-nav" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="text-color" href="/">
          PinkiStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to={`/category/1`} className="Boton">
              Tops
            </NavLink>
            <NavLink to={`/category/2`} className="Boton">
              Bottoms
            </NavLink>
            <NavLink to={`/category/3`} className="Boton">
              Accesorios
            </NavLink>
          </Nav>

          <Form className="d-flex">
            <Button variant="outline-light">Log In</Button>
            <CartWidget />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
