const me=(e,t)=>e===t,we=Symbol("solid-proxy"),I={equals:me};let Z=se;const N={},A=1,R=2,z={owned:null,cleanups:null,context:null,owner:null};var a=null;let k=null,h=null,M=null,g=null,b=null,U=0;function O(e,t){t&&(a=t);const n=h,s=a,i=e.length===0?z:{owned:null,cleanups:null,context:null,owner:s};a=i,h=null;let l;try{q(()=>l=e(()=>X(i)),!0)}finally{h=n,a=s}return l}function ee(e,t){t=t?Object.assign({},I,t):I;const n={value:e,observers:null,observerSlots:null,pending:N,comparator:t.equals||void 0};return[ne.bind(n),s=>(typeof s=="function"&&(s=s(n.pending!==N?n.pending:n.value)),K(n,s))]}function be(e,t,n){D(F(e,t,!0,A))}function P(e,t,n){D(F(e,t,!1,A))}function Se(e,t,n){Z=Ee;const s=F(e,t,!1,A);s.user=!0,b&&b.push(s)}function C(e,t,n){n=n?Object.assign({},I,n):I;const s=F(e,t,!0,0);return s.pending=N,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,D(s),ne.bind(s)}function Ae(e){if(M)return e();let t;const n=M=[];try{t=e()}finally{M=null}return q(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==N){const l=i.pending;i.pending=N,K(i,l)}}},!1),t}function x(e){let t,n=h;return h=null,t=e(),h=n,t}function Xe(e){Se(()=>x(e))}function H(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function Qe(e){const t=Symbol("context");return{id:t,Provider:ve(t),defaultValue:e}}function We(e){return oe(a,e.id)||e.defaultValue}function te(e){const t=C(e);return C(()=>Q(t()))}function ne(){const e=k;if(this.sources&&(this.state||e)){const t=g;g=null,this.state===A||e?D(this):_(this),g=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function K(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(M)return e.pending===N&&M.push(e),e.pending=t,t;let s=!1;return e.value=t,e.observers&&e.observers.length&&q(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&k.disposed.has(l),l.pure?g.push(l):b.push(l),l.observers&&(s&&!l.tState||!s&&!l.state)&&ie(l),s||(l.state=A)}if(g.length>1e6)throw g=[],new Error},!1),t}function D(e){if(!e.fn)return;X(e);const t=a,n=h,s=U;h=a=e,Ce(e,e.value,s),h=n,a=t}function Ce(e,t,n){let s;try{s=e.fn(t)}catch(i){le(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?K(e,s):e.value=s,e.updatedAt=n)}function F(e,t,n,s=A,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==z&&(a.owned?a.owned.push(l):a.owned=[l]),l}function $(e){const t=k;if(e.state!==A)return e.state=0;if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===A||t)D(e);else if(e.state===R||t){const i=g;g=null,_(e),g=i}}function q(e,t){if(g)return e();let n=!1;t||(g=[]),b?n=!0:b=[],U++;try{e()}catch(s){le(s)}finally{xe(n)}}function xe(e){g&&(se(g),g=null),!e&&(b.length?Ae(()=>{Z(b),b=null}):b=null)}function se(e){for(let t=0;t<e.length;t++)$(e[t])}function Ee(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:$(i)}const s=e.length;for(t=0;t<n;t++)$(e[t]);for(t=s;t<e.length;t++)$(e[t])}function _(e){e.state=0;const t=k;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];s.sources&&(s.state===A||t?$(s):(s.state===R||t)&&_(s))}}function ie(e){const t=k;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=R,s.pure?g.push(s):b.push(s),s.observers&&ie(s))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function le(e){throw e}function oe(e,t){return e&&(e.context&&e.context[t]||e.owner&&oe(e.owner,t))}function Q(e){if(typeof e=="function"&&!e.length)return Q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Q(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function ve(e){return function(n){let s;return be(()=>s=x(()=>(a.context={[e]:n.value},te(()=>n.children)))),s}}const Ne=Symbol("fallback");function re(e){for(let t=0;t<e.length;t++)e[t]()}function Pe(e,t,n={}){let s=[],i=[],l=[],r=0,o=t.length>1?[]:null;return H(()=>re(l)),()=>{let u=e()||[],c,f;return x(()=>{let d=u.length,y,E,T,G,B,m,w,S,v;if(d===0)r!==0&&(re(l),l=[],s=[],i=[],r=0,o&&(o=[])),n.fallback&&(s=[Ne],i[0]=O(ye=>(l[0]=ye,n.fallback())),r=1);else if(r===0){for(i=new Array(d),f=0;f<d;f++)s[f]=u[f],i[f]=O(p);r=d}else{for(T=new Array(d),G=new Array(d),o&&(B=new Array(d)),m=0,w=Math.min(r,d);m<w&&s[m]===u[m];m++);for(w=r-1,S=d-1;w>=m&&S>=m&&s[w]===u[S];w--,S--)T[S]=i[w],G[S]=l[w],o&&(B[S]=o[w]);for(y=new Map,E=new Array(S+1),f=S;f>=m;f--)v=u[f],c=y.get(v),E[f]=c===void 0?-1:c,y.set(v,f);for(c=m;c<=w;c++)v=s[c],f=y.get(v),f!==void 0&&f!==-1?(T[f]=i[c],G[f]=l[c],o&&(B[f]=o[c]),f=E[f],y.set(v,f)):l[c]();for(f=m;f<d;f++)f in T?(i[f]=T[f],l[f]=G[f],o&&(o[f]=B[f],o[f](f))):i[f]=O(p);i=i.slice(0,r=d),s=u.slice(0)}return i});function p(d){if(l[f]=d,o){const[y,E]=ee(f);return o[f]=E,t(u[f],y)}return t(u[f])}}}function Ye(e,t){return x(()=>e(t))}function V(){return!0}const fe={get(e,t,n){return t===we?n:e.get(t)},has(e,t){return e.has(t)},set:V,deleteProperty:V,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:V,deleteProperty:V}},ownKeys(e){return e.keys()}};function W(e){return typeof e=="function"?e():e}function Je(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=W(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in W(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(W(e[n])));return[...new Set(t)]}},fe)}function Le(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),i=t.map(l=>{const r={};for(let o=0;o<l.length;o++){const u=l[o];Object.defineProperty(r,u,s[u]?s[u]:{get(){return e[u]}})}return r});return i.push(new Proxy({get(l){return n.has(l)?void 0:e[l]},has(l){return n.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!n.has(l))}},fe)),i}function Ze(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(Pe(()=>e.each,e.children,t||void 0))}function ze(e){let t=!1;const n=C(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return C(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?x(()=>i(s)):i}return e.fallback})}function et(e){let t=!1;const n=te(()=>e.children),s=C(()=>{let i=n();Array.isArray(i)||(i=[i]);for(let l=0;l<i.length;l++){const r=i[l].when;if(r)return[l,r,i[l]]}return[-1]},void 0,{equals:(i,l)=>i&&i[0]===l[0]&&(t?i[1]===l[1]:!i[1]==!l[1])&&i[2]===l[2]});return C(()=>{const[i,l,r]=s();if(i<0)return e.fallback;const o=r.children;return(t=typeof o=="function"&&o.length>0)?x(()=>o(l)):o})}function tt(e){return e}const Te=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ke=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Te]),Me=new Set(["innerHTML","textContent","innerText","children"]),Oe={className:"class",htmlFor:"for"},ue={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},De=new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),$e=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),je={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function nt(e,t){return C(e,void 0,t?void 0:{equals:t})}function ce(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,u=t[i-1].nextSibling,c=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const f=l<s?o?n[o-1].nextSibling:n[l-o]:u;for(;o<l;)e.insertBefore(n[o++],f)}else if(l===o)for(;r<i;)(!c||!c.has(t[r]))&&e.removeChild(t[r]),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!c){c=new Map;let p=o;for(;p<l;)c.set(n[p],p++)}const f=c.get(t[r]);if(f!=null)if(o<f&&f<l){let p=r,d=1,y;for(;++p<i&&p<l&&!((y=c.get(t[p]))==null||y!==f+d);)d++;if(d>f-o){const E=t[r];for(;o<f;)e.insertBefore(n[o++],E)}else e.replaceChild(n[o++],t[r++])}else r++;else e.removeChild(t[r++])}}}const ae="_$DX_DELEGATE";function st(e,t,n){let s;return O(i=>{s=i,Y(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function it(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ge(e,t=window.document){const n=t[ae]||(t[ae]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,qe))}}function Be(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ie(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Fe(e,t,n,s){s?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,i=>n[0](n[1],i)):e.addEventListener(t,n)}function Ve(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,r;for(l=0,r=i.length;l<r;l++){const o=i[l];!o||o==="undefined"||t[o]||(he(e,o,!1),delete n[o])}for(l=0,r=s.length;l<r;l++){const o=s[l],u=!!t[o];!o||o==="undefined"||n[o]===u||!u||(he(e,o,!0),n[o]=u)}return n}function Re(e,t,n={}){const s=e.style;if(t==null||typeof t=="string")return s.cssText=t;typeof n=="string"&&(n={});let i,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(s.setProperty(l,i),n[l]=i);return n}function Ue(e,t,n,s){typeof t=="function"?P(i=>de(e,t(),i,n,s)):de(e,t,void 0,n,s)}function Y(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);P(i=>L(e,t(),i,n),s)}function He(e,t,n,s,i={}){let l,r,o;for(const u in t){if(u==="children"){s||L(e,t.children);continue}const c=t[u];if(c!==i[u]){if(u==="style")Re(e,c,i[u]);else if(u==="classList")Ve(e,c,i[u]);else if(u==="ref")c(e);else if(u.slice(0,3)==="on:")e.addEventListener(u.slice(3),c);else if(u.slice(0,10)==="oncapture:")e.addEventListener(u.slice(10),c,!0);else if(u.slice(0,2)==="on"){const f=u.slice(2).toLowerCase(),p=De.has(f);Fe(e,f,c,p),p&&Ge([f])}else if((o=Me.has(u))||!n&&(ue[u]||(r=ke.has(u)))||(l=e.nodeName.includes("-")))l&&!r&&!o?e[Ke(u)]=c:e[ue[u]||u]=c;else{const f=n&&u.indexOf(":")>-1&&je[u.split(":")[0]];f?Ie(e,f,u,c):Be(e,Oe[u]||u,c)}i[u]=c}}}function Ke(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function he(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function qe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n}});n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function de(e,t,n={},s,i){return!i&&"children"in t&&P(()=>n.children=L(e,t.children,n.children)),P(()=>He(e,t,s,!0,n)),n}function L(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=j(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=j(e,n,s);else{if(l==="function")return P(()=>{let o=t();for(;typeof o=="function";)o=o();n=L(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[];if(J(o,t,i))return P(()=>n=L(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=j(e,n,s),r)return n}else Array.isArray(n)?n.length===0?ge(e,o,s):ce(e,n,o):n==null||n===""?ge(e,o):ce(e,r&&n||[e.firstChild],o);n=o}else if(t instanceof Node){if(Array.isArray(n)){if(r)return n=j(e,n,s,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function J(e,t,n){let s=!1;for(let i=0,l=t.length;i<l;i++){let r=t[i],o;if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=J(e,r)||s;else if((o=typeof r)==="string")e.push(document.createTextNode(r));else if(o==="function")if(n){for(;typeof r=="function";)r=r();s=J(e,Array.isArray(r)?r:[r])||s}else e.push(r),s=!0;else e.push(document.createTextNode(r.toString()))}return s}function ge(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function j(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(i,o):e.insertBefore(i,n):u&&e.removeChild(o)}else l=!0}}else e.insertBefore(i,n);return[i]}const lt=!1,_e="http://www.w3.org/2000/svg";function pe(e,t=!1){return t?document.createElementNS(_e,e):document.createElement(e)}function ot(e){const{useShadow:t}=e,n=document.createTextNode(""),s=e.mount||document.body;function i(){return()=>e.children}if(s instanceof HTMLHeadElement){const[l,r]=ee(!1),o=()=>r(!0);O(u=>Y(s,()=>l()?u():i()(),null)),H(()=>{o()})}else{const l=pe(e.isSVG?"g":"div",e.isSVG),r=t&&l.attachShadow?l.attachShadow({mode:"open"}):l;Object.defineProperty(l,"host",{get(){return n.parentNode}}),Y(r,i()),s.appendChild(l),e.ref&&e.ref(l),H(()=>s.removeChild(l))}return n}function rt(e){const[t,n]=Le(e,["component"]);return C(()=>{const s=t.component;switch(typeof s){case"function":return x(()=>s(n));case"string":const i=$e.has(s),l=pe(s,i);return Ue(l,n,i),l}})}export{rt as D,Ze as F,tt as M,ot as P,ze as S,Se as a,ee as b,C as c,Ge as d,Xe as e,Ue as f,P as g,Ve as h,Y as i,Fe as j,Be as k,Re as l,Je as m,Ye as n,H as o,Qe as p,nt as q,et as r,Le as s,it as t,We as u,lt as v,st as w};
