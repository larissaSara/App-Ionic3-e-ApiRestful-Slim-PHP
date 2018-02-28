webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {SignupPage} from '../signup/signup';
//import {HomePage} from '../home/home';

var LoginPage = (function () {
    //construct
    function LoginPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    //method add
    LoginPage.prototype.cadastrar = function () {
        //this.navCtrl.push(SignupPage,{})
    };
    //method login
    LoginPage.prototype.login = function () {
        var inputInvalid = false;
        console.log(this.email);
        if ((this.email == "") || (this.email == undefined)) {
            document.getElementById("email").className = "text-input " + "alert";
            inputInvalid = true;
        }
        console.log(this.senha);
        if ((this.senha == "") || (this.senha == undefined)) {
            document.getElementById("senha").className = "text-input " + "alert";
            inputInvalid = true;
        }
        if (inputInvalid != true) {
            //this.post(this.email, this.senha);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], {});
        }
    };
    LoginPage.prototype.showWrongLogin = function () {
        alert({
            title: 'Falha Login',
            template: 'Email ou senha invalidos',
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/larissa/Tarefas/src/pages/login/login.html"*/'<!--\n  Generate loginPage.\n-->\n<ion-content class="background">\n    <ion-card>\n      <ion-card-header>\n        Login\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list no-line>\n          <ion-item>\n              <ion-input input="text" [(ngModel)]="email" placeholder="Email" id="email" ></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input input="password" [(ngModel)]="senha" placeholder="Senha" id="senha"></ion-input>\n          </ion-item>\n          <button ion-button block outline color="light" (click)="login()">Acessar</button>\n        \n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button clear full color="light" (click)="cadastrar()">Não possui cadastro?<b>Clique aqui</b></button>\n  </ion-content>'/*ion-inline-end:"/home/larissa/Tarefas/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projetos_projetos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarefas_tarefas__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__projetos_projetos__["a" /* ProjetosPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__tarefas_tarefas__["b" /* TarefasPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-tabs>\n      <ion-tab tabTitle=\"Projetos\" tabIcon=\"list\" [root]=\"tab1\"></ion-tab>\n      <ion-tab tabTitle=\"Tarefas\" tabIcon=\"folder\" [root]=\"tab2\"></ion-tab>\n    </ion-tabs>"
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_projetos_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projeto_projeto__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjetosPage = (function () {
    function ProjetosPage(ps, navCtrl) {
        this.ps = ps;
        this.navCtrl = navCtrl;
        this.projetos = [];
    }
    ProjetosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ps.getProjetos().then(function (dados) {
            _this.projetos = dados;
        });
    };
    ProjetosPage.prototype.selecionaProjeto = function (c) {
        var codigo = parseInt(c);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__projeto_projeto__["a" /* ProjetoPage */], { codigo: codigo, novo: false });
    };
    ProjetosPage.prototype.criaProjeto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__projeto_projeto__["a" /* ProjetoPage */], { novo: true });
    };
    return ProjetosPage;
}());
ProjetosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projetos',template:/*ion-inline-start:"/home/larissa/Tarefas/src/pages/projetos/projetos.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Projetos\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n<ion-list>\n<button ion-item *ngFor="let p of projetos" \n    (click)="selecionaProjeto(p.codigo)">\n  {{ p.projeto }}\n</button>  \n</ion-list>\n<div class="btns">\n    <button ion-button round color="primary" (click)="criaProjeto()">\n        <ion-icon name="add"></ion-icon>\n    </button>\n</div>\n</ion-content>'/*ion-inline-end:"/home/larissa/Tarefas/src/pages/projetos/projetos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_projetos_service__["a" /* ProjetosService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
], ProjetosPage);

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_projetos_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjetoPage = (function () {
    function ProjetoPage(navCtrl, navParams, alertCtrl, ps, ts) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ps = ps;
        this.ts = ts;
        this.nomeProjeto = "";
        this.novo = true;
        this.novo = navParams.get('novo');
        if (!this.novo) {
            this.codigoProjeto = navParams.get('codigo');
            ps.getProjeto(this.codigoProjeto).then(function (dados) {
                _this.nomeProjeto = dados.projeto;
            });
        }
    }
    ProjetoPage.prototype.alteraProjeto = function () {
        this.ps.alteraProjeto(this.codigoProjeto, this.nomeProjeto)
            .then(function (dados) {
            console.log(dados);
        });
        this.navCtrl.pop();
        this.ps.getProjetos();
    };
    ProjetoPage.prototype.excluiProjeto = function () {
        var _this = this;
        this.ps.excluiProjeto(this.codigoProjeto).then(function (dados) {
            var alert2 = _this.alertCtrl.create({
                title: 'Excluido com Sucesso!',
                buttons: ['ok']
            });
            alert2.present();
            _this.navCtrl.pop();
        });
    };
    ProjetoPage.prototype.incluiProjeto = function () {
        var _this = this;
        if ((this.nomeProjeto != '') || (this.nomeProjeto != null)) {
            var result = this.ps.cadastraProjeto(this.nomeProjeto).then(function (dados) {
                var alert = _this.alertCtrl.create({
                    title: 'Cadastrado com sucesso!',
                    buttons: ['ok']
                });
                alert.present();
                _this.navCtrl.pop();
            });
        }
    };
    return ProjetoPage;
}());
ProjetoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projeto',template:/*ion-inline-start:"/home/larissa/Tarefas/src/pages/projeto/projeto.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Projeto\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n                    <ion-label color="primary">\n                            Código:\n                    </ion-label>\n                    <ion-input type="number" placeholder="Codigo do projeto" value="{{codigoProjeto}}" disabled> </ion-input>\n                </ion-item>\n        <ion-item>\n        <ion-label color="primary">\n                Nome:\n            </ion-label>\n            <ion-input type="text" placeholder="Nome do projeto" [(ngModel)]="nomeProjeto" name="nomeProjeto" required #nome="ngModel"> </ion-input>\n        </ion-item>\n        <ion-card [hidden]="nome.valid || nome.pristine" class="alerta">\n            <ion-card-content>\n                Nome do projeto obrigatório!\n            </ion-card-content>\n        </ion-card>\n        \n       <div class="btns">\n           <button ion-button round color="primary" (click)="alteraProjeto()" [disabled]="!nome.valid" [hidden]="novo">\n               <ion-icon name="checkmark"></ion-icon>\n           </button>\n           <button ion-button round color="danger" (click)="excluiProjeto()" [hidden]="novo">\n               <ion-icon name="trash"></ion-icon>\n           </button>\n           <button ion-button round color="primary" (click)="incluiProjeto()" [disabled]="!nome.valid" [hidden]="!novo">\n            <ion-icon name="checkmark"></ion-icon>\n        </button>\n       </div>\n        \n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/larissa/Tarefas/src/pages/projeto/projeto.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__providers_projetos_service__["a" /* ProjetosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_projetos_service__["a" /* ProjetosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__providers_projetos_service__["b" /* TarefasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_projetos_service__["b" /* TarefasService */]) === "function" && _e || Object])
], ProjetoPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=projeto.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TarefasPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filtro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tarefa_tarefa__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TarefasPage = (function () {
    function TarefasPage(navCtrl, menuCtrl, ts, ps) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.ts = ts;
        this.ps = ps;
        this.tarefas = [];
        this.projetos = [];
        this.filtroTarefas = {};
    }
    TarefasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ps.getProjetos().then(function (dados) {
            _this.projetos = dados;
            _this.ts.getTarefas().then(function (dados) {
                _this.tarefas = dados;
                _this.tarefas.map(function (t) {
                    for (var i = 0; i < _this.projetos.length; i++) {
                        if (_this.projetos[i].codigo == t.codigoProjeto) {
                            t.nomeProjeto = _this.projetos[i].projeto;
                            return t;
                        }
                        t.nomeProjeto = '';
                        return t;
                    }
                });
            });
        });
    };
    TarefasPage.prototype.selecionaTarefa = function (codigo) {
        var cod = parseInt(codigo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tarefa_tarefa__["a" /* TarefaPage */], { codigo: cod, novo: false });
    };
    TarefasPage.prototype.criaTarefa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tarefa_tarefa__["a" /* TarefaPage */], { novo: true });
    };
    TarefasPage.prototype.limpaFiltros = function () {
        this.filtroTarefas = {};
        this.menuCtrl.close();
    };
    TarefasPage.prototype.filtroProjeto = function (p) {
        this.filtroTarefas = { projeto: p };
        console.dir(this.filtroTarefas);
        this.menuCtrl.close();
    };
    TarefasPage.prototype.filtroDias = function (d) {
        this.filtroTarefas = { dias: d };
        this.menuCtrl.close();
    };
    return TarefasPage;
}());
TarefasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefas',template:/*ion-inline-start:"/home/larissa/Tarefas/src/pages/tarefas/tarefas.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n            \n        </button>\n        <ion-title>\n            Tarefas\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-menu [content]="menu">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>\n                Filtros\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <ion-item-group>\n                <button ion-item (click)="limpaFiltros()">Todas</button>\n                <button ion-item (click)="filtroDias(0)">Até hoje</button>\n                <button ion-item (click)="filtroDias(1)">Até amanhã</button>\n                <button ion-item (click)="filtroDias(7)">Até uma semana</button>\n            </ion-item-group>\n            <ion-item-group>\n                <ion-item-divider class="light">\n                    POR PROJETO\n                </ion-item-divider>\n                <button ion-item *ngFor="let p of projetos " (click)="filtroProjeto(p.codigo)">{{p.projeto}}</button>\n            </ion-item-group>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav #menu></ion-nav>\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let t of tarefas | filtro: filtroTarefas" \n            (click)="selecionaTarefa(t.codigo)">\n          <h2>{{ t.descricao }}</h2>\n          <p>{{ t.nomeProjeto }} - \n              {{t.data | date:\'dd/mm/yyyy\'}} </p>\n             <ion-badge item-end\n                 [class.alta] = "t.prioridade==1"\n                [class.media] = "t.prioridade==2"\n                [class.baixa] = "t.prioridade==3"> {{ t.prioridade }}</ion-badge>\n        </button>  \n        </ion-list>\n        <div class="btns">\n            <button ion-button round color="primary" (click)="criaTarefa()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </div>\n</ion-content>'/*ion-inline-end:"/home/larissa/Tarefas/src/pages/tarefas/tarefas.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service__["b" /* TarefasService */], __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service__["a" /* ProjetosService */]])
], TarefasPage);

