import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistroComponent } from  "./componentes/registro/registro.component";


const appRoutes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegistroComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);