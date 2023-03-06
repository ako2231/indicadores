import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-grafico-dolar',
  templateUrl: './grafico-dolar.component.html',
  styleUrls: ['./grafico-dolar.component.css']
})
export class GraficoDolarComponent {


  public listaResultados:any[]= [];
  public listaUltimoResultado:any[]= [];
  data = Object.values(this.listaResultados);

  constructor(private indicadorService: IndicadoresService){}

  ngOnInit(): void {
    this.cargarData();
  }

 public cargarData(){
  this.indicadorService.getIndicador(`https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/periodo/2023/02/dias_i/02/2023/03/dias_f/02?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json`)
  .subscribe((respuesta:any) => {
    this.listaResultados = respuesta.Dolares;
    this.listaUltimoResultado = respuesta.Dolares;
    this.listaUltimoResultado = this.listaUltimoResultado.slice(-1);
    console.log(this.listaUltimoResultado);
  })
}



}













  