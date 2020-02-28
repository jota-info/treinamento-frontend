import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { ObjetoAluno } from 'aluno/entities/aluno-interface';

@Component({
  selector: 'app-grid-aluno',
  templateUrl: './grid-aluno.component.html',
  styleUrls: ['./grid-aluno.component.css']
})
export class GridAlunoComponent implements OnInit {

  private _alunos: Aluno[] = [];
  private _alunosComoObjeto: ObjetoAluno[] = [];

  constructor() {}

  ngOnInit() {}

  get alunos(): Aluno[] {
    return [...this._alunos];
  }

  @Input() set alunos(value: Aluno[]) {
    if (value) {
      this._alunos = value;
      this._alunosComoObjeto = value
        .map(aluno => this.converterAlunoParaObjeto(aluno));
    }
  }

  get alunosComoObjeto(): ObjetoAluno[] {
    return [...this._alunosComoObjeto];
  }

  private converterAlunoParaObjeto(aluno: Aluno): ObjetoAluno {
    return {
      id: aluno.id,
      nome: aluno.nome,
      email: aluno.email,
      cpf: aluno.cpf,
      matricula: aluno.matricula,
      formaIngresso: aluno.formaIngresso,
      turma: aluno.turma
    };
  }

  get listaColunasGridAlunos(): any[] {
    return [
      { property: 'id', label: 'ID' },
      { property: 'nome', label: 'Nome' },
      { property: 'cpf', label: 'CPF' },
      { property: 'email', label: 'E-mail' },
      { property: 'matricula', label: 'Matrícula' }
    ];
  }

}
