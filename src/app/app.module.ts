import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './Componts/Courses/courses-list/courses-list.component';
import { AddCoursesComponent } from './Componts/Courses/add-courses/add-courses.component';
import { FormsModule } from '@angular/forms';
import { EditCoursesComponent } from './Componts/Courses/edit-courses/edit-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    AddCoursesComponent,
    EditCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
