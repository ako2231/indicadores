import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoIpcComponent } from './grafico-ipc.component';

describe('GraficoIpcComponent', () => {
  let component: GraficoIpcComponent;
  let fixture: ComponentFixture<GraficoIpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoIpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoIpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
