import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarsOverviewComponent } from './bars-overview/bars-overview.component';
import { BarsService } from './bars.service';
import { BarsDetailsComponent } from './bars-details/bars-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { OrderService } from './order.service';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    AppComponent,
    BarsOverviewComponent,
    BarsDetailsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BarsService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
