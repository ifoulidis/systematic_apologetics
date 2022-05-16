import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import * as questions from './questions';
import * as explanations from './explanations';
import {GetResponse} from './logicmap';
import {NavigationBar} from './navbar.js';
import {Link} from 'next/link'


export default function Home() {
  // Stores the question object to display the appropriate question and answers.
  const [question, setQuestion] = useState(questions.whatAreYourViewsOnGod);
  const [typeOfPage, setTypeOfPage] = useState("Question");
  const [explanation, setExplanation] = useState(explanations.cosmological_argument);
  const [navText, setNavText] = useState("Atheism");
  const [time, setTime] = useState(0);
  const timer = useRef();

  function changeNavText(){
    if (time % 5 == 0){
      if (navText == "Atheism"){
        setNavText("Agnosticism")
      }
      else if (navText == "Agnosticism"){
        setNavText("Islam")
      }
      else if (navText == "Islam"){
        setNavText("Spiritualism")
      }
      else{
        setNavText("Atheism")
      }
    }
  }

  useEffect(() => {
    timer.current = setInterval(() => setTime((t) => time + 1), 1000);
    changeNavText();
    return () => {
      clearInterval(timer.current)
    }
  }, [])

  // Displays the next question or content. 
  function QuestionOrContentHandler(response){
    if (typeof(response) == 'object'){
      setTypeOfPage("Question")
      setQuestion(response);
    }
    else{
      console.log(response)
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
      <div className="QuestionContainer">
        <h3 id="question">{question["question"]}</h3>
        <div className="d-grid gap-2">
          {question["answers"].map(answer =>
            <Button key = {answer} variant="outline-primary" id="question-button" onClick={() => {
              let QAObject = {"question": question["question"], "answer": answer};
              let response = GetResponse(QAObject);
              QuestionOrContentHandler(response)}}>
                {answer}
            </Button>
          )}
        </div>
      </div>
    )
  }

  function ExplanationPage(){
    return(
      <div>
        <div className="MainContentContainer">
          {explanation}
        </div>
      </div>
    )
  }


  return(
    <div className="App">
      <NavigationBar/>
      <DisplayQuestionOrContent/>
    </div>
  );


}
