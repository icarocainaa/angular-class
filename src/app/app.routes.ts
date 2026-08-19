import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AlunosRegistradosComponent } from './alunos-registrados/alunos-registrados.component';

export const routes: Routes = [{ path: '', component: HomepageComponent }, { path: 'registrados', component: AlunosRegistradosComponent }];
