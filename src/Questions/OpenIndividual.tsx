import { useState } from "react";
import Button from "../Components/Button";
import ParagraphInput from "../Components/ParagraphInput";

function OpenIndividualQuestion(props: any) {
  const [answerSelf, setAnswerSelf] = useState<string>("");
  const [guessPartner, setGuessPartner] = useState<string>("");

  function makeQuestion(question: Question, selfQuestion: boolean): string {
    let start = question.question.indexOf("{");
    let end = question.question.indexOf("}");
    let type: String = question.question.slice(start, end + 1);
    let firstPart: String = question.question.slice(0, start);
    let secondPart: String = question.question.slice(end + 1);
    if (type === "{possesive}") {
      if (selfQuestion) return firstPart + "your" + secondPart;
      else {
        if (props.player1Turn)
          return firstPart + props.player2.name + "'s" + secondPart;
        else return firstPart + props.player1.name + "'s" + secondPart;
      }
    } else if (type === "{singular}") {
      if (selfQuestion) return firstPart + "you" + secondPart;
      else {
        if (props.player1Turn)
          return firstPart + props.player2.name + secondPart;
        else return firstPart + props.player1.name + secondPart;
      }
    } else {
      return question.question
    }
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

type Question = {
  questionId: number;
  question: string;
  questionType: string;
  intimicyLevel: number;
};
