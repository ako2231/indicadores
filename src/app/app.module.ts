import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { IndicadoresModule } from './indicadores/indicadores.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    AppRoutingModule,
    IndicadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
