import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { RutaComponent } from "./pages/ruta/ruta.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { SedeComponent } from "./pages/sede/sede.component";

const routes: Routes  = [
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'sede/:id',
        component: SedeComponent
    },
    {
        path: 'ruta/:id',
        component: RutaComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}