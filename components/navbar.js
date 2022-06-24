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
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return(
    <nav>
      <div className='desktopNav'>
        <div className="siteName">
          <Link href="/" ><a className="desktopNavLinks">What Is Truth</a></Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={handleShow1}>Quizes</button>
        </div>
        <div className="dropdown">
          <button onClick={handleShow2} className="dropbtn">Arguments</button>
        </div>
      </div>
      {/* Quiz offcanvas. */}
      <Offcanvas show={show1} onHide={handleClose1} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='mmContent'>
          <h1><Link href="/articles/"><a className="menuLinks">All Quizzes</a></Link></h1>
          <br/>
          <Link href="/quizzes/main_quiz"><button className="menuCard" onClick={handleClose1}>
            <h4 className="menuLinks">Main Quiz</h4>
            <p>Is There A God?</p>
          </button></Link>
          <Link href="/God/"><button className="menuCard" onClick={handleClose1}>
            <h4 className="menuLinks">Morality Quiz</h4>
            <p>Is Morality Dependent on Culture?</p>
          </button></Link>
          <Link href="/Religions/"><button className="menuCard" onClick={handleClose1}>
            <h4 className="menuLinks">Religions Quiz</h4>
            <p>What Do You Know About the Six Largest Religions?</p>
          </button></Link>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Article offcanvas. */}
      <Offcanvas show={show2} onHide={handleClose2} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='mmContent'>
          <h1><Link href="/articles/"><a className="menuLinks">All Articles</a></Link></h1>
          <br/>
          <Link href="/nature/"><button className="menuCard" onClick={handleClose2}>
            <h4 className="menuLinks">General</h4>
            <p>What Is Truth? Is Reality an Illusion?</p>
          </button></Link>
          <Link href="/God/"><button className="menuCard" onClick={handleClose2}>
            <h4 className="menuLinks">God</h4>
            <p>The Major Arguments &#183; Naturalism vs. Time</p>
          </button></Link>
          <Link href="/Religions/"><button className="menuCard" onClick={handleClose2}>
            <h4 className="menuLinks">Beliefs</h4>
            <p>Agnosticism &#183; Atheism &#183; Christianity &#183; Islam &#183; Hunduism &#183; Buddhism</p>
          </button></Link>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Mobile offcanvas. */}
      <div className='mobileMenu'>
        <button onClick={handleShow} id="menuIconB">
          <div className='menuIconDiv'></div><div className='menuIconDiv'></div><div className='menuIconDiv'></div>
        </button>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='mmContent'>
            <h1><Link href="/articles/"><a className="menuLinks">All Quizzes</a></Link></h1>
            <br/>
            <Link href="/nature/"><button className="menuCard" onClick={handleClose1}>
              <h4 className="menuLinks">Main Quiz</h4>
              <p>Is There A God?</p>
            </button></Link>
            <Link href="/God/"><button className="menuCard" onClick={handleClose1}>
              <h4 className="menuLinks">Morality Quiz</h4>
              <p>Is Morality Dependent on Culture?</p>
            </button></Link>
            <Link href="/Religions/"><button className="menuCard" onClick={handleClose1}>
              <h4 className="menuLinks">Religions Quiz</h4>
              <p>What Do You Know About the Six Largest Religions?</p>
            </button></Link>
            <br/>
            <br/>
            <h1><Link href="/articles/"><a className="menuLinks">All Articles</a></Link></h1>
            <br/>
            <Link href="/nature/"><button className="menuCard" onClick={handleClose}>
              <h4 className="menuLinks">General</h4>
              <p>What Is Truth? Is Reality an Illusion?</p>
            </button></Link>
            <Link href="/God/"><button className="menuCard" onClick={handleClose}>
              <h4 className="menuLinks">God</h4>
              <p>The Major Arguments &#183; Naturalism vs. Time</p>
            </button></Link>
            <Link href="/Religions/"><button className="menuCard" onClick={handleClose}>
              <h4 className="menuLinks">Beliefs</h4>
              <p>Agnosticism &#183; Atheism &#183; Christianity &#183; Islam &#183; Hunduism &#183; Buddhism</p>
            </button></Link>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  )
}