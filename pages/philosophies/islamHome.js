import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar';

export default function IslamHome(){
    return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Islam</h1>
        <br/><br/>
        <p>This page is under construction. Please see the <a className ='articleLinks' href="https://www.youtube.com/c/CIRAInternational">CIRA International</a> YouTube channel.
        </p>
      </div>
    </div>
    );
}