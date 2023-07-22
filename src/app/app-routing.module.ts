import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaBoletosComponent } from './venta-boletos/venta-boletos.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-home', pathMatch: 'full' },
  { path: 'venta-boletos', component: VentaBoletosComponent },
  { path: '**', redirectTo: 'list-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
