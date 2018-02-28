import { Component } from '@angular/core';
import {ProjetosService} from '../../providers/projetos-service';
import {NavController, NavParams, AlertController}  from 'ionic-angular';
import {TarefasService} from   '../../providers/projetos-service';
@Component({
    selector: 'page-projeto',
  templateUrl: 'projeto.html'
    
})
export class ProjetoPage {
    codigoProjeto: number;
    nomeProjeto: string = "";
    novo: boolean = true;
    constructor(public navCtrl: NavController, public navParams:NavParams,public alertCtrl: AlertController, public ps: ProjetosService, public ts: TarefasService){
        this.novo = navParams.get('novo');
        if(!this.novo){
            this.codigoProjeto = navParams.get('codigo');
            ps.getProjeto(this.codigoProjeto).then(dados => {
                this.nomeProjeto = dados.projeto;
            });
            
        }
      
        
    }
    alteraProjeto(){
        this.ps.alteraProjeto(this.codigoProjeto,this.nomeProjeto)
        .then(dados => {
            console.log(dados);
        });
        this.navCtrl.pop();
        this.ps.getProjetos();
    }
    excluiProjeto(){
            this.ps.excluiProjeto(this.codigoProjeto).then(
                        dados=>{
                        var alert2 = this.alertCtrl.create({
                                        title: 'Excluido com Sucesso!',
                                        buttons: ['ok']
                        });
                        alert2.present();
                        this.navCtrl.pop();
                        }
                );
    }
    incluiProjeto(){
        if((this.nomeProjeto != '')||(this.nomeProjeto != null)){
            var result= this.ps.cadastraProjeto(this.nomeProjeto).then(
                dados => {
                    var alert = this.alertCtrl.create({
                        title: 'Cadastrado com sucesso!',
                        buttons: ['ok']
                    });
                    alert.present();        
                    this.navCtrl.pop();
                }
            );
        }
           
    }
}