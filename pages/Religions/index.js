import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '../../components/navbar'

export default function ReligionsArticles(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="grid-container">
        <Link href="../philosophies/christianity/cosmological_argument"><button className="articleGrid">
          <h4 className="cardT">Christianity</h4>
          <p>Is Jesus a Real Historical Figure? &bull; Are Christians Meant to Have Blind Faith? &bull; What Is the Evidence for Christianity?</p>
        </button></Link>
        <Link href="/"><div className="articleGrid">
          <h4 className="cardT">Atheism</h4>
        </div></Link>
        <Link href="/"><div className="articleGrid">
          <h4 className="cardT">Spiritualism</h4>
          <p>Nice Try, Satan</p>
        </div></Link>
        <Link href="../philosophies/christianity/cosmological_argument"><div className="articleGrid">
          <h4 className="cardT">Catholicism</h4>
        </div></Link>
        <Link href="../philosophies/christianity/cosmological_argument"><div className="articleGrid">
          <h4 className="cardT">Islam</h4>
        </div></Link>
        <Link href="../philosophies/christianity/cosmological_argument"><div className="articleGrid">
          <h4 className="cardT">Hinduism</h4>
        </div></Link>
        <Link href="../philosophies/christianity/cosmological_argument"><div className="articleGrid">
          <h4 className="cardT">Buddhism</h4>
        </div></Link>
        <Link href="../philosophies/christianity/cosmological_argument"><div className="articleGrid">
          <h4 className="cardT">Agnosticism</h4>
          <p>Can We Really Know the Answers to These Questions?</p>
        </div></Link>
      </div>
    </div>
  );
}