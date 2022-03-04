import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  user = {
    email: "",
    password: ""
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  signIn() {
    this.auth.signIn(this.user).subscribe(
      res => {
        this.router.navigate(["/"]);
      },
      err => { console.log(err) })
  }
}
