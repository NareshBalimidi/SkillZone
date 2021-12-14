import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MastersPrograms } from 'src/app/models/model';

@Injectable({
  providedIn: 'root'
})
export class MastersProgramService {

  constructor(private http: HttpClient) { }

  getMastersPrograms() {
    return this.http.get<any>('assets/data/masters-programs.json')
    .toPromise()
    .then(res => <MastersPrograms[]>res.data)
    .then(data => { return data; });
}
}
