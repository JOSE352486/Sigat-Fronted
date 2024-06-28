import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './header/header.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ServicioClienteComponent } from './servicio-cliente/servicio-cliente.component';
import { RegistrarReservaComponent } from './registrar-reserva/registrar-reserva.component';

export const routes: Routes = [
  { path: 'inicio', component: MainContentComponent },
  { path: 'nosotros', component: HeaderComponent },
  { path: 'destinos', component: MainContentComponent },
  { path: 'contacto', component: HeaderComponent },
  { path: 'ingresar', component: HeaderComponent },
  { path: 'registrar-cliente', component: RegistrarClienteComponent },
  { path: 'servicio-cliente', component: ServicioClienteComponent },
  { path: 'registrar-reserva', component: RegistrarReservaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
