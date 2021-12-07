import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarFolhaPagamentoComponent } from "./components/views/folha-pagamento/cadastrar-folha-pagamento/cadastrar-folha-pagamento.component";
import { ListarFolhaPagamentoComponent } from "./components/views/folha-pagamento/listar-folha-pagamento/listar-folha-pagamento.component";
import { CadastrarFuncionarioComponent } from "./components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component";
import { ListarFuncionarioComponent } from "./components/views/funcionario/listar-funcionario/listar-funcionario.component";

const routes: Routes = [
    {
        path: "funcionario/listar",
        component: ListarFuncionarioComponent,
    },
    {
        path: "funcionario/cadastrar",
        component: CadastrarFuncionarioComponent,
    },
    {
        path: "folha-pagamento/cadastrar",
        component: CadastrarFolhaPagamentoComponent,
    },
    {
        path: "folha-pagamento/listar",
        component: ListarFolhaPagamentoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
