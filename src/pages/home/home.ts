import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConsultaTemperaturaPage } from '../consultaTemperatura/consultaTemperatura';
import { DefineTemperaturaPage } from '../defineTemperatura/defineTemperatura';
import { ConfigurarControladorPage } from '../configurarControlador/configurarControlador';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})


export class HomePage {


	constructor(public navCtrl: NavController) {
		
	}
	
	goToConsTemp(){
		this.navCtrl.push(ConsultaTemperaturaPage);
	}

	goToDefTemp(){
		this.navCtrl.push(DefineTemperaturaPage);
	}

	goToConfCont(){
		this.navCtrl.push(ConfigurarControladorPage);
	}
}
