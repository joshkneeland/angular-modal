import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnChanges {

  constructor() { }

  ngOnChanges(): void {
    console.log('ngOnChanges demo is: ', this.modalProperties);

    this.modalProperties = {
      modalAriaValue: this.ariaValue,
      modalTitleText: this.titleText,
      modalBodyContent: this.bodyContent,
      modalPrimaryButtonLabel: this.primaryButtonLabel,
      modalSecondaryButtonLabel: this.secondaryButtonLabel,
      modalColorTheme: this.selectColorTheme,
      modalTitleOption: this.selectTitleOption(),
    }
  }

  openModal(modalType: string) {
    this.displayModal = true;

    switch(modalType) {
      case 'dialogModal':
        console.log('dialogModal was triggered');
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

  displayModal: boolean = false;

  //Modal Radio Input Fields
  selectColorTheme: string = 'Light Theme';
  colorThemes: string[] = ['Light Theme', 'Dark Theme'];
  titleOptions: string[] = ['Show Title', 'Hide Title'];

  //JSON Display:
  ariaValue: string = 'Dialog Modal';
  titleText: string = 'Modal Title';
  bodyContent: string = 'Modal body content';
  primaryButtonLabel: string = 'Accept';
  secondaryButtonLabel: string = 'Cancel';
  titleOption: string = 'Show Title';

  selectTitleOption(): boolean {
    return this.titleOption === 'Show Title' ? true : false;
  }

  modalProperties = {
    modalAriaValue: this.ariaValue,
    modalTitleText: this.titleText,
    modalBodyContent: this.bodyContent,
    modalPrimaryButtonLabel: this.primaryButtonLabel,
    modalSecondaryButtonLabel: this.secondaryButtonLabel,
    modalColorTheme: this.selectColorTheme,
    modalTitleOption: this.selectTitleOption(),
  }
}
