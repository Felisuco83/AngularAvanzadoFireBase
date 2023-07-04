import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ACTION_CAMBIO_MENSAJE, ACTION_CAMBIO_VALOR } from '../../store/actions/appActions'

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.sass']
})
export class UnoComponent implements OnInit {
  nuevoMensaje = '';
  valor = true;
  constructor(private storeService: StoreService) { }
  ngOnInit(): void {
    this.storeService.getState('messageState').subscribe((state: any) => {
      this.nuevoMensaje = state.mensaje;
      this.valor = state.valor;
    });
  }

  // Método encargado de actualizar el mensaje del store
  cambiarMensaje() {
    console.log('Vamos a cambiar el mensaje');
    this.storeService.updateState({
      type: ACTION_CAMBIO_MENSAJE,
      payload: this.nuevoMensaje
    })
  }
  cambiarValor() {
    console.log('Vamos a cambiar el valor');
    this.storeService.updateState({
      type: ACTION_CAMBIO_VALOR,
      payload: !this.valor
    })
  }
}
