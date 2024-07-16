import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function DobraCinco() {
  return (
    <>
      <Row className="justify-content-center" style={{ margin: "50px" }}>
        <Col xs={12} md={8}>
          <h1
            className="h3 fw-bold text-center"
            style={{ letterSpacing: "2.5px" }}
          >
            Estudos ágeis <span className="fw-lighter">de</span>{" "}
          </h1>
          <div style={{ margin: "50px" }}>
            <Row className="justify-content-center">
              <div className="h2 text-left">Análise Territorial</div>
            </Row>

            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4}>
                <Card className="card mx-auto rounded-4">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent className="text-center">
                    <Typography gutterBottom variant="h6" component="div">
                      Depoimento
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Todos os dados legais pertinentes à sua área como
                      zoneamento, gabaritos viários, doações ao município e
                      índices de blablablabla
                    </Typography>
                  </CardContent>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <Card className="card mx-auto rounded-4">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent className="text-center">
                    <Typography gutterBottom variant="h6" component="div">
                      Depoimento
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <Card className="card mx-auto rounded-4">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent className="text-center">
                    <Typography gutterBottom variant="h6" component="div">
                      Depoimento
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DobraCinco;
