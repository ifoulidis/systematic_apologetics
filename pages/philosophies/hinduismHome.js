import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar';

export default function HinduismHome(){
    return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Hinduism</h1>
        <br/><br/>
        <p>This page is under construction. Please see <a className ='articleLinks' href="https://www.gotquestions.org/Hindu-Christian.html">this article</a>.
        </p>
      </div>
    </div>
    );
}