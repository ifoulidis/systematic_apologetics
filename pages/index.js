import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import * as questions from '../components/questions';
import * as explanations from '../components/explanations';
import {GetResponse} from '../components/logicmap';
import {NavigationBar} from '../components/navbar.js';


export default function Home() {
  // Stores the question object to display the appropriate question and answers.
  const [question, setQuestion] = useState(questions.whatAreYourViewsOnGod);
  const [typeOfPage, setTypeOfPage] = useState("Question");
  const [explanation, setExplanation] = useState(explanations.cosmological_argument);

  // Displays the next question or content. 
  function QuestionOrContentHandler(response){
    if (typeof(response) == 'object'){
      setTypeOfPage("Question")
      setQuestion(response);
      console.log("obj")
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
