import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaBoletosComponent } from './venta-boletos/venta-boletos.component';
import { RutasComponent } from './rutas/rutas.component';
import { AsientosComponent } from './asientos/asientos.component';
import { PasajerosComponent } from './pasajeros/pasajeros.component';
import { PagoComponent } from './pago/pago.component';
import { ConfirmaComponent } from './confirma/confirma.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-home', pathMatch: 'full' },
  { path: 'venta-boletos', component: VentaBoletosComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'pasajeros', component: PasajerosComponent },
  { path: 'asientos', component: AsientosComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'confirma', component: ConfirmaComponent },
  { path: '**', redirectTo: 'list-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
