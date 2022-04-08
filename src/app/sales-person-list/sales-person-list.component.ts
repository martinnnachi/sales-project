import {Component, OnInit} from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of sales person objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Martin", "Nnachi", "marty@nnach.com", 1160000),
    new SalesPerson("Gloria", "Nnachi", "glo.amiya@nnach.com", 870000),
    new SalesPerson("Ken", "Cole", "ken.c@hotmail.com", 650000),
    new SalesPerson("Edi", "Gbormittah", "edi.g@me.com", 620000)
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
