import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosService } from 'src/providers/produtos.service';
import { SupermarketsService } from 'src/providers/supermarket.service';
import { ValueSupermarketsService } from 'src/providers/value-supermarket.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProdutosService,
    SupermarketsService,
    ValueSupermarketsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
