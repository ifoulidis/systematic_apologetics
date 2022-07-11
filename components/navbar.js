import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas, Card} from 'react-bootstrap';
import Link from 'next/link';
import {motion} from 'framer-motion'

const headings= [
  {title: 'Home', link:"/"},
  {title: 'Quizzes', link:"/quizzes"},
  {title: 'Beliefs', link:"/beliefs"},
  {title: 'Articles', link:"/articles"}
]


export function NavigationBar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <nav>
      <div className='desktopNav'>
        <div className="siteName">
          <Link href="/" ><a className="desktopNavLinks">What Is Truth</a></Link>
        </div>
        <div className="dropdown">
          <Link href="/quizzes" ><a className="desktopNavLinks">Quizzes</a></Link>
        </div>
        <div className="dropdown">
          <Link href="/beliefs" ><a className="desktopNavLinks">Beliefs</a></Link>
        </div>
        <div className="dropdown">
          <Link href="/articles" ><a className="desktopNavLinks">Arguments</a></Link>
        </div>
      </div>
      {/* Mobile offcanvas. */}
      <div className='mobileMenu'>
        <button onClick={handleShow} id="menuIconB">
          <div className='menuIconDiv'></div><div className='menuIconDiv'></div><div className='menuIconDiv'></div>
        </button>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <div></div>
          </Offcanvas.Header>
          <Offcanvas.Body className='mmContent'>
            {headings.map((val, key) => {
              return (
                <Link href={val.link} key={key}>
                  <motion.div 
                  whileTap={{scale:0.9}}
                  className="menuCard" 
                  onClick={handleClose}>
                  <h1 className="menuLinks">{val.title}</h1>
                </motion.div></Link>
              )
            })}
          </Offcanvas.Body>
        </Offcanvas>
        <hr />
      </div>
    </nav>
  )
}