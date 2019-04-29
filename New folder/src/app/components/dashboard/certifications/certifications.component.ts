import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certificationForm: FormGroup;
  submitted: boolean = false;
  constructor() { }

  ngOnInit() {
    this.certificationForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),

      institutionName: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),
      description: new FormControl("", [
        Validators.required
      ]),

      issueDate: new FormControl("", [
        Validators.required
       ] )
     

  })
  }
  onSubmit (){
this.submitted=true;
  }
}
