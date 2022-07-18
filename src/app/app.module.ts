

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { LanguagesComponent } from './languages/languages.component';
import { LanguagesService } from './languages.service';
import { PipeComponent } from './pipe/pipe.component';
import { Exercise041Component } from './exercise041/exercise041.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    LanguagesComponent,
    PipeComponent,
    Exercise041Component,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorService,
    LanguagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
