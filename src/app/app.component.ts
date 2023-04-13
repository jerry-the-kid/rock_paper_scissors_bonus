import { Component } from '@angular/core';

import {GameStore} from "./game/data-access/game.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [GameStore]
})
export class AppComponent {
  isOpenRules$ = this.gameStore.isOpenRules$;
  constructor(private gameStore : GameStore) {
  }

  onCloseModal() {
    this.gameStore.toggleOpenRules();
  }

  onOpenModal() {
    this.gameStore.toggleOpenRules();
  }
}
