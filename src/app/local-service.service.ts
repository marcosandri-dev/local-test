import { Injectable } from '@angular/core';

@Injectable()
export class LocalServiceService {

  constructor() { }

  cars = ['Ferrari', 'Maserati', 'Bugatti', 'Work bitch'];

  myData() {
  	return 'Britney Spears';
  }

}
