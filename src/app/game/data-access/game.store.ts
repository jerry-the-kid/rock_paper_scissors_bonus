import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Answer, GameState } from './game.model';
import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { combineLatest, concatMap, EMPTY } from 'rxjs';

const initialValue = {
  score: 0,
  isOpenRules: false,
  currentPlayerAnswer: null,
  currentComputerAnswer: null,
  winner: null,
};

@Injectable()
export class GameStore extends ComponentStore<GameState> {
  // Selectors
  readonly isOpenRules$ = this.select((state) => state.isOpenRules);
  readonly score$ = this.select((state) => state.score);
  readonly currentPlayerAnswer$ = this.select(
    (state) => state.currentPlayerAnswer
  );
  readonly currentComputerAnswer$ = this.select(
    (state) => state.currentComputerAnswer
  );
  readonly winner$ = this.select((state) => state.winner);

  readonly vmGameScreen = this.select({
    currentPlayerAnswer: this.currentPlayerAnswer$,
    currentComputerAnswer: this.currentComputerAnswer$,
    winner: this.winner$,
  });

  constructor(private gameService: GameService) {
    super(initialValue);
  }

  // Reducers
  readonly updateScore = this.updater((state, score: number) => {
    let scoreUpdated = state.score + score;
    if (scoreUpdated === -1) {
      scoreUpdated = 0;
    }
    return { ...state, score: scoreUpdated };
  });

  readonly resetGame = this.updater((state) => {
    return {
      ...state,
      winner: null,
      currentComputerAnswer: null,
      currentPlayerAnswer: null,
    };
  });

  readonly setWinner = this.updater((state, winnerValue: number | null) => {
    return { ...state, winner: winnerValue };
  });

  readonly toggleOpenRules = this.updater((state) => {
    return { ...state, isOpenRules: !state.isOpenRules };
  });
  readonly addPlayerAnswer = this.updater((state, playerAnswer: Answer) => {
    return { ...state, currentPlayerAnswer: playerAnswer };
  });
  readonly addComputerAnswer = this.updater((state, computerAnswer: Answer) => {
    return { ...state, currentComputerAnswer: computerAnswer };
  });

  // Effect
  readonly getComputerCalculation = this.effect<void>((trigger$) =>
    trigger$.pipe(
      concatMap(() =>
        this.gameService.calculateComputerAnswer().pipe(
          tapResponse(
            (answer) => {
              this.addComputerAnswer(answer);
              this.getWinnerCalculation();
            },
            (e: string) => EMPTY
          )
        )
      )
    )
  );

  readonly getWinnerCalculation = this.effect<void>((trigger$) => {
    return trigger$.pipe(
      concatMap(() =>
        combineLatest([
          this.currentComputerAnswer$,
          this.currentPlayerAnswer$,
        ]).pipe(
          concatMap(([computerAnswer, playerAnswer]) =>
            this.gameService.calculateWinner(playerAnswer, computerAnswer).pipe(
              tapResponse(
                (winnerValue) => {
                  switch (winnerValue) {
                    case 1:
                      this.updateScore(+1);
                      break;
                    case 2:
                      this.updateScore(-1);
                      break;
                    default:
                      this.updateScore(0);
                  }

                  this.setWinner(winnerValue);
                },
                (e: string) => EMPTY
              )
            )
          )
        )
      )
    );
  });
}
