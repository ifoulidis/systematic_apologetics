import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {NavigationBar} from '../../../components/navbar.js';

export default function isRealityAnIllusion(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Ridiculous Ideas about Reality</h1>
        <h5 className="articleTitle">Is Reality an Illusion? &#183; Simulation Theory &#183; Multiverse Theory</h5>
        <br/><br/>
        <h5>Is Reality an Illusion? Is Simulation Theory True?</h5>
        <br/>
        <p>Here I&#39;m speaking to those who are having a bit of an existential crisis: what if nothing is real? Good news: that is impossible. Only a being with a mind can experience illusions, so even if you were to suppose that all of your experiences are inauthentic somehow, your mind still exists. Hopefully now you realise that assuming you live in the matrix or something of the sort is simply a silly conclusion to arrive at. There is no evidence for it, and if you&#39;re wondering, &#39;What could be outside of our universe though?&#39;
          , read <Link href="../christianity/existence_of_god">The Existence of God.</Link></p>
        <br/>
        <h5>Multiverse Theory</h5>
        <br/>
        <p>I&#39;m not going to exhaustively address this topic because it&#39;s not a position any serious person should consider. What I will do is point out something interesting. The multiverse theory attempts to explain our universe&#39;s existence by saying that every conceivable form of existence must exist, hence this very particular form of existence. One of many glaring problems with this logic is that if everything that could logically exist does, a supreme god of all these universes must exist, which the proponents of this theory would not like. Secondly, since many entities that could exist cannot exist at the same time (universes made of matter could not occupy the same space, drastically limiting the number of universes), which get to exist and why? Does the most powerful entity that is logically coherent take precedent? That would be God. What other rule could determine which entities get their existence prioritized? Mustn't the rule be top-down? If we don't begin with the most powerful possible entities, then what should existence logically prioritise when organising itself? Ipso facto, God exists.</p>
        <br/><br/>
      </div>
    </div>
  );
}