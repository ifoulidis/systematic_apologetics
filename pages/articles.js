import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '@/components/navbar'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '@/components/Card';
import Truth from '../public/truth.jpg'
import Darwin from '../public/darwin.jpg'
import IslamImage from '../public/islam_symbol.png'
import EarthImage from '../public/Earth.jpg'
import SpaceImage from '../public/Space1.jpg'
import MatrixImage from '../public/matrix.jpg'
import HourGlass1 from '../public/hourglass1.jpg'
//import {useState} from 'react'
//import styles from "../styles/Articles.module.css";



export default function Articles(){
  //const [searchTerm, setSearchTerm] = useState('')
  return(
    <div className="App">
      <NavigationBar/>
      <h1 className="articleTitle">Articles</h1>
      {/*<div className={styles.filterBox}>
        <input type='text' 
        placeholder='Search...' 
        onChange={event => {setSearchTerm(event.target.value)}}
        />
      </div>*/}
      <div className="grid-container">
        {Card('./articles/whatIsTruth', 'What Is Truth?', <p>Is Truth Relative? &bull; Can I Have My Own Truth?</p>, Truth)}
        {Card('./philosophies/atheism/', 'Atheism', <p>Is It Possible to Disprove God?</p>, Darwin)}
        {Card('./philosophies/islam/', 'Islam', <p>Is Islam Internally Consistent?</p>, IslamImage)}
        {Card('./articles/reality_illusion', 'Is Reality An Illusion?', <p>The Matrix &bull; Simulation Theory &bull; Multiverse Theory</p>, MatrixImage)}
        {Card('./articles/cosmological_argument', 'The Cosmological Argument', <p>Can Cause and Effect Go on Forever?</p>, EarthImage)}
        {Card('./articles/time_vs_naturalism', 'Time vs. Naturalism', <p>Can the Universe Have Always Existed?</p>, HourGlass1)}
      </div>
    </div>
  );
}