var Filtro = (function () {
    function Filtro() {
    }
    Filtro.prototype.transform = function (itens, filtro) {
        itens.sort(function (a, b) { return a.data - b.data; });
        if (filtro.projeto) {
            return itens.filter(function (item) { return item.codigoProjeto == filtro.projeto; });
        }
        else if (filtro.dias >= 0) {
            var d_1 = new Date((new Date()).getTime() + filtro.dias * 24 * 60 * 60 * 1000);
            return itens.filter(function (item) { return item.data <= d_1; });
        }
        else
            return itens;
    };
    return Filtro;
}());
Filtro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'filtro'
    })
], Filtro);

//# sourceMappingURL=tarefas.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Projeto */
/* unused harmony export Tarefas */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TarefasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Projeto = (function () {
    function Projeto() {
    }
    return Projeto;
}());

var Tarefas = (function () {
    function Tarefas() {
    }
    return Tarefas;
}());

var ProjetosService = (function () {
    function ProjetosService(http) {
        this.http = http;
        //url2: string = 'http://localhost/api_rest/';
        this.url2 = 'http://pesquisa.eti.br/api_rest/';
    }
    ProjetosService.prototype.getProjetos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url2 + 'projetos')
                .toPromise()
                .then(function (resposta) {
                var dados = resposta.json();
                var projetos = [];
                for (var i = 0; i < dados.length; i++)
                    projetos.push({
                        codigo: parseInt(dados[i].id),
                        projeto: dados[i].projeto
                    });
                resolve(projetos);
            });
        });
    };
    ProjetosService.prototype.getProjeto = function (codigo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url2 + 'projetos/' + codigo)
                .toPromise()
                .then(function (resposta) {
                var dados = resposta.json();
                var projeto = {
                    codigo: parseInt(dados.id),
                    projeto: dados.projeto
                };
                resolve(projeto);
            });
        });
    };
    ProjetosService.prototype.alteraProjeto = function (codigo, projeto) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var nome = {
            projeto: projeto
        };
        var body = JSON.stringify(nome);
        return new Promise(function (resolve) {
            _this.http.put(_this.url2 + 'projetos/' + codigo, body, { headers: headers })
                .toPromise()
                .then(function (resposta) {
                return resolve(resposta.json());
            });
        });
    };
    ProjetosService.prototype.cadastraProjeto = function (projeto) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var nome = {
            projeto: projeto
        };
        var body = JSON.stringify(nome);
        return new Promise(function (resolve) {
            _this.http.post(_this.url2 + 'projetos', body, { headers: headers })
                .toPromise()
                .then(function (resposta) {
                return resolve(resposta.json());
            });
        });
    };
    ProjetosService.prototype.excluiProjeto = function (codigo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_this.url2 + 'projetos/' + codigo)
                .toPromise()
                .then(function (resposta) {
                resolve(resposta.json());
            });
        });
    };
    return ProjetosService;
}());
ProjetosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProjetosService);

