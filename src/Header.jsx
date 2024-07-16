import { useState } from "react";
import Logo from "./logo_branco.svg";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Header() {
  const [focusedItem, setFocusedItem] = useState(0);
  const [showIframe, setShowIframe] = useState(false);

  const handleItemClick = (index) => {
    setFocusedItem(index);
    if (index === 5) {
      setShowIframe(true);
    } else {
      setShowIframe(false);
    }
  };

  return (
    <>
      <header
        id="header"
        className="header"
        style={{ zIndex: 9999, position: "fixed" }}
      >
        <div
          className="header-content"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Navbar expand="lg" style={{ flexGrow: 1, width: "100%" }}>
            <Container
              fluid
              style={{
                display: "flex",
              }}
            >
              <Navbar.Brand href="#home">
                <div className="logo-col">
                  <img src={Logo} alt="Logo" className="logo-image-header" />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  className="me-auto"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <ul
                    className="nav-list"
                    style={{ display: "flex", width: "50%" }}
                  >
                    <Nav.Link href="#home">
                      <li className="nav-item">
                        <a
                          href="#home"
                          style={{ fontWeight: 500 }}
                          className={focusedItem === 0 ? "focused" : ""}
                          onClick={() => handleItemClick(0)}
                        >
                          Home
                        </a>
                      </li>
                    </Nav.Link>

                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#clientes"
                          style={{ fontWeight: 500 }}
                          className={focusedItem === 1 ? "focused" : ""}
                          onClick={() => handleItemClick(1)}
                        >
                          Clientes
                        </a>
                      </li>
                    </Nav.Link>

                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#solucoes"
                          style={{ fontWeight: 500 }}
                          className={focusedItem === 2 ? "focused" : ""}
                          onClick={() => handleItemClick(2)}
                        >
                          Soluções
                        </a>
                      </li>
                    </Nav.Link>

                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#orcamento"
                          style={{ fontWeight: 500 }}
                          className={focusedItem === 3 ? "focused" : ""}
                          onClick={() => handleItemClick(3)}
                        >
                          Orçamento
                        </a>
                      </li>
                    </Nav.Link>

                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#contato"
                          style={{ fontWeight: 500 }}
                          className={focusedItem === 4 ? "focused" : ""}
                          onClick={() => handleItemClick(4)}
                        >
                          Contato
                        </a>
                      </li>
                    </Nav.Link>

                    <Nav.Link href="#link">
                      <li className="nav-item">
                        
                        <a
                          href="#blog"
                          style={{ fontWeight: 500 }}
                          className={focusedItem === 5 ? "focused" : ""}
                          onClick={() => handleItemClick(5)}
                        >
                          Blog
                        </a>
                      </li>
                    </Nav.Link>
                  </ul>
                </Nav>
                <div className="button-col">
                  <a
                    href="https://urbia.painel.roxcode.io"
                    className="button shadow"
                    target="_blank"
                  >
                    Acessar Plataforma
                  </a>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>

      {showIframe && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            width: "100%",
            height: "calc(100% - 70px)",
            zIndex: 9998,
          }}
        >
          <iframe
            src="https://urbia.com.br/blog"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      )}
    </>
  );
}

export default Header;
