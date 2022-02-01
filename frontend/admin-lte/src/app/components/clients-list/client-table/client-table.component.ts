import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserDataExample{
  id:number;
  name:string;
  status:boolean;
  address:string;
  email:string;
  phone:number;
}

const USER:UserDataExample[]=[{
  id:123445,
  name:"Jhon",
  status:false,
  address:"st 2 # 32-32",
  email:"example1@example.com",
  phone:2342311
}];
@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {
  
  displayedColumns: string[]=["id","name","status","address","email","phone"];
  dataSource!:MatTableDataSource<UserDataExample>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor() { 
    this.dataSource= new MatTableDataSource(USER);
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
  }

}
