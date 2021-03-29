import { useState } from "react";

function OpenIndividualQuestion(props: any) {
  const [answerSelf, setAnswerSelf] = useState<string>("");
  const [guessPartner, setGuessPartner] = useState<string>("");

  function makeQuestion(question: Question, selfQuestion: boolean): string {
    let start = question.question.indexOf("{");
    let end = question.question.indexOf("}");
    let firstPart: String = question.question.slice(0, start);
    let secondPart: String = question.question.slice(end + 1);
    if (selfQuestion) return firstPart + "your" + secondPart;
    else {
      if (props.player1Turn)
        return firstPart + props.player2.name + "'s" + secondPart;
      else return firstPart + props.player1.name + "'s" + secondPart;
    }
  }

  function clear() {
    setAnswerSelf("")
    setGuessPartner("")
  }

  return (
    <>
      <label>{makeQuestion(props.question, true)}</label>
      <br />
      <textarea
        value={answerSelf}
        onChange={(e) => setAnswerSelf(e.target.value)}
      />
      <br />
      <br />
      <label>{makeQuestion(props.question, false)}</label>
      <br />
      <textarea
        value={guessPartner}
        onChange={(e) => setGuessPartner(e.target.value)}
      />
      <br />
      <button onClick={() => { props.handleChange(answerSelf, guessPartner); clear()}}>
        Next
      </button>
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
