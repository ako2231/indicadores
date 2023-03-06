import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUfComponent } from './detalle-uf.component';

describe('DetalleUfComponent', () => {
  let component: DetalleUfComponent;
  let fixture: ComponentFixture<DetalleUfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
