
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DisplayValues } from '../../models/display-values';
import { UpdateModalService } from 'src/app/services/update-modal.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private _updateModalService: UpdateModalService) { }

  ngOnInit() {
    this.displayValues = this._updateModalService.getDisplayValues();
  }

  @Output() changed: any = new EventEmitter<any>(); 
  @Output() displayModal: any = new EventEmitter<any>();

  callParentEvent(status: string) {
    this._updateModalService.updateService(this.displayValues);
    this.displayModal.emit(status);
  }

  //Modal Radio Input Fields
  titleIconOptions: string[] = ['Show Icon', 'Hide Icon'];
  titleIconOption: string = 'Show Icon';

  displayValues: DisplayValues = {
    titleText: '',
    bodyContent: '',
    primaryButtonLabel: '',
    secondaryButtonLabel: '',
    ariaValue: '',
    hasTitleIcon: ''
  };

  hasTitleIcon(): string {
    return this.displayValues.hasTitleIcon ? 'Show Icon' : 'Hide Icon';
  }

  // hasLightTheme(): boolean {
  //   return this.colorTheme === 'Light Theme' ? true : false;
  // }
}
