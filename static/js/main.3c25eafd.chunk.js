(this.webpackJsonptidsestimatspoker=this.webpackJsonptidsestimatspoker||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(7),r=n.n(i),a=(n(17),n(2)),o=n(5),u=function(e){var t=Math.floor(e.length/2),n=Object(o.a)(e).sort((function(e,t){return e-t}));return e.length%2!==0?n[t]:(n[t-1]+n[t])/2},l=function(e){var t=0;for(var n in e)t+=e[n];return t},j=n(0),h=function(e){var t=e.array,n=function(e){return Math.min.apply(Math,Object(o.a)(e))}(t),s=function(e){return Math.max.apply(Math,Object(o.a)(e))}(t),c=u(t),i=function(e){return e.reduce((function(e,t){return e+t}),0)/e.length}(t);return Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Min"}),Object(j.jsx)("th",{children:"Max"}),Object(j.jsx)("th",{children:"Median"}),Object(j.jsx)("th",{children:"Medel"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[n,"h"]}),Object(j.jsxs)("td",{children:[s,"h"]}),Object(j.jsxs)("td",{children:[c,"h"]}),Object(j.jsxs)("td",{children:[i,"h"]})]})]})})},m=function(e){console.log(e),fetch("https://timeestimator.herokuapp.com/estimate",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("data",e)})).catch((function(e){return console.log(e)}))};n(19);var b=function(e){var t=e.user,n=e.issueName,c=e.issue,i=Object(s.useState)(""),r=Object(a.a)(i,2),o=r[0],u=r[1];return Object(j.jsxs)("form",{className:"time-estimation-form",onSubmit:function(e){e.preventDefault();var s=parseInt(o,10),c={issueName:n,time:s,user:t};console.log("newInput: ",c),m(c)},children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Jag estimerar att det tar: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"number",value:o,onChange:function(e){var t=e.target;t.value<1&&(t.value=1),t.value>999&&(t.value=999),u(t.value)},required:!0,placeholder:function(){for(var e=0,n=Object.entries(c);e<n.length;e++){var s=Object(a.a)(n[e],2),i=s[0],r=s[1];if(i===t)return r.toString()}}()}),"timmar"]}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{className:"saveTimeBtn",type:"submit",children:"Spara estimerade timmar"})})]})},d=function(e){return e.every((function(e){return"number"==typeof e}))},f=function(e,t){fetch("https://timeestimator.herokuapp.com/setactualtime",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({time:e,issueName:t.issueName})}).then((function(e){return e.json()})).then((function(e){console.log("data",e)})).catch((function(e){return console.log(e)}))},O=function(e){var t=e.issue,n=e.user,c=Object(s.useState)([t.bjorn,t.emil,t.kimmie,t.love,t.stina]),i=Object(a.a)(c,2),r=i[0],o=i[1];Object(s.useEffect)((function(){o([t.bjorn,t.emil,t.kimmie,t.love,t.stina])}),[e.issue]);var u=Object(s.useState)(t.actualTime),l=Object(a.a)(u,2),m=l[0],O=l[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"issue",children:[Object(j.jsx)("div",{className:"issueName",children:t.issueName}),Object(j.jsx)(b,{user:n,issueName:t.issueName,issue:t}),d(r)?Object(j.jsx)(h,{array:r}):"",Object(j.jsxs)("div",{className:"actualTime",children:[Object(j.jsx)("label",{children:"Faktisk tid"}),Object(j.jsx)("input",{className:"actualInput",type:"text",placeholder:function(){var e;return(null===(e=t.actualTime)||void 0===e?void 0:e.toString())||"-"}(),onChange:function(e){var t=parseInt(e.target.value);console.log("typeof hoursAsNumber",typeof t),O(t)}})]}),Object(j.jsx)("button",{className:"saveActBtn",onClick:function(){f(m,t)},children:"Spara"})]})})},p=n(8);var x=function(e){var t,n=e.map((function(e){return{emil:e.emil||0,bjorn:e.bjorn||0,stina:e.stina||0,love:e.love||0,kimmie:e.kimmie||0}})),s=[],c=Object(p.a)(n);try{for(c.s();!(t=c.n()).done;){var i=t.value,r=[];for(var a in i)r.push(i[a]);var o=u(r);s.push(o)}}catch(l){c.e(l)}finally{c.f()}return s};var v=function(e){var t=[];return e.forEach((function(e){e.actualTime&&t.push(e.actualTime)})),t},g=function(e){var t=e.estimate,n=e.realTime,s=l(t),c=l(n),i=function(e,t){return t-e}(s,c);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{children:[Object(j.jsx)("h3",{children:"Totalt"}),Object(j.jsxs)("p",{children:["Estimerad tid: ",s," timmar. "]}),Object(j.jsxs)("p",{children:["Faktisk tid: ",c," timmar. "]}),Object(j.jsxs)("p",{children:["Diff: ",i," timmar."]})]})})},N=function(e){var t=e.projectName,n=e.issues,s=x(n),c=v(n);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:["Projekt: ",t," "]}),Object(j.jsx)(g,{estimate:s,realTime:c})]})};n(20);var y=function(e){var t=e.user,n=t.charAt(0).toLocaleUpperCase()+t.slice(1),c=Object(s.useState)([]),i=Object(a.a)(c,2),r=i[0],o=i[1],u=Object(s.useState)([]),l=Object(a.a)(u,2),h=l[0],m=l[1];return Object(s.useEffect)((function(){fetch("https://api.github.com/repos/Kimmiich/Tidsestimatspoker-Frontend/issues").then((function(e){return e.json()})).then((function(e){o(e.map((function(e){return{issueName:e.title,githubProject:"Tidsestimatspoker-Frontend"}})))}))}),[]),Object(s.useEffect)((function(){fetch("https://timeestimator.herokuapp.com/setallissues",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){console.log("data from mongodb",e)})).catch((function(e){return console.log(e)}))}),[r]),Object(s.useEffect)((function(){fetch("https://timeestimator.herokuapp.com/getallissues-with-all-estimates").then((function(e){return e.json()})).then((function(e){console.log("data from mongodb with time estimates",e),m(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsxs)("section",{className:"signed-in-page",children:[Object(j.jsx)("header",{className:"signed-in-header",children:Object(j.jsx)("h1",{className:"signed-in-text",children:n})}),Object(j.jsxs)("main",{className:"project-container",children:[Object(j.jsx)("header",{children:Object(j.jsx)(N,{projectName:"Tidsestimatspoker-Frontend",issues:h})}),Object(j.jsx)("div",{children:h.map((function(e,n){return Object(j.jsx)(O,{issue:e,user:t},n)}))})]})]})},k=n(9),S=n(10),T=n(12),C=n(11),M=(n(21),function(e){Object(T.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(k.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={userName:""},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"startpage-container",children:Object(j.jsxs)("main",{className:"startpage-box",children:[Object(j.jsxs)("section",{className:"startpage-sign-in",children:[Object(j.jsx)("h1",{className:"title",children:"TIDSESTIMATOR"}),Object(j.jsxs)("select",{name:"userNames",id:"userNames",onChange:function(t){console.log("onChange",t.target.value),e.setState({userName:t.target.value})},children:[Object(j.jsx)("option",{value:"",children:"V\xe4lj anv\xe4ndare"}),Object(j.jsx)("option",{value:"kimmie",children:"Kimmie"}),Object(j.jsx)("option",{value:"stina",children:"Stina"}),Object(j.jsx)("option",{value:"emil",children:"Emil"}),Object(j.jsx)("option",{value:"love",children:"Love"}),Object(j.jsx)("option",{value:"bjorn",children:"Bj\xf6rn"})]}),Object(j.jsx)("button",{className:"sign-in",onClick:function(){e.props.getUser(e.state.userName)},children:"Logga in"})]}),Object(j.jsx)("section",{className:"footer",children:Object(j.jsx)("p",{className:"explanation-text",children:"V\xe4lj en anv\xe4ndare f\xf6r att logga in"})})]})})}}]),n}(c.a.Component)),F=M;var E=function(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],i=function(e){console.log("saveUser()",e),c(e)};return Object(j.jsx)(j.Fragment,{children:n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"logOutBtn",onClick:function(){return i("")},children:"Logga ut"}),Object(j.jsx)(y,{user:n})]}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(F,{getUser:i})})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3c25eafd.chunk.js.map