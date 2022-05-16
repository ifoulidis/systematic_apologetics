import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { NavigationBar} from '../navbar'

export default function PhilosophiesHome(){
    return(
        <div className="App">
            <NavigationBar/>
        </div>
    );
}