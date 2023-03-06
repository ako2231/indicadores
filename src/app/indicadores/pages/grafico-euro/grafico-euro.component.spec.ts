import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEuroComponent } from './grafico-euro.component';

describe('GraficoEuroComponent', () => {
  let component: GraficoEuroComponent;
  let fixture: ComponentFixture<GraficoEuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoEuroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
