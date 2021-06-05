import { useState } from "react";
import Button from "../Components/Button";
import ParagraphInput from "../Components/ParagraphInput";
import { Question } from "../Types/QuestionType";

function OpenIndividualQuestion(props: any) {
  const [answerSelf, setAnswerSelf] = useState<string>("");
  const [guessPartner, setGuessPartner] = useState<string>("");

  function makeQuestion(questionObj: Question, selfQuestion: boolean): string {
    let question = questionObj.question;
    let formatedQuestion = "";
    let type = "";
    for (let i = 0; i < question.length; i++) {
      if (question[i] === "{") {
        for (let j = i; j < question.length; j++) {
          if (question[j] === "}") {
            i = j;
            break;
          } else type += question[j];
        }

        //conditional rendering for tags in string
        if (type === "{singular") {
          if (selfQuestion) formatedQuestion += "you";
          else
            formatedQuestion += props.player1Turn
              ? props.player2.name
              : props.player1.name;
        } else if (type === "{possesive") {
          if (selfQuestion) formatedQuestion += "your";
          else
            formatedQuestion += props.player1Turn
              ? props.player2.name + "'s"
              : props.player1.name + "'s";
        } else if (type === "{be") {
          if (selfQuestion) formatedQuestion += "are";
          else formatedQuestion += "is";
        } else if (type === "{posPronoun") {
          if (selfQuestion) formatedQuestion += "your";
          else formatedQuestion += "their";
        } else if (type === "{do") {
          if (selfQuestion) formatedQuestion += "do";
          else formatedQuestion += "does";
        } else if (type === "{reflective") {
          if (selfQuestion) formatedQuestion += "yourself";
          else formatedQuestion += "his/herself";
        } else if (type === "{pronoun") {
          if (selfQuestion) formatedQuestion += "you";
          else formatedQuestion += "they";
        } else if (type === "{otherSingular") {
          if (selfQuestion)
            formatedQuestion += props.player1Turn
              ? props.player2.name
              : props.player1.name;
          else formatedQuestion += "you";
        } else if (type === "{pastBe") {
          if (selfQuestion) formatedQuestion += "were";
          else formatedQuestion += "was";
        } else if (type === "{have") {
          if (selfQuestion) formatedQuestion += "have";
          else formatedQuestion += "has";
        }
        type = "";
      } else {
        formatedQuestion += question[i];
      }
    }
    return formatedQuestion[0].toUpperCase() + formatedQuestion.substring(1);
  }

  function clear() {
    setAnswerSelf("");
    setGuessPartner("");
  }

  return (
    <>
      <ParagraphInput
        label={makeQuestion(props.question, true)}
        value={answerSelf}
        onChange={(e: any) => setAnswerSelf(e.target.value)}
        placeholder={makeQuestion(props.question, true)}
      />
      <ParagraphInput
        label={makeQuestion(props.question, false)}
        value={guessPartner}
        onChange={(e: any) => setGuessPartner(e.target.value)}
        placeholder={makeQuestion(props.question, false)}
      />
      <Button
        className="ml-3 mb-6"
        onClick={() => {
          props.handleChange(answerSelf, guessPartner);
          clear();
        }}
      >
        Next
      </Button>
    </>
  );
}
export default OpenIndividualQuestion;
