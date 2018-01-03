import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MaterialTimeControlModule } from './modules/material-time-control/material-time-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    MaterialTimeControlModule,
    MatCardModule,
    MatSnackBarModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
