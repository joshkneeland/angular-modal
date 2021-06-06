import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if('modalInfo' in changes) {
      console.log('inner was hit');
    }
    console.log('changes: ', changes);
  }

  @Input() modalInfo: any; // decorate the property with @Input()
}
