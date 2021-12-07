import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FolhaPagamento } from "../models/folha-pagamento";

@Injectable({
    providedIn: "root",
})
export class FolhaPagamentoService {
    private baseUrl = "https://localhost:5001/api/folha-pagamentos";

    constructor(private http: HttpClient) {}

    list(): Observable<FolhaPagamento[]> {
        return this.http.get<FolhaPagamento[]>(`${this.baseUrl}`);
    }
    create(folhaPagamento: FolhaPagamento): Observable<FolhaPagamento> {
        return this.http.post<FolhaPagamento>(`${this.baseUrl}/create`, folhaPagamento);
    }
}
