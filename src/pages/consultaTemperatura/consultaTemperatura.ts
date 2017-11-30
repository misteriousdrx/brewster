import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Chart } from 'chart.js';


@Component({
	selector: 'page-consulta-temperatura',
    templateUrl: 'consultaTemperatura.html'
})

export class ConsultaTemperaturaPage {
	
	@ViewChild('hojeCanvas') hojeCanvas;
	@ViewChild('historicoCanvas') historicoCanvas;
	
	hojeChart: any;
    historicoChart: any;
    
    tempIdeal : number;
    tempMaxima : number;
    tempMinima : number;

    status : string;
    cor : string;

	constructor(public navCtrl: NavController) {
        this.tempIdeal = 20;
        this.tempMaxima = 22;
        this.tempMinima = 18;

        this.status = 'Online';
        this.cor = 'danger'
	}

	ionViewDidLoad(){
		this.hojeChart = new Chart(this.hojeCanvas.nativeElement, {
			type: 'line',
            data: {
                labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
                datasets: [
                    {
                        label: "Temperatura",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 3,
                        pointHitRadius: 10,
                        data: [28, 28.5, 29, 30, 30.5, 30, 31],
                        spanGaps: false,
                    }
                ]
            }
        });
        
        this.historicoChart = new Chart(this.historicoCanvas.nativeElement, {
			type: 'line',
            data: {
                labels: ["19/11", "20/11", "21/11", "22/11", "23/11", "24/11", "25/11"],
                datasets: [
                    {
                        label: "Temperatura Mínima",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(22, 122, 222,0.4)",
                        borderColor: "rgba(22, 122, 222,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(22, 122, 222,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(22, 122, 222,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 3,
                        pointHitRadius: 10,
                        data: [18, 18.5, 18, 18.5, 18, 18, 18.5],
                        spanGaps: false,
                    },
                    {
                        label: "Temperatura Máxima",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(232, 32, 32,0.4)",
                        borderColor: "rgba(232, 32, 32,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(232, 32, 32,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(232, 32, 32,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 3,
                        pointHitRadius: 10,
                        data: [21.5, 22, 22, 21.5, 21.3, 20.7, 21],
                        spanGaps: false,
                    }
                ]
            }
		});
	}

}
