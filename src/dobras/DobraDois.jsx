import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Mapa from "./mapaurbia.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import logo_bairru from "./logo_bairru.svg";
import logo_conviver from "./logo_conviver.svg";
import logo_buriti from "./logo_buriti.svg";
import logo_cyrela from "./logo_cyrela.svg";
import logo_fronte from "./logo_fronte.svg";
import logo_habitasul from "./logo_habitasul.svg";
import logo_itv from "./logo_itv.svg";
import logo_jmd from "./logo_jmd.svg";
import logo_urba from "./logo_urba.svg";
import logo_ginco from "./logo_ginco.svg";

function DobraDois() {
  return (
    <>
      <div id="clientes">
        <div style={{ background: "white" }}>
          <div
            className="col-12 col-sm-10 mx-auto"
            style={{ padding: "30px", background: "white" }}
          >
            <Row
              id=""
              className="dobra align-content-center"
              style={{ background: "white" }}
            >
              <Row className="text-titulo g-0 text-center">
                <h2 className="text-titulo">
                  Nossos resultados em apenas 3 anos
                </h2>
              </Row>
              <Row className="g-0 text-center justify-content-center d-block">
                <div
                  className="blue row g-0 d-flex flex-wrap justify-content-center"
                  style={{ fontSize: "18px" }}
                >
                  <div className="col-5 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block">
                      Todos
                    </span>
                    <span>Estados</span>
                  </div>

                  <div className="vr"></div>

                  <div className="col-5 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block">
                      +400
                    </span>
                    <span>Estudos</span>
                  </div>

                  <div className="vr d-none d-sm-block"></div>

                  <div className="col-5 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block mt-sm-0 mt-4">
                      +140
                    </span>
                    <span>Clientes</span>
                  </div>

                  <div className="vr"></div>

                  <div className="col-5 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block mt-sm-0 mt-4">
                      +80
                    </span>
                    <span>Cidades</span>
                  </div>

                  <div className="vr d-none d-sm-block"></div>

                  <div className="col-12 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block mt-sm-0 mt-4">
                      +20k HA
                    </span>
                    <span>Projetados</span>
                  </div>
                </div>
              </Row>
              <Row className="g-0 m-0 p-0 justify-content-center align-items-center text-center">
                <Col
                  xs={12}
                  md={6}
                  className="map-col d-flex justify-content-center"
                >
                  <img
                    className="img-fluid-map w-75 h-auto"
                    src={Mapa}
                    alt="Mapa"
                  />
                </Col>

                <Col
                  xs={12}
                  md={6}
                  style={{ maxWidth: "auto", maxHeight: "auto" }}
                >
                  <Row className="g-0 d-flex align-items-center">
                    {[
                      { logo: logo_buriti, align: "align-center-var" },
                      { logo: logo_conviver, align: "align-start-var" },
                      { logo: logo_bairru, align: "align-center-var" },
                      { logo: logo_cyrela, align: "align-start-var" },
                      { logo: logo_fronte, align: "align-center-var" },
                      { logo: logo_habitasul, align: "align-start-var" },
                      { logo: logo_itv, align: "align-center-var" },
                      { logo: logo_jmd, align: "align-start-var" },
                      { logo: logo_urba, align: "align-center-var" },
                      { logo: logo_ginco, align: "align-start-var" },
                    ].map(({ logo, align }, index) => (
                      <Col
                        xs={6}
                        sm={6}
                        md={6}
                        className={`g-0 d-flex align-items-center pt-4 ${align}`}
                        key={index}
                      >
                        <img
                          className="img-fluid-logo"
                          src={logo}
                          alt={`logo_${index}`}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>

                <Col
                  xs={12}
                  className="m-0 p-0 g-0 d-flex justify-content-center  order-md-3"
                >
                  <div
                    className="button-col-dobra pt-4"
                    style={{ width: "100%" }}
                  >
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
            </Row>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default DobraDois;
