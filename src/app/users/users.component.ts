import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Response, User } from '../models/model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = new User();
  users: User[] = [];

  constructor(private primengConfig: PrimeNGConfig, private userService: UserService) {
  }

  displayModal!: boolean;

  showModalDialog() {
    this.displayModal = true;
  }

  userForm = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl(''),
    gender : new FormControl(''),
    status : new FormControl(''),
  })

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    console.log(this.users);
    this.userService.getAllUsers().subscribe(
      (res): void => {
        var result = new Response(res);
        result.data.forEach((item) => {
          this.users.push(new User(item))
        })
        console.log(this.users);
      }
    )
  }

  onSubmit(){
    this.userService.addUser();
    console.log(this.userForm);
    this.userForm.reset();
    this.displayModal=false;
  }

}
