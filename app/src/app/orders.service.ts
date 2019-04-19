import { Injectable } from '@angular/core';
import { Order } from './model/order';
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { OrderResult } from './model/orderResult';
import { Observable, of } from 'rxjs';

@Injectable()
export class OrderService {

  private ordersUrl = `${environment.apiUrl}orders`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  constructor(private httpClient: HttpClient) { }

  public getAllOrders(): Observable<OrderResult[]> {
    return this.httpClient.get<OrderResult>(this.ordersUrl).pipe(
      catchError(this.handleError<any>('getAllOrders'))
    );
  }

  public getAllOrdersByDone(done: boolean): Observable<OrderResult[]> {
    return this.httpClient.get<OrderResult>(`${this.ordersUrl}?done=${done}`).pipe(
      catchError(this.handleError<any>('getAllOrders'))
    );
  }

  public submitOrder(order: Order): Observable<any> {
    return this.httpClient.post<Order>(this.ordersUrl, order, this.httpOptions).pipe(
      catchError(this.handleError<any>('submitOrder'))
    );
  }

  public updateOrder(order: OrderResult): Observable<any> {
    return this.httpClient.put<OrderResult>(`${this.ordersUrl}/${order.id}`, order, this.httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
