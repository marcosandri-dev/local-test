import { Component } from '@angular/core';
import { LocalServiceService } from './local-service.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger('myAwesomeAnimation', [
  		state('small', style({
  			transform: 'scale(1)'
  		})),
  		state('large', style({
  			transform: 'scale(1.2)'
  		})),

  		transition('small <=> large', animate('1200ms ease-in', keyframes([
  			style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
  			style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
  			style({opacity: 1, transform: 'translateY(0) scale(1.2)', offset: 1}),
  		]))),
  	]), 
  ] 
})
export class AppComponent {

	constructor(private localService:LocalServiceService){

	}

	state: string = 'small'




  title = 'Local-test';

  myArr = ['Plane Crash', 'Various Toys', 'Behemoths'];

/*  myObj = {
  	gender: 'male',
  	age: '27',
  	name: 'Marco'
  }*/

  sintesi = true;

  myEvent(event) {
  	this.sintesi = (this.sintesi === true ? false : true);
  	// if (this.sintesi == false){
  	// 	this.sintesi = true;
  	// } else {
  	// 	this.sintesi = false;
  	// }
  }

  someProperty:string = '';

  ngOnInit() {
  	console.log(this.localService.cars);
  
  	this.someProperty = this.localService.myData();
  }

  animateMe() {
  	this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
