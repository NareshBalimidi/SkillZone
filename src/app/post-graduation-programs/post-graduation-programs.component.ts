import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostGraduationPrograms } from '../models/postGraduationPrograms';

@Component({
  selector: 'app-post-graduation-programs',
  templateUrl: './post-graduation-programs.component.html',
  styleUrls: ['./post-graduation-programs.component.css']
})
export class PostGraduationProgramsComponent implements OnInit {

  postGraduationPrograms: PostGraduationPrograms[] = [
  { name: 'Cloud Computing', typeOfProgram: 'Post Graduation Program', duration: '12 Months' },
  { name: 'Data Science', typeOfProgram: 'Post Graduation Program', duration: '11 Months'},
  { name: 'Business Analysis', typeOfProgram: 'Post Graduation Program', duration: '24 Months'}]

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
