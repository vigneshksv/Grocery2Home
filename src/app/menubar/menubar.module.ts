import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenubarComponent } from './menubar.component';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  declarations: [
    MenubarComponent,
  ],
  exports: [MenubarComponent]
})
export class MenuBarModule { }
