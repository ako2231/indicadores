import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEuroComponent } from './detalle-euro.component';

describe('DetalleEuroComponent', () => {
  let component: DetalleEuroComponent;
  let fixture: ComponentFixture<DetalleEuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEuroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
