import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
    
    tempIdeal : number = 0;
    tempMaxima : number = 0;
    tempMinima : number = 0;

    status : string;
    cor : string;

    horasHoje : Array<string>;
    tempHoje : Array<number>;

    datasHist : Array<string>;
    tempMinHist : Array<number>;
    tempMaxHist : Array<number>;

    urlBase : string = 'http://localhost:3000';

	constructor(public navCtrl: NavController, private httpClient: HttpClient) {
        this.getStatus();
        this.getTemperaturas();
        this.getTemperaturasHoje();
        this.getTemperaturasHistorico();
	}

	MontaChartHoje(){
		this.hojeChart = new Chart(this.hojeCanvas.nativeElement, {
			type: 'line',
            data: {
                labels: this.horasHoje,
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
                        data: this.tempHoje,
                        spanGaps: false,
                    }
                ]
            }
        });
    };

    MontaChartHistorico(){
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
    
    getStatus(){
        this.httpClient.get(this.urlBase + '/controlador/:id/status')
        .subscribe(data => {
            this.status = data['status'];
            this.cor = (this.status == 'Online') ? 'secondary' : 'danger';
        }, error => {
            // mensagem de erro
        });
    }

    getTemperaturas(){
        this.httpClient.get(this.urlBase + '/controlador/:id/temperaturas')
        .subscribe(data => {
            this.tempIdeal = Number(data['ideal']);
            this.tempMinima = Number(data['minima']);
            this.tempMaxima = Number(data['maxima']);
        }, error => {
            // mensagem de erro
        });
    }

    getTemperaturasHoje(){
        this.httpClient.get(this.urlBase + '/controlador/:id/temperaturas/hoje')
        .subscribe(data => {
            let lista = <Array<Object>> data;

            this.horasHoje = new Array<string>();
            this.tempHoje = new Array<number>();

            lista.forEach(report => {
                this.horasHoje.push(report['hora']);
                this.tempHoje.push(report['temperatura']);
            });

            this.MontaChartHoje();
        }, error => {
            // Mensagem de erro
        });
    }

    getTemperaturasHistorico(){
        this.httpClient.get(this.urlBase + '/controlador/:id/temperaturas/historico')
        .subscribe(data => {
            let lista = <Array<Object>> data;

            this.datasHist = new Array<string>();
            this.tempMinHist = new Array<number>();
            this.tempMaxHist = new Array<number>();

            lista.forEach(report => {
                this.datasHist.push(report['data']);
                this.tempMinHist.push(report['minima']);
                this.tempMaxHist.push(report['maxima']);
            });

            this.MontaChartHistorico();

        }, error => {
            // Mensagem de erro
        });
    }

}
