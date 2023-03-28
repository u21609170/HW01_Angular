import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/Models/Course-List.model';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  
  vakke : Courses[] = []; 
  
  constructor(private courseService : CoursesService, private router: Router) { }

  ngOnInit(): void {

    this.courseService.getAllCourses()
    .subscribe({
      next: (vakke) => {
        console.log(vakke);
        this.vakke = vakke;
        ;
      },
      error: (response) =>{
        console.log(response);
      }
      
    })
    
  }

  OnEdit(id: string){
    this.router.navigate(['/Courses/edit/',id])
    console.log('/Courses/edit/'+id);
  }

  OnDelete(id: string){
    this.courseService.deleteModule(id).subscribe({
      next: (response) => {
        location.reload()
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
