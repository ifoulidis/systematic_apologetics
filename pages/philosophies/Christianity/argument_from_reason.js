import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '../../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default function ArgumentFromReason(){
    return(
        <div className="App">
            <NavigationBar/>
            <h4 className="articleTitle">Argument from Reason</h4>
            <p>Please see the <a href="https://www.gotquestions.org/argument-from-reason.html">gotquestions.org</a> <a href="http://www.acts17.net/2012/12/what-is-argument-from-reason.html">acts17.net</a> articles while this page is being constructed.</p>
        </div>
    );
}