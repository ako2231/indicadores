import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoUtmComponent } from './grafico-utm.component';

describe('GraficoUtmComponent', () => {
  let component: GraficoUtmComponent;
  let fixture: ComponentFixture<GraficoUtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoUtmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoUtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
