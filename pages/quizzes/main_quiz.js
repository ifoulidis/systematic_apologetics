import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as questions from '@/components/questions';
import * as explanations from '@/components/explanations';
import {GetResponse} from '@/components/logicmap';
import {NavigationBar} from '@/components/navbar';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';




export default function MainQuiz() {
  // Stores the question object to display the appropriate question and answers.
  const [question, setQuestion] = useState(questions.whatAreYourViewsOnGod);
  const [typeOfPage, setTypeOfPage] = useState("Question");
  const [explanation, setExplanation] = useState(explanations.cosmological_argument);
  const router = useRouter()

  function ButtonsForUser(){
    return(
      <div className="quizNavigation">
        <div className = "quiz-nav-button-container">
          <button className = "quiz-nav-button" onClick={() => {
              router.reload(window.location.pathname)}}>
                  Reset
          </button>
        </div>
      </div>
    )
  }

  // Displays the next question or content. 
  function QuestionOrContentHandler(response){
    if (typeof(response) == 'object'){
      setTypeOfPage("Question")
      setQuestion(response);
    }
    else{
      setExplanation(response)
      setTypeOfPage("Content")
    }
  }

  function DisplayQuestionOrContent(){
    if (typeOfPage === "Question"){
      return <QuestionForm/>}
    else if (typeOfPage === "Content"){
      return ExplanationPage()}
    else return <QuestionForm />
  }


  function QuestionForm(){
    return(
      // Note the special div that enables the transition.
      <motion.div className="QuestionContainer" initial="hidden" animate="visible" variants={{
          hidden: {
            scale: 0.8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .2
            }
          }
      }}>
        <h3 id="question">{question["question"]}</h3>
        <div className="d-grid gap-2">
          {question["answers"].map(answer =>
            <motion.button key = {answer} className="question-button"
            onClick={() => {
              let QAObject = {"question": question["question"], "answer": answer};
              let response = GetResponse(QAObject);
              QuestionOrContentHandler(response)}}
            whileHover={{
              scale: 1.2,
              duration: 0.2
            }}>
                {answer}
            </motion.button>
          )}
        </div>
      </motion.div>
    )
  }

  function ExplanationPage(){
    return(
      <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: 0.6,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .1
            }
          }
      }}>
        <div className="MainContentContainer">
          {explanation}
        </div>
      </motion.div>
    )
  }


  return(
    <div className="App">
      <NavigationBar/>
      <DisplayQuestionOrContent/>
      <ButtonsForUser/>
    </div>
  );


}
