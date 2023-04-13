export interface Answer {
  id : number;
  imgSrc : string,
  type : string
}

export interface GameState {
  score : number,
  isOpenRules : boolean,
  currentPlayerAnswer : Answer | null,
  currentComputerAnswer : Answer | null,
  winner : number | null,
}

