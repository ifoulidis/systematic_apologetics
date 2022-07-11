import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar'

export default function AgnosticismHome(){
    return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Agnosticism</h1>
        <br/><br/>
        <p>This page is under construction. Please see <a className ='articleLinks' href="https://www.learnreligions.com/atheist-vs-agnostic-whats-the-difference-248040">this article</a>.
        </p>
      </div>
    </div>
    );
}