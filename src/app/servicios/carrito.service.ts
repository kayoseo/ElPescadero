import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private addItemToBasketSource = new Subject<string>();
  addItemToBasket$ = this.addItemToBasketSource.asObservable();

  addItemToBasket(item: any) {
    this.addItemToBasketSource.next(item);
  }

  constructor() { }
}
