export type Player = {
    playerNum: number;
    name: string;
    answers: Array<string | null>;
    guesses: Array<string>;
    score: number;
  };