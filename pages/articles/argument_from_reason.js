import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@/components/Card.js';
import {NavigationBar} from '@/components/navbar.js';

export default function ArgumentFromReason(){
    return(
        <div className="App">
            <NavigationBar/>
            <h1 className="articleTitle">Argument from Reason</h1>
            <br/><br/>
            <p>Please see the <a href="https://www.gotquestions.org/argument-from-reason.html">gotquestions.org</a> <a href="http://www.acts17.net/2012/12/what-is-argument-from-reason.html">acts17.net</a> articles while this page is being constructed.</p>
            <br/><br/>
        </div>
    );
}