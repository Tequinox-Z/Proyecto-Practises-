"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[592],{9207:(g,l,s)=>{s.d(l,{F:()=>r});var e=s(2340),o=s(1223),h=s(3958),c=s(5295),a=s(520);let r=(()=>{class i{constructor(t,d,_){this.userService=t,this.authService=d,this.http=_}getCenterOfAdministrator(){return this.http.get(e.N.serverAddress+"/administrator/"+this.userService.getDni()+"/school",this.authService.getHeadersToken())}getAllCenters(){return this.http.get(e.N.serverAddress+"/school/",this.authService.getHeadersToken())}getCentersByName(t){return this.http.get(e.N.serverAddress+"/school/?name="+t,this.authService.getHeadersToken())}getAllLocations(){return this.http.get(e.N.serverAddress+"/location/schools",this.authService.getHeadersToken())}createCenter(t){return this.http.post(e.N.serverAddress+"/school",t,this.authService.getHeadersToken())}setLocation(t,d){return this.http.post(e.N.serverAddress+"/school/"+t.id+"/location",d,this.authService.getHeadersToken())}setCurrentAdministrator(t){return this.http.post(e.N.serverAddress+"/administrator/"+this.userService.getDni()+"/school",t,this.authService.getHeadersToken())}briefing(t){return this.http.get(e.N.serverAddress+"/school/"+t.id+"/briefing",this.authService.getHeadersToken())}getUbication(t){return this.http.get(e.N.serverAddress+"/school/"+t.id+"/location",this.authService.getHeadersToken())}updateLocation(t){return this.http.put(e.N.serverAddress+"/school/"+t.id+"/location",t.location,this.authService.getHeadersToken())}updateCenter(t){return this.http.put(e.N.serverAddress+"/school/"+t.id,t,this.authService.getHeadersToken())}getMovementsBySchool(t){return this.http.get(e.N.serverAddress+"/school/"+t.id+"/movement",this.authService.getHeadersToken())}deleteAllMovement(t){return this.http.delete(e.N.serverAddress+"/school/"+t.id+"/movement",this.authService.getHeadersToken())}getTemperature(t){return this.http.get(e.N.serverAddress+"/school/"+t.id+"/reg-temp",this.authService.getHeadersToken())}getAdministrators(t){return this.http.get(e.N.serverAddress+"/school/"+t+"/administrator",this.authService.getHeadersToken())}getDegreesFromSchoolId(t){let d=(new Date).getFullYear();return this.http.get(e.N.serverAddress+"/school/"+t+"/degree?year="+d,this.authService.getHeadersToken())}getDegreesFromDni(t){return this.http.get(e.N.serverAddress+"/teacher/"+t+"/degree",this.authService.getHeadersToken())}}return i.\u0275fac=function(t){return new(t||i)(o.LFG(h.K),o.LFG(c.e),o.LFG(a.eN))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},7793:(g,l,s)=>{s.d(l,{q:()=>h});var e=s(1223),o=s(4614);let h=(()=>{class c{constructor(r){this.keySrv=r,this.closeKey=new e.vpe}ngOnInit(){}showKeyboard(){this.keySrv.showKeyboard(!0)}close(){this.closeKey.emit()}greyScale(){var r;null===(r=document.querySelector("html"))||void 0===r||r.classList.toggle("grayScale")}contrast(){var r;null===(r=document.querySelector("html"))||void 0===r||r.classList.toggle("hightContrast")}}return c.\u0275fac=function(r){return new(r||c)(e.Y36(o.i))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-accesibility"]],outputs:{closeKey:"closeKey"},decls:18,vars:0,consts:[["id","mainAccesibility"],["id","close",3,"click"],["src","assets/img/close.png","title","Cerrar","alt","Cerrar",3,"close"],["id","title"],["id","options"],["src","assets/img/keyboard2.png",3,"click"],["src","assets/img/grises.jpg",3,"click"],["src","assets/img/contraste.png",3,"click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.NdJ("click",function(){return i.close()}),e.TgZ(2,"img",2),e.NdJ("close",function(){return i.close()}),e.qZA(),e.qZA(),e.TgZ(3,"p",3),e._uU(4,"Accesibilidad"),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"div"),e.TgZ(7,"img",5),e.NdJ("click",function(){return i.showKeyboard()}),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Teclado en pantalla"),e.qZA(),e.qZA(),e.TgZ(10,"div"),e.TgZ(11,"img",6),e.NdJ("click",function(){return i.greyScale()}),e.qZA(),e.TgZ(12,"p"),e._uU(13,"Escala de grises"),e.qZA(),e.qZA(),e.TgZ(14,"div"),e.TgZ(15,"img",7),e.NdJ("click",function(){return i.contrast()}),e.qZA(),e.TgZ(16,"p"),e._uU(17,"Alto constraste"),e.qZA(),e.qZA(),e.qZA(),e.qZA())},styles:["#mainAccesibility[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#fff;box-shadow:0 5px 5px #00000072;position:relative}#close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:51px;height:28px;display:flex;justify-content:center;align-items:center;transition:.5s}#close[_ngcontent-%COMP%]:hover{background-color:red;color:#fff}#close[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:invert()}#close[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{transition:.5s;height:27%}#title[_ngcontent-%COMP%]{font-size:20px;position:relative;top:20px;left:20px;display:inline-block}#options[_ngcontent-%COMP%]{margin-top:14%;width:100%;display:flex;justify-content:center;align-items:center;gap:30px;flex-wrap:wrap}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100px;display:flex;flex-direction:column;align-content:center;justify-content:center;align-items:center}#options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}#options[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:70px}"]}),c})()},1447:(g,l,s)=>{s.d(l,{U:()=>a});var e=s(2340),o=s(1223),h=s(520),c=s(5295);let a=(()=>{class r{constructor(n,t){this.http=n,this.authService=t}getTutors(n){return this.http.get(e.N.serverAddress+"/business/"+n+"/labor-tutor",this.authService.getHeadersToken())}getTutorsFree(){return this.http.get(e.N.serverAddress+"/labor-tutor/free",this.authService.getHeadersToken())}}return r.\u0275fac=function(n){return new(n||r)(o.LFG(h.eN),o.LFG(c.e))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);