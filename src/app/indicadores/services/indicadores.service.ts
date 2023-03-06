import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class IndicadoresService{

/*     private apiKey: string = '1a1a664aaa03b3e2966251da1f3068f677ddea27'; */

/*     public resultados: any = []; */

    constructor( private http: HttpClient ){}

/*     buscarIndicador(){
        this.http.get(`https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/periodo/2023/02/dias_i/02/2023/03/dias_f/02?apikey=1a1a664aaa03b3e2966251da1f3068f677ddea27&formato=json`)
        .subscribe( (resp:any) => {
            console.log(resp.data);
            this.resultados = resp.data;
        })
    } */

    getIndicador( url:string ){
        return this.http.get(url);
    }

}
