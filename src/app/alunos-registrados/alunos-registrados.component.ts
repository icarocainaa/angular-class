import { Component, inject, OnInit } from '@angular/core';
import { RegistrationsService } from '../registrations.service';

@Component({
  selector: 'app-alunos-registrados',
  templateUrl: './alunos-registrados.component.html',
  styleUrls: ['./alunos-registrados.component.css']
})
export class AlunosRegistradosComponent implements OnInit {
  registrationsService = inject(RegistrationsService);

  alunos: any = [];

  ngOnInit() {
    this.registrationsService.getAlunos().subscribe( (respostaBackend: any) => {
      this.alunos = respostaBackend;
    });
  }

}
