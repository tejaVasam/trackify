import{$ as ja,B as Ia,C as Ta,H as Va,J as Oa,K as Bt,P as Pa,R as Fa,S as Ra,U as Na,V as Ba,W as La,X as Ya,Y as Ha,_ as za,aa as Wa,d as ut,e as Ft,ea as Xa,f as Rt,ga as Ka,h as Nt,ha as Ua,i as Da,j as Ca,ja as qa,k as pt,ka as $a,l as ht,la as Ga,m as _t,ma as Qa,n as Ma,na as Za,o as ka,oa as Ja,p as gt,q as ft,sa as en,t as wa,ta as tn,ua as an,v as Aa,va as nn,w as xa,x as Sa,y as Ea,z as Xe}from"./chunk-IYXOUTCK.js";import{$ as na,$b as da,Ab as I,Ac as dt,B as Qe,Bc as ct,Cc as ca,Da as c,Dc as ma,Eb as nt,Fa as ze,Fb as K,Fc as Ot,G as Ze,Ga as Et,Gb as w,Hb as ae,Hc as ua,Ia as ce,Ib as m,Jb as T,Ka as Je,Kb as R,Kc as Pt,La as et,Lb as We,Lc as pa,Mb as it,Nb as rt,Ob as st,P as G,Pa as D,Pb as Ce,Q as At,Qa as ee,R as aa,Ra as te,Tc as ha,Ua as je,Va as It,Vb as sa,Vc as _a,W as xt,Wa as Tt,Wc as q,X as Q,Xb as U,Y as Z,Yc as ga,Zb as oa,Zc as we,_ as F,_b as la,a as Ye,aa as o,b as Ge,cb as C,d as O,db as x,dc as V,eb as S,ec as N,fa as b,fc as Vt,g as P,ga as v,ha as oe,hb as z,hd as fa,ia as St,ib as j,id as Ae,ja as J,jb as _,ka as He,kb as l,lb as d,ld as ba,m as se,mb as y,na as p,nb as M,oa as le,ob as k,od as va,pb as me,pd as mt,qb as H,qd as _e,ra as g,rb as W,rc as ot,rd as ya,sb as h,sd as ge,ta as de,tb as tt,td as xe,ua as ia,ub as u,vb as De,vc as Me,wa as Y,wb as ue,wc as pe,xa as ra,xb as at,xc as lt,yb as X,yc as he,z as $,zb as E,zc as ke}from"./chunk-3ZYZ6IDZ.js";var Se=class i{async getTasks(){return Me.tasks.reverse().sortBy("createdAt")}async addTask(r){return Me.tasks.add(r)}async updateTask(r,e){return Me.tasks.update(r,e)}async deleteTask(r){await Me.tasks.delete(r)}async toggleTaskStatus(r,e){return Me.tasks.update(r,{completed:!e})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac,providedIn:"root"})};var Lt=new F("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>o(sa)}),Ie="Method not implemented",A=class{locale;_localeChanges=new P;localeChanges=this._localeChanges;setTime(r,e,t,a){throw new Error(Ie)}getHours(r){throw new Error(Ie)}getMinutes(r){throw new Error(Ie)}getSeconds(r){throw new Error(Ie)}parseTime(r,e){throw new Error(Ie)}addSeconds(r,e){throw new Error(Ie)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),a=this.isValid(e);return t&&a?!this.compareDate(r,e):t==a}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),a=this.isValid(e);return t&&a?!this.compareTime(r,e):t==a}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}},ne=new F("mat-date-formats");var xn=["mat-calendar-body",""];function Sn(i,r){return this._trackRow(r)}var mn=(i,r)=>r.id;function En(i,r){if(i&1&&(M(0,"tr",0)(1,"td",3),m(2),k()()),i&2){let e=u();c(),K("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),C("colspan",e.numCols),c(),R(" ",e.label," ")}}function In(i,r){if(i&1&&(M(0,"td",3),m(1),k()),i&2){let e=u(2);K("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),C("colspan",e._firstRowOffset),c(),R(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Tn(i,r){if(i&1){let e=H();M(0,"td",6)(1,"button",7),tt("click",function(a){let n=b(e).$implicit,s=u(2);return v(s._cellClicked(n,a))})("focus",function(a){let n=b(e).$implicit,s=u(2);return v(s._emitActiveDateChange(n,a))}),M(2,"span",8),m(3),k(),me(4,"span",9),k()()}if(i&2){let e=r.$implicit,t=r.$index,a=u().$index,n=u();K("width",n._cellWidth)("padding-top",n._cellPadding)("padding-bottom",n._cellPadding),C("data-mat-row",a)("data-mat-col",t),c(),ae(e.cssClasses),w("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",n._isActiveCell(a,t))("mat-calendar-body-range-start",n._isRangeStart(e.compareValue))("mat-calendar-body-range-end",n._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",n._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",n._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",n._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",n._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",n._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",n._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",n._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",n._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",n._isInPreview(e.compareValue)),W("tabIndex",n._isActiveCell(a,t)?0:-1),C("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",n._isSelected(e.compareValue))("aria-current",n.todayValue===e.compareValue?"date":null)("aria-describedby",n._getDescribedby(e.compareValue)),c(),w("mat-calendar-body-selected",n._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",n._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",n.todayValue===e.compareValue),c(),R(" ",e.displayValue," ")}}function Vn(i,r){if(i&1&&(M(0,"tr",1),x(1,In,2,6,"td",4),z(2,Tn,5,49,"td",5,mn),k()),i&2){let e=r.$implicit,t=r.$index,a=u();c(),S(t===0&&a._firstRowOffset?1:-1),c(),j(e)}}function On(i,r){if(i&1&&(l(0,"th",2)(1,"span",6),m(2),d(),l(3,"span",3),m(4),d()()),i&2){let e=r.$implicit;c(2),T(e.long),c(2),T(e.narrow)}}var Pn=["*"];function Fn(i,r){}function Rn(i,r){if(i&1){let e=H();l(0,"mat-month-view",4),st("activeDateChange",function(a){b(e);let n=u();return rt(n.activeDate,a)||(n.activeDate=a),v(a)}),h("_userSelection",function(a){b(e);let n=u();return v(n._dateSelected(a))})("dragStarted",function(a){b(e);let n=u();return v(n._dragStarted(a))})("dragEnded",function(a){b(e);let n=u();return v(n._dragEnded(a))}),d()}if(i&2){let e=u();it("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Nn(i,r){if(i&1){let e=H();l(0,"mat-year-view",5),st("activeDateChange",function(a){b(e);let n=u();return rt(n.activeDate,a)||(n.activeDate=a),v(a)}),h("monthSelected",function(a){b(e);let n=u();return v(n._monthSelectedInYearView(a))})("selectedChange",function(a){b(e);let n=u();return v(n._goToDateInView(a,"month"))}),d()}if(i&2){let e=u();it("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Bn(i,r){if(i&1){let e=H();l(0,"mat-multi-year-view",6),st("activeDateChange",function(a){b(e);let n=u();return rt(n.activeDate,a)||(n.activeDate=a),v(a)}),h("yearSelected",function(a){b(e);let n=u();return v(n._yearSelectedInMultiYearView(a))})("selectedChange",function(a){b(e);let n=u();return v(n._goToDateInView(a,"year"))}),d()}if(i&2){let e=u();it("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Ln(i,r){}var Yn=["button"],Hn=[[["","matDatepickerToggleIcon",""]]],zn=["[matDatepickerToggleIcon]"];function jn(i,r){i&1&&(oe(),l(0,"svg",2),y(1,"path",3),d())}var Oe=(()=>{class i{changes=new P;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Wn=0,Ue=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Wn++;cssClasses;constructor(r,e,t,a,n,s=r,f){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=s,this.rawValue=f,this.cssClasses=n instanceof Set?Array.from(n):n}},Xn={passive:!1,capture:!0},bt={passive:!0,capture:!0},rn={passive:!0},Ve=(()=>{class i{_elementRef=o(Y);_ngZone=o(le);_platform=o(ua);_intl=o(Oe);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new p;previewChange=new p;activeDateChange=new p;dragStarted=new p;dragEnded=new p;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=o(J);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=o(ce),t=o(we);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),o(pe).load(mt),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,n=[e.listen(a,"touchmove",this._touchmoveHandler,Xn),e.listen(a,"mouseenter",this._enterHandler,bt),e.listen(a,"focus",this._enterHandler,bt),e.listen(a,"mouseleave",this._leaveHandler,bt),e.listen(a,"blur",this._leaveHandler,bt),e.listen(a,"mousedown",this._mousedownHandler,rn),e.listen(a,"touchstart",this._mousedownHandler,rn)];this._platform.isBrowser&&n.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:n}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?n-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){ze(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return zt(e,this.startValue,this.endValue)}_isRangeEnd(e){return jt(e,this.startValue,this.endValue)}_isInRange(e){return Wt(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return zt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[t][a-1];if(!n){let s=this.rows[t-1];n=s&&s[s.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[t][a+1];if(!n){let s=this.rows[t+1];n=s&&s[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return jt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Wt(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return zt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return jt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Wt(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=sn(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Ht(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Ht(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=sn(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Ht(e);if(t){let a=t.getAttribute("data-mat-row"),n=t.getAttribute("data-mat-col");if(a&&n)return this.rows[parseInt(a)]?.[parseInt(n)]||null}return null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[de],attrs:xn,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(x(0,En,3,6,"tr",0),z(1,Vn,4,1,"tr",1,Sn,!0),M(3,"span",2),m(4),k(),M(5,"span",2),m(6),k(),M(7,"span",2),m(8),k(),M(9,"span",2),m(10),k()),t&2&&(S(a._firstRowOffset<a.labelMinRequiredCells?0:-1),c(),j(a.rows),c(2),W("id",a._startDateLabelId),c(),R(" ",a.startDateAccessibleName,`
`),c(),W("id",a._endDateLabelId),c(),R(" ",a.endDateAccessibleName,`
`),c(),W("id",a._comparisonStartDateLabelId),c(),We(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),c(),W("id",a._comparisonEndDateLabelId),c(),We(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Yt(i){return i?.nodeName==="TD"}function Ht(i){let r;return Yt(i)?r=i:Yt(i.parentNode)?r=i.parentNode:Yt(i.parentNode?.parentNode)&&(r=i.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function zt(i,r,e){return e!==null&&r!==e&&i<e&&i===r}function jt(i,r,e){return r!==null&&r!==e&&i>=r&&i===e}function Wt(i,r,e,t){return t&&r!==null&&e!==null&&r!==e&&i>=r&&i<=e}function sn(i){let r=i.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var L=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}},qe=(()=>{class i{selection;_adapter;_selectionChanged=new P;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Je()};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Kn=(()=>{class i extends qe{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||i)(na(A))};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var un={provide:qe,useFactory:()=>o(qe,{optional:!0,skipSelf:!0})||new Kn(o(A))};var pn=new F("MAT_DATE_RANGE_SELECTION_STRATEGY");var Xt=7,Un=0,on=(()=>{class i{_changeDetectorRef=o(V);_dateFormats=o(ne,{optional:!0});_dateAdapter=o(A,{optional:!0});_dir=o(he,{optional:!0});_rangeStrategy=o(pn,{optional:!0});_rerenderSubscription=O.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof L?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new p;_userSelection=new p;dragStarted=new p;dragEnded=new p;activeDateChange=new p;_matCalendarBody;_monthLabel=g("");_weeks=g([]);_firstWeekOffset=g(0);_rangeStart=g(null);_rangeEnd=g(null);_comparisonRangeStart=g(null);_comparisonRangeEnd=g(null);_previewStart=g(null);_previewEnd=g(null);_isRange=g(!1);_todayDate=g(null);_weekdays=g([]);constructor(){o(pe).load(lt),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(G(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),n,s;this._selected instanceof L?(n=this._getDateInCurrentMonth(this._selected.start),s=this._getDateInCurrentMonth(this._selected.end)):n=s=this._getDateInCurrentMonth(this._selected),(n!==t||s!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!q(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Xt+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Xt),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,n=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&a){let s=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);s&&(this._previewStart.set(this._getCellCompareValue(s.start)),this._previewEnd.set(this._getCellCompareValue(s.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),n=this._dateAdapter.getDayOfWeekNames("long").map((s,f)=>({long:s,narrow:t[f],id:Un++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let n=0,s=this._firstWeekOffset();n<e;n++,s++){s==Xt&&(a.push([]),s=0);let f=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),Re=this._shouldEnableDate(f),Ne=this._dateAdapter.format(f,this._dateFormats.display.dateA11yLabel),Be=this.dateClass?this.dateClass(f,"month"):void 0;a[a.length-1].push(new Ue(n+1,t[n],Ne,Re,Be,this._getCellCompareValue(f),f))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(t,a,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof L?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&X(Ve,5),t&2){let n;E(n=I())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[de],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),z(3,On,5,2,"th",2,mn),d(),l(5,"tr",3),y(6,"th",4),d()(),l(7,"tbody",5),h("selectedValueChange",function(s){return a._dateSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("previewChange",function(s){return a._previewChanged(s)})("dragStarted",function(s){return a.dragStarted.emit(s)})("dragEnded",function(s){return a._dragEnded(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),d()()),t&2&&(c(3),j(a._weekdays()),c(4),_("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName))},dependencies:[Ve],encapsulation:2,changeDetection:0})}return i})(),B=24,Kt=4,ln=(()=>{class i{_changeDetectorRef=o(V);_dateAdapter=o(A,{optional:!0});_dir=o(he,{optional:!0});_rerenderSubscription=O.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),hn(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof L?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new p;yearSelected=new p;activeDateChange=new p;_matCalendarBody;_years=g([]);_todayYear=g(0);_selectedYear=g(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(G(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Ke(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let n=0,s=[];n<B;n++)s.push(t+n),s.length==Kt&&(a.push(s.map(f=>this._createCellForYear(f))),s=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),n=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Kt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Kt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ke(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,B-Ke(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-B*10:-B);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?B*10:B);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Ke(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),n=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Ue(e,a,a,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof L){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&X(Ve,5),t&2){let n;E(n=I())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),y(3,"th",2),d()(),l(4,"tbody",3),h("selectedValueChange",function(s){return a._yearSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),d()()),t&2&&(c(4),_("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[Ve],encapsulation:2,changeDetection:0})}return i})();function hn(i,r,e,t,a){let n=i.getYear(r),s=i.getYear(e),f=_n(i,t,a);return Math.floor((n-f)/B)===Math.floor((s-f)/B)}function Ke(i,r,e,t){let a=i.getYear(r);return qn(a-_n(i,e,t),B)}function _n(i,r,e){let t=0;return e?t=i.getYear(e)-B+1:r&&(t=i.getYear(r)),t}function qn(i,r){return(i%r+r)%r}var dn=(()=>{class i{_changeDetectorRef=o(V);_dateFormats=o(ne,{optional:!0});_dateAdapter=o(A,{optional:!0});_dir=o(he,{optional:!0});_rerenderSubscription=O.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof L?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new p;monthSelected=new p;activeDateChange=new p;_matCalendarBody;_months=g([]);_yearLabel=g("");_todayMonth=g(null);_selectedMonth=g(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(G(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let n=this._getDateFromMonth(t);this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),s=this.dateClass?this.dateClass(a,"year"):void 0;return new Ue(e,t.toLocaleUpperCase(),n,this._shouldEnableMonth(e),s)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let n=a;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>n}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<n}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof L?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&X(Ve,5),t&2){let n;E(n=I())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),y(3,"th",2),d()(),l(4,"tbody",3),h("selectedValueChange",function(s){return a._monthSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),d()()),t&2&&(c(4),_("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[Ve],encapsulation:2,changeDetection:0})}return i})(),gn=(()=>{class i{_intl=o(Oe);calendar=o(Ut);_dateAdapter=o(A,{optional:!0});_dateFormats=o(ne,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){o(pe).load(lt);let e=o(V);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-B))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:B))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):hn(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Ke(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+B-1,n=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),s=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[n,s]}_periodButtonLabelId=o(we).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Pn,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(De(),l(0,"div",0)(1,"div",1)(2,"span",2),m(3),d(),l(4,"button",3),h("click",function(){return a.currentPeriodClicked()}),l(5,"span",4),m(6),d(),oe(),l(7,"svg",5),y(8,"polygon",6),d()(),St(),y(9,"div",7),ue(10),l(11,"button",8),h("click",function(){return a.previousClicked()}),oe(),l(12,"svg",9),y(13,"path",10),d()(),St(),l(14,"button",11),h("click",function(){return a.nextClicked()}),oe(),l(15,"svg",9),y(16,"path",12),d()()()()),t&2&&(c(2),_("id",a._periodButtonLabelId),c(),T(a.periodButtonDescription),c(),C("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),c(2),T(a.periodButtonText),c(),w("mat-calendar-invert",a.calendar.currentView!=="month"),c(4),_("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),C("aria-label",a.prevButtonLabel),c(3),_("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),C("aria-label",a.nextButtonLabel))},dependencies:[ge,_e,nn],encapsulation:2,changeDetection:0})}return i})(),Ut=(()=>{class i{_dateAdapter=o(A,{optional:!0});_dateFormats=o(ne,{optional:!0});_changeDetectorRef=o(V);_elementRef=o(Y);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof L?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new p;yearSelected=new p;monthSelected=new p;viewChanged=new p(!0);_userSelection=new p;_userDragDrop=new p;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new P;constructor(){this._intlChanges=o(Oe).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Ft(this.headerComponent||gn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=t||a||e.dateFilter;if(n&&!n.firstChange){let s=this._getCurrentViewComponent();s&&(this._elementRef.nativeElement.contains(Ot())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),s._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof L||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&X(on,5)(dn,5)(ln,5),t&2){let n;E(n=I())&&(a.monthView=n.first),E(n=I())&&(a.yearView=n.first),E(n=I())&&(a.multiYearView=n.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Ce([un]),de],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(It(0,Fn,0,0,"ng-template",0),l(1,"div",1),x(2,Rn,1,11,"mat-month-view",2)(3,Nn,1,6,"mat-year-view",3)(4,Bn,1,6,"mat-multi-year-view",3),d()),t&2){let n;_("cdkPortalOutlet",a._calendarHeaderPortal),c(2),S((n=a.currentView)==="month"?2:n==="year"?3:n==="multi-year"?4:-1)}},dependencies:[Nt,pa,on,dn,ln],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),$n=new F("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=o(J);return()=>pt(i)}}),fn=(()=>{class i{_elementRef=o(Y);_animationsDisabled=Ae();_changeDetectorRef=o(V);_globalModel=o(qe);_dateAdapter=o(A);_ngZone=o(le);_rangeSelectionStrategy=o(pn,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new P;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(o(pe).load(lt),this._closeButtonText=o(Oe).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=o(ce);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,n=t instanceof L;if(n&&this._rangeSelectionStrategy){let s=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(s,this)}else a&&(n||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&X(Ut,5),t&2){let n;E(n=I())&&(a._calendar=n.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(ae(a.color?"mat-"+a.color:""),w("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(l(0,"div",0)(1,"mat-calendar",1),h("yearSelected",function(s){return a.datepicker._selectYear(s)})("monthSelected",function(s){return a.datepicker._selectMonth(s)})("viewChanged",function(s){return a.datepicker._viewChanged(s)})("_userSelection",function(s){return a._handleUserSelection(s)})("_userDragDrop",function(s){return a._handleUserDragDrop(s)}),d(),It(2,Ln,0,0,"ng-template",2),l(3,"button",3),h("focus",function(){return a._closeButtonFocused=!0})("blur",function(){return a._closeButtonFocused=!1})("click",function(){return a.datepicker.close()}),m(4),d()()),t&2&&(w("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),C("aria-modal",!0)("aria-labelledby",a._dialogLabelId??void 0),c(),ae(a.datepicker.panelClass),_("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),c(),_("cdkPortalOutlet",a._actionsPortal),c(),w("cdk-visually-hidden",!a._closeButtonFocused),_("color",a.color||"primary"),c(),T(a._closeButtonText))},dependencies:[ha,Ut,Nt,ge],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return i})(),cn=(()=>{class i{_injector=o(J);_viewContainerRef=o(et);_dateAdapter=o(A,{optional:!0});_dir=o(he,{optional:!0});_model=o(qe);_animationsDisabled=Ae();_scrollStrategy=o($n);_inputStateChanges=O.EMPTY;_document=o(He);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new p;monthSelected=new p;viewChanged=new p(!0);dateClass;openedStream=new p;closedStream=new p;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=ba(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=o(we).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new P;_changeDetectorRef=o(V);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof Ma&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Ot(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:n}=this._componentRef;a._animationDone.pipe(Ze(1)).subscribe(()=>{let s=this._document.activeElement;e&&(!s||s===this._document.activeElement||n.nativeElement.contains(s))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Ft(fn,this._viewContainerRef),a=this._overlayRef=gt(this._injector,new ht({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Ca(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(n=>{n&&n.preventDefault(),this.close()}),a.keydownEvents().subscribe(n=>{let s=n.keyCode;(s===38||s===40||s===37||s===39||s===33||s===34)&&n.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||ze(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return ka(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=_t(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",n=this.yPosition==="above"?"bottom":"top",s=n==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:s,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:s},{originX:a,originY:s,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:s}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return $(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Qe(a=>a.keyCode===27&&!q(a)||this.datepickerInput&&q(a,"altKey")&&a.keyCode===38&&t.every(n=>!q(a,n)))))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=te({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",N],disabled:[2,"disabled","disabled",N],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",N],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",N]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[de]})}return i})(),bn=(()=>{class i extends cn{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ia(i)))(a||i)}})();static \u0275cmp=D({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[Ce([un,{provide:cn,useExisting:i}]),je],decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})}return i})(),Te=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}},Gn=(()=>{class i{_elementRef=o(Y);_dateAdapter=o(A,{optional:!0});_dateFormats=o(ne,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new p;dateInput=new p;stateChanges=new P;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=O.EMPTY;_localeSubscription=O.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new Te(this,this._elementRef.nativeElement)),this.dateChange.emit(new Te(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){Qn(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];q(e,"altKey")&&e.keyCode===40&&t.every(n=>!q(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,n=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let s=!this._dateAdapter.sameDate(n,this.value);!n||s?this._cvaOnChange(n):(t&&!this.value&&this._cvaOnChange(n),a!==this._lastValueValid&&this._validatorOnChange()),s&&(this._assignValue(n),this.dateInput.emit(new Te(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Te(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=te({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",N]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[de]})}return i})();function Qn(i,r){let e=Object.keys(i);for(let t of e){let{previousValue:a,currentValue:n}=i[t];if(r.isDateInstance(a)&&r.isDateInstance(n)){if(!r.sameDate(a,n))return!0}else return!0}return!1}var Zn={provide:xa,useExisting:xt(()=>Ct),multi:!0},Jn={provide:Ea,useExisting:xt(()=>Ct),multi:!0},Ct=(()=>{class i extends Gn{_formField=o(Ya,{optional:!0});_closedSubscription=O.EMPTY;_openedSubscription=O.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=g(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Xe.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||i)};static \u0275dir=te({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&h("input",function(s){return a._onInput(s)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(s){return a._onKeydown(s)}),t&2&&(W("disabled",a.disabled),C("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[Ce([Zn,Jn,{provide:Ra,useExisting:i}]),je]})}return i})(),ei=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=te({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),Gt=(()=>{class i{_intl=o(Oe);_changeDetectorRef=o(V);_stateChanges=O.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=o(new oa("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:se(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:se(),a=this.datepicker?$(this.datepicker.openedStream,this.datepicker.closedStream):se();this._stateChanges.unsubscribe(),this._stateChanges=$(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,n){if(t&1&&at(n,ei,5),t&2){let s;E(s=I())&&(a._customIcon=s.first)}},viewQuery:function(t,a){if(t&1&&X(Yn,5),t&2){let n;E(n=I())&&(a._button=n.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&h("click",function(s){return a._open(s)}),t&2&&(C("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),w("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",N],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[de],ngContentSelectors:zn,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(De(Hn),l(0,"button",1,0),x(2,jn,2,0,":svg:svg",2),ue(3),d()),t&2&&(_("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),C("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),c(2),S(a._customIcon?-1:2))},dependencies:[_e],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var vn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=Z({providers:[Oe],imports:[xe,ft,_a,Da,fn,Gt,gn,ke,ut]})}return i})();var ai=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,ni=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Qt(i,r){let e=Array(i);for(let t=0;t<i;t++)e[t]=r(t);return e}var ii=(()=>{class i extends A{_matDateLocale=o(Lt,{optional:!0});constructor(){super();let e=o(Lt,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Qt(12,a=>this._format(t,new Date(2017,a,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Qt(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Qt(7,a=>this._format(t,new Date(2017,0,a+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){let n=this._createDateWithOverflow(e,t,a);return n.getMonth()!=t,n}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let a=new Intl.DateTimeFormat(this.locale,Ge(Ye({},t),{timeZone:"utc"}));return this._format(a,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(ai.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,a,n){let s=this.clone(e);return s.setHours(t,a,n,0),s}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let a=e.trim();if(a.length===0)return null;let n=this._parseTimeString(a);if(n===null){let s=a.replace(/[^0-9:(AM|PM)]/gi,"").trim();s.length>0&&(n=this._parseTimeString(s))}return n||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,a){let n=new Date;return n.setFullYear(e,t,a),n.setHours(0,0,0,0),n}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}_parseTimeString(e){let t=e.toUpperCase().match(ni);if(t){let a=parseInt(t[1]),n=parseInt(t[2]),s=t[3]==null?void 0:parseInt(t[3]),f=t[4];if(a===12?a=f==="AM"?0:a:f==="PM"&&(a+=12),Zt(a,0,23)&&Zt(n,0,59)&&(s==null||Zt(s,0,59)))return this.setTime(this.today(),a,n,s||0)}return null}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();function Zt(i,r,e){return!isNaN(i)&&i>=r&&i<=e}var ri={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var yn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=Z({providers:[si()]})}return i})();function si(i=ri){return[{provide:A,useClass:ii},{provide:ne,useValue:i}]}var mi=(i,r)=>r.value;function ui(i,r){i&1&&(l(0,"mat-error"),m(1,"Title is required"),d())}function pi(i,r){if(i&1&&(l(0,"mat-option",13),m(1),d()),i&2){let e=r.$implicit;_("value",e.value),c(),T(e.label)}}var Mt=class i{task=da(null);close=la();fb=o(Pa);taskService=o(Se);isEditMode=U(()=>!!this.task());priorityOptions=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}];taskForm=this.fb.group({title:["",Xe.required],description:[""],priority:["medium",Xe.required],dueDate:[null]});async ngOnInit(){let r=this.task();r&&this.taskForm.patchValue({title:r.title,description:r.description,priority:r.priority,dueDate:r.dueDate?new Date(r.dueDate):null})}async onSubmit(){if(this.taskForm.invalid){this.taskForm.markAllAsTouched();return}let r=this.taskForm.value,e={title:r.title,description:r.description||"",priority:r.priority||"medium",dueDate:r.dueDate?r.dueDate.toISOString():void 0,completed:this.task()?.completed||!1,createdAt:this.task()?.createdAt||Date.now()};this.task()?await this.taskService.updateTask(this.task().id,e):await this.taskService.addTask(e),this.close.emit(!0)}onCancel(){this.close.emit(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["t-create-task"]],inputs:{task:[1,"task"]},outputs:{close:"close"},decls:37,vars:6,consts:[["picker",""],[1,"create-task-container","bg-white","h-100","df","fd-c"],[1,"df","fd-r","ai-c","jc-s","pt-24","px-24","pb-8",2,"border-bottom","1px solid var(--border-subtle)"],[1,"df","fd-c","gap-2"],[1,"m-0","fw-800","fs-22","text-primary"],[1,"fs-12","text-secondary","fw-500"],["mat-icon-button","","type","button",1,"close-btn",3,"click"],[1,"df","fd-c","gap-5","p-24",2,"overflow-y","auto",3,"ngSubmit","formGroup"],["appearance","outline",1,"w-100"],["matInput","","formControlName","title","placeholder","e.g. Weekly Report"],["matInput","","formControlName","description","placeholder","Add more details...","rows","3"],[1,"df","fd-r","gap-4"],["formControlName","priority"],[3,"value"],["matInput","","formControlName","dueDate",3,"matDatepicker"],["matSuffix","",3,"for"],[1,"mt-auto","pt-24"],["mat-flat-button","","color","primary","type","submit",1,"w-100","p-24","text-bg",2,"height","56px","font-weight","600"]],template:function(e,t){if(e&1&&(l(0,"div",1)(1,"div",2)(2,"div",3)(3,"span",4),m(4),d(),l(5,"span",5),m(6,"Plan your next big thing"),d()(),l(7,"button",6),h("click",function(){return t.onCancel()}),l(8,"mat-icon"),m(9,"close"),d()()(),l(10,"form",7),h("ngSubmit",function(){return t.onSubmit()}),l(11,"mat-form-field",8)(12,"mat-label"),m(13,"Task Title"),d(),y(14,"input",9),x(15,ui,2,0,"mat-error"),d(),l(16,"mat-form-field",8)(17,"mat-label"),m(18,"Description (Optional)"),d(),y(19,"textarea",10),d(),l(20,"div",11)(21,"mat-form-field",8)(22,"mat-label"),m(23,"Priority"),d(),l(24,"mat-select",12),z(25,pi,2,2,"mat-option",13,mi),d()()(),l(27,"mat-form-field",8)(28,"mat-label"),m(29,"Due Date"),d(),y(30,"input",14)(31,"mat-datepicker-toggle",15)(32,"mat-datepicker",null,0),d(),l(34,"div",16)(35,"button",17),m(36),d()()()()),e&2){let a,n=nt(33);c(4),T(t.isEditMode()?"Update Task":"New Task"),c(6),_("formGroup",t.taskForm),c(5),S((a=t.taskForm.get("title"))!=null&&a.touched&&((a=t.taskForm.get("title"))!=null&&a.hasError("required"))?15:-1),c(10),j(t.priorityOptions),c(5),_("matDatepicker",n),c(),_("for",n),c(5),R(" ",t.isEditMode()?"Update Task":"Create Task"," ")}},dependencies:[ot,Fa,Va,Sa,Ia,Ta,Bt,Oa,Wa,ja,Ha,Na,Ba,La,za,Ua,Ka,Xa,xe,ge,_e,ct,dt,vn,bn,Ct,Gt,yn],styles:[".create-task-container[_ngcontent-%COMP%]{overflow-x:hidden}textarea[_ngcontent-%COMP%]{resize:none}.text-bg[_ngcontent-%COMP%]{color:#fff!important}.close-btn[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.dark-theme[_nghost-%COMP%]   .create-task-container[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .create-task-container[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-container-high)!important}"]})};var hi=["mat-menu-item",""],_i=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],gi=["mat-icon, [matMenuItemIcon]","*"];function fi(i,r){i&1&&(oe(),l(0,"svg",2),y(1,"polygon",3),d())}var bi=["*"];function vi(i,r){if(i&1){let e=H();M(0,"div",0),tt("click",function(){b(e);let a=u();return v(a.closed.emit("click"))})("animationstart",function(a){b(e);let n=u();return v(n._onAnimationStart(a.animationName))})("animationend",function(a){b(e);let n=u();return v(n._onAnimationDone(a.animationName))})("animationcancel",function(a){b(e);let n=u();return v(n._onAnimationDone(a.animationName))}),M(1,"div",1),ue(2),k()()}if(i&2){let e=u();ae(e._classList),w("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),W("id",e.panelId),C("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ea=new F("MAT_MENU_PANEL"),$e=(()=>{class i{_elementRef=o(Y);_document=o(He);_focusMonitor=o(Pt);_parentMenu=o(ea,{optional:!0});_changeDetectorRef=o(V);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new P;_focused=new P;_highlighted=!1;_triggersSubmenu=!1;constructor(){o(pe).load(mt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let a=0;a<t.length;a++)t[a].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,a){t&1&&h("click",function(s){return a._checkDisabled(s)})("mouseenter",function(){return a._handleMouseEnter()}),t&2&&(C("role",a.role)("tabindex",a._getTabIndex())("aria-disabled",a.disabled)("disabled",a.disabled||null),w("mat-mdc-menu-item-highlighted",a._highlighted)("mat-mdc-menu-item-submenu-trigger",a._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N]},exportAs:["matMenuItem"],attrs:hi,ngContentSelectors:gi,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,a){t&1&&(De(_i),ue(0),l(1,"span",0),ue(2,1),d(),y(3,"div",1),x(4,fi,2,0,":svg:svg",2)),t&2&&(c(3),_("matRippleDisabled",a.disableRipple||a.disabled)("matRippleTrigger",a._getHostElement()),c(),S(a._triggersSubmenu?4:-1))},dependencies:[va],encapsulation:2,changeDetection:0})}return i})();var yi=new F("MatMenuContent");var Di=new F("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Jt="_mat-menu-enter",kt="_mat-menu-exit",Fe=(()=>{class i{_elementRef=o(Y);_changeDetectorRef=o(V);_injector=o(J);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ae();_allItems;_directDescendantItems=new ra;_classList={};_panelAnimationState="void";_animationDone=new P;_isAnimating=g(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,a=Ye({},this._classList);t&&t.length&&t.split(" ").forEach(n=>{a[n]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(n=>{a[n]=!0}),this._elementRef.nativeElement.className=""),this._classList=a}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new p;close=this.closed;panelId=o(we).getId("mat-menu-panel-");constructor(){let e=o(Di);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ga(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(G(this._directDescendantItems),At(e=>$(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let a=e.toArray(),n=Math.max(0,Math.min(a.length-1,t.activeItemIndex||0));a[n]&&!a[n].disabled?t.setActiveItem(n):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(G(this._directDescendantItems),At(t=>$(...t.map(a=>a._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,a=this._keyManager;switch(t){case 27:q(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&a.setFocusOrigin("keyboard"),a.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ze(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let a=this._keyManager;a.setFocusOrigin(e).setFirstItemActive(),!a.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ge(Ye({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===kt;(t||e===Jt)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Jt||e===kt)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(kt),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Jt:kt)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(G(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-menu"]],contentQueries:function(t,a,n){if(t&1&&at(n,yi,5)(n,$e,5)(n,$e,4),t&2){let s;E(s=I())&&(a.lazyContent=s.first),E(s=I())&&(a._allItems=s),E(s=I())&&(a.items=s)}},viewQuery:function(t,a){if(t&1&&X(Et,5),t&2){let n;E(n=I())&&(a.templateRef=n.first)}},hostVars:3,hostBindings:function(t,a){t&2&&C("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",N],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:N(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ce([{provide:ea,useExisting:i}])],ngContentSelectors:bi,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,a){t&1&&(De(),Tt(0,vi,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Ci=new F("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=o(J);return()=>pt(i)}});var Pe=new WeakMap,Mi=(()=>{class i{_canHaveBackdrop;_element=o(Y);_viewContainerRef=o(et);_menuItemInstance=o($e,{optional:!0,self:!0});_dir=o(he,{optional:!0});_focusMonitor=o(Pt);_ngZone=o(le);_injector=o(J);_scrollStrategy=o(Ci);_changeDetectorRef=o(V);_animationsDisabled=Ae();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=O.EMPTY;_menuCloseSubscription=O.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=o(ea,{optional:!0});this._parentMaterialMenu=t instanceof Fe?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Pe.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let a=Pe.get(t);Pe.set(t,this),a&&a!==this&&a._closeMenu();let n=this._createOverlay(t),s=n.getConfig(),f=s.positionStrategy;this._setPosition(t,f),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,n.hasAttached()||(n.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Fe&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(aa(t.close)).subscribe(()=>{f.withLockedPosition(!1).reapplyLastPosition(),f.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,a=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),a instanceof Fe&&this._ownsMenu(a)?(this._pendingRemoval=a._animationDone.pipe(Ze(1)).subscribe(()=>{t.detach(),Pe.has(a)||a.lazyContent?.detach()}),a._setIsOpen(!1)):(t.detach(),a?.lazyContent?.detach()),a&&this._ownsMenu(a)&&Pe.delete(a),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=gt(this._injector,t),this._overlayRef.keydownEvents().subscribe(a=>{this._menu instanceof Fe&&this._menu._handleKeydown(a)})}return this._overlayRef}_getOverlayConfig(e){return new ht({positionStrategy:_t(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(a=>{this._ngZone.run(()=>{let n=a.connectionPair.overlayX==="start"?"after":"before",s=a.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(n,s)})})}_setPosition(e,t){let[a,n]=e.xPosition==="before"?["end","start"]:["start","end"],[s,f]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[Re,Ne]=[s,f],[Be,wt]=[a,n],Le=0;if(this._triggersSubmenu()){if(wt=a=e.xPosition==="before"?"start":"end",n=Be=a==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let ta=this._parentMaterialMenu.items.first;this._parentInnerPadding=ta?ta._getHostElement().offsetTop:0}Le=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(Re=s==="top"?"bottom":"top",Ne=f==="top"?"bottom":"top");t.withPositions([{originX:a,originY:Re,overlayX:Be,overlayY:s,offsetY:Le},{originX:n,originY:Re,overlayX:wt,overlayY:s,offsetY:Le},{originX:a,originY:Ne,overlayX:Be,overlayY:f,offsetY:-Le},{originX:n,originY:Ne,overlayX:wt,overlayY:f,offsetY:-Le}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),a=this._parentMaterialMenu?this._parentMaterialMenu.closed:se(),n=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Qe(s=>this._menuOpen&&s!==this._menuItemInstance)):se();return $(e,a,n,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Rt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Pe.get(e)===this}_triggerIsAriaDisabled(){return N(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Je()};static \u0275dir=te({type:i})}return i})(),Dn=(()=>{class i extends Mi{_cleanupTouchstart;_hoverSubscription=O.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new p;onMenuOpen=this.menuOpened;menuClosed=new p;onMenuClose=this.menuClosed;constructor(){super(!0);let e=o(ce);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{ma(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ca(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=te({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,a){t&1&&h("click",function(s){return a._handleClick(s)})("mousedown",function(s){return a._handleMousedown(s)})("keydown",function(s){return a._handleKeydown(s)}),t&2&&C("aria-haspopup",a.menu?"menu":null)("aria-expanded",a.menuOpen)("aria-controls",a.menuOpen?a.menu==null?null:a.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[je]})}return i})();var Cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=Z({imports:[ya,ft,ke,ut]})}return i})();function wi(i,r){i&1&&me(0,"div",2)}var Ai=new F("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var kn=(()=>{class i{_elementRef=o(Y);_ngZone=o(le);_changeDetectorRef=o(V);_renderer=o(ce);_cleanupTransitionEnd;constructor(){let e=fa(),t=o(Ai,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Mn(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Mn(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new p;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,a){t&2&&(C("aria-valuenow",a._isIndeterminate()?null:a.value)("mode",a.mode),ae("mat-"+a.color),w("_mat-animation-noopable",a._isNoopAnimation)("mdc-linear-progress--animation-ready",!a._isNoopAnimation)("mdc-linear-progress--indeterminate",a._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Vt],bufferValue:[2,"bufferValue","bufferValue",Vt],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,a){t&1&&(M(0,"div",0),me(1,"div",1),x(2,wi,1,0,"div",2),k(),M(3,"div",3),me(4,"span",4),k(),M(5,"div",5),me(6,"span",4),k()),t&2&&(c(),K("flex-basis",a._getBufferBarFlexBasis()),c(),S(a.mode==="buffer"?2:-1),c(),K("transform",a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Mn(i,r=0,e=100){return Math.max(r,Math.min(e,i))}var wn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=Z({imports:[ke]})}return i})();var Si=(i,r)=>r.title,Ei=(i,r)=>r.id;function Ii(i,r){if(i&1){let e=H();l(0,"t-create-task",28),h("close",function(a){b(e);let n=u();return v(n.onDrawerClose(a))}),d()}if(i&2){let e=u();_("task",e.selectedTask())}}function Ti(i,r){if(i&1&&(l(0,"span",38),m(1),d()),i&2){let e=u().$implicit;c(),T(e.description)}}function Vi(i,r){if(i&1&&(l(0,"div",45)(1,"mat-icon",46),m(2,"event"),d(),l(3,"span"),m(4),d()()),i&2){let e=u().$implicit,t=u(2).getRelativeDate(e.dueDate);w("overdue",t.isOverdue),c(4),T(t.label)}}function Oi(i,r){if(i&1){let e=H();l(0,"div",33)(1,"div",34)(2,"mat-checkbox",35),h("change",function(){let a=b(e).$implicit,n=u(2);return v(n.toggleTask(a))}),d(),l(3,"div",36),h("click",function(){let a=b(e).$implicit,n=u(2);return v(n.editTask(a))}),l(4,"span",37),m(5),d(),x(6,Ti,2,1,"span",38),l(7,"div",39)(8,"span",40),m(9),d(),x(10,Vi,5,3,"div",41),d()(),l(11,"div",42)(12,"button",43),h("click",function(){let a=b(e).$implicit,n=u(2);return v(n.editTask(a))}),l(13,"mat-icon"),m(14,"edit_calendar"),d()(),l(15,"button",44),h("click",function(){let a=b(e).$implicit,n=u(2);return v(n.deleteTask(a))}),l(16,"mat-icon"),m(17,"delete_outline"),d()()()()()}if(i&2){let e=r.$implicit;c(),w("completed",e.completed),c(),_("checked",e.completed),c(3),T(e.title),c(),S(e.description?6:-1);let t=u(2).getPriorityStyles(e.priority);c(2),K("background-color",t.bg)("color",t.color),c(),R(" ",e.priority," "),c(),S(e.dueDate?10:-1)}}function Pi(i,r){if(i&1&&(l(0,"div",26)(1,"div",29)(2,"h3",30),m(3),d(),l(4,"span",31),m(5),d()(),l(6,"div",32),z(7,Oi,18,11,"div",33,Ei),d()()),i&2){let e=r.$implicit;c(3),T(e.title),c(2),T(e.tasks.length),c(2),j(e.tasks)}}function Fi(i,r){if(i&1){let e=H();l(0,"div",27)(1,"div",47)(2,"mat-icon",48),m(3,"assignment"),d()(),l(4,"div",49)(5,"h3",50),m(6,"No tasks found"),d(),l(7,"p",51),m(8,"Keep your focus sharp. Add your first task and start crushing your goals!"),d()(),l(9,"button",52),h("click",function(){b(e);let a=u();return v(a.openCreateDrawer())}),m(10," Create First Task "),d()()}}var An=class i{taskService=o(Se);dialog=o(wa);snackBar=o(qa);tasks=g([]);drawerOpened=g(!1);selectedTask=g(null);sortBy=g("createdAt");completedCount=U(()=>this.tasks().filter(r=>r.completed).length);pendingCount=U(()=>this.tasks().filter(r=>!r.completed).length);totalCount=U(()=>this.tasks().length);completionPercentage=U(()=>{let r=this.totalCount();return r===0?0:this.completedCount()/r*100});sortedTasks=U(()=>{let r=this.sortBy(),e=[...this.tasks()],t={high:3,medium:2,low:1};return e.sort((a,n)=>{if(r==="priority"){let s=t[n.priority]-t[a.priority];if(s!==0)return s}if(r==="dueDate"){if(!a.dueDate&&!n.dueDate)return 0;if(!a.dueDate)return 1;if(!n.dueDate)return-1;let s=new Date(a.dueDate).getTime()-new Date(n.dueDate).getTime();if(s!==0)return s}return n.createdAt-a.createdAt})});groupedTasks=U(()=>{let r=this.sortedTasks(),e=[{title:"Overdue & Today",tasks:[]},{title:"Upcoming",tasks:[]},{title:"No Due Date",tasks:[]},{title:"Completed",tasks:[]}],t=new Date;return t.setHours(0,0,0,0),r.forEach(a=>{if(a.completed){e[3].tasks.push(a);return}if(!a.dueDate){e[2].tasks.push(a);return}let n=new Date(a.dueDate);n.setHours(0,0,0,0),n<=t?e[0].tasks.push(a):e[1].tasks.push(a)}),e.filter(a=>a.tasks.length>0)});async ngOnInit(){await this.loadTasks()}async loadTasks(){let r=await this.taskService.getTasks();this.tasks.set(r)}openCreateDrawer(){this.selectedTask.set(null),this.drawerOpened.set(!0)}editTask(r){this.selectedTask.set(r),this.drawerOpened.set(!0)}async toggleTask(r){await this.taskService.toggleTaskStatus(r.id,r.completed),await this.loadTasks()}async deleteTask(r){this.dialog.open(Ga,{width:"400px",data:{title:"Delete Task",message:`Are you sure you want to delete "${r.title}"?`}}).afterClosed().subscribe(async t=>{t&&(await this.taskService.deleteTask(r.id),await this.loadTasks(),this.snackBar.open("Task deleted","Close",{duration:2e3}))})}onDrawerClose(r){this.drawerOpened.set(!1),r&&this.loadTasks()}getPriorityStyles(r){switch(r){case"high":return{color:"#ef4444",bg:"#fee2e2"};case"medium":return{color:"#f59e0b",bg:"#fef3c7"};case"low":return{color:"#10b981",bg:"#d1fae5"};default:return{color:"#94a3b8",bg:"#f1f5f9"}}}getRelativeDate(r){if(!r)return{label:"",isOverdue:!1};let e=new Date(r),t=new Date;t.setHours(0,0,0,0);let a=new Date(e);a.setHours(0,0,0,0);let n=a.getTime()-t.getTime(),s=Math.ceil(n/(1e3*60*60*24));return s===0?{label:"Today",isOverdue:!1}:s===1?{label:"Tomorrow",isOverdue:!1}:s===-1?{label:"Yesterday",isOverdue:!0}:s<0?{label:`${Math.abs(s)} days ago`,isOverdue:!0}:s<7?{label:`In ${s} days`,isOverdue:!1}:{label:e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),isOverdue:s<0}}getSortLabel(){let r=this.sortBy();return r==="createdAt"?"Date Created":r==="dueDate"?"Due Date":"Priority"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["t-tasks"]],decls:56,vars:11,consts:[["drawer",""],["sortMenu","matMenu"],[1,"tasks-module-container","w-100","h-100",3,"hasBackdrop"],["mode","over","position","end",1,"create-task-drawer",2,"width","80%","max-width","500px",3,"closedStart","opened"],[3,"task"],[1,"p-24","df","fd-c","gap-4"],[1,"df","fd-r","ai-c","jc-s"],[1,"m-0","fs-28","fw-800","text-primary"],["mat-flat-button","","color","primary",1,"br-12","h-48","px-24","fw-600",3,"click"],["iconPositionEnd",""],[1,"summary-card","p-20","br-24","df","gap-2","fd-c"],[1,"df","fd-r","ai-c","jc-s","mb-12"],[1,"df","fd-c"],[1,"fs-12","text-secondary","fw-600","uppercase","ls-1"],[1,"fs-22","fw-800","text-primary"],[1,"fs-14","fw-500","text-secondary"],["mat-stroked-button","",1,"br-12","sort-btn",3,"matMenuTriggerFor"],[1,"custom-sort-menu"],["mat-menu-item","",3,"click"],[1,"progress-wrap"],["mode","determinate",1,"task-progress","h-8","br-4",3,"value"],[1,"df","fd-r","ai-c","gap-12","mt-12"],[1,"stat-badge","pending"],[1,"indicator"],[1,"stat-badge","completed"],[1,"df","fd-c","gap-4","mt-16","pb-48"],[1,"task-group"],[1,"empty-state","p-48","df","fd-c","ai-c","gap-6","b-1-dashed","br-24","bg-white","mt-16"],[3,"close","task"],[1,"df","fd-r","ai-c","gap-3","mb-6","px-4"],[1,"m-0","fs-13","fw-800","uppercase","ls-1","text-secondary","opacity-70"],[1,"group-count","fs-11","fw-700","px-8","py-2","br-12","bg-surface-variant","text-secondary"],[1,"df","fd-c","gap-4"],[1,"task-card-wrapper"],[1,"task-card","df","fd-r","ai-c","gap-2","p-16","br-24","transition-all"],["color","primary",1,"task-checkbox",3,"change","checked"],[1,"df","fd-c","gap-1","flex-1","cursor-pointer","pr-12",3,"click"],[1,"task-title","fs-18","fw-700","transition-all"],[1,"task-desc","fs-13","text-secondary","line-clamp-1"],[1,"df","fd-r","ai-c","gap-4","mt-8"],[1,"priority-badge","fs-11","fw-800","uppercase","ls-1","px-10","py-4","br-8"],[1,"date-badge","df","fd-r","ai-c","gap-1","fs-12","fw-700",3,"overdue"],[1,"task-actions","df","fd-r","ai-c","gap-2"],["mat-icon-button","","title","Edit",3,"click"],["mat-icon-button","","title","Delete",3,"click"],[1,"date-badge","df","fd-r","ai-c","gap-1","fs-12","fw-700"],[2,"font-size","16px","width","16px","height","16px"],[1,"icon-circle","p-24","br-50",2,"background-color","#f1f5f9"],["color","primary",2,"font-size","48px","width","48px","height","48px"],[1,"df","fd-c","ai-c","gap-2","text-center"],[1,"m-0","fs-22","fw-800"],[1,"m-0","text-secondary","max-w-280"],["mat-flat-button","","color","primary",1,"br-16","px-32","h-48","fw-700",3,"click"]],template:function(e,t){if(e&1&&(l(0,"mat-drawer-container",2)(1,"mat-drawer",3,0),h("closedStart",function(){return t.onDrawerClose(!1)}),x(3,Ii,1,1,"t-create-task",4),d(),l(4,"mat-drawer-content")(5,"div",5)(6,"div",6)(7,"h2",7),m(8,"Task Manager"),d(),l(9,"button",8),h("click",function(){return t.openCreateDrawer()}),l(10,"mat-icon",9),m(11,"add"),d(),m(12," New Task "),d()(),l(13,"div",10)(14,"div",11)(15,"div",12)(16,"span",13),m(17,"Tasks Overview"),d(),l(18,"span",14),m(19),l(20,"span",15),m(21,"Tasks Done"),d()()(),l(22,"button",16)(23,"mat-icon"),m(24,"sort"),d(),m(25),d(),l(26,"mat-menu",17,1)(28,"button",18),h("click",function(){return t.sortBy.set("priority")}),l(29,"mat-icon"),m(30,"priority_high"),d(),l(31,"span"),m(32,"Priority"),d()(),l(33,"button",18),h("click",function(){return t.sortBy.set("dueDate")}),l(34,"mat-icon"),m(35,"calendar_today"),d(),l(36,"span"),m(37,"Due Date"),d()(),l(38,"button",18),h("click",function(){return t.sortBy.set("createdAt")}),l(39,"mat-icon"),m(40,"update"),d(),l(41,"span"),m(42,"Date Created"),d()()()(),l(43,"div",19),y(44,"mat-progress-bar",20),d(),l(45,"div",21)(46,"div",22),y(47,"span",23),m(48),d(),l(49,"div",24),y(50,"span",23),m(51),d()()(),l(52,"div",25),z(53,Pi,9,2,"div",26,Si,!1,Fi,11,0,"div",27),d()()()()),e&2){let a=nt(27);_("hasBackdrop",!0),c(),_("opened",t.drawerOpened()),c(2),S(t.drawerOpened()?3:-1),c(16),We("",t.completedCount(),"/",t.totalCount()," "),c(3),_("matMenuTriggerFor",a),c(3),R(" ",t.getSortLabel()," "),c(19),_("value",t.completionPercentage()),c(4),R(" ",t.pendingCount()," Remaining "),c(3),R(" ",t.completedCount()," Done "),c(2),j(t.groupedTasks())}},dependencies:[ot,ct,dt,xe,ge,_e,en,Za,Ja,Qa,an,tn,Aa,$a,Cn,Fe,$e,Dn,wn,kn,Mt],styles:['.tasks-module-container[_ngcontent-%COMP%]{background-color:var(--background-alt)}.summary-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(var(--mat-sys-primary-main),.1);box-shadow:0 8px 32px #0000000d;position:relative;overflow:hidden}.summary-card[_ngcontent-%COMP%]   .task-progress[_ngcontent-%COMP%]{height:6px;background-color:#f1f5f9}.summary-card[_ngcontent-%COMP%]   .task-progress[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner{border-color:var(--mat-sys-primary-main)!important;border-width:6px!important}.stat-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;padding:6px 14px;border-radius:12px}.stat-badge[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%}.stat-badge.pending[_ngcontent-%COMP%]{background-color:#fff7ed;color:#c2410c}.stat-badge.pending[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{background-color:#f97316}.stat-badge.completed[_ngcontent-%COMP%]{background-color:#f0fdf4;color:#15803d}.stat-badge.completed[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{background-color:#22c55e}.sort-btn[_ngcontent-%COMP%]{height:40px!important;border-radius:20px!important;border-color:#e2e8f0!important;color:var(--mat-sys-on-surface-variant)!important;background:#fff!important;font-weight:700!important;font-size:13px!important}.sort-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:4px}.task-group[_ngcontent-%COMP%]{margin-bottom:32px}.task-card[_ngcontent-%COMP%]{background:#fff;box-shadow:0 4px 12px #00000008;border:1px solid rgba(0,0,0,.05);transition:all .3s cubic-bezier(.4,0,.2,1)}.task-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 12px 24px #00000014;border-color:var(--mat-sys-primary-main)}.task-card[_ngcontent-%COMP%]:hover   .action-btn[_ngcontent-%COMP%]{opacity:.8;transform:scale(1)}.task-title[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface);position:relative;display:inline-block;line-height:1.2}.task-title[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:55%;width:0;height:2px;background:currentColor;transition:width .3s ease;opacity:.5}.completed[_ngcontent-%COMP%]{opacity:.6}.completed[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.completed[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]:after{width:100%}.completed[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]{background-color:#f8fafc;box-shadow:none}.task-checkbox[_ngcontent-%COMP%]     .mdc-checkbox__background{border-radius:8px!important;width:24px!important;height:24px!important;border-width:2px!important}.priority-badge[_ngcontent-%COMP%]{border-radius:6px;letter-spacing:.5px}.date-badge[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);display:flex;align-items:center;gap:6px;font-weight:700}.date-badge.overdue[_ngcontent-%COMP%]{color:#ef4444}.action-btn[_ngcontent-%COMP%]{opacity:0;transform:scale(.9);transition:all .2s ease;width:40px!important;height:40px!important;display:flex!important;align-items:center;justify-content:center}.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.action-btn.delete[_ngcontent-%COMP%]{color:var(--mat-sys-error)}.action-btn.edit[_ngcontent-%COMP%]{color:var(--mat-sys-primary-main)}.action-btn[_ngcontent-%COMP%]:hover{opacity:1!important;transform:scale(1.1)!important;background-color:#0000000a}.empty-state[_ngcontent-%COMP%]{border:2px dashed #e2e8f0}.dark-theme[_nghost-%COMP%]   .task-card[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .task-card[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%]{background:var(--mat-sys-surface-container-low);border-color:#ffffff14}.dark-theme[_nghost-%COMP%]   .sort-btn[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .sort-btn[_ngcontent-%COMP%]{background:var(--mat-sys-surface-container-high)!important;border-color:#ffffff1a!important}.dark-theme[_nghost-%COMP%]   .stat-badge.pending[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .stat-badge.pending[_ngcontent-%COMP%]{background-color:#f973161a;color:#fb923c}.dark-theme[_nghost-%COMP%]   .stat-badge.completed[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .stat-badge.completed[_ngcontent-%COMP%]{background-color:#22c55e1a;color:#4ade80}.dark-theme[_nghost-%COMP%]   .task-card[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .task-card[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-surface-container-high)}']})};export{An as Tasks};
