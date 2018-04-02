import { Component, OnInit } from '@angular/core';
import { OrderResult } from '../model/orderResult';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  title = 'Baranoia Bestellungen';

  openOrders: OrderResult[];
  doneOrders: OrderResult[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(result => {
      this.doneOrders = result.filter(o => o.done);
      this.openOrders = result.filter(o => !o.done);
    });
  }
}
