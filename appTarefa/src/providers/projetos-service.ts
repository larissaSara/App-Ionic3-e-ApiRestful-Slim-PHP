import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
export class  Projeto{
    codigo: number;
    projeto: string;
}
export class Tarefas{
    codigo: number;
    codigoProjeto: number;
    descricao: string;
    prioridade: number; //onde prioridae 1 (alta) e 3(baixa)
    data: Date;

}
@Injectable()
export class ProjetosService{
    
    //url2: string = 'http://localhost/api_rest/';
    
    url2: string= 'http://pesquisa.eti.br/api_rest/';

    constructor(public http: Http){}

    getProjetos(): Promise<Projeto[]> {
            return new Promise( resolve => {
              this.http.get(this.url2+'projetos')
                .toPromise()
                .then( (resposta) => {
                  let dados = resposta.json();
                  let projetos:Projeto[] = [];
                  for(let i=0; i<dados.length; i++)
                    projetos.push({
                      codigo: parseInt(dados[i].id),
                      projeto: dados[i].projeto
                    });
                  resolve(projetos);
                });
            });
          }
    getProjeto(codigo: number): Promise<Projeto>{
        return new Promise (resolve => {
        this.http.get(this.url2+'projetos/'+codigo)
        .toPromise()
        .then(resposta => {
            let dados = resposta.json();
            let projeto = {
                codigo: parseInt(dados.id),
                projeto: dados.projeto
            };
            resolve(projeto);
        });
    });
    }
    alteraProjeto(codigo: number, projeto: string): Promise<any>{
        let headers = new Headers({'Content-Type':'application/json'});
        let nome = {
            projeto: projeto
        };
        let body = JSON.stringify(nome);
        return new Promise(resolve => {
            this.http.put(this.url2+'projetos/'+codigo,
                            body, {headers: headers})
                .toPromise()
                .then(resposta => 
                    resolve(resposta.json())
                )
        });
    }
    cadastraProjeto(projeto: string): Promise<any>{
        let headers = new Headers({'Content-Type':'application/json'});
        let nome = {
            projeto: projeto
        };
        let body = JSON.stringify(nome);
        return new Promise(resolve => {
            this.http.post(this.url2+'projetos',
                            body, {headers: headers})
                .toPromise()
                .then(resposta => 
                    resolve(resposta.json())
                );
        });
       
    }
    excluiProjeto(codigo: number): Promise<any>{
        return new Promise(resolve => {
            this.http.delete(this.url2+'projetos/'+codigo)
                .toPromise()
                .then(resposta => {
                    resolve(resposta.json());
                });
        });
        
    }
}

@Injectable()
export class TarefasService{
    

     //larissa
     //url2: string = 'http://localhost/api_rest/';
     url2: string= 'http://pesquisa.eti.br/api_rest/';
    constructor(public http: Http){}
    
    getTarefas():Promise<Tarefas[]>{
        return new Promise( resolve => {
            this.http.get(this.url2+'tarefas')
              .toPromise()
              .then( (resposta) => {
                let dados = resposta.json();
                let tarefas = [];
                for(let i=0; i<dados.length; i++)
                  tarefas.push({
                    codigo: parseInt(dados[i].id),
                    codigoProjeto: parseInt(dados[i].idProjeto),
                    descricao: dados[i].descricao,
                    data: new Date(
                        parseInt(dados[i].data.substr(0,4)),
                        parseInt(dados[i].data.substr(5,2))-1,
                        parseInt(dados[i].data.substr(8,2))),
                    prioridade: parseInt(dados[i].prioridade)
                  });
                resolve(tarefas);
              });
          });
    }

    getTarefa(codigo: number): Promise<Tarefas>{
        return new Promise( resolve => {
            this.http.get(this.url2+'tarefas/'+codigo)
              .toPromise()
              .then( (resposta) => {
                let dados = resposta.json();
                let tarefa = {
                    codigo: parseInt(dados.id),
                    codigoProjeto: parseInt(dados.idProjeto),
                    descricao: dados.descricao,
                    data: new Date(
                        parseInt(dados.data.substr(0,4)),
                        parseInt(dados.data.substr(5,2))-1,
                        parseInt(dados.data.substr(8,2))),
                    prioridade: parseInt(dados.prioridade)
                  };
                resolve(tarefa);
              });
          });
    }

    getTarefasProjeto(codigo: number): Promise<Tarefas[]>{
        return new Promise( resolve => {
            this.http.get(this.url2+'tarefas/')
              .toPromise()
              .then( (resposta) => {
                let dados = resposta.json();
                let tarefas = [];
                for(let i=0; i<dados.length; i++)
                  tarefas.push({
                    codigo: parseInt(dados[i].codigo),
                    codigoProjeto: parseInt(dados[i].codigoProjeto),
                    descricao: dados[i].descricao,
                    data: new Date(
                        parseInt(dados[i].data.substr(0,4)),
                        parseInt(dados[i].data.substr(5,2))-1,
                        parseInt(dados[i].data.substr(8,2))),
                    prioridade: parseInt(dados[i].prioridade)
                  });
                resolve(tarefas.filter(item => item.codigoProjeto==codigo));
              });
          });
    }

    alteraTarefa(codigo: number, codigoProjeto: number, descricao: string, data: Date, prioridade: number ):Promise<any>{
        let headers = new Headers({'Content-Type': 'application/json'});
        let tarefa = {
            codigoProjeto: codigoProjeto,
            descricao: descricao,
            data: data.getFullYear() + "-"+
             ('0'+(data.getMonth()+1)).substr(-2,2)+"-"+
             ('0'+(data.getDate())).substr(-2,2),
            prioridade:prioridade
        };
        let body = JSON.stringify(tarefa);
        return new Promise(resolve => {
            this.http.put(this.url2+'tarefas/'+codigo, body, {headers: headers})
            .toPromise()
            .then(resposta => {
                resolve(resposta.json());
            });
        });
    }

    incluiTarefa(codigoProjeto:number, descricao:string, data: Date,  prioridade:number) :Promise<any>{
        let headers = new Headers({'Content-Type': 'application/json'});
        let tarefa = {
            descricao: descricao,
            prioridade:prioridade,
            data: data.getFullYear() + "-"+
             ('0'+(data.getMonth()+1)).substr(-2,2)+"-"+
             ('0'+(data.getDate())).substr(-2,2),
            idProjeto: codigoProjeto
        };
        let body = JSON.stringify(tarefa);
        return new Promise(resolve => {
            this.http.post(this.url2+'tarefas', body, {headers: headers})
            .toPromise()
            .then(resposta => {
                resolve(resposta.json());
            });
        });
    }

    excluiTarefa(codigoTarefa: number):Promise<any>{
        return new Promise(resolve => {
            this.http.delete(this.url2+'tarefas/'+codigoTarefa)
            .toPromise()
            .then(resposta => {
                resolve(resposta.json());
            });
        });
    }
    
}