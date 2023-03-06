import { Component } from '@angular/core';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent {

/*   get resultados(){
    return this.indicadorService.resultados;
  } */

  constructor(private indicadorService: IndicadoresService){}


}
