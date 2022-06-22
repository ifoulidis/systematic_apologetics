import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as questions from '../components/questions';
import * as explanations from '../components/explanations';
import {GetResponse} from '../components/logicmap';
import {NavigationBar} from '../components/navbar.js';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import Truth from '../public/truth.jpg'
import Darwin from '../public/darwin.jpg'
import IslamImage from '../public/islam_symbol.jpg'


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

function Card(link, title, description, image) {
    return (
    <Link href={link}><motion.button className="articleGrid">
      <Image src={image} layout='intrinsic'/>
      <h4 className="cardT">{title}</h4>
      {description}
    </motion.button></Link>
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
      style={{display:'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '3%', paddingBottom:'10%'}} >
        {quest}
      </div>
      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h2 className='eTitle'>Articles</h2>
      </div>
      <div className="grid-container">
        {Card('./whatIsTruth', 'What Is Truth?', <p>Can we really know the truth about anything? Is truth relative? Can I have my own truth?</p>, Truth)}
        {Card('./philosophies/atheism/', 'Atheism', <p>Forms of atheism &bull; Is it possible to disprove a creator? &bull; A modern belief?</p>, Darwin)}
        {Card('./philosophies/islam/', 'Islam', <p>Is Islam internally consistent? Does Islam reasonably explain creation?</p>, IslamImage)}
      </div>
    </div>
  );


}
