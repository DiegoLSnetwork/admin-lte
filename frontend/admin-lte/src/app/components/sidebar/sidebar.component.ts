import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user = {
    name: "",
    profile: ""
  }
  token = localStorage.getItem("token");
  constructor(private userData: UserService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userData.getData().subscribe(
      res => {
        console.log(res)
        localStorage.setItem("userData", res.user);
      },
      err => {
        console.log(err);
      }
    )
  }


}
