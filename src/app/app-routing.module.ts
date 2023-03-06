import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresComponent } from './indicadores/pages/indicadores/indicadores.component';
import { DetalleDolarComponent } from './indicadores/pages/detalle-dolar/detalle-dolar.component';
import { DetalleEuroComponent } from './indicadores/pages/detalle-euro/detalle-euro.component';
import { DetalleIpcComponent } from './indicadores/pages/detalle-ipc/detalle-ipc.component';
import { DetalleUfComponent } from './indicadores/pages/detalle-uf/detalle-uf.component';
import { DetalleUtmComponent } from './indicadores/pages/detalle-utm/detalle-utm.component';
import { GraficoDolarComponent } from './indicadores/pages/grafico-dolar/grafico-dolar.component';
import { GraficoEuroComponent } from './indicadores/pages/grafico-euro/grafico-euro.component';
import { GraficoIpcComponent } from './indicadores/pages/grafico-ipc/grafico-ipc.component';
import { GraficoUfComponent } from './indicadores/pages/grafico-uf/grafico-uf.component';
import { GraficoUtmComponent } from './indicadores/pages/grafico-utm/grafico-utm.component';

const routes: Routes = [
    {
        path: '',
        component: IndicadoresComponent,
        pathMatch: 'full'
    },
    {
        path: 'detalle-dolar',
        component: DetalleDolarComponent
    },
    {
        path: 'detalle-euro',
        component: DetalleEuroComponent
    },
    {
        path: 'detalle-ipc',
        component: DetalleIpcComponent
    },
    {
        path: 'detalle-uf',
        component: DetalleUfComponent
    },
    {
        path: 'detalle-utm',
        component: DetalleUtmComponent
    },
    {
        path: 'grafico-dolar',
        component: GraficoDolarComponent
    },
    {
        path: 'grafico-euro',
        component: GraficoEuroComponent
    },
    {
        path: 'grafico-ipc',
        component: GraficoIpcComponent
    },
    {
        path: 'grafico-uf',
        component: GraficoUfComponent
    },
    {
        path: 'grafico-utm',
        component: GraficoUtmComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}