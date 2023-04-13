import { Injectable } from '@angular/core';
import { data } from '../utils/data';
import { delay, Observable, of } from 'rxjs';
import { Answer } from './game.model';
import { getRandomObject, getWinner } from '../utils/helper';

const FAKE_DELAY = 800;

@Injectable({ providedIn: 'root' })
export class GameService {
  calculateComputerAnswer(): Observable<Answer> {
    const computerAnswer = getRandomObject(data);
    return of(computerAnswer).pipe(delay(FAKE_DELAY));
  }

  calculateWinner(
    answerOne: Answer | null,
    answerTwo: Answer | null
  ): Observable<number | null> {
    return of(getWinner(answerOne, answerTwo)).pipe(delay(FAKE_DELAY));
  }
}
