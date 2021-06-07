import { Injectable } from '@angular/core';
import { DisplayValues } from '../models/display-values';

@Injectable({
  providedIn: 'root'
})
export class UpdateModalService {

  constructor() { }

  getDisplayValues(): DisplayValues {
    return {
      titleText: 'Title Example',
      bodyContent: 'Body content example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      primaryButtonLabel: 'Accept',
      secondaryButtonLabel: 'Cancel',
      ariaValue: 'Aria Value Example',
    }
  }
}
