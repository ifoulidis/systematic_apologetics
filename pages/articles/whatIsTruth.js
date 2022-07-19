import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@/components/Card.js';
import {NavigationBar} from '@/components/navbar.js';
import Recommendations from '@/components/Recommendations.js';

export default function WhatIsTruth(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">What Is Truth?</h1>
        <br/><br/>
        <p>We all know what truth is: it describes things correctly; it is accurate knowledge.</p>
        <h5>Simple Summary</h5>
        <p>Claiming that truth does not exist is like saying, 'There is no such thing as cats,' while holding a cat. If nothing is true, then there is at least one true thing... This is self-defeating and false. There is nothing more absurd, yet many educated people say it.</p>
        <h5>Explanation</h5>
        <p>If you struggle to believe that the answer to this issue which many intelligent people argue about could be so simple, allow me to point something out: intelligent people have been lying and saying stupid things forever. They are just like anyone else. One person can know more things than another and be able to handle more complex thoughts more quickly, but that does not what he knows is true, nor does it mean that his additional brainpower has been used wisely.</p>
        <p>To reiterate the point: If someone says that there is no truth, he is claiming that he knows &#39;the truth about truth&#39;. If he &#39;knows&#39; that truth is false, he has only disproved himself, for he has shown something to be true.</p>
        <p>The fact that you can understand anything is all the proof you need that truth exists and that we can recognise true things. If we could understand nothing, discussion would be entirely useless, and it is obvious to me that you should not waste your time listening to anyone who believes that he understands nothing and that nothing can really be understood by others. You are speaking to man trying to argue you both into insanity.</p>
        <p>Therefore, do not be afraid to pursue the truth, but you must keep in mind that there are many people who hate it. The very reason I felt the need to point out the fact that truth exists is because so many deny it, and we must start somewhere.</p>
        <p>See the video below for a verbal explanation, or scroll down to find your next article to read.</p>
        <br/>
        <div className="iframeVideo">
          <iframe src="https://www.youtube.com/embed/16PryJonegA" width="560" height="315" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <br/><br/>
      </div>
      <div className="grid-container">
        {Recommendations(['The Existence of God', 'The Cosmological Argument', 'Is Reality An Illusion?'])}
      </div>
    </div>
  );
}