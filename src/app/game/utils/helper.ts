import { Answer } from '../data-access/game.model';

export function getRandomObject(data: Answer[]): Answer {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

export function getWinner(answerOne: Answer | null, answerTwo: Answer | null) {
  if (!answerOne || !answerTwo) return null;
  if (answerOne.id === answerTwo.id) return 3;
  const smallerId = answerOne.id < answerTwo.id ? answerOne.id : answerTwo.id;
  const valueKeeper = {
    smallerId: {
      id: smallerId,
      value: smallerId === answerOne.id ? 1 : 2,
    },
    biggerId: {
      id: smallerId !== answerOne.id ? answerOne.id : answerTwo.id,
      value: smallerId !== answerOne.id ? 1 : 2,
    },
  };

  // TH 2 vs TH 5
  if (valueKeeper.smallerId.id === 2 && valueKeeper.biggerId.id === 5) {
    return valueKeeper.smallerId.value;
  }
  // TH 5 vs TH 1
  if (valueKeeper.biggerId.id === 5 && valueKeeper.smallerId.id === 1) {
    return valueKeeper.biggerId.value;
  }

  // TH 1 vs TH 4
  if (valueKeeper.smallerId.id === 1 && valueKeeper.biggerId.id === 4) {
    return valueKeeper.smallerId.value;
  }

  if (valueKeeper.smallerId.id === valueKeeper.biggerId.id - 1) {
    return valueKeeper.smallerId.value;
  }

  if (valueKeeper.biggerId.id - 2 === valueKeeper.smallerId.id) {
    return valueKeeper.biggerId.value;
  }

  return 3;
}
