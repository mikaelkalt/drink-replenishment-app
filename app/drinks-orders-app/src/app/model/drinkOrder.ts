import { Drink } from './drinks';

export class DrinkOrder {
    drink: string;
    amount: number;

    constructor(drink: Drink) {
        this.drink = drink.name;
        this.amount = 0;
    }
}
