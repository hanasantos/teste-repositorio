import Logo from "./logo_azul.svg";
import "./Footer.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <Row id="contato" className="footer" style={{ position: "static" }}>
      <div
        className="footer-content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Col>
          <div className="footer-column text-center">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img className="logo-col-f logo-image" src={Logo} alt="Logo" />
              <div className="pt-4">
                Instituto Caldeira de Inovação <br />
                Tv. São José, 455 - Navegantes
                <br />
                Porto Alegre - RS
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="footer-column text-center">
            Comercial: <br />
            comercial@urbia.com.br
            <br />
            (19) 9971-54386
          </div>
        </Col>

        <Col>
          <div className="pt-2 footer-column text-center">
            Urbanismo Estudos:
            <br /> estudos@urbia.com.br
            <br /> (51) 9925-88679
          </div>
        </Col>

        <Col>
          <div className="pt-2 footer-column text-center">
            Financeiro Adm:
            <br /> adm@urbia.com.br
            <br /> (51) 9959-12351
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Footer;
