import { Component } from '@angular/core';
import { DisplayValues } from '../../models/display-values';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  constructor() { }

  openModal(modalType: string) {
    this.displayModal = true;

    switch(modalType) {
      case 'dialogModal':
        // console.log('this.modalProperties: ', this.modalProperties);
        break;
      case 'lightTheme':
        console.log('lightTheme was triggered');
        break;
      case 'darkTheme':
        console.log('darkTheme was triggered');
        break;
      case 'hideTitle':
        console.log('hideTitle was triggered');
        break;
      default:
        console.log('default was triggered');
        break;
    }
  }

  updateModal(buttonType: string): void {
    console.log('updateModal was hit');
    console.log('buttonType: ', buttonType);
    this.displayModal = false;
  }

  displayModal: boolean = false;

  //Modal Radio Input Fields
  colorThemes: string[] = ['Light Theme', 'Dark Theme'];
  colorTheme: string = 'Light Theme';
  titleIconOptions: string[] = ['Show Icon', 'Hide Icon'];
  titleIconOption: string = 'Show Icon';

  displayValues: DisplayValues = {
    titleText: 'Title Example',
    bodyContent: 'Body content example',
    primaryButtonLabel: 'Accept',
    secondaryButtonLabel: 'Cancel',
    ariaValue: 'Aria Value Example',
  }

  hasTitleIcon(): boolean {
    return this.titleIconOption === 'Show Icon' ? true : false;
  }

  hasLightTheme(): boolean {
    return this.colorTheme === 'Light Theme' ? true : false;
  }
}
