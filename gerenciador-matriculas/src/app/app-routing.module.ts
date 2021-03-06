import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'turma', pathMatch: 'full' },
  {
    path: 'turma',
    loadChildren: () =>
      import('./turma/turma.module')
        .then(m => m.TurmaModule)
  },
  {
    path: 'professor', loadChildren: () =>
      import('./professor/professor.module')
        .then(m => m.ProfessorModule)
  },
  {
    path: 'aluno', loadChildren: () =>
      import('./aluno/aluno.module')
        .then(m => m.AlunoModule)
  },
  {
    path: 'disciplina', loadChildren: () =>
      import('./disciplina/disciplina.module')
        .then(m => m.DisciplinaModule)
  },
  {
    path: 'shared', loadChildren: () =>
      import('./shared/shared.module')
        .then(m => m.SharedModule)
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(
      routes, {
      enableTracing: false,
      relativeLinkResolution: 'corrected'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
