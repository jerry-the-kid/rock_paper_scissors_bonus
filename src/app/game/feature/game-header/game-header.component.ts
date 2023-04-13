import { Component } from '@angular/core';
import {GameStore} from "../../data-access/game.store";

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss']
})
export class GameHeaderComponent {
  score$ = this.gameStore.score$;
  constructor(private gameStore : GameStore) {
  }
}
