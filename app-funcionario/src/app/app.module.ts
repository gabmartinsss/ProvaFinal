import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
// Imports dos componentes da aplicação
import { AppComponent } from "./app.component";
import { TemplateComponent } from "./components/template/template.component";
import { CadastrarFolhaPagamentoComponent } from "./components/views/folha-pagamento/cadastrar-folha-pagamento/cadastrar-folha-pagamento.component";
import { ListarFolhaPagamentoComponent } from "./components/views/folha-pagamento/listar-folha-pagamento/listar-folha-pagamento.component";
import { CadastrarFuncionarioComponent } from "./components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component";
import { ListarFuncionarioComponent } from "./components/views/funcionario/listar-funcionario/listar-funcionario.component";

@NgModule({
    declarations: [
        AppComponent,
        ListarFuncionarioComponent,
        CadastrarFuncionarioComponent,
        CadastrarFolhaPagamentoComponent,
        ListarFolhaPagamentoComponent,
        TemplateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatGridListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
