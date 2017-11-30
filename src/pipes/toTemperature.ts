import {Pipe} from '@angular/core';

@Pipe({
	name : 'toTemperature'
})

export class ToTemperature{
	transform(temperatura : number, precisao : number = 1){
		return temperatura.toFixed(precisao);
	}
}