import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-grafico-ipc',
  templateUrl: './grafico-ipc.component.html',
  styleUrls: ['./grafico-ipc.component.css']
})
export class GraficoIpcComponent {


  public listaResultados:any[]= [];
  public listaUltimoResultado:any[]= [];
  data = Object.values(this.listaResultados);

  constructor(private indicadorService: IndicadoresService){}

  ngOnInit(): void {
    this.cargarData();
  }

 public cargarData(){
  this.indicadorService.getIndicador(`https://api.cmfchile.cl/api-sbifv3/recursos_api/ipc/periodo/2022/02/2023/03?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json`)
  .subscribe((respuesta:any) => {
    this.listaResultados = respuesta.IPCs;
    this.listaUltimoResultado = respuesta.IPCs;
    this.listaUltimoResultado = this.listaUltimoResultado.slice(-1);
    console.log(this.listaUltimoResultado);
  })
}



}


