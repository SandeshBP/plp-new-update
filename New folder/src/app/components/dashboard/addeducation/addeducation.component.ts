import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css']
})
export class AddeducationComponent implements OnInit {
educationForm:FormGroup
submitted:boolean=false
  constructor() { }

  ngOnInit() {
    this.educationForm = new FormGroup({
      institutionName: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),

      degree: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),
      fieldOfStudy: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),

      location: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
       ] ),
       startYear: new FormControl("", [
        Validators.required,
        Validators.minLength(2000),
        Validators.maxLength(2020)
       ] ),
       endYear: new FormControl("", [
        Validators.required
       ] )
       
     

  })
  }
  onSubmit(){
    this.submitted=true;
  }

}
