import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedUserId = localStorage.getItem("loggedUserId");

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.loggedUserId) {
    } else {
      this.router.navigate(["userlogin"]);
    }
  }

  //  post ...........................................................................
  


}
