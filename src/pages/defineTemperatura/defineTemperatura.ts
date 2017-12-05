import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'page-define-temperatura',
    templateUrl: 'defineTemperatura.html'
})

export class DefineTemperaturaPage {

	tempMinima : number;
	tempMaxima : number;
	tempIdeal : number;

	constructor(public navCtrl: NavController, private httpClient: HttpClient) {
		
		this.httpClient.get('http://localhost:3000/controlador/1/temperaturas')
		.subscribe(data => {
			console.log(data['ideal']); 
			this.tempIdeal = data['ideal'];
			this.tempMinima = data['minima'];
			this.tempMaxima = data['maxima'];
		}, error => {
			console.log(error);
		});

	}



}
