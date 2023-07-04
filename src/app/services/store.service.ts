import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../store/IAppStore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<any>) { }

  // Funcion para obtener los datos del store de un state concreto
  getState(state: string): any {
    return this.store.select(state);
  }

  // Método para despachar acciones y que el reducer oportuno actualice el estado
  updateState(obj: any) {
    this.store.dispatch({
      type: obj.type,
      payload: obj.payload
    });
  }
}
