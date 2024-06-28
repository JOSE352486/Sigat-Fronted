import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


// Define tus rutas aquí
const appRoutes: Routes = [
  { path: 'registrar-cliente', component: RegistrarClienteComponent },
  { path: '', redirectTo: '/registrar-cliente', pathMatch: 'full' } // Redireccionar a una ruta válida
];

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
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Configura el RouterModule con tus rutas
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Añade esto si estás utilizando Web Components personalizados
})
export class AppModule { }
