import { Drink } from './drinks';

export class DrinkOrder {
    drink: string;
    amount: number;
    interval: number;

    constructor(drink: Drink) {
        this.drink = drink.name;
        this.interval = drink.interval;
        this.amount = 0;
    }
}
