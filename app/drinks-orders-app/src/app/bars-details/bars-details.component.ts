import { Component, OnInit } from '@angular/core';
import { BarsService } from '../bars.service';
import { Bar } from '../model/bars';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkCategory } from '../model/drinkCategory';
import { Drink } from '../model/drinks';
import { Order } from '../model/order';
import { DrinkOrder } from '../model/drinkOrder';
@Component({
  selector: 'app-bars-details',
  templateUrl: './bars-details.component.html',
  styleUrls: ['./bars-details.component.css']
})
export class BarsDetailsComponent implements OnInit {

  bar: Bar;
  drinksToCategoryMap;
  drinkCategories = DrinkCategory;
  currentOrder: Order;

  constructor(private router: Router, private route: ActivatedRoute, private barService: BarsService) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.bar = this.barService.getBarById(id);
    this.currentOrder = new Order();
    this.drinksToCategoryMap = this.bar.drinks.reduce(function (groups, drink) {
      const val = drink['category'];
      groups[val] = groups[val] || [];
      groups[val].push(new DrinkOrder(drink));
      return groups;
    }, {});
  }

  goBack(): void {
    this.router.navigate(['/bars']);
  }

  getDrinksOfCategory(category: DrinkCategory) {
    return this.drinksToCategoryMap[category];
  }
}
