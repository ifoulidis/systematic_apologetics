import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '../../navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default function AtheismHome(){
    return(
        <div className="App">
            <NavigationBar/>
            <div className="MainContentContainer">
                <h3>Atheism</h3>
                <p>Atheism is the belief that there is no supreme God, and many atheists also believe that there is
                    nothing supernatural at all. If you believe that there may be a God, but you are not sure or think
                    that nobody knows, you should visit the <Link href="./agnosticism/">agnosticism page</Link>.
                </p>
                <p>
                    Atheism is an untrue belief. Reason certainly points to the existence
                    of an uncreated God, and the proofs range from extremely simple to complex. But of course, 
                    convincing anyone that any of their firmly held beliefs
                    is wrong is normally challenging. Often, beliefs are tangled up with emotions, memories, hopes, 
                    fears, etc.
                    Sometimes, we even vow to ourselves not to even entertain certain possibilities because of bitterness.
                </p>
            </div>
        </div>
    );
}