import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipeService {
   getcourse(){
     return {
      title:"The complete Angular Course",
      rating:4.9745,
      students:30123,
      price:190.5,
      releaseDate:new Date(2021,12,2)
    };
   }
  constructor() { }
}
