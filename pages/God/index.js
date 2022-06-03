import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '../../components/navbar'

export default function GodArticles(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="grid-container">
        <Link href="../philosophies/christianity/cosmological_argument"><button className="articleGrid">
          <h4 className="cardT">The Cosmological Argument</h4>
          <p>What Caused the Big Bang? &bull; Is There a God? &bull; Can Something Come From Nothing? &bull; Randomness Is Not a Cause</p>
        </button></Link>
        <Link href="/"><div className="articleGrid">
          <h4 className="cardT">The Argument from Reason</h4>
        </div></Link>
        <Link href="/"><div className="articleGrid">
          <h4 className="cardT">The Design Argument</h4>
          <p>The Design Argument &bull; The Argument from Reason &bull; The Cosmological Argument &bull; Are Miracles Probable?</p>
        </div></Link>
        <Link href="../philosophies/christianity/cosmological_argument"><div className="articleGrid">
          <h4 className="cardT">The Cosmological Argument</h4>
          <p>What Caused the Big Bang? &bull; Is There a God? &bull; Christianity &bull; Islam &bull; Hunduism &bull; Buddhism</p>
        </div></Link>
      </div>
    </div>
  );
}