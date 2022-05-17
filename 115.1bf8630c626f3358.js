"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[115],{5115:(P,d,o)=>{o.r(d),o.d(d,{AuthModule:()=>O});var g=o(9808),c=o(5358),p=o(5226),m=o.n(p),n=o(1223),f=o(5295),h=o(4614),r=o(2382),x=o(6162);function b(t,s){1&t&&n._UZ(0,"img",27)}function C(t,s){1&t&&n._UZ(0,"img",28)}function M(t,s){1&t&&n._UZ(0,"app-loading")}const v=function(t){return{disabled:t}},_=[{path:"",component:(()=>{class t{constructor(e,a,l,i){this.auth=e,this.router=a,this.route=l,this.keyboardService=i,this.model={dni:"",password:""},this.loading=!1}ngOnInit(){null!=this.auth.getToken()&&this.router.navigateByUrl("/")}ngAfterViewInit(){setTimeout(()=>{document.querySelector("#transition-login").style.display="none"},1e3)}show(){this.keyboardService.showKeyboard(!0)}submit(){this.loading=!0,this.auth.login(this.model).subscribe({next:e=>{this.loading=!1,this.auth.setToken(e.jwt_token+""),this.router.navigate(["/"])},error:e=>{this.loading=!1,m().fire({icon:"error",title:"Oops...",text:null==e.error.mensaje?"Servidor no disponible":e.error.mensaje})}})}back(){this.router.navigate(["../welcome"],{relativeTo:this.route})}restorePassword(){document.querySelector("#dni.ng-valid")}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.e),n.Y36(c.F0),n.Y36(c.gz),n.Y36(h.i))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:30,vars:11,consts:[["id","transition-login"],["id","page-container"],["id","container"],["autocomplete","off",3,"ngSubmit"],["login","ngForm"],["id","title"],["id","box-login"],[1,"inputBox"],["pattern","[0-9]{8}[A-Za-z]{1}","name","dni","id","dni","placeholder","Usuario","type","text","required","",1,"text",3,"ngModel","ngModelChange"],["dni","ngModel"],["src","assets/img/user-icon.png","alt","Usuario","title","Usuario",1,"icon-input"],["class","err","title","Indique un dni con formato 8 n\xfameros y una letra","src","assets/img/err.png",4,"ngIf"],["name","password","id","contrase\xf1a","placeholder","Contrase\xf1a","type","password","required","",1,"text",3,"ngModel","ngModelChange"],["password","ngModel"],["src","assets/img/password-icon.png","alt","Contrase\xf1a","title","Contrase\xf1a-",1,"icon-input"],["class","err","title","La contrase\xf1a debe de tener m\xednimo 8 car\xe1cteres","src","assets/img/err.png",4,"ngIf"],["id","submit","type","submit","value","Iniciar sesi\xf3n",3,"disabled"],["id","login-functions"],["id","actions"],[3,"click"],["src","assets/img/back.png","alt","Atr\xe1s","title","Atr\xe1s"],["id","password-restore",3,"ngClass"],["src","assets/img/restart-password.png"],["id","keyboard",3,"click"],["src","assets/img/keyboard.png","alt","Teclado en pantalla"],["src","assets/img/google.png","alt","Iniciar con Google","title","Iniciar con Google"],[4,"ngIf"],["title","Indique un dni con formato 8 n\xfameros y una letra","src","assets/img/err.png",1,"err"],["title","La contrase\xf1a debe de tener m\xednimo 8 car\xe1cteres","src","assets/img/err.png",1,"err"]],template:function(e,a){if(1&e&&(n._UZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"form",3,4),n.NdJ("ngSubmit",function(){return a.submit()}),n.TgZ(5,"p",5),n._uU(6,"Iniciar sesi\xf3n"),n.qZA(),n.TgZ(7,"div",6),n.TgZ(8,"div",7),n.TgZ(9,"input",8,9),n.NdJ("ngModelChange",function(i){return a.model.dni=i}),n.qZA(),n._UZ(11,"img",10),n.YNc(12,b,1,0,"img",11),n.qZA(),n.TgZ(13,"div",7),n.TgZ(14,"input",12,13),n.NdJ("ngModelChange",function(i){return a.model.password=i}),n.qZA(),n._UZ(16,"img",14),n.YNc(17,C,1,0,"img",15),n.qZA(),n.qZA(),n._UZ(18,"input",16),n.qZA(),n.qZA(),n.TgZ(19,"div",17),n.TgZ(20,"div",18),n.TgZ(21,"div",19),n.NdJ("click",function(){return a.back()}),n._UZ(22,"img",20),n.qZA(),n.TgZ(23,"div",21),n._UZ(24,"img",22),n.qZA(),n.TgZ(25,"div",23),n.NdJ("click",function(){return a.keyboardService.showKeyboard(!0)}),n._UZ(26,"img",24),n.qZA(),n.TgZ(27,"div"),n._UZ(28,"img",25),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.YNc(29,M,1,0,"app-loading",26)),2&e){const l=n.MAs(4),i=n.MAs(10),u=n.MAs(15);n.xp6(9),n.Q6J("ngModel",a.model.dni),n.xp6(3),n.Q6J("ngIf",i.invalid&&i.touched),n.xp6(2),n.Q6J("ngModel",a.model.password),n.xp6(3),n.Q6J("ngIf",u.invalid&&u.touched),n.xp6(1),n.Q6J("disabled",l.invalid),n.xp6(5),n.Q6J("ngClass",n.VKq(9,v,i.invalid)),n.xp6(1),n.uIk("alt",i.invalid?"Inserte su dni para recuperar contrase\xf1a":"Recuperar contrase\xf1a")("title",i.invalid?"Inserte su dni para recuperar contrase\xf1a":"Recuperar contrase\xf1a"),n.xp6(5),n.Q6J("ngIf",a.loading)}},directives:[r._Y,r.JL,r.F,r.Fj,r.c5,r.Q7,r.JJ,r.On,g.O5,g.mk,x.N],styles:['#container[_ngcontent-%COMP%]{display:flex;height:100vh;width:100%;flex-direction:column;flex-wrap:nowrap;align-content:center;justify-content:center;align-items:center}.disabled[_ngcontent-%COMP%]{filter:opacity(.3)}.disabled[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation-name:unset!important}#submit[_ngcontent-%COMP%]:enabled:hover{background-color:#ebebeb}.disabled[_ngcontent-%COMP%]:hover{animation-name:unset!important}form[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 7px 7px #b5b5b5;height:315px;display:flex;flex-direction:column;justify-content:center;align-content:center;align-items:center;position:relative;width:85%;max-width:347px;border-bottom:4px solid var(--color)}#box-login[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px;align-items:center;text-align:center;width:100%}.inputBox[_ngcontent-%COMP%]{width:78%;position:relative}#box-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:45px;height:37px;border:none;background-color:#f0f0f0}#box-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#353535}#box-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none!important}#submit[_ngcontent-%COMP%]{position:absolute;bottom:35px;border:none;width:60%;height:39px;transition:.5s}#title[_ngcontent-%COMP%]{font-family:"Exo 2",sans-serif;position:absolute;font-size:22px;font-weight:100!important;top:45px}#transition-login[_ngcontent-%COMP%]{background-color:#172477;position:absolute;top:0;bottom:0;left:0;right:0;transition:.83s;animation-name:intro-login;z-index:20;animation-duration:1s}@keyframes intro-login{0%{opacity:1}to{opacity:0}}#page-container[_ngcontent-%COMP%]{width:100%;height:100vh;background-color:#f1f1f1}.icon-input[_ngcontent-%COMP%]{width:13px;position:absolute;top:11px;left:17px}.err[_ngcontent-%COMP%]{width:20px;position:absolute;top:8px;right:8px;transition:1s;animation-duration:1s;animation-name:errimage}@keyframes errimage{0%{transform:rotate(180deg);width:0}to{transform:rotate(0);width:20px}}#login-functions[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%;display:flex;height:40px;text-align:right;justify-content:right}#keyboard[_ngcontent-%COMP%]{position:relative;bottom:2px}@media (max-width: 600px){#login-functions[_ngcontent-%COMP%]{text-align:center;justify-content:center}#actions[_ngcontent-%COMP%]{right:unset!important}}#actions[_ngcontent-%COMP%]{position:relative;right:30px;background:white;box-shadow:0 7px 7px #b5b5b5;border-radius:5px;width:150px;display:flex;text-align:center;justify-content:center;align-items:center}#actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:center;align-items:center;height:100%;width:33.3%}#actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}#actions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:55%}#actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transition:.5s;animation-name:clickme;animation-iteration-count:infinite;animation-duration:1.5s}@keyframes clickme{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}']}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.Bz.forChild(_)],c.Bz]}),t})();var Z=o(4466);let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[g.ez,y,r.u5,Z.m,c.Bz]]}),t})()}}]);