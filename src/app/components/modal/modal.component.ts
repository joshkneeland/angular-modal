import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DisplayValues } from 'src/app/models/display-values';
import { UpdateModalService } from 'src/app/services/update-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private _updateModalService: UpdateModalService) {}

  ngOnInit() {
    this.displayValues = this._updateModalService.getDisplayValues();
  }

  displayValues: DisplayValues = {
    titleText: '',
    bodyContent: '',
    primaryButtonLabel: '',
    secondaryButtonLabel: '',
    ariaValue: '',
  };

  @Output() changedModal: any = new EventEmitter<any>(); 

  closeModal(type: string) {
    this.changedModal.emit(type);
  }
}
