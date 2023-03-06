import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIpcComponent } from './detalle-ipc.component';

describe('DetalleIpcComponent', () => {
  let component: DetalleIpcComponent;
  let fixture: ComponentFixture<DetalleIpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleIpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleIpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
