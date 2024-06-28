import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { RegistrarClienteComponent } from './registrar-cliente.component';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

describe('RegistrarClienteComponent', () => {
  let component: RegistrarClienteComponent;
  let fixture: ComponentFixture<RegistrarClienteComponent>;
  let clienteService: ClienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarClienteComponent ],
      imports: [ FormsModule, HttpClientTestingModule ],
      providers: [ ClienteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register a new client', () => {
    const cliente: Cliente = {
      PK_Cliente_ID: 1,
      Cliente_Nombre: 'Test',
      Cliente_ApePaterno: 'TestPaterno',
      Cliente_ApeMaterno: 'TestMaterno',
      Cliente_Telefono: 123456789,
      Cliente_Correo: 'test@example.com'
    };

    spyOn(clienteService, 'registrarCliente').and.returnValue(of(cliente));
    spyOn(window, 'alert');

    component.cliente = cliente;
    component.editMode = false;
    component.registrarCliente();

    expect(clienteService.registrarCliente).toHaveBeenCalledWith(cliente);
    expect(window.alert).toHaveBeenCalledWith('Se registró con éxito');
  });

  it('should handle error when registering a client', () => {
    spyOn(clienteService, 'registrarCliente').and.returnValue(throwError({ message: 'Error' }));
    spyOn(console, 'error');
    spyOn(window, 'alert');

    component.registrarCliente();

    expect(console.error).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Hubo un error al registrar el cliente');
  });

  it('should clear the form after registering a client', () => {
    const cliente: Cliente = {
      PK_Cliente_ID: 1,
      Cliente_Nombre: 'Test',
      Cliente_ApePaterno: 'TestPaterno',
      Cliente_ApeMaterno: 'TestMaterno',
      Cliente_Telefono: 123456789,
      Cliente_Correo: 'test@example.com'
    };

    spyOn(clienteService, 'registrarCliente').and.returnValue(of(cliente));
    spyOn(window, 'alert');

    component.cliente = cliente;
    component.editMode = false;
    component.registrarCliente();

    expect(component.cliente).toEqual(new Cliente());
  });
});
