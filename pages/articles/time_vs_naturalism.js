import Image from 'next/image'
import React from 'react';
import Recommendations from '@/components/Recommendations.js';
import {NavigationBar} from '@/components/navbar.js';
import HourGlass from '@/public/images/hourglass-lg.jpg';


export default function TimevsNaturalism(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Time vs. Naturalism</h1>
        <br/>
        <Image src={HourGlass} alt="Hourglass."/>
        <br/><br/>
        <p>The Universe changes with time. Because of this, it cannot have always existed. Indeed, nothing bound by time has always existed. The reason is that there 
          cannot have been an infinite amount of time in the past, as that does not make sense. If there were infinite moments before this moment, we would never have 
          reached the current moment and the current state of things. If you tried to tell an employee that he could leave after he had completed an infinite number 
          of tasks, he would never finish.</p>
        <p>How can time and the Universe have begun then? Both exist now, clearly, but they cannot have always existed.</p>
        <p>The answer is that whatever created time and the Universe must be able to exist in the absence of them. Since we cannot have an infinite chain of beings
          creating beings either, clearly, something that exists of its own accord must also exist. Therefore, we have a spaceless, timeless, uncreated entity.
          To be the timeless original which once had nothing but itself to cause any action, it must have free will; and if it has free will and creates logically consistent
          things such as our Universe, it must have a mind (there are multiple ways to prove this). If this is news to you, alarm bells should be ringing 
          in your head: "Was I wrong about everything?" The answer is yes if you were not a monotheist, but I promise you that this means better news than you could ever hope for.</p>
          <p>I strongly encourage reading other proofs for God soon. Strike while the iron is hot.</p>
        <br/><br/>
      </div>
      <div className="grid-container">
        {Recommendations(['The Existence of God', 'Christianity', 'The Cosmological Argument'])}
      </div>
    </div>
  );
}