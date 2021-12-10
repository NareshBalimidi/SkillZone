import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  
  //private baseURL = "../assets/data/users.json";

  getAllUsers(){
      return this.httpClient.get<User>("https://gorest.co.in/public/v1/users");
  }

  addUser(){
    return this.httpClient.post("https://gorest.co.in/public/v1/posts",{});
  }
}
