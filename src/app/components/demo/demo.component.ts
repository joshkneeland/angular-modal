import { Component, OnInit } from '@angular/core';
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
    titleText: '',
    bodyContent: '',
    primaryButtonLabel: '',
    secondaryButtonLabel: '',
    ariaValue: '',
  };

  hasTitleIcon(): boolean {
    return this.titleIconOption === 'Show Icon' ? true : false;
  }

  hasLightTheme(): boolean {
    return this.colorTheme === 'Light Theme' ? true : false;
  }
}
