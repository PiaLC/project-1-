import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo2.png'

const Navbar = () => {
  return (
    <div className='bg-light shadow text-white fixed-top '>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 '>
                    <nav class="navbar navbar-expand-lg ">
                        <div class="container-fluid justify-content-between">
                            <a class="navbar-brand text-white" href="#">
                                <img src={Logo} alt="Logo" width="100" height="100" class="d-inline-block align-text-top"/>
                            </a>
                            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon "></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li class="nav-item ">
                                
                                <Link to="/" className='nav-link active '>INICIO</Link>
                                </li>
                                <li class="nav-item">
                                
                                <Link to="/about" className='nav-link '>NOSOTROS</Link>
                                </li>
                                <li class="nav-item">
                                
                                <Link to="/services" className='nav-link '>SERVICIOS</Link>
                                </li>
                                <li class="nav-item">
                                
                                <Link to="/contact" className='nav-link '>CONTACTO</Link>
                                </li>
                                
                            </ul>
                            
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Navbar