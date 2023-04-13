import { Component } from '@angular/core';
import { data } from '../../utils/data';
import { GameStore } from '../../data-access/game.store';
import { Answer } from '../../data-access/game.model';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent {
  data = data;
  $vm = this.gameStore.vmGameScreen;

  constructor(private gameStore: GameStore) {}

  onChooseAnswer(playerAnswer: Answer) {
    this.gameStore.addPlayerAnswer(playerAnswer);
    this.gameStore.getComputerCalculation();
  }

  onPlayAgain() {
    this.gameStore.resetGame();
  }
}
