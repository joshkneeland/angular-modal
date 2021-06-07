import { Injectable } from '@angular/core';
import { DisplayValues } from '../models/display-values';

@Injectable({
  providedIn: 'root'
})
export class UpdateModalService {

  constructor() {}

  modalValues = {
    titleText: 'Title Example',
    bodyContent: 'Body content example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor qincididunt.',
    primaryButtonLabel: 'Accept',
    secondaryButtonLabel: 'Cancel',
    ariaValue: 'Aria Value Example',
    hasTitleIcon: 'Show Icon'
  }

  getDisplayValues(): DisplayValues {
    return this.modalValues;
  }

  updateService(displayValues: any) {
    this.modalValues = displayValues;
  }
}
