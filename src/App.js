import { Fragment, useState } from 'react';
import { Container,Col, Row, Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Biografy from './components/Biografy'
import CardHereo from './components/CardHeroe'

function App() {

  var [movie, setMovie] = useState({});
  var [hasPersonaje , setHasPersonaje] = useState(false);
  var [hasBiografy , setHasBiografy] = useState(false);
  var [url , setUrl] = useState("");
  var [biografy, setBiografy] = useState({});

  const consultarPersonaje = async () => {
    setHasPersonaje(false);
    try {
      var urlAux = 'https://www.superheroapi.com/api.php/4083527108407054/' + Math.floor(Math.random() * (700 - 1 + 1) + 1);       
      const api = await fetch(urlAux);
      const movie = await api.json();
      console.log(movie)
      setMovie(movie);
      setHasPersonaje(true);
      setHasBiografy(false)
      setUrl(urlAux);
    } catch (error) {
      console.log(error);
    }
  };



  const consultarBiografia = async () => {
    setHasBiografy(false);
    if(hasPersonaje){
      try {
        const api = await fetch(url+'/biography');
        const biografy = await api.json();
        setHasBiografy(true)
        setBiografy(biografy)
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Fragment>
      <Container>
      <Row   >
        <Col sm={2}></Col>
        <Col sm={8}>
          <Container className="principal">
         
              <Jumbotron className="home">
                <h1 className="title">Hello, welcome !</h1>
                <h2 className="title">click here and discover a character</h2>
                <p>
                  <Button variant="warning"  onClick={consultarPersonaje}>
                 <b> Random Character</b>
                  </Button>
                </p>
              </Jumbotron>
              <Container>
                <Row>
                  <Col sm={7}>
                    {hasPersonaje && <CardHereo data={movie} onClick={consultarBiografia} /> }
                  </Col>

                  <Col sm={5}>
                    {hasBiografy && <Biografy biografy={biografy} />}
                  </Col>
                </Row>
               </Container>


          </Container>
      </Col>
      <Col sm={2}></Col>

{/*     <div>
          <Row >
            <Col  Class="col-xs-12 .col-md-8" >
              
              <Button
                variant="light"
                onClick={consultarPersonaje}>
                DAME UN PERSONAJE!
              </Button>
            </Col>
            <Col  class="col-md-12" >
              { hasPersonaje && <Button
                variant="light"
                onClick={consultarBiografia}>
                BIOGRAFIA!
              </Button>}

            </Col>
          </Row>
          <Row>
            <Col  Class="col-xs-12 .col-md-8" >
              <Movie movie={movie}/>
            </Col>
            <Col  class="col-md-12">
              {hasBiografy &&
            <Biografy biografy={biografy}/>
              }
            </Col>
          </Row>

        </div> */}
        </Row>
      </Container>
    </Fragment>

  );
}

export default App;
