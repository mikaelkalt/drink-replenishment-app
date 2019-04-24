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
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlockUIModule } from 'ng-block-ui';
import { CookieModule, CookieService, CookieBackendService } from 'ngx-cookie';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarsDetailsComponent } from './bars-details/bars-details.component';
import { BarsOverviewComponent } from './bars-overview/bars-overview.component';
import { OrdersComponent } from './orders/orders.component';
import { BarsService } from './bars.service';
import { OrderService } from './orders.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BarsDetailsComponent,
    BarsOverviewComponent,
    OrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    HttpClientModule,
    BlockUIModule.forRoot()
  ],
  providers: [BarsService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
