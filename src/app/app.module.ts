import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
