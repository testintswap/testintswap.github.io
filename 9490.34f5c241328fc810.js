"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[9490],{99490:(G,M,a)=>{a.r(M),a.d(M,{PriceRangeModule:()=>I});var g=a(88692),h=a(20092),f=a(7976),s=a(92673),w=a(54121),z=a(61528),S=a(42147),_=a(83151),u=a(9375),l=a(2024),m=a(23815),c=a(41781),t=a(64537),U=a(19376),R=a(96195),x=a(17558),y=a(15372),C=a(83331),O=a(9638),Z=a(93706),v=a(25126),T=a(99369),A=a(87668);function q(i,d){1&i&&(t.TgZ(0,"div",4)(1,"mat-icon",5),t._uU(2,"autorenew"),t.qZA()())}function k(i,d){1&i&&(t.TgZ(0,"span"),t._uU(1,"Revise"),t.qZA())}function F(i,d){1&i&&(t.TgZ(0,"span"),t._uU(1,"Description"),t.qZA())}function L(i,d){1&i&&(t.TgZ(0,"span"),t._uU(1,"Review"),t.qZA())}function N(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",18)(1,"div",19)(2,"div",20)(3,"span",21),t._uU(4,"Min"),t.qZA(),t.TgZ(5,"nz-input-number",22),t.NdJ("ngModelChange",function(r){t.CHM(e);const o=t.oxw(2);return t.KtG(o.updateNewMinPrice(r))}),t.qZA(),t.TgZ(6,"nz-slider",23),t.NdJ("ngModelChange",function(r){t.CHM(e);const o=t.oxw(2);return t.KtG(o.updateNewMinPrice(r))}),t.qZA(),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"mat-icon",24),t._uU(10,"horizontal_rule"),t.qZA(),t.TgZ(11,"div",20)(12,"span",21),t._uU(13,"Max"),t.qZA(),t.TgZ(14,"nz-input-number",22),t.NdJ("ngModelChange",function(r){t.CHM(e);const o=t.oxw(2);return t.KtG(o.updateNewMaxPrice(r))}),t.qZA(),t.TgZ(15,"nz-slider",23),t.NdJ("ngModelChange",function(r){t.CHM(e);const o=t.oxw(2);return t.KtG(o.updateNewMaxPrice(r))}),t.qZA(),t.TgZ(16,"span"),t._uU(17),t.qZA()(),t.TgZ(18,"div",25)(19,"h2"),t._uU(20,"Price/Amount"),t.qZA(),t._UZ(21,"div",26),t.qZA(),t._UZ(22,"div"),t.TgZ(23,"div",25)(24,"h2"),t._uU(25,"Liquidity"),t.qZA(),t._UZ(26,"div",27),t.qZA(),t.TgZ(27,"button",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.goToStep(1))}),t._uU(28,"Next"),t.qZA()()()}if(2&i){const e=t.oxw(2);t.xp6(5),t.Q6J("nzSize","large")("nzMin",1e-4)("nzMax",e.parseFloat(e.formatTokenValue(e.pair.price,"18")))("nzStep",1e-4)("ngModel",e.formatTokenValue(e.newMinPrice,"18"))("nzPrecision",4),t.xp6(1),t.Q6J("ngModel",e.parseFloat(e.formatTokenValue(e.newMinPrice,"18")))("nzMin",1e-4)("nzMax",e.parseFloat(e.formatTokenValue(e.pair.price,"18")))("nzStep",1e-4),t.xp6(2),t.AsE("",1e-4," ~ ",e.parseFloat(e.formatTokenValue(e.pair.price,"18")),""),t.xp6(6),t.Q6J("nzSize","large")("nzMin",e.parseFloat(e.formatTokenValue(e.pair.price,"18")))("nzMax",1e4)("nzStep",1e-4)("ngModel",e.formatTokenValue(e.newMaxPrice,"18"))("nzPrecision",4),t.xp6(1),t.Q6J("ngModel",e.parseFloat(e.formatTokenValue(e.newMaxPrice,"18")))("nzMin",e.parseFloat(e.formatTokenValue(e.pair.price,"18")))("nzMax",1e4)("nzStep",1e-4),t.xp6(2),t.AsE("",e.parseFloat(e.formatTokenValue(e.pair.price,"18"))," ~ ",1e4,""),t.xp6(4),t.Q6J("options",e.chartOption1)("loading",!e.pair),t.xp6(5),t.Q6J("options",e.chartOption2)("loading",!e.pair)}}function J(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",18)(1,"div",29)(2,"div",30),t._uU(3,"Title :"),t.qZA(),t.TgZ(4,"div",31),t._uU(5),t.qZA(),t.TgZ(6,"div",30),t._uU(7,"Description :"),t.qZA(),t.TgZ(8,"div",31)(9,"nz-textarea-count",32)(10,"textarea",33),t.NdJ("ngModelChange",function(r){t.CHM(e);const o=t.oxw(2);return t.KtG(o.description=r)}),t.qZA()()(),t.TgZ(11,"div",30),t._uU(12,"Delay :"),t.qZA(),t.TgZ(13,"div",31),t._uU(14,"3 days"),t.qZA(),t.TgZ(15,"button",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.goToStep(0))}),t._uU(16,"Prev"),t.qZA(),t.TgZ(17,"button",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.goToStep(2))}),t._uU(18,"Next"),t.qZA()()()}if(2&i){const e=t.oxw(2);t.xp6(5),t.AsE("Request Readjust ",e.pair.collection.symbol,"&",e.pair.token.symbol," Price Range "),t.xp6(4),t.Q6J("nzMaxCharacterCount",100),t.xp6(1),t.Q6J("ngModel",e.description)("nzStatus",e.description.length>100?"error":"")}}function Q(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",18)(1,"div",34)(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"div",35),t._uU(5,"Application Date :"),t.qZA(),t.TgZ(6,"div",36),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"div",35),t._uU(10,"Effective Date :"),t.qZA(),t.TgZ(11,"div",36),t._uU(12),t.ALo(13,"date"),t.qZA(),t.TgZ(14,"div",35),t._uU(15,"New Price Range :"),t.qZA(),t.TgZ(16,"div",36),t._uU(17),t.qZA(),t.TgZ(18,"div",35),t._uU(19,"Description :"),t.qZA(),t.TgZ(20,"div",36)(21,"p"),t._uU(22),t.qZA()(),t.TgZ(23,"div",25)(24,"h2"),t._uU(25,"Price/Amount"),t.qZA(),t._UZ(26,"div",26),t.qZA(),t.TgZ(27,"div",25)(28,"h2"),t._uU(29,"Liquidity"),t.qZA(),t._UZ(30,"div",27),t.qZA()(),t.TgZ(31,"div",37)(32,"button",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.goToStep(1))}),t._uU(33,"Prev"),t.qZA(),t.TgZ(34,"button",38),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.applyRequest())}),t._uU(35,"Done"),t.qZA()()()}if(2&i){const e=t.oxw(2);t.xp6(3),t.AsE("Request Readjust ",e.pair.collection.symbol,"&",e.pair.token.symbol," Price Range"),t.xp6(4),t.Oqu(t.xi3(8,11,e.now,"y-M-dd HH:mm:ss")),t.xp6(5),t.Oqu(t.xi3(13,14,e.now+2592e5,"y-M-dd HH:mm:ss")),t.xp6(5),t.AsE("",e.formatTokenValue(e.newMinPrice,"18")," - ",e.formatTokenValue(e.newMaxPrice,"18")," "),t.xp6(5),t.Oqu(e.description||"no description."),t.xp6(4),t.Q6J("options",e.chartOption1)("loading",!e.pair),t.xp6(4),t.Q6J("options",e.chartOption2)("loading",!e.pair)}}function V(i,d){if(1&i&&(t.TgZ(0,"div",6)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"div",7)(4,"div",8),t._uU(5,"Current Price"),t.qZA(),t.TgZ(6,"div",9),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"div",8),t._uU(10,"Current Price Range"),t.qZA(),t.TgZ(11,"div",9),t._uU(12),t.ALo(13,"number"),t.ALo(14,"number"),t.qZA()(),t.TgZ(15,"div",10)(16,"nz-steps",11),t._UZ(17,"nz-step",12)(18,"nz-step",12)(19,"nz-step",12),t.YNc(20,k,2,0,"ng-template",null,13,t.W1O),t.YNc(22,F,2,0,"ng-template",null,14,t.W1O),t.YNc(24,L,2,0,"ng-template",null,15,t.W1O),t.qZA()(),t.ynx(26,16),t.YNc(27,N,29,28,"div",17),t.YNc(28,J,19,5,"div",17),t.YNc(29,Q,36,17,"div",17),t.BQk(),t.qZA()),2&i){const e=t.MAs(21),n=t.MAs(23),r=t.MAs(25),o=t.oxw();t.xp6(2),t.AsE("",o.pair.collection.symbol,"-",o.pair.token.symbol," Price Range Application"),t.xp6(5),t.Oqu(t.xi3(8,13,o.formatTokenValue(o.pair.price,"18"),"1.2-4")),t.xp6(5),t.AsE(" ",t.xi3(13,16,o.formatTokenValue(o.pair.minPrice,"18"),"1.2-4"),"-",t.xi3(14,19,o.formatTokenValue(o.pair.maxPrice,"18"),"1.2-4")," "),t.xp6(4),t.Q6J("nzCurrent",o.stepIndex),t.xp6(1),t.Q6J("nzTitle",e),t.xp6(1),t.Q6J("nzTitle",n),t.xp6(1),t.Q6J("nzTitle",r),t.xp6(7),t.Q6J("ngSwitch",o.stepIndex),t.xp6(1),t.Q6J("ngSwitchCase",0),t.xp6(1),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",2)}}const $=[{path:"",component:(()=>{class i{constructor(e,n,r,o){this.route=e,this.router=n,this.cacheService=r,this.web3Service=o,this.isSpinning=!1,this.isApplying=!1,this.stepIndex=0,this.description="",this.newLiquidity="0",this.newMinPrice="0",this.newMaxPrice="0",this.newQueryMinPrice$=new w.X("0"),this.newQueryMaxPrice$=new w.X("0"),this.isReadjustMinPrice=!0,this.now=(new Date).getTime(),this.chartOption1={tooltip:{trigger:"axis",position:function(p){return{top:"10%",right:"5%"}},valueFormatter:p=>parseFloat(p).toFixed(4)+" "+this.pair?.token.symbol},grid:{left:"5%",right:"5%",bottom:"15%",top:"5%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,min:0,axisLabel:{show:!1},axisTick:{show:!1},data:[]},yAxis:{type:"value",min:0,axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!0},splitLine:{show:!1}},legend:{},dataZoom:[{type:"inside",start:0,end:100},{type:"slider",show:!0,bottom:0,height:20,start:0,end:100,backgroundColor:"rgba(255,255,255,0.1)",fillerColor:"rgba(255,255,255,0)",borderColor:"#FFEAF5",borderRadius:4,brushStyle:{color:"rgba(255,255,255,0)"},selectedDataBackground:{lineStyle:{color:"#ffb6db"},areaStyle:{color:new u.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ffb6db"},{offset:1,color:"#f9d4af"}])}},handleSize:15,brushSelect:!1,dataBackground:{lineStyle:{color:"#fff5f0"},areaStyle:{color:new u.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fff5f0"},{offset:1,color:"#ffffff"}])}}}],series:[{name:"prev Price",type:"line",symbol:"none",itemStyle:{color:"#ffb6db"},areaStyle:{color:new u.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255,182,219,0.3)"},{offset:.8,color:"rgba(249,212,175,0.1)"},{offset:1,color:"rgba(255,255,255,0)"}])},data:[]},{name:"new Price",type:"line",symbol:"none",itemStyle:{color:"#00B6FF"},areaStyle:{color:new u.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00FFF1"},{offset:.8,color:"rgba(180,233,255,0.1)"},{offset:1,color:"rgba(255,255,255,0)"}])},data:[]}]},this.chartOption2={tooltip:{trigger:"axis",position:function(p){return{top:"10%",right:"5%"}},valueFormatter:p=>parseFloat(p).toFixed(4)+" "},grid:{left:"5%",right:"5%",bottom:"2%",top:"10%",containLabel:!0},xAxis:{type:"category",min:0,boundaryGap:!1,axisLabel:{show:!0,formatter:(p,b)=>Math.floor(100*parseFloat(p))/100+""},axisTick:{show:!0}},yAxis:{type:"value",axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!0},splitLine:{show:!1}},legend:{},series:[{name:"prev Liquidity",type:"line",symbol:"none",itemStyle:{color:"#ffb6db"},areaStyle:{color:new u.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255,182,219,0.3)"},{offset:1,color:"rgba(249,212,175,0.8)"}])},data:[]},{name:"new Liquidity",type:"line",symbol:"none",itemStyle:{color:"#00B6FF"},areaStyle:{color:new u.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00FFF1"},{offset:1,color:"rgba(180,233,255,0.8)"}])},data:[]}]}}ngOnInit(){this.pair$=this.route.paramMap.pipe((0,z.w)(e=>{const n=e.get("pairAddress")||void 0;return this.cacheService.getPairByAddress(n)}),(0,S.x)((e,n)=>e?.address==n?.address&&e?.price==n?.price&&e?.virtualLiquidity==n?.virtualLiquidity)),this.sub=this.pair$.subscribe(e=>{this.pair=e,e&&("0"==this.newMinPrice&&"0"==this.newMaxPrice&&(this.newLiquidity=e.virtualLiquidity,this.newMinPrice=e.minPrice,this.newMaxPrice=e.maxPrice,this.calcNewPriceData()),this.calcCurrentPriceData())}),this.subNewQueryMinPrice=this.newQueryMinPrice$.pipe((0,_.b)(500)).subscribe(e=>{if(this.pair&&"0"!=e){this.isSpinning=!0;const n=(0,s.parseUnits)(e,this.pair.token.decimals).toString();this.web3Service.invokeContract("IntswapV1Pair","getNewPriceRangeWithMinSqrtPrice",[(0,c._b)(l.O$.from(n).mul(c.yb)).toString()],this.pair.address).then(r=>{this.newLiquidity=r[0],this.newMinPrice=n,this.newMaxPrice=l.O$.from(r[1]).pow(2).div(c.yb).toString(),this.isReadjustMinPrice=!0,this.calcNewPriceData()}).finally(()=>this.isSpinning=!1)}}),this.subNewQueryMaxPrice=this.newQueryMaxPrice$.pipe((0,_.b)(500)).subscribe(e=>{if(this.pair&&"0"!=e){this.isSpinning=!0;const n=(0,s.parseUnits)(e,this.pair.token.decimals).toString();this.web3Service.invokeContract("IntswapV1Pair","getNewPriceRangeWithMaxSqrtPrice",[(0,c._b)(l.O$.from(n).mul(c.yb)).toString()],this.pair.address).then(r=>{this.newLiquidity=r[0],this.newMinPrice=l.O$.from(r[1]).pow(2).div(c.yb).toString(),this.newMaxPrice=n,this.isReadjustMinPrice=!1,this.calcNewPriceData()}).finally(()=>this.isSpinning=!1)}})}calcCurrentPriceData(){if(this.pair){this.web3Service.invokeContract("IntswapV1Pair","liquidity",[],this.pair.address).then(o=>{console.log(o)}),this.web3Service.invokeContract("IntswapV1Pair","nftVirtualReserve",[],this.pair.address).then(o=>{console.log(o)}),this.web3Service.invokeContract("IntswapV1Pair","baseTokenVirtualReserve",[],this.pair.address).then(o=>{console.log(o)});const e=new Array(2*parseInt((0,s.formatUnits)(this.pair.nftAmount,"18"))).fill(0).map((o,p)=>this.pair?(0,s.formatUnits)(l.O$.from(this.pair.virtualLiquidity).pow(2).mul(c.yb).div(l.O$.from(p+1).mul(c.yb).add(l.O$.from(this.pair.virtualLiquidity).mul(c.yb).div((0,c._b)(l.O$.from(this.pair.maxPrice).mul(c.yb)))).pow(2)).toString(),"18"):"0.0000");this.chartOption1=(0,m.cloneDeep)(this.chartOption1),this.chartOption1.xAxis.data=new Array(2*parseInt((0,s.formatUnits)(this.pair?.nftAmount||0,"18"))).fill(0).map((o,p)=>p+1),this.chartOption1.series[0].data=e,this.chartOption1.series[0].markPoint={symbol:"circle",symbolSize:6,data:[{coord:[parseInt((0,s.formatUnits)(this.pair.nftAmount,"18"))+"",(0,s.formatUnits)(this.pair.price,"18")]}]},this.chartOption1.series[0].markLine={lineStyle:{color:"rgba(255,182,219,0.8)"},symbol:["none","none"],data:[{yAxis:(0,s.formatUnits)(this.pair.price,"18")}],label:{color:"rgba(255,182,219,0.8)",position:"start",formatter:(o,p)=>Math.floor(100*parseFloat(o.value))/100+""}},this.chartOption2=(0,m.cloneDeep)(this.chartOption2);const n=(0,s.formatUnits)(this.pair.maxPrice,"18"),r=(0,s.formatUnits)(this.pair.minPrice,"18");this.chartOption2.xAxis.data=[r,n],this.chartOption2.series[0].data=[[r,(0,s.formatUnits)(this.pair.virtualLiquidity,"18")],[n,(0,s.formatUnits)(this.pair.virtualLiquidity,"18")]]}}calcNewPriceData(){if(this.pair){const e=new Array(2*parseInt((0,s.formatUnits)(this.pair.nftAmount,"18"))).fill(0).map((b,P)=>this.pair?(0,s.formatUnits)(l.O$.from(this.newLiquidity).pow(2).mul(c.yb).div(l.O$.from(P+1).mul(c.yb).add(l.O$.from(this.newLiquidity).mul(c.yb).div((0,c._b)(l.O$.from(this.newMaxPrice).mul(c.yb)))).pow(2)).toString(),"18"):"0.0000");this.chartOption1=(0,m.cloneDeep)(this.chartOption1),this.chartOption1.series[1].data=e,this.chartOption2=(0,m.cloneDeep)(this.chartOption2);const n=(0,s.formatUnits)(this.pair.maxPrice,"18"),r=(0,s.formatUnits)(this.pair.minPrice,"18"),o=(0,s.formatUnits)(this.newMaxPrice,"18"),p=(0,s.formatUnits)(this.newMinPrice,"18");this.chartOption2.xAxis.data=[p,o,n,r].sort((b,P)=>parseFloat(b)-this.parseFloat(P)),this.chartOption2.series[1].data=[[p,(0,s.formatUnits)(this.newLiquidity,"18")],[o,(0,s.formatUnits)(this.newLiquidity,"18")]]}}formatTokenValue(e,n){return(0,s.formatUnits)(e,n)}ngOnDestroy(){this.sub?.unsubscribe(),this.subNewQueryMinPrice?.unsubscribe(),this.subNewQueryMaxPrice?.unsubscribe()}updateNewMinPrice(e){!this.pair||e<parseFloat(this.formatTokenValue(this.pair.price,"18"))&&e>1e-4&&this.newQueryMinPrice$.next(e+"")}updateNewMaxPrice(e){!this.pair||e>parseFloat(this.formatTokenValue(this.pair.price,"18"))&&e<1e4&&this.newQueryMaxPrice$.next(e+"")}parseFloat(e){return parseFloat(e)}goToStep(e){!this.pair||this.newMinPrice==this.pair.minPrice||this.newMaxPrice==this.pair.maxPrice||2==e&&this.description.length>100||(this.stepIndex=e)}applyRequest(){!this.pair||(this.isApplying=!0,this.web3Service.invokeContract("IntswapV1CreatorManager",this.isReadjustMinPrice?"applyUpdatingPriceRangeWithMinSqrtPrice":"applyUpdatingPriceRangeWithMaxSqrtPrice",[this.pair.address,this.isReadjustMinPrice?(0,c._b)(l.O$.from(this.newMinPrice).mul(c.yb)).toString():(0,c._b)(l.O$.from(this.newMaxPrice).mul(c.yb)).toString(),`Request Readjust ${this.pair.collection.symbol}&${this.pair.token.symbol} Price Range`,this.description]).then(e=>{this.router.navigate(["app/proposal/",this.pair.address])}).finally(()=>this.isApplying=!1))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.gz),t.Y36(f.F0),t.Y36(U.Q),t.Y36(R.U))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-price-range"]],decls:5,vars:4,consts:[[3,"nzSpinning","nzIndicator","nzDelay"],["indicatorTemplate",""],[1,"page-range-wrapper"],["class","page-range-card",4,"ngIf"],[2,"display","flex","width","100vw","height","90vh","position","fixed","align-items","center","justify-content","center"],["color","primary",1,"spin-icon"],[1,"page-range-card"],[1,"pair-info"],[1,"info-label"],[1,"info-value"],[1,"stepper"],["nzLabelPlacement","vertical",3,"nzCurrent"],[3,"nzTitle"],["title1",""],["title2",""],["title3",""],[3,"ngSwitch"],["class","step-content",4,"ngSwitchCase"],[1,"step-content"],[1,"revise-card"],[1,"input-wrapper"],[1,"input-label"],["nzBorderless","","nzPrecisionMode","cut",1,"nft-input",3,"nzSize","nzMin","nzMax","nzStep","ngModel","nzPrecision","ngModelChange"],[1,"nft-slider",3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],["color","primary"],[1,"chart"],["echarts","",1,"price-volume-chart",3,"options","loading"],["echarts","",1,"liquidity-price-chart",3,"options","loading"],["mat-button","",1,"step-btn",3,"click"],[1,"description-step"],[1,"description-label"],[1,"description-value"],[3,"nzMaxCharacterCount"],["rows","3","nz-input","",3,"ngModel","nzStatus","ngModelChange"],[1,"review-step"],[1,"review-label"],[1,"review-value"],[2,"display","flex","flex-direction","row","justify-content","center","align-items","center","margin-top","24px"],["mat-button","",1,"step-btn",2,"margin-left","24px",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"nz-spin",0),t.YNc(1,q,3,0,"ng-template",null,1,t.W1O),t.TgZ(3,"div",2),t.YNc(4,V,30,22,"div",3),t.qZA()()),2&e){const r=t.MAs(2);t.Q6J("nzSpinning",n.isSpinning||n.isApplying)("nzIndicator",r)("nzDelay",200),t.xp6(4),t.Q6J("ngIf",n.pair)}},dependencies:[g.O5,g.RF,g.n9,x.iy,x.$W,y.jS,h.Fj,h.JJ,h.On,C.Hw,O.lW,Z._V,v.w,v.Zp,T.W,A._w,g.JJ,g.uU],styles:[".page-range-wrapper[_ngcontent-%COMP%]{padding:12px 25%;width:100vw;box-sizing:border-box}.page-range-card[_ngcontent-%COMP%]{position:relative;background:#fff;min-height:40vh;border-radius:8px;box-shadow:0 2px 4px -1px #0003;box-sizing:border-box;width:100%;margin-bottom:24px;overflow:hidden}.page-range-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:bolder;width:100%;text-align:center;padding:12px 0;color:#fff;background:linear-gradient(45deg,#ff8bc7 0%,#ffe3af 100%)}.divider[_ngcontent-%COMP%]{height:2px;width:100%;background:linear-gradient(90deg,#ff8bc7 0%,#ffe3af 100%);margin-bottom:12px}.pair-info[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;width:80%;font-size:18px;padding:12px 0;margin:auto}.info-label[_ngcontent-%COMP%]{font-weight:700}.info-value[_ngcontent-%COMP%]{justify-self:end}.stepper[_ngcontent-%COMP%]{width:100%;padding:12px 0}.step-content[_ngcontent-%COMP%]{min-height:20vh;width:100%;padding:12px}.input-wrapper[_ngcontent-%COMP%]{position:relative;min-height:96px;width:100%;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s;display:grid;grid-template-columns:1fr;column-gap:12px;justify-items:center;align-items:center;box-sizing:border-box;padding:12px 12px 0}.input-wrapper[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.input-wrapper[_ngcontent-%COMP%]:hover   .input-label[_ngcontent-%COMP%]{border:2px solid rgba(228,178,201,.4)}.input-label[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;left:12px;top:-18px;color:#ff5fb7;font-weight:bolder;font-size:18px;background:rgb(251,251,251);border-radius:16px;padding:0 12px;border:2px solid rgba(228,178,201,.24);transition:all .2s}[_nghost-%COMP%]     .ant-input-number-handler{border:none!important}[_nghost-%COMP%]     .ant-input-number-disabled{background:transparent}[_nghost-%COMP%]     .ant-input-number-focused, [_nghost-%COMP%]     .ant-input-number:hover, [_nghost-%COMP%]     .ant-input-focused, [_nghost-%COMP%]     .ant-input:hover, [_nghost-%COMP%]     .ant-input:focus{border-color:#fde}[_nghost-%COMP%]     .ant-input-number-focused, [_nghost-%COMP%]     .ant-input{box-shadow:0 0 0 2px #dfbbcc33}.nft-input[_ngcontent-%COMP%]{width:100%;font-size:28px;color:#7f7f7f}.nft-slider[_ngcontent-%COMP%]{width:100%;margin:0 24px 0 36px}[_nghost-%COMP%]     .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open){border-color:#ffe6b8}[_nghost-%COMP%]     .ant-slider-track{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}[_nghost-%COMP%]     .ant-slider-handle{border:2px solid #ffa3da}.revise-card[_ngcontent-%COMP%]{padding:12px 24px;width:100%;display:grid;grid-template-columns:1fr 40px 1fr;justify-items:center;align-items:center;row-gap:12px}.revise-card[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{grid-column-start:span 3;border-radius:8px;overflow:hidden;border:1px solid #f7d8fd;padding:12px;width:100%}.revise-card[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .liquidity-price-chart[_ngcontent-%COMP%], .revise-card[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .price-volume-chart[_ngcontent-%COMP%]{width:100%;height:30vh}.revise-card[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%]{grid-column-start:span 3}.step-btn[_ngcontent-%COMP%]{text-align:center;width:120px;min-height:40px;border-radius:16px;background:linear-gradient(45deg,#ffb6db 0%,#fadba2 100%);color:#fff;font-size:18px;line-height:18px;font-weight:bolder;margin-bottom:12px}.description-step[_ngcontent-%COMP%]{width:100%;padding:12px 10%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;justify-items:center;align-items:center;row-gap:12px;column-gap:12px}.description-step[_ngcontent-%COMP%]   .description-label[_ngcontent-%COMP%]{width:100%;text-align:right;font-weight:700;align-self:start}.description-step[_ngcontent-%COMP%]   .description-value[_ngcontent-%COMP%]{grid-column-start:span 3;justify-self:start;width:100%;word-break:break-word}.description-step[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%]{grid-column-start:span 2}.review-step[_ngcontent-%COMP%]{width:80%;margin:auto;padding:12px 10%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;justify-items:center;align-items:center;row-gap:12px;column-gap:12px;border-radius:16px;border:2px solid rgba(228,178,201,.24)}.review-step[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{grid-column-start:span 4;text-align:center;font-size:24px;font-weight:bolder}.review-step[_ngcontent-%COMP%]   .review-label[_ngcontent-%COMP%]{width:100%;text-align:right;font-weight:700;align-self:start}.review-step[_ngcontent-%COMP%]   .review-value[_ngcontent-%COMP%]{grid-column-start:span 3;justify-self:start;width:80%;word-break:break-word}.review-step[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%]{grid-column-start:span 2}.review-step[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{grid-column-start:span 4;padding:12px;width:100%}.review-step[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .liquidity-price-chart[_ngcontent-%COMP%], .review-step[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .price-volume-chart[_ngcontent-%COMP%]{width:100%;height:30vh}.spin-icon[_ngcontent-%COMP%]{transform:rotate(45deg);animation:rotate 1.2s infinite linear}@keyframes rotate{to{transform:rotate(405deg)}}"]}),i})()}];let D=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.Bz.forChild($),f.Bz]}),i})();var j=a(83114);let I=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,D,j.H0,x.N6,y.N3,h.u5,C.Ps,O.ot,Z.Zf,v.o7,T.j,A.Ns.forChild()]}),i})()}}]);