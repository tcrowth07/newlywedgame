import { useState } from "react";
function OpenIndividualQuestion(props: any) {
  const [answer, setAnswer] = useState<string>("");
  return (
    <>
      <label>{props.question.question}</label>
      <br />
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <br />
      <button onClick={() => { props.handleChange(answer); setAnswer("")}}>
        Next
      </button>
    </>
  );
}
export default OpenIndividualQuestion;
