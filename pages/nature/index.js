import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '../../components/navbar'

export default function NatureArticles(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="grid-container">
        <Link href="/whatIsTruth"><div className="articleGrid">
          <h4 className="cardT">What Is Truth?</h4>
          <div className="menuImage" id="UniverseMenuI"></div>
        </div></Link>
        <Link href="/"><div className="articleGrid">
          <h4 className="cardT">Did the Universe Have a Beginning?</h4>
          <div className="menuImage" id="UniverseMenuI"></div>
        </div></Link>
        <Link href="/"><div className="articleGrid">
          <h4 className="cardT">Is Reality an Illusion?</h4>
          <div className="menuImage" id="UniverseMenuI"></div>
          <p>The Design Argument &#183; The Argument from Reason &#183; The Cosmological Argument &#183; Are Miracles Probable?</p>
        </div></Link>
        <Link href="../philosophies/christianity/cosmological_argument"><div className="articleGrid">
          <h4 className="cardT">The Cosmological Argument</h4>
          <div className="menuImage" id="UniverseMenuI"></div>
          <h5 className="cardT">Explains</h5>
          <p>What Caused the Big Bang? &ndash; Is There a God?</p>
        </div></Link>
      </div>
    </div>
  );
}