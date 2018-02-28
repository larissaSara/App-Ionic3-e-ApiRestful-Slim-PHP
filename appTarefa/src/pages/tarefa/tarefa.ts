import { Component } from '@angular/core';
import {NavController, NavParams, AlertController}  from 'ionic-angular';
import {TarefasService} from '../../providers/projetos-service';
import { ProjetosService, Projeto } from '../../providers/projetos-service';

@Component({
    selector: 'page-tarefa',
    templateUrl: `tarefa.html`
  })

  export class TarefaPage{

    codigoTarefa: number;
    codigoProjeto: number;
    descricao: string;
    data: String;
    prioridade: number;
    novo: boolean = true;
    projetos: any[] = [];


    constructor(public navCtrl: NavController,public navParams: NavParams, public alertCtrl: AlertController,public ts: TarefasService, public ps: ProjetosService) {
        
    }
    ionViewWillEnter(){
        this.novo = this.navParams.get('novo');
        this.ps.getProjetos().then(
            (dados:Projeto[]) => {
                this.projetos = dados

                    if(!this.novo){
                    this.codigoTarefa = this.navParams.get('codigo');
                    this.ts.getTarefa(this.codigoTarefa).then(
                        tarefa => {
                        this.codigoProjeto = tarefa.codigoProjeto;
                        this.descricao = tarefa.descricao;
                        let d = tarefa.data;
                        this.data = d.getFullYear()+"-"+
                                ("0"+(d.getMonth()+1)).substr(-2,2)+"-"+
                                ("0"+d.getDate()).substr(-2,2);
                    
                        this.prioridade= tarefa.prioridade;
                    });
                    }   
                    else{
                        this.codigoProjeto = this.projetos[0].codigo;
                        this.descricao = '';
                        this.prioridade = 3;
                        let d = new Date();
                    
                        this.data = d.getFullYear()+"-"+
                                ("0"+(d.getMonth()+1)).substr(-2,2)+"-"+
                                ("0"+d.getDate()).substr(-2,2);

                }
            }
       
    );
    }
    alteraTarefa(){
        let d = new Date(
            parseInt(this.data.substr(0,4)),
            parseInt(this.data.substr(5,2))-1,
            parseInt(this.data.substr(8,2))
        )
        this.ts.alteraTarefa(this.codigoTarefa, this.codigoProjeto, this.descricao, d, this.prioridade).then(dados => {
            this.navCtrl.pop();
        });
        
    }
    incluiTarefa(){
        let d = new Date(
            parseInt(this.data.substr(0,4)),
            parseInt(this.data.substr(5,2))-1,
            parseInt(this.data.substr(8,2))
        )
        this.ts.incluiTarefa(this.codigoProjeto,this.descricao, d, this.prioridade).then(dados=>{
            this.navCtrl.pop();
        });
        
    }
    excluiTarefa(){
        
        let alertExc = this.alertCtrl.create({
            title: 'Exclusão',
            message: "Deseja realmente excluir a tarefa?",
            buttons: [
              {
                text: 'Não',
                handler: data => {
                  console.log('Cancelado');
                  this.navCtrl.pop();
                }
              },
              {
                text: 'Sim',
                handler: data => {
                    
                    this.ts.excluiTarefa(this.codigoTarefa).then(dados=>{
                        var alert2 = this.alertCtrl.create({
                            title: 'Excluido com Sucesso!',
                            buttons: ['ok']
                        });
                        alert2.present();
                        this.navCtrl.pop();
                    });
                   
                    
                }
              }
            ]
          });
          alertExc.present();
          

    }
            
        }
    
  