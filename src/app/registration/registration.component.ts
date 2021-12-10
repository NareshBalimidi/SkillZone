import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    //this.addEducationalDetails();
  }

  registrationForm = this.formBuilder.group({
    salutation: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    lastName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    maritalStatus: new FormControl(''),
    dateOfBirth: new FormControl('', [Validators.required]),
    country: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    zipcode: new FormControl(''),
    mobileNumber: new FormControl('', [Validators.required]),
    officeNumber: new FormControl(''),
    educationalDetails: this.formBuilder.array([]),
  })

  educationalDetails(): FormArray {
    return this.registrationForm.get("educationalDetails") as FormArray
  }

  newEducationalDetails(): FormGroup {
    return this.formBuilder.group({
      degree: new FormControl(''),
      specialization: new FormControl(''),
      yearOfGraduation: new FormControl(''),
      percentage: new FormControl(''),
      college: new FormControl(''),
      university: new FormControl(''),
    })
  }

  addEducationalDetails() {  
    this.educationalDetails().push(this.newEducationalDetails());  
  }  
     
  removeEducationalDetails(i:number) {  
    this.educationalDetails().removeAt(i);  
  } 
}
