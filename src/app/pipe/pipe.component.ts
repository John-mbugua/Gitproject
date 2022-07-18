import { Component, OnInit } from '@angular/core';
import { PipeService } from '../pipe.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  course;
  constructor(service: PipeService) {
    this.course=service.getcourse();
   }

  ngOnInit(): void {
  }

}
