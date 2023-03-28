import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/Models/Course-List.model';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent {
  
  constructor(private courseService : CoursesService, private router: Router, private route: ActivatedRoute) {}
  UpdateCourseRequest: Courses = {
    id : '',
    name :'',
    duration :'',
    description :''}

  ngOnInit(): void{
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.courseService.getModule(id).subscribe({
            next: (response) =>{
              this.UpdateCourseRequest = response
            }
          })
        }
      }
    })
  }

  UpdateCourse() {
    this.courseService.UpdateCourses(this.UpdateCourseRequest.id, this.UpdateCourseRequest)
    .subscribe({
      next: (vak) => {
        this.router.navigate(['Courses']);
      }
    });
    console.log(this.UpdateCourseRequest);
  }

  OnCancel(){
    this.router.navigate(['Courses']);
  }
}


