import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
    languages;
  constructor(service: LanguagesService) {
    this.languages= service.getlanguages();
   }
    
  ngOnInit(): void {
  }

}
