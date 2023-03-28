import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../Models/Course-List.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseAPIURL: string = 'https://localhost:7101';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Courses[]>{
    
    return this.http.get<Courses[]>(this.baseAPIURL + '/api/Courses')

  }

  addCourse(addCourseRequest: Courses): Observable<Courses>{
    addCourseRequest.id= '00000000-0000-0000-0000-000000000000';
    return this.http.post<Courses>(this.baseAPIURL + '/api/Courses',addCourseRequest);
  }

  deleteModule(id: string): Observable<Courses>{
    return this.http.delete<Courses>(this.baseAPIURL + '/api/Courses/'+id)
  } 

  UpdateCourses(id: string, updateCourseRequest: Courses): Observable<Courses>{
    return this.http.put<Courses>(this.baseAPIURL + '/api/Courses/'+id, updateCourseRequest)
  }

  getModule(id: string): Observable<Courses>{
    return this.http.get<Courses>(this.baseAPIURL + '/api/Courses/'+id)
  }
}
