import { Component, OnInit } from '@angular/core';
import { Bar } from '../model/bars';
import { Router } from '@angular/router';
import { BarsService } from '../bars.service';

@Component({
  selector: 'app-bars-overview',
  templateUrl: './bars-overview.component.html',
  styleUrls: ['./bars-overview.component.scss']
})
export class BarsOverviewComponent implements OnInit {

  title = 'Baranoia 2019';
  bars: Bar[];

  constructor(private router: Router, private barService: BarsService) {
  }

  ngOnInit() {
    this.bars = this.barService.getBars();
  }

  showBar(bar: Bar) {
    this.router.navigate(['/bars', bar.id]);
  }
}
