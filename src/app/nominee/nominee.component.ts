import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.css']
})
export class NomineeComponent implements OnInit {

  constructor() { }
nomineeFlag ;
  ngOnInit() {
  	this.nomineeFlag = 'false';
  	if(localStorage.getItem('addnominee')){
this.nomineeFlag = localStorage.getItem('addnominee');
  	}
console.log(this.nomineeFlag);
  }

}
