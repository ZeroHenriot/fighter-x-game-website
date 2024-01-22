import { Container } from 'react-bootstrap'
import { Apple, Microsoft, Playstation, Xbox } from 'react-bootstrap-icons'

const MyFooter = () => {
  return (
    <>
      <div className="py-3 mt-4 border-top">
        <Container className="d-flex flex-wrap justify-content-between align-items-center ">
          <p className="text-white fs-4 mb-0">Platforms available</p>

          <div className="d-flex">
            <span className="d-flex align-items-center fs-3 mx-5">
              <Xbox /> Xbox
            </span>
            <span className="d-flex align-items-center fs-3 mx-5">
              <Microsoft /> Microsoft
            </span>
            <span className="d-flex align-items-center fs-3 mx-5">
              <Apple /> Apple
            </span>
            <span className="d-flex align-items-center fs-3 mx-5">
              <Playstation /> Playstation
            </span>
          </div>
        </Container>
      </div>
    </>
  )
}
export default MyFooter
