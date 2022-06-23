import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '../../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default function ExistenceOfGod(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h4 className="articleTitle">The Existence of God</h4>
        <br/><br/>
        <p>Please see the <a href="https://www.gotquestions.org/argument-from-reason.html" className='articleLinks'>gotquestions.org</a> and <a href="http://www.acts17.net/2012/12/what-is-argument-from-reason.html" className='articleLinks'>acts17.net</a> articles while this page is being constructed.</p>
      <br/><br/>
      </div>
    </div>
  );
}