import { Bar } from './bars';
import { DrinkCategory } from './drinkCategory';

export const BARS: Bar[] = [
    { id: 1, name: 'Alphüttli', drinks: [] },
    { id: 2, name: 'Flugzügbar', drinks: [] },
    { id: 3, name: 'Comic Bar', drinks: [
        {
            name: 'Ice Tea (0.5l)',
            category: DrinkCategory.SOFT_DRINKS,
            interval: 1
        },
        {
            name: 'Mineral (0.5l)',
            category: DrinkCategory.SOFT_DRINKS,
            interval: 1
        },
        {
            name: 'Feldschlösschen Original (0.33l)',
            category: DrinkCategory.BEER_WINE,
            interval: 1
        },
        {
            name: 'Vodka White',
            category: DrinkCategory.SPIRITS,
            interval: 1
        },
        {
            name: 'Shotbecher',
            category: DrinkCategory.MATERIAL,
            interval: 2
        }
    ] },
];
