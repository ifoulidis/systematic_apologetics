import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar'
import ThreeWiseMen from '@/public/images/three_wise_men-lg.jpg'
import Image from 'next/image'

export default function ChristianityHome(){
    return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">Christianity</h1>
        <br/>
        <Image src={ThreeWiseMen} alt="The three wise men following a star."/>
        <br/><br/>
        <p>This page is under construction. Please see <a className ='articleLinks' href="https://www.reasonablefaith.org/writings/popular-writings/christianity-other-faiths/how-can-christ-be-the-only-way-to-god">this article</a>.
        </p>
      </div>
    </div>
    );
}