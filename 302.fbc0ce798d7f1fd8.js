"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[302],{7302:(_,s,a)=>{a.r(s),a.d(s,{WelcomeModule:()=>m});var g=a(9808),r=a(5358),t=a(1223),l=a(5295);const d=[{path:"",component:(()=>{class o{constructor(e,n,i){this.auth=e,this.router=n,this.route=i}ngAfterViewInit(){this.scroll()}ngOnInit(){null!=this.auth.getToken()&&this.router.navigateByUrl("/")}toggleMenu(){let e=document.querySelector("#actions"),n=document.querySelector("#menu");e.classList.contains("noShowMenu")?(e.classList.remove("noShowMenu"),null==n||n.classList.add("invert","cross")):(null==n||n.classList.remove("invert","cross"),e.classList.add("noVisibility"),setTimeout(()=>{e.classList.add("noShowMenu"),e.classList.remove("noVisibility")},500))}scroll(){let e=window.pageYOffset,n=document.querySelector("#nav"),i=document.querySelectorAll(".section");e>=i[0].clientHeight&&e<=i[0].clientHeight+i[1].clientHeight||e>=i[0].clientHeight+i[1].clientHeight+i[2].clientHeight&&e<=i[0].clientHeight+i[1].clientHeight+i[2].clientHeight+i[3].clientHeight?(null==n||n.classList.add("section-white"),null==n||n.classList.add("blur")):(null==n||n.classList.remove("section-white"),null==n||n.classList.remove("blur"))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.e),t.Y36(r.F0),t.Y36(r.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-welcome"]],decls:94,vars:0,consts:[[3,"scroll"],["id","nav"],["id","menu","title","Men\xfa","alt","Men\xfa",3,"click"],[1,"line"],["id","logo","src","assets/img/logo.png"],["id","actions",1,"noShowMenu"],["alt","Acerca de","title","Acerca de"],[1,"fa-solid","fa-question"],["alt","Opciones de accesibilidad","title","Opciones de accesibilidad"],[1,"fa-solid","fa-universal-access"],["alt","Iniciar sesi\xf3n","title","Iniciar sesi\xf3n","routerLink","../auth/"],[1,"fa-solid","fa-arrow-right-to-bracket"],["id","menu-text"],["id","welcome",1,"section"],["id","text-welcome",1,"horizontal"],[1,"shadow"],["id","orange"],[1,"subt","shadow"],[1,"horizontal"],[1,"container"],["id","cube"],[1,"back"],[1,"left"],[1,"bottom"],[1,"front"],[1,"right"],[1,"top"],["id","center-section",1,"section"],[1,"text-h3"],["id","dashboard-img","src","assets/img/dashboard.png",1,"max-width"],["id","security-section",1,"section"],[1,"aditional-text"],["id","rol-section",1,"section"],["id","functions-section",1,"section"],["id","text-info"],[1,"fa-solid","fa-arrow-right-to-city"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.NdJ("scroll",function(){return n.scroll()},!1,t.Jf7),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.NdJ("click",function(){return n.toggleMenu()}),t._UZ(3,"div",3),t._UZ(4,"div",3),t._UZ(5,"div",3),t.qZA(),t._UZ(6,"img",4),t.TgZ(7,"div",5),t.TgZ(8,"a",6),t._UZ(9,"i",7),t._uU(10," Acerca de "),t.qZA(),t.TgZ(11,"a",8),t._UZ(12,"i",9),t._uU(13," Opciones de accesibilidad "),t.qZA(),t.TgZ(14,"a",10),t._UZ(15,"i",11),t._uU(16," Iniciar sesi\xf3n "),t.qZA(),t.TgZ(17,"h3",12),t._uU(18,"Men\xfa"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",13),t.TgZ(20,"div",14),t.TgZ(21,"div"),t.TgZ(22,"h1",15),t._uU(23,"Practises "),t.TgZ(24,"span",16),t._uU(25,"Management"),t.qZA(),t.qZA(),t.TgZ(26,"p",17),t._uU(27,"Tu gestor de pr\xe1cticas y de tu centro"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"div",18),t.TgZ(29,"div",19),t.TgZ(30,"div",20),t._UZ(31,"figure",21),t._UZ(32,"figure",22),t._UZ(33,"figure",23),t._UZ(34,"figure",24),t._UZ(35,"figure",25),t._UZ(36,"figure",26),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",27),t.TgZ(38,"div"),t.TgZ(39,"div"),t.TgZ(40,"h1"),t._uU(41,"\xbfQu\xe9 es Practises Management?"),t.qZA(),t.qZA(),t.TgZ(42,"h3",28),t.TgZ(43,"strong"),t._uU(44,"Practises Management"),t.qZA(),t._uU(45," es una aplicaci\xf3n disponible para PC, Android e IOS que te permite gestionar tu centro y las pr\xe1cticas relacionadas con los ciclos de Formaci\xf3n Profesional."),t.qZA(),t.qZA(),t._UZ(46,"img",29),t.qZA(),t.TgZ(47,"div",30),t.TgZ(48,"p",31),t._uU(49,"* S\xf3lo disponible para administradores"),t.qZA(),t.qZA(),t._UZ(50,"div",32),t.TgZ(51,"div",33),t.TgZ(52,"div"),t.TgZ(53,"div"),t.TgZ(54,"h1"),t._uU(55,"Funciones"),t.qZA(),t.qZA(),t.TgZ(56,"h3"),t.TgZ(57,"strong"),t._uU(58,"Practises Management"),t.qZA(),t._uU(59," es una aplicaci\xf3n disponible para PC, Android e IOS que te permite gestionar tu centro y las pr\xe1cticas relacionadas con los ciclos de Formaci\xf3n Profesional"),t.qZA(),t.qZA(),t.TgZ(60,"ul",34),t.TgZ(61,"li"),t.TgZ(62,"h3"),t._UZ(63,"i",35),t._uU(64," Ejemplo "),t.qZA(),t.TgZ(65,"p"),t._uU(66,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, beatae pariatur perspiciatis rem alias sed rerum neque quos laboriosam."),t.qZA(),t.qZA(),t.TgZ(67,"li"),t.TgZ(68,"h3"),t._UZ(69,"i",35),t._uU(70," Ejemplo "),t.qZA(),t.TgZ(71,"p"),t._uU(72,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, beatae pariatur perspiciatis rem alias sed rerum neque quos laboriosam."),t.qZA(),t.qZA(),t.TgZ(73,"li"),t.TgZ(74,"h3"),t._UZ(75,"i",35),t._uU(76," Ejemplo "),t.qZA(),t.TgZ(77,"p"),t._uU(78,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, beatae pariatur perspiciatis rem alias sed rerum neque quos laboriosam."),t.qZA(),t.qZA(),t.TgZ(79,"li"),t.TgZ(80,"h3"),t._UZ(81,"i",35),t._uU(82," Ejemplo "),t.qZA(),t.TgZ(83,"p"),t._uU(84,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, beatae pariatur perspiciatis rem alias sed rerum neque quos laboriosam."),t.qZA(),t.qZA(),t.TgZ(85,"li"),t.TgZ(86,"h3"),t._UZ(87,"i",35),t._uU(88," Ejemplo "),t.qZA(),t.TgZ(89,"p"),t._uU(90,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, saepe inventore error aspernatur expedita quia possimus accusantium consequuntur commodi qui beatae pariatur perspiciatis rem alias sed rerum neque quos laboriosam."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(91,"p",31),t._uU(92,"* S\xf3lo disponible para administradores"),t.qZA(),t.qZA(),t._UZ(93,"footer"),t.qZA())},directives:[r.yS],styles:['.section[_ngcontent-%COMP%]{min-height:100vh;display:flex;transition:.5s;flex-direction:column;align-content:center;justify-content:center;align-items:center;width:100%;position:relative}.scale-animated[_ngcontent-%COMP%]{transform:perspective(10px) translateZ(1px)}.invert[_ngcontent-%COMP%]{filter:invert(0)!important}#nav[_ngcontent-%COMP%]{transition:.5s;position:fixed;perspective:1000px;width:100%;top:0;z-index:10;height:80px}#logo[_ngcontent-%COMP%]{width:2em;position:fixed;top:32.2%;left:3%;transition:.5s}#menu[_ngcontent-%COMP%]{display:none}.horizontal[_ngcontent-%COMP%]{width:50%!important}#welcome[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS!important}#welcome[_ngcontent-%COMP%]{display:flex;background-image:url(background-welcome.599a7c314c24b681.png);background-position:center center;background-repeat:no-repeat;background-size:cover;flex-direction:row;flex-wrap:nowrap;align-content:center;justify-content:center;box-shadow:2px 2px 10px #000;align-items:center;z-index:1;box-shadow:0 -1px 20px #000}.shadow[_ngcontent-%COMP%]{text-shadow:1px 1px 3px black}#text-welcome[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#fff;margin-bottom:2%}#text-welcome[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.max-width[_ngcontent-%COMP%]{max-width:1500px}#text-welcome[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-bottom:2%}#text-welcome[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#fff}#go-button[_ngcontent-%COMP%]{font-size:1em;width:150px;background-color:orange;border:none;height:40px;margin-top:5px;transition:1s}#go-button[_ngcontent-%COMP%]:hover{background-color:#ffb52b}#welcome[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > #text-welcome[_ngcontent-%COMP%]{align-content:center;grid-gap:5%;gap:5%;left:10%;display:grid;align-items:center;z-index:20}#center-section[_ngcontent-%COMP%], #functions-section[_ngcontent-%COMP%]{text-align:center;padding-bottom:60px;background-color:#fff}#security-section[_ngcontent-%COMP%], #functions-section[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(to right,rgb(0,0,0),rgb(61,61,61))}.section-white[_ngcontent-%COMP%]{background-color:#ffffff8c!important}.section-white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-shadow:none!important;color:#000!important}.section-white[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%], .section-white[_ngcontent-%COMP%]   #menu[_ngcontent-%COMP%]{filter:invert()}footer[_ngcontent-%COMP%]{width:100%;height:200px;background-color:#4b4b4b;box-shadow:-2px -2px 10px #000;z-index:10}.aditional-text[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:4%;color:gray}.subt[_ngcontent-%COMP%]{color:#ffffffe3!important}#city[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}#actions[_ngcontent-%COMP%]{transition:1s;animation-name:in;animation-duration:.4s;color:#fff;position:absolute;top:9px;padding:20px;right:10px}.noVisibility[_ngcontent-%COMP%]{opacity:0;transform:translateY(-202px) rotateX(-60deg)}#menu-text[_ngcontent-%COMP%]{display:none}@keyframes in{0%{opacity:0;transform:rotateX(308deg) translateY(-202px)}to{opacity:1;transform:rotateX(360deg)}}#actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:5px}#cube[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;position:absolute}#cube[_ngcontent-%COMP%]{width:90%;height:90%;animation-name:cube;animation-delay:.5s;animation-duration:30s;animation-iteration-count:infinite}.container[_ngcontent-%COMP%]{width:230px;height:230px;margin:50px auto;position:relative}#cube[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{background:radial-gradient(rgba(202,202,202,.795),rgba(189,189,189,.453),transparent,transparent);animation-name:wave;animation-duration:3s;animation-iteration-count:infinite}@keyframes wave{0%{opacity:1}50%{opacity:0}to{opacity:1}}.container[_ngcontent-%COMP%]{perspective:400px}#cube[_ngcontent-%COMP%]{transform-style:preserve-3d}#cube[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{transform:rotateX(0)}#cube[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{transform:rotateY(60deg)}#cube[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{transform:rotateX(60deg)}#cube[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{transform:rotateX(0) translateZ(-105px);background-size:90%;background-repeat:no-repeat;width:100%;background-image:url(business.a640cdd95e665b81.png);background-position:center center}#cube[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{transform:rotateY(90deg) translateZ(-105px);background-size:90%;background-repeat:no-repeat;width:100%;background-image:url(school.b0df1079ee882a0c.png);background-position:center center}#cube[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{transform:rotateX(90deg) translateZ(-105px)}#cube[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{background-size:90%;background-repeat:no-repeat;width:100%;background-image:url(students.6939e31fe4c5da29.png);background-position:center center;transform:rotateX(0) translateZ(105px)}#cube[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background-size:90%;background-repeat:no-repeat;width:100%;background-image:url(connect.62036273bb4d9295.png);background-position:center center;transform:rotateY(90deg) translateZ(105px)}#cube[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{transform:rotateX(90deg) translateZ(105px)}#dashboard-img[_ngcontent-%COMP%]{box-shadow:0 7px 10px #7e7e7e;width:70%}#orange[_ngcontent-%COMP%]{color:orange}#actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px;color:orange}a[_ngcontent-%COMP%]{color:#fff!important}@media (max-width: 650px){#actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{background:linear-gradient(to right,transparent,rgb(0 0 0 / 95%),black);padding:2px;z-index:-1;position:absolute;right:0%;width:100px;height:100%;content:""}#dashboard-img[_ngcontent-%COMP%]{width:90%!important}.text-h3[_ngcontent-%COMP%]{text-align:justify;color:#000!important;font-weight:200!important;padding-left:7%;padding-right:7%}#menu[_ngcontent-%COMP%]:hover > .line[_ngcontent-%COMP%]:nth-child(1){transform:translate(10px)}#menu[_ngcontent-%COMP%]:hover > .line[_ngcontent-%COMP%]:nth-child(2){animation-name:loop;animation-duration:1s;transition:5s;animation-iteration-count:infinite}@keyframes loop{0%{transform:rotateY(0)}50%{transform:rotateY(90deg)}to{transform:rotateY(0)}}#menu[_ngcontent-%COMP%]:hover > .line[_ngcontent-%COMP%]:nth-child(3){transform:translate(-10px)}.cross[_ngcontent-%COMP%] > .line[_ngcontent-%COMP%]:nth-child(1){transform:translate3d(0,8px,10px) rotate(-45deg)}.cross[_ngcontent-%COMP%] > .line[_ngcontent-%COMP%]:nth-child(2){transform:rotateY(90deg)}.cross[_ngcontent-%COMP%] > .line[_ngcontent-%COMP%]:nth-child(3){transform:translate3d(0,-8px,10px) rotate(45deg)}.cross[_ngcontent-%COMP%]:hover > .line[_ngcontent-%COMP%]:nth-child(1){transform:translate3d(0,8px,10px) rotate(45deg)!important}.cross[_ngcontent-%COMP%]:hover > .line[_ngcontent-%COMP%]:nth-child(2){display:none!important}.cross[_ngcontent-%COMP%]:hover > .line[_ngcontent-%COMP%]:nth-child(3){transform:translate3d(0,-8px,10px) rotate(132deg)!important}#menu-text[_ngcontent-%COMP%]{display:initial;position:absolute;left:13.5%;top:25%;font-size:1.6em}.line[_ngcontent-%COMP%]{width:100%;transition:.5s;height:2px;position:relative;background-color:#fff}#menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;justify-content:space-between;width:24px;height:18px;position:absolute;top:27.3%;z-index:20;right:5%}#actions[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);height:100%;position:fixed;height:100vh;top:0;transition:.5s;right:0;background-color:#000000f2;display:flex;flex-direction:column-reverse;margin:0;align-items:flex-end;gap:0px;justify-content:center}#actions[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff!important;text-align:start;position:relative;letter-spacing:1px;transition:.5s;padding:3% 4%;width:100%;left:7%;transition:1s}#actions[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;right:12%}#actions[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:660px 1px orange}#logo[_ngcontent-%COMP%]{width:30px;display:inline-block;position:absolute;top:22.5%;left:5%}#menu[_ngcontent-%COMP%], #logo[_ngcontent-%COMP%]{margin-top:5px}#nav[_ngcontent-%COMP%]{text-align:center;height:70px}#actions[_ngcontent-%COMP%]{position:relative}#welcome[_ngcontent-%COMP%]{flex-direction:column-reverse}#text-welcome[_ngcontent-%COMP%]{text-align:center;width:100%!important}#cube[_ngcontent-%COMP%]{transform:translate(9px)}#welcome[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%!important}h1[_ngcontent-%COMP%]{font-size:1.3em!important;font-weight:400}#text-welcome[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:90%!important}#text-info[_ngcontent-%COMP%]{width:90%;text-align:left;max-width:530px}}@media (min-width:650px) and (max-width: 900px){#text-welcome[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:10%}}.noShowMenu[_ngcontent-%COMP%]{display:none!important}@media (min-width:650px){.noShowMenu[_ngcontent-%COMP%]{display:initial!important}}h1[_ngcontent-%COMP%]{font-size:2.2em!important}#text-info[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;max-width:1110px;margin:auto;padding-left:0;padding-bottom:70px!important;outline:none}#text-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:auto;list-style:none;line-height:1.8;text-align:left;width:370px;text-align:justify;padding:20px 0 0}li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#367bf0}li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:100}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%;color:#a2a2a2}#center-section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], #functions-section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{text-align:center;display:flex;align-items:center;flex-direction:column}#center-section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #functions-section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;max-width:800px;font-weight:100}.section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:30px}.section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-bottom:50px}@keyframes cube{0%{transform:rotateY(0)}to{transform:rotateY(360deg)}}#cube[_ngcontent-%COMP%]{margin-left:10px}.blur[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important}']}),o})()}];let p=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(d)],r.Bz]}),o})();var u=a(4466);let m=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,p,u.m]]}),o})()}}]);