import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-modal-project';

  // MODAL LOGIC
  updateModal(modalState: string): void {
    console.log('modalState: ', modalState);
    modalState === 'open' ? this.displayModal = true : this.displayModal = false;
  }

  displayModal: boolean = false;
}
