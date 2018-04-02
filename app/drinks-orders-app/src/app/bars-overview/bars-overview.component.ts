import { Component, OnInit } from '@angular/core';
import { BarsService } from '../bars.service';
import { Bar } from '../model/bars';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bars-overview',
  templateUrl: './bars-overview.component.html',
  styleUrls: ['./bars-overview.component.css']
})
export class BarsOverviewComponent implements OnInit {

  title = 'Baranoia 2018';
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
