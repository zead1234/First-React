import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar (){
    return(
        <div>
        <Navbar classnName="text-center" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand  href="#home">My-React-Bootstrap-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
        </Container>
      </Navbar>
      </div>
    )
}

export default NavBar;