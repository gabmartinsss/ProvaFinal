import { CadastrarFilmeComponent } from './components/views/filme/cadastrar-filme/cadastrar-filme.component';
import { ListarFilmeComponent } from './components/views/filme/listar-filme/listar-filme.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/views/home/index/index.component';

const routes: Routes = [
    {
        //aqui é a url/caminho
        path: "",
        component: IndexComponent, //esse é o componente que aparece
    },
    {
        path: "filme/listar",
        component: ListarFilmeComponent,
    },
    {
        path: "filme/cadastrar",
        component: CadastrarFilmeComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
