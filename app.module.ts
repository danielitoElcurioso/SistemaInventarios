// app.module.ts

import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistroComponent } from "./componentes/registro/registro.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistroComponent],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
