var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let g;function x(t){g=t}const $=[],y=[],v=[],b=[],w=Promise.resolve();let _=!1;function E(t){v.push(t)}let k=!1;const A=new Set;function N(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];x(e),T(e.$$)}for(x(null),$.length=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];A.has(e)||(A.add(e),e())}v.length=0}while($.length);for(;b.length;)b.pop()();_=!1,k=!1,A.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const C=new Set;function j(t,e){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,w.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(c,l,i,u,a,d,f=[-1]){const p=g;x(c);const m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:l.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let h=!1;if(m.ctx=i?i(c,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),h&&j(c,t)),e})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!u&&u(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(s)}else m.fragment&&m.fragment.c();l.intro&&(($=c.$$.fragment)&&$.i&&(C.delete($),$.i(y))),function(t,n,c,l){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,c),l||E((()=>{const n=s.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(E)}(c,l.target,l.anchor,l.customElement),N()}var $,y;x(p)}function M(t,e,n){const o=t.slice();return o[12]=e[n],o}function O(e){let n,o,r;return{c(){n=u("button"),n.textContent="New Game",p(n,"class","svelte-xtxw8x")},m(t,c){i(t,n,c),o||(r=f(n,"click",e[4]),o=!0)},p:t,d(t){t&&s(n),o=!1,r()}}}function D(t){let e,n,o;return{c(){e=u("img"),p(e,"alt",n=t[12].alive?"Alive":"Dead"),e.src!==(o=t[12].alive?"alive.png":"dead.png")&&p(e,"src",o),h(e,"left",t[12].x+"px"),h(e,"top",t[12].y+"px"),p(e,"class","svelte-xtxw8x")},m(t,n){i(t,e,n)},p(t,r){1&r&&n!==(n=t[12].alive?"Alive":"Dead")&&p(e,"alt",n),1&r&&e.src!==(o=t[12].alive?"alive.png":"dead.png")&&p(e,"src",o),1&r&&h(e,"left",t[12].x+"px"),1&r&&h(e,"top",t[12].y+"px")},d(t){t&&s(e)}}}function H(e){let n,o,r,c,h,g,x,$,y,v,b,w=0===e[1]&&O(e),_=e[0],E=[];for(let t=0;t<_.length;t+=1)E[t]=D(M(e,_,t));return{c(){n=u("main"),o=u("span"),r=a(e[1]),c=a("s"),h=d(),g=u("span"),x=a(e[2]),$=d(),w&&w.c(),y=d();for(let t=0;t<E.length;t+=1)E[t].c();p(o,"id","countdown"),p(o,"class","svelte-xtxw8x"),p(g,"id","count-dead"),p(g,"class","svelte-xtxw8x"),p(n,"class","svelte-xtxw8x")},m(t,s){i(t,n,s),l(n,o),l(o,r),l(o,c),l(n,h),l(n,g),l(g,x),l(n,$),w&&w.m(n,null),l(n,y);for(let t=0;t<E.length;t+=1)E[t].m(n,null);v||(b=f(n,"mousedown",e[3]),v=!0)},p(t,[e]){if(2&e&&m(r,t[1]),4&e&&m(x,t[2]),0===t[1]?w?w.p(t,e):(w=O(t),w.c(),w.m(n,y)):w&&(w.d(1),w=null),1&e){let o;for(_=t[0],o=0;o<_.length;o+=1){const r=M(t,_,o);E[o]?E[o].p(r,e):(E[o]=D(r),E[o].c(),E[o].m(n,null))}for(;o<E.length;o+=1)E[o].d(1);E.length=_.length}},i:t,o:t,d(t){t&&s(n),w&&w.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(E,t),v=!1,b()}}}const L=100;function P(t,e,n){let o,r=[{alive:!0,x:10,y:120},{alive:!1,x:100,y:200}],c=10;setInterval((()=>{document.getElementsByTagName("main")[0].style.width=`${window.innerWidth}px`,document.getElementsByTagName("main")[0].style.height=`${window.innerHeight}px`,(()=>{if(0===c)return;const t={alive:!0,x:Math.random()*window.innerWidth-L,y:Math.random()*window.innerHeight-L};n(0,r=[...r,t])})()}),2e3);const l=(t,e,n,o,r,c)=>n<t&&t<r&&o<e&&e<c,i=()=>{n(1,c--,c),c>0&&setTimeout(i,1e3)},s=()=>{n(1,c=10),i()};s();const u=t=>{const e=document.createElement("audio");e.src=t,e.setAttribute("preload","auto"),e.setAttribute("controls","none"),e.style.display="none",document.body.appendChild(e),e.play()};return t.$$.update=()=>{1&t.$$.dirty&&n(2,o=(t=>{let e=0;for(const n of t)!1===n.alive&&e++;return e})(r))},[r,c,o,t=>{if(0===c)return;const e=t.x,o=t.y;let i=!1;for(const t of r)t.alive&&l(e,o,t.x,t.y,t.x+L,t.y+L)&&(t.alive=!1,i=!0);n(0,r),u(i?"hit.mp3":"miss.mp3")},()=>{n(0,r=[]),s()}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),B(this,t,P,H,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
