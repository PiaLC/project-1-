import React from 'react'
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
import img17 from '../img/imagen17.jpeg'
const Services = () => {
  return (
    <div >
      <section className='section'>
        <div className='container'>
            <div className='row '>
                <div className='col-md-12 text-center'>
                  <h2 className='heading-section mb-5'>NUESTROS SERVICIOS</h2>
                  <p className='text-justify mb-5'>Agregamos valor en cada fase del proceso constructivo, desde la fase del pre-diseño hasta la fase del cierre del proyecto. 
                    Nuestra amplia experiencia y el uso de metodologías innovadoras nos permiten advertir futuros problemas y resolverlos sin complicaciones. 
                    Para esto, contamos con áreas especializadas que no solo sirven como soporte al proceso de producción, sino que también mantienen un 
                    alto nivel del estándar del proceso, como por ejemplo:</p>
                </div>
            </div> 
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div className='servi'>
                      <img src={img2} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body" style={{background:'#800404'}}>
                      <h4 class="card-text text-center" style={{color:'#fff'}}>Topografía</h4>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div className='servi'>
                      <img src={img3} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body" style={{background:'#800404'}}>
                      <h4 class="card-text text-center" style={{color:'#fff'}}>Geodesia</h4>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div className='servi'>
                      <img src={img4} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body" style={{background:'#800404'}}>
                      <h4 class="card-text text-center" style={{color:'#fff'}}>Geotecnia</h4>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div className='servi'>
                      <img src={img5} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body" style={{background:'#800404'}}>
                      <h4 class="card-text text-center" style={{color:'#fff'}}>Mecanica de Suelos</h4>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div className='servi'>
                      <img src={img2} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body" style={{background:'#800404'}}>
                      <h4 class="card-text text-center" style={{color:'#fff'}}>Fotometría con Dron</h4>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div className='servi'>
                      <img src={img3} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body" style={{background:'#800404'}}>
                      <h4 class="card-text text-center" style={{color:'#fff'}}>Laboratorio de Materiales</h4>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div className='servi'>
                      <img src={img4} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body" style={{background:'#800404'}}>
                      <h4 class="card-text text-center" style={{color:'#fff'}}>Control de Calidad</h4>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card border-0 h-100" >
                    <div className='servi'>
                      <img src={img5} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body" style={{background:'#800404'}}>
                      <h4 class="card-text text-center" style={{color:'#fff'}}>Construcción y supervición de Obras</h4>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
            <div className='row '>
                <div className='col-md-12 text-center'>
                  <h2 className='heading-section mb-5' id='proyectos'>NUESTROS PROYECTOS</h2>
                  <p className='text-justify mb-5'>Agregamos valor en cada fase del proceso constructivo, desde la fase del pre-diseño hasta la fase del cierre del proyecto. 
                    Nuestra amplia experiencia y el uso de metodologías innovadoras nos permiten advertir futuros problemas y resolverlos sin complicaciones. 
                    Para esto, contamos con áreas especializadas que no solo sirven como soporte al proceso de producción, sino que también mantienen un 
                    alto nivel del estándar del proceso, como por ejemplo:</p>

                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                      <div className='col-lg-4 col-md-12 col-xs-12'>
                            <div className="card border-0 h-100" >
                              <div class='proyec'>
                                <img src={img2} class="card-img-top" alt="..."/>
                                <div class="descrip">
                                  <h3>Proyecto 1</h3>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div className='col-lg-4 col-md-12 col-xs-12'>
                            <div className="card border-0 h-100" >
                              <div class='proyec'>
                                <img src={img8} class="card-img-top" alt="..."/>
                                <div class="descrip">
                                  <h3>Proyecto 2</h3>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div className='col-lg-4 col-md-12 col-xs-12'>
                            <div className="card border-0 h-100" >
                              <div class='proyec'>
                                <img src={img9} class="card-img-top" alt="..."/>
                                <div class="descrip">
                                  <h3>Proyecto 2</h3>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div className='col-lg-4 col-md-12 col-xs-12'>
                            <div className="card border-0 h-100" >
                              <div class='proyec'>
                                <img src={img16} class="card-img-top" alt="..."/>
                                <div class="descrip">
                                  <h3>Proyecto 4</h3>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div className='col-lg-4 col-md-12 col-xs-12'>
                            <div className="card border-0 h-100" >
                              <div class='proyec'>
                                <img src={img11} class="card-img-top" alt="..."/>
                                <div class="descrip">
                                  <h3>Proyecto 5</h3>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div className='col-lg-4 col-md-12 col-xs-12'>
                            <div className="card border-0 h-100" >
                              <div class='proyec'>
                                <img src={img16} class="card-img-top" alt="..."/>
                                <div class="descrip">
                                  <h3>Proyecto 6</h3>
                                </div>
                              </div>
                            </div>
                      </div>
                  </div>
                </div>
            </div> 
        </div>
      </section>
    </div>
  )
}

export default Services