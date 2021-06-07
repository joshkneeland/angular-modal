import { Component, Input, Output, EventEmitter, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { DisplayValues } from 'src/app/models/display-values';
import { UpdateModalService } from 'src/app/services/update-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalWrapper') modalWrapper: any;
  @Input() displayModal: boolean = false;
  clickOutsideClose: boolean = false;

  constructor(private _updateModalService: UpdateModalService, private renderer: Renderer2) {
    this.modalWrapper = null;
  }

  ngOnInit() {
    this.displayValues = this._updateModalService.getDisplayValues();

    setTimeout(() => {
      this.clickOutsideClose = true;
    }, 500);

    this.renderer.listen('window', 'click', (e:Event)=> {
      if(e.target !== this.modalWrapper.nativeElement && this.displayModal &&  this.clickOutsideClose){
        this.closeModal('cancel');
      }
    });
  }

  displayValues: DisplayValues = {
    titleText: '',
    bodyContent: '',
    primaryButtonLabel: '',
    secondaryButtonLabel: '',
    ariaValue: '',
    hasTitleIcon: ''
  };

  @Output() changedModal: any = new EventEmitter<any>(); 

  closeModal(buttonType: string) {
    this.changedModal.emit(buttonType);
  }
}
