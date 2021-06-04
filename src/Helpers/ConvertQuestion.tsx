import { Question } from "../Types/QuestionType"
export default function convertQuestion(question: Question, selfQuestion: boolean, props: any) {
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
      return question.question;
    }
  }
  