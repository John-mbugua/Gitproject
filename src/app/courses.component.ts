
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
   selector: 'courses',
   template: `
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `
})

export class CoursesComponent{
  email:any="john@example.com";
  onKeyUp(){
    console.log(this.email);
  }
  courses: any[];

  constructor(service: CoursesService){
    this.courses=service.getCourse();
     }
  }
