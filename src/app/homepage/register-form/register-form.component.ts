import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrationsService } from '../../registrations.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registrationsService = inject(RegistrationsService);
  
  formBuilder = inject(FormBuilder);
  
  form = this.formBuilder.group({
      nome: [''],
      cpf: [''],
  })

  ngOnInit() {}

  registrar() {
    const alunoARegistrar = {
      nome: this.form.value.nome as string,
      cpf: this.form.value.cpf as string
    }

    this.registrationsService.registrarAluno(alunoARegistrar).subscribe();
  }
}
