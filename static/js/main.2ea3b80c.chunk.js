(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var r,o,c,a,i,s,u,d,l,b,p,j,f,g,x,O,h,m,v,w,k,y,S,E,C,T,P,z,L,A,R,B=n(48),F=n.n(B),I=n(32),H=n(51),M=n(4),N=n(7),V=n(0),_=n(22),q=n(8),G=n(3),J=function(){return Object(G.jsx)("div",{children:"This page doesn\xa0t exist."})},U=I.b,W=I.c,X=Object(q.d)(r||(r=Object(N.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),D=q.c.div(o||(o=Object(N.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),K=q.c.div(c||(c=Object(N.a)(["\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  margin: 1em auto;\n  border: 0.3em solid #ddd;\n  border-left-color: #000;\n  animation: "," 1.2s infinite linear;\n"])),X),Q=function(){return console.log("Loader ...."),Object(G.jsx)(D,{children:Object(G.jsx)(K,{})})},Y=q.c.div(a||(a=Object(N.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n\n  ","\n"])),(function(e){return"error"===e.status&&Object(q.b)(i||(i=Object(N.a)(["\n    color: red;\n  "])))})),Z=function(e){var t=e.message,n=e.status,r=void 0===n?"casual":n;return Object(G.jsx)(Y,{status:r,children:Object(G.jsx)("h2",{children:t})})},$=n(17),ee=n(14),te=n(19),ne={storage:[],token:null,statusLoading:"idle",error:null},re=Object(te.b)({name:"courses",initialState:ne,reducers:{setCourses:function(e,t){console.log("setCourses"),e.storage=Object(ee.a)(t.payload)},setStatus:function(e,t){e.statusLoading=t.payload},resetError:function(e){e.error=ne.error},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},setToken:function(e,t){console.log("setToken"),e.token=t.payload},resetStateExceptToken:function(e){return Object($.a)(Object($.a)(Object($.a)({},e),ne),{},{token:e.token})},resetState:function(e){return Object($.a)(Object($.a)({},e),ne)}}}),oe=re.reducer,ce=re.actions,ae=ce.setCourses,ie=ce.setStatus,se=ce.resetError,ue=ce.setError,de=ce.setToken,le=ce.resetStateExceptToken,be=(ce.resetState,function(e){return e.courses.storage}),pe=function(e){return e.courses.statusLoading},je=function(e){return e.courses.error},fe=function(e){return e.courses.token},ge=q.c.div(s||(s=Object(N.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),xe=function(e){var t=e.children;return Object(G.jsx)(ge,{children:Object(G.jsx)("h2",{children:t})})},Oe=q.c.div(u||(u=Object(N.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, minmax(300px, 1fr));\n  gap: 20px;\n  justify-items: center;\n  align-items: center;\n  justify-content: center;\n"]))),he=function(e){var t=e.children;return Object(G.jsx)(Oe,{children:t})},me=n(55),ve=q.c.div(d||(d=Object(N.a)(["\n  /* display: inline-flex; */\n  /* flex-direction: column;\n  align-items: center;\n  justify-content: baseline; */\n  width: 280px;\n  height: 450px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  margin: 10px;\n  box-sizing: border-box;\n  /* padding: 0 0 20px; */\n  /* border: 1px solid red; */\n\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(q.b)(l||(l=Object(N.a)(["\n    cursor: auto;\n  "])))}),(function(e){return"page"===e.format&&Object(q.b)(b||(b=Object(N.a)(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    border-radius: none;\n    box-shadow: none;\n    overflow: visible;\n    margin: 0;\n    padding: 0;\n  "])))})),we=q.c.img(p||(p=Object(N.a)(["\n  width: 100%;\n  height: 120px;\n  object-fit: cover;\n  overflow: hidden;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(q.b)(j||(j=Object(N.a)(["\n    width: 300px;\n    height: 400px;\n    object-fit: cover;\n    overflow: visible;\n    margin: 0 auto;\n  "])))})),ke=q.c.div(f||(f=Object(N.a)(["\n  /* display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; */\n  /* padding: 20px; */\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(q.b)(g||(g=Object(N.a)(["\n    padding: 50px;\n  "])))})),ye=q.c.h2(x||(x=Object(N.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 7px;\n  max-width: 250px;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  overflow-wrap: normal;\n  height: 48px;\n  padding: 0 20px;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(q.b)(O||(O=Object(N.a)(["\n    font-size: 50px;\n    margin-top: 20px;\n    margin-bottom: 40px;\n    max-width: none;\n    -webkit-line-clamp: inherit;\n    text-align: center;\n    overflow: visible;\n    text-overflow: none;\n    height: auto;\n  "])))})),Se=q.c.div(h||(h=Object(N.a)(["\n  height: 160px;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(q.b)(m||(m=Object(N.a)(["\n  "])))})),Ee=q.c.p(v||(v=Object(N.a)(["\n  font-size: 14px;\n  text-align: left;\n  height: 60px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  overflow-wrap: break-word;\n  padding: 5px 20px 0;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(q.b)(w||(w=Object(N.a)(["\n    font-size: 24px;\n    text-align: center;\n    max-height: min-content;\n    text-overflow: clip;\n    overflow: visible;\n    -webkit-line-clamp: inherit;\n  "])))})),Ce=q.c.h3(k||(k=Object(N.a)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 10px;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(q.b)(y||(y=Object(N.a)(["\n    font-size: 34px;\n    font-weight: bold;\n    margin-top: 20px;\n  "])))})),Te=q.c.div(S||(S=Object(N.a)(["\n  margin-top: 5px;\n  text-align: left;\n  align-self: flex-start;\n  font-size: 14px;\n  padding: 5px 20px 0;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(q.b)(E||(E=Object(N.a)(["\n  "])))})),Pe=function(e){var t,n,r=e.course,o=e.format,c=void 0===o?"card":o,a=Object(V.useRef)(null),i=r.description,s=r.previewImageLink,u=r.title,d=r.id,l=r.rating,b=(null===(t=r.meta)||void 0===t||null===(n=t.courseVideoPreview)||void 0===n?void 0:n.link)||"";Object(V.useEffect)((function(){function e(){console.log("handlePlay")}var t=a.current;return t&&t.addEventListener("play",e),function(){t&&t.removeEventListener("play",e)}}),[a]);var p=Object(M.m)();function j(){var e=a.current;e&&e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>e.HAVE_CURRENT_DATA&&(console.log("pauseVideo",u),e.controls=!e.controls,e.pause())}return Object(G.jsxs)(ve,{onClick:function(){j(),"card"===c&&p("course/".concat(d),{replace:!0})},format:c,onMouseEnter:function(){return function(){var e=a.current;e&&b&&(console.log("playVideo"),e.controls=!e.controls,e.volume=0,e.play())}()},onMouseLeave:function(){return j()},children:[Object(G.jsx)(we,{src:"".concat(s,"/cover.webp"),alt:i,format:c}),Object(G.jsxs)(ke,{format:c,children:[Object(G.jsx)(ye,{format:c,children:u}),Object(G.jsx)(Se,{children:Object(G.jsx)(me.a,{playerRef:a,src:b,autoPlay:!1,controls:!0,width:"100%",height:"100%",hlsConfig:{startPosition:-1}})}),Object(G.jsx)(Ee,{format:c,children:i}),Object(G.jsx)(Ce,{format:c}),Object(G.jsxs)(Te,{format:c,children:["Rating:\xa0",l]})]})]})},ze=q.c.div(C||(C=Object(N.a)(["\n"]))),Le=function(){var e="loading"===W(pe),t=W(je),n=W(be);return t?Object(G.jsx)(Z,{message:t,status:"error"}):Object(G.jsxs)(ze,{children:[Object(G.jsx)(xe,{children:"Courses:"}),e&&Object(G.jsx)(Q,{}),Object(G.jsx)(he,{children:n.map((function(e){return Object(G.jsx)(Pe,{course:e},e.id)}))})]})},Ae=n(41),Re={storage:[],totalSum:0,totalCount:0,showSuccess:!1,statusPosting:"idle",error:null},Be=Object(te.b)({name:"basket",initialState:Re,reducers:{addProductToBasket:function(e,t){var n=t.payload,r=n.count,o=n.product,c=e.storage.findIndex((function(e){return e.product.id===o.id}));c>=0?e.storage[c].countOrdered+=r:e.storage.push({product:o,countOrdered:r}),e.totalSum=Math.ceil(100*e.storage.reduce((function(e,t){return e+Number(t.product.price)*t.countOrdered}),0))/100,e.totalCount=e.storage.reduce((function(e,t){return e+t.countOrdered}),0)},removeProductFromBasket:function(e,t){var n=t.payload,r=n.count,o=n.product,c=e.storage.findIndex((function(e){return e.product.id===o.id}));c>=0&&e.storage[c].countOrdered>=r&&(e.storage[c].countOrdered-=r,e.totalSum=Math.ceil(100*e.storage.reduce((function(e,t){return e+Number(t.product.price)*t.countOrdered}),0))/100,e.totalCount=e.storage.reduce((function(e,t){return e+t.countOrdered}),0))},deleteProductInBasket:function(e,t){var n=t.payload.product,r=e.storage.findIndex((function(e){return e.product.id===n.id}));r>=0&&(e.storage.splice(r,1),e.totalSum=Math.ceil(100*e.storage.reduce((function(e,t){return e+Number(t.product.price)*t.countOrdered}),0))/100,e.totalCount=e.storage.reduce((function(e,t){return e+t.countOrdered}),0))},sendOrderToServer:function(){console.log("sendOrderToServer")},setShowSuccess:function(e,t){e.showSuccess=t.payload},setStatusPosting:function(e,t){e.statusPosting=t.payload},setError:function(e,t){e.error=t.payload,e.statusPosting="failed"},clearBasket:function(){return Re}}}),Fe=Be.reducer,Ie=Be.actions,He=(Ie.addProductToBasket,Ie.removeProductFromBasket,Ie.deleteProductInBasket,Ie.sendOrderToServer,Ie.setShowSuccess,Ie.setStatusPosting,Ie.setError,Ie.clearBasket),Me=function(e){return e.basket.storage},Ne=function(e){return e.basket.totalCount},Ve=q.c.button(T||(T=Object(N.a)(["\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  justify-content: center;\n  cursor: pointer;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Raleway', sans-serif;\n\n  &:hover{\n    text-decoration: underline;\n  }\n"]))),_e={storage:[],statusLoading:"idle",error:null},qe=Object(te.b)({name:"products",initialState:_e,reducers:{setProducts:function(e,t){e.storage=t.payload},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetState:function(e){return Object($.a)(Object($.a)({},e),_e)}}}),Ge=qe.reducer,Je=qe.actions,Ue=(Je.setProducts,Je.setStatus,Je.setError,Je.resetState,function(e){return e.products.storage}),We="saga/FETCH_TOKEN",Xe="saga/FETCH_COURSES",De=function(){return{type:We}},Ke=function(){return{type:Xe}},Qe=q.c.div(P||(P=Object(N.a)(["\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n"]))),Ye=function(){var e=U(),t=W(Me),n=W(Ue),r=W(Ne);return Object(G.jsxs)(Qe,{children:[Object(G.jsx)(_.a,{to:"/",children:Object(G.jsx)(Ae.c,{})}),!n.length&&Object(G.jsx)(Ve,{onClick:function(){return e(Ke())},children:"reload courses"}),!!t.length&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Ve,{onClick:function(){return e(He())},children:"Clear basket"}),"Total:",r]}),Object(G.jsx)(_.a,{to:"basket",children:t.length?Object(G.jsx)(Ae.a,{size:"2rem",color:"black"}):Object(G.jsx)(Ae.b,{size:"2rem",color:"grey"})})]})},Ze=q.c.div(z||(z=Object(N.a)(["\n  margin: 0 auto;\n  grid-template-columns: repeat(4, minmax(400px, 1fr));\n  gap: 20px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),$e=function(){var e=Object(M.o)().id,t=W(be).find((function(t){return String(t.id)===e}));return Object(G.jsx)(Ze,{children:t&&Object(G.jsx)(Pe,{course:t,format:"page"})})},et=q.c.div(L||(L=Object(N.a)(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  "]))),tt=q.c.header(A||(A=Object(N.a)(["\n  max-width: 1270px;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 1rem;\n  padding-top: 1rem;\n"]))),nt=q.c.main(R||(R=Object(N.a)(["\n  max-width: 1270px;\n  margin: 0 auto;\n"])));function rt(){var e=W(fe),t=W(be),n=U();return Object(V.useEffect)((function(){n(De())}),[]),Object(V.useEffect)((function(){e&&!t.length&&n(Ke())}),[e]),Object(G.jsxs)(et,{children:[Object(G.jsxs)(tt,{children:[Object(G.jsx)("h1",{children:"Test"}),Object(G.jsx)(Ye,{})]}),Object(G.jsx)(nt,{children:Object(G.jsx)(M.a,{})})]})}var ot=Object(_.b)([{path:"/",element:Object(G.jsx)(rt,{}),errorElement:Object(G.jsx)(J,{}),id:"root",children:[{path:"/",element:Object(G.jsx)(Le,{}),id:"homePage",errorElement:Object(G.jsx)(G.Fragment,{children:"Error on HomePage"})},{path:"/course/:id",element:Object(G.jsx)($e,{}),errorElement:Object(G.jsx)(G.Fragment,{children:"Error on CoursePage"})}]}]),ct=n(15),at=n(21),it=n(57),st=n(56),ut=n.n(st),dt=n(6),lt=n.n(dt),bt=n(13),pt=lt.a.mark(jt);function jt(){var e,t;return lt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("getCoursesSaga start"),n.next=3,Object(bt.c)(fe);case 3:if(e=n.sent){n.next=7;break}return n.next=7,console.log("getCoursesSaga: token === null");case 7:return n.next=9,Object(bt.b)(le());case 9:return n.next=11,Object(bt.b)(ie("loading"));case 11:return n.prev=11,n.next=14,Object(bt.a)(3e3);case 14:return n.next=16,fetch("https://api.wisey.app/api/v1/core/preview-courses/",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Authorization"}}).then((function(e){return e.json()}));case 16:return t=n.sent,n.next=19,console.log("response",t.courses);case 19:return n.next=21,Object(bt.b)(ae(t.courses));case 21:n.next=27;break;case 23:return n.prev=23,n.t0=n.catch(11),n.next=27,Object(bt.b)(ue(n.t0.message));case 27:return n.prev=27,n.next=30,Object(bt.b)(ie("idle"));case 30:return n.finish(27);case 31:case"end":return n.stop()}}),pt,null,[[11,23,27,31]])}var ft=lt.a.mark(gt);function gt(){var e;return lt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getTokenSaga start"),t.next=3,Object(bt.b)(se());case 3:return t.next=5,Object(bt.b)(ie("loading"));case 5:return t.prev=5,t.next=8,fetch("https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions",{method:"GET",headers:{"Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Authorization"}}).then((function(e){return e.json()}));case 8:return e=t.sent,console.log("getTokenSaga response",e.token),t.next=12,Object(bt.b)(de(e.token));case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(5),t.next=18,Object(bt.b)(ue(t.t0.message));case 18:return t.prev=18,t.next=21,Object(bt.b)(ie("idle"));case 21:return t.finish(18);case 22:case"end":return t.stop()}}),ft,null,[[5,14,18,22]])}var xt=lt.a.mark(Ot);function Ot(){var e,t;return lt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("watchSaga"),n.next=3,Object(bt.c)(fe);case 3:return e=n.sent,n.next=6,Object(bt.c)(be);case 6:if(t=n.sent,console.log("watchSaga",e,t),e){n.next=11;break}return n.next=11,Object(bt.e)(We,gt);case 11:if(t.length){n.next=14;break}return n.next=14,Object(bt.d)(Xe,jt);case 14:case"end":return n.stop()}}),xt)}var ht=lt.a.mark(mt);function mt(){return lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("root saga"),e.next=3,Ot();case 3:case"end":return e.stop()}}),ht)}var vt,wt={popup:{}},kt=Object(te.b)({name:"controls",initialState:wt,reducers:{resetState:function(){return wt}}}),yt=kt.reducer,St=(kt.actions.resetState,Object(ct.b)({control:yt,products:Ge,basket:Fe,courses:oe})),Et=Object(it.a)(),Ct={key:"root",storage:ut.a,whitelist:["basket","courses"]},Tt=Object(at.g)(Ct,St),Pt=Object(te.a)({reducer:Tt,middleware:function(e){return e({thunk:!1,serializableCheck:{ignoredActions:[at.a,at.f,at.b,at.c,at.d,at.e]}}).concat(Et)}}),zt=Object(at.h)(Pt);Et.run(mt);var Lt=Object(q.a)(vt||(vt=Object(N.a)(["\n  * {\n    font-family: 'Raleway', sans-serif;\n    user-select: none;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])));F.a.createRoot(document.getElementById("root")).render(Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Lt,{}),Object(G.jsx)(I.a,{store:Pt,children:Object(G.jsx)(H.a,{loading:null,persistor:zt,children:Object(G.jsx)(M.c,{router:ot})})})]}))}},[[72,1,2]]]);
//# sourceMappingURL=main.2ea3b80c.chunk.js.map