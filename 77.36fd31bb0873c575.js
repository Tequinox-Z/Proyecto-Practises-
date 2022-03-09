"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[77],{1077:(j,i,d)=>{d.r(i),d.d(i,{PersonsModule:()=>F});var l=d(9808),b=d(8118),p=d(7579),T=d(5226),c=d.n(T),t=d(1223),_=d(2340),s=d(520),C=d(5295),P=d(3630);let u=(()=>{class n{constructor(e,o,g){this.http=e,this.auth=o,this.centerService=g}getAll(e){return this.http.get(`${_.N.serverAddress}/school/${e}/administrator`,this.auth.getHeadersToken())}removeFromSchool(e){return this.http.delete(`${_.N.serverAddress}/school/${this.centerService.getIdSchool()}/administrator/${e}`,this.auth.getHeadersToken())}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(s.eN),t.LFG(C.e),t.LFG(P.w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var O=d(5415);function f(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t.TgZ(14,"i",6),t.NdJ("click",function(){const B=t.CHM(e).$implicit;return t.oxw().deleteAdmin(B.dni+"")}),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.lastName),t.xp6(2),t.Oqu(e.dni),t.xp6(2),t.Oqu(e.address),t.xp6(2),t.Oqu(e.telefone),t.xp6(2),t.Oqu(e.birthDate)}}let h=(()=>{class n{constructor(e,o){this.administrationService=e,this.centerService=o,this.administrators=[],this.dtOptions={},this.dtTrigger=new p.x}ngOnInit(){this.dtOptions={pagingType:"full_numbers",pageLength:2,responsive:!0,language:{url:"assets/es-ES.json"}},this.administrationService.getAll(this.centerService.getIdSchool()+"").subscribe({next:e=>{this.administrators=e,this.dtTrigger.next(this.dtOptions)},error:e=>{c().fire({icon:"error",title:"Oops...",text:null==e.error.mensaje?"Servidor no disponible":e.error.mensaje})}})}ngOnDestroy(){this.dtTrigger.unsubscribe()}deleteAdmin(e){c().fire({title:"Borrar",text:"Se eliminar\xe1 este administradror de esta escuela",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Borrar",cancelButtonText:"Cancelar"}).then(o=>{o.isConfirmed&&this.administrationService.removeFromSchool(e).subscribe({next:()=>{c().fire({position:"top-end",icon:"success",title:"Borrado",showConfirmButton:!1,timer:1500})},error:g=>{c().fire({icon:"error",title:"Oops...",text:null==g.error.mensaje?"Servidor no disponible":g.error.mensaje})}})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u),t.Y36(P.w))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-management-persons"]],decls:23,vars:3,consts:[[1,"title"],[1,"data"],["id","container-table"],["datatable","",3,"dtOptions","dtTrigger"],["scope","col"],[4,"ngFor","ngForOf"],["alt","Eliminar administrator",1,"fa-solid","fa-trash-can",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Administradores"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"table",3),t.TgZ(5,"thead"),t.TgZ(6,"tr"),t.TgZ(7,"th",4),t._uU(8,"Nombre"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Apellidos"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"Dni"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"Direcci\xf3n"),t.qZA(),t.TgZ(15,"th",4),t._uU(16,"Tel\xe9fono"),t.qZA(),t.TgZ(17,"th",4),t._uU(18,"Fecha de nacimiento"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Acciones"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"tbody"),t.YNc(22,f,15,6,"tr",5),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("dtOptions",o.dtOptions)("dtTrigger",o.dtTrigger),t.xp6(18),t.Q6J("ngForOf",o.administrators))},directives:[O.G,l.sg],styles:['h1[_ngcontent-%COMP%]{text-align:center}#container-table[_ngcontent-%COMP%]{padding:5%}th[_ngcontent-%COMP%]{color:#fff}#DataTables_Table_0_length[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{color:#fff!important}@media only screen and (max-width: 760px),(min-device-width: 768px) and (max-device-width: 1024px){table[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{display:block}table[_ngcontent-%COMP%]{padding:5%;border-radius:5px;background-color:#00000056!important}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{position:absolute;top:-9999px;left:-9999px}tr[_ngcontent-%COMP%]{background-color:transparent!important;margin-bottom:10px}td[_ngcontent-%COMP%]{color:#fff;border:none;position:relative;height:1em;padding-left:50%;text-align:end}td[_ngcontent-%COMP%]:before{position:absolute;top:6px;left:6px;width:45%;text-align:start;padding-right:10px;white-space:nowrap}td[_ngcontent-%COMP%]:nth-of-type(1):before{content:"First Name"}td[_ngcontent-%COMP%]:nth-of-type(2):before{content:"Last Name"}td[_ngcontent-%COMP%]:nth-of-type(3):before{content:"Job Title"}td[_ngcontent-%COMP%]:nth-of-type(4):before{content:"Favorite Color"}td[_ngcontent-%COMP%]:nth-of-type(5):before{content:"Wars of Trek?"}td[_ngcontent-%COMP%]:nth-of-type(6):before{content:"Porn Name"}td[_ngcontent-%COMP%]:nth-of-type(7):before{content:"Date of Birth"}td[_ngcontent-%COMP%]:nth-of-type(8):before{content:"Dream Vacation City"}td[_ngcontent-%COMP%]:nth-of-type(9):before{content:"GPA"}td[_ngcontent-%COMP%]:nth-of-type(10):before{content:"Arbitrary Data"}}table.dataTable[_ngcontent-%COMP%]   th.dt-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-left[_ngcontent-%COMP%]{text-align:left}table.dataTable[_ngcontent-%COMP%]   th.dt-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dataTables_empty[_ngcontent-%COMP%]{text-align:center}table.dataTable[_ngcontent-%COMP%]   th.dt-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-right[_ngcontent-%COMP%]{text-align:right}table.dataTable[_ngcontent-%COMP%]   th.dt-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-justify[_ngcontent-%COMP%]{text-align:justify}table.dataTable[_ngcontent-%COMP%]   th.dt-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-nowrap[_ngcontent-%COMP%]{white-space:nowrap}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-left[_ngcontent-%COMP%]{text-align:left}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-center[_ngcontent-%COMP%]{text-align:center}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-right[_ngcontent-%COMP%]{text-align:right}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-justify[_ngcontent-%COMP%]{text-align:justify}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-nowrap[_ngcontent-%COMP%]{white-space:nowrap}table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-left[_ngcontent-%COMP%]{text-align:left}table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-center[_ngcontent-%COMP%]{text-align:center}table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-right[_ngcontent-%COMP%]{text-align:right}table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-justify[_ngcontent-%COMP%]{text-align:justify}table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-nowrap[_ngcontent-%COMP%]{white-space:nowrap}table.dataTable[_ngcontent-%COMP%]   td.dt-control[_ngcontent-%COMP%]{text-align:center;cursor:pointer}table.dataTable[_ngcontent-%COMP%]   td.dt-control[_ngcontent-%COMP%]:before{height:1em;width:1em;margin-top:-9px;display:inline-block;color:#fff;border:.15em solid white;border-radius:1em;box-shadow:0 0 .2em #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:1em;content:"+";background-color:#31b131}table.dataTable[_ngcontent-%COMP%]   tr.dt-hasChild[_ngcontent-%COMP%]   td.dt-control[_ngcontent-%COMP%]:before{content:"-";background-color:#d33333}table.dataTable[_ngcontent-%COMP%]{width:100%;margin:0 auto;clear:both;border-collapse:separate;border-spacing:0}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 18px;border-bottom:1px solid #111111}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:active, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:active{outline:none}table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 18px 6px;border-top:1px solid #111111}table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc_disabled[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc_disabled[_ngcontent-%COMP%]{cursor:pointer;*cursor: hand;background-repeat:no-repeat;background-position:center right}table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#fff}table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]{background-color:#b0bed9}table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px 10px}table.dataTable.row-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.row-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:1px solid #dddddd}table.dataTable.row-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], table.dataTable.row-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]{border-top:none}table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:1px solid #dddddd;border-right:1px solid #dddddd}table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{border-left:1px solid #dddddd}table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]{border-top:none}table.dataTable.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%]{background-color:#f9f9f9}table.dataTable.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%]{background-color:#acbad4}table.dataTable.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f6f6f6}table.dataTable.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected, table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected{background-color:#aab7d1}table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%]{background-color:#fafafa}table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%]{background-color:#acbad5}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%]{background-color:#f1f1f1}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%]{background-color:#f3f3f3}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%]{background-color:#f5f5f5}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%]{background-color:#a6b4cd}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%]{background-color:#a8b5cf}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%]{background-color:#a9b7d1}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%]{background-color:#fafafa}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%]{background-color:#fcfcfc}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%]{background-color:#fefefe}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%] > .sorting_1[_ngcontent-%COMP%]{background-color:#acbad5}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%] > .sorting_2[_ngcontent-%COMP%]{background-color:#aebcd6}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%] > .sorting_3[_ngcontent-%COMP%]{background-color:#afbdd8}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover > .sorting_1[_ngcontent-%COMP%]{background-color:#eaeaea}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover > .sorting_2[_ngcontent-%COMP%]{background-color:#ececec}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover > .sorting_3[_ngcontent-%COMP%]{background-color:#efefef}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected > .sorting_1[_ngcontent-%COMP%]{background-color:#a2aec7}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected > .sorting_2[_ngcontent-%COMP%]{background-color:#a3b0c9}table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected > .sorting_3[_ngcontent-%COMP%]{background-color:#a5b2cb}table.dataTable.no-footer[_ngcontent-%COMP%]{border-bottom:1px solid #111111}table.dataTable.nowrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.nowrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{white-space:nowrap}table.dataTable.compact[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.compact[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:4px 17px}table.dataTable.compact[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.compact[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.dataTable.compact[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.compact[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:4px}table.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{box-sizing:content-box}.dataTables_wrapper[_ngcontent-%COMP%]{position:relative;clear:both}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%]{float:left}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #aaa;border-radius:3px;background-color:transparent;padding:4px}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]{float:right;text-align:right}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #aaa;border-radius:3px;padding:5px;background-color:transparent;margin-left:3px}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_info[_ngcontent-%COMP%]{clear:both;float:left;padding-top:.755em}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]{float:right;text-align:right;padding-top:.25em}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%]{box-sizing:border-box;display:inline-block;min-width:1.5em;padding:.5em 1em;margin-left:2px;text-align:center;text-decoration:none!important;cursor:pointer;*cursor: hand;color:#d62f2f!important;border:1px solid transparent;border-radius:2px}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.current[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.current[_ngcontent-%COMP%]:hover{color:#d62f2f!important;border:1px solid #979797;background-color:#fff;background:linear-gradient(to bottom,white 0%,#dcdcdc 100%)}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.disabled[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.disabled[_ngcontent-%COMP%]:hover, .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.disabled[_ngcontent-%COMP%]:active{cursor:default;color:#666!important;border:1px solid transparent;background:transparent;box-shadow:none}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%]:hover{color:#fff!important;border:1px solid #111111;background-color:#585858;background:linear-gradient(to bottom,#585858 0%,#111111 100%)}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%]:active{outline:none;background-color:#2b2b2b;background:linear-gradient(to bottom,#2b2b2b 0%,#0c0c0c 100%);box-shadow:inset 0 0 3px #111}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .ellipsis[_ngcontent-%COMP%]{padding:0 1em}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_processing[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:100%;height:40px;margin-left:-50%;margin-top:-25px;padding-top:20px;text-align:center;font-size:1.2em;background-color:#fff;background:linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,.9) 25%,rgba(255,255,255,.9) 75%,rgba(255,255,255,0) 100%)}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_info[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_processing[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]{color:#d62f2f}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]{clear:both}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]{*margin-top: -1px;-webkit-overflow-scrolling:touch}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{vertical-align:middle}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] > div.dataTables_sizing[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] > div.dataTables_sizing[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] > div.dataTables_sizing[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] > div.dataTables_sizing[_ngcontent-%COMP%]{height:0;overflow:hidden;margin:0!important;padding:0!important}.dataTables_wrapper.no-footer[_ngcontent-%COMP%]   .dataTables_scrollBody[_ngcontent-%COMP%]{border-bottom:1px solid #111111}.dataTables_wrapper.no-footer[_ngcontent-%COMP%]   div.dataTables_scrollHead[_ngcontent-%COMP%]   table.dataTable[_ngcontent-%COMP%], .dataTables_wrapper.no-footer[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] > table[_ngcontent-%COMP%]{border-bottom:none}.dataTables_wrapper[_ngcontent-%COMP%]:after{visibility:hidden;display:block;content:"";clear:both;height:0}@media screen and (max-width: 767px){.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_info[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]{float:none;text-align:center}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]{margin-top:.5em}}@media screen and (max-width: 640px){.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]{float:none;text-align:center}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]{margin-top:.5em}}#DataTables_Table_2[_ngcontent-%COMP%]{margin-top:5%}']}),n})();var a=d(2382),m=d(7206);let y=(()=>{class n{constructor(e,o){this.auth=e,this.http=o}createNewPerson(e){return e.password=m.MD5(e.password+"").toString(),this.http.post(_.N.serverAddress+"/auth/register",e,this.auth.getHeadersToken())}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.e),t.LFG(s.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function v(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"Indique el nombre del usuario"),t.qZA())}function Z(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"Indique la fecha de nacimiento"),t.qZA())}function x(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"Indique un dni v\xe1lido"),t.qZA())}function w(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"Indique los apellidos"),t.qZA())}function A(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"Indique un tel\xe9fono de 9 d\xedgitos"),t.qZA())}function q(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"Indique un correo v\xe1lido"),t.qZA())}function k(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"Indique una direcci\xf3n"),t.qZA())}function N(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"M\xednimo 8 car\xe1cteres"),t.qZA())}let U=(()=>{class n{constructor(e,o){this.formBuilder=e,this.personService=o}ngOnInit(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({name:["",{validators:[a.kI.required]}],birthDate:["",{validators:[a.kI.required]}],dni:["",{validators:[a.kI.required,a.kI.pattern("^[0-9]{8}[a-zA-Z]{1}$")]}],lastName:["",{validators:[a.kI.required]}],telefone:["",{validators:[a.kI.required,a.kI.pattern("^[0-9]{9}$")]}],email:["",{validators:[a.kI.required,a.kI.email]}],address:["",{validators:[a.kI.required]}],password:["",{validators:[a.kI.required,a.kI.minLength(8)]}],rol:["",{validators:[a.kI.required]}]})}send(){this.personService.createNewPerson(this.form.value).subscribe({next:e=>{c().fire("Usuario creado","Puede administrar el usuario en gestionar personas","success")},error:e=>{c().fire({icon:"error",title:"Oops...",text:null==e.error.mensaje?"Servidor no disponible":e.error.mensaje})}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-person"]],decls:54,vars:11,consts:[[1,"title"],[3,"formGroup","submit"],["for","name"],["type","text","id","name","formControlName","name"],[4,"ngIf"],["for","birthDate"],["type","date","id","birthDate","formControlName","birthDate"],["for","dni"],["type","text","id","dni","formControlName","dni"],["for","lastName"],["type","text","id","lastName","formControlName","lastName"],["for","telefone"],["type","tel","id","telefone","formControlName","telefone"],["for","email"],["type","email","id","email","formControlName","email"],["for","address"],["type","text","id","address","formControlName","address"],["for","password"],["type","password","id","password","formControlName","password"],["for","rol"],["name","rol","id","rol","formControlName","rol"],["value","ROLE_STUDENT",3,"defaultSelected"],["value","ROLE_TEACHER"],["value","ROLE_ADMIN"],["type","submit","value","Crear",3,"disabled"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Nueva persona"),t.qZA(),t.TgZ(2,"form",1),t.NdJ("submit",function(){return o.send()}),t.TgZ(3,"div"),t.TgZ(4,"label",2),t._uU(5,"Nombre"),t.qZA(),t._UZ(6,"input",3),t.YNc(7,v,2,0,"p",4),t.qZA(),t.TgZ(8,"div"),t.TgZ(9,"label",5),t._uU(10,"Fecha de nacimiento"),t.qZA(),t._UZ(11,"input",6),t.YNc(12,Z,2,0,"p",4),t.qZA(),t.TgZ(13,"div"),t.TgZ(14,"label",7),t._uU(15,"Dni"),t.qZA(),t._UZ(16,"input",8),t.YNc(17,x,2,0,"p",4),t.qZA(),t.TgZ(18,"div"),t.TgZ(19,"label",9),t._uU(20,"Apellidos"),t.qZA(),t._UZ(21,"input",10),t.YNc(22,w,2,0,"p",4),t.qZA(),t.TgZ(23,"div"),t.TgZ(24,"label",11),t._uU(25,"Tel\xe9fono"),t.qZA(),t._UZ(26,"input",12),t.YNc(27,A,2,0,"p",4),t.qZA(),t.TgZ(28,"div"),t.TgZ(29,"label",13),t._uU(30,"Correo"),t.qZA(),t._UZ(31,"input",14),t.YNc(32,q,2,0,"p",4),t.qZA(),t.TgZ(33,"div"),t.TgZ(34,"label",15),t._uU(35,"Direcci\xf3n"),t.qZA(),t._UZ(36,"input",16),t.YNc(37,k,2,0,"p",4),t.qZA(),t.TgZ(38,"div"),t.TgZ(39,"label",17),t._uU(40,"Contrase\xf1a"),t.qZA(),t._UZ(41,"input",18),t.YNc(42,N,2,0,"p",4),t.qZA(),t.TgZ(43,"div"),t.TgZ(44,"label",19),t._uU(45,"Rol"),t.qZA(),t.TgZ(46,"select",20),t.TgZ(47,"option",21),t._uU(48,"Estudiante"),t.qZA(),t.TgZ(49,"option",22),t._uU(50,"Profesor"),t.qZA(),t.TgZ(51,"option",23),t._uU(52,"Administrador"),t.qZA(),t.qZA(),t.qZA(),t._UZ(53,"input",24),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(5),t.Q6J("ngIf",o.form.controls.name.invalid&&o.form.controls.name.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.birthDate.invalid&&o.form.controls.birthDate.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.dni.invalid&&o.form.controls.dni.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.lastName.invalid&&o.form.controls.lastName.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.telefone.invalid&&o.form.controls.telefone.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.email.invalid&&o.form.controls.email.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.address.invalid&&o.form.controls.address.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.password.invalid&&o.form.controls.password.touched),t.xp6(5),t.Q6J("defaultSelected",!0),t.xp6(6),t.Q6J("disabled",o.form.invalid))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,l.O5,a.EJ,a.YN,a.Kr],styles:["label[_ngcontent-%COMP%]{color:#fff}"]}),n})();var M=d(9269);const I=[{path:"management-persons",component:h,canActivate:[M.e]},{path:"new-person",component:U,canActivate:[M.e]}];let S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[b.Bz.forChild(I)],b.Bz]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,S,a.UX,O.T]]}),n})()}}]);