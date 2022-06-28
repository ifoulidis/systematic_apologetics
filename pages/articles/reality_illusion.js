import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@/components/Card.js';
import {NavigationBar} from '@/components/navbar.js';

export default function IsRealityAnIllusion(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Is Reality an Illusion?</h1>
        <h5 className="articleTitle">Simulation Theory &#183; Multiverse Theory</h5>
        <br/><br/>
        <h5>Is Reality an Illusion? Is Simulation Theory True?</h5>
        <br/>
        <p>Here I&#39;m speaking to those who are having a bit of an existential crisis: what if nothing is real? Good news: that is impossible. Only a being with a mind can experience illusions, so even if you were to suppose that all of your experiences are inauthentic somehow, your mind still exists.
          <br/>As to assuming you live in the matrix, there is simply no evidence for it. However, if you are looking for answers as to what more there could be besides the universe and ourselves, I suggest you read <Link href="../christianity/existence_of_god"><a className='articleLinks'>The Existence of God.</a></Link></p>
        <br/>
        <h5>Multiverse Theory</h5>
        <br/>
        <p>Multiverse theory attempts to explain our universe&#39;s existence by saying that every conceivable form of existence must exist, hence this very particular form of existence. This idea is childish. It would literally mean that an egg on my plate and a railway train running through the exact same spot are somehow happening at once. Proposing that there are different dimensions does not actually solve this issue at all, since the whole idea of coexist dimensions requires something fundamentally different about the physics in these other dimensions so that they can co-exist with ours. Hence, we would still be left with only one copy of a universe with our physics.</p>
        <p>On a side note, if everything that could logically exist does, a supreme god of all these universes must exist, which the proponents of this theory would not like. Secondly, since many entities that could exist cannot exist at the same time (universes made of matter could not occupy the same space, drastically limiting the number of universes, as we have said), which get to exist and why? Does the most powerful entity that is logically coherent take precedent? That would be God. What other rule could determine which entities get their existence prioritized? Ipso facto, God exists.</p>
        <br/><br/>
      </div>
    </div>
  );
}