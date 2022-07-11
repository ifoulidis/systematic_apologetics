import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar'

export default function BuddhismHome(){
    return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Buddhism</h1>
        <br/><br/>
        <p>This page is under construction. Please see <a className ='articleLinks' href="https://biblereasons.com/christianity-vs-buddhism/">this article</a>.
        </p>
      </div>
    </div>
    );
}