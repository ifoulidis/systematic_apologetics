import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '@/components/navbar'
import {motion, AnimatePresence } from 'framer-motion';
import styles from "styles/Home.module.css";
import Recommendations from '@/components/Recommendations.js';
import Link from 'next/link'



function Q1() {
  return(
    <AnimatePresence>
      <Link href="/quizzes" ><motion.div 
      className = {styles.quizQuestionBox}
      id= {styles.question1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
      >
        <h1>What Are Your Views On God?</h1>
      </motion.div></Link>
    </AnimatePresence>
)
}

function Q2() {
  return(
    <AnimatePresence>
      <Link href="/quizzes" ><motion.div 
      className = {styles.quizQuestionBox}
      id= {styles.question2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
      >
        <h1>What Caused The Big Bang?</h1>
      </motion.div></Link>
    </AnimatePresence>
)
}

function Q3() {
  return(
    <AnimatePresence>
      <Link href="/quizzes" ><motion.div 
      className = {styles.quizQuestionBox}
      id= {styles.question3}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
      >
        <h1>How Did The First Cell Come To Be?</h1>
      </motion.div></Link>
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
      <motion.div
        className="titleBox"
        onHover={{scale: 1.2}}
        transition={{duration: 0.1}}
        >
        <h1>Try a Quiz&mdash;Find Answers</h1>
      </motion.div>
      <div className={styles.imageBox} >
        {quest}
      </div>
      <div className="titleBox">
        <h1>Featured Articles</h1>
      </div>
      <div className="grid-container">
        {Recommendations(['What Is Truth?', 'Is Reality An Illusion?', 'The Cosmological Argument', 'Time vs. Naturalism', 'Atheism', 'Islam'])}
      </div>
    </div>
  );


}
