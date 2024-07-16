import { useState, useEffect } from "react";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Circle from "./circleStar.svg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function DobraQuatro() {
  const [tamanhoGleba, setTamanhoGleba] = useState("");
  const [analise, setAnalise] = useState(0);
  const [estudo, setEstudo] = useState(0);
  const [concept, setConcept] = useState(0);
  const [anteproj, setAnteproj] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const [analiseCheck, setAnaliseCheck] = useState(true);
  const [estudoCheck, setEstudoCheck] = useState(false);
  const [conceptCheck, setConceptCheck] = useState(false);
  const [anteprojCheck, setAnteprojCheck] = useState(false);

  useEffect(() => {
    if (tamanhoGleba !== "") {
      let ha = parseFloat(tamanhoGleba);
      const valorBase = getValorBase(ha);
      if (typeof valorBase === "number") {
        setAnalise(valorBase * 0.15);
        setEstudo(valorBase * 0.35);
        setConcept(valorBase * 0.2);
        setAnteproj(valorBase * 0.3);
        setMensagem("");
      } else {
        setMensagem(valorBase);
        setAnalise(0);
        setEstudo(0);
        setConcept(0);
        setAnteproj(0);
      }
    }
  }, [tamanhoGleba]);

  useEffect(() => {
    const total =
      (analiseCheck ? analise : 0) +
      (estudoCheck ? estudo : 0) +
      (conceptCheck ? concept : 0) +
      (anteprojCheck ? anteproj : 0);

    document.getElementById("updateTotal").textContent = total.toLocaleString(
      "pt-br",
      {
        style: "currency",
        currency: "BRL",
      }
    );

    const total20 = total * 0.8;
    document.getElementById("updateTotal20").textContent =
      total20.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

    if (mensagem) {
      document.getElementById("updateTotal").textContent = "R$ 0,00";
      document.getElementById("updateTotal20").textContent = "R$ 0,00";
    }
  }, [
    analiseCheck,
    estudoCheck,
    conceptCheck,
    anteprojCheck,
    analise,
    estudo,
    concept,
    anteproj,
    mensagem,
  ]);

  function getValorBase(ha) {
    if (ha <= 20) {
      return 20 * 650;
    } else if (ha > 300) {
      return "Acima de 300ha falar com um especialista";
    }
    let valorBase = (-1.07291667 * ha + 671.45833) * ha;
    return valorBase;
  }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div id="orcamento" style={{ background: "#F4F4F4" }}>
        <div
          className="col-12 col-sm-10 mx-auto"
          style={{ background: "#F4F4F4" }}
        >
          <Row id="" className="dobra align-content-center">
            <Row className="text-titulo g-0 text-center">
              <h2 className="text-titulo">Faça um Orçamento</h2>
            </Row>
            <Row className="g-0 pt-4 pb-4 nav justify-content-center text-center">
              <Col xs={12} md={12} className="d-flex justify-content-center">
                <nav className="nav text-center">
                  <ul className="nav-list d-flex flex-column flex-md-row justify-content-center align-items-center list-unstyled">
                    <li className="nav-item pb-2 pb-md-0 px-md-3">
                      <a
                        className="h6"
                        href="#item4"
                        onClick={() => handleSelect(0)}
                      >
                        Sob demanda
                      </a>
                    </li>
                    <li className="nav-item pb-2 pb-md-0 px-md-3">
                      <a
                        className="h6"
                        href="#item5"
                        onClick={() => handleSelect(1)}
                      >
                        Pacotes mensais
                      </a>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>

            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls={false}
              interval={null}
              className="carousel-row shadow "
              c
            >
              <Carousel.Item
                id="item4"
                style={{ minHeight: "480px", width: "100%" }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center ">
                  <h2 className="m-0 pb-4 blue titulo-interm">
                    Selecione os serviços e área do seu terreno:
                  </h2>
                  <Row className="justify-content-center w-100">
                    <Col sm={6}>
                      <div
                        id="calc"
                        className="d-flex flex-column align-items-center"
                      >
                        <Row className="p-0 m-0 form-check h6 d-flex align-items-center justify-content-center">
                          <div className="input-container">
                            <input
                              style={{ borderRadius: "20px" }}
                              className="input-area-gleba form-control"
                              type="text"
                              placeholder="Área em Hectares:"
                              id="tamanhoGleba"
                              onChange={(e) => setTamanhoGleba(e.target.value)}
                            />
                            <label className="m-4 blue" id="pacotes">
                              Hectares (ha)
                            </label>
                          </div>
                          {mensagem && (
                            <div
                              style={{
                                color: "red",
                              }}
                            >
                              {mensagem}
                            </div>
                          )}
                        </Row>

                        <Col sm={8} className=" blue form-check h6 pt-4">
                          <table className="custom-table w-100">
                            <tbody>
                              <tr className="table-row">
                                <td className="table-row">
                                  <input
                                    className="form-check-input check-danger calc"
                                    type="radio"
                                    checked={analiseCheck}
                                    onChange={() => {
                                      setAnaliseCheck(true);
                                      setEstudoCheck(false);
                                    }}
                                  />
                                  <div>Análise Territorial:</div>
                                </td>
                                <td className="table-row">
                                  <div className="p" id="analise">
                                    {analise.toLocaleString("pt-br", {
                                      style: "currency",
                                      currency: "BRL",
                                    })}
                                  </div>
                                </td>
                              </tr>
                              <tr className="table-row">
                                <td className="pt-2 table-row">
                                  <input
                                    className="form-check-input check-danger calc"
                                    type="radio"
                                    checked={estudoCheck}
                                    onChange={() => {
                                      setAnaliseCheck(false);
                                      setEstudoCheck(true);
                                    }}
                                  />
                                  <div>Estudo de Viabilidade:</div>
                                </td>
                                <td className="table-row">
                                  <div id="estudo" className="p">
                                    {estudo.toLocaleString("pt-br", {
                                      style: "currency",
                                      currency: "BRL",
                                    })}
                                  </div>
                                </td>
                              </tr>
                              <tr className="table-row">
                                <td className="pt-2 table-row">
                                  <input
                                    className="form-check-input check-danger calc"
                                    type="checkbox"
                                    checked={conceptCheck}
                                    onChange={(e) =>
                                      setConceptCheck(e.target.checked)
                                    }
                                  />

                                  <div>Concept Design:</div>
                                </td>
                                <td className="table-row">
                                  <div className="p" id="concept">
                                    {concept.toLocaleString("pt-br", {
                                      style: "currency",
                                      currency: "BRL",
                                    })}
                                  </div>
                                </td>
                              </tr>
                              <tr className="table-row">
                                <td className="pt-2 table-row">
                                  <input
                                    className="form-check-input check-danger calc"
                                    type="checkbox"
                                    checked={anteprojCheck}
                                    onChange={(e) =>
                                      setAnteprojCheck(e.target.checked)
                                    }
                                  />
                                  <div className="textclass">
                                    Anteprojeto DWG:
                                  </div>
                                </td>
                                <td className="table-row">
                                  <div className="p" id="anteproj">
                                    {anteproj.toLocaleString("pt-br", {
                                      style: "currency",
                                      currency: "BRL",
                                    })}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Col>
                      </div>
                    </Col>
                    <Col
                      sm={3}
                      className="p-0 m-0 g-0 position-relative col-sm-4"
                    >
                      <div className="pt-4 d-flex flex-column justify-content-center align-items-center h-100 position-relative">
                        <img
                          src={Circle}
                          alt="Circle"
                          className="img-fluid"
                          style={{ maxWidth: "200px" }}
                        />
                        <div
                          className="white text-above-map text-center position-absolute"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                          }}
                        >
                          De:
                          <span
                            className="p"
                            style={{
                              textDecoration: "line-through",
                              fontSize: "15px",
                            }}
                            id="updateTotal"
                          >
                            R$ 0,00
                          </span>
                          <br />
                          Por:
                          <span
                            className="p"
                            style={{ fontSize: "25px" }}
                            id="updateTotal20"
                          >
                            R$ 0,00
                          </span>
                        </div>
                      </div>
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
                          href="https://wa.me/5195272351?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista!"
                          className="button shadow"
                        >
                          Solicite Agora com 20% de Desconto
                        </a>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      className="m-0 p-0 g-0 d-flex flex-column align-items-center order-md-3"
                    >
                      <div className="pt-2 blue text-center">
                        <div>OU</div>
                        <div
                          className="pt-2 blue"
                          style={{ textDecoration: "underline" }}
                        >
                          <a
                            style={{ color: "#1890FF" }}
                            href="https://wa.me/5195272351?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista!"
                          >
                            Fale com um Especialista
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Carousel.Item>

              <Carousel.Item
                id="item5"
                style={{ minHeight: "480px", width: "100%" }}
              >
                <div className="justify-content-center align-items-center">
                  <h2 className="pb-4 blue text-center">Planos Mensais</h2>
                </div>

                <Row className="justify-content-center align-items-center">
                  <Col md={4} className="d-flex justify-content-center">
                    <div
                      className="d-flex flex-column justify-content-center"
                      style={{
                        textAlign: "center",
                        background: "#F4F4F4",
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        margin: "20px",
                        minHeight: "350px",
                        width: "250px",
                      }}
                    >
                      <Row
                        className="blue align-items-center"
                        style={{ flex: "1" }}
                      >
                        <Col className="pt-4 button-col d-flex justify-content-center">
                          <div>
                            <p className="h3 fw-bold ">
                              LITE <br />
                            </p>
                            <p style={{ fontSize: "26px" }}>
                              3 Estudos <br />
                              5 Análises <br />
                            </p>
                            <p style={{ fontSize: "16px" }}>R$ 10.800,00</p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="pb-4 justify-content-center mt-auto">
                        <a
                          href="https://wa.me/5195272351?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista!"
                          className="button shadow w-50 pt-2 mt-2 d-block"
                        >
                          Saiba Mais
                        </a>
                      </Row>
                    </div>
                  </Col>

                  <Col md={4} className="d-flex justify-content-center">
                    <div
                      className="d-flex flex-column justify-content-center"
                      style={{
                        textAlign: "center",
                        background: "#1890FF",
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        margin: "20px",
                        minHeight: "350px",
                        width: "250px",
                      }}
                    >
                      <Row
                        className="white align-items-center"
                        style={{ flex: "1" }}
                      >
                        <Col className="pt-4 button-col d-flex justify-content-center ">
                          <div>
                            <p className=" h3 fw-bold ">
                              PROMO <br />
                            </p>
                            <p style={{ fontSize: "26px" }}>
                              5 Estudos <br />
                              10 Análises <br />
                            </p>
                            <p style={{ fontSize: "16px" }}>R$ 15.600,00</p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="pb-4 justify-content-center mt-auto">
                        <a
                          href="https://wa.me/5195272351?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista!"
                          className="button-white shadow w-50 pt-2 mt-2 d-block"
                        >
                          Saiba Mais
                        </a>
                      </Row>
                    </div>
                  </Col>

                  <Col md={4} className="d-flex justify-content-center">
                    <div
                      className="d-flex flex-column justify-content-center"
                      style={{
                        textAlign: "center",
                        background: "#F4F4F4",
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        margin: "20px",
                        minHeight: "350px",
                        width: "250px",
                      }}
                    >
                      <Row
                        className="blue align-items-center"
                        style={{ flex: "1" }}
                      >
                        <Col className="pt-4 button-col d-flex justify-content-center">
                          <div>
                            <p className="h3 fw-bold">
                              PRO <br />
                            </p>
                            <p style={{ fontSize: "26px" }}>
                              10 Estudos <br />
                              15 Análises <br />
                            </p>
                            <p style={{ fontSize: "16px" }}>R$ 28.200,00</p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="pb-4 justify-content-center mt-auto">
                        <a
                          href="https://wa.me/5195272351?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista!"
                          className="button shadow w-50 pt-2 mt-2 d-block"
                        >
                          Saiba Mais
                        </a>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>

            <Row className="g-0 pt-4 justify-content-center">
              <Col
                xs={12}
                md={6}
                className="g-0 white w-100 mx-auto d-flex flex-column align-items-center"
                style={{
                  backgroundColor: "#1890FF",
                  borderRadius: "20px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <Row className="align-items-center w-100">
                  <Col
                    xs={12}
                    md={8}
                    className="text-center text-md-start mb-4 mb-md-0"
                  >
                    <p className="h3">
                      Quer desenvolver uma tecnologia sob encomenda?
                    </p>
                    <p>
                      Provas de conceito (POC) a partir de R$25.500,00. Fale com
                      nosso CEO
                    </p>
                  </Col>
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex justify-content-center justify-content-md-end"
                  >
                    <a
                      href="https://wa.me/51995912351?text=Oi%2C%20quero%20fazer%20uma%20prova%20de%20conceito."
                      className="w-100 w-md-50  button-white shadow text-center"
                    >
                      Fale com o CEO
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DobraQuatro;
