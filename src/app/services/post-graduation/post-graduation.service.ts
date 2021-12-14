import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostGraduationPrograms } from 'src/app/models/model';

@Injectable({
  providedIn: 'root'
})
export class PostGraduationService {

  constructor(private http: HttpClient) { }

  getPostGraduationPrograms() {
    return this.http.get<any>('assets/data/post-graduation-programs.json')
    .toPromise()
    .then(res => <PostGraduationPrograms[]>res.data)
    .then(data => { return data; });
}
}
