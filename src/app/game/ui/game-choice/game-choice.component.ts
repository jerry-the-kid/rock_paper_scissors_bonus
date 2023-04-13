import { Component, Input } from '@angular/core';
import {data } from '../../utils/data';

@Component({
  selector: 'app-game-choice',
  templateUrl: './game-choice.component.html',
  styleUrls: ['./game-choice.component.scss']
})
export class GameChoiceComponent {
  @Input() data! : typeof data[0];
  @Input() absolute : boolean = true;
  @Input() winner : boolean = false;
}
