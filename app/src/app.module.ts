import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VCLIconModule } from 'ng-vcl';
import { appRoutingProviders, routing } from './app.routes';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  providers: [
    appRoutingProviders,
  ],
  imports: [
    BrowserModule,
    routing,
    VCLIconModule
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
