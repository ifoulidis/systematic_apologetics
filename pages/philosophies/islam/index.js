import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '../../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default function IslamHome(){
    return(
        <div className="App">
            <NavigationBar/>
            <p>Islam teaches that you must have no doubts, but how can you have faith if you have not yet been completely convinced that it is the truth?</p>
            <p>Consider this part of your search for truth, and I must begin with unfortunate news for you. You have been deceived, and you have likely helped to deceive yourself</p>
        </div>
    );
}