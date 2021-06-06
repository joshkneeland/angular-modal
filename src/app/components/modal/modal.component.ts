import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor() {}

  @Input() modalInfo: any; 
  @Input() hasTitleIconPass: any; 
  @Input() hasLightThemePass: any; 
  @Output() changed: any = new EventEmitter<any>(); 

  closeButton() {
    this.changed.emit('closeButton');
  }

  saveButton() {
    this.changed.emit('saveButton');
  }
}
