import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Controller } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <>
      <Navbar className="pt-4 border-bottom text-white" id="navbar">
        <Container className="pb-3 ">
          <div id="logo" className="display-5">
            Fighter <span className="fw-bold mediumgreen">X</span>
          </div>
          <div className="d-flex align-items-center ">
            <Nav className="fs-5">
              <Link to="/" className={`nav-link me-3 navbarLink text-white `}>
                About
              </Link>
              <Link to="/" className={`nav-link me-3 navbarLink text-white `}>
                Discovery
              </Link>
              <Link to="/" className={`nav-link me-3 navbarLink text-white `}>
                Soldiers
              </Link>
              <Link to="/" className={`nav-link me-3 navbarLink text-white `}>
                E-sports <Controller />
              </Link>
            </Nav>
          </div>
          <div id="btncontainer">
            <Button id="playbtn" className="fs-5">
              Play free
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
