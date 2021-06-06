import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
}
