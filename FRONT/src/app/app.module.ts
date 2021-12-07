import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";

import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button"; //botão do menu para ficar sem o fundo
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule} from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule} from "@angular/material/grid-list";

import { AppComponent } from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import { ListarFilmeComponent } from './components/views/filme/listar-filme/listar-filme.component';
import { CadastrarFilmeComponent } from './components/views/filme/cadastrar-filme/cadastrar-filme.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './components/template/template.component';
import { IndexComponent } from './components/views/home/index/index.component';

@NgModule({
  declarations: [AppComponent, ListarFilmeComponent, CadastrarFilmeComponent, TemplateComponent, IndexComponent],
  imports:
  [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatTableModule,
    MatCardModule, MatInputModule, MatSelectModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
