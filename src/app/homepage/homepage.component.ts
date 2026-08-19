import { Component, inject } from '@angular/core';
import { RegisterFormComponent } from './register-form/register-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  router = inject(Router);

  navigateToAlunosRegistrados() {
    this.router.navigate(['/registrados']);
  }
}
