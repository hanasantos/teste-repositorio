import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Equipe from "./equipe.jpg";
import Bandeira from "./Bandeira-RS.jpg";

function DobraSeis() {
  return (
    <>

      <Row className="dobra g-0 d-flex">

        <Col xs={12} md={6}>
          <img className="images img-fluid" src={Equipe} alt="Equipe" />
        </Col>


        <Col xs={12} md={6}>
          <img
            className="bandeira-img img-fluid"
            src={Bandeira}
            alt="Bandeira"
          />
        </Col>
      </Row>
    </>
  );
}

export default DobraSeis;
