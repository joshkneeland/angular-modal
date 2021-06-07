// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// Angular Material Modules
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// COMPONENTS
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { ApiComponent } from './components/api/api.component';
import { SpecComponent } from './components/spec/spec.component';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';
import { ModalComponent } from './components/modal/modal.component';

// ANGULAR MATERIAL
import { MatSnackBar } from '@angular/material/snack-bar';

// SERVICES
import { UpdateModalService } from './services/update-modal.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ApiComponent,
    SpecComponent,
    AccessibilityComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [UpdateModalService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
