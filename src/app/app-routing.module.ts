import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  UrlSerializer,
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";

// ogni volta che aggiungo un oggetto in questo array vuol dire che sto impostando una nuova rotta
// lo scopo è impostare un URL che riferisca ad un determinato componente
// angular renderizza quello che gli indichiamo implementando una rotta tramite router outlet directive
const routes: Routes = [
  // un oggetto rotta ha diverse proprietà
  {
    // targeting "http://localhost:4200/login"
    path: "login",
    // indichiamo cosa vogliamo mostrare
    component: LoginComponent,
  },
  {
    // targeting "http://localhost:4200/about"
    path: "about",
    // indichiamo cosa vogliamo mostrare
    component: AboutComponent,
  },
];

@NgModule({
  imports: [
    // per settare le rotte devo utilizzare il metodo .forRoot() del RouterModule
    // gli passiamo l'array routes
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
