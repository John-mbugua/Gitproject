import { Component } from '@angular/core';
import { FavouriteChangeEventArgs } from './exercise041/exercise041.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'johapp';
   movie: string | undefined;
   post={
    title:"Title",
    isFavourite:true
   }
   onFavouriteChange(eventArgs: FavouriteChangeEventArgs){
     console.log("favourite changed: ", eventArgs)
   }
}
 