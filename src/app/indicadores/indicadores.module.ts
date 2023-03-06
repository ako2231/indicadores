import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { GraficoComponent } from './pages/grafico/grafico.component';
import { DetalleDolarComponent } from './pages/detalle-dolar/detalle-dolar.component';
import { DetalleEuroComponent } from './pages/detalle-euro/detalle-euro.component';
import { DetalleIpcComponent } from './pages/detalle-ipc/detalle-ipc.component';
import { DetalleUfComponent } from './pages/detalle-uf/detalle-uf.component';
import { DetalleUtmComponent } from './pages/detalle-utm/detalle-utm.component';
import { GraficoDolarComponent } from './pages/grafico-dolar/grafico-dolar.component';
import { GraficoEuroComponent } from './pages/grafico-euro/grafico-euro.component';
import { GraficoIpcComponent } from './pages/grafico-ipc/grafico-ipc.component';
import { GraficoUfComponent } from './pages/grafico-uf/grafico-uf.component';
import { GraficoUtmComponent } from './pages/grafico-utm/grafico-utm.component';



@NgModule({
  declarations: [
    IndicadoresComponent,
    GraficoComponent,
    DetalleDolarComponent,
    DetalleEuroComponent,
    DetalleIpcComponent,
    DetalleUfComponent,
    DetalleUtmComponent,
    GraficoDolarComponent,
    GraficoEuroComponent,
    GraficoIpcComponent,
    GraficoUfComponent,
    GraficoUtmComponent
  ],
  exports: [
    IndicadoresComponent,
    GraficoComponent,
    DetalleDolarComponent,
    DetalleEuroComponent,
    DetalleIpcComponent,
    DetalleUfComponent,
    DetalleUtmComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndicadoresModule { }
