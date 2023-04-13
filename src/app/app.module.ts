import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameHeaderComponent } from './game/feature/game-header/game-header.component';
import { GameScreenComponent } from './game/feature/game-screen/game-screen.component';
import { RulesModalComponent } from './game/ui/rules-modal/rules-modal.component';
import { GameChoiceComponent } from './game/ui/game-choice/game-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    GameHeaderComponent,
    GameScreenComponent,
    RulesModalComponent,
    GameChoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
