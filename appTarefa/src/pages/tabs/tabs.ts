import { Component } from '@angular/core';
import { ProjetosPage } from '../projetos/projetos';
import { TarefasPage } from '../tarefas/tarefas';

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabTitle="Projetos" tabIcon="list" [root]="tab1"></ion-tab>
      <ion-tab tabTitle="Tarefas" tabIcon="folder" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
export class TabsPage {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = ProjetosPage;
    this.tab2 = TarefasPage;
  }
}