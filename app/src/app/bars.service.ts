import { Injectable } from '@angular/core';
import { Bar } from './model/bars';
import { BARS } from './model/baranoiaBars';

@Injectable()
export class BarsService {

  private barMap: Map<number, Bar>;

  constructor() {
    this.barMap = new Map(BARS.map((bar): [number, Bar] => [bar.id, bar]));
  }

  getBars(): Bar[] {
    return Array.from(this.barMap.values());
  }

  getBarById(id: number): Bar {
    return this.barMap.get(id);
  }
}
