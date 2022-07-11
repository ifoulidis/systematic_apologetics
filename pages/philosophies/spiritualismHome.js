import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar'

export default function SpiritualismHome(){
    return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Spiritualism</h1>
        <br/><br/>
        <p>This page is under construction. Please see <a className ='articleLinks' href="https://www.youtube.com/watch?v=FCDbO8Lc5NU">this video</a>.
        </p>
      </div>
    </div>
    );
}