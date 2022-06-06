"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[11],{4011:(J,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>F});var g=a(9808),d=a(8118),v=a(5226),x=a.n(v),t=a(1223),m=a(5295),b=a(4614),h=a(2290),f=a(6108),C=a(5282),s=a(2382);function M(n,c){1&n&&t._UZ(0,"img",26)}function _(n,c){1&n&&t._UZ(0,"img",27)}const w=function(n){return{disabled:n}};let y=(()=>{class n{constructor(e,o,r,i,l,u,k){this.auth=e,this.router=o,this.route=r,this.keyboardService=i,this.toastService=l,this.soundService=u,this.displayLoadingService=k,this.model={dni:"",password:""}}ngOnInit(){null!=this.auth.getToken()&&this.router.navigateByUrl("/")}ngAfterViewInit(){setTimeout(()=>{document.querySelector("#transition-login").style.display="none"},1e3)}show(){this.keyboardService.showKeyboard(!0)}submit(){this.displayLoadingService.setShowDisplayLoading(!0),this.auth.login(this.model).subscribe({next:e=>{this.displayLoadingService.setShowDisplayLoading(!1),this.auth.setToken(e.jwt_token+""),this.router.navigate(["/"])},error:e=>{this.displayLoadingService.setShowDisplayLoading(!1),x().fire({icon:"error",title:"Oops...",text:null==e.error.mensaje?"Servidor no disponible":e.error.mensaje}),this.soundService.notify()}})}back(){this.router.navigate(["../welcome"],{relativeTo:this.route})}restorePassword(){let e=document.querySelector("#dni.ng-valid");null!=e&&this.auth.restorePassword(e.value).subscribe({next:o=>{this.toastService.success(o.email,"Enviado enlace a"),this.soundService.notify()},error:o=>{null!=o.error.mensaje?this.toastService.warning(o.error.mensaje,"Advertencia"):this.toastService.error("Servidor no disponible","Error"),this.soundService.notify()}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.e),t.Y36(d.F0),t.Y36(d.gz),t.Y36(b.i),t.Y36(h._W),t.Y36(f.y),t.Y36(C.t))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:29,vars:10,consts:[["id","transition-login"],["id","page-container"],["id","container"],["autocomplete","on",3,"ngSubmit"],["login","ngForm"],["id","title"],["id","box-login"],[1,"inputBox"],["pattern","[0-9]{8}[A-Za-z]{1}","name","dni","id","dni","placeholder","Usuario","type","text","required","",1,"text",3,"ngModel","ngModelChange"],["dni","ngModel"],["src","assets/img/user-icon.png","alt","Usuario","title","Usuario",1,"icon-input"],["class","err","title","Indique un dni con formato 8 n\xfameros y una letra","src","assets/img/err.png",4,"ngIf"],["name","password","id","contrase\xf1a","placeholder","Contrase\xf1a","type","password","required","",1,"text",3,"ngModel","ngModelChange"],["password","ngModel"],["src","assets/img/password-icon.png","alt","Contrase\xf1a","title","Contrase\xf1a-",1,"icon-input"],["class","err","title","La contrase\xf1a debe de tener m\xednimo 8 car\xe1cteres","src","assets/img/err.png",4,"ngIf"],["id","submit","type","submit","value","Iniciar sesi\xf3n",3,"disabled"],["id","login-functions"],["id","actions"],[3,"click"],["src","assets/img/back.png","alt","Atr\xe1s","title","Atr\xe1s"],["id","password-restore",3,"ngClass","click"],["src","assets/img/restart-password.png"],["id","keyboard",3,"click"],["src","assets/img/keyboard.png","alt","Teclado en pantalla"],["src","assets/img/google.png","alt","Iniciar con Google","title","Iniciar con Google"],["title","Indique un dni con formato 8 n\xfameros y una letra","src","assets/img/err.png",1,"err"],["title","La contrase\xf1a debe de tener m\xednimo 8 car\xe1cteres","src","assets/img/err.png",1,"err"]],template:function(e,o){if(1&e&&(t._UZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"form",3,4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(5,"p",5),t._uU(6,"Iniciar sesi\xf3n"),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"div",7),t.TgZ(9,"input",8,9),t.NdJ("ngModelChange",function(i){return o.model.dni=i}),t.qZA(),t._UZ(11,"img",10),t.YNc(12,M,1,0,"img",11),t.qZA(),t.TgZ(13,"div",7),t.TgZ(14,"input",12,13),t.NdJ("ngModelChange",function(i){return o.model.password=i}),t.qZA(),t._UZ(16,"img",14),t.YNc(17,_,1,0,"img",15),t.qZA(),t.qZA(),t._UZ(18,"input",16),t.qZA(),t.qZA(),t.TgZ(19,"div",17),t.TgZ(20,"div",18),t.TgZ(21,"div",19),t.NdJ("click",function(){return o.back()}),t._UZ(22,"img",20),t.qZA(),t.TgZ(23,"div",21),t.NdJ("click",function(){return o.restorePassword()}),t._UZ(24,"img",22),t.qZA(),t.TgZ(25,"div",23),t.NdJ("click",function(){return o.keyboardService.showKeyboard(!0)}),t._UZ(26,"img",24),t.qZA(),t.TgZ(27,"div"),t._UZ(28,"img",25),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const r=t.MAs(4),i=t.MAs(10),l=t.MAs(15);t.xp6(9),t.Q6J("ngModel",o.model.dni),t.xp6(3),t.Q6J("ngIf",i.invalid&&i.touched),t.xp6(2),t.Q6J("ngModel",o.model.password),t.xp6(3),t.Q6J("ngIf",l.invalid&&l.touched),t.xp6(1),t.Q6J("disabled",r.invalid),t.xp6(5),t.Q6J("ngClass",t.VKq(8,w,i.invalid)),t.xp6(1),t.uIk("alt",i.invalid?"Inserte su dni para recuperar contrase\xf1a":"Recuperar contrase\xf1a")("title",i.invalid?"Inserte su dni para recuperar contrase\xf1a":"Recuperar contrase\xf1a")}},directives:[s._Y,s.JL,s.F,s.Fj,s.c5,s.Q7,s.JJ,s.On,g.O5,g.mk],styles:['#container[_ngcontent-%COMP%]{display:flex;height:100vh;width:100%;flex-direction:column;flex-wrap:nowrap;align-content:center;justify-content:center;align-items:center}.disabled[_ngcontent-%COMP%]{filter:opacity(.3)}.disabled[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation-name:unset!important}#submit[_ngcontent-%COMP%]:enabled:hover{background-color:#ebebeb}.disabled[_ngcontent-%COMP%]:hover{animation-name:unset!important}form[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 7px 7px #b5b5b5;height:315px;display:flex;flex-direction:column;justify-content:center;align-content:center;align-items:center;position:relative;width:85%;max-width:347px;border-bottom:4px solid var(--color)}#box-login[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px;align-items:center;text-align:center;width:100%}.inputBox[_ngcontent-%COMP%]{width:78%;position:relative}#box-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:45px;height:37px;border:none;background-color:#f0f0f0}#box-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#353535}#box-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none!important}#submit[_ngcontent-%COMP%]{position:absolute;bottom:35px;border:none;width:60%;height:39px;transition:.5s}#title[_ngcontent-%COMP%]{font-family:"Exo 2",sans-serif;position:absolute;font-size:22px;font-weight:100!important;top:45px}#transition-login[_ngcontent-%COMP%]{background-color:#172477;position:absolute;top:0;bottom:0;left:0;right:0;transition:.83s;animation-name:intro-login;z-index:20;animation-duration:1s}@keyframes intro-login{0%{opacity:1}to{opacity:0}}#page-container[_ngcontent-%COMP%]{width:100%;height:100vh;background-color:#f1f1f1}.icon-input[_ngcontent-%COMP%]{width:13px;position:absolute;top:11px;left:17px}.err[_ngcontent-%COMP%]{width:20px;position:absolute;top:8px;right:8px;transition:1s;animation-duration:1s;animation-name:errimage}@keyframes errimage{0%{transform:rotate(180deg);width:0}to{transform:rotate(0);width:20px}}#login-functions[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%;display:flex;height:40px;text-align:right;justify-content:right}#keyboard[_ngcontent-%COMP%]{position:relative;bottom:2px}@media (max-width: 600px){#login-functions[_ngcontent-%COMP%]{text-align:center;justify-content:center}#actions[_ngcontent-%COMP%]{right:unset!important}}#actions[_ngcontent-%COMP%]{position:relative;right:30px;background:white;box-shadow:0 7px 7px #b5b5b5;border-radius:5px;width:150px;display:flex;text-align:center;justify-content:center;align-items:center}#actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:center;align-items:center;height:100%;width:25%}#actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}#actions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:55%}#actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transition:.5s;animation-name:clickme;animation-iteration-count:infinite;animation-duration:1.5s}@keyframes clickme{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}']}),n})();var P=a(3958);function O(n,c){1&n&&t._UZ(0,"img",14)}function Z(n,c){1&n&&t._UZ(0,"img",15)}const T=[{path:"",component:y},{path:"reset-my-password/:token-id",component:(()=>{class n{constructor(e,o,r,i,l,u){this.userService=e,this.router=o,this.route=r,this.auth=i,this.toastService=l,this.soundService=u,this.model={password:"",passwordVerify:""}}ngOnInit(){}submit(){this.model.password==this.model.passwordVerify&&this.userService.setPassword(this.model.password,this.route.snapshot.params["token-id"]).subscribe({next:e=>{this.toastService.success("Tu contrase\xf1a ha sido actualizada","\xa1Hecho!"),this.soundService.notify(),this.auth.setToken(e.jwt_token+""),this.router.navigate(["/"])},error:e=>{this.toastService.error("Error",null==e.error.mensaje?"Token expirado o no v\xe1lido":e.error.mensaje),this.soundService.notify()}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(P.K),t.Y36(d.F0),t.Y36(d.gz),t.Y36(m.e),t.Y36(h._W),t.Y36(f.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-restart-password"]],decls:15,vars:5,consts:[["id","container"],["autocomplete","off",3,"ngSubmit"],["restartPasword","ngForm"],["id","title"],["id","box-restart"],["name","password","id","password","minlength","8","placeholder","Contrase\xf1a","type","text","required","",1,"text",3,"ngModel","ngModelChange"],["password","ngModel"],["src","assets/img/password-icon.png","alt","Su nueva contrase\xf1a","title","Su nueva contrase\xf1a",1,"icon-input"],["class","err","title","La contrase\xf1a debe tener una longitud m\xednima de 8 car\xe1cteres","src","assets/img/err.png",4,"ngIf"],["name","passwordVerify","id","passwordVerify","minlength","8","placeholder","Repita su contrase\xf1a","type","text","required","",1,"text",3,"ngModel","ngModelChange"],["passwordVerify","ngModel"],["id","verifypass","src","assets/img/password-icon.png","alt","Repita su contrase\xf1a","title","Repita su contrase\xf1a",1,"second-input","icon-input"],["class","second-input err","title","Las contrase\xf1as no coinciden","src","assets/img/err.png",4,"ngIf"],["id","submit","type","submit","value","Cambiar contrase\xf1a",3,"disabled"],["title","La contrase\xf1a debe tener una longitud m\xednima de 8 car\xe1cteres","src","assets/img/err.png",1,"err"],["title","Las contrase\xf1as no coinciden","src","assets/img/err.png",1,"second-input","err"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1,2),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(3,"p",3),t._uU(4,"Resetear contrase\xf1a"),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"input",5,6),t.NdJ("ngModelChange",function(i){return o.model.password=i}),t.qZA(),t._UZ(8,"img",7),t.YNc(9,O,1,0,"img",8),t.TgZ(10,"input",9,10),t.NdJ("ngModelChange",function(i){return o.model.passwordVerify=i}),t.qZA(),t._UZ(12,"img",11),t.YNc(13,Z,1,0,"img",12),t.qZA(),t._UZ(14,"input",13),t.qZA(),t.qZA()),2&e){const r=t.MAs(7),i=t.MAs(11);t.xp6(6),t.Q6J("ngModel",o.model.password),t.xp6(3),t.Q6J("ngIf",r.invalid&&r.touched),t.xp6(1),t.Q6J("ngModel",o.model.passwordVerify),t.xp6(3),t.Q6J("ngIf",i.value!=r.value&&i.touched),t.xp6(1),t.Q6J("disabled",r.invalid||i.invalid)}},directives:[s._Y,s.JL,s.F,s.Fj,s.wO,s.Q7,s.JJ,s.On,g.O5],styles:['#container[_ngcontent-%COMP%]{display:flex;height:100vh;width:100%;flex-direction:column;flex-wrap:nowrap;align-content:center;justify-content:center;align-items:center;background-color:#f1f1f1}#title[_ngcontent-%COMP%]{font-family:"Exo 2",sans-serif;position:absolute;font-size:22px;font-weight:100!important;top:45px}form[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 7px 7px #b5b5b5;height:315px;display:flex;flex-direction:column;justify-content:center;align-content:center;align-items:center;position:relative;width:85%;max-width:347px;border-bottom:4px solid var(--color)}#submit[_ngcontent-%COMP%]{position:absolute;bottom:35px;border:none;width:60%;height:39px;transition:.5s}.icon-input[_ngcontent-%COMP%]{width:13px;position:absolute;top:11px;left:17px}.err[_ngcontent-%COMP%]{width:20px;position:absolute;top:8px;right:8px;transition:1s;animation-duration:1s;animation-name:errimage}#box-restart[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;gap:15px;align-items:center;text-align:center;width:78%}#verifypass[_ngcontent-%COMP%]{top:63px!important}.second-input[_ngcontent-%COMP%]{top:60px!important}.inputBox[_ngcontent-%COMP%]{width:78%;position:relative}#box-restart[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:45px;height:37px;border:none;background-color:#f0f0f0}#box-restart[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#353535}#box-restart[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none!important}']}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(T)],d.Bz]}),n})();var S=a(4466);let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,A,s.u5,S.m,d.Bz]]}),n})()}}]);