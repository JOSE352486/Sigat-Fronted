import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
=======
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './header/header.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ServicioClienteComponent } from './servicio-cliente/servicio-cliente.component';
import { RegistrarReservaComponent } from './registrar-reserva/registrar-reserva.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';

<<<<<<< HEAD

// Define tus rutas aquí
const appRoutes: Routes = [
  { path: 'registrar-cliente', component: RegistrarClienteComponent },
  { path: '', redirectTo: '/registrar-cliente', pathMatch: 'full' } // Redireccionar a una ruta válida
];

=======
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    HeaderComponent,
    FooterComponent,
    RegistrarClienteComponent,
    ServicioClienteComponent,
    RegistrarReservaComponent,
    DestinationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Configura el RouterModule con tus rutas
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Añade esto si estás utilizando Web Components personalizados
=======
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> 7128e14252fd1f1e6261ffd27a1947a6445d6753
})
export class AppModule { }
