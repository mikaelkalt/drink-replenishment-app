import { Component, OnInit } from '@angular/core';
import { OrderResult } from '../model/orderResult';
import { OrderService } from '../order.service';
import { MatSelectionListChange, MatListOption, MatSelectionList } from '@angular/material';
import { timeout } from 'rxjs/operators';
import { Order } from '../model/order';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  title = 'Baranoia Bestellungen';

  openOrders: {};
  doneOrders: {};

  constructor(private orderService: OrderService) {
    this.openOrders = {};
    this.doneOrders = {};
  }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(result => {
      result.filter(o => o.done).forEach(o => this.doneOrders[o.id] = o);
      result.filter(o => !o.done).forEach(o => this.openOrders[o.id] = o);
    });
    this.subscribeToData();
  }

  private subscribeToData(): void {
    setTimeout(() => {
      this.refreshData();
    }, 5000);
  }

  private refreshData(): void {
    this.orderService.getAllOrdersByDone(false).subscribe(result => {
      if (result) {
        result.filter(order => !this.openOrders[order.id]).forEach(order => this.openOrders[order.id] = order);
      }
      this.subscribeToData();
    });
  }

  getOpenOrders() {
    return Object.keys(this.openOrders).map(k => this.openOrders[k]);
  }

  getDoneOrders() {
    return Object.keys(this.doneOrders).map(k => this.doneOrders[k]);
  }

  isToday(d: string): boolean {
    const today = new Date();
    const date = new Date(d);
    return date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();
  }

  delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  async selectionChanged(event: MatSelectionListChange) {
    const order: OrderResult = event.option.value;
    order.done = !order.done;

    await this.delay(5000);

    if (order.done) {
      this.orderService.updateOrder(order).subscribe(result => {
        const orderResult: OrderResult = event.option.value;
        delete this.openOrders[orderResult.id];
        this.doneOrders[orderResult.id] = orderResult;
      }, error => {
        if (error) {
          console.log('error while updating');
          order.done = false;
        }
      });
    }
  }

}
