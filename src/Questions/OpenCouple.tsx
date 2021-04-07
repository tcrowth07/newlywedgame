import { useState } from "react";
import Button from "../Components/Button"
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
      <Button className="ml-3" bgColor="yellow-500" onClick={() => { props.handleChange(answer); setAnswer("")}}>
        Next
      </Button>
    </>
  );
}
export default OpenIndividualQuestion;
