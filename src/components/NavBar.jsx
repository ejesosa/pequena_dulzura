import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget.jsx';
import logo from '../img/logo_pequena_dulzura.png';



function NavBar() {

return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="Logo_Pequeña_Dulzura"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        <span className="nav_brand" >Pequeña Dulzura</span>
      </Navbar.Brand>
      <Nav className="align-items-center d-lg-flex">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#products">Productos</Nav.Link>
      <Nav.Link href="#order"> <CartWidget/> </Nav.Link>
      </Nav>

    </Container>
  </Navbar>
)

}

export default NavBar