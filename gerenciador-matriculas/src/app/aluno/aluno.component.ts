import { Component, OnInit } from '@angular/core';
import { Aluno } from './entities/aluno';
import { AlunoService } from './services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public aluno: Aluno = new Aluno({
    id: 1,
    cpf: '06357955906',
    email: 'joao.holiveira@totvs.com.br',
    formaIngresso: 'Enade',
    matricula: 3,
    nome: 'João Henrique de Oliveira Júnior',
    turma: []
  });

  constructor(private service: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }

  private getAlunos() {
    console.log(
      this.service
        .getAlunos()
        .subscribe(alunos => {
          console.log(alunos);
        })
    );
  }

}
