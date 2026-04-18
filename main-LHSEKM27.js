import{a as Wa,b as qa,c as ne,d as ii,e as Ua,f as Qa,g as ae,h as $a,i as Ka,j as Me,k as Tt,l as oe,m as Te}from"./chunk-FYEFV225.js";import{$ as _o,A as nt,B as Ee,C as Pt,D as so,E as Nt,F as co,G as Rt,H as Pe,I as lo,J as mo,K as Wn,L as Re,M as Oe,N as po,O as ri,P as si,Q as ho,R as uo,S as ci,T as go,U as li,V as le,W as di,Y as bo,Z as Le,_ as fo,a as io,b as Wi,ba as yt,c as Di,ca as vo,d as qi,da as gt,ea as Ot,f as Ui,fa as xt,g as no,ga as yo,h as Si,ha as Yi,i as ao,ia as xo,ja as Ae,ka as wo,la as Fe,ma as Ne,na as ko,oa as Co,pa as Do,q as oo,qa as So,r as Qt,ra as Mo,s as se,sa as To,t as Ie,ta as Io,u as ce,ua as Xi,v as Et,w as Qi,wa as Eo,x as $i,xa as qn,y as Ki,z as Zi}from"./chunk-4OX5CQ56.js";import{$ as Hn,$b as G,A as Se,Aa as La,Ab as z,Ac as Q,B as Xt,Bc as W,Ca as Aa,Cc as Za,Da as d,Dc as Ya,Eb as kt,Ec as Vi,F as Sa,Fa as Ve,Fb as j,G as Jt,Ga as je,Gb as P,Gc as ki,Ha as zn,Hb as fe,Hc as We,Ia as be,Ib as l,Ic as Ci,Ja as Vn,Jb as k,Jc as we,Kb as T,Kc as qe,La as Je,Lb as ei,Lc as Xa,Mb as _e,Mc as Ja,Nb as ve,O as Ma,Ob as ye,P as te,Pa as v,Pb as J,Pc as ji,Q as ue,Qa as rt,Qb as zi,Qc as to,R as ee,Ra as V,Rb as At,Sa as Fa,Sb as Ft,T as Ta,U as ze,Ua as _t,V as Ia,Va as ti,Vc as eo,W as Ye,Wa as Na,Wc as ni,X as zt,Xb as U,Y as ot,Yc as Gi,Zb as Ge,Zc as It,_ as K,_a as Ba,_b as Wt,a as Yt,aa as m,ab as jn,b as vi,ba as Ea,bb as Ha,ca as Pa,cb as Z,cc as Va,d as mt,db as x,dc as pt,eb as w,ec as I,f as pe,fa as D,fb as xi,fc as Zt,g as B,ga as S,gb as Kt,h as Bn,ha as Xe,hb as F,ib as N,j as wa,ja as Vt,jb as _,jd as Ut,k as Bi,ka as ge,kb as r,kd as ai,lb as s,m as ka,mb as C,md as ro,na as O,nb as Gt,nd as Gn,oa as ft,ob as ie,od as Ue,pb as Hi,pd as re,q as he,qa as Ra,qb as E,qc as ja,qd as ut,ra as f,rb as wi,rc as Y,rd as oi,sa as Oa,sb as g,sd as st,ta as jt,tb as za,tc as Ga,td as q,ua as Lt,ub as b,vb as dt,vc as vt,wa as it,wb as $,wc as qt,x as Ca,xa as yi,xb as wt,y as Da,yb as Mt,yc as xe,z as Ht,zb as H,zc as ht}from"./chunk-A6ZW7ZTA.js";var Ji=class a{percentage=G.required();chartData=U(()=>{let i=this.percentage();return{datasets:[{data:[i,100-i],backgroundColor:["#10b981","rgba(255, 255, 255, 0.1)"],borderWidth:0,circumference:360,rotation:0,cutout:"85%",borderRadius:i>0?10:0}]}});chartOptions={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},cutout:"85%"};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["app-progress-chart"]],inputs:{percentage:[1,"percentage"]},decls:8,vars:4,consts:[[1,"progress-container"],[1,"chart-wrapper"],["baseChart","",3,"data","options","type"],[1,"df","fd-c","ai-c","position-absolute","chart-labels"],[1,"fs-22","fw-800","label-value"],[1,"fs-10","fw-600","uppercase","ls-1","label-text"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1),C(2,"canvas",2),s(),r(3,"div",3)(4,"span",4),l(5),s(),r(6,"span",5),l(7,"Today"),s()()()),t&2&&(d(2),_("data",e.chartData())("options",e.chartOptions)("type","doughnut"),d(3),T("",e.percentage(),"%"))},dependencies:[Me],styles:[".progress-container[_ngcontent-%COMP%]{position:relative;width:100px;height:100px;min-width:100px;display:flex;align-items:center;justify-content:center}.chart-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.chart-labels[_ngcontent-%COMP%]{pointer-events:none}.label-text[_ngcontent-%COMP%]{opacity:.6}.df[_ngcontent-%COMP%]{display:flex}.fd-c[_ngcontent-%COMP%]{flex-direction:column}.ai-c[_ngcontent-%COMP%]{align-items:center}.position-absolute[_ngcontent-%COMP%]{position:absolute}.fs-22[_ngcontent-%COMP%]{font-size:22px}.fw-800[_ngcontent-%COMP%]{font-weight:800}.fs-10[_ngcontent-%COMP%]{font-size:10px}.fw-600[_ngcontent-%COMP%]{font-weight:600}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.ls-1[_ngcontent-%COMP%]{letter-spacing:1px}"]})};var mi=class a{colors=["#3b82f6","#10b981","#f59e0b","#ef4444","#c084fc","#f472b6"];celebrate(){this.createEmojiBurst(),this.createParticleBurst(),this.playSuccessSound()}uncelebrate(){this.playSadSound()}playSuccessSound(){try{let i=new(window.AudioContext||window.webkitAudioContext),t=i.createOscillator(),e=i.createGain();t.type="sine",t.frequency.setValueAtTime(880,i.currentTime),t.frequency.exponentialRampToValueAtTime(1320,i.currentTime+.05),e.gain.setValueAtTime(.1,i.currentTime),e.gain.exponentialRampToValueAtTime(.01,i.currentTime+.2),t.connect(e),e.connect(i.destination),t.start(),t.stop(i.currentTime+.2)}catch(i){console.warn("Audio feedback failed",i)}}playSadSound(){try{let i=new(window.AudioContext||window.webkitAudioContext),t=i.createOscillator(),e=i.createGain();t.type="triangle",t.frequency.setValueAtTime(220,i.currentTime),t.frequency.linearRampToValueAtTime(110,i.currentTime+.4),e.gain.setValueAtTime(.1,i.currentTime),e.gain.exponentialRampToValueAtTime(.001,i.currentTime+.5),t.connect(e),e.connect(i.destination),t.start(),t.stop(i.currentTime+.5)}catch(i){console.warn("Audio feedback failed",i)}}createEmojiBurst(){let i=["\u{1F389}","\u2728","\u{1F525}","\u2B50","\u{1F388}","\u{1F64C}","\u{1F680}"];for(let t=0;t<15;t++){let e=document.createElement("div");e.innerText=i[Math.floor(Math.random()*i.length)],e.style.position="fixed",e.style.bottom="20%",e.style.left="50%",e.style.fontSize="24px",e.style.zIndex="10000",e.style.pointerEvents="none",document.body.appendChild(e);let n=(Math.random()-.5)*400,o=-Math.random()*400-100,c=e.animate([{transform:"translate(-50%, 0) scale(0)",opacity:0},{transform:"translate(-50%, 0) scale(1.5)",opacity:1,offset:.2},{transform:`translate(calc(-50% + ${n}px), ${o}px) scale(1) rotate(${Math.random()*360}deg)`,opacity:0}],{duration:2e3,easing:"cubic-bezier(0.1, 0.8, 0.3, 1)"});c.onfinish=()=>e.remove()}}createParticleBurst(){for(let i=0;i<40;i++){let t=document.createElement("div");t.style.position="fixed",t.style.bottom="20%",t.style.left="50%",t.style.width="8px",t.style.height="8px",t.style.backgroundColor=this.colors[Math.floor(Math.random()*this.colors.length)],t.style.borderRadius=i%2===0?"50%":"2px",t.style.zIndex="10000",t.style.pointerEvents="none",document.body.appendChild(t);let e=(Math.random()-.5)*500,n=-Math.random()*500-50,o=t.animate([{transform:"translate(-50%, 0) scale(1)",opacity:1},{transform:`translate(calc(-50% + ${e}px), ${n}px) rotate(${Math.random()*1e3}deg) scale(0)`,opacity:0}],{duration:1200+Math.random()*800,easing:"cubic-bezier(0, .9, .57, 1)"});o.onfinish=()=>t.remove()}}static \u0275fac=function(t){return new(t||a)};static \u0275prov=zt({token:a,factory:a.\u0275fac,providedIn:"root"})};var ke=(n=>(n[n.Daily=0]="Daily",n[n.Weekly=1]="Weekly",n[n.Monthly=2]="Monthly",n[n.Custom=3]="Custom",n))(ke||{});var Xr=(a,i)=>i.dateLabel,Jr=(a,i)=>i.habitId,ts=(a,i)=>i.dateStr;function es(a,i){if(a&1&&(r(0,"div",8)(1,"span",10),l(2),s()()),a&2){let t=i.$implicit;d(2),k(t.dateLabel)}}function is(a,i){a&1&&(r(0,"div",14)(1,"mat-icon",17),l(2,"check"),s()())}function ns(a,i){a&1&&(r(0,"div",15)(1,"mat-icon",18),l(2,"close"),s()())}function as(a,i){a&1&&C(0,"div",16)}function os(a,i){if(a&1){let t=E();r(0,"div",8)(1,"div",13),g("click",function(){let n=D(t).$implicit,o=b().$implicit,c=b();return S(c.toggleGridHabit(o.habitId,n.dateStr))}),x(2,is,3,0,"div",14)(3,ns,3,0,"div",15)(4,as,1,0,"div",16),s()()}if(a&2){let t=i.$implicit;d(2),w(t.status==="completed"?2:t.status==="missed"?3:4)}}function rs(a,i){if(a&1&&(r(0,"div",9)(1,"div",11)(2,"span",12),l(3),s()(),F(4,os,5,1,"div",8,ts),s()),a&2){let t=i.$implicit;d(3),k(t.name),d(),N(t.days)}}var tn=class a{weeklyGraph=G.required();weeklyMatrix=G.required();toggle=Wt();toggleGridHabit(i,t){this.toggle.emit({habitId:i,dateStr:t})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["app-weekly-tracker"]],inputs:{weeklyGraph:[1,"weeklyGraph"],weeklyMatrix:[1,"weeklyMatrix"]},outputs:{toggle:"toggle"},decls:14,vars:0,consts:[[1,"bg-white","p-24","br-16","w-100","tracker-card"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4","mb-20"],[1,"m-0","fs-18","fw-700",2,"color","#1e293b"],[1,"fs-12","fw-600","text-secondary","ls-1","ml-auto"],[1,"overflow-x-auto","w-100","hide-scrollbar","scroll-container"],[1,"df","fd-c","gap-4","tracker-grid",2,"min-width","450px"],[1,"df","fd-r","ai-c","py-4","header-row",2,"border-bottom","2px solid #f1f5f9"],[1,"sticky-col","header-spacer"],[1,"df","jc-c",2,"flex","1"],[1,"df","fd-r","ai-c","py-12","habit-row",2,"border-bottom","1px solid #f8fafc"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1",2,"opacity","0.6"],[1,"df","fd-r","ai-c","gap-3","overflow-hidden","sticky-col","habit-name-col"],[1,"fs-13","fw-600","truncate","text-primary"],[1,"df","ai-c","jc-c","cursor-pointer","transition-all","progress-item",2,"width","28px","height","28px","border-radius","50%","border","2px solid transparent",3,"click"],[1,"df","ai-c","jc-c","br-pill","bg-success",2,"width","20px","height","20px","background-color","#10b981"],[1,"df","ai-c","jc-c","br-pill",2,"width","20px","height","20px","background-color","#fee2e2"],[1,"br-pill",2,"width","16px","height","16px","border","2px solid #e2e8f0","background-color","#fff"],[2,"font-size","14px","width","14px","height","14px","color","#fff"],[2,"font-size","14px","width","14px","height","14px","color","#ef4444"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"h2",2),l(3,"Weekly Tracker"),s(),r(4,"span",3),l(5,"PAST 7 DAYS"),s()(),r(6,"div",4)(7,"div",5)(8,"div",6),C(9,"div",7),F(10,es,3,1,"div",8,Xr),s(),F(12,rs,6,1,"div",9,Jr),s()()()),t&2&&(d(10),N(e.weeklyGraph()),d(2),N(e.weeklyMatrix()))},dependencies:[W,Q],styles:[".tracker-card[_ngcontent-%COMP%]{box-shadow:0 4px 6px -1px #0000000d;box-sizing:border-box}.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar{height:6px}.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f5f9;border-radius:10px}.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#94a3b8}.sticky-col[_ngcontent-%COMP%]{position:sticky;left:0;z-index:10;background-color:#fff;transition:background-color .2s}.header-spacer[_ngcontent-%COMP%]{flex:2;padding-right:12px;min-width:140px}.habit-name-col[_ngcontent-%COMP%]{padding-right:12px}.habit-row[_ngcontent-%COMP%]{background-color:#fff}.habit-row[_ngcontent-%COMP%]:hover, .habit-row[_ngcontent-%COMP%]:hover   .sticky-col[_ngcontent-%COMP%]{background-color:#f8fafc}.truncate[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.progress-item[_ngcontent-%COMP%]:hover{transform:scale(1.1);background-color:#f1f5f9}"]})};function ss(a,i){a&1&&(r(0,"div",43)(1,"div",44)(2,"div",3)(3,"span",45),l(4,"First Step: Create a Category"),s(),r(5,"span",46),l(6,"Categories like 'Health' or 'Work' help you stay organized."),s()(),r(7,"button",47),l(8," Setup Categories "),s()()())}function cs(a,i){if(a&1&&(r(0,"div",1)(1,"div",38)(2,"div",39)(3,"mat-icon",40),l(4,"celebration"),s()(),r(5,"div",3)(6,"h2",41),l(7),s(),r(8,"p",42),l(9,"Ready to build some life-changing habits?"),s()()(),x(10,ss,9,0,"div",43),s()),a&2){let t,e=b();d(7),T("Welcome to Trackify, ",(t=e.activeUser())==null?null:t.name,"!"),d(3),w(e.stats().noCategories?10:-1)}}function ls(a,i){if(a&1&&(r(0,"span",36),l(1),s()),a&2){let t=b();d(),T(" ",t.stats().missedHabits.join(", ")," ")}}function ds(a,i){a&1&&(r(0,"span",37),l(1,"Perfect Day in progress!"),s())}var en=class a{habitService=m(Tt);habitLogService=m(oe);categoryService=m(Te);snackBar=m(Qt);celebrationService=m(mi);stats=f({todayCompletedCount:0,todayTotalCount:0,todayPercentage:0,platformStreak:0,platformBestStreak:0,completionRate7Days:0,totalHabits:0,topHabitName:"No Data",topHabitScore:0,missedHabits:[],showWelcome:!1,noCategories:!1});weeklyGraph=f([]);weeklyMatrix=f([]);activeUser=f(null);chartDataConfiguration=U(()=>{let i=this.weeklyGraph();return{labels:i.map(t=>t.dateLabel),datasets:[{data:i.map(t=>t.count),label:"Completions",backgroundColor:"#3b82f6",borderRadius:6,barPercentage:.6}]}});chartOptions=U(()=>{let i=Math.max(...this.weeklyGraph().map(t=>t.count),5);return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:i+1,ticks:{stepSize:1,precision:0}}}}});async ngOnInit(){let i=await vt.users.orderBy("id").first();i&&this.activeUser.set(i),await this.calculateMetrics()}getLocalFormattedDate(i){let t=i.getFullYear(),e=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${t}-${e}-${n}`}async calculateMetrics(){let i=await this.habitService.loadHabits(),t=await this.categoryService.getCategories(),e=await this.habitLogService.getAllLogs(),n=new Date,o=new Date(n).setHours(0,0,0,0),c=864e5,p=this.getLocalFormattedDate(n),h=n.getDay(),u={0:6,1:0,2:1,3:2,4:3,5:4,6:5},y=u[h],L=i.filter(M=>M.frequency===0?!0:M.days&&Array.isArray(M.days)&&M.days.length>0?M.days.includes(y):!1),A=e.filter(M=>M.dateStr===p),X=new Set(A.filter(M=>M.isCompleted).map(M=>M.habitId)),St=0,et=[];for(let M of L)X.has(M.id)?St++:et.push(M.name);let ct=L.length,Ce=ct===0?0:Math.round(St/ct*100),at=Array.from(new Set(e.map(M=>M.dateStr))).sort().reverse().map(M=>{let[lt,bt,De]=M.split("-");return Math.floor(new Date(Number(lt),Number(bt)-1,Number(De)).getTime()/c)}),He=0,Ke=0;if(at.length>0){let M=1;He=1;for(let bt=0;bt<at.length-1;bt++)at[bt]-at[bt+1]===1?(M++,M>He&&(He=M)):M=1;let lt=Math.floor(o/c);if(at[0]===lt||at[0]===lt-1){Ke=1;for(let bt=0;bt<at.length-1&&at[bt]-at[bt+1]===1;bt++)Ke++}}let Ze=[],fa=new Map,_a=0;for(let M=6;M>=0;M--){let lt=new Date(o-M*c),bt=this.getLocalFormattedDate(lt),De=lt.toLocaleDateString("en-US",{weekday:"short"});Ze.push({dateLabel:De,count:0,percentage:0}),fa.set(bt,6-M)}let Ur=Ze.map((M,lt)=>this.getLocalFormattedDate(new Date(o-(6-lt)*c))),Qr=i.map(M=>({habitId:M.id,name:M.name,days:Ur.map(lt=>{let De=!!e.find(Ni=>Ni.habitId===M.id&&Ni.dateStr===lt)?.isCompleted,xa=De?"completed":"pending";if(!De&&lt<p){let Ni=new Date(lt),Yr=u[Ni.getDay()];(M.frequency===0||M.days&&M.days.includes(Yr))&&(xa="missed")}return{dateStr:lt,status:xa}})}));this.weeklyMatrix.set(Qr);let $r=this.getLocalFormattedDate(new Date(o-6*c)),Fn={};for(let M of e)if(M.isCompleted&&(Fn[M.habitId]=(Fn[M.habitId]||0)+1,M.dateStr>=$r)){_a++;let lt=fa.get(M.dateStr);lt!==void 0&&Ze[lt].count++}let Kr=Math.max(...Ze.map(M=>M.count),1);for(let M of Ze)M.percentage=M.count/Kr*100;let va=i.length*7,Zr=va===0?0:Math.round(_a/va*100),ya="No Data",Nn=0;for(let[M,lt]of Object.entries(Fn))if(lt>Nn){Nn=lt;let bt=i.find(De=>De.id===Number(M));bt&&(ya=bt.name)}this.weeklyGraph.set(Ze),this.stats.set({todayCompletedCount:St,todayTotalCount:ct,todayPercentage:Ce,platformStreak:Ke,platformBestStreak:He,completionRate7Days:Zr,totalHabits:i.length,topHabitName:ya,topHabitScore:Nn,missedHabits:et,showWelcome:i.length===0,noCategories:t.length===0})}async toggleGridHabit(i,t){let e=await this.habitLogService.toggleCompletion(i,t),c=(await this.habitService.loadHabits()).find(h=>h.id===i)?.name||"Habit",p=e?`${c} marked as completed! \u{1F389}`:`${c} uncompleted.`;e?this.celebrationService.celebrate():this.celebrationService.uncelebrate(),this.snackBar.open(p,"Dismiss",{duration:3e3,horizontalPosition:"center",verticalPosition:"bottom",panelClass:e?["success-snackbar"]:["error-snackbar"]}),await this.calculateMetrics()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-dashboard"]],decls:66,vars:13,consts:[[1,"p-24","df","fd-c","gap-6","font-inter",2,"background-color","var(--background-default)","min-height","100vh"],[1,"br-24","p-24","mb-16","animate-fade-in",2,"background","linear-gradient(135deg, #ab07ec, #059669)","color","#fff","box-shadow","0 10px 20px rgba(16, 185, 129, 0.2)"],[1,"df","fd-r","jc-sb","ai-c"],[1,"df","fd-c","gap-1"],[1,"m-0","fs-28","fw-700","text-primary"],[1,"m-0","fs-14","fw-500",2,"color","#6b7280"],[1,"df","fd-r","jc-s","w-100"],[3,"percentage"],[1,"df","fd-c","gap-2"],[1,"df","fd-c","gap-4","p-20","br-16","bg-white","flex-1",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","jc-sb","ai-c","gap-2"],[1,"fs-14","fw-700","uppercase","ls-1",2,"color","#94a3b8"],[1,"br-pill","px-8","py-4","df","ai-c","gap-1",2,"background-color","#fff7ed","color","#ea580c"],[2,"font-size","14px","width","14px","height","14px"],[1,"fs-11","fw-700"],[1,"df","fd-r","gap-2","ai-fe"],[1,"fs-28","fw-800",2,"line-height","1"],[1,"fs-13","fw-500","mb-1"],[1,"fs-14","fw-700","uppercase","ls-1"],[2,"color","#10b981","font-size","18px"],[1,"bg-white","br-16","w-100","p-8",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box","margin-bottom","8px"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4","mb-16"],[1,"m-0","fs-18","fw-700",2,"color","var(--text-primary)"],[1,"fs-12","fw-600","text-secondary","ls-1","ml-auto"],[1,"w-100","position-relative",2,"height","180px"],["baseChart","","type","bar",3,"data","options"],[3,"toggle","weeklyGraph","weeklyMatrix"],[1,"df","fd-r","flex-wrap","gap-4","w-100","pb-24"],[1,"bg-white","br-16","p-20","flex-1","df","fd-r","ai-c","gap-4",2,"min-width","250px","box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","ai-c","jc-c","br-pill","text-white",2,"width","44px","height","44px","background-color","#f59e0b","min-width","44px"],[2,"font-size","20px","height","20px","width","20px"],[1,"df","fd-c","overflow-hidden"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-15","fw-700","truncate"],[1,"ml-auto","fs-16","fw-800",2,"color","#f59e0b"],[1,"df","ai-c","jc-c","br-pill","text-white",2,"width","44px","height","44px","background-color","#ef4444","min-width","44px"],[1,"fs-14","fw-600","truncate"],[1,"fs-14","fw-600"],[1,"df","fd-r","ai-c","gap-4"],[1,"df","ai-c","jc-c","br-pill","bg-white",2,"width","56px","height","56px","min-width","56px"],[2,"color","#10b981","font-size","32px","width","32px","height","32px"],[1,"m-0","fs-22","fw-800"],[1,"m-0","fs-14","fw-500",2,"opacity","0.9"],[1,"mt-20","p-16","br-16",2,"background-color","rgba(255,255,255,0.15)","border","1px solid rgba(255,255,255,0.2)"],[1,"df","fd-r","ai-c","jc-sb","flex-wrap","gap-4"],[1,"fs-15","fw-700"],[1,"fs-13","fw-500",2,"opacity","0.8"],["routerLink","/categories","mat-flat-button","",1,"br-12","fw-700","px-20"]],template:function(t,e){t&1&&(r(0,"div",0),x(1,cs,11,2,"div",1),r(2,"div",2)(3,"div",3)(4,"h1",4),l(5),s(),r(6,"p",5),l(7,"See your progress and stay motivated"),s()()(),r(8,"div",6),C(9,"app-progress-chart",7),r(10,"div",8)(11,"div",9)(12,"div",10)(13,"span",11),l(14,"Streak"),s(),r(15,"div",12)(16,"mat-icon",13),l(17,"local_fire_department"),s(),r(18,"span",14),l(19),s()()(),r(20,"div",15)(21,"span",16),l(22),s(),r(23,"span",17),l(24,"days total"),s()()(),r(25,"div",9)(26,"div",10)(27,"span",18),l(28,"Consistency"),s(),r(29,"mat-icon",19),l(30,"insights"),s()(),r(31,"div",15)(32,"span",16),l(33),s(),r(34,"span",17),l(35,"7 day avg"),s()()()()(),r(36,"div",20)(37,"div",21)(38,"h2",22),l(39,"Activity Volume"),s(),r(40,"span",23),l(41,"PAST 7 DAYS"),s()(),r(42,"div",24),C(43,"canvas",25),s()(),r(44,"app-weekly-tracker",26),g("toggle",function(o){return e.toggleGridHabit(o.habitId,o.dateStr)}),s(),r(45,"div",27)(46,"div",28)(47,"div",29)(48,"mat-icon",30),l(49,"military_tech"),s()(),r(50,"div",31)(51,"span",32),l(52,"Record Habit"),s(),r(53,"span",33),l(54),s()(),r(55,"span",34),l(56),s()(),r(57,"div",28)(58,"div",35)(59,"mat-icon",30),l(60,"error_outline"),s()(),r(61,"div",31)(62,"span",32),l(63,"Pending Today"),s(),x(64,ls,2,1,"span",36)(65,ds,2,0,"span",37),s()()()()),t&2&&(d(),w(e.stats().showWelcome?1:-1),d(4),T(" ",e.activeUser()?"Hello, "+e.activeUser().name+"!":"Your Dashboard"," "),d(4),_("percentage",e.stats().todayPercentage),d(10),T("",e.stats().platformStreak,"d"),d(3),k(e.stats().platformStreak),d(11),T("",e.stats().completionRate7Days,"%"),d(10),_("data",e.chartDataConfiguration())("options",e.chartOptions()),d(),_("weeklyGraph",e.weeklyGraph())("weeklyMatrix",e.weeklyMatrix()),d(10),k(e.stats().topHabitName),d(2),T("",e.stats().topHabitScore,"x"),d(8),w(e.stats().missedHabits.length>0?64:65))},dependencies:[W,Q,ae,ii,Me,Ji,tn,se],encapsulation:2})};var ms=["switch"],ps=["*"];function hs(a,i){a&1&&(r(0,"span",11),Xe(),r(1,"svg",13),C(2,"path",14),s(),r(3,"svg",15),C(4,"path",16),s()())}var us=new K("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),nn=class{source;checked;constructor(i,t){this.source=i,this.checked=t}},Un=(()=>{class a{_elementRef=m(it);_focusMonitor=m(qe);_changeDetectorRef=m(pt);defaults=m(us);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new nn(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ut();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new O;toggleChange=new O;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(qt).load(re);let t=m(new Ge("tabindex"),{optional:!0}),e=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=e.color||"accent",this.id=this._uniqueId=m(It).getId("mat-mdc-slide-toggle-"),this.hideIcon=e.hideIcon??!1,this.disabledInteractive=e.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new nn(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-slide-toggle"]],viewQuery:function(e,n){if(e&1&&Mt(ms,5),e&2){let o;H(o=z())&&(n._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(e,n){e&2&&(wi("id",n.id),Z("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),fe(n.color?"mat-"+n.color:""),P("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",I],color:"color",disabled:[2,"disabled","disabled",I],disableRipple:[2,"disableRipple","disableRipple",I],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Zt(t)],checked:[2,"checked","checked",I],hideIcon:[2,"hideIcon","hideIcon",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[J([{provide:Ee,useExisting:Ye(()=>a),multi:!0},{provide:so,useExisting:a,multi:!0}]),jt],ngContentSelectors:ps,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(e,n){if(e&1&&(dt(),r(0,"div",1)(1,"button",2,0),g("click",function(){return n._handleClick()}),C(3,"div",3)(4,"span",4),r(5,"span",5)(6,"span",6)(7,"span",7),C(8,"span",8),s(),r(9,"span",9),C(10,"span",10),s(),x(11,hs,5,0,"span",11),s()()(),r(12,"label",12),g("click",function(c){return c.stopPropagation()}),$(13),s()()),e&2){let o=kt(2);_("labelPosition",n.labelPosition),d(),P("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),_("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),Z("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),d(9),_("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),d(),w(n.hideIcon?-1:11),d(),_("for",n.buttonId),Z("id",n._labelId)}},dependencies:[Ue,ko],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return a})(),Ro=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({imports:[Un,ht]})}return a})();var an=class a{snackBar=m(Qt);habitService=m(Tt);habitLogService=m(oe);constructor(){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",i=>{i.data&&i.data.action==="mark-done"&&this.markHabitAsDone(i.data.habitId)})}notifiedToday=new Set;async requestPermission(){return"Notification"in window?Notification.permission==="granted"?!0:await Notification.requestPermission()!=="granted"?(this.snackBar.open("Notification permission was denied. Reminders won't work.","OK",{duration:5e3}),!1):!0:(this.snackBar.open("This browser does not support notifications.","OK",{duration:3e3}),!1)}async updateAllSchedules(){if(!("Notification"in window)||Notification.permission!=="granted")return;let i=await this.habitService.loadHabits(),t=await navigator.serviceWorker.ready;for(let e of i)e.reminderEnabled&&e.startTime&&await this.scheduleNotification(e)}async scheduleNotification(i){let t=await navigator.serviceWorker.ready,e=this.calculateNextTrigger(i.startTime,i.reminderOffset||0,i.frequency,i.days);if(!e)return;let n={body:`Time for your habit: ${i.name}!`,icon:"/assets/icons/icon-128x128.png",badge:"/assets/icons/icon-72x72.png",data:{habitId:i.id},vibrate:[200,100,200],tag:`habit-${i.id}`,actions:[{action:"mark-done",title:"Mark as Done"},{action:"close",title:"Close"}]};"showTrigger"in Notification.prototype&&"TimestampTrigger"in window&&(n.showTrigger=new window.TimestampTrigger(e));try{await t.showNotification(`Trackify: ${i.name}`,n),console.log(`Scheduled notification for ${i.name} at ${new Date(e).toLocaleString()}`)}catch(o){console.error("Error scheduling notification",o)}}calculateNextTrigger(i,t,e,n){let[o,c]=i.split(":").map(Number),p=new Date,h=new Date;if(h.setHours(o,c,0,0),t>0&&h.setMinutes(h.getMinutes()-t),h<=p&&h.setDate(h.getDate()+1),e===1&&n&&n.length>0){let u=!1;for(let y=0;y<7;y++){let L=h.getDay();if(n.includes(L)){u=!0;break}h.setDate(h.getDate()+1)}if(!u)return null}return h.getTime()}async markHabitAsDone(i){let t=new Date().toISOString().split("T")[0];await this.habitLogService.markHabitAsCompleted(i,t),this.snackBar.open("Habit marked as done!","OK",{duration:2e3});let e=await this.habitService.getHabit(i);e&&this.scheduleNotification(e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=zt({token:a,factory:a.\u0275fac,providedIn:"root"})};var ys=["button"],xs=["*"];function ws(a,i){if(a&1&&(r(0,"div",2),C(1,"mat-pseudo-checkbox",6),s()),a&2){let t=b();d(),_("disabled",t.disabled)}}var Oo=new K("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Lo=new K("MatButtonToggleGroup"),ks={provide:Ee,useExisting:Ye(()=>Qn),multi:!0},on=class{source;value;constructor(i,t){this.source=i,this.value=t}},Qn=(()=>{class a{_changeDetector=m(pt);_dir=m(xe,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=m(It).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new O;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new O;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=m(Oo,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new yo(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||ni(t))return;let n=t.target.id,o=this._buttonToggles.toArray().findIndex(p=>p.buttonId===n),c=null;switch(t.keyCode){case 32:case 13:c=this._buttonToggles.get(o)||null;break;case 38:c=this._getNextButton(o,-1);break;case 37:c=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:c=this._getNextButton(o,1);break;case 39:c=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}c&&(t.preventDefault(),c._onButtonClick(),c.focus())}_emitChangeEvent(t){let e=new on(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,n=!1,o=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(t,n)):this._updateModelValue(t,n)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let c=(t+e*o+n.length)%n.length,p=n.get(c);if(p&&!p.disabled)return p}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(n=>this._selectValue(n,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(n=>n.tabIndex===-1)){for(let n of e)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let n of e)if(n.value===t){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,n,o){if(e&1&&wt(o,rn,5),e&2){let c;H(c=z())&&(n._buttonToggles=c)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,n){e&1&&g("keydown",function(c){return n._keydown(c)}),e&2&&(Z("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),P("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",I],value:"value",multiple:[2,"multiple","multiple",I],disabled:[2,"disabled","disabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",I],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",I]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[J([ks,{provide:Lo,useExisting:a}])]})}return a})(),rn=(()=>{class a{_changeDetectorRef=m(pt);_elementRef=m(it);_focusMonitor=m(qe);_idGenerator=m(It);_animationDisabled=Ut();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new O;constructor(){m(qt).load(re);let t=m(Lo,{optional:!0}),e=m(new Ge("tabindex"),{optional:!0})||"",n=m(Oo,{optional:!0});this._tabIndex=f(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new on(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(e,n){if(e&1&&Mt(ys,5),e&2){let o;H(o=z())&&(n._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,n){e&1&&g("focus",function(){return n.focus()}),e&2&&(Z("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),P("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",I],appearance:"appearance",checked:[2,"checked","checked",I],disabled:[2,"disabled","disabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:xs,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,n){if(e&1&&(dt(),r(0,"button",1,0),g("click",function(){return n._onButtonClick()}),x(2,ws,2,1,"div",2),r(3,"span",3),$(4),s()(),C(5,"span",4)(6,"span",5)),e&2){let o=kt(1);_("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),Z("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),d(2),w(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),d(4),_("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[Ue,xo],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return a})(),Ao=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({imports:[oi,rn,ht]})}return a})();var Ds=(a,i)=>i.value;function Ss(a,i){if(a&1){let t=E();Gt(0,"div",2),za("click",function(){let n=D(t).$implicit,o=b();return S(o.toggleDay(n.value))}),Gt(1,"span",3),l(2),ie()()}if(a&2){let t=i.$implicit,e=b();P("selected",e.isSelected(t.value)),d(2),k(t.label.substring(0,1))}}var sn=class a{days=[{label:"Monday",value:0},{label:"Tuesday",value:1},{label:"Wednesday",value:2},{label:"Thursday",value:3},{label:"Friday",value:4},{label:"Saturday",value:5},{label:"Sunday",value:6}];selectedDays=f([]);onChange=()=>{};onTouched=()=>{};writeValue(i){this.selectedDays.set(i||[])}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}toggleDay(i){let t=this.selectedDays(),e=t.indexOf(i),n;e>-1?n=t.filter(o=>o!==i):n=[...t,i],this.selectedDays.set(n),this.onChange(n),this.onTouched()}isSelected(i){return this.selectedDays().includes(i)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-day-picker"]],features:[J([{provide:Ee,useExisting:a,multi:!0}])],decls:3,vars:0,consts:[[1,"day-picker-container"],[1,"day-box",3,"selected"],[1,"day-box",3,"click"],[1,"day-name"]],template:function(t,e){t&1&&(Gt(0,"div",0),F(1,Ss,3,3,"div",1,Ds),ie()),t&2&&(d(),N(e.days))},dependencies:[Y],styles:[".day-picker-container[_ngcontent-%COMP%]{display:flex;gap:10px;width:100%;justify-content:space-between;padding:4px 0}.day-box[_ngcontent-%COMP%]{flex:1;aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:12px;background:#f8fafc;cursor:pointer;transition:all .25s cubic-bezier(.4,0,.2,1);border:1.5px solid #e2e8f0;-webkit-user-select:none;user-select:none}.day-box[_ngcontent-%COMP%]:hover{background:#f1f5f9;border-color:#cbd5e1}.day-box.selected[_ngcontent-%COMP%]{background:var(--primary-50, #eff6ff);border-color:var(--primary-500, #3b82f6);color:var(--primary-600, #2563eb);font-weight:800;box-shadow:0 4px 12px #3b82f626;transform:translateY(-1px)}.day-name[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase}"]})};function Ms(a,i){if(a&1){let t=E();r(0,"div",6),g("click",function(){let n=D(t).$implicit,o=b();return S(o.selectIcon(n))}),r(1,"mat-icon"),l(2),s()()}if(a&2){let t=i.$implicit,e=b();P("selected",e.data.selectedIcon===t),Z("title",t),d(2),k(t)}}var cn=class a{constructor(i,t){this.dialogRef=i;this.data=t}selectIcon(i){this.dialogRef.close(i)}static \u0275fac=function(t){return new(t||a)(Vn(Ie),Vn(ce))};static \u0275cmp=v({type:a,selectors:[["t-icon-picker-dialog"]],decls:10,vars:0,consts:[[1,"p-24"],[1,"df","fd-r","ai-c","jc-sb","mb-20"],[1,"m-0","fs-20","fw-700"],["mat-icon-button","","mat-dialog-close",""],[1,"icon-grid"],[1,"icon-item",3,"selected"],[1,"icon-item",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"h2",2),l(3,"Select Icon"),s(),r(4,"button",3)(5,"mat-icon"),l(6,"close"),s()()(),r(7,"div",4),F(8,Ms,3,4,"div",5,Kt),s()()),t&2&&(d(8),N(e.data.icons))},dependencies:[Y,W,Q,nt,Qi,q,ut],styles:[".icon-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;max-height:400px;overflow-y:auto;padding:4px}.icon-item[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:12px;cursor:pointer;border:1px solid #e2e8f0;transition:all .2s ease;background:#fff}.icon-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px;color:#64748b}.icon-item[_ngcontent-%COMP%]:hover{background:#f8fafc;border-color:var(--primary-500);transform:translateY(-2px)}.icon-item.selected[_ngcontent-%COMP%]{background:var(--primary-100);border-color:var(--primary-500)}.icon-item.selected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-700)}.df[_ngcontent-%COMP%]{display:flex}.fd-r[_ngcontent-%COMP%]{flex-direction:row}.ai-c[_ngcontent-%COMP%]{align-items:center}.jc-sb[_ngcontent-%COMP%]{justify-content:space-between}.mb-20[_ngcontent-%COMP%]{margin-bottom:20px}.p-24[_ngcontent-%COMP%]{padding:24px}.m-0[_ngcontent-%COMP%]{margin:0}.fs-20[_ngcontent-%COMP%]{font-size:20px}.fw-700[_ngcontent-%COMP%]{font-weight:700}"]})};var ln=class a{icons=G(["star","fitness_center","water_drop","menu_book","check_circle","bolt","local_fire_department","monitor_heart","self_improvement","psychology","directions_run","pool","bedtime","restaurant","shopping_cart","work","school","home","favorite","event","sunny","cloud","spa","coffee","brush","code","camera_alt","music_note","meditation","nature","pets","savings","assignment"]);dialog=m(Et);selectedIcon=f("star");isDisabled=f(!1);onChange=()=>{};onTouched=()=>{};openPicker(){if(this.isDisabled())return;this.dialog.open(cn,{width:"400px",data:{icons:this.icons(),selectedIcon:this.selectedIcon()},panelClass:"custom-dialog-container"}).afterClosed().subscribe(t=>{t&&this.selectIcon(t)})}selectIcon(i){this.selectedIcon.set(i),this.onChange(i),this.onTouched()}writeValue(i){i&&this.selectedIcon.set(i)}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.isDisabled.set(i)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-icon-picker"]],inputs:{icons:[1,"icons"]},features:[J([{provide:Ee,useExisting:a,multi:!0}])],decls:8,vars:3,consts:[[1,"picker-trigger",3,"click"],[1,"icon-container"],[1,"picker-label"],[1,"arrow"]],template:function(t,e){t&1&&(r(0,"div",0),g("click",function(){return e.openPicker()}),r(1,"div",1)(2,"mat-icon"),l(3),s()(),r(4,"span",2),l(5,"Choose Icon"),s(),r(6,"mat-icon",3),l(7,"keyboard_arrow_right"),s()()),t&2&&(P("disabled",e.isDisabled()),d(3),k(e.selectedIcon()||"star"))},dependencies:[Y,W,Q,nt,q],styles:[".icon-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:12px;padding:4px;max-height:250px;overflow-y:auto}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:10px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}.icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#94a3b8}.picker-trigger[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:8px 16px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);width:fit-content}.picker-trigger[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:#f1f5f9;border-radius:8px}.picker-trigger[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#64748b}.picker-trigger[_ngcontent-%COMP%]   .picker-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#475569}.picker-trigger[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#94a3b8;margin-left:4px}.picker-trigger[_ngcontent-%COMP%]:hover{border-color:var(--primary-400);background:#f8fafc;box-shadow:0 4px 6px -1px #0000001a}.picker-trigger[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%]{background:var(--primary-100)}.picker-trigger[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-600)}.picker-trigger[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{color:var(--primary-400)}.picker-trigger.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed;pointer-events:none}.icon-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;aspect-ratio:1;border-radius:12px;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);background:#f8fafc;border:2px solid transparent;color:#64748b}.icon-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.icon-item[_ngcontent-%COMP%]:hover:not(.disabled){background:#f1f5f9;color:var(--primary-color, #3b82f6);transform:translateY(-2px);box-shadow:0 4px 12px #0000000d}.icon-item.selected[_ngcontent-%COMP%]{background:var(--primary-color, #3b82f6);color:#fff;border-color:var(--primary-color, #3b82f6);box-shadow:0 4px 12px rgba(var(--primary-rgb, 59, 130, 246),.3);transform:scale(1.05)}.icon-item.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed;filter:grayscale(1)}"]})};var dn=class a{label=G("");placeholder=G("");required=G(!1);disabled=G(!1);hint=G("");id=G(`control-${Math.random().toString(36).substring(2,9)}`);internalValue=f(null);isDisabled=f(!1);isTouched=f(!1);onChange=()=>{};onTouched=()=>{};ngControl=m(co,{optional:!0,self:!0});constructor(){this.ngControl&&(this.ngControl.valueAccessor=this)}ngOnInit(){this.ngControl?.control?.disabled&&this.isDisabled.set(!0)}updateValue(i){!this.isDisabled()&&!this.disabled()&&(this.internalValue.set(i),this.onChange(i),this.markAsTouched())}markAsTouched(){this.isTouched()||(this.isTouched.set(!0),this.onTouched())}writeValue(i){this.internalValue.set(i)}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.isDisabled.set(i)}hasError=U(()=>!!(this.ngControl?.invalid&&(this.ngControl?.touched||this.ngControl?.dirty)));static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,inputs:{label:[1,"label"],placeholder:[1,"placeholder"],required:[1,"required"],disabled:[1,"disabled"],hint:[1,"hint"],id:[1,"id"]}})};var mn=class a extends dn{hours=f(null);minutes=f(null);constructor(){super(),Oa(()=>{let i=this.internalValue();if(i){let[t,e]=i.split(":").map(n=>Number(n)||0);this.hours.set(t),this.minutes.set(e)}else this.hours.set(null),this.minutes.set(null)})}onTimeChange(){let i=this.hours()||0,t=this.minutes()||0,e=`${i.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;this.updateValue(e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["lib-duration-picker"]],features:[_t],decls:10,vars:6,consts:[[1,"duration-picker-container"],[1,"df","fd-r","ai-c","gap-2"],["appearance","outline",1,"time-field","hide-subscript"],["matInput","","type","number","min","0","max","23","placeholder","00",3,"ngModelChange","ngModel","disabled"],["matInput","","type","number","min","0","max","59","placeholder","00",3,"ngModelChange","ngModel","disabled"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),l(4,"Hours"),s(),r(5,"input",3),ye("ngModelChange",function(o){return ve(e.hours,o)||(e.hours=o),o}),g("ngModelChange",function(){return e.onTimeChange()}),s()(),r(6,"mat-form-field",2)(7,"mat-label"),l(8,"Minutes"),s(),r(9,"input",4),ye("ngModelChange",function(o){return ve(e.minutes,o)||(e.minutes=o),o}),g("ngModelChange",function(){return e.onTimeChange()}),s()()()()),t&2&&(P("disabled",e.isDisabled()),d(5),_e("ngModel",e.hours),_("disabled",e.isDisabled()),d(4),_e("ngModel",e.minutes),_("disabled",e.isDisabled()))},dependencies:[Y,le,Pt,po,Rt,uo,ho,Re,xt,Ot,yt,Le,gt],encapsulation:2})};var pn=class a{dialogRef=m(Ie);categoryName="";onCancel(){this.dialogRef.close()}onConfirm(){this.categoryName.trim()&&this.dialogRef.close(this.categoryName.trim())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["app-add-category-dialog"]],decls:12,vars:2,consts:[["mat-dialog-title",""],["appearance","outline",1,"w-100","mt-8"],["matInput","","placeholder","e.g. Health, Work, Deep Work","autofocus","",3,"ngModelChange","ngModel"],["align","end",1,"gap-2"],["mat-button","",3,"click"],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(t,e){t&1&&(r(0,"h2",0),l(1,"Add New Category"),s(),r(2,"mat-dialog-content")(3,"mat-form-field",1)(4,"mat-label"),l(5,"Category Name"),s(),r(6,"input",2),ye("ngModelChange",function(o){return ve(e.categoryName,o)||(e.categoryName=o),o}),s()()(),r(7,"mat-dialog-actions",3)(8,"button",4),g("click",function(){return e.onCancel()}),l(9,"Cancel"),s(),r(10,"button",5),g("click",function(){return e.onConfirm()}),l(11,"Add Category"),s()()),t&2&&(d(6),_e("ngModel",e.categoryName),d(4),_("disabled",!e.categoryName.trim()))},dependencies:[Y,le,Pt,Rt,Re,nt,$i,Zi,Ki,gt,yt,Le,xt,Ot,q,st],styles:[".w-100[_ngcontent-%COMP%]{width:100%}.mt-8[_ngcontent-%COMP%]{margin-top:8px}"]})};var Ts=(a,i)=>i.id,No=(a,i)=>i.value;function Is(a,i){a&1&&(r(0,"mat-error"),l(1,"Habit name is required"),s())}function Es(a,i){if(a&1&&(r(0,"mat-option",13),l(1),s()),a&2){let t=i.$implicit;_("value",t.id),d(),k(t.name)}}function Ps(a,i){a&1&&(r(0,"mat-error"),l(1,"Category is required"),s())}function Rs(a,i){if(a&1){let t=E();r(0,"div",30),g("click",function(){let n=D(t).$implicit,o=b();return S(o.selectColor(n))}),s()}if(a&2){let t=i.$implicit,e=b();j("background-color",t)("box-shadow",e.habitForm.value.color===t?"0 0 0 2px #111":"none")}}function Os(a,i){if(a&1&&(r(0,"mat-button-toggle",13),l(1),s()),a&2){let t=i.$implicit;_("value",t.value),d(),k(t.label)}}function Ls(a,i){a&1&&(r(0,"div",22),l(1,"Frequency is required"),s())}function As(a,i){a&1&&(r(0,"div",23)(1,"span",24),l(2,"Select Custom Days"),s(),C(3,"t-day-picker",31),s())}function Fs(a,i){if(a&1&&(r(0,"mat-button-toggle",13),l(1),s()),a&2){let t=i.$implicit;_("value",t.value),d(),k(t.label)}}function Ns(a,i){a&1&&(r(0,"div",37),l(1,"Start and End times are required for Fixed habits"),s())}function Bs(a,i){a&1&&(r(0,"div",37),l(1,"End time must be after start time"),s())}function Hs(a,i){if(a&1&&(r(0,"div",26)(1,"div",32)(2,"mat-form-field",33)(3,"mat-label"),l(4,"Start Time"),s(),C(5,"input",34),r(6,"mat-icon",35),l(7,"schedule"),s()(),r(8,"mat-form-field",33)(9,"mat-label"),l(10,"End Time"),s(),C(11,"input",36),r(12,"mat-icon",35),l(13,"schedule"),s()()(),x(14,Ns,2,0,"div",37),x(15,Bs,2,0,"div",37),s()),a&2){let t,e=b();d(14),w((t=e.habitForm.get("startTime"))!=null&&t.touched&&e.habitForm.hasError("timesRequired")?14:-1),d(),w(e.habitForm.touched&&e.habitForm.hasError("invalidTimeRange")?15:-1)}}function zs(a,i){a&1&&(r(0,"div",15)(1,"span",24),l(2,"Daily Target"),s(),C(3,"lib-duration-picker",38),s())}function Vs(a,i){a&1&&(r(0,"div",43)(1,"span",16),l(2,"Remind me before start"),s(),C(3,"lib-duration-picker",44),r(4,"span",45),l(5,"Leave at 00:00 for exact start time"),s()())}function js(a,i){if(a&1){let t=E();r(0,"div",27)(1,"div",39)(2,"div",26)(3,"span",40),l(4,"Daily Reminder"),s(),r(5,"span",41),l(6,"Get notified when it's time"),s()(),r(7,"mat-slide-toggle",42),g("change",function(n){D(t);let o=b();return S(o.onReminderToggle(n.checked))}),s()(),x(8,Vs,6,0,"div",43),s()}if(a&2){let t,e=b();d(8),w((t=e.habitForm.get("reminderEnabled"))!=null&&t.value?8:-1)}}var hn=class a{habit=G(null);close=Wt();fb=m(li);habitService=m(Tt);categoryService=m(Te);notificationService=m(an);dialog=m(Et);dialogData=m(ce,{optional:!0});isEditMode=U(()=>!!(this.habit()||this.dialogData?.habit));frequencyOptions=[{label:"Daily",value:0},{label:"Specific Days",value:1}];habitTypeOptions=[{label:"Fixed Time",value:"fixed"},{label:"Flexible ",value:"flexible"}];daysOptions=[{label:"Monday",value:0},{label:"Tuesday",value:1},{label:"Wednesday",value:2},{label:"Thursday",value:3},{label:"Friday",value:4},{label:"Saturday",value:5},{label:"Sunday",value:6}];categoryOptions=f([]);iconOptions=["star","fitness_center","water_drop","menu_book","check_circle","bolt","local_fire_department","monitor_heart","self_improvement","psychology","directions_run","pool","bedtime","restaurant","shopping_cart","work","school","home","favorite","event","sunny","cloud","spa","coffee","brush","code","camera_alt","music_note","meditation","nature","pets","savings","assignment"];presetColors=["#3b82f6","#4ade80","#c084fc","#fba94c","#f472b6","#5eead4","#f87171","#fcd34d"];habitForm=this.fb.group({name:["",Nt.required],description:[""],icon:["star"],color:["#3b82f6"],frequency:[0,Nt.required],habitType:["flexible",Nt.required],startTime:[""],endTime:[""],days:[[]],category:[1,Nt.required],reminderEnabled:[!1],reminderTime:["08:00"],reminderOffset:["00:00"],duration:["00:00"]},{validators:[this.habitTimeValidator()]});habitTimeValidator(){return i=>{let t=i.get("habitType")?.value,e=i.get("startTime")?.value,n=i.get("endTime")?.value;if(t==="fixed"){if(!e||!n)return{timesRequired:!0};let o=this.hhmmToMinutes(e);if(this.hhmmToMinutes(n)<=o)return{invalidTimeRange:!0}}return null}}minutesToHHmm(i){let t=Math.floor(i/60),e=i%60;return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}hhmmToMinutes(i){if(!i)return 0;let[t,e]=i.split(":").map(Number);return(t||0)*60+(e||0)}selectColor(i){this.habitForm.patchValue({color:i})}async ngOnInit(){this.categoryOptions.set(await this.categoryService.getCategories());let i=this.habit()||this.dialogData?.habit;if(i)this.habitForm.patchValue({name:i.name,description:i.description,icon:i.icon,color:i.color,frequency:i.frequency,habitType:i.habitType||"flexible",startTime:i.startTime||"",endTime:i.endTime||"",days:i.days||[],category:i.category?.id,reminderEnabled:i.reminderEnabled||!1,reminderTime:i.reminderTime||"08:00",reminderOffset:this.minutesToHHmm(i.reminderOffset||0),duration:this.minutesToHHmm(i.duration||0)});else{let t=this.categoryOptions();t.length>0&&this.habitForm.patchValue({category:t[0].id})}}async onReminderToggle(i){i&&(await this.notificationService.requestPermission()||this.habitForm.patchValue({reminderEnabled:!1}))}async onSubmit(){if(this.habitForm.invalid){this.habitForm.markAllAsTouched();return}let i=this.habitForm.value,t=Number(i.category),e=this.categoryOptions().find(u=>u.id===t),n=e?{id:e.id,name:e.name}:{id:0,name:"General"},o=Number(i.frequency),c=i.habitType==="fixed",p=0;if(c&&i.startTime&&i.endTime){let u=this.hhmmToMinutes(i.endTime)-this.hhmmToMinutes(i.startTime);p=u<0?u+1440:u}else p=this.hhmmToMinutes(i.duration);let h={name:i.name,description:i.description||"",icon:i.icon||"star",color:i.color||"#3b82f6",frequency:o,habitType:i.habitType,startTime:c?i.startTime:"",endTime:c?i.endTime:"",days:o===1?i.days:[],category:n,reminderEnabled:c?!!i.reminderEnabled:!1,reminderTime:i.reminderTime||"08:00",reminderOffset:this.hhmmToMinutes(i.reminderOffset),duration:p};if(this.habit()?.id||this.dialogData?.habit?.id){let u=this.habit()?.id||this.dialogData.habit.id;await this.habitService.updateHabit(u,h)}else await this.habitService.addHabit(h);this.close.emit(!0)}async addCategory(){this.dialog.open(pn,{width:"400px"}).afterClosed().subscribe(async t=>{if(t){let e=await this.categoryService.addCategory(t);this.categoryOptions.set(await this.categoryService.getCategories()),this.habitForm.patchValue({category:e})}})}onCancel(){this.close.emit(!1)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-create-habit"]],inputs:{habit:[1,"habit"]},outputs:{close:"close"},decls:64,vars:10,consts:[[1,"bg-white","h-100","df","fd-c"],[1,"df","fd-r","ai-c","jc-s","pt-24","px-24","pb-8",2,"border-bottom","1px solid var(--border-subtle)"],[1,"df","fd-c","gap-2"],[1,"m-0","fw-800","fs-22","text-primary"],[1,"fs-12","text-secondary","fw-500"],["mat-icon-button","","type","button",1,"close-btn",3,"click"],[1,"df","fd-c","fg-1",2,"overflow","hidden",3,"ngSubmit","formGroup"],["cdkScrollable","",1,"df","fd-c","gap-5","p-24","fg-1",2,"overflow-y","auto"],["appearance","outline",1,"w-100","m-0","p-0"],["matInput","","formControlName","name","placeholder","e.g. Morning meditation"],["matInput","","formControlName","description","placeholder","Why is this habit important?"],[1,"df","fd-r","ai-c","gap-2"],["formControlName","category"],[3,"value"],["mat-icon-button","","type","button","color","primary","title","Add New Category",2,"margin-top","-16px",3,"click"],[1,"df","fd-c","gap-2","flex-1"],[1,"fs-13","fw-600","text-primary","uppercase","ls-1"],[1,"df","fd-r","gap-4","flex-wrap"],[1,"cursor-pointer","us-none",2,"width","32px","height","32px","min-width","32px","border-radius","50%","border","3px solid #fff","transition","box-shadow 0.2s","box-sizing","border-box","flex-shrink","0",3,"background-color","box-shadow"],["formControlName","icon",3,"icons"],[1,"df","fd-c"],["formControlName","frequency",1,"mt-8"],[1,"text-error","fs-12","mt-4","ml-4"],[1,"df","fd-c","gap-2","w-100","pt-8"],[1,"fs-13","fw-600","text-secondary","uppercase","ls-1"],["formControlName","habitType",1,"mt-8"],[1,"df","fd-c","gap-1"],[1,"df","fd-c","gap-3","mt-16"],[1,"p-24",2,"border-top","1px solid var(--border-subtle)"],["mat-flat-button","","color","primary","type","submit",1,"text-bg","w-100","p-24"],[1,"cursor-pointer","us-none",2,"width","32px","height","32px","min-width","32px","border-radius","50%","border","3px solid #fff","transition","box-shadow 0.2s","box-sizing","border-box","flex-shrink","0",3,"click"],["formControlName","days"],[1,"df","fd-r","gap-4"],["appearance","outline",1,"w-100"],["matInput","","type","time","formControlName","startTime"],["matSuffix",""],["matInput","","type","time","formControlName","endTime"],[1,"text-error","fs-12","ml-4"],["formControlName","duration"],[1,"df","fd-r","ai-c","jc-s","p-16","br-12",2,"background-color","#f8fafc","border","1px solid #e2e8f0"],[1,"fs-14","fw-600"],[1,"fs-12","text-secondary"],["formControlName","reminderEnabled","color","primary",3,"change"],[1,"df","fd-c","gap-2","p-16","br-12","animate-fade-in",2,"background-color","#fff9fb","border","1px solid #fecdd3"],["formControlName","reminderOffset"],[1,"fs-11","text-secondary","mt-1"]],template:function(t,e){if(t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),l(4),s(),r(5,"span",4),l(6,"Define your routine and goals"),s()(),r(7,"button",5),g("click",function(){return e.onCancel()}),r(8,"mat-icon"),l(9,"close"),s()()(),r(10,"form",6),g("ngSubmit",function(){return e.onSubmit()}),r(11,"div",7)(12,"div",2)(13,"mat-form-field",8)(14,"mat-label"),l(15,"Habit Name"),s(),C(16,"input",9),x(17,Is,2,0,"mat-error"),s()(),r(18,"div",2)(19,"mat-form-field",8)(20,"mat-label"),l(21,"Description (Optional)"),s(),C(22,"input",10),s()(),r(23,"div",11)(24,"mat-form-field",8)(25,"mat-label"),l(26,"Category"),s(),r(27,"mat-select",12),F(28,Es,2,2,"mat-option",13,Ts),s(),x(30,Ps,2,0,"mat-error"),s(),r(31,"button",14),g("click",function(){return e.addCategory()}),r(32,"mat-icon"),l(33,"add_circle_outline"),s()()(),r(34,"div",15)(35,"span",16),l(36,"Color"),s(),r(37,"div",17),F(38,Rs,1,4,"div",18,Kt),s()(),r(40,"div",15)(41,"span",16),l(42,"Icon"),s(),C(43,"t-icon-picker",19),s(),r(44,"div",20)(45,"span",16),l(46,"Frequency"),s(),r(47,"mat-button-toggle-group",21),F(48,Os,2,2,"mat-button-toggle",13,No),s(),x(50,Ls,2,0,"div",22),s(),x(51,As,4,0,"div",23),r(52,"div",20)(53,"span",24),l(54,"Habit Type"),s(),r(55,"mat-button-toggle-group",25),F(56,Fs,2,2,"mat-button-toggle",13,No),s()(),x(58,Hs,16,2,"div",26)(59,zs,4,0,"div",15),x(60,js,9,1,"div",27),s(),r(61,"div",28)(62,"button",29),l(63),s()()()()),t&2){let n,o,c,p,h,u;d(4),k(e.isEditMode()?"Update Habit":"New Habit"),d(6),_("formGroup",e.habitForm),d(7),w((n=e.habitForm.get("name"))!=null&&n.touched&&((n=e.habitForm.get("name"))!=null&&n.hasError("required"))?17:-1),d(11),N(e.categoryOptions()),d(2),w((o=e.habitForm.get("category"))!=null&&o.touched&&((o=e.habitForm.get("category"))!=null&&o.hasError("required"))?30:-1),d(8),N(e.presetColors),d(5),_("icons",e.iconOptions),d(5),N(e.frequencyOptions),d(2),w((c=e.habitForm.get("frequency"))!=null&&c.touched&&((c=e.habitForm.get("frequency"))!=null&&c.hasError("required"))?50:-1),d(),w(((p=e.habitForm.get("frequency"))==null?null:p.value)===1?51:-1),d(5),N(e.habitTypeOptions),d(2),w(((h=e.habitForm.get("habitType"))==null?null:h.value)==="fixed"?58:59),d(2),w(((u=e.habitForm.get("habitType"))==null?null:u.value)==="fixed"?60:-1),d(3),T(" ",e.isEditMode()?"Update Habit":"Create Habit"," ")}},dependencies:[Y,di,Oe,Pt,Rt,Pe,si,ri,xt,Ot,yt,Le,fo,_o,gt,Ne,Wi,Fe,Ae,q,st,ut,nt,W,Q,Ro,Un,Ao,Qn,rn,sn,ln,mn],encapsulation:2})};var hi=class a{data=m(ce);static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-confirm-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title","",1,"m-0","pt-24","px-24","pb-8","fw-700"],[1,"px-24","pt-8"],[1,"m-0","fs-16","text-secondary",2,"line-height","1.5"],["align","end",1,"px-24","pb-24","pt-16"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","warn",3,"mat-dialog-close"]],template:function(t,e){t&1&&(r(0,"h2",0),l(1),s(),r(2,"mat-dialog-content",1)(3,"p",2),l(4),s()(),r(5,"mat-dialog-actions",3)(6,"button",4),l(7,"Cancel"),s(),r(8,"button",5),l(9,"Confirm Delete"),s()()),t&2&&(d(),k(e.data.title),d(3),k(e.data.message),d(4),_("mat-dialog-close",!0))},dependencies:[nt,Qi,$i,Zi,Ki,q,st],encapsulation:2})};var de=class a{transform(i){if(i==null)return"";let t=Math.floor(i/60),e=i%60;return t===0?`${e}m`:e===0?`${t}h`:`${t}h ${e}m`}static \u0275fac=function(t){return new(t||a)};static \u0275pipe=Fa({name:"duration",type:a,pure:!0})};function Yn(a){let i=a.cloneNode(!0),t=i.querySelectorAll("[id]"),e=a.nodeName.toLowerCase();i.removeAttribute("id");for(let n=0;n<t.length;n++)t[n].removeAttribute("id");return e==="canvas"?zo(a,i):(e==="input"||e==="select"||e==="textarea")&&Ho(a,i),Bo("canvas",a,i,zo),Bo("input, textarea, select",a,i,Ho),i}function Bo(a,i,t,e){let n=i.querySelectorAll(a);if(n.length){let o=t.querySelectorAll(a);for(let c=0;c<n.length;c++)e(n[c],o[c])}}var Gs=0;function Ho(a,i){i.type!=="file"&&(i.value=a.value),i.type==="radio"&&i.name&&(i.name=`mat-clone-${i.name}-${Gs++}`)}function zo(a,i){let t=i.getContext("2d");if(t)try{t.drawImage(a,0,0)}catch{}}function aa(a){let i=a.getBoundingClientRect();return{top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height,x:i.x,y:i.y}}function Xn(a,i,t){let{top:e,bottom:n,left:o,right:c}=a;return t>=e&&t<=n&&i>=o&&i<=c}function Ws(a,i){let t=i.left<a.left,e=i.left+i.width>a.right,n=i.top<a.top,o=i.top+i.height>a.bottom;return t||e||n||o}function Pi(a,i,t){a.top+=i,a.bottom=a.top+a.height,a.left+=t,a.right=a.left+a.width}function Vo(a,i,t,e){let{top:n,right:o,bottom:c,left:p,width:h,height:u}=a,y=h*i,L=u*i;return e>n-L&&e<c+L&&t>p-y&&t<o+y}var un=class{_document;positions=new Map;constructor(i){this._document=i}clear(){this.positions.clear()}cache(i){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),i.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:aa(t)})})}handleScroll(i){let t=ki(i),e=this.positions.get(t);if(!e)return null;let n=e.scrollPosition,o,c;if(t===this._document){let u=this.getViewportScrollPosition();o=u.top,c=u.left}else o=t.scrollTop,c=t.scrollLeft;let p=n.top-o,h=n.left-c;return this.positions.forEach((u,y)=>{u.clientRect&&t!==y&&t.contains(y)&&Pi(u.clientRect,p,h)}),n.top=o,n.left=c,{top:p,left:h}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Jo(a,i){let t=a.rootNodes;if(t.length===1&&t[0].nodeType===i.ELEMENT_NODE)return t[0];let e=i.createElement("div");return t.forEach(n=>e.appendChild(n)),e}function oa(a,i,t){for(let e in i)if(i.hasOwnProperty(e)){let n=i[e];n?a.setProperty(e,n,t?.has(e)?"important":""):a.removeProperty(e)}return a}function ui(a,i){let t=i?"":"none";oa(a.style,{"touch-action":i?"":"none","-webkit-user-drag":i?"":"none","-webkit-tap-highlight-color":i?"":"transparent","user-select":t,"-ms-user-select":t,"-webkit-user-select":t,"-moz-user-select":t})}function jo(a,i,t){oa(a.style,{position:i?"":"fixed",top:i?"":"0",opacity:i?"":"0",left:i?"":"-999em"},t)}function gn(a,i){return i&&i!="none"?a+" "+i:a}function Go(a,i){a.style.width=`${i.width}px`,a.style.height=`${i.height}px`,a.style.transform=Ri(i.left,i.top)}function Ri(a,i){return`translate3d(${Math.round(a)}px, ${Math.round(i)}px, 0)`}var Ii={capture:!0},Kn={passive:!1,capture:!0},qs=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(e,n){},styles:[`@layer cdk-resets {
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
`],encapsulation:2,changeDetection:0})}return a})(),fn=(()=>{class a{_ngZone=m(ft);_document=m(ge);_styleLoader=m(qt);_renderer=m(zn).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new B;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=f([]);_globalListeners;_draggingPredicate=t=>t.isDragging();_domNodesToDirectives=null;pointerMove=new B;pointerUp=new B;constructor(){}registerDropContainer(t){this._dropInstances.has(t)||this._dropInstances.add(t)}registerDragItem(t){this._dragInstances.add(t),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Kn)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(t,e){if(!(this._activeDragInstances().indexOf(t)>-1)&&(this._styleLoader.load(qs),this._activeDragInstances.update(n=>[...n,t]),this._activeDragInstances().length===1)){let n=e.type.startsWith("touch"),o=p=>this.pointerUp.next(p),c=[["scroll",p=>this._scroll.next(p),Ii],["selectstart",this._preventDefaultWhileDragging,Kn]];n?c.push(["touchend",o,Ii],["touchcancel",o,Ii]):c.push(["mouseup",o,Ii]),n||c.push(["mousemove",p=>this.pointerMove.next(p),Kn]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=c.map(([p,h,u])=>this._renderer.listen(this._document,p,h,u))})}}stopDragging(t){this._activeDragInstances.update(e=>{let n=e.indexOf(t);return n>-1?(e.splice(n,1),[...e]):e}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(t){return this._activeDragInstances().indexOf(t)>-1}scrolled(t){let e=[this._scroll];return t&&t!==this._document&&e.push(new pe(n=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(t,"scroll",c=>{this._activeDragInstances().length&&n.next(c)},Ii);return()=>{o()}}))),Ht(...e)}registerDirectiveNode(t,e){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(t,e)}removeDirectiveNode(t){this._domNodesToDirectives?.delete(t)}getDragDirectiveForNode(t){return this._domNodesToDirectives?.get(t)||null}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=t=>{this._activeDragInstances().length>0&&t.preventDefault()};_persistentTouchmoveListener=t=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&t.preventDefault(),this.pointerMove.next(t))};_clearGlobalListeners(){this._globalListeners?.forEach(t=>t()),this._globalListeners=void 0}static \u0275fac=function(e){return new(e||a)};static \u0275prov=zt({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Wo(a){let i=a.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(a)*i}function Us(a){let i=getComputedStyle(a),t=Zn(i,"transition-property"),e=t.find(p=>p==="transform"||p==="all");if(!e)return 0;let n=t.indexOf(e),o=Zn(i,"transition-duration"),c=Zn(i,"transition-delay");return Wo(o[n])+Wo(c[n])}function Zn(a,i){return a.getPropertyValue(i).split(",").map(e=>e.trim())}var Qs=new Set(["position"]),Jn=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(i,t,e,n,o,c,p,h,u,y){this._document=i,this._rootElement=t,this._direction=e,this._initialDomRect=n,this._previewTemplate=o,this._previewClass=c,this._pickupPositionOnPage=p,this._initialTransform=h,this._zIndex=u,this._renderer=y}attach(i){this._preview=this._createPreview(),i.appendChild(this._preview),qo(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(i){this._preview.style.transform=i}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(i){this._preview.classList.add(i)}getTransitionDuration(){return Us(this._preview)}addEventListener(i,t){return this._renderer.listen(this._preview,i,t)}_createPreview(){let i=this._previewTemplate,t=this._previewClass,e=i?i.template:null,n;if(e&&i){let o=i.matchSize?this._initialDomRect:null,c=i.viewContainer.createEmbeddedView(e,i.context);c.detectChanges(),n=Jo(c,this._document),this._previewEmbeddedView=c,i.matchSize?Go(n,o):n.style.transform=Ri(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else n=Yn(this._rootElement),Go(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return oa(n.style,{"pointer-events":"none",margin:qo(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Qs),ui(n,!1),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),t&&(Array.isArray(t)?t.forEach(o=>n.classList.add(o)):n.classList.add(t)),n}};function qo(a){return"showPopover"in a}var $s={passive:!0},Uo={passive:!1},Ks={passive:!1,capture:!0},Zs=800,Qo="cdk-drag-placeholder",$o=new Set(["position"]);function tr(a,i,t={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let e=a.get(be,null,{optional:!0})||a.get(zn).createRenderer(null,null);return new ta(i,t,a.get(ge),a.get(ft),a.get(Di),a.get(fn),e)}var ta=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=f(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new B;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=mt.EMPTY;_pointerUpSubscription=mt.EMPTY;_scrollSubscription=mt.EMPTY;_resizeSubscription=mt.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(i){i!==this._disabled&&(this._disabled=i,this._toggleNativeDragInteractions(),this._handles.forEach(t=>ui(t,i)))}_disabled=!1;beforeStarted=new B;started=new B;released=new B;ended=new B;entered=new B;exited=new B;dropped=new B;moved=this._moveEvents;data;constrainPosition;constructor(i,t,e,n,o,c,p){this._config=t,this._document=e,this._ngZone=n,this._viewportRuler=o,this._dragDropRegistry=c,this._renderer=p,this.withRootElement(i).withParent(t.parentDragRef||null),this._parentPositions=new un(e),c.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(i){this._handles=i.map(e=>we(e)),this._handles.forEach(e=>ui(e,this.disabled)),this._toggleNativeDragInteractions();let t=new Set;return this._disabledHandles.forEach(e=>{this._handles.indexOf(e)>-1&&t.add(e)}),this._disabledHandles=t,this}withPreviewTemplate(i){return this._previewTemplate=i,this}withPlaceholderTemplate(i){return this._placeholderTemplate=i,this}withRootElement(i){let t=we(i);if(t!==this._rootElement){this._removeRootElementListeners();let e=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[e.listen(t,"mousedown",this._pointerDown,Uo),e.listen(t,"touchstart",this._pointerDown,$s),e.listen(t,"dragstart",this._nativeDragStart,Uo)]),this._initialTransform=void 0,this._rootElement=t}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(i){return this._boundaryElement=i?we(i):null,this._resizeSubscription.unsubscribe(),i&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(i){return this._parentDragRef=i,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Ws(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let i=this._boundaryElement.getBoundingClientRect(),t=this._rootElement.getBoundingClientRect(),e=0,n=0;t.left<i.left?e=i.left-t.left:t.right>i.right&&(e=i.right-t.right),t.top<i.top?n=i.top-t.top:t.bottom>i.bottom&&(n=i.bottom-t.bottom);let o=this._activeTransform.x,c=this._activeTransform.y,p=o+e,h=c+n;this._rootElement.style.transform=Ri(p,h),this._activeTransform={x:p,y:h},this._passiveTransform={x:p,y:h}}}disableHandle(i){!this._disabledHandles.has(i)&&this._handles.indexOf(i)>-1&&(this._disabledHandles.add(i),ui(i,!0))}enableHandle(i){this._disabledHandles.has(i)&&(this._disabledHandles.delete(i),ui(i,this.disabled))}withDirection(i){return this._direction=i,this}_withDropContainer(i){this._dropContainer=i}getFreeDragPosition(){let i=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:i.x,y:i.y}}setFreeDragPosition(i){return this._activeTransform={x:0,y:0},this._passiveTransform.x=i.x,this._passiveTransform.y=i.y,this._dropContainer||this._applyRootElementTransform(i.x,i.y),this}withPreviewContainer(i){return this._previewContainer=i,this}_sortFromLastPointerPosition(){let i=this._lastKnownPointerPosition;i&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(i),i)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=i=>{if(this.beforeStarted.next(),this._handles.length){let t=this._getTargetHandle(i);t&&!this._disabledHandles.has(t)&&!this.disabled&&this._initializeDragSequence(t,i)}else this.disabled||this._initializeDragSequence(this._rootElement,i)};_pointerMove=i=>{let t=this._getPointerPositionOnPage(i);if(!this._hasStartedDragging()){let n=Math.abs(t.x-this._pickupPositionOnPage.x),o=Math.abs(t.y-this._pickupPositionOnPage.y);if(n+o>=this._config.dragStartThreshold){let p=Date.now()>=this._dragStartTime+this._getDragStartDelay(i),h=this._dropContainer;if(!p){this._endDragSequence(i);return}(!h||!h.isDragging()&&!h.isReceiving())&&(i.cancelable&&i.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(i)))}return}i.cancelable&&i.preventDefault();let e=this._getConstrainedPointerPosition(t);if(this._hasMoved=!0,this._lastKnownPointerPosition=t,this._updatePointerDirectionDelta(e),this._dropContainer)this._updateActiveDropContainer(e,t);else{let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=e.x-n.x+this._passiveTransform.x,o.y=e.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:e,event:i,distance:this._getDragDistance(e),delta:this._pointerDirectionDelta})})};_pointerUp=i=>{this._endDragSequence(i)};_endDragSequence(i){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:i}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(i),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let t=this._getPointerPositionOnPage(i);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(t),dropPoint:t,event:i})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(i){Ei(i)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let t=this._getShadowRoot(),e=this._dropContainer;if(t&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(t,"selectstart",Ys,Ks)}),e){let n=this._rootElement,o=n.parentNode,c=this._placeholder=this._createPlaceholderElement(),p=this._marker=this._marker||this._document.createComment("");o.insertBefore(p,n),this._initialTransform=n.style.transform||"",this._preview=new Jn(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,t)),jo(n,!1,$o),this._document.body.appendChild(o.replaceChild(c,n)),this.started.next({source:this,event:i}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this)}else this.started.next({source:this,event:i}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[])}_initializeDragSequence(i,t){this._parentDragRef&&t.stopPropagation();let e=this.isDragging(),n=Ei(t),o=!n&&t.button!==0,c=this._rootElement,p=ki(t),h=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+Zs>Date.now(),u=n?Ya(t):Za(t);if(p&&p.draggable&&t.type==="mousedown"&&t.preventDefault(),e||o||h||u)return;if(this._handles.length){let A=c.style;this._rootElementTapHighlight=A.webkitTapHighlightColor||"",A.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(A=>this._updateOnScroll(A)),this._boundaryElement&&(this._boundaryRect=aa(this._boundaryElement));let y=this._previewTemplate;this._pickupPositionInElement=y&&y.template&&!y.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,i,t);let L=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(t);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:L.x,y:L.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,t)}_cleanupDragArtifacts(i){jo(this._rootElement,!0,$o),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let t=this._dropContainer,e=t.getItemIndex(this),n=this._getPointerPositionOnPage(i),o=this._getDragDistance(n),c=t._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:o,dropPoint:n,event:i}),this.dropped.next({item:this,currentIndex:e,previousIndex:this._initialIndex,container:t,previousContainer:this._initialContainer,isPointerOverContainer:c,distance:o,dropPoint:n,event:i}),t.drop(this,e,this._initialIndex,this._initialContainer,c,o,n,i),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:i,y:t},{x:e,y:n}){let o=this._initialContainer._getSiblingContainerFromPosition(this,i,t);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(i,t)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let c=this._dropContainer.getItemIndex(this),p=this._dropContainer.getItemAtIndex(c+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,p),this._dropContainer=o,this._dropContainer.enter(this,i,t,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(e,n),this._dropContainer._sortItem(this,i,t,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(i,t):this._applyPreviewTransform(i-this._pickupPositionInElement.x,t-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let i=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(i.left,i.top);let t=this._preview.getTransitionDuration();return t===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(e=>{let n=p=>{(!p||this._preview&&ki(p)===this._preview.element&&p.propertyName==="transform")&&(c(),e(),clearTimeout(o))},o=setTimeout(n,t*1.5),c=this._preview.addEventListener("transitionend",n)}))}_createPlaceholderElement(){let i=this._placeholderTemplate,t=i?i.template:null,e;return t?(this._placeholderRef=i.viewContainer.createEmbeddedView(t,i.context),this._placeholderRef.detectChanges(),e=Jo(this._placeholderRef,this._document)):e=Yn(this._rootElement),e.style.pointerEvents="none",e.classList.add(Qo),e}_getPointerPositionInElement(i,t,e){let n=t===this._rootElement?null:t,o=n?n.getBoundingClientRect():i,c=Ei(e)?e.targetTouches[0]:e,p=this._getViewportScrollPosition(),h=c.pageX-o.left-p.left,u=c.pageY-o.top-p.top;return{x:o.left-i.left+h,y:o.top-i.top+u}}_getPointerPositionOnPage(i){let t=this._getViewportScrollPosition(),e=Ei(i)?i.touches[0]||i.changedTouches[0]||{pageX:0,pageY:0}:i,n=e.pageX-t.left,o=e.pageY-t.top;if(this._ownerSVGElement){let c=this._ownerSVGElement.getScreenCTM();if(c){let p=this._ownerSVGElement.createSVGPoint();return p.x=n,p.y=o,p.matrixTransform(c.inverse())}}return{x:n,y:o}}_getConstrainedPointerPosition(i){let t=this._dropContainer?this._dropContainer.lockAxis:null,{x:e,y:n}=this.constrainPosition?this.constrainPosition(i,this,this._initialDomRect,this._pickupPositionInElement):i;if(this.lockAxis==="x"||t==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||t==="y")&&(e=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:c}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,p=this._boundaryRect,{width:h,height:u}=this._getPreviewRect(),y=p.top+c,L=p.bottom-(u-c),A=p.left+o,X=p.right-(h-o);e=Ko(e,A,X),n=Ko(n,y,L)}return{x:e,y:n}}_updatePointerDirectionDelta(i){let{x:t,y:e}=i,n=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,c=Math.abs(t-o.x),p=Math.abs(e-o.y);return c>this._config.pointerDirectionChangeThreshold&&(n.x=t>o.x?1:-1,o.x=t),p>this._config.pointerDirectionChangeThreshold&&(n.y=e>o.y?1:-1,o.y=e),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let i=this._handles.length>0||!this.isDragging();i!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=i,ui(this._rootElement,i))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(i=>i()),this._rootElementCleanups=void 0}_applyRootElementTransform(i,t){let e=1/this.scale,n=Ri(i*e,t*e),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=gn(n,this._initialTransform)}_applyPreviewTransform(i,t){let e=this._previewTemplate?.template?void 0:this._initialTransform,n=Ri(i,t);this._preview.setTransform(gn(n,e))}_getDragDistance(i){let t=this._pickupPositionOnPage;return t?{x:i.x-t.x,y:i.y-t.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:i,y:t}=this._passiveTransform;if(i===0&&t===0||this.isDragging()||!this._boundaryElement)return;let e=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||e.width===0&&e.height===0)return;let o=n.left-e.left,c=e.right-n.right,p=n.top-e.top,h=e.bottom-n.bottom;n.width>e.width?(o>0&&(i+=o),c>0&&(i-=c)):i=0,n.height>e.height?(p>0&&(t+=p),h>0&&(t-=h)):t=0,(i!==this._passiveTransform.x||t!==this._passiveTransform.y)&&this.setFreeDragPosition({y:t,x:i})}_getDragStartDelay(i){let t=this.dragStartDelay;return typeof t=="number"?t:Ei(i)?t.touch:t?t.mouse:0}_updateOnScroll(i){let t=this._parentPositions.handleScroll(i);if(t){let e=ki(i);this._boundaryRect&&e!==this._boundaryElement&&e.contains(this._boundaryElement)&&Pi(this._boundaryRect,t.top,t.left),this._pickupPositionOnPage.x+=t.left,this._pickupPositionOnPage.y+=t.top,this._dropContainer||(this._activeTransform.x-=t.left,this._activeTransform.y-=t.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Vi(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(i,t){let e=this._previewContainer||"global";if(e==="parent")return i;if(e==="global"){let n=this._document;return t||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return we(e)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=i=>{if(this._handles.length){let t=this._getTargetHandle(i);t&&!this._disabledHandles.has(t)&&!this.disabled&&i.preventDefault()}else this.disabled||i.preventDefault()};_getTargetHandle(i){return this._handles.find(t=>i.target&&(i.target===t||t.contains(i.target)))}_conditionallyInsertAnchor(i,t,e){if(i===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(t===this._initialContainer&&t.hasAnchor){let n=this._anchor??=Yn(this._placeholder);n.classList.remove(Qo),n.classList.add("cdk-drag-anchor"),n.style.transform="",e?e.before(n):we(t.element).appendChild(n)}}};function Ko(a,i,t){return Math.max(i,Math.min(t,a))}function Ei(a){return a.type[0]==="t"}function Ys(a){a.preventDefault()}function _n(a,i,t){let e=Zo(i,a.length-1),n=Zo(t,a.length-1);if(e===n)return;let o=a[e],c=n<e?-1:1;for(let p=e;p!==n;p+=c)a[p]=a[p+c];a[n]=o}function Zo(a,i){return Math.max(0,Math.min(i,a))}var bn=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(i){this._dragDropRegistry=i}_previousSwap={drag:null,delta:0,overlaps:!1};start(i){this.withItems(i)}sort(i,t,e,n){let o=this._itemPositions,c=this._getItemIndexFromPointerPosition(i,t,e,n);if(c===-1&&o.length>0)return null;let p=this.orientation==="horizontal",h=o.findIndex(ct=>ct.drag===i),u=o[c],y=o[h].clientRect,L=u.clientRect,A=h>c?1:-1,X=this._getItemOffsetPx(y,L,A),St=this._getSiblingOffsetPx(h,o,A),et=o.slice();return _n(o,h,c),o.forEach((ct,Ce)=>{if(et[Ce]===ct)return;let me=ct.drag===i,at=me?X:St,He=me?i.getPlaceholderElement():ct.drag.getRootElement();ct.offset+=at;let Ke=Math.round(ct.offset*(1/ct.drag.scale));p?(He.style.transform=gn(`translate3d(${Ke}px, 0, 0)`,ct.initialTransform),Pi(ct.clientRect,0,at)):(He.style.transform=gn(`translate3d(0, ${Ke}px, 0)`,ct.initialTransform),Pi(ct.clientRect,at,0))}),this._previousSwap.overlaps=Xn(L,t,e),this._previousSwap.drag=u.drag,this._previousSwap.delta=p?n.x:n.y,{previousIndex:h,currentIndex:c}}enter(i,t,e,n){let o=this._activeDraggables,c=o.indexOf(i),p=i.getPlaceholderElement();c>-1&&o.splice(c,1);let h=n==null||n<0?this._getItemIndexFromPointerPosition(i,t,e):n,u=o[h];if(u===i&&(u=o[h+1]),!u&&(h==null||h===-1||h<o.length-1)&&this._shouldEnterAsFirstChild(t,e)&&(u=o[0]),u&&!this._dragDropRegistry.isDragging(u)){let y=u.getRootElement();y.parentElement.insertBefore(p,y),o.splice(h,0,i)}else this._element.appendChild(p),o.push(i);p.style.transform="",this._cacheItemPositions()}withItems(i){this._activeDraggables=i.slice(),this._cacheItemPositions()}withSortPredicate(i){this._sortPredicate=i}reset(){this._activeDraggables?.forEach(i=>{let t=i.getRootElement();if(t){let e=this._itemPositions.find(n=>n.drag===i)?.initialTransform;t.style.transform=e||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(i){return this._getVisualItemPositions().findIndex(t=>t.drag===i)}getItemAtIndex(i){return this._getVisualItemPositions()[i]?.drag||null}updateOnScroll(i,t){this._itemPositions.forEach(({clientRect:e})=>{Pi(e,i,t)}),this._itemPositions.forEach(({drag:e})=>{this._dragDropRegistry.isDragging(e)&&e._sortFromLastPointerPosition()})}withElementContainer(i){this._element=i}_cacheItemPositions(){let i=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(t=>{let e=t.getVisibleElement();return{drag:t,offset:0,initialTransform:e.style.transform||"",clientRect:aa(e)}}).sort((t,e)=>i?t.clientRect.left-e.clientRect.left:t.clientRect.top-e.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(i,t,e){let n=this.orientation==="horizontal",o=n?t.left-i.left:t.top-i.top;return e===-1&&(o+=n?t.width-i.width:t.height-i.height),o}_getSiblingOffsetPx(i,t,e){let n=this.orientation==="horizontal",o=t[i].clientRect,c=t[i+e*-1],p=o[n?"width":"height"]*e;if(c){let h=n?"left":"top",u=n?"right":"bottom";e===-1?p-=c.clientRect[h]-o[u]:p+=o[h]-c.clientRect[u]}return p}_shouldEnterAsFirstChild(i,t){if(!this._activeDraggables.length)return!1;let e=this._itemPositions,n=this.orientation==="horizontal";if(e[0].drag!==this._activeDraggables[0]){let c=e[e.length-1].clientRect;return n?i>=c.right:t>=c.bottom}else{let c=e[0].clientRect;return n?i<=c.left:t<=c.top}}_getItemIndexFromPointerPosition(i,t,e,n){let o=this.orientation==="horizontal",c=this._itemPositions.findIndex(({drag:p,clientRect:h})=>{if(p===i)return!1;if(n){let u=o?n.x:n.y;if(p===this._previousSwap.drag&&this._previousSwap.overlaps&&u===this._previousSwap.delta)return!1}return o?t>=Math.floor(h.left)&&t<Math.floor(h.right):e>=Math.floor(h.top)&&e<Math.floor(h.bottom)});return c===-1||!this._sortPredicate(c,i)?-1:c}},ea=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(i,t){this._document=i,this._dragDropRegistry=t}start(i){let t=this._element.childNodes;this._relatedNodes=[];for(let e=0;e<t.length;e++){let n=t[e];this._relatedNodes.push([n,n.nextSibling])}this.withItems(i)}sort(i,t,e,n){let o=this._getItemIndexFromPointerPosition(i,t,e),c=this._previousSwap;if(o===-1||this._activeItems[o]===i)return null;let p=this._activeItems[o];if(c.drag===p&&c.overlaps&&c.deltaX===n.x&&c.deltaY===n.y)return null;let h=this.getItemIndex(i),u=i.getPlaceholderElement(),y=p.getRootElement();o>h?y.after(u):y.before(u),_n(this._activeItems,h,o);let L=this._getRootNode().elementFromPoint(t,e);return c.deltaX=n.x,c.deltaY=n.y,c.drag=p,c.overlaps=y===L||y.contains(L),{previousIndex:h,currentIndex:o}}enter(i,t,e,n){let o=this._activeItems.indexOf(i);o>-1&&this._activeItems.splice(o,1);let c=n==null||n<0?this._getItemIndexFromPointerPosition(i,t,e):n;c===-1&&(c=this._getClosestItemIndexToPointer(i,t,e));let p=this._activeItems[c];p&&!this._dragDropRegistry.isDragging(p)?(this._activeItems.splice(c,0,i),p.getRootElement().before(i.getPlaceholderElement())):(this._activeItems.push(i),this._element.appendChild(i.getPlaceholderElement()))}withItems(i){this._activeItems=i.slice()}withSortPredicate(i){this._sortPredicate=i}reset(){let i=this._element,t=this._previousSwap;for(let e=this._relatedNodes.length-1;e>-1;e--){let[n,o]=this._relatedNodes[e];n.parentNode===i&&n.nextSibling!==o&&(o===null?i.appendChild(n):o.parentNode===i&&i.insertBefore(n,o))}this._relatedNodes=[],this._activeItems=[],t.drag=null,t.deltaX=t.deltaY=0,t.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(i){return this._activeItems.indexOf(i)}getItemAtIndex(i){return this._activeItems[i]||null}updateOnScroll(){this._activeItems.forEach(i=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(i){i!==this._element&&(this._element=i,this._rootNode=void 0)}_getItemIndexFromPointerPosition(i,t,e){let n=this._getRootNode().elementFromPoint(Math.floor(t),Math.floor(e)),o=n?this._activeItems.findIndex(c=>{let p=c.getRootElement();return n===p||p.contains(n)}):-1;return o===-1||!this._sortPredicate(o,i)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=Vi(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(i,t,e){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let n=1/0,o=-1;for(let c=0;c<this._activeItems.length;c++){let p=this._activeItems[c];if(p!==i){let{x:h,y:u}=p.getRootElement().getBoundingClientRect(),y=Math.hypot(t-h,e-u);y<n&&(n=y,o=c)}}return o}},Yo=.05,er=.05,$t=(function(a){return a[a.NONE=0]="NONE",a[a.UP=1]="UP",a[a.DOWN=2]="DOWN",a})($t||{}),Dt=(function(a){return a[a.NONE=0]="NONE",a[a.LEFT=1]="LEFT",a[a.RIGHT=2]="RIGHT",a})(Dt||{});function ir(a,i){return new ia(i,a.get(fn),a.get(ge),a.get(ft),a.get(Di))}var ia=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new B;entered=new B;exited=new B;dropped=new B;sorted=new B;receivingStarted=new B;receivingStopped=new B;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=mt.EMPTY;_verticalScrollDirection=$t.NONE;_horizontalScrollDirection=Dt.NONE;_scrollNode;_stopScrollTimers=new B;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(i,t,e,n,o){this._dragDropRegistry=t,this._ngZone=n,this._viewportRuler=o;let c=this.element=we(i);this._document=e,this.withOrientation("vertical").withElementContainer(c),t.registerDropContainer(this),this._parentPositions=new un(e)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(i,t,e,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(i)),this._sortStrategy.enter(i,t,e,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:i,container:this,currentIndex:this.getItemIndex(i)})}exit(i){this._reset(),this.exited.next({item:i,container:this})}drop(i,t,e,n,o,c,p,h={}){this._reset(),this.dropped.next({item:i,currentIndex:t,previousIndex:e,container:this,previousContainer:n,isPointerOverContainer:o,distance:c,dropPoint:p,event:h})}withItems(i){let t=this._draggables;return this._draggables=i,i.forEach(e=>e._withDropContainer(this)),this.isDragging()&&(t.filter(n=>n.isDragging()).every(n=>i.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(i){return this._direction=i,this._sortStrategy instanceof bn&&(this._sortStrategy.direction=i),this}connectedTo(i){return this._siblings=i.slice(),this}withOrientation(i){if(i==="mixed")this._sortStrategy=new ea(this._document,this._dragDropRegistry);else{let t=new bn(this._dragDropRegistry);t.direction=this._direction,t.orientation=i,this._sortStrategy=t}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((t,e)=>this.sortPredicate(t,e,this)),this}withScrollableParents(i){let t=this._container;return this._scrollableElements=i.indexOf(t)===-1?[t,...i]:i.slice(),this}withElementContainer(i){if(i===this._container)return this;let t=we(this.element),e=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(i);return e>-1&&this._scrollableElements.splice(e,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(i),this._cachedShadowRoot=null,this._scrollableElements.unshift(i),this._container=i,this}getScrollableParents(){return this._scrollableElements}getItemIndex(i){return this._isDragging?this._sortStrategy.getItemIndex(i):this._draggables.indexOf(i)}getItemAtIndex(i){return this._isDragging?this._sortStrategy.getItemAtIndex(i):this._draggables[i]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(i,t,e,n){if(this.sortingDisabled||!this._domRect||!Vo(this._domRect,Yo,t,e))return;let o=this._sortStrategy.sort(i,t,e,n);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:i})}_startScrollingIfNecessary(i,t){if(this.autoScrollDisabled)return;let e,n=$t.NONE,o=Dt.NONE;if(this._parentPositions.positions.forEach((c,p)=>{p===this._document||!c.clientRect||e||Vo(c.clientRect,Yo,i,t)&&([n,o]=Xs(p,c.clientRect,this._direction,i,t),(n||o)&&(e=p))}),!n&&!o){let{width:c,height:p}=this._viewportRuler.getViewportSize(),h={width:c,height:p,top:0,right:c,bottom:p,left:0};n=nr(h,t),o=ar(h,i),e=window}e&&(n!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||e!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=o,this._scrollNode=e,(n||o)&&e?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let i=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=i.msScrollSnapType||i.scrollSnapType||"",i.scrollSnapType=i.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let i=this._container.style;i.scrollSnapType=i.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(t=>t._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Da(0,wa).pipe(ee(this._stopScrollTimers)).subscribe(()=>{let i=this._scrollNode,t=this.autoScrollStep;this._verticalScrollDirection===$t.UP?i.scrollBy(0,-t):this._verticalScrollDirection===$t.DOWN&&i.scrollBy(0,t),this._horizontalScrollDirection===Dt.LEFT?i.scrollBy(-t,0):this._horizontalScrollDirection===Dt.RIGHT&&i.scrollBy(t,0)})};_isOverContainer(i,t){return this._domRect!=null&&Xn(this._domRect,i,t)}_getSiblingContainerFromPosition(i,t,e){return this._siblings.find(n=>n._canReceive(i,t,e))}_canReceive(i,t,e){if(!this._domRect||!Xn(this._domRect,t,e)||!this.enterPredicate(i,this))return!1;let n=this._getShadowRoot().elementFromPoint(t,e);return n?n===this._container||this._container.contains(n):!1}_startReceiving(i,t){let e=this._activeSiblings;!e.has(i)&&t.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(e.add(i),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:i,receiver:this,items:t}))}_stopReceiving(i){this._activeSiblings.delete(i),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:i,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(i=>{if(this.isDragging()){let t=this._parentPositions.handleScroll(i);t&&this._sortStrategy.updateOnScroll(t.top,t.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let i=Vi(this._container);this._cachedShadowRoot=i||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let i=this._sortStrategy.getActiveItemsSnapshot().filter(t=>t.isDragging());this._siblings.forEach(t=>t._startReceiving(this,i))}};function nr(a,i){let{top:t,bottom:e,height:n}=a,o=n*er;return i>=t-o&&i<=t+o?$t.UP:i>=e-o&&i<=e+o?$t.DOWN:$t.NONE}function ar(a,i){let{left:t,right:e,width:n}=a,o=n*er;return i>=t-o&&i<=t+o?Dt.LEFT:i>=e-o&&i<=e+o?Dt.RIGHT:Dt.NONE}function Xs(a,i,t,e,n){let o=nr(i,n),c=ar(i,e),p=$t.NONE,h=Dt.NONE;if(o){let u=a.scrollTop;o===$t.UP?u>0&&(p=$t.UP):a.scrollHeight-u>a.clientHeight&&(p=$t.DOWN)}if(c){let u=a.scrollLeft;t==="rtl"?c===Dt.RIGHT?u<0&&(h=Dt.RIGHT):a.scrollWidth+u>a.clientWidth&&(h=Dt.LEFT):c===Dt.LEFT?u>0&&(h=Dt.LEFT):a.scrollWidth-u>a.clientWidth&&(h=Dt.RIGHT)}return[p,h]}var Js=(()=>{class a{_injector=m(Vt);constructor(){}createDrag(t,e){return tr(this._injector,t,e)}createDropList(t){return ir(this._injector,t)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=zt({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),na=new K("CDK_DRAG_PARENT");var or=new K("CdkDragHandle"),rr=(()=>{class a{element=m(it);_parentDrag=m(na,{optional:!0,skipSelf:!0});_dragDropRegistry=m(fn);_stateChanges=new B;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._stateChanges.next(this)}_disabled=!1;constructor(){this._parentDrag?._addHandle(this)}ngAfterViewInit(){if(!this._parentDrag){let t=this.element.nativeElement.parentElement;for(;t;){let e=this._dragDropRegistry.getDragDirectiveForNode(t);if(e){this._parentDrag=e,e._addHandle(this);break}t=t.parentElement}}}ngOnDestroy(){this._parentDrag?._removeHandle(this),this._stateChanges.complete()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:[2,"cdkDragHandleDisabled","disabled",I]},features:[J([{provide:or,useExisting:a}])]})}return a})(),sr=new K("CDK_DRAG_CONFIG"),cr=new K("CdkDropList"),lr=(()=>{class a{element=m(it);dropContainer=m(cr,{optional:!0,skipSelf:!0});_ngZone=m(ft);_viewContainerRef=m(Je);_dir=m(xe,{optional:!0});_changeDetectorRef=m(pt);_selfHandle=m(or,{optional:!0,self:!0});_parentDrag=m(na,{optional:!0,skipSelf:!0});_dragDropRegistry=m(fn);_destroyed=new B;_handles=new Bn([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(t){this._disabled=t,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new O;released=new O;ended=new O;entered=new O;exited=new O;dropped=new O;moved=new pe(t=>{let e=this._dragRef.moved.pipe(he(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(t);return()=>{e.unsubscribe()}});_injector=m(Vt);constructor(){let t=this.dropContainer,e=m(sr,{optional:!0});this._dragRef=tr(this._injector,this.element,{dragStartThreshold:e&&e.dragStartThreshold!=null?e.dragStartThreshold:5,pointerDirectionChangeThreshold:e&&e.pointerDirectionChangeThreshold!=null?e.pointerDirectionChangeThreshold:5,zIndex:e?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),e&&this._assignDefaults(e),t&&(t.addItem(this),t._dropListRef.beforeStarted.pipe(ee(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(t){this._dragRef.setFreeDragPosition(t)}ngAfterViewInit(){Ve(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(t){let e=t.rootElementSelector,n=t.freeDragPosition;e&&!e.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(t){let e=this._handles.getValue();e.push(t),this._handles.next(e)}_removeHandle(t){let e=this._handles.getValue(),n=e.indexOf(t);n>-1&&(e.splice(n,1),this._handles.next(e))}_setPreviewTemplate(t){this._previewTemplate=t}_resetPreviewTemplate(t){t===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(t){this._placeholderTemplate=t}_resetPlaceholderTemplate(t){t===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let t=this.element.nativeElement,e=t;this.rootElementSelector&&(e=t.closest!==void 0?t.closest(this.rootElementSelector):t.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(e||t)}_getBoundaryElement(){let t=this.boundaryElement;return t?typeof t=="string"?this.element.nativeElement.closest(t):we(t):null}_syncInputs(t){t.beforeStarted.subscribe(()=>{if(!t.isDragging()){let e=this._dir,n=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,c=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.scale=this.scale,t.dragStartDelay=typeof n=="object"&&n?n:Ci(n),t.constrainPosition=this.constrainPosition,t.previewClass=this.previewClass,t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(c).withPreviewContainer(this.previewContainer||"global"),e&&t.withDirection(e.value)}}),t.beforeStarted.pipe(Jt(1)).subscribe(()=>{if(this._parentDrag){t.withParent(this._parentDrag._dragRef);return}let e=this.element.nativeElement.parentElement;for(;e;){let n=this._dragDropRegistry.getDragDirectiveForNode(e);if(n){t.withParent(n._dragRef);break}e=e.parentElement}})}_handleEvents(t){t.started.subscribe(e=>{this.started.emit({source:this,event:e.event}),this._changeDetectorRef.markForCheck()}),t.released.subscribe(e=>{this.released.emit({source:this,event:e.event})}),t.ended.subscribe(e=>{this.ended.emit({source:this,distance:e.distance,dropPoint:e.dropPoint,event:e.event}),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(e=>{this.entered.emit({container:e.container.data,item:this,currentIndex:e.currentIndex})}),t.exited.subscribe(e=>{this.exited.emit({container:e.container.data,item:this})}),t.dropped.subscribe(e=>{this.dropped.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,previousContainer:e.previousContainer.data,container:e.container.data,isPointerOverContainer:e.isPointerOverContainer,item:this,distance:e.distance,dropPoint:e.dropPoint,event:e.event})})}_assignDefaults(t){let{lockAxis:e,dragStartDelay:n,constrainPosition:o,previewClass:c,boundaryElement:p,draggingDisabled:h,rootElementSelector:u,previewContainer:y}=t;this.disabled=h??!1,this.dragStartDelay=n||0,this.lockAxis=e||null,o&&(this.constrainPosition=o),c&&(this.previewClass=c),p&&(this.boundaryElement=p),u&&(this.rootElementSelector=u),y&&(this.previewContainer=y)}_setupHandlesListener(){this._handles.pipe(Ta(t=>{let e=t.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&e.push(this.element),this._dragRef.withHandles(e)}),ue(t=>Ht(...t.map(e=>e._stateChanges.pipe(te(e))))),ee(this._destroyed)).subscribe(t=>{let e=this._dragRef,n=t.element.nativeElement;t.disabled?e.disableHandle(n):e.enableHandle(n)})}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(e,n){e&2&&P("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",I],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",Zt]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[J([{provide:na,useExisting:a}]),jt]})}return a})(),Xo=new K("CdkDropListGroup");var dr=(()=>{class a{element=m(it);_changeDetectorRef=m(pt);_scrollDispatcher=m(io);_dir=m(xe,{optional:!0});_group=m(Xo,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new B;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=m(It).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(t){this._dropListRef.disabled=this._disabled=t}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new O;entered=new O;exited=new O;sorted=new O;_unsortedItems=new Set;constructor(){let t=m(sr,{optional:!0}),e=m(Vt);this._dropListRef=ir(e,this.element),this._dropListRef.data=this,t&&this._assignDefaults(t),this._dropListRef.enterPredicate=(n,o)=>this.enterPredicate(n.data,o.data),this._dropListRef.sortPredicate=(n,o,c)=>this.sortPredicate(n,o.data,c.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),a._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(t){this._unsortedItems.add(t),t._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(e=>e._dragRef))}removeItem(t){if(this._unsortedItems.delete(t),this._latestSortedRefs){let e=this._latestSortedRefs.indexOf(t._dragRef);e>-1&&(this._latestSortedRefs.splice(e,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((t,e)=>t._dragRef.getVisibleElement().compareDocumentPosition(e._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let t=a._dropLists.indexOf(this);t>-1&&a._dropLists.splice(t,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(t){this._dir&&this._dir.change.pipe(te(this._dir.value),ee(this._destroyed)).subscribe(e=>t.withDirection(e)),t.beforeStarted.subscribe(()=>{let e=Ja(this.connectedTo).map(n=>{if(typeof n=="string"){let o=a._dropLists.find(c=>c.id===n);return o}return n});if(this._group&&this._group._items.forEach(n=>{e.indexOf(n)===-1&&e.push(n)}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);t.withElementContainer(n)}t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.sortingDisabled=this.sortingDisabled,t.autoScrollDisabled=this.autoScrollDisabled,t.autoScrollStep=Ci(this.autoScrollStep,2),t.hasAnchor=this.hasAnchor,t.connectedTo(e.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation)})}_handleEvents(t){t.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(e=>e._dragRef)),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(e=>{this.entered.emit({container:this,item:e.item.data,currentIndex:e.currentIndex})}),t.exited.subscribe(e=>{this.exited.emit({container:this,item:e.item.data}),this._changeDetectorRef.markForCheck()}),t.sorted.subscribe(e=>{this.sorted.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,container:this,item:e.item.data})}),t.dropped.subscribe(e=>{this.dropped.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,previousContainer:e.previousContainer.data,container:e.container.data,item:e.item.data,isPointerOverContainer:e.isPointerOverContainer,distance:e.distance,dropPoint:e.dropPoint,event:e.event}),this._changeDetectorRef.markForCheck()}),Ht(t.receivingStarted,t.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(t){let{lockAxis:e,draggingDisabled:n,sortingDisabled:o,listAutoScrollDisabled:c,listOrientation:p}=t;this.disabled=n??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=c??!1,this.orientation=p||"vertical",this.lockAxis=e||null}_syncItemsWithRef(t){this._latestSortedRefs=t,this._dropListRef.withItems(t)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(e,n){e&2&&(Z("id",n.id),P("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",I],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",I],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",I],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",I]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[J([{provide:Xo,useValue:void 0},{provide:cr,useExisting:a}])]})}return a})();var vn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({providers:[Js],imports:[qi]})}return a})();var tc=(a,i)=>i.value;function ec(a,i){if(a&1&&(r(0,"div",3)(1,"span",18),l(2),s()()),a&2){let t=b();d(2),k(t.habit().category.name)}}function ic(a,i){if(a&1&&(r(0,"div",4)(1,"span",19),l(2,"\u{1F525}"),s(),r(3,"span",20),l(4),s()()),a&2){let t=b();d(4),k(t.habit().currentStreak)}}function nc(a,i){if(a&1&&(r(0,"div",3)(1,"mat-icon",21),l(2,"schedule"),s(),r(3,"span",22),l(4),At(5,"duration"),s()()),a&2){let t=b();d(4),k(Ft(5,1,t.habit().duration))}}function ac(a,i){if(a&1&&(r(0,"div",5)(1,"mat-icon",23),l(2,"timer"),s(),r(3,"span",24),l(4),s()()),a&2){let t=b();d(4),ei("",t.habit().startTime," - ",t.habit().endTime)}}function oc(a,i){a&1&&(r(0,"button",25),g("click",function(e){return e.stopPropagation()}),r(1,"mat-icon",26),l(2,"drag_indicator"),s()())}function rc(a,i){if(a&1&&(r(0,"p",9),l(1),s()),a&2){let t=b();d(),k(t.habit().description)}}function sc(a,i){a&1&&(r(0,"div",11)(1,"span",27),l(2,"Daily"),s()())}function cc(a,i){if(a&1&&(r(0,"div",29),l(1),s()),a&2){let t,e,n=i.$implicit,o=b(2);j("background-color",(t=o.habit().days)!=null&&t.includes(n.value)?"#10b981":"#f1f5f9")("color",(e=o.habit().days)!=null&&e.includes(n.value)?"#fff":"#94a3b8"),d(),T(" ",n.label," ")}}function lc(a,i){if(a&1&&(r(0,"div",12),F(1,cc,2,5,"div",28,tc),s()),a&2){let t=b();d(),N(t.allDays())}}var yn=class a{habit=G.required();allDays=G([]);canReorder=G(!1);edit=Wt();delete=Wt();view=Wt();HabitFrequency=ke;onEdit(i){i.stopPropagation(),this.edit.emit()}onDelete(i){i.stopPropagation(),this.delete.emit()}onView(){this.view.emit()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-habit-card"]],inputs:{habit:[1,"habit"],allDays:[1,"allDays"],canReorder:[1,"canReorder"]},outputs:{edit:"edit",delete:"delete",view:"view"},decls:27,vars:9,consts:[[1,"habit-card","p-16","b-1-solid","br-8","df","fd-c","ai-c","jc-s","cursor-pointer",2,"transition","all 0.2s","box-shadow","0 2px 8px rgba(0,0,0,0.03)","background-color","#fff",3,"click"],[1,"df","ai-c","gap-2","w-100"],[1,"fw-600","fs-16"],[1,"df","ai-c","gap-1","px-8","py-2","br-4",2,"background-color","#f1f5f9","border","1px solid #e2e8f0"],[1,"df","ai-c","gap-1","px-8","py-2","br-12",2,"background-color","#fff7ed","border","1px solid #ffedd5"],[1,"df","ai-c","gap-1","px-8","py-2","br-4",2,"background-color","#f0f9ff","border","1px solid #e0f2fe"],[1,"df","fd-r","ai-c","jc-s","w-100"],["mat-icon-button","","cdkDragHandle","",2,"margin-left","-8px","cursor","grab"],[1,"df","fd-c","gap-2",2,"flex","1"],[1,"m-0","mt-4","text-secondary","fs-13","truncate-1"],[1,"df","fd-r","ai-c","gap-2","mt-8"],[1,"px-8","py-2","br-4",2,"background-color","#f0fdf4","border","1px solid #dcfce7"],[1,"df","fd-r","gap-1"],[1,"fs-14","fw-400",2,"width","14px","height","14px","color","#94a3b8"],[1,"fs-11","fw-500","text-secondary","ls-1","uppercase"],[1,"df","fd-r"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],[1,"fs-10","fw-700","uppercase","ls-1",2,"color","#64748b"],[2,"font-size","14px"],[1,"fs-12","fw-700",2,"color","#ea580c"],[2,"font-size","11px","width","11px","height","11px","color","#64748b"],[1,"fs-10","fw-700",2,"color","#64748b"],[2,"font-size","11px","width","11px","height","11px","color","#0369a1"],[1,"fs-10","fw-700",2,"color","#0369a1"],["mat-icon-button","","cdkDragHandle","",2,"margin-left","-8px","cursor","grab",3,"click"],[2,"color","#94a3b8"],[1,"fs-10","fw-700","uppercase","ls-1",2,"color","#166534"],[1,"df","ai-c","jc-c",2,"width","18px","height","18px","border-radius","4px","font-size","9px","font-weight","700",3,"background-color","color"],[1,"df","ai-c","jc-c",2,"width","18px","height","18px","border-radius","4px","font-size","9px","font-weight","700"]],template:function(t,e){t&1&&(r(0,"div",0),g("click",function(){return e.onView()}),r(1,"div",1)(2,"div",2),l(3),s(),x(4,ec,3,1,"div",3),x(5,ic,5,1,"div",4),x(6,nc,6,3,"div",3),x(7,ac,5,2,"div",5),s(),r(8,"div",6),x(9,oc,3,0,"button",7),r(10,"div",8),x(11,rc,2,1,"p",9),r(12,"div",10),x(13,sc,3,0,"div",11)(14,lc,3,0,"div",12),s(),r(15,"div",10)(16,"mat-icon",13),l(17,"emoji_events"),s(),r(18,"span",14),l(19),s()()(),r(20,"div",15)(21,"button",16),g("click",function(o){return e.onEdit(o)}),r(22,"mat-icon"),l(23,"edit"),s()(),r(24,"button",17),g("click",function(o){return e.onDelete(o)}),r(25,"mat-icon"),l(26,"delete"),s()()()()()),t&2&&(d(3),k(e.habit().name),d(),w(e.habit().category?4:-1),d(),w(e.habit().currentStreak>0?5:-1),d(),w(e.habit().duration?6:-1),d(),w(e.habit().startTime&&e.habit().endTime?7:-1),d(2),w(e.canReorder()?9:-1),d(2),w(e.habit().description?11:-1),d(2),w(e.habit().frequency===e.HabitFrequency.Daily?13:14),d(6),T("Best: ",e.habit().longestStreak," days"))},dependencies:[Y,W,Q,q,ut,vn,rr,de],encapsulation:2})};var pr=(a,i)=>i.id;function mc(a,i){if(a&1){let t=E();r(0,"t-create-habit",17),g("close",function(n){D(t);let o=b();return S(o.onDrawerClose(n))}),s()}if(a&2){let t=b();_("habit",t.selectedHabit())}}function pc(a,i){if(a&1&&(r(0,"mat-option",13),l(1),s()),a&2){let t=i.$implicit;_("value",t.id),d(),k(t.name)}}function hc(a,i){if(a&1){let t=E();r(0,"t-habit-card",18),g("edit",function(){let n=D(t).$implicit,o=b();return S(o.editHabit(n))})("delete",function(){let n=D(t).$implicit,o=b();return S(o.deleteHabit(n))})("view",function(){let n=D(t).$implicit,o=b();return S(o.viewDetails(n.id))}),s()}if(a&2){let t=i.$implicit,e=b();_("habit",t)("allDays",e.allDays)("canReorder",!0)}}function uc(a,i){if(a&1){let t=E();r(0,"div",16)(1,"p",19),l(2,"No habits found. Let's create one!"),s(),r(3,"button",20),g("click",function(){D(t);let n=b();return S(n.openCreateHabitDialog())}),l(4,"Quick Create"),s()()}}var xn=class a{habitService=m(Tt);habitLogService=m(oe);categoryService=m(Te);snackBar=m(Qt);dialog=m(Et);router=m(ne);HabitFrequency=ke;allDays=[{label:"M",value:0},{label:"T",value:1},{label:"W",value:2},{label:"T",value:3},{label:"F",value:4},{label:"S",value:5},{label:"S",value:6}];habits=f([]);categories=f([]);selectedCategoryId=f("all");selectedHabit=f(null);filteredHabits=U(()=>{let i=this.selectedCategoryId(),t=this.habits();return i==="all"?t:t.filter(e=>e.category?.id===i)});async ngOnInit(){this.categories.set(await this.categoryService.getCategories()),await this.loadHabits()}async loadHabits(){let i=await this.habitService.loadHabits(),t=await Promise.all(i.map(async e=>{let n=await this.habitLogService.getStreakStatus(e.id);return vi(Yt({},e),{currentStreak:n.current,longestStreak:n.longest})}));this.habits.set(t)}openCreateHabitDialog(){this.selectedHabit.set(null),this.drawerOpened.set(!0)}drawerOpened=f(!1);onDrawerClose(i){this.drawerOpened.set(!1),i&&this.loadHabits()}editHabit(i){this.selectedHabit.set(i),this.drawerOpened.set(!0)}viewDetails(i){this.router.navigate(["/habits",i])}deleteHabit(i){this.dialog.open(hi,{width:"450px",data:{title:"Delete Habit",message:`Are you sure you want to delete "${i.name}"? All associated tracking history for this habit will be permanently lost!`}}).afterClosed().subscribe(async e=>{e&&i.id&&(await this.habitService.deleteHabit(i.id),await this.loadHabits())})}async drop(i){let t=[...this.habits()],e=this.filteredHabits(),n=e[i.previousIndex],o=e[i.currentIndex],c=t.findIndex(u=>u.id===n.id),p=t.findIndex(u=>u.id===o.id);_n(t,c,p);let h=t.map((u,y)=>vi(Yt({},u),{position:y}));this.habits.set(h);try{await this.habitService.updateHabitPositions(h)}catch(u){console.error("Failed to save habit order:",u),this.snackBar.open("Failed to save order","Close",{duration:3e3}),await this.loadHabits()}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-habits-list"]],decls:23,vars:5,consts:[["drawer",""],[1,"w-100",3,"hasBackdrop"],["mode","over","position","end",1,"h-100",2,"width","80%",3,"closedStart","opened"],[3,"habit"],[1,"p-16","df","fd-c","gap-8"],[1,"df","fd-r","ai-c","jc-s"],[1,"m-0","fs-24","fw-700"],[1,"df","fd-r","ai-c","gap-4"],["mat-flat-button","","color","primary",1,"br-8","text-bg",3,"click"],[1,"df","fd-c","gap-4"],["appearance","outline",2,"width","160px"],[3,"selectionChange","value"],["value","all"],[3,"value"],["cdkDropList","",1,"df","fd-c","gap-4",3,"cdkDropListDropped"],["cdkDrag","",3,"habit","allDays","canReorder"],[1,"empty-state","p-32","df","fd-c","ai-c","gap-4","b-1-dashed","br-8"],[3,"close","habit"],["cdkDrag","",3,"edit","delete","view","habit","allDays","canReorder"],[1,"m-0","text-secondary"],["mat-stroked-button","","color","primary",3,"click"]],template:function(t,e){t&1&&(r(0,"mat-drawer-container",1)(1,"mat-drawer",2,0),g("closedStart",function(){return e.onDrawerClose(!1)}),x(3,mc,1,1,"t-create-habit",3),s(),r(4,"mat-drawer-content")(5,"div",4)(6,"div",5)(7,"h2",6),l(8,"My Habits"),s(),r(9,"div",7)(10,"button",8),g("click",function(){return e.openCreateHabitDialog()}),l(11," New Habit "),s()()(),r(12,"div",9)(13,"mat-form-field",10)(14,"mat-select",11),g("selectionChange",function(o){return e.selectedCategoryId.set(o.value)}),r(15,"mat-option",12),l(16,"All Categories"),s(),F(17,pc,2,2,"mat-option",13,pr),s()(),r(19,"div",14),g("cdkDropListDropped",function(o){return e.drop(o)}),F(20,hc,1,3,"t-habit-card",15,pr,!1,uc,5,0,"div",16),s()()()()()),t&2&&(_("hasBackdrop",!0),d(),_("opened",e.drawerOpened()),d(2),w(e.drawerOpened()?3:-1),d(11),_("value",e.selectedCategoryId()),d(3),N(e.categories()),d(3),N(e.filteredHabits()))},dependencies:[nt,q,st,W,Ne,yt,Fe,Ae,gt,se,Xi,Do,So,Co,hn,yn,vn,dr,lr],styles:["[_nghost-%COMP%]{height:100%;display:flex}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:12px;box-shadow:var(--mat-sys-level5);opacity:.9}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.2}.cdk-drag-animating[_ngcontent-%COMP%], .cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"]})};var hr=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({imports:[ht]})}return a})();var ur=["*"],gr=`.mdc-list {
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
`,gc=["unscopedContent"],bc=["text"],fc=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],_c=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var vc=new K("ListOption"),Li=(()=>{class a{_elementRef=m(it);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return a})(),yc=(()=>{class a{_elementRef=m(it);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return a})(),xc=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return a})(),br=(()=>{class a{_listOption=m(vc,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,hostVars:4,hostBindings:function(e,n){e&2&&P("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return a})(),wc=(()=>{class a extends br{static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275dir=V({type:a,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[_t]})}return a})(),Ai=(()=>{class a extends br{static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275dir=V({type:a,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[_t]})}return a})(),kc=new K("MAT_LIST_CONFIG"),Oi=(()=>{class a{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=ai(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(ai(t))}_disabled=f(!1);_defaultOptions=m(kc,{optional:!0});static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,hostVars:1,hostBindings:function(e,n){e&2&&Z("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return a})(),Cc=(()=>{class a{_elementRef=m(it);_ngZone=m(ft);_listBase=m(Oi,{optional:!0});_platform=m(We);_hostElement;_isButtonElement;_noopAnimations=Ut();_avatars;_icons;set lines(t){this._explicitLines=Ci(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=ai(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(ai(t))}_disabled=f(!1);_subscriptions=new mt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){m(qt).load(re);let t=m(Gn,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ro(this,this._ngZone,this._hostElement,this._platform,m(Vt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ht(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,contentQueries:function(e,n,o){if(e&1&&wt(o,wc,4)(o,Ai,4),e&2){let c;H(c=z())&&(n._avatars=c),H(c=z())&&(n._icons=c)}},hostVars:4,hostBindings:function(e,n){e&2&&(Z("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),P("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return a})();var fr=(()=>{class a extends Oi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275cmp=v({type:a,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[J([{provide:Oi,useExisting:a}]),_t],ngContentSelectors:ur,decls:1,vars:0,template:function(e,n){e&1&&(dt(),$(0))},styles:[gr],encapsulation:2,changeDetection:0})}return a})(),wn=(()=>{class a extends Cc{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=ai(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275cmp=v({type:a,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,o){if(e&1&&wt(o,yc,5)(o,Li,5)(o,xc,5),e&2){let c;H(c=z())&&(n._lines=c),H(c=z())&&(n._titles=c),H(c=z())&&(n._meta=c)}},viewQuery:function(e,n){if(e&1&&Mt(gc,5)(bc,5),e&2){let o;H(o=z())&&(n._unscopedContent=o.first),H(o=z())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(Z("aria-current",n._getAriaCurrent()),P("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[_t],ngContentSelectors:_c,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(dt(fc),$(0),r(1,"span",1),$(2,1),$(3,2),r(4,"span",2,0),g("cdkObserveContent",function(){return n._updateItemLines(!0)}),$(6,3),s()(),$(7,4),$(8,5),C(9,"div",3))},dependencies:[ji],encapsulation:2,changeDetection:0})}return a})();var _r=(()=>{class a extends Oi{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275cmp=v({type:a,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[J([{provide:Oi,useExisting:a}]),_t],ngContentSelectors:ur,decls:1,vars:0,template:function(e,n){e&1&&(dt(),$(0))},styles:[gr],encapsulation:2,changeDetection:0})}return a})();var gi=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({imports:[to,oi,wo,ht,hr]})}return a})();var Dc=()=>["S","M","T","W","T","F","S"],Sc=(a,i)=>i.dateStr;function Mc(a,i){if(a&1&&(r(0,"div",7),l(1),s()),a&2){let t=i.$implicit;d(),T(" ",t," ")}}function Tc(a,i){if(a&1){let t=E();r(0,"div",9)(1,"button",10),g("click",function(){let n=D(t).$implicit,o=b();return S(o.onDateClick(n.dateStr))}),l(2),s()()}if(a&2){let t=i.$implicit,e=b();d(),P("today",t.isToday)("different-month",!t.isCurrentMonth)("selected",t.dateStr===e.selectedDate()),d(),T(" ",t.dayNum," ")}}var kn=class a{initialDate;dateSelected=new O;viewDate=f(new Date);selectedDate=f("");monthDisplay=U(()=>this.viewDate().toLocaleDateString("en-US",{month:"long",year:"numeric"}));days=U(()=>{let i=this.viewDate(),t=i.getFullYear(),e=i.getMonth(),n=new Date(t,e,1),o=new Date(t,e+1,0),c=new Date(n);c.setDate(1-n.getDay());let p=new Date(o);p.setDate(o.getDate()+(6-o.getDay()));let h=[],u=new Date;u.setHours(0,0,0,0);let y=new Date(c);for(;y<=p;)h.push({date:new Date(y),dateStr:this.formatDate(y),dayNum:y.getDate(),isToday:y.getTime()===u.getTime(),isCurrentMonth:y.getMonth()===e}),y.setDate(y.getDate()+1);return h});ngOnInit(){if(this.initialDate){this.selectedDate.set(this.initialDate);let[i,t,e]=this.initialDate.split("-").map(Number);this.viewDate.set(new Date(i,t-1,e))}}shiftMonth(i){let t=new Date(this.viewDate());t.setMonth(t.getMonth()+i),this.viewDate.set(t)}goToToday(){this.viewDate.set(new Date)}onDateClick(i){this.selectedDate.set(i),this.dateSelected.emit(i)}formatDate(i){let t=i.getFullYear(),e=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${t}-${e}-${n}`}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-calendar-grid"]],inputs:{initialDate:"initialDate"},outputs:{dateSelected:"dateSelected"},decls:19,vars:2,consts:[[1,"calendar-container","df","fd-c","gap-4","p-16","bg-white","br-24","select-none",2,"height",""],[1,"df","fd-r","jc-sb","ai-c","mb-16","jc-s"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"df","fd-r","gap-2","bg-surface","p-4","br-12"],["mat-icon-button","",1,"small-icon-btn",3,"click"],["mat-button","",1,"today-btn","fs-12","fw-700",3,"click"],[1,"df","fd-r","w-100","mb-8"],[1,"text-center","fs-11","fw-700","text-secondary","uppercase","ls-1",2,"flex","1"],[1,"df","fd-r","flex-wrap","w-100"],[1,"df","ai-c","jc-c",2,"flex","0 0 14.28%","height","44px"],[1,"day-cell","br-12","border-none","df","ai-c","jc-c","fw-700","fs-14","transition-all",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"h3",2),l(3),s(),r(4,"div",3)(5,"button",4),g("click",function(){return e.shiftMonth(-1)}),r(6,"mat-icon"),l(7,"chevron_left"),s()(),r(8,"button",5),g("click",function(){return e.goToToday()}),l(9,"Today"),s(),r(10,"button",4),g("click",function(){return e.shiftMonth(1)}),r(11,"mat-icon"),l(12,"chevron_right"),s()()()(),r(13,"div",6),F(14,Mc,2,1,"div",7,xi),s(),r(16,"div",8),F(17,Tc,3,7,"div",9,Sc),s()()),t&2&&(d(3),k(e.monthDisplay()),d(11),N(zi(1,Dc)),d(3),N(e.days()))},dependencies:[Y,W,Q,q,st,ut],styles:[".calendar-container[_ngcontent-%COMP%]{min-width:300px;box-shadow:0 4px 20px #0000000d}.bg-surface[_ngcontent-%COMP%]{background-color:#f8fafc}.small-icon-btn[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px;color:#64748b}.today-btn[_ngcontent-%COMP%]{min-width:50px;height:32px;padding:0 8px;color:#64748b}.day-cell[_ngcontent-%COMP%]{width:36px;height:36px;background:transparent;color:#1e293b;cursor:pointer}.day-cell[_ngcontent-%COMP%]:hover{background-color:#f1f5f9}.day-cell.today[_ngcontent-%COMP%]{color:#3b82f6;background-color:#eff6ff;border:1px solid #3b82f6!important}.day-cell.different-month[_ngcontent-%COMP%]{color:#94a3b8;opacity:.5}.day-cell.selected[_ngcontent-%COMP%]{background-color:#3b82f6!important;color:#fff!important;box-shadow:0 4px 10px #3b82f64d}"]})};var Cn=class a{dialogRef=m(Ie);data=m(ce);onDateSelected(i){this.dialogRef.close(i)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-full-calendar-dialog"]],decls:2,vars:1,consts:[[1,"full-calendar-dialog-container"],[3,"dateSelected","initialDate"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"t-calendar-grid",1),g("dateSelected",function(o){return e.onDateSelected(o)}),s()()),t&2&&(d(),_("initialDate",e.data.selectedDate))},dependencies:[nt,kn],styles:[".full-calendar-dialog-container[_ngcontent-%COMP%]{padding:0;overflow:hidden;border-radius:24px}"]})};var Ic=(a,i)=>i.dateStr;function Ec(a,i){if(a&1){let t=E();r(0,"div",10),g("click",function(){let n=D(t).$implicit,o=b();return S(o.onSelectDate(n.dateStr))}),r(1,"span",11),l(2),At(3,"titlecase"),s(),r(4,"div",12),l(5),s()()}if(a&2){let t=i.$implicit,e=b();d(),j("color",t.dateStr===e.activeDate()?"var(--text-primary)":"var(--text-secondary)"),d(),T(" ",Ft(3,10,t.dayName)," "),d(2),j("background-color",t.dateStr===e.activeDate()?"var(--text-primary)":"transparent")("color",t.dateStr===e.activeDate()?"var(--background-default)":"var(--text-primary)")("box-shadow",t.dateStr===e.activeDate()?"0 4px 8px var(--primary-light)":"none"),d(),T(" ",t.dayNumber," ")}}var Dn=class a{activeDate=G.required();dateSelected=Wt();dateStrip=f([]);currentMonth=f("");centerDate=new Date;dialog=m(Et);ngOnInit(){if(this.activeDate()){let[i,t,e]=this.activeDate().split("-");this.centerDate=new Date(Number(i),Number(t)-1,Number(e))}this.centerDate.setHours(0,0,0,0),this.generateDateStrip()}getLocalFormattedDate(i){let t=i.getFullYear(),e=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${t}-${e}-${n}`}generateDateStrip(){let i=[],t=new Date(this.centerDate);for(let e=-3;e<=3;e++){let n=new Date(t);n.setDate(t.getDate()+e),i.push({date:n,dayName:n.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),dayNumber:n.getDate(),dateStr:this.getLocalFormattedDate(n)})}this.dateStrip.set(i),this.currentMonth.set(this.centerDate.toLocaleDateString("en-US",{month:"long",year:"numeric"}))}shiftDays(i){this.centerDate.setDate(this.centerDate.getDate()+i),this.generateDateStrip()}goToToday(){this.centerDate=new Date,this.centerDate.setHours(0,0,0,0),this.generateDateStrip(),this.onSelectDate(this.getLocalFormattedDate(this.centerDate))}async openFullCalendar(){this.dialog.open(Cn,{width:"350px",data:{selectedDate:this.activeDate()},panelClass:"custom-dialog-container"}).afterClosed().subscribe(t=>{if(t){let[e,n,o]=t.split("-").map(Number);this.centerDate=new Date(e,n-1,o),this.generateDateStrip(),this.onSelectDate(t)}})}onSelectDate(i){this.dateSelected.emit(i)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-date-strip"]],inputs:{activeDate:[1,"activeDate"]},outputs:{dateSelected:"dateSelected"},decls:19,vars:1,consts:[[1,"px-24","df","fd-c","gap-4"],[1,"df","fd-r","ai-c","gap-4","jc-s"],["mat-stroked-button","",3,"click"],["mat-icon-button","",3,"click"],[1,"fs-15","fw-800","text-primary"],[1,"df","fd-r","ai-c","gap-1","w-100",2,"box-sizing","border-box"],["mat-icon-button","","aria-label","Previous week",2,"color","#a1a1aa","flex-shrink","0",3,"click"],[1,"df","fd-r","jc-sb","ai-c","w-100","overflow-x-auto","hide-scrollbar","scroll-smooth"],[1,"df","fd-c","ai-c","gap-2","cursor-pointer",2,"min-width","48px"],["mat-icon-button","","aria-label","Next week",2,"color","#a1a1aa","flex-shrink","0",3,"click"],[1,"df","fd-c","ai-c","gap-2","cursor-pointer",2,"min-width","48px",3,"click"],[1,"fs-12","fw-600","transition-all"],[1,"df","ai-c","jc-c","br-pill","fw-600","fs-16","transition-all",2,"width","48px","height","48px","box-sizing","border-box"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"button",2),g("click",function(){return e.goToToday()}),l(3," Go to Today "),s(),r(4,"div",3),g("click",function(){return e.openFullCalendar()}),r(5,"div",4),l(6),s(),r(7,"mat-icon"),l(8,"calendar_month"),s()()(),r(9,"div",5)(10,"button",6),g("click",function(){return e.shiftDays(-7)}),r(11,"mat-icon"),l(12,"chevron_left"),s()(),r(13,"div",7),F(14,Ec,6,12,"div",8,Ic),s(),r(16,"button",9),g("click",function(){return e.shiftDays(7)}),r(17,"mat-icon"),l(18,"chevron_right"),s()()()()),t&2&&(d(6),T(" ",e.currentMonth()," "),d(8),N(e.dateStrip()))},dependencies:[W,Q,q,st,ut,nt,ja],encapsulation:2})};var Sn=class a{dedicatedMinutes=G(0);completedMinutes=G(0);percentage=U(()=>{let i=this.dedicatedMinutes(),t=this.completedMinutes();return i===0?0:Math.min(100,Math.round(t/i*100))});chartData=U(()=>{let i=this.completedMinutes(),t=this.dedicatedMinutes(),e=Math.max(0,t-i),n=Math.max(0,1440-t);return{labels:["Progress"],datasets:[{data:[i],backgroundColor:"#10b981",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Completed"},{data:[e],backgroundColor:"#6366f1",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Remaining"},{data:[n],backgroundColor:"#f1f5f9",borderRadius:6,borderSkipped:!1,barThickness:12,label:"Free Time"}]}});chartOptions={indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:i=>` ${i.dataset.label}: ${this.formatTime(i.raw)}`}}},scales:{x:{stacked:!0,display:!1,max:1440},y:{stacked:!0,display:!1}}};formatTime(i){let t=Math.floor(i/60),e=Math.round(i%60);return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-time-availability"]],inputs:{dedicatedMinutes:[1,"dedicatedMinutes"],completedMinutes:[1,"completedMinutes"]},decls:40,vars:15,consts:[[1,"df","fd-c","gap-4","p-20","br-24","bg-white",2,"box-shadow","0 10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box"],[1,"df","fd-r","jc-s","ai-c"],[1,"df","fd-c"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"text-indigo-600"],[1,"df","fd-c","ai-fe"],[1,"fs-20","fw-900",2,"color","#10b981","line-height","1"],[1,"fs-10","fw-700","text-secondary","uppercase"],[2,"height","12px","width","100%","position","relative"],["baseChart","","type","bar",3,"data","options"],[1,"df","fd-r","jc-sb","ai-c","mt-4","flex-wrap","gap-2"],[1,"df","ai-c","gap-3"],[1,"df","ai-c","gap-1"],[1,"br-pill",2,"width","8px","height","8px","background-color","#10b981"],[1,"fs-11","fw-700","text-secondary"],[1,"text-primary"],[1,"br-pill",2,"width","8px","height","8px","background-color","#6366f1"],[1,"br-pill",2,"width","8px","height","8px","background-color","#f1f5f9"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),l(4,"Daily Capacity"),s(),r(5,"h2",4)(6,"span",5),l(7),At(8,"duration"),s(),l(9," total habits "),s()(),r(10,"div",6)(11,"span",7),l(12),s(),r(13,"span",8),l(14,"Done"),s()()(),r(15,"div",9),C(16,"canvas",10),s(),r(17,"div",11)(18,"div",12)(19,"div",13),C(20,"div",14),r(21,"span",15)(22,"span",16),l(23),At(24,"duration"),s(),l(25," Done "),s()(),r(26,"div",13),C(27,"div",17),r(28,"span",15)(29,"span",16),l(30),At(31,"duration"),s(),l(32," Left "),s()(),r(33,"div",13),C(34,"div",18),r(35,"span",15)(36,"span",16),l(37),At(38,"duration"),s(),l(39," Free "),s()()()()()),t&2&&(d(7),k(Ft(8,7,e.dedicatedMinutes())),d(5),T("",e.percentage(),"%"),d(4),_("data",e.chartData())("options",e.chartOptions),d(7),k(Ft(24,9,e.completedMinutes())),d(7),k(Ft(31,11,e.dedicatedMinutes()-e.completedMinutes())),d(7),k(Ft(38,13,1440-e.dedicatedMinutes())))},dependencies:[Y,Me,de],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};var Pc=new K("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Mn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({providers:[vo,{provide:Pc,useValue:{separatorKeyCodes:[13]}}],imports:[oi,ht]})}return a})();function Rc(a,i){if(a&1){let t=E();r(0,"button",8),g("click",function(){D(t);let n=b();return S(n.isEditMode.set(!0))}),r(1,"mat-icon"),l(2,"edit"),s()()}}function Oc(a,i){if(a&1&&(r(0,"div",9)(1,"span",11),l(2,"Mood"),s(),r(3,"span",15),l(4),s()()),a&2){let t=b(2);d(4),k(t.mood)}}function Lc(a,i){if(a&1&&(r(0,"span",17),l(1),s()),a&2){let t=i.$implicit;d(),k(t)}}function Ac(a,i){if(a&1&&(r(0,"div",10)(1,"span",11),l(2,"Tags"),s(),r(3,"div",16),F(4,Lc,2,1,"span",17,Kt),s()()),a&2){let t=b(2);d(4),N(t.selectedTags)}}function Fc(a,i){if(a&1){let t=E();r(0,"div",6),x(1,Oc,5,1,"div",9),x(2,Ac,6,0,"div",10),r(3,"div",10)(4,"span",11),l(5),s(),r(6,"p",12),l(7),s()(),r(8,"div",13)(9,"button",14),g("click",function(){D(t);let n=b();return S(n.close())}),l(10,"Close"),s()()()}if(a&2){let t=b();d(),w(t.mood?1:-1),d(),w(t.selectedTags.size>0?2:-1),d(3),T(" ",t.data.isInFuture?"Plan":"Reflection"," "),d(2),T(" ",t.tempNote||(t.data.isInFuture?"No plan added yet.":"No reflection added yet.")," ")}}function Nc(a,i){if(a&1){let t=E();r(0,"span",31),g("click",function(){let n=D(t).$implicit,o=b(2);return S(o.mood=n)}),l(1),s()}if(a&2){let t=i.$implicit,e=b(2);j("opacity",e.mood===t?"1":"0.4")("filter",e.mood===t?"grayscale(0)":"grayscale(1)"),d(),k(t)}}function Bc(a,i){if(a&1){let t=E();r(0,"div",32),g("click",function(){let n=D(t).$implicit,o=b(2);return S(o.toggleTag(n))}),l(1),s()}if(a&2){let t=i.$implicit,e=b(2);j("background-color",e.selectedTags.has(t)?"var(--primary-light)":"var(--surface-alt)")("color",e.selectedTags.has(t)?"var(--primary-default)":"var(--text-secondary)")("border",e.selectedTags.has(t)?"1px solid var(--primary-default)":"1px solid var(--border-subtle)"),d(),T(" ",t," ")}}function Hc(a,i){if(a&1){let t=E();r(0,"button",33),g("click",function(){D(t);let n=b(2);return S(n.isEditMode.set(!1))}),l(1,"Cancel"),s()}}function zc(a,i){if(a&1){let t=E();r(0,"button",33),g("click",function(){D(t);let n=b(2);return S(n.close())}),l(1,"Cancel"),s()}}function Vc(a,i){if(a&1){let t=E();r(0,"div",7)(1,"div",18)(2,"span",19),l(3,"How do you feel?"),s(),r(4,"div",20),F(5,Nc,2,5,"span",21,Kt),s()(),r(7,"div",22)(8,"span",19),l(9,"Quick Tags"),s(),r(10,"div",23),F(11,Bc,2,7,"div",24,Kt),s()(),r(13,"div",25)(14,"span",19),l(15),s(),r(16,"mat-form-field",26)(17,"textarea",27),ye("ngModelChange",function(n){D(t);let o=b();return ve(o.tempNote,n)||(o.tempNote=n),S(n)}),s()()(),r(18,"div",28),x(19,Hc,2,0,"button",29)(20,zc,2,0,"button",29),r(21,"button",30),g("click",function(){D(t);let n=b();return S(n.save())}),l(22,"Save Entry"),s()()()}if(a&2){let t=b();d(5),N(t.moods),d(6),N(t.availableTags),d(4),T(" ",t.data.isInFuture?"Planning":"Reflection"," "),d(2),_e("ngModel",t.tempNote),_("placeholder",t.data.isInFuture?"What is the plan for this day?":"How did it go today?"),d(2),w(t.hasExistingContent?19:20)}}var bi=class a{dialogRef=m(Ie);data=m(ce);moods=["\u{1F525}","\u26A1","\u{1F607}","\u{1F634}","\u{1F912}","\u{1F680}","\u{1F308}"];availableTags=["#Sick","#Travel","#HighEnergy","#WorkStress","#Weekend","#Social"];mood=this.data.log.mood||"";selectedTags=new Set(this.data.log.tags||[]);tempNote=this.data.isInFuture?this.data.log.planNote||"":this.data.log.reflectionNote||"";isEditMode=f(!1);hasExistingContent=!1;ngOnInit(){this.hasExistingContent=!!(this.mood||this.selectedTags.size>0||this.tempNote),this.isEditMode.set(!this.hasExistingContent)}toggleTag(i){this.selectedTags.has(i)?this.selectedTags.delete(i):this.selectedTags.add(i)}save(){let i={mood:this.mood,tags:Array.from(this.selectedTags)};this.data.isInFuture?i.planNote=this.tempNote:i.reflectionNote=this.tempNote,this.dialogRef.close(i)}close(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-habit-log-note-dialog"]],decls:10,vars:4,consts:[[1,"p-24","df","fd-c","gap-4","min-w-320"],[1,"df","fd-r","jc-sb","ai-c","mb-16"],[1,"df","fd-c"],[1,"m-0","fs-18","fw-800","text-primary"],[1,"fs-12","fw-600","text-secondary"],["mat-icon-button","",2,"color","var(--primary-default)"],[1,"df","fd-c","gap-6"],[1,"df","fd-c","gap-4"],["mat-icon-button","",2,"color","var(--primary-default)",3,"click"],[1,"df","fd-c","gap-1"],[1,"df","fd-c","gap-1","mt-4"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"m-0","fs-14","text-primary","br-12","p-12",2,"background","var(--surface-alt)","min-height","60px","line-height","1.5","white-space","pre-wrap"],[1,"df","fd-r","jc-e","mt-12"],["mat-button","",1,"br-12",3,"click"],[1,"fs-28"],[1,"df","fd-r","flex-wrap","gap-2","pt-2"],[1,"px-8","py-2","br-8","fs-12","fw-600",2,"background","var(--surface-alt)","color","var(--text-secondary)","border","1px solid var(--border-subtle)"],[1,"df","fd-c","gap-2","mb-8"],[1,"fs-12","fw-700","text-secondary","uppercase","ls-1"],[1,"df","fd-r","gap-3","fs-24","py-8"],[1,"cursor-pointer","transition-all","hover-scale",3,"opacity","filter"],[1,"df","fd-c","gap-2","mb-12"],[1,"df","fd-r","flex-wrap","gap-2","pt-4"],[1,"px-10","py-4","br-12","fs-12","fw-600","transition-all","cursor-pointer",3,"background-color","color","border"],[1,"df","fd-c","gap-2"],["appearance","outline",1,"w-100","hide-subscript"],["matInput","","maxlength","300","rows","4",3,"ngModelChange","ngModel","placeholder"],[1,"df","fd-r","jc-e","gap-2","mt-20"],["mat-button",""],["mat-flat-button","","color","primary",1,"br-12","px-20","text-bg",3,"click"],[1,"cursor-pointer","transition-all","hover-scale",3,"click"],[1,"px-10","py-4","br-12","fs-12","fw-600","transition-all","cursor-pointer",3,"click"],["mat-button","",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),l(4),s(),r(5,"span",4),l(6),s()(),x(7,Rc,3,0,"button",5),s(),x(8,Fc,11,4,"div",6)(9,Vc,23,4,"div",7),s()),t&2&&(d(4),k(e.data.habitName),d(2),k(e.data.dateStr),d(),w(e.isEditMode()?-1:7),d(),w(e.isEditMode()?9:8))},dependencies:[W,Q,q,st,ut,nt,gt,yt,xt,Ot,le,Pt,Rt,go,Re,Mn,Y],styles:[".hover-scale[_ngcontent-%COMP%]{transition:transform .2s}.hover-scale[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.ls-1[_ngcontent-%COMP%]{letter-spacing:.5px}"]})};var jc=(a,i)=>i.habit.id;function Gc(a,i){a&1&&(r(0,"mat-icon",16),l(1,"check"),s())}function Wc(a,i){if(a&1&&(r(0,"div",22)(1,"mat-icon",28),l(2," schedule "),s(),r(3,"span",29),l(4),At(5,"duration"),s()()),a&2){let t=b().$implicit;d(4),T(" ",Ft(5,1,t.habit.duration)," ")}}function qc(a,i){if(a&1&&(r(0,"div",23)(1,"span",30),l(2,"\u{1F525}"),s(),r(3,"span",31),l(4),s()()),a&2){let t=b().$implicit;d(4),k(t.streak)}}function Uc(a,i){a&1&&(r(0,"mat-icon",26),l(1," sticky_note_2 "),s())}function Qc(a,i){a&1&&(r(0,"mat-icon",27),l(1," add_comment "),s())}function $c(a,i){if(a&1){let t=E();r(0,"div",14),g("click",function(){let n=D(t).$implicit,o=b();return S(o.toggleHabit(n.habit.id))}),r(1,"div",15),x(2,Gc,2,0,"mat-icon",16),s(),r(3,"div",17)(4,"div",18)(5,"mat-icon"),l(6),s()(),r(7,"div",19)(8,"div",20)(9,"h3",21),l(10),s(),x(11,Wc,6,3,"div",22),x(12,qc,5,1,"div",23),s(),r(13,"p",24),l(14),s()(),r(15,"button",25),g("click",function(n){let o=D(t).$implicit,c=b();return n.stopPropagation(),S(c.openNoteEditor(o))}),x(16,Uc,2,0,"mat-icon",26)(17,Qc,2,0,"mat-icon",27),s()()()}if(a&2){let t=i.$implicit;d(),j("background-color",t.completed?"#f97316":"#fff")("border",t.completed?"none":"2px solid #cbd5e1"),d(),w(t.completed?2:-1),d(),j("opacity",t.completed?"0.7":"1"),d(),j("background-color",t.habit.color+"20"),d(),j("color",t.habit.color),d(),k(t.habit.icon),d(3),j("text-decoration",t.completed?"line-through":"none"),d(),T(" ",t.habit.name," "),d(),w(t.habit.duration?11:-1),d(),w(t.streak>0?12:-1),d(2),T(" ",t.habit.description||"No description"," "),d(2),w(t.hasNote?16:17)}}function Kc(a,i){a&1&&(r(0,"div",13)(1,"mat-icon",32),l(2,"event_busy"),s(),r(3,"span",33),l(4,"No routines for this day!"),s()())}var Tn=class a{habitService=m(Tt);habitLogService=m(oe);celebrationService=m(mi);dialog=m(Et);snackBar=m(Qt);activeDateStr=f("");habitsView=f([]);totalDedicatedMinutes=U(()=>this.habitsView().reduce((i,t)=>i+(t.habit.duration||0),0));completedMinutes=U(()=>this.habitsView().filter(i=>i.completed).reduce((i,t)=>i+(t.habit.duration||0),0));activeDateDisplay=U(()=>{let i=this.activeDateStr();if(!i)return"";let[t,e,n]=i.split("-");return new Date(Number(t),Number(e)-1,Number(n)).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"})});userName=f("Budi");greeting=U(()=>{let i=new Date().getHours();return i<12?"Morning":i<17?"Afternoon":"Evening"});async ngOnInit(){this.activeDateStr.set(this.getLocalFormattedDate(new Date)),this.loadHabitsForActiveDate();let i=await vt.users.orderBy("id").first();i&&this.userName.set(i.name.split(" ")[0])}getLocalFormattedDate(i){let t=i.getFullYear(),e=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${t}-${e}-${n}`}selectDate(i){this.activeDateStr.set(i),this.loadHabitsForActiveDate()}async loadHabitsForActiveDate(){let i=await this.habitService.loadHabits(),t=await this.habitLogService.getLogsForDate(this.activeDateStr()),e=new Set(t.filter(X=>X.isCompleted).map(X=>X.habitId)),[n,o,c]=this.activeDateStr().split("-"),h=new Date(Number(n),Number(o)-1,Number(c)).getDay(),y={0:6,1:0,2:1,3:2,4:3,5:4,6:5}[h],L=i.filter(X=>X.frequency===0?!0:X.days&&Array.isArray(X.days)&&X.days.length>0?X.days.includes(y):!1),A=await Promise.all(L.map(async X=>{let St=await this.habitLogService.getStreakStatus(X.id),et=t.find(ct=>ct.habitId===X.id);return{habit:X,completed:e.has(X.id),streak:St.current,hasNote:!!(et?.reflectionNote||et?.planNote||et?.mood||et?.tags&&et.tags.length>0)}}));this.habitsView.set(A)}async toggleHabit(i){let t=await this.habitLogService.toggleCompletion(i,this.activeDateStr()),n=this.habitsView().find(p=>p.habit.id===i)?.habit.name||"Habit",o=t?`${n} marked as completed! \u{1F389}`:`${n} uncompleted.`;t?this.celebrationService.celebrate():this.celebrationService.uncelebrate(),this.snackBar.open(o,"Dismiss",{duration:3e3,horizontalPosition:"center",verticalPosition:"bottom",panelClass:t?["success-snackbar"]:["error-snackbar"]});let c=await this.habitLogService.getStreakStatus(i);this.habitsView.update(p=>p.map(h=>h.habit.id===i?vi(Yt({},h),{completed:t,streak:c.current}):h))}async openNoteEditor(i){let t=this.activeDateStr(),[e,n,o]=t.split("-"),c=new Date(Number(e),Number(n)-1,Number(o)),p=new Date;p.setHours(0,0,0,0);let h=c.getTime()>p.getTime(),y=(await this.habitLogService.getLogsForDate(t)).find(A=>A.habitId===i.habit.id)||{habitId:i.habit.id,dateStr:t,completedAt:Date.now()};this.dialog.open(bi,{width:"450px",autoFocus:!1,restoreFocus:!1,data:{dateStr:t,habitName:i.habit.name,isCompleted:i.completed,isInFuture:h,log:y}}).afterClosed().subscribe(async A=>{A&&(await this.habitLogService.saveLogData(i.habit.id,t,A),this.loadHabitsForActiveDate())})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-today"]],decls:18,vars:7,consts:[[1,"df","fd-c","w-100"],[1,"df","fd-r","jc-sb","ai-c","gap-2","p-24","pb-16"],[1,"df","fd-c","gap-2"],[1,"m-0","fs-28","fw-700",2,"color","var(--text-primary)","letter-spacing","-0.5px"],[1,"fs-13","fw-500","text-secondary",2,"color","#6b7280"],[3,"dateSelected","activeDate"],[1,"p-24"],[3,"dedicatedMinutes","completedMinutes"],[1,"df","fd-r","jc-sb","ai-c","gap-2","w-100","px-24","mb-16",2,"box-sizing","border-box"],[1,"m-0","fs-18","fw-700",2,"color","var(--text-primary)"],[1,"df","fd-c","gap-4","position-relative","w-100","px-24","pb-80",2,"box-sizing","border-box"],[1,"position-absolute",2,"left","36px","top","20px","bottom","20px","width","0px","border-left","2px dotted #e5e7eb","z-index","0"],[1,"df","fd-r","gap-4","ai-c","w-100","position-relative","z-1",2,"box-sizing","border-box"],[1,"p-32","df","fd-c","ai-c","jc-c","gap-2","br-16","position-relative","z-1","w-100",2,"background-color","var(--surface-default)","box-shadow","0 4px 12px rgba(0,0,0,0.03)","box-sizing","border-box"],[1,"df","fd-r","gap-4","ai-c","w-100","position-relative","z-1",2,"box-sizing","border-box",3,"click"],[1,"df","ai-c","jc-c","cursor-pointer","transition-all","bg-white",2,"width","24px","height","24px","min-width","24px","border-radius","50%","box-sizing","border-box"],[2,"font-size","16px","width","16px","height","16px","color","white"],[1,"p-16","br-16","df","fd-r","ai-c","gap-4","w-100","fg-1",2,"box-shadow","0 4px 12px rgba(0, 0, 0, 0.03)","border","1px solid var(--border-subtle)","box-sizing","border-box","background-color","var(--surface-default)"],[1,"df","ai-c","jc-c",2,"width","48px","height","48px","min-width","48px","border-radius","14px"],[1,"df","fd-c","flex-1","overflow-hidden","gap-1",2,"min-width","0"],[1,"df","fd-r","ai-c","gap-2"],[1,"m-0","fs-15","fw-600","truncate",2,"color","var(--text-primary)"],[1,"df","ai-c","gap-1","px-6","py-1","br-8",2,"background-color","#f1f5f9","border","1px solid #e2e8f0"],[1,"df","ai-c","gap-1","px-6","py-1","br-8",2,"background-color","#fff7ed","border","1px solid #ffedd5"],[1,"m-0","fs-12","fw-500","truncate",2,"color","#a1a1aa"],[1,"df","ai-c",2,"background","transparent","width","32px","height","32px","border","1px solid #e2e8f0","border-radius","8px",3,"click"],[2,"font-size","18px","width","18px","height","18px","color","#f97316"],[2,"font-size","18px","width","18px","height","18px"],[2,"font-size","11px","width","11px","height","11px","color","#64748b"],[1,"fs-10","fw-700",2,"color","#64748b"],[2,"font-size","11px"],[1,"fs-10","fw-700",2,"color","#ea580c"],[2,"font-size","48px","width","48px","height","48px","color","#cbd5e1"],[1,"fs-14","fw-600","text-secondary"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),l(4),s(),r(5,"span",4),l(6),s()()(),r(7,"t-date-strip",5),g("dateSelected",function(o){return e.selectDate(o)}),s(),r(8,"div",6),C(9,"t-time-availability",7),s(),r(10,"div",8)(11,"h2",9),l(12,"Daily routine"),s()(),r(13,"div",10),C(14,"div",11),F(15,$c,18,19,"div",12,jc,!1,Kc,5,0,"div",13),s()()),t&2&&(d(4),ei(" ",e.greeting(),", ",e.userName()," "),d(2),T(" ",e.activeDateDisplay()," "),d(),_("activeDate",e.activeDateStr()),d(2),_("dedicatedMinutes",e.totalDedicatedMinutes())("completedMinutes",e.completedMinutes()),d(6),N(e.habitsView()))},dependencies:[gi,W,Q,Eo,q,ae,Dn,Sn,nt,se,de],styles:[".completed-bg[_ngcontent-%COMP%]{background-color:var(--success-50, #f0fdf4);opacity:.9}"]})};function Zc(a,i){if(a&1&&Hi(0,"img",3),a&2){let t=b();j("width",t.size(),"px")("height",t.size(),"px"),wi("src",t.avatar(),La)}}function Yc(a,i){if(a&1&&(Gt(0,"span",4),l(1),ie()),a&2){let t=b();j("font-size",t.size()*.4,"px"),d(),T(" ",t.initials()," ")}}var Be=class a{name=G("");avatar=G(null);size=G(40);circular=G(!0);initials=U(()=>{let i=this.name();if(!i)return"?";let t=i.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()});bgColor=U(()=>{let i=["#6366f1","#8b5cf6","#ec4899","#f43f5e","#ef4444","#f59e0b","#10b981","#06b6d4","#3b82f6","#2563eb"],t=this.name(),e=0;for(let o=0;o<t.length;o++)e=t.charCodeAt(o)+((e<<5)-e);let n=Math.abs(e)%i.length;return i[n]});static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-avatar"]],inputs:{name:[1,"name"],avatar:[1,"avatar"],size:[1,"size"],circular:[1,"circular"]},decls:3,vars:13,consts:[[1,"avatar-container"],["alt","avatar",2,"object-fit","cover","border-radius","inherit",3,"src","width","height"],[1,"initials",3,"font-size"],["alt","avatar",2,"object-fit","cover","border-radius","inherit",3,"src"],[1,"initials"]],template:function(t,e){t&1&&(Gt(0,"div",0),x(1,Zc,1,5,"img",1)(2,Yc,2,3,"span",2),ie()),t&2&&(j("width",e.size(),"px")("height",e.size(),"px")("min-width",e.size(),"px")("min-height",e.size(),"px")("background-color",e.avatar()?"transparent":e.bgColor())("border-radius",e.circular()?"50%":"12px"),d(),w(e.avatar()?1:2))},dependencies:[Y],styles:[".avatar-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;overflow:hidden;color:#fff;font-weight:700;-webkit-user-select:none;user-select:none;box-shadow:inset 0 0 0 1px #0000000d}.initials[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:-.5px}"]})};var In=class a{dialog=m(Et);fb=m(li);snackBar=m(Qt);activeUser=f(null);profileForm=new lo({name:new Wn("",{nonNullable:!0,validators:[Nt.required,Nt.minLength(2)]}),gender:new Wn("",{nonNullable:!0,validators:Nt.required})});previewAvatar=f(null);async ngOnInit(){let i=await vt.users.orderBy("id").first();i&&(this.activeUser.set(i),this.previewAvatar.set(i.avatar||null),this.profileForm.patchValue({name:i.name,gender:i.gender}))}onFileSelected(i){let t=i.target.files[0];if(t){let e=new FileReader;e.onload=n=>{this.previewAvatar.set(n.target.result)},e.readAsDataURL(t)}}async saveProfile(){if(this.profileForm.valid&&this.activeUser()?.id){let i=this.profileForm.getRawValue(),t={name:i.name,gender:i.gender,avatar:this.previewAvatar()||void 0};await vt.users.update(this.activeUser().id,t),this.snackBar.open("Profile updated successfully!","Close",{duration:3e3}),this.activeUser.update(e=>e?Yt(Yt({},e),t):null)}}clearAllData(){this.dialog.open(hi,{width:"450px",data:{title:"Factory Reset Trackify",message:"Are you absolutely sure you want to permanently erase ALL data? This will instantly wipe out your Profile, active Habits, and entire historical Logs array forever. This cannot be undone!"}}).afterClosed().subscribe(async t=>{t&&(await vt.users.clear(),await vt.habits.clear(),await vt.habitLogs.clear(),await vt.categories.clear(),window.location.reload())})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-settings"]],decls:60,vars:5,consts:[["fileInput",""],[1,"p-24","df","fd-c","gap-6","font-inter"],[1,"df","fd-c","gap-1"],[1,"m-0","fs-28","fw-700","text-primary"],[1,"m-0","fs-14","fw-500"],[1,"bg-white","br-16","p-24","df","fd-c","gap-6","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"df","fd-c","gap-2","mb-8"],[1,"m-0","fs-18","fw-700","text-primary"],[1,"m-0","fs-14","text-secondary"],[1,"df","fd-c","gap-6","w-100",3,"ngSubmit","formGroup"],[1,"df","ai-c","gap-8","p-16","br-12"],[1,"cursor-pointer",3,"click"],[3,"name","avatar","size"],["type","file","accept","image/*",2,"display","none",3,"change"],[1,"fs-15","fw-700"],[1,"fs-13","text-secondary"],[1,"df","fd-r","gap-4","flex-wrap"],[1,"df","fd-c","gap-2","flex-1",2,"min-width","200px"],[1,"fs-13","fw-700","text-primary","uppercase","ls-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","name","placeholder","E.g. Alex","required",""],["formControlName","gender","required",""],["value","male"],["value","female"],["value","other"],[1,"df","jc-fe"],["mat-flat-button","","color","primary","type","submit",1,"fw-700","py-12","px-24","br-8","text-bg",3,"disabled"],[1,"bg-white","br-16","p-24","df","fd-c","gap-4","w-100",2,"box-shadow","0 4px 6px -1px rgb(0 0 0 / 0.05)","box-sizing","border-box"],[1,"m-0","fs-18","fw-700","text-warn"],[1,"df","fd-c","gap-4"],[1,"df","fd-r","jc-sb","ai-c","p-20","br-8","b-1-solid",2,"border-color","#fca5a5","background-color","#fef2f2","box-sizing","border-box"],[1,"fs-16","fw-700",2,"color","#b91c1c"],[1,"fs-13","fw-500",2,"color","#ef4444"],["mat-flat-button","","color","warn",1,"fw-700","text-bg",3,"click"],[1,"mr-4"]],template:function(t,e){if(t&1){let n=E();r(0,"div",1)(1,"div",2)(2,"h1",3),l(3,"Settings"),s(),r(4,"p",4),l(5,"Manage your application data and preferences"),s()(),r(6,"div",5)(7,"div",6)(8,"h2",7),l(9,"Profile"),s(),r(10,"p",8),l(11,"Update your personal information"),s()(),r(12,"form",9),g("ngSubmit",function(){return e.saveProfile()}),r(13,"div",10)(14,"div",11),g("click",function(){D(n);let c=kt(17);return S(c.click())}),C(15,"t-avatar",12),r(16,"input",13,0),g("change",function(c){return e.onFileSelected(c)}),s()(),r(18,"div",2)(19,"span",14),l(20,"Profile Picture"),s(),r(21,"span",15),l(22,"Click the circle to change your photo"),s()()(),r(23,"div",16)(24,"div",17)(25,"span",18),l(26,"Display Name"),s(),r(27,"mat-form-field",19),C(28,"input",20),s()(),r(29,"div",17)(30,"span",18),l(31,"Gender"),s(),r(32,"mat-form-field",19)(33,"mat-select",21)(34,"mat-option",22),l(35,"Male"),s(),r(36,"mat-option",23),l(37,"Female"),s(),r(38,"mat-option",24),l(39,"Other"),s()()()()(),r(40,"div",25)(41,"button",26),l(42," Save Changes "),s()()()(),r(43,"div",27)(44,"div",6)(45,"h2",28),l(46,"Danger Zone"),s(),r(47,"p",8),l(48,"Irreversible destructive actions against your device's local database. "),s()(),r(49,"div",29)(50,"div",30)(51,"div",2)(52,"span",31),l(53,"Wipe Tracking Data"),s(),r(54,"span",32),l(55,"Permanently delete all habits, logs, categories, and your profile."),s()(),r(56,"button",33),g("click",function(){return e.clearAllData()}),r(57,"mat-icon",34),l(58,"delete_forever"),s(),l(59," Erase "),s()()()()()}if(t&2){let n;d(12),_("formGroup",e.profileForm),d(3),_("name",((n=e.profileForm.get("name"))==null?null:n.value)||"")("avatar",e.previewAvatar())("size",80),d(26),_("disabled",e.profileForm.invalid)}},dependencies:[Y,q,st,W,Q,nt,di,Oe,Pt,Rt,Pe,ci,si,ri,gt,yt,xt,Ot,Ne,Fe,Ae,se,Be],encapsulation:2})};var ra=new K("CdkAccordion"),yr=(()=>{class a{_stateChanges=new B;_openCloseAllActions=new B;id=m(It).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",I]},exportAs:["cdkAccordion"],features:[J([{provide:ra,useExisting:a}]),jt]})}return a})(),xr=(()=>{class a{accordion=m(ra,{optional:!0,skipSelf:!0});_changeDetectorRef=m(pt);_expansionDispatcher=m(Yi);_openCloseAllSubscription=mt.EMPTY;closed=new O;opened=new O;destroyed=new O;expandedChange=new O;id=m(It).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let e=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,e)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=f(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((t,e)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===e&&this.id!==t&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",I],disabled:[2,"disabled","disabled",I]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[J([{provide:ra,useValue:void 0}])]})}return a})(),wr=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({})}return a})();var Xc=["body"],Jc=["bodyWrapper"],tl=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],el=["mat-expansion-panel-header","*","mat-action-row"];function il(a,i){}var nl=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],al=["mat-panel-title","mat-panel-description","*"];function ol(a,i){a&1&&(Gt(0,"span",1),Xe(),Gt(1,"svg",2),Hi(2,"path",3),ie()())}var sa=new K("MAT_ACCORDION"),kr=new K("MAT_EXPANSION_PANEL"),rl=(()=>{class a{_template=m(je);_expansionPanel=m(kr,{optional:!0});constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),Cr=new K("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),ca=(()=>{class a extends xr{_viewContainerRef=m(Je);_animationsDisabled=Ut();_document=m(ge);_ngZone=m(ft);_elementRef=m(it);_renderer=m(be);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}_togglePosition;afterExpand=new O;afterCollapse=new O;_inputChanges=new B;accordion=m(sa,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=m(It).getId("mat-expansion-panel-header-");constructor(){super();let t=m(Cr,{optional:!0});this._expansionDispatcher=m(Yi),t&&(this.hideToggle=t.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(te(null),Xt(()=>this.expanded&&!this._portal),Jt(1)).subscribe(()=>{this._portal=new Ui(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,e=this._body.nativeElement;return t===e||e.contains(t)}return!1}_transitionEndListener=({target:t,propertyName:e})=>{t===this._bodyWrapper?.nativeElement&&e==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let t=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this._transitionEndListener),t.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(e,n,o){if(e&1&&wt(o,rl,5),e&2){let c;H(c=z())&&(n._lazyContent=c.first)}},viewQuery:function(e,n){if(e&1&&Mt(Xc,5)(Jc,5),e&2){let o;H(o=z())&&(n._body=o.first),H(o=z())&&(n._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(e,n){e&2&&P("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[J([{provide:sa,useValue:void 0},{provide:kr,useExisting:a}]),_t,jt],ngContentSelectors:el,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,n){e&1&&(dt(tl),$(0),r(1,"div",2,0)(3,"div",3,1)(5,"div",4),$(6,1),ti(7,il,0,0,"ng-template",5),s(),$(8,2),s()()),e&2&&(d(),Z("inert",n.expanded?null:""),d(2),_("id",n.id),Z("aria-labelledby",n._headerId),d(4),_("cdkPortalOutlet",n._portal))},dependencies:[Si],styles:[`.mat-expansion-panel {
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
`],encapsulation:2,changeDetection:0})}return a})();var la=(()=>{class a{panel=m(ca,{host:!0});_element=m(it);_focusMonitor=m(qe);_changeDetectorRef=m(pt);_parentChangeSubscription=mt.EMPTY;constructor(){m(qt).load(re);let t=this.panel,e=m(Cr,{optional:!0}),n=m(new Ge("tabindex"),{optional:!0}),o=t.accordion?t.accordion._stateChanges.pipe(Xt(c=>!!(c.hideToggle||c.togglePosition))):Bi;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=Ht(t.opened,t.closed,o,t._inputChanges.pipe(Xt(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(Xt(()=>t._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),e&&(this.expandedHeight=e.expandedHeight,this.collapsedHeight=e.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:ni(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,e){t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(e,n){e&1&&g("click",function(){return n._toggle()})("keydown",function(c){return n._keydown(c)}),e&2&&(Z("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),j("height",n._getHeaderHeight()),P("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Zt(t)]},ngContentSelectors:al,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(e,n){e&1&&(dt(nl),Gt(0,"span",0),$(1),$(2,1),$(3,2),ie(),x(4,ol,3,0,"span",1)),e&2&&(P("mat-content-hide-toggle",!n._showToggle()),d(4),w(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2,changeDetection:0})}return a})();var Dr=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})(),Sr=(()=>{class a extends yr{_keyManager;_ownHeaders=new yi;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(te(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(e=>e.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Gi(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275dir=V({type:a,selectors:[["mat-accordion"]],contentQueries:function(e,n,o){if(e&1&&wt(o,la,5),e&2){let c;H(c=z())&&(n._headers=c)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,n){e&2&&P("mat-accordion-multi",n.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[J([{provide:sa,useExisting:a}]),_t]})}return a})(),Mr=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({imports:[wr,ao,ht]})}return a})();var Tr=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({imports:[eo,oo,ht,qi]})}return a})();var Ir=(a,i)=>i.id;function ll(a,i){if(a&1&&(r(0,"mat-list-item",20)(1,"mat-icon",21),l(2),s(),r(3,"span",22),l(4),s()()),a&2){let t=i.$implicit;d(),j("color",t.color),d(),k(t.icon),d(2),k(t.name)}}function dl(a,i){if(a&1&&(r(0,"div",12)(1,"span",18),l(2,"Assigned Habits"),s(),r(3,"mat-list",19),F(4,ll,5,4,"mat-list-item",20,Ir),s()()),a&2){let t=b().$implicit,e=b();d(4),N(e.getHabits(t.id))}}function ml(a,i){a&1&&(r(0,"p",13),l(1,"No habits assigned yet"),s())}function pl(a,i){if(a&1){let t=E();r(0,"mat-expansion-panel",10,0)(2,"mat-expansion-panel-header")(3,"mat-panel-title",11),l(4),r(5,"span"),l(6),s()()(),r(7,"div"),x(8,dl,6,0,"div",12)(9,ml,2,0,"p",13),s(),r(10,"div",14)(11,"div",15)(12,"button",16),g("click",function(){let n=D(t).$implicit,o=b();return S(o.navigateToDetails(n.id))}),r(13,"mat-icon"),l(14,"insights"),s(),l(15," View Details "),s()(),r(16,"button",17),g("click",function(){let n=D(t).$implicit,o=b();return S(o.deleteCategory(n.id))}),r(17,"mat-icon"),l(18,"delete"),s()()()()}if(a&2){let t=i.$implicit,e=b();d(4),T(" ",t.name," "),d(2),ei("",e.getHabitCount(t.id)," ",e.getHabitCount(t.id)===1?"habit":"habits"),d(2),w(e.getHabits(t.id).length>0?8:9),d(8),_("disabled",e.getHabitCount(t.id)>0)("matTooltip",e.getHabitCount(t.id)>0?"Cannot delete category with habits":"Delete category")}}var En=class a{categoryService=m(Te);habitService=m(Tt);router=m(ne);categories=f([]);habitCounts=f({});habitsByCategory=f({});newCategoryName="";snackBar=m(Qt);ngOnInit(){this.loadCategories()}async loadCategories(){let i=await this.categoryService.getCategories();this.categories.set(i);let t=await this.habitService.loadHabits(),e={},n={};t.forEach(o=>{o.category?.id!==void 0&&(e[o.category.id]=(e[o.category.id]||0)+1,n[o.category.id]||(n[o.category.id]=[]),n[o.category.id].push(o))}),this.habitCounts.set(e),this.habitsByCategory.set(n)}getHabits(i){return this.habitsByCategory()[i]||[]}getHabitCount(i){return this.habitCounts()[i]||0}async addCategory(){if(this.newCategoryName.trim()){if(this.checkIfCategoryAlreadyExists()){this.snackBar.open("Category already exists","Close",{duration:2e3});return}await this.categoryService.addCategory(this.newCategoryName.trim()),this.newCategoryName="",await this.loadCategories()}}checkIfCategoryAlreadyExists(){return this.categories().some(i=>i.name.toLowerCase()===this.newCategoryName.trim().toLowerCase())}async deleteCategory(i){if(this.getHabitCount(i)>0){this.snackBar.open("Cannot delete category with habits assigned to it","Close",{duration:3e3});return}await this.categoryService.deleteCategory(i),await this.loadCategories()}navigateToDetails(i){this.router.navigate(["/categories",i])}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-categories"]],decls:16,vars:2,consts:[["panel",""],[1,"p-16","df","fd-c","gap-4"],[1,"df","fd-c","gap-4"],[1,"m-0"],[1,"m-0","text-secondary"],[1,"df","ai-c","gap-8",3,"ngSubmit"],["appearance","outline",1,"w-100","m-0","flex-1",2,"margin-bottom","-1.25em"],["matInput","","name","catName","placeholder","e.g. Finances","required","",3,"ngModelChange","ngModel"],["mat-flat-button","","color","primary","type","submit",1,"text-bg",3,"disabled"],[1,"w-100"],["hideToggle","false",1,"br-12","b-1-solid","mb-8"],[1,"fw-600","df","ai-c","jc-s","gap-4","text-secondary"],[1,"df","fd-c","gap-2"],[1,"text-secondary","m-0","px-4"],[1,"df","ai-c","jc-sb","pt-8","bt-1-solid","mt-4"],[1,"df","ai-c","gap-8"],["mat-stroked-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click","disabled","matTooltip"],[1,"fs-12","text-secondary","fw-500","uppercase","px-4"],[1,"p-0"],[1,"h-auto","p-0","mb-4"],["matListItemIcon",""],["matListItemTitle",""]],template:function(t,e){t&1&&(r(0,"div",1)(1,"div",2)(2,"h2",3),l(3,"Categories"),s(),r(4,"p",4),l(5,"Manage your habit categories"),s()(),r(6,"form",5),g("ngSubmit",function(){return e.addCategory()}),r(7,"mat-form-field",6)(8,"mat-label"),l(9,"New Category"),s(),r(10,"input",7),ye("ngModelChange",function(o){return ve(e.newCategoryName,o)||(e.newCategoryName=o),o}),s()(),r(11,"button",8),l(12,"Add"),s()(),r(13,"mat-accordion",9),F(14,pl,19,6,"mat-expansion-panel",10,Ir),s()()),t&2&&(d(10),_e("ngModel",e.newCategoryName),d(),_("disabled",!e.newCategoryName),d(3),N(e.categories()))},dependencies:[le,Oe,Pt,Rt,Pe,ci,Re,mo,gi,fr,wn,Ai,Li,q,st,ut,W,Q,xt,Ot,yt,Le,gt,Mr,Sr,ca,la,Dr,Tr,qn],styles:["mat-expansion-panel[_ngcontent-%COMP%]{border-radius:12px!important;overflow:hidden;margin-bottom:8px;box-shadow:none!important;border:1px solid var(--outline-variant, #e0e0e0)}mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{border-color:var(--primary, #6366f1)}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 16px!important}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 16px 16px!important}mat-list-item[_ngcontent-%COMP%]{height:40px!important;--mdc-list-item-leading-icon-size: 20px}"]})};var ua=["*"];function hl(a,i){a&1&&$(0)}var ul=["tabListContainer"],gl=["tabList"],bl=["tabListInner"],fl=["nextPaginator"],_l=["previousPaginator"],vl=["content"];function yl(a,i){}var xl=["tabBodyWrapper"],wl=["tabHeader"];function kl(a,i){}function Cl(a,i){if(a&1&&ti(0,kl,0,0,"ng-template",12),a&2){let t=b().$implicit;_("cdkPortalOutlet",t.templateLabel)}}function Dl(a,i){if(a&1&&l(0),a&2){let t=b().$implicit;k(t.textLabel)}}function Sl(a,i){if(a&1){let t=E();r(0,"div",7,2),g("click",function(){let n=D(t),o=n.$implicit,c=n.$index,p=b(),h=kt(1);return S(p._handleClick(o,h,c))})("cdkFocusChange",function(n){let o=D(t).$index,c=b();return S(c._tabFocusChanged(n,o))}),C(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),x(6,Cl,1,1,null,12)(7,Dl,1,1),s()()()}if(a&2){let t=i.$implicit,e=i.$index,n=kt(1),o=b();fe(t.labelClass),P("mdc-tab--active",o.selectedIndex===e),_("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),Z("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),d(3),_("matRippleTrigger",n)("matRippleDisabled",t.disabled||o.disableRipple),d(3),w(t.templateLabel?6:7)}}function Ml(a,i){a&1&&$(0)}function Tl(a,i){if(a&1){let t=E();r(0,"mat-tab-body",13),g("_onCentered",function(){D(t);let n=b();return S(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){D(t);let o=b();return S(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){D(t);let o=b();return S(o._bodyCentered(n))}),s()}if(a&2){let t=i.$implicit,e=i.$index,n=b();fe(t.bodyClass),_("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),Z("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var Il=new K("MatTabContent"),El=(()=>{class a{template=m(je);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["","matTabContent",""]],features:[J([{provide:Il,useExisting:a}])]})}return a})(),Pl=new K("MatTabLabel"),Or=new K("MAT_TAB"),Rl=(()=>{class a extends no{_closestTab=m(Or,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275dir=V({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[J([{provide:Pl,useExisting:a}]),_t]})}return a})(),Lr=new K("MAT_TAB_GROUP"),ga=(()=>{class a{_viewContainerRef=m(Je);_closestTabGroup=m(Lr,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new B;position=null;origin=null;isActive=!1;constructor(){m(qt).load(re)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ui(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,o){if(e&1&&wt(o,Rl,5)(o,El,7,je),e&2){let c;H(c=z())&&(n.templateLabel=c.first),H(c=z())&&(n._explicitContent=c.first)}},viewQuery:function(e,n){if(e&1&&Mt(je,7),e&2){let o;H(o=z())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&Z("id",null)},inputs:{disabled:[2,"disabled","disabled",I],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[J([{provide:Or,useExisting:a}]),jt],ngContentSelectors:ua,decls:1,vars:0,template:function(e,n){e&1&&(dt(),Na(0,hl,1,0,"ng-template"))},encapsulation:2})}return a})(),da="mdc-tab-indicator--active",Er="mdc-tab-indicator--no-transition",ma=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let t=this._items.find(n=>n.elementRef.nativeElement===i),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},Ol=(()=>{class a{_elementRef=m(it);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(da);return}let n=e.getBoundingClientRect(),o=t.width/n.width,c=t.left-n.left;e.classList.add(Er),this._inkBarContentElement.style.setProperty("transform",`translateX(${c}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(Er),e.classList.add(da),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(da)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I]}})}return a})();var Ar=(()=>{class a extends Ol{elementRef=m(it);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275dir=V({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(Z("aria-disabled",!!n.disabled),P("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",I]},features:[_t]})}return a})(),Pr={passive:!0},Ll=650,Al=100,Fl=(()=>{class a{_elementRef=m(it);_changeDetectorRef=m(pt);_viewportRuler=m(Di);_dir=m(xe,{optional:!0});_ngZone=m(ft);_platform=m(We);_sharedResizeObserver=m(bo);_injector=m(Vt);_renderer=m(be);_animationsDisabled=Ut();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new B;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new B;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new O;indexFocused=new O;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Pr),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Pr))}ngAfterContentInit(){let t=this._dir?this._dir.change:ka("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Sa(32),ee(this._destroyed)),n=this._viewportRuler.change(150).pipe(ee(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Gi(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ve(o,{injector:this._injector}),Ht(t,n,e,this._items.changes,this._itemsResized()).pipe(ee(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(c=>{this.indexFocused.emit(c),this._setTabFocus(c)})}_itemsResized(){return typeof ResizeObserver!="function"?Bi:this._items.changes.pipe(te(this._items),ue(t=>new pe(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>e.next(o));return t.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),Ma(1),Xt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ni(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:c}=e.elementRef.nativeElement,p,h;this._getLayoutDirection()=="ltr"?(p=o,h=p+c):(h=this._tabListInner.nativeElement.offsetWidth-o,p=h-c);let u=this.scrollDistance,y=this.scrollDistance+n;p<u?this.scrollDistance-=u-p:h>y&&(this.scrollDistance+=Math.min(h-y,p-u))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ca(Ll,Al).pipe(ee(Ht(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(t);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",I],selectedIndex:[2,"selectedIndex","selectedIndex",Zt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),Nl=(()=>{class a extends Fl{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ma(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=Lt(a)))(n||a)}})();static \u0275cmp=v({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,o){if(e&1&&wt(o,Ar,4),e&2){let c;H(c=z())&&(n._items=c)}},viewQuery:function(e,n){if(e&1&&Mt(ul,7)(gl,7)(bl,7)(fl,5)(_l,5),e&2){let o;H(o=z())&&(n._tabListContainer=o.first),H(o=z())&&(n._tabList=o.first),H(o=z())&&(n._tabListInner=o.first),H(o=z())&&(n._nextPaginator=o.first),H(o=z())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&P("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",I]},features:[_t],ngContentSelectors:ua,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(dt(),r(0,"div",5,0),g("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(c){return n._handlePaginatorPress("before",c)})("touchend",function(){return n._stopInterval()}),C(2,"div",6),s(),r(3,"div",7,1),g("keydown",function(c){return n._handleKeydown(c)}),r(5,"div",8,2),g("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),$(9),s()()(),r(10,"div",10,4),g("mousedown",function(c){return n._handlePaginatorPress("after",c)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),C(12,"div",6),s()),e&2&&(P("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),_("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),P("_mat-animation-noopable",n._animationsDisabled),d(2),Z("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),P("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),_("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Ue,ji],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return a})(),Bl=new K("MAT_TABS_CONFIG"),Rr=(()=>{class a extends Si{_host=m(pa);_ngZone=m(ft);_centeringSub=mt.EMPTY;_leavingSub=mt.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(te(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["","matTabBodyHost",""]],features:[_t]})}return a})(),pa=(()=>{class a{_elementRef=m(it);_dir=m(xe,{optional:!0});_ngZone=m(ft);_injector=m(Vt);_renderer=m(be);_diAnimationsDisabled=Ut();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=mt.EMPTY;_position;_previousPosition;_onCentering=new O;_beforeCentering=new O;_afterLeavingCenter=new O;_onCentered=new O(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=m(pt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ve(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ve(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&Mt(Rr,5)(vl,5),e&2){let o;H(o=z())&&(n._portalHost=o.first),H(o=z())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&Z("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(r(0,"div",1,0),ti(2,yl,0,0,"ng-template",2),s()),e&2&&P("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Rr,Wi],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return a})(),Fr=(()=>{class a{_elementRef=m(it);_changeDetectorRef=m(pt);_ngZone=m(ft);_tabsSubscription=mt.EMPTY;_tabLabelSubscription=mt.EMPTY;_tabBodySubscription=mt.EMPTY;_diAnimationsDisabled=Ut();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new yi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new O;focusChange=new O;animationDone=new O;selectedTabChange=new O(!0);_groupId;_isServer=!m(We).isBrowser;constructor(){let t=m(Bl,{optional:!0});this._groupId=m(It).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=e[o];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(te(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ha;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ht(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,o){if(e&1&&wt(o,ga,5),e&2){let c;H(c=z())&&(n._allTabs=c)}},viewQuery:function(e,n){if(e&1&&Mt(xl,5)(wl,5)(pa,5),e&2){let o;H(o=z())&&(n._tabBodyWrapper=o.first),H(o=z())&&(n._tabHeader=o.first),H(o=z())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(Z("mat-align-tabs",n.alignTabs),fe("mat-"+(n.color||"primary")),j("--mat-tab-animation-duration",n.animationDuration),P("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",I],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",I],selectedIndex:[2,"selectedIndex","selectedIndex",Zt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Zt],disablePagination:[2,"disablePagination","disablePagination",I],disableRipple:[2,"disableRipple","disableRipple",I],preserveContent:[2,"preserveContent","preserveContent",I],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[J([{provide:Lr,useExisting:a}])],ngContentSelectors:ua,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(dt(),r(0,"mat-tab-header",3,0),g("indexFocused",function(c){return n._focusChanged(c)})("selectFocusedIndex",function(c){return n.selectedIndex=c}),F(2,Sl,8,17,"div",4,Kt),s(),x(4,Ml,1,0),r(5,"div",5,1),F(7,Tl,1,10,"mat-tab-body",6,Kt),s()),e&2&&(_("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Ha("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),N(n._tabs),d(2),w(n._isServer?4:-1),d(),P("_mat-animation-noopable",n._animationsDisabled()),d(2),N(n._tabs))},dependencies:[Nl,Ar,Xa,Ue,Si,pa],styles:[`.mdc-tab {
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
`],encapsulation:2})}return a})(),ha=class{index;tab};var Nr=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({imports:[ht]})}return a})();var zl=()=>["S","M","T","W","T","F","S"],Vl=(a,i)=>i.dateStr;function jl(a,i){if(a&1&&(r(0,"div",64)(1,"mat-icon",65),l(2,"schedule"),s(),r(3,"span"),l(4),At(5,"duration"),s()()),a&2){let t,e=b(2);d(4),k(Ft(5,1,(t=e.habit())==null?null:t.duration))}}function Gl(a,i){if(a&1&&(r(0,"div",9)(1,"div",54)(2,"div",55)(3,"div",56)(4,"mat-icon",57),l(5),s()(),r(6,"div",58)(7,"h1",59),l(8),s(),r(9,"span",60),l(10),s()()()(),r(11,"div",61)(12,"div",62)(13,"div",63),l(14),s(),x(15,jl,6,3,"div",64),s()()()),a&2){let t,e,n,o,c,p,h,u,y,L=b();d(3),j("background-color",(t=L.habit())==null?null:t.color)("box-shadow","0 8px 16px -4px "+((e=L.habit())==null?null:e.color)+"60"),d(2),T(" ",(n=L.habit())==null?null:n.icon," "),d(3),k((o=L.habit())==null?null:o.name),d(2),T(" ",((c=L.habit())==null?null:c.description)||"Build consistency every day."," "),d(3),j("background-color",((p=L.habit())==null?null:p.color)+"15")("color",(h=L.habit())==null?null:h.color),d(),T(" ",((u=L.habit())==null?null:u.frequency)===0?"Daily":"Weekly"," "),d(),w((y=L.habit())!=null&&y.duration?15:-1)}}function Wl(a,i){if(a&1&&(r(0,"div",20),l(1),s()),a&2){let t=i.$implicit;d(),T(" ",t," ")}}function ql(a,i){a&1&&C(0,"div",22)}function Ul(a,i){if(a&1&&(r(0,"span",67),l(1),s()),a&2){let t=b().$implicit;d(),k(t.mood)}}function Ql(a,i){a&1&&C(0,"div",68)}function $l(a,i){if(a&1){let t=E();r(0,"div",23)(1,"button",66),g("click",function(){let n=D(t).$implicit,o=b();return S(o.openNoteEditor(n))}),l(2),x(3,Ul,2,1,"span",67),x(4,Ql,1,0,"div",68),s()()}if(a&2){let t=i.$implicit,e=b();d(),j("width","40px")("height","40px")("background-color",e.getCellBg(t))("color",e.getCellColor(t))("opacity",t.isInFuture?"0.3":"1")("border",t.isToday?"2px solid #1e293b":"none"),d(),T(" ",t.dayNum," "),d(),w(t.mood?3:-1),d(),w(t.hasNote?4:-1)}}function Kl(a,i){if(a&1){let t=E();r(0,"div",53)(1,"button",69),g("click",function(){D(t);let n=b();return S(n.toggleToday())}),r(2,"div",70)(3,"mat-icon",71),l(4),s(),r(5,"span",72),l(6),s()()()()}if(a&2){let t,e=b();d(),j("background-color",e.isDoneToday()?"#f0fdf4":(t=e.habit())==null?null:t.color)("color",e.isDoneToday()?"#10b981":"white")("border",e.isDoneToday()?"2px solid #10b981":"none"),d(3),T(" ",e.isDoneToday()?"task_alt":"check_circle"," "),d(2),k(e.isDoneToday()?"Marked as Done!":"Mark Today as Done")}}var Pn=class a{route=m(Wa);router=m(ne);habitService=m(Tt);habitLogService=m(oe);dialog=m(Et);habitId=f(null);habit=f(null);currentStreak=f(0);bestStreak=f(0);totalCompletions=f(0);activeMonthDate=f(new Date);calendarDays=f([]);emptyDaysPrefix=f([]);completedDateStrings=f(new Set);logsMap=f(new Map);monthlySuccessRate=f(0);reportType=f("weekly");onTabChange(i){let t=["weekly","monthly","yearly"];t[i]&&this.reportType.set(t[i])}chartData=U(()=>{let i=this.reportType(),t=this.completedDateStrings(),e=[],n=new Date;if(n.setHours(0,0,0,0),i==="weekly")for(let o=6;o>=0;o--){let c=new Date(n);c.setDate(c.getDate()-o);let p=this.getLocalFormattedDate(c);e.push({label:c.toLocaleDateString("en-US",{weekday:"short"}),value:t.has(p)?1:0})}else if(i==="monthly")for(let o=3;o>=0;o--){let c=0;for(let p=0;p<7;p++){let h=new Date(n);h.setDate(h.getDate()-(o*7+p)),t.has(this.getLocalFormattedDate(h))&&c++}e.push({label:`W${4-o}`,value:c})}else for(let o=5;o>=0;o--){let c=new Date(n.getFullYear(),n.getMonth()-o,1),p=c.getFullYear()+"-"+String(c.getMonth()+1).padStart(2,"0"),h=0;t.forEach(u=>{u.startsWith(p)&&h++}),e.push({label:c.toLocaleDateString("en-US",{month:"short"}),value:h})}return e});chartDataConfiguration=U(()=>{let i=this.chartData(),t=this.habit(),e=t?t.color:"#3b82f6";return{labels:i.map(n=>n.label),datasets:[{data:i.map(n=>n.value),label:"Completions",backgroundColor:e+"33",borderColor:e,pointBackgroundColor:e,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:e,fill:"origin",tension:.4}]}});chartOptions=U(()=>({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,mode:"index",intersect:!1,footer:()=>`Duration: ${this.habit()?.duration||0}m`}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:this.reportType()==="weekly"?1:this.reportType()==="monthly"?7:31}}}));todayStr=f("");isDoneToday=U(()=>this.completedDateStrings().has(this.todayStr()));isTodayConfigured=f(!1);activeMonthDisplay=U(()=>this.activeMonthDate().toLocaleDateString("en-US",{month:"long",year:"numeric"}));async ngOnInit(){this.todayStr.set(this.getLocalFormattedDate(new Date)),this.route.paramMap.subscribe(async t=>{let e=t.get("id");e&&(this.habitId.set(Number(e)),await this.loadData())});let i=new Date;i.setDate(1),this.activeMonthDate.set(i)}goBack(){this.router.navigate(["/habits"])}getLocalFormattedDate(i){let t=i.getFullYear(),e=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${t}-${e}-${n}`}async loadData(){let i=this.habitId();if(!i)return;let t=await this.habitService.getHabit(i);t&&this.habit.set(t);let n=(await this.habitLogService.getAllLogs()).filter(A=>A.habitId===i),o=n.filter(A=>A.isCompleted);this.totalCompletions.set(o.length);let c=new Set(o.map(A=>A.dateStr));this.completedDateStrings.set(c);let p=new Map;n.forEach(A=>{p.set(A.dateStr,A)}),this.logsMap.set(p),this.calculateMonthlySuccessRate(n);let u=Array.from(c).sort().reverse().map(A=>{let[X,St,et]=A.split("-");return Math.floor(new Date(Number(X),Number(St)-1,Number(et)).getTime()/864e5)}),y=0,L=0;if(u.length>0){let A=1;y=1;for(let et=0;et<u.length-1;et++)u[et]-u[et+1]===1?(A++,A>y&&(y=A)):A=1;let X=new Date().setHours(0,0,0,0),St=Math.floor(X/864e5);if(u[0]===St||u[0]===St-1){L=1;for(let et=0;et<u.length-1&&u[et]-u[et+1]===1;et++)L++}}this.bestStreak.set(y),this.currentStreak.set(L),this.generateCalendar()}calculateMonthlySuccessRate(i){let t=new Date,e=new Date(t.getFullYear(),t.getMonth(),1),n=this.todayStr(),o=i.filter(h=>h.isCompleted&&h.dateStr.startsWith(n.substring(0,7))),c=t.getDate(),p=Math.round(o.length/c*100);this.monthlySuccessRate.set(p)}getSuccessRateColor(){let i=this.monthlySuccessRate();return i>=80?"#10b981":i>=50?"#f59e0b":"#ef4444"}shiftMonth(i){let t=new Date(this.activeMonthDate());t.setMonth(t.getMonth()+i),this.activeMonthDate.set(t),this.generateCalendar()}goToToday(){let i=new Date;i.setDate(1),this.activeMonthDate.set(i),this.generateCalendar()}generateCalendar(){let i=new Date(this.activeMonthDate()),t=i.getFullYear(),e=i.getMonth(),n=new Date(t,e,1).getDay(),o=new Date(t,e+1,0).getDate();this.emptyDaysPrefix.set(Array.from({length:n}));let c=[],p=this.todayStr(),h=!1,u={0:6,1:0,2:1,3:2,4:3,5:4,6:5};for(let y=1;y<=o;y++){let L=new Date(t,e,y),A=this.getLocalFormattedDate(L),X=new Date;X.setHours(0,0,0,0);let St=L.getTime()>X.getTime(),et=this.completedDateStrings().has(A),ct=u[L.getDay()],Ce=!1,me=this.habit();me&&(me.frequency===0||me.days&&Array.isArray(me.days)&&me.days.includes(ct))&&(Ce=!0),A===p&&(h=Ce);let at=this.logsMap().get(A);c.push({date:L,dateStr:A,dayNum:y,isToday:A===p,isInFuture:St,isCompleted:et,isConfiguredDay:Ce,hasNote:!!(at?.reflectionNote||at?.planNote||at?.mood||at?.tags&&at.tags.length>0),mood:at?.mood,tags:at?.tags,planNote:at?.planNote,reflectionNote:at?.reflectionNote})}this.isTodayConfigured.set(h),this.calendarDays.set(c)}getCellBg(i){return i.isCompleted?"#10b981":i.isConfiguredDay?i.isToday?"#f3f4f6":"#f0fdf4":"transparent"}getCellColor(i){return i.isCompleted?"#ffffff":i.isConfiguredDay?i.isToday?"#111827":"#10b981":"#0f0f0fff"}openNoteEditor(i){let t=this.habitId();if(!t)return;this.dialog.open(bi,{width:"450px",autoFocus:!1,restoreFocus:!1,data:{dateStr:i.dateStr,habitName:this.habit()?.name,isCompleted:i.isCompleted,isInFuture:i.isInFuture,log:this.logsMap().get(i.dateStr)||{habitId:t,dateStr:i.dateStr,completedAt:Date.now()}}}).afterClosed().subscribe(async n=>{n&&(await this.habitLogService.saveLogData(t,i.dateStr,n),await this.loadData())})}async toggleToday(){let i=this.habitId();i&&(await this.habitLogService.toggleCompletion(i,this.todayStr()),await this.loadData())}deleteHabit(){}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-habit-details"]],decls:94,vars:14,consts:[[1,"df","fd-c","w-100","font-inter",2,"background-color","var(--background-default)","min-height","100vh","position","relative"],[1,"df","fd-r","jc-sb","ai-c","p-20","w-100","sticky","top-0","bg-white",2,"z-index","10","box-shadow","0 2px 10px rgba(0,0,0,0.02)","box-sizing","border-box"],[1,"df","fd-r","gap-3","ai-c"],["mat-icon-button","",2,"background-color","var(--surface-alt)","border","1px solid var(--border-subtle)",3,"click"],[2,"color","var(--text-secondary)"],[1,"df","fd-c"],[1,"fs-12","fw-600","text-secondary","uppercase","ls-1"],[1,"fs-18","fw-800","truncate","text-primary",2,"max-width","180px"],[1,"p-24","df","fd-c","gap-6"],[1,"bg-white","br-24","df","fd-c","gap-4","w-100","position-relative","p-24",2,"box-shadow","0 10px 25px -5px rgb(9, 9, 9)","box-sizing","border-box","overflow","hidden"],[1,"bg-white","br-24","w-100","df","fd-c","gap-6","mt-12","p-24",2,"box-shadow","0 10px 25px -5px rgb(14, 14, 14)","box-sizing","border-box"],[1,"df","fd-r","jc-sb","ai-c","mb-20"],[1,"fs-13","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-20","fw-800","text-primary"],[1,"df","fd-r","gap-2",2,"background-color","#f8fafc","padding","4px","border-radius","12px","border","1px solid #f1f5f9"],["mat-icon-button","","title","Previous Month",2,"color","#64748b","width","36px","height","36px",3,"click"],[2,"font-size","20px"],["mat-button","",2,"color","#64748b","font-weight","700","font-size","13px","min-width","60px",3,"click"],["mat-icon-button","","title","Next Month",2,"color","#64748b","width","36px","height","36px",3,"click"],[1,"df","fd-r","w-100","mb-8",2,"background-color","transparent"],[1,"text-center","fs-11","fw-800",2,"flex","0 0 14.28%","letter-spacing","0.5px"],[1,"df","fd-r","flex-wrap","w-100","gap-y-1"],[2,"flex","0 0 14.28%"],[1,"df","ai-c","jc-c","position-relative",2,"flex","0 0 14.28%","height","48px"],[1,"df","fd-r","jc-c","gap-4","mt-20","pt-20",2,"border-top","1px solid #f1f5f9"],[1,"df","ai-c","gap-1"],[1,"br-4",2,"width","12px","height","12px","background-color","#10b981"],[1,"fs-11","fw-600","text-secondary"],[1,"df","ai-c","gap-1","ml-4"],[1,"br-4",2,"width","12px","height","12px","background-color","#f0fdf4","border","1px solid #dcfce7"],[1,"br-4",2,"width","12px","height","12px","background-color","transparent","border","1px solid #e2e8f0"],[1,"df","fd-r","flex-wrap","gap-8","jc-s","p-24","br-24",2,"box-shadow","0 10px 25px -5px rgb(5, 5, 5)"],[1,"bg-white","br-20","flex-1","df","fd-c","gap-2","min-w-140",2,"box-shadow","0 4px 12px rgba(0,0,0,0.02)"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#fff7ed","border","1px solid #ffedd5"],[2,"color","#ea580c","font-size","20px","width","20px","height","20px"],[1,"fs-11","fw-700","text-secondary","uppercase","ls-1"],[1,"fs-24","fw-900","text-primary"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f0f9ff","border","1px solid #e0f2fe"],[2,"color","#0284c7","font-size","20px","width","20px","height","20px"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f0fdf4","border","1px solid #dcfce7"],[2,"color","#166534","font-size","20px","width","20px","height","20px"],[1,"fs-24","fw-900"],[1,"df","ai-c","jc-c","br-10","mb-8",2,"width","36px","height","36px","background-color","#f8fafc","border","1px solid #f1f5f9"],[2,"color","#64748b","font-size","20px","width","20px","height","20px"],[1,"bg-white","br-24","w-100","df","fd-c","gap-6","mt-12","p-24",2,"box-shadow","0 10px 25px -5px rgb(5, 5, 5)","box-sizing","border-box"],[1,"df","fd-r","jc-sb","ai-c","mb-8"],[1,"fs-18","fw-800","text-primary"],["fitInkBarToContent","",2,"width","100%",3,"selectedIndexChange","selectedIndex"],["label","Weekly"],["label","Monthly"],["label","Yearly"],[1,"w-100","mt-16","position-relative",2,"height","180px"],["baseChart","","type","line",3,"data","options"],[1,"p-24","w-100","bg-white","b-t-1-solid","position-fixed",2,"bottom","0","left","0","z-index","100","border-color","#f4f4f5","box-shadow","0 -10px 25px -5px rgba(0,0,0,0.05)","box-sizing","border-box"],[1,"df","fd-r","ai-fs","jc-sb","position-relative","z-1",2,"z-index","1"],[1,"df","fd-r","ai-c","gap-4"],[1,"df","ai-c","jc-c","br-16","text-white",2,"width","56px","height","56px","min-width","56px"],[2,"font-size","28px","width","28px","height","28px"],[1,"df","fd-c","flex-1","overflow-hidden"],[1,"m-0","fs-22","fw-800","text-primary","truncate"],[1,"fs-14","fw-500","text-secondary"],[1,"mt-12","pt-20","df","fd-r","jc-sb","ai-c","gap-4","flex-wrap",2,"border-top","1px solid var(--border-subtle)"],[1,"df","fd-r","ai-c","gap-2","flex-wrap"],[1,"px-10","py-4","br-8","fs-11","fw-700","uppercase","ls-1"],[1,"df","ai-c","gap-1","px-10","py-4","br-8","fs-11","fw-700","text-secondary",2,"background-color","var(--surface-alt)"],[2,"font-size","14px","width","14px","height","14px"],[1,"br-12","border-none","df","fd-c","ai-c","jc-c","fw-700","fs-15","cursor-pointer","transition-all","position-relative",3,"click"],[1,"position-absolute","fs-10",2,"top","-2px","right","-2px"],[1,"position-absolute",2,"bottom","4px","width","4px","height","4px","border-radius","50%","background-color","currentColor","opacity","0.8"],["mat-flat-button","",1,"w-100","py-32","fw-800","br-16","transition-all",3,"click"],[1,"df","ai-c","jc-c","gap-3"],[1,"text-bg"],[1,"fs-17"]],template:function(t,e){if(t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),g("click",function(){return e.goBack()}),r(4,"mat-icon",4),l(5,"arrow_back"),s()(),r(6,"div",5)(7,"span",6),l(8,"Habit Details"),s(),r(9,"span",7),l(10),s()()()(),r(11,"div",8),x(12,Gl,16,13,"div",9),r(13,"div",10)(14,"div",11)(15,"div",5)(16,"span",12),l(17,"Consistency Map"),s(),r(18,"span",13),l(19),s()(),r(20,"div",14)(21,"button",15),g("click",function(){return e.shiftMonth(-1)}),r(22,"mat-icon",16),l(23,"chevron_left"),s()(),r(24,"button",17),g("click",function(){return e.goToToday()}),l(25," Today "),s(),r(26,"button",18),g("click",function(){return e.shiftMonth(1)}),r(27,"mat-icon",16),l(28,"chevron_right"),s()()()(),r(29,"div",19),F(30,Wl,2,1,"div",20,xi),s(),r(32,"div",21),F(33,ql,1,0,"div",22,xi),F(35,$l,5,15,"div",23,Vl),s(),r(37,"div",24)(38,"div",25),C(39,"div",26),r(40,"span",27),l(41,"Done"),s()(),r(42,"div",28),C(43,"div",29),r(44,"span",27),l(45,"Missed"),s()(),r(46,"div",28),C(47,"div",30),r(48,"span",27),l(49,"Locked"),s()()()(),r(50,"div",31)(51,"div",32)(52,"div",33)(53,"mat-icon",34),l(54," local_fire_department "),s()(),r(55,"span",35),l(56,"Current"),s(),r(57,"span",36),l(58),s()(),r(59,"div",32)(60,"div",37)(61,"mat-icon",38),l(62," emoji_events "),s()(),r(63,"span",35),l(64,"Record"),s(),r(65,"span",36),l(66),s()(),r(67,"div",32)(68,"div",39)(69,"mat-icon",40),l(70,"task_alt"),s()(),r(71,"span",35),l(72,"Success"),s(),r(73,"span",41),l(74),s()(),r(75,"div",32)(76,"div",42)(77,"mat-icon",43),l(78,"done_all"),s()(),r(79,"span",35),l(80,"Total"),s(),r(81,"span",36),l(82),s()()(),r(83,"div",44)(84,"div",45)(85,"span",46),l(86,"Trends"),s()(),r(87,"mat-tab-group",47),g("selectedIndexChange",function(o){return e.onTabChange(o)}),C(88,"mat-tab",48)(89,"mat-tab",49)(90,"mat-tab",50),s(),r(91,"div",51),C(92,"canvas",52),s()()(),x(93,Kl,7,8,"div",53),s()),t&2){let n;d(10),T(" ",((n=e.habit())==null?null:n.name)||"Loading..."," "),d(2),w(e.habit()?12:-1),d(7),k(e.activeMonthDisplay()),d(11),N(zi(13,zl)),d(3),N(e.emptyDaysPrefix()),d(2),N(e.calendarDays()),d(23),k(e.currentStreak()),d(8),k(e.bestStreak()),d(7),j("color",e.getSuccessRateColor()),d(),T("",e.monthlySuccessRate(),"%"),d(8),k(e.totalCompletions()),d(5),_("selectedIndex",0),d(5),_("data",e.chartDataConfiguration())("options",e.chartOptions()),d(),w(e.habit()&&e.isTodayConfigured()?93:-1)}},dependencies:[W,Q,q,st,ut,ae,Me,Nr,ga,Fr,nt,gt,xt,le,Mn,de],encapsulation:2})};var Br=async()=>{let a=m(ne);return await vt.users.count()===0?(a.navigate(["/onboarding"]),!1):!0};var Rn=class a{fb=m(li);router=m(ne);previewBase64=f(null);onboardForm=this.fb.group({name:["",[Nt.required,Nt.minLength(2)]],gender:["",Nt.required]});onFileSelected(i){let t=i.target.files[0];if(t){let e=new FileReader;e.onload=n=>{this.previewBase64.set(n.target.result)},e.readAsDataURL(t)}}async onSubmit(){if(this.onboardForm.valid){let i=this.onboardForm.value.gender,t=this.previewBase64();t||(i==="female"?t="https://api.dicebear.com/7.x/lorelei/svg?seed=Bella":i==="male"?t="https://api.dicebear.com/7.x/lorelei/svg?seed=Milo":t="https://api.dicebear.com/7.x/lorelei/svg?seed=Lucky");let e={name:this.onboardForm.value.name,gender:i,avatar:t||this.previewBase64()||void 0,createdAt:Date.now()};await vt.users.add(e),this.router.navigate(["/dashboard"])}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-onboarding"]],decls:39,vars:5,consts:[["fileInput",""],[1,"df","fd-c","ai-c","jc-c","min-vh-100",2,"background-color","#f7f3f0","padding","24px"],[1,"bg-white","br-24","df","fd-c","gap-8","w-100",2,"max-width","400px","padding","32px","box-shadow","0 12px 32px rgba(0,0,0,0.05)","padding-bottom","48px"],[1,"df","fd-c","ai-c","text-center","gap-4","mb-24"],[1,"df","ai-c","jc-c","br-pill","text-white","mb-8",2,"background","linear-gradient(135deg, #10b981, #3b82f6)","width","80px","height","80px"],[2,"font-size","36px","width","36px","height","36px"],[1,"m-0","fs-28","fw-800","text-primary"],[1,"m-0","fs-16","fw-500","text-secondary"],[1,"df","fd-c","gap-4","w-100",3,"ngSubmit","formGroup"],[1,"df","fd-c","ai-c","gap-2","mb-16","position-relative","w-100"],[1,"cursor-pointer",3,"click"],[3,"name","avatar","size"],["type","file","accept","image/*","capture","user",2,"display","none",3,"change"],[1,"fs-12","fw-600","text-secondary","text-center"],[1,"df","fd-c","gap-2","w-100"],[1,"fs-13","fw-700","text-primary","uppercase","ls-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","name","placeholder","E.g. Alex","required",""],["formControlName","gender","required",""],["value","male"],["value","female"],["value","other"],["mat-flat-button","","type","submit",1,"w-100","py-24","fw-800","br-12","mt-16","transition-all",2,"background-color","#10b981","color","white",3,"disabled"],[1,"fs-16"],[1,"ml-8",2,"font-size","20px"]],template:function(t,e){if(t&1){let n=E();r(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"mat-icon",5),l(5,"rocket_launch"),s()(),r(6,"h1",6),l(7,"Welcome to Trackify!"),s(),r(8,"p",7),l(9,"Let's set up your profile to get started."),s()(),r(10,"form",8),g("ngSubmit",function(){return e.onSubmit()}),r(11,"div",9)(12,"div",10),g("click",function(){D(n);let c=kt(15);return S(c.click())}),C(13,"t-avatar",11),r(14,"input",12,0),g("change",function(c){return e.onFileSelected(c)}),s()(),r(16,"span",13),l(17,"Upload Photo (Optional)"),s()(),r(18,"div",14)(19,"span",15),l(20,"Your Name"),s(),r(21,"mat-form-field",16),C(22,"input",17),s()(),r(23,"div",14)(24,"span",15),l(25,"Gender"),s(),r(26,"mat-form-field",16)(27,"mat-select",18)(28,"mat-option",19),l(29,"Male"),s(),r(30,"mat-option",20),l(31,"Female"),s(),r(32,"mat-option",21),l(33,"Prefer not to say"),s()()()(),r(34,"button",22)(35,"span",23),l(36,"Get Started"),s(),r(37,"mat-icon",24),l(38,"arrow_forward"),s()()()()()}if(t&2){let n;d(10),_("formGroup",e.onboardForm),d(3),_("name",((n=e.onboardForm.get("name"))==null?null:n.value)||"")("avatar",e.previewBase64())("size",100),d(21),_("disabled",!e.onboardForm.valid)}},dependencies:[di,Oe,Pt,Rt,Pe,ci,si,ri,gt,yt,Ne,Fe,Ae,xt,Ot,q,st,W,Q,Be],encapsulation:2})};var Hr=[{path:"onboarding",component:Rn},{path:"",canActivate:[Br],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:en},{path:"habits",component:xn},{path:"habits/:id",component:Pn},{path:"today",component:Tn},{path:"categories",component:En},{path:"categories/:id",loadComponent:()=>import("./chunk-DQP5KJFV.js").then(a=>a.CategoryDetails)},{path:"settings",component:In},{path:"tasks",loadComponent:()=>import("./chunk-QV5BYO6U.js").then(a=>a.Tasks)}]}];var ba="Service workers are disabled or not supported by this browser",fi=class{serviceWorker;worker;registration;events;constructor(i,t){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=new pe(e=>e.error(new ze(5601,!1)));else{let e=null,n=new B;this.worker=new pe(u=>(e!==null&&u.next(e),n.subscribe(y=>u.next(y))));let o=()=>{let{controller:u}=i;u!==null&&(e=u,n.next(e))};i.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(ue(()=>i.getRegistration().then(u=>{if(!u)throw new ze(5601,!1);return u})));let c=new B;this.events=c.asObservable();let p=u=>{let{data:y}=u;y?.type&&c.next(y)};i.addEventListener("message",p),t?.get(jn,null,{optional:!0})?.onDestroy(()=>{i.removeEventListener("controllerchange",o),i.removeEventListener("message",p)})}}postMessage(i,t){return new Promise(e=>{this.worker.pipe(Jt(1)).subscribe(n=>{n.postMessage(Yt({action:i},t)),e()})})}postMessageWithOperation(i,t,e){let n=this.waitForOperationCompleted(e),o=this.postMessage(i,t);return Promise.all([o,n]).then(([,c])=>c)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let t;return typeof i=="string"?t=e=>e.type===i:t=e=>i.includes(e.type),this.events.pipe(Xt(t))}nextEventOfType(i){return this.eventsOfType(i).pipe(Jt(1))}waitForOperationCompleted(i){return new Promise((t,e)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Xt(n=>n.nonce===i),Jt(1),he(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:t,error:e})})}get isEnabled(){return!!this.serviceWorker}},Zl=(()=>{class a{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new B;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=Se,this.notificationClicks=Se,this.notificationCloses=Se,this.pushSubscriptionChanges=Se,this.subscription=Se;return}this.messages=this.sw.eventsOfType("PUSH").pipe(he(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(he(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(he(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(he(n=>n.data)),this.pushManager=this.sw.registration.pipe(he(n=>n.pushManager));let e=this.pushManager.pipe(ue(n=>n.getSubscription()));this.subscription=new pe(n=>{let o=e.subscribe(n),c=this.subscriptionChanges.subscribe(n);return()=>{o.unsubscribe(),c.unsubscribe()}})}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(ba));let e={userVisibleOnly:!0},n=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(n.length));for(let c=0;c<n.length;c++)o[c]=n.charCodeAt(c);return e.applicationServerKey=o,new Promise((c,p)=>{this.pushManager.pipe(ue(h=>h.subscribe(e)),Jt(1)).subscribe({next:h=>{this.subscriptionChanges.next(h),c(h)},error:p})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(ba));let t=e=>{if(e===null)throw new ze(5602,!1);return e.unsubscribe().then(n=>{if(!n)throw new ze(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((e,n)=>{this.subscription.pipe(Jt(1),ue(t)).subscribe({next:e,error:n})})}decodeBase64(t){return atob(t)}static \u0275fac=function(e){return new(e||a)(Hn(fi))};static \u0275prov=zt({token:a,factory:a.\u0275fac})}return a})(),Yl=(()=>{class a{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=Se,this.unrecoverable=Se;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(ba));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let t=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new ze(5601,!1));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(e){return new(e||a)(Hn(fi))};static \u0275prov=zt({token:a,factory:a.\u0275fac})}return a})(),Vr=new K("");function Xl(){let a=m(Fi);if(!("serviceWorker"in navigator&&a.enabled!==!1))return;let i=m(Vr),t=m(ft),e=m(jn);t.runOutsideAngular(()=>{let n=navigator.serviceWorker,o=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",o),e.onDestroy(()=>{n.removeEventListener("controllerchange",o)})}),t.runOutsideAngular(()=>{let n,{registrationStrategy:o}=a;if(typeof o=="function")n=new Promise(c=>o().subscribe(()=>c()));else{let[c,...p]=(o||"registerWhenStable:30000").split(":");switch(c){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=zr(+p[0]||0);break;case"registerWhenStable":n=Promise.race([e.whenStable(),zr(+p[0])]);break;default:throw new ze(5600,!1)}}n.then(()=>{e.destroyed||navigator.serviceWorker.register(i,{scope:a.scope,updateViaCache:a.updateViaCache,type:a.type}).catch(c=>console.error(Ia(5604,!1)))})})}function zr(a){return new Promise(i=>setTimeout(i,a))}function Jl(){let a=m(Fi),i=m(Vt),t=!0;return new fi(t&&a.enabled!==!1?navigator.serviceWorker:void 0,i)}var Fi=class{enabled;updateViaCache;type;scope;registrationStrategy};function jr(a,i={}){return Ea([Zl,Yl,{provide:Vr,useValue:a},{provide:Fi,useValue:i},{provide:fi,useFactory:Jl},Ba(Xl)])}var Gr={providers:[Ra(),Qa(Hr),jr("ngsw-worker.js",{enabled:!Va(),registrationStrategy:"registerWhenStable:30000"}),Pa(se),Ka($a())]};var _i=class a{isDarkMode=f(!1);constructor(){this.initializeTheme()}initializeTheme(){localStorage.getItem("theme")==="dark"?this.setDarkMode(!0):this.setDarkMode(!1)}setDarkMode(i){this.isDarkMode.set(i),i?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}toggleTheme(){this.setDarkMode(!this.isDarkMode())}static \u0275fac=function(t){return new(t||a)};static \u0275prov=zt({token:a,factory:a.\u0275fac,providedIn:"root"})};var td=[[["t-header"]],"*"],ed=["t-header","*"];function id(a,i){a&1&&(r(0,"div",17)(1,"div",18)(2,"mat-icon"),l(3,"home"),s()(),r(4,"div",19)(5,"mat-icon"),l(6,"favorite"),s()(),r(7,"div",20)(8,"div",21)(9,"mat-icon"),l(10,"add"),s()()(),r(11,"div",22)(12,"mat-icon"),l(13,"category"),s()(),r(14,"div",23)(15,"mat-icon"),l(16,"assignment"),s()()())}var On=class a{title=f("Trackify");isSidenavOpened=f(!0);isMobile=f(!1);activeUser=f(null);themeService=m(_i);async ngOnInit(){this.checkScreenSize();let i=await vt.users.orderBy("id").first();i&&this.activeUser.set(i)}onResize(){this.checkScreenSize()}checkScreenSize(){let i=window.innerWidth<=768;this.isMobile.set(i),i?this.isSidenavOpened.set(!1):this.isSidenavOpened.set(!0)}toggleSidenav(){this.isSidenavOpened.update(i=>!i)}closeOnMobile(){this.isMobile()&&this.isSidenavOpened.set(!1)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-sidenav"]],hostBindings:function(t,e){t&1&&g("resize",function(){return e.onResize()},Aa)},ngContentSelectors:ed,decls:40,vars:6,consts:[[2,"height","100vh"],[2,"width","260px","box-shadow","2px 0 6px rgb(0 0 0 / 10%)",3,"opened","mode","autoFocus"],[1,"df","fd-c","h-100",2,"height","100%"],[1,"p-16","df","ai-c","gap-8",2,"height","64px","box-sizing","border-box"],["color","primary",1,"fs-24"],[1,"fs-20",2,"font-weight","500"],[2,"flex","1"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/today","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/habits","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/categories","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/tasks","routerLinkActive","active",3,"click"],[2,"background-color","var(--background-alt)"],[1,"app-router-wrapper",2,"overflow-y","auto"],[1,"h-100"],[1,"mobile-bottom-nav"],["routerLink","/dashboard","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/today","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/habits",1,"nav-center-item"],[1,"fab-btn"],["routerLink","/categories","routerLinkActive","active-tab",1,"nav-item"],["routerLink","/tasks","routerLinkActive","active-tab",1,"nav-item"]],template:function(t,e){t&1&&(dt(td),r(0,"mat-sidenav-container",0)(1,"mat-sidenav",1)(2,"div",2)(3,"div",3)(4,"mat-icon",4),l(5,"track_changes"),s(),r(6,"span",5),l(7,"Trackify"),s()(),r(8,"mat-nav-list",6)(9,"a",7),g("click",function(){return e.closeOnMobile()}),r(10,"mat-icon",8),l(11,"dashboard"),s(),r(12,"span",9),l(13,"Dashboard"),s()(),r(14,"a",10),g("click",function(){return e.closeOnMobile()}),r(15,"mat-icon",8),l(16,"today"),s(),r(17,"span",9),l(18,"Today"),s()(),r(19,"a",11),g("click",function(){return e.closeOnMobile()}),r(20,"mat-icon",8),l(21,"list"),s(),r(22,"span",9),l(23,"Habits"),s()(),r(24,"a",12),g("click",function(){return e.closeOnMobile()}),r(25,"mat-icon",8),l(26,"category"),s(),r(27,"span",9),l(28,"Categories"),s()(),r(29,"a",13),g("click",function(){return e.closeOnMobile()}),r(30,"mat-icon",8),l(31,"assignment"),s(),r(32,"span",9),l(33,"Tasks"),s()()()()(),r(34,"mat-sidenav-content",14),$(35),r(36,"div",15)(37,"div",16),$(38,1),s()(),x(39,id,17,0,"div",17),s()()),t&2&&(d(),_("opened",e.isSidenavOpened())("mode",e.isMobile()?"over":"side")("autoFocus",!1),d(35),j("height",e.isMobile()?"calc(100vh - 64px - 80px)":"calc(100vh - 64px)"),d(3),w(e.isMobile()?39:-1))},dependencies:[Y,ae,ii,Ua,Xi,To,Io,Mo,W,Q,gi,_r,wn,Ai,Li,q],styles:[".active[_ngcontent-%COMP%]{background-color:var(--primary-container, rgba(99, 102, 241, .1))!important;color:var(--on-primary-container, #6366f1)!important}.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary, #6366f1)!important}@media(max-width:600px){.hide-on-mobile[_ngcontent-%COMP%]{display:none}}.mobile-bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;height:80px;background:#ffffffd9;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:space-around;padding:0 10px;border-top:1px solid rgba(0,0,0,.05);z-index:1000;box-shadow:0 -4px 20px #0000000d}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;height:100%;cursor:pointer;color:#94a3b8;transition:all .3s cubic-bezier(.4,0,.2,1)}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;width:26px;height:26px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]{color:#6366f1}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:#6366f11a;padding:8px;border-radius:16px;box-sizing:content-box}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;position:relative;top:-20px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]{width:60px;height:60px;background:#6366f1;border-radius:30px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px #6366f14d;color:#fff;transition:all .3s ease}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.mobile-bottom-nav[_ngcontent-%COMP%]   .nav-center-item[_ngcontent-%COMP%]   .fab-btn[_ngcontent-%COMP%]:active{transform:scale(.9)}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]{background:#0f172ad9;border-top-color:#ffffff0d}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{color:#64748b}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]{color:#818cf8}.dark-theme[_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mobile-bottom-nav[_ngcontent-%COMP%]   .nav-item.active-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:#818cf826}"]})};var nd=["*",[["mat-toolbar-row"]]],ad=["*","mat-toolbar-row"],od=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=V({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return a})(),Wr=(()=>{class a{_elementRef=m(it);_platform=m(We);_document=m(ge);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-toolbar"]],contentQueries:function(e,n,o){if(e&1&&wt(o,od,5),e&2){let c;H(c=z())&&(n._toolbarRows=c)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(fe(n.color?"mat-"+n.color:""),P("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ad,decls:2,vars:0,template:function(e,n){e&1&&(dt(nd),$(0),$(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return a})();var qr=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=rt({type:a});static \u0275inj=ot({imports:[ht]})}return a})();function sd(a,i){if(a&1){let t=E();r(0,"button",6),g("click",function(){D(t);let n=b();return S(n.toggle.emit())}),r(1,"mat-icon"),l(2,"menu"),s()()}}function cd(a,i){if(a&1&&(r(0,"div",5)(1,"span",7),l(2),s(),r(3,"div",8),C(4,"t-avatar",9),s()()),a&2){let t,e,n,o=b();d(2),k((t=o.activeUser())==null?null:t.name),d(2),_("name",((e=o.activeUser())==null?null:e.name)||"")("avatar",(n=o.activeUser())==null?null:n.avatar)("size",36)}}var Ln=class a{isMobile=G(!1);title=G("Trackify");activeUser=G(null);toggle=Wt();themeService=m(_i);static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["t-header"]],inputs:{isMobile:[1,"isMobile"],title:[1,"title"],activeUser:[1,"activeUser"]},outputs:{toggle:"toggle"},decls:8,vars:3,consts:[[1,"df","fx","jc-s","toolbar",2,"box-shadow","0 2px 6px rgb(0 0 0 / 15%)","z-index","10","position","relative"],[1,"df","ai-c","gap-2"],["mat-icon-button","","aria-label","Toggle sidenav"],["color","primary",2,"font-size","28px","width","28px","height","28px","margin-right","8px"],[1,"fs-20",2,"font-weight","400"],[1,"df","fd-r","ai-c","gap-2","px-8"],["mat-icon-button","","aria-label","Toggle sidenav",3,"click"],[1,"fs-14","fw-600","hide-on-mobile"],["routerLink","/settings",1,"cursor-pointer"],[3,"name","avatar","size"]],template:function(t,e){t&1&&(r(0,"mat-toolbar",0)(1,"div",1),x(2,sd,3,0,"button",2),r(3,"mat-icon",3),l(4," track_changes "),s(),r(5,"span",4),l(6),s()(),x(7,cd,5,4,"div",5),s()),t&2&&(d(2),w(e.isMobile()?-1:2),d(4),k(e.title()),d(),w(e.activeUser()?7:-1))},dependencies:[Y,ae,ii,qr,Wr,q,ut,W,Q,Be],encapsulation:2})};var An=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=v({type:a,selectors:[["app-root"]],decls:4,vars:3,consts:[["s",""],[3,"toggle","isMobile","title","activeUser"]],template:function(t,e){if(t&1){let n=E();r(0,"t-sidenav",null,0)(2,"t-header",1),g("toggle",function(){D(n);let c=kt(1);return S(c.toggleSidenav())}),s(),C(3,"router-outlet"),s()}if(t&2){let n=kt(1);d(2),_("isMobile",n.isMobile())("title",n.title())("activeUser",n.activeUser())}},dependencies:[qa,On,Ln],encapsulation:2})};Ga(An,Gr).catch(a=>console.error(a));
