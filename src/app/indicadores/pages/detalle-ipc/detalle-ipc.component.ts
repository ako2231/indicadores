import { Component } from '@angular/core';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-detalle-ipc',
  templateUrl: './detalle-ipc.component.html',
  styleUrls: ['./detalle-ipc.component.css']
})
export class DetalleIpcComponent {

/*   get resultados(){
    return this.indicadorService.resultados;
  } */

  public listaResultados:any[]= [];
  data = Object.values(this.listaResultados);


  constructor(private indicadorService: IndicadoresService){}

  ngOnInit(): void {
    this.cargarData();
  }


  public cargarData(){
    this.indicadorService.getIndicador(`https://api.cmfchile.cl/api-sbifv3/recursos_api/ipc/2023?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json`)
    .subscribe((respuesta:any) => {
      this.listaResultados = respuesta.IPCs;
      /* console.dir(respuesta); */
      console.log(respuesta.IPCs);
    })
  }



/*   https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/periodo/2023/02/dias_i/02/2023/03/dias_f/02?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json
  https://api.cmfchile.cl/api-sbifv3/recursos_api/euro/periodo/2023/02/dias_i/02/2023/03/dias_f/02?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json
  https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/periodo/2023/02/dias_i/02/2023/03/dias_f/02?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json
  https://api.cmfchile.cl/api-sbifv3/recursos_api/ipc/2023?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json
  https://api.cmfchile.cl/api-sbifv3/recursos_api/ipc/periodo/2022/02/2023/03?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json
  https://api.cmfchile.cl/api-sbifv3/recursos_api/utm/2023?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json
  https://api.cmfchile.cl/api-sbifv3/recursos_api/utm/periodo/2022/04/2023/03?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json */
}

