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
      bodyContent: 'Body content example',
      primaryButtonLabel: 'Accept',
      secondaryButtonLabel: 'Cancel',
      ariaValue: 'Aria Value Example',
    }
  }
}
