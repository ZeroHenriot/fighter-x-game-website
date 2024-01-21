import { Button, Col, Container, Row } from 'react-bootstrap'

const Homepage = () => {
  return (
    <>
      <Container className="vh-100 d-flex flex-column">
        <Row id="maincontent">
          <Col md={6}>
            <span className="alertyellow slogan">The future in your hands</span>
            <Row className="mt-3">
              <Col md={8}>
                <p className="display-4 text-white fw-bold">
                  Save the future from the hands of robots
                </p>
                <p className="text-white-50 fs-5">
                  The population is in danger and needs a hero to be able to
                  find the special command.
                </p>
                <div className="d-flex justify-content-between">
                  <div id="btncontainer">
                    <Button id="playbtnmain" className="fs-5">
                      Play free
                    </Button>
                  </div>
                  <div id="btncontainer">
                    <Button id="learnmorebtn" className="fs-5">
                      Learn more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Homepage
