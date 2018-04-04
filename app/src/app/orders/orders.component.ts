import { Component, OnInit } from '@angular/core';
import { OrderResult } from '../model/orderResult';
import { OrderService } from '../order.service';
import { MatSelectionListChange, MatListOption, MatSelectionList } from '@angular/material';
import { timeout } from 'rxjs/operators';

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

  isToday(d: string): boolean {
    const today = new Date();
    const date = new Date(d);
    return date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();
  }

  selectionChanged(event: MatSelectionListChange) {
    event.option.value.done = true;
    setTimeout(() => {
      const indexOf: number = this.openOrders.indexOf(event.option.value);

      this.openOrders.splice(indexOf, 1);
      this.doneOrders.push(event.option.value);
    }, 1000);

  }

}
