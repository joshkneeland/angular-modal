import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _snackBar: MatSnackBar) { }

  title = 'angular-modal-project';

  displayModal: boolean = false;
  displaySnackbar: boolean = false;
  durationInSeconds: number = 3;

  // MODAL LOGIC
  updateModal(modalState?: any): void {
    console.log('modalState: ', modalState);
    // modalState === 'open' ? this.displayModal = true : this.displayModal = false;

    if(modalState === 'open') {
      this.displayModal = true;
    } else {
      this.displayModal = false;
      this.openSnackBar(modalState);
    }
  }

  openSnackBar(modalStateParam: string) {
    // this._snackBar.openFromComponent(ToastComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });
    let snackBarState = '';
    modalStateParam === 'cancel' ? snackBarState = 'Oops!! Please try again.' : snackBarState = 'Success!! Your data was saved.'; 
    this._snackBar.open(snackBarState, 'Close', {
      duration: 2000
    });
  }
}
