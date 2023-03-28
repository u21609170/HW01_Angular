import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursesComponent } from './Componts/Courses/add-courses/add-courses.component';
import { CoursesListComponent } from './Componts/Courses/courses-list/courses-list.component';
import { EditCoursesComponent } from './Componts/Courses/edit-courses/edit-courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  },
  {
    path: 'Courses',
    component: CoursesListComponent
  },
  {
    path: 'Courses/add',
    component: AddCoursesComponent
  },
  {
    path: 'Courses/edit/:id',
    component: EditCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
