import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VCLModule } from 'ng-vcl';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  providers: [
    appRoutingProviders,
  ],
  imports: [
    BrowserModule,
    routing,
    VCLModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }