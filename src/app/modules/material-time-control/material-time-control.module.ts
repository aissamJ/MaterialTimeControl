import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule, MatButtonToggleModule,
  MatDialogModule, MatIconModule, MatInputModule,
  MatSelectModule, MatToolbarModule,
  MatFormFieldModule,
  MatCardModule
} from '@angular/material';

import { WMatTimePickerComponent } from '../../components/w-mat-timepicker/w-mat-timepicker.component';
import { WTimeDialogComponent } from '../../components/w-time-dialog/w-time-dialog.component';
import { WClockComponent } from '../../components/w-clock/w-clock.component';
import { WTimeComponent } from '../../components/w-time/w-time.component';

@NgModule({
  declarations: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ],

  imports: [
    CommonModule,

    /****** Angular Material 2 components  ***********/
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,

    /******* Flexbox for alignment /*********/
    FlexLayoutModule,
  ],

  exports: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ],

  entryComponents: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ]

})
export class MaterialTimeControlModule { }
