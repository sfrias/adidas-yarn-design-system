/*!
 * ChoicesJSStencil: Core, es2017
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==C?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(t,e,r,i){var o=2===r.t||1===r.t&&!t.r.e,u=r.n+i.mode,f=r[u];if(o&&(i["s-sc"]=n(r,i.mode)),f||(f=r[u=r.n+C],o&&(i["s-sc"]=n(r))),f){var c=e.i.head,a=t.o.get(c);if(a||t.o.set(c,a={}),!a[u]){var s=void 0;if((s=e.u("style")).innerHTML=f,a[u]=!0,s){var l=c.querySelectorAll("[data-styles]");e.f(c,s,l.length&&l[l.length-1].nextSibling||c.firstChild)}}}}function r(n,t,e,r,u,f,c){if("class"!==e||f)if("style"===e){for(var a in r)u&&null!=u[a]||(/-/.test(a)?t.style.c(a):t.style[a]="");for(var a in u)r&&u[a]===r[a]||(/-/.test(a)?t.style.setProperty(a,u[a]):t.style[a]=u[a])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!f&&(e in t||-1!==["object","function"].indexOf(typeof u)&&null!==u)){var s=n.a(t);s&&s.s&&s.s[e]?o(t,e,u):"ref"!==e&&(o(t,e,null==u?"":u),null!=u&&!1!==u||n.r.l(t,e))}else null!=u&&"key"!==e?function l(n,t,e,r){void 0===r&&(r="boolean"==typeof e);var i=t!==(t=t.replace(/^xlink\:?/,""));null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(W,P(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(W,P(t),e):n.setAttribute(t,e))}(t,e,u):(f||n.r.v(t,e)&&(null==u||!1===u))&&n.r.l(t,e);else e=P(e)in t?P(e.substring(2)):P(e[2])+e.substring(3),u?u!==r&&n.r.p(t,e,u):n.r.d(t,e);else if(r!==u){var v=i(r),p=i(u),d=v.filter(function(n){return!p.includes(n)}),h=i(t.className).filter(function(n){return!d.includes(n)}),y=p.filter(function(n){return!v.includes(n)&&!h.includes(n)});h.push.apply(h,y),t.className=h.join(" ")}}function i(n){return null==n||""===n?[]:n.trim().split(/\s+/)}function o(n,t,e){try{n[t]=e}catch(n){}}function u(n,t,e,i,o){var u=11===e.y.nodeType&&e.y.host?e.y.host:e.y,f=t&&t.vattrs||O,c=e.vattrs||O;for(o in f)c&&null!=c[o]||null==f[o]||r(n,u,o,f[o],void 0,i,e.m);for(o in c)o in f&&c[o]===("value"===o||"checked"===o?u[o]:f[o])||r(n,u,o,f[o],c[o],i,e.m)}function f(n,t){function e(i,o,f,c,a,v,m,b,w){if(b=o.vchildren[f],s||(p=!0,"slot"===b.vtag&&(l&&t.b(c,l+"-s"),b.vchildren?b.w=!0:b.g=!0)),x(b.vtext))b.y=t.M(b.vtext);else if(b.g)b.y=t.M("");else{if(v=b.y=N||"svg"===b.vtag?t.j("http://www.w3.org/2000/svg",b.vtag):t.u(b.w?"slot-fb":b.vtag),n.k(v)&&n.A.delete(y),N="svg"===b.vtag||"foreignObject"!==b.vtag&&N,u(n,null,b,N),x(l)&&v["s-si"]!==l&&t.b(v,v["s-si"]=l),b.vchildren)for(a=0;a<b.vchildren.length;++a)(m=e(i,b,a,v))&&t.C(v,m);"svg"===b.vtag&&(N=!1)}return b.y["s-hn"]=h,(b.w||b.g)&&(b.y["s-sr"]=!0,b.y["s-cr"]=d,b.y["s-sn"]=b.vname||"",(w=i&&i.vchildren&&i.vchildren[f])&&w.vtag===b.vtag&&i.y&&r(i.y)),b.y}function r(e,i,o,u){n.O=!0;var f=t.S(e);for(o=f.length-1;o>=0;o--)(u=f[o])["s-hn"]!==h&&u["s-ol"]&&(t.x(u),t.f(a(u),u,c(u)),t.x(u["s-ol"]),u["s-ol"]=null,p=!0),i&&r(u,i);n.O=!1}function i(n,r,i,o,u,f,a,s){var l=n["s-cr"];for((a=l&&t.P(l)||n).shadowRoot&&t._(a)===h&&(a=a.shadowRoot);u<=f;++u)o[u]&&(s=x(o[u].vtext)?t.M(o[u].vtext):e(null,i,u,n))&&(o[u].y=s,t.f(a,s,c(r)))}function o(n,e,i,o){for(;e<=i;++e)x(n[e])&&(o=n[e].y,v=!0,o["s-ol"]?t.x(o["s-ol"]):r(o,!0),t.x(o))}function f(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)}function c(n){return n&&n["s-ol"]?n["s-ol"]:n}function a(n){return t.P(n["s-ol"]?n["s-ol"]:n)}var s,l,v,p,d,h,y,m=[];return function b(w,g,M,j,k,$,A,E,C,O,S,P){if(y=w,h=t._(y),d=y["s-cr"],s=j,l=y["s-sc"],p=v=!1,function s(l,v,p){var d=v.y=l.y,h=l.vchildren,y=v.vchildren;N=v.y&&x(t.T(v.y))&&void 0!==v.y.ownerSVGElement,N="svg"===v.vtag||"foreignObject"!==v.vtag&&N,x(v.vtext)?(p=d["s-cr"])?t.W(t.P(p),v.vtext):l.vtext!==v.vtext&&t.W(d,v.vtext):("slot"!==v.vtag&&u(n,l,v,N),x(h)&&x(y)?function m(n,u,l,v,p,d,h,y){for(var m=0,b=0,w=u.length-1,g=u[0],M=u[w],j=v.length-1,k=v[0],$=v[j];m<=w&&b<=j;)if(null==g)g=u[++m];else if(null==M)M=u[--w];else if(null==k)k=v[++b];else if(null==$)$=v[--j];else if(f(g,k))s(g,k),g=u[++m],k=v[++b];else if(f(M,$))s(M,$),M=u[--w],$=v[--j];else if(f(g,$))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.P(g.y)),s(g,$),t.f(n,g.y,t.N(M.y)),g=u[++m],$=v[--j];else if(f(M,k))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.P(M.y)),s(M,k),t.f(n,M.y,g.y),M=u[--w],k=v[++b];else{for(p=null,d=m;d<=w;++d)if(u[d]&&x(u[d].vkey)&&u[d].vkey===k.vkey){p=d;break}x(p)?((y=u[p]).vtag!==k.vtag?h=e(u&&u[b],l,p,n):(s(y,k),u[p]=void 0,h=y.y),k=v[++b]):(h=e(u&&u[b],l,b,n),k=v[++b]),h&&t.f(a(g.y),h,c(g.y))}m>w?i(n,null==v[j+1]?null:v[j+1].y,l,v,b,j):b>j&&o(u,m,w)}(d,h,v,y):x(y)?(x(l.vtext)&&t.W(d,""),i(d,null,v,y,0,y.length-1)):x(h)&&o(h,0,h.length-1)),N&&"svg"===v.vtag&&(N=!1)}(g,M),p){for(function n(e,r,i,o,u,f,c,a,s,l){for(u=0,f=(r=t.S(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.S(t.P(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(l=t.R(o))||8===l)&&""===s||1===l&&null===t.L(o,"slot")&&""===s||1===l&&t.L(o,"slot")===s)&&(m.some(function(n){return n.D===o})||(v=!0,o["s-sn"]=s,m.push({F:i,D:o})));1===t.R(i)&&n(i)}}(M.y),A=0;A<m.length;A++)(E=m[A]).D["s-ol"]||((C=t.M(""))["s-nr"]=E.D,t.f(t.P(E.D),E.D["s-ol"]=C,E.D));for(n.O=!0,A=0;A<m.length;A++){for(E=m[A],S=t.P(E.F),P=t.N(E.F),C=E.D["s-ol"];C=t.H(C);)if((O=C["s-nr"])&&O&&O["s-sn"]===E.D["s-sn"]&&S===t.P(O)&&(O=t.N(O))&&O&&!O["s-nr"]){P=O;break}(!P&&S!==t.P(E.D)||t.N(E.D)!==P)&&E.D!==P&&(t.x(E.D),t.f(S,E.D,P))}n.O=!1}return v&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.S(e)).length;o<u;o++)if(r=i[o],1===t.R(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.R(i[f]),""!==c){if(1===a&&c===t.L(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.q(i[f]).trim()){r.hidden=!0;break}n(r)}}(M.y),m.length=0,M}}function c(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.y),n.vchildren&&n.vchildren.forEach(function(n){c(n,t)}))}function a(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)R.push(arguments[f]);for(;R.length>0;){var c=R.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)R.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&R.push(f);t.class=R.join(" "),R.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],L):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,y:void 0,m:!1}}function s(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}function l(n){return{U:n[0],B:n[1],I:!!n[2],G:!!n[3],Q:!!n[4]}}function v(n,t){if(x(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||4===n)return"false"!==t&&(""===t||!!t);if(n===Number||8===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function p(n,t){n.Y.add(t),n.Z.has(t)||(n.Z.set(t,!0),n.z?n.queue.write(function(){return d(n,t)}):n.queue.tick(function(){return d(n,t)}))}function d(n,e,r,i,o){return k(this,void 0,void 0,function(){var r,u;return $(this,function(f){switch(f.J){case 0:return n.Z.delete(e),n.K.has(e)?[3,12]:(i=n.V.get(e))?[3,6]:(o=n.X.get(e))&&!o["s-rn"]?((o["s-rc"]=o["s-rc"]||[]).push(function(){d(n,e)}),[2]):(i=function c(n,t,e,r,i,o,u){try{r=new(i=n.a(t).nn),function f(n,t,e,r,i){n.tn.set(r,e),n.en.has(e)||n.en.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var o=t[0],u=t[1];(function f(n,t,e,r,i,o,u,c){if(t.type||t.state){var a=n.en.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(u=o&&o.rn)&&x(c=u[t.attr])&&(a[i]=v(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=v(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[D+i]=t.watchCallbacks.slice()),m(r,i,function s(t){return(t=n.en.get(n.tn.get(this)))&&t[i]},function l(e,r){(r=n.tn.get(this))&&(t.state||t.mutable)&&h(n,r,i,e)})}else t.elementRef?y(r,i,e):t.method&&y(e,i,r[i].bind(r))})(n,u,e,r,o,i)})}(n,i,t,r,e),function c(n,t,e){if(t){var r=n.tn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){n.in(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,i.events,r)}catch(e){r={},n.on(e,7,t,!0)}return n.V.set(t,r),r}(n,e,n.un.get(e)),[3,5]);case 1:return f.fn.push([1,4,,5]),i.componentWillLoad?[4,i.componentWillLoad()]:[3,3];case 2:f.cn(),f.J=3;case 3:return[3,5];case 4:return r=f.cn(),n.on(r,3,e),[3,5];case 5:case 6:return[3,11];case 7:return f.fn.push([7,10,,11]),i.componentWillUpdate?[4,i.componentWillUpdate()]:[3,9];case 8:f.cn(),f.J=9;case 9:return[3,11];case 10:return u=f.cn(),n.on(u,5,e),[3,11];case 11:(function s(n,e,r,i){try{var o=e.nn.host,u=e.nn.encapsulation,f="shadow"===u&&n.r.e,c=r;if(!r["s-rn"]){n.an(n,n.r,e,r);var s=r["s-sc"];s&&(n.r.b(r,t(s,!0)),i.render||n.r.b(r,t(s)))}if(i.render||i.hostData||o){n.sn=!0;var l=i.render&&i.render();n.sn=!1;var v=n.ln.get(r)||{};v.y=c;var p=a(null,void 0,l);n.ln.set(r,n.render(r,v,p,f,u))}r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(t){n.sn=!1,n.on(t,8,r,!0)}})(n,n.a(e),e,i),e["s-init"](),f.J=12;case 12:return[2]}})})}function h(n,t,e,r,i){var o=n.en.get(t);o||n.en.set(t,o={}),r!==o[e]&&(o[e]=r,n.V.get(t)&&!n.sn&&t["s-rn"]&&p(n,t))}function y(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function m(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function b(n,t,e,r,i,o){if(n.Y.delete(t),(i=n.X.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.X.delete(t)),n.vn.length&&!n.Y.size)for(;o=n.vn.shift();)o()}function w(n,t,e,r){if(e.connectedCallback=function(){(function e(n,t,r){n.K.delete(r),n.pn.has(r)||(n.Y.add(r),n.pn.set(r,!0),r["s-id"]||(r["s-id"]=n.dn()),function i(n,t,e){for(e=t;e=n.r.T(e);)if(n.k(e)){n.A.has(t)||(n.X.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){n.un.set(r,function e(n,t,r,i,o){return r.mode||(r.mode=n.hn(r)),r["s-cr"]||n.L(r,E)||n.e&&1===t.t||(r["s-cr"]=n.M(""),r["s-cr"]["s-cn"]=!0,n.f(r,r["s-cr"],n.S(r)[0])),n.e||1!==t.t||(r.shadowRoot=r),i={yn:r["s-id"],rn:{}},t.s&&Object.keys(t.s).forEach(function(e){(o=t.s[e].mn)&&(i.rn[o]=n.L(r,o))}),i}(n.r,t,r)),n.bn(t,r)}))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e){if(!n.O&&function r(n,t){for(;t;){if(!n.P(t))return 9!==n.R(t);t=n.P(t)}}(n.r,e)){n.K.set(e,!0),b(n,e),c(n.ln.get(e),!0),n.r.d(e),n.wn.delete(e);var i=n.V.get(e);i&&i.componentDidUnload&&i.componentDidUnload(),[n.X,n.gn,n.un].forEach(function(n){return n.delete(e)})}})(n,this)},e["s-init"]=function(){(function t(n,e,r,i,o,u){if((i=n.V.get(e))&&!n.K.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){n.A.set(e,!0),(u=n.Mn.has(e))||(n.Mn.set(e,!0),e["s-ld"]=void 0,n.r.b(e,r));try{c(n.ln.get(e)),(o=n.gn.get(e))&&(o.forEach(function(n){return n(e)}),n.gn.delete(e)),!u&&i.componentDidLoad?i.componentDidLoad():u&&i.componentDidUpdate&&i.componentDidUpdate()}catch(t){n.on(t,4,e)}b(n,e)}})(n,this,r)},e.forceUpdate=function(){p(n,this)},t.s){var i=Object.entries(t.s),o={};i.forEach(function(n){var t=n[0],e=n[1].mn;e&&(o[e]=t)}),o=Object.assign({},o),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[P(e)];o&&(t[o]=i)})(o,this,n,e)},function u(n,t,e){t.forEach(function(t){var r=t[0],i=t[1],o=i.jn;3&o?m(e,r,function t(){return(n.en.get(this)||{})[r]},function t(e){h(n,this,r,v(i.kn,e))}):32===o&&y(e,r,T)})}(n,i,e)}}function g(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e],i=n.i.body;return i?(r||(r=i.querySelector(e)),r||(r=t[e]=n.u(e),n.C(i,r)),r.componentOnReady()):Promise.resolve()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function M(n,t,r,i,o,u){var c={html:{}},s={},l=r[n]=r[n]||{},v=function d(n,t,e){n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap;"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype);var i={i:e,e:!!e.documentElement.attachShadow,$n:!1,R:function(n){return n.nodeType},u:function(n){return e.createElement(n)},j:function(n,t){return e.createElementNS(n,t)},M:function(n){return e.createTextNode(n)},An:function(n){return e.createComment(n)},f:function(n,t,e){return n.insertBefore(t,e)},x:function(n){return n.remove()},C:function(n,t){return n.appendChild(t)},b:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},S:function(n){return n.childNodes},P:function(n){return n.parentNode},N:function(n){return n.nextSibling},H:function(n){return n.previousSibling},_:function(n){return P(n.nodeName)},q:function(n){return n.textContent},W:function(n,t){return n.textContent=t},L:function(n,t){return n.getAttribute(t)},En:function(n,t,e){return n.setAttribute(t,e)},Cn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},l:function(n,t){return n.removeAttribute(t)},v:function(n,t){return n.hasAttribute(t)},hn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},On:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.T(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},p:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.On(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.On(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===S[s[1]]&&o(n)}),a=i.$n?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.rel(v,e,d,a),p[l]=null}}},d:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},Sn:function(n,e,r){return n&&n.dispatchEvent(new t.CustomEvent(e,r))},T:function(n,t){return(t=i.P(n))&&11===i.R(t)?t.host:t}};try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.$n=!0}}))}catch(n){}return i}(l,r,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.emit=function(n,e,r){return v.Sn(n,t.eventNameFn?t.eventNameFn(e):e,r)},l.h=a,l.Context=t;var h=r["s-defined"]=r["s-defined"]||{},y=0,m={r:v,xn:function b(n,t){var e=n.n;r.customElements.get(e)||(w(m,c[e]=n,t.prototype,u),t.observedAttributes=Object.values(n.s).map(function(n){return n.mn}).filter(function(n){return!!n}),r.customElements.define(n.n,t))},in:t.emit,a:function(n){return c[v._(n)]},Pn:function(n){return t[n]},isClient:!0,k:function(n){return!(!h[v._(n)]&&!m.a(n))},dn:function(){return n+y++},on:function(n,t,e){},_n:function(n){return function t(n,e,r){return{create:g(n,e,r,"create"),componentOnReady:g(n,e,r,"componentOnReady")}}(v,s,n)},queue:t.queue=function M(n,t){function e(t){return function(e){t.push(e),p||(p=!0,n.raf(o))}}function r(n){for(var t=0;t<n.length;t++)try{n[t](u())}catch(n){}n.length=0}function i(n,t){for(var e,r=0;r<n.length&&(e=u())<t;)try{n[r++](e)}catch(n){}r===n.length?n.length=0:0!==r&&n.splice(0,r)}function o(){v++,r(a);var t=u()+7*Math.ceil(v*(1/22));i(s,t),i(l,t),s.length>0&&(l.push.apply(l,s),s.length=0),(p=a.length+s.length+l.length>0)?n.raf(o):v=0}var u=function(){return t.performance.now()},f=Promise.resolve(),c=[],a=[],s=[],l=[],v=0,p=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){c.push(n),1===c.length&&f.then(function(){return r(c)})},read:e(a),write:e(s)}}(l,r),bn:function j(n,t,e){if(n.nn)p(m,t);else{var r={mode:t.mode,scoped:!1};n.Tn(r).then(function(e){try{n.nn=e,function r(n,t,e,i,o){if(i){var u=t.n+(o||C);t[u]||(t[u]=i)}}(0,n,n.t,e.style,e.styleMode)}catch(t){n.nn=function i(){}}p(m,t)})}},sn:!1,z:!1,O:!1,an:e,X:new WeakMap,o:new WeakMap,pn:new WeakMap,wn:new WeakMap,Mn:new WeakMap,A:new WeakMap,tn:new WeakMap,un:new WeakMap,V:new WeakMap,K:new WeakMap,Z:new WeakMap,gn:new WeakMap,Wn:new WeakMap,ln:new WeakMap,en:new WeakMap,Y:new Set,vn:[]};l.onReady=function(){return new Promise(function(n){return m.queue.write(function(){return m.Y.size?m.vn.push(n):n()})})},m.render=f(m,v);var k=v.i.documentElement;return k["s-ld"]=[],k["s-rn"]=!0,k["s-init"]=function(){m.A.set(k,l.loaded=m.z=!0),v.Sn(r,"appload",{detail:{namespace:n}})},function $(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.a(t);if(r)if(n.A.has(t))e(t);else{var i=n.gn.get(t)||[];i.push(e),n.gn.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(m,l,r,r["s-apps"],r["s-cr"]),l.initialized=!0,m}function j(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=r.filter(function(n){return n[0]}).map(function(n){return n[0]});if(u.length>0){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.firstChild)}var c=e.namespace||"ChoicesJSStencil";return H||(H=!0,function a(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,c,n.HTMLElement.prototype)),new Promise(function(r){applyPolyfills(n,function(){if(!F[c]){var u={},f=e.resourcesUrl||"./";A(c,u,n,i,f,o),F[c]=M(c,u,n,i,f,o)}t.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),F[c].xn(function i(n){var t=function e(n){var t=n[0],e=n[1],r=n[3],i=n[4],o=n[5],u={color:{mn:"color"}};if(r)for(var f=0;f<r.length;f++){var c=r[f];u[c[0]]={jn:c[1],Nn:!!c[2],mn:"string"==typeof c[3]?c[3]:c[3]?c[0]:0,kn:c[4]}}return{n:t,Tn:e,s:Object.assign({},u),t:i,Rn:o?o.map(l):void 0}}(n),r=t.Tn,i=_(n[0]);return t.Tn=function(n){var t=n.mode,e=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof r?r:r[t],e,i)},t}(t),e)}),r()})})}this&&this.Ln||(Object.setPrototypeOf||Array);var k=this&&this.Dn||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.Fn(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.Hn?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).Fn())})},$=this&&this.qn||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.Fn)&&!(o=o.call(i,e[1])).Hn)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.J++,{value:e[1],Hn:!1};case 5:f.J++,i=e[1],e=[0];continue;case 7:e=f.Un.pop(),f.fn.pop();continue;default:if(!(o=(o=f.fn).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.J=e[1];break}if(6===e[0]&&f.J<o[1]){f.J=o[1],o=e;break}if(o&&f.J<o[2]){f.J=o[2],f.Un.push(e);break}o[2]&&f.Un.pop(),f.fn.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,Hn:!0}}([e,u])}}var r,i,o,u,f={J:0,cn:function(){if(1&o[0])throw o[1];return o[1]},fn:[],Un:[]};return u={Fn:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},A=function(){};function applyPolyfills(n,t){n.Bn=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[x]&&h(r);var i=e.In;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.Gn)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.In===_?s(n,t.Gn):t.In===T?l(n,t.Gn):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.Qn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.Yn&&n.Yn(n.Gn),p(n)}function s(n,t){n.In===P&&(n.Gn=t,n.In=_,0!==n.Zn.length&&M(p,n))}function l(n,t){n.In===P&&(n.In=T,n.Gn=t,M(a,n))}function v(n,t,e,r){var i=n.Zn,o=i.length;n.Yn=null,i[o]=t,i[o+_]=e,i[o+T]=r,0===o&&n.In&&M(p,n)}function p(n){var t=n.Zn,e=n.In;if(0!==t.length){for(var r,i,o=n.Gn,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.Zn.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.In===P&&(i&&f?c(t,o):a?l(t,u):n===_?s(t,o):n===T&&l(t,o))}function h(n){n[x]=N++,n.In=void 0,n.Gn=void 0,n.Zn=[]}var y,m=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,w=void 0,g=void 0,M=function(n,t){O[b]=n,O[b+1]=t,2===(b+=2)&&(g?g(e):S())},j=(y=void 0!==n?n:void 0)||{},k=j.zn||j.Jn;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.Kn.onmessage=e,function(){return n.Vn.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().Xn("vertx");return void 0!==(w=n.nt||n.tt)?function(){w(e)}:t()}catch(n){return t()}}():t();var x=Math.random().toString(36).substring(2),P=void 0,_=1,T=2,W={error:null},N=0,R=function(){function n(n,t){this.et=n,this.rt=new n(o),this.rt[x]||h(this.rt),m(t)?(this.it=this.length=t.length,this.Gn=Array(this.length),0===this.length?s(this.rt,this.Gn):(this.length=this.length||0,this.ot(t),0===this.it&&s(this.rt,this.Gn))):l(this.rt,Error("Array Methods must be provided an Array"))}return n.prototype.ot=function(n){for(var t=0;this.In===P&&t<n.length;t++)this.ut(n[t],t)},n.prototype.ut=function(n,t){var e=this.et,c=e.resolve;c===i?(c=u(n))===r&&n.In!==P?this.ft(n.In,t,n.Gn):"function"!=typeof c?(this.it--,this.Gn[t]=n):e===L?(f(e=new e(o),n,c),this.ct(e,t)):this.ct(new e(function(t){return t(n)}),t):this.ct(c(n),t)},n.prototype.ft=function(n,t,e){var r=this.rt;r.In===P&&(this.it--,n===T?l(r,e):this.Gn[t]=e),0===this.it&&s(r,this.Gn)},n.prototype.ct=function(n,t){var e=this;v(n,void 0,function(n){return e.ft(_,t,n)},function(n){return e.ft(T,t,n)})},n}(),L=function(){function n(t){if(this[x]=N++,this.Gn=this.In=void 0,this.Zn=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).rt},L.race=function(n){var t=this;return m(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.at=function(n){g=n},L.st=function(n){M=n},L.lt=M,L.vt=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.pt)return}n.Promise=L},L.Promise=L,L.vt(),L}();var e=[];n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||e.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||e.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||e.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||e.push(import("./polyfills/string.js")),n.fetch||e.push(import("./polyfills/fetch.js")),function r(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.dt}catch(n){return!1}}||e.push(import("./polyfills/url.js")),Promise.all(e).then(function(e){e.forEach(function(t){t.applyPolyfill(n,n.document)}),t()})}var E="ssrv",C="$",O={},S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},x=function(n){return null!=n},P=function(n){return n.toLowerCase()},_=function(n){return P(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},T=function(){},W="http://www.w3.org/1999/xlink",N=!1,R=[],L={forEach:function(n,t){n.forEach(function(n,e,r){return t(s(n),e,r)})},map:function(n,t){return n.map(function(n,e,r){return function i(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(s(n),e,r))})}},D="wc-",F={},H=!1;export{j as defineCustomElement,a as h};