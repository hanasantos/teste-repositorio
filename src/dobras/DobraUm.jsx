import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Whatsapp } from "react-bootstrap-icons";


function DobraUm() {
  return (
    <div
      style={{
        paddingTop: "50px",
        background: "#F4F4F4",
      }}
    >
      <div
        className="col-12 col-sm-10 mx-auto"
        style={{ background: "#F4F4F4" }}
      >
        {" "}
        <a
          href="https://wa.me/5195272351?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista!"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp size={30} className="whatsapp-icon shadow" />
        </a>
        <Col xs={12}>
          <Row
            id="home"
            className="dobra align-content-center"
            style={{ background: "#F4F4F4" }}
          >
            <Col
              xs={12}
              md={5}
              className="m-0 p-0 d-flex flex-column justify-content-center  text-center"
            >
              <div>
                <div className="h1-desktop g-0 m-0 p-0 blue fw-bold">
                  Viabilidades<br></br> Urbanas Ágeis
                </div>
                <div>
                  <p className="pt-4 text-center" style={{ fontSize: "18px" }}>
                    Descubra em apenas 3 dias*
                    <br />
                    se um terreno é viável para seu
                    <br /> empreendimento imobiliário
                  </p>
                </div>
                <div className="text-center blue">
                  <p className="fw-bold h3" style={{ fontSize: "18px" }}>
                    Enviando apenas o arquivo KMZ
                  </p>
                </div>{" "}
              </div>
            </Col>
            <Col></Col>
            <Col
              xs={12}
              md={6}
              className="g-0 m-0 h-100 d-flex align-items-end "
            >
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/neMJoLCsLBU?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0"
                  className="video-iframe"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>

            <Col
              xs={12}
              md={12}
              className="m-0 p-0 g-0 d-flex mt-4 pt-4 padding-top-5 order-3 order-md-3"
            >
              <div className="button-col-dobra">
                <a
                  href="https://wa.me/19997154386?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista!"
                  className="button shadow"
                  target="_blank"
                >
                  Fale com um Especialista
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default DobraUm;
