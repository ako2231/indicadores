import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDolarComponent } from './detalle-dolar.component';

describe('DetalleDolarComponent', () => {
  let component: DetalleDolarComponent;
  let fixture: ComponentFixture<DetalleDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
