import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-to-do-list',
  templateUrl: './dashboard-to-do-list.component.html',
  styleUrls: ['./dashboard-to-do-list.component.css']
})
export class DashboardToDoListComponent implements OnInit {

  status!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
