import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {MQTTService} from '../../providers/mqtt-service';

@Component({
	selector: 'setup-page',
	templateUrl: 'setup-page.html'
})
export class SetupPage {

	data = {
		url:"m10.cloudmqtt.com",
		port:37892,
		useSSL: true,
		userName: "ylfqyweh",
		password: "OmyBRcCKjwpi"
	};

	btnConnect = "Connect";

	constructor(public navCtrl: NavController, public navParams: NavParams, private mqttService : MQTTService) {
		
		if(mqttService.isConnect()){
			this.btnConnect="Connected!";
		}
		
	}

	connect(){
		if(!this.mqttService.isConnect()){
			this.mqttService.connect(this.data.url,this.data.port,this.data.userName,this.data.password,this.data.useSSL)
			.then(()=>{
				console.log("Successfully connected!");
				this.btnConnect="Connected!";
			})
			.catch((error)=>{
				console.log(error);
			})
		}
	}

}
