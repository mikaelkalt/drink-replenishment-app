import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarsOverviewComponent } from './bars-overview/bars-overview.component';
import { BarsService } from './bars.service';
import { BarsDetailsComponent } from './bars-details/bars-details.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    BarsOverviewComponent,
    BarsDetailsComponent
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
    AppRoutingModule
  ],
  providers: [BarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
