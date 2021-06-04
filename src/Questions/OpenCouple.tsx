import { useState } from "react";
import Button from "../Components/Button";
import ParagraphInput from "../Components/ParagraphInput";

function OpenIndividualQuestion(props: any) {
  const [answer, setAnswer] = useState<string>("");
  return (
    <>
      <ParagraphInput
        label={props.question.question}
        placeholder={props.question.question}
        value={answer}
        onChange={(e: any) => setAnswer(e.target.value)}
      />
      <Button
        className="ml-3 mb-6"
        onClick={() => {
          props.handleChange(answer);
          setAnswer("");
        }}
      >
        Next
      </Button>
    </>
  );
}
export default OpenIndividualQuestion;
