import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '../../components/navbar'

export default function Articles(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="grid-container">
        <Link href="/"><div className="articleGrid">
          <h4 className="mobileMenuLinks">Nature</h4>
          <div className="menuImage" id="UniverseMenuI"></div>
          <p>Did It Have a Beginning? &#183; Is Reality an Illusion? &#183; What Caused the Big Bang?</p>
        </div></Link>
        <Link href="/"><div className="articleGrid">
          <h4 className="mobileMenuLinks">God</h4>
          <p>The Design Argument &#183; The Argument from Reason &#183; The Cosmological Argument &#183; Are Miracles Probable?</p>
        </div></Link>
        <Link href="/"><div className="articleGrid">
          <h4 className="mobileMenuLinks">Religions</h4>
          <div className="menuImage" id="ReligionsMenuI"></div>
          <p>Agnosticism &#183; Atheism &#183; Christianity &#183; Islam &#183; Hunduism &#183; Buddhism</p>
        </div></Link>
      </div>
    </div>
  );
}