import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  msg=""
  dataCollect(val:any){
    this.msg=val.value;
  }
  userName="have a nice day!!"
}
