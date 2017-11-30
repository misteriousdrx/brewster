import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

// App Import
import { MyApp } from './app.component';

// Pages Import
import { HomePage } from '../pages/home/home';
import { ConsultaTemperaturaPage } from '../pages/consultaTemperatura/consultaTemperatura';
import { DefineTemperaturaPage } from '../pages/defineTemperatura/defineTemperatura';
import { ConfigurarControladorPage } from '../pages/configurarControlador/configurarControlador';

// Pipes Import
import { ToTemperature } from '../pipes/toTemperature';


@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ConsultaTemperaturaPage,
		DefineTemperaturaPage,
		ConfigurarControladorPage,
		ToTemperature
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ConsultaTemperaturaPage,
		DefineTemperaturaPage,
		ConfigurarControladorPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})

export class AppModule {}
