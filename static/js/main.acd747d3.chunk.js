(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var r,c,o,a,i,s,u,d,l,b,j,p,f,g,x,O,m,h,v,w,k,y,S,C,T,z,E,I,J,P,A,N,B,M,Y,D,L,R,F,H,G=n(54),Z=n.n(G),X=n(37),Q=n(57),V=n(5),W=n(13),U=n(8),_=n(6),q=n.n(_),K=n(0),$=n(25),ee=n(9),te=n(3),ne=function(){return Object(te.jsx)("div",{children:"This page doesn\xa0t exist."})},re=X.b,ce=X.c,oe=n(22),ae=n(24),ie={storage:[],statusLoading:"idle",error:null},se=Object(ae.b)({name:"products",initialState:ie,reducers:{setProducts:function(e,t){e.storage=t.payload},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetState:function(e){return Object(oe.a)(Object(oe.a)({},e),ie)}}}),ue=se.reducer,de=se.actions,le=(de.setProducts,de.setStatus,de.setError,de.resetState,function(e){return e.products.storage}),be=function(e){return e.products.statusLoading},je=function(e){return e.products.error},pe=n.p+"static/media/star-icon.bdc56500.svg",fe=ee.c.button(r||(r=Object(U.a)(["\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  justify-content: center;\n  cursor: pointer;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Raleway', sans-serif;\n\n  &:hover{\n    text-decoration: underline;\n  }\n"]))),ge={storage:[],totalSum:0,totalCount:0,showSuccess:!1,statusPosting:"idle",error:null},xe=Object(ae.b)({name:"basket",initialState:ge,reducers:{addProductToBasket:function(e,t){var n=t.payload,r=n.count,c=n.product,o=e.storage.findIndex((function(e){return e.product.id===c.id}));o>=0?e.storage[o].countOrdered+=r:e.storage.push({product:c,countOrdered:r}),e.totalSum=Math.ceil(100*e.storage.reduce((function(e,t){return e+Number(t.product.price)*t.countOrdered}),0))/100,e.totalCount=e.storage.reduce((function(e,t){return e+t.countOrdered}),0)},removeProductFromBasket:function(e,t){var n=t.payload,r=n.count,c=n.product,o=e.storage.findIndex((function(e){return e.product.id===c.id}));o>=0&&e.storage[o].countOrdered>=r&&(e.storage[o].countOrdered-=r,e.totalSum=Math.ceil(100*e.storage.reduce((function(e,t){return e+Number(t.product.price)*t.countOrdered}),0))/100,e.totalCount=e.storage.reduce((function(e,t){return e+t.countOrdered}),0))},deleteProductInBasket:function(e,t){var n=t.payload.product,r=e.storage.findIndex((function(e){return e.product.id===n.id}));r>=0&&(e.storage.splice(r,1),e.totalSum=Math.ceil(100*e.storage.reduce((function(e,t){return e+Number(t.product.price)*t.countOrdered}),0))/100,e.totalCount=e.storage.reduce((function(e,t){return e+t.countOrdered}),0))},sendOrderToServer:function(){console.log("sendOrderToServer")},setShowSuccess:function(e,t){e.showSuccess=t.payload},setStatusPosting:function(e,t){e.statusPosting=t.payload},setError:function(e,t){e.error=t.payload,e.statusPosting="failed"},clearBasket:function(){return ge}}}),Oe=xe.reducer,me=xe.actions,he=me.addProductToBasket,ve=me.removeProductFromBasket,we=me.deleteProductInBasket,ke=me.sendOrderToServer,ye=me.setShowSuccess,Se=me.setStatusPosting,Ce=me.setError,Te=me.clearBasket,ze=function(e){return e.basket.storage},Ee=function(e){return e.basket.totalSum},Ie=function(e){return e.basket.totalCount},Je=function(e){return e.basket.showSuccess},Pe=function(e){return e.basket.statusPosting},Ae=function(e){return e.basket.error},Ne=ee.c.div(c||(c=Object(U.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 280px;\n  height: 400px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  margin: 10px;\n  box-sizing: border-box;\n  padding: 0 0 20px;\n\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(o||(o=Object(U.a)(["\n    cursor: auto;\n  "])))}),(function(e){return"page"===e.format&&Object(ee.b)(a||(a=Object(U.a)(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    border-radius: none;\n    box-shadow: none;\n    overflow: visible;\n    margin: 0;\n    padding: 0;\n  "])))})),Be=ee.c.img(i||(i=Object(U.a)(["\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  overflow: hidden;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(s||(s=Object(U.a)(["\n    width: 300px;\n    height: 400px;\n    object-fit: cover;\n    overflow: visible;\n    margin: 0 auto;\n  "])))})),Me=ee.c.div(u||(u=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(d||(d=Object(U.a)(["\n    padding: 50px;\n  "])))})),Ye=ee.c.div(l||(l=Object(U.a)(["\n  font-size: 12px;\n  padding: 0;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(b||(b=Object(U.a)(["\n    font-size: 20px;\n    padding: 10px;\n  "])))})),De=ee.c.h2(j||(j=Object(U.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  max-width: 250px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  overflow-wrap: normal;\n  height: 48px;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(p||(p=Object(U.a)(["\n    font-size: 50px;\n    margin-top: 20px;\n    margin-bottom: 40px;\n    max-width: none;\n    -webkit-line-clamp: inherit;\n    text-align: center;\n    overflow: visible;\n    text-overflow: none;\n    height: auto;\n  "])))})),Le=ee.c.p(f||(f=Object(U.a)(["\n  font-size: 14px;\n  text-align: center;\n  max-height: 50px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  overflow-wrap: break-word;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(g||(g=Object(U.a)(["\n    font-size: 24px;\n    text-align: center;\n    max-height: min-content;\n    text-overflow: clip;\n    overflow: visible;\n    -webkit-line-clamp: inherit;\n  "])))})),Re=ee.c.h3(x||(x=Object(U.a)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 10px;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(O||(O=Object(U.a)(["\n    font-size: 34px;\n    font-weight: bold;\n    margin-top: 20px;\n  "])))})),Fe=ee.c.div(m||(m=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(h||(h=Object(U.a)(["\n  "])))})),He=ee.c.span(v||(v=Object(U.a)(["\n  font-size: 14px;\n  margin-left: 5px;\n"]))),Ge=Object(ee.c)(fe)(w||(w=Object(U.a)(["\n  ","\n"])),(function(e){return"page"===e.format&&Object(ee.b)(k||(k=Object(U.a)(["\n    font-size: 30px;\n    margin: 20px auto;\n  "])))})),Ze=function(e){var t=e.product,n=e.format,r=void 0===n?"card":n,c=t.category,o=t.description,a=t.image,i=t.price,s=t.rating,u=t.title,d=t.id,l=s.count,b=re(),j=Object(V.m)();return Object(te.jsxs)(Ne,{onClick:function(){"card"===r&&j("product/".concat(d))},format:r,children:[Object(te.jsx)(Be,{src:a,alt:o,format:r}),Object(te.jsxs)(Me,{format:r,children:[Object(te.jsx)(Ye,{format:r,children:c}),Object(te.jsx)(De,{format:r,children:u}),Object(te.jsx)(Le,{format:r,children:o}),Object(te.jsxs)(Re,{format:r,children:["$",i]}),Object(te.jsxs)(Fe,{format:r,children:[Object(te.jsx)("img",{src:pe,alt:"star icon"}),Object(te.jsx)(He,{format:r,children:"".concat(l," available")})]})]}),Object(te.jsx)(Ge,{onClick:function(e){return function(e){e.stopPropagation(),b(he({product:t,count:1}))}(e)},format:r,children:"Add"})]})},Xe=Object(ee.d)(y||(y=Object(U.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),Qe=ee.c.div(S||(S=Object(U.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),Ve=ee.c.div(C||(C=Object(U.a)(["\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  margin: 1em auto;\n  border: 0.3em solid #ddd;\n  border-left-color: #000;\n  animation: "," 1.2s infinite linear;\n"])),Xe),We=function(){return console.log("Loader ...."),Object(te.jsx)(Qe,{children:Object(te.jsx)(Ve,{})})},Ue=ee.c.div(T||(T=Object(U.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n\n  ","\n"])),(function(e){return"error"===e.status&&Object(ee.b)(z||(z=Object(U.a)(["\n    color: red;\n  "])))})),_e=function(e){var t=e.message,n=e.status,r=void 0===n?"casual":n;return Object(te.jsx)(Ue,{status:r,children:Object(te.jsx)("h2",{children:t})})},qe="saga/FETCH_PRODUCTS_DATA",Ke="saga/FETCH_ORDER_TO_SERVER",$e="saga/FETCH_TOKEN",et=function(){return{type:qe}},tt=function(){return{type:$e}},nt=n(17),rt={storage:[],token:null,statusLoading:"idle",error:null},ct=Object(ae.b)({name:"courses",initialState:rt,reducers:{setCourses:function(e,t){console.log("setCourses"),e.storage=Object(nt.a)(t.payload)},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},setToken:function(e,t){console.log("setToken"),e.token=t.payload},resetState:function(e){return Object(oe.a)(Object(oe.a)({},e),rt)}}}),ot=ct.reducer,at=ct.actions,it=at.setCourses,st=at.setStatus,ut=at.setError,dt=at.setToken,lt=(at.resetState,function(e){return e.courses.storage}),bt=function(e){return e.courses.token},jt=ee.c.div(E||(E=Object(U.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, minmax(300px, 1fr));\n  gap: 20px;\n  justify-items: center;\n  align-items: center;\n  justify-content: center;\n"]))),pt=function(){var e=re(),t=ce(le),n="loading"===ce(be),r=ce(je),c=0===ce(Ie),o=ce(lt);return Object(K.useEffect)((function(){c||t.length||e(et())}),[]),r?Object(te.jsx)(_e,{message:r,status:"error"}):n?Object(te.jsx)(We,{}):Object(te.jsxs)(jt,{children:[o.map((function(e){return Object(te.jsx)("div",{children:e.title},e.id)})),t.length>0&&t.map((function(e){return Object(te.jsx)(Ze,{product:e},e.id)}))]})},ft=n(29),gt=ee.c.div(I||(I=Object(U.a)(["\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n"]))),xt=function(){var e=re(),t=ce(ze),n=ce(le),r=ce(Ie);return Object(te.jsxs)(gt,{children:[Object(te.jsx)($.a,{to:"/",children:Object(te.jsx)(ft.d,{})}),!n.length&&Object(te.jsx)(fe,{onClick:function(){return e(et())},children:"Load products"}),!!t.length&&Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(fe,{onClick:function(){return e(Te())},children:"Clear basket"}),"Total:",r]}),Object(te.jsx)($.a,{to:"basket",children:t.length?Object(te.jsx)(ft.b,{size:"2rem",color:"black"}):Object(te.jsx)(ft.c,{size:"2rem",color:"grey"})})]})},Ot=ee.c.div(J||(J=Object(U.a)(["\n  & h2 {\n    text-align: center;\n  }\n"]))),mt=ee.c.div(P||(P=Object(U.a)(["\n  border-bottom: 1px solid black;\n"]))),ht=ee.c.div(A||(A=Object(U.a)(["\n  padding: 10px 0;\n  border-bottom: 1px solid black;\n  text-align: right;\n"]))),vt=ee.c.div(N||(N=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"]))),wt=ee.c.div(B||(B=Object(U.a)(["\n  width: 500px;\n\n  & > button {\n    text-align: left;\n  }\n"]))),kt=ee.c.div(M||(M=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n"]))),yt=ee.c.div(Y||(Y=Object(U.a)(["\n  margin-left: 30px;\n  width: 100px;\n  text-align: right;\n"]))),St=Object(ee.c)(fe)(D||(D=Object(U.a)(["\n  margin: 100px auto;\n  font-size: 30px;\n"]))),Ct=function(){var e=re(),t=ce(ze),n=ce(Ee),r="posting"===ce(Pe),c=ce(Ae),o=ce(Je),a=Object(V.m)();Object(K.useEffect)((function(){o&&setTimeout((function(){e(Te()),a("/")}),3e3)}),[o]);return c?Object(te.jsx)(_e,{message:c,status:"error"}):r?Object(te.jsx)(We,{}):o?Object(te.jsx)(_e,{message:"Order sent",status:"casual"}):Object(te.jsx)("div",{children:t.length?Object(te.jsxs)(Ot,{children:[Object(te.jsx)(mt,{children:t.map((function(t){return Object(te.jsxs)(vt,{children:[Object(te.jsx)(wt,{children:Object(te.jsx)(fe,{onClick:function(){return a("/product/".concat(t.product.id))},children:t.product.title})}),Object(te.jsxs)(kt,{children:[Object(te.jsx)(fe,{onClick:function(){return n=t.product,r=t.countOrdered,void e(1!==r?ve({product:n,count:1}):we({product:n}));var n,r},children:Object(te.jsx)(ft.e,{size:"2rem"})}),t.countOrdered,Object(te.jsx)(fe,{onClick:function(){return n=t.product,void e(he({product:n,count:1}));var n},children:Object(te.jsx)(ft.a,{size:"2rem"})}),Object(te.jsx)(fe,{onClick:function(){return n=t.product,void e(we({product:n}));var n},children:Object(te.jsx)(ft.f,{size:"2rem"})}),Object(te.jsx)(yt,{children:"$".concat(Math.round(t.countOrdered*+t.product.price*100)/100)})]})]},t.product.id)}))}),Object(te.jsxs)(ht,{children:["Total:\xa0\xa0\xa0$",n]}),Object(te.jsx)(St,{onClick:function(){return e(ke())},children:"Order"})]}):Object(te.jsx)(_e,{message:"Basket is empty",status:void 0})})},Tt=ee.c.div(L||(L=Object(U.a)(["\n  margin: 0 auto;\n  grid-template-columns: repeat(4, minmax(400px, 1fr));\n  gap: 20px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),zt=function(){var e=Object(V.o)().id,t=ce(le).find((function(t){return String(t.id)===e}));return Object(te.jsx)(Tt,{children:t&&Object(te.jsx)(Ze,{product:t,format:"page"})})},Et=ee.c.div(R||(R=Object(U.a)(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  "]))),It=ee.c.header(F||(F=Object(U.a)(["\n  max-width: 1270px;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 1rem;\n  padding-top: 1rem;\n"]))),Jt=ee.c.main(H||(H=Object(U.a)(["\n  max-width: 1270px;\n  margin: 0 auto;\n"])));function Pt(){var e=ce(bt),t=re();return Object(K.useEffect)((function(){t(tt());var e=function(){var e=Object(W.a)(q.a.mark((function e(){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.wisey.app/api/v1/core/preview-courses/",{method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMGUwMDA3MS04YWZmLTQ3MDAtYmJmOS1iNmQ1ZjcyYTJiNzYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3ODg5MDQsImV4cCI6MTY3OTY4ODkwNH0.0hBEONuBcKkXZCVg0cw8JDJxHkyZzR2Dw5m6ouBwj3w","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Authorization"}});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t(it(r.courses));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log("token",e),Object(te.jsxs)(Et,{children:[Object(te.jsxs)(It,{children:[Object(te.jsx)("h1",{children:"Test"}),e,Object(te.jsx)(xt,{})]}),Object(te.jsx)(Jt,{children:Object(te.jsx)(V.a,{})})]})}var At=Object($.b)([{path:"/",element:Object(te.jsx)(Pt,{}),errorElement:Object(te.jsx)(ne,{}),id:"root",children:[{path:"/",element:Object(te.jsx)(pt,{}),id:"homePage",errorElement:Object(te.jsx)(te.Fragment,{children:"Error on HomePage"})},{path:"/basket",element:Object(te.jsx)(Ct,{}),id:"basketPage",errorElement:Object(te.jsx)(te.Fragment,{children:"Error on BasketPage"})},{path:"/product/:id",element:Object(te.jsx)(zt,{}),errorElement:Object(te.jsx)(te.Fragment,{children:"Error on ProductPage"})}]}]),Nt=n(18),Bt=n(26),Mt=n(62),Yt=n(61),Dt=n.n(Yt),Lt=n(15),Rt=n(83),Ft="http://api.wisey.app/api/v1",Ht=Rt.a.create({baseURL:Ft,headers:{"Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Authorization"}}),Gt=function(e,t){return Object(W.a)(q.a.mark((function n(){var r;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("get",Ft+e,t||"no config"),n.next=3,Ht.get(e,Object(oe.a)({},t));case 3:return r=n.sent,console.log("client.get response",r),n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})))()},Zt=q.a.mark(Xt);function Xt(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getCoursesSaga"),t.next=3,Object(Lt.b)(st("loading"));case 3:return t.prev=3,t.next=6,n="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMGUwMDA3MS04YWZmLTQ3MDAtYmJmOS1iNmQ1ZjcyYTJiNzYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3ODg5MDQsImV4cCI6MTY3OTY4ODkwNH0.0hBEONuBcKkXZCVg0cw8JDJxHkyZzR2Dw5m6ouBwj3w",console.log("getAllCourses",n),Gt("/core/preview-courses",{headers:{Authorization:"token ".concat(n)}});case 6:return e=t.sent,t.next=9,console.log("response",e);case 9:return t.next=11,Object(Lt.b)(it(e));case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(3),t.next=17,Object(Lt.b)(ut(t.t0.message));case 17:return t.prev=17,t.next=20,Object(Lt.b)(st("idle"));case 20:return t.finish(17);case 21:case"end":return t.stop()}var n}),Zt,null,[[3,13,17,21]])}var Qt=q.a.mark(Vt);function Vt(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getTokenSaga"),t.next=3,Object(Lt.b)(st("loading"));case 3:return t.prev=3,t.next=6,fetch("https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions",{method:"GET",headers:{"Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Authorization"}}).then((function(e){return e.json()}));case 6:return e=t.sent,console.log("getTokenSaga response",e.token),t.next=10,Object(Lt.b)(dt(e.token));case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(3),t.next=16,Object(Lt.b)(ut(t.t0.message));case 16:return t.prev=16,t.next=19,Object(Lt.b)(st("idle"));case 19:return t.finish(16);case 20:case"end":return t.stop()}}),Qt,null,[[3,12,16,20]])}var Wt=q.a.mark(Ut);function Ut(){var e,t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("sendOrderSaga"),n.next=3,Object(Lt.b)(Se("posting"));case 3:return n.prev=3,n.next=6,Object(Lt.a)(5e3);case 6:return n.next=8,Object(Lt.c)((function(e){return e.basket.storage}));case 8:return e=n.sent,console.log("Your order is:"),e.forEach((function(e){console.log(e.product.title,e.countOrdered)})),n.next=13,Object(Lt.c)((function(e){return e.basket.totalSum}));case 13:return t=n.sent,console.log("Your total sum is:",t),n.next=17,Object(Lt.b)(ye(!0));case 17:n.next=23;break;case 19:return n.prev=19,n.t0=n.catch(3),n.next=23,Object(Lt.b)(Ce(n.t0.message));case 23:return n.prev=23,n.next=26,Object(Lt.b)(Se("idle"));case 26:return n.finish(23);case 27:case"end":return n.stop()}}),Wt,null,[[3,19,23,27]])}var _t=q.a.mark(qt);function qt(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchSaga"),e.next=3,Object(Lt.e)($e,Vt);case 3:return e.next=5,Object(Lt.e)(qe,Xt);case 5:return e.next=7,Object(Lt.d)(Ke,Ut);case 7:case"end":return e.stop()}}),_t)}var Kt=q.a.mark($t);function $t(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("root saga"),e.next=3,qt();case 3:case"end":return e.stop()}}),Kt)}var en,tn={popup:{}},nn=Object(ae.b)({name:"controls",initialState:tn,reducers:{resetState:function(){return tn}}}),rn=nn.reducer,cn=(nn.actions.resetState,Object(Mt.a)()),on={key:"root",storage:Dt.a,whitelist:["basket"]},an=Object(Nt.b)({control:rn,products:ue,basket:Oe,courses:ot}),sn=Object(Bt.g)(on,an),un=Object(ae.a)({reducer:sn,middleware:function(e){return e({thunk:!1,serializableCheck:{ignoredActions:[Bt.a,Bt.f,Bt.b,Bt.c,Bt.d,Bt.e]}}).concat(cn)}}),dn=Object(Bt.h)(un);cn.run($t);var ln=Object(ee.a)(en||(en=Object(U.a)(["\n  * {\n    font-family: 'Raleway', sans-serif;\n    user-select: none;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])));Z.a.createRoot(document.getElementById("root")).render(Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ln,{}),Object(te.jsx)(X.a,{store:un,children:Object(te.jsx)(Q.a,{loading:null,persistor:dn,children:Object(te.jsx)(V.c,{router:At})})})]}))}},[[81,1,2]]]);
//# sourceMappingURL=main.acd747d3.chunk.js.map