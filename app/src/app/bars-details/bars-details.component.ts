import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { BarsService } from '../bars.service';
import { Bar } from '../model/bars';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkCategory } from '../model/drinkCategory';
import { Drink } from '../model/drinks';
import { Order } from '../model/order';
import { DrinkOrder } from '../model/drinkOrder';
import { OrderService } from '../order.service';
import { MatSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-bars-details',
  templateUrl: './bars-details.component.html',
  styleUrls: ['./bars-details.component.css']
})
export class BarsDetailsComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  bar: Bar;
  drinksToCategoryMap;
  drinkCategories = DrinkCategory;
  categories = Object.keys(DrinkCategory).filter(key => isNaN(Number(DrinkCategory[key])));
  currentOrder: Order;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private barService: BarsService,
    private orderService: OrderService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.bar = this.barService.getBarById(id);
    this.currentOrder = new Order();
    this.currentOrder.bar = this.bar.name;
    this.initOrdersInCategories();
  }

  private initOrdersInCategories() {
    this.drinksToCategoryMap = this.bar.drinks.reduce(function (groups, drink) {
      const val = drink['category'];
      groups[val] = groups[val] || [];
      groups[val].push({ drink: drink, order: new DrinkOrder(drink) });
      return groups;
    }, {});
  }

  goBack(): void {
    this.router.navigate(['/bars']);
  }

  isEmptyCategory(category: DrinkCategory) {
    if (this.drinksToCategoryMap[category]) {
      return this.drinksToCategoryMap[category].length < 1;
    }
    return true;
  }

  getDrinksOfCategory(category: DrinkCategory) {
    return this.drinksToCategoryMap[category];
  }

  submitOrder() {
    this.blockUI.start('Bestellen...'); // Start blocking
    this.currentOrder.drinkOrders = [].concat.apply([], Object.keys(this.drinksToCategoryMap).map(key => this.drinksToCategoryMap[key]))
      .filter((v) => v.order.amount > 0)
      .map((v) => v.order);

    if (this.currentOrder.drinkOrders.length > 0) {
      this.orderService.submitOrder(this.currentOrder).subscribe((result) => {
        this.blockUI.stop();
        if (!result) {
          this.snackBar.open('Bestellung konnte nicht ausgeführt werden. Versuche es später nochmals.', 'OK', {
            duration: 5000
          });
          return;
        }

        const orders = this.currentOrder.drinkOrders.map((o) => `${o.amount} x ${o.drink}`).join('\n');

        this.snackBar.open(`Bestellung erfolgreich:\n${orders}`, 'OK', {
          duration: 5000,
          extraClasses: ['multi-line-snackbar']
        });
        this.initOrdersInCategories();
      });
    } else {
      this.blockUI.stop();
      this.snackBar.open('Du hast kein Getränk ausgewählt.', 'OK', {
        duration: 5000
      });
    }
  }
}
