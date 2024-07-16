import { useState } from "react";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import imagem_analise from "../img/imagem_analise.png";
import imagem_evu from "../img/imagem_evu.png";
import imagem_outros from "../img/imagem_outros.png";
import { CloudDownload } from "react-bootstrap-icons";
import RAT from "./EX_ANALISE_TERRITORIAL_2024.pdf";
import RE from "./URBIA_EV_LOTEAMENTO ABERTO_ENTRADA COMERCIAL.pdf";
import ROS from "./CONCEPT_MASTER EQUESTRE.pdf";

function DobraTres() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div id="solucoes" style={{ background: "#F4F4F4" }}>
        <div
          className="col-12 col-sm-10 mx-auto"
          style={{ background: "#F4F4F4" }}
        >
          <Row id="" className="dobra align-content-center">
            <Row className="text-titulo g-0 text-center">
              <h2 className="text-titulo">Soluções e tecnologias</h2>
            </Row>
            <Row className="g-0 pt-4 pb-4 nav justify-content-center text-center">
              <Col xs={12} md={12} className="d-flex justify-content-center">
                <nav className="nav text-center">
                  <ul className="nav-list d-flex flex-column flex-sm-row justify-content-center align-items-center list-unstyled">
                    <li className="nav-item pb-2 pb-sm-0 px-sm-3">
                      <a
                        className="h6"
                        href="#item1"
                        onClick={() => handleSelect(0)}
                      >
                        Análise territorial
                      </a>
                    </li>
                    <li className="nav-item pb-2 pb-sm-0 px-sm-3">
                      <a
                        className="h6"
                        href="#item2"
                        onClick={() => handleSelect(1)}
                      >
                        Estudo de viabilidade
                      </a>
                    </li>
                    <li className="nav-item pb-2 pb-sm-0 px-sm-3">
                      <a
                        className="h6"
                        href="#item3"
                        onClick={() => handleSelect(2)}
                      >
                        Outras soluções
                      </a>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
            <div className="p-0 m-0">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                interval={null}
                className="carousel-row-card shadow "
              >
                <Carousel.Item id="item1">
                  <Row className="align-items-center text-center text-md-start">
                    <Col
                      xs={12}
                      md={5}
                      className=" d-flex justify-content-center justify-content-md-start"
                    >
                      <img
                        className="images "
                        src={imagem_analise}
                        alt="imagem_analise"
                      />
                    </Col>
                    <Col xs={12} md={7}>
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start w-100 break-mobile">
                          <h2 className="m-0 pt-4 blue titulo-interm">
                            Análise Territorial
                          </h2>
                          <div className="text-center align-items-center button-horas g-0 padding-mobile margem-mobile margin-top-mobile ms-auto">
                            48h
                          </div>
                        </div>
                        <div className="pt-4">
                          <div>• Topografia aproximada do terreno;</div>
                          <br />
                          <div>• Levantamento da Legislação;</div>
                          <br />
                          <div>• Principais APPs e restrições ambientais;</div>
                          <br />
                          <div>• Malha fundiária;</div>
                          <br />
                          <div>• Biomas e vegetações predominantes;</div>
                        </div>
                        <Col xs={12} className="pt-4 button-container">
                          <Row>
                            <Col xs={12} md={6} className="d-flex">
                              <a
                                href="https://www.youtube.com/@urbia_urban_tech/featured"
                                 className="button shadow" target="_blank"
                              >
                                Saiba Mais
                              </a>
                            </Col>
                            <Col
                              xs={12}
                              md={6}
                              className="d-flex justify-content-center"
                            >
                              <a
                                href={RAT}
                                download="Exemplo_Análise_Territorial.pdf"
                                target="_blank"
                                 className="button shadow"
                              >
                                <CloudDownload
                                  size={20}
                                  className={RAT.navLink}
                                />{" "}
                                Download
                              </a>
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>

                <Carousel.Item id="item2">
                  <Row className="align-items-center text-center text-md-start">
                    <Col
                      xs={12}
                      md={5}
                      className="d-flex justify-content-center justify-content-md-start"
                    >
                      <img
                        className="images "
                        src={imagem_evu}
                        alt="imagem_evu"
                      />
                    </Col>
                    <Col xs={12} md={7}>
                      <div className="d-flex flex-column ">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start w-100 break-mobile">
                          <h2 className="m-0 blue pt-4 titulo-interm">
                            Estudo de Viabilidade
                          </h2>
                        </div>
                        <div className="pt-4 ">
                          <div>• Consultoria ambiental;</div>
                          <br />
                          <div>• Planejamento urbano;</div>
                          <br />
                          <div>• Desenvolvimento de projetos sustentáveis;</div>
                          <br />
                          <div>• Gestão de recursos hídricos;</div>
                          <br />
                          <div>• Soluções tecnológicas inovadoras;</div>
                        </div>
                        <Col xs={12} className="pt-4 button-container">
                          <Row>
                            <Col xs={12} md={6} className="d-flex">
                              <a
                                href="https://www.youtube.com/@urbia_urban_tech/featured"
                                 className="button shadow" target="_blank"
                              >
                                Saiba Mais
                              </a>
                            </Col>
                            <Col
                              xs={12}
                              md={6}
                              className="d-flex justify-content-center"
                            >
                              <a
                                href={RE}
                                download="Exemplo_Estudo_Viabilidade.pdf"
                                target="_blank"
                                 className="button shadow"
                              >
                                <CloudDownload
                                  size={20}
                                  className={RE.navLink}
                                />{" "}
                                Download
                              </a>
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>

                <Carousel.Item id="item3">
                  <Row className="align-items-center text-center text-md-start">
                    <Col
                      xs={12}
                      md={5}
                      className="d-flex justify-content-center justify-content-md-start"
                    >
                      <img
                        className="images "
                        src={imagem_outros}
                        alt="imagem_outros"
                      />
                    </Col>
                    <Col xs={12} md={7}>
                      <div className="d-flex flex-column ">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start w-100 break-mobile">
                          <h2 className="m-0 blue pt-4 titulo-interm">
                            Outras Soluções
                          </h2>
                        </div>
                        <div className="pt-4">
                          <div>• Consultoria ambiental;</div>
                          <br />
                          <div>• Planejamento urbano;</div>
                          <br />
                          <div>• Desenvolvimento de projetos sustentáveis;</div>
                          <br />
                          <div>• Gestão de recursos hídricos;</div>
                          <br />
                          <div>• Soluções tecnológicas inovadoras;</div>
                        </div>
                        <Col xs={12} className="pt-4 button-container">
                          <Row>
                            <Col xs={12} md={6} className="d-flex">
                              <a
                                href="https://www.youtube.com/@urbia_urban_tech/featured"
                                 className="button shadow" target="_blank"
                              >
                                Saiba Mais
                              </a>
                            </Col>
                            <Col
                              xs={12}
                              md={6}
                              className="d-flex justify-content-center"
                            >
                              <a
                                href={ROS}
                                download="Exemplo_Outros_Serviços.pdf"
                                target="_blank"
                                 className="button shadow"
                              >
                                <CloudDownload
                                  size={20}
                                  className={ROS.navLink}
                                />{" "}
                                Download
                              </a>
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DobraTres;
