import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SetupPage } from '../pages/setup-page/setup-page';
import {MQTTService} from '../providers/mqtt-service';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    SetupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    SetupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MQTTService]
})
export class AppModule {}
