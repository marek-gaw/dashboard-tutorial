import { Component, OnInit } from '@angular/core';
import { Order} from "../../shared/order";

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    { id: 1, 
      customer: {
        id: 1, 
        name: "Joe", 
        state:"CO", 
        email:"joe@testing.com"
      },
      total: 230,
      placed: new Date(2023,2,1),
      fulfilled: new Date(2023,2,5)
    },
    { id: 2, 
      customer: {
        id: 1, 
        name: "Matt", 
        state:"TX", 
        email:"Matt@testing.com"
      },
      total: 453,
      placed: new Date(2023,3,1),
      fulfilled: new Date(2023,3,5)
    },
    ];

  ngOnInit(): void {}

}
