import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {MQTTService} from '../../providers/mqtt-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  temperatura:number;
  umidade:number;
  constructor(public navCtrl: NavController, public mqttService:MQTTService) {
    //mqttService.connect("vitor",2000,"ds","dsd",false);
    console.log(this.mqttService.isConnect());
    if(this.mqttService.isConnect()){
          this.mqttService.onMessage().subscribe(data=>{
              var dataT = JSON.parse(data.payloadString);
              this.temperatura = dataT.temperatura;
              this.umidade = dataT.umidade;
              console.log(this.temperatura);
          })
    }

  }

}
