import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
    getlanguages(){
      return ["C++ programming","Python programming","Javacript programming","Java programming"];
    }
  constructor() { }
}
