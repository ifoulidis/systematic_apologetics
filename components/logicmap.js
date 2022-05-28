import * as questions from './questions';
import * as explanations from './explanations'

export function GetResponse(s){
    const SO = s

    if (SO.question === "Did the Universe have a beginning?"){
        if (SO.answer === "Yes."){
            return explanations.cosmological_argument}
        else if (SO.answer === "No."){
            return explanations.infinite_regress}
        else if (SO.answer === "I don't know."){
            return explanations.infinite_regress}
    }
    else if (SO.question === "What are your views on God?"){
        switch (SO.answer){
            case "There is only one.":
                return questions.whatIsYourReligion;
            case "There is none.":
                return questions.didTheUniverseHaveABeginning;
            case "There is more than one.":
                return questions.didTheUniverseHaveABeginning;
            case "I don't know.":
                return explanations.cosmological_argument;
        }
    }
    else if (SO.question === "What is your religion?"){
        if (SO.answer === "Christianity"){
            console.log("Christianity matched")
            return explanations.ChristianityEx}
        else if (SO.answer === "Catholicism"){
            return explanations.placeholder}
        else if (SO.answer ===  "Islam"){
            return explanations.islamEx}
        else if (SO.answer ===  "Buddhism"){
            return explanations.placeholder}
        else if (SO.answer ===  "Hinduism"){
            return explanations.placeholder}
        else if (SO.answer ===  "Judaism"){
            return explanations.placeholder}
        else if (SO.answer ===  "I don't belong to a religion."){
            return explanations.placeholder}
    }
    else if (SO.question === "Do you believe in an uncreated god?"){
        if (SO.answer === "Yes."){
            //This actually displays pantheistic religions too atm. May change, but some pantheists are dumb.
            return questions.whatIsYourReligion}
        else if (SO.answer === "No."){
            return questions.didTheUniverseHaveABeginning}
        else if (SO.answer === "I don't know."){
            return questions.didTheUniverseHaveABeginning}
    }      
    else if (SO.question === "Do you think God cares about us?"){
        if (SO.answer === "Yes."){
            return explanations.cosmological_argument
        }
        else if (SO.answer === "No."){
            return explanations.infinite_regress
        }
        else if (SO.answer === "I'm not sure."){
            return explanations.e3
        } 
    }
    else if (SO === 'Does God Care?'){
        return questions.doesGodCare
    }
}