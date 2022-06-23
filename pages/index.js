import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '../components/navbar.js';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import Truth from '../public/truth.jpg'
import Darwin from '../public/darwin.jpg'
import IslamImage from '../public/islam_symbol.png'
import EarthImage from '../public/Earth.jpg'
import SpaceImage from '../public/Space1.jpg'
import MatrixImage from '../public/matrix.jpg'
import Card from '../components/Card'



function Q1() {
  return(
    <AnimatePresence>
      <motion.div 
      className = {styles.quizQuestionBox}
      id= {styles.question1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
      >
        <h1>What Are Your Views On God?</h1>
      </motion.div>
    </AnimatePresence>
)
}

function Q2() {
  return(
    <AnimatePresence>
      <motion.div 
      className = {styles.quizQuestionBox}
      id= {styles.question2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
      >
        <h1>What Caused The Big Bang?</h1>
      </motion.div>
    </AnimatePresence>
)
}

function Q3() {
  return(
    <AnimatePresence>
      <motion.div 
      className = {styles.quizQuestionBox}
      id= {styles.question3}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
      >
        <h1>How Did The First Cell Come To Be?</h1>
      </motion.div>
    </AnimatePresence>
)
}

function QuizAd(quizq) {
  return(
    <AnimatePresence>
      <motion.div 
      className = {styles.quizQuestionBox}
      id= {styles.question3}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
      >
        <h1>{quizq}</h1>
      </motion.div>
    </AnimatePresence>
)
}



export default function Home() {
  const [quest, setQuest] = useState(Q1)
  const [option, setOption] = useState(1)


  function newQuestion(){
    /* Using the content of the quest const would be ridiculous, so
    I created another variable for simplicity.  */
    if (option === 1){
      setOption(2)
      setQuest(Q2)
    }
    else if (option === 2){
      setQuest(Q3)
      setOption(3)
    }
    else if (option === 3){
      setQuest(Q1)
      setOption(1)
    }
  }


  useEffect(() => {
    let timer = setInterval(() => {
      newQuestion();
    }, 5000);

    return () => clearTimeout(timer)
  }, [quest]);

  return(
    <div className='App'>
      <NavigationBar/>
      <div
      style={{display:'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '3%', paddingBottom:'5%'}} >
        {quest}
      </div>
      <div className="grid-container">
        {Card('./whatIsTruth', 'What Is Truth?', <p>Is Truth Relative? &bull; Can I Have My Own Truth?</p>, Truth)}
        {Card('./philosophies/atheism/', 'Atheism', <p>Forms of Atheism &bull; Is It Possible to Disprove a Creator? &bull; A Modern Belief?</p>, Darwin)}
        {Card('./philosophies/islam/', 'Islam', <p>Is Islam Internally Consistent? &bull; How Does It Explain Morality? &bull; Does Its Creation Account Make Sense?</p>, IslamImage)}
        {Card('./philosophies/agnosticism/reality_illusion', 'Is Reality An Illusion?', <p>The Matrix &bull; Simulation Theory &bull; Multiverse Theory</p>, MatrixImage)}
        {Card('./philosophies/christianity/cosmological_argument', 'The Cosmological Argument', <p>Everything Impermanent Must Be Created &bull; Can God Answer the Problem of the First Cause?</p>, EarthImage)}
        {Card('./philosophies/christianity/existence_of_god', 'The Existence of God', <p>A Very Quick Summary of the Main Arguments for and Against</p>, SpaceImage)}
      </div>
      <div className='Footer'>

      </div>
    </div>
  );


}
