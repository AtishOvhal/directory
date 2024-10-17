import React from "react";
import logo from "../../public/image/logo.png";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { GoBell } from "react-icons/go";

function Navigation() {
  return (
    //     <div>
    // <nav className="navbar navbar-expand navbar-dark bg-lignt">
    //  <img src={logo} className='w-10' alt="" />
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarsExample02"
    //     aria-controls="navbarsExample02"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarsExample02">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="#">
    //           Home <span className="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Link
    //         </a>
    //       </li>
    //     </ul>
    //     <form className="form-inline my-2 my-md-0">
    //       <input className="form-control" type="text" placeholder="Search" />
    //     </form>
    //   </div>
    // </nav>

    //     </div>
    <Navbar bg="light" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} className="w-10" alt="" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <div className="d-flex align-items-center">
          <Nav.Link href="#home">
            <div>
            <GoBell  size={'35px'}/>
            {/* <Badge bg="danger"></Badge> */}
            </div>
           
          </Nav.Link>
          <Nav.Link href="#features">
            <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg"  className='img-thumbnail w-15 rounded-circle' alt="" />
          </Nav.Link>
          <Nav.Link href="#pricing"> Jone Doe</Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
