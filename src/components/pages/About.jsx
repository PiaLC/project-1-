import React from 'react'
import mision from '../img/mision.png'
import vision from '../img/vision.png'
import Valores from './inc/Valores'
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
import img16 from '../img/imagen16.jpeg'

const About = () => {
  return (
    <div>
      <section className="section lead">
        <div className='container'>
          <div class="row featurette">
            <div class="lead col-md-6 order-md-2">
                <h5 class="featurette-heading lh-1">¿Quienes Somos?</h5>
                <h2 class="featurette-heading lh-1 font-weight-bold"  style={{color:'#800404' }}>PASIÓN POR LA INGENIERÍA</h2>
                <p class="text-justify">Somos una empresa de Ingeniería perunana, que inicia sus operaciones en el años 2018, con un staff de profesionales 
                        expertos en los sectores público y privado, cuyos conocimientos, capacidades y experiencia se conjuegan para brindar a nuestros clientes 
                        y socios comercialaes las mejores soluciones a cada uno de sus proyectos utilizando equipos de última generación y software con tecnología 
                        moderna. Nuestra empresa GRUPO A&B INGENIERÍA  cuenta con un alto nivel de copnocimiento, capacidad y experiencia empresarial que se ven 
                        reflejados en los múltiples servicios desarrollados a nivel local y nacional en los que participan nuestros colaboradores y asociados</p>
            </div>
            <div class="col-md-6 order-md-1 border-radius-8">
              <img src={img7} class="rounded card-img" width="500" height="500" alt="..."/>
            </div>
        </div>
        <div className='row mt-5'>
        <div className='col-md-6 mt-2'>
              <div class="card shadow h-100 p-4" >
                <div class="card-body text-center">
                  <div className='circulo mb-4'>
                    <img src={mision} class="img " alt="" />
                  </div>
                  <h4 class="card-title">MISIÓN</h4>
                  <p class="lead card-text text-justify">Realizar con calidad, esmero y pasión, todas y cada una de la actividade que conllevan nuestros servicios para contribuir a mejoras la calidad de vida de la problacion a traves de proyectos y contrucciones de infraestructuras seguras y eficientes, dejando un legado a nuestras generaciones futuras. </p>
                  
                </div>
              </div>
            </div>
            <div className='col-md-6 mt-2'>
              <div class="card shadow h-100 p-4" >
                <div class="card-body text-center">
                <div className='circulo mb-4'>
                    <img src={vision} class="img " alt="" />
                  </div>
                  <h4 class="card-title">VISIÓN</h4>
                  <p class="lead card-text text-justify">Ser la empresa lider en los servicios que ofrecemos, a nivel local y nacional, con tecnología de vanguardia y el mejor capital humano en estas área. Ofreciendo servicios de calidad a nuestros clientes y calidad de vida a quienes conforman nuestro equipo de trabajo.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      </section>
      <section>

      </section>
    
      <Valores/>

      <section className='lead section text-center'>
        <div className='container' id='galeria'>
        
          <div className='text-center'>
            <h1 className="text-center mt-2 mb-5" style={{color:'#800404' }}>Galería</h1>
        <hr />
          </div>

          <div class="row text-center text-lg-start">

            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img6} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img7} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img10} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img13} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img9} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img11} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img16} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img8} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img14} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img15} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img4} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img5} alt=""/>
              </a>
            </div>
          </div>
        </div>
      
      </section>
    </div>
    
   
    
  )
}

export default About