import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Paho } from  '../../libs/mqttws31.js';
import {Observable} from 'rxjs/Observable';
/*
	Generated class for the MQTTService provider.

	See https://angular.io/docs/ts/latest/guide/dependency-injection.html
	for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MQTTService {

	client: any;
	connected: boolean;
	url: string;
	observer: any;
	observable = new Observable<string>(observer => {
			this.observer = observer;
    });


	constructor() {
		this.connected = false;
		console.log('Hello MQTTService Provider');
	}

	connect(url:string, port:number, userName:string, password:string, useSSL: boolean){

		return new Promise((resolve, reject) => {

			this.client = new Paho.Client(url, port, "angularMQTT" + Math.floor(Math.random() * (1000 - 32 + 1)) + 32 );

			var client = this.client;

			var opt ={
				userName: userName,
				password: password,
				useSSL: useSSL,
				timeout: 3,

				onSuccess: () =>{
					client.subscribe("#");
					this.connected = true;
					resolve();
				},

				onFailure: (error) =>{
					reject(error);
				} 

			};

			this.client.connect(opt);


		})
	}

	isConnect():boolean{
		return this.connected;
	}

	onMessage():Observable<any>{
		//this.observable.next(data.payloadString);
		//console.log(data.payloadString);
		//this.observable = data.payloadString;
		const observable = new Observable(observer => {
			
			this.client.onMessageArrived = (data)=>{
				observer.next(data);
			}

		});
		return observable;
	}
	subscribe():any{
		return this.observable;
	}


}