var TarefasService = (function () {
    function TarefasService(http) {
        this.http = http;
        //larissa
        //url2: string = 'http://localhost/api_rest/';
        this.url2 = 'http://pesquisa.eti.br/api_rest/';
    }
    TarefasService.prototype.getTarefas = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url2 + 'tarefas')
                .toPromise()
                .then(function (resposta) {
                var dados = resposta.json();
                var tarefas = [];
                for (var i = 0; i < dados.length; i++)
                    tarefas.push({
                        codigo: parseInt(dados[i].id),
                        codigoProjeto: parseInt(dados[i].idProjeto),
                        descricao: dados[i].descricao,
                        data: new Date(parseInt(dados[i].data.substr(0, 4)), parseInt(dados[i].data.substr(5, 2)) - 1, parseInt(dados[i].data.substr(8, 2))),
                        prioridade: parseInt(dados[i].prioridade)
                    });
                resolve(tarefas);
            });
        });
    };
    TarefasService.prototype.getTarefa = function (codigo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url2 + 'tarefas/' + codigo)
                .toPromise()
                .then(function (resposta) {
                var dados = resposta.json();
                var tarefa = {
                    codigo: parseInt(dados.id),
                    codigoProjeto: parseInt(dados.idProjeto),
                    descricao: dados.descricao,
                    data: new Date(parseInt(dados.data.substr(0, 4)), parseInt(dados.data.substr(5, 2)) - 1, parseInt(dados.data.substr(8, 2))),
                    prioridade: parseInt(dados.prioridade)
                };
                resolve(tarefa);
            });
        });
    };
    TarefasService.prototype.getTarefasProjeto = function (codigo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url2 + 'tarefas/')
                .toPromise()
                .then(function (resposta) {
                var dados = resposta.json();
                var tarefas = [];
                for (var i = 0; i < dados.length; i++)
                    tarefas.push({
                        codigo: parseInt(dados[i].codigo),
                        codigoProjeto: parseInt(dados[i].codigoProjeto),
                        descricao: dados[i].descricao,
                        data: new Date(parseInt(dados[i].data.substr(0, 4)), parseInt(dados[i].data.substr(5, 2)) - 1, parseInt(dados[i].data.substr(8, 2))),
                        prioridade: parseInt(dados[i].prioridade)
                    });
                resolve(tarefas.filter(function (item) { return item.codigoProjeto == codigo; }));
            });
        });
    };
    TarefasService.prototype.alteraTarefa = function (codigo, codigoProjeto, descricao, data, prioridade) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var tarefa = {
            codigoProjeto: codigoProjeto,
            descricao: descricao,
            data: data.getFullYear() + "-" +
                ('0' + (data.getMonth() + 1)).substr(-2, 2) + "-" +
                ('0' + (data.getDate())).substr(-2, 2),
            prioridade: prioridade
        };
        var body = JSON.stringify(tarefa);
        return new Promise(function (resolve) {
            _this.http.put(_this.url2 + 'tarefas/' + codigo, body, { headers: headers })
                .toPromise()
                .then(function (resposta) {
                resolve(resposta.json());
            });
        });
    };
    TarefasService.prototype.incluiTarefa = function (codigoProjeto, descricao, data, prioridade) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var tarefa = {
            descricao: descricao,
            prioridade: prioridade,
            data: data.getFullYear() + "-" +
                ('0' + (data.getMonth() + 1)).substr(-2, 2) + "-" +
                ('0' + (data.getDate())).substr(-2, 2),
            idProjeto: codigoProjeto
        };
        var body = JSON.stringify(tarefa);
        return new Promise(function (resolve) {
            _this.http.post(_this.url2 + 'tarefas', body, { headers: headers })
                .toPromise()
                .then(function (resposta) {
                resolve(resposta.json());
            });
        });
    };
    TarefasService.prototype.excluiTarefa = function (codigoTarefa) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_this.url2 + 'tarefas/' + codigoTarefa)
                .toPromise()
                .then(function (resposta) {
                resolve(resposta.json());
            });
        });
    };
    return TarefasService;
}());
TarefasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], TarefasService);

