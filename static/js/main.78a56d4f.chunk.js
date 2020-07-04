(this["webpackJsonpgithub-api-test"]=this["webpackJsonpgithub-api-test"]||[]).push([[0],{24:function(n,e,t){n.exports=t(35)},35:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(19),o=t.n(c),i=t(6),u=t(1),l=t(2);function d(){var n=Object(u.a)(["\n  body {\n    box-sizing: border-box; \n    margin: 0px; \n    padding: 0px;\n    font-family: Arial;\n  }\n  a {\n    text-decoration: none;\n  }\n"]);return d=function(){return n},n}var f=Object(l.a)(d()),s=t(9),m=t(3);function b(){var n=Object(u.a)(["\n  color: white;\n\n  &:hover {\n    color: #ccc;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(u.a)(["\n  background-color: #20232a;\n  color: white;\n  padding: 10px;\n  font-size: 25px;\n  padding-left: 50px;\n"]);return p=function(){return n},n}var x=l.b.div(p()),v=l.b.a(b()),g=function(){return a.a.createElement(x,null,a.a.createElement(v,{href:"/GitHub-API-Test/"},"GitHub API Test"))};function h(){var n=Object(u.a)(["\n  margin: 15px;\n  padding: 10px 15px;\n  font-size: 18px;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  color: #fff;\n  background-color: #79b6f2;\n  border: none;\n  border-radius: 11px;\n  box-shadow: 0 5px #999;\n\n  &:hover {\n    background-color: #4d92d6;\n  }\n\n  &:active {\n    background-color: #3d6fa1;\n    box-shadow: 0 2px #666;\n    transform: translateY(3px);\n  }\n"]);return h=function(){return n},n}function E(){var n=Object(u.a)(["\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 5px 10px;\n"]);return E=function(){return n},n}function j(){var n=Object(u.a)(["\n  font-size: 20px;\n  margin: 25px;\n  border-bottom: 1px solid #ccc;\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return O=function(){return n},n}var w=l.b.form(O()),y=l.b.label(j()),z=l.b.input(E()),S=l.b.button(h()),k=function(n){var e=n.onSubmit,t=Object(r.useState)(""),c=Object(i.a)(t,2),o=c[0],u=c[1],l=Object(r.useState)(),d=Object(i.a)(l,2),f=d[0],s=d[1],m=function(n){return n&&""!==n?n.match(/^[A-z|0-9]+[A-z|0-9|-]*$/g)?n.length>39&&(s("exceededSize"),!0):(s("wrongFormat"),!0):(s("required"),!0)};return a.a.createElement(w,{onSubmit:function(n){n.preventDefault(),m(o)||fetch("https://api.github.com/users/".concat(o)).then((function(n){return n.json().then((function(n){e(n),u("")}))}))}},a.a.createElement(y,null,"Enter GitHub user profile name"),a.a.createElement(z,{type:"text",value:o,onChange:function(n){var e=n.target.value;return s(null),u(e)},placeholder:"Profile name..."}),"required"===f&&a.a.createElement(a.a.Fragment,null,"Value is required"),"wrongFormat"===f&&a.a.createElement(a.a.Fragment,null,"Name should be in format [A-z|0-9|-]"),"exceededSize"===f&&a.a.createElement(a.a.Fragment,null,"Name length should be between 1 and 39 characters"),a.a.createElement(S,{type:"submit",disabled:!!f},"Search"))};function P(){var n=Object(u.a)(["\n  font-size: 13px;\n"]);return P=function(){return n},n}function A(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: #24292e;\n  font-size: 18px;\n\n  &:hover {\n    color: #4d92d6;\n  }\n"]);return A=function(){return n},n}function C(){var n=Object(u.a)(["\n  font-size: 14px;\n  text-align: center;\n  color: #666666;\n  margin-bottom: 20px;\n"]);return C=function(){return n},n}function F(){var n=Object(u.a)(["\n  font-size: 26px;\n  color: #24292e;\n"]);return F=function(){return n},n}function G(){var n=Object(u.a)(["\n  width: 200px;\n  border-radius: 50%;\n"]);return G=function(){return n},n}function H(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n\n  @media screen and (max-width: 600px) {\n    align-items: center;\n    justify-content: center;\n    margin: 10px 0 0 0;\n  }\n"]);return H=function(){return n},n}function I(){var n=Object(u.a)(["\n  display: flex;\n  margin: 15px;\n\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n"]);return I=function(){return n},n}var D=l.b.div(I()),T=l.b.div(H()),_=l.b.img(G()),q=l.b.div(F()),L=l.b.div(C()),B=l.b.div(A()),J=l.b.div(P()),N=function(n){var e=n.avatar_url,t=n.name,r=n.bio,c=n.public_repos;return a.a.createElement(D,null,a.a.createElement(_,{alt:"avatar",src:e}),a.a.createElement(T,null,a.a.createElement(q,null,t),a.a.createElement(L,null,r),a.a.createElement(s.b,{to:"/GitHub-API-Test/publicrepos"},a.a.createElement(B,null,a.a.createElement("div",null,a.a.createElement("strong",null,c)),a.a.createElement(J,null,"Public Repositories")))))},R=a.a.createContext({}),U=function(){var n=a.a.useContext(R),e=n.profDetails,t=n.setProfDetails;return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{onSubmit:function(n){t(n)}}),e&&a.a.createElement(N,e))},W=t(23);function $(){var n=Object(u.a)(["\n  color: #4d92d6;\n"]);return $=function(){return n},n}function V(){var n=Object(u.a)(["\n  color: #666666;\n  font-size: 12px;\n  margin-top: 5px;\n"]);return V=function(){return n},n}function Y(){var n=Object(u.a)(["\n  text-decoration: none;\n  font-size: 20px;\n  color: #24292e;\n\n  &:hover {\n    color: #4d92d6;\n  }\n"]);return Y=function(){return n},n}function K(){var n=Object(u.a)(["\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  word-wrap: break-word;\n  width: 21%;\n  min-width: 250px;\n  margin: 15px;\n  padding: 5px;\n\n  @media screen and (max-width: 600px) {\n    min-width: 70%;\n  }\n\n  @media screen and (max-width: 1100px) {\n    min-width: 40%;\n  }\n"]);return K=function(){return n},n}function M(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n    min-width: 100%;\n  }\n\n  @media screen and (max-width: 1100px) {\n    min-width: 80%;\n    justify-content: center;\n  }\n"]);return M=function(){return n},n}function Q(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return Q=function(){return n},n}function X(){var n=Object(u.a)(["\n  width: 17px;\n  color: #4d92d6;\n  cursor: pointer;\n"]);return X=function(){return n},n}function Z(){var n=Object(u.a)(["\n  cursor: pointer;\n  font-size: 14px;\n  color: #4d92d6;\n  margin: 5px 0 10px 0;\n"]);return Z=function(){return n},n}function nn(){var n=Object(u.a)(["\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 5px 10px;\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return en=function(){return n},n}var tn=l.b.div(en()),rn=l.b.input(nn()),an=l.b.label(Z()),cn=l.b.input(X()),on=l.b.div(Q()),un=l.b.div(M()),ln=l.b.div(K()),dn=l.b.a(Y()),fn=l.b.div(V()),sn=l.b.div($()),mn=function(n,e){var t=n.stars,r=e.stars;return t<r?1:t>r?-1:0},bn=function(n){var e=n.reposUrl,t=Object(r.useState)([]),c=Object(i.a)(t,2),o=c[0],u=c[1],l=Object(r.useState)(!1),d=Object(i.a)(l,2),f=d[0],s=d[1],m=Object(r.useState)(""),b=Object(i.a)(m,2),p=b[0],x=b[1],v=Object(r.useState)(!0),g=Object(i.a)(v,2),h=g[0],E=g[1];Object(r.useEffect)((function(){(function(n){return new Promise((function(e){fetch(n).then((function(n){return n.json().then((function(n){return e(n.map((function(n){return{name:n.name,key:n.id,stars:n.stargazers_count,language:n.language,url:n.html_url}})))}))}))}))})(e).then((function(n){u(n),E(!1)}))}),[e]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(tn,null,a.a.createElement(y,null,"Search repository by name"),a.a.createElement(rn,{type:"text",value:p,onChange:function(n){var e=n.target.value;return x(e)},placeholder:"Repository name..."}),a.a.createElement(an,null,a.a.createElement(cn,{type:"checkbox",checked:f,onChange:function(){return s(!f)}}),"Sort by stars")),h&&a.a.createElement("div",null,"Loading..."),a.a.createElement(on,null,a.a.createElement(un,null,function(){var n=Object(W.a)(o);return f&&(n=n.sort(mn)),""!==p&&(n=n.filter((function(n){return n.name.toLowerCase().includes(p.toLowerCase())}))),n}().map((function(n){var e=n.name,t=n.url,r=n.key,c=n.language,o=n.stars;return a.a.createElement(ln,{key:r},a.a.createElement(dn,{href:t},e),a.a.createElement(sn,null,"\u2606",o),a.a.createElement(fn,null,c))})))))},pn=function(){var n=a.a.useContext(R).profDetails;if(!n)return a.a.createElement(m.a,{to:"/GitHub-API-Test/"});var e=n.repos_url;return a.a.createElement(bn,{reposUrl:e})},xn=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],c=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(g,null),a.a.createElement(R.Provider,{value:{profDetails:t,setProfDetails:c}},a.a.createElement(s.a,null,a.a.createElement(m.d,null,a.a.createElement(m.b,{exact:!0,path:"/GitHub-API-Test/publicrepos"},a.a.createElement(pn,null)),a.a.createElement(m.b,{path:"/GitHub-API-Test/"},a.a.createElement(U,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(xn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.78a56d4f.chunk.js.map