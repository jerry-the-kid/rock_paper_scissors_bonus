import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-rules-modal',
  templateUrl: './rules-modal.component.html',
  styleUrls: ['./rules-modal.component.scss']
})
export class RulesModalComponent {
  @Output() close = new EventEmitter();

  onCloseModal(){
    this.close.emit();
  }
}
