import{$ as Br,$a as tt,$b as pe,A as Fr,Aa as Mt,Ab as ns,Ac as he,B as Dt,Ba as ae,Bb as as,Bc as Oe,C as Pr,Ca as oe,Cb as os,Cc as Ie,D as xe,Da as b,Db as Se,Dc as xs,E as se,Ea as r,Eb as rs,Ec as Eo,F as z,Fa as l,Fb as ss,Fc as Et,G as E,Ga as D,Gb as ls,Gc as ot,H as _o,Ha as Be,Hb as Ht,Hc as Ue,I as c,Ia as Ze,Ib as jn,Ic as si,J as Lr,Ja as ni,Jb as cs,Jc as qe,K as Vr,Ka as G,Kb as ds,Kc as ue,L as Nn,La as Ke,Lb as ai,M as P,Ma as u,Mb as ms,N as L,Na as zn,Nb as hs,O as Bt,Oa as f,Ob as oi,P as bo,Pa as J,Pb as Ye,Q as Z,Qa as R,Qb as at,R as we,Ra as De,Rb as jt,S as A,Sa as le,Sb as ri,T as Y,Ta as k,Tb as ze,U as Nr,Ua as C,Ub as ps,V as x,Va as Qr,Vb as Ee,W as bi,Wa as $r,Wb as X,X as ye,Xa as xo,Xb as _e,Y as ce,Ya as Me,Yb as be,Z as F,Za as K,Zb as ln,_ as vi,_a as M,_b as Vi,a as Q,aa as zr,ab as d,ac as dt,b as Fe,ba as Hr,bb as O,bc as cn,c as Ce,ca as m,cb as $,cc as mt,d as Nt,da as Ae,db as Hn,dc as us,e as T,ea as et,eb as xi,ec as Co,f as ho,fa as qt,fb as wi,fc as fs,g as Fi,ga as ve,gb as ki,gc as gs,h as Ir,ha as ge,hb as W,hc as Gn,i as Pi,ia as gt,ib as Yr,ic as Wn,j as $e,ja as vo,jb as Xr,jc as Un,k as Li,ka as g,kb as Zr,kc as qn,l as Ar,la as H,lb as wo,lc as Qn,m as Or,ma as w,mb as zt,mc as $n,n as je,na as jr,nb as re,nc as Te,o as ii,oa as q,ob as St,oc as _s,p as me,pa as We,pb as Kr,pc as Yn,q as po,qa as Gr,qb as it,qc as de,r as Vn,ra as Bn,rb as sn,rc as bs,s as Ge,sa as Wr,sb as Jr,sc as Do,t as uo,ta as Ur,tb as es,tc as vs,u as fo,ua as yi,ub as ie,uc as Ni,v as go,va as qr,vb as I,vc as Xn,w as Rr,wa as N,wb as nt,wc as Bi,x as Pe,xa as v,xb as ts,xc as Mo,y as Ct,ya as y,yb as is,yc as So,z as te,za as yo,zb as ko,zc as ys}from"./chunk-SVGAFKNC.js";var Zn=class i{percentage=it.required();chartData=re(()=>{let a=this.percentage();return{datasets:[{data:[a,100-a],backgroundColor:["#10b981","rgba(255, 255, 255, 0.1)"],borderWidth:0,circumference:360,rotation:0,cutout:"85%",borderRadius:a>0?10:0}]}});chartOptions={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},cutout:"85%"};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["app-progress-chart"]],inputs:{percentage:[1,"percentage"]},decls:8,vars:4,consts:[[1,"progress-container"],[1,"chart-wrapper"],["baseChart","",3,"data","options","type"],[1,"df","fd-c","ai-c","position-absolute","chart-labels"],[1,"fs-22","fw-800","label-value"],[1,"fs-10","fw-600","uppercase","ls-1","label-text"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1),D(2,"canvas",2),l(),r(3,"div",3)(4,"span",4),d(5),l(),r(6,"span",5),d(7,"Today"),l()()()),e&2&&(m(2),b("data",t.chartData())("options",t.chartOptions)("type","doughnut"),m(3),$("",t.percentage(),"%"))},dependencies:[oi],styles:[".progress-container[_ngcontent-%COMP%]{position:relative;width:100px;height:100px;min-width:100px;display:flex;align-items:center;justify-content:center}.chart-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.chart-labels[_ngcontent-%COMP%]{pointer-events:none;color:#fff}.label-text[_ngcontent-%COMP%]{opacity:.6}.df[_ngcontent-%COMP%]{display:flex}.fd-c[_ngcontent-%COMP%]{flex-direction:column}.ai-c[_ngcontent-%COMP%]{align-items:center}.position-absolute[_ngcontent-%COMP%]{position:absolute}.fs-22[_ngcontent-%COMP%]{font-size:22px}.fw-800[_ngcontent-%COMP%]{font-weight:800}.fs-10[_ngcontent-%COMP%]{font-size:10px}.fw-600[_ngcontent-%COMP%]{font-weight:600}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.ls-1[_ngcontent-%COMP%]{letter-spacing:1px}"]})};var Ci=(n=>(n[n.Daily=0]="Daily",n[n.Weekly=1]="Weekly",n[n.Monthly=2]="Monthly",n[n.Custom=3]="Custom",n))(Ci||{});var Qc=(i,a)=>a.dateLabel,$c=(i,a)=>a.habitId,Yc=(i,a)=>a.dateStr;function Xc(i,a){i&1&&(r(0,"div",58)(1,"div",59)(2,"div",3)(3,"span",60),d(4,"First Step: Create a Category"),l(),r(5,"span",61),d(6,"Categories like 'Health' or 'Work' help you stay organized."),l()(),r(7,"button",62),d(8," Setup Categories "),l()()())}function Zc(i,a){if(i&1&&(r(0,"div",1)(1,"div",53)(2,"div",54)(3,"mat-icon",55),d(4,"celebration"),l()(),r(5,"div",3)(6,"h2",56),d(7),l(),r(8,"p",57),d(9,"Ready to build some life-changing habits?"),l()()(),v(10,Xc,9,0,"div",58),l()),i&2){let e,t=f();m(7),$("Welcome to Trackify, ",(e=t.activeUser())==null?null:e.name,"!"),m(3),y(t.stats().noCategories?10:-1)}}function Kc(i,a){if(i&1){let e=G();r(0,"button",63),u("click",function(){P(e);let n=f();return L(n.quickLog(n.stats().insightHabitId))}),r(1,"mat-icon",64),d(2,"check_circle"),l(),r(3,"span",65),d(4,"Quick Log"),l()()}}function Jc(i,a){if(i&1&&(r(0,"div",40)(1,"span",66),d(2),l()()),i&2){let e=a.$implicit;m(2),O(e.dateLabel)}}function ed(i,a){i&1&&(r(0,"div",70)(1,"mat-icon",73),d(2,"check"),l()())}function td(i,a){i&1&&(r(0,"div",71)(1,"mat-icon",74),d(2,"close"),l()())}function id(i,a){i&1&&D(0,"div",72)}function nd(i,a){if(i&1){let e=G();r(0,"div",40)(1,"div",69),u("click",function(){let n=P(e).$implicit,o=f().$implicit,s=f();return L(s.toggleGridHabit(o.habitId,n.dateStr))}),v(2,ed,3,0,"div",70)(3,td,3,0,"div",71)(4,id,1,0,"div",72),l()()}if(i&2){let e=a.$implicit;m(2),y(e.status==="completed"?2:e.status==="missed"?3:4)}}function ad(i,a){if(i&1&&(r(0,"div",41)(1,"div",67)(2,"span",68),d(3),l()(),ae(4,nd,5,1,"div",40,Yc),l()),i&2){let e=a.$implicit;m(3),O(e.name),m(),oe(e.days)}}function od(i,a){if(i&1&&(r(0,"span",51),d(1),l()),i&2){let e=f();m(),$(" ",e.stats().missedHabits.join(", ")," ")}}function rd(i,a){i&1&&(r(0,"span",52),d(1,"Perfect Day in progress!"),l())}var Kn=class i{habitService=c(at);habitLogService=c(jt);categoryService=c(ri);stats=x({todayCompletedCount:0,todayTotalCount:0,todayPercentage:0,platformStreak:0,platformBestStreak:0,completionRate7Days:0,totalHabits:0,topHabitName:"No Data",topHabitScore:0,missedHabits:[],insightMessage:"Loading insights...",showWelcome:!1,noCategories:!1});weeklyGraph=x([]);weeklyMatrix=x([]);activeUser=x(null);chartDataConfiguration=re(()=>{let a=this.weeklyGraph();return{labels:a.map(e=>e.dateLabel),datasets:[{data:a.map(e=>e.count),label:"Completions",backgroundColor:"#3b82f6",borderRadius:6,barPercentage:.6}]}});chartOptions=re(()=>{let a=Math.max(...this.weeklyGraph().map(e=>e.count),5);return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:a+1,ticks:{stepSize:1,precision:0}}}}});async ngOnInit(){let a=await Ye.users.orderBy("id").first();a&&this.activeUser.set(a),await this.calculateMetrics()}getLocalFormattedDate(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}async calculateMetrics(){let a=await this.habitService.loadHabits(),e=await this.categoryService.getCategories(),t=await this.habitLogService.getAllLogs(),n=new Date,o=new Date(n).setHours(0,0,0,0),s=864e5,h=this.getLocalFormattedDate(n),p=n.getDay(),_={0:6,1:0,2:1,3:2,4:3,5:4,6:5},S=_[p],U=a.filter(j=>j.frequency===0?!0:j.days&&Array.isArray(j.days)&&j.days.length>0?j.days.includes(S):!1),V=t.filter(j=>j.dateStr===h),ee=new Set(V.map(j=>j.habitId)),fe=0,ne=[];for(let j of U)ee.has(j.id)?fe++:ne.push(j.name);let kt=U.length,ti=kt===0?0:Math.round(fe/kt*100),Ve=Array.from(new Set(t.map(j=>j.dateStr))).sort().reverse().map(j=>{let[ke,Ne,Lt]=j.split("-");return Math.floor(new Date(Number(ke),Number(Ne)-1,Number(Lt)).getTime()/s)}),Fn=0,so=0;if(Ve.length>0){let j=1;Fn=1;for(let Ne=0;Ne<Ve.length-1;Ne++)Ve[Ne]-Ve[Ne+1]===1?(j++,j>Fn&&(Fn=j)):j=1;let ke=Math.floor(o/s);if(Ve[0]===ke||Ve[0]===ke-1){so=1;for(let Ne=0;Ne<Ve.length-1&&Ve[Ne]-Ve[Ne+1]===1;Ne++)so++}}let Ri=[],Mr=new Map,Sr=0;for(let j=6;j>=0;j--){let ke=new Date(o-j*s),Ne=this.getLocalFormattedDate(ke),Lt=ke.toLocaleDateString("en-US",{weekday:"short"});Ri.push({dateLabel:Lt,count:0,percentage:0}),Mr.set(Ne,6-j)}let zc=Ri.map((j,ke)=>this.getLocalFormattedDate(new Date(o-(6-ke)*s))),Hc=a.map(j=>({habitId:j.id,name:j.name,days:zc.map(ke=>{let Lt=!!t.find(Vt=>Vt.habitId===j.id&&Vt.dateStr===ke),Ln=Lt?"completed":"pending";if(!Lt&&ke<h){let Vt=new Date(ke),Uc=_[Vt.getDay()];(j.frequency===0||j.days&&j.days.includes(Uc))&&(Ln="missed")}return{dateStr:ke,status:Ln}})}));this.weeklyMatrix.set(Hc);let jc=this.getLocalFormattedDate(new Date(o-6*s)),lo={};for(let j of t)if(lo[j.habitId]=(lo[j.habitId]||0)+1,j.dateStr>=jc){Sr++;let ke=Mr.get(j.dateStr);ke!==void 0&&Ri[ke].count++}let Gc=Math.max(...Ri.map(j=>j.count),1);for(let j of Ri)j.percentage=j.count/Gc*100;let Er=a.length*7,Wc=Er===0?0:Math.round(Sr/Er*100),Tr="No Data",co=0;for(let[j,ke]of Object.entries(lo))if(ke>co){co=ke;let Ne=a.find(Lt=>Lt.id===Number(j));Ne&&(Tr=Ne.name)}let mo="You're doing great! Keep up the consistency.",Pn;for(let j of a){let ke=t.filter(Vt=>Vt.habitId===j.id),Ne=this.getLocalFormattedDate(new Date(o-s)),Lt=ke.some(Vt=>Vt.dateStr===Ne),Ln=ke.some(Vt=>Vt.dateStr===h);if(Lt&&!Ln){mo=`Your streak for "${j.name}" is at risk! Log it now to keep it alive.`,Pn=j.id;break}}!Pn&&ti>0&&ti<100&&(mo=`You're just ${kt-fe} habit away from a perfect day!`,Pn=a.find(j=>!ee.has(j.id))?.id),this.weeklyGraph.set(Ri),this.stats.set({todayCompletedCount:fe,todayTotalCount:kt,todayPercentage:ti,platformStreak:so,platformBestStreak:Fn,completionRate7Days:Wc,totalHabits:a.length,topHabitName:Tr,topHabitScore:co,missedHabits:ne,insightMessage:mo,insightHabitId:Pn,showWelcome:a.length===0,noCategories:e.length===0})}async toggleGridHabit(a,e){await this.habitLogService.toggleCompletion(a,e),await this.calculateMetrics()}async quickLog(a){let e=this.getLocalFormattedDate(new Date);await this.habitLogService.markHabitAsCompleted(a,e),await this.calculateMetrics()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-dashboard"]],decls:89,vars:13,consts:[[1,"p-24","df","fd-c","gap-6","font-inter",2,"background-color","var(--background-default)","min-height","100vh"],[1,"w-100","br-24","p-24","mb-16","animate-fade-in",2,"background","linear-gradient(135deg, #10b981, #059669)","color","#fff","box-shadow","0 10px 20px rgba(16, 185, 129, 0.2)"],[1,"df","fd-r","jc-sb","ai-c"],[1,"df","fd-c","gap-1"],[1,"m-0","fs-28","fw-700","text-primary"],[1,"m-0","fs-14","fw-500",2,"color","#6b7280"],[1,"w-100","br-24","p-24","position-relative","overflow-hidden",2,"background","linear-gradient(135deg, #1e293b, #0f172a)","color","#fff","box-shadow","0 10px 25px -5px rgba(15, 23, 42, 0.3)","box-sizing","border-box"],[1,"df","fd-r","gap-8","ai-c","position-relative","z-1","flex-wrap"],[3,"percentage"],[1,"df","fd-c","gap-3","flex-1",2,"min-width","200px"],[1,"df","ai-c","gap-2"],[1,"fs-18",2,"color","#f59e0b"],[1,"fs-12","fw-700","uppercase","ls-1",2,"color","#f59e0b"],[1,"m-0","fs-16","fw-600",2,"line-height","1.4","color","#f8fafc"],[1,"df","ai-c","jc-c","gap-2","mt-2","px-16","py-8","br-12","border-none","cursor-pointer","hover-lift",2,"background-color","#f97316","color","#fff","width","fit-content","transition","transform 0.2s"],[1,"df","fd-r","gap-4","w-100"],[1,"df","fd-c","gap-4","p-20","br-16","bg-white","flex-1",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","jc-sb","ai-c","gap-2"],[1,"fs-14","fw-700","uppercase","ls-1",2,"color","#94a3b8"],[1,"br-pill","px-8","py-4","df","ai-c","gap-1",2,"background-color","#fff7ed","color","#ea580c"],[2,"font-size","14px","width","14px","height","14px"],[1,"fs-11","fw-700"],[1,"df","fd-r","gap-2","ai-fe"],[1,"fs-28","fw-800",2,"line-height","1"],[1,"fs-13","fw-500","mb-1"],[1,"fs-14","fw-700","uppercase","ls-1"],[2,"color","#10b981","font-size","18px"],[1,"bg-white","br-16","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box","margin-bottom","8px"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4","mb-16"],[1,"m-0","fs-18","fw-700",2,"color","var(--text-primary)"],[1,"fs-12","fw-600","text-secondary","ls-1","ml-auto"],[1,"w-100","position-relative",2,"height","180px"],["baseChart","","type","bar",3,"data","options"],[1,"bg-white","p-24","br-16","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4","mb-20"],[1,"m-0","fs-18","fw-700",2,"color","#1e293b"],[1,"overflow-x-auto","w-100","hide-scrollbar"],[1,"df","fd-c","gap-4",2,"min-width","450px"],[1,"df","fd-r","ai-c","py-4",2,"border-bottom","2px solid #f1f5f9"],[2,"flex","2","padding-right","12px"],[1,"df","jc-c",2,"flex","1"],[1,"df","fd-r","ai-c","py-12",2,"border-bottom","1px solid #f8fafc"],[1,"df","fd-r","flex-wrap","gap-4","w-100","pb-24"],[1,"bg-white","br-16","p-20","flex-1","df","fd-r","ai-c","gap-4",2,"min-width","250px","box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","ai-c","jc-c","br-pill","text-white",2,"width","44px","height","44px","background-color","#f59e0b","min-width","44px"],[2,"font-size","20px","height","20px","width","20px"],[1,"df","fd-c","overflow-hidden"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-15","fw-700","truncate",2,"color","#1e293b"],[1,"ml-auto","fs-16","fw-800",2,"color","#f59e0b"],[1,"df","ai-c","jc-c","br-pill","text-white",2,"width","44px","height","44px","background-color","#ef4444","min-width","44px"],[1,"fs-14","fw-600","truncate",2,"color","#1e293b"],[1,"fs-14","fw-600",2,"color","#10b981"],[1,"df","fd-r","ai-c","gap-4"],[1,"df","ai-c","jc-c","br-pill","bg-white",2,"width","56px","height","56px","min-width","56px"],[2,"color","#10b981","font-size","32px","width","32px","height","32px"],[1,"m-0","fs-22","fw-800"],[1,"m-0","fs-14","fw-500",2,"opacity","0.9"],[1,"mt-20","p-16","br-16",2,"background-color","rgba(255,255,255,0.15)","border","1px solid rgba(255,255,255,0.2)"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4"],[1,"fs-15","fw-700"],[1,"fs-13","fw-500",2,"opacity","0.8"],["routerLink","/categories","mat-flat-button","",1,"br-12","fw-700","px-20",2,"background-color","#fff","color","#059669"],[1,"df","ai-c","jc-c","gap-2","mt-2","px-16","py-8","br-12","border-none","cursor-pointer","hover-lift",2,"background-color","#f97316","color","#fff","width","fit-content","transition","transform 0.2s",3,"click"],[2,"font-size","18px","width","18px","height","18px"],[1,"fs-13","fw-700"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1",2,"opacity","0.6"],[1,"df","fd-r","ai-c","gap-3","overflow-hidden",2,"flex","2","padding-right","12px"],[1,"fs-13","fw-600","truncate","text-primary"],[1,"df","ai-c","jc-c","cursor-pointer","transition-all",2,"width","28px","height","28px","border-radius","50%","border","2px solid transparent",3,"click"],[1,"df","ai-c","jc-c","br-pill","bg-success",2,"width","20px","height","20px","background-color","#10b981"],[1,"df","ai-c","jc-c","br-pill",2,"width","20px","height","20px","background-color","#fee2e2"],[1,"br-pill",2,"width","16px","height","16px","border","2px solid #e2e8f0","background-color","#fff"],[2,"font-size","14px","width","14px","height","14px","color","#fff"],[2,"font-size","14px","width","14px","height","14px","color","#ef4444"]],template:function(e,t){e&1&&(r(0,"div",0),v(1,Zc,11,2,"div",1),r(2,"div",2)(3,"div",3)(4,"h1",4),d(5),l(),r(6,"p",5),d(7,"See your progress and stay motivated"),l()()(),r(8,"div",6)(9,"div",7),D(10,"app-progress-chart",8),r(11,"div",9)(12,"div",10)(13,"mat-icon",11),d(14,"auto_awesome"),l(),r(15,"span",12),d(16,"Smart Insight"),l()(),r(17,"p",13),d(18),l(),v(19,Kc,5,0,"button",14),l()()(),r(20,"div",15)(21,"div",16)(22,"div",17)(23,"span",18),d(24,"Streak"),l(),r(25,"div",19)(26,"mat-icon",20),d(27,"local_fire_department"),l(),r(28,"span",21),d(29),l()()(),r(30,"div",22)(31,"span",23),d(32),l(),r(33,"span",24),d(34,"days total"),l()()(),r(35,"div",16)(36,"div",17)(37,"span",25),d(38,"Consistency"),l(),r(39,"mat-icon",26),d(40,"insights"),l()(),r(41,"div",22)(42,"span",23),d(43),l(),r(44,"span",24),d(45,"7 day avg"),l()()()(),r(46,"div",27)(47,"div",28)(48,"h2",29),d(49,"Activity Volume"),l(),r(50,"span",30),d(51,"PAST 7 DAYS"),l()(),r(52,"div",31),D(53,"canvas",32),l()(),r(54,"div",33)(55,"div",34)(56,"h2",35),d(57,"Weekly Tracker"),l(),r(58,"span",30),d(59,"PAST 7 DAYS"),l()(),r(60,"div",36)(61,"div",37)(62,"div",38),D(63,"div",39),ae(64,Jc,3,1,"div",40,Qc),l(),ae(66,ad,6,1,"div",41,$c),l()()(),r(68,"div",42)(69,"div",43)(70,"div",44)(71,"mat-icon",45),d(72,"military_tech"),l()(),r(73,"div",46)(74,"span",47),d(75,"Record Habit"),l(),r(76,"span",48),d(77),l()(),r(78,"span",49),d(79),l()(),r(80,"div",43)(81,"div",50)(82,"mat-icon",45),d(83,"error_outline"),l()(),r(84,"div",46)(85,"span",47),d(86,"Pending Today"),l(),v(87,od,2,1,"span",51)(88,rd,2,0,"span",52),l()()()()),e&2&&(m(),y(t.stats().showWelcome?1:-1),m(4),$(" ",t.activeUser()?"Hello, "+t.activeUser().name+"!":"Your Dashboard"," "),m(5),b("percentage",t.stats().todayPercentage),m(8),$(" ",t.stats().insightMessage," "),m(),y(t.stats().insightHabitId?19:-1),m(10),$("",t.stats().platformStreak,"d"),m(3),O(t.stats().platformStreak),m(11),$("",t.stats().completionRate7Days,"%"),m(10),b("data",t.chartDataConfiguration())("options",t.chartOptions()),m(11),oe(t.weeklyGraph()),m(2),oe(t.weeklyMatrix()),m(11),O(t.stats().topHabitName),m(2),$("",t.stats().topHabitScore,"x"),m(8),y(t.stats().missedHabits.length>0?87:88))},dependencies:[be,_e,ai,jn,oi,Zn],encapsulation:2})};var ld=20,Qt=(()=>{class i{_ngZone=c(Y);_platform=c(pe);_renderer=c(qt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new T;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ld){return this._platform.isBrowser?new Nt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(po(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Pi()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(me(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let n=cn(t),o=e.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Tt=(()=>{class i{elementRef=c(F);scrollDispatcher=c(Qt);ngZone=c(Y);dir=c(Ee,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new T;_renderer=c(ve);_cleanupScroll;_elementScrolled=new T;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=n?e.end:e.start),e.right==null&&(e.right=n?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&Bi()!=Ni.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Bi()==Ni.INVERTED?e.left=e.right:Bi()==Ni.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Xn()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",n="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?n:t:e=="end"&&(e=s?t:n),s&&Bi()==Ni.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Bi()==Ni.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),cd=20,_t=(()=>{class i{_platform=c(pe);_listeners;_viewportSize=null;_change=new T;_document=c(we);constructor(){let e=c(Y),t=c(qt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[t.listen("window","resize",n),t.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,h=-o.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0;return{top:s,left:h}}change(e=cd){return e>0?this._change.pipe(po(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({})}return i})(),To=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[X,Gt,X,Gt]})}return i})();var mn=class{_attachedHost=null;attach(a){return this._attachedHost=a,a.attach(this)}detach(){let a=this._attachedHost;a!=null&&(this._attachedHost=null,a.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(a){this._attachedHost=a}},It=class extends mn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(a,e,t,n,o){super(),this.component=a,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=o||null}},rt=class extends mn{templateRef;viewContainerRef;context;injector;constructor(a,e,t,n){super(),this.templateRef=a,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(a,e=this.context){return this.context=e,super.attach(a)}detach(){return this.context=void 0,super.detach()}},Io=class extends mn{element;constructor(a){super(),this.element=a instanceof F?a.nativeElement:a}},li=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(a){if(a instanceof It)return this._attachedPortal=a,this.attachComponentPortal(a);if(a instanceof rt)return this._attachedPortal=a,this.attachTemplatePortal(a);if(this.attachDomPortal&&a instanceof Io)return this._attachedPortal=a,this.attachDomPortal(a)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(a){this._disposeFn=a}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Jn=class extends li{outletElement;_appRef;_defaultInjector;constructor(a,e,t){super(),this.outletElement=a,this._appRef=e,this._defaultInjector=t}attachComponentPortal(a){let e;if(a.viewContainerRef){let t=a.injector||a.viewContainerRef.injector,n=t.get(vo,null,{optional:!0})||void 0;e=a.viewContainerRef.createComponent(a.component,{index:a.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=a.injector||this._defaultInjector||Z.NULL,o=n.get(Nn,t.injector);e=is(a.component,{elementInjector:n,environmentInjector:o,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=a,e}attachTemplatePortal(a){let e=a.viewContainerRef,t=e.createEmbeddedView(a.templateRef,a.context,{injector:a.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=a,t}attachDomPortal=a=>{let e=a.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=a,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(a){return a.hostView.rootNodes[0]}},ws=(()=>{class i extends rt{constructor(){let e=c(et),t=c(gt);super(e,t)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[q]})}return i})(),pt=(()=>{class i extends li{_moduleRef=c(vo,{optional:!0});_document=c(we);_viewContainerRef=c(gt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new A;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[q]})}return i})(),At=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({})}return i})();var ks=Xn();function ji(i){return new ea(i.get(_t),i.get(we))}var ea=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(a,e){this._viewportRuler=a,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let a=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=a.style.left||"",this._previousHTMLStyles.top=a.style.top||"",a.style.left=Oe(-this._previousScrollPosition.left),a.style.top=Oe(-this._previousScrollPosition.top),a.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let a=this._document.documentElement,e=this._document.body,t=a.style,n=e.style,o=t.scrollBehavior||"",s=n.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,a.classList.remove("cdk-global-scrollblock"),ks&&(t.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ks&&(t.scrollBehavior=o,n.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Is(i,a){return new ta(i.get(Qt),i.get(Y),i.get(_t),a)}var ta=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(a,e,t,n){this._scrollDispatcher=a,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(this._scrollSubscription)return;let a=this._scrollDispatcher.scrolled(0).pipe(me(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=a.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=a.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var hn=class{enable(){}disable(){}attach(){}};function Ao(i,a){return a.some(e=>{let t=i.bottom<e.top,n=i.top>e.bottom,o=i.right<e.left,s=i.left>e.right;return t||n||o||s})}function Cs(i,a){return a.some(e=>{let t=i.top<e.top,n=i.bottom>e.bottom,o=i.left<e.left,s=i.right>e.right;return t||n||o||s})}function Mi(i,a){return new ia(i.get(Qt),i.get(_t),i.get(Y),a)}var ia=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(a,e,t,n){this._scrollDispatcher=a,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(!this._scrollSubscription){let a=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(a).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();Ao(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},As=(()=>{class i{_injector=c(Z);constructor(){}noop=()=>new hn;close=e=>Is(this._injector,e);block=()=>ji(this._injector);reposition=e=>Mi(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$t=class{positionStrategy;scrollStrategy=new hn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(a){if(a){let e=Object.keys(a);for(let t of e)a[t]!==void 0&&(this[t]=a[t])}}};var na=class{connectionPair;scrollableViewProperties;constructor(a,e){this.connectionPair=a,this.scrollableViewProperties=e}};var Os=(()=>{class i{_attachedOverlays=[];_document=c(we);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Rs=(()=>{class i extends Os{_ngZone=c(Y);_renderer=c(qt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let o=t[n];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Fs=(()=>{class i extends Os{_platform=c(pe);_ngZone=c(Y);_renderer=c(qt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,n),o.listen(t,"click",this._clickListener,n),o.listen(t,"auxclick",this._clickListener,n),o.listen(t,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Vi(e)};_clickListener=e=>{let t=Vi(e),n=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let h=o[s],p=h._outsidePointerEvents;if(!(!h.hasAttached()||!this.canReceiveEvent(h,e,p))){if(Ds(h.overlayElement,t)||Ds(h.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>p.next(e)):p.next(e)}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ds(i,a){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=a;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Ps=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return i})(),ra=(()=>{class i{_platform=c(pe);_containerElement;_document=c(we);_styleLoader=c(ze);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Mo()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<n.length;o++)n[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Mo()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Ps)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Oo=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(a,e,t,n){this._renderer=e,this._ngZone=t,this.element=a.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let a=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(a,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),a.style.pointerEvents="none",a.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ro(i){return i&&i.nodeType===1}var zi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new T;_attachments=new T;_detachments=new T;_positionStrategy;_scrollStrategy;_locationChanges=Ce.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new T;_outsidePointerEvents=new T;_afterNextRenderRef;constructor(a,e,t,n,o,s,h,p,_,S=!1,U,V){this._portalOutlet=a,this._host=e,this._pane=t,this._config=n,this._ngZone=o,this._keyboardDispatcher=s,this._document=h,this._location=p,this._outsideClickDispatcher=_,this._animationsDisabled=S,this._injector=U,this._renderer=V,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(a){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(a);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ae(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let a=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),a}dispose(){if(this._disposed)return;let a=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,a&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(a){a!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=a,this.hasAttached()&&(a.attach(this),this.updatePosition()))}updateSize(a){this._config=Q(Q({},this._config),a),this._updateElementSize()}setDirection(a){this._config=Fe(Q({},this._config),{direction:a}),this._updateElementDirection()}addPanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!0)}removePanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!1)}getDirection(){let a=this._config.direction;return a?typeof a=="string"?a:a.value:"ltr"}updateScrollStrategy(a){a!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=a,this.hasAttached()&&(a.attach(this),a.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let a=this._pane.style;a.width=Oe(this._config.width),a.height=Oe(this._config.height),a.minWidth=Oe(this._config.minWidth),a.minHeight=Oe(this._config.minHeight),a.maxWidth=Oe(this._config.maxWidth),a.maxHeight=Oe(this._config.maxHeight)}_togglePointerEvents(a){this._pane.style.pointerEvents=a?"":"none"}_attachHost(){if(!this._host.parentElement){let a=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ro(a)?a.after(this._host):a?.type==="parent"?a.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let a="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Oo(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(a))}):this._backdropRef.element.classList.add(a)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(a,e,t){let n=Co(e||[]).filter(o=>!!o);n.length&&(t?a.classList.add(...n):a.classList.remove(...n))}_detachContentWhenEmpty(){let a=!1;try{this._detachContentAfterRenderRef=Ae(()=>{a=!0,this._detachContent()},{injector:this._injector})}catch(e){if(a)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let a=this._scrollStrategy;a?.disable(),a?.detach?.()}},Ms="cdk-overlay-connected-position-bounding-box",md=/([A-Za-z%]+)$/;function pn(i,a){return new aa(a,i.get(_t),i.get(we),i.get(pe),i.get(ra))}var aa=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new T;_resizeSubscription=Ce.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(a,e,t,n,o){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=o,this.setOrigin(a)}attach(a){this._overlayRef&&this._overlayRef,this._validatePositions(),a.hostElement.classList.add(Ms),this._overlayRef=a,this._boundingBox=a.hostElement,this._pane=a.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let a=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,o=[],s;for(let h of this._preferredPositions){let p=this._getOriginPoint(a,n,h),_=this._getOverlayPoint(p,e,h),S=this._getOverlayFit(_,e,t,h);if(S.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(h,p);return}if(this._canFitWithFlexibleDimensions(S,_,t)){o.push({position:h,origin:p,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(p,h)});continue}(!s||s.overlayFit.visibleArea<S.visibleArea)&&(s={overlayFit:S,overlayPoint:_,originPoint:p,position:h,overlayRect:e})}if(o.length){let h=null,p=-1;for(let _ of o){let S=_.boundingBoxRect.width*_.boundingBoxRect.height*(_.position.weight||1);S>p&&(p=S,h=_)}this._isPushed=!1,this._applyPosition(h.position,h.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Di(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ms),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let a=this._lastPosition;a?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(a,this._getOriginPoint(this._originRect,this._containerRect,a))):this.apply()}withScrollableContainers(a){return this._scrollables=a,this}withPositions(a){return this._preferredPositions=a,a.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(a){return this._viewportMargin=a,this}withFlexibleDimensions(a=!0){return this._hasFlexibleDimensions=a,this}withGrowAfterOpen(a=!0){return this._growAfterOpen=a,this}withPush(a=!0){return this._canPush=a,this}withLockedPosition(a=!0){return this._positionLocked=a,this}setOrigin(a){return this._origin=a,this}withDefaultOffsetX(a){return this._offsetX=a,this}withDefaultOffsetY(a){return this._offsetY=a,this}withTransformOriginOn(a){return this._transformOriginSelector=a,this}withPopoverLocation(a){return this._popoverLocation=a,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:Ro(this._origin)?this._origin:null}_getOriginPoint(a,e,t){let n;if(t.originX=="center")n=a.left+a.width/2;else{let s=this._isRtl()?a.right:a.left,h=this._isRtl()?a.left:a.right;n=t.originX=="start"?s:h}e.left<0&&(n-=e.left);let o;return t.originY=="center"?o=a.top+a.height/2:o=t.originY=="top"?a.top:a.bottom,e.top<0&&(o-=e.top),{x:n,y:o}}_getOverlayPoint(a,e,t){let n;t.overlayX=="center"?n=-e.width/2:t.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:a.x+n,y:a.y+o}}_getOverlayFit(a,e,t,n){let o=Es(e),{x:s,y:h}=a,p=this._getOffset(n,"x"),_=this._getOffset(n,"y");p&&(s+=p),_&&(h+=_);let S=0-s,U=s+o.width-t.width,V=0-h,ee=h+o.height-t.height,fe=this._subtractOverflows(o.width,S,U),ne=this._subtractOverflows(o.height,V,ee),kt=fe*ne;return{visibleArea:kt,isCompletelyWithinViewport:o.width*o.height===kt,fitsInViewportVertically:ne===o.height,fitsInViewportHorizontally:fe==o.width}}_canFitWithFlexibleDimensions(a,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,o=t.right-e.x,s=Ss(this._overlayRef.getConfig().minHeight),h=Ss(this._overlayRef.getConfig().minWidth),p=a.fitsInViewportVertically||s!=null&&s<=n,_=a.fitsInViewportHorizontally||h!=null&&h<=o;return p&&_}return!1}_pushOverlayOnScreen(a,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:a.x+this._previousPushAmount.x,y:a.y+this._previousPushAmount.y};let n=Es(e),o=this._viewportRect,s=Math.max(a.x+n.width-o.width,0),h=Math.max(a.y+n.height-o.height,0),p=Math.max(o.top-t.top-a.y,0),_=Math.max(o.left-t.left-a.x,0),S=0,U=0;return n.width<=o.width?S=_||-s:S=a.x<this._getViewportMarginStart()?o.left-t.left-a.x:0,n.height<=o.height?U=p||-h:U=a.y<this._getViewportMarginTop()?o.top-t.top-a.y:0,this._previousPushAmount={x:S,y:U},{x:a.x+S,y:a.y+U}}_applyPosition(a,e){if(this._setTransformOrigin(a),this._setOverlayElementStyles(e,a),this._setBoundingBoxStyles(e,a),a.panelClass&&this._addPanelClasses(a.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(a!==this._lastPosition||!this._lastScrollVisibility||!hd(this._lastScrollVisibility,t)){let n=new na(a,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=a,this._isInitialRender=!1}_setTransformOrigin(a){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=a.overlayY;a.overlayX==="center"?t="center":this._isRtl()?t=a.overlayX==="start"?"right":"left":t=a.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(a,e){let t=this._viewportRect,n=this._isRtl(),o,s,h;if(e.overlayY==="top")s=a.y,o=t.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")h=t.height-a.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-h+this._getViewportMarginTop();else{let ee=Math.min(t.bottom-a.y+t.top,a.y),fe=this._lastBoundingBoxSize.height;o=ee*2,s=a.y-ee,o>fe&&!this._isInitialRender&&!this._growAfterOpen&&(s=a.y-fe/2)}let p=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,_=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,S,U,V;if(_)V=t.width-a.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),S=a.x-this._getViewportMarginStart();else if(p)U=a.x,S=t.right-a.x-this._getViewportMarginEnd();else{let ee=Math.min(t.right-a.x+t.left,a.x),fe=this._lastBoundingBoxSize.width;S=ee*2,U=a.x-ee,S>fe&&!this._isInitialRender&&!this._growAfterOpen&&(U=a.x-fe/2)}return{top:s,left:U,bottom:h,right:V,width:S,height:o}}_setBoundingBoxStyles(a,e){let t=this._calculateBoundingBoxRect(a,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;n.width=Oe(t.width),n.height=Oe(t.height),n.top=Oe(t.top)||"auto",n.bottom=Oe(t.bottom)||"auto",n.left=Oe(t.left)||"auto",n.right=Oe(t.right)||"auto",e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(n.maxHeight=Oe(o)),s&&(n.maxWidth=Oe(s))}this._lastBoundingBoxSize=t,Di(this._boundingBox.style,n)}_resetBoundingBoxStyles(){Di(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Di(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(a,e){let t={},n=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(n){let S=this._viewportRuler.getViewportScrollPosition();Di(t,this._getExactOverlayY(e,a,S)),Di(t,this._getExactOverlayX(e,a,S))}else t.position="static";let h="",p=this._getOffset(e,"x"),_=this._getOffset(e,"y");p&&(h+=`translateX(${p}px) `),_&&(h+=`translateY(${_}px)`),t.transform=h.trim(),s.maxHeight&&(n?t.maxHeight=Oe(s.maxHeight):o&&(t.maxHeight="")),s.maxWidth&&(n?t.maxWidth=Oe(s.maxWidth):o&&(t.maxWidth="")),Di(this._pane.style,t)}_getExactOverlayY(a,e,t){let n={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,a);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),a.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;n.bottom=`${s-(o.y+this._overlayRect.height)}px`}else n.top=Oe(o.y);return n}_getExactOverlayX(a,e,t){let n={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,a);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let s;if(this._isRtl()?s=a.overlayX==="end"?"left":"right":s=a.overlayX==="end"?"right":"left",s==="right"){let h=this._document.documentElement.clientWidth;n.right=`${h-(o.x+this._overlayRect.width)}px`}else n.left=Oe(o.x);return n}_getScrollVisibility(){let a=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Cs(a,t),isOriginOutsideView:Ao(a,t),isOverlayClipped:Cs(e,t),isOverlayOutsideView:Ao(e,t)}}_subtractOverflows(a,...e){return e.reduce((t,n)=>t-Math.max(n,0),a)}_getNarrowedViewportRect(){let a=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+a-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:a-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(a,e){return e==="x"?a.offsetX==null?this._offsetX:a.offsetX:a.offsetY==null?this._offsetY:a.offsetY}_validatePositions(){}_addPanelClasses(a){this._pane&&Co(a).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(a=>{this._pane.classList.remove(a)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let a=this._origin;if(a instanceof F)return a.nativeElement.getBoundingClientRect();if(a instanceof Element)return a.getBoundingClientRect();let e=a.width||0,t=a.height||0;return{top:a.y,bottom:a.y+t,left:a.x,right:a.x+e,height:t,width:e}}_getContainerRect(){let a=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();a&&(e.style.display="block");let t=e.getBoundingClientRect();return a&&(e.style.display=""),t}};function Di(i,a){for(let e in a)a.hasOwnProperty(e)&&(i[e]=a[e]);return i}function Ss(i){if(typeof i!="number"&&i!=null){let[a,e]=i.split(md);return!e||e==="px"?parseFloat(a):null}return i||null}function Es(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function hd(i,a){return i===a?!0:i.isOriginClipped===a.isOriginClipped&&i.isOriginOutsideView===a.isOriginOutsideView&&i.isOverlayClipped===a.isOverlayClipped&&i.isOverlayOutsideView===a.isOverlayOutsideView}var Ts="cdk-global-overlay-wrapper";function ci(i){return new oa}var oa=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(a){let e=a.getConfig();this._overlayRef=a,this._width&&!e.width&&a.updateSize({width:this._width}),this._height&&!e.height&&a.updateSize({height:this._height}),a.hostElement.classList.add(Ts),this._isDisposed=!1}top(a=""){return this._bottomOffset="",this._topOffset=a,this._alignItems="flex-start",this}left(a=""){return this._xOffset=a,this._xPosition="left",this}bottom(a=""){return this._topOffset="",this._bottomOffset=a,this._alignItems="flex-end",this}right(a=""){return this._xOffset=a,this._xPosition="right",this}start(a=""){return this._xOffset=a,this._xPosition="start",this}end(a=""){return this._xOffset=a,this._xPosition="end",this}width(a=""){return this._overlayRef?this._overlayRef.updateSize({width:a}):this._width=a,this}height(a=""){return this._overlayRef?this._overlayRef.updateSize({height:a}):this._height=a,this}centerHorizontally(a=""){return this.left(a),this._xPosition="center",this}centerVertically(a=""){return this.top(a),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:n,height:o,maxWidth:s,maxHeight:h}=t,p=(n==="100%"||n==="100vw")&&(!s||s==="100%"||s==="100vw"),_=(o==="100%"||o==="100vh")&&(!h||h==="100%"||h==="100vh"),S=this._xPosition,U=this._xOffset,V=this._overlayRef.getConfig().direction==="rtl",ee="",fe="",ne="";p?ne="flex-start":S==="center"?(ne="center",V?fe=U:ee=U):V?S==="left"||S==="end"?(ne="flex-end",ee=U):(S==="right"||S==="start")&&(ne="flex-start",fe=U):S==="left"||S==="start"?(ne="flex-start",ee=U):(S==="right"||S==="end")&&(ne="flex-end",fe=U),a.position=this._cssPosition,a.marginLeft=p?"0":ee,a.marginTop=_?"0":this._topOffset,a.marginBottom=this._bottomOffset,a.marginRight=p?"0":fe,e.justifyContent=ne,e.alignItems=_?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Ts),t.justifyContent=t.alignItems=a.marginTop=a.marginBottom=a.marginLeft=a.marginRight=a.position="",this._overlayRef=null,this._isDisposed=!0}},Ls=(()=>{class i{_injector=c(Z);constructor(){}global(){return ci()}flexibleConnectedTo(e){return pn(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),un=new E("OVERLAY_DEFAULT_CONFIG");function Xt(i,a){i.get(ze).load(Ps);let e=i.get(ra),t=i.get(we),n=i.get(de),o=i.get(yi),s=i.get(Ee),h=i.get(ve,null,{optional:!0})||i.get(qt).createRenderer(null,null),p=new $t(a),_=i.get(un,null,{optional:!0})?.usePopover??!0;p.direction=p.direction||s.value,"showPopover"in t.body?p.usePopover=a?.usePopover??_:p.usePopover=!1;let S=t.createElement("div"),U=t.createElement("div");S.id=n.getId("cdk-overlay-"),S.classList.add("cdk-overlay-pane"),U.appendChild(S),p.usePopover&&(U.setAttribute("popover","manual"),U.classList.add("cdk-overlay-popover"));let V=p.usePopover?p.positionStrategy?.getPopoverInsertionPoint?.():null;return Ro(V)?V.after(U):V?.type==="parent"?V.element.appendChild(U):e.getContainerElement().appendChild(U),new zi(new Jn(S,o,i),U,S,p,i.get(Y),i.get(Rs),t,i.get(ns),i.get(Fs),a?.disableAnimations??i.get(Br,null,{optional:!0})==="NoopAnimations",i.get(Nn),h)}var Vs=(()=>{class i{scrollStrategies=c(As);_positionBuilder=c(Ls);_injector=c(Z);constructor(){}create(e){return Xt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),pd=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ud=new E("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Z);return()=>Mi(i)}}),Hi=(()=>{class i{elementRef=c(F);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Ns=new E("cdk-connected-overlay-default-config"),sa=(()=>{class i{_dir=c(Ee,{optional:!0});_injector=c(Z);_overlayRef;_templatePortal;_backdropSubscription=Ce.EMPTY;_attachSubscription=Ce.EMPTY;_detachSubscription=Ce.EMPTY;_positionSubscription=Ce.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(ud);_ngZone=c(Y);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new A;positionChange=new A;attach=new A;detach=new A;overlayKeydown=new A;overlayOutsideClick=new A;constructor(){let e=c(et),t=c(gt),n=c(Ns,{optional:!0}),o=c(un,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new rt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=pd);let e=this._overlayRef=Xt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Te(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let n=this._getOriginElement(),o=Vi(t);(!n||n!==o&&!n.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new $t({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=pn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Hi?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Hi?this.origin.elementRef.nativeElement:this.origin instanceof F?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Fr(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",I],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",I],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",I],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",I],push:[2,"cdkConnectedOverlayPush","push",I],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",I],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",I],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ye]})}return i})(),Ot=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({providers:[Vs],imports:[X,At,To,To]})}return i})();function fd(i,a){}var di=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Po=(()=>{class i extends li{_elementRef=c(F);_focusTrapFactory=c(qn);_config;_interactivityChecker=c(Un);_ngZone=c(Y);_focusMonitor=c(mt);_renderer=c(ve);_changeDetectorRef=c(ie);_injector=c(Z);_platform=c(pe);_document=c(we);_portalOutlet;_focusTrapped=new T;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(di,{optional:!0})||new di,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Ae(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=ln(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=ln();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ln()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&le(pt,7),t&2){let o;k(o=C())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&N("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[q],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&We(0,fd,0,0,"ng-template",0)},dependencies:[pt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),fn=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new T;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Te(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},gd=new E("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=c(Z);return()=>ji(i)}}),_d=new E("DialogData"),bd=new E("DefaultDialogConfig");function vd(i){let a=x(i),e=new A;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var Lo=(()=>{class i{_injector=c(Z);_defaultOptions=c(bd,{optional:!0});_parentDialog=c(i,{optional:!0,skipSelf:!0});_overlayContainer=c(ra);_idGenerator=c(de);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new T;_afterOpenedAtThisLevel=new T;_ariaHiddenElements=new Map;_scrollStrategy=c(gd);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Li(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Pe(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new di;t=Q(Q({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),s=Xt(this._injector,o),h=new fn(s,t),p=this._attachContainer(s,h,t);if(h.containerInstance=p,!this.openDialogs.length){let _=this._overlayContainer.getContainerElement();p._focusTrapped?p._focusTrapped.pipe(Ge(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(_)}):this._hideNonDialogContentFromAssistiveTechnology(_)}return this._attachDialogContent(e,h,p,t),this.openDialogs.push(h),h.closed.subscribe(()=>this._removeOpenDialog(h,!0)),this.afterOpened.next(h),h}closeAll(){Fo(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Fo(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Fo(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new $t({positionStrategy:e.positionStrategy||ci().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let o=n.injector||n.viewContainerRef?.injector,s=[{provide:di,useValue:n},{provide:fn,useValue:t},{provide:zi,useValue:e}],h;n.container?typeof n.container=="function"?h=n.container:(h=n.container.type,s.push(...n.container.providers(n))):h=Po;let p=new It(h,n.viewContainerRef,Z.create({parent:o||this._injector,providers:s}));return e.attach(p).instance}_attachDialogContent(e,t,n,o){if(e instanceof et){let s=this._createInjector(o,t,n,void 0),h={$implicit:o.data,dialogRef:t};o.templateContext&&(h=Q(Q({},h),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new rt(e,null,h,s))}else{let s=this._createInjector(o,t,n,this._injector),h=n.attachComponentPortal(new It(e,o.viewContainerRef,s));t.componentRef=h,t.componentInstance=h.instance}}_createInjector(e,t,n,o){let s=e.injector||e.viewContainerRef?.injector,h=[{provide:_d,useValue:e.data},{provide:fn,useValue:t}];return e.providers&&(typeof e.providers=="function"?h.push(...e.providers(t,e,n)):h.push(...e.providers)),e.direction&&(!s||!s.get(Ee,null,{optional:!0}))&&h.push({provide:Ee,useValue:vd(e.direction)}),Z.create({parent:s||o,providers:h})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let o=t[n];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Fo(i,a){let e=i.length;for(;e--;)a(i[e])}var Bs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({providers:[Lo],imports:[Ot,At,$n,At]})}return i})();function yd(i,a){}var ca=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Vo="mdc-dialog--open",zs="mdc-dialog--opening",Hs="mdc-dialog--closing",xd=150,wd=75,kd=(()=>{class i extends Po{_animationStateChanged=new A;_animationsEnabled=!he();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Gs(this._config.enterAnimationDuration)??xd:0;_exitAnimationDuration=this._animationsEnabled?Gs(this._config.exitAnimationDuration)??wd:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(js,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(zs,Vo)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Vo),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Vo),this._animationsEnabled?(this._hostElement.style.setProperty(js,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Hs)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(zs,Hs)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(Ke("id",n._config.id),N("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),M("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[q],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1),We(2,yd,0,0,"ng-template",2),l()())},dependencies:[pt],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return i})(),js="--mat-dialog-transition-duration";function Gs(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?dt(i.substring(0,i.length-2)):i.endsWith("s")?dt(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var la=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(la||{}),Rt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ho(1);_beforeClosed=new ho(1);_result;_closeFallbackTimeout;_state=la.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(me(n=>n.state==="opened"),Ge(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(me(n=>n.state==="closed"),Ge(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),je(this.backdropClick(),this.keydownEvents().pipe(me(n=>n.keyCode===27&&!this.disableClose&&!Te(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Ws(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(me(t=>t.state==="closing"),Ge(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=la.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=la.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Ws(i,a,e){return i._closeInteractionType=a,i.close(e)}var Zt=new E("MatMdcDialogData"),Cd=new E("mat-mdc-dialog-default-options"),Dd=new E("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Z);return()=>ji(i)}}),ut=(()=>{class i{_defaultOptions=c(Cd,{optional:!0});_scrollStrategy=c(Dd);_parentDialog=c(i,{optional:!0,skipSelf:!0});_idGenerator=c(de);_injector=c(Z);_dialog=c(Lo);_animationsDisabled=he();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new T;_afterOpenedAtThisLevel=new T;dialogConfigClass=ca;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Li(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Pe(void 0)));constructor(){this._dialogRefConstructor=Rt,this._dialogContainerType=kd,this._dialogDataToken=Zt}open(e,t){let n;t=Q(Q({},this._defaultOptions||new ca),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Fe(Q({},t),{positionStrategy:ci(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:di,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(s,h,p)=>(n=new this._dialogRefConstructor(s,t,p),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:h.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(n);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),da=(()=>{class i{dialogRef=c(Rt,{optional:!0});_elementRef=c(F);_dialog=c(ut);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Ys(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Ws(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&u("click",function(s){return n._onButtonClick(s)}),t&2&&N("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ye]})}return i})(),Us=(()=>{class i{_dialogRef=c(Rt,{optional:!0});_elementRef=c(F);_dialog=c(ut);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Ys(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i})}return i})(),qs=(()=>{class i extends Us{id=c(de).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&Ke("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[q]})}return i})(),Qs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[jr([Tt])]})}return i})(),$s=(()=>{class i extends Us{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&M("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[q]})}return i})();function Ys(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Qe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({providers:[ut],imports:[Bs,Ot,At,X]})}return i})();var ol=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(ge(ve),ge(F))};static \u0275dir=w({type:i})}return i})(),rl=(()=>{class i extends ol{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,features:[q]})}return i})(),st=new E("");var Md={provide:st,useExisting:xe(()=>lt),multi:!0};function Sd(){let i=ko()?ko().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Ed=new E(""),lt=(()=>{class i extends ol{_compositionMode;_composing=!1;constructor(e,t,n){super(e,t),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!Sd())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(ge(ve),ge(F),ge(Ed,8))};static \u0275dir=w({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,n){t&1&&u("input",function(s){return n._handleInput(s.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(s){return n._compositionEnd(s.target.value)})},standalone:!1,features:[W([Md]),q]})}return i})();function Ho(i){return i==null||jo(i)===0}function jo(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var bt=new E(""),xa=new E(""),Td=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,He=class{static min(a){return sl(a)}static max(a){return ll(a)}static required(a){return cl(a)}static requiredTrue(a){return Id(a)}static email(a){return Ad(a)}static minLength(a){return Od(a)}static maxLength(a){return dl(a)}static pattern(a){return Rd(a)}static nullValidator(a){return ha()}static compose(a){return gl(a)}static composeAsync(a){return _l(a)}};function sl(i){return a=>{if(a.value==null||i==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e<i?{min:{min:i,actual:a.value}}:null}}function ll(i){return a=>{if(a.value==null||i==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e>i?{max:{max:i,actual:a.value}}:null}}function cl(i){return Ho(i.value)?{required:!0}:null}function Id(i){return i.value===!0?null:{required:!0}}function Ad(i){return Ho(i.value)||Td.test(i.value)?null:{email:!0}}function Od(i){return a=>{let e=a.value?.length??jo(a.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function dl(i){return a=>{let e=a.value?.length??jo(a.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Rd(i){if(!i)return ha;let a,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),a=new RegExp(e)):(e=i.toString(),a=i),t=>{if(Ho(t.value))return null;let n=t.value;return a.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function ha(i){return null}function ml(i){return i!=null}function hl(i){return Wr(i)?Ir(i):i}function pl(i){let a={};return i.forEach(e=>{a=e!=null?Q(Q({},a),e):a}),Object.keys(a).length===0?null:a}function ul(i,a){return a.map(e=>e(i))}function Fd(i){return!i.validate}function fl(i){return i.map(a=>Fd(a)?a:e=>a.validate(e))}function gl(i){if(!i)return null;let a=i.filter(ml);return a.length==0?null:function(e){return pl(ul(e,a))}}function Go(i){return i!=null?gl(fl(i)):null}function _l(i){if(!i)return null;let a=i.filter(ml);return a.length==0?null:function(e){let t=ul(e,a).map(hl);return Ar(t).pipe($e(pl))}}function Wo(i){return i!=null?_l(fl(i)):null}function Zs(i,a){return i===null?[a]:Array.isArray(i)?[...i,a]:[i,a]}function bl(i){return i._rawValidators}function vl(i){return i._rawAsyncValidators}function No(i){return i?Array.isArray(i)?i:[i]:[]}function pa(i,a){return Array.isArray(i)?i.includes(a):i===a}function Ks(i,a){let e=No(a);return No(i).forEach(n=>{pa(e,n)||e.push(n)}),e}function Js(i,a){return No(a).filter(e=>!pa(i,e))}var ua=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(a){this._rawValidators=a||[],this._composedValidatorFn=Go(this._rawValidators)}_setAsyncValidators(a){this._rawAsyncValidators=a||[],this._composedAsyncValidatorFn=Wo(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(a){this._onDestroyCallbacks.push(a)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(a=>a()),this._onDestroyCallbacks=[]}reset(a=void 0){this.control?.reset(a)}hasError(a,e){return this.control?this.control.hasError(a,e):!1}getError(a,e){return this.control?this.control.getError(a,e):null}},Kt=class extends ua{name;get formDirective(){return null}get path(){return null}},ft=class extends ua{_parent=null;name=null;valueAccessor=null},fa=class{_cd;constructor(a){this._cd=a}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var vt=(()=>{class i extends fa{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(ge(ft,2))};static \u0275dir=w({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,n){t&2&&M("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[q]})}return i})(),hi=(()=>{class i extends fa{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(ge(Kt,10))};static \u0275dir=w({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,n){t&2&&M("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[q]})}return i})();var gn="VALID",ma="INVALID",Gi="PENDING",_n="DISABLED",mi=class{},ga=class extends mi{value;source;constructor(a,e){super(),this.value=a,this.source=e}},vn=class extends mi{pristine;source;constructor(a,e){super(),this.pristine=a,this.source=e}},yn=class extends mi{touched;source;constructor(a,e){super(),this.touched=a,this.source=e}},Wi=class extends mi{status;source;constructor(a,e){super(),this.status=a,this.source=e}},_a=class extends mi{source;constructor(a){super(),this.source=a}},wn=class extends mi{source;constructor(a){super(),this.source=a}};function Uo(i){return(wa(i)?i.validators:i)||null}function Pd(i){return Array.isArray(i)?Go(i):i||null}function qo(i,a){return(wa(a)?a.asyncValidators:i)||null}function Ld(i){return Array.isArray(i)?Wo(i):i||null}function wa(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function yl(i,a,e){let t=i.controls;if(!(a?Object.keys(t):t).length)throw new Dt(1e3,"");if(!t[e])throw new Dt(1001,"")}function xl(i,a,e){i._forEachChild((t,n)=>{if(e[n]===void 0)throw new Dt(1002,"")})}var Ui=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(a,e){this._assignValidators(a),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(a){this._rawValidators=this._composedValidatorFn=a}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(a){this._rawAsyncValidators=this._composedAsyncValidatorFn=a}get parent(){return this._parent}get status(){return zt(this.statusReactive)}set status(a){zt(()=>this.statusReactive.set(a))}_status=re(()=>this.statusReactive());statusReactive=x(void 0);get valid(){return this.status===gn}get invalid(){return this.status===ma}get pending(){return this.status===Gi}get disabled(){return this.status===_n}get enabled(){return this.status!==_n}errors;get pristine(){return zt(this.pristineReactive)}set pristine(a){zt(()=>this.pristineReactive.set(a))}_pristine=re(()=>this.pristineReactive());pristineReactive=x(!0);get dirty(){return!this.pristine}get touched(){return zt(this.touchedReactive)}set touched(a){zt(()=>this.touchedReactive.set(a))}_touched=re(()=>this.touchedReactive());touchedReactive=x(!1);get untouched(){return!this.touched}_events=new T;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(a){this._assignValidators(a)}setAsyncValidators(a){this._assignAsyncValidators(a)}addValidators(a){this.setValidators(Ks(a,this._rawValidators))}addAsyncValidators(a){this.setAsyncValidators(Ks(a,this._rawAsyncValidators))}removeValidators(a){this.setValidators(Js(a,this._rawValidators))}removeAsyncValidators(a){this.setAsyncValidators(Js(a,this._rawAsyncValidators))}hasValidator(a){return pa(this._rawValidators,a)}hasAsyncValidator(a){return pa(this._rawAsyncValidators,a)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(a={}){let e=this.touched===!1;this.touched=!0;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsTouched(Fe(Q({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new yn(!0,t))}markAllAsDirty(a={}){this.markAsDirty({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(a))}markAllAsTouched(a={}){this.markAsTouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(a))}markAsUntouched(a={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=a.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:t})}),a.onlySelf||this._parent?._updateTouched(a,t),e&&a.emitEvent!==!1&&this._events.next(new yn(!1,t))}markAsDirty(a={}){let e=this.pristine===!0;this.pristine=!1;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsDirty(Fe(Q({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new vn(!1,t))}markAsPristine(a={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=a.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:a.emitEvent})}),a.onlySelf||this._parent?._updatePristine(a,t),e&&a.emitEvent!==!1&&this._events.next(new vn(!0,t))}markAsPending(a={}){this.status=Gi;let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new Wi(this.status,e)),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.markAsPending(Fe(Q({},a),{sourceControl:e}))}disable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=_n,this.errors=null,this._forEachChild(n=>{n.disable(Fe(Q({},a),{onlySelf:!0}))}),this._updateValue();let t=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new ga(this.value,t)),this._events.next(new Wi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Fe(Q({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=gn,this._forEachChild(t=>{t.enable(Fe(Q({},a),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent}),this._updateAncestors(Fe(Q({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(a,e){a.onlySelf||(this._parent?.updateValueAndValidity(a),a.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(a){this._parent=a}getRawValue(){return this.value}updateValueAndValidity(a={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===gn||this.status===Gi)&&this._runAsyncValidator(t,a.emitEvent)}let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new ga(this.value,e)),this._events.next(new Wi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.updateValueAndValidity(Fe(Q({},a),{sourceControl:e}))}_updateTreeValidity(a={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(a)),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?_n:gn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(a,e){if(this.asyncValidator){this.status=Gi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:a!==!1};let t=hl(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:a})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let a=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,a}return!1}setErrors(a,e={}){this.errors=a,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(a){let e=a;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,n)=>t&&t._find(n),this)}getError(a,e){let t=e?this.get(e):this;return t?.errors?t.errors[a]:null}hasError(a,e){return!!this.getError(a,e)}get root(){let a=this;for(;a._parent;)a=a._parent;return a}_updateControlsErrors(a,e,t){this.status=this._calculateStatus(),a&&this.statusChanges.emit(this.status),(a||t)&&this._events.next(new Wi(this.status,e)),this._parent&&this._parent._updateControlsErrors(a,e,t)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?_n:this.errors?ma:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Gi)?Gi:this._anyControlsHaveStatus(ma)?ma:gn}_anyControlsHaveStatus(a){return this._anyControls(e=>e.status===a)}_anyControlsDirty(){return this._anyControls(a=>a.dirty)}_anyControlsTouched(){return this._anyControls(a=>a.touched)}_updatePristine(a,e){let t=!this._anyControlsDirty(),n=this.pristine!==t;this.pristine=t,a.onlySelf||this._parent?._updatePristine(a,e),n&&this._events.next(new vn(this.pristine,e))}_updateTouched(a={},e){this.touched=this._anyControlsTouched(),this._events.next(new yn(this.touched,e)),a.onlySelf||this._parent?._updateTouched(a,e)}_onDisabledChange=[];_registerOnCollectionChange(a){this._onCollectionChange=a}_setUpdateStrategy(a){wa(a)&&a.updateOn!=null&&(this._updateOn=a.updateOn)}_parentMarkedDirty(a){return!a&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(a){return null}_assignValidators(a){this._rawValidators=Array.isArray(a)?a.slice():a,this._composedValidatorFn=Pd(this._rawValidators)}_assignAsyncValidators(a){this._rawAsyncValidators=Array.isArray(a)?a.slice():a,this._composedAsyncValidatorFn=Ld(this._rawAsyncValidators)}},qi=class extends Ui{constructor(a,e,t){super(Uo(e),qo(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(a,e){return this.controls[a]?this.controls[a]:(this.controls[a]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(a,e,t={}){this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(a,e={}){this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),delete this.controls[a],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(a,e,t={}){this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),delete this.controls[a],e&&this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(a){return this.controls.hasOwnProperty(a)&&this.controls[a].enabled}setValue(a,e={}){xl(this,!0,a),Object.keys(a).forEach(t=>{yl(this,!0,t),this.controls[t].setValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(a,e={}){a!=null&&(Object.keys(a).forEach(t=>{let n=this.controls[t];n&&n.patchValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a={},e={}){this._forEachChild((t,n)=>{t.reset(a?a[n]:null,Fe(Q({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new wn(this))}getRawValue(){return this._reduceChildren({},(a,e,t)=>(a[t]=e.getRawValue(),a))}_syncPendingControls(){let a=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&a(t,e)})}_setUpControls(){this._forEachChild(a=>{a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(a){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&a(t))return!0;return!1}_reduceValue(){let a={};return this._reduceChildren(a,(e,t,n)=>((t.enabled||this.disabled)&&(e[n]=t.value),e))}_reduceChildren(a,e){let t=a;return this._forEachChild((n,o)=>{t=e(t,n,o)}),t}_allControlsDisabled(){for(let a of Object.keys(this.controls))if(this.controls[a].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(a){return this.controls.hasOwnProperty(a)?this.controls[a]:null}};var Bo=class extends qi{};var kn=new E("",{factory:()=>ka}),ka="always";function wl(i,a){return[...a.path,i]}function ba(i,a,e=ka){Qo(i,a),a.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&a.valueAccessor.setDisabledState?.(i.disabled),Nd(i,a),zd(i,a),Bd(i,a),Vd(i,a)}function el(i,a,e=!0){let t=()=>{};a?.valueAccessor?.registerOnChange(t),a?.valueAccessor?.registerOnTouched(t),ya(i,a),i&&(a._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function va(i,a){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(a)})}function Vd(i,a){if(a.valueAccessor.setDisabledState){let e=t=>{a.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),a._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Qo(i,a){let e=bl(i);a.validator!==null?i.setValidators(Zs(e,a.validator)):typeof e=="function"&&i.setValidators([e]);let t=vl(i);a.asyncValidator!==null?i.setAsyncValidators(Zs(t,a.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();va(a._rawValidators,n),va(a._rawAsyncValidators,n)}function ya(i,a){let e=!1;if(i!==null){if(a.validator!==null){let n=bl(i);if(Array.isArray(n)&&n.length>0){let o=n.filter(s=>s!==a.validator);o.length!==n.length&&(e=!0,i.setValidators(o))}}if(a.asyncValidator!==null){let n=vl(i);if(Array.isArray(n)&&n.length>0){let o=n.filter(s=>s!==a.asyncValidator);o.length!==n.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return va(a._rawValidators,t),va(a._rawAsyncValidators,t),e}function Nd(i,a){a.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&kl(i,a)})}function Bd(i,a){a.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&kl(i,a),i.updateOn!=="submit"&&i.markAsTouched()})}function kl(i,a){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),a.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function zd(i,a){let e=(t,n)=>{a.valueAccessor.writeValue(t),n&&a.viewToModelUpdate(t)};i.registerOnChange(e),a._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Cl(i,a){i==null,Qo(i,a)}function Hd(i,a){return ya(i,a)}function Dl(i,a){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(a,e.currentValue)}function jd(i){return Object.getPrototypeOf(i.constructor)===rl}function Ml(i,a){i._syncPendingControls(),a.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Sl(i,a){if(!a)return null;Array.isArray(a);let e,t,n;return a.forEach(o=>{o.constructor===lt?e=o:jd(o)?t=o:n=o}),n||t||e||null}function Gd(i,a){let e=i.indexOf(a);e>-1&&i.splice(e,1)}var Wd={provide:Kt,useExisting:xe(()=>Si)},bn=Promise.resolve(),Si=(()=>{class i extends Kt{callSetDisabledState;get submitted(){return zt(this.submittedReactive)}_submitted=re(()=>this.submittedReactive());submittedReactive=x(!1);_directives=new Set;form;ngSubmit=new A;options;constructor(e,t,n){super(),this.callSetDisabledState=n,this.form=new qi({},Go(e),Wo(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){bn.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),ba(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){bn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){bn.then(()=>{let t=this._findContainer(e.path),n=new qi({});Cl(n,e),t.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){bn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){bn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Ml(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new _a(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(ge(bt,10),ge(xa,10),ge(kn,8))};static \u0275dir=w({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,n){t&1&&u("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[W([Wd]),q]})}return i})();function tl(i,a){let e=i.indexOf(a);e>-1&&i.splice(e,1)}function il(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var xn=class extends Ui{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(a=null,e,t){super(Uo(e),qo(t,e)),this._applyFormState(a),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),wa(e)&&(e.nonNullable||e.initialValueIsDefault)&&(il(a)?this.defaultValue=a.value:this.defaultValue=a)}setValue(a,e={}){this.value=this._pendingValue=a,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(a,e={}){this.setValue(a,e)}reset(a=this.defaultValue,e={}){this._applyFormState(a),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new wn(this))}_updateValue(){}_anyControls(a){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(a){this._onChange.push(a)}_unregisterOnChange(a){tl(this._onChange,a)}registerOnDisabledChange(a){this._onDisabledChange.push(a)}_unregisterOnDisabledChange(a){tl(this._onDisabledChange,a)}_forEachChild(a){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(a){il(a)?(this.value=this._pendingValue=a.value,a.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=a}};var Ud=i=>i instanceof xn;var qd={provide:ft,useExisting:xe(()=>Ei)},nl=Promise.resolve(),Ei=(()=>{class i extends ft{_changeDetectorRef;callSetDisabledState;control=new xn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new A;constructor(e,t,n,o,s,h){super(),this._changeDetectorRef=s,this.callSetDisabledState=h,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=Sl(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Dl(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ba(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){nl.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,n=t!==0&&I(t);nl.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?wl(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(ge(Kt,9),ge(bt,10),ge(xa,10),ge(st,10),ge(ie,8),ge(kn,8))};static \u0275dir=w({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[W([qd]),q,ye]})}return i})();var pi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})(),Qd={provide:st,useExisting:xe(()=>$o),multi:!0},$o=(()=>{class i extends rl{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,n){t&1&&u("input",function(s){return n.onChange(s.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[W([Qd]),q]})}return i})();var zo=class extends Ui{constructor(a,e,t){super(Uo(e),qo(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(a){return this.controls[this._adjustIndex(a)]}push(a,e={}){Array.isArray(a)?a.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(a),this._registerControl(a)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(a,e,t={}){this.controls.splice(a,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(a,e={}){let t=this._adjustIndex(a);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(a,e,t={}){let n=this._adjustIndex(a);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),e&&(this.controls.splice(n,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(a,e={}){xl(this,!1,a),a.forEach((t,n)=>{yl(this,!1,n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(a,e={}){a!=null&&(a.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a=[],e={}){this._forEachChild((t,n)=>{t.reset(a[n],Fe(Q({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new wn(this))}getRawValue(){return this.controls.map(a=>a.getRawValue())}clear(a={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:a.emitEvent}))}_adjustIndex(a){return a<0?a+this.length:a}_syncPendingControls(){let a=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){this.controls.forEach((e,t)=>{a(e,t)})}_updateValue(){this.value=this.controls.filter(a=>a.enabled||this.disabled).map(a=>a.value)}_anyControls(a){return this.controls.some(e=>e.enabled&&a(e))}_setUpControls(){this._forEachChild(a=>this._registerControl(a))}_allControlsDisabled(){for(let a of this.controls)if(a.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(a){a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)}_find(a){return this.at(a)??null}};var $d=(()=>{class i extends Kt{callSetDisabledState;get submitted(){return zt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=re(()=>this._submittedReactive());_submittedReactive=x(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,n){super(),this.callSetDisabledState=n,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ya(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return ba(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){el(e.control||null,e,!1),Gd(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Ml(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new _a(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,n=this.form.get(e.path);t!==n&&(el(t||null,e),Ud(n)&&(ba(n,e,this.callSetDisabledState),e.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Cl(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Hd(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Qo(this.form,this),this._oldForm&&ya(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(ge(bt,10),ge(xa,10),ge(kn,8))};static \u0275dir=w({type:i,features:[q,ye]})}return i})();var El=new E("");var Yd={provide:ft,useExisting:xe(()=>Ti)},Ti=(()=>{class i extends ft{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new A;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,n,o,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=Sl(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Dl(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return wl(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||i)(ge(Kt,13),ge(bt,10),ge(xa,10),ge(st,10),ge(El,8))};static \u0275dir=w({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[W([Yd]),q,ye]})}return i})();var Xd={provide:Kt,useExisting:xe(()=>Ft)},Ft=(()=>{class i extends $d{form=null;ngSubmit=new A;get control(){return this.form}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,n){t&1&&u("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[W([Xd]),q]})}return i})();function Zd(i){return typeof i=="number"?i:parseInt(i,10)}function Tl(i){return typeof i=="number"?i:parseFloat(i)}var Ca=(()=>{class i{_validator=ha;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):ha,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,features:[ye]})}return i})(),Kd={provide:bt,useExisting:xe(()=>Yo),multi:!0},Yo=(()=>{class i extends Ca{max;inputName="max";normalizeInput=e=>Tl(e);createValidator=e=>ll(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("max",n._enabled?n.max:null)},inputs:{max:"max"},standalone:!1,features:[W([Kd]),q]})}return i})(),Jd={provide:bt,useExisting:xe(()=>Xo),multi:!0},Xo=(()=>{class i extends Ca{min;inputName="min";normalizeInput=e=>Tl(e);createValidator=e=>sl(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("min",n._enabled?n.min:null)},inputs:{min:"min"},standalone:!1,features:[W([Jd]),q]})}return i})(),em={provide:bt,useExisting:xe(()=>Jt),multi:!0};var Jt=(()=>{class i extends Ca{required;inputName="required";normalizeInput=I;createValidator=e=>cl;enabled(e){return e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,n){t&2&&N("required",n._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[W([em]),q]})}return i})();var tm={provide:bt,useExisting:xe(()=>Zo),multi:!0},Zo=(()=>{class i extends Ca{maxlength;inputName="maxlength";normalizeInput=e=>Zd(e);createValidator=e=>dl(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("maxlength",n._enabled?n.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[W([tm]),q]})}return i})();var Il=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({})}return i})();function al(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Qi=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let n=this._reduceControls(e),o={};return al(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new qi(n,o)}record(e,t=null){let n=this._reduceControls(e);return new Bo(n,t)}control(e,t,n){let o={};return this.useNonNullable?(al(t)?o=t:(o.validators=t,o.asyncValidators=n),new xn(e,Fe(Q({},o),{nonNullable:!0}))):new xn(e,t,n)}array(e,t,n){let o=e.map(s=>this._createControl(s));return new zo(o,t,n)}_reduceControls(e){let t={};return Object.keys(e).forEach(n=>{t[n]=this._createControl(e[n])}),t}_createControl(e){if(e instanceof xn)return e;if(e instanceof Ui)return e;if(Array.isArray(e)){let t=e[0],n=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,n,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ui=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:kn,useValue:e.callSetDisabledState??ka}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Il]})}return i})(),$i=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:El,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:kn,useValue:e.callSetDisabledState??ka}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Il]})}return i})();var im=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),nm={passive:!0},Al=(()=>{class i{_platform=c(pe);_ngZone=c(Y);_renderer=c(qt).createRenderer(null,null);_styleLoader=c(ze);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Fi;this._styleLoader.load(im);let t=cn(e),n=this._monitoredElements.get(t);if(n)return n.subject;let o=new T,s="cdk-text-field-autofilled",h=_=>{_.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(s)?(t.classList.add(s),this._ngZone.run(()=>o.next({target:_.target,isAutofilled:!0}))):_.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(s)&&(t.classList.remove(s),this._ngZone.run(()=>o.next({target:_.target,isAutofilled:!1})))},p=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",h,nm)));return this._monitoredElements.set(t,{subject:o,unlisten:p}),o}stopMonitoring(e){let t=cn(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ol=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({})}return i})();var Rl=new E("MAT_INPUT_VALUE_ACCESSOR");var Ko=class{_box;_destroyed=new T;_resizeSubject=new T;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new Nt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe(me(e=>e.some(t=>t.target===a)),go({bufferSize:1,refCount:!0}),te(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Da=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(Y);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new Ko(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var am=["notch"],om=["matFormFieldNotchedOutline",""],rm=["*"],Fl=["iconPrefixContainer"],Pl=["textPrefixContainer"],Ll=["iconSuffixContainer"],Vl=["textSuffixContainer"],sm=["textField"],lm=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],cm=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function dm(i,a){i&1&&D(0,"span",21)}function mm(i,a){if(i&1&&(r(0,"label",20),R(1,1),v(2,dm,1,0,"span",21),l()),i&2){let e=f(2);b("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),N("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),y(!e.hideRequiredMarker&&e._control.required?2:-1)}}function hm(i,a){if(i&1&&v(0,mm,3,5,"label",20),i&2){let e=f();y(e._hasFloatingLabel()?0:-1)}}function pm(i,a){i&1&&D(0,"div",7)}function um(i,a){}function fm(i,a){if(i&1&&We(0,um,0,0,"ng-template",13),i&2){f(2);let e=Me(1);b("ngTemplateOutlet",e)}}function gm(i,a){if(i&1&&(r(0,"div",9),v(1,fm,1,1,null,13),l()),i&2){let e=f();b("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),y(e._forceDisplayInfixLabel()?-1:1)}}function _m(i,a){i&1&&(r(0,"div",10,2),R(2,2),l())}function bm(i,a){i&1&&(r(0,"div",11,3),R(2,3),l())}function vm(i,a){}function ym(i,a){if(i&1&&We(0,vm,0,0,"ng-template",13),i&2){f();let e=Me(1);b("ngTemplateOutlet",e)}}function xm(i,a){i&1&&(r(0,"div",14,4),R(2,4),l())}function wm(i,a){i&1&&(r(0,"div",15,5),R(2,5),l())}function km(i,a){i&1&&D(0,"div",16)}function Cm(i,a){i&1&&(r(0,"div",18),R(1,6),l())}function Dm(i,a){if(i&1&&(r(0,"mat-hint",22),d(1),l()),i&2){let e=f(2);b("id",e._hintLabelId),m(),O(e.hintLabel)}}function Mm(i,a){if(i&1&&(r(0,"div",19),v(1,Dm,2,2,"mat-hint",22),R(2,7),D(3,"div",23),R(4,8),l()),i&2){let e=f();m(),y(e.hintLabel?1:-1)}}var Wt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["mat-label"]]})}return i})(),Sm=new E("MatError");var Sa=(()=>{class i{align="start";id=c(de).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(Ke("id",n.id),N("align",null),M("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Em=new E("MatPrefix");var Wl=new E("MatSuffix"),Ea=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[W([{provide:Wl,useExisting:i}])]})}return i})(),Ul=new E("FloatingLabelParent"),Nl=(()=>{class i{_elementRef=c(F);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Da);_ngZone=c(Y);_parent=c(Ul);_resizeSubscription=new Ce;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Tm(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&M("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Tm(i){let a=i;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Bl="mdc-line-ripple--active",Ma="mdc-line-ripple--deactivating",zl=(()=>{class i{_elementRef=c(F);_cleanupTransitionEnd;constructor(){let e=c(Y),t=c(ve);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ma),e.add(Bl)}deactivate(){this._elementRef.nativeElement.classList.add(Ma)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(Ma);e.propertyName==="opacity"&&n&&t.remove(Bl,Ma)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Hl=(()=>{class i{_elementRef=c(F);_ngZone=c(Y);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&le(am,5),t&2){let o;k(o=C())&&(n._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&M("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:om,ngContentSelectors:rm,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(J(),ni(0,"div",1),Be(1,"div",2,0),R(3),Ze(),ni(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Cn=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i})}return i})();var Dn=new E("MatFormField"),Im=new E("MAT_FORM_FIELD_DEFAULT_OPTIONS"),jl="fill",Am="auto",Gl="fixed",Om="translateY(-50%)",Xe=(()=>{class i{_elementRef=c(F);_changeDetectorRef=c(ie);_platform=c(pe);_idGenerator=c(de);_ngZone=c(Y);_defaults=c(Im,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=sn("iconPrefixContainer");_textPrefixContainerSignal=sn("textPrefixContainer");_iconSuffixContainerSignal=sn("iconSuffixContainer");_textSuffixContainerSignal=sn("textSuffixContainer");_prefixSuffixContainers=re(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Jr(Wt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ie(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Am}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||jl;this._appearanceSignal.set(t)}_appearanceSignal=x(jl);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Gl}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Gl}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new T;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=he();constructor(){let e=this._defaults,t=c(Ee);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),bi(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=re(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Pe([void 0,void 0]),$e(()=>[t.errorState,t.userAriaDescribedBy]),fo(),me(([[o,s],[h,p]])=>o!==h||s!==p)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(te(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),je(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ts({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=re(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(h=>h.align==="start"):null,s=this._hintChildren?this._hintChildren.find(h=>h.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,n;if(t){let o=this._describedByIds||e;n=e.concat(t.filter(s=>s&&!o.includes(s)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,h=t?.getBoundingClientRect().width??0,p=n?.getBoundingClientRect().width??0,_=o?.getBoundingClientRect().width??0,S=this._currentDirection==="rtl"?"-1":"1",U=`${s+h}px`,ee=`calc(${S} * (${U} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,fe=`var(--mat-mdc-form-field-label-transform, ${Om} translateX(${ee}))`,ne=s+h+p+_;return[fe,ne]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,o){if(t&1&&(Qr(o,n._labelChild,Wt,5),De(o,Cn,5)(o,Em,5)(o,Wl,5)(o,Sm,5)(o,Sa,5)),t&2){xo();let s;k(s=C())&&(n._formFieldControl=s.first),k(s=C())&&(n._prefixChildren=s),k(s=C())&&(n._suffixChildren=s),k(s=C())&&(n._errorChildren=s),k(s=C())&&(n._hintChildren=s)}},viewQuery:function(t,n){if(t&1&&($r(n._iconPrefixContainerSignal,Fl,5)(n._textPrefixContainerSignal,Pl,5)(n._iconSuffixContainerSignal,Ll,5)(n._textSuffixContainerSignal,Vl,5),le(sm,5)(Fl,5)(Pl,5)(Ll,5)(Vl,5)(Nl,5)(Hl,5)(zl,5)),t&2){xo(4);let o;k(o=C())&&(n._textField=o.first),k(o=C())&&(n._iconPrefixContainer=o.first),k(o=C())&&(n._textPrefixContainer=o.first),k(o=C())&&(n._iconSuffixContainer=o.first),k(o=C())&&(n._textSuffixContainer=o.first),k(o=C())&&(n._floatingLabel=o.first),k(o=C())&&(n._notchedOutline=o.first),k(o=C())&&(n._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&M("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[W([{provide:Dn,useExisting:i},{provide:Ul,useExisting:i}])],ngContentSelectors:cm,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(J(lm),We(0,hm,1,1,"ng-template",null,0,wo),r(2,"div",6,1),u("click",function(s){return n._control.onContainerClick(s)}),v(4,pm,1,0,"div",7),r(5,"div",8),v(6,gm,2,2,"div",9),v(7,_m,3,0,"div",10),v(8,bm,3,0,"div",11),r(9,"div",12),v(10,ym,1,1,null,13),R(11),l(),v(12,xm,3,0,"div",14),v(13,wm,3,0,"div",15),l(),v(14,km,1,0,"div",16),l(),r(15,"div",17),v(16,Cm,2,0,"div",18)(17,Mm,5,1,"div",19),l()),t&2){let o;m(2),M("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),m(2),y(!n._hasOutline()&&!n._control.disabled?4:-1),m(2),y(n._hasOutline()?6:-1),m(),y(n._hasIconPrefix?7:-1),m(),y(n._hasTextPrefix?8:-1),m(2),y(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),m(2),y(n._hasTextSuffix?12:-1),m(),y(n._hasIconSuffix?13:-1),m(),y(n._hasOutline()?-1:14),m(),M("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let s=n._getSubscriptMessageType();m(),y((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[Nl,Hl,as,zl,Sa],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var Xi=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Zi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(a,e,t,n,o){this._defaultMatcher=a,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=o}updateErrorState(){let a=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(n,e)??!1;o!==a&&(this.errorState=o,this._stateChanges.next())}};var Re=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Wn,Xe,X]})}return i})();var Pm=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Lm=new E("MAT_INPUT_CONFIG"),yt=(()=>{class i{_elementRef=c(F);_platform=c(pe);ngControl=c(ft,{optional:!0,self:!0});_autofillMonitor=c(Al);_ngZone=c(Y);_formField=c(Dn,{optional:!0});_renderer=c(ve);_uid=c(de).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(Lm,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new T;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ie(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(He.required)??!1}set required(e){this._required=Ie(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&So().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ie(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>So().has(e));constructor(){let e=c(Si,{optional:!0}),t=c(Ft,{optional:!0}),n=c(Xi),o=c(Rl,{optional:!0,self:!0}),s=this._elementRef.nativeElement,h=s.nodeName.toLowerCase();o?Bn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Zi(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=h==="select",this._isTextarea=h==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&bi(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Pm.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&u("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(Ke("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),N("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),M("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},exportAs:["matInput"],features:[W([{provide:Cn,useExisting:i}]),ye]})}return i})(),ct=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Re,Re,Ol,X]})}return i})();var Ai=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new T;constructor(a=!1,e,t=!0,n){this._multiple=a,this._emitChanges=t,this.compareWith=n,e&&e.length&&(a?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var Mn=(()=>{class i{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ta=(()=>{class i{_animationsDisabled=he();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&M("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})();var Vm=["text"],Nm=[[["mat-icon"]],"*"],Bm=["mat-icon","*"];function zm(i,a){if(i&1&&D(0,"mat-pseudo-checkbox",1),i&2){let e=f();b("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Hm(i,a){if(i&1&&D(0,"mat-pseudo-checkbox",3),i&2){let e=f();b("disabled",e.disabled)}}function jm(i,a){if(i&1&&(r(0,"span",4),d(1),l()),i&2){let e=f();m(),$("(",e.group.label,")")}}var er=new E("MAT_OPTION_PARENT_COMPONENT"),tr=new E("MatOptgroup");var Jo=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},wt=(()=>{class i{_element=c(F);_changeDetectorRef=c(ie);_parent=c(er,{optional:!0});group=c(tr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(de).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=x(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new A;_text;_stateChanges=new T;constructor(){let e=c(ze);e.load(ot),e.load(ps),this._signalDisableRipple=!!this._parent&&Bn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Te(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Jo(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&le(Vm,7),t&2){let o;k(o=C())&&(n._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&u("click",function(){return n._selectViaInteraction()})("keydown",function(s){return n._handleKeydown(s)}),t&2&&(Ke("id",n.id),N("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),M("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",I]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Bm,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(J(Nm),v(0,zm,1,2,"mat-pseudo-checkbox",1),R(1),r(2,"span",2,0),R(4,1),l(),v(5,Hm,1,1,"mat-pseudo-checkbox",3),v(6,jm,2,1,"span",4),D(7,"div",5)),t&2&&(y(n.multiple?0:-1),m(5),y(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),m(),y(n.group&&n.group._inert?6:-1),m(),b("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[Ta,Et],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return i})();function ql(i,a,e){if(e.length){let t=a.toArray(),n=e.toArray(),o=0;for(let s=0;s<i+1;s++)t[s].group&&t[s].group===n[o]&&o++;return o}return 0}function Ql(i,a,e,t){return i<e?i:i+a>e+t?Math.max(0,i-t+a):e}var Ia=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[X]})}return i})();var ir=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[si,Ia,wt,X]})}return i})();var Wm=["trigger"],Um=["panel"],qm=[[["mat-select-trigger"]],"*"],Qm=["mat-select-trigger","*"];function $m(i,a){if(i&1&&(r(0,"span",4),d(1),l()),i&2){let e=f();m(),O(e.placeholder)}}function Ym(i,a){i&1&&R(0)}function Xm(i,a){if(i&1&&(r(0,"span",11),d(1),l()),i&2){let e=f(2);m(),O(e.triggerValue)}}function Zm(i,a){if(i&1&&(r(0,"span",5),v(1,Ym,1,0)(2,Xm,2,1,"span",11),l()),i&2){let e=f();m(),y(e.customTrigger?1:2)}}function Km(i,a){if(i&1){let e=G();r(0,"div",12,1),u("keydown",function(n){P(e);let o=f();return L(o._handleKeydown(n))}),R(2,1),l()}if(i&2){let e=f();tt(e.panelClass),M("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),N("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Jm=new E("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Z);return()=>Mi(i)}}),eh=new E("MAT_SELECT_CONFIG"),th=new E("MatSelectTrigger"),nr=class{source;value;constructor(a,e){this.source=a,this.value=e}},fi=(()=>{class i{_viewportRuler=c(_t);_changeDetectorRef=c(ie);_elementRef=c(F);_dir=c(Ee,{optional:!0});_idGenerator=c(de);_renderer=c(ve);_parentFormField=c(Dn,{optional:!0});ngControl=c(ft,{self:!0,optional:!0});_liveAnnouncer=c(Qn);_defaultOptions=c(eh,{optional:!0});_animationsDisabled=he();_popoverLocation;_initialized=new T;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,o=ql(e,this.options,this.optionGroups),s=t._getHostElement();e===0&&o===1?n.scrollTop=0:n.scrollTop=Ql(s.offsetTop,s.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new nr(this,e)}_scrollStrategyFactory=c(Jm);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new T;_errorStateTracker;stateChanges=new T;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=x(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(He.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Li(()=>{let e=this.options;return e?e.changes.pipe(Pe(e),Ct(()=>je(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ct(()=>this.optionSelectionChanges))});openedChange=new A;_openedStream=this.openedChange.pipe(me(e=>e),$e(()=>{}));_closedStream=this.openedChange.pipe(me(e=>!e),$e(()=>{}));selectionChange=new A;valueChange=new A;constructor(){let e=c(Xi),t=c(Si,{optional:!0}),n=c(Ft,{optional:!0}),o=c(new St("tabindex"),{optional:!0}),s=c(un,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Zi(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ai(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(te(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(te(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Pe(null),te(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ge(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Do(this._trackedModal,"aria-owns",t),bs(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Do(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,o=t===13||t===32,s=this._keyManager;if(!s.isTyping()&&o&&!Te(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;s.onKeydown(e);let p=this.selected;p&&h!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,o=n===40||n===38,s=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(n===13||n===32)&&t.activeItem&&!Te(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!s&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(h?p.select():p.deselect())})}else{let h=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==h&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Te(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Hi?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new _s(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=je(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(te(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),je(...this.options.map(t=>t._stateChanges)).pipe(te(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Vi(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,o){if(t&1&&De(o,th,5)(o,wt,5)(o,tr,5),t&2){let s;k(s=C())&&(n.customTrigger=s.first),k(s=C())&&(n.options=s),k(s=C())&&(n.optionGroups=s)}},viewQuery:function(t,n){if(t&1&&le(Wm,5)(Um,5)(sa,5),t&2){let o;k(o=C())&&(n.trigger=o.first),k(o=C())&&(n.panel=o.first),k(o=C())&&(n._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&u("keydown",function(s){return n._handleKeydown(s)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(N("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),M("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",I],disableRipple:[2,"disableRipple","disableRipple",I],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:nt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",I],placeholder:"placeholder",required:[2,"required","required",I],multiple:[2,"multiple","multiple",I],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",I],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",nt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",I]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[W([{provide:Cn,useExisting:i},{provide:er,useExisting:i}]),ye],ngContentSelectors:Qm,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(J(qm),r(0,"div",2,0),u("click",function(){return n.open()}),r(3,"div",3),v(4,$m,2,1,"span",4)(5,Zm,3,1,"span",5),l(),r(6,"div",6)(7,"div",7),Bt(),r(8,"svg",8),D(9,"path",9),l()()()(),We(10,Km,3,16,"ng-template",10),u("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(s){return n._handleOverlayKeydown(s)})),t&2){let o=Me(1);m(3),N("id",n._valueId),m(),y(n.empty?4:5),m(6),b("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[Hi,sa],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return i})();var gi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Ot,ir,X,Gt,Re,ir]})}return i})();var ih=["mat-internal-form-field",""],nh=["*"],Fa=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&M("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:ih,ngContentSelectors:nh,decls:1,vars:0,template:function(t,n){t&1&&(J(),R(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var ah=["switch"],oh=["*"];function rh(i,a){i&1&&(r(0,"span",11),Bt(),r(1,"svg",13),D(2,"path",14),l(),r(3,"svg",15),D(4,"path",16),l()())}var sh=new E("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Pa=class{source;checked;constructor(a,e){this.source=a,this.checked=e}},rr=(()=>{class i{_elementRef=c(F);_focusMonitor=c(mt);_changeDetectorRef=c(ie);defaults=c(sh);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Pa(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=he();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new A;toggleChange=new A;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){c(ze).load(ot);let e=c(new St("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=c(de).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Pa(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(t,n){if(t&1&&le(ah,5),t&2){let o;k(o=C())&&(n._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,n){t&2&&(Ke("id",n.id),N("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),tt(n.color?"mat-"+n.color:""),M("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",I],color:"color",disabled:[2,"disabled","disabled",I],disableRipple:[2,"disableRipple","disableRipple",I],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:nt(e)],checked:[2,"checked","checked",I],hideIcon:[2,"hideIcon","hideIcon",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[W([{provide:st,useExisting:xe(()=>i),multi:!0},{provide:bt,useExisting:i,multi:!0}]),ye],ngContentSelectors:oh,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,n){if(t&1&&(J(),r(0,"div",1)(1,"button",2,0),u("click",function(){return n._handleClick()}),D(3,"div",3)(4,"span",4),r(5,"span",5)(6,"span",6)(7,"span",7),D(8,"span",8),l(),r(9,"span",9),D(10,"span",10),l(),v(11,rh,5,0,"span",11),l()()(),r(12,"label",12),u("click",function(s){return s.stopPropagation()}),R(13),l()()),t&2){let o=Me(2);b("labelPosition",n.labelPosition),m(),M("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),b("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),N("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),m(9),b("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),m(),y(n.hideIcon?-1:11),m(),b("for",n.buttonId),N("id",n._labelId)}},dependencies:[Et,Fa],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return i})(),$l=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[rr,X]})}return i})();function ch(i,a){if(i&1){let e=G();r(0,"div",1)(1,"button",2),u("click",function(){P(e);let n=f();return L(n.action())}),d(2),l()()}if(i&2){let e=f();m(2),$(" ",e.data.action," ")}}var dh=["label"];function mh(i,a){}var hh=Math.pow(2,31)-1,Sn=class{_overlayRef;instance;containerInstance;_afterDismissed=new T;_afterOpened=new T;_onAction=new T;_durationTimeoutId;_dismissedByAction=!1;constructor(a,e){this._overlayRef=e,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,hh))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Yl=new E("MatSnackBarData"),Ki=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ph=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),uh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),fh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),Xl=(()=>{class i{snackBarRef=c(Sn);data=c(Yl);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(r(0,"div",0),d(1),l(),v(2,ch,3,1,"div",1)),t&2&&(m(),$(" ",n.data.message,`
`),m(),y(n.hasAction?2:-1))},dependencies:[qe,ph,uh,fh],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),sr="_mat-snack-bar-enter",lr="_mat-snack-bar-exit",gh=(()=>{class i extends li{_ngZone=c(Y);_elementRef=c(F);_changeDetectorRef=c(ie);_platform=c(pe);_animationsDisabled=he();snackBarConfig=c(Ki);_document=c(we);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(Z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new T;_onExit=new T;_onEnter=new T;_animationState="void";_live;_label;_role;_liveElementId=c(de).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===lr?this._completeExit():e===sr&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ae(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(sr)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(sr)},200)))}exit(){return this._destroyed?Pi(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ae(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(lr)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(lr),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,o="mdc-snackbar__label";n.classList.toggle(o,!n.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let o=t[n],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let n=t.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),n=e.querySelector("[aria-live]");if(t&&n){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,n){if(t&1&&le(pt,7)(dh,7),t&2){let o;k(o=C())&&(n._portalOutlet=o.first),k(o=C())&&(n._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,n){t&1&&u("animationend",function(s){return n.onAnimationEnd(s.animationName)})("animationcancel",function(s){return n.onAnimationEnd(s.animationName)}),t&2&&M("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[q],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(r(0,"div",1)(1,"div",2,0)(3,"div",3),We(4,mh,0,0,"ng-template",4),l(),D(5,"div"),l()()),t&2&&(m(5),N("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[pt],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return i})(),_h=new E("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Ki}),ei=(()=>{class i{_live=c(Qn);_injector=c(Z);_breakpointObserver=c(gs);_parentSnackBar=c(i,{optional:!0,skipSelf:!0});_defaultConfig=c(_h);_animationsDisabled=he();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Xl;snackBarContainerComponent=gh;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",n){let o=Q(Q({},this._defaultConfig),n);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=Z.create({parent:n||this._injector,providers:[{provide:Ki,useValue:t}]}),s=new It(this.snackBarContainerComponent,t.viewContainerRef,o),h=e.attach(s);return h.instance.snackBarConfig=t,h.instance}_attach(e,t){let n=Q(Q(Q({},new Ki),this._defaultConfig),t),o=this._createOverlay(n),s=this._attachSnackBarContainer(o,n),h=new Sn(s,o);if(e instanceof et){let p=new rt(e,null,{$implicit:n.data,snackBarRef:h});h.instance=s.attachTemplatePortal(p)}else{let p=this._createInjector(n,h),_=new It(e,void 0,p),S=s.attachComponentPortal(_);h.instance=S.instance}return this._breakpointObserver.observe(ys.HandsetPortrait).pipe(te(o.detachments())).subscribe(p=>{o.overlayElement.classList.toggle(this.handsetCssClass,p.matches)}),n.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(h,n),this._openedSnackBarRef=h,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new $t;t.direction=e.direction;let n=ci(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,h=!s&&e.horizontalPosition!=="center";return s?n.left("0"):h?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,Xt(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Z.create({parent:n||this._injector,providers:[{provide:Sn,useValue:t},{provide:Yl,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ji=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({providers:[ei],imports:[Ot,At,ue,Xl,X]})}return i})();var La=class i{snackBar=c(ei);habitService=c(at);habitLogService=c(jt);constructor(){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",a=>{a.data&&a.data.action==="mark-done"&&this.markHabitAsDone(a.data.habitId)})}notifiedToday=new Set;async requestPermission(){return"Notification"in window?Notification.permission==="granted"?!0:await Notification.requestPermission()!=="granted"?(this.snackBar.open("Notification permission was denied. Reminders won't work.","OK",{duration:5e3}),!1):!0:(this.snackBar.open("This browser does not support notifications.","OK",{duration:3e3}),!1)}async updateAllSchedules(){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await this.habitService.loadHabits(),e=await navigator.serviceWorker.ready;for(let t of a)t.reminderEnabled&&t.startTime&&await this.scheduleNotification(t)}async scheduleNotification(a){let e=await navigator.serviceWorker.ready,t=this.calculateNextTrigger(a.startTime,a.reminderOffset||0,a.frequency,a.days);if(!t)return;let n={body:`Time for your habit: ${a.name}!`,icon:"/assets/icons/icon-128x128.png",badge:"/assets/icons/icon-72x72.png",data:{habitId:a.id},vibrate:[200,100,200],tag:`habit-${a.id}`,actions:[{action:"mark-done",title:"Mark as Done"},{action:"close",title:"Close"}]};"showTrigger"in Notification.prototype&&"TimestampTrigger"in window&&(n.showTrigger=new window.TimestampTrigger(t));try{await e.showNotification(`Trackify: ${a.name}`,n),console.log(`Scheduled notification for ${a.name} at ${new Date(t).toLocaleString()}`)}catch(o){console.error("Error scheduling notification",o)}}calculateNextTrigger(a,e,t,n){let[o,s]=a.split(":").map(Number),h=new Date,p=new Date;if(p.setHours(o,s,0,0),e>0&&p.setMinutes(p.getMinutes()-e),p<=h&&p.setDate(p.getDate()+1),t===1&&n&&n.length>0){let _=!1;for(let S=0;S<7;S++){let U=p.getDay();if(n.includes(U)){_=!0;break}p.setDate(p.getDate()+1)}if(!_)return null}return p.getTime()}async markHabitAsDone(a){let e=new Date().toISOString().split("T")[0];await this.habitLogService.markHabitAsCompleted(a,e),this.snackBar.open("Habit marked as done!","OK",{duration:2e3});let t=await this.habitService.getHabit(a);t&&this.scheduleNotification(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})};var bh=["button"],vh=["*"];function yh(i,a){if(i&1&&(r(0,"div",2),D(1,"mat-pseudo-checkbox",6),l()),i&2){let e=f();m(),b("disabled",e.disabled)}}var Zl=new E("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Kl=new E("MatButtonToggleGroup"),xh={provide:st,useExisting:xe(()=>cr),multi:!0},Va=class{source;value;constructor(a,e){this.source=a,this.value=e}},cr=(()=>{class i{_changeDetector=c(ie);_dir=c(Ee,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=c(de).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new A;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new A;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=c(Zl,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Ai(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Te(e))return;let n=e.target.id,o=this._buttonToggles.toArray().findIndex(h=>h.buttonId===n),s=null;switch(e.keyCode){case 32:case 13:s=this._buttonToggles.get(o)||null;break;case 38:s=this._getNextButton(o,-1);break;case 37:s=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:s=this._getNextButton(o,1);break;case 39:s=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}s&&(e.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(e){let t=new Va(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let s=(e+t*o+n.length)%n.length,h=n.get(s);if(h&&!h.disabled)return h}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,o){if(t&1&&De(o,Na,5),t&2){let s;k(s=C())&&(n._buttonToggles=s)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&u("keydown",function(s){return n._keydown(s)}),t&2&&(N("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),M("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",I],value:"value",multiple:[2,"multiple","multiple",I],disabled:[2,"disabled","disabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",I],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",I]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[W([xh,{provide:Kl,useExisting:i}])]})}return i})(),Na=(()=>{class i{_changeDetectorRef=c(ie);_elementRef=c(F);_focusMonitor=c(mt);_idGenerator=c(de);_animationDisabled=he();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new A;constructor(){c(ze).load(ot);let e=c(Kl,{optional:!0}),t=c(new St("tabindex"),{optional:!0})||"",n=c(Zl,{optional:!0});this._tabIndex=x(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Va(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&le(bh,5),t&2){let o;k(o=C())&&(n._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&u("focus",function(){return n.focus()}),t&2&&(N("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),M("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",I],appearance:"appearance",checked:[2,"checked","checked",I],disabled:[2,"disabled","disabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:vh,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(J(),r(0,"button",1,0),u("click",function(){return n._onButtonClick()}),v(2,yh,2,1,"div",2),r(3,"span",3),R(4),l()(),D(5,"span",4)(6,"span",5)),t&2){let o=Me(1);b("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),N("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),m(2),y(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),m(4),b("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[Et,Ta],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return i})(),Jl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[si,Na,X]})}return i})();var kh=(i,a)=>a.value;function Ch(i,a){if(i&1){let e=G();Be(0,"div",2),zn("click",function(){let n=P(e).$implicit,o=f();return L(o.toggleDay(n.value))}),Be(1,"span",3),d(2),Ze()()}if(i&2){let e=a.$implicit,t=f();M("selected",t.isSelected(e.value)),m(2),O(e.label.substring(0,1))}}var Ba=class i{days=[{label:"Monday",value:0},{label:"Tuesday",value:1},{label:"Wednesday",value:2},{label:"Thursday",value:3},{label:"Friday",value:4},{label:"Saturday",value:5},{label:"Sunday",value:6}];selectedDays=[];onChange=()=>{};onTouched=()=>{};writeValue(a){this.selectedDays=a||[]}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}toggleDay(a){let e=this.selectedDays.indexOf(a);e>-1?this.selectedDays.splice(e,1):this.selectedDays.push(a),this.onChange([...this.selectedDays]),this.onTouched()}isSelected(a){return this.selectedDays.includes(a)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-day-picker"]],features:[W([{provide:st,useExisting:xe(()=>i),multi:!0}])],decls:3,vars:0,consts:[[1,"day-picker-container"],[1,"day-box",3,"selected"],[1,"day-box",3,"click"],[1,"day-name"]],template:function(e,t){e&1&&(Be(0,"div",0),ae(1,Ch,3,3,"div",1,kh),Ze()),e&2&&(m(),oe(t.days))},dependencies:[Se],styles:[".day-picker-container[_ngcontent-%COMP%]{display:flex;gap:10px;width:100%;justify-content:space-between;padding:4px 0}.day-box[_ngcontent-%COMP%]{flex:1;aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:12px;background:#f8fafc;cursor:pointer;transition:all .25s cubic-bezier(.4,0,.2,1);border:1.5px solid #e2e8f0;-webkit-user-select:none;user-select:none}.day-box[_ngcontent-%COMP%]:hover{background:#f1f5f9;border-color:#cbd5e1}.day-box.selected[_ngcontent-%COMP%]{background:var(--primary-50, #eff6ff);border-color:var(--primary-500, #3b82f6);color:var(--primary-600, #2563eb);font-weight:800;box-shadow:0 4px 12px #3b82f626;transform:translateY(-1px)}.day-name[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase}"]})};function Dh(i,a){if(i&1){let e=G();r(0,"div",6),u("click",function(){let n=P(e).$implicit,o=f();return L(o.selectIcon(n))}),r(1,"mat-icon"),d(2),l()()}if(i&2){let e=a.$implicit,t=f();M("selected",t.data.selectedIcon===e),N("title",e),m(2),O(e)}}var za=class i{constructor(a,e){this.dialogRef=a;this.data=e}selectIcon(a){this.dialogRef.close(a)}static \u0275fac=function(e){return new(e||i)(ge(Rt),ge(Zt))};static \u0275cmp=g({type:i,selectors:[["t-icon-picker-dialog"]],decls:10,vars:0,consts:[[1,"p-24"],[1,"df","fd-r","ai-c","jc-sb","mb-20"],[1,"m-0","fs-20","fw-700"],["mat-icon-button","","mat-dialog-close",""],[1,"icon-grid"],[1,"icon-item",3,"selected"],[1,"icon-item",3,"click"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"h2",2),d(3,"Select Icon"),l(),r(4,"button",3)(5,"mat-icon"),d(6,"close"),l()()(),r(7,"div",4),ae(8,Dh,3,4,"div",5,Mt),l()()),e&2&&(m(8),oe(t.data.icons))},dependencies:[Se,be,_e,Qe,da,ue,Ue],styles:[".icon-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;max-height:400px;overflow-y:auto;padding:4px}.icon-item[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:12px;cursor:pointer;border:1px solid #e2e8f0;transition:all .2s ease;background:#fff}.icon-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px;color:#64748b}.icon-item[_ngcontent-%COMP%]:hover{background:#f8fafc;border-color:var(--primary-500);transform:translateY(-2px)}.icon-item.selected[_ngcontent-%COMP%]{background:var(--primary-100);border-color:var(--primary-500)}.icon-item.selected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-700)}.df[_ngcontent-%COMP%]{display:flex}.fd-r[_ngcontent-%COMP%]{flex-direction:row}.ai-c[_ngcontent-%COMP%]{align-items:center}.jc-sb[_ngcontent-%COMP%]{justify-content:space-between}.mb-20[_ngcontent-%COMP%]{margin-bottom:20px}.p-24[_ngcontent-%COMP%]{padding:24px}.m-0[_ngcontent-%COMP%]{margin:0}.fs-20[_ngcontent-%COMP%]{font-size:20px}.fw-700[_ngcontent-%COMP%]{font-weight:700}"]})};var Ha=class i{icons=["star","fitness_center","water_drop","menu_book","check_circle","bolt","local_fire_department","monitor_heart","self_improvement","psychology","directions_run","pool","bedtime","restaurant","shopping_cart","work","school","home","favorite","event","sunny","cloud","spa","coffee","brush","code","camera_alt","music_note","meditation","nature","pets","savings","assignment"];dialog=c(ut);selectedIcon="star";disabled=!1;onChange=()=>{};onTouched=()=>{};openPicker(){if(this.disabled)return;this.dialog.open(za,{width:"400px",data:{icons:this.icons,selectedIcon:this.selectedIcon},panelClass:"custom-dialog-container"}).afterClosed().subscribe(e=>{e&&this.selectIcon(e)})}selectIcon(a){this.selectedIcon=a,this.onChange(a),this.onTouched()}writeValue(a){a&&(this.selectedIcon=a)}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.disabled=a}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-icon-picker"]],inputs:{icons:"icons"},features:[W([{provide:st,useExisting:xe(()=>i),multi:!0}])],decls:8,vars:3,consts:[[1,"picker-trigger",3,"click"],[1,"icon-container"],[1,"picker-label"],[1,"arrow"]],template:function(e,t){e&1&&(r(0,"div",0),u("click",function(){return t.openPicker()}),r(1,"div",1)(2,"mat-icon"),d(3),l()(),r(4,"span",2),d(5,"Choose Icon"),l(),r(6,"mat-icon",3),d(7,"keyboard_arrow_right"),l()()),e&2&&(M("disabled",t.disabled),m(3),O(t.selectedIcon||"star"))},dependencies:[Se,be,_e,Qe,ue],styles:[".icon-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:12px;padding:4px;max-height:250px;overflow-y:auto}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:10px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#94a3b8}.picker-trigger[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:8px 16px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);width:fit-content}.picker-trigger[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:#f1f5f9;border-radius:8px}.picker-trigger[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#64748b}.picker-trigger[_ngcontent-%COMP%]   .picker-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#475569}.picker-trigger[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#94a3b8;margin-left:4px}.picker-trigger[_ngcontent-%COMP%]:hover{border-color:var(--primary-400);background:#f8fafc;box-shadow:0 4px 6px -1px #0000001a}.picker-trigger[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%]{background:var(--primary-100)}.picker-trigger[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-600)}.picker-trigger[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{color:var(--primary-400)}.picker-trigger.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed;pointer-events:none}.icon-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;aspect-ratio:1;border-radius:12px;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);background:#f8fafc;border:2px solid transparent;color:#64748b}.icon-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.icon-item[_ngcontent-%COMP%]:hover:not(.disabled){background:#f1f5f9;color:var(--primary-color, #3b82f6);transform:translateY(-2px);box-shadow:0 4px 12px #0000000d}.icon-item.selected[_ngcontent-%COMP%]{background:var(--primary-color, #3b82f6);color:#fff;border-color:var(--primary-color, #3b82f6);box-shadow:0 4px 12px rgba(var(--primary-rgb, 59, 130, 246),.3);transform:scale(1.05)}.icon-item.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed;filter:grayscale(1)}"]})};var ja=class i{label=it("");placeholder=it("");required=it(!1);disabled=it(!1);hint=it("");id=it(`control-${Math.random().toString(36).substring(2,9)}`);internalValue=x(null);isDisabled=x(!1);isTouched=x(!1);onChange=()=>{};onTouched=()=>{};ngControl=c(ft,{optional:!0,self:!0});constructor(){this.ngControl&&(this.ngControl.valueAccessor=this)}ngOnInit(){this.ngControl?.control?.disabled&&this.isDisabled.set(!0)}updateValue(a){!this.isDisabled()&&!this.disabled()&&(this.internalValue.set(a),this.onChange(a),this.markAsTouched())}markAsTouched(){this.isTouched()||(this.isTouched.set(!0),this.onTouched())}writeValue(a){this.internalValue.set(a)}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.isDisabled.set(a)}get hasError(){return!!(this.ngControl?.invalid&&(this.ngControl?.touched||this.ngControl?.dirty))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,inputs:{label:[1,"label"],placeholder:[1,"placeholder"],required:[1,"required"],disabled:[1,"disabled"],hint:[1,"hint"],id:[1,"id"]}})};var Ga=class i extends ja{hours=null;minutes=null;constructor(){super(),bi(()=>{let a=this.internalValue();if(a){let[e,t]=a.split(":").map(n=>Number(n)||0);this.hours=e,this.minutes=t}else this.hours=null,this.minutes=null})}onTimeChange(){let a=this.hours||0,e=this.minutes||0,t=`${a.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`;this.updateValue(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["lib-duration-picker"]],features:[q],decls:10,vars:6,consts:[[1,"duration-picker-container"],[1,"df","fd-r","ai-c","gap-2"],["appearance","outline",1,"time-field","hide-subscript"],["matInput","","type","number","min","0","max","23","placeholder","00",3,"ngModelChange","ngModel","disabled"],["matInput","","type","number","min","0","max","59","placeholder","00",3,"ngModelChange","ngModel","disabled"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),d(4,"Hours"),l(),r(5,"input",3),ki("ngModelChange",function(o){return wi(t.hours,o)||(t.hours=o),o}),u("ngModelChange",function(){return t.onTimeChange()}),l()(),r(6,"mat-form-field",2)(7,"mat-label"),d(8,"Minutes"),l(),r(9,"input",4),ki("ngModelChange",function(o){return wi(t.minutes,o)||(t.minutes=o),o}),u("ngModelChange",function(){return t.onTimeChange()}),l()()()()),e&2&&(M("disabled",t.isDisabled()),m(5),xi("ngModel",t.hours),b("disabled",t.isDisabled()),m(4),xi("ngModel",t.minutes),b("disabled",t.isDisabled()))},dependencies:[Se,ui,lt,$o,vt,Xo,Yo,Ei,ct,yt,Xe,Wt,Re],encapsulation:2})};var Mh=(i,a)=>a.id,ec=(i,a)=>a.value;function Sh(i,a){if(i&1&&(r(0,"mat-option",12),d(1),l()),i&2){let e=a.$implicit;b("value",e.id),m(),O(e.name)}}function Eh(i,a){if(i&1){let e=G();r(0,"div",27),u("click",function(){let n=P(e).$implicit,o=f();return L(o.selectColor(n))}),l()}if(i&2){let e=a.$implicit,t=f();K("background-color",e)("box-shadow",t.habitForm.value.color===e?"0 0 0 2px #111":"none")}}function Th(i,a){if(i&1&&(r(0,"mat-button-toggle",12),d(1),l()),i&2){let e=a.$implicit;b("value",e.value),m(),O(e.label)}}function Ih(i,a){i&1&&(r(0,"div",21)(1,"span",22),d(2,"Select Custom Days"),l(),D(3,"t-day-picker",28),l())}function Ah(i,a){if(i&1&&(r(0,"mat-button-toggle",12),d(1),l()),i&2){let e=a.$implicit;b("value",e.value),m(),O(e.label)}}function Oh(i,a){i&1&&(r(0,"div",24)(1,"mat-form-field",29)(2,"mat-label"),d(3,"Start Time"),l(),D(4,"input",30),r(5,"mat-icon",31),d(6,"schedule"),l()(),r(7,"mat-form-field",29)(8,"mat-label"),d(9,"End Time"),l(),D(10,"input",32),r(11,"mat-icon",31),d(12,"schedule"),l()()())}function Rh(i,a){i&1&&(r(0,"div",13)(1,"span",22),d(2,"Daily Target"),l(),D(3,"lib-duration-picker",33),l())}function Fh(i,a){i&1&&(r(0,"div",39)(1,"span",14),d(2,"Remind me before start"),l(),D(3,"lib-duration-picker",40),r(4,"span",41),d(5,"Leave at 00:00 for exact start time"),l()())}function Ph(i,a){if(i&1){let e=G();r(0,"div",25)(1,"div",34)(2,"div",35)(3,"span",36),d(4,"Daily Reminder"),l(),r(5,"span",37),d(6,"Get notified when it's time"),l()(),r(7,"mat-slide-toggle",38),u("change",function(n){P(e);let o=f();return L(o.onReminderToggle(n.checked))}),l()(),v(8,Fh,6,0,"div",39),l()}if(i&2){let e,t=f();m(8),y((e=t.habitForm.get("reminderEnabled"))!=null&&e.value?8:-1)}}var Wa=class i{habit=null;close=new A;fb=c(Qi);habitService=c(at);categoryService=c(ri);notificationService=c(La);dialogRef=c(Rt,{optional:!0});dialogData=c(Zt,{optional:!0});get isEditMode(){return!!(this.habit||this.dialogData?.habit)}frequencyOptions=[{label:"Daily",value:0},{label:"Specific Days",value:1}];habitTypeOptions=[{label:"Fixed Time",value:"fixed"},{label:"Flexible ",value:"flexible"}];daysOptions=[{label:"Monday",value:0},{label:"Tuesday",value:1},{label:"Wednesday",value:2},{label:"Thursday",value:3},{label:"Friday",value:4},{label:"Saturday",value:5},{label:"Sunday",value:6}];categoryOptions=x([]);iconOptions=["star","fitness_center","water_drop","menu_book","check_circle","bolt","local_fire_department","monitor_heart","self_improvement","psychology","directions_run","pool","bedtime","restaurant","shopping_cart","work","school","home","favorite","event","sunny","cloud","spa","coffee","brush","code","camera_alt","music_note","meditation","nature","pets","savings","assignment"];presetColors=["#3b82f6","#4ade80","#c084fc","#fba94c","#f472b6","#5eead4","#f87171","#fcd34d"];habitForm=this.fb.group({name:["",He.required],description:[""],icon:["star"],color:["#3b82f6"],frequency:[0,He.required],habitType:["flexible",He.required],startTime:[""],endTime:[""],days:[[]],category:[1,He.required],reminderEnabled:[!1],reminderTime:["08:00"],reminderOffset:["00:00"],duration:["00:00"]});minutesToHHmm(a){let e=Math.floor(a/60),t=a%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}hhmmToMinutes(a){if(!a)return 0;let[e,t]=a.split(":").map(Number);return(e||0)*60+(t||0)}selectColor(a){this.habitForm.patchValue({color:a})}async ngOnInit(){this.categoryOptions.set(await this.categoryService.getCategories());let a=this.habit||this.dialogData?.habit;if(a)this.habitForm.patchValue({name:a.name,description:a.description,icon:a.icon,color:a.color,frequency:a.frequency,habitType:a.habitType||"flexible",startTime:a.startTime||"",endTime:a.endTime||"",days:a.days||[],category:a.category?.id,reminderEnabled:a.reminderEnabled||!1,reminderTime:a.reminderTime||"08:00",reminderOffset:this.minutesToHHmm(a.reminderOffset||0),duration:this.minutesToHHmm(a.duration||0)});else{let e=this.categoryOptions();e.length>0&&this.habitForm.patchValue({category:e[0].id})}}async onReminderToggle(a){a&&(await this.notificationService.requestPermission()||this.habitForm.patchValue({reminderEnabled:!1}))}async onSubmit(){if(this.habitForm.invalid){this.habitForm.markAllAsTouched();return}let a=this.habitForm.value,e=Number(a.category),t=this.categoryOptions().find(_=>_.id===e),n=t?{id:t.id,name:t.name}:{id:0,name:"General"},o=Number(a.frequency),s=a.habitType==="fixed",h=0;if(s&&a.startTime&&a.endTime){let _=this.hhmmToMinutes(a.endTime)-this.hhmmToMinutes(a.startTime);h=_<0?_+1440:_}else h=this.hhmmToMinutes(a.duration);let p={name:a.name,description:a.description||"",icon:a.icon||"star",color:a.color||"#3b82f6",frequency:o,habitType:a.habitType,startTime:s?a.startTime:"",endTime:s?a.endTime:"",days:o===1?a.days:[],category:n,reminderEnabled:s?!!a.reminderEnabled:!1,reminderTime:a.reminderTime||"08:00",reminderOffset:this.hhmmToMinutes(a.reminderOffset),duration:h};if(this.habit?.id||this.dialogData?.habit?.id){let _=this.habit?.id||this.dialogData.habit.id;await this.habitService.updateHabit(_,p)}else await this.habitService.addHabit(p);try{this.notificationService.updateAllSchedules()}catch(_){console.warn("Notification sync failed",_)}this.dialogRef?this.dialogRef.close(!0):this.close.emit(!0)}onCancel(){this.dialogRef?this.dialogRef.close():this.close.emit(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-create-habit"]],inputs:{habit:"habit"},outputs:{close:"close"},decls:56,vars:7,consts:[[1,"animate-slide-in-right","bg-white","h-100","df","fd-c"],[1,"df","fd-r","ai-c","jc-s","pt-24","px-24","pb-8",2,"border-bottom","1px solid var(--border-subtle)"],[1,"df","fd-c","gap-2"],[1,"m-0","fw-800","fs-22","text-primary"],[1,"fs-12","text-secondary","fw-500"],["mat-icon-button","","type","button",1,"close-btn",3,"click"],[1,"df","fd-c","gap-5","p-24",3,"ngSubmit","formGroup"],[1,"df","fd-c","gap-5",2,"overflow-y","auto"],["appearance","outline",1,"w-100","hide-subscript","m-0","p-0"],["matInput","","formControlName","name","placeholder","e.g. Morning meditation","required",""],["matInput","","formControlName","description","placeholder","Why is this habit important?"],["formControlName","category","required",""],[3,"value"],[1,"df","fd-c","gap-2","flex-1"],[1,"fs-13","fw-600","text-primary","uppercase","ls-1"],[1,"df","fd-r","gap-4","flex-wrap"],[1,"cursor-pointer","us-none",2,"width","32px","height","32px","min-width","32px","border-radius","50%","border","3px solid #fff","transition","box-shadow 0.2s","box-sizing","border-box","flex-shrink","0",3,"background-color","box-shadow"],[1,"df","fd-c","gap-2","flex-1",2,"min-width","0"],[1,"fs-13","fw-600","text-primary","uppercase","ls-1",2,"color","#000"],["formControlName","icon",3,"icons"],["formControlName","frequency","required","",1,"switcher-group"],[1,"df","fd-c","gap-2","w-100","pt-8"],[1,"fs-13","fw-600","text-secondary","uppercase","ls-1"],["formControlName","habitType","required",""],[1,"df","fd-r","gap-4"],[1,"df","fd-c","gap-3","mt-16"],["mat-flat-button","","color","primary","type","submit",1,"text-bg","w-100",2,"padding","28px 0","font-size","16px","box-shadow","0 4px 12px rgba(var(--primary-rgb), 0.3)"],[1,"cursor-pointer","us-none",2,"width","32px","height","32px","min-width","32px","border-radius","50%","border","3px solid #fff","transition","box-shadow 0.2s","box-sizing","border-box","flex-shrink","0",3,"click"],["formControlName","days"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","type","time","formControlName","startTime","required",""],["matSuffix",""],["matInput","","type","time","formControlName","endTime","required",""],["formControlName","duration"],[1,"df","fd-r","ai-c","jc-s","p-16","br-12",2,"background-color","#f8fafc","border","1px solid #e2e8f0"],[1,"df","fd-c","gap-1"],[1,"fs-14","fw-600"],[1,"fs-12","text-secondary"],["formControlName","reminderEnabled","color","primary",3,"change"],[1,"df","fd-c","gap-2","p-16","br-12","animate-fade-in",2,"background-color","#fff9fb","border","1px solid #fecdd3"],["formControlName","reminderOffset"],[1,"fs-11","text-secondary","mt-1"]],template:function(e,t){if(e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),d(4),l(),r(5,"span",4),d(6,"Define your routine and goals"),l()(),r(7,"button",5),u("click",function(){return t.onCancel()}),r(8,"mat-icon"),d(9,"close"),l()()(),r(10,"form",6),u("ngSubmit",function(){return t.onSubmit()}),r(11,"div",7)(12,"div",2)(13,"mat-form-field",8)(14,"mat-label"),d(15,"Habit Name"),l(),D(16,"input",9),l()(),r(17,"div",2)(18,"mat-form-field",8)(19,"mat-label"),d(20,"Description (Optional)"),l(),D(21,"input",10),l()(),r(22,"mat-form-field",8)(23,"mat-label"),d(24,"Category"),l(),r(25,"mat-select",11),ae(26,Sh,2,2,"mat-option",12,Mh),l()(),r(28,"div",13)(29,"span",14),d(30,"Color"),l(),r(31,"div",15),ae(32,Eh,1,4,"div",16,Mt),l()(),r(34,"div",17)(35,"span",18),d(36,"Icon"),l(),D(37,"t-icon-picker",19),l(),r(38,"div",17)(39,"span",18),d(40,"Frequency"),l(),r(41,"mat-button-toggle-group",20),ae(42,Th,2,2,"mat-button-toggle",12,ec),l()(),v(44,Ih,4,0,"div",21),r(45,"div",2)(46,"span",22),d(47,"Habit Type"),l(),r(48,"mat-button-toggle-group",23),ae(49,Ah,2,2,"mat-button-toggle",12,ec),l()(),v(51,Oh,13,0,"div",24)(52,Rh,4,0,"div",13),v(53,Ph,9,1,"div",25),l(),r(54,"button",26),d(55),l()()()),e&2){let n,o,s;m(4),O(t.isEditMode?"Update Habit":"New Habit"),m(6),b("formGroup",t.habitForm),m(16),oe(t.categoryOptions()),m(6),oe(t.presetColors),m(5),b("icons",t.iconOptions),m(5),oe(t.frequencyOptions),m(2),y(((n=t.habitForm.get("frequency"))==null?null:n.value)===1?44:-1),m(5),oe(t.habitTypeOptions),m(2),y(((o=t.habitForm.get("habitType"))==null?null:o.value)==="fixed"?51:52),m(2),y(((s=t.habitForm.get("habitType"))==null?null:s.value)==="fixed"?53:-1),m(2),$(" ",t.isEditMode?"Update Habit":"Create Habit"," ")}},dependencies:[Se,$i,pi,lt,vt,hi,Jt,Ft,Ti,ct,yt,Xe,Wt,Ea,Re,gi,fi,wt,ue,qe,Ue,Qe,be,_e,$l,rr,Jl,cr,Na,Ba,Ha,Ga],encapsulation:2})};var en=class i{data=c(Zt);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-confirm-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title","",1,"m-0","pt-24","px-24","pb-8","fw-700"],[1,"px-24","pt-8"],[1,"m-0","fs-16","text-secondary",2,"line-height","1.5"],["align","end",1,"px-24","pb-24","pt-16"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","warn",3,"mat-dialog-close"]],template:function(e,t){e&1&&(r(0,"h2",0),d(1),l(),r(2,"mat-dialog-content",1)(3,"p",2),d(4),l()(),r(5,"mat-dialog-actions",3)(6,"button",4),d(7,"Cancel"),l(),r(8,"button",5),d(9,"Confirm Delete"),l()()),e&2&&(m(),O(t.data.title),m(3),O(t.data.message),m(4),b("mat-dialog-close",!0))},dependencies:[Qe,da,qs,$s,Qs,ue,qe],encapsulation:2})};var qa=["*"],Lh=["content"],Vh=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Nh=["mat-drawer","mat-drawer-content","*"];function Bh(i,a){if(i&1){let e=G();r(0,"div",1),u("click",function(){P(e);let n=f();return L(n._onBackdropClicked())}),l()}if(i&2){let e=f();M("mat-drawer-shown",e._isShowingBackdrop())}}function zh(i,a){i&1&&(r(0,"mat-drawer-content"),R(1,2),l())}var Hh=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],jh=["mat-sidenav","mat-sidenav-content","*"];function Gh(i,a){if(i&1){let e=G();r(0,"div",1),u("click",function(){P(e);let n=f();return L(n._onBackdropClicked())}),l()}if(i&2){let e=f();M("mat-drawer-shown",e._isShowingBackdrop())}}function Wh(i,a){i&1&&(r(0,"mat-sidenav-content"),R(1,2),l())}var Uh=`.mat-drawer-container {
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
`;var qh=new E("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),dr=new E("MAT_DRAWER_CONTAINER"),tn=(()=>{class i extends Tt{_platform=c(pe);_changeDetectorRef=c(ie);_container=c(Tn);constructor(){let e=c(F),t=c(Qt),n=c(Y);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(K("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),M("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[W([{provide:Tt,useExisting:i}]),q],ngContentSelectors:qa,decls:1,vars:0,template:function(t,n){t&1&&(J(),R(0))},encapsulation:2,changeDetection:0})}return i})(),En=(()=>{class i{_elementRef=c(F);_focusTrapFactory=c(qn);_focusMonitor=c(mt);_platform=c(pe);_ngZone=c(Y);_renderer=c(ve);_interactivityChecker=c(Un);_doc=c(we);_container=c(dr,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Ie(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Ie(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Ie(e))}_opened=x(!1);_openedVia=null;_animationStarted=new T;_animationEnd=new T;openedChange=new A(!0);_openedStream=this.openedChange.pipe(me(e=>e),$e(()=>{}));openedStart=this._animationStarted.pipe(me(()=>this.opened),uo(void 0));_closedStream=this.openedChange.pipe(me(e=>!e),$e(()=>{}));closedStart=this._animationStarted.pipe(me(()=>!this.opened),uo(void 0));_destroyed=new T;onPositionChanged=new A;_content;_modeChanged=new T;_injector=c(Z);_changeDetectorRef=c(ie);constructor(){this.openedChange.pipe(te(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Te(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Ae(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Ge(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&le(Lh,5),t&2){let o;k(o=C())&&(n._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(N("align",null)("tabIndex",n.mode!=="side"?"-1":null),K("visibility",!n._container&&!n.opened?"hidden":null),M("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:qa,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(J(),r(0,"div",1,0),R(2),l())},dependencies:[Tt],encapsulation:2,changeDetection:0})}return i})(),Tn=(()=>{class i{_dir=c(Ee,{optional:!0});_element=c(F);_ngZone=c(Y);_changeDetectorRef=c(ie);_animationDisabled=he();_transitionsEnabled=!1;_allDrawers;_drawers=new vi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Ie(e)}_autosize=c(qh);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Ie(e)}_backdropOverride=null;backdropClick=new A;_start=null;_end=null;_left=null;_right=null;_destroyed=new T;_doCheckSubject=new T;_contentMargins={left:null,right:null};_contentMarginChanges=new T;get scrollable(){return this._userContent||this._content}_injector=c(Z);constructor(){let e=c(pe),t=c(_t);this._dir?.change.pipe(te(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(te(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Pe(this._allDrawers),te(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Pe(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Vn(10),te(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(te(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(te(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(te(this._drawers.changes)).subscribe(()=>{Ae({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(te(je(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,o){if(t&1&&De(o,tn,5)(o,En,5),t&2){let s;k(s=C())&&(n._content=s.first),k(s=C())&&(n._allDrawers=s)}},viewQuery:function(t,n){if(t&1&&le(tn,5),t&2){let o;k(o=C())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&M("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[W([{provide:dr,useExisting:i}])],ngContentSelectors:Nh,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(J(Vh),v(0,Bh,1,2,"div",0),R(1),R(2,1),v(3,zh,2,0,"mat-drawer-content")),t&2&&(y(n.hasBackdrop?0:-1),m(3),y(n._content?-1:3))},dependencies:[tn],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return i})(),Ua=(()=>{class i extends tn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[W([{provide:Tt,useExisting:i}]),q],ngContentSelectors:qa,decls:1,vars:0,template:function(t,n){t&1&&(J(),R(0))},encapsulation:2,changeDetection:0})}return i})(),mr=(()=>{class i extends En{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Ie(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=dt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=dt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(N("tabIndex",n.mode!=="side"?"-1":null)("align",null),K("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),M("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[W([{provide:En,useExisting:i}]),q],ngContentSelectors:qa,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(J(),r(0,"div",1,0),R(2),l())},dependencies:[Tt],encapsulation:2,changeDetection:0})}return i})(),tc=(()=>{class i extends Tn{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,o){if(t&1&&De(o,Ua,5)(o,mr,5),t&2){let s;k(s=C())&&(n._content=s.first),k(s=C())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&M("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[W([{provide:dr,useExisting:i},{provide:Tn,useExisting:i}]),q],ngContentSelectors:jh,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(J(Hh),v(0,Gh,1,2,"div",0),R(1),R(2,1),v(3,Wh,2,0,"mat-sidenav-content")),t&2&&(y(n.hasBackdrop?0:-1),m(3),y(n._content?-1:3))},dependencies:[Ua],styles:[Uh],encapsulation:2,changeDetection:0})}return i})(),Qa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Gt,X,Gt]})}return i})();var nc=(i,a)=>a.id,Qh=(i,a)=>a.value;function $h(i,a){if(i&1){let e=G();r(0,"t-create-habit",16),u("close",function(n){P(e);let o=f();return L(o.onDrawerClose(n))}),l()}if(i&2){let e=f();b("habit",e.selectedHabit())}}function Yh(i,a){if(i&1&&(r(0,"mat-option",13),d(1),l()),i&2){let e=a.$implicit;b("value",e.id),m(),O(e.name)}}function Xh(i,a){if(i&1&&(r(0,"div",21)(1,"span",32),d(2),l()()),i&2){let e=f().$implicit;m(2),O(e.category.name)}}function Zh(i,a){if(i&1&&(r(0,"div",22)(1,"span",33),d(2,"\u{1F525}"),l(),r(3,"span",34),d(4),l()()),i&2){let e=f().$implicit;m(4),O(e.currentStreak)}}function Kh(i,a){if(i&1&&(r(0,"div",22)(1,"span",33),d(2,"\u23F0"),l(),r(3,"span",34),d(4),l()()),i&2){let e=f().$implicit;m(4),O(e.duration)}}function Jh(i,a){if(i&1&&(r(0,"p",23),d(1),l()),i&2){let e=f().$implicit;m(),O(e.description)}}function ep(i,a){i&1&&(r(0,"div",25)(1,"span",35),d(2,"Daily"),l()())}function tp(i,a){if(i&1&&(r(0,"div",37),d(1),l()),i&2){let e=a.$implicit,t=f(2).$implicit;K("background-color",t.days!=null&&t.days.includes(e.value)?"#10b981":"#f1f5f9")("color",t.days!=null&&t.days.includes(e.value)?"#fff":"#94a3b8"),m(),$(" ",e.label," ")}}function ip(i,a){if(i&1&&(r(0,"div",26),ae(1,tp,2,5,"div",36,Qh),l()),i&2){let e=f(2);m(),oe(e.allDays)}}function np(i,a){if(i&1){let e=G();r(0,"div",17),u("click",function(){let n=P(e).$implicit,o=f();return L(o.viewDetails(n.id))}),r(1,"div",18)(2,"div",19)(3,"h3",20),d(4),l(),v(5,Xh,3,1,"div",21),v(6,Zh,5,1,"div",22),v(7,Kh,5,1,"div",22),l(),v(8,Jh,2,1,"p",23),r(9,"div",24),v(10,ep,3,0,"div",25)(11,ip,3,0,"div",26),l(),r(12,"div",24)(13,"mat-icon",27),d(14,"emoji_events"),l(),r(15,"span",28),d(16),l()()(),r(17,"div",29)(18,"button",30),u("click",function(n){let o=P(e).$implicit,s=f();return n.stopPropagation(),L(s.editHabit(o))}),r(19,"mat-icon"),d(20,"edit"),l()(),r(21,"button",31),u("click",function(n){let o=P(e).$implicit,s=f();return n.stopPropagation(),L(s.deleteHabit(o))}),r(22,"mat-icon"),d(23,"delete"),l()()()()}if(i&2){let e=a.$implicit,t=f();m(4),O(e.name),m(),y(e.category?5:-1),m(),y(e.currentStreak>0?6:-1),m(),y(e.duration?7:-1),m(),y(e.description?8:-1),m(2),y(e.frequency===t.HabitFrequency.Daily?10:11),m(6),$("Best: ",e.longestStreak," days")}}function ap(i,a){if(i&1){let e=G();r(0,"div",15)(1,"p",38),d(2,"No habits found. Let's create one!"),l(),r(3,"button",39),u("click",function(){P(e);let n=f();return L(n.openCreateHabitDialog())}),d(4,"Quick Create"),l()()}}var $a=class i{habitService=c(at);habitLogService=c(jt);categoryService=c(ri);snackBar=c(ei);dialog=c(ut);router=c(Ht);HabitFrequency=Ci;allDays=[{label:"M",value:0},{label:"T",value:1},{label:"W",value:2},{label:"T",value:3},{label:"F",value:4},{label:"S",value:5},{label:"S",value:6}];habits=x([]);categories=x([]);selectedCategoryId=x("all");selectedHabit=x(null);filteredHabits=re(()=>{let a=this.selectedCategoryId(),e=this.habits();return a==="all"?e:e.filter(t=>t.category?.id===a)});async ngOnInit(){this.categories.set(await this.categoryService.getCategories()),await this.loadHabits()}async loadHabits(){let a=await this.habitService.loadHabits(),e=await Promise.all(a.map(async t=>{let n=await this.habitLogService.getStreakStatus(t.id);return Fe(Q({},t),{currentStreak:n.current,longestStreak:n.longest})}));this.habits.set(e)}openCreateHabitDialog(){this.selectedHabit.set(null),this.drawerOpened=!0}drawerOpened=!1;onDrawerClose(a){this.drawerOpened=!1,a&&this.loadHabits()}editHabit(a){this.selectedHabit.set(a),this.drawerOpened=!0}viewDetails(a){this.router.navigate(["/habits",a])}deleteHabit(a){this.dialog.open(en,{width:"450px",data:{title:"Delete Habit",message:`Are you sure you want to delete "${a.name}"? All associated tracking history for this habit will be permanently lost!`}}).afterClosed().subscribe(async t=>{t&&a.id&&(await this.habitService.deleteHabit(a.id),await this.loadHabits())})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-habits-list"]],decls:22,vars:5,consts:[["drawer",""],[1,"drawer-container",3,"hasBackdrop"],["mode","over","position","end",1,"h-100",2,"width","80%",3,"closedStart","opened"],[3,"habit"],[1,"p-16","df","fd-c","gap-8"],[1,"df","fd-r","ai-c","jc-s"],[1,"m-0","fs-24","fw-700"],[1,"df","fd-r","ai-c","gap-4"],["mat-flat-button","","color","primary",1,"br-8","text-bg",3,"click"],[1,"df","fd-c","gap-4"],["appearance","outline",1,"hide-subscript",2,"width","160px"],[3,"selectionChange","value"],["value","all"],[3,"value"],[1,"habit-card","p-16","b-1-solid","br-8","df","fd-r","ai-c","jc-s","cursor-pointer",2,"transition","all 0.2s","box-shadow","0 2px 8px rgba(0,0,0,0.03)","background-color","#fff"],[1,"empty-state","p-32","df","fd-c","ai-c","gap-4","b-1-dashed","br-8"],[3,"close","habit"],[1,"habit-card","p-16","b-1-solid","br-8","df","fd-r","ai-c","jc-s","cursor-pointer",2,"transition","all 0.2s","box-shadow","0 2px 8px rgba(0,0,0,0.03)","background-color","#fff",3,"click"],[1,"df","fd-c","gap-2",2,"flex","1"],[1,"df","ai-c","gap-2"],[1,"m-0","fw-600","fs-16"],[1,"df","ai-c","gap-1","px-8","py-2","br-4",2,"background-color","#f1f5f9","border","1px solid #e2e8f0"],[1,"df","ai-c","gap-1","px-8","py-2","br-12",2,"background-color","#fff7ed","border","1px solid #ffedd5"],[1,"m-0","mt-4","text-secondary","fs-13","truncate-1"],[1,"df","fd-r","ai-c","gap-2","mt-8"],[1,"px-8","py-2","br-4",2,"background-color","#f0fdf4","border","1px solid #dcfce7"],[1,"df","fd-r","gap-1"],[1,"fs-14","fw-400",2,"width","14px","height","14px","color","#94a3b8"],[1,"fs-11","fw-500","text-secondary","ls-1","uppercase"],[1,"df","fd-r"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],[1,"fs-10","fw-700","uppercase","ls-1",2,"color","#64748b"],[2,"font-size","14px"],[1,"fs-12","fw-700",2,"color","#ea580c"],[1,"fs-10","fw-700","uppercase","ls-1",2,"color","#166534"],[1,"df","ai-c","jc-c",2,"width","18px","height","18px","border-radius","4px","font-size","9px","font-weight","700",3,"background-color","color"],[1,"df","ai-c","jc-c",2,"width","18px","height","18px","border-radius","4px","font-size","9px","font-weight","700"],[1,"m-0","text-secondary"],["mat-stroked-button","","color","primary",3,"click"]],template:function(e,t){e&1&&(r(0,"mat-drawer-container",1)(1,"mat-drawer",2,0),u("closedStart",function(){return t.onDrawerClose(!1)}),v(3,$h,1,1,"t-create-habit",3),l(),r(4,"mat-drawer-content")(5,"div",4)(6,"div",5)(7,"h2",6),d(8,"My Habits"),l(),r(9,"div",7)(10,"button",8),u("click",function(){return t.openCreateHabitDialog()}),d(11," New Habit "),l()()(),r(12,"div",9)(13,"mat-form-field",10)(14,"mat-select",11),u("selectionChange",function(o){return t.selectedCategoryId.set(o.value)}),r(15,"mat-option",12),d(16,"All Categories"),l(),ae(17,Yh,2,2,"mat-option",13,nc),l()(),ae(19,np,24,7,"div",14,nc,!1,ap,5,0,"div",15),l()()()()),e&2&&(b("hasBackdrop",!0),m(),b("opened",t.drawerOpened),m(2),y(t.drawerOpened?3:-1),m(11),b("value",t.selectedCategoryId()),m(3),oe(t.categories()),m(2),oe(t.filteredHabits()))},dependencies:[Qe,ue,qe,Ue,be,_e,gi,Xe,fi,wt,Re,Ji,Qa,En,Tn,tn,Wa],styles:["[_nghost-%COMP%]{height:100%;display:flex}"]})};var ac=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[X]})}return i})();var oc=["*"],rc=`.mdc-list {
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
`,op=["unscopedContent"],rp=["text"],sp=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],lp=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var cp=new E("ListOption"),An=(()=>{class i{_elementRef=c(F);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),dp=(()=>{class i{_elementRef=c(F);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),mp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),sc=(()=>{class i{_listOption=c(cp,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,hostVars:4,hostBindings:function(t,n){t&2&&M("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),hp=(()=>{class i extends sc{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[q]})}return i})(),On=(()=>{class i extends sc{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[q]})}return i})(),pp=new E("MAT_LIST_CONFIG"),In=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Ie(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Ie(e))}_disabled=x(!1);_defaultOptions=c(pp,{optional:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,hostVars:1,hostBindings:function(t,n){t&2&&N("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),up=(()=>{class i{_elementRef=c(F);_ngZone=c(Y);_listBase=c(In,{optional:!0});_platform=c(pe);_hostElement;_isButtonElement;_noopAnimations=he();_avatars;_icons;set lines(e){this._explicitLines=dt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Ie(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Ie(e))}_disabled=x(!1);_subscriptions=new Ce;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(ze).load(ot);let e=c(Eo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new xs(this,this._ngZone,this._hostElement,this._platform,c(Z)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(je(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&t===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,contentQueries:function(t,n,o){if(t&1&&De(o,hp,4)(o,On,4),t&2){let s;k(s=C())&&(n._avatars=s),k(s=C())&&(n._icons=s)}},hostVars:4,hostBindings:function(t,n){t&2&&(N("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),M("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var lc=(()=>{class i extends In{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[W([{provide:In,useExisting:i}]),q],ngContentSelectors:oc,decls:1,vars:0,template:function(t,n){t&1&&(J(),R(0))},styles:[rc],encapsulation:2,changeDetection:0})}return i})(),Ya=(()=>{class i extends up{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Ie(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,n,o){if(t&1&&De(o,dp,5)(o,An,5)(o,mp,5),t&2){let s;k(s=C())&&(n._lines=s),k(s=C())&&(n._titles=s),k(s=C())&&(n._meta=s)}},viewQuery:function(t,n){if(t&1&&le(op,5)(rp,5),t&2){let o;k(o=C())&&(n._unscopedContent=o.first),k(o=C())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,n){t&2&&(N("aria-current",n._getAriaCurrent()),M("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[q],ngContentSelectors:lp,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,n){t&1&&(J(sp),R(0),r(1,"span",1),R(2,1),R(3,2),r(4,"span",2,0),u("cdkObserveContent",function(){return n._updateItemLines(!0)}),R(6,3),l()(),R(7,4),R(8,5),D(9,"div",3))},dependencies:[Gn],encapsulation:2,changeDetection:0})}return i})();var cc=(()=>{class i extends In{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[W([{provide:In,useExisting:i}]),q],ngContentSelectors:oc,decls:1,vars:0,template:function(t,n){t&1&&(J(),R(0))},styles:[rc],encapsulation:2,changeDetection:0})}return i})();var nn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Wn,si,Ia,X,ac]})}return i})();var fp=["input"],gp=["label"],_p=["*"],hr={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},bp=new E("mat-checkbox-default-options",{providedIn:"root",factory:()=>hr}),Je=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(Je||{}),pr=class{source;checked},vp=(()=>{class i{_elementRef=c(F);_changeDetectorRef=c(ie);_ngZone=c(Y);_animationsDisabled=he();_options=c(bp,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new pr;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new A;indeterminateChange=new A;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Je.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){c(ze).load(ot);let e=c(new St("tabindex"),{optional:!0});this._options=this._options||hr,this.color=this._options.color||hr.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=c(de).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Je.Indeterminate):this._transitionCheckState(this.checked?Je.Checked:Je.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=x(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Je.Checked:Je.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case Je.Init:if(t===Je.Checked)return this._animationClasses.uncheckedToChecked;if(t==Je.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Je.Unchecked:return t===Je.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Je.Checked:return t===Je.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Je.Indeterminate:return t===Je.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&le(fp,5)(gp,5),t&2){let o;k(o=C())&&(n._inputElement=o.first),k(o=C())&&(n._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(Ke("id",n.id),N("tabindex",null)("aria-label",null)("aria-labelledby",null),tt(n.color?"mat-"+n.color:"mat-accent"),M("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",I],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",I],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",I],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:nt(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",I],checked:[2,"checked","checked",I],disabled:[2,"disabled","disabled",I],indeterminate:[2,"indeterminate","indeterminate",I]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[W([{provide:st,useExisting:xe(()=>i),multi:!0},{provide:bt,useExisting:i,multi:!0}]),ye],ngContentSelectors:_p,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(J(),r(0,"div",3),u("click",function(s){return n._preventBubblingFromLabel(s)}),r(1,"div",4,0)(3,"div",5),u("click",function(){return n._onTouchTargetClick()}),l(),r(4,"input",6,1),u("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(s){return n._onInteractionEvent(s)}),l(),D(6,"div",7),r(7,"div",8),Bt(),r(8,"svg",9),D(9,"path",10),l(),bo(),D(10,"div",11),l(),D(11,"div",12),l(),r(12,"label",13,2),R(14),l()()),t&2){let o=Me(2);b("labelPosition",n.labelPosition),m(4),M("mdc-checkbox--selected",n.checked),b("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),N("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),m(7),b("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),m(),b("for",n.inputId)}},dependencies:[Et,Fa],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})(),mc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[vp,X]})}return i})();var yp=(i,a)=>a.dateStr;function xp(i,a){if(i&1){let e=G();r(0,"div",5),u("click",function(){let n=P(e).$implicit,o=f();return L(o.onSelectDate(n.dateStr))}),r(1,"span",6),d(2),Xr(3,"titlecase"),l(),r(4,"div",7),d(5),l()()}if(i&2){let e=a.$implicit,t=f();m(),K("color",e.dateStr===t.activeDate()?"var(--text-primary)":"var(--text-secondary)"),m(),$(" ",Zr(3,10,e.dayName)," "),m(2),K("background-color",e.dateStr===t.activeDate()?"var(--text-primary)":"transparent")("color",e.dateStr===t.activeDate()?"var(--background-default)":"var(--text-primary)")("box-shadow",e.dateStr===t.activeDate()?"0 4px 8px var(--primary-light)":"none"),m(),$(" ",e.dayNumber," ")}}var Xa=class i{activeDate=it.required();dateSelected=Kr();dateStrip=x([]);centerDate=new Date;ngOnInit(){if(this.activeDate()){let[a,e,t]=this.activeDate().split("-");this.centerDate=new Date(Number(a),Number(e)-1,Number(t))}this.centerDate.setHours(0,0,0,0),this.generateDateStrip()}getLocalFormattedDate(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}generateDateStrip(){let a=[],e=new Date(this.centerDate);for(let t=-3;t<=3;t++){let n=new Date(e);n.setDate(e.getDate()+t),a.push({date:n,dayName:n.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),dayNumber:n.getDate(),dateStr:this.getLocalFormattedDate(n)})}this.dateStrip.set(a)}shiftDays(a){this.centerDate.setDate(this.centerDate.getDate()+a),this.generateDateStrip()}onSelectDate(a){this.dateSelected.emit(a)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-date-strip"]],inputs:{activeDate:[1,"activeDate"]},outputs:{dateSelected:"dateSelected"},decls:10,vars:0,consts:[[1,"df","fd-r","ai-c","gap-1","w-100","px-24","pb-24",2,"box-sizing","border-box"],["mat-icon-button","","aria-label","Previous week",2,"color","#a1a1aa","flex-shrink","0",3,"click"],[1,"df","fd-r","jc-sb","ai-c","w-100","overflow-x-auto","hide-scrollbar","scroll-smooth"],[1,"df","fd-c","ai-c","gap-2","cursor-pointer",2,"min-width","48px"],["mat-icon-button","","aria-label","Next week",2,"color","#a1a1aa","flex-shrink","0",3,"click"],[1,"df","fd-c","ai-c","gap-2","cursor-pointer",2,"min-width","48px",3,"click"],[1,"fs-12","fw-600","transition-all"],[1,"df","ai-c","jc-c","br-pill","fw-600","fs-16","transition-all",2,"width","48px","height","48px","box-sizing","border-box"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"button",1),u("click",function(){return t.shiftDays(-7)}),r(2,"mat-icon"),d(3,"chevron_left"),l()(),r(4,"div",2),ae(5,xp,6,12,"div",3,yp),l(),r(7,"button",4),u("click",function(){return t.shiftDays(7)}),r(8,"mat-icon"),d(9,"chevron_right"),l()()()),e&2&&(m(5),oe(t.dateStrip()))},dependencies:[be,_e,ue,Ue,os],encapsulation:2})};var Za=class i{dedicatedMinutes=it(0);completedMinutes=it(0);percentage=re(()=>{let a=this.dedicatedMinutes(),e=this.completedMinutes();return a===0?0:Math.min(100,Math.round(e/a*100))});chartData=re(()=>{let a=this.completedMinutes(),e=this.dedicatedMinutes(),t=Math.max(0,e-a),n=Math.max(0,1440-e);return{labels:["Progress"],datasets:[{data:[a],backgroundColor:"#10b981",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Completed"},{data:[t],backgroundColor:"#6366f1",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Remaining"},{data:[n],backgroundColor:"#f1f5f9",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Free Time"}]}});chartOptions={indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:a=>` ${a.dataset.label}: ${this.formatTime(a.raw)}`}}},scales:{x:{stacked:!0,display:!1,max:1440},y:{stacked:!0,display:!1}}};formatTime(a){let e=Math.floor(a/60),t=Math.round(a%60);return e===0?`${t}m`:t===0?`${e}h`:`${e}h ${t}m`}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-time-availability"]],inputs:{dedicatedMinutes:[1,"dedicatedMinutes"],completedMinutes:[1,"completedMinutes"]},decls:28,vars:7,consts:[[1,"df","fd-c","gap-4","p-20","br-24","bg-white",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box"],[1,"df","fd-r","jc-s","ai-c"],[1,"df","fd-c"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"df","fd-c","ai-fe"],[1,"fs-20","fw-900",2,"color","#10b981","line-height","1"],[1,"fs-10","fw-700","text-secondary","uppercase"],[2,"height","12px","width","100%","position","relative"],["baseChart","","type","bar",3,"data","options"],[1,"df","fd-r","jc-sb","ai-c","mt-4","flex-wrap","gap-2"],[1,"df","ai-c","gap-3"],[1,"df","ai-c","gap-1"],[1,"br-pill",2,"width","8px","height","8px","background-color","#10b981"],[1,"fs-11","fw-700","text-secondary"],[1,"br-pill",2,"width","8px","height","8px","background-color","#6366f1"],[1,"br-pill",2,"width","8px","height","8px","background-color","#f1f5f9"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),d(4,"Daily Capacity"),l(),r(5,"h2",4),d(6),l()(),r(7,"div",5)(8,"span",6),d(9),l(),r(10,"span",7),d(11,"Done"),l()()(),r(12,"div",8),D(13,"canvas",9),l(),r(14,"div",10)(15,"div",11)(16,"div",12),D(17,"div",13),r(18,"span",14),d(19),l()(),r(20,"div",12),D(21,"div",15),r(22,"span",14),d(23),l()(),r(24,"div",12),D(25,"div",16),r(26,"span",14),d(27),l()()()()()),e&2&&(m(6),$("",t.formatTime(t.dedicatedMinutes())," total habits"),m(3),$("",t.percentage(),"%"),m(4),b("data",t.chartData())("options",t.chartOptions),m(6),$("",t.formatTime(t.completedMinutes())," Done"),m(4),$("",t.formatTime(t.dedicatedMinutes()-t.completedMinutes())," Left"),m(4),$("",t.formatTime(1440-t.dedicatedMinutes())," Free"))},dependencies:[Se,oi],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};var wp=new E("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Ka=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({providers:[Xi,{provide:wp,useValue:{separatorKeyCodes:[13]}}],imports:[si,X]})}return i})();function kp(i,a){if(i&1){let e=G();r(0,"button",8),u("click",function(){P(e);let n=f();return L(n.isEditMode.set(!0))}),r(1,"mat-icon"),d(2,"edit"),l()()}}function Cp(i,a){if(i&1&&(r(0,"div",9)(1,"span",11),d(2,"Mood"),l(),r(3,"span",15),d(4),l()()),i&2){let e=f(2);m(4),O(e.mood)}}function Dp(i,a){if(i&1&&(r(0,"span",17),d(1),l()),i&2){let e=a.$implicit;m(),O(e)}}function Mp(i,a){if(i&1&&(r(0,"div",10)(1,"span",11),d(2,"Tags"),l(),r(3,"div",16),ae(4,Dp,2,1,"span",17,Mt),l()()),i&2){let e=f(2);m(4),oe(e.selectedTags)}}function Sp(i,a){if(i&1){let e=G();r(0,"div",6),v(1,Cp,5,1,"div",9),v(2,Mp,6,0,"div",10),r(3,"div",10)(4,"span",11),d(5),l(),r(6,"p",12),d(7),l()(),r(8,"div",13)(9,"button",14),u("click",function(){P(e);let n=f();return L(n.close())}),d(10,"Close"),l()()()}if(i&2){let e=f();m(),y(e.mood?1:-1),m(),y(e.selectedTags.size>0?2:-1),m(3),$(" ",e.data.isInFuture?"Plan":"Reflection"," "),m(2),$(" ",e.tempNote||(e.data.isInFuture?"No plan added yet.":"No reflection added yet.")," ")}}function Ep(i,a){if(i&1){let e=G();r(0,"span",31),u("click",function(){let n=P(e).$implicit,o=f(2);return L(o.mood=n)}),d(1),l()}if(i&2){let e=a.$implicit,t=f(2);K("opacity",t.mood===e?"1":"0.4")("filter",t.mood===e?"grayscale(0)":"grayscale(1)"),m(),O(e)}}function Tp(i,a){if(i&1){let e=G();r(0,"div",32),u("click",function(){let n=P(e).$implicit,o=f(2);return L(o.toggleTag(n))}),d(1),l()}if(i&2){let e=a.$implicit,t=f(2);K("background-color",t.selectedTags.has(e)?"var(--primary-light)":"var(--surface-alt)")("color",t.selectedTags.has(e)?"var(--primary-default)":"var(--text-secondary)")("border",t.selectedTags.has(e)?"1px solid var(--primary-default)":"1px solid var(--border-subtle)"),m(),$(" ",e," ")}}function Ip(i,a){if(i&1){let e=G();r(0,"button",33),u("click",function(){P(e);let n=f(2);return L(n.isEditMode.set(!1))}),d(1,"Cancel"),l()}}function Ap(i,a){if(i&1){let e=G();r(0,"button",33),u("click",function(){P(e);let n=f(2);return L(n.close())}),d(1,"Cancel"),l()}}function Op(i,a){if(i&1){let e=G();r(0,"div",7)(1,"div",18)(2,"span",19),d(3,"How do you feel?"),l(),r(4,"div",20),ae(5,Ep,2,5,"span",21,Mt),l()(),r(7,"div",22)(8,"span",19),d(9,"Quick Tags"),l(),r(10,"div",23),ae(11,Tp,2,7,"div",24,Mt),l()(),r(13,"div",25)(14,"span",19),d(15),l(),r(16,"mat-form-field",26)(17,"textarea",27),ki("ngModelChange",function(n){P(e);let o=f();return wi(o.tempNote,n)||(o.tempNote=n),L(n)}),l()()(),r(18,"div",28),v(19,Ip,2,0,"button",29)(20,Ap,2,0,"button",29),r(21,"button",30),u("click",function(){P(e);let n=f();return L(n.save())}),d(22,"Save Entry"),l()()()}if(i&2){let e=f();m(5),oe(e.moods),m(6),oe(e.availableTags),m(4),$(" ",e.data.isInFuture?"Planning":"Reflection"," "),m(2),xi("ngModel",e.tempNote),b("placeholder",e.data.isInFuture?"What is the plan for this day?":"How did it go today?"),m(2),y(e.hasExistingContent?19:20)}}var an=class i{dialogRef=c(Rt);data=c(Zt);moods=["\u{1F525}","\u26A1","\u{1F607}","\u{1F634}","\u{1F912}","\u{1F680}","\u{1F308}"];availableTags=["#Sick","#Travel","#HighEnergy","#WorkStress","#Weekend","#Social"];mood=this.data.log.mood||"";selectedTags=new Set(this.data.log.tags||[]);tempNote=this.data.isInFuture?this.data.log.planNote||"":this.data.log.reflectionNote||"";isEditMode=x(!1);hasExistingContent=!1;ngOnInit(){this.hasExistingContent=!!(this.mood||this.selectedTags.size>0||this.tempNote),this.isEditMode.set(!this.hasExistingContent)}toggleTag(a){this.selectedTags.has(a)?this.selectedTags.delete(a):this.selectedTags.add(a)}save(){let a={mood:this.mood,tags:Array.from(this.selectedTags)};this.data.isInFuture?a.planNote=this.tempNote:a.reflectionNote=this.tempNote,this.dialogRef.close(a)}close(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-habit-log-note-dialog"]],decls:10,vars:4,consts:[[1,"p-24","df","fd-c","gap-4","min-w-320"],[1,"df","fd-r","jc-sb","ai-c","mb-16"],[1,"df","fd-c"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"fs-12","fw-600","text-secondary"],["mat-icon-button","",2,"color","var(--primary-default)"],[1,"df","fd-c","gap-6"],[1,"df","fd-c","gap-4"],["mat-icon-button","",2,"color","var(--primary-default)",3,"click"],[1,"df","fd-c","gap-1"],[1,"df","fd-c","gap-1","mt-4"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"m-0","fs-14","text-primary","br-12","p-12",2,"background","var(--surface-alt)","min-height","60px","line-height","1.5","white-space","pre-wrap"],[1,"df","fd-r","jc-e","mt-12"],["mat-button","",1,"br-12",3,"click"],[1,"fs-28"],[1,"df","fd-r","flex-wrap","gap-2","pt-2"],[1,"px-8","py-2","br-8","fs-12","fw-600",2,"background","var(--surface-alt)","color","var(--text-secondary)","border","1px solid var(--border-subtle)"],[1,"df","fd-c","gap-2","mb-8"],[1,"fs-12","fw-700","text-secondary","uppercase","ls-1"],[1,"df","fd-r","gap-3","fs-24","py-8"],[1,"cursor-pointer","transition-all","hover-scale",3,"opacity","filter"],[1,"df","fd-c","gap-2","mb-12"],[1,"df","fd-r","flex-wrap","gap-2","pt-4"],[1,"px-10","py-4","br-12","fs-12","fw-600","transition-all","cursor-pointer",3,"background-color","color","border"],[1,"df","fd-c","gap-2"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","maxlength","300","rows","4",3,"ngModelChange","ngModel","placeholder"],[1,"df","fd-r","jc-e","gap-2","mt-20"],["mat-button",""],["mat-flat-button","","color","primary",1,"br-12","px-20","text-bg",3,"click"],[1,"cursor-pointer","transition-all","hover-scale",3,"click"],[1,"px-10","py-4","br-12","fs-12","fw-600","transition-all","cursor-pointer",3,"click"],["mat-button","",3,"click"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),d(4),l(),r(5,"span",4),d(6),l()(),v(7,kp,3,0,"button",5),l(),v(8,Sp,11,4,"div",6)(9,Op,23,4,"div",7),l()),e&2&&(m(4),O(t.data.habitName),m(2),O(t.data.dateStr),m(),y(t.isEditMode()?-1:7),m(),y(t.isEditMode()?9:8))},dependencies:[be,_e,ue,qe,Ue,Qe,Re,Xe,ct,yt,ui,lt,vt,Zo,Ei,Ka,Se],styles:[".hover-scale[_ngcontent-%COMP%]{transition:transform .2s}.hover-scale[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.ls-1[_ngcontent-%COMP%]{letter-spacing:.5px}"]})};var Rp=(i,a)=>a.habit.id;function Fp(i,a){i&1&&(r(0,"mat-icon",16),d(1,"check"),l())}function Pp(i,a){if(i&1&&(r(0,"div",22)(1,"mat-icon",28),d(2,"schedule"),l(),r(3,"span",29),d(4),l()()),i&2){let e=f().$implicit;m(4),$("",e.habit.duration,"m")}}function Lp(i,a){if(i&1&&(r(0,"div",23)(1,"span",30),d(2,"\u{1F525}"),l(),r(3,"span",31),d(4),l()()),i&2){let e=f().$implicit;m(4),O(e.streak)}}function Vp(i,a){i&1&&(r(0,"mat-icon",26),d(1,"sticky_note_2"),l())}function Np(i,a){i&1&&(r(0,"mat-icon",27),d(1,"add_comment"),l())}function Bp(i,a){if(i&1){let e=G();r(0,"div",14),u("click",function(){let n=P(e).$implicit,o=f();return L(o.toggleHabit(n.habit.id))}),r(1,"div",15),v(2,Fp,2,0,"mat-icon",16),l(),r(3,"div",17)(4,"div",18)(5,"mat-icon"),d(6),l()(),r(7,"div",19)(8,"div",20)(9,"h3",21),d(10),l(),v(11,Pp,5,1,"div",22),v(12,Lp,5,1,"div",23),l(),r(13,"p",24),d(14),l()(),r(15,"button",25),u("click",function(n){let o=P(e).$implicit,s=f();return n.stopPropagation(),L(s.openNoteEditor(o))}),v(16,Vp,2,0,"mat-icon",26)(17,Np,2,0,"mat-icon",27),l()()()}if(i&2){let e=a.$implicit;m(),K("background-color",e.completed?"#f97316":"#fff")("border",e.completed?"none":"2px solid #cbd5e1"),m(),y(e.completed?2:-1),m(),K("opacity",e.completed?"0.7":"1"),m(),K("background-color",e.habit.color+"20"),m(),K("color",e.habit.color),m(),O(e.habit.icon),m(3),K("text-decoration",e.completed?"line-through":"none"),m(),$(" ",e.habit.name," "),m(),y(e.habit.duration?11:-1),m(),y(e.streak>0?12:-1),m(2),O(e.habit.description||"No description"),m(2),y(e.hasNote?16:17)}}function zp(i,a){i&1&&(r(0,"div",13)(1,"mat-icon",32),d(2,"event_busy"),l(),r(3,"span",33),d(4,"No routines for this day!"),l()())}var Ja=class i{habitService=c(at);habitLogService=c(jt);dialog=c(ut);activeDateStr=x("");habitsView=x([]);totalDedicatedMinutes=re(()=>this.habitsView().reduce((a,e)=>a+(e.habit.duration||0),0));completedMinutes=re(()=>this.habitsView().filter(a=>a.completed).reduce((a,e)=>a+(e.habit.duration||0),0));activeDateDisplay=re(()=>{let a=this.activeDateStr();if(!a)return"";let[e,t,n]=a.split("-");return new Date(Number(e),Number(t)-1,Number(n)).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"})});userName=x("Budi");greeting=re(()=>{let a=new Date().getHours();return a<12?"Morning":a<17?"Afternoon":"Evening"});async ngOnInit(){this.activeDateStr.set(this.getLocalFormattedDate(new Date)),this.loadHabitsForActiveDate();let a=await Ye.users.orderBy("id").first();a&&this.userName.set(a.name.split(" ")[0])}getLocalFormattedDate(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}selectDate(a){this.activeDateStr.set(a),this.loadHabitsForActiveDate()}async loadHabitsForActiveDate(){let a=await this.habitService.loadHabits(),e=await this.habitLogService.getLogsForDate(this.activeDateStr()),t=new Set(e.map(ee=>ee.habitId)),[n,o,s]=this.activeDateStr().split("-"),p=new Date(Number(n),Number(o)-1,Number(s)).getDay(),S={0:6,1:0,2:1,3:2,4:3,5:4,6:5}[p],U=a.filter(ee=>ee.frequency===0?!0:ee.days&&Array.isArray(ee.days)&&ee.days.length>0?ee.days.includes(S):!1),V=await Promise.all(U.map(async ee=>{let fe=await this.habitLogService.getStreakStatus(ee.id),ne=e.find(kt=>kt.habitId===ee.id);return{habit:ee,completed:t.has(ee.id),streak:fe.current,hasNote:!!(ne?.reflectionNote||ne?.planNote||ne?.mood||ne?.tags&&ne.tags.length>0)}}));this.habitsView.set(V)}async toggleHabit(a){let e=await this.habitLogService.toggleCompletion(a,this.activeDateStr()),t=await this.habitLogService.getStreakStatus(a);this.habitsView.update(n=>n.map(o=>o.habit.id===a?Fe(Q({},o),{completed:e,streak:t.current}):o))}async openNoteEditor(a){let e=this.activeDateStr(),[t,n,o]=e.split("-"),s=new Date(Number(t),Number(n)-1,Number(o)),h=new Date;h.setHours(0,0,0,0);let p=s.getTime()>h.getTime(),S=(await this.habitLogService.getLogsForDate(e)).find(V=>V.habitId===a.habit.id)||{habitId:a.habit.id,dateStr:e,completedAt:Date.now()};this.dialog.open(an,{width:"450px",autoFocus:!1,restoreFocus:!1,data:{dateStr:e,habitName:a.habit.name,isCompleted:a.completed,isInFuture:p,log:S}}).afterClosed().subscribe(async V=>{V&&(await this.habitLogService.saveLogData(a.habit.id,e,V),this.loadHabitsForActiveDate())})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-today"]],decls:18,vars:7,consts:[[1,"df","fd-c","w-100"],[1,"df","fd-r","jc-sb","ai-c","gap-2","p-24","pb-16"],[1,"df","fd-c","gap-2"],[1,"m-0","fs-28","fw-700",2,"color","var(--text-primary)","letter-spacing","-0.5px"],[1,"fs-13","fw-500","text-secondary",2,"color","#6b7280"],[3,"dateSelected","activeDate"],[1,"p-24"],[3,"dedicatedMinutes","completedMinutes"],[1,"df","fd-r","jc-sb","ai-c","gap-2","w-100","px-24","mb-16",2,"box-sizing","border-box"],[1,"m-0","fs-18","fw-700",2,"color","var(--text-primary)"],[1,"df","fd-c","gap-4","position-relative","w-100","px-24","pb-80",2,"box-sizing","border-box"],[1,"position-absolute",2,"left","36px","top","20px","bottom","20px","width","0px","border-left","2px dotted #e5e7eb","z-index","0"],[1,"df","fd-r","gap-4","ai-c","w-100","position-relative","z-1",2,"box-sizing","border-box"],[1,"p-32","df","fd-c","ai-c","jc-c","gap-2","br-16","position-relative","z-1","w-100",2,"background-color","var(--surface-default)","box-shadow","0 4px 12px rgba(0,0,0,0.03)","box-sizing","border-box"],[1,"df","fd-r","gap-4","ai-c","w-100","position-relative","z-1",2,"box-sizing","border-box",3,"click"],[1,"df","ai-c","jc-c","cursor-pointer","transition-all","bg-white",2,"width","24px","height","24px","min-width","24px","border-radius","50%","box-sizing","border-box"],[2,"font-size","16px","width","16px","height","16px","color","white"],[1,"p-16","br-16","df","fd-r","ai-c","gap-4","w-100","fg-1",2,"box-shadow","0 4px 12px rgba(0, 0, 0, 0.03)","border","1px solid var(--border-subtle)","box-sizing","border-box","background-color","var(--surface-default)"],[1,"df","ai-c","jc-c",2,"width","48px","height","48px","min-width","48px","border-radius","14px"],[1,"df","fd-c","flex-1","overflow-hidden","gap-1",2,"min-width","0"],[1,"df","fd-r","ai-c","gap-2"],[1,"m-0","fs-15","fw-600","truncate",2,"color","var(--text-primary)"],[1,"df","ai-c","gap-1","px-6","py-1","br-8",2,"background-color","#f1f5f9","border","1px solid #e2e8f0"],[1,"df","ai-c","gap-1","px-6","py-1","br-8",2,"background-color","#fff7ed","border","1px solid #ffedd5"],[1,"m-0","fs-12","fw-500","truncate",2,"color","#a1a1aa"],["mat-icon-button","",2,"color","#94a3b8","width","32px","height","32px","border","1px solid #e2e8f0","border-radius","8px",3,"click"],[2,"font-size","18px","width","18px","height","18px","color","#f97316"],[2,"font-size","18px","width","18px","height","18px"],[2,"font-size","11px","width","11px","height","11px","color","#64748b"],[1,"fs-10","fw-700",2,"color","#64748b"],[2,"font-size","11px"],[1,"fs-10","fw-700",2,"color","#ea580c"],[2,"font-size","48px","width","48px","height","48px","color","#cbd5e1"],[1,"fs-14","fw-600","text-secondary"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),d(4),l(),r(5,"span",4),d(6),l()()(),r(7,"t-date-strip",5),u("dateSelected",function(o){return t.selectDate(o)}),l(),r(8,"div",6),D(9,"t-time-availability",7),l(),r(10,"div",8)(11,"h2",9),d(12,"Daily routine"),l()(),r(13,"div",10),D(14,"div",11),ae(15,Bp,18,19,"div",12,Rp,!1,zp,5,0,"div",13),l()()),e&2&&(m(4),Hn("",t.greeting(),", ",t.userName()),m(2),O(t.activeDateDisplay()),m(),b("activeDate",t.activeDateStr()),m(2),b("dedicatedMinutes",t.totalDedicatedMinutes())("completedMinutes",t.completedMinutes()),m(6),oe(t.habitsView()))},dependencies:[nn,be,_e,mc,ue,Ue,ai,Xa,Za,Qe],styles:[".completed-bg[_ngcontent-%COMP%]{background-color:var(--success-50, #f0fdf4);opacity:.9}"]})};function Hp(i,a){if(i&1&&ni(0,"img",3),i&2){let e=f();K("width",e.size,"px")("height",e.size,"px"),Ke("src",e.avatar,zr)}}function jp(i,a){if(i&1&&(Be(0,"span",4),d(1),Ze()),i&2){let e=f();K("font-size",e.size*.4,"px"),m(),$(" ",e.initials()," ")}}var _i=class i{name="";avatar=null;size=40;circular=!0;initials=re(()=>{if(!this.name)return"?";let a=this.name.trim().split(" ");return a.length>=2?(a[0][0]+a[1][0]).toUpperCase():a[0][0].toUpperCase()});bgColor=re(()=>{let a=["#6366f1","#8b5cf6","#ec4899","#f43f5e","#ef4444","#f59e0b","#10b981","#06b6d4","#3b82f6","#2563eb"],e=0;for(let n=0;n<this.name.length;n++)e=this.name.charCodeAt(n)+((e<<5)-e);let t=Math.abs(e)%a.length;return a[t]});static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-avatar"]],inputs:{name:"name",avatar:"avatar",size:"size",circular:"circular"},decls:3,vars:13,consts:[[1,"avatar-container"],["alt","avatar",2,"object-fit","cover","border-radius","inherit",3,"src","width","height"],[1,"initials",3,"font-size"],["alt","avatar",2,"object-fit","cover","border-radius","inherit",3,"src"],[1,"initials"]],template:function(e,t){e&1&&(Be(0,"div",0),v(1,Hp,1,5,"img",1)(2,jp,2,3,"span",2),Ze()),e&2&&(K("width",t.size,"px")("height",t.size,"px")("min-width",t.size,"px")("min-height",t.size,"px")("background-color",t.avatar?"transparent":t.bgColor())("border-radius",t.circular?"50%":"12px"),m(),y(t.avatar?1:2))},dependencies:[Se],styles:[".avatar-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;overflow:hidden;color:#fff;font-weight:700;-webkit-user-select:none;user-select:none;box-shadow:inset 0 0 0 1px #0000000d}.initials[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:-.5px}"]})};var eo=class i{dialog=c(ut);fb=c(Qi);snackBar=c(ei);activeUser=x(null);profileForm;previewAvatar=null;constructor(){this.profileForm=this.fb.group({name:["",[He.required,He.minLength(2)]],gender:["",He.required]})}async ngOnInit(){let a=await Ye.users.orderBy("id").first();a&&(this.activeUser.set(a),this.previewAvatar=a.avatar||null,this.profileForm.patchValue({name:a.name,gender:a.gender}))}onFileSelected(a){let e=a.target.files[0];if(e){let t=new FileReader;t.onload=n=>{this.previewAvatar=n.target.result},t.readAsDataURL(e)}}async saveProfile(){if(this.profileForm.valid&&this.activeUser()?.id){let a={name:this.profileForm.value.name,gender:this.profileForm.value.gender,avatar:this.previewAvatar||void 0};await Ye.users.update(this.activeUser().id,a),this.snackBar.open("Profile updated successfully!","Close",{duration:3e3}),this.activeUser.update(e=>e?Q(Q({},e),a):null)}}clearAllData(){this.dialog.open(en,{width:"450px",data:{title:"Factory Reset Trackify",message:"Are you absolutely sure you want to permanently erase ALL data? This will instantly wipe out your Profile, active Habits, and entire historical Logs array forever. This cannot be undone!"}}).afterClosed().subscribe(async e=>{e&&(await Ye.users.clear(),await Ye.habits.clear(),await Ye.habitLogs.clear(),await Ye.categories.clear(),window.location.reload())})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-settings"]],decls:60,vars:5,consts:[["fileInput",""],[1,"p-24","df","fd-c","gap-6","font-inter"],[1,"df","fd-c","gap-1"],[1,"m-0","fs-28","fw-700","text-primary"],[1,"m-0","fs-14","fw-500"],[1,"bg-white","br-16","p-24","df","fd-c","gap-6","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","fd-c","gap-2","mb-8"],[1,"m-0","fs-18","fw-700","text-primary"],[1,"m-0","fs-14","text-secondary"],[1,"df","fd-c","gap-6","w-100",3,"ngSubmit","formGroup"],[1,"df","ai-c","gap-8","p-16","br-12"],[1,"cursor-pointer",3,"click"],[3,"name","avatar","size"],["type","file","accept","image/*",2,"display","none",3,"change"],[1,"fs-15","fw-700"],[1,"fs-13","text-secondary"],[1,"df","fd-r","gap-4","flex-wrap"],[1,"df","fd-c","gap-2","flex-1",2,"min-width","200px"],[1,"fs-13","fw-700","text-primary","uppercase","ls-1"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","formControlName","name","placeholder","E.g. Alex","required",""],["formControlName","gender","required",""],["value","male"],["value","female"],["value","other"],[1,"df","jc-fe"],["mat-flat-button","","color","primary","type","submit",1,"fw-700","py-12","px-24","br-8","text-bg",3,"disabled"],[1,"bg-white","br-16","p-24","df","fd-c","gap-4","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"m-0","fs-18","fw-700","text-warn"],[1,"df","fd-c","gap-4"],[1,"df","fd-r","jc-sb","ai-c","p-20","br-8","b-1-solid",2,"border-color","#fca5a5","background-color","#fef2f2","box-sizing","border-box"],[1,"fs-16","fw-700",2,"color","#b91c1c"],[1,"fs-13","fw-500",2,"color","#ef4444"],["mat-flat-button","","color","warn",1,"fw-700","text-bg",3,"click"],[1,"mr-4"]],template:function(e,t){if(e&1){let n=G();r(0,"div",1)(1,"div",2)(2,"h1",3),d(3,"Settings"),l(),r(4,"p",4),d(5,"Manage your application data and preferences"),l()(),r(6,"div",5)(7,"div",6)(8,"h2",7),d(9,"Profile"),l(),r(10,"p",8),d(11,"Update your personal information"),l()(),r(12,"form",9),u("ngSubmit",function(){return t.saveProfile()}),r(13,"div",10)(14,"div",11),u("click",function(){P(n);let s=Me(17);return L(s.click())}),D(15,"t-avatar",12),r(16,"input",13,0),u("change",function(s){return t.onFileSelected(s)}),l()(),r(18,"div",2)(19,"span",14),d(20,"Profile Picture"),l(),r(21,"span",15),d(22,"Click the circle to change your photo"),l()()(),r(23,"div",16)(24,"div",17)(25,"span",18),d(26,"Display Name"),l(),r(27,"mat-form-field",19),D(28,"input",20),l()(),r(29,"div",17)(30,"span",18),d(31,"Gender"),l(),r(32,"mat-form-field",19)(33,"mat-select",21)(34,"mat-option",22),d(35,"Male"),l(),r(36,"mat-option",23),d(37,"Female"),l(),r(38,"mat-option",24),d(39,"Other"),l()()()()(),r(40,"div",25)(41,"button",26),d(42," Save Changes "),l()()()(),r(43,"div",27)(44,"div",6)(45,"h2",28),d(46,"Danger Zone"),l(),r(47,"p",8),d(48,"Irreversible destructive actions against your device's local database. "),l()(),r(49,"div",29)(50,"div",30)(51,"div",2)(52,"span",31),d(53,"Wipe Tracking Data"),l(),r(54,"span",32),d(55,"Permanently delete all habits, logs, categories, and your profile."),l()(),r(56,"button",33),u("click",function(){return t.clearAllData()}),r(57,"mat-icon",34),d(58,"delete_forever"),l(),d(59," Erase "),l()()()()()}if(e&2){let n;m(12),b("formGroup",t.profileForm),m(3),b("name",((n=t.profileForm.get("name"))==null?null:n.value)||"")("avatar",t.previewAvatar)("size",80),m(26),b("disabled",t.profileForm.invalid)}},dependencies:[Se,ue,qe,be,_e,Qe,$i,pi,lt,vt,hi,Jt,Ft,Ti,Re,Xe,ct,yt,gi,fi,wt,Ji,_i],encapsulation:2})};var ur=new E("CdkAccordion"),hc=(()=>{class i{_stateChanges=new T;_openCloseAllActions=new T;id=c(de).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",I]},exportAs:["cdkAccordion"],features:[W([{provide:ur,useExisting:i}]),ye]})}return i})(),pc=(()=>{class i{accordion=c(ur,{optional:!0,skipSelf:!0});_changeDetectorRef=c(ie);_expansionDispatcher=c(Mn);_openCloseAllSubscription=Ce.EMPTY;closed=new A;opened=new A;destroyed=new A;expandedChange=new A;id=c(de).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=x(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",I],disabled:[2,"disabled","disabled",I]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[W([{provide:ur,useValue:void 0}])]})}return i})(),uc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({})}return i})();var Gp=["body"],Wp=["bodyWrapper"],Up=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],qp=["mat-expansion-panel-header","*","mat-action-row"];function Qp(i,a){}var $p=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Yp=["mat-panel-title","mat-panel-description","*"];function Xp(i,a){i&1&&(Be(0,"span",1),Bt(),Be(1,"svg",2),ni(2,"path",3),Ze()())}var fr=new E("MAT_ACCORDION"),fc=new E("MAT_EXPANSION_PANEL"),Zp=(()=>{class i{_template=c(et);_expansionPanel=c(fc,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["ng-template","matExpansionPanelContent",""]]})}return i})(),gc=new E("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),gr=(()=>{class i extends pc{_viewContainerRef=c(gt);_animationsDisabled=he();_document=c(we);_ngZone=c(Y);_elementRef=c(F);_renderer=c(ve);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new A;afterCollapse=new A;_inputChanges=new T;accordion=c(fr,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(de).getId("mat-expansion-panel-header-");constructor(){super();let e=c(gc,{optional:!0});this._expansionDispatcher=c(Mn),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Pe(null),me(()=>this.expanded&&!this._portal),Ge(1)).subscribe(()=>{this._portal=new rt(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-expansion-panel"]],contentQueries:function(t,n,o){if(t&1&&De(o,Zp,5),t&2){let s;k(s=C())&&(n._lazyContent=s.first)}},viewQuery:function(t,n){if(t&1&&le(Gp,5)(Wp,5),t&2){let o;k(o=C())&&(n._body=o.first),k(o=C())&&(n._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,n){t&2&&M("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[W([{provide:fr,useValue:void 0},{provide:fc,useExisting:i}]),q,ye],ngContentSelectors:qp,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,n){t&1&&(J(Up),R(0),r(1,"div",2,0)(3,"div",3,1)(5,"div",4),R(6,1),We(7,Qp,0,0,"ng-template",5),l(),R(8,2),l()()),t&2&&(m(),N("inert",n.expanded?null:""),m(2),b("id",n.id),N("aria-labelledby",n._headerId),m(4),b("cdkPortalOutlet",n._portal))},dependencies:[pt],styles:[`.mat-expansion-panel {
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
`],encapsulation:2,changeDetection:0})}return i})();var _r=(()=>{class i{panel=c(gr,{host:!0});_element=c(F);_focusMonitor=c(mt);_changeDetectorRef=c(ie);_parentChangeSubscription=Ce.EMPTY;constructor(){c(ze).load(ot);let e=this.panel,t=c(gc,{optional:!0}),n=c(new St("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(me(s=>!!(s.hideToggle||s.togglePosition))):Fi;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=je(e.opened,e.closed,o,e._inputChanges.pipe(me(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(me(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Te(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,n){t&1&&u("click",function(){return n._toggle()})("keydown",function(s){return n._keydown(s)}),t&2&&(N("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),K("height",n._getHeaderHeight()),M("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:nt(e)]},ngContentSelectors:Yp,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,n){t&1&&(J($p),Be(0,"span",0),R(1),R(2,1),R(3,2),Ze(),v(4,Xp,3,0,"span",1)),t&2&&(M("mat-content-hide-toggle",!n._showToggle()),m(4),y(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2,changeDetection:0})}return i})();var _c=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return i})(),bc=(()=>{class i extends hc{_keyManager;_ownHeaders=new vi;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Pe(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Yn(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["mat-accordion"]],contentQueries:function(t,n,o){if(t&1&&De(o,_r,5),t&2){let s;k(s=C())&&(n._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,n){t&2&&M("mat-accordion-multi",n.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[W([{provide:fr,useExisting:i}]),q]})}return i})(),vc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[uc,At,X]})}return i})();var Jp=["tooltip"],eu=20;var tu=new E("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Z);return()=>Mi(i,{scrollThrottle:eu})}}),iu=new E("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var yc="tooltip-panel",nu={passive:!0},au=8,ou=8,ru=24,su=200,br=(()=>{class i{_elementRef=c(F);_ngZone=c(Y);_platform=c(pe);_ariaDescriber=c(vs);_focusMonitor=c(mt);_dir=c(Ee);_injector=c(Z);_viewContainerRef=c(gt);_mediaMatcher=c(fs);_document=c(we);_renderer=c(ve);_animationsDisabled=he();_defaultOptions=c(iu,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=xc;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ie(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Ie(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=dt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=dt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new T;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=au}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(te(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new It(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=n.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(te(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof F)return this._overlayRef;this._detach()}let t=this._injector.get(Qt).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${yc}`,o=pn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(te(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Xt(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(tu)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(te(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(te(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(te(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(te(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(Q(Q({},n.main),o.main)),this._addOffset(Q(Q({},n.fallback),o.fallback))])}_addOffset(e){let t=ou,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ae(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:o}=e,s;if(t==="center"?this._dir&&this._dir.value==="rtl"?s=n==="end"?"left":"right":s=n==="start"?"left":"right":s=t==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let h=this._overlayRef;if(h){let p=`${this._cssClassPrefix}-${yc}-`;h.removePanelClass(p+this._currentPosition),h.addPanelClass(p+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,nu))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ae({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Te(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&M("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),xc=(()=>{class i{_changeDetectorRef=c(ie);_elementRef=c(F);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=he();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new T;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ru&&e.width>=su}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:n),t.classList.add(e?n:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(t);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&le(Jp,7),t&2){let o;k(o=C())&&(n._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&u("mouseleave",function(s){return n._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){t&1&&(Be(0,"div",1,0),zn("animationend",function(s){return n._handleAnimationEnd(s)}),Be(2,"div",2),d(3),Ze()()),t&2&&(tt(n.tooltipClass),M("mdc-tooltip--multiline",n._isMultiline),m(3),O(n.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return i})();var wc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[$n,Ot,X,Gt]})}return i})();var kc=(i,a)=>a.id;function cu(i,a){if(i&1&&(r(0,"mat-list-item",20)(1,"mat-icon",21),d(2),l(),r(3,"span",22),d(4),l()()),i&2){let e=a.$implicit;m(),K("color",e.color),m(),O(e.icon),m(2),O(e.name)}}function du(i,a){if(i&1&&(r(0,"div",12)(1,"span",18),d(2,"Assigned Habits"),l(),r(3,"mat-list",19),ae(4,cu,5,4,"mat-list-item",20,kc),l()()),i&2){let e=f().$implicit,t=f();m(4),oe(t.getHabits(e.id))}}function mu(i,a){i&1&&(r(0,"p",13),d(1,"No habits assigned yet"),l())}function hu(i,a){if(i&1){let e=G();r(0,"mat-expansion-panel",10,0)(2,"mat-expansion-panel-header")(3,"mat-panel-title",11),d(4),r(5,"span"),d(6),l()()(),r(7,"div"),v(8,du,6,0,"div",12)(9,mu,2,0,"p",13),l(),r(10,"div",14)(11,"div",15)(12,"button",16),u("click",function(){let n=P(e).$implicit,o=f();return L(o.navigateToDetails(n.id))}),r(13,"mat-icon"),d(14,"insights"),l(),d(15," View Details "),l()(),r(16,"button",17),u("click",function(){let n=P(e).$implicit,o=f();return L(o.deleteCategory(n.id))}),r(17,"mat-icon"),d(18,"delete"),l()()()()}if(i&2){let e=a.$implicit,t=f();m(4),$(" ",e.name," "),m(2),Hn("",t.getHabitCount(e.id)," ",t.getHabitCount(e.id)===1?"habit":"habits"),m(2),y(t.getHabits(e.id).length>0?8:9),m(8),b("disabled",t.getHabitCount(e.id)>0)("matTooltip",t.getHabitCount(e.id)>0?"Cannot delete category with habits":"Delete category")}}var to=class i{categoryService=c(ri);habitService=c(at);router=c(Ht);categories=x([]);habitCounts=x({});habitsByCategory=x({});newCategoryName="";snackBar=c(ei);ngOnInit(){this.loadCategories()}async loadCategories(){let a=await this.categoryService.getCategories();this.categories.set(a);let e=await this.habitService.loadHabits(),t={},n={};e.forEach(o=>{o.category?.id!==void 0&&(t[o.category.id]=(t[o.category.id]||0)+1,n[o.category.id]||(n[o.category.id]=[]),n[o.category.id].push(o))}),this.habitCounts.set(t),this.habitsByCategory.set(n)}getHabits(a){return this.habitsByCategory()[a]||[]}getHabitCount(a){return this.habitCounts()[a]||0}async addCategory(){if(this.newCategoryName.trim()){if(this.checkIfCategoryAlreadyExists()){this.snackBar.open("Category already exists","Close",{duration:2e3});return}await this.categoryService.addCategory(this.newCategoryName.trim()),this.newCategoryName="",await this.loadCategories()}}checkIfCategoryAlreadyExists(){return this.categories().some(a=>a.name.toLowerCase()===this.newCategoryName.trim().toLowerCase())}async deleteCategory(a){if(this.getHabitCount(a)>0){this.snackBar.open("Cannot delete category with habits assigned to it","Close",{duration:3e3});return}await this.categoryService.deleteCategory(a),await this.loadCategories()}navigateToDetails(a){this.router.navigate(["/categories",a])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-categories"]],decls:16,vars:2,consts:[["panel",""],[1,"p-16","df","fd-c","gap-4"],[1,"df","fd-c","gap-4"],[1,"m-0"],[1,"m-0","text-secondary"],[1,"df","ai-c","gap-8",3,"ngSubmit"],["appearance","outline",1,"w-100","m-0","flex-1",2,"margin-bottom","-1.25em"],["matInput","","name","catName","placeholder","e.g. Finances","required","",3,"ngModelChange","ngModel"],["mat-flat-button","","color","primary","type","submit",1,"text-bg",3,"disabled"],[1,"w-100"],["hideToggle","false",1,"br-12","b-1-solid","mb-8"],[1,"fw-600","df","ai-c","jc-s","gap-4","text-secondary"],[1,"df","fd-c","gap-2"],[1,"text-secondary","m-0","px-4"],[1,"df","ai-c","jc-sb","pt-8","bt-1-solid","mt-4"],[1,"df","ai-c","gap-8"],["mat-stroked-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click","disabled","matTooltip"],[1,"fs-12","text-secondary","fw-500","uppercase","px-4"],[1,"p-0"],[1,"h-auto","p-0","mb-4"],["matListItemIcon",""],["matListItemTitle",""]],template:function(e,t){e&1&&(r(0,"div",1)(1,"div",2)(2,"h2",3),d(3,"Categories"),l(),r(4,"p",4),d(5,"Manage your habit categories"),l()(),r(6,"form",5),u("ngSubmit",function(){return t.addCategory()}),r(7,"mat-form-field",6)(8,"mat-label"),d(9,"New Category"),l(),r(10,"input",7),ki("ngModelChange",function(o){return wi(t.newCategoryName,o)||(t.newCategoryName=o),o}),l()(),r(11,"button",8),d(12,"Add"),l()(),r(13,"mat-accordion",9),ae(14,hu,19,6,"mat-expansion-panel",10,kc),l()()),e&2&&(m(10),xi("ngModel",t.newCategoryName),m(),b("disabled",!t.newCategoryName),m(3),oe(t.categories()))},dependencies:[ui,pi,lt,vt,hi,Jt,Ei,Si,nn,lc,Ya,On,An,ue,qe,Ue,be,_e,ct,yt,Xe,Wt,Re,vc,bc,gr,_r,_c,wc,br],styles:["mat-expansion-panel[_ngcontent-%COMP%]{border-radius:12px!important;overflow:hidden;margin-bottom:8px;box-shadow:none!important;border:1px solid var(--outline-variant, #e0e0e0)}mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{border-color:var(--primary, #6366f1)}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 16px!important}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 16px 16px!important}mat-list-item[_ngcontent-%COMP%]{height:40px!important;--mdc-list-item-leading-icon-size: 20px}"]})};var kr=["*"];function pu(i,a){i&1&&R(0)}var uu=["tabListContainer"],fu=["tabList"],gu=["tabListInner"],_u=["nextPaginator"],bu=["previousPaginator"],vu=["content"];function yu(i,a){}var xu=["tabBodyWrapper"],wu=["tabHeader"];function ku(i,a){}function Cu(i,a){if(i&1&&We(0,ku,0,0,"ng-template",12),i&2){let e=f().$implicit;b("cdkPortalOutlet",e.templateLabel)}}function Du(i,a){if(i&1&&d(0),i&2){let e=f().$implicit;O(e.textLabel)}}function Mu(i,a){if(i&1){let e=G();r(0,"div",7,2),u("click",function(){let n=P(e),o=n.$implicit,s=n.$index,h=f(),p=Me(1);return L(h._handleClick(o,p,s))})("cdkFocusChange",function(n){let o=P(e).$index,s=f();return L(s._tabFocusChanged(n,o))}),D(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),v(6,Cu,1,1,null,12)(7,Du,1,1),l()()()}if(i&2){let e=a.$implicit,t=a.$index,n=Me(1),o=f();tt(e.labelClass),M("mdc-tab--active",o.selectedIndex===t),b("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),N("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),b("matRippleTrigger",n)("matRippleDisabled",e.disabled||o.disableRipple),m(3),y(e.templateLabel?6:7)}}function Su(i,a){i&1&&R(0)}function Eu(i,a){if(i&1){let e=G();r(0,"mat-tab-body",13),u("_onCentered",function(){P(e);let n=f();return L(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){P(e);let o=f();return L(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){P(e);let o=f();return L(o._bodyCentered(n))}),l()}if(i&2){let e=a.$implicit,t=a.$index,n=f();tt(e.bodyClass),b("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),N("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Tu=new E("MatTabContent"),Iu=(()=>{class i{template=c(et);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matTabContent",""]],features:[W([{provide:Tu,useExisting:i}])]})}return i})(),Au=new E("MatTabLabel"),Sc=new E("MAT_TAB"),Ou=(()=>{class i extends ws{_closestTab=c(Sc,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[W([{provide:Au,useExisting:i}]),q]})}return i})(),Ec=new E("MAT_TAB_GROUP"),Cr=(()=>{class i{_viewContainerRef=c(gt);_closestTabGroup=c(Ec,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new T;position=null;origin=null;isActive=!1;constructor(){c(ze).load(ot)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new rt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,o){if(t&1&&De(o,Ou,5)(o,Iu,7,et),t&2){let s;k(s=C())&&(n.templateLabel=s.first),k(s=C())&&(n._explicitContent=s.first)}},viewQuery:function(t,n){if(t&1&&le(et,7),t&2){let o;k(o=C())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&N("id",null)},inputs:{disabled:[2,"disabled","disabled",I],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[W([{provide:Sc,useExisting:i}]),ye],ngContentSelectors:kr,decls:1,vars:0,template:function(t,n){t&1&&(J(),Gr(0,pu,1,0,"ng-template"))},encapsulation:2})}return i})(),vr="mdc-tab-indicator--active",Cc="mdc-tab-indicator--no-transition",yr=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(n=>n.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},Ru=(()=>{class i{_elementRef=c(F);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(vr);return}let n=t.getBoundingClientRect(),o=e.width/n.width,s=e.left-n.left;t.classList.add(Cc),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Cc),t.classList.add(vr),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(vr)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I]}})}return i})();var Tc=(()=>{class i extends Ru{elementRef=c(F);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275dir=w({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(N("aria-disabled",!!n.disabled),M("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",I]},features:[q]})}return i})(),Dc={passive:!0},Fu=650,Pu=100,Lu=(()=>{class i{_elementRef=c(F);_changeDetectorRef=c(ie);_viewportRuler=c(_t);_dir=c(Ee,{optional:!0});_ngZone=c(Y);_platform=c(pe);_sharedResizeObserver=c(Da);_injector=c(Z);_renderer=c(ve);_animationsDisabled=he();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new T;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new T;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new A;indexFocused=new A;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Dc),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Dc))}ngAfterContentInit(){let e=this._dir?this._dir.change:Pi("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Vn(32),te(this._destroyed)),n=this._viewportRuler.change(150).pipe(te(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Yn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ae(o,{injector:this._injector}),je(e,n,t,this._items.changes,this._itemsResized()).pipe(te(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?Fi:this._items.changes.pipe(Pe(this._items),Ct(e=>new Nt(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>t.next(o));return e.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),Rr(1),me(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Te(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=t.elementRef.nativeElement,h,p;this._getLayoutDirection()=="ltr"?(h=o,p=h+s):(p=this._tabListInner.nativeElement.offsetWidth-o,h=p-s);let _=this.scrollDistance,S=this.scrollDistance+n;h<_?this.scrollDistance-=_-h:p>S&&(this.scrollDistance+=Math.min(p-S,h-_))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Or(Fu,Pu).pipe(te(je(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(e);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",I],selectedIndex:[2,"selectedIndex","selectedIndex",nt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),Vu=(()=>{class i extends Lu{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new yr(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ce(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,o){if(t&1&&De(o,Tc,4),t&2){let s;k(s=C())&&(n._items=s)}},viewQuery:function(t,n){if(t&1&&le(uu,7)(fu,7)(gu,7)(_u,5)(bu,5),t&2){let o;k(o=C())&&(n._tabListContainer=o.first),k(o=C())&&(n._tabList=o.first),k(o=C())&&(n._tabListInner=o.first),k(o=C())&&(n._nextPaginator=o.first),k(o=C())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&M("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",I]},features:[q],ngContentSelectors:kr,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(J(),r(0,"div",5,0),u("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(s){return n._handlePaginatorPress("before",s)})("touchend",function(){return n._stopInterval()}),D(2,"div",6),l(),r(3,"div",7,1),u("keydown",function(s){return n._handleKeydown(s)}),r(5,"div",8,2),u("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),R(9),l()()(),r(10,"div",10,4),u("mousedown",function(s){return n._handlePaginatorPress("after",s)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),D(12,"div",6),l()),t&2&&(M("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),b("matRippleDisabled",n._disableScrollBefore||n.disableRipple),m(3),M("_mat-animation-noopable",n._animationsDisabled),m(2),N("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),m(5),M("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),b("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Et,Gn],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return i})(),Nu=new E("MAT_TABS_CONFIG"),Mc=(()=>{class i extends pt{_host=c(xr);_ngZone=c(Y);_centeringSub=Ce.EMPTY;_leavingSub=Ce.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Pe(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matTabBodyHost",""]],features:[q]})}return i})(),xr=(()=>{class i{_elementRef=c(F);_dir=c(Ee,{optional:!0});_ngZone=c(Y);_injector=c(Z);_renderer=c(ve);_diAnimationsDisabled=he();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Ce.EMPTY;_position;_previousPosition;_onCentering=new A;_beforeCentering=new A;_afterLeavingCenter=new A;_onCentered=new A(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(ie);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ae(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ae(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&le(Mc,5)(vu,5),t&2){let o;k(o=C())&&(n._portalHost=o.first),k(o=C())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&N("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(r(0,"div",1,0),We(2,yu,0,0,"ng-template",2),l()),t&2&&M("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Mc,Tt],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return i})(),Ic=(()=>{class i{_elementRef=c(F);_changeDetectorRef=c(ie);_ngZone=c(Y);_tabsSubscription=Ce.EMPTY;_tabLabelSubscription=Ce.EMPTY;_tabBodySubscription=Ce.EMPTY;_diAnimationsDisabled=he();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new vi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new A;focusChange=new A;animationDone=new A;selectedTabChange=new A(!0);_groupId;_isServer=!c(pe).isBrowser;constructor(){let e=c(Nu,{optional:!0});this._groupId=c(de).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=t[o];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Pe(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new wr;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=je(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,o){if(t&1&&De(o,Cr,5),t&2){let s;k(s=C())&&(n._allTabs=s)}},viewQuery:function(t,n){if(t&1&&le(xu,5)(wu,5)(xr,5),t&2){let o;k(o=C())&&(n._tabBodyWrapper=o.first),k(o=C())&&(n._tabHeader=o.first),k(o=C())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(N("mat-align-tabs",n.alignTabs),tt("mat-"+(n.color||"primary")),K("--mat-tab-animation-duration",n.animationDuration),M("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",I],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",I],selectedIndex:[2,"selectedIndex","selectedIndex",nt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",nt],disablePagination:[2,"disablePagination","disablePagination",I],disableRipple:[2,"disableRipple","disableRipple",I],preserveContent:[2,"preserveContent","preserveContent",I],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[W([{provide:Ec,useExisting:i}])],ngContentSelectors:kr,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(J(),r(0,"mat-tab-header",3,0),u("indexFocused",function(s){return n._focusChanged(s)})("selectFocusedIndex",function(s){return n.selectedIndex=s}),ae(2,Mu,8,17,"div",4,Mt),l(),v(4,Su,1,0),r(5,"div",5,1),ae(7,Eu,1,10,"mat-tab-body",6,Mt),l()),t&2&&(b("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),qr("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),m(2),oe(n._tabs),m(2),y(n._isServer?4:-1),m(),M("_mat-animation-noopable",n._animationsDisabled()),m(2),oe(n._tabs))},dependencies:[Vu,Tc,us,Et,pt,xr],styles:[`.mdc-tab {
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
`],encapsulation:2})}return i})(),wr=class{index;tab};var Ac=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[X]})}return i})();var zu=()=>["S","M","T","W","T","F","S"],Hu=(i,a)=>a.dateStr;function ju(i,a){if(i&1&&(r(0,"div",66)(1,"mat-icon",71),d(2,"schedule"),l(),d(3),l()),i&2){let e,t=f(2);m(3),$(" ",(e=t.habit())==null?null:e.duration," mins ")}}function Gu(i,a){if(i&1){let e=G();r(0,"div",9),D(1,"div",52),r(2,"div",53)(3,"div",54)(4,"div",55)(5,"mat-icon",56),d(6),l()(),r(7,"div",57)(8,"h1",58),d(9),l(),r(10,"span",59),d(11),l()()(),r(12,"div",60)(13,"button",61),u("click",function(){P(e);let n=f();return L(n.shiftMonth(0))}),r(14,"mat-icon",29),d(15,"edit"),l()(),r(16,"button",62)(17,"mat-icon",29),d(18,"delete_outline"),l()()()(),r(19,"div",63)(20,"div",64)(21,"div",65),d(22),l(),v(23,ju,4,1,"div",66),r(24,"span",67),d(25,"Active monitoring"),l()(),r(26,"div",68)(27,"span",69),d(28,"Target:"),l(),r(29,"span",70),d(30,"100% Consistency"),l()()()()}if(i&2){let e,t,n,o,s,h,p,_,S,U,V=f();m(),K("background","radial-gradient(circle, "+((e=V.habit())==null?null:e.color)+"20 0%, transparent 60%)"),m(3),K("background-color",(t=V.habit())==null?null:t.color)("box-shadow","0 8px 16px -4px "+((n=V.habit())==null?null:n.color)+"60"),m(2),O((o=V.habit())==null?null:o.icon),m(3),O((s=V.habit())==null?null:s.name),m(2),O(((h=V.habit())==null?null:h.description)||"Build consistency every day."),m(10),K("background-color",((p=V.habit())==null?null:p.color)+"15")("color",(_=V.habit())==null?null:_.color),m(),$(" ",((S=V.habit())==null?null:S.frequency)===0?"Daily":"Weekly"," "),m(),y((U=V.habit())!=null&&U.duration?23:-1)}}function Wu(i,a){if(i&1&&(r(0,"div",31),d(1),l()),i&2){let e=a.$implicit;m(),$(" ",e)}}function Uu(i,a){i&1&&D(0,"div",33)}function qu(i,a){if(i&1&&(r(0,"span",73),d(1),l()),i&2){let e=f().$implicit;m(),O(e.mood)}}function Qu(i,a){i&1&&D(0,"div",74)}function $u(i,a){if(i&1){let e=G();r(0,"div",34)(1,"button",72),u("click",function(){let n=P(e).$implicit,o=f();return L(o.openNoteEditor(n))}),d(2),v(3,qu,2,1,"span",73),v(4,Qu,1,0,"div",74),l()()}if(i&2){let e=a.$implicit,t=f();m(),K("width","40px")("height","40px")("background-color",t.getCellBg(e))("color",t.getCellColor(e))("opacity",e.isInFuture?"0.3":"1")("border",e.isToday?"2px solid #1e293b":"none"),m(),$(" ",e.dayNum," "),m(),y(e.mood?3:-1),m(),y(e.hasNote?4:-1)}}function Yu(i,a){if(i&1){let e=G();r(0,"div",50)(1,"button",75),u("click",function(){P(e);let n=f();return L(n.toggleToday())}),r(2,"div",76)(3,"mat-icon",77),d(4),l(),r(5,"span",78),d(6),l()()()()}if(i&2){let e,t=f();m(),K("background-color",t.isDoneToday()?"#f0fdf4":(e=t.habit())==null?null:e.color)("color",t.isDoneToday()?"#10b981":"white")("border",t.isDoneToday()?"2px solid #10b981":"none"),m(3),O(t.isDoneToday()?"task_alt":"check_circle"),m(2),O(t.isDoneToday()?"Marked as Done!":"Mark Today as Done")}}var io=class i{route=c(ss);router=c(Ht);habitService=c(at);habitLogService=c(jt);dialog=c(ut);habitId=x(null);habit=x(null);currentStreak=x(0);bestStreak=x(0);totalCompletions=x(0);activeMonthDate=x(new Date);calendarDays=x([]);emptyDaysPrefix=x([]);completedDateStrings=x(new Set);logsMap=x(new Map);monthlySuccessRate=x(0);reportType=x("weekly");onTabChange(a){let e=["weekly","monthly","yearly"];e[a]&&this.reportType.set(e[a])}chartData=re(()=>{let a=this.reportType(),e=this.completedDateStrings(),t=[],n=new Date;if(n.setHours(0,0,0,0),a==="weekly")for(let o=6;o>=0;o--){let s=new Date(n);s.setDate(s.getDate()-o);let h=this.getLocalFormattedDate(s);t.push({label:s.toLocaleDateString("en-US",{weekday:"short"}),value:e.has(h)?1:0})}else if(a==="monthly")for(let o=3;o>=0;o--){let s=0;for(let h=0;h<7;h++){let p=new Date(n);p.setDate(p.getDate()-(o*7+h)),e.has(this.getLocalFormattedDate(p))&&s++}t.push({label:`W${4-o}`,value:s})}else for(let o=5;o>=0;o--){let s=new Date(n.getFullYear(),n.getMonth()-o,1),h=s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0"),p=0;e.forEach(_=>{_.startsWith(h)&&p++}),t.push({label:s.toLocaleDateString("en-US",{month:"short"}),value:p})}return t});chartDataConfiguration=re(()=>{let a=this.chartData(),e=this.habit(),t=e?e.color:"#3b82f6";return{labels:a.map(n=>n.label),datasets:[{data:a.map(n=>n.value),label:"Completions",backgroundColor:t+"33",borderColor:t,pointBackgroundColor:t,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:t,fill:"origin",tension:.4}]}});chartOptions=re(()=>({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,mode:"index",intersect:!1}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:this.reportType()==="weekly"?1:this.reportType()==="monthly"?7:31}}}));todayStr=x("");isDoneToday=re(()=>this.completedDateStrings().has(this.todayStr()));isTodayConfigured=x(!1);activeMonthDisplay=re(()=>this.activeMonthDate().toLocaleDateString("en-US",{month:"long",year:"numeric"}));async ngOnInit(){this.todayStr.set(this.getLocalFormattedDate(new Date)),this.route.paramMap.subscribe(async e=>{let t=e.get("id");t&&(this.habitId.set(Number(t)),await this.loadData())});let a=new Date;a.setDate(1),this.activeMonthDate.set(a)}goBack(){this.router.navigate(["/habits"])}getLocalFormattedDate(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}async loadData(){let a=this.habitId();if(!a)return;let e=await this.habitService.getHabit(a);e&&this.habit.set(e);let n=(await this.habitLogService.getAllLogs()).filter(V=>V.habitId===a),o=n.filter(V=>V.isCompleted);this.totalCompletions.set(o.length);let s=new Set(o.map(V=>V.dateStr));this.completedDateStrings.set(s);let h=new Map;n.forEach(V=>{h.set(V.dateStr,V)}),this.logsMap.set(h),this.calculateMonthlySuccessRate(n);let _=Array.from(s).sort().reverse().map(V=>{let[ee,fe,ne]=V.split("-");return Math.floor(new Date(Number(ee),Number(fe)-1,Number(ne)).getTime()/864e5)}),S=0,U=0;if(_.length>0){let V=1;S=1;for(let ne=0;ne<_.length-1;ne++)_[ne]-_[ne+1]===1?(V++,V>S&&(S=V)):V=1;let ee=new Date().setHours(0,0,0,0),fe=Math.floor(ee/864e5);if(_[0]===fe||_[0]===fe-1){U=1;for(let ne=0;ne<_.length-1&&_[ne]-_[ne+1]===1;ne++)U++}}this.bestStreak.set(S),this.currentStreak.set(U),this.generateCalendar()}calculateMonthlySuccessRate(a){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1),n=this.todayStr(),o=a.filter(p=>p.isCompleted&&p.dateStr.startsWith(n.substring(0,7))),s=e.getDate(),h=Math.round(o.length/s*100);this.monthlySuccessRate.set(h)}getSuccessRateColor(){let a=this.monthlySuccessRate();return a>=80?"#10b981":a>=50?"#f59e0b":"#ef4444"}shiftMonth(a){let e=new Date(this.activeMonthDate());e.setMonth(e.getMonth()+a),this.activeMonthDate.set(e),this.generateCalendar()}generateCalendar(){let a=new Date(this.activeMonthDate()),e=a.getFullYear(),t=a.getMonth(),n=new Date(e,t,1).getDay(),o=new Date(e,t+1,0).getDate();this.emptyDaysPrefix.set(Array.from({length:n}));let s=[],h=this.todayStr(),p=!1,_={0:6,1:0,2:1,3:2,4:3,5:4,6:5};for(let S=1;S<=o;S++){let U=new Date(e,t,S),V=this.getLocalFormattedDate(U),ee=new Date;ee.setHours(0,0,0,0);let fe=U.getTime()>ee.getTime(),ne=this.completedDateStrings().has(V),kt=_[U.getDay()],ti=!1,Oi=this.habit();Oi&&(Oi.frequency===0||Oi.days&&Array.isArray(Oi.days)&&Oi.days.includes(kt))&&(ti=!0),V===h&&(p=ti);let Ve=this.logsMap().get(V);s.push({date:U,dateStr:V,dayNum:S,isToday:V===h,isInFuture:fe,isCompleted:ne,isConfiguredDay:ti,hasNote:!!(Ve?.reflectionNote||Ve?.planNote||Ve?.mood||Ve?.tags&&Ve.tags.length>0),mood:Ve?.mood,tags:Ve?.tags,planNote:Ve?.planNote,reflectionNote:Ve?.reflectionNote})}this.isTodayConfigured.set(p),this.calendarDays.set(s)}getCellBg(a){return a.isCompleted?"#10b981":a.isConfiguredDay?a.isToday?"#f3f4f6":"#f0fdf4":"transparent"}getCellColor(a){return a.isCompleted?"#ffffff":a.isConfiguredDay?a.isToday?"#111827":"#10b981":"#d1d5db"}openNoteEditor(a){let e=this.habitId();if(!e)return;this.dialog.open(an,{width:"450px",autoFocus:!1,restoreFocus:!1,data:{dateStr:a.dateStr,habitName:this.habit()?.name,isCompleted:a.isCompleted,isInFuture:a.isInFuture,log:this.logsMap().get(a.dateStr)||{habitId:e,dateStr:a.dateStr,completedAt:Date.now()}}}).afterClosed().subscribe(async n=>{n&&(await this.habitLogService.saveLogData(e,a.dateStr,n),await this.loadData())})}async toggleToday(){let a=this.habitId();a&&(await this.habitLogService.toggleCompletion(a,this.todayStr()),await this.loadData())}deleteHabit(){}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-habit-details"]],decls:93,vars:14,consts:[[1,"df","fd-c","w-100","font-inter",2,"background-color","var(--background-default)","min-height","100vh","position","relative"],[1,"df","fd-r","jc-sb","ai-c","p-20","w-100","sticky","top-0","bg-white",2,"z-index","10","box-shadow","0 2px 10px rgba(0,0,0,0.02)","box-sizing","border-box"],[1,"df","fd-r","gap-3","ai-c"],["mat-icon-button","",2,"background-color","var(--surface-alt)","border","1px solid var(--border-subtle)",3,"click"],[2,"color","var(--text-secondary)"],[1,"df","fd-c"],[1,"fs-12","fw-600","text-secondary","uppercase","ls-1"],[1,"fs-18","fw-800","truncate","text-primary",2,"max-width","180px"],[1,"p-38","df","fd-c","gap-6"],[1,"bg-white","br-24","df","fd-c","gap-4","w-100","position-relative",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box","overflow","hidden"],[1,"df","fd-r","flex-wrap","gap-8","jc-s","w-100"],[1,"bg-white","br-20","flex-1","df","fd-c","gap-2","min-w-140",2,"box-shadow","0 4px 12px rgba(0,0,0,0.02)"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#fff7ed","border","1px solid #ffedd5"],[2,"color","#ea580c","font-size","20px","width","20px","height","20px"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-24","fw-900","text-primary"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f0f9ff","border","1px solid #e0f2fe"],[2,"color","#0284c7","font-size","20px","width","20px","height","20px"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f0fdf4","border","1px solid #dcfce7"],[2,"color","#166534","font-size","20px","width","20px","height","20px"],[1,"fs-24","fw-900"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f8fafc","border","1px solid #f1f5f9"],[2,"color","#64748b","font-size","20px","width","20px","height","20px"],[1,"bg-white","br-24","w-100","df","fd-c","gap-6","mt-12",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.03)","box-sizing","border-box"],[1,"df","fd-r","jc-sb","ai-c","mb-20"],[1,"fs-13","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-20","fw-800","text-primary"],[1,"df","fd-r","gap-2",2,"background-color","#f8fafc","padding","4px","border-radius","12px","border","1px solid #f1f5f9"],["mat-icon-button","",2,"color","#64748b","width","36px","height","36px",3,"click"],[2,"font-size","20px"],[1,"df","fd-r","w-100","mb-8",2,"background-color","transparent"],[1,"text-center","fs-11","fw-800",2,"flex","0 0 14.28%","color","#94a3b8","letter-spacing","0.5px"],[1,"df","fd-r","flex-wrap","w-100","gap-y-1"],[2,"flex","0 0 14.28%"],[1,"df","ai-c","jc-c","position-relative",2,"flex","0 0 14.28%","height","48px"],[1,"df","fd-r","jc-c","gap-4","mt-20","pt-20",2,"border-top","1px solid #f1f5f9"],[1,"df","ai-c","gap-1"],[1,"br-4",2,"width","12px","height","12px","background-color","#10b981"],[1,"fs-11","fw-600","text-secondary"],[1,"df","ai-c","gap-1","ml-4"],[1,"br-4",2,"width","12px","height","12px","background-color","#f0fdf4","border","1px solid #dcfce7"],[1,"br-4",2,"width","12px","height","12px","background-color","transparent","border","1px solid #e2e8f0"],[1,"df","fd-r","jc-sb","ai-c","mb-8"],[1,"fs-18","fw-800","text-primary"],["fitInkBarToContent","",2,"width","100%",3,"selectedIndexChange","selectedIndex"],["label","Weekly"],["label","Monthly"],["label","Yearly"],[1,"w-100","mt-16","position-relative",2,"height","180px"],["baseChart","","type","line",3,"data","options"],[1,"p-24","w-100","bg-white","b-t-1-solid","position-fixed",2,"bottom","0","left","0","z-index","100","border-color","#f4f4f5","box-shadow","0 -10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box"],[2,"height","140px","width","100%"],[2,"position","absolute","top","-20px","right","-20px","width","140px","height","140px","border-radius","50%"],[1,"df","fd-r","ai-fs","jc-sb","position-relative","z-1",2,"z-index","1"],[1,"df","fd-r","ai-c","gap-4"],[1,"df","ai-c","jc-c","br-16","text-white",2,"width","56px","height","56px","min-width","56px"],[2,"font-size","28px","width","28px","height","28px"],[1,"df","fd-c","flex-1","overflow-hidden"],[1,"m-0","fs-22","fw-800","text-primary","truncate"],[1,"fs-14","fw-500","text-secondary"],[1,"df","fd-r","gap-1"],["mat-icon-button","",2,"color","#64748b",3,"click"],["mat-icon-button","","color","warn"],[1,"mt-12","pt-20","df","fd-r","jc-sb","ai-c","gap-4","flex-wrap",2,"border-top","1px solid var(--border-subtle)"],[1,"df","fd-r","ai-c","gap-2","flex-wrap"],[1,"px-10","py-4","br-8","fs-11","fw-700","uppercase","ls-1"],[1,"df","ai-c","gap-1","px-10","py-4","br-8","fs-11","fw-700","text-secondary",2,"background-color","var(--surface-alt)"],[1,"fs-13","fw-600","text-secondary"],[1,"df","fd-r","ai-c","gap-1"],[1,"fs-12","fw-700","text-secondary"],[1,"fs-13","fw-800","text-primary"],[2,"font-size","14px","width","14px","height","14px"],[1,"br-12","border-none","df","fd-c","ai-c","jc-c","fw-700","fs-15","cursor-pointer","transition-all","position-relative",3,"click"],[1,"position-absolute","fs-10",2,"top","-2px","right","-2px"],[1,"position-absolute",2,"bottom","4px","width","4px","height","4px","border-radius","50%","background-color","currentColor","opacity","0.8"],["mat-flat-button","",1,"w-100","py-32","fw-800","br-16","transition-all",3,"click"],[1,"df","ai-c","jc-c","gap-3"],[2,"font-size","24px","width","24px","height","24px"],[1,"fs-17"]],template:function(e,t){if(e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),u("click",function(){return t.goBack()}),r(4,"mat-icon",4),d(5,"arrow_back"),l()(),r(6,"div",5)(7,"span",6),d(8,"Habit Details"),l(),r(9,"span",7),d(10),l()()()(),r(11,"div",8),v(12,Gu,31,15,"div",9),r(13,"div",10)(14,"div",11)(15,"div",12)(16,"mat-icon",13),d(17,"local_fire_department"),l()(),r(18,"span",14),d(19,"Current"),l(),r(20,"span",15),d(21),l()(),r(22,"div",11)(23,"div",16)(24,"mat-icon",17),d(25,"emoji_events"),l()(),r(26,"span",14),d(27,"Record"),l(),r(28,"span",15),d(29),l()(),r(30,"div",11)(31,"div",18)(32,"mat-icon",19),d(33,"task_alt"),l()(),r(34,"span",14),d(35,"Success"),l(),r(36,"span",20),d(37),l()(),r(38,"div",11)(39,"div",21)(40,"mat-icon",22),d(41,"done_all"),l()(),r(42,"span",14),d(43,"Total"),l(),r(44,"span",15),d(45),l()()(),r(46,"div",23)(47,"div",24)(48,"div",5)(49,"span",25),d(50,"Consistency Map"),l(),r(51,"span",26),d(52),l()(),r(53,"div",27)(54,"button",28),u("click",function(){return t.shiftMonth(-1)}),r(55,"mat-icon",29),d(56,"chevron_left"),l()(),r(57,"button",28),u("click",function(){return t.shiftMonth(1)}),r(58,"mat-icon",29),d(59,"chevron_right"),l()()()(),r(60,"div",30),ae(61,Wu,2,1,"div",31,yo),l(),r(63,"div",32),ae(64,Uu,1,0,"div",33,yo),ae(66,$u,5,15,"div",34,Hu),l(),r(68,"div",35)(69,"div",36),D(70,"div",37),r(71,"span",38),d(72,"Done"),l()(),r(73,"div",39),D(74,"div",40),r(75,"span",38),d(76,"Missed"),l()(),r(77,"div",39),D(78,"div",41),r(79,"span",38),d(80,"Locked"),l()()()(),r(81,"div",23)(82,"div",42)(83,"span",43),d(84,"Trends"),l()(),r(85,"mat-tab-group",44),u("selectedIndexChange",function(o){return t.onTabChange(o)}),D(86,"mat-tab",45)(87,"mat-tab",46)(88,"mat-tab",47),l(),r(89,"div",48),D(90,"canvas",49),l()()(),v(91,Yu,7,8,"div",50),D(92,"div",51),l()),e&2){let n;m(10),O(((n=t.habit())==null?null:n.name)||"Loading..."),m(2),y(t.habit()?12:-1),m(9),O(t.currentStreak()),m(8),O(t.bestStreak()),m(7),K("color",t.getSuccessRateColor()),m(),$("",t.monthlySuccessRate(),"%"),m(8),O(t.totalCompletions()),m(7),O(t.activeMonthDisplay()),m(9),oe(Yr(13,zu)),m(3),oe(t.emptyDaysPrefix()),m(2),oe(t.calendarDays()),m(19),b("selectedIndex",0),m(5),b("data",t.chartDataConfiguration())("options",t.chartOptions()),m(),y(t.habit()&&t.isTodayConfigured()?91:-1)}},dependencies:[be,_e,ue,qe,Ue,ai,oi,Ac,Cr,Ic,Qe,Re,ct,ui,Ka],encapsulation:2})};var Oc=async()=>{let i=c(Ht);return await Ye.users.count()===0?(i.navigate(["/onboarding"]),!1):!0};var no=class i{fb=c(Qi);router=c(Ht);previewBase64=null;onboardForm=this.fb.group({name:["",[He.required,He.minLength(2)]],gender:["",He.required]});onFileSelected(a){let e=a.target.files[0];if(e){let t=new FileReader;t.onload=n=>{this.previewBase64=n.target.result},t.readAsDataURL(e)}}async onSubmit(){if(this.onboardForm.valid){let a=this.onboardForm.value.gender,e=this.previewBase64;e||(a==="female"?e="https://api.dicebear.com/7.x/lorelei/svg?seed=Bella":a==="male"?e="https://api.dicebear.com/7.x/lorelei/svg?seed=Milo":e="https://api.dicebear.com/7.x/lorelei/svg?seed=Lucky");let t={name:this.onboardForm.value.name,gender:a,avatar:e||void 0,createdAt:Date.now()};await Ye.users.add(t),this.router.navigate(["/dashboard"])}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-onboarding"]],decls:39,vars:5,consts:[["fileInput",""],[1,"df","fd-c","ai-c","jc-c","min-vh-100",2,"background-color","#f7f3f0","padding","24px"],[1,"bg-white","br-24","df","fd-c","gap-8","w-100",2,"max-width","400px","padding","32px","box-shadow","0 12px 32px rgba(0,0,0,0.05)","padding-bottom","48px"],[1,"df","fd-c","ai-c","text-center","gap-4","mb-24"],[1,"df","ai-c","jc-c","br-pill","text-white","mb-8",2,"background","linear-gradient(135deg, #10b981, #3b82f6)","width","80px","height","80px"],[2,"font-size","36px","width","36px","height","36px"],[1,"m-0","fs-28","fw-800","text-primary"],[1,"m-0","fs-16","fw-500","text-secondary"],[1,"df","fd-c","gap-4","w-100",3,"ngSubmit","formGroup"],[1,"df","fd-c","ai-c","gap-2","mb-16","position-relative","w-100"],[1,"cursor-pointer",3,"click"],[3,"name","avatar","size"],["type","file","accept","image/*","capture","user",2,"display","none",3,"change"],[1,"fs-12","fw-600","text-secondary","text-center"],[1,"df","fd-c","gap-2","w-100"],[1,"fs-13","fw-700","text-primary","uppercase","ls-1"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","formControlName","name","placeholder","E.g. Alex","required",""],["formControlName","gender","required",""],["value","male"],["value","female"],["value","other"],["mat-flat-button","","type","submit",1,"w-100","py-24","fw-800","br-12","mt-16","transition-all",2,"background-color","#10b981","color","white",3,"disabled"],[1,"fs-16"],[1,"ml-8",2,"font-size","20px"]],template:function(e,t){if(e&1){let n=G();r(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"mat-icon",5),d(5,"rocket_launch"),l()(),r(6,"h1",6),d(7,"Welcome to Trackify!"),l(),r(8,"p",7),d(9,"Let's set up your profile to get started."),l()(),r(10,"form",8),u("ngSubmit",function(){return t.onSubmit()}),r(11,"div",9)(12,"div",10),u("click",function(){P(n);let s=Me(15);return L(s.click())}),D(13,"t-avatar",11),r(14,"input",12,0),u("change",function(s){return t.onFileSelected(s)}),l()(),r(16,"span",13),d(17,"Upload Photo (Optional)"),l()(),r(18,"div",14)(19,"span",15),d(20,"Your Name"),l(),r(21,"mat-form-field",16),D(22,"input",17),l()(),r(23,"div",14)(24,"span",15),d(25,"Gender"),l(),r(26,"mat-form-field",16)(27,"mat-select",18)(28,"mat-option",19),d(29,"Male"),l(),r(30,"mat-option",20),d(31,"Female"),l(),r(32,"mat-option",21),d(33,"Prefer not to say"),l()()()(),r(34,"button",22)(35,"span",23),d(36,"Get Started"),l(),r(37,"mat-icon",24),d(38,"arrow_forward"),l()()()()()}if(e&2){let n;m(10),b("formGroup",t.onboardForm),m(3),b("name",((n=t.onboardForm.get("name"))==null?null:n.value)||"")("avatar",t.previewBase64)("size",100),m(21),b("disabled",!t.onboardForm.valid)}},dependencies:[$i,pi,lt,vt,hi,Jt,Ft,Ti,Re,Xe,gi,fi,wt,ct,yt,ue,qe,be,_e,_i],encapsulation:2})};var Rc=[{path:"onboarding",component:no},{path:"",canActivate:[Oc],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:Kn},{path:"habits",component:$a},{path:"habits/:id",component:io},{path:"today",component:Ja},{path:"categories",component:to},{path:"categories/:id",loadComponent:()=>import("./chunk-J3OECO35.js").then(i=>i.CategoryDetails)},{path:"settings",component:eo}]}];var Dr="Service workers are disabled or not supported by this browser",on=class{serviceWorker;worker;registration;events;constructor(a,e){if(this.serviceWorker=a,!a)this.worker=this.events=this.registration=new Nt(t=>t.error(new Dt(5601,!1)));else{let t=null,n=new T;this.worker=new Nt(_=>(t!==null&&_.next(t),n.subscribe(S=>_.next(S))));let o=()=>{let{controller:_}=a;_!==null&&(t=_,n.next(t))};a.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(Ct(()=>a.getRegistration().then(_=>{if(!_)throw new Dt(5601,!1);return _})));let s=new T;this.events=s.asObservable();let h=_=>{let{data:S}=_;S?.type&&s.next(S)};a.addEventListener("message",h),e?.get(yi,null,{optional:!0})?.onDestroy(()=>{a.removeEventListener("controllerchange",o),a.removeEventListener("message",h)})}}postMessage(a,e){return new Promise(t=>{this.worker.pipe(Ge(1)).subscribe(n=>{n.postMessage(Q({action:a},e)),t()})})}postMessageWithOperation(a,e,t){let n=this.waitForOperationCompleted(t),o=this.postMessage(a,e);return Promise.all([o,n]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(a){let e;return typeof a=="string"?e=t=>t.type===a:e=t=>a.includes(t.type),this.events.pipe(me(e))}nextEventOfType(a){return this.eventsOfType(a).pipe(Ge(1))}waitForOperationCompleted(a){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(me(n=>n.nonce===a),Ge(1),$e(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},Xu=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new T;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=ii,this.notificationClicks=ii,this.notificationCloses=ii,this.pushSubscriptionChanges=ii,this.subscription=ii;return}this.messages=this.sw.eventsOfType("PUSH").pipe($e(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe($e(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe($e(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe($e(n=>n.data)),this.pushManager=this.sw.registration.pipe($e(n=>n.pushManager));let t=this.pushManager.pipe(Ct(n=>n.getSubscription()));this.subscription=new Nt(n=>{let o=t.subscribe(n),s=this.subscriptionChanges.subscribe(n);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Dr));let t={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(n.length));for(let s=0;s<n.length;s++)o[s]=n.charCodeAt(s);return t.applicationServerKey=o,new Promise((s,h)=>{this.pushManager.pipe(Ct(p=>p.subscribe(t)),Ge(1)).subscribe({next:p=>{this.subscriptionChanges.next(p),s(p)},error:h})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Dr));let e=t=>{if(t===null)throw new Dt(5602,!1);return t.unsubscribe().then(n=>{if(!n)throw new Dt(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,n)=>{this.subscription.pipe(Ge(1),Ct(e)).subscribe({next:t,error:n})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(_o(on))};static \u0275prov=se({token:i,factory:i.\u0275fac})}return i})(),Zu=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=ii,this.unrecoverable=ii;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Dr));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Dt(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(_o(on))};static \u0275prov=se({token:i,factory:i.\u0275fac})}return i})(),Pc=new E("");function Ku(){let i=c(Rn);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let a=c(Pc),e=c(Y),t=c(yi);e.runOutsideAngular(()=>{let n=navigator.serviceWorker,o=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",o),t.onDestroy(()=>{n.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let n,{registrationStrategy:o}=i;if(typeof o=="function")n=new Promise(s=>o().subscribe(()=>s()));else{let[s,...h]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=Fc(+h[0]||0);break;case"registerWhenStable":n=Promise.race([t.whenStable(),Fc(+h[0])]);break;default:throw new Dt(5600,!1)}}n.then(()=>{t.destroyed||navigator.serviceWorker.register(a,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(s=>console.error(Pr(5604,!1)))})})}function Fc(i){return new Promise(a=>setTimeout(a,i))}function Ju(){let i=c(Rn),a=c(Z),e=!0;return new on(e&&i.enabled!==!1?navigator.serviceWorker:void 0,a)}var Rn=class{enabled;updateViaCache;type;scope;registrationStrategy};function Lc(i,a={}){return Lr([Xu,Zu,{provide:Pc,useValue:i},{provide:Rn,useValue:a},{provide:on,useFactory:Ju},Ur(Ku)])}var Vc={providers:[Nr(),ds(Rc),Lc("ngsw-worker.js",{enabled:!es(),registrationStrategy:"registerWhenStable:30000"}),Vr(Ji),hs(ms())]};var rn=class i{isDarkMode=x(!1);constructor(){this.initializeTheme()}initializeTheme(){localStorage.getItem("theme")==="dark"?this.setDarkMode(!0):this.setDarkMode(!1)}setDarkMode(a){this.isDarkMode.set(a),a?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}toggleTheme(){this.setDarkMode(!this.isDarkMode())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})};var ef=[[["t-header"]],"*"],tf=["t-header","*"];function nf(i,a){i&1&&(r(0,"div",17)(1,"div",18)(2,"mat-icon"),d(3,"home"),l()(),r(4,"div",19)(5,"mat-icon"),d(6,"favorite"),l()(),r(7,"div",20)(8,"div",21)(9,"mat-icon"),d(10,"add"),l()()(),r(11,"div",22)(12,"mat-icon"),d(13,"category"),l()(),r(14,"div",23)(15,"mat-icon"),d(16,"person"),l()()())}var ao=class i{title=x("Trackify");isSidenavOpened=x(!0);isMobile=x(!1);activeUser=x(null);themeService=c(rn);async ngOnInit(){this.checkScreenSize();let a=await Ye.users.orderBy("id").first();a&&this.activeUser.set(a)}onResize(){this.checkScreenSize()}checkScreenSize(){let a=window.innerWidth<=768;this.isMobile.set(a),a?this.isSidenavOpened.set(!1):this.isSidenavOpened.set(!0)}toggleSidenav(){this.isSidenavOpened.update(a=>!a)}closeOnMobile(){this.isMobile()&&this.isSidenavOpened.set(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-sidenav"]],hostBindings:function(e,t){e&1&&u("resize",function(){return t.onResize()},Hr)},ngContentSelectors:tf,decls:41,vars:6,consts:[[2,"height","100vh"],[2,"width","260px","box-shadow","2px 0 6px rgb(0 0 0 / 10%)",3,"opened","mode","autoFocus"],[1,"df","fd-c","h-100",2,"height","100%"],[1,"p-16","df","ai-c","gap-8",2,"height","64px","box-sizing","border-box"],["color","primary",1,"fs-24"],[1,"fs-20",2,"font-weight","500"],[2,"flex","1"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/today","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/habits","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/categories","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/settings","routerLinkActive","active",3,"click"],[2,"background-color","var(--background-alt)"],[1,"app-router-wrapper",2,"overflow-y","auto"],[1,"h-100"],[1,"mobile-bottom-nav"],["routerLink","/dashboard","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/today","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/habits",1,"nav-center-item"],[1,"fab-btn"],["routerLink","/categories","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/settings","routerLinkActive","active-tab",1,"nav-item"]],template:function(e,t){e&1&&(J(ef),r(0,"mat-sidenav-container",0)(1,"mat-sidenav",1)(2,"div",2)(3,"div",3)(4,"mat-icon",4),d(5,"track_changes"),l(),r(6,"span",5),d(7,"Trackify"),l()(),r(8,"mat-nav-list",6)(9,"a",7),u("click",function(){return t.closeOnMobile()}),r(10,"mat-icon",8),d(11,"dashboard"),l(),r(12,"span",9),d(13,"Dashboard"),l()(),r(14,"a",10),u("click",function(){return t.closeOnMobile()}),r(15,"mat-icon",8),d(16,"today"),l(),r(17,"span",9),d(18,"Today"),l()(),r(19,"a",11),u("click",function(){return t.closeOnMobile()}),r(20,"mat-icon",8),d(21,"list"),l(),r(22,"span",9),d(23,"Habits"),l()(),r(24,"a",12),u("click",function(){return t.closeOnMobile()}),r(25,"mat-icon",8),d(26,"category"),l(),r(27,"span",9),d(28,"Categories"),l()()(),r(29,"mat-nav-list")(30,"a",13),u("click",function(){return t.closeOnMobile()}),r(31,"mat-icon",8),d(32,"settings"),l(),r(33,"span",9),d(34,"Settings"),l()()()()(),r(35,"mat-sidenav-content",14),R(36),r(37,"div",15)(38,"div",16),R(39,1),l()(),v(40,nf,17,0,"div",17),l()()),e&2&&(m(),b("opened",t.isSidenavOpened())("mode",t.isMobile()?"over":"side")("autoFocus",!1),m(36),K("height",t.isMobile()?"calc(100vh - 64px - 80px)":"calc(100vh - 64px)"),m(3),y(t.isMobile()?40:-1))},dependencies:[Se,ai,jn,cs,Qa,mr,tc,Ua,be,_e,nn,cc,Ya,On,An,ue],styles:[".active[_ngcontent-%COMP%]{background-color:var(--primary-container, rgba(99, 102, 241, .1))!important;color:var(--on-primary-container, #6366f1)!important}.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary, #6366f1)!important}@media(max-width:600px){.hide-on-mobile[_ngcontent-%COMP%]{display:none}}.mobile-bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;height:80px;background:#ffffffd9;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:space-around;padding:0 10px;border-top:1px solid rgba(0,0,0,.05);z-index:1000;box-shadow:0 -4px 20px #0000000d}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;height:100%;cursor:pointer;color:#94a3b8;transition:all .3s cubic-bezier(.4,0,.2,1)}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;width:26px;height:26px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]{color:#6366f1}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:#6366f11a;padding:8px;border-radius:16px;box-sizing:content-box}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;position:relative;top:-20px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]{width:60px;height:60px;background:#6366f1;border-radius:30px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px #6366f14d;color:#fff;transition:all .3s ease}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]:active{transform:scale(.9)}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]{background:#0f172ad9;border-top-color:#ffffff0d}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{color:#64748b}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]{color:#818cf8}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:#818cf826}"]})};var af=["*",[["mat-toolbar-row"]]],of=["*","mat-toolbar-row"],rf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Nc=(()=>{class i{_elementRef=c(F);_platform=c(pe);_document=c(we);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,o){if(t&1&&De(o,rf,5),t&2){let s;k(s=C())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(tt(n.color?"mat-"+n.color:""),M("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:of,decls:2,vars:0,template:function(t,n){t&1&&(J(af),R(0),R(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return i})();var Bc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[X]})}return i})();function lf(i,a){if(i&1){let e=G();r(0,"button",6),u("click",function(){P(e);let n=f();return L(n.toggle.emit())}),r(1,"mat-icon"),d(2,"menu"),l()()}}function cf(i,a){if(i&1){let e=G();r(0,"div",5)(1,"button",7),u("click",function(){P(e);let n=f();return L(n.themeService.toggleTheme())}),r(2,"mat-icon"),d(3),l()(),r(4,"span",8),d(5),l(),D(6,"t-avatar",9),l()}if(i&2){let e=f();m(3),O(e.themeService.isDarkMode()?"light_mode":"dark_mode"),m(2),O(e.activeUser.name),m(),b("name",e.activeUser.name||"")("avatar",e.activeUser.avatar)("size",36)}}var oo=class i{isMobile=!1;title="Trackify";activeUser=null;toggle=new A;themeService=c(rn);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["t-header"]],inputs:{isMobile:"isMobile",title:"title",activeUser:"activeUser"},outputs:{toggle:"toggle"},decls:8,vars:3,consts:[[1,"df","fx","jc-s","toolbar",2,"box-shadow","0 2px 6px rgb(0 0 0 / 15%)","z-index","10","position","relative"],[1,"df","ai-c","gap-2"],["mat-icon-button","","aria-label","Toggle sidenav"],["color","primary",2,"font-size","28px","width","28px","height","28px","margin-right","8px"],[1,"fs-20",2,"font-weight","400"],[1,"df","fd-r","ai-c","gap-2","px-8"],["mat-icon-button","","aria-label","Toggle sidenav",3,"click"],["mat-icon-button","","aria-label","Toggle theme",3,"click"],[1,"fs-14","fw-600","hide-on-mobile"],[3,"name","avatar","size"]],template:function(e,t){e&1&&(r(0,"mat-toolbar",0)(1,"div",1),v(2,lf,3,0,"button",2),r(3,"mat-icon",3),d(4,"track_changes"),l(),r(5,"span",4),d(6),l()(),v(7,cf,7,5,"div",5),l()),e&2&&(m(2),y(t.isMobile?-1:2),m(4),O(t.title),m(),y(t.activeUser?7:-1))},dependencies:[Se,Bc,Nc,ue,Ue,be,_e,_i],styles:[".toolbar[_ngcontent-%COMP%]{background-color:var(--background-default)}"]})};var ro=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["app-root"]],decls:4,vars:3,consts:[["s",""],[3,"toggle","isMobile","title","activeUser"]],template:function(e,t){if(e&1){let n=G();r(0,"t-sidenav",null,0)(2,"t-header",1),u("toggle",function(){P(n);let s=Me(1);return L(s.toggleSidenav())}),l(),D(3,"router-outlet"),l()}if(e&2){let n=Me(1);m(2),b("isMobile",n.isMobile())("title",n.title())("activeUser",n.activeUser())}},dependencies:[ls,ao,oo],encapsulation:2})};rs(ro,Vc).catch(i=>console.error(i));
