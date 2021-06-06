import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../../models/periodic-element';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ELEMENT_DATA: PeriodicElement[] = [
    {
      name: 'functionOne', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      attributes: 'Type:',
      attributeType: 'function'
    },
    {
      name: 'functionTwo', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
      attributes: 'Type:',
      attributeType: 'function'
    },
  ];

  displayedColumns: string[] = ['name', 'description', 'attributes'];
  dataSource = this.ELEMENT_DATA;
}
