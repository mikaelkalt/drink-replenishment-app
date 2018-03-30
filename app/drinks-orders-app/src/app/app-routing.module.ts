import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsOverviewComponent } from './bars-overview/bars-overview.component';
import { BarsDetailsComponent } from './bars-details/bars-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/bars', pathMatch: 'full' },
  { path: 'bars', component: BarsOverviewComponent },
  { path: 'bars/:id', component: BarsDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
