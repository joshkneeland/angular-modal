import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../../interfaces/periodic-element';

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
      name: 'closeModal', 
      description: 'This will close the open modal. Additionally, text changes will not be saved.', 
      attributes: 'Type:',
      attributeType: 'function'
    },
    {
      name: 'saveModal', 
      description: 'Opens the modal', 
      attributes: 'Type:',
      attributeType: 'function'
    },
  ];

  displayedColumns: string[] = ['name', 'description', 'attributes'];
  dataSource = this.ELEMENT_DATA;
}
