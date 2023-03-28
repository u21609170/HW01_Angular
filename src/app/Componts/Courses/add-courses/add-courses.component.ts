import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/Models/Course-List.model';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent {
  
  addCourseRequest: Courses = {
    id : '',
    name :'',
    duration :'',
    description :''
  };

  constructor(private courseService : CoursesService, private router: Router) {}

  ngOnInit(): void{

  }

  addCourse() {
    this.courseService.addCourse(this.addCourseRequest)
    .subscribe({
      next: (vak) => {
        this.router.navigate(['Courses']);
      }
    });
    console.log(this.addCourseRequest);
  }

  OnCancel(){
    this.router.navigate(['Courses']);
  }
}
