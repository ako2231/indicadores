import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUtmComponent } from './detalle-utm.component';

describe('DetalleUtmComponent', () => {
  let component: DetalleUtmComponent;
  let fixture: ComponentFixture<DetalleUtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUtmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
