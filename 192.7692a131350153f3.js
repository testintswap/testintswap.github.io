"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[192,9369],{41621:(V,w,s)=>{s.d(w,{D:()=>y});var u=s(32085),a=s(408),C=s(28499),g=s(75955);function y(S){return(0,u.e)((k,_)=>{let m=!1,b=null,n=null;const T=()=>{if(n?.unsubscribe(),n=null,m){m=!1;const h=b;b=null,_.next(h)}};k.subscribe((0,C.x)(_,h=>{n?.unsubscribe(),m=!0,b=h,n=(0,C.x)(_,T,a.Z),(0,g.Xf)(S(h)).subscribe(n)},()=>{T(),_.complete()},void 0,()=>{b=n=null}))})}},20192:(V,w,s)=>{s.r(w),s.d(w,{SwapModule:()=>sn});var u=s(88692),a=s(7976),C=s(8239),g=s(2024),y=s(54121),S=s(61528),k=s(42147),_=s(83151),m=s(92673),b=s(62686),n=s(64537),T=s(88696),h=s(19376),z=s(3755),A=s(94602),D=s(96195),Z=s(83331),I=s(9638),P=s(93706),M=s(20092),N=s(50132),U=s(15372),O=s(99369),E=s(53863);function B(i,l){1&i&&n.GkF(0)}function r(i,l){1&i&&n.GkF(0)}function f(i,l){1&i&&(n.TgZ(0,"div",22)(1,"mat-icon",23),n._uU(2,"autorenew"),n.qZA()())}function p(i,l){1&i&&(n.TgZ(0,"mat-icon",27),n._uU(1,"autorenew "),n.qZA())}function d(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"button",25),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2),c=n.MAs(57);return n.KtG(o.openConfirmDialog(c))}),n.YNc(1,p,2,0,"mat-icon",26),n._uU(2,"Swap "),n.qZA()}if(2&i){const t=n.oxw(2);n.Q6J("disabled",t.parseInt(t.nftValue)<=0||t.isQuerying||t.isSwapping||t.isLoadingSwapInfo),n.xp6(1),n.Q6J("ngIf",t.isQuerying||t.isSwapping||t.isLoadingSwapInfo)}}function x(i,l){1&i&&(n.TgZ(0,"button",28),n._uU(1,"Insufficient Balance"),n.qZA()),2&i&&n.Q6J("disabled",!0)}function F(i,l){1&i&&(n.TgZ(0,"mat-icon",27),n._uU(1,"autorenew"),n.qZA())}function Q(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"button",25),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.approveToken())}),n.YNc(1,F,2,0,"mat-icon",29),n._uU(2,"Approve Token "),n.qZA()}if(2&i){const t=n.oxw(2);n.Q6J("disabled",t.isQuerying),n.xp6(1),n.Q6J("ngIf",t.isQuerying)}}function J(i,l){1&i&&(n.TgZ(0,"mat-icon",27),n._uU(1,"autorenew"),n.qZA())}function L(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"button",25),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.approveNft())}),n.YNc(1,J,2,0,"mat-icon",26),n._uU(2,"Approve NFTs "),n.qZA()}if(2&i){const t=n.oxw(2);n.Q6J("disabled",t.isQuerying),n.xp6(1),n.Q6J("ngIf",t.isQuerying)}}function Y(i,l){if(1&i&&(n.ynx(0),n.YNc(1,d,3,2,"button",24),n.YNc(2,x,2,1,"button",18),n.YNc(3,Q,3,2,"button",24),n.YNc(4,L,3,2,"button",24),n.BQk()),2&i){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.isApproved&&(0==t.mode&&t.parseFloat(t.tokenValue)<=t.parseFloat(t.userTokenBalance)||1==t.mode&&t.parseInt(t.nftValue)<=t.userNftBalance)),n.xp6(1),n.Q6J("ngIf",t.isApproved&&(0==t.mode&&t.parseFloat(t.tokenValue)>t.parseFloat(t.userTokenBalance)||1==t.mode&&t.parseInt(t.nftValue)>t.userNftBalance)),n.xp6(1),n.Q6J("ngIf",0==t.mode&&!t.isApproved),n.xp6(1),n.Q6J("ngIf",1==t.mode&&!t.isApproved)}}function j(i,l){1&i&&(n.TgZ(0,"button",28),n._uU(1,"Invalid Pair"),n.qZA()),2&i&&n.Q6J("disabled",!0)}function R(i,l){1&i&&(n.TgZ(0,"mat-icon",42),n._uU(1," check_circle "),n.qZA())}const $=function(i){return{"selected-tokenId":i}};function K(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"div",39),n.NdJ("click",function(){const c=n.CHM(t).$implicit,v=n.oxw(3);return n.KtG(v.addOrRemoveTokenId(v.hexToString(c.id.tokenId)))}),n.YNc(1,R,2,0,"mat-icon",40),n._UZ(2,"img",41),n.TgZ(3,"div"),n._uU(4),n.qZA()()}if(2&i){const t=l.$implicit,e=n.oxw(3);n.Q6J("ngClass",n.VKq(6,$,e.isSelectedTokenId(e.hexToString(t.id.tokenId)))),n.xp6(1),n.Q6J("ngIf",e.isSelectedTokenId(e.hexToString(t.id.tokenId))),n.xp6(1),n.Q6J("lazyLoad",null!=t&&null!=t.media&&null!=t.media[0]&&t.media[0].gateway?t.media[0].gateway:"/assets/imgs/mockNft.png")("defaultImage","/assets/imgs/mockNft.png")("alt",t.title),n.xp6(2),n.Oqu("#"+e.hexToString(t.id.tokenId))}}function W(i,l){if(1&i&&(n.TgZ(0,"div",37),n.YNc(1,K,5,8,"div",38),n.qZA()),2&i){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",1==t.mode?t.userNftList:t.poolNftList)("ngForTrackBy",t.trackByNftItems)}}function q(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"div",30)(1,"nz-input-number",31),n.NdJ("ngModelChange",function(o){n.CHM(t);const c=n.oxw();return n.KtG(c.nftValue=o)})("ngModelChange",function(o){n.CHM(t);const c=n.oxw();return n.KtG(c.updateTokenValue(o))}),n.qZA(),n.TgZ(2,"div",32),n.NdJ("click",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.openSearchTokenOrCollectionDialog(1))}),n._UZ(3,"img",33)(4,"div",4),n.TgZ(5,"span"),n._uU(6),n.qZA(),n._UZ(7,"div",4),n.qZA(),n.TgZ(8,"nz-slider",34),n.NdJ("ngModelChange",function(o){n.CHM(t);const c=n.oxw();return n.KtG(c.nftValue=o)})("ngModelChange",function(o){n.CHM(t);const c=n.oxw();return n.KtG(c.updateTokenValue(o))}),n.qZA(),n.TgZ(9,"div",35),n._uU(10),n.qZA()(),n.YNc(11,W,2,2,"ng-template",null,36,n.W1O)}if(2&i){const t=n.MAs(12),e=n.oxw();n.Q6J("nzPopoverContent",t)("nzPopoverVisible",(1==e.mode?e.userNftBalance:e.poolNftBalance)>0&&e.showPopover)("nzPopoverTrigger",null),n.xp6(1),n.Q6J("nzSize","large")("nzMin",0)("ngModel",e.nftValue)("nzPrecision",0),n.xp6(5),n.Oqu((null==e.pair||null==e.pair.collection?null:e.pair.collection.symbol)||e.collectionSymbol||"Select"),n.xp6(2),n.Q6J("ngModel",e.nftValue)("nzMax",1==e.mode?e.userNftBalance:e.poolNftBalance),n.xp6(2),n.hij("NFTs: ",1==e.mode?e.userNftBalance:e.poolNftBalance," ")}}function G(i,l){if(1&i&&(n.TgZ(0,"div",46),n._uU(1),n.ALo(2,"number"),n.qZA()),2&i){const t=n.oxw(2);n.xp6(1),n.hij("Balance: ",n.xi3(2,1,t.userTokenBalance,"1.2-4")," ")}}function H(i,l){1&i&&n._UZ(0,"div",46)}function X(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"div",43)(1,"nz-input-number",44),n.NdJ("ngModelChange",function(o){n.CHM(t);const c=n.oxw();return n.KtG(c.tokenValue=o)}),n.qZA(),n.TgZ(2,"div",32),n.NdJ("click",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.openSearchTokenOrCollectionDialog(0))}),n._UZ(3,"img",33)(4,"div",4),n.TgZ(5,"span"),n._uU(6),n.qZA(),n._UZ(7,"div",4),n.qZA(),n.YNc(8,G,3,4,"div",45),n.YNc(9,H,1,0,"div",45),n.qZA()}if(2&i){const t=n.oxw();n.xp6(1),n.Q6J("nzSize","large")("nzMin",0)("ngModel",t.tokenValue)("nzDisabled",!0),n.xp6(5),n.Oqu((null==t.pair||null==t.pair.token?null:t.pair.token.symbol)||t.tokenSymbol||"Select"),n.xp6(2),n.Q6J("ngIf",0==t.mode),n.xp6(1),n.Q6J("ngIf",1==t.mode)}}function nn(i,l){1&i&&(n.TgZ(0,"mat-icon",50),n._uU(1,"autorenew "),n.qZA())}function tn(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"div",47)(1,"span",13),n._uU(2,"Confirm"),n.qZA(),n._UZ(3,"div",14),n.TgZ(4,"span",15),n._uU(5),n.qZA(),n.TgZ(6,"span",16),n._uU(7),n.qZA(),n.TgZ(8,"span",15),n._uU(9,"Slippage :"),n.qZA(),n.TgZ(10,"span",16),n._uU(11),n.ALo(12,"number"),n.qZA(),n.TgZ(13,"span",15),n._uU(14,"Royalty :"),n.qZA(),n.TgZ(15,"span",16),n._uU(16),n.ALo(17,"number"),n.qZA(),n.TgZ(18,"span",15),n._uU(19,"Trade fee :"),n.qZA(),n.TgZ(20,"span",16),n._uU(21),n.ALo(22,"number"),n.qZA(),n.TgZ(23,"span",15),n._uU(24),n.qZA(),n.TgZ(25,"span",16),n._uU(26),n.ALo(27,"number"),n.qZA(),n.TgZ(28,"button",48),n.NdJ("click",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.confirmSwap())}),n.YNc(29,nn,2,0,"mat-icon",49),n._uU(30,"Swap "),n.qZA()()}if(2&i){const t=n.oxw();n.xp6(5),n.hij("You want to ",0==t.mode?"buy":"sell"," :"),n.xp6(2),n.AsE("",t.nftValue," ",null==t.pair||null==t.pair.collection?null:t.pair.collection.symbol,""),n.xp6(4),n.hij("",n.xi3(12,13,t.slippage,"1.2-2")," %"),n.xp6(5),n.AsE("",n.xi3(17,16,t.royalty,"1.2-4")," ",null==t.pair||null==t.pair.token?null:t.pair.token.symbol,""),n.xp6(5),n.AsE("",n.xi3(22,19,t.fee,"1.2-4")," ",null==t.pair||null==t.pair.token?null:t.pair.token.symbol,""),n.xp6(3),n.hij("Total ",0==t.mode?"Cost":"Receive"," :"),n.xp6(2),n.AsE("",n.xi3(27,22,t.tokenValue,"1.2-4")," ",null==t.pair||null==t.pair.token?null:t.pair.token.symbol,""),n.xp6(2),n.Q6J("disabled",!t.pair&&t.parseInt(t.nftValue)<=0||t.isQuerying||t.isSwapping),n.xp6(1),n.Q6J("ngIf",t.isQuerying||t.isSwapping)}}const en=[{path:"",component:(()=>{class i{constructor(t,e,o,c,v,an,rn,ln){this.location=t,this.route=e,this.router=o,this.matDialog=c,this.cacheService=v,this.httpService=an,this.accountService=rn,this.web3Service=ln,this.mode=0,this.nftValue="0",this.tokenValue="0",this.userNftBalance=0,this.userTokenBalance="0",this.userNftList=[],this.poolNftBalance=0,this.poolNftList=[],this.slippage="0",this.royalty="0",this.fee="0",this.isLoadingSwapInfo=!0,this.isApproved=!1,this.isQuerying=!0,this.isSwapping=!1,this.selectedTokenIds=[],this.showPopover=!0,this.queryNftValue$=new y.X("0")}ngOnInit(){var t=this;this.pair$=this.route.paramMap.pipe((0,S.w)(e=>(this.nftAddress=e.get("nftAddress")||void 0,this.baseTokenAddress=e.get("baseTokenAddress")||void 0,this.cacheService.getPairAddress(this.nftAddress,this.baseTokenAddress))),(0,k.x)((e,o)=>e?.address==o?.address&&e?.price==o?.price&&e?.nftAmount==o?.nftAmount)),this.sub=this.pair$.subscribe(function(){var e=(0,C.Z)(function*(o){t.pair=o,o?(t.tokenSymbol=o.token.symbol,t.collectionSymbol=o.collection.symbol,t.baseTokenDecimals=o.token.decimals):(t.tokenSymbol=t.baseTokenAddress&&(yield t.web3Service.getTokenSymbol(t.baseTokenAddress))[0],t.collectionSymbol=t.nftAddress&&(yield t.web3Service.getTokenSymbol(t.nftAddress))[0],t.baseTokenDecimals=t.baseTokenAddress&&(yield t.web3Service.getTokenDecimals(t.baseTokenAddress))[0]),t.fetchUserNFTs(),t.fetchPoolNFTs(),t.fetchUserTokenBalance()});return function(o){return e.apply(this,arguments)}}()),this.queryNftValueSub=this.queryNftValue$.pipe((0,_.b)(500),(0,S.w)(e=>this.pair&&parseInt(this.nftValue)>0?(this.isLoadingSwapInfo=!0,this.web3Service.invokeContract("IntswapV1Pair",0==this.mode?"getBuyQuotoInfo":"getSellQuotoInfo",[e],this.pair.address).then(o=>({baseTokenAmount:o[0],newPrice:g.O$.from(o[1]).pow(2).div(g.O$.from("10").pow(this.pair?.token.decimals||"18")).toString(),tradingFee:o[2],royaltyAmount:o[3]}))):Promise.resolve({baseTokenAmount:"0",newPrice:"0",tradingFee:"0",royaltyAmount:"0"}))).subscribe(e=>{if(this.pair&&parseInt(this.nftValue)>0){const o=g.O$.from(this.pair.price).div(g.O$.from("100000000000000")).toNumber();this.tokenValue=this.formatTokenValue(e.baseTokenAmount,this.pair.token.decimals||"18"),this.slippage=(100*Math.abs(g.O$.from(e.newPrice).div(g.O$.from("100000000000000")).toNumber()-o)/o).toFixed(2),this.royalty=this.formatTokenValue(e.royaltyAmount,this.pair?.token.decimals||"18"),this.fee=this.formatTokenValue(e.tradingFee,this.pair.token.decimals||"18")}this.isLoadingSwapInfo=!1})}fetchUserTokenBalance(){this.accountBalanceSub?.unsubscribe(),this.accountBalanceSub=this.accountService.account$.subscribe(t=>{t&&this.baseTokenAddress&&this.web3Service.invokeContract("ERC20","balanceOf",[t],this.baseTokenAddress).then(e=>{this.baseTokenDecimals&&(this.userTokenBalance=this.formatTokenValue(e[0],this.baseTokenDecimals),this.fetchAllowance())})})}updateTokenValue(t){t>=0&&(this.queryNftValue$.next(t),this.updateSelectedTokenIds(t)),0==t&&(this.nftValue="0",this.tokenValue="0",this.slippage="0.00",this.royalty="0",this.fee="0")}updateSelectedTokenIds(t){this.selectedTokenIds=(1==this.mode?this.userNftList:this.poolNftList).slice(0,t).map(e=>this.hexToString(e.id.tokenId))}isSelectedTokenId(t){return this.selectedTokenIds.includes(t)}addOrRemoveTokenId(t){this.isSelectedTokenId(t)?this.selectedTokenIds.splice(this.selectedTokenIds.indexOf(t),1):this.selectedTokenIds.push(t),this.nftValue=this.selectedTokenIds.length+"",this.queryNftValue$.next(this.nftValue),0==this.selectedTokenIds.length&&(this.nftValue="0",this.tokenValue="0",this.slippage="0.00",this.royalty="0",this.fee="0")}formatTokenValue(t,e){return(0,m.formatUnits)(t,e)}fetchUserNFTs(){this.accountNFTsSub?.unsubscribe(),this.accountNFTsSub=this.accountService.account$.subscribe(t=>{t&&this.nftAddress&&this.httpService.fetchNFTsOfCollectionByOwnerAddress(t,this.nftAddress,!0).then(e=>{this.userNftList=e.ownedNfts,this.userNftBalance=e.totalCount})})}fetchPoolNFTs(){this.pair&&this.httpService.fetchNFTsOfCollectionByOwnerAddress(this.pair.address,this.pair.collection.address,!0).then(t=>{if(this.poolNftList=t.ownedNfts,this.poolNftBalance=t.totalCount,0==this.mode){const o=this.route.snapshot.queryParams.prevSelectTokenId;o&&!this.isSelectedTokenId(o)&&(this.selectedTokenIds.push(o),this.nftValue=this.selectedTokenIds.length+"",this.queryNftValue$.next(this.nftValue))}})}trackByNftItems(t,e){return e.contract.address+""+e.id.tokenId}parseInt(t){return parseInt(t)}parseFloat(t){return parseFloat(t)}goBack(){this.location.back()}switchMode(){this.mode=1==this.mode?0:1,this.nftValue="0",this.tokenValue="0",this.slippage="0.00",this.royalty="0",this.fee="0",this.selectedTokenIds=[],this.fetchAllowance()}fetchAllowance(){this.isQuerying=!0,this.accountAllowanceSub?.unsubscribe(),this.accountAllowanceSub=this.accountService.account$.subscribe(t=>{t&&this.pair&&(0==this.mode?this.web3Service.invokeContract("ERC20","allowance",[t,this.pair.address],this.pair.token.address).then(e=>this.isApproved=g.O$.from(e[0]).gte(g.O$.from((0,m.parseUnits)(this.userTokenBalance,this.pair?.token.decimals)))).finally(()=>this.isQuerying=!1):this.web3Service.invokeContract("ERC721","isApprovedForAll",[t,this.pair.address],this.pair.collection.address).then(e=>this.isApproved=e[0]).finally(()=>this.isQuerying=!1))})}hexToString(t){return g.O$.from(t).toString()}openConfirmDialog(t){this.confirmDialog=this.matDialog.open(t,{autoFocus:!1})}confirmSwap(){this.confirmDialog&&(this.confirmDialog.disableClose=!0),this.pair&&(this.isSwapping=!0,this.web3Service.invokeContract("IntswapV1Pair",0==this.mode?"buySpecificNFTs":"sellSpecificNFTs",[this.selectedTokenIds,(0,m.parseUnits)(this.tokenValue,this.pair.token.decimals).toString()],this.pair.address).then(t=>{this.confirmDialog?.close(),this.nftValue="0",this.tokenValue="0",this.slippage="0.00",this.royalty="0",this.fee="0",this.fetchUserNFTs(),this.fetchPoolNFTs(),this.fetchUserTokenBalance()}).finally(()=>{this.confirmDialog&&(this.confirmDialog.disableClose=!1),this.isSwapping=!1,this.selectedTokenIds=[]}))}approveToken(){this.pair&&(this.isQuerying=!0,this.web3Service.invokeContract("ERC20","approve",[this.pair.address,b.fV],this.pair.token.address).then(()=>this.isApproved=!0).finally(()=>this.isQuerying=!1))}approveNft(){this.pair&&(this.isQuerying=!0,this.web3Service.invokeContract("ERC721","setApprovalForAll",[this.pair.address,"true"],this.pair.collection.address).then(()=>this.isApproved=!0).finally(()=>this.isQuerying=!1))}openSearchTokenOrCollectionDialog(t){s.e(8592).then(s.bind(s,92928)).then(({SearchTokenDialogComponent:e})=>{this.showPopover=!1;const o=this.matDialog.open(e);o.componentInstance.tokenType=t,o.afterClosed().subscribe(c=>{if(this.showPopover=!0,c)switch(t){case 0:this.switchToken(c.address,c.symbol,c.decimals);break;case 1:this.switchNft(c.address,c.symbol)}})})}switchNft(t,e){t&&this.router.navigate(this.baseTokenAddress?["app/swap/",t,this.baseTokenAddress]:["app/swap/",t]),this.collectionSymbol=e}switchToken(t,e,o){this.baseTokenAddress=t,this.tokenSymbol=e,this.baseTokenDecimals=o}ngOnDestroy(){this.sub?.unsubscribe(),this.queryNftValueSub?.unsubscribe(),this.accountBalanceSub?.unsubscribe(),this.accountAllowanceSub?.unsubscribe(),this.accountNFTsSub?.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(u.Ye),n.Y36(a.gz),n.Y36(a.F0),n.Y36(T.uw),n.Y36(h.Q),n.Y36(z.O),n.Y36(A.B),n.Y36(D.U))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-swap"]],decls:58,vars:30,consts:[[1,"card-wrapper"],[1,"card-header"],[1,"back-btn"],["mat-icon-button","",3,"click"],[1,"spacer"],[1,"card-title"],[1,"setting-btn"],[1,"divider"],[4,"ngTemplateOutlet"],[1,"switch-icon"],[3,"nzIndicator","nzDelay","nzSpinning"],["indicatorTemplate",""],[1,"swap-info"],[2,"min-height","24px","font-size","24px","font-weight","bolder","color","rgb(87, 87, 87)","grid-column-start","span 2"],[1,"result-divider"],[1,"swap-info-label"],[1,"swap-info-value"],[4,"ngIf"],["mat-button","","class","swap-btn",3,"disabled",4,"ngIf"],["nftInputTemplate",""],["tokenInputTemplate",""],["confirm",""],[2,"display","flex","width","100%","height","100%","align-items","center","justify-content","center"],["color","primary",1,"spin-icon"],["mat-button","","class","swap-btn",3,"disabled","click",4,"ngIf"],["mat-button","",1,"swap-btn",3,"disabled","click"],["color","warn","class","spin-icon querying-icon",4,"ngIf"],["color","warn",1,"spin-icon","querying-icon"],["mat-button","",1,"swap-btn",3,"disabled"],["color","warn","class","spin-icon  querying-icon",4,"ngIf"],["nz-popover","","nzPopoverPlacement","rightTop",1,"input-wrapper",3,"nzPopoverContent","nzPopoverVisible","nzPopoverTrigger"],["nzBorderless","","nzPrecisionMode","cut",1,"nft-input",3,"nzSize","nzMin","ngModel","nzPrecision","ngModelChange"],[1,"nft-menu-btn",3,"click"],["src","assets/imgs/logo1.png","alt","icon"],[1,"nft-slider",3,"ngModel","nzMax","ngModelChange"],[1,"nft-balance"],["nftList",""],[1,"nft-list"],["class","nft-list-item",3,"ngClass","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"nft-list-item",3,"ngClass","click"],["class","selected-tokenId-icon","color","warn",4,"ngIf"],[3,"lazyLoad","defaultImage","alt"],["color","warn",1,"selected-tokenId-icon"],[1,"input-wrapper",2,"cursor","no-drop"],["nzBorderless","",1,"nft-input",3,"nzSize","nzMin","ngModel","nzDisabled","ngModelChange"],["class","token-balance",4,"ngIf"],[1,"token-balance"],[1,"swap-info",2,"background","rgb(255, 255, 255)"],["mat-button","",1,"swap-btn",2,"grid-column-start","span 2","width","60%","justify-self","center","align-self","center","min-height","36px","font-size","24px","margin-top","12px",3,"disabled","click"],["color","warn","class","spin-icon querying-icon","style","top: 6px; left:12px;",4,"ngIf"],["color","warn",1,"spin-icon","querying-icon",2,"top","6px","left","12px"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),n.NdJ("click",function(){return e.goBack()}),n.TgZ(4,"mat-icon"),n._uU(5,"arrow_back"),n.qZA()()(),n._UZ(6,"div",4),n.TgZ(7,"div",5)(8,"span"),n._uU(9,"Swap"),n.qZA()(),n._UZ(10,"div",4)(11,"div",6),n.qZA(),n._UZ(12,"div",7),n.YNc(13,B,1,0,"ng-container",8),n.TgZ(14,"div",9)(15,"button",3),n.NdJ("click",function(){return e.switchMode()}),n.TgZ(16,"mat-icon"),n._uU(17,"arrow_downward"),n.qZA()()(),n.YNc(18,r,1,0,"ng-container",8),n.TgZ(19,"nz-spin",10),n.YNc(20,f,3,0,"ng-template",null,11,n.W1O),n.TgZ(22,"div",12)(23,"span",13),n._uU(24,"Swap Info"),n.qZA(),n._UZ(25,"div",14),n.TgZ(26,"span",15),n._uU(27),n.qZA(),n.TgZ(28,"span",16),n._uU(29),n.qZA(),n.TgZ(30,"span",15),n._uU(31,"Slippage :"),n.qZA(),n.TgZ(32,"span",16),n._uU(33),n.ALo(34,"number"),n.qZA(),n.TgZ(35,"span",15),n._uU(36,"Royalty :"),n.qZA(),n.TgZ(37,"span",16),n._uU(38),n.ALo(39,"number"),n.qZA(),n.TgZ(40,"span",15),n._uU(41,"Trade fee :"),n.qZA(),n.TgZ(42,"span",16),n._uU(43),n.ALo(44,"number"),n.qZA(),n.TgZ(45,"span",15),n._uU(46),n.qZA(),n.TgZ(47,"span",16),n._uU(48),n.ALo(49,"number"),n.qZA()()(),n.YNc(50,Y,5,4,"ng-container",17),n.YNc(51,j,2,1,"button",18),n.qZA(),n.YNc(52,q,13,11,"ng-template",null,19,n.W1O),n.YNc(54,X,10,7,"ng-template",null,20,n.W1O),n.YNc(56,tn,31,25,"ng-template",null,21,n.W1O)),2&t){const o=n.MAs(21),c=n.MAs(53),v=n.MAs(55);n.xp6(13),n.Q6J("ngTemplateOutlet",1==e.mode?c:v),n.xp6(5),n.Q6J("ngTemplateOutlet",1==e.mode?v:c),n.xp6(1),n.Q6J("nzIndicator",o)("nzDelay",200)("nzSpinning",e.isLoadingSwapInfo),n.xp6(8),n.hij("You want to ",0==e.mode?"buy":"sell"," :"),n.xp6(2),n.AsE("",e.nftValue," ",null==e.pair||null==e.pair.collection?null:e.pair.collection.symbol,""),n.xp6(4),n.hij("",n.xi3(34,18,e.slippage,"1.2-2")," %"),n.xp6(5),n.AsE("",n.xi3(39,21,e.royalty,"1.2-4")," ",null==e.pair||null==e.pair.token?null:e.pair.token.symbol,""),n.xp6(5),n.AsE("",n.xi3(44,24,e.fee,"1.2-4")," ",null==e.pair||null==e.pair.token?null:e.pair.token.symbol,""),n.xp6(3),n.hij("Total ",0==e.mode?"Cost":"Receive"," :"),n.xp6(2),n.AsE("",n.xi3(49,27,e.tokenValue,"1.2-4")," ",null==e.pair||null==e.pair.token?null:e.pair.token.symbol,""),n.xp6(2),n.Q6J("ngIf",e.pair),n.xp6(1),n.Q6J("ngIf",!e.pair)}},dependencies:[u.mk,u.sg,u.O5,u.tP,Z.Hw,I.lW,P._V,M.JJ,M.On,N.lU,U.jS,O.W,E.z1,u.JJ],styles:[".card-wrapper[_ngcontent-%COMP%]{position:relative;max-width:420px;width:100%;border-radius:16px;border:1px solid rgba(94,104,135,.24);margin-top:1rem;margin-left:auto;margin-right:auto;min-height:60vh;background:#fff;padding:12px}.card-header[_ngcontent-%COMP%]{width:100%;height:48px;display:flex;flex-direction:row;justify-content:center;align-items:center}.card-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.setting-btn[_ngcontent-%COMP%]{min-width:40px}.divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:8px 0 16px;background:linear-gradient(90deg,#ff00d0 0%,#ffa600 100%)}.input-wrapper[_ngcontent-%COMP%]{min-height:96px;width:100%;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s;display:grid;grid-template-columns:5fr 2fr;column-gap:12px;justify-items:center;align-items:center;box-sizing:border-box;padding:12px 12px 0}.input-wrapper[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}[_nghost-%COMP%]     .ant-input-number-handler{border:none!important}[_nghost-%COMP%]     .ant-input-number-disabled{background:transparent}.nft-input[_ngcontent-%COMP%]{width:100%;font-size:28px;color:#7f7f7f}.nft-menu-btn[_ngcontent-%COMP%]{width:100%;border-radius:16px;background:linear-gradient(45deg,#febae6 0%,#f9e1b4 100%);display:flex;justify-content:center;align-items:center;flex-direction:row;min-height:36px;padding:12px;cursor:pointer}.nft-menu-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.nft-menu-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}.nft-slider[_ngcontent-%COMP%]{width:100%;margin:0 24px 0 36px}[_nghost-%COMP%]     .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open){border-color:#ffe6b8}[_nghost-%COMP%]     .ant-slider-track{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}[_nghost-%COMP%]     .ant-slider-handle{border:2px solid #ffa3da}.nft-balance[_ngcontent-%COMP%]{justify-self:end}.token-balance[_ngcontent-%COMP%]{grid-column-start:span 2;justify-self:end}.switch-icon[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;margin:12px 0}.switch-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:linear-gradient(45deg,#f3bffc 0%,#ffe6b9 100%)}.switch-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.swap-info[_ngcontent-%COMP%]{margin:24px 0;width:100%;padding:12px;box-sizing:border-box;display:grid;grid-template-columns:2fr 3fr;font-size:18px;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s}.swap-info[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.swap-info-label[_ngcontent-%COMP%]{width:100%;justify-self:start;align-self:center}.swap-info-value[_ngcontent-%COMP%]{justify-self:end;align-self:center}.swap-btn[_ngcontent-%COMP%]{position:relative;width:100%;min-height:72px;border-radius:16px;background:linear-gradient(45deg,#ffb6db 0%,#fadba2 100%);color:#fff;font-size:36px;font-weight:bolder;margin-bottom:12px}.result-divider[_ngcontent-%COMP%]{width:25vw;max-height:50vh;grid-column-start:span 2;height:1px;width:100%;margin:12px auto;background:linear-gradient(90deg,#fed9f7 0%,#ffecc9 100%)}.nft-list[_ngcontent-%COMP%]{width:25vw;height:50vh;overflow-x:hidden;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;row-gap:6px;column-gap:6px;padding:12px;margin:0 -12px}.nft-list-item[_ngcontent-%COMP%]{width:100%;height:15vh;display:flex;align-items:center;justify-content:center;flex-direction:column;border:2px solid;border-image:linear-gradient(135deg,#fce6be 0%,#f3c4ff 100%) 1;overflow:hidden;box-sizing:border-box;position:relative;cursor:pointer;transition:all .2s}.nft-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:12vh;margin-bottom:12px}.nft-list-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:32px;text-align:center;overflow:hidden;text-overflow:ellipsis}.nft-list-item[_ngcontent-%COMP%]:hover{transform:scale(1.1);border-image:linear-gradient(135deg,#ffcb82 0%,#fd87ff 100%) 1;background:#fff;z-index:5}.selected-tokenId[_ngcontent-%COMP%]{border-image:linear-gradient(135deg,#feb856 0%,#fc64ff 100%) 1}.selected-tokenId-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;background:#fff;border-radius:50%}.spin-icon[_ngcontent-%COMP%]{transform:rotate(45deg);animation:rotate 1.2s infinite linear}.querying-icon[_ngcontent-%COMP%]{position:absolute;left:24px;top:24px}@keyframes rotate{to{transform:rotate(405deg)}}"]}),i})()}];let on=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[a.Bz.forChild(en),a.Bz]}),i})(),sn=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[u.ez,on,Z.Ps,I.ot,P.Zf,M.u5,N.$6,U.N3,O.j,T.Is,E.mZ]}),i})()},99369:(V,w,s)=>{s.d(w,{W:()=>E,j:()=>B});var u=s(64762),a=s(64537),C=s(9779),g=s(54121),y=s(5557),S=s(91786),k=s(51927),_=s(42147),m=s(61528),b=s(41621),n=s(13528),T=s(80028),h=s(66792),z=s(35076),A=s(88692),D=s(84570);function Z(r,f){1&r&&(a.TgZ(0,"span",3),a._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),a.qZA())}function I(r,f){}function P(r,f){if(1&r&&(a.TgZ(0,"div",8),a._uU(1),a.qZA()),2&r){const p=a.oxw(2);a.xp6(1),a.Oqu(p.nzTip)}}function M(r,f){if(1&r&&(a.TgZ(0,"div")(1,"div",5),a.YNc(2,I,0,0,"ng-template",6),a.YNc(3,P,2,1,"div",7),a.qZA()()),2&r){const p=a.oxw(),d=a.MAs(1);a.xp6(1),a.ekj("ant-spin-rtl","rtl"===p.dir)("ant-spin-spinning",p.isLoading)("ant-spin-lg","large"===p.nzSize)("ant-spin-sm","small"===p.nzSize)("ant-spin-show-text",p.nzTip),a.xp6(1),a.Q6J("ngTemplateOutlet",p.nzIndicator||d),a.xp6(1),a.Q6J("ngIf",p.nzTip)}}function N(r,f){if(1&r&&(a.TgZ(0,"div",9),a.Hsn(1),a.qZA()),2&r){const p=a.oxw();a.ekj("ant-spin-blur",p.isLoading)}}const U=["*"],O="spin";let E=(()=>{class r{constructor(p,d,x){this.nzConfigService=p,this.cdr=d,this.directionality=x,this._nzModuleName=O,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new C.x,this.spinning$=new g.X(this.nzSpinning),this.delay$=new y.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){this.delay$.pipe((0,k.O)(this.nzDelay),(0,_.x)(),(0,m.w)(d=>0===d?this.spinning$:this.spinning$.pipe((0,b.D)(x=>(0,S.H)(x?d:0)))),(0,n.R)(this.destroy$)).subscribe(d=>{this.isLoading=d,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(O).pipe((0,n.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change?.pipe((0,n.R)(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(p){const{nzSpinning:d,nzDelay:x}=p;d&&this.spinning$.next(this.nzSpinning),x&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return r.\u0275fac=function(p){return new(p||r)(a.Y36(T.jY),a.Y36(a.sBO),a.Y36(z.Is,8))},r.\u0275cmp=a.Xpm({type:r,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(p,d){2&p&&a.ekj("ant-spin-nested-loading",!d.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[a.TTD],ngContentSelectors:U,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(p,d){1&p&&(a.F$t(),a.YNc(0,Z,5,0,"ng-template",null,0,a.W1O),a.YNc(2,M,4,12,"div",1),a.YNc(3,N,2,2,"div",2)),2&p&&(a.xp6(2),a.Q6J("ngIf",d.isLoading),a.xp6(1),a.Q6J("ngIf",!d.nzSimple))},dependencies:[A.O5,A.tP],encapsulation:2}),(0,u.gn)([(0,T.oS)()],r.prototype,"nzIndicator",void 0),(0,u.gn)([(0,h.Rn)()],r.prototype,"nzDelay",void 0),(0,u.gn)([(0,h.yF)()],r.prototype,"nzSimple",void 0),(0,u.gn)([(0,h.yF)()],r.prototype,"nzSpinning",void 0),r})(),B=(()=>{class r{}return r.\u0275fac=function(p){return new(p||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[z.vT,A.ez,D.Q8]}),r})()}}]);