import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ProjetosPage } from '../pages/projetos/projetos';
import {ProjetosService} from '../providers/projetos-service';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import {TarefaPage} from '../pages/tarefa/tarefa';
import {ProjetoPage} from '../pages/projeto/projeto';
import {TarefasService} from '../providers/projetos-service';
import { LoginPage } from '../pages/login/login';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProjetosPage,
    TarefasPage,
    ProjetoPage,
    LoginPage,
    TarefaPage,
    Filtro
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProjetosPage,
    TarefasPage,
    ProjetoPage,
    TarefaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    ProjetosService,
    TarefasService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
