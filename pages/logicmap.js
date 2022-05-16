import * as questions from './questions';
import * as explanations from './explanations'
//import {exchangeCurrentQuestion} from "./App"

export function GetResponse(s){

    const selectionObj = s

    if (selectionObj.question === "What are your views on god?"){
        switch (selectionObj.answer){
            case "There is only one.":
                //This actually displays pantheistic religions too atm. May change, but some pantheists are dumb.
                return questions.whatIsYourReligion
            case "There is none.":
                return questions.didTheUniverseHaveABeginning
            case "There is more than one.":
                return questions.uncreatedGod
            case "I don't know.":
                return questions.didTheUniverseHaveABeginning
            default:
                return questions.didTheUniverseHaveABeginning
        }
    }
    else if (selectionObj.question === "Did the Universe have a beginning?"){
        switch (selectionObj.answer){
            case "Yes.":
                //This actually displays pantheistic religions too atm. May change, but some pantheists are dumb.
                return explanations.cosmological_argument
            case "No.":
                return explanations.infinite_regress
            case "I don't Know.":
                return explanations.infinite_regress
            default:
                return explanations.cosmological_argument
        }
    }
    else if (selectionObj.question === "What is your religion?"){
        switch (selectionObj.answer){
            case "Christianity":
                console.log("Christianity matched")
                explanations.placeholder
            case "Catholicism":
                explanations.placeholder
            case "Islam":
                explanations.placeholder
            case "Buddhism":
                explanations.placeholder
            case "Hinduism":
                explanations.placeholder
            case "Judaism":
                explanations.placeholder
            case "I don't belong to a religion.":
                explanations.placeholder
        }
    }
    else if (selectionObj.question === "Do you believe in an uncreated god?"){
        switch (selectionObj.answer){
            case "Yes.":
                //This actually displays pantheistic religions too atm. May change, but some pantheists are dumb.
                return questions.whatIsYourReligion
            case "No.":
                return questions.didTheUniverseHaveABeginning
            case "I don't Know.":
                return questions.didTheUniverseHaveABeginning
            default:
                return questions.whatIsYourReligion
        }
    }      
    else if (selectionObj.question === "Do you think God cares about us?"){
        if (selectionObj.answer === "Yes."){
            //Placeholder
            return explanations.placeholder
        }
        else if (selectionObj.answer === "No."){
            return explanations.placeholder
        }
        else if (selectionObj.answer === "I'm not sure."){
            return explanations.placeholder
      } 
    }
    else{
        return explanations.placeholder
    }
}