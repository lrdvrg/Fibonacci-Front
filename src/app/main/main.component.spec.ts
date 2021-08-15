/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('Componente principal.', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, FormsModule
      ],
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('La variable para habilitar el boton de generar debe estar falsa cuando se inicializa el componente', () => {
    expect(component.canSubmit).toBeFalsy(true);
  });

  it('Que exista el metodo llamado generate().', () => {
    const watchGenerate = spyOn(component, 'generate');
    component.generate(2);

    expect(watchGenerate).toHaveBeenCalled();
  });

  it('Que se llame el metodo generate() cuando se presione el boton de generar.', () => {
    const watchGenerate = spyOn(component, 'generate');
    fixture.detectChanges();
    const button: DebugElement = fixture.debugElement.query(By.css('.btn-primary'));
    fixture.detectChanges();
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(watchGenerate).toHaveBeenCalledTimes(1);
  });

  it('Que se bindee el input con la propiedad del componente.', () => {
    const hostElement = fixture.nativeElement;
    const numberInput: HTMLInputElement = hostElement.querySelector('#number-input');

    fixture.detectChanges();

    numberInput.value = '5';
    numberInput.dispatchEvent(new Event('input'));

    expect(component.number.toString()).toBe('5');
  });

  it('Si la propiedad number es menor de 1 el boton debe de estar deshabilitado.', () => {
    const submitEl = fixture.debugElement;
    fixture.detectChanges();

    component.number = -1;
    fixture.detectChanges();

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeTruthy();

  });

  it('Si la propiedad number es mayor de 0 el boton debe de estar habilitado.', () => {
    const submitEl = fixture.debugElement;
    fixture.detectChanges();

    component.number = 2;
    fixture.detectChanges();

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeFalsy();

  });
});
