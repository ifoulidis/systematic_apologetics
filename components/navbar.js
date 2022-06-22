import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas, Card} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Earth from '../public/Earth.jpg';

export function NavigationBar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <nav>
      <div className='desktopNav'>
        <div className="siteName">
          <Link href="/" ><a className="desktopNavLinks">Home</a></Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Quizes</button>
          <div className="dropdown-content">
            <Link href="/quizzes/main_quiz"><a className="desktopNavLinks">Main Quiz</a></Link>
            <Link href="/philosophies/atheism/"><a className="desktopNavLinks">Evolution</a></Link>
            <Link href="/philosophies/agnosticism/"><a className="desktopNavLinks">The Origin of Life</a></Link>
            <Link href="/philosophies/islam/"><a className="desktopNavLinks">Something Else</a></Link>
            <hr />
            <Link href="/philosophies/"><a className="desktopNavLinks">All Quizes</a></Link>
          </div>
        </div>
        <div className="dropdown">
          <button onClick={handleShow} className="dropbtn">
            Arguments
          </button>
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
            <h1><Link href="/articles/"><a className="mobileMenuLinks">Articles</a></Link></h1>
            <Link href="/nature/"><button className="menuCard" onClick={handleClose}>
              <h4 className="mobileMenuLinks">Nature</h4>
              <div className="menuImage" id="UniverseMenuI"></div>
              <p>Was There a Beginning? Is Reality an Illusion? What Caused the Big Bang?</p>
            </button></Link>
            <Link href="/God/"><button className="menuCard" onClick={handleClose}>
              <h4 className="mobileMenuLinks">God</h4>
              <p>The Design Argument &#183; The Argument from Reason &#183; The Cosmological Argument &#183; Miracles</p>
            </button></Link>
            <Link href="/Religions/"><button className="menuCard" onClick={handleClose}>
              <h4 className="mobileMenuLinks">Religions</h4>
              <div className="menuImage" id="ReligionsMenuI"></div>
              <p>Agnosticism &#183; Atheism &#183; Christianity &#183; Islam &#183; Hunduism &#183; Buddhism</p>
            </button></Link>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  )
}