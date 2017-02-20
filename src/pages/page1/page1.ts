import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {MQTTService} from '../../providers/mqtt-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public mqttService:MQTTService) {
    //mqttService.connect("vitor",2000,"ds","dsd",false);

  }

}
