"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[743],{2743:(Q,g,l)=>{l.r(g),l.d(g,{PractiseModule:()=>z});var _=l(9808),m=l(1451),v=l(5226),o=l.n(v),t=l(1223),u=l(2340),h=l(3958),f=l(5295),x=l(520);let b=(()=>{class r{constructor(e,i,n){this.userService=e,this.authService=i,this.http=n}getEnrollment(e){return this.http.get(u.N.serverAddress+"/enrollment/"+e,this.authService.getHeadersToken())}startPractise(e){return this.http.post(u.N.serverAddress+"/enrollment/"+e+"/practise",{},this.authService.getHeadersToken())}updatePractise(e){return this.http.put(u.N.serverAddress+"/practise/"+e.id,e,this.authService.getHeadersToken())}setBusiness(e,i){let n={};return n.cif=e,this.http.post(u.N.serverAddress+"/practise/"+i+"/business",n,this.authService.getHeadersToken())}editBusiness(e,i){let n={};return n.cif=e,this.http.put(u.N.serverAddress+"/practise/"+i+"/business",n,this.authService.getHeadersToken())}getBusiness(e){return this.http.get(u.N.serverAddress+"/practise/"+e+"/business",this.authService.getHeadersToken())}getTeacher(e){return this.http.get(u.N.serverAddress+"/practise/"+e+"/teacher",this.authService.getHeadersToken())}getTutor(e){return this.http.get(u.N.serverAddress+"/practise/"+e+"/labor-tutor",this.authService.getHeadersToken())}editTutor(e,i){let n={};return n.dni=i,this.http.put(u.N.serverAddress+"/practise/"+e.id+"/labor-tutor",n,this.authService.getHeadersToken())}editTeacher(e,i){let n={};return n.dni=i,this.http.put(u.N.serverAddress+"/practise/"+e.id+"/teacher",n,this.authService.getHeadersToken())}quitLaborTutor(e){return this.http.delete(u.N.serverAddress+"/practise/"+e.id+"/labor-tutor",this.authService.getHeadersToken())}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(h.K),t.LFG(f.e),t.LFG(x.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var T=l(2864),C=l(2360),P=l(1447);function w(r,c){1&r&&(t.TgZ(0,"p",4),t._uU(1,"Sin tutores. Agrege antes alg\xfan tutor"),t.qZA())}function Z(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().select(s.dni)}),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.qZA()}if(2&r){const e=c.$implicit;t.xp6(1),t.s9C("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.name)}}let M=(()=>{class r{constructor(e){this.laborService=e,this.dni=new t.vpe,this.cif=""}ngOnInit(){let e=this.laborService.getTutors(this.cif).subscribe({next:i=>{e.unsubscribe(),this.tutors=i},error:i=>{e.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:i.error.mensaje})}})}select(e){this.dni.emit(e)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(P.U))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-select-tutor"]],inputs:{cif:"cif"},outputs:{dni:"dni"},decls:6,vars:2,consts:[["id","businessDiv"],["id","businessDivs"],["id","noContent",4,"ngIf"],["class","business",3,"click",4,"ngFor","ngForOf"],["id","noContent"],[1,"business",3,"click"],[3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"p"),t._uU(2,"Seleccione tutor"),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,w,2,0,"p",2),t.YNc(5,Z,4,2,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",i.tutors&&0==i.tutors.length),t.xp6(1),t.Q6J("ngForOf",i.tutors))},directives:[_.O5,_.sg],styles:["#businessDiv[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(1){font-size:20px;margin-top:29px;margin-left:30px}#businessDiv[_ngcontent-%COMP%]{height:94%}#businessDivs[_ngcontent-%COMP%]{margin-top:10px;height:92%;overflow:auto}.business[_ngcontent-%COMP%]{height:66px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;transition:.2s;padding-left:12%}.business[_ngcontent-%COMP%]:hover{background-color:#dfdfdf}.business[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(2){margin-left:20px}.business[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:nth-child(1){width:56px;height:39px}#noContent[_ngcontent-%COMP%]{text-align:center;margin-top:38%}"]}),r})();function E(r,c){1&r&&(t.TgZ(0,"div",8),t._UZ(1,"p",9),t.TgZ(2,"p"),t._uU(3,"D\xedas restantes"),t.qZA(),t.qZA())}function O(r,c){1&r&&(t.TgZ(0,"p"),t._uU(1,"Pulse en comenzar para iniciar las pr\xe1cticas del alumno"),t.qZA())}function A(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).startPractise()}),t._uU(1,"Comenzar"),t.qZA()}}function S(r,c){if(1&r&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.TgZ(2,"p"),t._uU(3,"Pr\xe1cticas no comenzadas"),t.qZA(),t.YNc(4,O,2,0,"p",12),t.YNc(5,A,2,0,"button",13),t.qZA()),2&r){const e=t.oxw(2);t.xp6(4),t.Q6J("ngIf",e.isAdmin),t.xp6(1),t.Q6J("ngIf",e.isAdmin)}}function q(r,c){1&r&&t._UZ(0,"img",26)}function N(r,c){1&r&&t._UZ(0,"img",26)}function y(r,c){1&r&&t._UZ(0,"img",26)}function k(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"img",27),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).setDateStart()}),t.qZA()}}function I(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"img",27),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).setDateEnd()}),t.qZA()}}function D(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",15),t.TgZ(1,"p",16),t._uU(2,"Pr\xe1cticas del alumno"),t.qZA(),t.TgZ(3,"div",17),t.TgZ(4,"img",18),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).viewBusiness()}),t.qZA(),t.TgZ(5,"p"),t._uU(6,"Empresa"),t.qZA(),t.TgZ(7,"p",14),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return!!n.isAdmin&&(n.selectBusiness=!0)}),t._uU(8),t.YNc(9,q,1,0,"img",19),t.qZA(),t.qZA(),t.TgZ(10,"div",20),t.TgZ(11,"img",21),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).viewTutor()}),t.qZA(),t.TgZ(12,"p"),t._uU(13,"Tutor laboral"),t.qZA(),t.TgZ(14,"p",14),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return!!n.isAdmin&&n.selectNewTutor()}),t._uU(15),t.YNc(16,N,1,0,"img",19),t.qZA(),t.qZA(),t.TgZ(17,"div",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return!!n.isAdmin&&(n.selectTeacher=!0)}),t.TgZ(18,"img",21),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).viewTeacher()}),t.qZA(),t.TgZ(19,"p"),t._uU(20,"Profesor de pr\xe1cticas"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.YNc(23,y,1,0,"img",19),t.qZA(),t.qZA(),t.TgZ(24,"div",23),t.TgZ(25,"p"),t._uU(26,"Fecha inicio"),t.qZA(),t.TgZ(27,"p"),t._uU(28),t.qZA(),t.YNc(29,k,1,0,"img",24),t.qZA(),t.TgZ(30,"div",25),t.TgZ(31,"p"),t._uU(32,"Fecha fin"),t.qZA(),t.TgZ(33,"p"),t._uU(34),t.qZA(),t.YNc(35,I,1,0,"img",24),t.qZA(),t.qZA()}if(2&r){const e=t.oxw(2);t.xp6(8),t.hij("",e.currentEnrollment.practise.business?e.currentEnrollment.practise.business.name:"No establecido"," "),t.xp6(1),t.Q6J("ngIf",e.isAdmin),t.xp6(6),t.Oqu(e.currentEnrollment.practise.laborTutor?e.currentEnrollment.practise.laborTutor.name:"No establecido"),t.xp6(1),t.Q6J("ngIf",e.isAdmin),t.xp6(6),t.Oqu(e.currentEnrollment.practise.teacher?e.currentEnrollment.practise.teacher.name:"No establecido"),t.xp6(1),t.Q6J("ngIf",e.isAdmin),t.xp6(5),t.Oqu(e.currentEnrollment.practise.start?e.currentEnrollment.practise.start.toString().slice(0,10):" No establecido "),t.xp6(1),t.Q6J("ngIf",e.isAdmin),t.xp6(5),t.Oqu(e.currentEnrollment.practise.finish?e.currentEnrollment.practise.finish.toString().slice(0,10):" No establecido "),t.xp6(1),t.Q6J("ngIf",e.isAdmin)}}function V(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"app-select-business",32),t.NdJ("cif",function(n){return t.CHM(e),t.oxw(3).setBusiness(n)}),t.qZA()}}function J(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"app-select-teacher",33),t.NdJ("dni",function(n){return t.CHM(e),t.oxw(3).setTeacher(n)}),t.qZA()}}function U(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"app-select-tutor",34),t.NdJ("dni",function(n){return t.CHM(e),t.oxw(3).setTutor(n)})("dni",function(n){return t.CHM(e),t.oxw(3).setTutor(n)}),t.qZA()}if(2&r){const e=t.oxw(3);t.Q6J("cif",e.currentEnrollment.practise.business.cif)}}function H(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",28),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeAll()}),t.YNc(1,V,1,0,"app-select-business",29),t.YNc(2,J,1,0,"app-select-teacher",30),t.YNc(3,U,1,1,"app-select-tutor",31),t.qZA()}if(2&r){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.selectBusiness),t.xp6(1),t.Q6J("ngIf",e.selectTeacher),t.xp6(1),t.Q6J("ngIf",e.selectTutor)}}function B(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"p"),t.TgZ(3,"span",3),t.NdJ("click",function(){return t.CHM(e),t.oxw().back()}),t._uU(4,"Pr\xe1cticas > "),t.qZA(),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,E,4,0,"div",4),t.YNc(7,S,6,2,"div",5),t.YNc(8,D,36,10,"div",6),t.YNc(9,H,4,3,"div",7),t.qZA()}if(2&r){const e=t.oxw();t.xp6(5),t.AsE("",null==e.currentEnrollment.student?null:e.currentEnrollment.student.name," ",null==e.currentEnrollment.student?null:e.currentEnrollment.student.lastName,""),t.xp6(1),t.Q6J("ngIf",e.currentEnrollment.practise),t.xp6(1),t.Q6J("ngIf",!e.currentEnrollment.practise),t.xp6(1),t.Q6J("ngIf",e.currentEnrollment.practise),t.xp6(1),t.Q6J("ngIf",e.selectBusiness||e.selectTutor||e.selectTeacher)}}const F=[{path:"view/:idEnrollment",component:(()=>{class r{constructor(e,i,n,s){this.practiseSrv=e,this.rutaActiva=i,this.userSrv=n,this.route=s,this.selectBusiness=!1,this.selectTutor=!1,this.selectTeacher=!1,this.isAdmin=!1}setBusiness(e){var i;if(this.closeAll(),null===(i=this.currentEnrollment.practise)||void 0===i?void 0:i.business){let n=this.practiseSrv.editBusiness(e,this.currentEnrollment.practise.id).subscribe({next:s=>{n.unsubscribe();let a=this.practiseSrv.quitLaborTutor(this.currentEnrollment.practise).subscribe({next:()=>{a.unsubscribe(),this.loadEnrollment()},error:()=>{a.unsubscribe(),this.loadEnrollment()}})},error:s=>{n.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:s.error.mensaje})}})}else{let n=this.practiseSrv.setBusiness(e,this.currentEnrollment.practise.id).subscribe({next:s=>{n.unsubscribe();let a=this.practiseSrv.quitLaborTutor(this.currentEnrollment.practise).subscribe({next:()=>{a.unsubscribe(),this.loadEnrollment()},error:p=>{a.unsubscribe(),this.loadEnrollment()}})},error:s=>{n.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:s.error.mensaje})}})}}setTeacher(e){this.closeAll();let i=this.practiseSrv.editTeacher(this.currentEnrollment.practise,e).subscribe({next:()=>{i.unsubscribe(),this.loadEnrollment()},error:n=>{i.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:n.error.mensaje})}})}setTutor(e){this.closeAll();let i=this.practiseSrv.editTutor(this.currentEnrollment.practise,e).subscribe({next:()=>{i.unsubscribe(),this.loadEnrollment()},error:n=>{i.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:n.error.mensaje})}})}selectNewTutor(){var e;(null===(e=this.currentEnrollment.practise)||void 0===e?void 0:e.business)?this.selectTutor=!0:o().fire({icon:"error",title:"Oops...",text:"Indique primero la empresa"})}closeAll(){this.selectBusiness=!1,this.selectTutor=!1,this.selectTeacher=!1}ngAfterViewInit(){setTimeout(()=>{this.setRestantDays()},100)}ngOnInit(){var e,i;"ROLE_ADMIN"==(null===(i=null===(e=this.userSrv.getPerson())||void 0===e?void 0:e.rol)||void 0===i?void 0:i.toString())&&(this.isAdmin=!0),this.loadEnrollment()}loadEnrollment(){let i=this.practiseSrv.getEnrollment(this.rutaActiva.snapshot.params.idEnrollment).subscribe({next:n=>{i.unsubscribe(),this.currentEnrollment=n,this.getBusiness(this.currentEnrollment.practise.id),this.getTeacher(this.currentEnrollment.practise.id),this.getTutor(this.currentEnrollment.practise.id),this.setRestantDays()},error:n=>{i.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:n.error.mensaje})}})}getBusiness(e){let i=this.practiseSrv.getBusiness(e).subscribe({next:n=>{i.unsubscribe(),this.currentEnrollment.practise.business=n},error:n=>{i.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:n.error.mensaje})}})}getTeacher(e){let i=this.practiseSrv.getTeacher(e).subscribe({next:n=>{i.unsubscribe(),this.currentEnrollment.practise.teacher=n}})}getTutor(e){let i=this.practiseSrv.getTutor(e).subscribe({next:n=>{i.unsubscribe(),this.currentEnrollment.practise.laborTutor=n}})}back(){history.go(-1)}startPractise(){let i=this.practiseSrv.startPractise(this.rutaActiva.snapshot.params.idEnrollment).subscribe({next:n=>{i.unsubscribe(),this.loadEnrollment()},error:n=>{i.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:n.error.mensaje})}})}setDateStart(){o().fire({title:"Indique fecha de inicio",html:'<input type="date" id="start" class="swal2-input" placeholder="Fecha inicio">',confirmButtonText:"Establecer",focusConfirm:!1,preConfirm:()=>{let e=o().getPopup().querySelector("#start");0!=e.value.trim().length&&this.configureStart(e.value)}})}setDateEnd(){o().fire({title:"Indique fecha de fin",html:'<input type="date" id="end" class="swal2-input" placeholder="Fecha fin">',confirmButtonText:"Establecer",focusConfirm:!1,preConfirm:()=>{let e=o().getPopup().querySelector("#end");0!=e.value.trim().length&&this.configureEnd(e.value)}})}configureEnd(e){let n=this.practiseSrv.getEnrollment(this.rutaActiva.snapshot.params.idEnrollment).subscribe({next:s=>{n.unsubscribe();let a=s;a.practise.finish=new Date(e);let p=this.practiseSrv.updatePractise(a.practise).subscribe({next:d=>{p.unsubscribe(),this.loadEnrollment(),this.setRestantDays()},error:d=>{p.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:d.error.mensaje})}})},error:s=>{n.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:s.error.mensaje})}})}configureStart(e){let n=this.practiseSrv.getEnrollment(this.rutaActiva.snapshot.params.idEnrollment).subscribe({next:s=>{n.unsubscribe();let a=s;a.practise.start=new Date(e);let p=this.practiseSrv.updatePractise(a.practise).subscribe({next:d=>{p.unsubscribe(),this.loadEnrollment(),this.setRestantDays()},error:d=>{p.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:d.error.mensaje})}})},error:s=>{n.unsubscribe(),o().fire({icon:"error",title:"Oops...",text:s.error.mensaje})}})}setRestantDays(){let e=document.querySelector("#restant");e&&(e.innerText=this.calculateDiff())}calculateDiff(){var e;if((null===(e=this.currentEnrollment.practise)||void 0===e?void 0:e.start)&&this.currentEnrollment.practise.finish){let n=new Date(this.currentEnrollment.practise.finish).getTime()-(new Date).getTime();return n<0?"0":parseInt((n/864e5).toString()).toString()}return"0"}viewBusiness(){var e,i,n,s;null!=(null===(i=null===(e=this.currentEnrollment.practise)||void 0===e?void 0:e.business)||void 0===i?void 0:i.cif)&&this.route.navigateByUrl("/dashboard/business/search-business/edit/"+(null===(s=null===(n=this.currentEnrollment.practise)||void 0===n?void 0:n.business)||void 0===s?void 0:s.cif))}viewTeacher(){var e,i,n,s;null!=(null===(i=null===(e=this.currentEnrollment.practise)||void 0===e?void 0:e.teacher)||void 0===i?void 0:i.dni)&&this.route.navigateByUrl("/dashboard/person/management/"+(null===(s=null===(n=this.currentEnrollment.practise)||void 0===n?void 0:n.teacher)||void 0===s?void 0:s.dni)+"/edit")}viewTutor(){var e,i,n,s;null!=(null===(i=null===(e=this.currentEnrollment.practise)||void 0===e?void 0:e.laborTutor)||void 0===i?void 0:i.dni)&&this.route.navigateByUrl("/dashboard/person/management/"+(null===(s=null===(n=this.currentEnrollment.practise)||void 0===n?void 0:n.laborTutor)||void 0===s?void 0:s.dni)+"/edit")}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(b),t.Y36(m.gz),t.Y36(h.K),t.Y36(m.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-view-practise"]],decls:1,vars:1,consts:[["id","mainDiv","class","inNewIntro",4,"ngIf"],["id","mainDiv",1,"inNewIntro"],["id","title"],["id","degreesText",3,"click"],["id","rest",4,"ngIf"],["id","noPractise",4,"ngIf"],["id","practiseDiv",4,"ngIf"],["id","modal-zone",3,"click",4,"ngIf"],["id","rest"],["id","restant"],["id","noPractise"],["src","assets/img/business.png","id","businessImg"],[4,"ngIf"],[3,"click",4,"ngIf"],[3,"click"],["id","practiseDiv"],["id","text-practise"],["id","topElement",1,"element"],["src","assets/img/business.png",3,"click"],["class","editOption","src","assets/img/edit.png",4,"ngIf"],[1,"element"],["src","assets/img/teacherImg.png",3,"click"],[1,"element",3,"click"],["id","startDate",1,"dateZone"],["src","assets/img/edit.png",3,"click",4,"ngIf"],["id","endDate",1,"dateZone"],["src","assets/img/edit.png",1,"editOption"],["src","assets/img/edit.png",3,"click"],["id","modal-zone",3,"click"],["class","selectModal",3,"cif",4,"ngIf"],["class","selectModal",3,"dni",4,"ngIf"],["class","selectModal",3,"cif","dni",4,"ngIf"],[1,"selectModal",3,"cif"],[1,"selectModal",3,"dni"],[1,"selectModal",3,"cif","dni"]],template:function(e,i){1&e&&t.YNc(0,B,10,6,"div",0),2&e&&t.Q6J("ngIf",i.currentEnrollment)},directives:[_.O5,T.B,C.A,M],styles:["#mainDiv[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto}#title[_ngcontent-%COMP%]{margin-top:40px;height:10%;width:100%}#title[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{padding-left:4%}#title[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(1){font-size:20px;font-weight:600}#title[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(2){opacity:.7}#degreesText[_ngcontent-%COMP%]{opacity:.7}#noPractise[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;height:70%}#noPractise[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(2){font-size:20px}#noPractise[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(3){opacity:.7;max-width:315px;text-align:center;padding-top:5px}#businessImg[_ngcontent-%COMP%]{width:90%;max-width:186px}#noPractise[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{border:none;height:40px;margin-top:10px;width:120px}#practiseDiv[_ngcontent-%COMP%]{height:80%;position:relative;display:flex;flex-wrap:wrap;align-content:center;justify-content:center;align-items:flex-start}#text-practise[_ngcontent-%COMP%]{position:absolute;top:0px;font-size:20px;left:4%}#startDate[_ngcontent-%COMP%]{position:absolute;font-size:20px;bottom:2%;left:4%}#endDate[_ngcontent-%COMP%]{position:absolute;font-size:20px;bottom:2%;right:4%}.dateZone[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row}.dateZone[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:15px}.dateZone[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(2){font-size:initial;opacity:.7;margin-right:10px;margin-left:10px}.element[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;position:relative;top:-50px;justify-content:center;width:33.3%;align-items:center}.element[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:159px}.element[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){position:relative;top:20px}.element[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){position:relative;top:25px;opacity:.7}#restantes[_ngcontent-%COMP%]{position:absolute;right:4%}@media (max-width: 600px){#practiseDiv[_ngcontent-%COMP%]{flex-direction:column;flex-wrap:nowrap;align-content:center!important;align-items:center!important}.dateZone[_ngcontent-%COMP%]{padding-bottom:15px}.element[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){text-align:center}.element[_ngcontent-%COMP%]{margin-bottom:70px}#topElement[_ngcontent-%COMP%]{margin-top:569px}#startDate[_ngcontent-%COMP%], #endDate[_ngcontent-%COMP%]{position:initial}}#rest[_ngcontent-%COMP%]{position:absolute;top:61px;display:flex;right:4%;flex-direction:column;align-items:flex-end}#rest[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(1){font-size:25px}#rest[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(2){opacity:.7}.editOption[_ngcontent-%COMP%]{width:15px;margin-left:5px}#modal-zone[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;background-color:#00000072;justify-content:center;align-items:center;top:0}#modal-zone[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:461px;background-color:#fff;max-width:400px;width:90%;transition:1s;animation-name:introSlow;animation-duration:.2s}"]}),r})()}];let Y=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[m.Bz.forChild(F)],m.Bz]}),r})();var j=l(4466);let z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[_.ez,Y,j.m]]}),r})()}}]);