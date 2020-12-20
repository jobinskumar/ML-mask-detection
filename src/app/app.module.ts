import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MlMaskDetectionComponent } from './ml-mask-detection/ml-mask-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    MlMaskDetectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
