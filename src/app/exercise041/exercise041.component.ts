import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exercise041',
  templateUrl: './exercise041.component.html',
  styleUrls: ['./exercise041.component.css']
})
export class Exercise041Component implements OnInit {
 @Input("is-favourite") isFavourite: boolean=false;
  @Output("click") change= new EventEmitter();

  ngOnInit(): void {
  }
  onClick(){
  this.isFavourite=!this.isFavourite;
  this.change.emit({newValue: this.isFavourite});
  }
}
export interface FavouriteChangeEventArgs{
  neValue:boolean
}
