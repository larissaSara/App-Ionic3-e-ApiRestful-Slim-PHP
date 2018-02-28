import { Component } from '@angular/core';
import {Projeto, ProjetosService} from '../../providers/projetos-service';
import {NavController} from 'ionic-angular';
import {ProjetoPage} from  '../projeto/projeto';
@Component({
  selector:'page-projetos',
  templateUrl: `projetos.html`
  
})
export class ProjetosPage {
    
projetos: Projeto[] = [];

  constructor(public ps: ProjetosService
            ,public navCtrl: NavController) { }
            
  ionViewWillEnter() {
    this.ps.getProjetos().then(
      (dados:Projeto[]) => {
        this.projetos = dados
      }
    );
  }
  selecionaProjeto(c:string){
    let codigo = parseInt(c);
    this.navCtrl.push(ProjetoPage, {codigo: codigo, novo:false});

  }
  criaProjeto(){
    
    this.navCtrl.push(ProjetoPage, {novo:true})
  }
}