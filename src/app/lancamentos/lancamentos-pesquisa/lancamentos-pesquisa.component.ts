import { Component, OnInit } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit{

  filtro = new LancamentoFiltro();
  lancamentos = [];


  constructor(private lancamentoService: LancamentoService) { }

    ngOnInit(){
      this.pesquisar();
    }

    pesquisar(){
     
      this.lancamentoService.pesquisar(this.filtro)
      .then(lancamentos => this.lancamentos = lancamentos);
    }

    excluir(lancamentos: any) {
      this.lancamentoService.excluir(lancamentos.codigo)
      .then(() => {

        console.log('Excluido');

      });
    }

}


