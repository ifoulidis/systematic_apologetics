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



export default function Quizzes(){
  //const [searchTerm, setSearchTerm] = useState('')
  return(
    <div className="App">
      <NavigationBar/>
      <div className='titleBox'>
        <h1>Take a Quiz</h1>
      </div>
      <div className='titleBoxText'>
        <p>These quizzes are not tests.</p>
        <p>Their goal is find out what you know and then provide you with answers.</p>
      </div>
      <div className="grid-container">
        {Card('./quizzes/main_quiz', 'Origin of the Universe Quiz', <p>Has the Universe Always Existed?</p>, SpaceImage)}
        {Card('./quizzes/morality_quiz', 'Morality Quiz', <p>Under Construction</p>, Truth)}
        {Card('./quizzes/world_religions_quiz', 'World Religions Quiz', <p>Under Construction</p>, IslamImage)}
      </div>
    </div>
  );
}