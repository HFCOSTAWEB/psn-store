import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Incluir o AppComponent 
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component'; // Incluir o AppComponent 
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [ AppComponent, HomeComponent ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserModule
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
