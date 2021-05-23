import{r as t,h as e,g as s,a as i}from"./p-cfb21a21.js";import{A as n}from"./p-f0f754be.js";const o=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),r=t=>t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),a=t=>t.replace(/([=!:$/()])/g,"\\$1"),h=t=>t&&t.sensitive?"":"i",c=(t,e,s)=>{for(var i=(s=s||{}).strict,n=!1!==s.end,o=r(s.delimiter||"/"),a=s.delimiters||"./",c=[].concat(s.endsWith||[]).map(r).concat("$").join("|"),l="",u=!1,p=0;p<t.length;p++){var d=t[p];if("string"==typeof d)l+=r(d),u=p===t.length-1&&a.indexOf(d[d.length-1])>-1;else{var f=r(d.prefix||""),g=d.repeat?"(?:"+d.pattern+")(?:"+f+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),l+=d.optional?d.partial?f+"("+g+")?":"(?:"+f+"("+g+"))?":f+"("+g+")"}}return n?(i||(l+="(?:"+o+")?"),l+="$"===c?"$":"(?="+c+")"):(i||(l+="(?:"+o+"(?="+c+"))?"),u||(l+="(?="+o+"|"+c+")")),new RegExp("^"+l,h(s))},l=(t,e,s)=>t instanceof RegExp?((t,e)=>{if(!e)return t;var s=t.source.match(/\((?!\?)/g);if(s)for(var i=0;i<s.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t})(t,e):Array.isArray(t)?((t,e,s)=>{for(var i=[],n=0;n<t.length;n++)i.push(l(t[n],e,s).source);return new RegExp("(?:"+i.join("|")+")",h(s))})(t,e,s):((t,e,s)=>c(((t,e)=>{for(var s,i=[],n=0,h=0,c="",l=e&&e.delimiter||"/",u=e&&e.delimiters||"./",p=!1;null!==(s=o.exec(t));){var d=s[0],f=s[1],g=s.index;if(c+=t.slice(h,g),h=g+d.length,f)c+=f[1],p=!0;else{var y="",m=t[h],b=s[2],v=s[3],w=s[4],x=s[5];if(!p&&c.length){var O=c.length-1;u.indexOf(c[O])>-1&&(y=c[O],c=c.slice(0,O))}c&&(i.push(c),c="",p=!1);var P=y||l,k=v||w;i.push({name:b||n++,prefix:y,delimiter:P,optional:"?"===x||"*"===x,repeat:"+"===x||"*"===x,partial:""!==y&&void 0!==m&&m!==y,pattern:k?a(k):"[^"+r(P)+"]+?"})}}return(c||h<t.length)&&i.push(c+t.substr(h)),i})(t,s),e,s))(t,e,s),u=(t,e)=>new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t),p=(t,e)=>u(t,e)?t.substr(e.length):t,d=t=>"/"===t.charAt(t.length-1)?t.slice(0,-1):t,f=t=>"/"===t.charAt(0)?t:"/"+t,g=t=>"/"===t.charAt(0)?t.substr(1):t,y=t=>{const{pathname:e,search:s,hash:i}=t;let n=e||"/";return s&&"?"!==s&&(n+="?"===s.charAt(0)?s:`?${s}`),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:`#${i}`),n},m=t=>"/"===t.charAt(0),b=t=>Math.random().toString(36).substr(2,t),v=(t,e)=>{for(let s=e,i=s+1,n=t.length;i<n;s+=1,i+=1)t[s]=t[i];t.pop()},w=(t,e)=>{if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(((t,s)=>w(t,e[s])));const s=typeof t;if(s!==typeof e)return!1;if("object"===s){const s=t.valueOf(),i=e.valueOf();if(s!==t||i!==e)return w(s,i);const n=Object.keys(t),o=Object.keys(e);return n.length===o.length&&n.every((s=>w(t[s],e[s])))}return!1},x=(t,e,s,i)=>{let n;"string"==typeof t?(n=(t=>{let e=t||"/",s="",i="";const n=e.indexOf("#");-1!==n&&(i=e.substr(n),e=e.substr(0,n));const o=e.indexOf("?");return-1!==o&&(s=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===s?"":s,hash:"#"===i?"":i,query:{},key:""}})(t),void 0!==e&&(n.state=e)):(n=Object.assign({pathname:""},t),n.search&&"?"!==n.search.charAt(0)&&(n.search="?"+n.search),n.hash&&"#"!==n.hash.charAt(0)&&(n.hash="#"+n.hash),void 0!==e&&void 0===n.state&&(n.state=e));try{n.pathname=decodeURI(n.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+n.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var o;return n.key=s,i?n.pathname?"/"!==n.pathname.charAt(0)&&(n.pathname=((t,e="")=>{let s,i=e&&e.split("/")||[],n=0;const o=t&&t.split("/")||[],r=t&&m(t),a=e&&m(e),h=r||a;if(t&&m(t)?i=o:o.length&&(i.pop(),i=i.concat(o)),!i.length)return"/";if(i.length){const t=i[i.length-1];s="."===t||".."===t||""===t}else s=!1;for(let t=i.length;t>=0;t--){const e=i[t];"."===e?v(i,t):".."===e?(v(i,t),n++):n&&(v(i,t),n--)}if(!h)for(;n--;n)i.unshift("..");!h||""===i[0]||i[0]&&m(i[0])||i.unshift("");let c=i.join("/");return s&&"/"!==c.substr(-1)&&(c+="/"),c})(n.pathname,i.pathname)):n.pathname=i.pathname:n.pathname||(n.pathname="/"),n.query=(o=n.search||"")?(/^[?#]/.test(o)?o.slice(1):o).split("&").reduce(((t,e)=>{let[s,i]=e.split("=");return t[s]=i?decodeURIComponent(i.replace(/\+/g," ")):"",t}),{}):{},n};let O=0;const P={},k=(t,e={})=>{"string"==typeof e&&(e={path:e});const{path:s="/",exact:i=!1,strict:n=!1}=e,{re:o,keys:r}=((t,e)=>{const s=`${e.end}${e.strict}`,i=P[s]||(P[s]={}),n=JSON.stringify(t);if(i[n])return i[n];const o=[],r={re:l(t,o,e),keys:o};return O<1e4&&(i[n]=r,O+=1),r})(s,{end:i,strict:n}),a=o.exec(t);if(!a)return null;const[h,...c]=a,u=t===h;return i&&!u?null:{path:s,url:"/"===s&&""===h?"/":h,isExact:u,params:r.reduce(((t,e,s)=>(t[e.name]=c[s],t)),{})}},E=class{constructor(e){t(this,e),this.pinned=!0}render(){return e("div",null,e("div",{id:"toolbar"},e("stencil-route-link",{url:"/encyclopedia"},e("button",null,"Encyclopedia")),e("stencil-route-link",{url:"/deck"},e("button",null,"Deck"))),e("div",{id:"content"},e("main",null,e("stencil-router",null,e("stencil-route-switch",{scrollTopOffset:0},e("stencil-route",{url:"/",component:"app-home",exact:!0}),e("stencil-route",{url:"/profile/:name",component:"app-profile"}),e("stencil-route",{url:"/encyclopedia/:entry",component:"journal-main"}),e("stencil-route",{url:"/encyclopedia",component:"journal-main"}),e("stencil-route",{url:"/deck",component:"deck-viewer"}))))))}};E.style="header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}#toolbar{height:50px}#content{max-height:calc(100vh - 50px);overflow:auto}";const j=class{constructor(e){t(this,e),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=k(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};var e,s;this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):!this.match||(s=this.previousMatch,null==(e=this.match)&&null==s||null!=s&&e&&s&&e.path===s.path&&e.url===s.url&&w(e.params,s.params))||!this.routeViewsUpdated||this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?e(this.component,Object.assign({},t)):void 0}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}};n.injectProps(j,["location","history","historyType","routeViewsUpdated"]),j.style="stencil-route.inactive{display:none}";const R=(t,e,s)=>s(t.confirm(e)),S=(t,e)=>{const s=t[e],i="__storage_test__";try{return s.setItem(i,i),s.removeItem(i),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==s.length}},T=class{constructor(e){t(this,e),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=k(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var e,s,i;if(!((e=t).metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((i=this.root,"/"==(s=this.url).charAt(0)&&"/"==i.charAt(i.length-1)?i.slice(0,i.length-1)+s:i+s))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),e(this.custom,Object.assign({},t),e("slot",null))}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}};n.injectProps(T,["history","location","root"]);const U=t=>"STENCIL-ROUTE"===t.tagName,_=class{constructor(e){t(this,e),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=i(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(U).map(((s,i)=>{const n=k(t.pathname,{path:s.url,exact:s.exact,strict:!0});return n&&-1===e&&(e=i),{el:s,match:n}})),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const s=this.subscribers[this.activeIndex];this.scrollTopOffset&&(s.el.scrollTopOffset=this.scrollTopOffset),s.el.group=this.group,s.el.match=s.match,s.el.componentUpdated=t=>{this.queue.write((()=>{this.subscribers.forEach(((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"}))})),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return e("slot",null)}get el(){return s(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};n.injectProps(_,["location","routeViewsUpdated"]);const A=(t,...e)=>{t||console.warn(...e)},L=()=>{let t,e=[];return{setPrompt:e=>(A(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,s,i,n)=>{if(null!=t){const o="function"==typeof t?t(e,s):t;"string"==typeof o?"function"==typeof i?i(o,n):(A(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),n(!0)):n(!1!==o)}else n(!0)},appendListener:t=>{let s=!0;const i=(...e)=>{s&&t(...e)};return e.push(i),()=>{s=!1,e=e.filter((t=>t!==i))}},notifyListeners:(...t)=>{e.forEach((e=>e(...t)))}}},M=(t,e="scrollPositions")=>{let s=new Map;const i=(e,i)=>{if(s.set(e,i),S(t,"sessionStorage")){const e=[];s.forEach(((t,s)=>{e.push([s,t])})),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(S(t,"sessionStorage")){const i=t.sessionStorage.getItem(e);s=i?new Map(JSON.parse(i)):s}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:i,get:t=>s.get(t),has:t=>s.has(t),capture:e=>{i(e,[t.scrollX,t.scrollY])}}},C={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+g(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:g,decodePath:f},slash:{encodePath:f,decodePath:f}},H=(t,e)=>{const s=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:s})},$={browser:(t,e={})=>{let s=!1;const i=t.history,n=t.location,o=t.navigator,r=(t=>{const e=t.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&t.history&&"pushState"in t.history})(t),a=!(-1===o.userAgent.indexOf("Trident")),h=M(t),c=null!=e.forceRefresh&&e.forceRefresh,l=null!=e.getUserConfirmation?e.getUserConfirmation:R,g=null!=e.keyLength?e.keyLength:6,m=e.basename?d(f(e.basename)):"",v=()=>{try{return t.history.state||{}}catch(t){return{}}},w=t=>{t=t||{};const{key:e,state:s}=t,{pathname:i,search:o,hash:r}=n;let a=i+o+r;return A(!m||u(a,m),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+m+'".'),m&&(a=p(a,m)),x(a,s,e||b(g))},O=L(),P=t=>{h.capture(I.location.key),Object.assign(I,t),I.location.scrollPosition=h.get(I.location.key),I.length=i.length,O.notifyListeners(I.location,I.action)},k=t=>{((t,e)=>void 0===e.state&&-1===t.userAgent.indexOf("CriOS"))(o,t)||j(w(t.state))},E=()=>{j(w(v()))},j=t=>{if(s)s=!1,P();else{const e="POP";O.confirmTransitionTo(t,e,l,(s=>{s?P({action:e,location:t}):S(t)}))}},S=t=>{let e=U.indexOf(I.location.key),i=U.indexOf(t.key);-1===e&&(e=0),-1===i&&(i=0);const n=e-i;n&&(s=!0,$(n))},T=w(v());let U=[T.key],_=0,C=!1;const H=t=>m+y(t),$=t=>{i.go(t)},D=e=>{_+=e,1===_?(t.addEventListener("popstate",k),a&&t.addEventListener("hashchange",E)):0===_&&(t.removeEventListener("popstate",k),a&&t.removeEventListener("hashchange",E))},I={length:i.length,action:"POP",location:T,createHref:H,push:(t,e)=>{A(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s="PUSH",o=x(t,e,b(g),I.location);O.confirmTransitionTo(o,s,l,(t=>{if(!t)return;const e=H(o),{key:a,state:h}=o;if(r)if(i.pushState({key:a,state:h},"",e),c)n.href=e;else{const t=U.indexOf(I.location.key),e=U.slice(0,-1===t?0:t+1);e.push(o.key),U=e,P({action:s,location:o})}else A(void 0===h,"Browser history cannot push state in browsers that do not support HTML5 history"),n.href=e}))},replace:(t,e)=>{A(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s="REPLACE",o=x(t,e,b(g),I.location);O.confirmTransitionTo(o,s,l,(t=>{if(!t)return;const e=H(o),{key:a,state:h}=o;if(r)if(i.replaceState({key:a,state:h},"",e),c)n.replace(e);else{const t=U.indexOf(I.location.key);-1!==t&&(U[t]=o.key),P({action:s,location:o})}else A(void 0===h,"Browser history cannot replace state in browsers that do not support HTML5 history"),n.replace(e)}))},go:$,goBack:()=>$(-1),goForward:()=>$(1),block:(t="")=>{const e=O.setPrompt(t);return C||(D(1),C=!0),()=>(C&&(C=!1,D(-1)),e())},listen:t=>{const e=O.appendListener(t);return D(1),()=>{D(-1),e()}},win:t};return I},hash:(t,e={})=>{let s=!1,i=null,n=0,o=!1;const r=t.location,a=t.history,h=-1===t.navigator.userAgent.indexOf("Firefox"),c=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:l=R,hashType:g="slash"}=e,m=e.basename?d(f(e.basename)):"",{encodePath:v,decodePath:O}=C[g],P=()=>{const t=r.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},k=t=>{const e=r.href.indexOf("#");r.replace(r.href.slice(0,e>=0?e:0)+"#"+t)},E=()=>{let t=O(P());return A(!m||u(t,m),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+m+'".'),m&&(t=p(t,m)),x(t,void 0,b(c))},j=L(),S=t=>{Object.assign(B,t),B.length=a.length,j.notifyListeners(B.location,B.action)},T=()=>{const t=P(),e=v(t);if(t!==e)k(e);else{const t=E(),e=B.location;if(!s&&(n=e).pathname===(o=t).pathname&&n.search===o.search&&n.hash===o.hash&&n.key===o.key&&w(n.state,o.state))return;if(i===y(t))return;i=null,U(t)}var n,o},U=t=>{if(s)s=!1,S();else{const e="POP";j.confirmTransitionTo(t,e,l,(s=>{s?S({action:e,location:t}):_(t)}))}},_=t=>{let e=D.lastIndexOf(y(B.location)),i=D.lastIndexOf(y(t));-1===e&&(e=0),-1===i&&(i=0);const n=e-i;n&&(s=!0,I(n))},M=P(),H=v(M);M!==H&&k(H);const $=E();let D=[y($)];const I=t=>{A(h,"Hash history go(n) causes a full page reload in this browser"),a.go(t)},N=(t,e)=>{n+=e,1===n?t.addEventListener("hashchange",T):0===n&&t.removeEventListener("hashchange",T)},B={length:a.length,action:"POP",location:$,createHref:t=>"#"+v(m+y(t)),push:(t,e)=>{A(void 0===e,"Hash history cannot push state; it is ignored");const s="PUSH",n=x(t,void 0,b(c),B.location);j.confirmTransitionTo(n,s,l,(t=>{if(!t)return;const e=y(n),o=v(m+e);if(P()!==o){i=e,(t=>{r.hash=t})(o);const t=D.lastIndexOf(y(B.location)),a=D.slice(0,-1===t?0:t+1);a.push(e),D=a,S({action:s,location:n})}else A(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),S()}))},replace:(t,e)=>{A(void 0===e,"Hash history cannot replace state; it is ignored");const s="REPLACE",n=x(t,void 0,b(c),B.location);j.confirmTransitionTo(n,s,l,(t=>{if(!t)return;const e=y(n),o=v(m+e);P()!==o&&(i=e,k(o));const r=D.indexOf(y(B.location));-1!==r&&(D[r]=e),S({action:s,location:n})}))},go:I,goBack:()=>I(-1),goForward:()=>I(1),block:(e="")=>{const s=j.setPrompt(e);return o||(N(t,1),o=!0),()=>(o&&(o=!1,N(t,-1)),s())},listen:e=>{const s=j.appendListener(e);return N(t,1),()=>{N(t,-1),s()}},win:t};return B}},D=class{constructor(e){t(this,e),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=i(this,"isServer"),this.queue=i(this,"queue")}componentWillLoad(){this.history=$[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((t=>{t=H(t,this.root),this.location=t})),this.location=H(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write((()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])})):this.queue.write((()=>{e.win.scrollTo(0,t)}))}render(){if(this.location&&this.history)return e(n.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},e("slot",null))}get el(){return s(this)}};export{E as app_root,j as stencil_route,T as stencil_route_link,_ as stencil_route_switch,D as stencil_router}