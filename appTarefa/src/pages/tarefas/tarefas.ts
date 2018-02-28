import { Component, Pipe, PipeTransform } from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {TarefasService} from '../../providers/projetos-service';
import {TarefaPage} from '../tarefa/tarefa';
import { Projeto, ProjetosService, Tarefas } from '../../providers/projetos-service';

@Component({
  selector: 'page-tarefas',
  templateUrl: `tarefas.html`
})
export class TarefasPage {
tarefas: any[] = [];
projetos: Projeto[] = [];
filtroTarefas: any = {};

  constructor(public navCtrl: NavController,public menuCtrl: MenuController, public ts: TarefasService, public ps: ProjetosService) {
    
  }
  
  ionViewWillEnter(){
    this.ps.getProjetos().then(
      (dados:Projeto[]) => {
        this.projetos = dados;
      
    this.ts.getTarefas().then(
      (dados:Tarefas[])=> {
        this.tarefas = dados;
    
        this.tarefas.map(
          t => {
          for(let i=0; i<this.projetos.length; i++){
            if(this.projetos[i].codigo == t.codigoProjeto){
              t.nomeProjeto = this.projetos[i].projeto;
              return t;
          }
            t.nomeProjeto = '';
            return t;
        }
        }
      );
    });
  });
}

  selecionaTarefa(codigo: string){
    let cod = parseInt(codigo);
    this.navCtrl.push(TarefaPage, {codigo: cod, novo:false });
  }
  criaTarefa(){
    this.navCtrl.push(TarefaPage, {novo: true});
  }
  limpaFiltros(){
    this.filtroTarefas = {};
    this.menuCtrl.close();
  }
  filtroProjeto(p: number): void{
    this.filtroTarefas = {projeto: p};
    console.dir(this.filtroTarefas);
    this.menuCtrl.close();
  }
  filtroDias(d: number): void{
    this.filtroTarefas = {dias: d};
    this.menuCtrl.close();
  }

}
@Pipe({
  name: 'filtro'
})
export class Filtro implements PipeTransform{
  transform(itens:any[], filtro: any){
    itens.sort( (a,b) => a.data-b.data);
    if(filtro.projeto){
      return itens.filter(item =>item.codigoProjeto==filtro.projeto);
    }
    else if(filtro.dias>=0){
      let d = new Date( (new Date()).getTime() + filtro.dias*24*60*60*1000);
      return itens.filter(item => item.data<=d);
    }
    else
      return itens;
  }
}