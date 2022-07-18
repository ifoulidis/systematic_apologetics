import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar'

export default function CatholicismHome(){
    return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Catholicism</h1>
        <br/><br/>
        <p>This page is under construction. Please see <a className ='articleLinks' href="https://www.youtube.com/watch?v=FFXT6czCe_Q">this video </a> 
        and <a className ='articleLinks' href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm">these documents</a>.
        </p>
      </div>
    </div>
    );
}