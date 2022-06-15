"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[879],{8212:(x,g,n)=>{n.d(g,{s:()=>c});var h=n(1223);let c=(()=>{class s{constructor(){this.title="",this.disableNav=!1}getDisableNav(){return this.disableNav}setDisableNav(d){this.disableNav=d}getTitle(){return this.title}setTitle(d){this.title=d}}return s.\u0275fac=function(d){return new(d||s)},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},7879:(x,g,n)=>{n.r(g),n.d(g,{DashboardModule:()=>N});var h=n(4466),c=n(9808),s=n(1451),m=n(5226),d=n.n(m),t=n(1223),Z=n(2290),v=n(5295),p=n(3958),A=n(5282),T=n(8212);let C=(()=>{class i{constructor(e,o,r,u){this.userService=e,this.auth=o,this.router=r,this.rutaActiva=u}ngOnInit(){}exitConfirm(){var e;null===(e=document.querySelector("#optionsNav"))||void 0===e||e.classList.add("hidden"),d().fire({title:"\xbfCerrar sesi\xf3n?",text:"Los cambios no guardados se perder\xe1n",icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Cerrar sesi\xf3n"}).then(o=>{o.isConfirmed&&(document.querySelector("html").classList.remove("gray"),document.querySelector("html").classList.remove("highConstrast"),this.userService.setPerson(null),this.auth.logout())})}myUser(){this.router.navigateByUrl("dashboard/person/management/"+this.userService.getDni()+"/edit")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.K),t.Y36(v.e),t.Y36(s.F0),t.Y36(s.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-menu"]],decls:7,vars:0,consts:[[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"p",0),t.NdJ("click",function(){return o.myUser()}),t._uU(2,"Mi usuario"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Opciones"),t.qZA(),t.TgZ(5,"p",0),t.NdJ("click",function(){return o.exitConfirm()}),t._uU(6,"Salir"),t.qZA(),t.qZA())},styles:["div[_ngcontent-%COMP%]{background-color:#d3d3d3;border-top:1px solid grey;height:100%;width:100%;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:flex-start;animation-name:intro;animation-duration:.5s;transition:.5s}@keyframes intro{0%{opacity:0}to{opacity:1}}p[_ngcontent-%COMP%]{height:40px;display:flex;align-items:center;flex-wrap:nowrap;align-content:center;padding-left:25px;width:100%}p[_ngcontent-%COMP%]:hover{background-color:#ebebeb}"]}),i})();function y(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",13),t._UZ(2,"img",14),t.qZA(),t.TgZ(3,"div",15),t._UZ(4,"img",16),t.qZA(),t.TgZ(5,"div",17),t._UZ(6,"img",18),t.qZA(),t.TgZ(7,"div",19),t._UZ(8,"img",20),t.qZA(),t.TgZ(9,"div",21),t._UZ(10,"img",22),t.qZA(),t.TgZ(11,"div",23),t.TgZ(12,"div",24),t._UZ(13,"img",25),t.qZA(),t.qZA(),t.TgZ(14,"div",26),t._UZ(15,"img",27),t.qZA(),t.TgZ(16,"div",28),t._UZ(17,"img",29),t.qZA(),t.TgZ(18,"div",30),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).initUser()}),t._UZ(19,"img",31),t.qZA(),t.qZA()}}function M(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",15),t._UZ(2,"img",16),t.qZA(),t.TgZ(3,"div",21),t._UZ(4,"img",22),t.qZA(),t.TgZ(5,"div",28),t._UZ(6,"img",29),t.qZA(),t.TgZ(7,"div",30),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).initUser()}),t._UZ(8,"img",31),t.qZA(),t.qZA()}}function b(i,a){if(1&i&&(t.TgZ(0,"div",12),t.YNc(1,y,20,0,"div",1),t.YNc(2,M,9,0,"div",1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.userService.getPerson().rol+""=="ROLE_ADMIN"),t.xp6(1),t.Q6J("ngIf",e.userService.getPerson().rol+""=="ROLE_TEACHER")}}const D=function(i){return{widthMax:i}};function S(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"img",4),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return r.showActions=!r.showActions}),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t.TgZ(6,"img",6),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return r.menu=!r.menu}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",7),t.YNc(8,b,3,2,"div",8),t.TgZ(9,"div",9),t.TgZ(10,"div",10),t.TgZ(11,"router-outlet",11),t.NdJ("notification",function(r){return t.CHM(e),t.oxw().showMessage(r)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();let o;t.xp6(4),t.Oqu(e.dashboardService.getTitle()),t.xp6(2),t.s9C("src",e.userService.getPerson()&&null!=(o=e.userService.getPerson())&&o.image?e.userService.getPerson().image:"assets/img/not_image.png",t.LSH),t.cQ8("title","",e.userService.getPerson()?e.userService.getPerson().name:""," ",e.userService.getPerson()?e.userService.getPerson().lastName:""," (",e.roleAssign,")"),t.xp6(2),t.Q6J("ngIf",e.showActions),t.xp6(1),t.Q6J("ngClass",t.VKq(7,D,!e.showActions))}}function P(i,a){1&i&&t._UZ(0,"app-menu")}let f=(()=>{class i{constructor(e,o,r,u,w,E,I){this.toastService=e,this.route=o,this.router=r,this.auth=u,this.userService=w,this.displayLoadingService=E,this.dashboardService=I,this.administratorDefaultPage="center/my-center",this.teacherDefaultPage="center/centers",this.showActions=!0,this.menu=!1,this.roleAssign=""}ngAfterViewInit(){this.displayLoadingService.setShowDisplayLoading(!1)}ngOnInit(){this.initUser()}initUser(){this.dashboardService.setTitle("Dashboard"),this.userService.getUser().subscribe({next:e=>{switch(this.userService.setPerson(e),e.rol+""){case"ROLE_ADMIN":this.roleAssign="Administrador",this.router.navigate([this.administratorDefaultPage],{relativeTo:this.route});break;case"ROLE_TEACHER":this.roleAssign="Profesor",this.router.navigate([this.teacherDefaultPage],{relativeTo:this.route});break;default:d().fire({icon:"error",title:"Oops...",text:"Error al cargar rol de usuario"})}},error:e=>{d().fire({icon:"error",title:"Oops...",text:null==e.error.mensaje?"Servidor no disponible":e.error.mensaje})}})}showMessage(e){this.toastService.success("FF","",{progressBar:!0,progressAnimation:"increasing"})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z._W),t.Y36(s.gz),t.Y36(s.F0),t.Y36(v.e),t.Y36(p.K),t.Y36(A.t),t.Y36(T.s))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:2,vars:2,consts:[["id","container-main",4,"ngIf"],[4,"ngIf"],["id","container-main"],["id","navigator"],["id","menu","src","assets/img/menu.png",3,"click"],["id","user-zone"],[3,"src","title","click"],["id","view"],["id","menu-zone",4,"ngIf"],["id","content",3,"ngClass"],["id","router"],[3,"notification"],["id","menu-zone"],["routerLink","/dashboard/center/my-center","routerLinkActive","activated",1,"option"],["src","assets/img/school-icon.png","title","Mi centro","alt","Mi centro"],["routerLink","/dashboard/center/centers","routerLinkActive","activated",1,"option"],["src","assets/img/find-icon.svg","title","Centros educativos","alt","Centros educativos"],["routerLink","/dashboard/center/movements","routerLinkActive","activated",1,"option"],["src","assets/img/movement-icon.png","title","Movimientos inusuales","alt","Movimientos inusuales"],["routerLink","/dashboard/center/temperature-humidity","routerLinkActive","activated",1,"option"],["src","assets/img/temperature.png","alt","Registros de temperatura","title","Registros de temperatura"],["routerLink","/dashboard/degrees/my-degrees","routerLinkActive","activated",1,"option"],["src","assets/img/my-degrees.png","title","Mis ciclos","alt","Mis ciclos"],["routerLink","/dashboard/degrees/all","routerLinkActive","activated","id","double"],["id","practise","routerLink","/dashboard/practise/","routerLinkActive","activated"],["src","assets/img/degrees-icon.png","title","Ver todos los ciclos del centro","alt","Ver todos los ciclos del centro"],["routerLink","/dashboard/person/management","routerLinkActive","activated",1,"option"],["src","assets/img/persons.png","title","Administrar usuarios","alt","Administrar usuarios"],["routerLink","/dashboard/business/search-business","routerLinkActive","activated",1,"option"],["src","assets/img/business-icon.png","title","Empresas","alt","Empresas"],["id","logoInApp",1,"option",3,"click"],["src","assets/img/logo.png","alt","Practises Management","title","Practises Management"]],template:function(e,o){1&e&&(t.YNc(0,S,12,9,"div",0),t.YNc(1,P,1,0,"app-menu",1)),2&e&&(t.Q6J("ngIf",null!=o.userService.getPerson()),t.xp6(1),t.Q6J("ngIf",o.menu))},directives:[c.O5,s.rH,s.Od,c.mk,s.lC,C],styles:["#container-main{width:100%;height:100vh;display:flex;justify-content:flex-end;overflow:hidden}#navigator{position:fixed;top:0;background-color:#d3d3d3;width:100%;height:50px;display:flex;align-items:center;text-align:center;justify-content:center}#menu-zone>div{width:100%;transition:.2s;display:flex;flex-direction:column;align-items:center}#menu-zone>div>div{display:flex;transition:.2s;flex-direction:column;align-content:center;align-items:center;justify-content:center}#router{overflow:hidden;height:calc(100vh - 50px)}.widthMax{width:100%!important}#logoInApp{filter:invert();position:absolute;bottom:15px}#view{width:100%;display:flex;position:relative;justify-content:flex-end;top:50px}#content{width:calc(100% - 55px);height:calc(100vh - 50px)}.option{width:100%;height:50px}.activated{border-right:3px solid var(--color)}.option-menu{width:70%;display:flex}#practise{touch-action:none;width:100%;height:100%}#double{width:100%;height:50px}#practise.activated{border-right:1px solid var(--color)!important}#double #practise{display:flex;justify-content:center;align-content:center;align-items:center}#router-main{width:calc(100% - 55px)}#menu-zone{padding-top:10px;background-color:#e6e6e6;width:55px;height:calc(100vh - 50px);z-index:100;overflow:hidden;position:fixed;top:50px;left:0;display:flex;justify-content:center}#menu-zone img{width:30px}#user-zone{position:absolute;right:15px;height:50px;display:flex;align-items:center;justify-content:center;text-align:center}#user-zone>img{height:70%;border-radius:50%;width:37px}#menu{position:absolute;left:17px;height:25px}app-menu{position:absolute;top:50px;width:180px;height:max-content;right:0}\n"],encapsulation:2}),i})();var l=n(9269);const L=[{path:"",component:f,children:[{path:"center",loadChildren:()=>Promise.all([n.e(382),n.e(554),n.e(592),n.e(561)]).then(n.bind(n,9561)).then(i=>i.CenterModule),canActivate:[l.e]},{path:"business",loadChildren:()=>Promise.all([n.e(382),n.e(554),n.e(592),n.e(409)]).then(n.bind(n,7409)).then(i=>i.BusinessModule),canActivate:[l.e]},{path:"degrees",loadChildren:()=>Promise.all([n.e(592),n.e(508)]).then(n.bind(n,3508)).then(i=>i.DegreesModule),canActivate:[l.e]},{path:"practise",loadChildren:()=>Promise.all([n.e(592),n.e(824)]).then(n.bind(n,9824)).then(i=>i.PractiseModule),canActivate:[l.e]},{path:"person",loadChildren:()=>Promise.all([n.e(382),n.e(592),n.e(205)]).then(n.bind(n,2205)).then(i=>i.PersonModule),canActivate:[l.e]}]}];let U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[s.Bz.forChild(L)],s.Bz]}),i})(),N=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i,bootstrap:[f]}),i.\u0275inj=t.cJS({imports:[[c.ez,h.m,U]]}),i})()}}]);