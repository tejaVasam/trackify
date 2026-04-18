import{a as O,c as z,d as N,g as P,j as R,k as B,l as G,m as V}from"./chunk-FYEFV225.js";import{Ac as $,Bc as Y,Da as m,Fb as D,Gb as F,Ib as d,Jb as M,Kb as L,Pa as p,Qa as A,Ra as f,Y as S,_ as I,a as w,aa as c,b as _,db as v,eb as h,hb as k,ib as E,jb as b,kb as i,lb as n,mb as y,nb as T,ob as j,qd as Z,ra as u,rc as H,td as q,ub as C,vb as x,wb as g,zc as X}from"./chunk-A6ZW7ZTA.js";var nt=["*"];var dt=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ot=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],ct=new I("MAT_CARD_CONFIG"),J=(()=>{class t{appearance;constructor(){let e=c(ct,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=p({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,o){a&2&&F("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:nt,decls:1,vars:0,template:function(a,o){a&1&&(x(),g(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),K=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=f({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Q=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=f({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),U=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=f({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var W=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=p({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ot,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,o){a&1&&(x(dt),g(0),T(1,"div",0),g(2,1),j(),g(3,2))},encapsulation:2,changeDetection:0})}return t})();var tt=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=A({type:t});static \u0275inj=S({imports:[X]})}return t})();var st=(t,r)=>r.id;function lt(t,r){if(t&1&&y(0,"canvas",9),t&2){let e=C();b("data",e.doughnutChartData)("type","doughnut")}}function pt(t,r){t&1&&(i(0,"div",10)(1,"mat-icon",18),d(2,"pie_chart"),n(),i(3,"span"),d(4,"No data available yet"),n()())}function gt(t,r){if(t&1&&y(0,"canvas",12),t&2){let e=C();b("data",e.lineChartData)("options",e.lineChartOptions)("type","line")}}function ut(t,r){t&1&&(i(0,"div",13)(1,"mat-icon",18),d(2,"show_chart"),n(),i(3,"span"),d(4,"Start tracking to see trends"),n()())}function ft(t,r){if(t&1&&(i(0,"div",19)(1,"mat-icon"),d(2),n(),i(3,"span",20),d(4),n()()),t&2){let e=r.$implicit;D("border-left-color",e.color),m(),D("color",e.color),m(),M(e.icon),m(2),M(e.name)}}var et=class t{route=c(O);router=c(z);categoryService=c(V);habitService=c(B);habitLogService=c(G);category=u(void 0);habits=u([]);logs=u([]);doughnutChartData={labels:[],datasets:[{data:[]}]};lineChartData={labels:[],datasets:[{data:[],label:"Daily Completions",fill:!0,tension:.4,borderColor:"#6366f1",backgroundColor:"rgba(99, 102, 241, 0.2)"}]};lineChartOptions={responsive:!0,scales:{y:{beginAtZero:!0,ticks:{stepSize:1}}}};async ngOnInit(){let r=Number(this.route.snapshot.paramMap.get("id"));if(isNaN(r)){this.router.navigate(["/categories"]);return}let a=(await this.categoryService.getCategories()).find(s=>s.id===r);if(!a){this.router.navigate(["/categories"]);return}this.category.set(a);let l=(await this.habitService.loadHabits()).filter(s=>s.category?.id===r);this.habits.set(l);let at=l.map(s=>s.id),rt=(await this.habitLogService.getAllLogs()).filter(s=>at.includes(s.habitId));this.logs.set(rt),this.prepareDoughnutChart(),this.prepareLineChart()}prepareDoughnutChart(){let r={};this.habits().forEach(e=>{r[e.name]=this.logs().filter(a=>a.habitId===e.id).length}),this.doughnutChartData={labels:Object.keys(r),datasets:[{data:Object.values(r),backgroundColor:this.habits().map(e=>e.color||"#6366f1")}]}}prepareLineChart(){let r=Array.from({length:14},(a,o)=>{let l=new Date;return l.setDate(l.getDate()-(13-o)),l.toISOString().split("T")[0]}),e=r.map(a=>this.logs().filter(o=>o.dateStr===a).length);this.lineChartData={labels:r.map(a=>a.split("-").slice(1).join("/")),datasets:[_(w({},this.lineChartData.datasets[0]),{data:e})]}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["t-category-details"]],decls:35,vars:3,consts:[[1,"p-16","df","fd-c","gap-8"],[1,"df","ai-c","gap-8"],["mat-icon-button","","routerLink","/categories"],[1,"df","fd-c"],[1,"m-0"],[1,"m-0","text-secondary"],[1,"grid-stats"],[1,"br-16","p-16","card-elevated"],[1,"df","jc-c","ai-c","mt-16",2,"height","300px"],["baseChart","",3,"data","type"],[1,"text-secondary","df","fd-c","ai-c","gap-8"],[1,"mt-16"],["baseChart","",3,"data","options","type"],[1,"text-secondary","df","fd-c","ai-c","jc-c","h-100","gap-8"],[1,"df","fd-c","flex-wrap","gap-8","mt-8"],[1,"m-0","px-8"],[1,"df","fw-w","gap-12","px-8"],[1,"df","ai-c","gap-8","p-12","br-12","b-1-solid","bg-surface","flex-wrap",2,"border-left-width","4px",3,"border-left-color"],[2,"font-size","48px","height","48px","width","48px"],[1,"df","ai-c","gap-8","p-12","br-12","b-1-solid","bg-surface","flex-wrap",2,"border-left-width","4px"],[1,"fw-500"]],template:function(e,a){if(e&1&&(i(0,"div",0)(1,"div",1)(2,"button",2)(3,"mat-icon"),d(4,"arrow_back"),n()(),i(5,"div",3)(6,"h2",4),d(7),n(),i(8,"p",5),d(9,"Insights and statistics for this category"),n()()(),i(10,"div",6)(11,"mat-card",7)(12,"mat-card-header")(13,"mat-card-title"),d(14,"Habit Distribution"),n(),i(15,"mat-card-subtitle"),d(16,"Completions per habit"),n()(),i(17,"mat-card-content",8),v(18,lt,1,2,"canvas",9)(19,pt,5,0,"div",10),n()(),i(20,"mat-card",7)(21,"mat-card-header")(22,"mat-card-title"),d(23,"Activity Trend"),n(),i(24,"mat-card-subtitle"),d(25,"Category completions (last 14 days)"),n()(),i(26,"mat-card-content",11),v(27,gt,1,3,"canvas",12)(28,ut,5,0,"div",13),n()()(),i(29,"div",14)(30,"h3",15),d(31,"Habits in this Category"),n(),i(32,"div",16),k(33,ft,5,6,"div",17,st),n()()()),e&2){let o;m(7),L("",(o=a.category())==null?null:o.name," Details"),m(11),h(a.habits().length>0&&a.logs().length>0?18:19),m(9),h(a.logs().length>0?27:28),m(6),E(a.habits())}},dependencies:[H,P,N,q,Z,Y,$,tt,J,Q,W,U,K,R],styles:[".grid-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}.card-elevated[_ngcontent-%COMP%]{background:var(--surface-container-low, #ffffff);box-shadow:0 4px 20px #0000000d;transition:transform .2s ease}.card-elevated[_ngcontent-%COMP%]:hover{transform:translateY(-4px)}.bg-surface[_ngcontent-%COMP%]{background:var(--surface-container, #f8f9fa)}@media(max-width:600px){.grid-stats[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};export{et as CategoryDetails};
