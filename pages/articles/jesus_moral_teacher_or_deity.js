import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recommendations from '@/components/Recommendations';
import {NavigationBar} from '@/components/navbar.js';
import Image from 'next/image'
import EmptyTomb from 'public/empty_tomb-lg.jpg'

export default function JesusMoralTeacherOrDeity(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h4 className="articleTitle">Jesus: Moral Teacher or Deity?</h4>
        <br/>
        <Image src={EmptyTomb} alt="Empyty Tomb."/>
        <br/><br/>
        <p>It is common to say that Jesus was a great moral teacher, yet this view can only be held by those who are can recall little of what he said. Take this example:</p>
        <blockquote>&#39;My sheep listen to my voice; I know them, and they follow me. I give them eternal life, and they shall never perish; no one will snatch them out of my hand. My Father, who has given them to me, is greater than all; no one can snatch them out of my Father&#39;s hand. I and the Father are one.&#39;&mdash;John 10:27&ndash;30.</blockquote>
        <p>He promises eternal life and says that he is &#39;greater than all&#39; by being one with the Father (God). These are the words of a lunatic, a liar, or the true Son of God. As C. S. Lewis put it, for Jesus to have believed what he said and been wrong, he would have to be as mad as &#39;the man who says he is a poached egg&#39;. Him lying would mean that billions of people have hoped in vain for eternal life, and many lost their lives and much of their enjoyment because they followed his commands.</p>
        <blockquote>&#39;If I fought wild beasts in Ephesus with no more than human hopes, what have I gained? If the dead are not raised, &quot;Let us eat and drink, for tomorrow we die.&quot;&#39;&mdash;1 Corinthians 15:32.</blockquote>
        <p>If you read the words of Jesus and those he gave authority (his apostles) in the New Testament, you will find that he appeared to be neither a liar nor a fool. Therefore, you might consider trusting him. We always have incomplete knowledge; it really is that simple. That being said, there is much more evidence to discuss. See the articles below or the Christianity page.</p>
        <br/><br/>
      </div>
      <div className="grid-container">
        {Recommendations(['The Existence of God', 'Christianity'])}
      </div>
    </div>
  );
}