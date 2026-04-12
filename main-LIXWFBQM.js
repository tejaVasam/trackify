import{$ as kr,$a as Ye,$b as me,A as br,Aa as Vt,Ab as jr,Ac as pe,B as ht,Ba as ce,Bb as Wr,Bc as De,C as vr,Ca as de,Cb as Gr,Cc as ke,D as He,Da as y,Db as Mt,Dc as rs,E as ne,Ea as r,Eb as Ur,Ec as mo,F as V,Fa as l,Fb as qr,Fc as Nt,G as D,Ga as E,Gb as Qr,Gc as rt,H as eo,Ha as $e,Hb as Et,Hc as st,I as c,Ia as tt,Ib as Nn,Ic as Ii,J as yr,Ja as Zt,Jb as $r,Jc as Ge,K as xr,Ka as X,Kb as Yr,Kc as _e,L as Rn,La as Ue,Lb as Kt,M as j,Ma as u,Mb as je,N as W,Na as Ar,Nb as Ke,O as at,Oa as f,Ob as It,P as Xi,Pa as ee,Pb as Jt,Q as Y,Qa as T,Qb as We,R as be,Ra as Ee,Rb as Xr,S as A,Sa as le,Sb as Te,T as G,Ta as b,Tb as K,U as wr,Ua as v,Ub as we,V as S,Va as Or,Vb as xe,W as Zi,Wa as Rr,Wb as Zr,X as fe,Xa as no,Xb as Kr,Y as se,Ya as Ie,Yb as Di,Z as R,Za as Z,Zb as en,_ as hi,_a as I,_b as Si,a as H,aa as Cr,ab as d,ac as it,b as Se,ba as Dr,bb as F,bc as tn,c as ye,ca as m,cb as Q,cc as pt,d as Dt,da as Ce,db as Pn,dc as Jr,e as w,ea as Qe,eb as Ln,ec as ro,f as Ya,fa as Lt,fb as Vn,fc as es,g as wi,ga as ue,gb as Bn,gc as ts,h as ur,ha as ge,hb as q,hc as zn,i as ki,ia as ot,ib as Fr,ic as Hn,j as ze,ja as to,jb as Pr,jc as jn,k as Ci,ka as g,kb as Lr,kc as Wn,l as fr,la as B,lb as ao,lc as Gn,m as gr,ma as _,mb as St,mc as Un,n as Fe,na as Sr,nb as ae,nc as Ae,o as Xt,oa as U,ob as Bt,oc as is,p as re,pa as Le,pb as Vr,pc as qn,q as Xa,qa as Mr,qb as Ki,qc as he,r as On,ra as Fn,rb as Ji,rc as ns,s as Pe,sa as Er,sb as Br,sc as so,t as Za,ta as Ir,tb as Nr,tc as as,u as Ka,ua as pi,ub as oe,uc as Mi,v as Ja,va as Tr,vb as O,vc as Qn,w as _r,wa as N,wb as Ze,wc as Ei,x as Me,xa as k,xb as zr,xc as lo,y as mt,ya as C,yb as Hr,yc as co,z as ie,za as io,zb as oo,zc as os}from"./chunk-ENHAZUSX.js";var ui=(n=>(n[n.Daily=0]="Daily",n[n.Weekly=1]="Weekly",n[n.Monthly=2]="Monthly",n[n.Custom=3]="Custom",n))(ui||{});var Rc=(i,a)=>a.dateLabel,Fc=(i,a)=>a.habitId,Pc=(i,a)=>a.dateStr;function Lc(i,a){i&1&&(r(0,"div",64)(1,"div",65)(2,"div",3)(3,"span",66),d(4,"First Step: Create a Category"),l(),r(5,"span",67),d(6,"Categories like 'Health' or 'Work' help you stay organized."),l()(),r(7,"button",68),d(8," Setup Categories "),l()()())}function Vc(i,a){if(i&1&&(r(0,"div",1)(1,"div",59)(2,"div",60)(3,"mat-icon",61),d(4,"celebration"),l()(),r(5,"div",3)(6,"h2",62),d(7),l(),r(8,"p",63),d(9,"Ready to build some life-changing habits?"),l()()(),k(10,Lc,9,0,"div",64),l()),i&2){let e,t=f();m(7),Q("Welcome to Trackify, ",(e=t.activeUser())==null?null:e.name,"!"),m(3),C(t.stats().noCategories?10:-1)}}function Bc(i,a){if(i&1){let e=X();r(0,"button",69),u("click",function(){j(e);let n=f();return W(n.quickLog(n.stats().insightHabitId))}),r(1,"mat-icon",70),d(2,"check_circle"),l(),r(3,"span",71),d(4,"Quick Log"),l()()}}function Nc(i,a){if(i&1&&(r(0,"div",46)(1,"span",72),d(2),l()()),i&2){let e=a.$implicit;m(2),F(e.dateLabel)}}function zc(i,a){i&1&&(r(0,"div",76)(1,"mat-icon",79),d(2,"check"),l()())}function Hc(i,a){i&1&&(r(0,"div",77)(1,"mat-icon",80),d(2,"close"),l()())}function jc(i,a){i&1&&E(0,"div",78)}function Wc(i,a){if(i&1){let e=X();r(0,"div",46)(1,"div",75),u("click",function(){let n=j(e).$implicit,o=f().$implicit,s=f();return W(s.toggleGridHabit(o.habitId,n.dateStr))}),k(2,zc,3,0,"div",76)(3,Hc,3,0,"div",77)(4,jc,1,0,"div",78),l()()}if(i&2){let e=a.$implicit;m(2),C(e.status==="completed"?2:e.status==="missed"?3:4)}}function Gc(i,a){if(i&1&&(r(0,"div",47)(1,"div",73)(2,"span",74),d(3),l()(),ce(4,Wc,5,1,"div",46,Pc),l()),i&2){let e=a.$implicit;m(3),F(e.name),m(),de(e.days)}}function Uc(i,a){if(i&1&&(r(0,"span",57),d(1),l()),i&2){let e=f();m(),Q(" ",e.stats().missedHabits.join(", ")," ")}}function qc(i,a){i&1&&(r(0,"span",58),d(1,"Perfect Day in progress!"),l())}var $n=class i{habitService=c(Ke);habitLogService=c(It);categoryService=c(Jt);stats=S({todayCompletedCount:0,todayTotalCount:0,todayPercentage:0,platformStreak:0,platformBestStreak:0,completionRate7Days:0,totalHabits:0,topHabitName:"No Data",topHabitScore:0,missedHabits:[],insightMessage:"Loading insights...",showWelcome:!1,noCategories:!1});weeklyGraph=S([]);weeklyMatrix=S([]);activeUser=S(null);chartDataConfiguration=ae(()=>{let a=this.weeklyGraph();return{labels:a.map(e=>e.dateLabel),datasets:[{data:a.map(e=>e.count),label:"Completions",backgroundColor:"#3b82f6",borderRadius:6,barPercentage:.6}]}});chartOptions=ae(()=>{let a=Math.max(...this.weeklyGraph().map(e=>e.count),5);return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:a+1,ticks:{stepSize:1,precision:0}}}}});async ngOnInit(){let a=await je.users.orderBy("id").first();a&&this.activeUser.set(a),await this.calculateMetrics()}getLocalFormattedDate(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}async calculateMetrics(){let a=await this.habitService.loadHabits(),e=await this.categoryService.getCategories(),t=await this.habitLogService.getAllLogs(),n=new Date,o=new Date(n).setHours(0,0,0,0),s=864e5,h=this.getLocalFormattedDate(n),p=n.getDay(),x={0:6,1:0,2:1,3:2,4:3,5:4,6:5},M=x[p],P=a.filter(L=>L.frequency===0?!0:L.days&&Array.isArray(L.days)&&L.days.length>0?L.days.includes(M):!1),$=t.filter(L=>L.dateStr===h),J=new Set($.map(L=>L.habitId)),te=0,Ne=[];for(let L of P)J.has(L.id)?te++:Ne.push(L.name);let Pt=P.length,Yt=Pt===0?0:Math.round(te/Pt*100),Oe=Array.from(new Set(t.map(L=>L.dateStr))).sort().reverse().map(L=>{let[ve,Re,kt]=L.split("-");return Math.floor(new Date(Number(ve),Number(Re)-1,Number(kt)).getTime()/s)}),In=0,Ua=0;if(Oe.length>0){let L=1;In=1;for(let Re=0;Re<Oe.length-1;Re++)Oe[Re]-Oe[Re+1]===1?(L++,L>In&&(In=L)):L=1;let ve=Math.floor(o/s);if(Oe[0]===ve||Oe[0]===ve-1){Ua=1;for(let Re=0;Re<Oe.length-1&&Oe[Re]-Oe[Re+1]===1;Re++)Ua++}}let xi=[],dr=new Map,mr=0;for(let L=6;L>=0;L--){let ve=new Date(o-L*s),Re=this.getLocalFormattedDate(ve),kt=ve.toLocaleDateString("en-US",{weekday:"short"});xi.push({dateLabel:kt,count:0,percentage:0}),dr.set(Re,6-L)}let Sc=xi.map((L,ve)=>this.getLocalFormattedDate(new Date(o-(6-ve)*s))),Mc=a.map(L=>({habitId:L.id,name:L.name,days:Sc.map(ve=>{let kt=!!t.find(Ct=>Ct.habitId===L.id&&Ct.dateStr===ve),An=kt?"completed":"pending";if(!kt&&ve<h){let Ct=new Date(ve),Ac=x[Ct.getDay()];(L.frequency===0||L.days&&L.days.includes(Ac))&&(An="missed")}return{dateStr:ve,status:An}})}));this.weeklyMatrix.set(Mc);let Ec=this.getLocalFormattedDate(new Date(o-6*s)),qa={};for(let L of t)if(qa[L.habitId]=(qa[L.habitId]||0)+1,L.dateStr>=Ec){mr++;let ve=dr.get(L.dateStr);ve!==void 0&&xi[ve].count++}let Ic=Math.max(...xi.map(L=>L.count),1);for(let L of xi)L.percentage=L.count/Ic*100;let hr=a.length*7,Tc=hr===0?0:Math.round(mr/hr*100),pr="No Data",Qa=0;for(let[L,ve]of Object.entries(qa))if(ve>Qa){Qa=ve;let Re=a.find(kt=>kt.id===Number(L));Re&&(pr=Re.name)}let $a="You're doing great! Keep up the consistency.",Tn;for(let L of a){let ve=t.filter(Ct=>Ct.habitId===L.id),Re=this.getLocalFormattedDate(new Date(o-s)),kt=ve.some(Ct=>Ct.dateStr===Re),An=ve.some(Ct=>Ct.dateStr===h);if(kt&&!An){$a=`Your streak for "${L.name}" is at risk! Log it now to keep it alive.`,Tn=L.id;break}}!Tn&&Yt>0&&Yt<100&&($a=`You're just ${Pt-te} habit away from a perfect day!`,Tn=a.find(L=>!J.has(L.id))?.id),this.weeklyGraph.set(xi),this.stats.set({todayCompletedCount:te,todayTotalCount:Pt,todayPercentage:Yt,platformStreak:Ua,platformBestStreak:In,completionRate7Days:Tc,totalHabits:a.length,topHabitName:pr,topHabitScore:Qa,missedHabits:Ne,insightMessage:$a,insightHabitId:Tn,showWelcome:a.length===0,noCategories:e.length===0})}async toggleGridHabit(a,e){await this.habitLogService.toggleCompletion(a,e),await this.calculateMetrics()}async quickLog(a){let e=this.getLocalFormattedDate(new Date);await this.habitLogService.markHabitAsCompleted(a,e),await this.calculateMetrics()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-dashboard"]],decls:97,vars:14,consts:[[1,"p-24","df","fd-c","gap-6","font-inter",2,"background-color","var(--background-default)","min-height","100vh"],[1,"w-100","br-24","p-24","mb-16","animate-fade-in",2,"background","linear-gradient(135deg, #10b981, #059669)","color","#fff","box-shadow","0 10px 20px rgba(16, 185, 129, 0.2)"],[1,"df","fd-r","jc-sb","ai-c"],[1,"df","fd-c","gap-1"],[1,"m-0","fs-28","fw-700","text-primary"],[1,"m-0","fs-14","fw-500",2,"color","#6b7280"],[1,"w-100","br-24","p-24","position-relative","overflow-hidden",2,"background","linear-gradient(135deg, #1e293b, #0f172a)","color","#fff","box-shadow","0 10px 25px -5px rgba(15, 23, 42, 0.3)","box-sizing","border-box"],[1,"df","fd-r","gap-8","ai-c","position-relative","z-1","flex-wrap"],[1,"df","ai-c","jc-c","position-relative",2,"width","100px","height","100px","min-width","100px"],["viewBox","0 0 36 36",2,"width","100%","height","100%"],["d","M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831","fill","none","stroke","rgba(255,255,255,0.1)","stroke-width","3"],["d","M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831","fill","none","stroke","#10b981","stroke-width","3","stroke-linecap","round",2,"transition","stroke-dasharray 0.8s ease-out"],[1,"df","fd-c","ai-c","position-absolute","text-bg"],[1,"fs-22","fw-800","text-bg"],[1,"fs-10","fw-600","uppercase","ls-1","text-bg",2,"opacity","0.6"],[1,"df","fd-c","gap-3","flex-1",2,"min-width","200px"],[1,"df","ai-c","gap-2"],[1,"fs-18",2,"color","#f59e0b"],[1,"fs-12","fw-700","uppercase","ls-1",2,"color","#f59e0b"],[1,"m-0","fs-16","fw-600",2,"line-height","1.4","color","#f8fafc"],[1,"df","ai-c","jc-c","gap-2","mt-2","px-16","py-8","br-12","border-none","cursor-pointer","hover-lift",2,"background-color","#f97316","color","#fff","width","fit-content","transition","transform 0.2s"],[1,"df","fd-r","gap-4","w-100"],[1,"df","fd-c","gap-4","p-20","br-16","bg-white","flex-1",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","jc-sb","ai-c","gap-2"],[1,"fs-14","fw-700","uppercase","ls-1",2,"color","#94a3b8"],[1,"br-pill","px-8","py-4","df","ai-c","gap-1",2,"background-color","#fff7ed","color","#ea580c"],[2,"font-size","14px","width","14px","height","14px"],[1,"fs-11","fw-700"],[1,"df","fd-r","gap-2","ai-fe"],[1,"fs-28","fw-800",2,"line-height","1"],[1,"fs-13","fw-500","mb-1"],[1,"fs-14","fw-700","uppercase","ls-1"],[2,"color","#10b981","font-size","18px"],[1,"bg-white","p-24","br-16","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box","margin-bottom","8px"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4","mb-16"],[1,"m-0","fs-18","fw-700",2,"color","var(--text-primary)"],[1,"fs-12","fw-600","text-secondary","ls-1","ml-auto"],[1,"w-100","position-relative",2,"height","180px"],["baseChart","","type","bar",3,"data","options"],[1,"bg-white","p-24","br-16","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4","mb-20"],[1,"m-0","fs-18","fw-700",2,"color","#1e293b"],[1,"overflow-x-auto","w-100","hide-scrollbar"],[1,"df","fd-c","gap-4",2,"min-width","450px"],[1,"df","fd-r","ai-c","py-4",2,"border-bottom","2px solid #f1f5f9"],[2,"flex","2","padding-right","12px"],[1,"df","jc-c",2,"flex","1"],[1,"df","fd-r","ai-c","py-12",2,"border-bottom","1px solid #f8fafc"],[1,"df","fd-r","flex-wrap","gap-4","w-100","pb-24"],[1,"bg-white","br-16","p-20","flex-1","df","fd-r","ai-c","gap-4",2,"min-width","250px","box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","ai-c","jc-c","br-pill","text-white",2,"width","44px","height","44px","background-color","#f59e0b","min-width","44px"],[2,"font-size","20px","height","20px","width","20px"],[1,"df","fd-c","overflow-hidden"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-15","fw-700","truncate",2,"color","#1e293b"],[1,"ml-auto","fs-16","fw-800",2,"color","#f59e0b"],[1,"df","ai-c","jc-c","br-pill","text-white",2,"width","44px","height","44px","background-color","#ef4444","min-width","44px"],[1,"fs-14","fw-600","truncate",2,"color","#1e293b"],[1,"fs-14","fw-600",2,"color","#10b981"],[1,"df","fd-r","ai-c","gap-4"],[1,"df","ai-c","jc-c","br-pill","bg-white",2,"width","56px","height","56px","min-width","56px"],[2,"color","#10b981","font-size","32px","width","32px","height","32px"],[1,"m-0","fs-22","fw-800"],[1,"m-0","fs-14","fw-500",2,"opacity","0.9"],[1,"mt-20","p-16","br-16",2,"background-color","rgba(255,255,255,0.15)","border","1px solid rgba(255,255,255,0.2)"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4"],[1,"fs-15","fw-700"],[1,"fs-13","fw-500",2,"opacity","0.8"],["routerLink","/categories","mat-flat-button","",1,"br-12","fw-700","px-20",2,"background-color","#fff","color","#059669"],[1,"df","ai-c","jc-c","gap-2","mt-2","px-16","py-8","br-12","border-none","cursor-pointer","hover-lift",2,"background-color","#f97316","color","#fff","width","fit-content","transition","transform 0.2s",3,"click"],[2,"font-size","18px","width","18px","height","18px"],[1,"fs-13","fw-700"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1",2,"opacity","0.6"],[1,"df","fd-r","ai-c","gap-3","overflow-hidden",2,"flex","2","padding-right","12px"],[1,"fs-13","fw-600","truncate","text-primary"],[1,"df","ai-c","jc-c","cursor-pointer","transition-all",2,"width","28px","height","28px","border-radius","50%","border","2px solid transparent",3,"click"],[1,"df","ai-c","jc-c","br-pill","bg-success",2,"width","20px","height","20px","background-color","#10b981"],[1,"df","ai-c","jc-c","br-pill",2,"width","20px","height","20px","background-color","#fee2e2"],[1,"br-pill",2,"width","16px","height","16px","border","2px solid #e2e8f0","background-color","#fff"],[2,"font-size","14px","width","14px","height","14px","color","#fff"],[2,"font-size","14px","width","14px","height","14px","color","#ef4444"]],template:function(e,t){e&1&&(r(0,"div",0),k(1,Vc,11,2,"div",1),r(2,"div",2)(3,"div",3)(4,"h1",4),d(5),l(),r(6,"p",5),d(7,"See your progress and stay motivated"),l()()(),r(8,"div",6)(9,"div",7)(10,"div",8),at(),r(11,"svg",9),E(12,"path",10)(13,"path",11),l(),Xi(),r(14,"div",12)(15,"span",13),d(16),l(),r(17,"span",14),d(18,"Today"),l()()(),r(19,"div",15)(20,"div",16)(21,"mat-icon",17),d(22,"auto_awesome"),l(),r(23,"span",18),d(24,"Smart Insight"),l()(),r(25,"p",19),d(26),l(),k(27,Bc,5,0,"button",20),l()()(),r(28,"div",21)(29,"div",22)(30,"div",23)(31,"span",24),d(32,"Streak"),l(),r(33,"div",25)(34,"mat-icon",26),d(35,"local_fire_department"),l(),r(36,"span",27),d(37),l()()(),r(38,"div",28)(39,"span",29),d(40),l(),r(41,"span",30),d(42,"days total"),l()()(),r(43,"div",22)(44,"div",23)(45,"span",31),d(46,"Consistency"),l(),r(47,"mat-icon",32),d(48,"insights"),l()(),r(49,"div",28)(50,"span",29),d(51),l(),r(52,"span",30),d(53,"7 day avg"),l()()()(),r(54,"div",33)(55,"div",34)(56,"h2",35),d(57,"Activity Volume"),l(),r(58,"span",36),d(59,"PAST 7 DAYS"),l()(),r(60,"div",37),E(61,"canvas",38),l()(),r(62,"div",39)(63,"div",40)(64,"h2",41),d(65,"Weekly Tracker"),l(),r(66,"span",36),d(67,"PAST 7 DAYS"),l()(),r(68,"div",42)(69,"div",43)(70,"div",44),E(71,"div",45),ce(72,Nc,3,1,"div",46,Rc),l(),ce(74,Gc,6,1,"div",47,Fc),l()()(),r(76,"div",48)(77,"div",49)(78,"div",50)(79,"mat-icon",51),d(80,"military_tech"),l()(),r(81,"div",52)(82,"span",53),d(83,"Record Habit"),l(),r(84,"span",54),d(85),l()(),r(86,"span",55),d(87),l()(),r(88,"div",49)(89,"div",56)(90,"mat-icon",51),d(91,"error_outline"),l()(),r(92,"div",52)(93,"span",53),d(94,"Pending Today"),l(),k(95,Uc,2,1,"span",57)(96,qc,2,0,"span",58),l()()()()),e&2&&(m(),C(t.stats().showWelcome?1:-1),m(4),Q(" ",t.activeUser()?"Hello, "+t.activeUser().name+"!":"Your Dashboard"," "),m(8),N("stroke-dasharray",t.stats().todayPercentage+", 100"),m(3),Q("",t.stats().todayPercentage,"%"),m(10),Q(" ",t.stats().insightMessage," "),m(),C(t.stats().insightHabitId?27:-1),m(10),Q("",t.stats().platformStreak,"d"),m(3),F(t.stats().platformStreak),m(11),Q("",t.stats().completionRate7Days,"%"),m(10),y("data",t.chartDataConfiguration())("options",t.chartOptions()),m(11),de(t.weeklyGraph()),m(2),de(t.weeklyMatrix()),m(11),F(t.stats().topHabitName),m(2),Q("",t.stats().topHabitScore,"x"),m(8),C(t.stats().missedHabits.length>0?95:96))},dependencies:[xe,we,Kt,Nn,Di],encapsulation:2})};var $c=20,zt=(()=>{class i{_ngZone=c(G);_platform=c(me);_renderer=c(Lt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new w;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=$c){return this._platform.isBrowser?new Dt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(Xa(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ki()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(re(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let n=tn(t),o=e.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ut=(()=>{class i{elementRef=c(R);scrollDispatcher=c(zt);ngZone=c(G);dir=c(Te,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new w;_renderer=c(ue);_cleanupScroll;_elementScrolled=new w;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=n?e.end:e.start),e.right==null&&(e.right=n?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&Ei()!=Mi.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Ei()==Mi.INVERTED?e.left=e.right:Ei()==Mi.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Qn()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",n="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?n:t:e=="end"&&(e=s?t:n),s&&Ei()==Mi.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Ei()==Mi.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Yc=20,lt=(()=>{class i{_platform=c(me);_listeners;_viewportSize=null;_change=new w;_document=c(be);constructor(){let e=c(G),t=c(Lt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[t.listen("window","resize",n),t.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,h=-o.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0;return{top:s,left:h}}change(e=Yc){return e>0?this._change.pipe(Xa(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var At=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({})}return i})(),ho=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[K,At,K,At]})}return i})();var nn=class{_attachedHost=null;attach(a){return this._attachedHost=a,a.attach(this)}detach(){let a=this._attachedHost;a!=null&&(this._attachedHost=null,a.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(a){this._attachedHost=a}},ft=class extends nn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(a,e,t,n,o){super(),this.component=a,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=o||null}},et=class extends nn{templateRef;viewContainerRef;context;injector;constructor(a,e,t,n){super(),this.templateRef=a,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(a,e=this.context){return this.context=e,super.attach(a)}detach(){return this.context=void 0,super.detach()}},po=class extends nn{element;constructor(a){super(),this.element=a instanceof R?a.nativeElement:a}},ei=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(a){if(a instanceof ft)return this._attachedPortal=a,this.attachComponentPortal(a);if(a instanceof et)return this._attachedPortal=a,this.attachTemplatePortal(a);if(this.attachDomPortal&&a instanceof po)return this._attachedPortal=a,this.attachDomPortal(a)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(a){this._disposeFn=a}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Xn=class extends ei{outletElement;_appRef;_defaultInjector;constructor(a,e,t){super(),this.outletElement=a,this._appRef=e,this._defaultInjector=t}attachComponentPortal(a){let e;if(a.viewContainerRef){let t=a.injector||a.viewContainerRef.injector,n=t.get(to,null,{optional:!0})||void 0;e=a.viewContainerRef.createComponent(a.component,{index:a.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=a.injector||this._defaultInjector||Y.NULL,o=n.get(Rn,t.injector);e=Hr(a.component,{elementInjector:n,environmentInjector:o,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=a,e}attachTemplatePortal(a){let e=a.viewContainerRef,t=e.createEmbeddedView(a.templateRef,a.context,{injector:a.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=a,t}attachDomPortal=a=>{let e=a.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=a,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(a){return a.hostView.rootNodes[0]}},ss=(()=>{class i extends et{constructor(){let e=c(Qe),t=c(ot);super(e,t)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[U]})}return i})(),nt=(()=>{class i extends ei{_moduleRef=c(to,{optional:!0});_document=c(be);_viewContainerRef=c(ot);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new A;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[U]})}return i})(),gt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({})}return i})();var ls=Qn();function Oi(i){return new Zn(i.get(lt),i.get(be))}var Zn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(a,e){this._viewportRuler=a,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let a=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=a.style.left||"",this._previousHTMLStyles.top=a.style.top||"",a.style.left=De(-this._previousScrollPosition.left),a.style.top=De(-this._previousScrollPosition.top),a.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let a=this._document.documentElement,e=this._document.body,t=a.style,n=e.style,o=t.scrollBehavior||"",s=n.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,a.classList.remove("cdk-global-scrollblock"),ls&&(t.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ls&&(t.scrollBehavior=o,n.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function fs(i,a){return new Kn(i.get(zt),i.get(G),i.get(lt),a)}var Kn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(a,e,t,n){this._scrollDispatcher=a,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(this._scrollSubscription)return;let a=this._scrollDispatcher.scrolled(0).pipe(re(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=a.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=a.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var an=class{enable(){}disable(){}attach(){}};function uo(i,a){return a.some(e=>{let t=i.bottom<e.top,n=i.top>e.bottom,o=i.right<e.left,s=i.left>e.right;return t||n||o||s})}function cs(i,a){return a.some(e=>{let t=i.top<e.top,n=i.bottom>e.bottom,o=i.left<e.left,s=i.right>e.right;return t||n||o||s})}function gi(i,a){return new Jn(i.get(zt),i.get(lt),i.get(G),a)}var Jn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(a,e,t,n){this._scrollDispatcher=a,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(!this._scrollSubscription){let a=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(a).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();uo(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},gs=(()=>{class i{_injector=c(Y);constructor(){}noop=()=>new an;close=e=>fs(this._injector,e);block=()=>Oi(this._injector);reposition=e=>gi(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ht=class{positionStrategy;scrollStrategy=new an;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(a){if(a){let e=Object.keys(a);for(let t of e)a[t]!==void 0&&(this[t]=a[t])}}};var ea=class{connectionPair;scrollableViewProperties;constructor(a,e){this.connectionPair=a,this.scrollableViewProperties=e}};var _s=(()=>{class i{_attachedOverlays=[];_document=c(be);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),bs=(()=>{class i extends _s{_ngZone=c(G);_renderer=c(Lt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let o=t[n];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),vs=(()=>{class i extends _s{_platform=c(me);_ngZone=c(G);_renderer=c(Lt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,n),o.listen(t,"click",this._clickListener,n),o.listen(t,"auxclick",this._clickListener,n),o.listen(t,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Si(e)};_clickListener=e=>{let t=Si(e),n=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let h=o[s],p=h._outsidePointerEvents;if(!(!h.hasAttached()||!this.canReceiveEvent(h,e,p))){if(ds(h.overlayElement,t)||ds(h.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>p.next(e)):p.next(e)}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ds(i,a){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=a;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ys=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return i})(),na=(()=>{class i{_platform=c(me);_containerElement;_document=c(be);_styleLoader=c(We);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||lo()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<n.length;o++)n[o].remove()}let t=this._document.createElement("div");t.classList.add(e),lo()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ys)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),fo=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(a,e,t,n){this._renderer=e,this._ngZone=t,this.element=a.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let a=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(a,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),a.style.pointerEvents="none",a.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function go(i){return i&&i.nodeType===1}var Ti=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new w;_attachments=new w;_detachments=new w;_positionStrategy;_scrollStrategy;_locationChanges=ye.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new w;_outsidePointerEvents=new w;_afterNextRenderRef;constructor(a,e,t,n,o,s,h,p,x,M=!1,P,$){this._portalOutlet=a,this._host=e,this._pane=t,this._config=n,this._ngZone=o,this._keyboardDispatcher=s,this._document=h,this._location=p,this._outsideClickDispatcher=x,this._animationsDisabled=M,this._injector=P,this._renderer=$,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(a){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(a);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ce(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let a=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),a}dispose(){if(this._disposed)return;let a=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,a&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(a){a!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=a,this.hasAttached()&&(a.attach(this),this.updatePosition()))}updateSize(a){this._config=H(H({},this._config),a),this._updateElementSize()}setDirection(a){this._config=Se(H({},this._config),{direction:a}),this._updateElementDirection()}addPanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!0)}removePanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!1)}getDirection(){let a=this._config.direction;return a?typeof a=="string"?a:a.value:"ltr"}updateScrollStrategy(a){a!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=a,this.hasAttached()&&(a.attach(this),a.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let a=this._pane.style;a.width=De(this._config.width),a.height=De(this._config.height),a.minWidth=De(this._config.minWidth),a.minHeight=De(this._config.minHeight),a.maxWidth=De(this._config.maxWidth),a.maxHeight=De(this._config.maxHeight)}_togglePointerEvents(a){this._pane.style.pointerEvents=a?"":"none"}_attachHost(){if(!this._host.parentElement){let a=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;go(a)?a.after(this._host):a?.type==="parent"?a.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let a="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new fo(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(a))}):this._backdropRef.element.classList.add(a)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(a,e,t){let n=ro(e||[]).filter(o=>!!o);n.length&&(t?a.classList.add(...n):a.classList.remove(...n))}_detachContentWhenEmpty(){let a=!1;try{this._detachContentAfterRenderRef=Ce(()=>{a=!0,this._detachContent()},{injector:this._injector})}catch(e){if(a)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let a=this._scrollStrategy;a?.disable(),a?.detach?.()}},ms="cdk-overlay-connected-position-bounding-box",Zc=/([A-Za-z%]+)$/;function on(i,a){return new ta(a,i.get(lt),i.get(be),i.get(me),i.get(na))}var ta=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new w;_resizeSubscription=ye.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(a,e,t,n,o){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=o,this.setOrigin(a)}attach(a){this._overlayRef&&this._overlayRef,this._validatePositions(),a.hostElement.classList.add(ms),this._overlayRef=a,this._boundingBox=a.hostElement,this._pane=a.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let a=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,o=[],s;for(let h of this._preferredPositions){let p=this._getOriginPoint(a,n,h),x=this._getOverlayPoint(p,e,h),M=this._getOverlayFit(x,e,t,h);if(M.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(h,p);return}if(this._canFitWithFlexibleDimensions(M,x,t)){o.push({position:h,origin:p,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(p,h)});continue}(!s||s.overlayFit.visibleArea<M.visibleArea)&&(s={overlayFit:M,overlayPoint:x,originPoint:p,position:h,overlayRect:e})}if(o.length){let h=null,p=-1;for(let x of o){let M=x.boundingBoxRect.width*x.boundingBoxRect.height*(x.position.weight||1);M>p&&(p=M,h=x)}this._isPushed=!1,this._applyPosition(h.position,h.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&fi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ms),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let a=this._lastPosition;a?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(a,this._getOriginPoint(this._originRect,this._containerRect,a))):this.apply()}withScrollableContainers(a){return this._scrollables=a,this}withPositions(a){return this._preferredPositions=a,a.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(a){return this._viewportMargin=a,this}withFlexibleDimensions(a=!0){return this._hasFlexibleDimensions=a,this}withGrowAfterOpen(a=!0){return this._growAfterOpen=a,this}withPush(a=!0){return this._canPush=a,this}withLockedPosition(a=!0){return this._positionLocked=a,this}setOrigin(a){return this._origin=a,this}withDefaultOffsetX(a){return this._offsetX=a,this}withDefaultOffsetY(a){return this._offsetY=a,this}withTransformOriginOn(a){return this._transformOriginSelector=a,this}withPopoverLocation(a){return this._popoverLocation=a,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof R?this._origin.nativeElement:go(this._origin)?this._origin:null}_getOriginPoint(a,e,t){let n;if(t.originX=="center")n=a.left+a.width/2;else{let s=this._isRtl()?a.right:a.left,h=this._isRtl()?a.left:a.right;n=t.originX=="start"?s:h}e.left<0&&(n-=e.left);let o;return t.originY=="center"?o=a.top+a.height/2:o=t.originY=="top"?a.top:a.bottom,e.top<0&&(o-=e.top),{x:n,y:o}}_getOverlayPoint(a,e,t){let n;t.overlayX=="center"?n=-e.width/2:t.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:a.x+n,y:a.y+o}}_getOverlayFit(a,e,t,n){let o=ps(e),{x:s,y:h}=a,p=this._getOffset(n,"x"),x=this._getOffset(n,"y");p&&(s+=p),x&&(h+=x);let M=0-s,P=s+o.width-t.width,$=0-h,J=h+o.height-t.height,te=this._subtractOverflows(o.width,M,P),Ne=this._subtractOverflows(o.height,$,J),Pt=te*Ne;return{visibleArea:Pt,isCompletelyWithinViewport:o.width*o.height===Pt,fitsInViewportVertically:Ne===o.height,fitsInViewportHorizontally:te==o.width}}_canFitWithFlexibleDimensions(a,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,o=t.right-e.x,s=hs(this._overlayRef.getConfig().minHeight),h=hs(this._overlayRef.getConfig().minWidth),p=a.fitsInViewportVertically||s!=null&&s<=n,x=a.fitsInViewportHorizontally||h!=null&&h<=o;return p&&x}return!1}_pushOverlayOnScreen(a,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:a.x+this._previousPushAmount.x,y:a.y+this._previousPushAmount.y};let n=ps(e),o=this._viewportRect,s=Math.max(a.x+n.width-o.width,0),h=Math.max(a.y+n.height-o.height,0),p=Math.max(o.top-t.top-a.y,0),x=Math.max(o.left-t.left-a.x,0),M=0,P=0;return n.width<=o.width?M=x||-s:M=a.x<this._getViewportMarginStart()?o.left-t.left-a.x:0,n.height<=o.height?P=p||-h:P=a.y<this._getViewportMarginTop()?o.top-t.top-a.y:0,this._previousPushAmount={x:M,y:P},{x:a.x+M,y:a.y+P}}_applyPosition(a,e){if(this._setTransformOrigin(a),this._setOverlayElementStyles(e,a),this._setBoundingBoxStyles(e,a),a.panelClass&&this._addPanelClasses(a.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(a!==this._lastPosition||!this._lastScrollVisibility||!Kc(this._lastScrollVisibility,t)){let n=new ea(a,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=a,this._isInitialRender=!1}_setTransformOrigin(a){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=a.overlayY;a.overlayX==="center"?t="center":this._isRtl()?t=a.overlayX==="start"?"right":"left":t=a.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(a,e){let t=this._viewportRect,n=this._isRtl(),o,s,h;if(e.overlayY==="top")s=a.y,o=t.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")h=t.height-a.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-h+this._getViewportMarginTop();else{let J=Math.min(t.bottom-a.y+t.top,a.y),te=this._lastBoundingBoxSize.height;o=J*2,s=a.y-J,o>te&&!this._isInitialRender&&!this._growAfterOpen&&(s=a.y-te/2)}let p=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,x=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,M,P,$;if(x)$=t.width-a.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),M=a.x-this._getViewportMarginStart();else if(p)P=a.x,M=t.right-a.x-this._getViewportMarginEnd();else{let J=Math.min(t.right-a.x+t.left,a.x),te=this._lastBoundingBoxSize.width;M=J*2,P=a.x-J,M>te&&!this._isInitialRender&&!this._growAfterOpen&&(P=a.x-te/2)}return{top:s,left:P,bottom:h,right:$,width:M,height:o}}_setBoundingBoxStyles(a,e){let t=this._calculateBoundingBoxRect(a,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;n.width=De(t.width),n.height=De(t.height),n.top=De(t.top)||"auto",n.bottom=De(t.bottom)||"auto",n.left=De(t.left)||"auto",n.right=De(t.right)||"auto",e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(n.maxHeight=De(o)),s&&(n.maxWidth=De(s))}this._lastBoundingBoxSize=t,fi(this._boundingBox.style,n)}_resetBoundingBoxStyles(){fi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){fi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(a,e){let t={},n=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(n){let M=this._viewportRuler.getViewportScrollPosition();fi(t,this._getExactOverlayY(e,a,M)),fi(t,this._getExactOverlayX(e,a,M))}else t.position="static";let h="",p=this._getOffset(e,"x"),x=this._getOffset(e,"y");p&&(h+=`translateX(${p}px) `),x&&(h+=`translateY(${x}px)`),t.transform=h.trim(),s.maxHeight&&(n?t.maxHeight=De(s.maxHeight):o&&(t.maxHeight="")),s.maxWidth&&(n?t.maxWidth=De(s.maxWidth):o&&(t.maxWidth="")),fi(this._pane.style,t)}_getExactOverlayY(a,e,t){let n={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,a);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),a.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;n.bottom=`${s-(o.y+this._overlayRect.height)}px`}else n.top=De(o.y);return n}_getExactOverlayX(a,e,t){let n={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,a);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let s;if(this._isRtl()?s=a.overlayX==="end"?"left":"right":s=a.overlayX==="end"?"right":"left",s==="right"){let h=this._document.documentElement.clientWidth;n.right=`${h-(o.x+this._overlayRect.width)}px`}else n.left=De(o.x);return n}_getScrollVisibility(){let a=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:cs(a,t),isOriginOutsideView:uo(a,t),isOverlayClipped:cs(e,t),isOverlayOutsideView:uo(e,t)}}_subtractOverflows(a,...e){return e.reduce((t,n)=>t-Math.max(n,0),a)}_getNarrowedViewportRect(){let a=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+a-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:a-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(a,e){return e==="x"?a.offsetX==null?this._offsetX:a.offsetX:a.offsetY==null?this._offsetY:a.offsetY}_validatePositions(){}_addPanelClasses(a){this._pane&&ro(a).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(a=>{this._pane.classList.remove(a)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let a=this._origin;if(a instanceof R)return a.nativeElement.getBoundingClientRect();if(a instanceof Element)return a.getBoundingClientRect();let e=a.width||0,t=a.height||0;return{top:a.y,bottom:a.y+t,left:a.x,right:a.x+e,height:t,width:e}}_getContainerRect(){let a=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();a&&(e.style.display="block");let t=e.getBoundingClientRect();return a&&(e.style.display=""),t}};function fi(i,a){for(let e in a)a.hasOwnProperty(e)&&(i[e]=a[e]);return i}function hs(i){if(typeof i!="number"&&i!=null){let[a,e]=i.split(Zc);return!e||e==="px"?parseFloat(a):null}return i||null}function ps(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Kc(i,a){return i===a?!0:i.isOriginClipped===a.isOriginClipped&&i.isOriginOutsideView===a.isOriginOutsideView&&i.isOverlayClipped===a.isOverlayClipped&&i.isOverlayOutsideView===a.isOverlayOutsideView}var us="cdk-global-overlay-wrapper";function ti(i){return new ia}var ia=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(a){let e=a.getConfig();this._overlayRef=a,this._width&&!e.width&&a.updateSize({width:this._width}),this._height&&!e.height&&a.updateSize({height:this._height}),a.hostElement.classList.add(us),this._isDisposed=!1}top(a=""){return this._bottomOffset="",this._topOffset=a,this._alignItems="flex-start",this}left(a=""){return this._xOffset=a,this._xPosition="left",this}bottom(a=""){return this._topOffset="",this._bottomOffset=a,this._alignItems="flex-end",this}right(a=""){return this._xOffset=a,this._xPosition="right",this}start(a=""){return this._xOffset=a,this._xPosition="start",this}end(a=""){return this._xOffset=a,this._xPosition="end",this}width(a=""){return this._overlayRef?this._overlayRef.updateSize({width:a}):this._width=a,this}height(a=""){return this._overlayRef?this._overlayRef.updateSize({height:a}):this._height=a,this}centerHorizontally(a=""){return this.left(a),this._xPosition="center",this}centerVertically(a=""){return this.top(a),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:n,height:o,maxWidth:s,maxHeight:h}=t,p=(n==="100%"||n==="100vw")&&(!s||s==="100%"||s==="100vw"),x=(o==="100%"||o==="100vh")&&(!h||h==="100%"||h==="100vh"),M=this._xPosition,P=this._xOffset,$=this._overlayRef.getConfig().direction==="rtl",J="",te="",Ne="";p?Ne="flex-start":M==="center"?(Ne="center",$?te=P:J=P):$?M==="left"||M==="end"?(Ne="flex-end",J=P):(M==="right"||M==="start")&&(Ne="flex-start",te=P):M==="left"||M==="start"?(Ne="flex-start",J=P):(M==="right"||M==="end")&&(Ne="flex-end",te=P),a.position=this._cssPosition,a.marginLeft=p?"0":J,a.marginTop=x?"0":this._topOffset,a.marginBottom=this._bottomOffset,a.marginRight=p?"0":te,e.justifyContent=Ne,e.alignItems=x?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(us),t.justifyContent=t.alignItems=a.marginTop=a.marginBottom=a.marginLeft=a.marginRight=a.position="",this._overlayRef=null,this._isDisposed=!0}},xs=(()=>{class i{_injector=c(Y);constructor(){}global(){return ti()}flexibleConnectedTo(e){return on(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),rn=new D("OVERLAY_DEFAULT_CONFIG");function Wt(i,a){i.get(We).load(ys);let e=i.get(na),t=i.get(be),n=i.get(he),o=i.get(pi),s=i.get(Te),h=i.get(ue,null,{optional:!0})||i.get(Lt).createRenderer(null,null),p=new Ht(a),x=i.get(rn,null,{optional:!0})?.usePopover??!0;p.direction=p.direction||s.value,"showPopover"in t.body?p.usePopover=a?.usePopover??x:p.usePopover=!1;let M=t.createElement("div"),P=t.createElement("div");M.id=n.getId("cdk-overlay-"),M.classList.add("cdk-overlay-pane"),P.appendChild(M),p.usePopover&&(P.setAttribute("popover","manual"),P.classList.add("cdk-overlay-popover"));let $=p.usePopover?p.positionStrategy?.getPopoverInsertionPoint?.():null;return go($)?$.after(P):$?.type==="parent"?$.element.appendChild(P):e.getContainerElement().appendChild(P),new Ti(new Xn(M,o,i),P,M,p,i.get(G),i.get(bs),t,i.get(jr),i.get(vs),a?.disableAnimations??i.get(kr,null,{optional:!0})==="NoopAnimations",i.get(Rn),h)}var ws=(()=>{class i{scrollStrategies=c(gs);_positionBuilder=c(xs);_injector=c(Y);constructor(){}create(e){return Wt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Jc=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ed=new D("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Y);return()=>gi(i)}}),Ai=(()=>{class i{elementRef=c(R);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),ks=new D("cdk-connected-overlay-default-config"),aa=(()=>{class i{_dir=c(Te,{optional:!0});_injector=c(Y);_overlayRef;_templatePortal;_backdropSubscription=ye.EMPTY;_attachSubscription=ye.EMPTY;_detachSubscription=ye.EMPTY;_positionSubscription=ye.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(ed);_ngZone=c(G);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new A;positionChange=new A;attach=new A;detach=new A;overlayKeydown=new A;overlayOutsideClick=new A;constructor(){let e=c(Qe),t=c(ot),n=c(ks,{optional:!0}),o=c(rn,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new et(e,t),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Jc);let e=this._overlayRef=Wt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ae(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let n=this._getOriginElement(),o=Si(t);(!n||n!==o&&!n.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Ht({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=on(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ai?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ai?this.origin.elementRef.nativeElement:this.origin instanceof R?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(br(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",O],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",O],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",O],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",O],push:[2,"cdkConnectedOverlayPush","push",O],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",O],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",O],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[fe]})}return i})(),_t=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({providers:[ws],imports:[K,gt,ho,ho]})}return i})();function td(i,a){}var ii=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var bo=(()=>{class i extends ei{_elementRef=c(R);_focusTrapFactory=c(Wn);_config;_interactivityChecker=c(jn);_ngZone=c(G);_focusMonitor=c(pt);_renderer=c(ue);_changeDetectorRef=c(oe);_injector=c(Y);_platform=c(me);_document=c(be);_portalOutlet;_focusTrapped=new w;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(ii,{optional:!0})||new ii,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Ce(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=en(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=en();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=en()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&le(nt,7),t&2){let o;b(o=v())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&N("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[U],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&Le(0,td,0,0,"ng-template",0)},dependencies:[nt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),sn=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new w;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Ae(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},id=new D("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=c(Y);return()=>Oi(i)}}),nd=new D("DialogData"),ad=new D("DefaultDialogConfig");function od(i){let a=S(i),e=new A;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var vo=(()=>{class i{_injector=c(Y);_defaultOptions=c(ad,{optional:!0});_parentDialog=c(i,{optional:!0,skipSelf:!0});_overlayContainer=c(na);_idGenerator=c(he);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new w;_afterOpenedAtThisLevel=new w;_ariaHiddenElements=new Map;_scrollStrategy=c(id);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ci(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Me(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new ii;t=H(H({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),s=Wt(this._injector,o),h=new sn(s,t),p=this._attachContainer(s,h,t);if(h.containerInstance=p,!this.openDialogs.length){let x=this._overlayContainer.getContainerElement();p._focusTrapped?p._focusTrapped.pipe(Pe(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(x)}):this._hideNonDialogContentFromAssistiveTechnology(x)}return this._attachDialogContent(e,h,p,t),this.openDialogs.push(h),h.closed.subscribe(()=>this._removeOpenDialog(h,!0)),this.afterOpened.next(h),h}closeAll(){_o(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){_o(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),_o(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Ht({positionStrategy:e.positionStrategy||ti().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let o=n.injector||n.viewContainerRef?.injector,s=[{provide:ii,useValue:n},{provide:sn,useValue:t},{provide:Ti,useValue:e}],h;n.container?typeof n.container=="function"?h=n.container:(h=n.container.type,s.push(...n.container.providers(n))):h=bo;let p=new ft(h,n.viewContainerRef,Y.create({parent:o||this._injector,providers:s}));return e.attach(p).instance}_attachDialogContent(e,t,n,o){if(e instanceof Qe){let s=this._createInjector(o,t,n,void 0),h={$implicit:o.data,dialogRef:t};o.templateContext&&(h=H(H({},h),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new et(e,null,h,s))}else{let s=this._createInjector(o,t,n,this._injector),h=n.attachComponentPortal(new ft(e,o.viewContainerRef,s));t.componentRef=h,t.componentInstance=h.instance}}_createInjector(e,t,n,o){let s=e.injector||e.viewContainerRef?.injector,h=[{provide:nd,useValue:e.data},{provide:sn,useValue:t}];return e.providers&&(typeof e.providers=="function"?h.push(...e.providers(t,e,n)):h.push(...e.providers)),e.direction&&(!s||!s.get(Te,null,{optional:!0}))&&h.push({provide:Te,useValue:od(e.direction)}),Y.create({parent:s||o,providers:h})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let o=t[n];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _o(i,a){let e=i.length;for(;e--;)a(i[e])}var Cs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({providers:[vo],imports:[_t,gt,Un,gt]})}return i})();function rd(i,a){}var ra=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},yo="mdc-dialog--open",Ds="mdc-dialog--opening",Ss="mdc-dialog--closing",sd=150,ld=75,cd=(()=>{class i extends bo{_animationStateChanged=new A;_animationsEnabled=!pe();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Es(this._config.enterAnimationDuration)??sd:0;_exitAnimationDuration=this._animationsEnabled?Es(this._config.exitAnimationDuration)??ld:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ms,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ds,yo)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(yo),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(yo),this._animationsEnabled?(this._hostElement.style.setProperty(Ms,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ss)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ds,Ss)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(Ue("id",n._config.id),N("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),I("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[U],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1),Le(2,rd,0,0,"ng-template",2),l()())},dependencies:[nt],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return i})(),Ms="--mat-dialog-transition-duration";function Es(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?it(i.substring(0,i.length-2)):i.endsWith("s")?it(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var oa=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(oa||{}),Gt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ya(1);_beforeClosed=new Ya(1);_result;_closeFallbackTimeout;_state=oa.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(re(n=>n.state==="opened"),Pe(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(re(n=>n.state==="closed"),Pe(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Fe(this.backdropClick(),this.keydownEvents().pipe(re(n=>n.keyCode===27&&!this.disableClose&&!Ae(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Is(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(re(t=>t.state==="closing"),Pe(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=oa.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=oa.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Is(i,a,e){return i._closeInteractionType=a,i.close(e)}var _i=new D("MatMdcDialogData"),dd=new D("mat-mdc-dialog-default-options"),md=new D("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Y);return()=>Oi(i)}}),Ut=(()=>{class i{_defaultOptions=c(dd,{optional:!0});_scrollStrategy=c(md);_parentDialog=c(i,{optional:!0,skipSelf:!0});_idGenerator=c(he);_injector=c(Y);_dialog=c(vo);_animationsDisabled=pe();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new w;_afterOpenedAtThisLevel=new w;dialogConfigClass=ra;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ci(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Me(void 0)));constructor(){this._dialogRefConstructor=Gt,this._dialogContainerType=cd,this._dialogDataToken=_i}open(e,t){let n;t=H(H({},this._defaultOptions||new ra),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Se(H({},t),{positionStrategy:ti(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ii,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(s,h,p)=>(n=new this._dialogRefConstructor(s,t,p),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:h.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(n);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),sa=(()=>{class i{dialogRef=c(Gt,{optional:!0});_elementRef=c(R);_dialog=c(Ut);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Fs(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Is(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&u("click",function(s){return n._onButtonClick(s)}),t&2&&N("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[fe]})}return i})(),Ts=(()=>{class i{_dialogRef=c(Gt,{optional:!0});_elementRef=c(R);_dialog=c(Ut);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Fs(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i})}return i})(),As=(()=>{class i extends Ts{id=c(he).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&Ue("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[U]})}return i})(),Os=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Sr([ut])]})}return i})(),Rs=(()=>{class i extends Ts{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&I("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[U]})}return i})();function Fs(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var bt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({providers:[Ut],imports:[Cs,_t,gt,K]})}return i})();var Gs=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(ge(ue),ge(R))};static \u0275dir=_({type:i})}return i})(),Us=(()=>{class i extends Gs{static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,features:[U]})}return i})(),ai=new D("");var hd={provide:ai,useExisting:He(()=>ct),multi:!0};function pd(){let i=oo()?oo().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var ud=new D(""),ct=(()=>{class i extends Gs{_compositionMode;_composing=!1;constructor(e,t,n){super(e,t),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!pd())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(ge(ue),ge(R),ge(ud,8))};static \u0275dir=_({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,n){t&1&&u("input",function(s){return n._handleInput(s.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(s){return n._compositionEnd(s.target.value)})},standalone:!1,features:[q([hd]),U]})}return i})();function Co(i){return i==null||Do(i)===0}function Do(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var yt=new D(""),ba=new D(""),fd=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ve=class{static min(a){return qs(a)}static max(a){return gd(a)}static required(a){return Qs(a)}static requiredTrue(a){return _d(a)}static email(a){return bd(a)}static minLength(a){return vd(a)}static maxLength(a){return $s(a)}static pattern(a){return yd(a)}static nullValidator(a){return ca()}static compose(a){return el(a)}static composeAsync(a){return tl(a)}};function qs(i){return a=>{if(a.value==null||i==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e<i?{min:{min:i,actual:a.value}}:null}}function gd(i){return a=>{if(a.value==null||i==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e>i?{max:{max:i,actual:a.value}}:null}}function Qs(i){return Co(i.value)?{required:!0}:null}function _d(i){return i.value===!0?null:{required:!0}}function bd(i){return Co(i.value)||fd.test(i.value)?null:{email:!0}}function vd(i){return a=>{let e=a.value?.length??Do(a.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function $s(i){return a=>{let e=a.value?.length??Do(a.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function yd(i){if(!i)return ca;let a,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),a=new RegExp(e)):(e=i.toString(),a=i),t=>{if(Co(t.value))return null;let n=t.value;return a.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function ca(i){return null}function Ys(i){return i!=null}function Xs(i){return Er(i)?ur(i):i}function Zs(i){let a={};return i.forEach(e=>{a=e!=null?H(H({},a),e):a}),Object.keys(a).length===0?null:a}function Ks(i,a){return a.map(e=>e(i))}function xd(i){return!i.validate}function Js(i){return i.map(a=>xd(a)?a:e=>a.validate(e))}function el(i){if(!i)return null;let a=i.filter(Ys);return a.length==0?null:function(e){return Zs(Ks(e,a))}}function So(i){return i!=null?el(Js(i)):null}function tl(i){if(!i)return null;let a=i.filter(Ys);return a.length==0?null:function(e){let t=Ks(e,a).map(Xs);return fr(t).pipe(ze(Zs))}}function Mo(i){return i!=null?tl(Js(i)):null}function Ls(i,a){return i===null?[a]:Array.isArray(i)?[...i,a]:[i,a]}function il(i){return i._rawValidators}function nl(i){return i._rawAsyncValidators}function xo(i){return i?Array.isArray(i)?i:[i]:[]}function da(i,a){return Array.isArray(i)?i.includes(a):i===a}function Vs(i,a){let e=xo(a);return xo(i).forEach(n=>{da(e,n)||e.push(n)}),e}function Bs(i,a){return xo(a).filter(e=>!da(i,e))}var ma=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(a){this._rawValidators=a||[],this._composedValidatorFn=So(this._rawValidators)}_setAsyncValidators(a){this._rawAsyncValidators=a||[],this._composedAsyncValidatorFn=Mo(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(a){this._onDestroyCallbacks.push(a)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(a=>a()),this._onDestroyCallbacks=[]}reset(a=void 0){this.control?.reset(a)}hasError(a,e){return this.control?this.control.hasError(a,e):!1}getError(a,e){return this.control?this.control.getError(a,e):null}},qt=class extends ma{name;get formDirective(){return null}get path(){return null}},vt=class extends ma{_parent=null;name=null;valueAccessor=null},ha=class{_cd;constructor(a){this._cd=a}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ot=(()=>{class i extends ha{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(ge(vt,2))};static \u0275dir=_({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,n){t&2&&I("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[U]})}return i})(),oi=(()=>{class i extends ha{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(ge(qt,10))};static \u0275dir=_({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,n){t&2&&I("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[U]})}return i})();var ln="VALID",la="INVALID",Ri="PENDING",cn="DISABLED",ni=class{},pa=class extends ni{value;source;constructor(a,e){super(),this.value=a,this.source=e}},mn=class extends ni{pristine;source;constructor(a,e){super(),this.pristine=a,this.source=e}},hn=class extends ni{touched;source;constructor(a,e){super(),this.touched=a,this.source=e}},Fi=class extends ni{status;source;constructor(a,e){super(),this.status=a,this.source=e}},ua=class extends ni{source;constructor(a){super(),this.source=a}},un=class extends ni{source;constructor(a){super(),this.source=a}};function Eo(i){return(va(i)?i.validators:i)||null}function wd(i){return Array.isArray(i)?So(i):i||null}function Io(i,a){return(va(a)?a.asyncValidators:i)||null}function kd(i){return Array.isArray(i)?Mo(i):i||null}function va(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function al(i,a,e){let t=i.controls;if(!(a?Object.keys(t):t).length)throw new ht(1e3,"");if(!t[e])throw new ht(1001,"")}function ol(i,a,e){i._forEachChild((t,n)=>{if(e[n]===void 0)throw new ht(1002,"")})}var Pi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(a,e){this._assignValidators(a),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(a){this._rawValidators=this._composedValidatorFn=a}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(a){this._rawAsyncValidators=this._composedAsyncValidatorFn=a}get parent(){return this._parent}get status(){return St(this.statusReactive)}set status(a){St(()=>this.statusReactive.set(a))}_status=ae(()=>this.statusReactive());statusReactive=S(void 0);get valid(){return this.status===ln}get invalid(){return this.status===la}get pending(){return this.status===Ri}get disabled(){return this.status===cn}get enabled(){return this.status!==cn}errors;get pristine(){return St(this.pristineReactive)}set pristine(a){St(()=>this.pristineReactive.set(a))}_pristine=ae(()=>this.pristineReactive());pristineReactive=S(!0);get dirty(){return!this.pristine}get touched(){return St(this.touchedReactive)}set touched(a){St(()=>this.touchedReactive.set(a))}_touched=ae(()=>this.touchedReactive());touchedReactive=S(!1);get untouched(){return!this.touched}_events=new w;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(a){this._assignValidators(a)}setAsyncValidators(a){this._assignAsyncValidators(a)}addValidators(a){this.setValidators(Vs(a,this._rawValidators))}addAsyncValidators(a){this.setAsyncValidators(Vs(a,this._rawAsyncValidators))}removeValidators(a){this.setValidators(Bs(a,this._rawValidators))}removeAsyncValidators(a){this.setAsyncValidators(Bs(a,this._rawAsyncValidators))}hasValidator(a){return da(this._rawValidators,a)}hasAsyncValidator(a){return da(this._rawAsyncValidators,a)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(a={}){let e=this.touched===!1;this.touched=!0;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsTouched(Se(H({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new hn(!0,t))}markAllAsDirty(a={}){this.markAsDirty({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(a))}markAllAsTouched(a={}){this.markAsTouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(a))}markAsUntouched(a={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=a.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:t})}),a.onlySelf||this._parent?._updateTouched(a,t),e&&a.emitEvent!==!1&&this._events.next(new hn(!1,t))}markAsDirty(a={}){let e=this.pristine===!0;this.pristine=!1;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsDirty(Se(H({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new mn(!1,t))}markAsPristine(a={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=a.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:a.emitEvent})}),a.onlySelf||this._parent?._updatePristine(a,t),e&&a.emitEvent!==!1&&this._events.next(new mn(!0,t))}markAsPending(a={}){this.status=Ri;let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new Fi(this.status,e)),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.markAsPending(Se(H({},a),{sourceControl:e}))}disable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=cn,this.errors=null,this._forEachChild(n=>{n.disable(Se(H({},a),{onlySelf:!0}))}),this._updateValue();let t=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new pa(this.value,t)),this._events.next(new Fi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Se(H({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=ln,this._forEachChild(t=>{t.enable(Se(H({},a),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent}),this._updateAncestors(Se(H({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(a,e){a.onlySelf||(this._parent?.updateValueAndValidity(a),a.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(a){this._parent=a}getRawValue(){return this.value}updateValueAndValidity(a={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ln||this.status===Ri)&&this._runAsyncValidator(t,a.emitEvent)}let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new pa(this.value,e)),this._events.next(new Fi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.updateValueAndValidity(Se(H({},a),{sourceControl:e}))}_updateTreeValidity(a={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(a)),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?cn:ln}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(a,e){if(this.asyncValidator){this.status=Ri,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:a!==!1};let t=Xs(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:a})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let a=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,a}return!1}setErrors(a,e={}){this.errors=a,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(a){let e=a;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,n)=>t&&t._find(n),this)}getError(a,e){let t=e?this.get(e):this;return t?.errors?t.errors[a]:null}hasError(a,e){return!!this.getError(a,e)}get root(){let a=this;for(;a._parent;)a=a._parent;return a}_updateControlsErrors(a,e,t){this.status=this._calculateStatus(),a&&this.statusChanges.emit(this.status),(a||t)&&this._events.next(new Fi(this.status,e)),this._parent&&this._parent._updateControlsErrors(a,e,t)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?cn:this.errors?la:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ri)?Ri:this._anyControlsHaveStatus(la)?la:ln}_anyControlsHaveStatus(a){return this._anyControls(e=>e.status===a)}_anyControlsDirty(){return this._anyControls(a=>a.dirty)}_anyControlsTouched(){return this._anyControls(a=>a.touched)}_updatePristine(a,e){let t=!this._anyControlsDirty(),n=this.pristine!==t;this.pristine=t,a.onlySelf||this._parent?._updatePristine(a,e),n&&this._events.next(new mn(this.pristine,e))}_updateTouched(a={},e){this.touched=this._anyControlsTouched(),this._events.next(new hn(this.touched,e)),a.onlySelf||this._parent?._updateTouched(a,e)}_onDisabledChange=[];_registerOnCollectionChange(a){this._onCollectionChange=a}_setUpdateStrategy(a){va(a)&&a.updateOn!=null&&(this._updateOn=a.updateOn)}_parentMarkedDirty(a){return!a&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(a){return null}_assignValidators(a){this._rawValidators=Array.isArray(a)?a.slice():a,this._composedValidatorFn=wd(this._rawValidators)}_assignAsyncValidators(a){this._rawAsyncValidators=Array.isArray(a)?a.slice():a,this._composedAsyncValidatorFn=kd(this._rawAsyncValidators)}},Li=class extends Pi{constructor(a,e,t){super(Eo(e),Io(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(a,e){return this.controls[a]?this.controls[a]:(this.controls[a]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(a,e,t={}){this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(a,e={}){this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),delete this.controls[a],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(a,e,t={}){this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),delete this.controls[a],e&&this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(a){return this.controls.hasOwnProperty(a)&&this.controls[a].enabled}setValue(a,e={}){ol(this,!0,a),Object.keys(a).forEach(t=>{al(this,!0,t),this.controls[t].setValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(a,e={}){a!=null&&(Object.keys(a).forEach(t=>{let n=this.controls[t];n&&n.patchValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a={},e={}){this._forEachChild((t,n)=>{t.reset(a?a[n]:null,Se(H({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new un(this))}getRawValue(){return this._reduceChildren({},(a,e,t)=>(a[t]=e.getRawValue(),a))}_syncPendingControls(){let a=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&a(t,e)})}_setUpControls(){this._forEachChild(a=>{a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(a){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&a(t))return!0;return!1}_reduceValue(){let a={};return this._reduceChildren(a,(e,t,n)=>((t.enabled||this.disabled)&&(e[n]=t.value),e))}_reduceChildren(a,e){let t=a;return this._forEachChild((n,o)=>{t=e(t,n,o)}),t}_allControlsDisabled(){for(let a of Object.keys(this.controls))if(this.controls[a].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(a){return this.controls.hasOwnProperty(a)?this.controls[a]:null}};var wo=class extends Li{};var fn=new D("",{factory:()=>ya}),ya="always";function rl(i,a){return[...a.path,i]}function fa(i,a,e=ya){To(i,a),a.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&a.valueAccessor.setDisabledState?.(i.disabled),Dd(i,a),Md(i,a),Sd(i,a),Cd(i,a)}function Ns(i,a,e=!0){let t=()=>{};a?.valueAccessor?.registerOnChange(t),a?.valueAccessor?.registerOnTouched(t),_a(i,a),i&&(a._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function ga(i,a){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(a)})}function Cd(i,a){if(a.valueAccessor.setDisabledState){let e=t=>{a.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),a._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function To(i,a){let e=il(i);a.validator!==null?i.setValidators(Ls(e,a.validator)):typeof e=="function"&&i.setValidators([e]);let t=nl(i);a.asyncValidator!==null?i.setAsyncValidators(Ls(t,a.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();ga(a._rawValidators,n),ga(a._rawAsyncValidators,n)}function _a(i,a){let e=!1;if(i!==null){if(a.validator!==null){let n=il(i);if(Array.isArray(n)&&n.length>0){let o=n.filter(s=>s!==a.validator);o.length!==n.length&&(e=!0,i.setValidators(o))}}if(a.asyncValidator!==null){let n=nl(i);if(Array.isArray(n)&&n.length>0){let o=n.filter(s=>s!==a.asyncValidator);o.length!==n.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return ga(a._rawValidators,t),ga(a._rawAsyncValidators,t),e}function Dd(i,a){a.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&sl(i,a)})}function Sd(i,a){a.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&sl(i,a),i.updateOn!=="submit"&&i.markAsTouched()})}function sl(i,a){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),a.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Md(i,a){let e=(t,n)=>{a.valueAccessor.writeValue(t),n&&a.viewToModelUpdate(t)};i.registerOnChange(e),a._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function ll(i,a){i==null,To(i,a)}function Ed(i,a){return _a(i,a)}function cl(i,a){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(a,e.currentValue)}function Id(i){return Object.getPrototypeOf(i.constructor)===Us}function dl(i,a){i._syncPendingControls(),a.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function ml(i,a){if(!a)return null;Array.isArray(a);let e,t,n;return a.forEach(o=>{o.constructor===ct?e=o:Id(o)?t=o:n=o}),n||t||e||null}function Td(i,a){let e=i.indexOf(a);e>-1&&i.splice(e,1)}var Ad={provide:qt,useExisting:He(()=>bi)},dn=Promise.resolve(),bi=(()=>{class i extends qt{callSetDisabledState;get submitted(){return St(this.submittedReactive)}_submitted=ae(()=>this.submittedReactive());submittedReactive=S(!1);_directives=new Set;form;ngSubmit=new A;options;constructor(e,t,n){super(),this.callSetDisabledState=n,this.form=new Li({},So(e),Mo(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){dn.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),fa(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){dn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){dn.then(()=>{let t=this._findContainer(e.path),n=new Li({});ll(n,e),t.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){dn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){dn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),dl(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ua(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(ge(yt,10),ge(ba,10),ge(fn,8))};static \u0275dir=_({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,n){t&1&&u("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[q([Ad]),U]})}return i})();function zs(i,a){let e=i.indexOf(a);e>-1&&i.splice(e,1)}function Hs(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var pn=class extends Pi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(a=null,e,t){super(Eo(e),Io(t,e)),this._applyFormState(a),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),va(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Hs(a)?this.defaultValue=a.value:this.defaultValue=a)}setValue(a,e={}){this.value=this._pendingValue=a,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(a,e={}){this.setValue(a,e)}reset(a=this.defaultValue,e={}){this._applyFormState(a),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new un(this))}_updateValue(){}_anyControls(a){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(a){this._onChange.push(a)}_unregisterOnChange(a){zs(this._onChange,a)}registerOnDisabledChange(a){this._onDisabledChange.push(a)}_unregisterOnDisabledChange(a){zs(this._onDisabledChange,a)}_forEachChild(a){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(a){Hs(a)?(this.value=this._pendingValue=a.value,a.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=a}};var Od=i=>i instanceof pn;var Rd={provide:vt,useExisting:He(()=>gn)},js=Promise.resolve(),gn=(()=>{class i extends vt{_changeDetectorRef;callSetDisabledState;control=new pn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new A;constructor(e,t,n,o,s,h){super(),this._changeDetectorRef=s,this.callSetDisabledState=h,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=ml(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),cl(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){fa(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){js.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,n=t!==0&&O(t);js.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?rl(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(ge(qt,9),ge(yt,10),ge(ba,10),ge(ai,10),ge(oe,8),ge(fn,8))};static \u0275dir=_({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[q([Rd]),U,fe]})}return i})();var ri=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})(),Fd={provide:ai,useExisting:He(()=>Ao),multi:!0},Ao=(()=>{class i extends Us{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,n){t&1&&u("input",function(s){return n.onChange(s.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[q([Fd]),U]})}return i})();var ko=class extends Pi{constructor(a,e,t){super(Eo(e),Io(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(a){return this.controls[this._adjustIndex(a)]}push(a,e={}){Array.isArray(a)?a.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(a),this._registerControl(a)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(a,e,t={}){this.controls.splice(a,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(a,e={}){let t=this._adjustIndex(a);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(a,e,t={}){let n=this._adjustIndex(a);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),e&&(this.controls.splice(n,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(a,e={}){ol(this,!1,a),a.forEach((t,n)=>{al(this,!1,n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(a,e={}){a!=null&&(a.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a=[],e={}){this._forEachChild((t,n)=>{t.reset(a[n],Se(H({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new un(this))}getRawValue(){return this.controls.map(a=>a.getRawValue())}clear(a={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:a.emitEvent}))}_adjustIndex(a){return a<0?a+this.length:a}_syncPendingControls(){let a=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){this.controls.forEach((e,t)=>{a(e,t)})}_updateValue(){this.value=this.controls.filter(a=>a.enabled||this.disabled).map(a=>a.value)}_anyControls(a){return this.controls.some(e=>e.enabled&&a(e))}_setUpControls(){this._forEachChild(a=>this._registerControl(a))}_allControlsDisabled(){for(let a of this.controls)if(a.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(a){a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)}_find(a){return this.at(a)??null}};var Pd=(()=>{class i extends qt{callSetDisabledState;get submitted(){return St(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ae(()=>this._submittedReactive());_submittedReactive=S(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,n){super(),this.callSetDisabledState=n,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(_a(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return fa(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Ns(e.control||null,e,!1),Td(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,dl(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ua(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,n=this.form.get(e.path);t!==n&&(Ns(t||null,e),Od(n)&&(fa(n,e,this.callSetDisabledState),e.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);ll(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Ed(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){To(this.form,this),this._oldForm&&_a(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(ge(yt,10),ge(ba,10),ge(fn,8))};static \u0275dir=_({type:i,features:[U,fe]})}return i})();var hl=new D("");var Ld={provide:vt,useExisting:He(()=>vi)},vi=(()=>{class i extends vt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new A;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,n,o,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=ml(this,o)}ngOnChanges(e){this._added||this._setUpControl(),cl(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return rl(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||i)(ge(qt,13),ge(yt,10),ge(ba,10),ge(ai,10),ge(hl,8))};static \u0275dir=_({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[q([Ld]),U,fe]})}return i})();var Vd={provide:qt,useExisting:He(()=>xt)},xt=(()=>{class i extends Pd{form=null;ngSubmit=new A;get control(){return this.form}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,n){t&1&&u("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[q([Vd]),U]})}return i})();function Bd(i){return typeof i=="number"?i:parseInt(i,10)}function Nd(i){return typeof i=="number"?i:parseFloat(i)}var Oo=(()=>{class i{_validator=ca;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):ca,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,features:[fe]})}return i})();var zd={provide:yt,useExisting:He(()=>Ro),multi:!0},Ro=(()=>{class i extends Oo{min;inputName="min";normalizeInput=e=>Nd(e);createValidator=e=>qs(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("min",n._enabled?n.min:null)},inputs:{min:"min"},standalone:!1,features:[q([zd]),U]})}return i})(),Hd={provide:yt,useExisting:He(()=>Qt),multi:!0};var Qt=(()=>{class i extends Oo{required;inputName="required";normalizeInput=O;createValidator=e=>Qs;enabled(e){return e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,n){t&2&&N("required",n._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[q([Hd]),U]})}return i})();var jd={provide:yt,useExisting:He(()=>Fo),multi:!0},Fo=(()=>{class i extends Oo{maxlength;inputName="maxlength";normalizeInput=e=>Bd(e);createValidator=e=>$s(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("maxlength",n._enabled?n.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[q([jd]),U]})}return i})();var pl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({})}return i})();function Ws(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Vi=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let n=this._reduceControls(e),o={};return Ws(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new Li(n,o)}record(e,t=null){let n=this._reduceControls(e);return new wo(n,t)}control(e,t,n){let o={};return this.useNonNullable?(Ws(t)?o=t:(o.validators=t,o.asyncValidators=n),new pn(e,Se(H({},o),{nonNullable:!0}))):new pn(e,t,n)}array(e,t,n){let o=e.map(s=>this._createControl(s));return new ko(o,t,n)}_reduceControls(e){let t={};return Object.keys(e).forEach(n=>{t[n]=this._createControl(e[n])}),t}_createControl(e){if(e instanceof pn)return e;if(e instanceof Pi)return e;if(Array.isArray(e)){let t=e[0],n=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,n,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _n=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:fn,useValue:e.callSetDisabledState??ya}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[pl]})}return i})(),Bi=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:hl,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:fn,useValue:e.callSetDisabledState??ya}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[pl]})}return i})();var Wd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),Gd={passive:!0},ul=(()=>{class i{_platform=c(me);_ngZone=c(G);_renderer=c(Lt).createRenderer(null,null);_styleLoader=c(We);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return wi;this._styleLoader.load(Wd);let t=tn(e),n=this._monitoredElements.get(t);if(n)return n.subject;let o=new w,s="cdk-text-field-autofilled",h=x=>{x.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(s)?(t.classList.add(s),this._ngZone.run(()=>o.next({target:x.target,isAutofilled:!0}))):x.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(s)&&(t.classList.remove(s),this._ngZone.run(()=>o.next({target:x.target,isAutofilled:!1})))},p=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",h,Gd)));return this._monitoredElements.set(t,{subject:o,unlisten:p}),o}stopMonitoring(e){let t=tn(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var fl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({})}return i})();var gl=new D("MAT_INPUT_VALUE_ACCESSOR");var Po=class{_box;_destroyed=new w;_resizeSubject=new w;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new Dt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe(re(e=>e.some(t=>t.target===a)),Ja({bufferSize:1,refCount:!0}),ie(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},xa=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(G);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new Po(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ud=["notch"],qd=["matFormFieldNotchedOutline",""],Qd=["*"],_l=["iconPrefixContainer"],bl=["textPrefixContainer"],vl=["iconSuffixContainer"],yl=["textSuffixContainer"],$d=["textField"],Yd=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Xd=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Zd(i,a){i&1&&E(0,"span",21)}function Kd(i,a){if(i&1&&(r(0,"label",20),T(1,1),k(2,Zd,1,0,"span",21),l()),i&2){let e=f(2);y("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),N("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),C(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Jd(i,a){if(i&1&&k(0,Kd,3,5,"label",20),i&2){let e=f();C(e._hasFloatingLabel()?0:-1)}}function em(i,a){i&1&&E(0,"div",7)}function tm(i,a){}function im(i,a){if(i&1&&Le(0,tm,0,0,"ng-template",13),i&2){f(2);let e=Ie(1);y("ngTemplateOutlet",e)}}function nm(i,a){if(i&1&&(r(0,"div",9),k(1,im,1,1,null,13),l()),i&2){let e=f();y("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),C(e._forceDisplayInfixLabel()?-1:1)}}function am(i,a){i&1&&(r(0,"div",10,2),T(2,2),l())}function om(i,a){i&1&&(r(0,"div",11,3),T(2,3),l())}function rm(i,a){}function sm(i,a){if(i&1&&Le(0,rm,0,0,"ng-template",13),i&2){f();let e=Ie(1);y("ngTemplateOutlet",e)}}function lm(i,a){i&1&&(r(0,"div",14,4),T(2,4),l())}function cm(i,a){i&1&&(r(0,"div",15,5),T(2,5),l())}function dm(i,a){i&1&&E(0,"div",16)}function mm(i,a){i&1&&(r(0,"div",18),T(1,6),l())}function hm(i,a){if(i&1&&(r(0,"mat-hint",22),d(1),l()),i&2){let e=f(2);y("id",e._hintLabelId),m(),F(e.hintLabel)}}function pm(i,a){if(i&1&&(r(0,"div",19),k(1,hm,2,2,"mat-hint",22),T(2,7),E(3,"div",23),T(4,8),l()),i&2){let e=f();m(),C(e.hintLabel?1:-1)}}var Ni=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-label"]]})}return i})(),um=new D("MatError");var ka=(()=>{class i{align="start";id=c(he).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(Ue("id",n.id),N("align",null),I("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Ml=new D("MatPrefix"),Ca=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[q([{provide:Ml,useExisting:i}])]})}return i})(),El=new D("MatSuffix"),Da=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[q([{provide:El,useExisting:i}])]})}return i})(),Il=new D("FloatingLabelParent"),xl=(()=>{class i{_elementRef=c(R);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(xa);_ngZone=c(G);_parent=c(Il);_resizeSubscription=new ye;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return fm(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&I("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function fm(i){let a=i;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var wl="mdc-line-ripple--active",wa="mdc-line-ripple--deactivating",kl=(()=>{class i{_elementRef=c(R);_cleanupTransitionEnd;constructor(){let e=c(G),t=c(ue);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(wa),e.add(wl)}deactivate(){this._elementRef.nativeElement.classList.add(wa)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(wa);e.propertyName==="opacity"&&n&&t.remove(wl,wa)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Cl=(()=>{class i{_elementRef=c(R);_ngZone=c(G);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&le(Ud,5),t&2){let o;b(o=v())&&(n._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&I("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:qd,ngContentSelectors:Qd,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(ee(),Zt(0,"div",1),$e(1,"div",2,0),T(3),tt(),Zt(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),vn=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i})}return i})();var yn=new D("MatFormField"),gm=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Dl="fill",_m="auto",Sl="fixed",bm="translateY(-50%)",Xe=(()=>{class i{_elementRef=c(R);_changeDetectorRef=c(oe);_platform=c(me);_idGenerator=c(he);_ngZone=c(G);_defaults=c(gm,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ji("iconPrefixContainer");_textPrefixContainerSignal=Ji("textPrefixContainer");_iconSuffixContainerSignal=Ji("iconSuffixContainer");_textSuffixContainerSignal=Ji("textSuffixContainer");_prefixSuffixContainers=ae(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Br(Ni);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ke(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||_m}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Dl;this._appearanceSignal.set(t)}_appearanceSignal=S(Dl);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Sl}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Sl}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new w;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=pe();constructor(){let e=this._defaults,t=c(Te);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Zi(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ae(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Me([void 0,void 0]),ze(()=>[t.errorState,t.userAriaDescribedBy]),Ka(),re(([[o,s],[h,p]])=>o!==h||s!==p)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ie(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Fe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){zr({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ae(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(h=>h.align==="start"):null,s=this._hintChildren?this._hintChildren.find(h=>h.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,n;if(t){let o=this._describedByIds||e;n=e.concat(t.filter(s=>s&&!o.includes(s)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,h=t?.getBoundingClientRect().width??0,p=n?.getBoundingClientRect().width??0,x=o?.getBoundingClientRect().width??0,M=this._currentDirection==="rtl"?"-1":"1",P=`${s+h}px`,J=`calc(${M} * (${P} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,te=`var(--mat-mdc-form-field-label-transform, ${bm} translateX(${J}))`,Ne=s+h+p+x;return[te,Ne]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,o){if(t&1&&(Or(o,n._labelChild,Ni,5),Ee(o,vn,5)(o,Ml,5)(o,El,5)(o,um,5)(o,ka,5)),t&2){no();let s;b(s=v())&&(n._formFieldControl=s.first),b(s=v())&&(n._prefixChildren=s),b(s=v())&&(n._suffixChildren=s),b(s=v())&&(n._errorChildren=s),b(s=v())&&(n._hintChildren=s)}},viewQuery:function(t,n){if(t&1&&(Rr(n._iconPrefixContainerSignal,_l,5)(n._textPrefixContainerSignal,bl,5)(n._iconSuffixContainerSignal,vl,5)(n._textSuffixContainerSignal,yl,5),le($d,5)(_l,5)(bl,5)(vl,5)(yl,5)(xl,5)(Cl,5)(kl,5)),t&2){no(4);let o;b(o=v())&&(n._textField=o.first),b(o=v())&&(n._iconPrefixContainer=o.first),b(o=v())&&(n._textPrefixContainer=o.first),b(o=v())&&(n._iconSuffixContainer=o.first),b(o=v())&&(n._textSuffixContainer=o.first),b(o=v())&&(n._floatingLabel=o.first),b(o=v())&&(n._notchedOutline=o.first),b(o=v())&&(n._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&I("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[q([{provide:yn,useExisting:i},{provide:Il,useExisting:i}])],ngContentSelectors:Xd,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(ee(Yd),Le(0,Jd,1,1,"ng-template",null,0,ao),r(2,"div",6,1),u("click",function(s){return n._control.onContainerClick(s)}),k(4,em,1,0,"div",7),r(5,"div",8),k(6,nm,2,2,"div",9),k(7,am,3,0,"div",10),k(8,om,3,0,"div",11),r(9,"div",12),k(10,sm,1,1,null,13),T(11),l(),k(12,lm,3,0,"div",14),k(13,cm,3,0,"div",15),l(),k(14,dm,1,0,"div",16),l(),r(15,"div",17),k(16,mm,2,0,"div",18)(17,pm,5,1,"div",19),l()),t&2){let o;m(2),I("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),m(2),C(!n._hasOutline()&&!n._control.disabled?4:-1),m(2),C(n._hasOutline()?6:-1),m(),C(n._hasIconPrefix?7:-1),m(),C(n._hasTextPrefix?8:-1),m(2),C(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),m(2),C(n._hasTextSuffix?12:-1),m(),C(n._hasIconSuffix?13:-1),m(),C(n._hasOutline()?-1:14),m(),I("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let s=n._getSubscriptMessageType();m(),C((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[xl,Cl,Wr,kl,ka],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var zi=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Hi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(a,e,t,n,o){this._defaultMatcher=a,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=o}updateErrorState(){let a=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(n,e)??!1;o!==a&&(this.errorState=o,this._stateChanges.next())}};var Be=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[Hn,Xe,K]})}return i})();var ym=["button","checkbox","file","hidden","image","radio","range","reset","submit"],xm=new D("MAT_INPUT_CONFIG"),Rt=(()=>{class i{_elementRef=c(R);_platform=c(me);ngControl=c(vt,{optional:!0,self:!0});_autofillMonitor=c(ul);_ngZone=c(G);_formField=c(yn,{optional:!0});_renderer=c(ue);_uid=c(he).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(xm,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new w;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ke(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ve.required)??!1}set required(e){this._required=ke(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&co().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ke(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>co().has(e));constructor(){let e=c(bi,{optional:!0}),t=c(xt,{optional:!0}),n=c(zi),o=c(gl,{optional:!0,self:!0}),s=this._elementRef.nativeElement,h=s.nodeName.toLowerCase();o?Fn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Hi(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=h==="select",this._isTextarea=h==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Zi(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ym.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&u("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(Ue("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),N("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),I("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",O]},exportAs:["matInput"],features:[q([{provide:vn,useExisting:i}]),fe]})}return i})(),wt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[Be,Be,fl,K]})}return i})();var xn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new w;constructor(a=!1,e,t=!0,n){this._multiple=a,this._emitChanges=t,this.compareWith=n,e&&e.length&&(a?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var wn=(()=>{class i{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Tl=(()=>{class i{_animationsDisabled=pe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&I("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})();var wm=["text"],km=[[["mat-icon"]],"*"],Cm=["mat-icon","*"];function Dm(i,a){if(i&1&&E(0,"mat-pseudo-checkbox",1),i&2){let e=f();y("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Sm(i,a){if(i&1&&E(0,"mat-pseudo-checkbox",3),i&2){let e=f();y("disabled",e.disabled)}}function Mm(i,a){if(i&1&&(r(0,"span",4),d(1),l()),i&2){let e=f();m(),Q("(",e.group.label,")")}}var Vo=new D("MAT_OPTION_PARENT_COMPONENT"),Bo=new D("MatOptgroup");var Lo=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},dt=(()=>{class i{_element=c(R);_changeDetectorRef=c(oe);_parent=c(Vo,{optional:!0});group=c(Bo,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(he).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=S(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new A;_text;_stateChanges=new w;constructor(){let e=c(We);e.load(rt),e.load(Xr),this._signalDisableRipple=!!this._parent&&Fn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ae(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Lo(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&le(wm,7),t&2){let o;b(o=v())&&(n._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&u("click",function(){return n._selectViaInteraction()})("keydown",function(s){return n._handleKeydown(s)}),t&2&&(Ue("id",n.id),N("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),I("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",O]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Cm,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(ee(km),k(0,Dm,1,2,"mat-pseudo-checkbox",1),T(1),r(2,"span",2,0),T(4,1),l(),k(5,Sm,1,1,"mat-pseudo-checkbox",3),k(6,Mm,2,1,"span",4),E(7,"div",5)),t&2&&(C(n.multiple?0:-1),m(5),C(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),m(),C(n.group&&n.group._inert?6:-1),m(),y("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[Tl,Nt],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return i})();function Al(i,a,e){if(e.length){let t=a.toArray(),n=e.toArray(),o=0;for(let s=0;s<i+1;s++)t[s].group&&t[s].group===n[o]&&o++;return o}return 0}function Ol(i,a,e,t){return i<e?i:i+a>e+t?Math.max(0,i-t+a):e}var Sa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[K]})}return i})();var No=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[Ii,Sa,dt,K]})}return i})();var Am=["trigger"],Om=["panel"],Rm=[[["mat-select-trigger"]],"*"],Fm=["mat-select-trigger","*"];function Pm(i,a){if(i&1&&(r(0,"span",4),d(1),l()),i&2){let e=f();m(),F(e.placeholder)}}function Lm(i,a){i&1&&T(0)}function Vm(i,a){if(i&1&&(r(0,"span",11),d(1),l()),i&2){let e=f(2);m(),F(e.triggerValue)}}function Bm(i,a){if(i&1&&(r(0,"span",5),k(1,Lm,1,0)(2,Vm,2,1,"span",11),l()),i&2){let e=f();m(),C(e.customTrigger?1:2)}}function Nm(i,a){if(i&1){let e=X();r(0,"div",12,1),u("keydown",function(n){j(e);let o=f();return W(o._handleKeydown(n))}),T(2,1),l()}if(i&2){let e=f();Ye(e.panelClass),I("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),N("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var zm=new D("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Y);return()=>gi(i)}}),Hm=new D("MAT_SELECT_CONFIG"),Pl=new D("MatSelectTrigger"),zo=class{source;value;constructor(a,e){this.source=a,this.value=e}},li=(()=>{class i{_viewportRuler=c(lt);_changeDetectorRef=c(oe);_elementRef=c(R);_dir=c(Te,{optional:!0});_idGenerator=c(he);_renderer=c(ue);_parentFormField=c(yn,{optional:!0});ngControl=c(vt,{self:!0,optional:!0});_liveAnnouncer=c(Gn);_defaultOptions=c(Hm,{optional:!0});_animationsDisabled=pe();_popoverLocation;_initialized=new w;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,o=Al(e,this.options,this.optionGroups),s=t._getHostElement();e===0&&o===1?n.scrollTop=0:n.scrollTop=Ol(s.offsetTop,s.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new zo(this,e)}_scrollStrategyFactory=c(zm);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new w;_errorStateTracker;stateChanges=new w;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=S(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ve.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ci(()=>{let e=this.options;return e?e.changes.pipe(Me(e),mt(()=>Fe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(mt(()=>this.optionSelectionChanges))});openedChange=new A;_openedStream=this.openedChange.pipe(re(e=>e),ze(()=>{}));_closedStream=this.openedChange.pipe(re(e=>!e),ze(()=>{}));selectionChange=new A;valueChange=new A;constructor(){let e=c(zi),t=c(bi,{optional:!0}),n=c(xt,{optional:!0}),o=c(new Bt("tabindex"),{optional:!0}),s=c(rn,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Hi(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new xn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ie(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ie(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Me(null),ie(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Pe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&so(this._trackedModal,"aria-owns",t),ns(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;so(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,o=t===13||t===32,s=this._keyManager;if(!s.isTyping()&&o&&!Ae(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;s.onKeydown(e);let p=this.selected;p&&h!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,o=n===40||n===38,s=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(n===13||n===32)&&t.activeItem&&!Ae(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!s&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(h?p.select():p.deselect())})}else{let h=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==h&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ae(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ai?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new is(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Fe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ie(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Fe(...this.options.map(t=>t._stateChanges)).pipe(ie(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Si(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,Pl,5)(o,dt,5)(o,Bo,5),t&2){let s;b(s=v())&&(n.customTrigger=s.first),b(s=v())&&(n.options=s),b(s=v())&&(n.optionGroups=s)}},viewQuery:function(t,n){if(t&1&&le(Am,5)(Om,5)(aa,5),t&2){let o;b(o=v())&&(n.trigger=o.first),b(o=v())&&(n.panel=o.first),b(o=v())&&(n._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&u("keydown",function(s){return n._handleKeydown(s)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(N("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),I("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",O],disableRipple:[2,"disableRipple","disableRipple",O],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ze(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",O],placeholder:"placeholder",required:[2,"required","required",O],multiple:[2,"multiple","multiple",O],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",O],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ze],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",O]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[q([{provide:vn,useExisting:i},{provide:Vo,useExisting:i}]),fe],ngContentSelectors:Fm,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(ee(Rm),r(0,"div",2,0),u("click",function(){return n.open()}),r(3,"div",3),k(4,Pm,2,1,"span",4)(5,Bm,3,1,"span",5),l(),r(6,"div",6)(7,"div",7),at(),r(8,"svg",8),E(9,"path",9),l()()()(),Le(10,Nm,3,16,"ng-template",10),u("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(s){return n._handleOverlayKeydown(s)})),t&2){let o=Ie(1);m(3),N("id",n._valueId),m(),C(n.empty?4:5),m(6),y("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[Ai,aa],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return i})(),Ll=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-select-trigger"]],features:[q([{provide:Pl,useExisting:i}])]})}return i})(),ci=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[_t,No,K,At,Be,No]})}return i})();var jm=["mat-internal-form-field",""],Wm=["*"],Ea=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&I("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:jm,ngContentSelectors:Wm,decls:1,vars:0,template:function(t,n){t&1&&(ee(),T(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var Gm=["switch"],Um=["*"];function qm(i,a){i&1&&(r(0,"span",11),at(),r(1,"svg",13),E(2,"path",14),l(),r(3,"svg",15),E(4,"path",16),l()())}var Qm=new D("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ia=class{source;checked;constructor(a,e){this.source=a,this.checked=e}},Ho=(()=>{class i{_elementRef=c(R);_focusMonitor=c(pt);_changeDetectorRef=c(oe);defaults=c(Qm);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Ia(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=pe();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new A;toggleChange=new A;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){c(We).load(rt);let e=c(new Bt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=c(he).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ia(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(t,n){if(t&1&&le(Gm,5),t&2){let o;b(o=v())&&(n._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,n){t&2&&(Ue("id",n.id),N("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ye(n.color?"mat-"+n.color:""),I("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",O],color:"color",disabled:[2,"disabled","disabled",O],disableRipple:[2,"disableRipple","disableRipple",O],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ze(e)],checked:[2,"checked","checked",O],hideIcon:[2,"hideIcon","hideIcon",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[q([{provide:ai,useExisting:He(()=>i),multi:!0},{provide:yt,useExisting:i,multi:!0}]),fe],ngContentSelectors:Um,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,n){if(t&1&&(ee(),r(0,"div",1)(1,"button",2,0),u("click",function(){return n._handleClick()}),E(3,"div",3)(4,"span",4),r(5,"span",5)(6,"span",6)(7,"span",7),E(8,"span",8),l(),r(9,"span",9),E(10,"span",10),l(),k(11,qm,5,0,"span",11),l()()(),r(12,"label",12),u("click",function(s){return s.stopPropagation()}),T(13),l()()),t&2){let o=Ie(2);y("labelPosition",n.labelPosition),m(),I("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),y("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),N("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),m(9),y("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),m(),C(n.hideIcon?-1:11),m(),y("for",n.buttonId),N("id",n._labelId)}},dependencies:[Nt,Ea],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return i})(),Vl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[Ho,K]})}return i})();function Ym(i,a){if(i&1){let e=X();r(0,"div",1)(1,"button",2),u("click",function(){j(e);let n=f();return W(n.action())}),d(2),l()()}if(i&2){let e=f();m(2),Q(" ",e.data.action," ")}}var Xm=["label"];function Zm(i,a){}var Km=Math.pow(2,31)-1,kn=class{_overlayRef;instance;containerInstance;_afterDismissed=new w;_afterOpened=new w;_onAction=new w;_durationTimeoutId;_dismissedByAction=!1;constructor(a,e){this._overlayRef=e,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,Km))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Bl=new D("MatSnackBarData"),Wi=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Jm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),eh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),th=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),Nl=(()=>{class i{snackBarRef=c(kn);data=c(Bl);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(r(0,"div",0),d(1),l(),k(2,Ym,3,1,"div",1)),t&2&&(m(),Q(" ",n.data.message,`
`),m(),C(n.hasAction?2:-1))},dependencies:[Ge,Jm,eh,th],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),jo="_mat-snack-bar-enter",Wo="_mat-snack-bar-exit",ih=(()=>{class i extends ei{_ngZone=c(G);_elementRef=c(R);_changeDetectorRef=c(oe);_platform=c(me);_animationsDisabled=pe();snackBarConfig=c(Wi);_document=c(be);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(Y);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new w;_onExit=new w;_onEnter=new w;_animationState="void";_live;_label;_role;_liveElementId=c(he).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Wo?this._completeExit():e===jo&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ce(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(jo)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(jo)},200)))}exit(){return this._destroyed?ki(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ce(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Wo)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Wo),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,o="mdc-snackbar__label";n.classList.toggle(o,!n.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let o=t[n],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let n=t.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),n=e.querySelector("[aria-live]");if(t&&n){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,n){if(t&1&&le(nt,7)(Xm,7),t&2){let o;b(o=v())&&(n._portalOutlet=o.first),b(o=v())&&(n._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,n){t&1&&u("animationend",function(s){return n.onAnimationEnd(s.animationName)})("animationcancel",function(s){return n.onAnimationEnd(s.animationName)}),t&2&&I("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[U],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(r(0,"div",1)(1,"div",2,0)(3,"div",3),Le(4,Zm,0,0,"ng-template",4),l(),E(5,"div"),l()()),t&2&&(m(5),N("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[nt],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return i})(),nh=new D("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Wi}),$t=(()=>{class i{_live=c(Gn);_injector=c(Y);_breakpointObserver=c(ts);_parentSnackBar=c(i,{optional:!0,skipSelf:!0});_defaultConfig=c(nh);_animationsDisabled=pe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Nl;snackBarContainerComponent=ih;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",n){let o=H(H({},this._defaultConfig),n);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=Y.create({parent:n||this._injector,providers:[{provide:Wi,useValue:t}]}),s=new ft(this.snackBarContainerComponent,t.viewContainerRef,o),h=e.attach(s);return h.instance.snackBarConfig=t,h.instance}_attach(e,t){let n=H(H(H({},new Wi),this._defaultConfig),t),o=this._createOverlay(n),s=this._attachSnackBarContainer(o,n),h=new kn(s,o);if(e instanceof Qe){let p=new et(e,null,{$implicit:n.data,snackBarRef:h});h.instance=s.attachTemplatePortal(p)}else{let p=this._createInjector(n,h),x=new ft(e,void 0,p),M=s.attachComponentPortal(x);h.instance=M.instance}return this._breakpointObserver.observe(os.HandsetPortrait).pipe(ie(o.detachments())).subscribe(p=>{o.overlayElement.classList.toggle(this.handsetCssClass,p.matches)}),n.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(h,n),this._openedSnackBarRef=h,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Ht;t.direction=e.direction;let n=ti(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,h=!s&&e.horizontalPosition!=="center";return s?n.left("0"):h?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,Wt(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Y.create({parent:n||this._injector,providers:[{provide:kn,useValue:t},{provide:Bl,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({providers:[$t],imports:[_t,gt,_e,Nl,K]})}return i})();var Ui=class i{snackBar=c($t);habitService=c(Ke);habitLogService=c(It);constructor(){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",a=>{a.data&&a.data.action==="mark-done"&&this.markHabitAsDone(a.data.habitId)})}notifiedToday=new Set;async requestPermission(){return"Notification"in window?Notification.permission==="granted"?!0:await Notification.requestPermission()!=="granted"?(this.snackBar.open("Notification permission was denied. Reminders won't work.","OK",{duration:5e3}),!1):!0:(this.snackBar.open("This browser does not support notifications.","OK",{duration:3e3}),!1)}async sendNotification(a,e,t){if(Notification.permission==="granted")try{let n=await navigator.serviceWorker.ready,o={body:`Time for your habit: ${e}!`,icon:"/assets/icons/icon-128x128.png",badge:"/assets/icons/icon-72x72.png",data:{habitId:a},vibrate:[200,100,200],tag:`habit-${a}`,actions:[{action:"mark-done",title:"Mark as Done"},{action:"close",title:"Close"}]};await n.showNotification(`Trackify: ${e}`,o)}catch(n){console.error("Error showing notification",n),new Notification(`Trackify: ${e}`,{body:`Time to ${e}!`})}}async checkReminders(){let a=await this.habitService.loadHabits(),e=new Date,t=`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`,n=e.toISOString().split("T")[0],o=`${n}-`,s=a.filter(h=>h.reminderEnabled&&h.reminderTime===t&&!this.notifiedToday.has(`${n}-${h.id}`));for(let h of s)await this.habitLogService.isCompleted(h.id,n)||(this.sendNotification(h.id,h.name,h.icon),this.notifiedToday.add(`${n}-${h.id}`))}async markHabitAsDone(a){let e=new Date().toISOString().split("T")[0];await this.habitLogService.markHabitAsCompleted(a,e),this.snackBar.open("Habit marked as done!","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})};var zl=(i,a)=>a.value,ah=(i,a)=>a.id;function oh(i,a){if(i&1){let e=X();r(0,"div",30),u("click",function(){let n=j(e).$implicit,o=f();return W(o.selectColor(n))}),l()}if(i&2){let e=a.$implicit,t=f();Z("background-color",e)("box-shadow",t.habitForm.value.color===e?"0 0 0 2px #111":"none")}}function rh(i,a){if(i&1&&(r(0,"mat-option",16),d(1),l()),i&2){let e=a.$implicit;y("value",e.value),m(),F(e.label)}}function sh(i,a){if(i&1&&(r(0,"mat-option",16),d(1),l()),i&2){let e=a.$implicit;y("value",e.value),m(),F(e.label)}}function lh(i,a){if(i&1&&(r(0,"div",17)(1,"span",5),d(2,"Select Custom Days"),l(),r(3,"mat-form-field",6)(4,"mat-select",31),ce(5,sh,2,2,"mat-option",16,zl),l()()()),i&2){let e=f();m(5),de(e.daysOptions)}}function ch(i,a){if(i&1&&(r(0,"mat-option",16)(1,"div",32)(2,"mat-icon"),d(3),l(),r(4,"span"),d(5),l()()()),i&2){let e=a.$implicit;y("value",e),m(3),F(e),m(2),F(e)}}function dh(i,a){if(i&1&&(r(0,"mat-option",16),d(1),l()),i&2){let e=a.$implicit;y("value",e.id),m(),F(e.name)}}function mh(i,a){i&1&&(r(0,"div",28)(1,"span",5),d(2,"Reminder Time"),l(),r(3,"mat-form-field",6),E(4,"input",33),r(5,"mat-icon",34),d(6,"schedule"),l()()())}var Cn=class i{fb=c(Vi);habitService=c(Ke);categoryService=c(Jt);notificationService=c(Ui);dialogRef=c(Gt);data=c(_i,{optional:!0});frequencyOptions=[{label:"Daily",value:0},{label:"Weekly (Specific Days)",value:1}];daysOptions=[{label:"Monday",value:0},{label:"Tuesday",value:1},{label:"Wednesday",value:2},{label:"Thursday",value:3},{label:"Friday",value:4},{label:"Saturday",value:5},{label:"Sunday",value:6}];categoryOptions=S([]);iconOptions=["star","fitness_center","water_drop","menu_book","check_circle","bolt","local_fire_department","monitor_heart","self_improvement","psychology","directions_run","pool","bedtime","restaurant"];presetColors=["#3b82f6","#4ade80","#c084fc","#fba94c","#f472b6","#5eead4","#f87171","#fcd34d"];habitForm=this.fb.group({name:["",Ve.required],description:[""],icon:["star"],color:["#3b82f6"],frequency:[0,Ve.required],days:[[]],category:[1,Ve.required],reminderEnabled:[!1],reminderTime:["08:00"],duration:[0]});selectColor(a){this.habitForm.patchValue({color:a})}async ngOnInit(){if(this.categoryOptions.set(await this.categoryService.getCategories()),this.data?.habit){let a=this.data.habit;this.habitForm.patchValue({name:a.name,description:a.description,icon:a.icon,color:a.color,frequency:a.frequency,days:a.days||[],category:a.category?.id,reminderEnabled:a.reminderEnabled||!1,reminderTime:a.reminderTime||"08:00",duration:a.duration||0})}else{let a=this.categoryOptions();a.length>0&&this.habitForm.patchValue({category:a[0].id})}}async onReminderToggle(a){a&&(await this.notificationService.requestPermission()||this.habitForm.patchValue({reminderEnabled:!1}))}async onSubmit(){if(this.habitForm.invalid){this.habitForm.markAllAsTouched();return}let a=this.habitForm.value,e=Number(a.category),t=this.categoryOptions().find(h=>h.id===e),n=t?{id:t.id,name:t.name}:{id:0,name:"General"},o=Number(a.frequency),s={name:a.name,description:a.description||"",icon:a.icon||"star",color:a.color||"#3b82f6",frequency:o,days:o===1?a.days:[],category:n,reminderEnabled:!!a.reminderEnabled,reminderTime:a.reminderTime||"08:00",duration:Number(a.duration)||0};this.data?.habit?.id?await this.habitService.updateHabit(this.data.habit.id,s):await this.habitService.addHabit(s),this.dialogRef.close(!0)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-create-habit"]],decls:68,vars:6,consts:[[1,"df","fd-r","ai-c","jc-s","pt-24","px-24","pb-8"],[1,"m-0","fw-700","fs-24"],["mat-icon-button","","mat-dialog-close","","type","button"],[1,"df","fd-c","gap-5","p-24",2,"box-sizing","border-box","overflow-x","hidden","overflow-y","auto","max-height","75vh",3,"ngSubmit","formGroup"],[1,"df","fd-c","gap-2"],[1,"fs-13","fw-600","text-secondary","uppercase","ls-1"],["appearance","outline",1,"w-100","hide-subscript","m-0","p-0"],["matInput","","formControlName","name","placeholder","e.g. Morning meditation","required",""],["matInput","","formControlName","description","placeholder","Why is this habit important?"],[1,"df","fd-r","gap-4","w-100"],[1,"df","fd-c","gap-2","flex-1"],[1,"fs-13","fw-600","text-primary","uppercase","ls-1",2,"color","#000"],[1,"df","fd-r","gap-4","flex-wrap",2,"max-width","170px"],[1,"cursor-pointer","us-none",2,"width","32px","height","32px","min-width","32px","border-radius","50%","border","3px solid #fff","transition","box-shadow 0.2s","box-sizing","border-box","flex-shrink","0",3,"background-color","box-shadow"],[1,"df","fd-c","gap-2","flex-1",2,"min-width","0"],["formControlName","frequency","required",""],[3,"value"],[1,"df","fd-c","gap-2","w-100","pt-8"],[1,"df","fd-r","gap-4","w-100",2,"box-sizing","border-box"],["formControlName","icon"],["formControlName","category","required",""],["matInput","","type","number","formControlName","duration","placeholder","e.g. 30","min","0"],["matPrefix",""],[1,"df","fd-r","ai-c","jc-s","mt-16","p-16","br-12",2,"background-color","#f8fafc","border","1px solid #e2e8f0"],[1,"df","fd-c","gap-1"],[1,"fs-14","fw-600"],[1,"fs-12","text-secondary"],["formControlName","reminderEnabled","color","primary",3,"change"],[1,"df","fd-c","gap-2","mt-8","animate-fade-in"],["mat-flat-button","","color","primary","type","submit",1,"w-100","br-8","fw-600","mt-24","text-bg",2,"padding","24px 0","font-size","16px"],[1,"cursor-pointer","us-none",2,"width","32px","height","32px","min-width","32px","border-radius","50%","border","3px solid #fff","transition","box-shadow 0.2s","box-sizing","border-box","flex-shrink","0",3,"click"],["formControlName","days","multiple","","required",""],[1,"df","ai-c","gap-2"],["matInput","","type","time","formControlName","reminderTime"],["matSuffix",""]],template:function(e,t){if(e&1&&(r(0,"div",0)(1,"span",1),d(2),l(),r(3,"button",2)(4,"mat-icon"),d(5,"close"),l()()(),r(6,"form",3),u("ngSubmit",function(){return t.onSubmit()}),r(7,"div",4)(8,"span",5),d(9,"Habit Name"),l(),r(10,"mat-form-field",6),E(11,"input",7),l()(),r(12,"div",4)(13,"span",5),d(14,"Description (Optional)"),l(),r(15,"mat-form-field",6),E(16,"input",8),l()(),r(17,"div",9)(18,"div",10)(19,"span",11),d(20,"Color"),l(),r(21,"div",12),ce(22,oh,1,4,"div",13,Vt),l()(),r(24,"div",14)(25,"span",11),d(26,"Frequency"),l(),r(27,"mat-form-field",6)(28,"mat-select",15),ce(29,rh,2,2,"mat-option",16,zl),l()()()(),k(31,lh,7,0,"div",17),r(32,"div",18)(33,"div",14)(34,"span",11),d(35,"Icon"),l(),r(36,"mat-form-field",6)(37,"mat-select",19)(38,"mat-select-trigger")(39,"div")(40,"mat-icon"),d(41),l()()(),ce(42,ch,6,3,"mat-option",16,Vt),l()()(),r(44,"div",14)(45,"span",11),d(46,"Category"),l(),r(47,"mat-form-field",6)(48,"mat-select",20),ce(49,dh,2,2,"mat-option",16,ah),l()()()(),r(51,"div",14)(52,"span",11),d(53,"Duration (In Mins)"),l(),r(54,"mat-form-field",6),E(55,"input",21),r(56,"mat-icon",22),d(57,"schedule"),l()()(),r(58,"div",23)(59,"div",24)(60,"span",25),d(61,"Daily Reminder"),l(),r(62,"span",26),d(63,"Get notified when it's time"),l()(),r(64,"mat-slide-toggle",27),u("change",function(o){return t.onReminderToggle(o.checked)}),l()(),k(65,mh,7,0,"div",28),r(66,"button",29),d(67),l()()),e&2){let n,o,s;m(2),F(t.data!=null&&t.data.habit?"Edit Habit":"New Habit"),m(4),y("formGroup",t.habitForm),m(16),de(t.presetColors),m(7),de(t.frequencyOptions),m(2),C(((n=t.habitForm.get("frequency"))==null?null:n.value)===1?31:-1),m(10),F((o=t.habitForm.get("icon"))==null?null:o.value),m(),de(t.iconOptions),m(7),de(t.categoryOptions()),m(16),C((s=t.habitForm.get("reminderEnabled"))!=null&&s.value?65:-1),m(2),Q(" ",t.data!=null&&t.data.habit?"Save Changes":"Create Habit"," ")}},dependencies:[Bi,ri,ct,Ao,Ot,oi,Qt,Ro,xt,vi,wt,Rt,Xe,Ca,Da,Be,ci,li,Ll,dt,_e,Ge,st,bt,sa,xe,we,Vl,Ho],encapsulation:2})};var qi=class i{data=c(_i);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-confirm-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title","",1,"m-0","pt-24","px-24","pb-8","fw-700"],[1,"px-24","pt-8"],[1,"m-0","fs-16","text-secondary",2,"line-height","1.5"],["align","end",1,"px-24","pb-24","pt-16"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","warn",3,"mat-dialog-close"]],template:function(e,t){e&1&&(r(0,"h2",0),d(1),l(),r(2,"mat-dialog-content",1)(3,"p",2),d(4),l()(),r(5,"mat-dialog-actions",3)(6,"button",4),d(7,"Cancel"),l(),r(8,"button",5),d(9,"Confirm Delete"),l()()),e&2&&(m(),F(t.data.title),m(3),F(t.data.message),m(4),y("mat-dialog-close",!0))},dependencies:[bt,sa,As,Rs,Os,_e,Ge],encapsulation:2})};var Hl=(i,a)=>a.id,hh=(i,a)=>a.value;function ph(i,a){if(i&1&&(r(0,"mat-option",9),d(1),l()),i&2){let e=a.$implicit;y("value",e.id),m(),F(e.name)}}function uh(i,a){if(i&1&&(r(0,"div",16)(1,"span",27),d(2),l()()),i&2){let e=f().$implicit;m(2),F(e.category.name)}}function fh(i,a){if(i&1&&(r(0,"div",17)(1,"span",28),d(2,"\u{1F525}"),l(),r(3,"span",29),d(4),l()()),i&2){let e=f().$implicit;m(4),F(e.currentStreak)}}function gh(i,a){if(i&1&&(r(0,"div",17)(1,"span",28),d(2,"\u23F0"),l(),r(3,"span",29),d(4),l()()),i&2){let e=f().$implicit;m(4),F(e.duration)}}function _h(i,a){if(i&1&&(r(0,"p",18),d(1),l()),i&2){let e=f().$implicit;m(),F(e.description)}}function bh(i,a){i&1&&(r(0,"div",20)(1,"span",30),d(2,"Daily"),l()())}function vh(i,a){if(i&1&&(r(0,"div",32),d(1),l()),i&2){let e=a.$implicit,t=f(2).$implicit;Z("background-color",t.days!=null&&t.days.includes(e.value)?"#10b981":"#f1f5f9")("color",t.days!=null&&t.days.includes(e.value)?"#fff":"#94a3b8"),m(),Q(" ",e.label," ")}}function yh(i,a){if(i&1&&(r(0,"div",21),ce(1,vh,2,5,"div",31,hh),l()),i&2){let e=f(2);m(),de(e.allDays)}}function xh(i,a){if(i&1){let e=X();r(0,"div",12),u("click",function(){let n=j(e).$implicit,o=f();return W(o.viewDetails(n.id))}),r(1,"div",13)(2,"div",14)(3,"h3",15),d(4),l(),k(5,uh,3,1,"div",16),k(6,fh,5,1,"div",17),k(7,gh,5,1,"div",17),l(),k(8,_h,2,1,"p",18),r(9,"div",19),k(10,bh,3,0,"div",20)(11,yh,3,0,"div",21),l(),r(12,"div",19)(13,"mat-icon",22),d(14,"emoji_events"),l(),r(15,"span",23),d(16),l()()(),r(17,"div",24)(18,"button",25),u("click",function(n){let o=j(e).$implicit,s=f();return n.stopPropagation(),W(s.editHabit(o))}),r(19,"mat-icon"),d(20,"edit"),l()(),r(21,"button",26),u("click",function(n){let o=j(e).$implicit,s=f();return n.stopPropagation(),W(s.deleteHabit(o))}),r(22,"mat-icon"),d(23,"delete"),l()()()()}if(i&2){let e=a.$implicit,t=f();m(4),F(e.name),m(),C(e.category?5:-1),m(),C(e.currentStreak>0?6:-1),m(),C(e.duration?7:-1),m(),C(e.description?8:-1),m(2),C(e.frequency===t.HabitFrequency.Daily?10:11),m(6),Q("Best: ",e.longestStreak," days")}}function wh(i,a){if(i&1){let e=X();r(0,"div",11)(1,"p",33),d(2,"No habits found. Let's create one!"),l(),r(3,"button",34),u("click",function(){j(e);let n=f();return W(n.openCreateHabitDialog())}),d(4,"Quick Create"),l()()}}var Ta=class i{habitService=c(Ke);habitLogService=c(It);categoryService=c(Jt);snackBar=c($t);dialog=c(Ut);router=c(Et);HabitFrequency=ui;allDays=[{label:"M",value:0},{label:"T",value:1},{label:"W",value:2},{label:"T",value:3},{label:"F",value:4},{label:"S",value:5},{label:"S",value:6}];habits=S([]);categories=S([]);selectedCategoryId=S("all");filteredHabits=ae(()=>{let a=this.selectedCategoryId(),e=this.habits();return a==="all"?e:e.filter(t=>t.category?.id===a)});async ngOnInit(){this.categories.set(await this.categoryService.getCategories()),await this.loadHabits()}async loadHabits(){let a=await this.habitService.loadHabits(),e=await Promise.all(a.map(async t=>{let n=await this.habitLogService.getStreakStatus(t.id);return Se(H({},t),{currentStreak:n.current,longestStreak:n.longest})}));this.habits.set(e)}openCreateHabitDialog(){if(this.categories().length===0){this.snackBar.open("Please create a category first before adding habits.","Go to Categories",{duration:5e3,panelClass:["warning-snackbar"]}).onAction().subscribe(()=>{this.router.navigate(["/categories"])});return}this.dialog.open(Cn,{width:"500px",maxWidth:"90vw"}).afterClosed().subscribe(e=>{e&&this.loadHabits()})}editHabit(a){this.dialog.open(Cn,{width:"500px",maxWidth:"90vw",data:{habit:a}}).afterClosed().subscribe(t=>{t&&this.loadHabits()})}viewDetails(a){this.router.navigate(["/habits",a])}deleteHabit(a){this.dialog.open(qi,{width:"450px",data:{title:"Delete Habit",message:`Are you sure you want to delete "${a.name}"? All associated tracking history for this habit will be permanently lost!`}}).afterClosed().subscribe(async t=>{t&&a.id&&(await this.habitService.deleteHabit(a.id),await this.loadHabits())})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-habits-list"]],decls:17,vars:2,consts:[[1,"p-16","df","fd-c","gap-8"],[1,"df","fd-r","ai-c","jc-s"],[1,"m-0","fs-24","fw-700"],[1,"df","fd-r","ai-c","gap-4"],["mat-flat-button","","color","primary",1,"br-8","text-bg",3,"click"],[1,"df","fd-c","gap-4"],["appearance","outline",1,"hide-subscript",2,"width","160px"],[3,"selectionChange","value"],["value","all"],[3,"value"],[1,"habit-card","p-16","b-1-solid","br-8","df","fd-r","ai-c","jc-s","cursor-pointer",2,"transition","all 0.2s","box-shadow","0 2px 8px rgba(0,0,0,0.03)","background-color","#fff"],[1,"empty-state","p-32","df","fd-c","ai-c","gap-4","b-1-dashed","br-8"],[1,"habit-card","p-16","b-1-solid","br-8","df","fd-r","ai-c","jc-s","cursor-pointer",2,"transition","all 0.2s","box-shadow","0 2px 8px rgba(0,0,0,0.03)","background-color","#fff",3,"click"],[1,"df","fd-c","gap-2",2,"flex","1"],[1,"df","ai-c","gap-2"],[1,"m-0","fw-600","fs-16"],[1,"df","ai-c","gap-1","px-8","py-2","br-4",2,"background-color","#f1f5f9","border","1px solid #e2e8f0"],[1,"df","ai-c","gap-1","px-8","py-2","br-12",2,"background-color","#fff7ed","border","1px solid #ffedd5"],[1,"m-0","mt-4","text-secondary","fs-13","truncate-1"],[1,"df","fd-r","ai-c","gap-2","mt-8"],[1,"px-8","py-2","br-4",2,"background-color","#f0fdf4","border","1px solid #dcfce7"],[1,"df","fd-r","gap-1"],[1,"fs-14","fw-400",2,"width","14px","height","14px","color","#94a3b8"],[1,"fs-11","fw-500","text-secondary","ls-1","uppercase"],[1,"df","fd-r"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],[1,"fs-10","fw-700","uppercase","ls-1",2,"color","#64748b"],[2,"font-size","14px"],[1,"fs-12","fw-700",2,"color","#ea580c"],[1,"fs-10","fw-700","uppercase","ls-1",2,"color","#166534"],[1,"df","ai-c","jc-c",2,"width","18px","height","18px","border-radius","4px","font-size","9px","font-weight","700",3,"background-color","color"],[1,"df","ai-c","jc-c",2,"width","18px","height","18px","border-radius","4px","font-size","9px","font-weight","700"],[1,"m-0","text-secondary"],["mat-stroked-button","","color","primary",3,"click"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"h2",2),d(3,"My Habits"),l(),r(4,"div",3)(5,"button",4),u("click",function(){return t.openCreateHabitDialog()}),d(6," New Habit "),l()()(),r(7,"div",5)(8,"mat-form-field",6)(9,"mat-select",7),u("selectionChange",function(o){return t.selectedCategoryId.set(o.value)}),r(10,"mat-option",8),d(11,"All Categories"),l(),ce(12,ph,2,2,"mat-option",9,Hl),l()(),ce(14,xh,24,7,"div",10,Hl,!1,wh,5,0,"div",11),l()()),e&2&&(m(9),y("value",t.selectedCategoryId()),m(3),de(t.categories()),m(2),de(t.filteredHabits()))},dependencies:[bt,_e,Ge,st,xe,we,ci,Xe,li,dt,Be,Gi],encapsulation:2})};var jl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[K]})}return i})();var Wl=["*"],Gl=`.mdc-list {
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
`,kh=["unscopedContent"],Ch=["text"],Dh=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Sh=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Mh=new D("ListOption"),Sn=(()=>{class i{_elementRef=c(R);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Eh=(()=>{class i{_elementRef=c(R);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),Ih=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),Ul=(()=>{class i{_listOption=c(Mh,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,hostVars:4,hostBindings:function(t,n){t&2&&I("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),Th=(()=>{class i extends Ul{static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[U]})}return i})(),Mn=(()=>{class i extends Ul{static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[U]})}return i})(),Ah=new D("MAT_LIST_CONFIG"),Dn=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ke(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ke(e))}_disabled=S(!1);_defaultOptions=c(Ah,{optional:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,hostVars:1,hostBindings:function(t,n){t&2&&N("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),Oh=(()=>{class i{_elementRef=c(R);_ngZone=c(G);_listBase=c(Dn,{optional:!0});_platform=c(me);_hostElement;_isButtonElement;_noopAnimations=pe();_avatars;_icons;set lines(e){this._explicitLines=it(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ke(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ke(e))}_disabled=S(!1);_subscriptions=new ye;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(We).load(rt);let e=c(mo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new rs(this,this._ngZone,this._hostElement,this._platform,c(Y)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Fe(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&t===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,contentQueries:function(t,n,o){if(t&1&&Ee(o,Th,4)(o,Mn,4),t&2){let s;b(s=v())&&(n._avatars=s),b(s=v())&&(n._icons=s)}},hostVars:4,hostBindings:function(t,n){t&2&&(N("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),I("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var ql=(()=>{class i extends Dn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[q([{provide:Dn,useExisting:i}]),U],ngContentSelectors:Wl,decls:1,vars:0,template:function(t,n){t&1&&(ee(),T(0))},styles:[Gl],encapsulation:2,changeDetection:0})}return i})(),Aa=(()=>{class i extends Oh{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ke(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,n,o){if(t&1&&Ee(o,Eh,5)(o,Sn,5)(o,Ih,5),t&2){let s;b(s=v())&&(n._lines=s),b(s=v())&&(n._titles=s),b(s=v())&&(n._meta=s)}},viewQuery:function(t,n){if(t&1&&le(kh,5)(Ch,5),t&2){let o;b(o=v())&&(n._unscopedContent=o.first),b(o=v())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,n){t&2&&(N("aria-current",n._getAriaCurrent()),I("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[U],ngContentSelectors:Sh,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,n){t&1&&(ee(Dh),T(0),r(1,"span",1),T(2,1),T(3,2),r(4,"span",2,0),u("cdkObserveContent",function(){return n._updateItemLines(!0)}),T(6,3),l()(),T(7,4),T(8,5),E(9,"div",3))},dependencies:[zn],encapsulation:2,changeDetection:0})}return i})();var Ql=(()=>{class i extends Dn{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[q([{provide:Dn,useExisting:i}]),U],ngContentSelectors:Wl,decls:1,vars:0,template:function(t,n){t&1&&(ee(),T(0))},styles:[Gl],encapsulation:2,changeDetection:0})}return i})();var Qi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[Hn,Ii,Sa,K,jl]})}return i})();var Rh=["input"],Fh=["label"],Ph=["*"],Go={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Lh=new D("mat-checkbox-default-options",{providedIn:"root",factory:()=>Go}),qe=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(qe||{}),Uo=class{source;checked},Vh=(()=>{class i{_elementRef=c(R);_changeDetectorRef=c(oe);_ngZone=c(G);_animationsDisabled=pe();_options=c(Lh,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Uo;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new A;indeterminateChange=new A;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=qe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){c(We).load(rt);let e=c(new Bt("tabindex"),{optional:!0});this._options=this._options||Go,this.color=this._options.color||Go.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=c(he).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(qe.Indeterminate):this._transitionCheckState(this.checked?qe.Checked:qe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=S(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?qe.Checked:qe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case qe.Init:if(t===qe.Checked)return this._animationClasses.uncheckedToChecked;if(t==qe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case qe.Unchecked:return t===qe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case qe.Checked:return t===qe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case qe.Indeterminate:return t===qe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&le(Rh,5)(Fh,5),t&2){let o;b(o=v())&&(n._inputElement=o.first),b(o=v())&&(n._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(Ue("id",n.id),N("tabindex",null)("aria-label",null)("aria-labelledby",null),Ye(n.color?"mat-"+n.color:"mat-accent"),I("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",O],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",O],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",O],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ze(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",O],checked:[2,"checked","checked",O],disabled:[2,"disabled","disabled",O],indeterminate:[2,"indeterminate","indeterminate",O]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[q([{provide:ai,useExisting:He(()=>i),multi:!0},{provide:yt,useExisting:i,multi:!0}]),fe],ngContentSelectors:Ph,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(ee(),r(0,"div",3),u("click",function(s){return n._preventBubblingFromLabel(s)}),r(1,"div",4,0)(3,"div",5),u("click",function(){return n._onTouchTargetClick()}),l(),r(4,"input",6,1),u("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(s){return n._onInteractionEvent(s)}),l(),E(6,"div",7),r(7,"div",8),at(),r(8,"svg",9),E(9,"path",10),l(),Xi(),E(10,"div",11),l(),E(11,"div",12),l(),r(12,"label",13,2),T(14),l()()),t&2){let o=Ie(2);y("labelPosition",n.labelPosition),m(4),I("mdc-checkbox--selected",n.checked),y("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),N("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),m(7),y("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),m(),y("for",n.inputId)}},dependencies:[Nt,Ea],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})(),Yl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[Vh,K]})}return i})();var Bh=(i,a)=>a.dateStr;function Nh(i,a){if(i&1){let e=X();r(0,"div",5),u("click",function(){let n=j(e).$implicit,o=f();return W(o.onSelectDate(n.dateStr))}),r(1,"span",6),d(2),Pr(3,"titlecase"),l(),r(4,"div",7),d(5),l()()}if(i&2){let e=a.$implicit,t=f();m(),Z("color",e.dateStr===t.activeDate()?"var(--text-primary)":"var(--text-secondary)"),m(),Q(" ",Lr(3,10,e.dayName)," "),m(2),Z("background-color",e.dateStr===t.activeDate()?"var(--text-primary)":"transparent")("color",e.dateStr===t.activeDate()?"var(--background-default)":"var(--text-primary)")("box-shadow",e.dateStr===t.activeDate()?"0 4px 8px var(--primary-light)":"none"),m(),Q(" ",e.dayNumber," ")}}var Oa=class i{activeDate=Ki.required();dateSelected=Vr();dateStrip=S([]);centerDate=new Date;ngOnInit(){if(this.activeDate()){let[a,e,t]=this.activeDate().split("-");this.centerDate=new Date(Number(a),Number(e)-1,Number(t))}this.centerDate.setHours(0,0,0,0),this.generateDateStrip()}getLocalFormattedDate(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}generateDateStrip(){let a=[],e=new Date(this.centerDate);for(let t=-3;t<=3;t++){let n=new Date(e);n.setDate(e.getDate()+t),a.push({date:n,dayName:n.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),dayNumber:n.getDate(),dateStr:this.getLocalFormattedDate(n)})}this.dateStrip.set(a)}shiftDays(a){this.centerDate.setDate(this.centerDate.getDate()+a),this.generateDateStrip()}onSelectDate(a){this.dateSelected.emit(a)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-date-strip"]],inputs:{activeDate:[1,"activeDate"]},outputs:{dateSelected:"dateSelected"},decls:10,vars:0,consts:[[1,"df","fd-r","ai-c","gap-1","w-100","px-24","pb-24",2,"box-sizing","border-box"],["mat-icon-button","","aria-label","Previous week",2,"color","#a1a1aa","flex-shrink","0",3,"click"],[1,"df","fd-r","jc-sb","ai-c","w-100","overflow-x-auto","hide-scrollbar","scroll-smooth"],[1,"df","fd-c","ai-c","gap-2","cursor-pointer",2,"min-width","48px"],["mat-icon-button","","aria-label","Next week",2,"color","#a1a1aa","flex-shrink","0",3,"click"],[1,"df","fd-c","ai-c","gap-2","cursor-pointer",2,"min-width","48px",3,"click"],[1,"fs-12","fw-600","transition-all"],[1,"df","ai-c","jc-c","br-pill","fw-600","fs-16","transition-all",2,"width","48px","height","48px","box-sizing","border-box"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"button",1),u("click",function(){return t.shiftDays(-7)}),r(2,"mat-icon"),d(3,"chevron_left"),l()(),r(4,"div",2),ce(5,Nh,6,12,"div",3,Bh),l(),r(7,"button",4),u("click",function(){return t.shiftDays(7)}),r(8,"mat-icon"),d(9,"chevron_right"),l()()()),e&2&&(m(5),de(t.dateStrip()))},dependencies:[xe,we,_e,st,Gr],encapsulation:2})};var Ra=class i{dedicatedMinutes=Ki(0);completedMinutes=Ki(0);percentage=ae(()=>{let a=this.dedicatedMinutes(),e=this.completedMinutes();return a===0?0:Math.min(100,Math.round(e/a*100))});chartData=ae(()=>{let a=this.completedMinutes(),e=this.dedicatedMinutes(),t=Math.max(0,e-a),n=Math.max(0,1440-e);return{labels:["Progress"],datasets:[{data:[a],backgroundColor:"#10b981",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Completed"},{data:[t],backgroundColor:"#6366f1",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Remaining"},{data:[n],backgroundColor:"#f1f5f9",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Free Time"}]}});chartOptions={indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:a=>` ${a.dataset.label}: ${this.formatTime(a.raw)}`}}},scales:{x:{stacked:!0,display:!1,max:1440},y:{stacked:!0,display:!1}}};formatTime(a){let e=Math.floor(a/60),t=Math.round(a%60);return e===0?`${t}m`:t===0?`${e}h`:`${e}h ${t}m`}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-time-availability"]],inputs:{dedicatedMinutes:[1,"dedicatedMinutes"],completedMinutes:[1,"completedMinutes"]},decls:28,vars:7,consts:[[1,"df","fd-c","gap-4","p-20","br-24","bg-white",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box"],[1,"df","fd-r","jc-s","ai-c"],[1,"df","fd-c"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"df","fd-c","ai-fe"],[1,"fs-20","fw-900",2,"color","#10b981","line-height","1"],[1,"fs-10","fw-700","text-secondary","uppercase"],[2,"height","12px","width","100%","position","relative"],["baseChart","","type","bar",3,"data","options"],[1,"df","fd-r","jc-sb","ai-c","mt-4","flex-wrap","gap-2"],[1,"df","ai-c","gap-3"],[1,"df","ai-c","gap-1"],[1,"br-pill",2,"width","8px","height","8px","background-color","#10b981"],[1,"fs-11","fw-700","text-secondary"],[1,"br-pill",2,"width","8px","height","8px","background-color","#6366f1"],[1,"br-pill",2,"width","8px","height","8px","background-color","#f1f5f9"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),d(4,"Daily Capacity"),l(),r(5,"h2",4),d(6),l()(),r(7,"div",5)(8,"span",6),d(9),l(),r(10,"span",7),d(11,"Done"),l()()(),r(12,"div",8),E(13,"canvas",9),l(),r(14,"div",10)(15,"div",11)(16,"div",12),E(17,"div",13),r(18,"span",14),d(19),l()(),r(20,"div",12),E(21,"div",15),r(22,"span",14),d(23),l()(),r(24,"div",12),E(25,"div",16),r(26,"span",14),d(27),l()()()()()),e&2&&(m(6),Q("",t.formatTime(t.dedicatedMinutes())," total habits"),m(3),Q("",t.percentage(),"%"),m(4),y("data",t.chartData())("options",t.chartOptions),m(6),Q("",t.formatTime(t.completedMinutes())," Done"),m(4),Q("",t.formatTime(t.dedicatedMinutes()-t.completedMinutes())," Left"),m(4),Q("",t.formatTime(1440-t.dedicatedMinutes())," Free"))},dependencies:[Mt,Di],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};var zh=(i,a)=>a.habit.id;function Hh(i,a){i&1&&(r(0,"mat-icon",16),d(1,"check"),l())}function jh(i,a){if(i&1&&(r(0,"div",22)(1,"mat-icon",25),d(2,"schedule"),l(),r(3,"span",26),d(4),l()()),i&2){let e=f().$implicit;m(4),Q("",e.habit.duration,"m")}}function Wh(i,a){if(i&1&&(r(0,"div",23)(1,"span",27),d(2,"\u{1F525}"),l(),r(3,"span",28),d(4),l()()),i&2){let e=f().$implicit;m(4),F(e.streak)}}function Gh(i,a){if(i&1){let e=X();r(0,"div",14),u("click",function(){let n=j(e).$implicit,o=f();return W(o.toggleHabit(n.habit.id))}),r(1,"div",15),k(2,Hh,2,0,"mat-icon",16),l(),r(3,"div",17)(4,"div",18)(5,"mat-icon"),d(6),l()(),r(7,"div",19)(8,"div",20)(9,"h3",21),d(10),l(),k(11,jh,5,1,"div",22),k(12,Wh,5,1,"div",23),l(),r(13,"p",24),d(14),l()()()()}if(i&2){let e=a.$implicit;m(),Z("background-color",e.completed?"#f97316":"#fff")("border",e.completed?"none":"2px solid #cbd5e1"),m(),C(e.completed?2:-1),m(),Z("opacity",e.completed?"0.7":"1"),m(),Z("background-color",e.habit.color+"20"),m(),Z("color",e.habit.color),m(),F(e.habit.icon),m(3),Z("text-decoration",e.completed?"line-through":"none"),m(),Q(" ",e.habit.name," "),m(),C(e.habit.duration?11:-1),m(),C(e.streak>0?12:-1),m(2),F(e.habit.description||"No description")}}function Uh(i,a){i&1&&(r(0,"div",13)(1,"mat-icon",29),d(2,"event_busy"),l(),r(3,"span",30),d(4,"No routines for this day!"),l()())}var Fa=class i{habitService=c(Ke);habitLogService=c(It);activeDateStr=S("");habitsView=S([]);totalDedicatedMinutes=ae(()=>this.habitsView().reduce((a,e)=>a+(e.habit.duration||0),0));completedMinutes=ae(()=>this.habitsView().filter(a=>a.completed).reduce((a,e)=>a+(e.habit.duration||0),0));activeDateDisplay=ae(()=>{let a=this.activeDateStr();if(!a)return"";let[e,t,n]=a.split("-");return new Date(Number(e),Number(t)-1,Number(n)).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"})});userName=S("Budi");greeting=ae(()=>{let a=new Date().getHours();return a<12?"Morning":a<17?"Afternoon":"Evening"});async ngOnInit(){this.activeDateStr.set(this.getLocalFormattedDate(new Date)),this.loadHabitsForActiveDate();let a=await je.users.orderBy("id").first();a&&this.userName.set(a.name.split(" ")[0])}getLocalFormattedDate(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}selectDate(a){this.activeDateStr.set(a),this.loadHabitsForActiveDate()}async loadHabitsForActiveDate(){let a=await this.habitService.loadHabits(),e=await this.habitLogService.getLogsForDate(this.activeDateStr()),t=new Set(e.map(J=>J.habitId)),[n,o,s]=this.activeDateStr().split("-"),p=new Date(Number(n),Number(o)-1,Number(s)).getDay(),M={0:6,1:0,2:1,3:2,4:3,5:4,6:5}[p],P=a.filter(J=>J.frequency===0?!0:J.days&&Array.isArray(J.days)&&J.days.length>0?J.days.includes(M):!1),$=await Promise.all(P.map(async J=>{let te=await this.habitLogService.getStreakStatus(J.id);return{habit:J,completed:t.has(J.id),streak:te.current}}));this.habitsView.set($)}async toggleHabit(a){let e=await this.habitLogService.toggleCompletion(a,this.activeDateStr()),t=await this.habitLogService.getStreakStatus(a);this.habitsView.update(n=>n.map(o=>o.habit.id===a?Se(H({},o),{completed:e,streak:t.current}):o))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-today"]],decls:18,vars:7,consts:[[1,"df","fd-c","w-100"],[1,"df","fd-r","jc-sb","ai-c","gap-2","w-100","p-24","pb-16"],[1,"df","fd-c","gap-2"],[1,"m-0","fs-28","fw-700",2,"color","var(--text-primary)","letter-spacing","-0.5px"],[1,"fs-13","fw-500","text-secondary",2,"color","#6b7280"],[3,"dateSelected","activeDate"],[1,"p-24"],[3,"dedicatedMinutes","completedMinutes"],[1,"df","fd-r","jc-sb","ai-c","gap-2","w-100","px-24","mb-16",2,"box-sizing","border-box"],[1,"m-0","fs-18","fw-700",2,"color","var(--text-primary)"],[1,"df","fd-c","gap-4","position-relative","w-100","px-24","pb-80",2,"box-sizing","border-box"],[1,"position-absolute",2,"left","36px","top","20px","bottom","20px","width","0px","border-left","2px dotted #e5e7eb","z-index","0"],[1,"df","fd-r","gap-4","ai-c","w-100","position-relative","z-1",2,"box-sizing","border-box"],[1,"p-32","df","fd-c","ai-c","jc-c","gap-2","br-16","position-relative","z-1","w-100",2,"background-color","var(--surface-default)","box-shadow","0 4px 12px rgba(0,0,0,0.03)","box-sizing","border-box"],[1,"df","fd-r","gap-4","ai-c","w-100","position-relative","z-1",2,"box-sizing","border-box",3,"click"],[1,"df","ai-c","jc-c","cursor-pointer","transition-all","bg-white",2,"width","24px","height","24px","min-width","24px","border-radius","50%","box-sizing","border-box"],[2,"font-size","16px","width","16px","height","16px","color","white"],[1,"p-16","br-16","df","fd-r","ai-c","gap-4","w-100","fg-1",2,"box-shadow","0 4px 12px rgba(0, 0, 0, 0.03)","border","1px solid var(--border-subtle)","box-sizing","border-box","background-color","var(--surface-default)"],[1,"df","ai-c","jc-c",2,"width","48px","height","48px","min-width","48px","border-radius","14px"],[1,"df","fd-c","flex-1","overflow-hidden","gap-1",2,"min-width","0"],[1,"df","fd-r","ai-c","gap-2"],[1,"m-0","fs-15","fw-600","truncate",2,"color","var(--text-primary)"],[1,"df","ai-c","gap-1","px-6","py-1","br-8",2,"background-color","#f1f5f9","border","1px solid #e2e8f0"],[1,"df","ai-c","gap-1","px-6","py-1","br-8",2,"background-color","#fff7ed","border","1px solid #ffedd5"],[1,"m-0","fs-12","fw-500","truncate",2,"color","#a1a1aa"],[2,"font-size","11px","width","11px","height","11px","color","#64748b"],[1,"fs-10","fw-700",2,"color","#64748b"],[2,"font-size","11px"],[1,"fs-10","fw-700",2,"color","#ea580c"],[2,"font-size","48px","width","48px","height","48px","color","#cbd5e1"],[1,"fs-14","fw-600","text-secondary"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),d(4),l(),r(5,"span",4),d(6),l()()(),r(7,"t-date-strip",5),u("dateSelected",function(o){return t.selectDate(o)}),l(),r(8,"div",6),E(9,"t-time-availability",7),l(),r(10,"div",8)(11,"h2",9),d(12,"Daily routine"),l()(),r(13,"div",10),E(14,"div",11),ce(15,Gh,15,18,"div",12,zh,!1,Uh,5,0,"div",13),l()()),e&2&&(m(4),Pn("",t.greeting(),", ",t.userName()),m(2),F(t.activeDateDisplay()),m(),y("activeDate",t.activeDateStr()),m(2),y("dedicatedMinutes",t.totalDedicatedMinutes())("completedMinutes",t.completedMinutes()),m(6),de(t.habitsView()))},dependencies:[Qi,xe,we,Yl,_e,Kt,Oa,Ra],styles:[".completed-bg[_ngcontent-%COMP%]{background-color:var(--success-50, #f0fdf4);opacity:.9}"]})};function qh(i,a){if(i&1&&Zt(0,"img",3),i&2){let e=f();Z("width",e.size,"px")("height",e.size,"px"),Ue("src",e.avatar,Cr)}}function Qh(i,a){if(i&1&&($e(0,"span",4),d(1),tt()),i&2){let e=f();Z("font-size",e.size*.4,"px"),m(),Q(" ",e.initials()," ")}}var mi=class i{name="";avatar=null;size=40;circular=!0;initials=ae(()=>{if(!this.name)return"?";let a=this.name.trim().split(" ");return a.length>=2?(a[0][0]+a[1][0]).toUpperCase():a[0][0].toUpperCase()});bgColor=ae(()=>{let a=["#6366f1","#8b5cf6","#ec4899","#f43f5e","#ef4444","#f59e0b","#10b981","#06b6d4","#3b82f6","#2563eb"],e=0;for(let n=0;n<this.name.length;n++)e=this.name.charCodeAt(n)+((e<<5)-e);let t=Math.abs(e)%a.length;return a[t]});static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-avatar"]],inputs:{name:"name",avatar:"avatar",size:"size",circular:"circular"},decls:3,vars:13,consts:[[1,"avatar-container"],["alt","avatar",2,"object-fit","cover","border-radius","inherit",3,"src","width","height"],[1,"initials",3,"font-size"],["alt","avatar",2,"object-fit","cover","border-radius","inherit",3,"src"],[1,"initials"]],template:function(e,t){e&1&&($e(0,"div",0),k(1,qh,1,5,"img",1)(2,Qh,2,3,"span",2),tt()),e&2&&(Z("width",t.size,"px")("height",t.size,"px")("min-width",t.size,"px")("min-height",t.size,"px")("background-color",t.avatar?"transparent":t.bgColor())("border-radius",t.circular?"50%":"12px"),m(),C(t.avatar?1:2))},dependencies:[Mt],styles:[".avatar-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;overflow:hidden;color:#fff;font-weight:700;-webkit-user-select:none;user-select:none;box-shadow:inset 0 0 0 1px #0000000d}.initials[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:-.5px}"]})};var Pa=class i{dialog=c(Ut);fb=c(Vi);snackBar=c($t);activeUser=S(null);profileForm;previewAvatar=null;constructor(){this.profileForm=this.fb.group({name:["",[Ve.required,Ve.minLength(2)]],gender:["",Ve.required]})}async ngOnInit(){let a=await je.users.orderBy("id").first();a&&(this.activeUser.set(a),this.previewAvatar=a.avatar||null,this.profileForm.patchValue({name:a.name,gender:a.gender}))}onFileSelected(a){let e=a.target.files[0];if(e){let t=new FileReader;t.onload=n=>{this.previewAvatar=n.target.result},t.readAsDataURL(e)}}async saveProfile(){if(this.profileForm.valid&&this.activeUser()?.id){let a={name:this.profileForm.value.name,gender:this.profileForm.value.gender,avatar:this.previewAvatar||void 0};await je.users.update(this.activeUser().id,a),this.snackBar.open("Profile updated successfully!","Close",{duration:3e3}),this.activeUser.update(e=>e?H(H({},e),a):null)}}clearAllData(){this.dialog.open(qi,{width:"450px",data:{title:"Factory Reset Trackify",message:"Are you absolutely sure you want to permanently erase ALL data? This will instantly wipe out your Profile, active Habits, and entire historical Logs array forever. This cannot be undone!"}}).afterClosed().subscribe(async e=>{e&&(await je.users.clear(),await je.habits.clear(),await je.habitLogs.clear(),await je.categories.clear(),window.location.reload())})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-settings"]],decls:60,vars:5,consts:[["fileInput",""],[1,"p-24","df","fd-c","gap-6","font-inter"],[1,"df","fd-c","gap-1"],[1,"m-0","fs-28","fw-700","text-primary"],[1,"m-0","fs-14","fw-500"],[1,"bg-white","br-16","p-24","df","fd-c","gap-6","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","fd-c","gap-2","mb-8"],[1,"m-0","fs-18","fw-700","text-primary"],[1,"m-0","fs-14","text-secondary"],[1,"df","fd-c","gap-6","w-100",3,"ngSubmit","formGroup"],[1,"df","ai-c","gap-8","p-16","br-12"],[1,"cursor-pointer",3,"click"],[3,"name","avatar","size"],["type","file","accept","image/*",2,"display","none",3,"change"],[1,"fs-15","fw-700"],[1,"fs-13","text-secondary"],[1,"df","fd-r","gap-4","flex-wrap"],[1,"df","fd-c","gap-2","flex-1",2,"min-width","200px"],[1,"fs-13","fw-700","text-primary","uppercase","ls-1"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","formControlName","name","placeholder","E.g. Alex","required",""],["formControlName","gender","required",""],["value","male"],["value","female"],["value","other"],[1,"df","jc-fe"],["mat-flat-button","","color","primary","type","submit",1,"fw-700","py-12","px-24","br-8","text-bg",3,"disabled"],[1,"bg-white","br-16","p-24","df","fd-c","gap-4","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"m-0","fs-18","fw-700","text-warn"],[1,"df","fd-c","gap-4"],[1,"df","fd-r","jc-sb","ai-c","p-20","br-8","b-1-solid",2,"border-color","#fca5a5","background-color","#fef2f2","box-sizing","border-box"],[1,"fs-16","fw-700",2,"color","#b91c1c"],[1,"fs-13","fw-500",2,"color","#ef4444"],["mat-flat-button","","color","warn",1,"fw-700","text-bg",3,"click"],[1,"mr-4"]],template:function(e,t){if(e&1){let n=X();r(0,"div",1)(1,"div",2)(2,"h1",3),d(3,"Settings"),l(),r(4,"p",4),d(5,"Manage your application data and preferences"),l()(),r(6,"div",5)(7,"div",6)(8,"h2",7),d(9,"Profile"),l(),r(10,"p",8),d(11,"Update your personal information"),l()(),r(12,"form",9),u("ngSubmit",function(){return t.saveProfile()}),r(13,"div",10)(14,"div",11),u("click",function(){j(n);let s=Ie(17);return W(s.click())}),E(15,"t-avatar",12),r(16,"input",13,0),u("change",function(s){return t.onFileSelected(s)}),l()(),r(18,"div",2)(19,"span",14),d(20,"Profile Picture"),l(),r(21,"span",15),d(22,"Click the circle to change your photo"),l()()(),r(23,"div",16)(24,"div",17)(25,"span",18),d(26,"Display Name"),l(),r(27,"mat-form-field",19),E(28,"input",20),l()(),r(29,"div",17)(30,"span",18),d(31,"Gender"),l(),r(32,"mat-form-field",19)(33,"mat-select",21)(34,"mat-option",22),d(35,"Male"),l(),r(36,"mat-option",23),d(37,"Female"),l(),r(38,"mat-option",24),d(39,"Other"),l()()()()(),r(40,"div",25)(41,"button",26),d(42," Save Changes "),l()()()(),r(43,"div",27)(44,"div",6)(45,"h2",28),d(46,"Danger Zone"),l(),r(47,"p",8),d(48,"Irreversible destructive actions against your device's local database. "),l()(),r(49,"div",29)(50,"div",30)(51,"div",2)(52,"span",31),d(53,"Wipe Tracking Data"),l(),r(54,"span",32),d(55,"Permanently delete all habits, logs, categories, and your profile."),l()(),r(56,"button",33),u("click",function(){return t.clearAllData()}),r(57,"mat-icon",34),d(58,"delete_forever"),l(),d(59," Erase "),l()()()()()}if(e&2){let n;m(12),y("formGroup",t.profileForm),m(3),y("name",((n=t.profileForm.get("name"))==null?null:n.value)||"")("avatar",t.previewAvatar)("size",80),m(26),y("disabled",t.profileForm.invalid)}},dependencies:[Mt,_e,Ge,xe,we,bt,Bi,ri,ct,Ot,oi,Qt,xt,vi,Be,Xe,wt,Rt,ci,li,dt,Gi,mi],encapsulation:2})};var qo=new D("CdkAccordion"),Xl=(()=>{class i{_stateChanges=new w;_openCloseAllActions=new w;id=c(he).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",O]},exportAs:["cdkAccordion"],features:[q([{provide:qo,useExisting:i}]),fe]})}return i})(),Zl=(()=>{class i{accordion=c(qo,{optional:!0,skipSelf:!0});_changeDetectorRef=c(oe);_expansionDispatcher=c(wn);_openCloseAllSubscription=ye.EMPTY;closed=new A;opened=new A;destroyed=new A;expandedChange=new A;id=c(he).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=S(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",O],disabled:[2,"disabled","disabled",O]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[q([{provide:qo,useValue:void 0}])]})}return i})(),Kl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({})}return i})();var $h=["body"],Yh=["bodyWrapper"],Xh=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Zh=["mat-expansion-panel-header","*","mat-action-row"];function Kh(i,a){}var Jh=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ep=["mat-panel-title","mat-panel-description","*"];function tp(i,a){i&1&&($e(0,"span",1),at(),$e(1,"svg",2),Zt(2,"path",3),tt()())}var Qo=new D("MAT_ACCORDION"),Jl=new D("MAT_EXPANSION_PANEL"),ip=(()=>{class i{_template=c(Qe);_expansionPanel=c(Jl,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["ng-template","matExpansionPanelContent",""]]})}return i})(),ec=new D("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),$o=(()=>{class i extends Zl{_viewContainerRef=c(ot);_animationsDisabled=pe();_document=c(be);_ngZone=c(G);_elementRef=c(R);_renderer=c(ue);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new A;afterCollapse=new A;_inputChanges=new w;accordion=c(Qo,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(he).getId("mat-expansion-panel-header-");constructor(){super();let e=c(ec,{optional:!0});this._expansionDispatcher=c(wn),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Me(null),re(()=>this.expanded&&!this._portal),Pe(1)).subscribe(()=>{this._portal=new et(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-expansion-panel"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,ip,5),t&2){let s;b(s=v())&&(n._lazyContent=s.first)}},viewQuery:function(t,n){if(t&1&&le($h,5)(Yh,5),t&2){let o;b(o=v())&&(n._body=o.first),b(o=v())&&(n._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,n){t&2&&I("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",O],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[q([{provide:Qo,useValue:void 0},{provide:Jl,useExisting:i}]),U,fe],ngContentSelectors:Zh,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,n){t&1&&(ee(Xh),T(0),r(1,"div",2,0)(3,"div",3,1)(5,"div",4),T(6,1),Le(7,Kh,0,0,"ng-template",5),l(),T(8,2),l()()),t&2&&(m(),N("inert",n.expanded?null:""),m(2),y("id",n.id),N("aria-labelledby",n._headerId),m(4),y("cdkPortalOutlet",n._portal))},dependencies:[nt],styles:[`.mat-expansion-panel {
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
`],encapsulation:2,changeDetection:0})}return i})();var Yo=(()=>{class i{panel=c($o,{host:!0});_element=c(R);_focusMonitor=c(pt);_changeDetectorRef=c(oe);_parentChangeSubscription=ye.EMPTY;constructor(){c(We).load(rt);let e=this.panel,t=c(ec,{optional:!0}),n=c(new Bt("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(re(s=>!!(s.hideToggle||s.togglePosition))):wi;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=Fe(e.opened,e.closed,o,e._inputChanges.pipe(re(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(re(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ae(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,n){t&1&&u("click",function(){return n._toggle()})("keydown",function(s){return n._keydown(s)}),t&2&&(N("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),Z("height",n._getHeaderHeight()),I("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ze(e)]},ngContentSelectors:ep,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,n){t&1&&(ee(Jh),$e(0,"span",0),T(1),T(2,1),T(3,2),tt(),k(4,tp,3,0,"span",1)),t&2&&(I("mat-content-hide-toggle",!n._showToggle()),m(4),C(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2,changeDetection:0})}return i})();var tc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return i})(),ic=(()=>{class i extends Xl{_keyManager;_ownHeaders=new hi;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Me(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new qn(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["mat-accordion"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,Yo,5),t&2){let s;b(s=v())&&(n._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,n){t&2&&I("mat-accordion-multi",n.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",O],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[q([{provide:Qo,useExisting:i}]),U]})}return i})(),nc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[Kl,gt,K]})}return i})();var ap=["tooltip"],op=20;var rp=new D("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Y);return()=>gi(i,{scrollThrottle:op})}}),sp=new D("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var ac="tooltip-panel",lp={passive:!0},cp=8,dp=8,mp=24,hp=200,Xo=(()=>{class i{_elementRef=c(R);_ngZone=c(G);_platform=c(me);_ariaDescriber=c(as);_focusMonitor=c(pt);_dir=c(Te);_injector=c(Y);_viewContainerRef=c(ot);_mediaMatcher=c(es);_document=c(be);_renderer=c(ue);_animationsDisabled=pe();_defaultOptions=c(sp,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=oc;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ke(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=ke(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=it(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=it(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new w;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=cp}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ie(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new ft(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=n.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ie(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof R)return this._overlayRef;this._detach()}let t=this._injector.get(zt).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${ac}`,o=on(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(ie(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Wt(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(rp)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ie(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ie(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ie(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ie(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(H(H({},n.main),o.main)),this._addOffset(H(H({},n.fallback),o.fallback))])}_addOffset(e){let t=dp,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ce(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:o}=e,s;if(t==="center"?this._dir&&this._dir.value==="rtl"?s=n==="end"?"left":"right":s=n==="start"?"left":"right":s=t==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let h=this._overlayRef;if(h){let p=`${this._cssClassPrefix}-${ac}-`;h.removePanelClass(p+this._currentPosition),h.addPanelClass(p+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,lp))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ce({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ae(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&I("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),oc=(()=>{class i{_changeDetectorRef=c(oe);_elementRef=c(R);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=pe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new w;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>mp&&e.width>=hp}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:n),t.classList.add(e?n:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(t);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&le(ap,7),t&2){let o;b(o=v())&&(n._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&u("mouseleave",function(s){return n._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){t&1&&($e(0,"div",1,0),Ar("animationend",function(s){return n._handleAnimationEnd(s)}),$e(2,"div",2),d(3),tt()()),t&2&&(Ye(n.tooltipClass),I("mdc-tooltip--multiline",n._isMultiline),m(3),F(n.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return i})();var rc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[Un,_t,K,At]})}return i})();var sc=(i,a)=>a.id;function up(i,a){if(i&1&&(r(0,"mat-list-item",20)(1,"mat-icon",21),d(2),l(),r(3,"span",22),d(4),l()()),i&2){let e=a.$implicit;m(),Z("color",e.color),m(),F(e.icon),m(2),F(e.name)}}function fp(i,a){if(i&1&&(r(0,"div",12)(1,"span",18),d(2,"Assigned Habits"),l(),r(3,"mat-list",19),ce(4,up,5,4,"mat-list-item",20,sc),l()()),i&2){let e=f().$implicit,t=f();m(4),de(t.getHabits(e.id))}}function gp(i,a){i&1&&(r(0,"p",13),d(1,"No habits assigned yet"),l())}function _p(i,a){if(i&1){let e=X();r(0,"mat-expansion-panel",10,0)(2,"mat-expansion-panel-header")(3,"mat-panel-title",11),d(4),r(5,"span"),d(6),l()()(),r(7,"div"),k(8,fp,6,0,"div",12)(9,gp,2,0,"p",13),l(),r(10,"div",14)(11,"div",15)(12,"button",16),u("click",function(){let n=j(e).$implicit,o=f();return W(o.navigateToDetails(n.id))}),r(13,"mat-icon"),d(14,"insights"),l(),d(15," View Details "),l()(),r(16,"button",17),u("click",function(){let n=j(e).$implicit,o=f();return W(o.deleteCategory(n.id))}),r(17,"mat-icon"),d(18,"delete"),l()()()()}if(i&2){let e=a.$implicit,t=f();m(4),Q(" ",e.name," "),m(2),Pn("",t.getHabitCount(e.id)," ",t.getHabitCount(e.id)===1?"habit":"habits"),m(2),C(t.getHabits(e.id).length>0?8:9),m(8),y("disabled",t.getHabitCount(e.id)>0)("matTooltip",t.getHabitCount(e.id)>0?"Cannot delete category with habits":"Delete category")}}var La=class i{categoryService=c(Jt);habitService=c(Ke);router=c(Et);categories=S([]);habitCounts=S({});habitsByCategory=S({});newCategoryName="";snackBar=c($t);ngOnInit(){this.loadCategories()}async loadCategories(){let a=await this.categoryService.getCategories();this.categories.set(a);let e=await this.habitService.loadHabits(),t={},n={};e.forEach(o=>{o.category?.id!==void 0&&(t[o.category.id]=(t[o.category.id]||0)+1,n[o.category.id]||(n[o.category.id]=[]),n[o.category.id].push(o))}),this.habitCounts.set(t),this.habitsByCategory.set(n)}getHabits(a){return this.habitsByCategory()[a]||[]}getHabitCount(a){return this.habitCounts()[a]||0}async addCategory(){if(this.newCategoryName.trim()){if(this.checkIfCategoryAlreadyExists()){this.snackBar.open("Category already exists","Close",{duration:2e3});return}await this.categoryService.addCategory(this.newCategoryName.trim()),this.newCategoryName="",await this.loadCategories()}}checkIfCategoryAlreadyExists(){return this.categories().some(a=>a.name.toLowerCase()===this.newCategoryName.trim().toLowerCase())}async deleteCategory(a){if(this.getHabitCount(a)>0){this.snackBar.open("Cannot delete category with habits assigned to it","Close",{duration:3e3});return}await this.categoryService.deleteCategory(a),await this.loadCategories()}navigateToDetails(a){this.router.navigate(["/categories",a])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-categories"]],decls:16,vars:2,consts:[["panel",""],[1,"p-16","df","fd-c","gap-4"],[1,"df","fd-c","gap-4"],[1,"m-0"],[1,"m-0","text-secondary"],[1,"df","ai-c","gap-8",3,"ngSubmit"],["appearance","outline",1,"w-100","m-0","flex-1",2,"margin-bottom","-1.25em"],["matInput","","name","catName","placeholder","e.g. Finances","required","",3,"ngModelChange","ngModel"],["mat-flat-button","","color","primary","type","submit",1,"text-bg",3,"disabled"],[1,"w-100"],["hideToggle","false",1,"br-12","b-1-solid","mb-8"],[1,"fw-600","df","ai-c","jc-s","gap-4","text-secondary"],[1,"df","fd-c","gap-2"],[1,"text-secondary","m-0","px-4"],[1,"df","ai-c","jc-sb","pt-8","bt-1-solid","mt-4"],[1,"df","ai-c","gap-8"],["mat-stroked-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click","disabled","matTooltip"],[1,"fs-12","text-secondary","fw-500","uppercase","px-4"],[1,"p-0"],[1,"h-auto","p-0","mb-4"],["matListItemIcon",""],["matListItemTitle",""]],template:function(e,t){e&1&&(r(0,"div",1)(1,"div",2)(2,"h2",3),d(3,"Categories"),l(),r(4,"p",4),d(5,"Manage your habit categories"),l()(),r(6,"form",5),u("ngSubmit",function(){return t.addCategory()}),r(7,"mat-form-field",6)(8,"mat-label"),d(9,"New Category"),l(),r(10,"input",7),Bn("ngModelChange",function(o){return Vn(t.newCategoryName,o)||(t.newCategoryName=o),o}),l()(),r(11,"button",8),d(12,"Add"),l()(),r(13,"mat-accordion",9),ce(14,_p,19,6,"mat-expansion-panel",10,sc),l()()),e&2&&(m(10),Ln("ngModel",t.newCategoryName),m(),y("disabled",!t.newCategoryName),m(3),de(t.categories()))},dependencies:[_n,ri,ct,Ot,oi,Qt,gn,bi,Qi,ql,Aa,Mn,Sn,_e,Ge,st,xe,we,wt,Rt,Xe,Ni,Be,nc,ic,$o,Yo,tc,rc,Xo],styles:["mat-expansion-panel[_ngcontent-%COMP%]{border-radius:12px!important;overflow:hidden;margin-bottom:8px;box-shadow:none!important;border:1px solid var(--outline-variant, #e0e0e0)}mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{border-color:var(--primary, #6366f1)}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 16px!important}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 16px 16px!important}mat-list-item[_ngcontent-%COMP%]{height:40px!important;--mdc-list-item-leading-icon-size: 20px}"]})};var tr=["*"];function bp(i,a){i&1&&T(0)}var vp=["tabListContainer"],yp=["tabList"],xp=["tabListInner"],wp=["nextPaginator"],kp=["previousPaginator"],Cp=["content"];function Dp(i,a){}var Sp=["tabBodyWrapper"],Mp=["tabHeader"];function Ep(i,a){}function Ip(i,a){if(i&1&&Le(0,Ep,0,0,"ng-template",12),i&2){let e=f().$implicit;y("cdkPortalOutlet",e.templateLabel)}}function Tp(i,a){if(i&1&&d(0),i&2){let e=f().$implicit;F(e.textLabel)}}function Ap(i,a){if(i&1){let e=X();r(0,"div",7,2),u("click",function(){let n=j(e),o=n.$implicit,s=n.$index,h=f(),p=Ie(1);return W(h._handleClick(o,p,s))})("cdkFocusChange",function(n){let o=j(e).$index,s=f();return W(s._tabFocusChanged(n,o))}),E(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),k(6,Ip,1,1,null,12)(7,Tp,1,1),l()()()}if(i&2){let e=a.$implicit,t=a.$index,n=Ie(1),o=f();Ye(e.labelClass),I("mdc-tab--active",o.selectedIndex===t),y("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),N("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),y("matRippleTrigger",n)("matRippleDisabled",e.disabled||o.disableRipple),m(3),C(e.templateLabel?6:7)}}function Op(i,a){i&1&&T(0)}function Rp(i,a){if(i&1){let e=X();r(0,"mat-tab-body",13),u("_onCentered",function(){j(e);let n=f();return W(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){j(e);let o=f();return W(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){j(e);let o=f();return W(o._bodyCentered(n))}),l()}if(i&2){let e=a.$implicit,t=a.$index,n=f();Ye(e.bodyClass),y("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),N("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Fp=new D("MatTabContent"),Pp=(()=>{class i{template=c(Qe);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matTabContent",""]],features:[q([{provide:Fp,useExisting:i}])]})}return i})(),Lp=new D("MatTabLabel"),mc=new D("MAT_TAB"),Vp=(()=>{class i extends ss{_closestTab=c(mc,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[q([{provide:Lp,useExisting:i}]),U]})}return i})(),hc=new D("MAT_TAB_GROUP"),ir=(()=>{class i{_viewContainerRef=c(ot);_closestTabGroup=c(hc,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new w;position=null;origin=null;isActive=!1;constructor(){c(We).load(rt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new et(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,Vp,5)(o,Pp,7,Qe),t&2){let s;b(s=v())&&(n.templateLabel=s.first),b(s=v())&&(n._explicitContent=s.first)}},viewQuery:function(t,n){if(t&1&&le(Qe,7),t&2){let o;b(o=v())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&N("id",null)},inputs:{disabled:[2,"disabled","disabled",O],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[q([{provide:mc,useExisting:i}]),fe],ngContentSelectors:tr,decls:1,vars:0,template:function(t,n){t&1&&(ee(),Mr(0,bp,1,0,"ng-template"))},encapsulation:2})}return i})(),Zo="mdc-tab-indicator--active",lc="mdc-tab-indicator--no-transition",Ko=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(n=>n.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},Bp=(()=>{class i{_elementRef=c(R);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Zo);return}let n=t.getBoundingClientRect(),o=e.width/n.width,s=e.left-n.left;t.classList.add(lc),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(lc),t.classList.add(Zo),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Zo)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",O]}})}return i})();var pc=(()=>{class i extends Bp{elementRef=c(R);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(N("aria-disabled",!!n.disabled),I("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",O]},features:[U]})}return i})(),cc={passive:!0},Np=650,zp=100,Hp=(()=>{class i{_elementRef=c(R);_changeDetectorRef=c(oe);_viewportRuler=c(lt);_dir=c(Te,{optional:!0});_ngZone=c(G);_platform=c(me);_sharedResizeObserver=c(xa);_injector=c(Y);_renderer=c(ue);_animationsDisabled=pe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new w;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new w;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new A;indexFocused=new A;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),cc),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),cc))}ngAfterContentInit(){let e=this._dir?this._dir.change:ki("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(On(32),ie(this._destroyed)),n=this._viewportRuler.change(150).pipe(ie(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new qn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ce(o,{injector:this._injector}),Fe(e,n,t,this._items.changes,this._itemsResized()).pipe(ie(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?wi:this._items.changes.pipe(Me(this._items),mt(e=>new Dt(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>t.next(o));return e.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),_r(1),re(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ae(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=t.elementRef.nativeElement,h,p;this._getLayoutDirection()=="ltr"?(h=o,p=h+s):(p=this._tabListInner.nativeElement.offsetWidth-o,h=p-s);let x=this.scrollDistance,M=this.scrollDistance+n;h<x?this.scrollDistance-=x-h:p>M&&(this.scrollDistance+=Math.min(p-M,h-x))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),gr(Np,zp).pipe(ie(Fe(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(e);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",O],selectedIndex:[2,"selectedIndex","selectedIndex",Ze]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),jp=(()=>{class i extends Hp{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ko(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,pc,4),t&2){let s;b(s=v())&&(n._items=s)}},viewQuery:function(t,n){if(t&1&&le(vp,7)(yp,7)(xp,7)(wp,5)(kp,5),t&2){let o;b(o=v())&&(n._tabListContainer=o.first),b(o=v())&&(n._tabList=o.first),b(o=v())&&(n._tabListInner=o.first),b(o=v())&&(n._nextPaginator=o.first),b(o=v())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&I("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",O]},features:[U],ngContentSelectors:tr,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(ee(),r(0,"div",5,0),u("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(s){return n._handlePaginatorPress("before",s)})("touchend",function(){return n._stopInterval()}),E(2,"div",6),l(),r(3,"div",7,1),u("keydown",function(s){return n._handleKeydown(s)}),r(5,"div",8,2),u("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),T(9),l()()(),r(10,"div",10,4),u("mousedown",function(s){return n._handlePaginatorPress("after",s)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),E(12,"div",6),l()),t&2&&(I("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),y("matRippleDisabled",n._disableScrollBefore||n.disableRipple),m(3),I("_mat-animation-noopable",n._animationsDisabled),m(2),N("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),m(5),I("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),y("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Nt,zn],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return i})(),Wp=new D("MAT_TABS_CONFIG"),dc=(()=>{class i extends nt{_host=c(Jo);_ngZone=c(G);_centeringSub=ye.EMPTY;_leavingSub=ye.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Me(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matTabBodyHost",""]],features:[U]})}return i})(),Jo=(()=>{class i{_elementRef=c(R);_dir=c(Te,{optional:!0});_ngZone=c(G);_injector=c(Y);_renderer=c(ue);_diAnimationsDisabled=pe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ye.EMPTY;_position;_previousPosition;_onCentering=new A;_beforeCentering=new A;_afterLeavingCenter=new A;_onCentered=new A(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(oe);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ce(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ce(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&le(dc,5)(Cp,5),t&2){let o;b(o=v())&&(n._portalHost=o.first),b(o=v())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&N("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(r(0,"div",1,0),Le(2,Dp,0,0,"ng-template",2),l()),t&2&&I("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[dc,ut],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return i})(),uc=(()=>{class i{_elementRef=c(R);_changeDetectorRef=c(oe);_ngZone=c(G);_tabsSubscription=ye.EMPTY;_tabLabelSubscription=ye.EMPTY;_tabBodySubscription=ye.EMPTY;_diAnimationsDisabled=pe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new hi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new A;focusChange=new A;animationDone=new A;selectedTabChange=new A(!0);_groupId;_isServer=!c(me).isBrowser;constructor(){let e=c(Wp,{optional:!0});this._groupId=c(he).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=t[o];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Me(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new er;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Fe(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,ir,5),t&2){let s;b(s=v())&&(n._allTabs=s)}},viewQuery:function(t,n){if(t&1&&le(Sp,5)(Mp,5)(Jo,5),t&2){let o;b(o=v())&&(n._tabBodyWrapper=o.first),b(o=v())&&(n._tabHeader=o.first),b(o=v())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(N("mat-align-tabs",n.alignTabs),Ye("mat-"+(n.color||"primary")),Z("--mat-tab-animation-duration",n.animationDuration),I("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",O],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",O],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",O],selectedIndex:[2,"selectedIndex","selectedIndex",Ze],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ze],disablePagination:[2,"disablePagination","disablePagination",O],disableRipple:[2,"disableRipple","disableRipple",O],preserveContent:[2,"preserveContent","preserveContent",O],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[q([{provide:hc,useExisting:i}])],ngContentSelectors:tr,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(ee(),r(0,"mat-tab-header",3,0),u("indexFocused",function(s){return n._focusChanged(s)})("selectFocusedIndex",function(s){return n.selectedIndex=s}),ce(2,Ap,8,17,"div",4,Vt),l(),k(4,Op,1,0),r(5,"div",5,1),ce(7,Rp,1,10,"mat-tab-body",6,Vt),l()),t&2&&(y("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Tr("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),m(2),de(n._tabs),m(2),C(n._isServer?4:-1),m(),I("_mat-animation-noopable",n._animationsDisabled()),m(2),de(n._tabs))},dependencies:[jp,pc,Jr,Nt,nt,Jo],styles:[`.mdc-tab {
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
`],encapsulation:2})}return i})(),er=class{index;tab};var fc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[K]})}return i})();var Up=new D("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var nr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({providers:[zi,{provide:Up,useValue:{separatorKeyCodes:[13]}}],imports:[Ii,K]})}return i})();var qp=()=>["S","M","T","W","T","F","S"],Qp=(i,a)=>a.dateStr;function $p(i,a){if(i&1&&(r(0,"div",66)(1,"mat-icon",71),d(2,"schedule"),l(),d(3),l()),i&2){let e,t=f(2);m(3),Q(" ",(e=t.habit())==null?null:e.duration," mins ")}}function Yp(i,a){if(i&1){let e=X();r(0,"div",9),E(1,"div",52),r(2,"div",53)(3,"div",54)(4,"div",55)(5,"mat-icon",56),d(6),l()(),r(7,"div",57)(8,"h1",58),d(9),l(),r(10,"span",59),d(11),l()()(),r(12,"div",60)(13,"button",61),u("click",function(){j(e);let n=f();return W(n.shiftMonth(0))}),r(14,"mat-icon",29),d(15,"edit"),l()(),r(16,"button",62)(17,"mat-icon",29),d(18,"delete_outline"),l()()()(),r(19,"div",63)(20,"div",64)(21,"div",65),d(22),l(),k(23,$p,4,1,"div",66),r(24,"span",67),d(25,"Active monitoring"),l()(),r(26,"div",68)(27,"span",69),d(28,"Target:"),l(),r(29,"span",70),d(30,"100% Consistency"),l()()()()}if(i&2){let e,t,n,o,s,h,p,x,M,P,$=f();m(),Z("background","radial-gradient(circle, "+((e=$.habit())==null?null:e.color)+"20 0%, transparent 60%)"),m(3),Z("background-color",(t=$.habit())==null?null:t.color)("box-shadow","0 8px 16px -4px "+((n=$.habit())==null?null:n.color)+"60"),m(2),F((o=$.habit())==null?null:o.icon),m(3),F((s=$.habit())==null?null:s.name),m(2),F(((h=$.habit())==null?null:h.description)||"Build consistency every day."),m(10),Z("background-color",((p=$.habit())==null?null:p.color)+"15")("color",(x=$.habit())==null?null:x.color),m(),Q(" ",((M=$.habit())==null?null:M.frequency)===0?"Daily":"Weekly"," "),m(),C((P=$.habit())!=null&&P.duration?23:-1)}}function Xp(i,a){if(i&1&&(r(0,"div",31),d(1),l()),i&2){let e=a.$implicit;m(),Q(" ",e)}}function Zp(i,a){i&1&&E(0,"div",33)}function Kp(i,a){if(i&1&&(r(0,"span",73),d(1),l()),i&2){let e=f().$implicit;m(),F(e.mood)}}function Jp(i,a){i&1&&E(0,"div",74)}function eu(i,a){if(i&1){let e=X();r(0,"div",34)(1,"button",72),u("pointerdown",function(n){let o=j(e).$implicit;return f().onDatePointerDown(o),W(n.stopPropagation())})("pointerup",function(n){let o=j(e).$implicit;return f().onDatePointerUp(o),W(n.stopPropagation())}),d(2),k(3,Kp,2,1,"span",73),k(4,Jp,1,0,"div",74),l()()}if(i&2){let e=a.$implicit,t=f();m(),Z("width","40px")("height","40px")("background-color",t.getCellBg(e))("color",t.getCellColor(e))("opacity",e.isInFuture?"0.3":"1")("border",e.isToday?"2px solid #1e293b":"none"),y("disabled",e.isInFuture&&!e.isConfiguredDay),m(),Q(" ",e.dayNum," "),m(),C(e.mood?3:-1),m(),C(e.hasNote?4:-1)}}function tu(i,a){if(i&1){let e=X();r(0,"div",50)(1,"button",75),u("click",function(){j(e);let n=f();return W(n.toggleToday())}),r(2,"div",76)(3,"mat-icon",77),d(4),l(),r(5,"span",78),d(6),l()()()()}if(i&2){let e,t=f();m(),Z("background-color",t.isDoneToday()?"#f0fdf4":(e=t.habit())==null?null:e.color)("color",t.isDoneToday()?"#10b981":"white")("border",t.isDoneToday()?"2px solid #10b981":"none"),m(3),F(t.isDoneToday()?"task_alt":"check_circle"),m(2),F(t.isDoneToday()?"Marked as Done!":"Mark Today as Done")}}function iu(i,a){if(i&1){let e=X();r(0,"span",17),u("click",function(){let n=j(e).$implicit,o=f();return W(o.mood=n)}),d(1),l()}if(i&2){let e=a.$implicit,t=f();Z("opacity",t.mood===e?"1":"0.4")("filter",t.mood===e?"grayscale(0)":"grayscale(1)"),m(),F(e)}}function nu(i,a){if(i&1){let e=X();r(0,"div",18),u("click",function(){let n=j(e).$implicit,o=f();return W(o.toggleTag(n))}),d(1),l()}if(i&2){let e=a.$implicit,t=f();Z("background-color",t.selectedTags.has(e)?"var(--primary-light)":"var(--surface-alt)")("color",t.selectedTags.has(e)?"var(--primary-default)":"var(--text-secondary)")("border",t.selectedTags.has(e)?"1px solid var(--primary-default)":"1px solid var(--border-subtle)"),m(),Q(" ",e," ")}}var Va=class i{route=c(qr);router=c(Et);habitService=c(Ke);habitLogService=c(It);dialog=c(Ut);habitId=S(null);habit=S(null);currentStreak=S(0);bestStreak=S(0);totalCompletions=S(0);activeMonthDate=S(new Date);calendarDays=S([]);emptyDaysPrefix=S([]);completedDateStrings=S(new Set);logsMap=S(new Map);monthlySuccessRate=S(0);reportType=S("weekly");onTabChange(a){let e=["weekly","monthly","yearly"];e[a]&&this.reportType.set(e[a])}chartData=ae(()=>{let a=this.reportType(),e=this.completedDateStrings(),t=[],n=new Date;if(n.setHours(0,0,0,0),a==="weekly")for(let o=6;o>=0;o--){let s=new Date(n);s.setDate(s.getDate()-o);let h=this.getLocalFormattedDate(s);t.push({label:s.toLocaleDateString("en-US",{weekday:"short"}),value:e.has(h)?1:0})}else if(a==="monthly")for(let o=3;o>=0;o--){let s=0;for(let h=0;h<7;h++){let p=new Date(n);p.setDate(p.getDate()-(o*7+h)),e.has(this.getLocalFormattedDate(p))&&s++}t.push({label:`W${4-o}`,value:s})}else for(let o=5;o>=0;o--){let s=new Date(n.getFullYear(),n.getMonth()-o,1),h=s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0"),p=0;e.forEach(x=>{x.startsWith(h)&&p++}),t.push({label:s.toLocaleDateString("en-US",{month:"short"}),value:p})}return t});chartDataConfiguration=ae(()=>{let a=this.chartData(),e=this.habit(),t=e?e.color:"#3b82f6";return{labels:a.map(n=>n.label),datasets:[{data:a.map(n=>n.value),label:"Completions",backgroundColor:t+"33",borderColor:t,pointBackgroundColor:t,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:t,fill:"origin",tension:.4}]}});chartOptions=ae(()=>({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,mode:"index",intersect:!1}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:this.reportType()==="weekly"?1:this.reportType()==="monthly"?7:31}}}));todayStr=S("");isDoneToday=ae(()=>this.completedDateStrings().has(this.todayStr()));isTodayConfigured=S(!1);activeMonthDisplay=ae(()=>this.activeMonthDate().toLocaleDateString("en-US",{month:"long",year:"numeric"}));async ngOnInit(){this.todayStr.set(this.getLocalFormattedDate(new Date)),this.route.paramMap.subscribe(async e=>{let t=e.get("id");t&&(this.habitId.set(Number(t)),await this.loadData())});let a=new Date;a.setDate(1),this.activeMonthDate.set(a)}goBack(){this.router.navigate(["/habits"])}getLocalFormattedDate(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}async loadData(){let a=this.habitId();if(!a)return;let e=await this.habitService.getHabit(a);e&&this.habit.set(e);let n=(await this.habitLogService.getAllLogs()).filter(P=>P.habitId===a);this.totalCompletions.set(n.length);let o=new Set(n.map(P=>P.dateStr));this.completedDateStrings.set(o);let s=new Map;n.forEach(P=>{s.set(P.dateStr,P)}),this.logsMap.set(s),this.calculateMonthlySuccessRate(n);let p=Array.from(o).sort().reverse().map(P=>{let[$,J,te]=P.split("-");return Math.floor(new Date(Number($),Number(J)-1,Number(te)).getTime()/864e5)}),x=0,M=0;if(p.length>0){let P=1;x=1;for(let te=0;te<p.length-1;te++)p[te]-p[te+1]===1?(P++,P>x&&(x=P)):P=1;let $=new Date().setHours(0,0,0,0),J=Math.floor($/864e5);if(p[0]===J||p[0]===J-1){M=1;for(let te=0;te<p.length-1&&p[te]-p[te+1]===1;te++)M++}}this.bestStreak.set(x),this.currentStreak.set(M),this.generateCalendar()}calculateMonthlySuccessRate(a){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1),n=this.todayStr(),o=a.filter(p=>p.dateStr.startsWith(n.substring(0,7))),s=e.getDate(),h=Math.round(o.length/s*100);this.monthlySuccessRate.set(h)}getSuccessRateColor(){let a=this.monthlySuccessRate();return a>=80?"#10b981":a>=50?"#f59e0b":"#ef4444"}shiftMonth(a){let e=new Date(this.activeMonthDate());e.setMonth(e.getMonth()+a),this.activeMonthDate.set(e),this.generateCalendar()}generateCalendar(){let a=new Date(this.activeMonthDate()),e=a.getFullYear(),t=a.getMonth(),n=new Date(e,t,1).getDay(),o=new Date(e,t+1,0).getDate();this.emptyDaysPrefix.set(Array.from({length:n}));let s=[],h=this.todayStr(),p=!1,x={0:6,1:0,2:1,3:2,4:3,5:4,6:5};for(let M=1;M<=o;M++){let P=new Date(e,t,M),$=this.getLocalFormattedDate(P),J=new Date;J.setHours(0,0,0,0);let te=P.getTime()>J.getTime(),Ne=this.completedDateStrings().has($),Pt=x[P.getDay()],Yt=!1,yi=this.habit();yi&&(yi.frequency===0||yi.days&&Array.isArray(yi.days)&&yi.days.includes(Pt))&&(Yt=!0),$===h&&(p=Yt);let Oe=this.logsMap().get($);s.push({date:P,dateStr:$,dayNum:M,isToday:$===h,isInFuture:te,isCompleted:Ne,isConfiguredDay:Yt,hasNote:!!(Oe?.reflectionNote||Oe?.planNote||Oe?.mood||Oe?.tags&&Oe.tags.length>0),mood:Oe?.mood,tags:Oe?.tags,planNote:Oe?.planNote,reflectionNote:Oe?.reflectionNote})}this.isTodayConfigured.set(p),this.calendarDays.set(s)}getCellBg(a){return a.isCompleted?"#10b981":a.isConfiguredDay?a.isToday?"#f3f4f6":"#f0fdf4":"transparent"}getCellColor(a){return a.isCompleted?"#ffffff":a.isConfiguredDay?a.isToday?"#111827":"#10b981":"#d1d5db"}longPressTimer;isLongPress=!1;onDatePointerDown(a){a.isInFuture&&!a.isConfiguredDay||(this.isLongPress=!1,this.longPressTimer=setTimeout(()=>{this.isLongPress=!0,this.openNoteEditor(a)},500))}onDatePointerUp(a){clearTimeout(this.longPressTimer),this.isLongPress||this.onDateClick(a)}async onDateClick(a){if(a.isInFuture||!a.isConfiguredDay)return;let e=this.habitId();e&&(await this.habitLogService.toggleCompletion(e,a.dateStr),await this.loadData())}openNoteEditor(a){let e=this.habitId();if(!e)return;this.dialog.open(ar,{width:"450px",autoFocus:!1,restoreFocus:!1,data:{dateStr:a.dateStr,habitName:this.habit()?.name,isCompleted:a.isCompleted,isInFuture:a.isInFuture,log:this.logsMap().get(a.dateStr)||{habitId:e,dateStr:a.dateStr,completedAt:Date.now()}}}).afterClosed().subscribe(async n=>{this.isLongPress=!1,n&&(await this.habitLogService.saveLogData(e,a.dateStr,n),await this.loadData())})}async toggleToday(){let a=this.habitId();a&&(await this.habitLogService.toggleCompletion(a,this.todayStr()),await this.loadData())}deleteHabit(){}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-habit-details"]],decls:93,vars:14,consts:[[1,"df","fd-c","w-100","font-inter",2,"background-color","var(--background-default)","min-height","100vh","position","relative"],[1,"df","fd-r","jc-sb","ai-c","p-20","w-100","sticky","top-0","bg-white",2,"z-index","10","box-shadow","0 2px 10px rgba(0,0,0,0.02)","box-sizing","border-box"],[1,"df","fd-r","gap-3","ai-c"],["mat-icon-button","",2,"background-color","var(--surface-alt)","border","1px solid var(--border-subtle)",3,"click"],[2,"color","var(--text-secondary)"],[1,"df","fd-c"],[1,"fs-12","fw-600","text-secondary","uppercase","ls-1"],[1,"fs-18","fw-800","truncate","text-primary",2,"max-width","180px"],[1,"p-38","df","fd-c","gap-6"],[1,"bg-white","br-24","df","fd-c","gap-4","w-100","position-relative",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box","overflow","hidden"],[1,"df","fd-r","flex-wrap","gap-8","jc-s","w-100"],[1,"bg-white","br-20","flex-1","df","fd-c","gap-2","min-w-140",2,"box-shadow","0 4px 12px rgba(0,0,0,0.02)"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#fff7ed","border","1px solid #ffedd5"],[2,"color","#ea580c","font-size","20px","width","20px","height","20px"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-24","fw-900","text-primary"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f0f9ff","border","1px solid #e0f2fe"],[2,"color","#0284c7","font-size","20px","width","20px","height","20px"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f0fdf4","border","1px solid #dcfce7"],[2,"color","#166534","font-size","20px","width","20px","height","20px"],[1,"fs-24","fw-900"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f8fafc","border","1px solid #f1f5f9"],[2,"color","#64748b","font-size","20px","width","20px","height","20px"],[1,"bg-white","br-24","w-100","df","fd-c","gap-6","mt-12",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.03)","box-sizing","border-box"],[1,"df","fd-r","jc-sb","ai-c","mb-20"],[1,"fs-13","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-20","fw-800","text-primary"],[1,"df","fd-r","gap-2",2,"background-color","#f8fafc","padding","4px","border-radius","12px","border","1px solid #f1f5f9"],["mat-icon-button","",2,"color","#64748b","width","36px","height","36px",3,"click"],[2,"font-size","20px"],[1,"df","fd-r","w-100","mb-8",2,"background-color","transparent"],[1,"text-center","fs-11","fw-800",2,"flex","0 0 14.28%","color","#94a3b8","letter-spacing","0.5px"],[1,"df","fd-r","flex-wrap","w-100","gap-y-1"],[2,"flex","0 0 14.28%"],[1,"df","ai-c","jc-c","position-relative",2,"flex","0 0 14.28%","height","48px"],[1,"df","fd-r","jc-c","gap-4","mt-20","pt-20",2,"border-top","1px solid #f1f5f9"],[1,"df","ai-c","gap-1"],[1,"br-4",2,"width","12px","height","12px","background-color","#10b981"],[1,"fs-11","fw-600","text-secondary"],[1,"df","ai-c","gap-1","ml-4"],[1,"br-4",2,"width","12px","height","12px","background-color","#f0fdf4","border","1px solid #dcfce7"],[1,"br-4",2,"width","12px","height","12px","background-color","transparent","border","1px solid #e2e8f0"],[1,"df","fd-r","jc-sb","ai-c","mb-8"],[1,"fs-18","fw-800","text-primary"],["fitInkBarToContent","",2,"width","100%",3,"selectedIndexChange","selectedIndex"],["label","Weekly"],["label","Monthly"],["label","Yearly"],[1,"w-100","mt-16","position-relative",2,"height","180px"],["baseChart","","type","line",3,"data","options"],[1,"p-24","w-100","bg-white","b-t-1-solid","position-fixed",2,"bottom","0","left","0","z-index","100","border-color","#f4f4f5","box-shadow","0 -10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box"],[2,"height","140px","width","100%"],[2,"position","absolute","top","-20px","right","-20px","width","140px","height","140px","border-radius","50%"],[1,"df","fd-r","ai-fs","jc-sb","position-relative","z-1",2,"z-index","1"],[1,"df","fd-r","ai-c","gap-4"],[1,"df","ai-c","jc-c","br-16","text-white",2,"width","56px","height","56px","min-width","56px"],[2,"font-size","28px","width","28px","height","28px"],[1,"df","fd-c","flex-1","overflow-hidden"],[1,"m-0","fs-22","fw-800","text-primary","truncate"],[1,"fs-14","fw-500","text-secondary"],[1,"df","fd-r","gap-1"],["mat-icon-button","",2,"color","#64748b",3,"click"],["mat-icon-button","","color","warn"],[1,"mt-12","pt-20","df","fd-r","jc-sb","ai-c","gap-4","flex-wrap",2,"border-top","1px solid var(--border-subtle)"],[1,"df","fd-r","ai-c","gap-2","flex-wrap"],[1,"px-10","py-4","br-8","fs-11","fw-700","uppercase","ls-1"],[1,"df","ai-c","gap-1","px-10","py-4","br-8","fs-11","fw-700","text-secondary",2,"background-color","var(--surface-alt)"],[1,"fs-13","fw-600","text-secondary"],[1,"df","fd-r","ai-c","gap-1"],[1,"fs-12","fw-700","text-secondary"],[1,"fs-13","fw-800","text-primary"],[2,"font-size","14px","width","14px","height","14px"],[1,"br-12","border-none","df","fd-c","ai-c","jc-c","fw-700","fs-15","cursor-pointer","transition-all","position-relative",3,"pointerdown","pointerup","disabled"],[1,"position-absolute","fs-10",2,"top","-2px","right","-2px"],[1,"position-absolute",2,"bottom","4px","width","4px","height","4px","border-radius","50%","background-color","currentColor","opacity","0.8"],["mat-flat-button","",1,"w-100","py-32","fw-800","br-16","transition-all",3,"click"],[1,"df","ai-c","jc-c","gap-3"],[2,"font-size","24px","width","24px","height","24px"],[1,"fs-17"]],template:function(e,t){if(e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),u("click",function(){return t.goBack()}),r(4,"mat-icon",4),d(5,"arrow_back"),l()(),r(6,"div",5)(7,"span",6),d(8,"Habit Details"),l(),r(9,"span",7),d(10),l()()()(),r(11,"div",8),k(12,Yp,31,15,"div",9),r(13,"div",10)(14,"div",11)(15,"div",12)(16,"mat-icon",13),d(17,"local_fire_department"),l()(),r(18,"span",14),d(19,"Current"),l(),r(20,"span",15),d(21),l()(),r(22,"div",11)(23,"div",16)(24,"mat-icon",17),d(25,"emoji_events"),l()(),r(26,"span",14),d(27,"Record"),l(),r(28,"span",15),d(29),l()(),r(30,"div",11)(31,"div",18)(32,"mat-icon",19),d(33,"task_alt"),l()(),r(34,"span",14),d(35,"Success"),l(),r(36,"span",20),d(37),l()(),r(38,"div",11)(39,"div",21)(40,"mat-icon",22),d(41,"done_all"),l()(),r(42,"span",14),d(43,"Total"),l(),r(44,"span",15),d(45),l()()(),r(46,"div",23)(47,"div",24)(48,"div",5)(49,"span",25),d(50,"Consistency Map"),l(),r(51,"span",26),d(52),l()(),r(53,"div",27)(54,"button",28),u("click",function(){return t.shiftMonth(-1)}),r(55,"mat-icon",29),d(56,"chevron_left"),l()(),r(57,"button",28),u("click",function(){return t.shiftMonth(1)}),r(58,"mat-icon",29),d(59,"chevron_right"),l()()()(),r(60,"div",30),ce(61,Xp,2,1,"div",31,io),l(),r(63,"div",32),ce(64,Zp,1,0,"div",33,io),ce(66,eu,5,16,"div",34,Qp),l(),r(68,"div",35)(69,"div",36),E(70,"div",37),r(71,"span",38),d(72,"Done"),l()(),r(73,"div",39),E(74,"div",40),r(75,"span",38),d(76,"Missed"),l()(),r(77,"div",39),E(78,"div",41),r(79,"span",38),d(80,"Locked"),l()()()(),r(81,"div",23)(82,"div",42)(83,"span",43),d(84,"Trends"),l()(),r(85,"mat-tab-group",44),u("selectedIndexChange",function(o){return t.onTabChange(o)}),E(86,"mat-tab",45)(87,"mat-tab",46)(88,"mat-tab",47),l(),r(89,"div",48),E(90,"canvas",49),l()()(),k(91,tu,7,8,"div",50),E(92,"div",51),l()),e&2){let n;m(10),F(((n=t.habit())==null?null:n.name)||"Loading..."),m(2),C(t.habit()?12:-1),m(9),F(t.currentStreak()),m(8),F(t.bestStreak()),m(7),Z("color",t.getSuccessRateColor()),m(),Q("",t.monthlySuccessRate(),"%"),m(8),F(t.totalCompletions()),m(7),F(t.activeMonthDisplay()),m(9),de(Fr(13,qp)),m(3),de(t.emptyDaysPrefix()),m(2),de(t.calendarDays()),m(19),y("selectedIndex",0),m(5),y("data",t.chartDataConfiguration())("options",t.chartOptions()),m(),C(t.habit()&&t.isTodayConfigured()?91:-1)}},dependencies:[xe,we,_e,Ge,st,Kt,Di,fc,ir,uc,bt,Be,wt,_n,nr],encapsulation:2})},ar=class i{dialogRef=c(Gt);data=c(_i);moods=["\u{1F525}","\u26A1","\u{1F607}","\u{1F634}","\u{1F912}","\u{1F680}","\u{1F308}"];availableTags=["#Sick","#Travel","#HighEnergy","#WorkStress","#Weekend","#Social"];mood=this.data.log.mood||"";selectedTags=new Set(this.data.log.tags||[]);tempNote=this.data.isInFuture?this.data.log.planNote||"":this.data.log.reflectionNote||"";toggleTag(a){this.selectedTags.has(a)?this.selectedTags.delete(a):this.selectedTags.add(a)}save(){let a={mood:this.mood,tags:Array.from(this.selectedTags)};this.data.isInFuture?a.planNote=this.tempNote:a.reflectionNote=this.tempNote,this.dialogRef.close(a)}close(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-habit-log-note-dialog"]],decls:28,vars:5,consts:[[1,"p-24","df","fd-c","gap-4"],[1,"df","fd-r","jc-sb","ai-c","mb-8"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"fs-13","fw-600","px-8","py-4","br-8",2,"background","var(--surface-alt)","color","var(--text-secondary)"],[1,"df","fd-c","gap-2","mb-8"],[1,"fs-12","fw-700","text-secondary","uppercase","ls-1"],[1,"df","fd-r","gap-3","fs-24","py-8"],[1,"cursor-pointer","transition-all","hover-scale",3,"opacity","filter"],[1,"df","fd-c","gap-2","mb-12"],[1,"df","fd-r","flex-wrap","gap-2","pt-4"],[1,"px-10","py-4","br-12","fs-12","fw-600","transition-all","cursor-pointer",3,"background-color","color","border"],[1,"df","fd-c","gap-2"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","maxlength","300","rows","4",3,"ngModelChange","ngModel","placeholder"],[1,"df","fd-r","jc-e","gap-2","mt-20"],["mat-button","",3,"click"],["mat-flat-button","","color","primary",1,"br-12","px-20","text-bg",3,"click"],[1,"cursor-pointer","transition-all","hover-scale",3,"click"],[1,"px-10","py-4","br-12","fs-12","fw-600","transition-all","cursor-pointer",3,"click"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"h2",2),d(3),l(),r(4,"span",3),d(5),l()(),r(6,"div",4)(7,"span",5),d(8,"How do you feel?"),l(),r(9,"div",6),ce(10,iu,2,5,"span",7,Vt),l()(),r(12,"div",8)(13,"span",5),d(14,"Quick Tags"),l(),r(15,"div",9),ce(16,nu,2,7,"div",10,Vt),l()(),r(18,"div",11)(19,"span",5),d(20),l(),r(21,"mat-form-field",12)(22,"textarea",13),Bn("ngModelChange",function(o){return Vn(t.tempNote,o)||(t.tempNote=o),o}),l()()(),r(23,"div",14)(24,"button",15),u("click",function(){return t.close()}),d(25,"Cancel"),l(),r(26,"button",16),u("click",function(){return t.save()}),d(27,"Save Entry"),l()()()),e&2&&(m(3),F(t.data.habitName),m(2),F(t.data.dateStr),m(5),de(t.moods),m(6),de(t.availableTags),m(4),Q(" ",t.data.isInFuture?"Planning":"Reflection"," "),m(2),Ln("ngModel",t.tempNote),y("placeholder",t.data.isInFuture?"What is the plan for this day?":"How did it go today?"))},dependencies:[xe,_e,Ge,bt,Be,Xe,wt,Rt,_n,ct,Ot,Fo,gn,nr],styles:[".hover-scale[_ngcontent-%COMP%]{transition:transform .2s}.hover-scale[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.ls-1[_ngcontent-%COMP%]{letter-spacing:.5px}"]})};var gc=async()=>{let i=c(Et);return await je.users.count()===0?(i.navigate(["/onboarding"]),!1):!0};var Ba=class i{fb=c(Vi);router=c(Et);previewBase64=null;onboardForm=this.fb.group({name:["",[Ve.required,Ve.minLength(2)]],gender:["",Ve.required]});onFileSelected(a){let e=a.target.files[0];if(e){let t=new FileReader;t.onload=n=>{this.previewBase64=n.target.result},t.readAsDataURL(e)}}async onSubmit(){if(this.onboardForm.valid){let a=this.onboardForm.value.gender,e=this.previewBase64;e||(a==="female"?e="https://api.dicebear.com/7.x/lorelei/svg?seed=Bella":a==="male"?e="https://api.dicebear.com/7.x/lorelei/svg?seed=Milo":e="https://api.dicebear.com/7.x/lorelei/svg?seed=Lucky");let t={name:this.onboardForm.value.name,gender:a,avatar:e||void 0,createdAt:Date.now()};await je.users.add(t),this.router.navigate(["/dashboard"])}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-onboarding"]],decls:39,vars:5,consts:[["fileInput",""],[1,"df","fd-c","ai-c","jc-c","min-vh-100",2,"background-color","#f7f3f0","padding","24px"],[1,"bg-white","br-24","df","fd-c","gap-8","w-100",2,"max-width","400px","padding","32px","box-shadow","0 12px 32px rgba(0,0,0,0.05)","padding-bottom","48px"],[1,"df","fd-c","ai-c","text-center","gap-4","mb-24"],[1,"df","ai-c","jc-c","br-pill","text-white","mb-8",2,"background","linear-gradient(135deg, #10b981, #3b82f6)","width","80px","height","80px"],[2,"font-size","36px","width","36px","height","36px"],[1,"m-0","fs-28","fw-800","text-primary"],[1,"m-0","fs-16","fw-500","text-secondary"],[1,"df","fd-c","gap-4","w-100",3,"ngSubmit","formGroup"],[1,"df","fd-c","ai-c","gap-2","mb-16","position-relative","w-100"],[1,"cursor-pointer",3,"click"],[3,"name","avatar","size"],["type","file","accept","image/*","capture","user",2,"display","none",3,"change"],[1,"fs-12","fw-600","text-secondary","text-center"],[1,"df","fd-c","gap-2","w-100"],[1,"fs-13","fw-700","text-primary","uppercase","ls-1"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","formControlName","name","placeholder","E.g. Alex","required",""],["formControlName","gender","required",""],["value","male"],["value","female"],["value","other"],["mat-flat-button","","type","submit",1,"w-100","py-24","fw-800","br-12","mt-16","transition-all",2,"background-color","#10b981","color","white",3,"disabled"],[1,"fs-16"],[1,"ml-8",2,"font-size","20px"]],template:function(e,t){if(e&1){let n=X();r(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"mat-icon",5),d(5,"rocket_launch"),l()(),r(6,"h1",6),d(7,"Welcome to Trackify!"),l(),r(8,"p",7),d(9,"Let's set up your profile to get started."),l()(),r(10,"form",8),u("ngSubmit",function(){return t.onSubmit()}),r(11,"div",9)(12,"div",10),u("click",function(){j(n);let s=Ie(15);return W(s.click())}),E(13,"t-avatar",11),r(14,"input",12,0),u("change",function(s){return t.onFileSelected(s)}),l()(),r(16,"span",13),d(17,"Upload Photo (Optional)"),l()(),r(18,"div",14)(19,"span",15),d(20,"Your Name"),l(),r(21,"mat-form-field",16),E(22,"input",17),l()(),r(23,"div",14)(24,"span",15),d(25,"Gender"),l(),r(26,"mat-form-field",16)(27,"mat-select",18)(28,"mat-option",19),d(29,"Male"),l(),r(30,"mat-option",20),d(31,"Female"),l(),r(32,"mat-option",21),d(33,"Prefer not to say"),l()()()(),r(34,"button",22)(35,"span",23),d(36,"Get Started"),l(),r(37,"mat-icon",24),d(38,"arrow_forward"),l()()()()()}if(e&2){let n;m(10),y("formGroup",t.onboardForm),m(3),y("name",((n=t.onboardForm.get("name"))==null?null:n.value)||"")("avatar",t.previewBase64)("size",100),m(21),y("disabled",!t.onboardForm.valid)}},dependencies:[Bi,ri,ct,Ot,oi,Qt,xt,vi,Be,Xe,ci,li,dt,wt,Rt,_e,Ge,xe,we,mi],encapsulation:2})};var _c=[{path:"onboarding",component:Ba},{path:"",canActivate:[gc],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:$n},{path:"habits",component:Ta},{path:"habits/:id",component:Va},{path:"today",component:Fa},{path:"categories",component:La},{path:"categories/:id",loadComponent:()=>import("./chunk-GIOGJFIF.js").then(i=>i.CategoryDetails)},{path:"settings",component:Pa}]}];var or="Service workers are disabled or not supported by this browser",$i=class{serviceWorker;worker;registration;events;constructor(a,e){if(this.serviceWorker=a,!a)this.worker=this.events=this.registration=new Dt(t=>t.error(new ht(5601,!1)));else{let t=null,n=new w;this.worker=new Dt(x=>(t!==null&&x.next(t),n.subscribe(M=>x.next(M))));let o=()=>{let{controller:x}=a;x!==null&&(t=x,n.next(t))};a.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(mt(()=>a.getRegistration().then(x=>{if(!x)throw new ht(5601,!1);return x})));let s=new w;this.events=s.asObservable();let h=x=>{let{data:M}=x;M?.type&&s.next(M)};a.addEventListener("message",h),e?.get(pi,null,{optional:!0})?.onDestroy(()=>{a.removeEventListener("controllerchange",o),a.removeEventListener("message",h)})}}postMessage(a,e){return new Promise(t=>{this.worker.pipe(Pe(1)).subscribe(n=>{n.postMessage(H({action:a},e)),t()})})}postMessageWithOperation(a,e,t){let n=this.waitForOperationCompleted(t),o=this.postMessage(a,e);return Promise.all([o,n]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(a){let e;return typeof a=="string"?e=t=>t.type===a:e=t=>a.includes(t.type),this.events.pipe(re(e))}nextEventOfType(a){return this.eventsOfType(a).pipe(Pe(1))}waitForOperationCompleted(a){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(re(n=>n.nonce===a),Pe(1),ze(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},au=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new w;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Xt,this.notificationClicks=Xt,this.notificationCloses=Xt,this.pushSubscriptionChanges=Xt,this.subscription=Xt;return}this.messages=this.sw.eventsOfType("PUSH").pipe(ze(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(ze(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(ze(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(ze(n=>n.data)),this.pushManager=this.sw.registration.pipe(ze(n=>n.pushManager));let t=this.pushManager.pipe(mt(n=>n.getSubscription()));this.subscription=new Dt(n=>{let o=t.subscribe(n),s=this.subscriptionChanges.subscribe(n);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(or));let t={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(n.length));for(let s=0;s<n.length;s++)o[s]=n.charCodeAt(s);return t.applicationServerKey=o,new Promise((s,h)=>{this.pushManager.pipe(mt(p=>p.subscribe(t)),Pe(1)).subscribe({next:p=>{this.subscriptionChanges.next(p),s(p)},error:h})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(or));let e=t=>{if(t===null)throw new ht(5602,!1);return t.unsubscribe().then(n=>{if(!n)throw new ht(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,n)=>{this.subscription.pipe(Pe(1),mt(e)).subscribe({next:t,error:n})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(eo($i))};static \u0275prov=ne({token:i,factory:i.\u0275fac})}return i})(),ou=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Xt,this.unrecoverable=Xt;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(or));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new ht(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(eo($i))};static \u0275prov=ne({token:i,factory:i.\u0275fac})}return i})(),vc=new D("");function ru(){let i=c(En);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let a=c(vc),e=c(G),t=c(pi);e.runOutsideAngular(()=>{let n=navigator.serviceWorker,o=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",o),t.onDestroy(()=>{n.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let n,{registrationStrategy:o}=i;if(typeof o=="function")n=new Promise(s=>o().subscribe(()=>s()));else{let[s,...h]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=bc(+h[0]||0);break;case"registerWhenStable":n=Promise.race([t.whenStable(),bc(+h[0])]);break;default:throw new ht(5600,!1)}}n.then(()=>{t.destroyed||navigator.serviceWorker.register(a,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(s=>console.error(vr(5604,!1)))})})}function bc(i){return new Promise(a=>setTimeout(a,i))}function su(){let i=c(En),a=c(Y),e=!0;return new $i(e&&i.enabled!==!1?navigator.serviceWorker:void 0,a)}var En=class{enabled;updateViaCache;type;scope;registrationStrategy};function yc(i,a={}){return yr([au,ou,{provide:vc,useValue:i},{provide:En,useValue:a},{provide:$i,useFactory:su},Ir(ru)])}var xc={providers:[wr(),Yr(_c),yc("ngsw-worker.js",{enabled:!Nr(),registrationStrategy:"registerWhenStable:30000"}),xr(Gi),Kr(Zr())]};var Ha=["*"],lu=["content"],cu=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],du=["mat-drawer","mat-drawer-content","*"];function mu(i,a){if(i&1){let e=X();r(0,"div",1),u("click",function(){j(e);let n=f();return W(n._onBackdropClicked())}),l()}if(i&2){let e=f();I("mat-drawer-shown",e._isShowingBackdrop())}}function hu(i,a){i&1&&(r(0,"mat-drawer-content"),T(1,2),l())}var pu=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],uu=["mat-sidenav","mat-sidenav-content","*"];function fu(i,a){if(i&1){let e=X();r(0,"div",1),u("click",function(){j(e);let n=f();return W(n._onBackdropClicked())}),l()}if(i&2){let e=f();I("mat-drawer-shown",e._isShowingBackdrop())}}function gu(i,a){i&1&&(r(0,"mat-sidenav-content"),T(1,2),l())}var _u=`.mat-drawer-container {
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
`;var bu=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),lr=new D("MAT_DRAWER_CONTAINER"),Na=(()=>{class i extends ut{_platform=c(me);_changeDetectorRef=c(oe);_container=c(sr);constructor(){let e=c(R),t=c(zt),n=c(G);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Z("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),I("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[q([{provide:ut,useExisting:i}]),U],ngContentSelectors:Ha,decls:1,vars:0,template:function(t,n){t&1&&(ee(),T(0))},encapsulation:2,changeDetection:0})}return i})(),rr=(()=>{class i{_elementRef=c(R);_focusTrapFactory=c(Wn);_focusMonitor=c(pt);_platform=c(me);_ngZone=c(G);_renderer=c(ue);_interactivityChecker=c(jn);_doc=c(be);_container=c(lr,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ke(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ke(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ke(e))}_opened=S(!1);_openedVia=null;_animationStarted=new w;_animationEnd=new w;openedChange=new A(!0);_openedStream=this.openedChange.pipe(re(e=>e),ze(()=>{}));openedStart=this._animationStarted.pipe(re(()=>this.opened),Za(void 0));_closedStream=this.openedChange.pipe(re(e=>!e),ze(()=>{}));closedStart=this._animationStarted.pipe(re(()=>!this.opened),Za(void 0));_destroyed=new w;onPositionChanged=new A;_content;_modeChanged=new w;_injector=c(Y);_changeDetectorRef=c(oe);constructor(){this.openedChange.pipe(ie(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Ae(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Ce(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Pe(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&le(lu,5),t&2){let o;b(o=v())&&(n._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(N("align",null)("tabIndex",n.mode!=="side"?"-1":null),Z("visibility",!n._container&&!n.opened?"hidden":null),I("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ha,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(ee(),r(0,"div",1,0),T(2),l())},dependencies:[ut],encapsulation:2,changeDetection:0})}return i})(),sr=(()=>{class i{_dir=c(Te,{optional:!0});_element=c(R);_ngZone=c(G);_changeDetectorRef=c(oe);_animationDisabled=pe();_transitionsEnabled=!1;_allDrawers;_drawers=new hi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ke(e)}_autosize=c(bu);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ke(e)}_backdropOverride=null;backdropClick=new A;_start=null;_end=null;_left=null;_right=null;_destroyed=new w;_doCheckSubject=new w;_contentMargins={left:null,right:null};_contentMarginChanges=new w;get scrollable(){return this._userContent||this._content}_injector=c(Y);constructor(){let e=c(me),t=c(lt);this._dir?.change.pipe(ie(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(ie(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Me(this._allDrawers),ie(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Me(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(On(10),ie(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ie(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ie(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ie(this._drawers.changes)).subscribe(()=>{Ce({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ie(Fe(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,Na,5)(o,rr,5),t&2){let s;b(s=v())&&(n._content=s.first),b(s=v())&&(n._allDrawers=s)}},viewQuery:function(t,n){if(t&1&&le(Na,5),t&2){let o;b(o=v())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&I("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[q([{provide:lr,useExisting:i}])],ngContentSelectors:du,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(ee(cu),k(0,mu,1,2,"div",0),T(1),T(2,1),k(3,hu,2,0,"mat-drawer-content")),t&2&&(C(n.hasBackdrop?0:-1),m(3),C(n._content?-1:3))},dependencies:[Na],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return i})(),za=(()=>{class i extends Na{static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[q([{provide:ut,useExisting:i}]),U],ngContentSelectors:Ha,decls:1,vars:0,template:function(t,n){t&1&&(ee(),T(0))},encapsulation:2,changeDetection:0})}return i})(),cr=(()=>{class i extends rr{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ke(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=it(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=it(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(N("tabIndex",n.mode!=="side"?"-1":null)("align",null),Z("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),I("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[q([{provide:rr,useExisting:i}]),U],ngContentSelectors:Ha,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(ee(),r(0,"div",1,0),T(2),l())},dependencies:[ut],encapsulation:2,changeDetection:0})}return i})(),wc=(()=>{class i extends sr{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,za,5)(o,cr,5),t&2){let s;b(s=v())&&(n._content=s.first),b(s=v())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&I("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[q([{provide:lr,useExisting:i},{provide:sr,useExisting:i}]),U],ngContentSelectors:uu,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(ee(pu),k(0,fu,1,2,"div",0),T(1),T(2,1),k(3,gu,2,0,"mat-sidenav-content")),t&2&&(C(n.hasBackdrop?0:-1),m(3),C(n._content?-1:3))},dependencies:[za],styles:[_u],encapsulation:2,changeDetection:0})}return i})(),kc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[At,K,At]})}return i})();var Yi=class i{isDarkMode=S(!1);constructor(){this.initializeTheme()}initializeTheme(){localStorage.getItem("theme")==="dark"?this.setDarkMode(!0):this.setDarkMode(!1)}setDarkMode(a){this.isDarkMode.set(a),a?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}toggleTheme(){this.setDarkMode(!this.isDarkMode())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"})};var yu=[[["t-header"]],"*"],xu=["t-header","*"];function wu(i,a){i&1&&(r(0,"div",17)(1,"div",18)(2,"mat-icon"),d(3,"home"),l()(),r(4,"div",19)(5,"mat-icon"),d(6,"favorite"),l()(),r(7,"div",20)(8,"div",21)(9,"mat-icon"),d(10,"add"),l()()(),r(11,"div",22)(12,"mat-icon"),d(13,"category"),l()(),r(14,"div",23)(15,"mat-icon"),d(16,"person"),l()()())}var ja=class i{title=S("Trackify");isSidenavOpened=S(!0);isMobile=S(!1);activeUser=S(null);themeService=c(Yi);async ngOnInit(){this.checkScreenSize();let a=await je.users.orderBy("id").first();a&&this.activeUser.set(a)}onResize(){this.checkScreenSize()}checkScreenSize(){let a=window.innerWidth<=768;this.isMobile.set(a),a?this.isSidenavOpened.set(!1):this.isSidenavOpened.set(!0)}toggleSidenav(){this.isSidenavOpened.update(a=>!a)}closeOnMobile(){this.isMobile()&&this.isSidenavOpened.set(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-sidenav"]],hostBindings:function(e,t){e&1&&u("resize",function(){return t.onResize()},Dr)},ngContentSelectors:xu,decls:41,vars:6,consts:[[2,"height","100vh"],[2,"width","260px","box-shadow","2px 0 6px rgb(0 0 0 / 10%)",3,"opened","mode","autoFocus"],[1,"df","fd-c","h-100",2,"height","100%"],[1,"p-16","df","ai-c","gap-8",2,"height","64px","box-sizing","border-box"],["color","primary",1,"fs-24"],[1,"fs-20",2,"font-weight","500"],[2,"flex","1"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/today","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/habits","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/categories","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/settings","routerLinkActive","active",3,"click"],[2,"background-color","var(--background-alt)"],[1,"app-router-wrapper",2,"overflow-y","auto"],[2,"max-width","1200px","margin","0 auto","padding-bottom","16px"],[1,"mobile-bottom-nav"],["routerLink","/dashboard","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/today","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/habits",1,"nav-center-item"],[1,"fab-btn"],["routerLink","/categories","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/settings","routerLinkActive","active-tab",1,"nav-item"]],template:function(e,t){e&1&&(ee(yu),r(0,"mat-sidenav-container",0)(1,"mat-sidenav",1)(2,"div",2)(3,"div",3)(4,"mat-icon",4),d(5,"track_changes"),l(),r(6,"span",5),d(7,"Trackify"),l()(),r(8,"mat-nav-list",6)(9,"a",7),u("click",function(){return t.closeOnMobile()}),r(10,"mat-icon",8),d(11,"dashboard"),l(),r(12,"span",9),d(13,"Dashboard"),l()(),r(14,"a",10),u("click",function(){return t.closeOnMobile()}),r(15,"mat-icon",8),d(16,"today"),l(),r(17,"span",9),d(18,"Today"),l()(),r(19,"a",11),u("click",function(){return t.closeOnMobile()}),r(20,"mat-icon",8),d(21,"list"),l(),r(22,"span",9),d(23,"Habits"),l()(),r(24,"a",12),u("click",function(){return t.closeOnMobile()}),r(25,"mat-icon",8),d(26,"category"),l(),r(27,"span",9),d(28,"Categories"),l()()(),r(29,"mat-nav-list")(30,"a",13),u("click",function(){return t.closeOnMobile()}),r(31,"mat-icon",8),d(32,"settings"),l(),r(33,"span",9),d(34,"Settings"),l()()()()(),r(35,"mat-sidenav-content",14),T(36),r(37,"div",15)(38,"div",16),T(39,1),l()(),k(40,wu,17,0,"div",17),l()()),e&2&&(m(),y("opened",t.isSidenavOpened())("mode",t.isMobile()?"over":"side")("autoFocus",!1),m(36),Z("height",t.isMobile()?"calc(100vh - 64px - 80px)":"calc(100vh - 64px)"),m(3),C(t.isMobile()?40:-1))},dependencies:[Mt,Kt,Nn,$r,kc,cr,wc,za,xe,we,Qi,Ql,Aa,Mn,Sn,_e],styles:[".active[_ngcontent-%COMP%]{background-color:var(--primary-container, rgba(99, 102, 241, .1))!important;color:var(--on-primary-container, #6366f1)!important}.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary, #6366f1)!important}@media(max-width:600px){.hide-on-mobile[_ngcontent-%COMP%]{display:none}}.mobile-bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;height:80px;background:#ffffffd9;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:space-around;padding:0 10px;border-top:1px solid rgba(0,0,0,.05);z-index:1000;box-shadow:0 -4px 20px #0000000d}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;height:100%;cursor:pointer;color:#94a3b8;transition:all .3s cubic-bezier(.4,0,.2,1)}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;width:26px;height:26px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]{color:#6366f1}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:#6366f11a;padding:8px;border-radius:16px;box-sizing:content-box}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;position:relative;top:-20px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]{width:60px;height:60px;background:#6366f1;border-radius:30px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px #6366f14d;color:#fff;transition:all .3s ease}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]:active{transform:scale(.9)}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]{background:#0f172ad9;border-top-color:#ffffff0d}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{color:#64748b}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]{color:#818cf8}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:#818cf826}"]})};var ku=["*",[["mat-toolbar-row"]]],Cu=["*","mat-toolbar-row"],Du=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Cc=(()=>{class i{_elementRef=c(R);_platform=c(me);_document=c(be);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,Du,5),t&2){let s;b(s=v())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(Ye(n.color?"mat-"+n.color:""),I("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Cu,decls:2,vars:0,template:function(t,n){t&1&&(ee(ku),T(0),T(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return i})();var Dc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=V({imports:[K]})}return i})();function Mu(i,a){if(i&1){let e=X();r(0,"button",6),u("click",function(){j(e);let n=f();return W(n.toggle.emit())}),r(1,"mat-icon"),d(2,"menu"),l()()}}function Eu(i,a){if(i&1){let e=X();r(0,"div",5)(1,"button",7),u("click",function(){j(e);let n=f();return W(n.themeService.toggleTheme())}),r(2,"mat-icon"),d(3),l()(),r(4,"span",8),d(5),l(),E(6,"t-avatar",9),l()}if(i&2){let e=f();m(3),F(e.themeService.isDarkMode()?"light_mode":"dark_mode"),m(2),F(e.activeUser.name),m(),y("name",e.activeUser.name||"")("avatar",e.activeUser.avatar)("size",36)}}var Wa=class i{isMobile=!1;title="Trackify";activeUser=null;toggle=new A;themeService=c(Yi);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-header"]],inputs:{isMobile:"isMobile",title:"title",activeUser:"activeUser"},outputs:{toggle:"toggle"},decls:8,vars:3,consts:[[1,"df","fx","jc-s","toolbar",2,"box-shadow","0 2px 6px rgb(0 0 0 / 15%)","z-index","10","position","relative"],[1,"df","ai-c","gap-2"],["mat-icon-button","","aria-label","Toggle sidenav"],["color","primary",2,"font-size","28px","width","28px","height","28px","margin-right","8px"],[1,"fs-20",2,"font-weight","400"],[1,"df","fd-r","ai-c","gap-2","px-8"],["mat-icon-button","","aria-label","Toggle sidenav",3,"click"],["mat-icon-button","","aria-label","Toggle theme",3,"click"],[1,"fs-14","fw-600","hide-on-mobile"],[3,"name","avatar","size"]],template:function(e,t){e&1&&(r(0,"mat-toolbar",0)(1,"div",1),k(2,Mu,3,0,"button",2),r(3,"mat-icon",3),d(4,"track_changes"),l(),r(5,"span",4),d(6),l()(),k(7,Eu,7,5,"div",5),l()),e&2&&(m(2),C(t.isMobile?-1:2),m(4),F(t.title),m(),C(t.activeUser?7:-1))},dependencies:[Mt,Dc,Cc,_e,st,xe,we,mi],styles:[".toolbar[_ngcontent-%COMP%]{background-color:var(--background-default)}"]})};var Ga=class i{notificationService=c(Ui);async ngOnInit(){setInterval(()=>{this.notificationService.checkReminders()},6e4),this.notificationService.checkReminders()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["app-root"]],decls:4,vars:3,consts:[["s",""],[3,"toggle","isMobile","title","activeUser"]],template:function(e,t){if(e&1){let n=X();r(0,"t-sidenav",null,0)(2,"t-header",1),u("toggle",function(){j(n);let s=Ie(1);return W(s.toggleSidenav())}),l(),E(3,"router-outlet"),l()}if(e&2){let n=Ie(1);m(2),y("isMobile",n.isMobile())("title",n.title())("activeUser",n.activeUser())}},dependencies:[Qr,ja,Wa],encapsulation:2})};Ur(Ga,xc).catch(i=>console.error(i));
