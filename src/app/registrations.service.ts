import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Aluno {
  nome: string;
  cpf: string;
}

@Injectable({
  providedIn: 'root',
})
export class RegistrationsService {
  httpClient = inject(HttpClient);

  registrarAluno(aluno: Aluno) {
    return this.httpClient.post('https://6a8626fe9c451dc67a6468e9.mockapi.io/angular-class/registrations', aluno);
  }

  getAlunos() {
    return this.httpClient.get('https://6a8626fe9c451dc67a6468e9.mockapi.io/angular-class/registrations');
  }

}
