import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img2 from '../img/imagen2.jpeg'
import img3 from '../img/imagen3.jpeg'
import img4 from '../img/imagen4.jpeg'
import img5 from '../img/imagen5.jpeg'
import img6 from '../img/imagen6.jpeg'
import img7 from '../img/imagen7.jpeg'
import img8 from '../img/imagen8.jpeg'
import img9 from '../img/imagen9.jpeg'
import img10 from '../img/imagen10.jpeg'
import img11 from '../img/imagen11.jpeg'
import img12 from '../img/imagen12.jpeg'
import img13 from '../img/imagen13.jpeg'
import img14 from '../img/imagen14.jpeg'
import img15 from '../img/imagen15.jpeg'
import img16 from '../img/cliente1.png'
import img17 from '../img/cliente2.png'
import img18 from '../img/cliente3.png'
import img19 from '../img/cliente4.png'

import 'materialize-css/dist/js/materialize';


const Home = () => {
  return (
    <>
    <section gap={3} className="lead section icono" >
      <Container>
        <Row>
          <Col md ={3} xs={6} className='d-grid justify-content-center mt-4'>
            <Card  className="text-center border-0">
              <Card.Body>
              <Card.Text>
                  <p style={{ fontSize: '4rem', color:'#800404' }}><i class="fa fa-users " aria-hidden="true"></i></p>
                </Card.Text>
                <Card.Title>Nosotros</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Quienes somos...</Card.Subtitle>
                
                <Card.Link className='btn mt-2'style={{ background:'#800404' }}><Link className='text-white nav-link' to="/about" >Ver mas..</Link></Card.Link>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3} xs={6} className='d-grid justify-content-center mt-4'>
            <Card  className="text-center border-0">
              <Card.Body>
                <Card.Text>
                  <p style={{ fontSize: '4rem', color:'#800404' }}><i class="fa fa-briefcase" aria-hidden="true"></i></p>
                </Card.Text>
                <Card.Title>Servicios</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Quienes somos...</Card.Subtitle>
                
                <Card.Link className='btn mt-2'style={{background:'#800404'}}><Link className='text-white nav-link' to="/services" >Ver mas..</Link></Card.Link>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3} xs={6} className='d-grid justify-content-center mt-4'>
            <Card  className="text-center border-0 col-s-6">
              <Card.Body>
              <Card.Text>
                  <p style={{ fontSize: '4rem', color:'#800404' }}><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                </Card.Text>
                <Card.Title>Galeria</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Quienes somos...</Card.Subtitle>
                <Card.Link className='btn mt-2'style={{background:'#800404'}}><Link className='text-white nav-link border-0 boton' to="/about" type="button">Ver mas..</Link></Card.Link>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3} xs={6} className='d-grid justify-content-center mt-4'>
            <Card  className="text-center border-0">
              <Card.Body>
                <Card.Text>
                  <p style={{ fontSize: '4rem', color:'#800404' }}><i class="fa fa-comments" aria-hidden="true"></i></p>
                </Card.Text>
                <Card.Title>Contactanos</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Quienes somos...</Card.Subtitle>
                <Card.Link className='btn mt-2'style={{background:'#800404'}}><Link className='text-white nav-link' to="/contact" >Ver mas..</Link></Card.Link>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='lead section' gap={3}>
      <Container>
        <Row >
          <Col md={6} xs={12} className='text-justify d-grid align-content-center'>
            <h1><span style={{color:'#800404'}}> GRUPO A&B</span> INGENIERÍA</h1>
            <p> Somos un experimentado equipo de ingenieros, arquitectos y técnicos, ampliamente capacitados. Nos mantenemos a la vanguardia de la tecnología y llevamos a cabo el desarrollo de proyectos de acuerdo a normas y reglamentos vigentes. Por eso, estamos en la capacidad de garantizar a todos nuestros clientes un servicio de calidad con tecnología de vanguardia y un capital humano de primer nivel.</p>
            
          </Col>
          <Col md={6} xs={12} className='d-grid justify-content-center ' >
            <Row gap={3} className='image '>
              <Col md={6} xs={6} className="d-grid justify-content-center">
                <Card className='border-0 ' style={{ width: '18rem' }}>
                  <Card.Body >
                    <Card.Img variant="top" src={img5} style={{ width: '100%' }} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} xs={6} className="d-grid justify-content-center">
                <Card className='border-0 ' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Img variant="top" src={img6} style={{ width: '100%' }} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} xs={6} className="d-grid justify-content-center">
                <Card className='border-0 ' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Img variant="top" src={img7} style={{ width: '100%' }} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} xs={6} className="d-grid justify-content-center">
                <Card className='border-0 ' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Img variant="top" src={img10} style={{ width: '100%' }} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='lead section proyectos' gap={3}>
      <Container>
        <div className='d-grid col-lg-12 col-md-12 mt-5'>
          <h1 class="text-center mb-4 ">Nuestros Proyectos</h1>
          <p class="text-center mb-4 ">Algunos de nuestros proyectos realizados</p>
          
          
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col-lg-4 col-md-12 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div class='proyec'>
                      <img src={img2} class="card-img-top desvanecer" alt="..."/>
                      <div class="descrip">
                        <h3>Proyecto 1</h3>
                      </div>
                    </div>
                  </div>
            </div>
            <div className='col-lg-4 col-md-12 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div class='proyec'>
                      <img src={img8} class="card-img-top desvanecer" alt="..."/>
                      <div class="descrip">
                        <h3>Proyecto 2</h3>
                      </div>
                    </div>
                  </div>
            </div>
            <div className='col-lg-4 col-md-12 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div class='proyec'>
                      <img src={img9} class="card-img-top desvanecer" alt="..."/>
                      <div class="descrip">
                        <h3>Proyecto 2</h3>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        <Link to='/services' type="button" className=' btn border-0 boton text-white nav-link'>Ver más ...</Link>
        </div>
      </Container>
    </section>
    <section className="lead section clientes">
      <Container>
            <div class="col-md-12">
                <h1 class="text-center carousel-title">Nuestros Clientes</h1>

            </div>

            <div id="carouselExample" class="carousel slide d-none d-sm-none d-md-block pt-5" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img16} alt="First slide"/>
                            </div>
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img17} alt="First slide"/>
                            </div>
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img18} alt="First slide"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img19} alt="First slide"/>
                            </div>
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img16}alt="First slide"/>
                            </div>
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img17} alt="First slide"/>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img18} alt="First slide"/>
                            </div>
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img19} alt="First slide"/>
                            </div>
                            <div class="col-md-4 col-sm-1 p-7">
                                    <img class="d-block w-75" src={img16} alt="First slide"/>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
      </Container>
    </section>
    <section className='section text-bg-secondary presu'>
      <Container>
        <Row className='text-center'>
          <Col md ={9} xs={12}>
            <h1 s>¿Estás buscando experiencia y calidad?</h1>
            
          </Col>
          <Col md ={3} xs={12} >
            
            <Button className='border-0' style={{background:'#fff', fontSize:'20px', color:'#800404'}}>Solicitar Presupuesto</Button>
          </Col>
          
        </Row>
      </Container>
    </section>
    <section className=''>
      <div className=''>
      <div className=''>
        <div className=''>
        <div id="map-container-google-2" class="z-depth-1-half map-container" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.587795197841!2d-77.0158182150198!3d-12.002998810723772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf7d84f73e7d%3A0xf4e134a224713f49!2sJir%C3%B3n%20las%20Grosellas%201845%2C%20Lima%2015419!5e0!3m2!1ses-419!2spe!4v1668135011400!5m2!1ses-419!2spe" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        
      </div>
      </div>
    </section>
    </>
    
  )
}

export default Home      