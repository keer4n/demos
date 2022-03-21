var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(t){return document.createTextNode(t)}function h(){return f(" ")}function d(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function m(t,e){t.value=null==e?"":e}let $;function v(t){$=t}const x=[],b=[],y=[],w=[],k=Promise.resolve();let _=!1;function T(t){y.push(t)}const q=new Set;let S=0;function E(){const t=$;do{for(;S<x.length;){const t=x[S];S++,v(t),z(t.$$)}for(v(null),x.length=0,S=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];q.has(e)||(q.add(e),e())}y.length=0}while(x.length);for(;w.length;)w.pop()();_=!1,q.clear(),v(t)}function z(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const j=new Set;let O;function B(t,e){t&&t.i&&(j.delete(t),t.i(e))}function C(t,e,n,l){if(t&&t.o){if(j.has(t))return;j.add(t),O.c.push((()=>{j.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function N(t){t&&t.c()}function A(t,n,i,s){const{fragment:r,on_mount:c,on_destroy:u,after_update:a}=t.$$;r&&r.m(n,i),s||T((()=>{const n=c.map(e).filter(o);u?u.push(...n):l(n),t.$$.on_mount=[]})),a.forEach(T)}function L(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(x.push(t),_||(_=!0,k.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,o,i,s,r,u,a,f=[-1]){const h=$;v(e);const d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||h.$$.root};a&&a(d.root);let p=!1;if(d.ctx=i?i(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return d.ctx&&r(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&F(e,t)),n})):[],d.update(),p=!0,l(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(c)}else d.fragment&&d.fragment.c();o.intro&&B(e.$$.fragment),A(e,o.target,o.anchor,o.customElement),E()}v(h)}class I{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(e){let n,o,i;return{c(){n=u("div"),p(n,"class","collapsible-separator svelte-mv3zv0")},m(t,l){r(t,n,l),e[5](n),o||(i=[d(n,"click",e[4]),d(n,"mouseover",e[2]),d(n,"focus",e[2]),d(n,"mouseout",e[3]),d(n,"blur",e[3])],o=!0)},p:t,i:t,o:t,d(t){t&&c(n),e[5](null),o=!1,l(i)}}}function R(t,e,n){let l,{collapseTo:o="top"}=e;return t.$$set=t=>{"collapseTo"in t&&n(0,o=t.collapseTo)},[o,l,t=>{n(1,"top"==o?l.style.height="2px":l.style.width="2px",l)},t=>{n(1,"top"==o?l.style.height="0":l.style.width="0",l)},t=>{let e;e="top"==o?t.target.previousSibling.previousSibling:t.target.nextSibling.nextSibling;let n=e.style.display;n||(n="block"),e.style.display="none"==n?"block":"none"},function(t){b[t?"unshift":"push"]((()=>{l=t,n(1,l)}))}]}class J extends I{constructor(t){super(),H(this,t,R,M,i,{collapseTo:0})}}function U(e){let n;return{c(){n=u("div"),n.innerHTML="<h1>TFJS</h1>"},m(t,e){r(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class V extends I{constructor(t){super(),H(this,t,null,U,i,{})}}function P(t){let e,n,o,i,$,v,x,b,y,w,k,_,T,q,S,E,z,j,O,F,H,I,M,R,U,V,P,W,D,G;return $=new J({props:{collapseTo:"right"}}),{c(){e=u("div"),n=u("div"),o=u("canvas"),i=h(),N($.$$.fragment),v=h(),x=u("div"),b=u("fieldset"),y=u("label"),w=f("Height\n                "),k=u("input"),_=h(),T=u("label"),q=f("Width\n                "),S=u("input"),E=h(),z=u("label"),j=f("Text\n                "),O=u("input"),F=h(),H=u("label"),I=f("Font Size\n                "),M=u("input"),R=h(),U=u("div"),V=a("svg"),P=a("path"),p(o,"class","canvas svelte-kq8ihx"),p(n,"class","content svelte-kq8ihx"),p(k,"name","height"),p(k,"type","number"),p(k,"class","svelte-kq8ihx"),p(y,"for","height"),p(y,"class","svelte-kq8ihx"),p(S,"name","width"),p(S,"type","number"),p(S,"class","svelte-kq8ihx"),p(T,"for","width"),p(T,"class","svelte-kq8ihx"),p(O,"name","textContent"),p(O,"type","text"),p(O,"class","svelte-kq8ihx"),p(z,"for","textContent"),p(z,"class","svelte-kq8ihx"),p(M,"name","fontSize"),p(M,"type","number"),p(M,"class","svelte-kq8ihx"),p(H,"for","fontSize"),p(H,"class","svelte-kq8ihx"),p(b,"class","svelte-kq8ihx"),p(P,"d","M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"),p(V,"xmlns","http://www.w3.org/2000/svg"),p(V,"width","24"),p(V,"height","24"),p(V,"viewBox","0 0 24 24"),p(V,"fill","gray"),p(V,"class","svelte-kq8ihx"),p(U,"class","download svelte-kq8ihx"),p(x,"class","settings svelte-kq8ihx"),p(e,"class","container svelte-kq8ihx")},m(l,c){r(l,e,c),s(e,n),s(n,o),t[6](o),s(e,i),A($,e,null),s(e,v),s(e,x),s(x,b),s(b,y),s(y,w),s(y,k),m(k,t[1]),s(b,_),s(b,T),s(T,q),s(T,S),m(S,t[2]),s(b,E),s(b,z),s(z,j),s(z,O),m(O,t[3]),s(b,F),s(b,H),s(H,I),s(H,M),m(M,t[4]),s(x,R),s(x,U),s(U,V),s(V,P),W=!0,D||(G=[d(k,"input",t[7]),d(S,"input",t[8]),d(O,"input",t[9]),d(M,"input",t[10]),d(V,"click",t[5])],D=!0)},p(t,[e]){2&e&&g(k.value)!==t[1]&&m(k,t[1]),4&e&&g(S.value)!==t[2]&&m(S,t[2]),8&e&&O.value!==t[3]&&m(O,t[3]),16&e&&g(M.value)!==t[4]&&m(M,t[4])},i(t){W||(B($.$$.fragment,t),W=!0)},o(t){C($.$$.fragment,t),W=!1},d(n){n&&c(e),t[6](null),L($),D=!1,l(G)}}}function W(t,e,n){let l,o=200,i=200,s="Hello",r="60";return t.$$.update=()=>{31&t.$$.dirty&&l&&(n(0,l.height=o,l),n(0,l.width=i,l),(()=>{const t=l.getContext("2d");t.fillStyle="blue",t.fillRect(0,0,l.width,l.height)})(),((t,e)=>{const n=l.getContext("2d");n.fillStyle="black",n.font=`${e}px serif`,n.textAlign="center",n.textBaseline="middle",n.measureText(t),n.fillText(t,l.width/2,l.height/2,l.width)})(s,r))},[l,o,i,s,r,()=>{l.toBlob((t=>{const e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download="preview.png",n.click()}))},function(t){b[t?"unshift":"push"]((()=>{l=t,n(0,l),n(1,o),n(2,i),n(3,s),n(4,r)}))},function(){o=g(this.value),n(1,o)},function(){i=g(this.value),n(2,i)},function(){s=this.value,n(3,s)},function(){r=g(this.value),n(4,r)}]}class D extends I{constructor(t){super(),H(this,t,W,P,i,{})}}function G(t,e,n){const l=t.slice();return l[4]=e[n],l}function K(t){let e,n,l,o,i=t[4]+"";return{c(){e=u("option"),n=f(i),e.__value=l=t[4],e.value=e.__value,e.selected=o=t[4]==t[0]},m(t,l){r(t,e,l),s(e,n)},p(t,n){1&n&&o!==(o=t[4]==t[0])&&(e.selected=o)},d(t){t&&c(e)}}}function Q(t){let e,n,o,i,a,f,g,m,$,v,x=Object.keys(t[1]),b=[];for(let e=0;e<x.length;e+=1)b[e]=K(G(t,x,e));i=new J({});var y=t[1][t[0]];return y&&(g=new y({})),{c(){e=u("main"),n=u("select");for(let t=0;t<b.length;t+=1)b[t].c();o=h(),N(i.$$.fragment),a=h(),f=u("div"),g&&N(g.$$.fragment),p(n,"name","demo"),p(f,"class","view")},m(l,c){r(l,e,c),s(e,n);for(let t=0;t<b.length;t+=1)b[t].m(n,null);s(e,o),A(i,e,null),s(e,a),s(e,f),g&&A(g,f,null),m=!0,$||(v=d(n,"change",t[2]),$=!0)},p(t,[e]){if(3&e){let l;for(x=Object.keys(t[1]),l=0;l<x.length;l+=1){const o=G(t,x,l);b[l]?b[l].p(o,e):(b[l]=K(o),b[l].c(),b[l].m(n,null))}for(;l<b.length;l+=1)b[l].d(1);b.length=x.length}if(y!==(y=t[1][t[0]])){if(g){O={r:0,c:[],p:O};const t=g;C(t.$$.fragment,1,0,(()=>{L(t,1)})),O.r||l(O.c),O=O.p}y?(g=new y({}),N(g.$$.fragment),B(g.$$.fragment,1),A(g,f,null)):g=null}},i(t){m||(B(i.$$.fragment,t),g&&B(g.$$.fragment,t),m=!0)},o(t){C(i.$$.fragment,t),g&&C(g.$$.fragment,t),m=!1},d(t){t&&c(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t),L(i),g&&L(g),$=!1,v()}}}function X(t,e,n){const l={TFJS:V,TextToImage:D};let o=Object.keys(l)[0];document.getElementsByTagName("title")[0].innerText=o;let i=localStorage.getItem("selectedView");i&&(o=i);return[o,l,t=>{n(0,o=t.target.value),localStorage.setItem("selectedView",o),document.getElementsByTagName("title")[0].innerText=o}]}return new class extends I{constructor(t){super(),H(this,t,X,Q,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
