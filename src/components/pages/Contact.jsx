import React from 'react'

const Contact = () => {
  return (
    <section class="lead ftco-section section info">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h1 class="" id='contacto'>Contácto</h1>
				</div>
			</div>
			<div class="row justify-content-center ">
				<div class="col-lg-10 col-md-12 ">
					<div class="wrapper">
						<div class="row no-gutters ">
							<div class="col-md-7 d-flex align-items-stretch ">
								<div class="contact-wrap w-100 p-md-5 p-4 shadow">
									<h3 class="heading-section mb-4">Cuéntanos...</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
								<p>Estamos aqui para brindarte un servicio de calidad</p>
                  				<p>Responderemos su mensaje lo más pronto que sea posible, gracias por confiar en nuestros.</p>
								
				      		</div>
									<form method="POST" id="contactForm" name="contactForm">
										<div class="row">
											<div class="col-md-6 mt-2">
												<div class="form-group">
													<input type="text" class="form-control" name="name" id="name" placeholder="Nombre"/>
												</div>
											</div>
											<div class="col-md-6 mt-2"> 
												<div class="form-group">
													<input type="email" class="form-control" name="email" id="email" placeholder="Correo"/>
												</div>
											</div>
											<div class="col-md-12 mt-2">
												<div class="form-group">
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto"/>
												</div>
											</div>
											<div class="col-md-12 mt-2">
												<div class="form-group">
													<textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Mensaje"></textarea>
												</div>
											</div>
											<div class="col-md-12 mt-2">
												<div class="form-group">
													<input type="submit" value="Enviar Mensaje" class="btn" style={{background:'#800404', color:"#fff"}}/>
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5 d-flex align-items-stretch ">
								<div class="info-wrap contact1 w-100 p-lg-5 p-4 shadow">
									<h3 class="mb-4 mt-md-4">Grupo A&B</h3>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p class="font-weight-bold">Direccion:</p>
								<p>Jr. Las Grosellas 1845 Piso 2 <br /> Urb. San Hilarion - SJL</p>
							</div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p class="font-weight-bold">Telefono:</p>
                      			<p><a href="tel://1234567920">+51 924 172 479 </a></p>
                      			<p><a href="tel://1234567920">+51 940 26 084</a></p>
                				<p><a>+ 01 409 8014</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p class="font-weight-bold">Correo:</p> 
                       			<p><a href="mailto:grupoayb@gmail.com">grupoayb@gmail.com </a></p>
                        			<p><a href="mailto:ventascorporativas@grupoa&b.com">ventascorporativas@grupoa&b.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p class="font-weight-bold">Website</p> 
								<p><a href="#">yoursite.com</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
      <div className='row'>
        <div className='col-md-12 mt-5'>
					<h1 class="text-center mb-4">Ubícanos</h1>
        <div id="map-container-google-2" class="z-depth-1-half map-container2" >
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.587795197841!2d-77.0158182150198!3d-12.002998810723772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf7d84f73e7d%3A0xf4e134a224713f49!2sJir%C3%B3n%20las%20Grosellas%201845%2C%20Lima%2015419!5e0!3m2!1ses-419!2spe!4v1668135011400!5m2!1ses-419!2spe" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        
      </div>
		</div>
	</section>
  )
}

export default Contact