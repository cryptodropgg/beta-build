(this.webpackJsonpcryptodrop=this.webpackJsonpcryptodrop||[]).push([[27],{2841:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return E}));var i=a(12),n=a(8),r=a(15),c=a(961),l=a(1026),o=a(963),s=a(238),d=a(1067),u=a(948),g=a(1070),h=a(71),b=a(275),m=a(85),j=a(973),v=a(969),p=a(84),O=a(78),w=a(110),x=a(515),f=a(124),y=a(48),k=a(47),M=a(1),S=Object(r.a)(c.a)((function(t){var e=t.theme;return Object(n.a)(Object(n.a)({},e.typography.body2),{},{padding:e.spacing(2),color:e.palette.text.primary,height:"100%"})})),A=Object(r.a)(b.a.div)((function(t){t.theme;return{}}));function E(){Object(j.a)().account;var t=Object(m.a)(),e=Object(w.a)().themeStretch,a=Object(l.a)(t.breakpoints.up("md")),n=Object(v.b)([{contract:new p.b(y.e,y.w),method:"totalMined",args:[y.H]},{contract:new p.b(y.h,y.w),method:"totalMined",args:[y.H]},{contract:new p.b(y.j,y.w),method:"totalMined",args:[y.H]},{contract:new p.b(y.i,y.w),method:"totalMined",args:[y.H]},{contract:new p.b(y.g,y.w),method:"totalMined",args:[y.H]},{contract:new p.b(y.f,y.w),method:"totalMined",args:[y.H]},{contract:new p.b(y.t,y.w),method:"totalMined",args:[y.H]},{contract:new p.b(y.e,y.w),method:"miningAmount",args:[]},{contract:new p.b(y.h,y.w),method:"miningAmount",args:[]},{contract:new p.b(y.j,y.w),method:"miningAmount",args:[]},{contract:new p.b(y.i,y.w),method:"miningAmount",args:[]},{contract:new p.b(y.g,y.w),method:"miningAmount",args:[]},{contract:new p.b(y.f,y.w),method:"miningAmount",args:[]},{contract:new p.b(y.t,y.w),method:"miningAmount",args:[]},{contract:new p.b(y.e,y.w),method:"checkMiningAvailability",args:[]},{contract:new p.b(y.h,y.w),method:"checkMiningAvailability",args:[]},{contract:new p.b(y.j,y.w),method:"checkMiningAvailability",args:[]},{contract:new p.b(y.i,y.w),method:"checkMiningAvailability",args:[]},{contract:new p.b(y.g,y.w),method:"checkMiningAvailability",args:[]},{contract:new p.b(y.f,y.w),method:"checkMiningAvailability",args:[]},{contract:new p.b(y.t,y.w),method:"checkMiningAvailability",args:[]},{contract:new p.b(y.S,y.w),method:"totalMined",args:[y.H]},{contract:new p.b(y.S,y.w),method:"miningAmount",args:[]},{contract:new p.b(y.S,y.w),method:"checkMiningAvailability",args:[]},{contract:new p.b(y.T,y.w),abi:y.A,address:y.T,method:"totalMined",args:[y.W]},{contract:new p.b(y.T,y.w),abi:y.A,address:y.T,method:"miningAmount",args:[]},{contract:new p.b(y.T,y.w),abi:y.A,address:y.T,method:"checkMiningAvailability",args:[]}]),r=Object(i.a)(n,27),c=r[0],E=r[1],T=r[2],I=r[3],C=r[4],H=r[5],R=r[6],z=r[7],U=r[8],W=r[9],J=r[10],N=r[11],L=r[12],B=r[13],F=r[14],P=r[15],Z=r[16],D=r[17],G=r[18],Y=r[19],q=r[20],K=r[21],Q=r[22],V=r[23],X=r[24],$=r[25],_=r[26],tt=[{id:"blockhash",title:"Block Hash Game",currentRate:z&&z.value&&F&&F.value&&F.value[0]?Object(k.c)(O.utils.formatEther(z.value[0].toString())):0,totalMined:c&&c.value?Object(k.c)(O.utils.formatEther(c.value[0].toString())):0,backgroundImage:"/static/mining/blockhash-bg.jpg",titleColor:"#35c4ef",link:"/play"},{id:"lucky888",title:"Lucky 888",currentRate:U&&U.value&&P&&P.value&&P.value[0]?Object(k.c)(O.utils.formatEther(U.value[0].toString())):0,totalMined:E&&E.value?Object(k.c)(O.utils.formatEther(E.value[0].toString())):0,backgroundImage:"/static/mining/lucky888-bg.jpg",titleColor:"#ff684c",link:"/lucky888"},{id:"twowin",title:"Two Win",currentRate:W&&W.value&&Z&&Z.value&&Z.value[0]?Object(k.c)(O.utils.formatEther(W.value[0].toString())):0,totalMined:T&&T.value?Object(k.c)(O.utils.formatEther(T.value[0].toString())):0,backgroundImage:"/static/mining/twowin-bg.jpg",titleColor:"#89be56",link:"/twowin"},{id:"shell",title:"Shell",currentRate:J&&J.value&&D&&D.value&&D.value[0]?Object(k.c)(O.utils.formatEther(J.value[0].toString())):0,totalMined:I&&I.value?Object(k.c)(O.utils.formatEther(I.value[0].toString())):0,backgroundImage:"/static/mining/shell-bg.jpg",titleColor:"#F69372",link:"/shell"},{id:"envelopes",title:"Envelopes",currentRate:N&&N.value&&G&&G.value&&G.value[0]?Object(k.c)(O.utils.formatEther(N.value[0].toString())):0,totalMined:C&&C.value?Object(k.c)(O.utils.formatEther(C.value[0].toString())):0,backgroundImage:"/static/mining/envelopes-bg.jpg",titleColor:"#EF0D0E",link:"/envelopes"},{id:"apeslots",title:"Ape Slots",currentRate:L&&L.value&&Y&&Y.value&&Y.value[0]?Object(k.c)(O.utils.formatEther(L.value[0].toString())):0,totalMined:H&&H.value?Object(k.c)(O.utils.formatEther(H.value[0].toString())):0,backgroundImage:"/static/mining/apeslots-bg.jpg",titleColor:"#ffc900",link:"/apeslots"},{id:"hashlottery",title:"Hash Lottery",currentRate:B&&B.value&&q&&q.value&&q.value[0]?Object(k.c)(O.utils.formatEther(B.value[0].toString())):0,totalMined:R&&R.value?Object(k.c)(O.utils.formatEther(R.value[0].toString())):0,backgroundImage:"/static/mining/hashlottery-bg.jpg",titleColor:"#ff9e00",link:"/hashlottery"},{id:"plinko",title:"Plinko",currentRate:Q&&Q.value&&V&&V.value&&V.value[0]?Object(k.c)(O.utils.formatEther(Q.value[0].toString())):0,totalMined:K&&K.value?Object(k.c)(O.utils.formatEther(K.value[0].toString())):0,backgroundImage:"/static/mining/plinko-bg.jpg",titleColor:"#9338ff",link:"/plinko",shazuRate:$&&$.value&&_&&_.value&&_.value[0]?Object(k.c)(O.utils.formatEther($.value[0].toString())):0,shazuTotalMined:X&&X.value?Object(k.c)(O.utils.formatEther(X.value[0].toString())):0}],et=0,at=0;return c&&c.value&&E&&E.value&&T&&T.value&&I&&I.value&&C&&C.value&&H&&H.value&&K&&K.value&&(et=Object(k.c)(O.utils.formatEther(c.value[0].add(E.value[0]).add(T.value[0]).add(I.value[0]).add(C.value[0]).add(H.value[0]).add(R.value[0]).add(K.value[0])))),X&&X.value&&(at=Object(k.c)(O.utils.formatEther(X.value[0]))),Object(M.jsx)(x.a,{title:"Cryptodrop | Hash Lottery",style:{overflow:"hidden",marginTop:"-2.5rem"},children:Object(M.jsx)(o.a,{maxWidth:!e&&"xl",children:Object(M.jsxs)(A,{initial:"initial",animate:"animate",variants:f.h,children:[Object(M.jsx)(b.a.div,{variants:f.d,children:Object(M.jsx)("img",{src:"/static/mining/mining.svg",alt:"",style:{position:"fixed",opacity:"0.15",marginTop:"-1.5rem",marginLeft:"-1.5rem",zIndex:"-1"}})}),Object(M.jsxs)(b.a.div,{variants:f.f,children:[Object(M.jsx)(s.a,{variant:"h3",component:"h1",paragraph:!0,children:"Mining \u26cf"}),Object(M.jsx)(s.a,{variant:"h5",style:{marginTop:"-0.8rem",marginBottom:"1rem"},color:"secondary",children:"PLAY TO EARN"})]}),Object(M.jsx)(b.a.div,{variants:f.f,children:Object(M.jsx)(d.a,{container:!0,spacing:2,alignItems:"stretch",direction:"row",justifyContent:"flex-start",children:Object(M.jsx)(d.a,{item:!0,xs:12,md:12,lg:8,xl:7,children:Object(M.jsx)(S,{style:{display:"flex",flexDirection:"column",paddingTop:"2rem",paddingBottom:"2rem",backgroundImage:"url(/static/mining/mine-juice-bg.jpg)",backgroundSize:"cover",backgroundPosition:"center"},children:Object(M.jsx)(u.a,{direction:"row",alignItems:"center",style:{flexWrap:"wrap"},children:Object(M.jsxs)(u.a,{children:[Object(M.jsx)(s.a,{variant:"h6",children:"Total mined since start"}),a?Object(M.jsxs)(s.a,{variant:"h3",children:[Object(M.jsxs)("span",{className:"bold-yellow",children:[et," JUICE"]}),Object(M.jsx)("span",{style:{fontWeight:"300",opacity:"0.4"},children:"\xa0 | \xa0"}),Object(M.jsxs)("span",{className:"bold-purple-shazu",children:[at," SHAZU"]})]}):Object(M.jsxs)(u.a,{direction:"column",children:[Object(M.jsx)(s.a,{variant:"h3",children:Object(M.jsxs)("span",{className:"bold-yellow",children:[et," JUICE"]})}),Object(M.jsx)(s.a,{variant:"h3",children:Object(M.jsxs)("span",{className:"bold-purple-shazu",children:[at," SHAZU"]})})]})]})})})})})}),Object(M.jsx)(b.a.div,{variants:f.f,style:{marginTop:"4rem",marginBottom:"0.8rem"},children:Object(M.jsx)(s.a,{variant:"h3",children:"Game Mining Stats"})}),Object(M.jsx)(b.a.div,{variants:f.f,children:Object(M.jsx)(d.a,{container:!0,spacing:2,alignItems:"stretch",direction:"row",justifyContent:"flex-start",children:tt.map((function(t,e){return Object(M.jsx)(d.a,{item:!0,xs:12,md:6,lg:6,xl:4,style:{minHeight:a?"14rem":"unset"},children:Object(M.jsx)(g.a,{className:"linking",to:t.link,component:h.c,children:Object(M.jsxs)(S,{style:{backgroundImage:"url(".concat(t.backgroundImage,")"),backgroundSize:"cover",backgroundPosition:"center",border:"4px solid ".concat(t.titleColor),height:"100%",display:"flex",flexDirection:"column"},children:[Object(M.jsx)(s.a,{variant:"h5",style:{color:t.titleColor},children:t.title}),Object(M.jsx)(u.a,{style:{opacity:"0.6"},children:Object(M.jsxs)(s.a,{variant:"h6",style:{fontWeight:"400",marginTop:"-0.3rem"},children:[Object(M.jsxs)("span",{children:["Current Rate: ",t.currentRate," JUICE"]}),t.shazuRate&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("span",{style:{fontWeight:"300",opacity:"0.4"},children:"\xa0 | \xa0"}),Object(M.jsxs)("span",{children:[t.shazuRate," SHAZU"]})]})]})}),Object(M.jsxs)(u.a,{style:{marginTop:"auto",textAlign:"right"},children:[Object(M.jsx)(s.a,{variant:"h6",children:"Total Mined"}),Object(M.jsxs)(s.a,{variant:"h4",color:"secondary",style:{marginTop:"0rem"},children:[Object(M.jsxs)("div",{children:[t.totalMined," JUICE"]}),t.shazuTotalMined&&Object(M.jsxs)("div",{style:{color:"#8e58ff",marginTop:"-0.2rem"},children:[t.shazuTotalMined," SHAZU"]})]})]})]})})})}))})}),Object(M.jsx)("img",{src:"/static/background/waves.svg",alt:"",style:{position:"fixed",bottom:"0",left:"0",zIndex:"-1",opacity:"0.2",width:"100%",minHeight:"20rem",objectFit:"cover"}})]})})})}}}]);
//# sourceMappingURL=27.469e7279.chunk.js.map