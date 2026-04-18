import{a as Ls,b as Ns,c as $t,d as $i,e as Vs,f as Bs,g as Yt,h as zs,i as Hs,j as pi,k as Ze,l as ct,m as Xt,n as ui}from"./chunk-7BD5GMI2.js";import{$a as ws,$b as Qt,$c as Xs,A as ls,Aa as gs,Ab as ce,Ac as ke,B as Ie,Bb as M,Bc as ge,C as mi,Ca as _s,Cb as E,Cc as Gs,D as he,Db as Ds,Dc as Ws,E as Ro,Ea as bs,Eb as Ss,Ec as ea,Fa as h,Fb as Bo,Fc as vn,Gb as Pe,Gc as Nt,H as Yn,Ha as Te,Hb as te,Hc as _e,I as He,Ia as Je,Ib as D,Ic as it,J as Po,Ja as St,Jb as ot,Jc as dt,Ka as ve,Kb as m,Kc as yt,La as we,Lb as O,Lc as Us,Mb as $,Mc as yn,Na as lt,Nb as Jn,Nc as qs,O as Oo,Oa as No,Ob as Pi,Oc as Qs,P as Ao,Pb as Oi,Pc as ta,Q as cs,Qb as Ai,Qc as ia,R as Ee,Ra as b,Rb as G,Rc as na,S as _t,Sa as j,Sb as Ms,Sc as aa,T as Z,Ta as C,Tb as bt,Tc as oa,U as ds,Ua as vs,Ub as vt,Uc as ra,V as ms,Va as ys,Vb as zo,Vc as Oe,W as At,Wa as U,Wc as $s,X as hs,Xa as qe,Xb as qt,Xc as sa,Y as je,Ya as xs,Yb as ie,Yc as le,Z as oe,Zc as Ys,_ as H,_a as Zn,_b as Lt,_c as jo,a as Q,aa as S,ab as ks,ac as fe,ad as Yi,b as Fe,ba as Fo,bc as bn,bd as la,ca as c,cb as Ri,cc as Es,cd as Xi,da as ps,db as Cs,dc as Ts,dd as Go,ea as us,eb as N,ec as ne,ed as Wo,f as be,fa as Xn,fb as w,fc as T,fd as Zs,gb as k,gc as tt,gd as pe,h as gt,ha as V,hb as Vo,hc as Is,hd as Ne,i as y,ia as B,ib as Ft,ic as Rs,id as Ae,j as Eo,ja as Ut,jb as re,jd as Ks,k as To,ka as Lo,kb as se,kc as Ho,kd as Uo,l as Io,la as X,lb as x,ld as Vt,m as Ui,ma as ye,mb as s,md as mt,n as os,nb as l,nd as nt,o as qi,ob as I,oc as Ps,od as fi,pa as R,pb as We,pd as Qe,qa as W,qb as et,qc as Os,qd as me,rb as hi,rc as As,s as Ge,sa as fs,sb as q,sc as De,ta as v,tb as Xe,ua as Ti,ub as f,uc as Fs,va as xe,vb as Kn,wa as de,wb as g,wc as Le,x as Qi,xb as ee,xc as js,y as rs,ya as A,yb as F,yc as Ce,z as ss,za as Ii,zb as Re,zc as K}from"./chunk-7OMFCP3D.js";var ca=class a{percentage=fe.required();chartData=ie(()=>{let i=this.percentage();return{datasets:[{data:[i,100-i],backgroundColor:["#10b981","rgba(255, 255, 255, 0.1)"],borderWidth:0,circumference:360,rotation:0,cutout:"85%",borderRadius:i>0?10:0}]}});chartOptions={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},cutout:"85%"};static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["app-progress-chart"]],inputs:{percentage:[1,"percentage"]},decls:8,vars:4,consts:[[1,"progress-container"],[1,"chart-wrapper"],["baseChart","",3,"data","options","type"],[1,"df","fd-c","ai-c","position-absolute","chart-labels"],[1,"fs-22","fw-800","label-value"],[1,"fs-10","fw-600","uppercase","ls-1","label-text"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1),I(2,"canvas",2),l(),s(3,"div",3)(4,"span",4),m(5),l(),s(6,"span",5),m(7,"Today"),l()()()),e&2&&(h(2),x("data",t.chartData())("options",t.chartOptions)("type","doughnut"),h(3),$("",t.percentage(),"%"))},dependencies:[pi],styles:[".progress-container[_ngcontent-%COMP%]{position:relative;width:100px;height:100px;min-width:100px;display:flex;align-items:center;justify-content:center}.chart-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.chart-labels[_ngcontent-%COMP%]{pointer-events:none;color:#fff}.label-text[_ngcontent-%COMP%]{opacity:.6}.df[_ngcontent-%COMP%]{display:flex}.fd-c[_ngcontent-%COMP%]{flex-direction:column}.ai-c[_ngcontent-%COMP%]{align-items:center}.position-absolute[_ngcontent-%COMP%]{position:absolute}.fs-22[_ngcontent-%COMP%]{font-size:22px}.fw-800[_ngcontent-%COMP%]{font-weight:800}.fs-10[_ngcontent-%COMP%]{font-size:10px}.fw-600[_ngcontent-%COMP%]{font-weight:600}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.ls-1[_ngcontent-%COMP%]{letter-spacing:1px}"]})};var ti=(n=>(n[n.Daily=0]="Daily",n[n.Weekly=1]="Weekly",n[n.Monthly=2]="Monthly",n[n.Custom=3]="Custom",n))(ti||{});var Jd=(a,i)=>i.dateLabel,em=(a,i)=>i.habitId,tm=(a,i)=>i.dateStr;function im(a,i){a&1&&(s(0,"div",51)(1,"div",52)(2,"div",3)(3,"span",53),m(4,"First Step: Create a Category"),l(),s(5,"span",54),m(6,"Categories like 'Health' or 'Work' help you stay organized."),l()(),s(7,"button",55),m(8," Setup Categories "),l()()())}function nm(a,i){if(a&1&&(s(0,"div",1)(1,"div",46)(2,"div",47)(3,"mat-icon",48),m(4,"celebration"),l()(),s(5,"div",3)(6,"h2",49),m(7),l(),s(8,"p",50),m(9,"Ready to build some life-changing habits?"),l()()(),w(10,im,9,0,"div",51),l()),a&2){let e,t=g();h(7),$("Welcome to Trackify, ",(e=t.activeUser())==null?null:e.name,"!"),h(3),k(t.stats().noCategories?10:-1)}}function am(a,i){if(a&1&&(s(0,"div",33)(1,"span",56),m(2),l()()),a&2){let e=i.$implicit;h(2),O(e.dateLabel)}}function om(a,i){a&1&&(s(0,"div",60)(1,"mat-icon",63),m(2,"check"),l()())}function rm(a,i){a&1&&(s(0,"div",61)(1,"mat-icon",64),m(2,"close"),l()())}function sm(a,i){a&1&&I(0,"div",62)}function lm(a,i){if(a&1){let e=q();s(0,"div",33)(1,"div",59),f("click",function(){let n=V(e).$implicit,o=g().$implicit,r=g();return B(r.toggleGridHabit(o.habitId,n.dateStr))}),w(2,om,3,0,"div",60)(3,rm,3,0,"div",61)(4,sm,1,0,"div",62),l()()}if(a&2){let e=i.$implicit;h(2),k(e.status==="completed"?2:e.status==="missed"?3:4)}}function cm(a,i){if(a&1&&(s(0,"div",34)(1,"div",57)(2,"span",58),m(3),l()(),re(4,lm,5,1,"div",33,tm),l()),a&2){let e=i.$implicit;h(3),O(e.name),h(),se(e.days)}}function dm(a,i){if(a&1&&(s(0,"span",44),m(1),l()),a&2){let e=g();h(),$(" ",e.stats().missedHabits.join(", ")," ")}}function mm(a,i){a&1&&(s(0,"span",45),m(1,"Perfect Day in progress!"),l())}var da=class a{habitService=c(ct);habitLogService=c(Xt);categoryService=c(ui);stats=v({todayCompletedCount:0,todayTotalCount:0,todayPercentage:0,platformStreak:0,platformBestStreak:0,completionRate7Days:0,totalHabits:0,topHabitName:"No Data",topHabitScore:0,missedHabits:[],showWelcome:!1,noCategories:!1});weeklyGraph=v([]);weeklyMatrix=v([]);activeUser=v(null);chartDataConfiguration=ie(()=>{let i=this.weeklyGraph();return{labels:i.map(e=>e.dateLabel),datasets:[{data:i.map(e=>e.count),label:"Completions",backgroundColor:"#3b82f6",borderRadius:6,barPercentage:.6}]}});chartOptions=ie(()=>{let i=Math.max(...this.weeklyGraph().map(e=>e.count),5);return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:i+1,ticks:{stepSize:1,precision:0}}}}});async ngOnInit(){let i=await Ze.users.orderBy("id").first();i&&this.activeUser.set(i),await this.calculateMetrics()}getLocalFormattedDate(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}async calculateMetrics(){let i=await this.habitService.loadHabits(),e=await this.categoryService.getCategories(),t=await this.habitLogService.getAllLogs(),n=new Date,o=new Date(n).setHours(0,0,0,0),r=864e5,d=this.getLocalFormattedDate(n),p=n.getDay(),u={0:6,1:0,2:1,3:2,4:3,5:4,6:5},_=u[p],P=i.filter(Y=>Y.frequency===0?!0:Y.days&&Array.isArray(Y.days)&&Y.days.length>0?Y.days.includes(_):!1),z=t.filter(Y=>Y.dateStr===d),J=new Set(z.map(Y=>Y.habitId)),ue=0,ae=[];for(let Y of P)J.has(Y.id)?ue++:ae.push(Y.name);let Se=P.length,ci=Se===0?0:Math.round(ue/Se*100),Me=Array.from(new Set(t.map(Y=>Y.dateStr))).sort().reverse().map(Y=>{let[ze,Ye,di]=Y.split("-");return Math.floor(new Date(Number(ze),Number(Ye)-1,Number(di)).getTime()/r)}),Ei=0,Gi=0;if(Me.length>0){let Y=1;Ei=1;for(let Ye=0;Ye<Me.length-1;Ye++)Me[Ye]-Me[Ye+1]===1?(Y++,Y>Ei&&(Ei=Y)):Y=1;let ze=Math.floor(o/r);if(Me[0]===ze||Me[0]===ze-1){Gi=1;for(let Ye=0;Ye<Me.length-1&&Me[Ye]-Me[Ye+1]===1;Ye++)Gi++}}let Wi=[],es=new Map,ts=0;for(let Y=6;Y>=0;Y--){let ze=new Date(o-Y*r),Ye=this.getLocalFormattedDate(ze),di=ze.toLocaleDateString("en-US",{weekday:"short"});Wi.push({dateLabel:di,count:0,percentage:0}),es.set(Ye,6-Y)}let Qd=Wi.map((Y,ze)=>this.getLocalFormattedDate(new Date(o-(6-ze)*r))),$d=i.map(Y=>({habitId:Y.id,name:Y.name,days:Qd.map(ze=>{let di=!!t.find($n=>$n.habitId===Y.id&&$n.dateStr===ze),as=di?"completed":"pending";if(!di&&ze<d){let $n=new Date(ze),Kd=u[$n.getDay()];(Y.frequency===0||Y.days&&Y.days.includes(Kd))&&(as="missed")}return{dateStr:ze,status:as}})}));this.weeklyMatrix.set($d);let Yd=this.getLocalFormattedDate(new Date(o-6*r)),So={};for(let Y of t)if(So[Y.habitId]=(So[Y.habitId]||0)+1,Y.dateStr>=Yd){ts++;let ze=es.get(Y.dateStr);ze!==void 0&&Wi[ze].count++}let Xd=Math.max(...Wi.map(Y=>Y.count),1);for(let Y of Wi)Y.percentage=Y.count/Xd*100;let is=i.length*7,Zd=is===0?0:Math.round(ts/is*100),ns="No Data",Mo=0;for(let[Y,ze]of Object.entries(So))if(ze>Mo){Mo=ze;let Ye=i.find(di=>di.id===Number(Y));Ye&&(ns=Ye.name)}this.weeklyGraph.set(Wi),this.stats.set({todayCompletedCount:ue,todayTotalCount:Se,todayPercentage:ci,platformStreak:Gi,platformBestStreak:Ei,completionRate7Days:Zd,totalHabits:i.length,topHabitName:ns,topHabitScore:Mo,missedHabits:ae,showWelcome:i.length===0,noCategories:e.length===0})}async toggleGridHabit(i,e){await this.habitLogService.toggleCompletion(i,e),await this.calculateMetrics()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-dashboard"]],decls:79,vars:11,consts:[[1,"p-24","df","fd-c","gap-6","font-inter",2,"background-color","var(--background-default)","min-height","100vh"],[1,"w-100","br-24","p-24","mb-16","animate-fade-in",2,"background","linear-gradient(135deg, #10b981, #059669)","color","#fff","box-shadow","0 10px 20px rgba(16, 185, 129, 0.2)"],[1,"df","fd-r","jc-sb","ai-c"],[1,"df","fd-c","gap-1"],[1,"m-0","fs-28","fw-700","text-primary"],[1,"m-0","fs-14","fw-500",2,"color","#6b7280"],[1,"df","fd-r","jc-s","w-100"],[3,"percentage"],[1,"df","fd-c","gap-2"],[1,"df","fd-c","gap-4","p-20","br-16","bg-white","flex-1",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","jc-sb","ai-c","gap-2"],[1,"fs-14","fw-700","uppercase","ls-1",2,"color","#94a3b8"],[1,"br-pill","px-8","py-4","df","ai-c","gap-1",2,"background-color","#fff7ed","color","#ea580c"],[2,"font-size","14px","width","14px","height","14px"],[1,"fs-11","fw-700"],[1,"df","fd-r","gap-2","ai-fe"],[1,"fs-28","fw-800",2,"line-height","1"],[1,"fs-13","fw-500","mb-1"],[1,"fs-14","fw-700","uppercase","ls-1"],[2,"color","#10b981","font-size","18px"],[1,"bg-white","br-16","w-100","p-8",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box","margin-bottom","8px"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4","mb-16"],[1,"m-0","fs-18","fw-700",2,"color","var(--text-primary)"],[1,"fs-12","fw-600","text-secondary","ls-1","ml-auto"],[1,"w-100","position-relative",2,"height","180px"],["baseChart","","type","bar",3,"data","options"],[1,"bg-white","p-24","br-16","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4","mb-20"],[1,"m-0","fs-18","fw-700"],[1,"overflow-x-auto","w-100","hide-scrollbar"],[1,"df","fd-c","gap-4",2,"min-width","450px"],[1,"df","fd-r","ai-c","py-4",2,"border-bottom","2px solid #f1f5f9"],[2,"flex","2","padding-right","12px"],[1,"df","jc-c",2,"flex","1"],[1,"df","fd-r","ai-c","py-12",2,"border-bottom","1px solid #f8fafc"],[1,"df","fd-r","flex-wrap","gap-4","w-100","pb-24"],[1,"bg-white","br-16","p-20","flex-1","df","fd-r","ai-c","gap-4",2,"min-width","250px","box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","ai-c","jc-c","br-pill","text-white",2,"width","44px","height","44px","background-color","#f59e0b","min-width","44px"],[2,"font-size","20px","height","20px","width","20px"],[1,"df","fd-c","overflow-hidden"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-15","fw-700","truncate"],[1,"ml-auto","fs-16","fw-800",2,"color","#f59e0b"],[1,"df","ai-c","jc-c","br-pill","text-white",2,"width","44px","height","44px","background-color","#ef4444","min-width","44px"],[1,"fs-14","fw-600","truncate"],[1,"fs-14","fw-600"],[1,"df","fd-r","ai-c","gap-4"],[1,"df","ai-c","jc-c","br-pill","bg-white",2,"width","56px","height","56px","min-width","56px"],[2,"color","#10b981","font-size","32px","width","32px","height","32px"],[1,"m-0","fs-22","fw-800"],[1,"m-0","fs-14","fw-500",2,"opacity","0.9"],[1,"mt-20","p-16","br-16",2,"background-color","rgba(255,255,255,0.15)","border","1px solid rgba(255,255,255,0.2)"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4"],[1,"fs-15","fw-700"],[1,"fs-13","fw-500",2,"opacity","0.8"],["routerLink","/categories","mat-flat-button","",1,"br-12","fw-700","px-20",2,"background-color","#fff","color","#059669"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1",2,"opacity","0.6"],[1,"df","fd-r","ai-c","gap-3","overflow-hidden",2,"flex","2","padding-right","12px"],[1,"fs-13","fw-600","truncate","text-primary"],[1,"df","ai-c","jc-c","cursor-pointer","transition-all",2,"width","28px","height","28px","border-radius","50%","border","2px solid transparent",3,"click"],[1,"df","ai-c","jc-c","br-pill","bg-success",2,"width","20px","height","20px","background-color","#10b981"],[1,"df","ai-c","jc-c","br-pill",2,"width","20px","height","20px","background-color","#fee2e2"],[1,"br-pill",2,"width","16px","height","16px","border","2px solid #e2e8f0","background-color","#fff"],[2,"font-size","14px","width","14px","height","14px","color","#fff"],[2,"font-size","14px","width","14px","height","14px","color","#ef4444"]],template:function(e,t){e&1&&(s(0,"div",0),w(1,nm,11,2,"div",1),s(2,"div",2)(3,"div",3)(4,"h1",4),m(5),l(),s(6,"p",5),m(7,"See your progress and stay motivated"),l()()(),s(8,"div",6),I(9,"app-progress-chart",7),s(10,"div",8)(11,"div",9)(12,"div",10)(13,"span",11),m(14,"Streak"),l(),s(15,"div",12)(16,"mat-icon",13),m(17,"local_fire_department"),l(),s(18,"span",14),m(19),l()()(),s(20,"div",15)(21,"span",16),m(22),l(),s(23,"span",17),m(24,"days total"),l()()(),s(25,"div",9)(26,"div",10)(27,"span",18),m(28,"Consistency"),l(),s(29,"mat-icon",19),m(30,"insights"),l()(),s(31,"div",15)(32,"span",16),m(33),l(),s(34,"span",17),m(35,"7 day avg"),l()()()()(),s(36,"div",20)(37,"div",21)(38,"h2",22),m(39,"Activity Volume"),l(),s(40,"span",23),m(41,"PAST 7 DAYS"),l()(),s(42,"div",24),I(43,"canvas",25),l()(),s(44,"div",26)(45,"div",27)(46,"h2",28),m(47,"Weekly Tracker"),l(),s(48,"span",23),m(49,"PAST 7 DAYS"),l()(),s(50,"div",29)(51,"div",30)(52,"div",31),I(53,"div",32),re(54,am,3,1,"div",33,Jd),l(),re(56,cm,6,1,"div",34,em),l()()(),s(58,"div",35)(59,"div",36)(60,"div",37)(61,"mat-icon",38),m(62,"military_tech"),l()(),s(63,"div",39)(64,"span",40),m(65,"Record Habit"),l(),s(66,"span",41),m(67),l()(),s(68,"span",42),m(69),l()(),s(70,"div",36)(71,"div",43)(72,"mat-icon",38),m(73,"error_outline"),l()(),s(74,"div",39)(75,"span",40),m(76,"Pending Today"),l(),w(77,dm,2,1,"span",44)(78,mm,2,0,"span",45),l()()()()),e&2&&(h(),k(t.stats().showWelcome?1:-1),h(4),$(" ",t.activeUser()?"Hello, "+t.activeUser().name+"!":"Your Dashboard"," "),h(4),x("percentage",t.stats().todayPercentage),h(10),$("",t.stats().platformStreak,"d"),h(3),O(t.stats().platformStreak),h(11),$("",t.stats().completionRate7Days,"%"),h(10),x("data",t.chartDataConfiguration())("options",t.chartOptions()),h(11),se(t.weeklyGraph()),h(2),se(t.weeklyMatrix()),h(11),O(t.stats().topHabitName),h(2),$("",t.stats().topHabitScore,"x"),h(8),k(t.stats().missedHabits.length>0?77:78))},dependencies:[ge,ke,Yt,$i,pi,ca],encapsulation:2})};var pm=20,Bt=(()=>{class a{_ngZone=c(W);_platform=c(_e);_renderer=c(St).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=pm){return this._platform.isBrowser?new gt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(Ro(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):qi()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(he(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let n=dt(t),o=e.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),wt=(()=>{class a{elementRef=c(A);scrollDispatcher=c(Bt);ngZone=c(W);dir=c(Ce,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=c(ve);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=n?e.end:e.start),e.right==null&&(e.right=n?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&Xi()!=Yi.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Xi()==Yi.INVERTED?e.left=e.right:Xi()==Yi.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;la()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",n="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let r=this.dir&&this.dir.value=="rtl";return e=="start"?e=r?n:t:e=="end"&&(e=r?t:n),r&&Xi()==Yi.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:r&&Xi()==Yi.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return a})(),um=20,rt=(()=>{class a{_platform=c(_e);_listeners;_viewportSize=null;_change=new y;_document=c(ye);constructor(){let e=c(W),t=c(St).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[t.listen("window","resize",n),t.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect(),r=-o.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,d=-o.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0;return{top:r,left:d}}change(e=um){return e>0?this._change.pipe(Ro(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Mt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({})}return a})(),qo=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[K,Mt,K,Mt]})}return a})();var wn=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},zt=class extends wn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,n,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=o||null}},ht=class extends wn{templateRef;viewContainerRef;context;injector;constructor(i,e,t,n){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Qo=class extends wn{element;constructor(i){super(),this.element=i instanceof A?i.nativeElement:i}},gi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof zt)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof ht)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Qo)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ma=class extends gi{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,n=t.get(No,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=i.injector||this._defaultInjector||X.NULL,o=n.get(Xn,t.injector);e=Rs(i.component,{elementInjector:n,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},tl=(()=>{class a extends ht{constructor(){let e=c(Je),t=c(lt);super(e,t)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[U]})}return a})(),kt=(()=>{class a extends gi{_moduleRef=c(No,{optional:!0});_document=c(ye);_viewContainerRef=c(lt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new R;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[U]})}return a})(),Ht=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({})}return a})();var il=la();function Ji(a){return new ha(a.get(rt),a.get(ye))}var ha=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=Ne(-this._previousScrollPosition.left),i.style.top=Ne(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,n=e.style,o=t.scrollBehavior||"",r=n.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),il&&(t.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),il&&(t.scrollBehavior=o,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function cl(a,i){return new pa(a.get(Bt),a.get(W),a.get(rt),i)}var pa=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,n){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(he(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var kn=class{enable(){}disable(){}attach(){}};function $o(a,i){return i.some(e=>{let t=a.bottom<e.top,n=a.top>e.bottom,o=a.right<e.left,r=a.left>e.right;return t||n||o||r})}function nl(a,i){return i.some(e=>{let t=a.top<e.top,n=a.bottom>e.bottom,o=a.left<e.left,r=a.right>e.right;return t||n||o||r})}function Li(a,i){return new ua(a.get(Bt),a.get(rt),a.get(W),i)}var ua=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,n){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();$o(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},dl=(()=>{class a{_injector=c(X);constructor(){}noop=()=>new kn;close=e=>cl(this._injector,e);block=()=>Ji(this._injector);reposition=e=>Li(this._injector,e);static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),ii=class{positionStrategy;scrollStrategy=new kn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var fa=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var ml=(()=>{class a{_attachedOverlays=[];_document=c(ye);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),hl=(()=>{class a extends ml{_ngZone=c(W);_renderer=c(St).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let o=t[n];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),pl=(()=>{class a extends ml{_platform=c(_e);_ngZone=c(W);_renderer=c(St).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,n),o.listen(t,"click",this._clickListener,n),o.listen(t,"auxclick",this._clickListener,n),o.listen(t,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Nt(e)};_clickListener=e=>{let t=Nt(e),n=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let d=o[r],p=d._outsidePointerEvents;if(!(!d.hasAttached()||!this.canReceiveEvent(d,e,p))){if(al(d.overlayElement,t)||al(d.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>p.next(e)):p.next(e)}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function al(a,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===a)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ul=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return a})(),ba=(()=>{class a{_platform=c(_e);_containerElement;_document=c(ye);_styleLoader=c(Le);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Go()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<n.length;o++)n[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Go()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ul)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Yo=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,n){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Xo(a){return a&&a.nodeType===1}var Zi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=be.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(i,e,t,n,o,r,d,p,u,_=!1,P,z){this._portalOutlet=i,this._host=e,this._pane=t,this._config=n,this._ngZone=o,this._keyboardDispatcher=r,this._document=d,this._location=p,this._outsideClickDispatcher=u,this._animationsDisabled=_,this._injector=P,this._renderer=z,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Te(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=Q(Q({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Fe(Q({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Ne(this._config.width),i.height=Ne(this._config.height),i.minWidth=Ne(this._config.minWidth),i.minHeight=Ne(this._config.minHeight),i.maxWidth=Ne(this._config.maxWidth),i.maxHeight=Ne(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Xo(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Yo(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let n=yn(e||[]).filter(o=>!!o);n.length&&(t?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Te(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},ol="cdk-overlay-connected-position-bounding-box",fm=/([A-Za-z%]+)$/;function Cn(a,i){return new ga(i,a.get(rt),a.get(ye),a.get(_e),a.get(ba))}var ga=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=be.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,n,o){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(ol),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,o=[],r;for(let d of this._preferredPositions){let p=this._getOriginPoint(i,n,d),u=this._getOverlayPoint(p,e,d),_=this._getOverlayFit(u,e,t,d);if(_.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(d,p);return}if(this._canFitWithFlexibleDimensions(_,u,t)){o.push({position:d,origin:p,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(p,d)});continue}(!r||r.overlayFit.visibleArea<_.visibleArea)&&(r={overlayFit:_,overlayPoint:u,originPoint:p,position:d,overlayRect:e})}if(o.length){let d=null,p=-1;for(let u of o){let _=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);_>p&&(p=_,d=u)}this._isPushed=!1,this._applyPosition(d.position,d.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Fi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ol),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof A?this._origin.nativeElement:Xo(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let n;if(t.originX=="center")n=i.left+i.width/2;else{let r=this._isRtl()?i.right:i.left,d=this._isRtl()?i.left:i.right;n=t.originX=="start"?r:d}e.left<0&&(n-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:n,y:o}}_getOverlayPoint(i,e,t){let n;t.overlayX=="center"?n=-e.width/2:t.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+n,y:i.y+o}}_getOverlayFit(i,e,t,n){let o=sl(e),{x:r,y:d}=i,p=this._getOffset(n,"x"),u=this._getOffset(n,"y");p&&(r+=p),u&&(d+=u);let _=0-r,P=r+o.width-t.width,z=0-d,J=d+o.height-t.height,ue=this._subtractOverflows(o.width,_,P),ae=this._subtractOverflows(o.height,z,J),Se=ue*ae;return{visibleArea:Se,isCompletelyWithinViewport:o.width*o.height===Se,fitsInViewportVertically:ae===o.height,fitsInViewportHorizontally:ue==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,o=t.right-e.x,r=rl(this._overlayRef.getConfig().minHeight),d=rl(this._overlayRef.getConfig().minWidth),p=i.fitsInViewportVertically||r!=null&&r<=n,u=i.fitsInViewportHorizontally||d!=null&&d<=o;return p&&u}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=sl(e),o=this._viewportRect,r=Math.max(i.x+n.width-o.width,0),d=Math.max(i.y+n.height-o.height,0),p=Math.max(o.top-t.top-i.y,0),u=Math.max(o.left-t.left-i.x,0),_=0,P=0;return n.width<=o.width?_=u||-r:_=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,n.height<=o.height?P=p||-d:P=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:_,y:P},{x:i.x+_,y:i.y+P}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!gm(this._lastScrollVisibility,t)){let n=new fa(i,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,n=this._isRtl(),o,r,d;if(e.overlayY==="top")r=i.y,o=t.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")d=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-d+this._getViewportMarginTop();else{let J=Math.min(t.bottom-i.y+t.top,i.y),ue=this._lastBoundingBoxSize.height;o=J*2,r=i.y-J,o>ue&&!this._isInitialRender&&!this._growAfterOpen&&(r=i.y-ue/2)}let p=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,u=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,_,P,z;if(u)z=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),_=i.x-this._getViewportMarginStart();else if(p)P=i.x,_=t.right-i.x-this._getViewportMarginEnd();else{let J=Math.min(t.right-i.x+t.left,i.x),ue=this._lastBoundingBoxSize.width;_=J*2,P=i.x-J,_>ue&&!this._isInitialRender&&!this._growAfterOpen&&(P=i.x-ue/2)}return{top:r,left:P,bottom:d,right:z,width:_,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;n.width=Ne(t.width),n.height=Ne(t.height),n.top=Ne(t.top)||"auto",n.bottom=Ne(t.bottom)||"auto",n.left=Ne(t.left)||"auto",n.right=Ne(t.right)||"auto",e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(n.maxHeight=Ne(o)),r&&(n.maxWidth=Ne(r))}this._lastBoundingBoxSize=t,Fi(this._boundingBox.style,n)}_resetBoundingBoxStyles(){Fi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Fi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},n=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(n){let _=this._viewportRuler.getViewportScrollPosition();Fi(t,this._getExactOverlayY(e,i,_)),Fi(t,this._getExactOverlayX(e,i,_))}else t.position="static";let d="",p=this._getOffset(e,"x"),u=this._getOffset(e,"y");p&&(d+=`translateX(${p}px) `),u&&(d+=`translateY(${u}px)`),t.transform=d.trim(),r.maxHeight&&(n?t.maxHeight=Ne(r.maxHeight):o&&(t.maxHeight="")),r.maxWidth&&(n?t.maxWidth=Ne(r.maxWidth):o&&(t.maxWidth="")),Fi(this._pane.style,t)}_getExactOverlayY(i,e,t){let n={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;n.bottom=`${r-(o.y+this._overlayRect.height)}px`}else n.top=Ne(o.y);return n}_getExactOverlayX(i,e,t){let n={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let r;if(this._isRtl()?r=i.overlayX==="end"?"left":"right":r=i.overlayX==="end"?"right":"left",r==="right"){let d=this._document.documentElement.clientWidth;n.right=`${d-(o.x+this._overlayRect.width)}px`}else n.left=Ne(o.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:nl(i,t),isOriginOutsideView:$o(i,t),isOverlayClipped:nl(e,t),isOverlayOutsideView:$o(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,n)=>t-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&yn(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof A)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Fi(a,i){for(let e in i)i.hasOwnProperty(e)&&(a[e]=i[e]);return a}function rl(a){if(typeof a!="number"&&a!=null){let[i,e]=a.split(fm);return!e||e==="px"?parseFloat(i):null}return a||null}function sl(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}function gm(a,i){return a===i?!0:a.isOriginClipped===i.isOriginClipped&&a.isOriginOutsideView===i.isOriginOutsideView&&a.isOverlayClipped===i.isOverlayClipped&&a.isOverlayOutsideView===i.isOverlayOutsideView}var ll="cdk-global-overlay-wrapper";function _i(a){return new _a}var _a=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ll),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:n,height:o,maxWidth:r,maxHeight:d}=t,p=(n==="100%"||n==="100vw")&&(!r||r==="100%"||r==="100vw"),u=(o==="100%"||o==="100vh")&&(!d||d==="100%"||d==="100vh"),_=this._xPosition,P=this._xOffset,z=this._overlayRef.getConfig().direction==="rtl",J="",ue="",ae="";p?ae="flex-start":_==="center"?(ae="center",z?ue=P:J=P):z?_==="left"||_==="end"?(ae="flex-end",J=P):(_==="right"||_==="start")&&(ae="flex-start",ue=P):_==="left"||_==="start"?(ae="flex-start",J=P):(_==="right"||_==="end")&&(ae="flex-end",ue=P),i.position=this._cssPosition,i.marginLeft=p?"0":J,i.marginTop=u?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=p?"0":ue,e.justifyContent=ae,e.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ll),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},fl=(()=>{class a{_injector=c(X);constructor(){}global(){return _i()}flexibleConnectedTo(e){return Cn(this._injector,e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Dn=new S("OVERLAY_DEFAULT_CONFIG");function ai(a,i){a.get(Le).load(ul);let e=a.get(ba),t=a.get(ye),n=a.get(le),o=a.get(Ri),r=a.get(Ce),d=a.get(ve,null,{optional:!0})||a.get(St).createRenderer(null,null),p=new ii(i),u=a.get(Dn,null,{optional:!0})?.usePopover??!0;p.direction=p.direction||r.value,"showPopover"in t.body?p.usePopover=i?.usePopover??u:p.usePopover=!1;let _=t.createElement("div"),P=t.createElement("div");_.id=n.getId("cdk-overlay-"),_.classList.add("cdk-overlay-pane"),P.appendChild(_),p.usePopover&&(P.setAttribute("popover","manual"),P.classList.add("cdk-overlay-popover"));let z=p.usePopover?p.positionStrategy?.getPopoverInsertionPoint?.():null;return Xo(z)?z.after(P):z?.type==="parent"?z.element.appendChild(P):e.getContainerElement().appendChild(P),new Zi(new ma(_,o,a),P,_,p,a.get(W),a.get(hl),t,a.get(Ps),a.get(pl),i?.disableAnimations??a.get(gs,null,{optional:!0})==="NoopAnimations",a.get(Xn),d)}var gl=(()=>{class a{scrollStrategies=c(dl);_positionBuilder=c(fl);_injector=c(X);constructor(){}create(e){return ai(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),_m=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],bm=new S("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let a=c(X);return()=>Li(a)}}),Ki=(()=>{class a{elementRef=c(A);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return a})(),_l=new S("cdk-connected-overlay-default-config"),va=(()=>{class a{_dir=c(Ce,{optional:!0});_injector=c(X);_overlayRef;_templatePortal;_backdropSubscription=be.EMPTY;_attachSubscription=be.EMPTY;_detachSubscription=be.EMPTY;_positionSubscription=be.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(bm);_ngZone=c(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new R;positionChange=new R;attach=new R;detach=new R;overlayKeydown=new R;overlayOutsideClick=new R;constructor(){let e=c(Je),t=c(lt),n=c(_l,{optional:!0}),o=c(Dn,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ht(e,t),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=_m);let e=this._overlayRef=ai(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Oe(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let n=this._getOriginElement(),o=Nt(t);(!n||n!==o&&!n.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new ii({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Cn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ki?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ki?this.origin.elementRef.nativeElement:this.origin instanceof A?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ds(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",T],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",T],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",T],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",T],push:[2,"cdkConnectedOverlayPush","push",T],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",T],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",T],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[xe]})}return a})(),jt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({providers:[gl],imports:[K,Ht,qo,qo]})}return a})();function vm(a,i){}var bi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Ko=(()=>{class a extends gi{_elementRef=c(A);_focusTrapFactory=c(aa);_config;_interactivityChecker=c(na);_ngZone=c(W);_focusMonitor=c(yt);_renderer=c(ve);_changeDetectorRef=c(ne);_injector=c(X);_platform=c(_e);_document=c(ye);_portalOutlet;_focusTrapped=new y;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(bi,{optional:!0})||new bi,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),r(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),r=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Te(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=vn(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=vn();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=vn()))}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&ce(kt,7),t&2){let o;M(o=E())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&N("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[U],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&qe(0,vm,0,0,"ng-template",0)},dependencies:[kt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return a})(),Sn=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new y;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Oe(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},ym=new S("DialogScrollStrategy",{providedIn:"root",factory:()=>{let a=c(X);return()=>Ji(a)}}),xm=new S("DialogData"),wm=new S("DefaultDialogConfig");function km(a){let i=v(a),e=new R;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Jo=(()=>{class a{_injector=c(X);_defaultOptions=c(wm,{optional:!0});_parentDialog=c(a,{optional:!0,skipSelf:!0});_overlayContainer=c(ba);_idGenerator=c(le);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;_ariaHiddenElements=new Map;_scrollStrategy=c(ym);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Qi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ee(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new bi;t=Q(Q({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),r=ai(this._injector,o),d=new Sn(r,t),p=this._attachContainer(r,d,t);if(d.containerInstance=p,!this.openDialogs.length){let u=this._overlayContainer.getContainerElement();p._focusTrapped?p._focusTrapped.pipe(He(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(u)}):this._hideNonDialogContentFromAssistiveTechnology(u)}return this._attachDialogContent(e,d,p,t),this.openDialogs.push(d),d.closed.subscribe(()=>this._removeOpenDialog(d,!0)),this.afterOpened.next(d),d}closeAll(){Zo(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Zo(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Zo(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new ii({positionStrategy:e.positionStrategy||_i().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let o=n.injector||n.viewContainerRef?.injector,r=[{provide:bi,useValue:n},{provide:Sn,useValue:t},{provide:Zi,useValue:e}],d;n.container?typeof n.container=="function"?d=n.container:(d=n.container.type,r.push(...n.container.providers(n))):d=Ko;let p=new zt(d,n.viewContainerRef,X.create({parent:o||this._injector,providers:r}));return e.attach(p).instance}_attachDialogContent(e,t,n,o){if(e instanceof Je){let r=this._createInjector(o,t,n,void 0),d={$implicit:o.data,dialogRef:t};o.templateContext&&(d=Q(Q({},d),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new ht(e,null,d,r))}else{let r=this._createInjector(o,t,n,this._injector),d=n.attachComponentPortal(new zt(e,o.viewContainerRef,r));t.componentRef=d,t.componentInstance=d.instance}}_createInjector(e,t,n,o){let r=e.injector||e.viewContainerRef?.injector,d=[{provide:xm,useValue:e.data},{provide:Sn,useValue:t}];return e.providers&&(typeof e.providers=="function"?d.push(...e.providers(t,e,n)):d.push(...e.providers)),e.direction&&(!r||!r.get(Ce,null,{optional:!0}))&&d.push({provide:Ce,useValue:km(e.direction)}),X.create({parent:r||o,providers:d})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute("aria-hidden",o):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let o=t[n];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Zo(a,i){let e=a.length;for(;e--;)i(a[e])}var bl=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({providers:[Jo],imports:[jt,Ht,ra,Ht]})}return a})();function Cm(a,i){}var xa=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},er="mdc-dialog--open",vl="mdc-dialog--opening",yl="mdc-dialog--closing",Dm=150,Sm=75,Mm=(()=>{class a extends Ko{_animationStateChanged=new R;_animationsEnabled=!pe();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?wl(this._config.enterAnimationDuration)??Dm:0;_exitAnimationDuration=this._animationsEnabled?wl(this._config.exitAnimationDuration)??Sm:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(xl,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(vl,er)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(er),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(er),this._animationsEnabled?(this._hostElement.style.setProperty(xl,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(yl)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(vl,yl)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275cmp=b({type:a,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(Xe("id",n._config.id),N("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),D("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[U],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(s(0,"div",0)(1,"div",1),qe(2,Cm,0,0,"ng-template",2),l()())},dependencies:[kt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return a})(),xl="--mat-dialog-transition-duration";function wl(a){return a==null?null:typeof a=="number"?a:a.endsWith("ms")?it(a.substring(0,a.length-2)):a.endsWith("s")?it(a.substring(0,a.length-1))*1e3:a==="0"?0:null}var ya=(function(a){return a[a.OPEN=0]="OPEN",a[a.CLOSING=1]="CLOSING",a[a.CLOSED=2]="CLOSED",a})(ya||{}),oi=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new To(1);_beforeClosed=new To(1);_result;_closeFallbackTimeout;_state=ya.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(he(n=>n.state==="opened"),He(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(he(n=>n.state==="closed"),He(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ie(this.backdropClick(),this.keydownEvents().pipe(he(n=>n.keyCode===27&&!this.disableClose&&!Oe(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),kl(this,n.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(he(t=>t.state==="closing"),He(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=ya.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=ya.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function kl(a,i,e){return a._closeInteractionType=i,a.close(e)}var ri=new S("MatMdcDialogData"),Em=new S("mat-mdc-dialog-default-options"),Tm=new S("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let a=c(X);return()=>Ji(a)}}),Ct=(()=>{class a{_defaultOptions=c(Em,{optional:!0});_scrollStrategy=c(Tm);_parentDialog=c(a,{optional:!0,skipSelf:!0});_idGenerator=c(le);_injector=c(X);_dialog=c(Jo);_animationsDisabled=pe();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;dialogConfigClass=xa;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Qi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ee(void 0)));constructor(){this._dialogRefConstructor=oi,this._dialogContainerType=Mm,this._dialogDataToken=ri}open(e,t){let n;t=Q(Q({},this._defaultOptions||new xa),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Fe(Q({},t),{positionStrategy:_i(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:bi,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(r,d,p)=>(n=new this._dialogRefConstructor(r,t,p),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:d.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(n);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),wa=(()=>{class a{dialogRef=c(oi,{optional:!0});_elementRef=c(A);_dialog=c(Ct);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=El(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){kl(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&f("click",function(r){return n._onButtonClick(r)}),t&2&&N("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[xe]})}return a})(),Cl=(()=>{class a{_dialogRef=c(oi,{optional:!0});_elementRef=c(A);_dialog=c(Ct);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=El(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a})}return a})(),Dl=(()=>{class a extends Cl{id=c(le).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&Xe("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[U]})}return a})(),Sl=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[ys([wt])]})}return a})(),Ml=(()=>{class a extends Cl{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&D("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[U]})}return a})();function El(a,i){let e=a.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var $e=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({providers:[Ct],imports:[bl,jt,Ht,K]})}return a})();var Vl=(()=>{class a{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||a)(we(ve),we(A))};static \u0275dir=C({type:a})}return a})(),Bl=(()=>{class a extends Vl{static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,features:[U]})}return a})(),pt=new S("");var Im={provide:pt,useExisting:je(()=>ut),multi:!0};function Rm(){let a=Ho()?Ho().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var Pm=new S(""),ut=(()=>{class a extends Vl{_compositionMode;_composing=!1;constructor(e,t,n){super(e,t),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!Rm())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||a)(we(ve),we(A),we(Pm,8))};static \u0275dir=C({type:a,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,n){t&1&&f("input",function(r){return n._handleInput(r.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(r){return n._compositionEnd(r.target.value)})},standalone:!1,features:[G([Im]),U]})}return a})();function ar(a){return a==null||or(a)===0}function or(a){return a==null?null:Array.isArray(a)||typeof a=="string"?a.length:a instanceof Set?a.size:null}var Et=new S(""),Oa=new S(""),Om=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ue=class{static min(i){return zl(i)}static max(i){return Hl(i)}static required(i){return jl(i)}static requiredTrue(i){return Am(i)}static email(i){return Fm(i)}static minLength(i){return Lm(i)}static maxLength(i){return Gl(i)}static pattern(i){return Nm(i)}static nullValidator(i){return Ca()}static compose(i){return Yl(i)}static composeAsync(i){return Xl(i)}};function zl(a){return i=>{if(i.value==null||a==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<a?{min:{min:a,actual:i.value}}:null}}function Hl(a){return i=>{if(i.value==null||a==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>a?{max:{max:a,actual:i.value}}:null}}function jl(a){return ar(a.value)?{required:!0}:null}function Am(a){return a.value===!0?null:{required:!0}}function Fm(a){return ar(a.value)||Om.test(a.value)?null:{email:!0}}function Lm(a){return i=>{let e=i.value?.length??or(i.value);return e===null||e===0?null:e<a?{minlength:{requiredLength:a,actualLength:e}}:null}}function Gl(a){return i=>{let e=i.value?.length??or(i.value);return e!==null&&e>a?{maxlength:{requiredLength:a,actualLength:e}}:null}}function Nm(a){if(!a)return Ca;let i,e;return typeof a=="string"?(e="",a.charAt(0)!=="^"&&(e+="^"),e+=a,a.charAt(a.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=a.toString(),i=a),t=>{if(ar(t.value))return null;let n=t.value;return i.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function Ca(a){return null}function Wl(a){return a!=null}function Ul(a){return ws(a)?os(a):a}function ql(a){let i={};return a.forEach(e=>{i=e!=null?Q(Q({},i),e):i}),Object.keys(i).length===0?null:i}function Ql(a,i){return i.map(e=>e(a))}function Vm(a){return!a.validate}function $l(a){return a.map(i=>Vm(i)?i:e=>i.validate(e))}function Yl(a){if(!a)return null;let i=a.filter(Wl);return i.length==0?null:function(e){return ql(Ql(e,i))}}function rr(a){return a!=null?Yl($l(a)):null}function Xl(a){if(!a)return null;let i=a.filter(Wl);return i.length==0?null:function(e){let t=Ql(e,i).map(Ul);return rs(t).pipe(Ge(ql))}}function sr(a){return a!=null?Xl($l(a)):null}function Il(a,i){return a===null?[i]:Array.isArray(a)?[...a,i]:[a,i]}function Zl(a){return a._rawValidators}function Kl(a){return a._rawAsyncValidators}function tr(a){return a?Array.isArray(a)?a:[a]:[]}function Da(a,i){return Array.isArray(a)?a.includes(i):a===i}function Rl(a,i){let e=tr(i);return tr(a).forEach(n=>{Da(e,n)||e.push(n)}),e}function Pl(a,i){return tr(i).filter(e=>!Da(a,e))}var Sa=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=rr(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=sr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},si=class extends Sa{name;get formDirective(){return null}get path(){return null}},Dt=class extends Sa{_parent=null;name=null;valueAccessor=null},Ma=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Tt=(()=>{class a extends Ma{constructor(e){super(e)}static \u0275fac=function(t){return new(t||a)(we(Dt,2))};static \u0275dir=C({type:a,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,n){t&2&&D("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[U]})}return a})(),wi=(()=>{class a extends Ma{constructor(e){super(e)}static \u0275fac=function(t){return new(t||a)(we(si,10))};static \u0275dir=C({type:a,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,n){t&2&&D("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[U]})}return a})();var Mn="VALID",ka="INVALID",en="PENDING",En="DISABLED",yi=class{},Ea=class extends yi{value;source;constructor(i,e){super(),this.value=i,this.source=e}},In=class extends yi{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Rn=class extends yi{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},tn=class extends yi{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Ta=class extends yi{source;constructor(i){super(),this.source=i}},Pn=class extends yi{source;constructor(i){super(),this.source=i}};function lr(a){return(Aa(a)?a.validators:a)||null}function Bm(a){return Array.isArray(a)?rr(a):a||null}function cr(a,i){return(Aa(i)?i.asyncValidators:a)||null}function zm(a){return Array.isArray(a)?sr(a):a||null}function Aa(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function Jl(a,i,e){let t=a.controls;if(!(i?Object.keys(t):t).length)throw new At(1e3,"");if(!t[e])throw new At(1001,"")}function ec(a,i,e){a._forEachChild((t,n)=>{if(e[n]===void 0)throw new At(1002,"")})}var nn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return qt(this.statusReactive)}set status(i){qt(()=>this.statusReactive.set(i))}_status=ie(()=>this.statusReactive());statusReactive=v(void 0);get valid(){return this.status===Mn}get invalid(){return this.status===ka}get pending(){return this.status===en}get disabled(){return this.status===En}get enabled(){return this.status!==En}errors;get pristine(){return qt(this.pristineReactive)}set pristine(i){qt(()=>this.pristineReactive.set(i))}_pristine=ie(()=>this.pristineReactive());pristineReactive=v(!0);get dirty(){return!this.pristine}get touched(){return qt(this.touchedReactive)}set touched(i){qt(()=>this.touchedReactive.set(i))}_touched=ie(()=>this.touchedReactive());touchedReactive=v(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Rl(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Rl(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Pl(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Pl(i,this._rawAsyncValidators))}hasValidator(i){return Da(this._rawValidators,i)}hasAsyncValidator(i){return Da(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(Fe(Q({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Rn(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Rn(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(Fe(Q({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new In(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new In(!0,t))}markAsPending(i={}){this.status=en;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new tn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(Fe(Q({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=En,this.errors=null,this._forEachChild(n=>{n.disable(Fe(Q({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ea(this.value,t)),this._events.next(new tn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Fe(Q({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Mn,this._forEachChild(t=>{t.enable(Fe(Q({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(Fe(Q({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Mn||this.status===en)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ea(this.value,e)),this._events.next(new tn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(Fe(Q({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?En:Mn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=en,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Ul(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,n)=>t&&t._find(n),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new tn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?En:this.errors?ka:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(en)?en:this._anyControlsHaveStatus(ka)?ka:Mn}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),n=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),n&&this._events.next(new In(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Rn(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Aa(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Bm(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=zm(this._rawAsyncValidators)}},xi=class extends nn{constructor(i,e,t){super(lr(e),cr(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){ec(this,!0,i),Object.keys(i).forEach(t=>{Jl(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let n=this.controls[t];n&&n.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,n)=>{t.reset(i?i[n]:null,Fe(Q({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Pn(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,n)=>((t.enabled||this.disabled)&&(e[n]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((n,o)=>{t=e(t,n,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var ir=class extends xi{};var On=new S("",{factory:()=>Fa}),Fa="always";function tc(a,i){return[...i.path,a]}function Ia(a,i,e=Fa){dr(a,i),i.valueAccessor.writeValue(a.value),(a.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(a.disabled),jm(a,i),Wm(a,i),Gm(a,i),Hm(a,i)}function Ol(a,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Pa(a,i),a&&(i._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function Ra(a,i){a.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Hm(a,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};a.registerOnDisabledChange(e),i._registerOnDestroy(()=>{a._unregisterOnDisabledChange(e)})}}function dr(a,i){let e=Zl(a);i.validator!==null?a.setValidators(Il(e,i.validator)):typeof e=="function"&&a.setValidators([e]);let t=Kl(a);i.asyncValidator!==null?a.setAsyncValidators(Il(t,i.asyncValidator)):typeof t=="function"&&a.setAsyncValidators([t]);let n=()=>a.updateValueAndValidity();Ra(i._rawValidators,n),Ra(i._rawAsyncValidators,n)}function Pa(a,i){let e=!1;if(a!==null){if(i.validator!==null){let n=Zl(a);if(Array.isArray(n)&&n.length>0){let o=n.filter(r=>r!==i.validator);o.length!==n.length&&(e=!0,a.setValidators(o))}}if(i.asyncValidator!==null){let n=Kl(a);if(Array.isArray(n)&&n.length>0){let o=n.filter(r=>r!==i.asyncValidator);o.length!==n.length&&(e=!0,a.setAsyncValidators(o))}}}let t=()=>{};return Ra(i._rawValidators,t),Ra(i._rawAsyncValidators,t),e}function jm(a,i){i.valueAccessor.registerOnChange(e=>{a._pendingValue=e,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&ic(a,i)})}function Gm(a,i){i.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&ic(a,i),a.updateOn!=="submit"&&a.markAsTouched()})}function ic(a,i){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function Wm(a,i){let e=(t,n)=>{i.valueAccessor.writeValue(t),n&&i.viewToModelUpdate(t)};a.registerOnChange(e),i._registerOnDestroy(()=>{a._unregisterOnChange(e)})}function nc(a,i){a==null,dr(a,i)}function Um(a,i){return Pa(a,i)}function ac(a,i){if(!a.hasOwnProperty("model"))return!1;let e=a.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function qm(a){return Object.getPrototypeOf(a.constructor)===Bl}function oc(a,i){a._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function rc(a,i){if(!i)return null;Array.isArray(i);let e,t,n;return i.forEach(o=>{o.constructor===ut?e=o:qm(o)?t=o:n=o}),n||t||e||null}function Qm(a,i){let e=a.indexOf(i);e>-1&&a.splice(e,1)}var $m={provide:si,useExisting:je(()=>Ni)},Tn=Promise.resolve(),Ni=(()=>{class a extends si{callSetDisabledState;get submitted(){return qt(this.submittedReactive)}_submitted=ie(()=>this.submittedReactive());submittedReactive=v(!1);_directives=new Set;form;ngSubmit=new R;options;constructor(e,t,n){super(),this.callSetDisabledState=n,this.form=new xi({},rr(e),sr(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Tn.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Ia(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Tn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Tn.then(()=>{let t=this._findContainer(e.path),n=new xi({});nc(n,e),t.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Tn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Tn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),oc(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ta(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||a)(we(Et,10),we(Oa,10),we(On,8))};static \u0275dir=C({type:a,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,n){t&1&&f("submit",function(r){return n.onSubmit(r)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[G([$m]),U]})}return a})();function Al(a,i){let e=a.indexOf(i);e>-1&&a.splice(e,1)}function Fl(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var vi=class extends nn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(lr(e),cr(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Aa(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Fl(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Pn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Al(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Al(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Fl(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Ym=a=>a instanceof vi;var Xm={provide:Dt,useExisting:je(()=>Vi)},Ll=Promise.resolve(),Vi=(()=>{class a extends Dt{_changeDetectorRef;callSetDisabledState;control=new vi;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new R;constructor(e,t,n,o,r,d){super(),this._changeDetectorRef=r,this.callSetDisabledState=d,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=rc(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ac(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ia(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ll.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,n=t!==0&&T(t);Ll.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?tc(e,this._parent):[e]}static \u0275fac=function(t){return new(t||a)(we(si,9),we(Et,10),we(Oa,10),we(pt,10),we(ne,8),we(On,8))};static \u0275dir=C({type:a,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[G([Xm]),U,xe]})}return a})();var ki=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return a})(),Zm={provide:pt,useExisting:je(()=>mr),multi:!0},mr=(()=>{class a extends Bl{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,n){t&1&&f("input",function(r){return n.onChange(r.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[G([Zm]),U]})}return a})();var nr=class extends nn{constructor(i,e,t){super(lr(e),cr(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),e&&(this.controls.splice(n,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){ec(this,!1,i),i.forEach((t,n)=>{Jl(this,!1,n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,n)=>{t.reset(i[n],Fe(Q({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Pn(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Km=(()=>{class a extends si{callSetDisabledState;get submitted(){return qt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ie(()=>this._submittedReactive());_submittedReactive=v(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,n){super(),this.callSetDisabledState=n,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Pa(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return Ia(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Ol(e.control||null,e,!1),Qm(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,oc(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ta(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,n=this.form.get(e.path);t!==n&&(Ol(t||null,e),Ym(n)&&(Ia(n,e,this.callSetDisabledState),e.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);nc(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Um(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){dr(this.form,this),this._oldForm&&Pa(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||a)(we(Et,10),we(Oa,10),we(On,8))};static \u0275dir=C({type:a,features:[U,xe]})}return a})();var sc=new S("");var Jm={provide:Dt,useExisting:je(()=>Bi)},Bi=(()=>{class a extends Dt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new R;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,n,o,r){super(),this._ngModelWarningConfig=r,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=rc(this,o)}ngOnChanges(e){this._added||this._setUpControl(),ac(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return tc(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||a)(we(si,13),we(Et,10),we(Oa,10),we(pt,10),we(sc,8))};static \u0275dir=C({type:a,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[G([Jm]),U,xe]})}return a})();var eh={provide:si,useExisting:je(()=>Gt)},Gt=(()=>{class a extends Km{form=null;ngSubmit=new R;get control(){return this.form}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","formGroup",""]],hostBindings:function(t,n){t&1&&f("submit",function(r){return n.onSubmit(r)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[G([eh]),U]})}return a})();function th(a){return typeof a=="number"?a:parseInt(a,10)}function lc(a){return typeof a=="number"?a:parseFloat(a)}var La=(()=>{class a{_validator=Ca;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Ca,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,features:[xe]})}return a})(),ih={provide:Et,useExisting:je(()=>hr),multi:!0},hr=(()=>{class a extends La{max;inputName="max";normalizeInput=e=>lc(e);createValidator=e=>Hl(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("max",n._enabled?n.max:null)},inputs:{max:"max"},standalone:!1,features:[G([ih]),U]})}return a})(),nh={provide:Et,useExisting:je(()=>pr),multi:!0},pr=(()=>{class a extends La{min;inputName="min";normalizeInput=e=>lc(e);createValidator=e=>zl(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("min",n._enabled?n.min:null)},inputs:{min:"min"},standalone:!1,features:[G([nh]),U]})}return a})(),ah={provide:Et,useExisting:je(()=>zi),multi:!0};var zi=(()=>{class a extends La{required;inputName="required";normalizeInput=T;createValidator=e=>jl;enabled(e){return e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,n){t&2&&N("required",n._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[G([ah]),U]})}return a})();var oh={provide:Et,useExisting:je(()=>ur),multi:!0},ur=(()=>{class a extends La{maxlength;inputName="maxlength";normalizeInput=e=>th(e);createValidator=e=>Gl(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("maxlength",n._enabled?n.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[G([oh]),U]})}return a})();var cc=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({})}return a})();function Nl(a){return!!a&&(a.asyncValidators!==void 0||a.validators!==void 0||a.updateOn!==void 0)}var an=(()=>{class a{useNonNullable=!1;get nonNullable(){let e=new a;return e.useNonNullable=!0,e}group(e,t=null){let n=this._reduceControls(e),o={};return Nl(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new xi(n,o)}record(e,t=null){let n=this._reduceControls(e);return new ir(n,t)}control(e,t,n){let o={};return this.useNonNullable?(Nl(t)?o=t:(o.validators=t,o.asyncValidators=n),new vi(e,Fe(Q({},o),{nonNullable:!0}))):new vi(e,t,n)}array(e,t,n){let o=e.map(r=>this._createControl(r));return new nr(o,t,n)}_reduceControls(e){let t={};return Object.keys(e).forEach(n=>{t[n]=this._createControl(e[n])}),t}_createControl(e){if(e instanceof vi)return e;if(e instanceof nn)return e;if(Array.isArray(e)){let t=e[0],n=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,n,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ci=(()=>{class a{static withConfig(e){return{ngModule:a,providers:[{provide:On,useValue:e.callSetDisabledState??Fa}]}}static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[cc]})}return a})(),on=(()=>{class a{static withConfig(e){return{ngModule:a,providers:[{provide:sc,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:On,useValue:e.callSetDisabledState??Fa}]}}static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[cc]})}return a})();var rh=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return a})(),sh={passive:!0},dc=(()=>{class a{_platform=c(_e);_ngZone=c(W);_renderer=c(St).createRenderer(null,null);_styleLoader=c(Le);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ui;this._styleLoader.load(rh);let t=dt(e),n=this._monitoredElements.get(t);if(n)return n.subject;let o=new y,r="cdk-text-field-autofilled",d=u=>{u.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!0}))):u.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!1})))},p=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",d,sh)));return this._monitoredElements.set(t,{subject:o,unlisten:p}),o}stopMonitoring(e){let t=dt(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var mc=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({})}return a})();var hc=new S("MAT_INPUT_VALUE_ACCESSOR");var fr=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new gt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(he(e=>e.some(t=>t.target===i)),Ao({bufferSize:1,refCount:!0}),Z(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Na=(()=>{class a{_cleanupErrorListener;_observers=new Map;_ngZone=c(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new fr(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var lh=["notch"],ch=["matFormFieldNotchedOutline",""],dh=["*"],pc=["iconPrefixContainer"],uc=["textPrefixContainer"],fc=["iconSuffixContainer"],gc=["textSuffixContainer"],mh=["textField"],hh=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ph=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function uh(a,i){a&1&&I(0,"span",21)}function fh(a,i){if(a&1&&(s(0,"label",20),F(1,1),w(2,uh,1,0,"span",21),l()),a&2){let e=g(2);x("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),N("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),k(!e.hideRequiredMarker&&e._control.required?2:-1)}}function gh(a,i){if(a&1&&w(0,fh,3,5,"label",20),a&2){let e=g();k(e._hasFloatingLabel()?0:-1)}}function _h(a,i){a&1&&I(0,"div",7)}function bh(a,i){}function vh(a,i){if(a&1&&qe(0,bh,0,0,"ng-template",13),a&2){g(2);let e=Pe(1);x("ngTemplateOutlet",e)}}function yh(a,i){if(a&1&&(s(0,"div",9),w(1,vh,1,1,null,13),l()),a&2){let e=g();x("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),k(e._forceDisplayInfixLabel()?-1:1)}}function xh(a,i){a&1&&(s(0,"div",10,2),F(2,2),l())}function wh(a,i){a&1&&(s(0,"div",11,3),F(2,3),l())}function kh(a,i){}function Ch(a,i){if(a&1&&qe(0,kh,0,0,"ng-template",13),a&2){g();let e=Pe(1);x("ngTemplateOutlet",e)}}function Dh(a,i){a&1&&(s(0,"div",14,4),F(2,4),l())}function Sh(a,i){a&1&&(s(0,"div",15,5),F(2,5),l())}function Mh(a,i){a&1&&I(0,"div",16)}function Eh(a,i){a&1&&(s(0,"div",18),F(1,6),l())}function Th(a,i){if(a&1&&(s(0,"mat-hint",22),m(1),l()),a&2){let e=g(2);x("id",e._hintLabelId),h(),O(e.hintLabel)}}function Ih(a,i){if(a&1&&(s(0,"div",19),w(1,Th,2,2,"mat-hint",22),F(2,7),I(3,"div",23),F(4,8),l()),a&2){let e=g();h(),k(e.hintLabel?1:-1)}}var Zt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["mat-label"]]})}return a})(),kc=new S("MatError"),za=(()=>{class a{id=c(le).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,n){t&2&&Xe("id",n.id)},inputs:{id:"id"},features:[G([{provide:kc,useExisting:a}])]})}return a})(),Ba=(()=>{class a{align="start";id=c(le).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(Xe("id",n.id),N("align",null),D("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return a})(),Rh=new S("MatPrefix");var Cc=new S("MatSuffix"),Ha=(()=>{class a{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[G([{provide:Cc,useExisting:a}])]})}return a})(),Dc=new S("FloatingLabelParent"),_c=(()=>{class a{_elementRef=c(A);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Na);_ngZone=c(W);_parent=c(Dc);_resizeSubscription=new be;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ph(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&D("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return a})();function Ph(a){let i=a;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var bc="mdc-line-ripple--active",Va="mdc-line-ripple--deactivating",vc=(()=>{class a{_elementRef=c(A);_cleanupTransitionEnd;constructor(){let e=c(W),t=c(ve);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Va),e.add(bc)}deactivate(){this._elementRef.nativeElement.classList.add(Va)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(Va);e.propertyName==="opacity"&&n&&t.remove(bc,Va)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return a})(),yc=(()=>{class a{_elementRef=c(A);_ngZone=c(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&ce(lh,5),t&2){let o;M(o=E())&&(n._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&D("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ch,ngContentSelectors:dh,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(ee(),hi(0,"div",1),We(1,"div",2,0),F(3),et(),hi(4,"div",3))},encapsulation:2,changeDetection:0})}return a})(),An=(()=>{class a{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a})}return a})();var Fn=new S("MatFormField"),Oh=new S("MAT_FORM_FIELD_DEFAULT_OPTIONS"),xc="fill",Ah="auto",wc="fixed",Fh="translateY(-50%)",Ke=(()=>{class a{_elementRef=c(A);_changeDetectorRef=c(ne);_platform=c(_e);_idGenerator=c(le);_ngZone=c(W);_defaults=c(Oh,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=bn("iconPrefixContainer");_textPrefixContainerSignal=bn("textPrefixContainer");_iconSuffixContainerSignal=bn("iconSuffixContainer");_textSuffixContainerSignal=bn("textSuffixContainer");_prefixSuffixContainers=ie(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Es(Zt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ae(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ah}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||xc;this._appearanceSignal.set(t)}_appearanceSignal=v(xc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||wc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||wc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=pe();constructor(){let e=this._defaults,t=c(Ce);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ti(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ie(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ee([void 0,void 0]),Ge(()=>[t.errorState,t.userAriaDescribedBy]),Oo(),he(([[o,r],[d,p]])=>o!==d||r!==p)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Z(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ie(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Is({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ie(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(d=>d.align==="start"):null,r=this._hintChildren?this._hintChildren.find(d=>d.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,n;if(t){let o=this._describedByIds||e;n=e.concat(t.filter(r=>r&&!o.includes(r)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,d=t?.getBoundingClientRect().width??0,p=n?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0,_=this._currentDirection==="rtl"?"-1":"1",P=`${r+d}px`,J=`calc(${_} * (${P} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ue=`var(--mat-mdc-form-field-label-transform, ${Fh} translateX(${J}))`,ae=r+d+p+u;return[ue,ae]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-form-field"]],contentQueries:function(t,n,o){if(t&1&&(Ds(o,n._labelChild,Zt,5),Re(o,An,5)(o,Rh,5)(o,Cc,5)(o,kc,5)(o,Ba,5)),t&2){Bo();let r;M(r=E())&&(n._formFieldControl=r.first),M(r=E())&&(n._prefixChildren=r),M(r=E())&&(n._suffixChildren=r),M(r=E())&&(n._errorChildren=r),M(r=E())&&(n._hintChildren=r)}},viewQuery:function(t,n){if(t&1&&(Ss(n._iconPrefixContainerSignal,pc,5)(n._textPrefixContainerSignal,uc,5)(n._iconSuffixContainerSignal,fc,5)(n._textSuffixContainerSignal,gc,5),ce(mh,5)(pc,5)(uc,5)(fc,5)(gc,5)(_c,5)(yc,5)(vc,5)),t&2){Bo(4);let o;M(o=E())&&(n._textField=o.first),M(o=E())&&(n._iconPrefixContainer=o.first),M(o=E())&&(n._textPrefixContainer=o.first),M(o=E())&&(n._iconSuffixContainer=o.first),M(o=E())&&(n._textSuffixContainer=o.first),M(o=E())&&(n._floatingLabel=o.first),M(o=E())&&(n._notchedOutline=o.first),M(o=E())&&(n._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&D("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[G([{provide:Fn,useExisting:a},{provide:Dc,useExisting:a}])],ngContentSelectors:ph,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(ee(hh),qe(0,gh,1,1,"ng-template",null,0,zo),s(2,"div",6,1),f("click",function(r){return n._control.onContainerClick(r)}),w(4,_h,1,0,"div",7),s(5,"div",8),w(6,yh,2,2,"div",9),w(7,xh,3,0,"div",10),w(8,wh,3,0,"div",11),s(9,"div",12),w(10,Ch,1,1,null,13),F(11),l(),w(12,Dh,3,0,"div",14),w(13,Sh,3,0,"div",15),l(),w(14,Mh,1,0,"div",16),l(),s(15,"div",17),w(16,Eh,2,0,"div",18)(17,Ih,5,1,"div",19),l()),t&2){let o;h(2),D("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),h(2),k(!n._hasOutline()&&!n._control.disabled?4:-1),h(2),k(n._hasOutline()?6:-1),h(),k(n._hasIconPrefix?7:-1),h(),k(n._hasTextPrefix?8:-1),h(2),k(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),h(2),k(n._hasTextSuffix?12:-1),h(),k(n._hasIconSuffix?13:-1),h(),k(n._hasOutline()?-1:14),h(),D("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let r=n._getSubscriptMessageType();h(),k((o=r)==="error"?16:o==="hint"?17:-1)}},dependencies:[_c,yc,Os,vc,Ba],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return a})();var sn=(()=>{class a{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ln=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,n,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(n,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var Be=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[ia,Ke,K]})}return a})();var Nh=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Vh=new S("MAT_INPUT_CONFIG"),It=(()=>{class a{_elementRef=c(A);_platform=c(_e);ngControl=c(Dt,{optional:!0,self:!0});_autofillMonitor=c(dc);_ngZone=c(W);_formField=c(Fn,{optional:!0});_renderer=c(ve);_uid=c(le).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(Vh,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ae(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ue.required)??!1}set required(e){this._required=Ae(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Wo().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ae(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Wo().has(e));constructor(){let e=c(Ni,{optional:!0}),t=c(Gt,{optional:!0}),n=c(sn),o=c(hc,{optional:!0,self:!0}),r=this._elementRef.nativeElement,d=r.nodeName.toLowerCase();o?Zn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ln(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d==="select",this._isTextarea=d==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ti(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Nh.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&f("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(Xe("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),N("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),D("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",T]},exportAs:["matInput"],features:[G([{provide:An,useExisting:a}]),xe]})}return a})(),ft=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[Be,Be,mc,K]})}return a})();var ji=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;constructor(i=!1,e,t=!0,n){this._multiple=i,this._emitChanges=t,this.compareWith=n,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var Ln=(()=>{class a{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ja=(()=>{class a{_animationsDisabled=pe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&D("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return a})();var Bh=["text"],zh=[[["mat-icon"]],"*"],Hh=["mat-icon","*"];function jh(a,i){if(a&1&&I(0,"mat-pseudo-checkbox",1),a&2){let e=g();x("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Gh(a,i){if(a&1&&I(0,"mat-pseudo-checkbox",3),a&2){let e=g();x("disabled",e.disabled)}}function Wh(a,i){if(a&1&&(s(0,"span",4),m(1),l()),a&2){let e=g();h(),$("(",e.group.label,")")}}var _r=new S("MAT_OPTION_PARENT_COMPONENT"),br=new S("MatOptgroup");var gr=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Pt=(()=>{class a{_element=c(A);_changeDetectorRef=c(ne);_parent=c(_r,{optional:!0});group=c(br,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(le).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=v(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new R;_text;_stateChanges=new y;constructor(){let e=c(Le);e.load(mt),e.load(js),this._signalDisableRipple=!!this._parent&&Zn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Oe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new gr(this,e))}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&ce(Bh,7),t&2){let o;M(o=E())&&(n._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&f("click",function(){return n._selectViaInteraction()})("keydown",function(r){return n._handleKeydown(r)}),t&2&&(Xe("id",n.id),N("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),D("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",T]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Hh,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(ee(zh),w(0,jh,1,2,"mat-pseudo-checkbox",1),F(1),s(2,"span",2,0),F(4,1),l(),w(5,Gh,1,1,"mat-pseudo-checkbox",3),w(6,Wh,2,1,"span",4),I(7,"div",5)),t&2&&(k(n.multiple?0:-1),h(5),k(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),h(),k(n.group&&n.group._inert?6:-1),h(),x("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[ja,Vt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return a})();function Sc(a,i,e){if(e.length){let t=i.toArray(),n=e.toArray(),o=0;for(let r=0;r<a+1;r++)t[r].group&&t[r].group===n[o]&&o++;return o}return 0}function Mc(a,i,e,t){return a<e?a:a+i>e+t?Math.max(0,a-t+i):e}var Ga=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[K]})}return a})();var vr=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[fi,Ga,Pt,K]})}return a})();var qh=["trigger"],Qh=["panel"],$h=[[["mat-select-trigger"]],"*"],Yh=["mat-select-trigger","*"];function Xh(a,i){if(a&1&&(s(0,"span",4),m(1),l()),a&2){let e=g();h(),O(e.placeholder)}}function Zh(a,i){a&1&&F(0)}function Kh(a,i){if(a&1&&(s(0,"span",11),m(1),l()),a&2){let e=g(2);h(),O(e.triggerValue)}}function Jh(a,i){if(a&1&&(s(0,"span",5),w(1,Zh,1,0)(2,Kh,2,1,"span",11),l()),a&2){let e=g();h(),k(e.customTrigger?1:2)}}function ep(a,i){if(a&1){let e=q();s(0,"div",12,1),f("keydown",function(n){V(e);let o=g();return B(o._handleKeydown(n))}),F(2,1),l()}if(a&2){let e=g();ot(e.panelClass),D("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),N("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var tp=new S("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=c(X);return()=>Li(a)}}),ip=new S("MAT_SELECT_CONFIG"),np=new S("MatSelectTrigger"),yr=class{source;value;constructor(i,e){this.source=i,this.value=e}},Di=(()=>{class a{_viewportRuler=c(rt);_changeDetectorRef=c(ne);_elementRef=c(A);_dir=c(Ce,{optional:!0});_idGenerator=c(le);_renderer=c(ve);_parentFormField=c(Fn,{optional:!0});ngControl=c(Dt,{self:!0,optional:!0});_liveAnnouncer=c(oa);_defaultOptions=c(ip,{optional:!0});_animationsDisabled=pe();_popoverLocation;_initialized=new y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,o=Sc(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?n.scrollTop=0:n.scrollTop=Mc(r.offsetTop,r.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new yr(this,e)}_scrollStrategyFactory=c(tp);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new y;_errorStateTracker;stateChanges=new y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=v(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ue.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Qi(()=>{let e=this.options;return e?e.changes.pipe(Ee(e),_t(()=>Ie(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(_t(()=>this.optionSelectionChanges))});openedChange=new R;_openedStream=this.openedChange.pipe(he(e=>e),Ge(()=>{}));_closedStream=this.openedChange.pipe(he(e=>!e),Ge(()=>{}));selectionChange=new R;valueChange=new R;constructor(){let e=c(sn),t=c(Ni,{optional:!0}),n=c(Gt,{optional:!0}),o=c(new Lt("tabindex"),{optional:!0}),r=c(Dn,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ln(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ji(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Z(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Z(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ee(null),Z(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(He(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&jo(this._trackedModal,"aria-owns",t),Ys(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;jo(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!Oe(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let d=this.selected;r.onKeydown(e);let p=this.selected;p&&d!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,o=n===40||n===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(n===13||n===32)&&t.activeItem&&!Oe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let d=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(d?p.select():p.deselect())})}else{let d=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==d&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Oe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ki?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new $s(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ie(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Z(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ie(...this.options.map(t=>t._stateChanges)).pipe(Z(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Nt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-select"]],contentQueries:function(t,n,o){if(t&1&&Re(o,np,5)(o,Pt,5)(o,br,5),t&2){let r;M(r=E())&&(n.customTrigger=r.first),M(r=E())&&(n.options=r),M(r=E())&&(n.optionGroups=r)}},viewQuery:function(t,n){if(t&1&&ce(qh,5)(Qh,5)(va,5),t&2){let o;M(o=E())&&(n.trigger=o.first),M(o=E())&&(n.panel=o.first),M(o=E())&&(n._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&f("keydown",function(r){return n._handleKeydown(r)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(N("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),D("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",T],disableRipple:[2,"disableRipple","disableRipple",T],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:tt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",T],placeholder:"placeholder",required:[2,"required","required",T],multiple:[2,"multiple","multiple",T],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",T],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",tt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",T]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[G([{provide:An,useExisting:a},{provide:_r,useExisting:a}]),xe],ngContentSelectors:Yh,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(ee($h),s(0,"div",2,0),f("click",function(){return n.open()}),s(3,"div",3),w(4,Xh,2,1,"span",4)(5,Jh,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),Ut(),s(8,"svg",8),I(9,"path",9),l()()()(),qe(10,ep,3,16,"ng-template",10),f("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(r){return n._handleOverlayKeydown(r)})),t&2){let o=Pe(1);h(3),N("id",n._valueId),h(),k(n.empty?4:5),h(6),x("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[Ki,va],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return a})();var Si=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[jt,vr,K,Mt,Be,vr]})}return a})();var ap=["mat-internal-form-field",""],op=["*"],Qa=(()=>{class a{labelPosition="after";static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&D("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:ap,ngContentSelectors:op,decls:1,vars:0,template:function(t,n){t&1&&(ee(),F(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return a})();var rp=["switch"],sp=["*"];function lp(a,i){a&1&&(s(0,"span",11),Ut(),s(1,"svg",13),I(2,"path",14),l(),s(3,"svg",15),I(4,"path",16),l()())}var cp=new S("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),$a=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},kr=(()=>{class a{_elementRef=c(A);_focusMonitor=c(yt);_changeDetectorRef=c(ne);defaults=c(cp);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new $a(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=pe();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new R;toggleChange=new R;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){c(Le).load(mt);let e=c(new Lt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=c(le).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new $a(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-slide-toggle"]],viewQuery:function(t,n){if(t&1&&ce(rp,5),t&2){let o;M(o=E())&&(n._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,n){t&2&&(Xe("id",n.id),N("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),ot(n.color?"mat-"+n.color:""),D("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",T],color:"color",disabled:[2,"disabled","disabled",T],disableRipple:[2,"disableRipple","disableRipple",T],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:tt(e)],checked:[2,"checked","checked",T],hideIcon:[2,"hideIcon","hideIcon",T],disabledInteractive:[2,"disabledInteractive","disabledInteractive",T]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[G([{provide:pt,useExisting:je(()=>a),multi:!0},{provide:Et,useExisting:a,multi:!0}]),xe],ngContentSelectors:sp,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,n){if(t&1&&(ee(),s(0,"div",1)(1,"button",2,0),f("click",function(){return n._handleClick()}),I(3,"div",3)(4,"span",4),s(5,"span",5)(6,"span",6)(7,"span",7),I(8,"span",8),l(),s(9,"span",9),I(10,"span",10),l(),w(11,lp,5,0,"span",11),l()()(),s(12,"label",12),f("click",function(r){return r.stopPropagation()}),F(13),l()()),t&2){let o=Pe(2);x("labelPosition",n.labelPosition),h(),D("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),x("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),N("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),h(9),x("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),h(),k(n.hideIcon?-1:11),h(),x("for",n.buttonId),N("id",n._labelId)}},dependencies:[Vt,Qa],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return a})(),Ec=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[kr,K]})}return a})();function mp(a,i){if(a&1){let e=q();s(0,"div",1)(1,"button",2),f("click",function(){V(e);let n=g();return B(n.action())}),m(2),l()()}if(a&2){let e=g();h(2),$(" ",e.data.action," ")}}var hp=["label"];function pp(a,i){}var up=Math.pow(2,31)-1,Nn=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,up))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Tc=new S("MatSnackBarData"),cn=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},fp=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),gp=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),_p=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),Ic=(()=>{class a{snackBarRef=c(Nn);data=c(Tc);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(s(0,"div",0),m(1),l(),w(2,mp,3,1,"div",1)),t&2&&(h(),$(" ",n.data.message,`
`),h(),k(n.hasAction?2:-1))},dependencies:[Qe,fp,gp,_p],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return a})(),Cr="_mat-snack-bar-enter",Dr="_mat-snack-bar-exit",bp=(()=>{class a extends gi{_ngZone=c(W);_elementRef=c(A);_changeDetectorRef=c(ne);_platform=c(_e);_animationsDisabled=pe();snackBarConfig=c(cn);_document=c(ye);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(X);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=c(le).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Dr?this._completeExit():e===Cr&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Te(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Cr)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Cr)},200)))}exit(){return this._destroyed?qi(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Te(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Dr)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Dr),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,o="mdc-snackbar__label";n.classList.toggle(o,!n.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let o=t[n],r=o.getAttribute("aria-owns");this._trackedModals.add(o),r?r.indexOf(e)===-1&&o.setAttribute("aria-owns",r+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let n=t.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),n=e.querySelector("[aria-live]");if(t&&n){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,n){if(t&1&&ce(kt,7)(hp,7),t&2){let o;M(o=E())&&(n._portalOutlet=o.first),M(o=E())&&(n._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,n){t&1&&f("animationend",function(r){return n.onAnimationEnd(r.animationName)})("animationcancel",function(r){return n.onAnimationEnd(r.animationName)}),t&2&&D("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[U],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(s(0,"div",1)(1,"div",2,0)(3,"div",3),qe(4,pp,0,0,"ng-template",4),l(),I(5,"div"),l()()),t&2&&(h(5),N("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[kt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return a})(),vp=new S("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new cn}),li=(()=>{class a{_live=c(oa);_injector=c(X);_breakpointObserver=c(Qs);_parentSnackBar=c(a,{optional:!0,skipSelf:!0});_defaultConfig=c(vp);_animationsDisabled=pe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ic;snackBarContainerComponent=bp;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",n){let o=Q(Q({},this._defaultConfig),n);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=X.create({parent:n||this._injector,providers:[{provide:cn,useValue:t}]}),r=new zt(this.snackBarContainerComponent,t.viewContainerRef,o),d=e.attach(r);return d.instance.snackBarConfig=t,d.instance}_attach(e,t){let n=Q(Q(Q({},new cn),this._defaultConfig),t),o=this._createOverlay(n),r=this._attachSnackBarContainer(o,n),d=new Nn(r,o);if(e instanceof Je){let p=new ht(e,null,{$implicit:n.data,snackBarRef:d});d.instance=r.attachTemplatePortal(p)}else{let p=this._createInjector(n,d),u=new zt(e,void 0,p),_=r.attachComponentPortal(u);d.instance=_.instance}return this._breakpointObserver.observe(Zs.HandsetPortrait).pipe(Z(o.detachments())).subscribe(p=>{o.overlayElement.classList.toggle(this.handsetCssClass,p.matches)}),n.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(d,n),this._openedSnackBarRef=d,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new ii;t.direction=e.direction;let n=_i(this._injector),o=e.direction==="rtl",r=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,d=!r&&e.horizontalPosition!=="center";return r?n.left("0"):d?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,ai(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return X.create({parent:n||this._injector,providers:[{provide:Nn,useValue:t},{provide:Tc,useValue:e.data}]})}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var dn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({providers:[li],imports:[jt,Ht,me,Ic,K]})}return a})();var Ya=class a{snackBar=c(li);habitService=c(ct);habitLogService=c(Xt);constructor(){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",i=>{i.data&&i.data.action==="mark-done"&&this.markHabitAsDone(i.data.habitId)})}notifiedToday=new Set;async requestPermission(){return"Notification"in window?Notification.permission==="granted"?!0:await Notification.requestPermission()!=="granted"?(this.snackBar.open("Notification permission was denied. Reminders won't work.","OK",{duration:5e3}),!1):!0:(this.snackBar.open("This browser does not support notifications.","OK",{duration:3e3}),!1)}async updateAllSchedules(){if(!("Notification"in window)||Notification.permission!=="granted")return;let i=await this.habitService.loadHabits(),e=await navigator.serviceWorker.ready;for(let t of i)t.reminderEnabled&&t.startTime&&await this.scheduleNotification(t)}async scheduleNotification(i){let e=await navigator.serviceWorker.ready,t=this.calculateNextTrigger(i.startTime,i.reminderOffset||0,i.frequency,i.days);if(!t)return;let n={body:`Time for your habit: ${i.name}!`,icon:"/assets/icons/icon-128x128.png",badge:"/assets/icons/icon-72x72.png",data:{habitId:i.id},vibrate:[200,100,200],tag:`habit-${i.id}`,actions:[{action:"mark-done",title:"Mark as Done"},{action:"close",title:"Close"}]};"showTrigger"in Notification.prototype&&"TimestampTrigger"in window&&(n.showTrigger=new window.TimestampTrigger(t));try{await e.showNotification(`Trackify: ${i.name}`,n),console.log(`Scheduled notification for ${i.name} at ${new Date(t).toLocaleString()}`)}catch(o){console.error("Error scheduling notification",o)}}calculateNextTrigger(i,e,t,n){let[o,r]=i.split(":").map(Number),d=new Date,p=new Date;if(p.setHours(o,r,0,0),e>0&&p.setMinutes(p.getMinutes()-e),p<=d&&p.setDate(p.getDate()+1),t===1&&n&&n.length>0){let u=!1;for(let _=0;_<7;_++){let P=p.getDay();if(n.includes(P)){u=!0;break}p.setDate(p.getDate()+1)}if(!u)return null}return p.getTime()}async markHabitAsDone(i){let e=new Date().toISOString().split("T")[0];await this.habitLogService.markHabitAsCompleted(i,e),this.snackBar.open("Habit marked as done!","OK",{duration:2e3});let t=await this.habitService.getHabit(i);t&&this.scheduleNotification(t)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})};var yp=["button"],xp=["*"];function wp(a,i){if(a&1&&(s(0,"div",2),I(1,"mat-pseudo-checkbox",6),l()),a&2){let e=g();h(),x("disabled",e.disabled)}}var Rc=new S("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Pc=new S("MatButtonToggleGroup"),kp={provide:pt,useExisting:je(()=>Sr),multi:!0},Xa=class{source;value;constructor(i,e){this.source=i,this.value=e}},Sr=(()=>{class a{_changeDetector=c(ne);_dir=c(Ce,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=c(le).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new R;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new R;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=c(Rc,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new ji(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Oe(e))return;let n=e.target.id,o=this._buttonToggles.toArray().findIndex(d=>d.buttonId===n),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new Xa(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let r=(e+t*o+n.length)%n.length,d=n.get(r);if(d&&!d.disabled)return d}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,o){if(t&1&&Re(o,Za,5),t&2){let r;M(r=E())&&(n._buttonToggles=r)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&f("keydown",function(r){return n._keydown(r)}),t&2&&(N("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),D("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",T],value:"value",multiple:[2,"multiple","multiple",T],disabled:[2,"disabled","disabled",T],disabledInteractive:[2,"disabledInteractive","disabledInteractive",T],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",T],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",T]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[G([kp,{provide:Pc,useExisting:a}])]})}return a})(),Za=(()=>{class a{_changeDetectorRef=c(ne);_elementRef=c(A);_focusMonitor=c(yt);_idGenerator=c(le);_animationDisabled=pe();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new R;constructor(){c(Le).load(mt);let e=c(Pc,{optional:!0}),t=c(new Lt("tabindex"),{optional:!0})||"",n=c(Rc,{optional:!0});this._tabIndex=v(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Xa(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&ce(yp,5),t&2){let o;M(o=E())&&(n._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&f("focus",function(){return n.focus()}),t&2&&(N("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),D("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",T],appearance:"appearance",checked:[2,"checked","checked",T],disabled:[2,"disabled","disabled",T],disabledInteractive:[2,"disabledInteractive","disabledInteractive",T]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:xp,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(ee(),s(0,"button",1,0),f("click",function(){return n._onButtonClick()}),w(2,wp,2,1,"div",2),s(3,"span",3),F(4),l()(),I(5,"span",4)(6,"span",5)),t&2){let o=Pe(1);x("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),N("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),h(2),k(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),h(4),x("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[Vt,ja],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return a})(),Oc=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[fi,Za,K]})}return a})();var Dp=(a,i)=>i.value;function Sp(a,i){if(a&1){let e=q();We(0,"div",2),Kn("click",function(){let n=V(e).$implicit,o=g();return B(o.toggleDay(n.value))}),We(1,"span",3),m(2),et()()}if(a&2){let e=i.$implicit,t=g();D("selected",t.isSelected(e.value)),h(2),O(e.label.substring(0,1))}}var Ka=class a{days=[{label:"Monday",value:0},{label:"Tuesday",value:1},{label:"Wednesday",value:2},{label:"Thursday",value:3},{label:"Friday",value:4},{label:"Saturday",value:5},{label:"Sunday",value:6}];selectedDays=v([]);onChange=()=>{};onTouched=()=>{};writeValue(i){this.selectedDays.set(i||[])}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}toggleDay(i){let e=this.selectedDays(),t=e.indexOf(i),n;t>-1?n=e.filter(o=>o!==i):n=[...e,i],this.selectedDays.set(n),this.onChange(n),this.onTouched()}isSelected(i){return this.selectedDays().includes(i)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-day-picker"]],features:[G([{provide:pt,useExisting:a,multi:!0}])],decls:3,vars:0,consts:[[1,"day-picker-container"],[1,"day-box",3,"selected"],[1,"day-box",3,"click"],[1,"day-name"]],template:function(e,t){e&1&&(We(0,"div",0),re(1,Sp,3,3,"div",1,Dp),et()),e&2&&(h(),se(t.days))},dependencies:[De],styles:[".day-picker-container[_ngcontent-%COMP%]{display:flex;gap:10px;width:100%;justify-content:space-between;padding:4px 0}.day-box[_ngcontent-%COMP%]{flex:1;aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:12px;background:#f8fafc;cursor:pointer;transition:all .25s cubic-bezier(.4,0,.2,1);border:1.5px solid #e2e8f0;-webkit-user-select:none;user-select:none}.day-box[_ngcontent-%COMP%]:hover{background:#f1f5f9;border-color:#cbd5e1}.day-box.selected[_ngcontent-%COMP%]{background:var(--primary-50, #eff6ff);border-color:var(--primary-500, #3b82f6);color:var(--primary-600, #2563eb);font-weight:800;box-shadow:0 4px 12px #3b82f626;transform:translateY(-1px)}.day-name[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase}"]})};function Mp(a,i){if(a&1){let e=q();s(0,"div",6),f("click",function(){let n=V(e).$implicit,o=g();return B(o.selectIcon(n))}),s(1,"mat-icon"),m(2),l()()}if(a&2){let e=i.$implicit,t=g();D("selected",t.data.selectedIcon===e),N("title",e),h(2),O(e)}}var Ja=class a{constructor(i,e){this.dialogRef=i;this.data=e}selectIcon(i){this.dialogRef.close(i)}static \u0275fac=function(e){return new(e||a)(we(oi),we(ri))};static \u0275cmp=b({type:a,selectors:[["t-icon-picker-dialog"]],decls:10,vars:0,consts:[[1,"p-24"],[1,"df","fd-r","ai-c","jc-sb","mb-20"],[1,"m-0","fs-20","fw-700"],["mat-icon-button","","mat-dialog-close",""],[1,"icon-grid"],[1,"icon-item",3,"selected"],[1,"icon-item",3,"click"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"h2",2),m(3,"Select Icon"),l(),s(4,"button",3)(5,"mat-icon"),m(6,"close"),l()()(),s(7,"div",4),re(8,Mp,3,4,"div",5,Ft),l()()),e&2&&(h(8),se(t.data.icons))},dependencies:[De,ge,ke,$e,wa,me,nt],styles:[".icon-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;max-height:400px;overflow-y:auto;padding:4px}.icon-item[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:12px;cursor:pointer;border:1px solid #e2e8f0;transition:all .2s ease;background:#fff}.icon-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px;color:#64748b}.icon-item[_ngcontent-%COMP%]:hover{background:#f8fafc;border-color:var(--primary-500);transform:translateY(-2px)}.icon-item.selected[_ngcontent-%COMP%]{background:var(--primary-100);border-color:var(--primary-500)}.icon-item.selected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-700)}.df[_ngcontent-%COMP%]{display:flex}.fd-r[_ngcontent-%COMP%]{flex-direction:row}.ai-c[_ngcontent-%COMP%]{align-items:center}.jc-sb[_ngcontent-%COMP%]{justify-content:space-between}.mb-20[_ngcontent-%COMP%]{margin-bottom:20px}.p-24[_ngcontent-%COMP%]{padding:24px}.m-0[_ngcontent-%COMP%]{margin:0}.fs-20[_ngcontent-%COMP%]{font-size:20px}.fw-700[_ngcontent-%COMP%]{font-weight:700}"]})};var eo=class a{icons=fe(["star","fitness_center","water_drop","menu_book","check_circle","bolt","local_fire_department","monitor_heart","self_improvement","psychology","directions_run","pool","bedtime","restaurant","shopping_cart","work","school","home","favorite","event","sunny","cloud","spa","coffee","brush","code","camera_alt","music_note","meditation","nature","pets","savings","assignment"]);dialog=c(Ct);selectedIcon=v("star");isDisabled=v(!1);onChange=()=>{};onTouched=()=>{};openPicker(){if(this.isDisabled())return;this.dialog.open(Ja,{width:"400px",data:{icons:this.icons(),selectedIcon:this.selectedIcon()},panelClass:"custom-dialog-container"}).afterClosed().subscribe(e=>{e&&this.selectIcon(e)})}selectIcon(i){this.selectedIcon.set(i),this.onChange(i),this.onTouched()}writeValue(i){i&&this.selectedIcon.set(i)}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.isDisabled.set(i)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-icon-picker"]],inputs:{icons:[1,"icons"]},features:[G([{provide:pt,useExisting:a,multi:!0}])],decls:8,vars:3,consts:[[1,"picker-trigger",3,"click"],[1,"icon-container"],[1,"picker-label"],[1,"arrow"]],template:function(e,t){e&1&&(s(0,"div",0),f("click",function(){return t.openPicker()}),s(1,"div",1)(2,"mat-icon"),m(3),l()(),s(4,"span",2),m(5,"Choose Icon"),l(),s(6,"mat-icon",3),m(7,"keyboard_arrow_right"),l()()),e&2&&(D("disabled",t.isDisabled()),h(3),O(t.selectedIcon()||"star"))},dependencies:[De,ge,ke,$e,me],styles:[".icon-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:12px;padding:4px;max-height:250px;overflow-y:auto}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:10px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#94a3b8}.picker-trigger[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:8px 16px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);width:fit-content}.picker-trigger[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:#f1f5f9;border-radius:8px}.picker-trigger[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#64748b}.picker-trigger[_ngcontent-%COMP%]   .picker-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#475569}.picker-trigger[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#94a3b8;margin-left:4px}.picker-trigger[_ngcontent-%COMP%]:hover{border-color:var(--primary-400);background:#f8fafc;box-shadow:0 4px 6px -1px #0000001a}.picker-trigger[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%]{background:var(--primary-100)}.picker-trigger[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-600)}.picker-trigger[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{color:var(--primary-400)}.picker-trigger.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed;pointer-events:none}.icon-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;aspect-ratio:1;border-radius:12px;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);background:#f8fafc;border:2px solid transparent;color:#64748b}.icon-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.icon-item[_ngcontent-%COMP%]:hover:not(.disabled){background:#f1f5f9;color:var(--primary-color, #3b82f6);transform:translateY(-2px);box-shadow:0 4px 12px #0000000d}.icon-item.selected[_ngcontent-%COMP%]{background:var(--primary-color, #3b82f6);color:#fff;border-color:var(--primary-color, #3b82f6);box-shadow:0 4px 12px rgba(var(--primary-rgb, 59, 130, 246),.3);transform:scale(1.05)}.icon-item.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed;filter:grayscale(1)}"]})};var to=class a{label=fe("");placeholder=fe("");required=fe(!1);disabled=fe(!1);hint=fe("");id=fe(`control-${Math.random().toString(36).substring(2,9)}`);internalValue=v(null);isDisabled=v(!1);isTouched=v(!1);onChange=()=>{};onTouched=()=>{};ngControl=c(Dt,{optional:!0,self:!0});constructor(){this.ngControl&&(this.ngControl.valueAccessor=this)}ngOnInit(){this.ngControl?.control?.disabled&&this.isDisabled.set(!0)}updateValue(i){!this.isDisabled()&&!this.disabled()&&(this.internalValue.set(i),this.onChange(i),this.markAsTouched())}markAsTouched(){this.isTouched()||(this.isTouched.set(!0),this.onTouched())}writeValue(i){this.internalValue.set(i)}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.isDisabled.set(i)}hasError=ie(()=>!!(this.ngControl?.invalid&&(this.ngControl?.touched||this.ngControl?.dirty)));static \u0275fac=function(e){return new(e||a)};static \u0275dir=C({type:a,inputs:{label:[1,"label"],placeholder:[1,"placeholder"],required:[1,"required"],disabled:[1,"disabled"],hint:[1,"hint"],id:[1,"id"]}})};var io=class a extends to{hours=v(null);minutes=v(null);constructor(){super(),Ti(()=>{let i=this.internalValue();if(i){let[e,t]=i.split(":").map(n=>Number(n)||0);this.hours.set(e),this.minutes.set(t)}else this.hours.set(null),this.minutes.set(null)})}onTimeChange(){let i=this.hours()||0,e=this.minutes()||0,t=`${i.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`;this.updateValue(t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["lib-duration-picker"]],features:[U],decls:10,vars:6,consts:[[1,"duration-picker-container"],[1,"df","fd-r","ai-c","gap-2"],["appearance","outline",1,"time-field","hide-subscript"],["matInput","","type","number","min","0","max","23","placeholder","00",3,"ngModelChange","ngModel","disabled"],["matInput","","type","number","min","0","max","59","placeholder","00",3,"ngModelChange","ngModel","disabled"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),m(4,"Hours"),l(),s(5,"input",3),Ai("ngModelChange",function(o){return Oi(t.hours,o)||(t.hours=o),o}),f("ngModelChange",function(){return t.onTimeChange()}),l()(),s(6,"mat-form-field",2)(7,"mat-label"),m(8,"Minutes"),l(),s(9,"input",4),Ai("ngModelChange",function(o){return Oi(t.minutes,o)||(t.minutes=o),o}),f("ngModelChange",function(){return t.onTimeChange()}),l()()()()),e&2&&(D("disabled",t.isDisabled()),h(5),Pi("ngModel",t.hours),x("disabled",t.isDisabled()),h(4),Pi("ngModel",t.minutes),x("disabled",t.isDisabled()))},dependencies:[De,Ci,ut,mr,Tt,pr,hr,Vi,ft,It,Ke,Zt,Be],encapsulation:2})};var Ep=(a,i)=>i.id,Ac=(a,i)=>i.value;function Tp(a,i){a&1&&(s(0,"mat-error"),m(1,"Habit name is required"),l())}function Ip(a,i){if(a&1&&(s(0,"mat-option",12),m(1),l()),a&2){let e=i.$implicit;x("value",e.id),h(),O(e.name)}}function Rp(a,i){a&1&&(s(0,"mat-error"),m(1,"Category is required"),l())}function Pp(a,i){if(a&1){let e=q();s(0,"div",27),f("click",function(){let n=V(e).$implicit,o=g();return B(o.selectColor(n))}),l()}if(a&2){let e=i.$implicit,t=g();te("background-color",e)("box-shadow",t.habitForm.value.color===e?"0 0 0 2px #111":"none")}}function Op(a,i){if(a&1&&(s(0,"mat-button-toggle",12),m(1),l()),a&2){let e=i.$implicit;x("value",e.value),h(),O(e.label)}}function Ap(a,i){a&1&&(s(0,"div",19),m(1,"Frequency is required"),l())}function Fp(a,i){a&1&&(s(0,"div",20)(1,"span",21),m(2,"Select Custom Days"),l(),I(3,"t-day-picker",28),l())}function Lp(a,i){if(a&1&&(s(0,"mat-button-toggle",12),m(1),l()),a&2){let e=i.$implicit;x("value",e.value),h(),O(e.label)}}function Np(a,i){a&1&&(s(0,"div",34),m(1,"Start and End times are required for Fixed habits"),l())}function Vp(a,i){a&1&&(s(0,"div",34),m(1,"End time must be after start time"),l())}function Bp(a,i){if(a&1&&(s(0,"div",23)(1,"div",29)(2,"mat-form-field",30)(3,"mat-label"),m(4,"Start Time"),l(),I(5,"input",31),s(6,"mat-icon",32),m(7,"schedule"),l()(),s(8,"mat-form-field",30)(9,"mat-label"),m(10,"End Time"),l(),I(11,"input",33),s(12,"mat-icon",32),m(13,"schedule"),l()()(),w(14,Np,2,0,"div",34),w(15,Vp,2,0,"div",34),l()),a&2){let e,t=g();h(14),k((e=t.habitForm.get("startTime"))!=null&&e.touched&&t.habitForm.hasError("timesRequired")?14:-1),h(),k(t.habitForm.touched&&t.habitForm.hasError("invalidTimeRange")?15:-1)}}function zp(a,i){a&1&&(s(0,"div",13)(1,"span",21),m(2,"Daily Target"),l(),I(3,"lib-duration-picker",35),l())}function Hp(a,i){a&1&&(s(0,"div",40)(1,"span",14),m(2,"Remind me before start"),l(),I(3,"lib-duration-picker",41),s(4,"span",42),m(5,"Leave at 00:00 for exact start time"),l()())}function jp(a,i){if(a&1){let e=q();s(0,"div",24)(1,"div",36)(2,"div",23)(3,"span",37),m(4,"Daily Reminder"),l(),s(5,"span",38),m(6,"Get notified when it's time"),l()(),s(7,"mat-slide-toggle",39),f("change",function(n){V(e);let o=g();return B(o.onReminderToggle(n.checked))}),l()(),w(8,Hp,6,0,"div",40),l()}if(a&2){let e,t=g();h(8),k((e=t.habitForm.get("reminderEnabled"))!=null&&e.value?8:-1)}}var no=class a{habit=fe(null);close=Qt();fb=c(an);habitService=c(ct);categoryService=c(ui);notificationService=c(Ya);dialogData=c(ri,{optional:!0});isEditMode=ie(()=>!!(this.habit()||this.dialogData?.habit));frequencyOptions=[{label:"Daily",value:0},{label:"Specific Days",value:1}];habitTypeOptions=[{label:"Fixed Time",value:"fixed"},{label:"Flexible ",value:"flexible"}];daysOptions=[{label:"Monday",value:0},{label:"Tuesday",value:1},{label:"Wednesday",value:2},{label:"Thursday",value:3},{label:"Friday",value:4},{label:"Saturday",value:5},{label:"Sunday",value:6}];categoryOptions=v([]);iconOptions=["star","fitness_center","water_drop","menu_book","check_circle","bolt","local_fire_department","monitor_heart","self_improvement","psychology","directions_run","pool","bedtime","restaurant","shopping_cart","work","school","home","favorite","event","sunny","cloud","spa","coffee","brush","code","camera_alt","music_note","meditation","nature","pets","savings","assignment"];presetColors=["#3b82f6","#4ade80","#c084fc","#fba94c","#f472b6","#5eead4","#f87171","#fcd34d"];habitForm=this.fb.group({name:["",Ue.required],description:[""],icon:["star"],color:["#3b82f6"],frequency:[0,Ue.required],habitType:["flexible",Ue.required],startTime:[""],endTime:[""],days:[[]],category:[1,Ue.required],reminderEnabled:[!1],reminderTime:["08:00"],reminderOffset:["00:00"],duration:["00:00"]},{validators:[this.habitTimeValidator()]});habitTimeValidator(){return i=>{let e=i.get("habitType")?.value,t=i.get("startTime")?.value,n=i.get("endTime")?.value;if(e==="fixed"){if(!t||!n)return{timesRequired:!0};let o=this.hhmmToMinutes(t);if(this.hhmmToMinutes(n)<=o)return{invalidTimeRange:!0}}return null}}minutesToHHmm(i){let e=Math.floor(i/60),t=i%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}hhmmToMinutes(i){if(!i)return 0;let[e,t]=i.split(":").map(Number);return(e||0)*60+(t||0)}selectColor(i){this.habitForm.patchValue({color:i})}async ngOnInit(){this.categoryOptions.set(await this.categoryService.getCategories());let i=this.habit()||this.dialogData?.habit;if(i)this.habitForm.patchValue({name:i.name,description:i.description,icon:i.icon,color:i.color,frequency:i.frequency,habitType:i.habitType||"flexible",startTime:i.startTime||"",endTime:i.endTime||"",days:i.days||[],category:i.category?.id,reminderEnabled:i.reminderEnabled||!1,reminderTime:i.reminderTime||"08:00",reminderOffset:this.minutesToHHmm(i.reminderOffset||0),duration:this.minutesToHHmm(i.duration||0)});else{let e=this.categoryOptions();e.length>0&&this.habitForm.patchValue({category:e[0].id})}}async onReminderToggle(i){i&&(await this.notificationService.requestPermission()||this.habitForm.patchValue({reminderEnabled:!1}))}async onSubmit(){if(this.habitForm.invalid){this.habitForm.markAllAsTouched();return}let i=this.habitForm.value,e=Number(i.category),t=this.categoryOptions().find(u=>u.id===e),n=t?{id:t.id,name:t.name}:{id:0,name:"General"},o=Number(i.frequency),r=i.habitType==="fixed",d=0;if(r&&i.startTime&&i.endTime){let u=this.hhmmToMinutes(i.endTime)-this.hhmmToMinutes(i.startTime);d=u<0?u+1440:u}else d=this.hhmmToMinutes(i.duration);let p={name:i.name,description:i.description||"",icon:i.icon||"star",color:i.color||"#3b82f6",frequency:o,habitType:i.habitType,startTime:r?i.startTime:"",endTime:r?i.endTime:"",days:o===1?i.days:[],category:n,reminderEnabled:r?!!i.reminderEnabled:!1,reminderTime:i.reminderTime||"08:00",reminderOffset:this.hhmmToMinutes(i.reminderOffset),duration:d};if(this.habit()?.id||this.dialogData?.habit?.id){let u=this.habit()?.id||this.dialogData.habit.id;await this.habitService.updateHabit(u,p)}else await this.habitService.addHabit(p);try{this.notificationService.updateAllSchedules()}catch(u){console.warn("Notification sync failed",u)}this.close.emit(!0)}onCancel(){this.close.emit(!1)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-create-habit"]],inputs:{habit:[1,"habit"]},outputs:{close:"close"},decls:60,vars:10,consts:[[1,"bg-white","h-100","df","fd-c"],[1,"df","fd-r","ai-c","jc-s","pt-24","px-24","pb-8",2,"border-bottom","1px solid var(--border-subtle)"],[1,"df","fd-c","gap-2"],[1,"m-0","fw-800","fs-22","text-primary"],[1,"fs-12","text-secondary","fw-500"],["mat-icon-button","","type","button",1,"close-btn",3,"click"],["cdkScrollable","",1,"df","fd-c","gap-5",3,"ngSubmit","formGroup"],[1,"df","fd-c","gap-5","p-24",2,"overflow-y","auto"],["appearance","outline",1,"w-100","m-0","p-0"],["matInput","","formControlName","name","placeholder","e.g. Morning meditation"],["matInput","","formControlName","description","placeholder","Why is this habit important?"],["formControlName","category"],[3,"value"],[1,"df","fd-c","gap-2","flex-1"],[1,"fs-13","fw-600","text-primary","uppercase","ls-1"],[1,"df","fd-r","gap-4","flex-wrap"],[1,"cursor-pointer","us-none",2,"width","32px","height","32px","min-width","32px","border-radius","50%","border","3px solid #fff","transition","box-shadow 0.2s","box-sizing","border-box","flex-shrink","0",3,"background-color","box-shadow"],["formControlName","icon",3,"icons"],["formControlName","frequency",1,"mt-8"],[1,"text-error","fs-12","mt-4","ml-4"],[1,"df","fd-c","gap-2","w-100","pt-8"],[1,"fs-13","fw-600","text-secondary","uppercase","ls-1"],["formControlName","habitType",1,"mt-8"],[1,"df","fd-c","gap-1"],[1,"df","fd-c","gap-3","mt-16"],[1,"pl-24","pr-24","pb-24"],["mat-flat-button","","color","primary","type","submit",1,"text-bg","w-100","p-24"],[1,"cursor-pointer","us-none",2,"width","32px","height","32px","min-width","32px","border-radius","50%","border","3px solid #fff","transition","box-shadow 0.2s","box-sizing","border-box","flex-shrink","0",3,"click"],["formControlName","days"],[1,"df","fd-r","gap-4"],["appearance","outline",1,"w-100"],["matInput","","type","time","formControlName","startTime"],["matSuffix",""],["matInput","","type","time","formControlName","endTime"],[1,"text-error","fs-12","ml-4"],["formControlName","duration"],[1,"df","fd-r","ai-c","jc-s","p-16","br-12",2,"background-color","#f8fafc","border","1px solid #e2e8f0"],[1,"fs-14","fw-600"],[1,"fs-12","text-secondary"],["formControlName","reminderEnabled","color","primary",3,"change"],[1,"df","fd-c","gap-2","p-16","br-12","animate-fade-in",2,"background-color","#fff9fb","border","1px solid #fecdd3"],["formControlName","reminderOffset"],[1,"fs-11","text-secondary","mt-1"]],template:function(e,t){if(e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),m(4),l(),s(5,"span",4),m(6,"Define your routine and goals"),l()(),s(7,"button",5),f("click",function(){return t.onCancel()}),s(8,"mat-icon"),m(9,"close"),l()()(),s(10,"form",6),f("ngSubmit",function(){return t.onSubmit()}),s(11,"div",7)(12,"div",2)(13,"mat-form-field",8)(14,"mat-label"),m(15,"Habit Name"),l(),I(16,"input",9),w(17,Tp,2,0,"mat-error"),l()(),s(18,"div",2)(19,"mat-form-field",8)(20,"mat-label"),m(21,"Description (Optional)"),l(),I(22,"input",10),l()(),s(23,"mat-form-field",8)(24,"mat-label"),m(25,"Category"),l(),s(26,"mat-select",11),re(27,Ip,2,2,"mat-option",12,Ep),l(),w(29,Rp,2,0,"mat-error"),l(),s(30,"div",13)(31,"span",14),m(32,"Color"),l(),s(33,"div",15),re(34,Pp,1,4,"div",16,Ft),l()(),s(36,"div",13)(37,"span",14),m(38,"Icon"),l(),I(39,"t-icon-picker",17),l(),s(40,"div")(41,"span",14),m(42,"Frequency"),l(),s(43,"mat-button-toggle-group",18),re(44,Op,2,2,"mat-button-toggle",12,Ac),l(),w(46,Ap,2,0,"div",19),l(),w(47,Fp,4,0,"div",20),s(48,"div")(49,"span",21),m(50,"Habit Type"),l(),s(51,"mat-button-toggle-group",22),re(52,Lp,2,2,"mat-button-toggle",12,Ac),l()(),w(54,Bp,16,2,"div",23)(55,zp,4,0,"div",13),w(56,jp,9,1,"div",24),l(),s(57,"div",25)(58,"button",26),m(59),l()()()()),e&2){let n,o,r,d,p,u;h(4),O(t.isEditMode()?"Update Habit":"New Habit"),h(6),x("formGroup",t.habitForm),h(7),k((n=t.habitForm.get("name"))!=null&&n.touched&&((n=t.habitForm.get("name"))!=null&&n.hasError("required"))?17:-1),h(10),se(t.categoryOptions()),h(2),k((o=t.habitForm.get("category"))!=null&&o.touched&&((o=t.habitForm.get("category"))!=null&&o.hasError("required"))?29:-1),h(5),se(t.presetColors),h(5),x("icons",t.iconOptions),h(5),se(t.frequencyOptions),h(2),k((r=t.habitForm.get("frequency"))!=null&&r.touched&&((r=t.habitForm.get("frequency"))!=null&&r.hasError("required"))?46:-1),h(),k(((d=t.habitForm.get("frequency"))==null?null:d.value)===1?47:-1),h(5),se(t.habitTypeOptions),h(2),k(((p=t.habitForm.get("habitType"))==null?null:p.value)==="fixed"?54:55),h(2),k(((u=t.habitForm.get("habitType"))==null?null:u.value)==="fixed"?56:-1),h(3),$(" ",t.isEditMode()?"Update Habit":"Create Habit"," ")}},dependencies:[De,on,ki,ut,Tt,wi,Gt,Bi,ft,It,Ke,Zt,za,Ha,Be,Si,wt,Di,Pt,me,Qe,nt,$e,ge,ke,Ec,kr,Oc,Sr,Za,Ka,eo,io],encapsulation:2})};var mn=class a{data=c(ri);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-confirm-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title","",1,"m-0","pt-24","px-24","pb-8","fw-700"],[1,"px-24","pt-8"],[1,"m-0","fs-16","text-secondary",2,"line-height","1.5"],["align","end",1,"px-24","pb-24","pt-16"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","warn",3,"mat-dialog-close"]],template:function(e,t){e&1&&(s(0,"h2",0),m(1),l(),s(2,"mat-dialog-content",1)(3,"p",2),m(4),l()(),s(5,"mat-dialog-actions",3)(6,"button",4),m(7,"Cancel"),l(),s(8,"button",5),m(9,"Confirm Delete"),l()()),e&2&&(h(),O(t.data.title),h(3),O(t.data.message),h(4),x("mat-dialog-close",!0))},dependencies:[$e,wa,Dl,Ml,Sl,me,Qe],encapsulation:2})};var Jt=class a{transform(i){if(i==null)return"";let e=Math.floor(i/60),t=i%60;return e===0?`${t}m`:t===0?`${e}h`:`${e}h ${t}m`}static \u0275fac=function(e){return new(e||a)};static \u0275pipe=vs({name:"duration",type:a,pure:!0})};var Gp=(a,i)=>i.value;function Wp(a,i){if(a&1&&(s(0,"div",4)(1,"span",15),m(2),l()()),a&2){let e=g();h(2),O(e.habit().category.name)}}function Up(a,i){if(a&1&&(s(0,"div",5)(1,"span",16),m(2,"\u{1F525}"),l(),s(3,"span",17),m(4),l()()),a&2){let e=g();h(4),O(e.habit().currentStreak)}}function qp(a,i){if(a&1&&(s(0,"div",4)(1,"mat-icon",18),m(2,"schedule"),l(),s(3,"span",19),m(4),bt(5,"duration"),l()()),a&2){let e=g();h(4),O(vt(5,1,e.habit().duration))}}function Qp(a,i){if(a&1&&(s(0,"p",6),m(1),l()),a&2){let e=g();h(),O(e.habit().description)}}function $p(a,i){a&1&&(s(0,"div",8)(1,"span",20),m(2,"Daily"),l()())}function Yp(a,i){if(a&1&&(s(0,"div",22),m(1),l()),a&2){let e,t,n=i.$implicit,o=g(2);te("background-color",(e=o.habit().days)!=null&&e.includes(n.value)?"#10b981":"#f1f5f9")("color",(t=o.habit().days)!=null&&t.includes(n.value)?"#fff":"#94a3b8"),h(),$(" ",n.label," ")}}function Xp(a,i){if(a&1&&(s(0,"div",9),re(1,Yp,2,5,"div",21,Gp),l()),a&2){let e=g();h(),se(e.allDays())}}var ao=class a{habit=fe.required();allDays=fe([]);edit=Qt();delete=Qt();view=Qt();HabitFrequency=ti;onEdit(i){i.stopPropagation(),this.edit.emit()}onDelete(i){i.stopPropagation(),this.delete.emit()}onView(){this.view.emit()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-habit-card"]],inputs:{habit:[1,"habit"],allDays:[1,"allDays"]},outputs:{edit:"edit",delete:"delete",view:"view"},decls:24,vars:7,consts:[[1,"habit-card","p-16","b-1-solid","br-8","df","fd-r","ai-c","jc-s","cursor-pointer",2,"transition","all 0.2s","box-shadow","0 2px 8px rgba(0,0,0,0.03)","background-color","#fff",3,"click"],[1,"df","fd-c","gap-2",2,"flex","1"],[1,"df","ai-c","gap-2"],[1,"fw-600","fs-16"],[1,"df","ai-c","gap-1","px-8","py-2","br-4",2,"background-color","#f1f5f9","border","1px solid #e2e8f0"],[1,"df","ai-c","gap-1","px-8","py-2","br-12",2,"background-color","#fff7ed","border","1px solid #ffedd5"],[1,"m-0","mt-4","text-secondary","fs-13","truncate-1"],[1,"df","fd-r","ai-c","gap-2","mt-8"],[1,"px-8","py-2","br-4",2,"background-color","#f0fdf4","border","1px solid #dcfce7"],[1,"df","fd-r","gap-1"],[1,"fs-14","fw-400",2,"width","14px","height","14px","color","#94a3b8"],[1,"fs-11","fw-500","text-secondary","ls-1","uppercase"],[1,"df","fd-r"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],[1,"fs-10","fw-700","uppercase","ls-1",2,"color","#64748b"],[2,"font-size","14px"],[1,"fs-12","fw-700",2,"color","#ea580c"],[2,"font-size","11px","width","11px","height","11px","color","#64748b"],[1,"fs-10","fw-700",2,"color","#64748b"],[1,"fs-10","fw-700","uppercase","ls-1",2,"color","#166534"],[1,"df","ai-c","jc-c",2,"width","18px","height","18px","border-radius","4px","font-size","9px","font-weight","700",3,"background-color","color"],[1,"df","ai-c","jc-c",2,"width","18px","height","18px","border-radius","4px","font-size","9px","font-weight","700"]],template:function(e,t){e&1&&(s(0,"div",0),f("click",function(){return t.onView()}),s(1,"div",1)(2,"div",2)(3,"div",3),m(4),l(),w(5,Wp,3,1,"div",4),w(6,Up,5,1,"div",5),w(7,qp,6,3,"div",4),l(),w(8,Qp,2,1,"p",6),s(9,"div",7),w(10,$p,3,0,"div",8)(11,Xp,3,0,"div",9),l(),s(12,"div",7)(13,"mat-icon",10),m(14,"emoji_events"),l(),s(15,"span",11),m(16),l()()(),s(17,"div",12)(18,"button",13),f("click",function(o){return t.onEdit(o)}),s(19,"mat-icon"),m(20,"edit"),l()(),s(21,"button",14),f("click",function(o){return t.onDelete(o)}),s(22,"mat-icon"),m(23,"delete"),l()()()()),e&2&&(h(4),O(t.habit().name),h(),k(t.habit().category?5:-1),h(),k(t.habit().currentStreak>0?6:-1),h(),k(t.habit().duration?7:-1),h(),k(t.habit().description?8:-1),h(2),k(t.habit().frequency===t.HabitFrequency.Daily?10:11),h(6),$("Best: ",t.habit().longestStreak," days"))},dependencies:[De,ge,ke,me,nt,Jt],encapsulation:2})};function Tr(a){let i=a.cloneNode(!0),e=i.querySelectorAll("[id]"),t=a.nodeName.toLowerCase();i.removeAttribute("id");for(let n=0;n<e.length;n++)e[n].removeAttribute("id");return t==="canvas"?Nc(a,i):(t==="input"||t==="select"||t==="textarea")&&Lc(a,i),Fc("canvas",a,i,Nc),Fc("input, textarea, select",a,i,Lc),i}function Fc(a,i,e,t){let n=i.querySelectorAll(a);if(n.length){let o=e.querySelectorAll(a);for(let r=0;r<n.length;r++)t(n[r],o[r])}}var Zp=0;function Lc(a,i){i.type!=="file"&&(i.value=a.value),i.type==="radio"&&i.name&&(i.name=`mat-clone-${i.name}-${Zp++}`)}function Nc(a,i){let e=i.getContext("2d");if(e)try{e.drawImage(a,0,0)}catch{}}function Fr(a){let i=a.getBoundingClientRect();return{top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height,x:i.x,y:i.y}}function Ir(a,i,e){let{top:t,bottom:n,left:o,right:r}=a;return e>=t&&e<=n&&i>=o&&i<=r}function Kp(a,i){let e=i.left<a.left,t=i.left+i.width>a.right,n=i.top<a.top,o=i.top+i.height>a.bottom;return e||t||n||o}function zn(a,i,e){a.top+=i,a.bottom=a.top+a.height,a.left+=e,a.right=a.left+a.width}function Vc(a,i,e,t){let{top:n,right:o,bottom:r,left:d,width:p,height:u}=a,_=p*i,P=u*i;return t>n-P&&t<r+P&&e>d-_&&e<o+_}var oo=class{_document;positions=new Map;constructor(i){this._document=i}clear(){this.positions.clear()}cache(i){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),i.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Fr(e)})})}handleScroll(i){let e=Nt(i),t=this.positions.get(e);if(!t)return null;let n=t.scrollPosition,o,r;if(e===this._document){let u=this.getViewportScrollPosition();o=u.top,r=u.left}else o=e.scrollTop,r=e.scrollLeft;let d=n.top-o,p=n.left-r;return this.positions.forEach((u,_)=>{u.clientRect&&e!==_&&e.contains(_)&&zn(u.clientRect,d,p)}),n.top=o,n.left=r,{top:d,left:p}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Zc(a,i){let e=a.rootNodes;if(e.length===1&&e[0].nodeType===i.ELEMENT_NODE)return e[0];let t=i.createElement("div");return e.forEach(n=>t.appendChild(n)),t}function Lr(a,i,e){for(let t in i)if(i.hasOwnProperty(t)){let n=i[t];n?a.setProperty(t,n,e?.has(t)?"important":""):a.removeProperty(t)}return a}function hn(a,i){let e=i?"":"none";Lr(a.style,{"touch-action":i?"":"none","-webkit-user-drag":i?"":"none","-webkit-tap-highlight-color":i?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Bc(a,i,e){Lr(a.style,{position:i?"":"fixed",top:i?"":"0",opacity:i?"":"0",left:i?"":"-999em"},e)}function ro(a,i){return i&&i!="none"?a+" "+i:a}function zc(a,i){a.style.width=`${i.width}px`,a.style.height=`${i.height}px`,a.style.transform=Hn(i.left,i.top)}function Hn(a,i){return`translate3d(${Math.round(a)}px, ${Math.round(i)}px, 0)`}var Vn={capture:!0},Mr={passive:!1,capture:!0},Jp=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,n){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return a})(),Nr=(()=>{class a{_ngZone=c(W);_document=c(ye);_styleLoader=c(Le);_renderer=c(St).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new y;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=v([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new y;pointerUp=new y;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Mr)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(Jp),this._activeDragInstances.update(n=>[...n,e]),this._activeDragInstances().length===1)){let n=t.type.startsWith("touch"),o=d=>this.pointerUp.next(d),r=[["scroll",d=>this._scroll.next(d),Vn],["selectstart",this._preventDefaultWhileDragging,Mr]];n?r.push(["touchend",o,Vn],["touchcancel",o,Vn]):r.push(["mouseup",o,Vn]),n||r.push(["mousemove",d=>this.pointerMove.next(d),Mr]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=r.map(([d,p,u])=>this._renderer.listen(this._document,d,p,u))})}}stopDragging(e){this._activeDragInstances.update(t=>{let n=t.indexOf(e);return n>-1?(t.splice(n,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new gt(n=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",r=>{this._activeDragInstances().length&&n.next(r)},Vn);return()=>{o()}}))),Ie(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Hc(a){let i=a.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(a)*i}function eu(a){let i=getComputedStyle(a),e=Er(i,"transition-property"),t=e.find(d=>d==="transform"||d==="all");if(!t)return 0;let n=e.indexOf(t),o=Er(i,"transition-duration"),r=Er(i,"transition-delay");return Hc(o[n])+Hc(r[n])}function Er(a,i){return a.getPropertyValue(i).split(",").map(t=>t.trim())}var tu=new Set(["position"]),Rr=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(i,e,t,n,o,r,d,p,u,_){this._document=i,this._rootElement=e,this._direction=t,this._initialDomRect=n,this._previewTemplate=o,this._previewClass=r,this._pickupPositionOnPage=d,this._initialTransform=p,this._zIndex=u,this._renderer=_}attach(i){this._preview=this._createPreview(),i.appendChild(this._preview),jc(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(i){this._preview.style.transform=i}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(i){this._preview.classList.add(i)}getTransitionDuration(){return eu(this._preview)}addEventListener(i,e){return this._renderer.listen(this._preview,i,e)}_createPreview(){let i=this._previewTemplate,e=this._previewClass,t=i?i.template:null,n;if(t&&i){let o=i.matchSize?this._initialDomRect:null,r=i.viewContainer.createEmbeddedView(t,i.context);r.detectChanges(),n=Zc(r,this._document),this._previewEmbeddedView=r,i.matchSize?zc(n,o):n.style.transform=Hn(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else n=Tr(this._rootElement),zc(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return Lr(n.style,{"pointer-events":"none",margin:jc(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},tu),hn(n,!1),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>n.classList.add(o)):n.classList.add(e)),n}};function jc(a){return"showPopover"in a}var iu={passive:!0},Gc={passive:!1},nu={passive:!1,capture:!0},au=800,Wc="cdk-drag-placeholder",Uc=new Set(["position"]);function Kc(a,i,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=a.get(ve,null,{optional:!0})||a.get(St).createRenderer(null,null);return new Pr(i,e,a.get(ye),a.get(W),a.get(rt),a.get(Nr),t)}var Pr=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=v(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new y;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=be.EMPTY;_pointerUpSubscription=be.EMPTY;_scrollSubscription=be.EMPTY;_resizeSubscription=be.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(i){i!==this._disabled&&(this._disabled=i,this._toggleNativeDragInteractions(),this._handles.forEach(e=>hn(e,i)))}_disabled=!1;beforeStarted=new y;started=new y;released=new y;ended=new y;entered=new y;exited=new y;dropped=new y;moved=this._moveEvents;data;constrainPosition;constructor(i,e,t,n,o,r,d){this._config=e,this._document=t,this._ngZone=n,this._viewportRuler=o,this._dragDropRegistry=r,this._renderer=d,this.withRootElement(i).withParent(e.parentDragRef||null),this._parentPositions=new oo(t),r.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(i){this._handles=i.map(t=>dt(t)),this._handles.forEach(t=>hn(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(i){return this._previewTemplate=i,this}withPlaceholderTemplate(i){return this._placeholderTemplate=i,this}withRootElement(i){let e=dt(i);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,Gc),t.listen(e,"touchstart",this._pointerDown,iu),t.listen(e,"dragstart",this._nativeDragStart,Gc)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(i){return this._boundaryElement=i?dt(i):null,this._resizeSubscription.unsubscribe(),i&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(i){return this._parentDragRef=i,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Kp(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let i=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,n=0;e.left<i.left?t=i.left-e.left:e.right>i.right&&(t=i.right-e.right),e.top<i.top?n=i.top-e.top:e.bottom>i.bottom&&(n=i.bottom-e.bottom);let o=this._activeTransform.x,r=this._activeTransform.y,d=o+t,p=r+n;this._rootElement.style.transform=Hn(d,p),this._activeTransform={x:d,y:p},this._passiveTransform={x:d,y:p}}}disableHandle(i){!this._disabledHandles.has(i)&&this._handles.indexOf(i)>-1&&(this._disabledHandles.add(i),hn(i,!0))}enableHandle(i){this._disabledHandles.has(i)&&(this._disabledHandles.delete(i),hn(i,this.disabled))}withDirection(i){return this._direction=i,this}_withDropContainer(i){this._dropContainer=i}getFreeDragPosition(){let i=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:i.x,y:i.y}}setFreeDragPosition(i){return this._activeTransform={x:0,y:0},this._passiveTransform.x=i.x,this._passiveTransform.y=i.y,this._dropContainer||this._applyRootElementTransform(i.x,i.y),this}withPreviewContainer(i){return this._previewContainer=i,this}_sortFromLastPointerPosition(){let i=this._lastKnownPointerPosition;i&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(i),i)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=i=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,i)}else this.disabled||this._initializeDragSequence(this._rootElement,i)};_pointerMove=i=>{let e=this._getPointerPositionOnPage(i);if(!this._hasStartedDragging()){let n=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(n+o>=this._config.dragStartThreshold){let d=Date.now()>=this._dragStartTime+this._getDragStartDelay(i),p=this._dropContainer;if(!d){this._endDragSequence(i);return}(!p||!p.isDragging()&&!p.isReceiving())&&(i.cancelable&&i.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(i)))}return}i.cancelable&&i.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=t.x-n.x+this._passiveTransform.x,o.y=t.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:i,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=i=>{this._endDragSequence(i)};_endDragSequence(i){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:i}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(i),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(i);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:i})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(i){Bn(i)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",ou,nu)}),t){let n=this._rootElement,o=n.parentNode,r=this._placeholder=this._createPlaceholderElement(),d=this._marker=this._marker||this._document.createComment("");o.insertBefore(d,n),this._initialTransform=n.style.transform||"",this._preview=new Rr(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),Bc(n,!1,Uc),this._document.body.appendChild(o.replaceChild(r,n)),this.started.next({source:this,event:i}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:i}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(i,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),n=Bn(e),o=!n&&e.button!==0,r=this._rootElement,d=Nt(e),p=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+au>Date.now(),u=n?Ws(e):Gs(e);if(d&&d.draggable&&e.type==="mousedown"&&e.preventDefault(),t||o||p||u)return;if(this._handles.length){let z=r.style;this._rootElementTapHighlight=z.webkitTapHighlightColor||"",z.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(z=>this._updateOnScroll(z)),this._boundaryElement&&(this._boundaryRect=Fr(this._boundaryElement));let _=this._previewTemplate;this._pickupPositionInElement=_&&_.template&&!_.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,i,e);let P=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:P.x,y:P.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(i){Bc(this._rootElement,!0,Uc),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),n=this._getPointerPositionOnPage(i),o=this._getDragDistance(n),r=e._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:o,dropPoint:n,event:i}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:o,dropPoint:n,event:i}),e.drop(this,t,this._initialIndex,this._initialContainer,r,o,n,i),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:i,y:e},{x:t,y:n}){let o=this._initialContainer._getSiblingContainerFromPosition(this,i,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(i,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let r=this._dropContainer.getItemIndex(this),d=this._dropContainer.getItemAtIndex(r+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,d),this._dropContainer=o,this._dropContainer.enter(this,i,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,n),this._dropContainer._sortItem(this,i,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(i,e):this._applyPreviewTransform(i-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let i=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(i.left,i.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let n=d=>{(!d||this._preview&&Nt(d)===this._preview.element&&d.propertyName==="transform")&&(r(),t(),clearTimeout(o))},o=setTimeout(n,e*1.5),r=this._preview.addEventListener("transitionend",n)}))}_createPlaceholderElement(){let i=this._placeholderTemplate,e=i?i.template:null,t;return e?(this._placeholderRef=i.viewContainer.createEmbeddedView(e,i.context),this._placeholderRef.detectChanges(),t=Zc(this._placeholderRef,this._document)):t=Tr(this._rootElement),t.style.pointerEvents="none",t.classList.add(Wc),t}_getPointerPositionInElement(i,e,t){let n=e===this._rootElement?null:e,o=n?n.getBoundingClientRect():i,r=Bn(t)?t.targetTouches[0]:t,d=this._getViewportScrollPosition(),p=r.pageX-o.left-d.left,u=r.pageY-o.top-d.top;return{x:o.left-i.left+p,y:o.top-i.top+u}}_getPointerPositionOnPage(i){let e=this._getViewportScrollPosition(),t=Bn(i)?i.touches[0]||i.changedTouches[0]||{pageX:0,pageY:0}:i,n=t.pageX-e.left,o=t.pageY-e.top;if(this._ownerSVGElement){let r=this._ownerSVGElement.getScreenCTM();if(r){let d=this._ownerSVGElement.createSVGPoint();return d.x=n,d.y=o,d.matrixTransform(r.inverse())}}return{x:n,y:o}}_getConstrainedPointerPosition(i){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:n}=this.constrainPosition?this.constrainPosition(i,this,this._initialDomRect,this._pickupPositionInElement):i;if(this.lockAxis==="x"||e==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:r}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,d=this._boundaryRect,{width:p,height:u}=this._getPreviewRect(),_=d.top+r,P=d.bottom-(u-r),z=d.left+o,J=d.right-(p-o);t=qc(t,z,J),n=qc(n,_,P)}return{x:t,y:n}}_updatePointerDirectionDelta(i){let{x:e,y:t}=i,n=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,r=Math.abs(e-o.x),d=Math.abs(t-o.y);return r>this._config.pointerDirectionChangeThreshold&&(n.x=e>o.x?1:-1,o.x=e),d>this._config.pointerDirectionChangeThreshold&&(n.y=t>o.y?1:-1,o.y=t),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let i=this._handles.length>0||!this.isDragging();i!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=i,hn(this._rootElement,i))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(i=>i()),this._rootElementCleanups=void 0}_applyRootElementTransform(i,e){let t=1/this.scale,n=Hn(i*t,e*t),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=ro(n,this._initialTransform)}_applyPreviewTransform(i,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,n=Hn(i,e);this._preview.setTransform(ro(n,t))}_getDragDistance(i){let e=this._pickupPositionOnPage;return e?{x:i.x-e.x,y:i.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:i,y:e}=this._passiveTransform;if(i===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||t.width===0&&t.height===0)return;let o=n.left-t.left,r=t.right-n.right,d=n.top-t.top,p=t.bottom-n.bottom;n.width>t.width?(o>0&&(i+=o),r>0&&(i-=r)):i=0,n.height>t.height?(d>0&&(e+=d),p>0&&(e-=p)):e=0,(i!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:i})}_getDragStartDelay(i){let e=this.dragStartDelay;return typeof e=="number"?e:Bn(i)?e.touch:e?e.mouse:0}_updateOnScroll(i){let e=this._parentPositions.handleScroll(i);if(e){let t=Nt(i);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&zn(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=ea(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(i,e){let t=this._previewContainer||"global";if(t==="parent")return i;if(t==="global"){let n=this._document;return e||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return dt(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=i=>{if(this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&i.preventDefault()}else this.disabled||i.preventDefault()};_getTargetHandle(i){return this._handles.find(e=>i.target&&(i.target===e||e.contains(i.target)))}_conditionallyInsertAnchor(i,e,t){if(i===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let n=this._anchor??=Tr(this._placeholder);n.classList.remove(Wc),n.classList.add("cdk-drag-anchor"),n.style.transform="",t?t.before(n):dt(e.element).appendChild(n)}}};function qc(a,i,e){return Math.max(i,Math.min(e,a))}function Bn(a){return a.type[0]==="t"}function ou(a){a.preventDefault()}function lo(a,i,e){let t=Qc(i,a.length-1),n=Qc(e,a.length-1);if(t===n)return;let o=a[t],r=n<t?-1:1;for(let d=t;d!==n;d+=r)a[d]=a[d+r];a[n]=o}function Qc(a,i){return Math.max(0,Math.min(i,a))}var so=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(i){this._dragDropRegistry=i}_previousSwap={drag:null,delta:0,overlaps:!1};start(i){this.withItems(i)}sort(i,e,t,n){let o=this._itemPositions,r=this._getItemIndexFromPointerPosition(i,e,t,n);if(r===-1&&o.length>0)return null;let d=this.orientation==="horizontal",p=o.findIndex(Se=>Se.drag===i),u=o[r],_=o[p].clientRect,P=u.clientRect,z=p>r?1:-1,J=this._getItemOffsetPx(_,P,z),ue=this._getSiblingOffsetPx(p,o,z),ae=o.slice();return lo(o,p,r),o.forEach((Se,ci)=>{if(ae[ci]===Se)return;let ei=Se.drag===i,Me=ei?J:ue,Ei=ei?i.getPlaceholderElement():Se.drag.getRootElement();Se.offset+=Me;let Gi=Math.round(Se.offset*(1/Se.drag.scale));d?(Ei.style.transform=ro(`translate3d(${Gi}px, 0, 0)`,Se.initialTransform),zn(Se.clientRect,0,Me)):(Ei.style.transform=ro(`translate3d(0, ${Gi}px, 0)`,Se.initialTransform),zn(Se.clientRect,Me,0))}),this._previousSwap.overlaps=Ir(P,e,t),this._previousSwap.drag=u.drag,this._previousSwap.delta=d?n.x:n.y,{previousIndex:p,currentIndex:r}}enter(i,e,t,n){let o=this._activeDraggables,r=o.indexOf(i),d=i.getPlaceholderElement();r>-1&&o.splice(r,1);let p=n==null||n<0?this._getItemIndexFromPointerPosition(i,e,t):n,u=o[p];if(u===i&&(u=o[p+1]),!u&&(p==null||p===-1||p<o.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(u=o[0]),u&&!this._dragDropRegistry.isDragging(u)){let _=u.getRootElement();_.parentElement.insertBefore(d,_),o.splice(p,0,i)}else this._element.appendChild(d),o.push(i);d.style.transform="",this._cacheItemPositions()}withItems(i){this._activeDraggables=i.slice(),this._cacheItemPositions()}withSortPredicate(i){this._sortPredicate=i}reset(){this._activeDraggables?.forEach(i=>{let e=i.getRootElement();if(e){let t=this._itemPositions.find(n=>n.drag===i)?.initialTransform;e.style.transform=t||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(i){return this._getVisualItemPositions().findIndex(e=>e.drag===i)}getItemAtIndex(i){return this._getVisualItemPositions()[i]?.drag||null}updateOnScroll(i,e){this._itemPositions.forEach(({clientRect:t})=>{zn(t,i,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(i){this._element=i}_cacheItemPositions(){let i=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:Fr(t)}}).sort((e,t)=>i?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(i,e,t){let n=this.orientation==="horizontal",o=n?e.left-i.left:e.top-i.top;return t===-1&&(o+=n?e.width-i.width:e.height-i.height),o}_getSiblingOffsetPx(i,e,t){let n=this.orientation==="horizontal",o=e[i].clientRect,r=e[i+t*-1],d=o[n?"width":"height"]*t;if(r){let p=n?"left":"top",u=n?"right":"bottom";t===-1?d-=r.clientRect[p]-o[u]:d+=o[p]-r.clientRect[u]}return d}_shouldEnterAsFirstChild(i,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,n=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let r=t[t.length-1].clientRect;return n?i>=r.right:e>=r.bottom}else{let r=t[0].clientRect;return n?i<=r.left:e<=r.top}}_getItemIndexFromPointerPosition(i,e,t,n){let o=this.orientation==="horizontal",r=this._itemPositions.findIndex(({drag:d,clientRect:p})=>{if(d===i)return!1;if(n){let u=o?n.x:n.y;if(d===this._previousSwap.drag&&this._previousSwap.overlaps&&u===this._previousSwap.delta)return!1}return o?e>=Math.floor(p.left)&&e<Math.floor(p.right):t>=Math.floor(p.top)&&t<Math.floor(p.bottom)});return r===-1||!this._sortPredicate(r,i)?-1:r}},Or=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(i,e){this._document=i,this._dragDropRegistry=e}start(i){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let n=e[t];this._relatedNodes.push([n,n.nextSibling])}this.withItems(i)}sort(i,e,t,n){let o=this._getItemIndexFromPointerPosition(i,e,t),r=this._previousSwap;if(o===-1||this._activeItems[o]===i)return null;let d=this._activeItems[o];if(r.drag===d&&r.overlaps&&r.deltaX===n.x&&r.deltaY===n.y)return null;let p=this.getItemIndex(i),u=i.getPlaceholderElement(),_=d.getRootElement();o>p?_.after(u):_.before(u),lo(this._activeItems,p,o);let P=this._getRootNode().elementFromPoint(e,t);return r.deltaX=n.x,r.deltaY=n.y,r.drag=d,r.overlaps=_===P||_.contains(P),{previousIndex:p,currentIndex:o}}enter(i,e,t,n){let o=this._activeItems.indexOf(i);o>-1&&this._activeItems.splice(o,1);let r=n==null||n<0?this._getItemIndexFromPointerPosition(i,e,t):n;r===-1&&(r=this._getClosestItemIndexToPointer(i,e,t));let d=this._activeItems[r];d&&!this._dragDropRegistry.isDragging(d)?(this._activeItems.splice(r,0,i),d.getRootElement().before(i.getPlaceholderElement())):(this._activeItems.push(i),this._element.appendChild(i.getPlaceholderElement()))}withItems(i){this._activeItems=i.slice()}withSortPredicate(i){this._sortPredicate=i}reset(){let i=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[n,o]=this._relatedNodes[t];n.parentNode===i&&n.nextSibling!==o&&(o===null?i.appendChild(n):o.parentNode===i&&i.insertBefore(n,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(i){return this._activeItems.indexOf(i)}getItemAtIndex(i){return this._activeItems[i]||null}updateOnScroll(){this._activeItems.forEach(i=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(i){i!==this._element&&(this._element=i,this._rootNode=void 0)}_getItemIndexFromPointerPosition(i,e,t){let n=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),o=n?this._activeItems.findIndex(r=>{let d=r.getRootElement();return n===d||d.contains(n)}):-1;return o===-1||!this._sortPredicate(o,i)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=ea(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(i,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let n=1/0,o=-1;for(let r=0;r<this._activeItems.length;r++){let d=this._activeItems[r];if(d!==i){let{x:p,y:u}=d.getRootElement().getBoundingClientRect(),_=Math.hypot(e-p,t-u);_<n&&(n=_,o=r)}}return o}},$c=.05,Jc=.05,Ot=(function(a){return a[a.NONE=0]="NONE",a[a.UP=1]="UP",a[a.DOWN=2]="DOWN",a})(Ot||{}),st=(function(a){return a[a.NONE=0]="NONE",a[a.LEFT=1]="LEFT",a[a.RIGHT=2]="RIGHT",a})(st||{});function ed(a,i){return new Ar(i,a.get(Nr),a.get(ye),a.get(W),a.get(rt))}var Ar=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new y;entered=new y;exited=new y;dropped=new y;sorted=new y;receivingStarted=new y;receivingStopped=new y;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=be.EMPTY;_verticalScrollDirection=Ot.NONE;_horizontalScrollDirection=st.NONE;_scrollNode;_stopScrollTimers=new y;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(i,e,t,n,o){this._dragDropRegistry=e,this._ngZone=n,this._viewportRuler=o;let r=this.element=dt(i);this._document=t,this.withOrientation("vertical").withElementContainer(r),e.registerDropContainer(this),this._parentPositions=new oo(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(i,e,t,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(i)),this._sortStrategy.enter(i,e,t,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:i,container:this,currentIndex:this.getItemIndex(i)})}exit(i){this._reset(),this.exited.next({item:i,container:this})}drop(i,e,t,n,o,r,d,p={}){this._reset(),this.dropped.next({item:i,currentIndex:e,previousIndex:t,container:this,previousContainer:n,isPointerOverContainer:o,distance:r,dropPoint:d,event:p})}withItems(i){let e=this._draggables;return this._draggables=i,i.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(n=>n.isDragging()).every(n=>i.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(i){return this._direction=i,this._sortStrategy instanceof so&&(this._sortStrategy.direction=i),this}connectedTo(i){return this._siblings=i.slice(),this}withOrientation(i){if(i==="mixed")this._sortStrategy=new Or(this._document,this._dragDropRegistry);else{let e=new so(this._dragDropRegistry);e.direction=this._direction,e.orientation=i,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(i){let e=this._container;return this._scrollableElements=i.indexOf(e)===-1?[e,...i]:i.slice(),this}withElementContainer(i){if(i===this._container)return this;let e=dt(this.element),t=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(i);return t>-1&&this._scrollableElements.splice(t,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(i),this._cachedShadowRoot=null,this._scrollableElements.unshift(i),this._container=i,this}getScrollableParents(){return this._scrollableElements}getItemIndex(i){return this._isDragging?this._sortStrategy.getItemIndex(i):this._draggables.indexOf(i)}getItemAtIndex(i){return this._isDragging?this._sortStrategy.getItemAtIndex(i):this._draggables[i]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(i,e,t,n){if(this.sortingDisabled||!this._domRect||!Vc(this._domRect,$c,e,t))return;let o=this._sortStrategy.sort(i,e,t,n);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:i})}_startScrollingIfNecessary(i,e){if(this.autoScrollDisabled)return;let t,n=Ot.NONE,o=st.NONE;if(this._parentPositions.positions.forEach((r,d)=>{d===this._document||!r.clientRect||t||Vc(r.clientRect,$c,i,e)&&([n,o]=ru(d,r.clientRect,this._direction,i,e),(n||o)&&(t=d))}),!n&&!o){let{width:r,height:d}=this._viewportRuler.getViewportSize(),p={width:r,height:d,top:0,right:r,bottom:d,left:0};n=td(p,e),o=id(p,i),t=window}t&&(n!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=o,this._scrollNode=t,(n||o)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let i=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=i.msScrollSnapType||i.scrollSnapType||"",i.scrollSnapType=i.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let i=this._container.style;i.scrollSnapType=i.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),ls(0,Io).pipe(Z(this._stopScrollTimers)).subscribe(()=>{let i=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===Ot.UP?i.scrollBy(0,-e):this._verticalScrollDirection===Ot.DOWN&&i.scrollBy(0,e),this._horizontalScrollDirection===st.LEFT?i.scrollBy(-e,0):this._horizontalScrollDirection===st.RIGHT&&i.scrollBy(e,0)})};_isOverContainer(i,e){return this._domRect!=null&&Ir(this._domRect,i,e)}_getSiblingContainerFromPosition(i,e,t){return this._siblings.find(n=>n._canReceive(i,e,t))}_canReceive(i,e,t){if(!this._domRect||!Ir(this._domRect,e,t)||!this.enterPredicate(i,this))return!1;let n=this._getShadowRoot().elementFromPoint(e,t);return n?n===this._container||this._container.contains(n):!1}_startReceiving(i,e){let t=this._activeSiblings;!t.has(i)&&e.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(t.add(i),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:i,receiver:this,items:e}))}_stopReceiving(i){this._activeSiblings.delete(i),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:i,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(i=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(i);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let i=ea(this._container);this._cachedShadowRoot=i||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let i=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,i))}};function td(a,i){let{top:e,bottom:t,height:n}=a,o=n*Jc;return i>=e-o&&i<=e+o?Ot.UP:i>=t-o&&i<=t+o?Ot.DOWN:Ot.NONE}function id(a,i){let{left:e,right:t,width:n}=a,o=n*Jc;return i>=e-o&&i<=e+o?st.LEFT:i>=t-o&&i<=t+o?st.RIGHT:st.NONE}function ru(a,i,e,t,n){let o=td(i,n),r=id(i,t),d=Ot.NONE,p=st.NONE;if(o){let u=a.scrollTop;o===Ot.UP?u>0&&(d=Ot.UP):a.scrollHeight-u>a.clientHeight&&(d=Ot.DOWN)}if(r){let u=a.scrollLeft;e==="rtl"?r===st.RIGHT?u<0&&(p=st.RIGHT):a.scrollWidth+u>a.clientWidth&&(p=st.LEFT):r===st.LEFT?u>0&&(p=st.LEFT):a.scrollWidth-u>a.clientWidth&&(p=st.RIGHT)}return[d,p]}var su=(()=>{class a{_injector=c(X);constructor(){}createDrag(e,t){return Kc(this._injector,e,t)}createDropList(e){return ed(this._injector,e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Yc=new S("CDK_DRAG_PARENT");var lu=new S("CdkDragHandle");var nd=new S("CDK_DRAG_CONFIG"),ad=new S("CdkDropList"),od=(()=>{class a{element=c(A);dropContainer=c(ad,{optional:!0,skipSelf:!0});_ngZone=c(W);_viewContainerRef=c(lt);_dir=c(Ce,{optional:!0});_changeDetectorRef=c(ne);_selfHandle=c(lu,{optional:!0,self:!0});_parentDrag=c(Yc,{optional:!0,skipSelf:!0});_dragDropRegistry=c(Nr);_destroyed=new y;_handles=new Eo([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new R;released=new R;ended=new R;entered=new R;exited=new R;dropped=new R;moved=new gt(e=>{let t=this._dragRef.moved.pipe(Ge(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=c(X);constructor(){let e=this.dropContainer,t=c(nd,{optional:!0});this._dragRef=Kc(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(Z(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){Te(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,n=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),n=t.indexOf(e);n>-1&&(t.splice(n,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):dt(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,n=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,r=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof n=="object"&&n?n:it(n),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(r).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(He(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let n=this._dragDropRegistry.getDragDirectiveForNode(t);if(n){e.withParent(n._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:n,constrainPosition:o,previewClass:r,boundaryElement:d,draggingDisabled:p,rootElementSelector:u,previewContainer:_}=e;this.disabled=p??!1,this.dragStartDelay=n||0,this.lockAxis=t||null,o&&(this.constrainPosition=o),r&&(this.previewClass=r),d&&(this.boundaryElement=d),u&&(this.rootElementSelector=u),_&&(this.previewContainer=_)}_setupHandlesListener(){this._handles.pipe(ms(e=>{let t=e.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),_t(e=>Ie(...e.map(t=>t._stateChanges.pipe(Ee(t))))),Z(this._destroyed)).subscribe(e=>{let t=this._dragRef,n=e.element.nativeElement;e.disabled?t.disableHandle(n):t.enableHandle(n)})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,n){t&2&&D("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",T],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",tt]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[G([{provide:Yc,useExisting:a}]),xe]})}return a})(),Xc=new S("CdkDropListGroup");var rd=(()=>{class a{element=c(A);_changeDetectorRef=c(ne);_scrollDispatcher=c(Bt);_dir=c(Ce,{optional:!0});_group=c(Xc,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new y;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=c(le).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new R;entered=new R;exited=new R;sorted=new R;_unsortedItems=new Set;constructor(){let e=c(nd,{optional:!0}),t=c(X);this._dropListRef=ed(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(n,o)=>this.enterPredicate(n.data,o.data),this._dropListRef.sortPredicate=(n,o,r)=>this.sortPredicate(n,o.data,r.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),a._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=a._dropLists.indexOf(this);e>-1&&a._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Ee(this._dir.value),Z(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=yn(this.connectedTo).map(n=>{if(typeof n=="string"){let o=a._dropLists.find(r=>r.id===n);return o}return n});if(this._group&&this._group._items.forEach(n=>{t.indexOf(n)===-1&&t.push(n)}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(n)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=it(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),Ie(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:n,sortingDisabled:o,listAutoScrollDisabled:r,listOrientation:d}=e;this.disabled=n??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=r??!1,this.orientation=d||"vertical",this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,n){t&2&&(N("id",n.id),D("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",T],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",T],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",T],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",T]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[G([{provide:Xc,useValue:void 0},{provide:ad,useExisting:a}])]})}return a})();var sd=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({providers:[su],imports:[Mt]})}return a})();var mo=["*"],du=["content"],mu=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],hu=["mat-drawer","mat-drawer-content","*"];function pu(a,i){if(a&1){let e=q();s(0,"div",1),f("click",function(){V(e);let n=g();return B(n._onBackdropClicked())}),l()}if(a&2){let e=g();D("mat-drawer-shown",e._isShowingBackdrop())}}function uu(a,i){a&1&&(s(0,"mat-drawer-content"),F(1,2),l())}var fu=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],gu=["mat-sidenav","mat-sidenav-content","*"];function _u(a,i){if(a&1){let e=q();s(0,"div",1),f("click",function(){V(e);let n=g();return B(n._onBackdropClicked())}),l()}if(a&2){let e=g();D("mat-drawer-shown",e._isShowingBackdrop())}}function bu(a,i){a&1&&(s(0,"mat-sidenav-content"),F(1,2),l())}var vu=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var yu=new S("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Vr=new S("MAT_DRAWER_CONTAINER"),pn=(()=>{class a extends wt{_platform=c(_e);_changeDetectorRef=c(ne);_container=c(Gn);constructor(){let e=c(A),t=c(Bt),n=c(W);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(te("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),D("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[G([{provide:wt,useExisting:a}]),U],ngContentSelectors:mo,decls:1,vars:0,template:function(t,n){t&1&&(ee(),F(0))},encapsulation:2,changeDetection:0})}return a})(),jn=(()=>{class a{_elementRef=c(A);_focusTrapFactory=c(aa);_focusMonitor=c(yt);_platform=c(_e);_ngZone=c(W);_renderer=c(ve);_interactivityChecker=c(na);_doc=c(ye);_container=c(Vr,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Ae(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Ae(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Ae(e))}_opened=v(!1);_openedVia=null;_animationStarted=new y;_animationEnd=new y;openedChange=new R(!0);_openedStream=this.openedChange.pipe(he(e=>e),Ge(()=>{}));openedStart=this._animationStarted.pipe(he(()=>this.opened),Po(void 0));_closedStream=this.openedChange.pipe(he(e=>!e),Ge(()=>{}));closedStart=this._animationStarted.pipe(he(()=>!this.opened),Po(void 0));_destroyed=new y;onPositionChanged=new R;_content;_modeChanged=new y;_injector=c(X);_changeDetectorRef=c(ne);constructor(){this.openedChange.pipe(Z(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Oe(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),r(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),r=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Te(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(He(1)).subscribe(r=>o(r?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&ce(du,5),t&2){let o;M(o=E())&&(n._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(N("align",null)("tabIndex",n.mode!=="side"?"-1":null),te("visibility",!n._container&&!n.opened?"hidden":null),D("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:mo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(ee(),s(0,"div",1,0),F(2),l())},dependencies:[wt],encapsulation:2,changeDetection:0})}return a})(),Gn=(()=>{class a{_dir=c(Ce,{optional:!0});_element=c(A);_ngZone=c(W);_changeDetectorRef=c(ne);_animationDisabled=pe();_transitionsEnabled=!1;_allDrawers;_drawers=new Ii;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Ae(e)}_autosize=c(yu);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Ae(e)}_backdropOverride=null;backdropClick=new R;_start=null;_end=null;_left=null;_right=null;_destroyed=new y;_doCheckSubject=new y;_contentMargins={left:null,right:null};_contentMarginChanges=new y;get scrollable(){return this._userContent||this._content}_injector=c(X);constructor(){let e=c(_e),t=c(rt);this._dir?.change.pipe(Z(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(Z(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ee(this._allDrawers),Z(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ee(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Yn(10),Z(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Z(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Z(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Z(this._drawers.changes)).subscribe(()=>{Te({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Z(Ie(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,o){if(t&1&&Re(o,pn,5)(o,jn,5),t&2){let r;M(r=E())&&(n._content=r.first),M(r=E())&&(n._allDrawers=r)}},viewQuery:function(t,n){if(t&1&&ce(pn,5),t&2){let o;M(o=E())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&D("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[G([{provide:Vr,useExisting:a}])],ngContentSelectors:hu,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(ee(mu),w(0,pu,1,2,"div",0),F(1),F(2,1),w(3,uu,2,0,"mat-drawer-content")),t&2&&(k(n.hasBackdrop?0:-1),h(3),k(n._content?-1:3))},dependencies:[pn],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return a})(),co=(()=>{class a extends pn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275cmp=b({type:a,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[G([{provide:wt,useExisting:a}]),U],ngContentSelectors:mo,decls:1,vars:0,template:function(t,n){t&1&&(ee(),F(0))},encapsulation:2,changeDetection:0})}return a})(),Br=(()=>{class a extends jn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Ae(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=it(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=it(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275cmp=b({type:a,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(N("tabIndex",n.mode!=="side"?"-1":null)("align",null),te("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),D("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[G([{provide:jn,useExisting:a}]),U],ngContentSelectors:mo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(ee(),s(0,"div",1,0),F(2),l())},dependencies:[wt],encapsulation:2,changeDetection:0})}return a})(),ld=(()=>{class a extends Gn{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275cmp=b({type:a,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,o){if(t&1&&Re(o,co,5)(o,Br,5),t&2){let r;M(r=E())&&(n._content=r.first),M(r=E())&&(n._allDrawers=r)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&D("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[G([{provide:Vr,useExisting:a},{provide:Gn,useExisting:a}]),U],ngContentSelectors:gu,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(ee(fu),w(0,_u,1,2,"div",0),F(1),F(2,1),w(3,bu,2,0,"mat-sidenav-content")),t&2&&(k(n.hasBackdrop?0:-1),h(3),k(n._content?-1:3))},dependencies:[co],styles:[vu],encapsulation:2,changeDetection:0})}return a})(),ho=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[Mt,K,Mt]})}return a})();var dd=(a,i)=>i.id;function xu(a,i){if(a&1){let e=q();s(0,"t-create-habit",17),f("close",function(n){V(e);let o=g();return B(o.onDrawerClose(n))}),l()}if(a&2){let e=g();x("habit",e.selectedHabit())}}function wu(a,i){if(a&1&&(s(0,"mat-option",13),m(1),l()),a&2){let e=i.$implicit;x("value",e.id),h(),O(e.name)}}function ku(a,i){if(a&1){let e=q();s(0,"t-habit-card",18),f("edit",function(){let n=V(e).$implicit,o=g();return B(o.editHabit(n))})("delete",function(){let n=V(e).$implicit,o=g();return B(o.deleteHabit(n))})("view",function(){let n=V(e).$implicit,o=g();return B(o.viewDetails(n.id))}),l()}if(a&2){let e=i.$implicit,t=g();x("habit",e)("allDays",t.allDays)}}function Cu(a,i){if(a&1){let e=q();s(0,"div",16)(1,"p",19),m(2,"No habits found. Let's create one!"),l(),s(3,"button",20),f("click",function(){V(e);let n=g();return B(n.openCreateHabitDialog())}),m(4,"Quick Create"),l()()}}var po=class a{habitService=c(ct);habitLogService=c(Xt);categoryService=c(ui);snackBar=c(li);dialog=c(Ct);router=c($t);HabitFrequency=ti;allDays=[{label:"M",value:0},{label:"T",value:1},{label:"W",value:2},{label:"T",value:3},{label:"F",value:4},{label:"S",value:5},{label:"S",value:6}];habits=v([]);categories=v([]);selectedCategoryId=v("all");selectedHabit=v(null);filteredHabits=ie(()=>{let i=this.selectedCategoryId(),e=this.habits();return i==="all"?e:e.filter(t=>t.category?.id===i)});async ngOnInit(){this.categories.set(await this.categoryService.getCategories()),await this.loadHabits()}async loadHabits(){let i=await this.habitService.loadHabits(),e=await Promise.all(i.map(async t=>{let n=await this.habitLogService.getStreakStatus(t.id);return Fe(Q({},t),{currentStreak:n.current,longestStreak:n.longest})}));this.habits.set(e)}openCreateHabitDialog(){this.selectedHabit.set(null),this.drawerOpened.set(!0)}drawerOpened=v(!1);onDrawerClose(i){this.drawerOpened.set(!1),i&&this.loadHabits()}editHabit(i){this.selectedHabit.set(i),this.drawerOpened.set(!0)}viewDetails(i){this.router.navigate(["/habits",i])}deleteHabit(i){this.dialog.open(mn,{width:"450px",data:{title:"Delete Habit",message:`Are you sure you want to delete "${i.name}"? All associated tracking history for this habit will be permanently lost!`}}).afterClosed().subscribe(async t=>{t&&i.id&&(await this.habitService.deleteHabit(i.id),await this.loadHabits())})}async drop(i){let e=[...this.habits()],t=this.filteredHabits(),n=t[i.previousIndex],o=t[i.currentIndex],r=e.findIndex(u=>u.id===n.id),d=e.findIndex(u=>u.id===o.id);lo(e,r,d);let p=e.map((u,_)=>Fe(Q({},u),{position:_}));this.habits.set(p);try{await this.habitService.updateHabitPositions(p)}catch(u){console.error("Failed to save habit order:",u),this.snackBar.open("Failed to save order","Close",{duration:3e3}),await this.loadHabits()}}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-habits-list"]],decls:23,vars:5,consts:[["drawer",""],[1,"w-100",3,"hasBackdrop"],["mode","over","position","end",1,"h-100",2,"width","80%",3,"closedStart","opened"],[3,"habit"],[1,"p-16","df","fd-c","gap-8"],[1,"df","fd-r","ai-c","jc-s"],[1,"m-0","fs-24","fw-700"],[1,"df","fd-r","ai-c","gap-4"],["mat-flat-button","","color","primary",1,"br-8","text-bg",3,"click"],[1,"df","fd-c","gap-4"],["appearance","outline",2,"width","160px"],[3,"selectionChange","value"],["value","all"],[3,"value"],["cdkDropList","",1,"df","fd-c","gap-4",3,"cdkDropListDropped"],["cdkDrag","",3,"habit","allDays"],[1,"empty-state","p-32","df","fd-c","ai-c","gap-4","b-1-dashed","br-8"],[3,"close","habit"],["cdkDrag","",3,"edit","delete","view","habit","allDays"],[1,"m-0","text-secondary"],["mat-stroked-button","","color","primary",3,"click"]],template:function(e,t){e&1&&(s(0,"mat-drawer-container",1)(1,"mat-drawer",2,0),f("closedStart",function(){return t.onDrawerClose(!1)}),w(3,xu,1,1,"t-create-habit",3),l(),s(4,"mat-drawer-content")(5,"div",4)(6,"div",5)(7,"h2",6),m(8,"My Habits"),l(),s(9,"div",7)(10,"button",8),f("click",function(){return t.openCreateHabitDialog()}),m(11," New Habit "),l()()(),s(12,"div",9)(13,"mat-form-field",10)(14,"mat-select",11),f("selectionChange",function(o){return t.selectedCategoryId.set(o.value)}),s(15,"mat-option",12),m(16,"All Categories"),l(),re(17,wu,2,2,"mat-option",13,dd),l()(),s(19,"div",14),f("cdkDropListDropped",function(o){return t.drop(o)}),re(20,ku,1,2,"t-habit-card",15,dd,!1,Cu,5,0,"div",16),l()()()()()),e&2&&(x("hasBackdrop",!0),h(),x("opened",t.drawerOpened()),h(2),k(t.drawerOpened()?3:-1),h(11),x("value",t.selectedCategoryId()),h(3),se(t.categories()),h(3),se(t.filteredHabits()))},dependencies:[$e,me,Qe,ge,Si,Ke,Di,Pt,Be,dn,ho,jn,Gn,pn,no,ao,sd,rd,od],styles:["[_nghost-%COMP%]{height:100%;display:flex}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:12px;box-shadow:var(--mat-sys-level5);opacity:.9}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.2}.cdk-drag-animating[_ngcontent-%COMP%], .cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"]})};var md=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[K]})}return a})();var hd=["*"],pd=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Du=["unscopedContent"],Su=["text"],Mu=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Eu=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Tu=new S("ListOption"),Un=(()=>{class a{_elementRef=c(A);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return a})(),Iu=(()=>{class a{_elementRef=c(A);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return a})(),Ru=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return a})(),ud=(()=>{class a{_listOption=c(Tu,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,hostVars:4,hostBindings:function(t,n){t&2&&D("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return a})(),Pu=(()=>{class a extends ud{static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[U]})}return a})(),qn=(()=>{class a extends ud{static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[U]})}return a})(),Ou=new S("MAT_LIST_CONFIG"),Wn=(()=>{class a{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Ae(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Ae(e))}_disabled=v(!1);_defaultOptions=c(Ou,{optional:!0});static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,hostVars:1,hostBindings:function(t,n){t&2&&N("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return a})(),Au=(()=>{class a{_elementRef=c(A);_ngZone=c(W);_listBase=c(Wn,{optional:!0});_platform=c(_e);_hostElement;_isButtonElement;_noopAnimations=pe();_avatars;_icons;set lines(e){this._explicitLines=it(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Ae(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Ae(e))}_disabled=v(!1);_subscriptions=new be;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(Le).load(mt);let e=c(Uo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ks(this,this._ngZone,this._hostElement,this._platform,c(X)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ie(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&t===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,contentQueries:function(t,n,o){if(t&1&&Re(o,Pu,4)(o,qn,4),t&2){let r;M(r=E())&&(n._avatars=r),M(r=E())&&(n._icons=r)}},hostVars:4,hostBindings:function(t,n){t&2&&(N("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),D("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return a})();var fd=(()=>{class a extends Wn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275cmp=b({type:a,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[G([{provide:Wn,useExisting:a}]),U],ngContentSelectors:hd,decls:1,vars:0,template:function(t,n){t&1&&(ee(),F(0))},styles:[pd],encapsulation:2,changeDetection:0})}return a})(),uo=(()=>{class a extends Au{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Ae(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275cmp=b({type:a,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,n,o){if(t&1&&Re(o,Iu,5)(o,Un,5)(o,Ru,5),t&2){let r;M(r=E())&&(n._lines=r),M(r=E())&&(n._titles=r),M(r=E())&&(n._meta=r)}},viewQuery:function(t,n){if(t&1&&ce(Du,5)(Su,5),t&2){let o;M(o=E())&&(n._unscopedContent=o.first),M(o=E())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,n){t&2&&(N("aria-current",n._getAriaCurrent()),D("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[U],ngContentSelectors:Eu,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,n){t&1&&(ee(Mu),F(0),s(1,"span",1),F(2,1),F(3,2),s(4,"span",2,0),f("cdkObserveContent",function(){return n._updateItemLines(!0)}),F(6,3),l()(),F(7,4),F(8,5),I(9,"div",3))},dependencies:[ta],encapsulation:2,changeDetection:0})}return a})();var gd=(()=>{class a extends Wn{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275cmp=b({type:a,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[G([{provide:Wn,useExisting:a}]),U],ngContentSelectors:hd,decls:1,vars:0,template:function(t,n){t&1&&(ee(),F(0))},styles:[pd],encapsulation:2,changeDetection:0})}return a})();var un=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[ia,fi,Ga,K,md]})}return a})();var Fu=["input"],Lu=["label"],Nu=["*"],zr={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Vu=new S("mat-checkbox-default-options",{providedIn:"root",factory:()=>zr}),at=(function(a){return a[a.Init=0]="Init",a[a.Checked=1]="Checked",a[a.Unchecked=2]="Unchecked",a[a.Indeterminate=3]="Indeterminate",a})(at||{}),Hr=class{source;checked},Bu=(()=>{class a{_elementRef=c(A);_changeDetectorRef=c(ne);_ngZone=c(W);_animationsDisabled=pe();_options=c(Vu,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Hr;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new R;indeterminateChange=new R;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=at.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){c(Le).load(mt);let e=c(new Lt("tabindex"),{optional:!0});this._options=this._options||zr,this.color=this._options.color||zr.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=c(le).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(at.Indeterminate):this._transitionCheckState(this.checked?at.Checked:at.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=v(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?at.Checked:at.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case at.Init:if(t===at.Checked)return this._animationClasses.uncheckedToChecked;if(t==at.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case at.Unchecked:return t===at.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case at.Checked:return t===at.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case at.Indeterminate:return t===at.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&ce(Fu,5)(Lu,5),t&2){let o;M(o=E())&&(n._inputElement=o.first),M(o=E())&&(n._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(Xe("id",n.id),N("tabindex",null)("aria-label",null)("aria-labelledby",null),ot(n.color?"mat-"+n.color:"mat-accent"),D("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",T],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",T],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",T],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:tt(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",T],checked:[2,"checked","checked",T],disabled:[2,"disabled","disabled",T],indeterminate:[2,"indeterminate","indeterminate",T]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[G([{provide:pt,useExisting:je(()=>a),multi:!0},{provide:Et,useExisting:a,multi:!0}]),xe],ngContentSelectors:Nu,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(ee(),s(0,"div",3),f("click",function(r){return n._preventBubblingFromLabel(r)}),s(1,"div",4,0)(3,"div",5),f("click",function(){return n._onTouchTargetClick()}),l(),s(4,"input",6,1),f("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(r){return n._onInteractionEvent(r)}),l(),I(6,"div",7),s(7,"div",8),Ut(),s(8,"svg",9),I(9,"path",10),l(),Lo(),I(10,"div",11),l(),I(11,"div",12),l(),s(12,"label",13,2),F(14),l()()),t&2){let o=Pe(2);x("labelPosition",n.labelPosition),h(4),D("mdc-checkbox--selected",n.checked),x("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),N("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),h(7),x("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),h(),x("for",n.inputId)}},dependencies:[Vt,Qa],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return a})(),bd=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[Bu,K]})}return a})();var zu=(a,i)=>i.dateStr;function Hu(a,i){if(a&1){let e=q();s(0,"div",5),f("click",function(){let n=V(e).$implicit,o=g();return B(o.onSelectDate(n.dateStr))}),s(1,"span",6),m(2),bt(3,"titlecase"),l(),s(4,"div",7),m(5),l()()}if(a&2){let e=i.$implicit,t=g();h(),te("color",e.dateStr===t.activeDate()?"var(--text-primary)":"var(--text-secondary)"),h(),$(" ",vt(3,10,e.dayName)," "),h(2),te("background-color",e.dateStr===t.activeDate()?"var(--text-primary)":"transparent")("color",e.dateStr===t.activeDate()?"var(--background-default)":"var(--text-primary)")("box-shadow",e.dateStr===t.activeDate()?"0 4px 8px var(--primary-light)":"none"),h(),$(" ",e.dayNumber," ")}}var fo=class a{activeDate=fe.required();dateSelected=Qt();dateStrip=v([]);centerDate=new Date;ngOnInit(){if(this.activeDate()){let[i,e,t]=this.activeDate().split("-");this.centerDate=new Date(Number(i),Number(e)-1,Number(t))}this.centerDate.setHours(0,0,0,0),this.generateDateStrip()}getLocalFormattedDate(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}generateDateStrip(){let i=[],e=new Date(this.centerDate);for(let t=-3;t<=3;t++){let n=new Date(e);n.setDate(e.getDate()+t),i.push({date:n,dayName:n.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),dayNumber:n.getDate(),dateStr:this.getLocalFormattedDate(n)})}this.dateStrip.set(i)}shiftDays(i){this.centerDate.setDate(this.centerDate.getDate()+i),this.generateDateStrip()}onSelectDate(i){this.dateSelected.emit(i)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-date-strip"]],inputs:{activeDate:[1,"activeDate"]},outputs:{dateSelected:"dateSelected"},decls:10,vars:0,consts:[[1,"df","fd-r","ai-c","gap-1","w-100","px-24","pb-24",2,"box-sizing","border-box"],["mat-icon-button","","aria-label","Previous week",2,"color","#a1a1aa","flex-shrink","0",3,"click"],[1,"df","fd-r","jc-sb","ai-c","w-100","overflow-x-auto","hide-scrollbar","scroll-smooth"],[1,"df","fd-c","ai-c","gap-2","cursor-pointer",2,"min-width","48px"],["mat-icon-button","","aria-label","Next week",2,"color","#a1a1aa","flex-shrink","0",3,"click"],[1,"df","fd-c","ai-c","gap-2","cursor-pointer",2,"min-width","48px",3,"click"],[1,"fs-12","fw-600","transition-all"],[1,"df","ai-c","jc-c","br-pill","fw-600","fs-16","transition-all",2,"width","48px","height","48px","box-sizing","border-box"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"button",1),f("click",function(){return t.shiftDays(-7)}),s(2,"mat-icon"),m(3,"chevron_left"),l()(),s(4,"div",2),re(5,Hu,6,12,"div",3,zu),l(),s(7,"button",4),f("click",function(){return t.shiftDays(7)}),s(8,"mat-icon"),m(9,"chevron_right"),l()()()),e&2&&(h(5),se(t.dateStrip()))},dependencies:[ge,ke,me,nt,As],encapsulation:2})};var go=class a{dedicatedMinutes=fe(0);completedMinutes=fe(0);percentage=ie(()=>{let i=this.dedicatedMinutes(),e=this.completedMinutes();return i===0?0:Math.min(100,Math.round(e/i*100))});chartData=ie(()=>{let i=this.completedMinutes(),e=this.dedicatedMinutes(),t=Math.max(0,e-i),n=Math.max(0,1440-e);return{labels:["Progress"],datasets:[{data:[i],backgroundColor:"#10b981",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Completed"},{data:[t],backgroundColor:"#6366f1",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Remaining"},{data:[n],backgroundColor:"#f1f5f9",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Free Time"}]}});chartOptions={indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:i=>` ${i.dataset.label}: ${this.formatTime(i.raw)}`}}},scales:{x:{stacked:!0,display:!1,max:1440},y:{stacked:!0,display:!1}}};formatTime(i){let e=Math.floor(i/60),t=Math.round(i%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-time-availability"]],inputs:{dedicatedMinutes:[1,"dedicatedMinutes"],completedMinutes:[1,"completedMinutes"]},decls:40,vars:15,consts:[[1,"df","fd-c","gap-4","p-20","br-24","bg-white",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box"],[1,"df","fd-r","jc-s","ai-c"],[1,"df","fd-c"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"text-indigo-600"],[1,"df","fd-c","ai-fe"],[1,"fs-20","fw-900",2,"color","#10b981","line-height","1"],[1,"fs-10","fw-700","text-secondary","uppercase"],[2,"height","12px","width","100%","position","relative"],["baseChart","","type","bar",3,"data","options"],[1,"df","fd-r","jc-sb","ai-c","mt-4","flex-wrap","gap-2"],[1,"df","ai-c","gap-3"],[1,"df","ai-c","gap-1"],[1,"br-pill",2,"width","8px","height","8px","background-color","#10b981"],[1,"fs-11","fw-700","text-secondary"],[1,"text-primary"],[1,"br-pill",2,"width","8px","height","8px","background-color","#6366f1"],[1,"br-pill",2,"width","8px","height","8px","background-color","#f1f5f9"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),m(4,"Daily Capacity"),l(),s(5,"h2",4)(6,"span",5),m(7),bt(8,"duration"),l(),m(9," total habits "),l()(),s(10,"div",6)(11,"span",7),m(12),l(),s(13,"span",8),m(14,"Done"),l()()(),s(15,"div",9),I(16,"canvas",10),l(),s(17,"div",11)(18,"div",12)(19,"div",13),I(20,"div",14),s(21,"span",15)(22,"span",16),m(23),bt(24,"duration"),l(),m(25," Done "),l()(),s(26,"div",13),I(27,"div",17),s(28,"span",15)(29,"span",16),m(30),bt(31,"duration"),l(),m(32," Left "),l()(),s(33,"div",13),I(34,"div",18),s(35,"span",15)(36,"span",16),m(37),bt(38,"duration"),l(),m(39," Free "),l()()()()()),e&2&&(h(7),O(vt(8,7,t.dedicatedMinutes())),h(5),$("",t.percentage(),"%"),h(4),x("data",t.chartData())("options",t.chartOptions),h(7),O(vt(24,9,t.completedMinutes())),h(7),O(vt(31,11,t.dedicatedMinutes()-t.completedMinutes())),h(7),O(vt(38,13,1440-t.dedicatedMinutes())))},dependencies:[De,pi,Jt],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};var ju=new S("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var _o=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({providers:[sn,{provide:ju,useValue:{separatorKeyCodes:[13]}}],imports:[fi,K]})}return a})();function Gu(a,i){if(a&1){let e=q();s(0,"button",8),f("click",function(){V(e);let n=g();return B(n.isEditMode.set(!0))}),s(1,"mat-icon"),m(2,"edit"),l()()}}function Wu(a,i){if(a&1&&(s(0,"div",9)(1,"span",11),m(2,"Mood"),l(),s(3,"span",15),m(4),l()()),a&2){let e=g(2);h(4),O(e.mood)}}function Uu(a,i){if(a&1&&(s(0,"span",17),m(1),l()),a&2){let e=i.$implicit;h(),O(e)}}function qu(a,i){if(a&1&&(s(0,"div",10)(1,"span",11),m(2,"Tags"),l(),s(3,"div",16),re(4,Uu,2,1,"span",17,Ft),l()()),a&2){let e=g(2);h(4),se(e.selectedTags)}}function Qu(a,i){if(a&1){let e=q();s(0,"div",6),w(1,Wu,5,1,"div",9),w(2,qu,6,0,"div",10),s(3,"div",10)(4,"span",11),m(5),l(),s(6,"p",12),m(7),l()(),s(8,"div",13)(9,"button",14),f("click",function(){V(e);let n=g();return B(n.close())}),m(10,"Close"),l()()()}if(a&2){let e=g();h(),k(e.mood?1:-1),h(),k(e.selectedTags.size>0?2:-1),h(3),$(" ",e.data.isInFuture?"Plan":"Reflection"," "),h(2),$(" ",e.tempNote||(e.data.isInFuture?"No plan added yet.":"No reflection added yet.")," ")}}function $u(a,i){if(a&1){let e=q();s(0,"span",31),f("click",function(){let n=V(e).$implicit,o=g(2);return B(o.mood=n)}),m(1),l()}if(a&2){let e=i.$implicit,t=g(2);te("opacity",t.mood===e?"1":"0.4")("filter",t.mood===e?"grayscale(0)":"grayscale(1)"),h(),O(e)}}function Yu(a,i){if(a&1){let e=q();s(0,"div",32),f("click",function(){let n=V(e).$implicit,o=g(2);return B(o.toggleTag(n))}),m(1),l()}if(a&2){let e=i.$implicit,t=g(2);te("background-color",t.selectedTags.has(e)?"var(--primary-light)":"var(--surface-alt)")("color",t.selectedTags.has(e)?"var(--primary-default)":"var(--text-secondary)")("border",t.selectedTags.has(e)?"1px solid var(--primary-default)":"1px solid var(--border-subtle)"),h(),$(" ",e," ")}}function Xu(a,i){if(a&1){let e=q();s(0,"button",33),f("click",function(){V(e);let n=g(2);return B(n.isEditMode.set(!1))}),m(1,"Cancel"),l()}}function Zu(a,i){if(a&1){let e=q();s(0,"button",33),f("click",function(){V(e);let n=g(2);return B(n.close())}),m(1,"Cancel"),l()}}function Ku(a,i){if(a&1){let e=q();s(0,"div",7)(1,"div",18)(2,"span",19),m(3,"How do you feel?"),l(),s(4,"div",20),re(5,$u,2,5,"span",21,Ft),l()(),s(7,"div",22)(8,"span",19),m(9,"Quick Tags"),l(),s(10,"div",23),re(11,Yu,2,7,"div",24,Ft),l()(),s(13,"div",25)(14,"span",19),m(15),l(),s(16,"mat-form-field",26)(17,"textarea",27),Ai("ngModelChange",function(n){V(e);let o=g();return Oi(o.tempNote,n)||(o.tempNote=n),B(n)}),l()()(),s(18,"div",28),w(19,Xu,2,0,"button",29)(20,Zu,2,0,"button",29),s(21,"button",30),f("click",function(){V(e);let n=g();return B(n.save())}),m(22,"Save Entry"),l()()()}if(a&2){let e=g();h(5),se(e.moods),h(6),se(e.availableTags),h(4),$(" ",e.data.isInFuture?"Planning":"Reflection"," "),h(2),Pi("ngModel",e.tempNote),x("placeholder",e.data.isInFuture?"What is the plan for this day?":"How did it go today?"),h(2),k(e.hasExistingContent?19:20)}}var fn=class a{dialogRef=c(oi);data=c(ri);moods=["\u{1F525}","\u26A1","\u{1F607}","\u{1F634}","\u{1F912}","\u{1F680}","\u{1F308}"];availableTags=["#Sick","#Travel","#HighEnergy","#WorkStress","#Weekend","#Social"];mood=this.data.log.mood||"";selectedTags=new Set(this.data.log.tags||[]);tempNote=this.data.isInFuture?this.data.log.planNote||"":this.data.log.reflectionNote||"";isEditMode=v(!1);hasExistingContent=!1;ngOnInit(){this.hasExistingContent=!!(this.mood||this.selectedTags.size>0||this.tempNote),this.isEditMode.set(!this.hasExistingContent)}toggleTag(i){this.selectedTags.has(i)?this.selectedTags.delete(i):this.selectedTags.add(i)}save(){let i={mood:this.mood,tags:Array.from(this.selectedTags)};this.data.isInFuture?i.planNote=this.tempNote:i.reflectionNote=this.tempNote,this.dialogRef.close(i)}close(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-habit-log-note-dialog"]],decls:10,vars:4,consts:[[1,"p-24","df","fd-c","gap-4","min-w-320"],[1,"df","fd-r","jc-sb","ai-c","mb-16"],[1,"df","fd-c"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"fs-12","fw-600","text-secondary"],["mat-icon-button","",2,"color","var(--primary-default)"],[1,"df","fd-c","gap-6"],[1,"df","fd-c","gap-4"],["mat-icon-button","",2,"color","var(--primary-default)",3,"click"],[1,"df","fd-c","gap-1"],[1,"df","fd-c","gap-1","mt-4"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"m-0","fs-14","text-primary","br-12","p-12",2,"background","var(--surface-alt)","min-height","60px","line-height","1.5","white-space","pre-wrap"],[1,"df","fd-r","jc-e","mt-12"],["mat-button","",1,"br-12",3,"click"],[1,"fs-28"],[1,"df","fd-r","flex-wrap","gap-2","pt-2"],[1,"px-8","py-2","br-8","fs-12","fw-600",2,"background","var(--surface-alt)","color","var(--text-secondary)","border","1px solid var(--border-subtle)"],[1,"df","fd-c","gap-2","mb-8"],[1,"fs-12","fw-700","text-secondary","uppercase","ls-1"],[1,"df","fd-r","gap-3","fs-24","py-8"],[1,"cursor-pointer","transition-all","hover-scale",3,"opacity","filter"],[1,"df","fd-c","gap-2","mb-12"],[1,"df","fd-r","flex-wrap","gap-2","pt-4"],[1,"px-10","py-4","br-12","fs-12","fw-600","transition-all","cursor-pointer",3,"background-color","color","border"],[1,"df","fd-c","gap-2"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","maxlength","300","rows","4",3,"ngModelChange","ngModel","placeholder"],[1,"df","fd-r","jc-e","gap-2","mt-20"],["mat-button",""],["mat-flat-button","","color","primary",1,"br-12","px-20","text-bg",3,"click"],[1,"cursor-pointer","transition-all","hover-scale",3,"click"],[1,"px-10","py-4","br-12","fs-12","fw-600","transition-all","cursor-pointer",3,"click"],["mat-button","",3,"click"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),m(4),l(),s(5,"span",4),m(6),l()(),w(7,Gu,3,0,"button",5),l(),w(8,Qu,11,4,"div",6)(9,Ku,23,4,"div",7),l()),e&2&&(h(4),O(t.data.habitName),h(2),O(t.data.dateStr),h(),k(t.isEditMode()?-1:7),h(),k(t.isEditMode()?9:8))},dependencies:[ge,ke,me,Qe,nt,$e,Be,Ke,ft,It,Ci,ut,Tt,ur,Vi,_o,De],styles:[".hover-scale[_ngcontent-%COMP%]{transition:transform .2s}.hover-scale[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.ls-1[_ngcontent-%COMP%]{letter-spacing:.5px}"]})};var Ju=(a,i)=>i.habit.id;function ef(a,i){a&1&&(s(0,"mat-icon",16),m(1,"check"),l())}function tf(a,i){if(a&1&&(s(0,"div",22)(1,"mat-icon",28),m(2," schedule "),l(),s(3,"span",29),m(4),bt(5,"duration"),l()()),a&2){let e=g().$implicit;h(4),$(" ",vt(5,1,e.habit.duration)," ")}}function nf(a,i){if(a&1&&(s(0,"div",23)(1,"span",30),m(2,"\u{1F525}"),l(),s(3,"span",31),m(4),l()()),a&2){let e=g().$implicit;h(4),O(e.streak)}}function af(a,i){a&1&&(s(0,"mat-icon",26),m(1," sticky_note_2 "),l())}function of(a,i){a&1&&(s(0,"mat-icon",27),m(1," add_comment "),l())}function rf(a,i){if(a&1){let e=q();s(0,"div",14),f("click",function(){let n=V(e).$implicit,o=g();return B(o.toggleHabit(n.habit.id))}),s(1,"div",15),w(2,ef,2,0,"mat-icon",16),l(),s(3,"div",17)(4,"div",18)(5,"mat-icon"),m(6),l()(),s(7,"div",19)(8,"div",20)(9,"h3",21),m(10),l(),w(11,tf,6,3,"div",22),w(12,nf,5,1,"div",23),l(),s(13,"p",24),m(14),l()(),s(15,"button",25),f("click",function(n){let o=V(e).$implicit,r=g();return n.stopPropagation(),B(r.openNoteEditor(o))}),w(16,af,2,0,"mat-icon",26)(17,of,2,0,"mat-icon",27),l()()()}if(a&2){let e=i.$implicit;h(),te("background-color",e.completed?"#f97316":"#fff")("border",e.completed?"none":"2px solid #cbd5e1"),h(),k(e.completed?2:-1),h(),te("opacity",e.completed?"0.7":"1"),h(),te("background-color",e.habit.color+"20"),h(),te("color",e.habit.color),h(),O(e.habit.icon),h(3),te("text-decoration",e.completed?"line-through":"none"),h(),$(" ",e.habit.name," "),h(),k(e.habit.duration?11:-1),h(),k(e.streak>0?12:-1),h(2),$(" ",e.habit.description||"No description"," "),h(2),k(e.hasNote?16:17)}}function sf(a,i){a&1&&(s(0,"div",13)(1,"mat-icon",32),m(2,"event_busy"),l(),s(3,"span",33),m(4,"No routines for this day!"),l()())}var bo=class a{habitService=c(ct);habitLogService=c(Xt);dialog=c(Ct);activeDateStr=v("");habitsView=v([]);totalDedicatedMinutes=ie(()=>this.habitsView().reduce((i,e)=>i+(e.habit.duration||0),0));completedMinutes=ie(()=>this.habitsView().filter(i=>i.completed).reduce((i,e)=>i+(e.habit.duration||0),0));activeDateDisplay=ie(()=>{let i=this.activeDateStr();if(!i)return"";let[e,t,n]=i.split("-");return new Date(Number(e),Number(t)-1,Number(n)).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"})});userName=v("Budi");greeting=ie(()=>{let i=new Date().getHours();return i<12?"Morning":i<17?"Afternoon":"Evening"});async ngOnInit(){this.activeDateStr.set(this.getLocalFormattedDate(new Date)),this.loadHabitsForActiveDate();let i=await Ze.users.orderBy("id").first();i&&this.userName.set(i.name.split(" ")[0])}getLocalFormattedDate(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}selectDate(i){this.activeDateStr.set(i),this.loadHabitsForActiveDate()}async loadHabitsForActiveDate(){let i=await this.habitService.loadHabits(),e=await this.habitLogService.getLogsForDate(this.activeDateStr()),t=new Set(e.map(J=>J.habitId)),[n,o,r]=this.activeDateStr().split("-"),p=new Date(Number(n),Number(o)-1,Number(r)).getDay(),_={0:6,1:0,2:1,3:2,4:3,5:4,6:5}[p],P=i.filter(J=>J.frequency===0?!0:J.days&&Array.isArray(J.days)&&J.days.length>0?J.days.includes(_):!1),z=await Promise.all(P.map(async J=>{let ue=await this.habitLogService.getStreakStatus(J.id),ae=e.find(Se=>Se.habitId===J.id);return{habit:J,completed:t.has(J.id),streak:ue.current,hasNote:!!(ae?.reflectionNote||ae?.planNote||ae?.mood||ae?.tags&&ae.tags.length>0)}}));this.habitsView.set(z)}async toggleHabit(i){let e=await this.habitLogService.toggleCompletion(i,this.activeDateStr()),t=await this.habitLogService.getStreakStatus(i);this.habitsView.update(n=>n.map(o=>o.habit.id===i?Fe(Q({},o),{completed:e,streak:t.current}):o))}async openNoteEditor(i){let e=this.activeDateStr(),[t,n,o]=e.split("-"),r=new Date(Number(t),Number(n)-1,Number(o)),d=new Date;d.setHours(0,0,0,0);let p=r.getTime()>d.getTime(),_=(await this.habitLogService.getLogsForDate(e)).find(z=>z.habitId===i.habit.id)||{habitId:i.habit.id,dateStr:e,completedAt:Date.now()};this.dialog.open(fn,{width:"450px",autoFocus:!1,restoreFocus:!1,data:{dateStr:e,habitName:i.habit.name,isCompleted:i.completed,isInFuture:p,log:_}}).afterClosed().subscribe(async z=>{z&&(await this.habitLogService.saveLogData(i.habit.id,e,z),this.loadHabitsForActiveDate())})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-today"]],decls:18,vars:7,consts:[[1,"df","fd-c","w-100"],[1,"df","fd-r","jc-sb","ai-c","gap-2","p-24","pb-16"],[1,"df","fd-c","gap-2"],[1,"m-0","fs-28","fw-700",2,"color","var(--text-primary)","letter-spacing","-0.5px"],[1,"fs-13","fw-500","text-secondary",2,"color","#6b7280"],[3,"dateSelected","activeDate"],[1,"p-24"],[3,"dedicatedMinutes","completedMinutes"],[1,"df","fd-r","jc-sb","ai-c","gap-2","w-100","px-24","mb-16",2,"box-sizing","border-box"],[1,"m-0","fs-18","fw-700",2,"color","var(--text-primary)"],[1,"df","fd-c","gap-4","position-relative","w-100","px-24","pb-80",2,"box-sizing","border-box"],[1,"position-absolute",2,"left","36px","top","20px","bottom","20px","width","0px","border-left","2px dotted #e5e7eb","z-index","0"],[1,"df","fd-r","gap-4","ai-c","w-100","position-relative","z-1",2,"box-sizing","border-box"],[1,"p-32","df","fd-c","ai-c","jc-c","gap-2","br-16","position-relative","z-1","w-100",2,"background-color","var(--surface-default)","box-shadow","0 4px 12px rgba(0,0,0,0.03)","box-sizing","border-box"],[1,"df","fd-r","gap-4","ai-c","w-100","position-relative","z-1",2,"box-sizing","border-box",3,"click"],[1,"df","ai-c","jc-c","cursor-pointer","transition-all","bg-white",2,"width","24px","height","24px","min-width","24px","border-radius","50%","box-sizing","border-box"],[2,"font-size","16px","width","16px","height","16px","color","white"],[1,"p-16","br-16","df","fd-r","ai-c","gap-4","w-100","fg-1",2,"box-shadow","0 4px 12px rgba(0, 0, 0, 0.03)","border","1px solid var(--border-subtle)","box-sizing","border-box","background-color","var(--surface-default)"],[1,"df","ai-c","jc-c",2,"width","48px","height","48px","min-width","48px","border-radius","14px"],[1,"df","fd-c","flex-1","overflow-hidden","gap-1",2,"min-width","0"],[1,"df","fd-r","ai-c","gap-2"],[1,"m-0","fs-15","fw-600","truncate",2,"color","var(--text-primary)"],[1,"df","ai-c","gap-1","px-6","py-1","br-8",2,"background-color","#f1f5f9","border","1px solid #e2e8f0"],[1,"df","ai-c","gap-1","px-6","py-1","br-8",2,"background-color","#fff7ed","border","1px solid #ffedd5"],[1,"m-0","fs-12","fw-500","truncate",2,"color","#a1a1aa"],[1,"df","ai-c",2,"background","transparent","width","32px","height","32px","border","1px solid #e2e8f0","border-radius","8px",3,"click"],[2,"font-size","18px","width","18px","height","18px","color","#f97316"],[2,"font-size","18px","width","18px","height","18px"],[2,"font-size","11px","width","11px","height","11px","color","#64748b"],[1,"fs-10","fw-700",2,"color","#64748b"],[2,"font-size","11px"],[1,"fs-10","fw-700",2,"color","#ea580c"],[2,"font-size","48px","width","48px","height","48px","color","#cbd5e1"],[1,"fs-14","fw-600","text-secondary"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),m(4),l(),s(5,"span",4),m(6),l()()(),s(7,"t-date-strip",5),f("dateSelected",function(o){return t.selectDate(o)}),l(),s(8,"div",6),I(9,"t-time-availability",7),l(),s(10,"div",8)(11,"h2",9),m(12,"Daily routine"),l()(),s(13,"div",10),I(14,"div",11),re(15,rf,18,19,"div",12,Ju,!1,sf,5,0,"div",13),l()()),e&2&&(h(4),Jn(" ",t.greeting(),", ",t.userName()," "),h(2),$(" ",t.activeDateDisplay()," "),h(),x("activeDate",t.activeDateStr()),h(2),x("dedicatedMinutes",t.totalDedicatedMinutes())("completedMinutes",t.completedMinutes()),h(6),se(t.habitsView()))},dependencies:[un,ge,ke,bd,me,Yt,fo,go,$e,Jt],styles:[".completed-bg[_ngcontent-%COMP%]{background-color:var(--success-50, #f0fdf4);opacity:.9}"]})};function lf(a,i){if(a&1&&hi(0,"img",3),a&2){let e=g();te("width",e.size(),"px")("height",e.size(),"px"),Xe("src",e.avatar(),_s)}}function cf(a,i){if(a&1&&(We(0,"span",4),m(1),et()),a&2){let e=g();te("font-size",e.size()*.4,"px"),h(),$(" ",e.initials()," ")}}var Mi=class a{name=fe("");avatar=fe(null);size=fe(40);circular=fe(!0);initials=ie(()=>{let i=this.name();if(!i)return"?";let e=i.trim().split(" ");return e.length>=2?(e[0][0]+e[e.length-1][0]).toUpperCase():e[0][0].toUpperCase()});bgColor=ie(()=>{let i=["#6366f1","#8b5cf6","#ec4899","#f43f5e","#ef4444","#f59e0b","#10b981","#06b6d4","#3b82f6","#2563eb"],e=this.name(),t=0;for(let o=0;o<e.length;o++)t=e.charCodeAt(o)+((t<<5)-t);let n=Math.abs(t)%i.length;return i[n]});static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-avatar"]],inputs:{name:[1,"name"],avatar:[1,"avatar"],size:[1,"size"],circular:[1,"circular"]},decls:3,vars:13,consts:[[1,"avatar-container"],["alt","avatar",2,"object-fit","cover","border-radius","inherit",3,"src","width","height"],[1,"initials",3,"font-size"],["alt","avatar",2,"object-fit","cover","border-radius","inherit",3,"src"],[1,"initials"]],template:function(e,t){e&1&&(We(0,"div",0),w(1,lf,1,5,"img",1)(2,cf,2,3,"span",2),et()),e&2&&(te("width",t.size(),"px")("height",t.size(),"px")("min-width",t.size(),"px")("min-height",t.size(),"px")("background-color",t.avatar()?"transparent":t.bgColor())("border-radius",t.circular()?"50%":"12px"),h(),k(t.avatar()?1:2))},dependencies:[De],styles:[".avatar-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;overflow:hidden;color:#fff;font-weight:700;-webkit-user-select:none;user-select:none;box-shadow:inset 0 0 0 1px #0000000d}.initials[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:-.5px}"]})};var vo=class a{dialog=c(Ct);fb=c(an);snackBar=c(li);activeUser=v(null);profileForm=new xi({name:new vi("",{nonNullable:!0,validators:[Ue.required,Ue.minLength(2)]}),gender:new vi("",{nonNullable:!0,validators:Ue.required})});previewAvatar=v(null);async ngOnInit(){let i=await Ze.users.orderBy("id").first();i&&(this.activeUser.set(i),this.previewAvatar.set(i.avatar||null),this.profileForm.patchValue({name:i.name,gender:i.gender}))}onFileSelected(i){let e=i.target.files[0];if(e){let t=new FileReader;t.onload=n=>{this.previewAvatar.set(n.target.result)},t.readAsDataURL(e)}}async saveProfile(){if(this.profileForm.valid&&this.activeUser()?.id){let i=this.profileForm.getRawValue(),e={name:i.name,gender:i.gender,avatar:this.previewAvatar()||void 0};await Ze.users.update(this.activeUser().id,e),this.snackBar.open("Profile updated successfully!","Close",{duration:3e3}),this.activeUser.update(t=>t?Q(Q({},t),e):null)}}clearAllData(){this.dialog.open(mn,{width:"450px",data:{title:"Factory Reset Trackify",message:"Are you absolutely sure you want to permanently erase ALL data? This will instantly wipe out your Profile, active Habits, and entire historical Logs array forever. This cannot be undone!"}}).afterClosed().subscribe(async e=>{e&&(await Ze.users.clear(),await Ze.habits.clear(),await Ze.habitLogs.clear(),await Ze.categories.clear(),window.location.reload())})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-settings"]],decls:60,vars:5,consts:[["fileInput",""],[1,"p-24","df","fd-c","gap-6","font-inter"],[1,"df","fd-c","gap-1"],[1,"m-0","fs-28","fw-700","text-primary"],[1,"m-0","fs-14","fw-500"],[1,"bg-white","br-16","p-24","df","fd-c","gap-6","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","fd-c","gap-2","mb-8"],[1,"m-0","fs-18","fw-700","text-primary"],[1,"m-0","fs-14","text-secondary"],[1,"df","fd-c","gap-6","w-100",3,"ngSubmit","formGroup"],[1,"df","ai-c","gap-8","p-16","br-12"],[1,"cursor-pointer",3,"click"],[3,"name","avatar","size"],["type","file","accept","image/*",2,"display","none",3,"change"],[1,"fs-15","fw-700"],[1,"fs-13","text-secondary"],[1,"df","fd-r","gap-4","flex-wrap"],[1,"df","fd-c","gap-2","flex-1",2,"min-width","200px"],[1,"fs-13","fw-700","text-primary","uppercase","ls-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","name","placeholder","E.g. Alex","required",""],["formControlName","gender","required",""],["value","male"],["value","female"],["value","other"],[1,"df","jc-fe"],["mat-flat-button","","color","primary","type","submit",1,"fw-700","py-12","px-24","br-8","text-bg",3,"disabled"],[1,"bg-white","br-16","p-24","df","fd-c","gap-4","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"m-0","fs-18","fw-700","text-warn"],[1,"df","fd-c","gap-4"],[1,"df","fd-r","jc-sb","ai-c","p-20","br-8","b-1-solid",2,"border-color","#fca5a5","background-color","#fef2f2","box-sizing","border-box"],[1,"fs-16","fw-700",2,"color","#b91c1c"],[1,"fs-13","fw-500",2,"color","#ef4444"],["mat-flat-button","","color","warn",1,"fw-700","text-bg",3,"click"],[1,"mr-4"]],template:function(e,t){if(e&1){let n=q();s(0,"div",1)(1,"div",2)(2,"h1",3),m(3,"Settings"),l(),s(4,"p",4),m(5,"Manage your application data and preferences"),l()(),s(6,"div",5)(7,"div",6)(8,"h2",7),m(9,"Profile"),l(),s(10,"p",8),m(11,"Update your personal information"),l()(),s(12,"form",9),f("ngSubmit",function(){return t.saveProfile()}),s(13,"div",10)(14,"div",11),f("click",function(){V(n);let r=Pe(17);return B(r.click())}),I(15,"t-avatar",12),s(16,"input",13,0),f("change",function(r){return t.onFileSelected(r)}),l()(),s(18,"div",2)(19,"span",14),m(20,"Profile Picture"),l(),s(21,"span",15),m(22,"Click the circle to change your photo"),l()()(),s(23,"div",16)(24,"div",17)(25,"span",18),m(26,"Display Name"),l(),s(27,"mat-form-field",19),I(28,"input",20),l()(),s(29,"div",17)(30,"span",18),m(31,"Gender"),l(),s(32,"mat-form-field",19)(33,"mat-select",21)(34,"mat-option",22),m(35,"Male"),l(),s(36,"mat-option",23),m(37,"Female"),l(),s(38,"mat-option",24),m(39,"Other"),l()()()()(),s(40,"div",25)(41,"button",26),m(42," Save Changes "),l()()()(),s(43,"div",27)(44,"div",6)(45,"h2",28),m(46,"Danger Zone"),l(),s(47,"p",8),m(48,"Irreversible destructive actions against your device's local database. "),l()(),s(49,"div",29)(50,"div",30)(51,"div",2)(52,"span",31),m(53,"Wipe Tracking Data"),l(),s(54,"span",32),m(55,"Permanently delete all habits, logs, categories, and your profile."),l()(),s(56,"button",33),f("click",function(){return t.clearAllData()}),s(57,"mat-icon",34),m(58,"delete_forever"),l(),m(59," Erase "),l()()()()()}if(e&2){let n;h(12),x("formGroup",t.profileForm),h(3),x("name",((n=t.profileForm.get("name"))==null?null:n.value)||"")("avatar",t.previewAvatar())("size",80),h(26),x("disabled",t.profileForm.invalid)}},dependencies:[De,me,Qe,ge,ke,$e,on,ki,ut,Tt,wi,zi,Gt,Bi,Be,Ke,ft,It,Si,Di,Pt,dn,Mi],encapsulation:2})};var jr=new S("CdkAccordion"),vd=(()=>{class a{_stateChanges=new y;_openCloseAllActions=new y;id=c(le).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",T]},exportAs:["cdkAccordion"],features:[G([{provide:jr,useExisting:a}]),xe]})}return a})(),yd=(()=>{class a{accordion=c(jr,{optional:!0,skipSelf:!0});_changeDetectorRef=c(ne);_expansionDispatcher=c(Ln);_openCloseAllSubscription=be.EMPTY;closed=new R;opened=new R;destroyed=new R;expandedChange=new R;id=c(le).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=v(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",T],disabled:[2,"disabled","disabled",T]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[G([{provide:jr,useValue:void 0}])]})}return a})(),xd=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({})}return a})();var df=["body"],mf=["bodyWrapper"],hf=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],pf=["mat-expansion-panel-header","*","mat-action-row"];function uf(a,i){}var ff=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],gf=["mat-panel-title","mat-panel-description","*"];function _f(a,i){a&1&&(We(0,"span",1),Ut(),We(1,"svg",2),hi(2,"path",3),et()())}var Gr=new S("MAT_ACCORDION"),wd=new S("MAT_EXPANSION_PANEL"),bf=(()=>{class a{_template=c(Je);_expansionPanel=c(wd,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),kd=new S("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Wr=(()=>{class a extends yd{_viewContainerRef=c(lt);_animationsDisabled=pe();_document=c(ye);_ngZone=c(W);_elementRef=c(A);_renderer=c(ve);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new R;afterCollapse=new R;_inputChanges=new y;accordion=c(Gr,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(le).getId("mat-expansion-panel-header-");constructor(){super();let e=c(kd,{optional:!0});this._expansionDispatcher=c(Ln),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Ee(null),he(()=>this.expanded&&!this._portal),He(1)).subscribe(()=>{this._portal=new ht(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(t,n,o){if(t&1&&Re(o,bf,5),t&2){let r;M(r=E())&&(n._lazyContent=r.first)}},viewQuery:function(t,n){if(t&1&&ce(df,5)(mf,5),t&2){let o;M(o=E())&&(n._body=o.first),M(o=E())&&(n._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,n){t&2&&D("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",T],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[G([{provide:Gr,useValue:void 0},{provide:wd,useExisting:a}]),U,xe],ngContentSelectors:pf,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,n){t&1&&(ee(hf),F(0),s(1,"div",2,0)(3,"div",3,1)(5,"div",4),F(6,1),qe(7,uf,0,0,"ng-template",5),l(),F(8,2),l()()),t&2&&(h(),N("inert",n.expanded?null:""),h(2),x("id",n.id),N("aria-labelledby",n._headerId),h(4),x("cdkPortalOutlet",n._portal))},dependencies:[kt],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return a})();var Ur=(()=>{class a{panel=c(Wr,{host:!0});_element=c(A);_focusMonitor=c(yt);_changeDetectorRef=c(ne);_parentChangeSubscription=be.EMPTY;constructor(){c(Le).load(mt);let e=this.panel,t=c(kd,{optional:!0}),n=c(new Lt("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(he(r=>!!(r.hideToggle||r.togglePosition))):Ui;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=Ie(e.opened,e.closed,o,e._inputChanges.pipe(he(r=>!!(r.hideToggle||r.disabled||r.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(he(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Oe(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,n){t&1&&f("click",function(){return n._toggle()})("keydown",function(r){return n._keydown(r)}),t&2&&(N("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),te("height",n._getHeaderHeight()),D("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:tt(e)]},ngContentSelectors:gf,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,n){t&1&&(ee(ff),We(0,"span",0),F(1),F(2,1),F(3,2),et(),w(4,_f,3,0,"span",1)),t&2&&(D("mat-content-hide-toggle",!n._showToggle()),h(4),k(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var Cd=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})(),Dd=(()=>{class a extends vd{_keyManager;_ownHeaders=new Ii;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Ee(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new sa(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["mat-accordion"]],contentQueries:function(t,n,o){if(t&1&&Re(o,Ur,5),t&2){let r;M(r=E())&&(n._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,n){t&2&&D("mat-accordion-multi",n.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",T],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[G([{provide:Gr,useExisting:a}]),U]})}return a})(),Sd=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[xd,Ht,K]})}return a})();var yf=["tooltip"],xf=20;var wf=new S("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let a=c(X);return()=>Li(a,{scrollThrottle:xf})}}),kf=new S("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Md="tooltip-panel",Cf={passive:!0},Df=8,Sf=8,Mf=24,Ef=200,qr=(()=>{class a{_elementRef=c(A);_ngZone=c(W);_platform=c(_e);_ariaDescriber=c(Xs);_focusMonitor=c(yt);_dir=c(Ce);_injector=c(X);_viewContainerRef=c(lt);_mediaMatcher=c(qs);_document=c(ye);_renderer=c(ve);_animationsDisabled=pe();_defaultOptions=c(kf,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ed;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ae(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Ae(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=it(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=it(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Df}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Z(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new zt(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=n.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Z(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof A)return this._overlayRef;this._detach()}let t=this._injector.get(Bt).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Md}`,o=Cn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(Z(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ai(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(wf)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Z(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Z(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Z(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Z(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(Q(Q({},n.main),o.main)),this._addOffset(Q(Q({},n.fallback),o.fallback))])}_addOffset(e){let t=Sf,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:o,y:r}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:o,y:r}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Te(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:o}=e,r;if(t==="center"?this._dir&&this._dir.value==="rtl"?r=n==="end"?"left":"right":r=n==="start"?"left":"right":r=t==="bottom"&&o==="top"?"above":"below",r!==this._currentPosition){let d=this._overlayRef;if(d){let p=`${this._cssClassPrefix}-${Md}-`;d.removePanelClass(p+this._currentPosition),d.addPanelClass(p+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Cf))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Te({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Oe(e):!0;static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&D("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return a})(),Ed=(()=>{class a{_changeDetectorRef=c(ne);_elementRef=c(A);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=pe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Mf&&e.width>=Ef}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:n),t.classList.add(e?n:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(t);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&ce(yf,7),t&2){let o;M(o=E())&&(n._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&f("mouseleave",function(r){return n._handleMouseLeave(r)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){t&1&&(We(0,"div",1,0),Kn("animationend",function(r){return n._handleAnimationEnd(r)}),We(2,"div",2),m(3),et()()),t&2&&(ot(n.tooltipClass),D("mdc-tooltip--multiline",n._isMultiline),h(3),O(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return a})();var Td=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[ra,jt,K,Mt]})}return a})();var Id=(a,i)=>i.id;function If(a,i){if(a&1&&(s(0,"mat-list-item",20)(1,"mat-icon",21),m(2),l(),s(3,"span",22),m(4),l()()),a&2){let e=i.$implicit;h(),te("color",e.color),h(),O(e.icon),h(2),O(e.name)}}function Rf(a,i){if(a&1&&(s(0,"div",12)(1,"span",18),m(2,"Assigned Habits"),l(),s(3,"mat-list",19),re(4,If,5,4,"mat-list-item",20,Id),l()()),a&2){let e=g().$implicit,t=g();h(4),se(t.getHabits(e.id))}}function Pf(a,i){a&1&&(s(0,"p",13),m(1,"No habits assigned yet"),l())}function Of(a,i){if(a&1){let e=q();s(0,"mat-expansion-panel",10,0)(2,"mat-expansion-panel-header")(3,"mat-panel-title",11),m(4),s(5,"span"),m(6),l()()(),s(7,"div"),w(8,Rf,6,0,"div",12)(9,Pf,2,0,"p",13),l(),s(10,"div",14)(11,"div",15)(12,"button",16),f("click",function(){let n=V(e).$implicit,o=g();return B(o.navigateToDetails(n.id))}),s(13,"mat-icon"),m(14,"insights"),l(),m(15," View Details "),l()(),s(16,"button",17),f("click",function(){let n=V(e).$implicit,o=g();return B(o.deleteCategory(n.id))}),s(17,"mat-icon"),m(18,"delete"),l()()()()}if(a&2){let e=i.$implicit,t=g();h(4),$(" ",e.name," "),h(2),Jn("",t.getHabitCount(e.id)," ",t.getHabitCount(e.id)===1?"habit":"habits"),h(2),k(t.getHabits(e.id).length>0?8:9),h(8),x("disabled",t.getHabitCount(e.id)>0)("matTooltip",t.getHabitCount(e.id)>0?"Cannot delete category with habits":"Delete category")}}var yo=class a{categoryService=c(ui);habitService=c(ct);router=c($t);categories=v([]);habitCounts=v({});habitsByCategory=v({});newCategoryName="";snackBar=c(li);ngOnInit(){this.loadCategories()}async loadCategories(){let i=await this.categoryService.getCategories();this.categories.set(i);let e=await this.habitService.loadHabits(),t={},n={};e.forEach(o=>{o.category?.id!==void 0&&(t[o.category.id]=(t[o.category.id]||0)+1,n[o.category.id]||(n[o.category.id]=[]),n[o.category.id].push(o))}),this.habitCounts.set(t),this.habitsByCategory.set(n)}getHabits(i){return this.habitsByCategory()[i]||[]}getHabitCount(i){return this.habitCounts()[i]||0}async addCategory(){if(this.newCategoryName.trim()){if(this.checkIfCategoryAlreadyExists()){this.snackBar.open("Category already exists","Close",{duration:2e3});return}await this.categoryService.addCategory(this.newCategoryName.trim()),this.newCategoryName="",await this.loadCategories()}}checkIfCategoryAlreadyExists(){return this.categories().some(i=>i.name.toLowerCase()===this.newCategoryName.trim().toLowerCase())}async deleteCategory(i){if(this.getHabitCount(i)>0){this.snackBar.open("Cannot delete category with habits assigned to it","Close",{duration:3e3});return}await this.categoryService.deleteCategory(i),await this.loadCategories()}navigateToDetails(i){this.router.navigate(["/categories",i])}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-categories"]],decls:16,vars:2,consts:[["panel",""],[1,"p-16","df","fd-c","gap-4"],[1,"df","fd-c","gap-4"],[1,"m-0"],[1,"m-0","text-secondary"],[1,"df","ai-c","gap-8",3,"ngSubmit"],["appearance","outline",1,"w-100","m-0","flex-1",2,"margin-bottom","-1.25em"],["matInput","","name","catName","placeholder","e.g. Finances","required","",3,"ngModelChange","ngModel"],["mat-flat-button","","color","primary","type","submit",1,"text-bg",3,"disabled"],[1,"w-100"],["hideToggle","false",1,"br-12","b-1-solid","mb-8"],[1,"fw-600","df","ai-c","jc-s","gap-4","text-secondary"],[1,"df","fd-c","gap-2"],[1,"text-secondary","m-0","px-4"],[1,"df","ai-c","jc-sb","pt-8","bt-1-solid","mt-4"],[1,"df","ai-c","gap-8"],["mat-stroked-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click","disabled","matTooltip"],[1,"fs-12","text-secondary","fw-500","uppercase","px-4"],[1,"p-0"],[1,"h-auto","p-0","mb-4"],["matListItemIcon",""],["matListItemTitle",""]],template:function(e,t){e&1&&(s(0,"div",1)(1,"div",2)(2,"h2",3),m(3,"Categories"),l(),s(4,"p",4),m(5,"Manage your habit categories"),l()(),s(6,"form",5),f("ngSubmit",function(){return t.addCategory()}),s(7,"mat-form-field",6)(8,"mat-label"),m(9,"New Category"),l(),s(10,"input",7),Ai("ngModelChange",function(o){return Oi(t.newCategoryName,o)||(t.newCategoryName=o),o}),l()(),s(11,"button",8),m(12,"Add"),l()(),s(13,"mat-accordion",9),re(14,Of,19,6,"mat-expansion-panel",10,Id),l()()),e&2&&(h(10),Pi("ngModel",t.newCategoryName),h(),x("disabled",!t.newCategoryName),h(3),se(t.categories()))},dependencies:[Ci,ki,ut,Tt,wi,zi,Vi,Ni,un,fd,uo,qn,Un,me,Qe,nt,ge,ke,ft,It,Ke,Zt,Be,Sd,Dd,Wr,Ur,Cd,Td,qr],styles:["mat-expansion-panel[_ngcontent-%COMP%]{border-radius:12px!important;overflow:hidden;margin-bottom:8px;box-shadow:none!important;border:1px solid var(--outline-variant, #e0e0e0)}mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{border-color:var(--primary, #6366f1)}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 16px!important}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 16px 16px!important}mat-list-item[_ngcontent-%COMP%]{height:40px!important;--mdc-list-item-leading-icon-size: 20px}"]})};var Zr=["*"];function Af(a,i){a&1&&F(0)}var Ff=["tabListContainer"],Lf=["tabList"],Nf=["tabListInner"],Vf=["nextPaginator"],Bf=["previousPaginator"],zf=["content"];function Hf(a,i){}var jf=["tabBodyWrapper"],Gf=["tabHeader"];function Wf(a,i){}function Uf(a,i){if(a&1&&qe(0,Wf,0,0,"ng-template",12),a&2){let e=g().$implicit;x("cdkPortalOutlet",e.templateLabel)}}function qf(a,i){if(a&1&&m(0),a&2){let e=g().$implicit;O(e.textLabel)}}function Qf(a,i){if(a&1){let e=q();s(0,"div",7,2),f("click",function(){let n=V(e),o=n.$implicit,r=n.$index,d=g(),p=Pe(1);return B(d._handleClick(o,p,r))})("cdkFocusChange",function(n){let o=V(e).$index,r=g();return B(r._tabFocusChanged(n,o))}),I(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),w(6,Uf,1,1,null,12)(7,qf,1,1),l()()()}if(a&2){let e=i.$implicit,t=i.$index,n=Pe(1),o=g();ot(e.labelClass),D("mdc-tab--active",o.selectedIndex===t),x("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),N("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),h(3),x("matRippleTrigger",n)("matRippleDisabled",e.disabled||o.disableRipple),h(3),k(e.templateLabel?6:7)}}function $f(a,i){a&1&&F(0)}function Yf(a,i){if(a&1){let e=q();s(0,"mat-tab-body",13),f("_onCentered",function(){V(e);let n=g();return B(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){V(e);let o=g();return B(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){V(e);let o=g();return B(o._bodyCentered(n))}),l()}if(a&2){let e=i.$implicit,t=i.$index,n=g();ot(e.bodyClass),x("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),N("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Xf=new S("MatTabContent"),Zf=(()=>{class a{template=c(Je);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matTabContent",""]],features:[G([{provide:Xf,useExisting:a}])]})}return a})(),Kf=new S("MatTabLabel"),Ad=new S("MAT_TAB"),Jf=(()=>{class a extends tl{_closestTab=c(Ad,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[G([{provide:Kf,useExisting:a}]),U]})}return a})(),Fd=new S("MAT_TAB_GROUP"),Kr=(()=>{class a{_viewContainerRef=c(lt);_closestTabGroup=c(Fd,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new y;position=null;origin=null;isActive=!1;constructor(){c(Le).load(mt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ht(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-tab"]],contentQueries:function(t,n,o){if(t&1&&Re(o,Jf,5)(o,Zf,7,Je),t&2){let r;M(r=E())&&(n.templateLabel=r.first),M(r=E())&&(n._explicitContent=r.first)}},viewQuery:function(t,n){if(t&1&&ce(Je,7),t&2){let o;M(o=E())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&N("id",null)},inputs:{disabled:[2,"disabled","disabled",T],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[G([{provide:Ad,useExisting:a}]),xe],ngContentSelectors:Zr,decls:1,vars:0,template:function(t,n){t&1&&(ee(),xs(0,Af,1,0,"ng-template"))},encapsulation:2})}return a})(),Qr="mdc-tab-indicator--active",Rd="mdc-tab-indicator--no-transition",$r=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(n=>n.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},eg=(()=>{class a{_elementRef=c(A);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Qr);return}let n=t.getBoundingClientRect(),o=e.width/n.width,r=e.left-n.left;t.classList.add(Rd),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Rd),t.classList.add(Qr),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Qr)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",T]}})}return a})();var Ld=(()=>{class a extends eg{elementRef=c(A);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275dir=C({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(N("aria-disabled",!!n.disabled),D("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",T]},features:[U]})}return a})(),Pd={passive:!0},tg=650,ig=100,ng=(()=>{class a{_elementRef=c(A);_changeDetectorRef=c(ne);_viewportRuler=c(rt);_dir=c(Ce,{optional:!0});_ngZone=c(W);_platform=c(_e);_sharedResizeObserver=c(Na);_injector=c(X);_renderer=c(ve);_animationsDisabled=pe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new y;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new y;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new R;indexFocused=new R;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Pd),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Pd))}ngAfterContentInit(){let e=this._dir?this._dir.change:qi("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Yn(32),Z(this._destroyed)),n=this._viewportRuler.change(150).pipe(Z(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new sa(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Te(o,{injector:this._injector}),Ie(e,n,t,this._items.changes,this._itemsResized()).pipe(Z(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?Ui:this._items.changes.pipe(Ee(this._items),_t(e=>new gt(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>t.next(o));return e.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),cs(1),he(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Oe(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=t.elementRef.nativeElement,d,p;this._getLayoutDirection()=="ltr"?(d=o,p=d+r):(p=this._tabListInner.nativeElement.offsetWidth-o,d=p-r);let u=this.scrollDistance,_=this.scrollDistance+n;d<u?this.scrollDistance-=u-d:p>_&&(this.scrollDistance+=Math.min(p-_,d-u))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),ss(tg,ig).pipe(Z(Ie(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(e);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",T],selectedIndex:[2,"selectedIndex","selectedIndex",tt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),ag=(()=>{class a extends ng{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new $r(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=de(a)))(n||a)}})();static \u0275cmp=b({type:a,selectors:[["mat-tab-header"]],contentQueries:function(t,n,o){if(t&1&&Re(o,Ld,4),t&2){let r;M(r=E())&&(n._items=r)}},viewQuery:function(t,n){if(t&1&&ce(Ff,7)(Lf,7)(Nf,7)(Vf,5)(Bf,5),t&2){let o;M(o=E())&&(n._tabListContainer=o.first),M(o=E())&&(n._tabList=o.first),M(o=E())&&(n._tabListInner=o.first),M(o=E())&&(n._nextPaginator=o.first),M(o=E())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&D("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",T]},features:[U],ngContentSelectors:Zr,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(ee(),s(0,"div",5,0),f("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(r){return n._handlePaginatorPress("before",r)})("touchend",function(){return n._stopInterval()}),I(2,"div",6),l(),s(3,"div",7,1),f("keydown",function(r){return n._handleKeydown(r)}),s(5,"div",8,2),f("cdkObserveContent",function(){return n._onContentChanges()}),s(7,"div",9,3),F(9),l()()(),s(10,"div",10,4),f("mousedown",function(r){return n._handlePaginatorPress("after",r)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),I(12,"div",6),l()),t&2&&(D("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),x("matRippleDisabled",n._disableScrollBefore||n.disableRipple),h(3),D("_mat-animation-noopable",n._animationsDisabled),h(2),N("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),h(5),D("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),x("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Vt,ta],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),og=new S("MAT_TABS_CONFIG"),Od=(()=>{class a extends kt{_host=c(Yr);_ngZone=c(W);_centeringSub=be.EMPTY;_leavingSub=be.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ee(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["","matTabBodyHost",""]],features:[U]})}return a})(),Yr=(()=>{class a{_elementRef=c(A);_dir=c(Ce,{optional:!0});_ngZone=c(W);_injector=c(X);_renderer=c(ve);_diAnimationsDisabled=pe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=be.EMPTY;_position;_previousPosition;_onCentering=new R;_beforeCentering=new R;_afterLeavingCenter=new R;_onCentered=new R(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(ne);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Te(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Te(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&ce(Od,5)(zf,5),t&2){let o;M(o=E())&&(n._portalHost=o.first),M(o=E())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&N("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(s(0,"div",1,0),qe(2,Hf,0,0,"ng-template",2),l()),t&2&&D("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Od,wt],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),Nd=(()=>{class a{_elementRef=c(A);_changeDetectorRef=c(ne);_ngZone=c(W);_tabsSubscription=be.EMPTY;_tabLabelSubscription=be.EMPTY;_tabBodySubscription=be.EMPTY;_diAnimationsDisabled=pe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Ii;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new R;focusChange=new R;animationDone=new R;selectedTabChange=new R(!0);_groupId;_isServer=!c(_e).isBrowser;constructor(){let e=c(og,{optional:!0});this._groupId=c(le).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=t[o];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ee(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Xr;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ie(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-tab-group"]],contentQueries:function(t,n,o){if(t&1&&Re(o,Kr,5),t&2){let r;M(r=E())&&(n._allTabs=r)}},viewQuery:function(t,n){if(t&1&&ce(jf,5)(Gf,5)(Yr,5),t&2){let o;M(o=E())&&(n._tabBodyWrapper=o.first),M(o=E())&&(n._tabHeader=o.first),M(o=E())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(N("mat-align-tabs",n.alignTabs),ot("mat-"+(n.color||"primary")),te("--mat-tab-animation-duration",n.animationDuration),D("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",T],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",T],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",T],selectedIndex:[2,"selectedIndex","selectedIndex",tt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",tt],disablePagination:[2,"disablePagination","disablePagination",T],disableRipple:[2,"disableRipple","disableRipple",T],preserveContent:[2,"preserveContent","preserveContent",T],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[G([{provide:Fd,useExisting:a}])],ngContentSelectors:Zr,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(ee(),s(0,"mat-tab-header",3,0),f("indexFocused",function(r){return n._focusChanged(r)})("selectFocusedIndex",function(r){return n.selectedIndex=r}),re(2,Qf,8,17,"div",4,Ft),l(),w(4,$f,1,0),s(5,"div",5,1),re(7,Yf,1,10,"mat-tab-body",6,Ft),l()),t&2&&(x("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Cs("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),h(2),se(n._tabs),h(2),k(n._isServer?4:-1),h(),D("_mat-animation-noopable",n._animationsDisabled()),h(2),se(n._tabs))},dependencies:[ag,Ld,Us,Vt,kt,Yr],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),Xr=class{index;tab};var Vd=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[K]})}return a})();var sg=()=>["S","M","T","W","T","F","S"],lg=(a,i)=>i.dateStr;function cg(a,i){if(a&1&&(s(0,"div",61)(1,"mat-icon",62),m(2,"schedule"),l(),s(3,"span"),m(4),bt(5,"duration"),l()()),a&2){let e,t=g(2);h(4),O(vt(5,1,(e=t.habit())==null?null:e.duration))}}function dg(a,i){if(a&1&&(s(0,"div",9)(1,"div",51)(2,"div",52)(3,"div",53)(4,"mat-icon",54),m(5),l()(),s(6,"div",55)(7,"h1",56),m(8),l(),s(9,"span",57),m(10),l()()()(),s(11,"div",58)(12,"div",59)(13,"div",60),m(14),l(),w(15,cg,6,3,"div",61),l()()()),a&2){let e,t,n,o,r,d,p,u,_,P=g();h(3),te("background-color",(e=P.habit())==null?null:e.color)("box-shadow","0 8px 16px -4px "+((t=P.habit())==null?null:t.color)+"60"),h(2),$(" ",(n=P.habit())==null?null:n.icon," "),h(3),O((o=P.habit())==null?null:o.name),h(2),$(" ",((r=P.habit())==null?null:r.description)||"Build consistency every day."," "),h(3),te("background-color",((d=P.habit())==null?null:d.color)+"15")("color",(p=P.habit())==null?null:p.color),h(),$(" ",((u=P.habit())==null?null:u.frequency)===0?"Daily":"Weekly"," "),h(),k((_=P.habit())!=null&&_.duration?15:-1)}}function mg(a,i){if(a&1&&(s(0,"div",18),m(1),l()),a&2){let e=i.$implicit;h(),$(" ",e," ")}}function hg(a,i){a&1&&I(0,"div",20)}function pg(a,i){if(a&1&&(s(0,"span",64),m(1),l()),a&2){let e=g().$implicit;h(),O(e.mood)}}function ug(a,i){a&1&&I(0,"div",65)}function fg(a,i){if(a&1){let e=q();s(0,"div",21)(1,"button",63),f("click",function(){let n=V(e).$implicit,o=g();return B(o.openNoteEditor(n))}),m(2),w(3,pg,2,1,"span",64),w(4,ug,1,0,"div",65),l()()}if(a&2){let e=i.$implicit,t=g();h(),te("width","40px")("height","40px")("background-color",t.getCellBg(e))("color",t.getCellColor(e))("opacity",e.isInFuture?"0.3":"1")("border",e.isToday?"2px solid #1e293b":"none"),h(),$(" ",e.dayNum," "),h(),k(e.mood?3:-1),h(),k(e.hasNote?4:-1)}}function gg(a,i){if(a&1){let e=q();s(0,"div",50)(1,"button",66),f("click",function(){V(e);let n=g();return B(n.toggleToday())}),s(2,"div",67)(3,"mat-icon",68),m(4),l(),s(5,"span",69),m(6),l()()()()}if(a&2){let e,t=g();h(),te("background-color",t.isDoneToday()?"#f0fdf4":(e=t.habit())==null?null:e.color)("color",t.isDoneToday()?"#10b981":"white")("border",t.isDoneToday()?"2px solid #10b981":"none"),h(3),$(" ",t.isDoneToday()?"task_alt":"check_circle"," "),h(2),O(t.isDoneToday()?"Marked as Done!":"Mark Today as Done")}}var xo=class a{route=c(Ls);router=c($t);habitService=c(ct);habitLogService=c(Xt);dialog=c(Ct);habitId=v(null);habit=v(null);currentStreak=v(0);bestStreak=v(0);totalCompletions=v(0);activeMonthDate=v(new Date);calendarDays=v([]);emptyDaysPrefix=v([]);completedDateStrings=v(new Set);logsMap=v(new Map);monthlySuccessRate=v(0);reportType=v("weekly");onTabChange(i){let e=["weekly","monthly","yearly"];e[i]&&this.reportType.set(e[i])}chartData=ie(()=>{let i=this.reportType(),e=this.completedDateStrings(),t=[],n=new Date;if(n.setHours(0,0,0,0),i==="weekly")for(let o=6;o>=0;o--){let r=new Date(n);r.setDate(r.getDate()-o);let d=this.getLocalFormattedDate(r);t.push({label:r.toLocaleDateString("en-US",{weekday:"short"}),value:e.has(d)?1:0})}else if(i==="monthly")for(let o=3;o>=0;o--){let r=0;for(let d=0;d<7;d++){let p=new Date(n);p.setDate(p.getDate()-(o*7+d)),e.has(this.getLocalFormattedDate(p))&&r++}t.push({label:`W${4-o}`,value:r})}else for(let o=5;o>=0;o--){let r=new Date(n.getFullYear(),n.getMonth()-o,1),d=r.getFullYear()+"-"+String(r.getMonth()+1).padStart(2,"0"),p=0;e.forEach(u=>{u.startsWith(d)&&p++}),t.push({label:r.toLocaleDateString("en-US",{month:"short"}),value:p})}return t});chartDataConfiguration=ie(()=>{let i=this.chartData(),e=this.habit(),t=e?e.color:"#3b82f6";return{labels:i.map(n=>n.label),datasets:[{data:i.map(n=>n.value),label:"Completions",backgroundColor:t+"33",borderColor:t,pointBackgroundColor:t,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:t,fill:"origin",tension:.4}]}});chartOptions=ie(()=>({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,mode:"index",intersect:!1,footer:()=>`Duration: ${this.habit()?.duration||0}m`}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:this.reportType()==="weekly"?1:this.reportType()==="monthly"?7:31}}}));todayStr=v("");isDoneToday=ie(()=>this.completedDateStrings().has(this.todayStr()));isTodayConfigured=v(!1);activeMonthDisplay=ie(()=>this.activeMonthDate().toLocaleDateString("en-US",{month:"long",year:"numeric"}));async ngOnInit(){this.todayStr.set(this.getLocalFormattedDate(new Date)),this.route.paramMap.subscribe(async e=>{let t=e.get("id");t&&(this.habitId.set(Number(t)),await this.loadData())});let i=new Date;i.setDate(1),this.activeMonthDate.set(i)}goBack(){this.router.navigate(["/habits"])}getLocalFormattedDate(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}async loadData(){let i=this.habitId();if(!i)return;let e=await this.habitService.getHabit(i);e&&this.habit.set(e);let n=(await this.habitLogService.getAllLogs()).filter(z=>z.habitId===i),o=n.filter(z=>z.isCompleted);this.totalCompletions.set(o.length);let r=new Set(o.map(z=>z.dateStr));this.completedDateStrings.set(r);let d=new Map;n.forEach(z=>{d.set(z.dateStr,z)}),this.logsMap.set(d),this.calculateMonthlySuccessRate(n);let u=Array.from(r).sort().reverse().map(z=>{let[J,ue,ae]=z.split("-");return Math.floor(new Date(Number(J),Number(ue)-1,Number(ae)).getTime()/864e5)}),_=0,P=0;if(u.length>0){let z=1;_=1;for(let ae=0;ae<u.length-1;ae++)u[ae]-u[ae+1]===1?(z++,z>_&&(_=z)):z=1;let J=new Date().setHours(0,0,0,0),ue=Math.floor(J/864e5);if(u[0]===ue||u[0]===ue-1){P=1;for(let ae=0;ae<u.length-1&&u[ae]-u[ae+1]===1;ae++)P++}}this.bestStreak.set(_),this.currentStreak.set(P),this.generateCalendar()}calculateMonthlySuccessRate(i){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1),n=this.todayStr(),o=i.filter(p=>p.isCompleted&&p.dateStr.startsWith(n.substring(0,7))),r=e.getDate(),d=Math.round(o.length/r*100);this.monthlySuccessRate.set(d)}getSuccessRateColor(){let i=this.monthlySuccessRate();return i>=80?"#10b981":i>=50?"#f59e0b":"#ef4444"}shiftMonth(i){let e=new Date(this.activeMonthDate());e.setMonth(e.getMonth()+i),this.activeMonthDate.set(e),this.generateCalendar()}generateCalendar(){let i=new Date(this.activeMonthDate()),e=i.getFullYear(),t=i.getMonth(),n=new Date(e,t,1).getDay(),o=new Date(e,t+1,0).getDate();this.emptyDaysPrefix.set(Array.from({length:n}));let r=[],d=this.todayStr(),p=!1,u={0:6,1:0,2:1,3:2,4:3,5:4,6:5};for(let _=1;_<=o;_++){let P=new Date(e,t,_),z=this.getLocalFormattedDate(P),J=new Date;J.setHours(0,0,0,0);let ue=P.getTime()>J.getTime(),ae=this.completedDateStrings().has(z),Se=u[P.getDay()],ci=!1,ei=this.habit();ei&&(ei.frequency===0||ei.days&&Array.isArray(ei.days)&&ei.days.includes(Se))&&(ci=!0),z===d&&(p=ci);let Me=this.logsMap().get(z);r.push({date:P,dateStr:z,dayNum:_,isToday:z===d,isInFuture:ue,isCompleted:ae,isConfiguredDay:ci,hasNote:!!(Me?.reflectionNote||Me?.planNote||Me?.mood||Me?.tags&&Me.tags.length>0),mood:Me?.mood,tags:Me?.tags,planNote:Me?.planNote,reflectionNote:Me?.reflectionNote})}this.isTodayConfigured.set(p),this.calendarDays.set(r)}getCellBg(i){return i.isCompleted?"#10b981":i.isConfiguredDay?i.isToday?"#f3f4f6":"#f0fdf4":"transparent"}getCellColor(i){return i.isCompleted?"#ffffff":i.isConfiguredDay?i.isToday?"#111827":"#10b981":"#d1d5db"}openNoteEditor(i){let e=this.habitId();if(!e)return;this.dialog.open(fn,{width:"450px",autoFocus:!1,restoreFocus:!1,data:{dateStr:i.dateStr,habitName:this.habit()?.name,isCompleted:i.isCompleted,isInFuture:i.isInFuture,log:this.logsMap().get(i.dateStr)||{habitId:e,dateStr:i.dateStr,completedAt:Date.now()}}}).afterClosed().subscribe(async n=>{n&&(await this.habitLogService.saveLogData(e,i.dateStr,n),await this.loadData())})}async toggleToday(){let i=this.habitId();i&&(await this.habitLogService.toggleCompletion(i,this.todayStr()),await this.loadData())}deleteHabit(){}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-habit-details"]],decls:92,vars:14,consts:[[1,"df","fd-c","w-100","font-inter",2,"background-color","var(--background-default)","min-height","100vh","position","relative"],[1,"df","fd-r","jc-sb","ai-c","p-20","w-100","sticky","top-0","bg-white",2,"z-index","10","box-shadow","0 2px 10px rgba(0,0,0,0.02)","box-sizing","border-box"],[1,"df","fd-r","gap-3","ai-c"],["mat-icon-button","",2,"background-color","var(--surface-alt)","border","1px solid var(--border-subtle)",3,"click"],[2,"color","var(--text-secondary)"],[1,"df","fd-c"],[1,"fs-12","fw-600","text-secondary","uppercase","ls-1"],[1,"fs-18","fw-800","truncate","text-primary",2,"max-width","180px"],[1,"p-38","df","fd-c","gap-6"],[1,"bg-white","br-24","df","fd-c","gap-4","w-100","position-relative",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box","overflow","hidden"],[1,"bg-white","br-24","w-100","df","fd-c","gap-6","mt-12",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.03)","box-sizing","border-box"],[1,"df","fd-r","jc-sb","ai-c","mb-20"],[1,"fs-13","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-20","fw-800","text-primary"],[1,"df","fd-r","gap-2",2,"background-color","#f8fafc","padding","4px","border-radius","12px","border","1px solid #f1f5f9"],["mat-icon-button","",2,"color","#64748b","width","36px","height","36px",3,"click"],[2,"font-size","20px"],[1,"df","fd-r","w-100","mb-8",2,"background-color","transparent"],[1,"text-center","fs-11","fw-800",2,"flex","0 0 14.28%","color","#94a3b8","letter-spacing","0.5px"],[1,"df","fd-r","flex-wrap","w-100","gap-y-1"],[2,"flex","0 0 14.28%"],[1,"df","ai-c","jc-c","position-relative",2,"flex","0 0 14.28%","height","48px"],[1,"df","fd-r","jc-c","gap-4","mt-20","pt-20",2,"border-top","1px solid #f1f5f9"],[1,"df","ai-c","gap-1"],[1,"br-4",2,"width","12px","height","12px","background-color","#10b981"],[1,"fs-11","fw-600","text-secondary"],[1,"df","ai-c","gap-1","ml-4"],[1,"br-4",2,"width","12px","height","12px","background-color","#f0fdf4","border","1px solid #dcfce7"],[1,"br-4",2,"width","12px","height","12px","background-color","transparent","border","1px solid #e2e8f0"],[1,"df","fd-r","flex-wrap","gap-8","jc-s","w-100"],[1,"bg-white","br-20","flex-1","df","fd-c","gap-2","min-w-140",2,"box-shadow","0 4px 12px rgba(0,0,0,0.02)"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#fff7ed","border","1px solid #ffedd5"],[2,"color","#ea580c","font-size","20px","width","20px","height","20px"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-24","fw-900","text-primary"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f0f9ff","border","1px solid #e0f2fe"],[2,"color","#0284c7","font-size","20px","width","20px","height","20px"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f0fdf4","border","1px solid #dcfce7"],[2,"color","#166534","font-size","20px","width","20px","height","20px"],[1,"fs-24","fw-900"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f8fafc","border","1px solid #f1f5f9"],[2,"color","#64748b","font-size","20px","width","20px","height","20px"],[1,"df","fd-r","jc-sb","ai-c","mb-8"],[1,"fs-18","fw-800","text-primary"],["fitInkBarToContent","",2,"width","100%",3,"selectedIndexChange","selectedIndex"],["label","Weekly"],["label","Monthly"],["label","Yearly"],[1,"w-100","mt-16","position-relative",2,"height","180px"],["baseChart","","type","line",3,"data","options"],[1,"p-24","w-100","bg-white","b-t-1-solid","position-fixed",2,"bottom","0","left","0","z-index","100","border-color","#f4f4f5","box-shadow","0 -10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box"],[1,"df","fd-r","ai-fs","jc-sb","position-relative","z-1",2,"z-index","1"],[1,"df","fd-r","ai-c","gap-4"],[1,"df","ai-c","jc-c","br-16","text-white",2,"width","56px","height","56px","min-width","56px"],[2,"font-size","28px","width","28px","height","28px"],[1,"df","fd-c","flex-1","overflow-hidden"],[1,"m-0","fs-22","fw-800","text-primary","truncate"],[1,"fs-14","fw-500","text-secondary"],[1,"mt-12","pt-20","df","fd-r","jc-sb","ai-c","gap-4","flex-wrap",2,"border-top","1px solid var(--border-subtle)"],[1,"df","fd-r","ai-c","gap-2","flex-wrap"],[1,"px-10","py-4","br-8","fs-11","fw-700","uppercase","ls-1"],[1,"df","ai-c","gap-1","px-10","py-4","br-8","fs-11","fw-700","text-secondary",2,"background-color","var(--surface-alt)"],[2,"font-size","14px","width","14px","height","14px"],[1,"br-12","border-none","df","fd-c","ai-c","jc-c","fw-700","fs-15","cursor-pointer","transition-all","position-relative",3,"click"],[1,"position-absolute","fs-10",2,"top","-2px","right","-2px"],[1,"position-absolute",2,"bottom","4px","width","4px","height","4px","border-radius","50%","background-color","currentColor","opacity","0.8"],["mat-flat-button","",1,"w-100","py-32","fw-800","br-16","transition-all",3,"click"],[1,"df","ai-c","jc-c","gap-3"],[1,"text-bg"],[1,"fs-17"]],template:function(e,t){if(e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),f("click",function(){return t.goBack()}),s(4,"mat-icon",4),m(5,"arrow_back"),l()(),s(6,"div",5)(7,"span",6),m(8,"Habit Details"),l(),s(9,"span",7),m(10),l()()()(),s(11,"div",8),w(12,dg,16,13,"div",9),s(13,"div",10)(14,"div",11)(15,"div",5)(16,"span",12),m(17,"Consistency Map"),l(),s(18,"span",13),m(19),l()(),s(20,"div",14)(21,"button",15),f("click",function(){return t.shiftMonth(-1)}),s(22,"mat-icon",16),m(23,"chevron_left"),l()(),s(24,"button",15),f("click",function(){return t.shiftMonth(1)}),s(25,"mat-icon",16),m(26,"chevron_right"),l()()()(),s(27,"div",17),re(28,mg,2,1,"div",18,Vo),l(),s(30,"div",19),re(31,hg,1,0,"div",20,Vo),re(33,fg,5,15,"div",21,lg),l(),s(35,"div",22)(36,"div",23),I(37,"div",24),s(38,"span",25),m(39,"Done"),l()(),s(40,"div",26),I(41,"div",27),s(42,"span",25),m(43,"Missed"),l()(),s(44,"div",26),I(45,"div",28),s(46,"span",25),m(47,"Locked"),l()()()(),s(48,"div",29)(49,"div",30)(50,"div",31)(51,"mat-icon",32),m(52," local_fire_department "),l()(),s(53,"span",33),m(54,"Current"),l(),s(55,"span",34),m(56),l()(),s(57,"div",30)(58,"div",35)(59,"mat-icon",36),m(60," emoji_events "),l()(),s(61,"span",33),m(62,"Record"),l(),s(63,"span",34),m(64),l()(),s(65,"div",30)(66,"div",37)(67,"mat-icon",38),m(68,"task_alt"),l()(),s(69,"span",33),m(70,"Success"),l(),s(71,"span",39),m(72),l()(),s(73,"div",30)(74,"div",40)(75,"mat-icon",41),m(76,"done_all"),l()(),s(77,"span",33),m(78,"Total"),l(),s(79,"span",34),m(80),l()()(),s(81,"div",10)(82,"div",42)(83,"span",43),m(84,"Trends"),l()(),s(85,"mat-tab-group",44),f("selectedIndexChange",function(o){return t.onTabChange(o)}),I(86,"mat-tab",45)(87,"mat-tab",46)(88,"mat-tab",47),l(),s(89,"div",48),I(90,"canvas",49),l()()(),w(91,gg,7,8,"div",50),l()),e&2){let n;h(10),$(" ",((n=t.habit())==null?null:n.name)||"Loading..."," "),h(2),k(t.habit()?12:-1),h(7),O(t.activeMonthDisplay()),h(9),se(Ms(13,sg)),h(3),se(t.emptyDaysPrefix()),h(2),se(t.calendarDays()),h(23),O(t.currentStreak()),h(8),O(t.bestStreak()),h(7),te("color",t.getSuccessRateColor()),h(),$("",t.monthlySuccessRate(),"%"),h(8),O(t.totalCompletions()),h(5),x("selectedIndex",0),h(5),x("data",t.chartDataConfiguration())("options",t.chartOptions()),h(),k(t.habit()&&t.isTodayConfigured()?91:-1)}},dependencies:[ge,ke,me,Qe,nt,Yt,pi,Vd,Kr,Nd,$e,Be,ft,Ci,_o,Jt],encapsulation:2})};var Bd=async()=>{let a=c($t);return await Ze.users.count()===0?(a.navigate(["/onboarding"]),!1):!0};var wo=class a{fb=c(an);router=c($t);previewBase64=v(null);onboardForm=this.fb.group({name:["",[Ue.required,Ue.minLength(2)]],gender:["",Ue.required]});onFileSelected(i){let e=i.target.files[0];if(e){let t=new FileReader;t.onload=n=>{this.previewBase64.set(n.target.result)},t.readAsDataURL(e)}}async onSubmit(){if(this.onboardForm.valid){let i=this.onboardForm.value.gender,e=this.previewBase64();e||(i==="female"?e="https://api.dicebear.com/7.x/lorelei/svg?seed=Bella":i==="male"?e="https://api.dicebear.com/7.x/lorelei/svg?seed=Milo":e="https://api.dicebear.com/7.x/lorelei/svg?seed=Lucky");let t={name:this.onboardForm.value.name,gender:i,avatar:e||this.previewBase64()||void 0,createdAt:Date.now()};await Ze.users.add(t),this.router.navigate(["/dashboard"])}}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-onboarding"]],decls:39,vars:5,consts:[["fileInput",""],[1,"df","fd-c","ai-c","jc-c","min-vh-100",2,"background-color","#f7f3f0","padding","24px"],[1,"bg-white","br-24","df","fd-c","gap-8","w-100",2,"max-width","400px","padding","32px","box-shadow","0 12px 32px rgba(0,0,0,0.05)","padding-bottom","48px"],[1,"df","fd-c","ai-c","text-center","gap-4","mb-24"],[1,"df","ai-c","jc-c","br-pill","text-white","mb-8",2,"background","linear-gradient(135deg, #10b981, #3b82f6)","width","80px","height","80px"],[2,"font-size","36px","width","36px","height","36px"],[1,"m-0","fs-28","fw-800","text-primary"],[1,"m-0","fs-16","fw-500","text-secondary"],[1,"df","fd-c","gap-4","w-100",3,"ngSubmit","formGroup"],[1,"df","fd-c","ai-c","gap-2","mb-16","position-relative","w-100"],[1,"cursor-pointer",3,"click"],[3,"name","avatar","size"],["type","file","accept","image/*","capture","user",2,"display","none",3,"change"],[1,"fs-12","fw-600","text-secondary","text-center"],[1,"df","fd-c","gap-2","w-100"],[1,"fs-13","fw-700","text-primary","uppercase","ls-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","name","placeholder","E.g. Alex","required",""],["formControlName","gender","required",""],["value","male"],["value","female"],["value","other"],["mat-flat-button","","type","submit",1,"w-100","py-24","fw-800","br-12","mt-16","transition-all",2,"background-color","#10b981","color","white",3,"disabled"],[1,"fs-16"],[1,"ml-8",2,"font-size","20px"]],template:function(e,t){if(e&1){let n=q();s(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"mat-icon",5),m(5,"rocket_launch"),l()(),s(6,"h1",6),m(7,"Welcome to Trackify!"),l(),s(8,"p",7),m(9,"Let's set up your profile to get started."),l()(),s(10,"form",8),f("ngSubmit",function(){return t.onSubmit()}),s(11,"div",9)(12,"div",10),f("click",function(){V(n);let r=Pe(15);return B(r.click())}),I(13,"t-avatar",11),s(14,"input",12,0),f("change",function(r){return t.onFileSelected(r)}),l()(),s(16,"span",13),m(17,"Upload Photo (Optional)"),l()(),s(18,"div",14)(19,"span",15),m(20,"Your Name"),l(),s(21,"mat-form-field",16),I(22,"input",17),l()(),s(23,"div",14)(24,"span",15),m(25,"Gender"),l(),s(26,"mat-form-field",16)(27,"mat-select",18)(28,"mat-option",19),m(29,"Male"),l(),s(30,"mat-option",20),m(31,"Female"),l(),s(32,"mat-option",21),m(33,"Prefer not to say"),l()()()(),s(34,"button",22)(35,"span",23),m(36,"Get Started"),l(),s(37,"mat-icon",24),m(38,"arrow_forward"),l()()()()()}if(e&2){let n;h(10),x("formGroup",t.onboardForm),h(3),x("name",((n=t.onboardForm.get("name"))==null?null:n.value)||"")("avatar",t.previewBase64())("size",100),h(21),x("disabled",!t.onboardForm.valid)}},dependencies:[on,ki,ut,Tt,wi,zi,Gt,Bi,Be,Ke,Si,Di,Pt,ft,It,me,Qe,ge,ke,Mi],encapsulation:2})};var zd=[{path:"onboarding",component:wo},{path:"",canActivate:[Bd],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:da},{path:"habits",component:po},{path:"habits/:id",component:xo},{path:"today",component:bo},{path:"categories",component:yo},{path:"categories/:id",loadComponent:()=>import("./chunk-PHWNXNMD.js").then(a=>a.CategoryDetails)},{path:"settings",component:vo},{path:"tasks",loadComponent:()=>import("./chunk-3TPA6KG6.js").then(a=>a.Tasks)}]}];var Jr="Service workers are disabled or not supported by this browser",gn=class{serviceWorker;worker;registration;events;constructor(i,e){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=new gt(t=>t.error(new At(5601,!1)));else{let t=null,n=new y;this.worker=new gt(u=>(t!==null&&u.next(t),n.subscribe(_=>u.next(_))));let o=()=>{let{controller:u}=i;u!==null&&(t=u,n.next(t))};i.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(_t(()=>i.getRegistration().then(u=>{if(!u)throw new At(5601,!1);return u})));let r=new y;this.events=r.asObservable();let d=u=>{let{data:_}=u;_?.type&&r.next(_)};i.addEventListener("message",d),e?.get(Ri,null,{optional:!0})?.onDestroy(()=>{i.removeEventListener("controllerchange",o),i.removeEventListener("message",d)})}}postMessage(i,e){return new Promise(t=>{this.worker.pipe(He(1)).subscribe(n=>{n.postMessage(Q({action:i},e)),t()})})}postMessageWithOperation(i,e,t){let n=this.waitForOperationCompleted(t),o=this.postMessage(i,e);return Promise.all([o,n]).then(([,r])=>r)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let e;return typeof i=="string"?e=t=>t.type===i:e=t=>i.includes(t.type),this.events.pipe(he(e))}nextEventOfType(i){return this.eventsOfType(i).pipe(He(1))}waitForOperationCompleted(i){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(he(n=>n.nonce===i),He(1),Ge(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},_g=(()=>{class a{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new y;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=mi,this.notificationClicks=mi,this.notificationCloses=mi,this.pushSubscriptionChanges=mi,this.subscription=mi;return}this.messages=this.sw.eventsOfType("PUSH").pipe(Ge(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Ge(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(Ge(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(Ge(n=>n.data)),this.pushManager=this.sw.registration.pipe(Ge(n=>n.pushManager));let t=this.pushManager.pipe(_t(n=>n.getSubscription()));this.subscription=new gt(n=>{let o=t.subscribe(n),r=this.subscriptionChanges.subscribe(n);return()=>{o.unsubscribe(),r.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Jr));let t={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(n.length));for(let r=0;r<n.length;r++)o[r]=n.charCodeAt(r);return t.applicationServerKey=o,new Promise((r,d)=>{this.pushManager.pipe(_t(p=>p.subscribe(t)),He(1)).subscribe({next:p=>{this.subscriptionChanges.next(p),r(p)},error:d})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Jr));let e=t=>{if(t===null)throw new At(5602,!1);return t.unsubscribe().then(n=>{if(!n)throw new At(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,n)=>{this.subscription.pipe(He(1),_t(e)).subscribe({next:t,error:n})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||a)(Fo(gn))};static \u0275prov=oe({token:a,factory:a.\u0275fac})}return a})(),bg=(()=>{class a{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=mi,this.unrecoverable=mi;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Jr));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new At(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||a)(Fo(gn))};static \u0275prov=oe({token:a,factory:a.\u0275fac})}return a})(),jd=new S("");function vg(){let a=c(Qn);if(!("serviceWorker"in navigator&&a.enabled!==!1))return;let i=c(jd),e=c(W),t=c(Ri);e.runOutsideAngular(()=>{let n=navigator.serviceWorker,o=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",o),t.onDestroy(()=>{n.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let n,{registrationStrategy:o}=a;if(typeof o=="function")n=new Promise(r=>o().subscribe(()=>r()));else{let[r,...d]=(o||"registerWhenStable:30000").split(":");switch(r){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=Hd(+d[0]||0);break;case"registerWhenStable":n=Promise.race([t.whenStable(),Hd(+d[0])]);break;default:throw new At(5600,!1)}}n.then(()=>{t.destroyed||navigator.serviceWorker.register(i,{scope:a.scope,updateViaCache:a.updateViaCache,type:a.type}).catch(r=>console.error(hs(5604,!1)))})})}function Hd(a){return new Promise(i=>setTimeout(i,a))}function yg(){let a=c(Qn),i=c(X),e=!0;return new gn(e&&a.enabled!==!1?navigator.serviceWorker:void 0,i)}var Qn=class{enabled;updateViaCache;type;scope;registrationStrategy};function Gd(a,i={}){return ps([_g,bg,{provide:jd,useValue:a},{provide:Qn,useValue:i},{provide:gn,useFactory:yg},ks(vg)])}var Wd={providers:[fs(),Bs(zd),Gd("ngsw-worker.js",{enabled:!Ts(),registrationStrategy:"registerWhenStable:30000"}),us(dn),Hs(zs())]};var _n=class a{isDarkMode=v(!1);constructor(){this.initializeTheme()}initializeTheme(){localStorage.getItem("theme")==="dark"?this.setDarkMode(!0):this.setDarkMode(!1)}setDarkMode(i){this.isDarkMode.set(i),i?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}toggleTheme(){this.setDarkMode(!this.isDarkMode())}static \u0275fac=function(e){return new(e||a)};static \u0275prov=oe({token:a,factory:a.\u0275fac,providedIn:"root"})};var xg=[[["t-header"]],"*"],wg=["t-header","*"];function kg(a,i){a&1&&(s(0,"div",17)(1,"div",18)(2,"mat-icon"),m(3,"home"),l()(),s(4,"div",19)(5,"mat-icon"),m(6,"favorite"),l()(),s(7,"div",20)(8,"div",21)(9,"mat-icon"),m(10,"add"),l()()(),s(11,"div",22)(12,"mat-icon"),m(13,"category"),l()(),s(14,"div",23)(15,"mat-icon"),m(16,"assignment"),l()()())}var ko=class a{title=v("Trackify");isSidenavOpened=v(!0);isMobile=v(!1);activeUser=v(null);themeService=c(_n);async ngOnInit(){this.checkScreenSize();let i=await Ze.users.orderBy("id").first();i&&this.activeUser.set(i)}onResize(){this.checkScreenSize()}checkScreenSize(){let i=window.innerWidth<=768;this.isMobile.set(i),i?this.isSidenavOpened.set(!1):this.isSidenavOpened.set(!0)}toggleSidenav(){this.isSidenavOpened.update(i=>!i)}closeOnMobile(){this.isMobile()&&this.isSidenavOpened.set(!1)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-sidenav"]],hostBindings:function(e,t){e&1&&f("resize",function(){return t.onResize()},bs)},ngContentSelectors:wg,decls:40,vars:6,consts:[[2,"height","100vh"],[2,"width","260px","box-shadow","2px 0 6px rgb(0 0 0 / 10%)",3,"opened","mode","autoFocus"],[1,"df","fd-c","h-100",2,"height","100%"],[1,"p-16","df","ai-c","gap-8",2,"height","64px","box-sizing","border-box"],["color","primary",1,"fs-24"],[1,"fs-20",2,"font-weight","500"],[2,"flex","1"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/today","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/habits","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/categories","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/tasks","routerLinkActive","active",3,"click"],[2,"background-color","var(--background-alt)"],[1,"app-router-wrapper",2,"overflow-y","auto"],[1,"h-100"],[1,"mobile-bottom-nav"],["routerLink","/dashboard","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/today","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/habits",1,"nav-center-item"],[1,"fab-btn"],["routerLink","/categories","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/tasks","routerLinkActive","active-tab",1,"nav-item"]],template:function(e,t){e&1&&(ee(xg),s(0,"mat-sidenav-container",0)(1,"mat-sidenav",1)(2,"div",2)(3,"div",3)(4,"mat-icon",4),m(5,"track_changes"),l(),s(6,"span",5),m(7,"Trackify"),l()(),s(8,"mat-nav-list",6)(9,"a",7),f("click",function(){return t.closeOnMobile()}),s(10,"mat-icon",8),m(11,"dashboard"),l(),s(12,"span",9),m(13,"Dashboard"),l()(),s(14,"a",10),f("click",function(){return t.closeOnMobile()}),s(15,"mat-icon",8),m(16,"today"),l(),s(17,"span",9),m(18,"Today"),l()(),s(19,"a",11),f("click",function(){return t.closeOnMobile()}),s(20,"mat-icon",8),m(21,"list"),l(),s(22,"span",9),m(23,"Habits"),l()(),s(24,"a",12),f("click",function(){return t.closeOnMobile()}),s(25,"mat-icon",8),m(26,"category"),l(),s(27,"span",9),m(28,"Categories"),l()(),s(29,"a",13),f("click",function(){return t.closeOnMobile()}),s(30,"mat-icon",8),m(31,"assignment"),l(),s(32,"span",9),m(33,"Tasks"),l()()()()(),s(34,"mat-sidenav-content",14),F(35),s(36,"div",15)(37,"div",16),F(38,1),l()(),w(39,kg,17,0,"div",17),l()()),e&2&&(h(),x("opened",t.isSidenavOpened())("mode",t.isMobile()?"over":"side")("autoFocus",!1),h(35),te("height",t.isMobile()?"calc(100vh - 64px - 80px)":"calc(100vh - 64px)"),h(3),k(t.isMobile()?39:-1))},dependencies:[De,Yt,$i,Vs,ho,Br,ld,co,ge,ke,un,gd,uo,qn,Un,me],styles:[".active[_ngcontent-%COMP%]{background-color:var(--primary-container, rgba(99, 102, 241, .1))!important;color:var(--on-primary-container, #6366f1)!important}.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary, #6366f1)!important}@media(max-width:600px){.hide-on-mobile[_ngcontent-%COMP%]{display:none}}.mobile-bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;height:80px;background:#ffffffd9;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:space-around;padding:0 10px;border-top:1px solid rgba(0,0,0,.05);z-index:1000;box-shadow:0 -4px 20px #0000000d}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;height:100%;cursor:pointer;color:#94a3b8;transition:all .3s cubic-bezier(.4,0,.2,1)}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;width:26px;height:26px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]{color:#6366f1}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:#6366f11a;padding:8px;border-radius:16px;box-sizing:content-box}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;position:relative;top:-20px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]{width:60px;height:60px;background:#6366f1;border-radius:30px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px #6366f14d;color:#fff;transition:all .3s ease}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]:active{transform:scale(.9)}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]{background:#0f172ad9;border-top-color:#ffffff0d}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{color:#64748b}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]{color:#818cf8}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:#818cf826}"]})};var Cg=["*",[["mat-toolbar-row"]]],Dg=["*","mat-toolbar-row"],Sg=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=C({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return a})(),Ud=(()=>{class a{_elementRef=c(A);_platform=c(_e);_document=c(ye);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-toolbar"]],contentQueries:function(t,n,o){if(t&1&&Re(o,Sg,5),t&2){let r;M(r=E())&&(n._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(ot(n.color?"mat-"+n.color:""),D("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Dg,decls:2,vars:0,template:function(t,n){t&1&&(ee(Cg),F(0),F(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var qd=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=H({imports:[K]})}return a})();function Eg(a,i){if(a&1){let e=q();s(0,"button",6),f("click",function(){V(e);let n=g();return B(n.toggle.emit())}),s(1,"mat-icon"),m(2,"menu"),l()()}}function Tg(a,i){if(a&1){let e=q();s(0,"div",5)(1,"button",7),f("click",function(){V(e);let n=g();return B(n.themeService.toggleTheme())}),s(2,"mat-icon"),m(3),l()(),s(4,"span",8),m(5),l(),s(6,"div",9),I(7,"t-avatar",10),l()()}if(a&2){let e,t,n,o=g();h(3),O(o.themeService.isDarkMode()?"light_mode":"dark_mode"),h(2),O((e=o.activeUser())==null?null:e.name),h(2),x("name",((t=o.activeUser())==null?null:t.name)||"")("avatar",(n=o.activeUser())==null?null:n.avatar)("size",36)}}var Co=class a{isMobile=fe(!1);title=fe("Trackify");activeUser=fe(null);toggle=Qt();themeService=c(_n);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["t-header"]],inputs:{isMobile:[1,"isMobile"],title:[1,"title"],activeUser:[1,"activeUser"]},outputs:{toggle:"toggle"},decls:8,vars:3,consts:[[1,"df","fx","jc-s","toolbar",2,"box-shadow","0 2px 6px rgb(0 0 0 / 15%)","z-index","10","position","relative"],[1,"df","ai-c","gap-2"],["mat-icon-button","","aria-label","Toggle sidenav"],["color","primary",2,"font-size","28px","width","28px","height","28px","margin-right","8px"],[1,"fs-20",2,"font-weight","400"],[1,"df","fd-r","ai-c","gap-2","px-8"],["mat-icon-button","","aria-label","Toggle sidenav",3,"click"],["mat-icon-button","","aria-label","Toggle theme",3,"click"],[1,"fs-14","fw-600","hide-on-mobile"],["routerLink","/settings",1,"cursor-pointer"],[3,"name","avatar","size"]],template:function(e,t){e&1&&(s(0,"mat-toolbar",0)(1,"div",1),w(2,Eg,3,0,"button",2),s(3,"mat-icon",3),m(4," track_changes "),l(),s(5,"span",4),m(6),l()(),w(7,Tg,8,5,"div",5),l()),e&2&&(h(2),k(t.isMobile()?-1:2),h(4),O(t.title()),h(),k(t.activeUser()?7:-1))},dependencies:[De,Yt,$i,qd,Ud,me,nt,ge,ke,Mi],encapsulation:2})};var Do=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["app-root"]],decls:4,vars:3,consts:[["s",""],[3,"toggle","isMobile","title","activeUser"]],template:function(e,t){if(e&1){let n=q();s(0,"t-sidenav",null,0)(2,"t-header",1),f("toggle",function(){V(n);let r=Pe(1);return B(r.toggleSidenav())}),l(),I(3,"router-outlet"),l()}if(e&2){let n=Pe(1);h(2),x("isMobile",n.isMobile())("title",n.title())("activeUser",n.activeUser())}},dependencies:[Ns,ko,Co],encapsulation:2})};Fs(Do,Wd).catch(a=>console.error(a));
