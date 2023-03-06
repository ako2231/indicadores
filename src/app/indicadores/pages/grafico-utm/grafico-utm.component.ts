import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-grafico-utm',
  templateUrl: './grafico-utm.component.html',
  styleUrls: ['./grafico-utm.component.css']
})
export class GraficoUtmComponent {


  public listaResultados:any[]= [];
  public listaUltimoResultado:any[]= [];
  data = Object.values(this.listaResultados);

  constructor(private indicadorService: IndicadoresService){}

  ngOnInit(): void {
    this.cargarData();
  }

 public cargarData(){
  this.indicadorService.getIndicador(`https://api.cmfchile.cl/api-sbifv3/recursos_api/utm/periodo/2022/04/2023/03?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json`)
  .subscribe((respuesta:any) => {
    this.listaResultados = respuesta.UTMs;
    this.listaUltimoResultado = respuesta.UTMs;
    this.listaUltimoResultado = this.listaUltimoResultado.slice(-1);
    console.log(this.listaUltimoResultado);
  })
}



}

