import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  experienceForm:FormGroup;
  submitted:boolean=false

  constructor() { }

  ngOnInit() {
    this.experienceForm = new FormGroup({
      companyName: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),

      location: new FormControl("", [
        Validators.required
      ]),
       startYear: new FormControl("", [
        Validators.required
       ] ),
       endYear: new FormControl("", [
        Validators.required
       ] ),
       designation: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),
      jobDetails: new FormControl("", [
        Validators.required
      ])
  })
  }

  onSubmit(){
    this.submitted=true
    
    
  }

}
