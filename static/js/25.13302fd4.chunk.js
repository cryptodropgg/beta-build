(this.webpackJsonpcryptodrop=this.webpackJsonpcryptodrop||[]).push([[25],{2643:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));var r=a(0),c=a(517);function i(e){return Object(c.a)(e).map((function(e){return null===e||void 0===e?void 0:e.value}))}var n=a(178);function s(e){console.warn("Invalid contract call: address=".concat(e&&e.address," method=").concat(e&&e.method," args=").concat(e&&e.args))}function o(e){return l([e],arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})[0]}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(n.a)({queryParams:t}),c=i(Object(r.useMemo)((function(){return e.map((function(e){return void 0!==a?function(e,t){if(e)if(e.address&&e.method)try{return{address:e.address,data:e.abi.encodeFunctionData(e.method,e.args),chainId:t}}catch(a){return void s(e)}else s(e)}(e,a):void 0}))}),[JSON.stringify(e.map((function(e){var t;return e&&{address:null===(t=e.address)||void 0===t?void 0:t.toLowerCase(),method:e.method,args:e.args}}))),a]));return Object(r.useMemo)((function(){return c.map((function(t,a){var r=e[a];if("0x"!==t)return r&&t?r.abi.decodeFunctionResult(r.method,t):void 0;s(r)}))}),[JSON.stringify(c)])}},2858:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var r=a(8),c=a(0),i=a(15),n=a(961),s=a(963),o=a(238),l=a(1067),j=a(275),d=a(85),u=a(973),b=a(110),m=a(515),h=a(124),g=a(48),O=a(2),f=a(9),p=a(12),x=function(e){var t=Object(c.useState)({index:0,amount:"",proof:[]}),a=Object(p.a)(t,2),r=a[0],i=a[1],n=Object(u.a)().account,s=Object(c.useCallback)(Object(f.a)(Object(O.a)().mark((function t(){var a,r;return Object(O.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=14;break}return t.prev=1,t.next=4,fetch(g.Z,{body:JSON.stringify({key:"".concat(e,":").concat(n)}),headers:{"Content-Type":"application/json","Referrer-Policy":"no-referrer"},method:"POST"});case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,i(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),i({index:0,amount:"0",proof:[]});case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),[n]);return Object(c.useEffect)((function(){s()}),[n,s]),r},y=a(1048),v=a(948),C=a(962),E=a(2643),I=a(2859),w=a(78),k=a(1),J=Object(i.a)(n.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)({},t.typography.body2),{},{padding:t.spacing(2),color:t.palette.text.primary,height:"100%"})}));Object(i.a)(j.a.div)((function(e){e.theme;return{}}));function S(){var e=Object(u.a)().account,t=x("1"),a=Object(c.useState)("0"),r=Object(p.a)(a,2),i=r[0],n=r[1],s=Object(c.useState)(""),l=Object(p.a)(s,2),j=(l[0],l[1]),d=Object(c.useState)(!1),b=Object(p.a)(d,2),m=b[0],h=b[1],O=Object(E.a)({abi:g.P,address:g.J,method:"claimed",args:[e]});Object(c.useEffect)((function(){if(t&&""!==t.amount&&O){var e=w.utils.parseEther(w.utils.formatEther(t.amount.toString()));e.gte(O[0])&&(e=e.sub(O[0])),n(w.utils.formatEther(e))}}),[t,O,e]);var f=Object(I.a)(g.K,"claim",{transactionName:"Claim JUICE"}),S=f.state,F=f.send;return Object(c.useEffect)((function(){"Exception"===S.status&&(h(!1),j(S.errorMessage)),"Exception"!==S.status&&"Fail"!==S.status||(h(!1),j(S.errorMessage)),"None"===S.status&&(h(!1),j("")),"Success"===S.status&&(h(!1),j(""))}),[S,e]),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(J,{style:{display:"flex",flexDirection:"column",border:"0.25rem solid #ffc900",minHeight:"16rem",height:"fit-content",backgroundImage:"url(/static/claimjuice/claim-juice-bg2.jpg)",backgroundPosition:"center"},children:[Object(k.jsxs)(o.a,{variant:"h4",style:{marginBottom:"0.4rem"},children:["Claim ",Object(k.jsx)("span",{style:{color:"#ffc900"},children:"$JUICE"})]}),Object(k.jsx)(y.a,{}),Object(k.jsx)(o.a,{style:{marginTop:"1.4rem"},children:"Available to claim:"}),Object(k.jsxs)(v.a,{direction:"row",alignItems:"center",style:{flexWrap:"wrap"},children:[Object(k.jsxs)(o.a,{variant:"h3",children:[i," $JUICE "]}),Object(k.jsx)("img",{src:"/static/claimjuice/JuiceLogo.svg",alt:"",style:{width:"2rem"}})]}),Object(k.jsx)(C.a,{color:"yellow",size:"large",variant:"contained",style:{marginTop:"4rem"},onClick:function(){h(!0),F(t.index,e,t.amount,t.proof)},disabled:m||w.utils.parseEther(i).eq("0"),children:m?Object(k.jsx)(k.Fragment,{children:"CLAIMING ..."}):Object(k.jsx)(k.Fragment,{children:"CLAIM"})})]})})}var F=Object(i.a)(n.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)({},t.typography.body2),{},{padding:t.spacing(2),color:t.palette.text.primary,height:"100%"})}));Object(i.a)(j.a.div)((function(e){e.theme;return{}}));function N(){var e=Object(u.a)().account,t=x("2"),a=Object(c.useState)("0"),r=Object(p.a)(a,2),i=r[0],n=r[1],s=Object(c.useState)(""),l=Object(p.a)(s,2),j=(l[0],l[1]),d=Object(c.useState)(!1),b=Object(p.a)(d,2),m=b[0],h=b[1],O=Object(E.a)({abi:g.P,address:g.L,method:"claimed",args:[e]});Object(c.useEffect)((function(){if(t&&""!==t.amount&&O){var e=w.utils.parseEther(w.utils.formatEther(t.amount.toString()));e.gte(O[0])&&(e=e.sub(O[0])),n(w.utils.formatEther(e))}}),[t,O,e]);var f=Object(I.a)(g.M,"claim",{transactionName:"Claim JUICE"}),J=f.state,S=f.send;return Object(c.useEffect)((function(){"Exception"===J.status&&(h(!1),j(J.errorMessage)),"Exception"!==J.status&&"Fail"!==J.status||(h(!1),j(J.errorMessage)),"None"===J.status&&(h(!1),j("")),"Success"===J.status&&(h(!1),j(""))}),[J,e]),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(F,{style:{display:"flex",flexDirection:"column",border:"0.25rem solid #35C4EF",minHeight:"16rem",height:"fit-content",backgroundImage:"url(/static/claimjuice/claim-juice-bg-3.jpg)",backgroundPosition:"center",backgroundSize:"cover",marginTop:"1rem"},children:[Object(k.jsxs)(o.a,{variant:"h4",style:{marginBottom:"0.4rem"},children:["Claim ",Object(k.jsx)("span",{style:{color:"#ffc900"},children:"$JUICE"})," from ",Object(k.jsx)("span",{style:{color:"#35C4EF"},children:"$XDROPS"})]}),Object(k.jsx)(o.a,{style:{marginTop:"-0.4rem",opacity:"0.6",marginBottom:"0.4rem"},children:"Claim the $JUICE from your $CDROP staking."}),Object(k.jsx)(y.a,{}),Object(k.jsx)(o.a,{style:{marginTop:"1.4rem"},children:"Available to claim:"}),Object(k.jsxs)(v.a,{direction:"row",alignItems:"center",style:{flexWrap:"wrap"},children:[Object(k.jsxs)(o.a,{variant:"h3",children:[i," $JUICE "]}),Object(k.jsx)("img",{src:"/static/claimjuice/JuiceLogo.svg",alt:"",style:{width:"2rem"}})]}),Object(k.jsx)(C.a,{color:"yellow",size:"large",variant:"contained",style:{marginTop:"4rem"},onClick:function(){h(!0),S(t.index,e,t.amount,t.proof)},disabled:m||w.utils.parseEther(i).eq("0"),children:m?Object(k.jsx)(k.Fragment,{children:"CLAIMING ..."}):Object(k.jsx)(k.Fragment,{children:"CLAIM"})})]})})}var T=Object(i.a)(n.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)({},t.typography.body2),{},{padding:t.spacing(2),color:t.palette.text.primary,height:"100%"})}));Object(i.a)(j.a.div)((function(e){e.theme;return{}}));function $(){var e=Object(u.a)().account,t=x("3"),a=Object(c.useState)("0"),r=Object(p.a)(a,2),i=r[0],n=r[1],s=Object(c.useState)(""),l=Object(p.a)(s,2),j=(l[0],l[1]),d=Object(c.useState)(!1),b=Object(p.a)(d,2),m=b[0],h=b[1],O=Object(E.a)({abi:g.P,address:g.N,method:"claimed",args:[e]});Object(c.useEffect)((function(){if(console.log("rewards"),t&&""!==t.amount&&O){var e=w.utils.parseEther(w.utils.formatEther(t.amount.toString()));e.gte(O[0])&&(e=e.sub(O[0])),n(w.utils.formatEther(e))}}),[t,O,e]);var f=Object(I.a)(g.O,"claim",{transactionName:"Claim JUICE"}),J=f.state,S=f.send;return Object(c.useEffect)((function(){"Exception"===J.status&&(h(!1),j(J.errorMessage)),"Exception"!==J.status&&"Fail"!==J.status||(h(!1),j(J.errorMessage)),"None"===J.status&&(h(!1),j("")),"Success"===J.status&&(h(!1),j(""))}),[J,e]),Object(k.jsx)(k.Fragment,{children:w.utils.parseEther(i).gt("0")?Object(k.jsxs)(T,{style:{display:"flex",flexDirection:"column",border:"0.25rem solid #35C4EF",minHeight:"16rem",height:"fit-content",backgroundImage:"url(/static/claimjuice/claim-juice-bg-3.jpg)",backgroundPosition:"center",backgroundSize:"cover",marginTop:"1rem"},children:[Object(k.jsxs)(o.a,{variant:"h4",style:{marginBottom:"0.4rem"},children:["Claim ",Object(k.jsx)("span",{style:{color:"#ffc900"},children:"$BNB"})," from"," ",Object(k.jsx)("span",{style:{color:"#35C4EF"},children:"CDROP $BNB Rewards"})]}),Object(k.jsx)(o.a,{style:{marginTop:"-0.4rem",opacity:"0.6",marginBottom:"0.4rem"},children:"Claim the BNB from your $CDROP staking."}),Object(k.jsx)(y.a,{}),Object(k.jsx)(o.a,{style:{marginTop:"1.4rem"},children:"Available to claim:"}),Object(k.jsxs)(v.a,{direction:"row",alignItems:"center",style:{flexWrap:"wrap"},children:[Object(k.jsxs)(o.a,{variant:"h3",children:[i," $BNB "]}),Object(k.jsx)("img",{src:"/static/icons/ic_bnb.svg",alt:"",style:{width:"2rem"}})]}),Object(k.jsx)(C.a,{color:"yellow",size:"large",variant:"contained",style:{marginTop:"4rem"},onClick:function(){h(!0),S(t.index,e,t.amount,t.proof)},disabled:m||w.utils.parseEther(i).eq("0"),children:m?Object(k.jsx)(k.Fragment,{children:"CLAIMING ..."}):Object(k.jsx)(k.Fragment,{children:"CLAIM"})})]}):""})}var M=Object(i.a)(n.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)({},t.typography.body2),{},{padding:t.spacing(2),color:t.palette.text.primary,height:"100%"})})),A=Object(i.a)(j.a.div)((function(e){e.theme;return{}}));function L(){var e=Object(u.a)().account,t=(Object(d.a)(),Object(b.a)().themeStretch);return Object(k.jsx)(m.a,{title:"Cryptodrop | Claim JUICE",style:{overflow:"hidden",marginTop:"-2.5rem"},children:Object(k.jsx)(s.a,{maxWidth:!t&&"xl",children:Object(k.jsxs)(A,{initial:"initial",animate:"animate",variants:h.h,children:[Object(k.jsx)(j.a.div,{variants:h.d,children:Object(k.jsx)("img",{src:"/static/claimjuice/ClaimJuice.svg",alt:"",style:{position:"fixed",opacity:"0.15",marginTop:"-1.5rem",marginLeft:"-1.5rem",zIndex:"-1",maxWidth:"60rem"}})}),Object(k.jsx)(j.a.div,{variants:h.f,children:Object(k.jsx)(o.a,{variant:"h3",component:"h1",paragraph:!0,children:"Claim your $JUICE Token"})}),Object(k.jsx)(j.a.div,{variants:h.f,children:Object(k.jsxs)(l.a,{container:!0,spacing:2,alignItems:"stretch",direction:"row",justifyContent:"flex-start",children:[Object(k.jsx)(l.a,{item:!0,xs:12,md:12,lg:7,xl:8,children:Object(k.jsxs)(M,{style:{display:"flex",flexDirection:"column",border:"0.25rem solid #35C4EF",backgroundImage:"url(/static/claimjuice/claimjuice-bg.jpg)",backgroundPosition:"center",height:"fit-content"},children:[Object(k.jsxs)(o.a,{paragraph:!0,children:["If you are a $CDROP holder, please"," ",Object(k.jsx)("span",{style:{color:"#35C4EF",fontWeight:"bold"},children:"CLAIM your $JUICE token"}),", you will receive 1:1.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"Juice token has been given birth, so we can apply a 10% tax so we can generate more BNB rewards to stakers and The Committee members.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("span",{style:{color:"#35C4EF",fontWeight:"bold"},children:"Auto add Liquidity"})," will help maintain a healthy liquidity pool and Treasury will be used for operations and marketing.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"We are now ",Object(k.jsx)("span",{style:{color:"#35C4EF",fontWeight:"bold"},children:"ULTRA DEFLATIONARY"}),". We not only have deflationary on our games, but now every buy/sell will be have deflationary mechanics too. Making $JUICE scarce. \ud83e\uddc3"]}),Object(k.jsxs)("div",{style:{opacity:"0.6",background:"#0000002b",padding:"0.2rem 0.2rem",textAlign:"end",marginTop:"1rem",fontSize:"1rem"},children:["*$JUICE balance is based on your $CDROP balance at block number"," ",Object(k.jsxs)("a",{href:"https://bscscan.com/block/".concat(g.X),target:"_blank",rel:"noreferrer",style:{color:"white"},children:["#",g.X]})]})]})}),e?Object(k.jsxs)(l.a,{item:!0,xs:12,md:12,lg:5,xl:4,children:[Object(k.jsx)($,{}),Object(k.jsx)(S,{}),Object(k.jsx)(N,{})]}):""]})}),Object(k.jsx)("object",{type:"image/svg+xml",data:"/static/claimjuice/waves-blue-animated.svg",style:{position:"fixed",bottom:"0",left:"0",zIndex:"-1",opacity:"0.2",width:"100%",minHeight:"20rem",objectFit:"cover"},children:"Clam"}),Object(k.jsx)("object",{type:"image/svg+xml",data:"/static/claimjuice/JuiceLogoAnimated.svg",style:{zIndex:"-1"},className:"juice-logo-animated",children:"$JUICE"})]})})})}}}]);
//# sourceMappingURL=25.13302fd4.chunk.js.map