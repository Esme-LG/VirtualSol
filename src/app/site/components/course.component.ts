import { Component, OnInit} from '@angular/core';

import { Course } from './course.class';
import { CourseService } from './course.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  providers: [CourseService]
})

export class CourseComponent implements OnInit{
  errorMessage: string;
  course: Course;
  loaded: boolean;

  constructor(
    private courseService: CourseService
  ){ this.loaded = false; }

  ngOnInit(){ this.getCourse(); }

  getCourse(){
    this.courseService.getCourse().subscribe(
      course => this.course = course,
      error => this.errorMessage = <any>error);
  }
}
