import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { ApiComponent } from './components/api/api.component';
import { SpecComponent } from './components/spec/spec.component';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';
import { ModalComponent } from './components/modal/modal.component';
import { ToastComponent } from './components/toast/toast.component';
import { UpdateModalService } from './services/update-modal.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DemoComponent,
        ApiComponent,
        SpecComponent,
        AccessibilityComponent,
        ModalComponent,
      ],
      imports: [
        OverlayModule
      ],
      providers: [
        UpdateModalService,
        ToastComponent,
        MatSnackBar
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-modal-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-modal-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log('compiled: ', compiled);
    expect(compiled.querySelector('.container-wrapper').textContent).toContain('Example Sandbox - Dialog Modal');
  });
});
