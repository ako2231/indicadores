import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoUfComponent } from './grafico-uf.component';

describe('GraficoUfComponent', () => {
  let component: GraficoUfComponent;
  let fixture: ComponentFixture<GraficoUfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoUfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
