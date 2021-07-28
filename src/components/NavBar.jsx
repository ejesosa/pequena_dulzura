import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'


function NavBar() {

return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="static/media/logo_pequena_dulzura.3b502a38.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       Pequeña Dulzura
      </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#products">Productos</Nav.Link>
      <Nav.Link href="#order">Carrito  </Nav.Link>
    </Nav>

    </Container>
  </Navbar>
)

}

export default NavBar