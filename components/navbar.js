import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas} from 'react-bootstrap';
import Link from 'next/link'

export function NavigationBar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <nav>
      <div className='desktopNav'>
        <div className="siteName">
          <Link href="/" ><a className="desktopNavLinks">Systematic Philosophy</a></Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Quizes</button>
          <div className="dropdown-content">
            <Link href="/philosophies/atheism/"><a className="desktopNavLinks">Evolution</a></Link>
            <Link href="/philosophies/agnosticism/"><a className="desktopNavLinks">The Origin of Life</a></Link>
            <Link href="/philosophies/islam/"><a className="desktopNavLinks">Something Else</a></Link>
            <hr />
            <Link href="/philosophies/"><a className="desktopNavLinks">All Quizes</a></Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Tell Me About...</button>
          <div className="dropdown-content">
            <Link href="/philosophies/atheism/"><a className="desktopNavLinks">Atheism</a></Link>
            <Link href="/philosophies/agnosticism/"><a className="desktopNavLinks">Agnosticism</a></Link>
            <Link href="/philosophies/islam/"><a className="desktopNavLinks">Islam</a></Link>
            <hr />
            <Link href="/philosophies/"><a className="desktopNavLinks">All Philosophies</a></Link>
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
            <h2 ><Link href="/"><a className="mobileMenuLinks">Home</a></Link></h2>
            <hr/>
            <h2><Link  href="#"><a className="mobileMenuLinks">Quizes</a></Link></h2>             
            <h3><Link href="#"><a className="mobileMenuLinks">Evolution</a></Link></h3>
            <h3><Link href="#"><a className="mobileMenuLinks">The Origin of Life</a></Link></h3>
            <h3><Link href="#"><a className="mobileMenuLinks">Something Else</a></Link></h3>
            <hr/>
            <h2><Link href="/philosophies/"><a className="mobileMenuLinks">Philosophies</a></Link></h2>
            <h3><Link href="/philosophies/atheism/"><a className="mobileMenuLinks">Atheism</a></Link></h3>
            <h3><Link href="/philosophies/agnosticism/"><a className="mobileMenuLinks">Agnosticism</a></Link></h3>
            <h3><Link href="/philosophies/islam/"><a className="mobileMenuLinks">Islam</a></Link></h3>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  )
}