import { Bar } from './bars';
import { DrinkCategory } from './drinkCategory';

export const BARS: Bar[] = [
    {
        id: 1, name: 'Geisterschloss Bar', drinks: [
            { name: 'Mineral (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Coca Cola ( 0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Ice Tea Lemon (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Trojka Energy (0.25l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Citro (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Queen`s Cola (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Bitter Lemon (1.0l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Orangensaft', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'FS Original (0.33l)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'EVE Cardinal Litchi', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Braufrisch (0,33l)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Somersby', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Smirnoff Ice', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Trojka Vodka White', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Vodka Red', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Vodka Green', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Bacardi Superior', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Captain Morgan', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Jägermeister (0,02l)', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Berliner Luft ', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Bündner Haselnuss', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Eiswürfel (Kübel)', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Longdrinkbecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Shotbecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Röhrli kurz', category: DrinkCategory.MATERIAL, interval: 2 }
        ]
    },
    {
        id: 2, name: 'Candyshop Bar', drinks: [
            { name: 'Mineral (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Coca Cola ( 0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Ice Tea Lemon (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Trojka Energy (0.25l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Citro (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Queen`s Cola (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Schweppes Tonic (1.0l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: ' Mineral (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'FS Original (0.33l)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'EVE Cardinal Litchi', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Braufrisch (0,33l)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Somersby', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Smirnoff Ice', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Prosecco Spumante', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Trojka Vodka White', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Vodka Red', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Vodka Green', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Bacardi Superior', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Gin Escape 7', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Aperol', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Jägermeister (0,02l)', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Willi Sauer', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Eiswürfel (Kübel)', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Longdrinkbecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Shotbecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Cüplibecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Röhrli kurz', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Orangen', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Chupa Chups', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Ahoi Brause Pulver ', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Center Shock', category: DrinkCategory.MATERIAL, interval: 2 }
        ]
    },
    {
        id: 3, name: 'Nintendo  Bar', drinks: [
            { name: 'Mineral (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Coca Cola ( 0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Ice Tea Lemon (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Trojka Energy (0.25l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Citro (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Queen`s Cola (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Orangensaft', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Ananassaft', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'FS Original (0.33l)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'EVE Cardinal Litchi', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Braufrisch (0,33l)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Somersby', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Smirnoff Ice', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Trojka Vodka White', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Vodka Red', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Vodka Green', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Bacardi Superior', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Passoa', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Malibu', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Jägermeister (0,02l)', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Jägermeister (0,7l)', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Snow Freak', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Eiswürfel (Kübel)', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Longdrinkbecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Shotbecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Röhrli kurz', category: DrinkCategory.MATERIAL, interval: 2 }
        ]
    },
    {
        id: 4, name: 'Shot Bar', drinks: [
            { name: 'Willi Sauer', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Jägermeister (0,7l)', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Die Süsse Banana', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Snow Freak', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Bündner Haselnuss', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Berliner Luft', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Green Kevin ', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Shotbecher', category: DrinkCategory.MATERIAL, interval: 2 }
        ]
    },
    {
        id: 5, name: '50 shades of grey', drinks: [
            { name: ' Mineral (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Coca Cola ( 0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Ice Tea Lemon (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Trojka Energy (0.25l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Citro (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Queen`s Cola (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'FS Original (0.33l)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'EVE Cardinal Litchi', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Braufrisch (0,33l)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Somersby', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Smirnoff Ice', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Trojka Vodka White', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Vodka Red', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Trojka Vodka Green', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Bacardi Superior', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Ballantine`s Whisky', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Martini', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Baileys', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Tequila Gold', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Bündner Haselnuss', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Eiswürfel (Kübel)', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Longdrinkbecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Shotbecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Röhrli kurz', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Orangen', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Zimt', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Whiskybecher', category: DrinkCategory.MATERIAL, interval: 2 }
        ]
    },
    {
        id: 6, name: 'Biercorner', drinks: [
            { name: ' Mineral (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Coca Cola ( 0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Ice Tea Lemon (0.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Trojka Energy (0.25l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'Citro (1.5l)', category: DrinkCategory.SOFT_DRINKS, interval: 1 },
            { name: 'FS Original (Fass)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'FS Alkoholfrei', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Somersby (Fass)', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Smirnoff Ice', category: DrinkCategory.BEER_WINE, interval: 1 },
            { name: 'Jägermeister (0,02l)', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Berliner Luft', category: DrinkCategory.SPIRITS, interval: 1 },
            { name: 'Bierbecher ', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Shotbecher', category: DrinkCategory.MATERIAL, interval: 2 }
        ]
    },
    {
        id: 7, name: 'Foodcorner', drinks: [
            { name: 'Plastikteller', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Kaffeelöffeli', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Kaffeebecher', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Zucker', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Kaffeekapseln', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Rähmli', category: DrinkCategory.MATERIAL, interval: 2 },
            { name: 'Servietten', category: DrinkCategory.MATERIAL, interval: 2 }
        ]
    }
];
