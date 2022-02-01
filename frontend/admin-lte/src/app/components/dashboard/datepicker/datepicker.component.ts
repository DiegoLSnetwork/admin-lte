import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  dateModel!: NgbDateStruct;
  timeModel={hour:0,minute:0};

  constructor(private calendar:NgbCalendar) { 
    this.currentDate();
  }

  ngOnInit(): void {
  }
  currentDate(){
    this.dateModel=this.calendar.getToday();
  }

}
