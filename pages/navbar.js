import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas} from 'react-bootstrap';

export function NavigationBar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <nav>
      <div className='desktopNav'>
        <div className="siteName">
          <a href="/" >Systematic Philosophy</a>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Quizes</button>
          <div className="dropdown-content">
            <a href="/philosophies/atheism/">Evolution</a>
            <a href="/philosophies/agnosticism/">The Origin of Life</a>
            <a href="/philosophies/islam/">Something Else</a>
            <hr />
            <a href="/philosophies/">All Quizes</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Tell Me About...</button>
          <div className="dropdown-content">
            <a href="/philosophies/atheism/">Atheism</a>
            <a href="/philosophies/agnosticism/">Agnosticism</a>
            <a href="/philosophies/islam/">Islam</a>
            <hr />
            <a href="/philosophies/">All Philosophies</a>
          </div>
        </div>
      </div>
      <div className='mobileMenu'>
        <button onClick={handleShow} id="menuIconB">
          <div className='menuIconDiv'></div><div className='menuIconDiv'></div><div className='menuIconDiv'></div>
        </button>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='mmContent'>
            <h3 href="/">Home</h3>
            <hr/>
            <h2><a href="#">Quizes</a></h2>             
            <h3><a href="#">Evolution</a></h3>
            <h3><a href="#">The Origin of Life</a></h3>
            <h3><a href="#">Something Else</a></h3>
            <hr/>
            <h2><a href="/philosophies/">Philosophies</a></h2>
            <h3><a href="/philosophies/atheism/">Atheism</a></h3>
            <h3><a href="/philosophies/agnosticism/">Agnosticism</a></h3>
            <h3><a href="/philosophies/islam/">Islam</a></h3>
            
          </Offcanvas.Body>
        </Offcanvas>
      </div>   
    </nav>
  )
}