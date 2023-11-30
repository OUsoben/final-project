import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navStyle.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark  item-style">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav   text-center ">
          <Nav className="mx-5   p-2 nav-list ">
            <NavLink className={'nav-link text-white ms-3  '} to={"/"} >Home</NavLink>
            <NavLink className={'nav-link text-white ms-3'} to={"/services"} >Service</NavLink>
            <NavLink className={'nav-link text-white ms-3'} to={"products"} >Products</NavLink>
            <NavLink className={'nav-link text-white ms-3'} to={"/aboutus"} >About Us</NavLink>
            <NavLink className={'nav-link text-white ms-3'} to={"/dashboard"}  >Dashboard</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>

       <div className='pe-4'>
        <button className='btn text-white me-2'>Login</button>
        <button className='btn btn-danger '>Sign In </button>
       </div>
    </Navbar>
  );
}

export default NavBar;