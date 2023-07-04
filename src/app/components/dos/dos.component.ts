import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.sass']
})
export class DosComponent implements OnInit, OnDestroy {

  mensaje = "Mensaje por defecto";
  valor = false;
  storeSuscription: Subscription = new Subscription();

  constructor(private storeService: StoreService) { }


  ngOnInit() {
    this.storeSuscription = this.storeService.getState('messageState').subscribe((state: any) => {
      this.mensaje = state.mensaje;
      this.valor = state.valor;
    });
  }

  // Nos aseguramos de desuscribirnos del store cuando el componente desaparezca
  ngOnDestroy(): void {
    this.storeSuscription.unsubscribe();
  }

}
