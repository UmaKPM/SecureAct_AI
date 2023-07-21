import {Component, OnInit} from '@angular/core';

export interface PeriodicElement1 {
  sno: number;
  id: string;
  desc:string;
  category:string
}

const ELEMENT_DATA: PeriodicElement1[] = [
{ sno:1, id:'Contribution',desc:"Increase your IRA contribution % ", category:"Y"},
{ sno:2, id:'Investment',desc:" Allocate into the traditional account for the guaranteed return of investmen", category:"N"},
{ sno:3, id:'Loan',desc:" Check the feasibility of taking the amount from RMD", category:"Y"},
{ sno:4, id:'Withdrawals',desc:" Provide the alternate option based on their account balance", category:"N"},
{ sno:5, id:'Diversifications',desc:" To Protect your family , You should have Life Insurance Policy", category:"Y"},
];

@Component({
  selector: 'app-recomm-cata-table',
  templateUrl: './recomm-cata-table.component.html',
  styleUrls: ['./recomm-cata-table.component.css']
})
export class RecommCataTableComponent implements OnInit {

  displayedColumns: string[] = ['sno', 'id', 'desc','category'];
  dataSource = ELEMENT_DATA;
  
  constructor() { } 

  ngOnInit(): void {
  }
}
