import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure';

const Valores = () => {
  return (
    
    <section className='lead valores'>
      <Container>
      <div class="container px-4 py-5" id="icon-grid">
      
      <h1 class="text-center mb-4 ">Nuestros Valores</h1>
          <p class="mb-4 text-justify">Buscamos contruir una empresa que tenga relaciones estrecha y duradera con nuestros clientes, relaciones duraderas como las distintas
          obras que realizamos. Para lograr ello nuestra orzacizacipon esta basada en los siguientes pilares:</p>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 py-5">
      <div class="col d-flex align-items-start">
      <i class="fa-solid fa-gear bi flex-shrink-0 me-3"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Productividad</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <i class="fa-solid fa-list-check bi flex-shrink-0 me-3"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Disciplina</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <i class="fa-sharp fa-solid fa-briefcase bi flex-shrink-0 me-3"></i>
      <div>
          <h3 class="fw-bold mb-0 fs-4">Profesionalismo</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <i class="fa-solid fa-award bi flex-shrink-0 me-3"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Calidad</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <i class="fa-solid fa-calendar-days bi flex-shrink-0 me-3"></i>
      <div>
          <h3 class="fw-bold mb-0 fs-4">Puntualidad</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <i class="fa-solid fa-handshake-angle bi flex-shrink-0 me-3"></i>
        <div>
          <h3 class="fw-bold mb-0 fs-4">Compromiso</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>
      </Container>
    </section>
  )
}

export default Valores