var _a, _b;
//# sourceMappingURL=projetos-service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TarefaPage = (function () {
    function TarefaPage(navCtrl, navParams, alertCtrl, ts, ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ts = ts;
        this.ps = ps;
        this.novo = true;
        this.projetos = [];
    }
    TarefaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.novo = this.navParams.get('novo');
        this.ps.getProjetos().then(function (dados) {
            _this.projetos = dados;
            if (!_this.novo) {
                _this.codigoTarefa = _this.navParams.get('codigo');
                _this.ts.getTarefa(_this.codigoTarefa).then(function (tarefa) {
                    _this.codigoProjeto = tarefa.codigoProjeto;
                    _this.descricao = tarefa.descricao;
                    var d = tarefa.data;
                    _this.data = d.getFullYear() + "-" +
                        ("0" + (d.getMonth() + 1)).substr(-2, 2) + "-" +
                        ("0" + d.getDate()).substr(-2, 2);
                    _this.prioridade = tarefa.prioridade;
                });
            }
            else {
                _this.codigoProjeto = _this.projetos[0].codigo;
                _this.descricao = '';
                _this.prioridade = 3;
                var d = new Date();
                _this.data = d.getFullYear() + "-" +
                    ("0" + (d.getMonth() + 1)).substr(-2, 2) + "-" +
                    ("0" + d.getDate()).substr(-2, 2);
            }
        });
    };
    TarefaPage.prototype.alteraTarefa = function () {
        var _this = this;
        var d = new Date(parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(5, 2)) - 1, parseInt(this.data.substr(8, 2)));
        this.ts.alteraTarefa(this.codigoTarefa, this.codigoProjeto, this.descricao, d, this.prioridade).then(function (dados) {
            _this.navCtrl.pop();
        });
    };
    TarefaPage.prototype.incluiTarefa = function () {
        var _this = this;
        var d = new Date(parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(5, 2)) - 1, parseInt(this.data.substr(8, 2)));
        this.ts.incluiTarefa(this.codigoProjeto, this.descricao, d, this.prioridade).then(function (dados) {
            _this.navCtrl.pop();
        });
    };
    TarefaPage.prototype.excluiTarefa = function () {
        var _this = this;
        var alertExc = this.alertCtrl.create({
            title: 'Exclusão',
            message: "Deseja realmente excluir a tarefa?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        console.log('Cancelado');
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.ts.excluiTarefa(_this.codigoTarefa).then(function (dados) {
                            var alert2 = _this.alertCtrl.create({
                                title: 'Excluido com Sucesso!',
                                buttons: ['ok']
                            });
                            alert2.present();
                            _this.navCtrl.pop();
                        });
                    }
                }
            ]
        });
        alertExc.present();
    };
    return TarefaPage;
}());
TarefaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefa',template:/*ion-inline-start:"/home/larissa/Tarefas/src/pages/tarefa/tarefa.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Tarefa\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label color="primary">\n                Descrição\n            </ion-label>\n            <ion-input type="text" placeholder="Descrição da Tarefa" [(ngModel)]="descricao" name="descricao" requerid #desc="ngModel"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">\n                Projeto\n            </ion-label>\n            <ion-select [(ngModel)]="codigoProjeto">\n                <ion-option *ngFor="let p of projetos" value="{{p.codigo}}">\n                    {{p.projeto}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Data</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" min="2010" max="2030" [(ngModel)]="data"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Prioridade</ion-label>\n            <ion-select [(ngModel)]="prioridade">\n                <ion-option value="1">1 - Alta</ion-option>\n                <ion-option value="2">2 - Média</ion-option>\n                <ion-option value="3">3 - Baixa</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-card [hidden]="desc.valid || desc.pristine" class="alerta">\n            <ion-card-content>\n                Descrição  obrigatória!\n            </ion-card-content>\n        </ion-card>\n        <div class="btns">\n            <button ion-button round color="primary" (click)="alteraTarefa()" [disabled]="!desc.valid" [hidden]="novo">\n                <ion-icon name="checkmark"></ion-icon>\n            </button>\n            <button ion-button round color="danger" (click)="excluiTarefa()" [hidden]="novo">\n                <ion-icon name="trash"></ion-icon>\n            </button>\n            <button ion-button round color="primary" (click)="incluiTarefa()" [hidden]="!novo">\n             <ion-icon name="checkmark"></ion-icon>\n         </button>\n        </div>\n             \n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/larissa/Tarefas/src/pages/tarefa/tarefa.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service__["b" /* TarefasService */], __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service__["a" /* ProjetosService */]])
], TarefaPage);

//# sourceMappingURL=tarefa.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_projetos_projetos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_projetos_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tarefas_tarefas__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tarefa_tarefa__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_projeto_projeto__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_projetos_projetos__["a" /* ProjetosPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tarefas_tarefas__["b" /* TarefasPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_projeto_projeto__["a" /* ProjetoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tarefa_tarefa__["a" /* TarefaPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tarefas_tarefas__["a" /* Filtro */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_projetos_projetos__["a" /* ProjetosPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tarefas_tarefas__["b" /* TarefasPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_projeto_projeto__["a" /* ProjetoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tarefa_tarefa__["a" /* TarefaPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__providers_projetos_service__["a" /* ProjetosService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_projetos_service__["b" /* TarefasService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/larissa/Tarefas/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/larissa/Tarefas/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map