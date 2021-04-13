import{f as e,e as t,a as n}from"./vendor.5d360820.js";const a=(e,t)=>{let n;return function(...a){clearTimeout(n),n=setTimeout((()=>{clearTimeout(n),e(...a)}),t)}};document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`),window.addEventListener("resize",a((()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)}),250));const r=document.querySelector(".posterize"),s=document.querySelector(".canvas-main"),o=s.getContext("2d");o.imageSmoothingEnabled=!1;const i=()=>{const e=parseInt(U[z.scale].value,10)/100;return{width:Math.ceil(C.naturalWidth*e),height:Math.ceil(C.naturalHeight*e)}},c=()=>{let e=""+(r.checked?`url('${(()=>{const e=e=>{const t=parseInt(e.value,10),n=[];for(let a=0;a<=t;a++)n[a]=(1/t*a).toFixed(1);return n.join(",")};return`data:image/svg+xml;utf8,<svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n    >\n      <filter id="posterize">\n        <feComponentTransfer>\n          <feFuncR type="discrete" tableValues="${e(U[T.red])}" />\n          <feFuncG type="discrete" tableValues="${e(U[T.green])}" />\n          <feFuncB type="discrete" tableValues="${e(U[T.blue])}" />\n          <feFuncA type="discrete" tableValues="${e(U[T.alpha])}" />\n        </feComponentTransfer>\n      </filter>\n    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim()})()}#posterize') `:"");for(const[t,n]of Object.entries(I)){const a=U[t];n.initial!==parseInt(a.value,10)&&(e+=`${t}(${a.value}${a.dataset.unit}) `)}return e.trim()||"none"};const l=new function(){return new Worker("/assets/monochromeworker.639a9f8d.js",{type:"module"})};const u=new function(){return new Worker("/assets/colorworker.3fa4b704.js",{type:"module"})};const d=new function(){return new Worker("/assets/svgoworker.8c425653.js",{type:"module"})},m=async e=>new Promise(((t,n)=>{const a=new MessageChannel;a.port1.onmessage=({data:e})=>{a.port1.close(),e.error?n(e.error):t(e.result)},d.postMessage({svg:e},[a.port2])})),p=document.querySelector(".output-monochrome"),g=document.querySelector(".output-color"),f=async()=>{const e=(()=>{const{width:e,height:t}=i();return s.width=e,s.height=t,o.clearRect(0,0,e,t),o.filter=c(),o.drawImage(C,0,0,C.naturalWidth,C.naturalHeight,0,0,e,t),o.getImageData(0,0,e,t)})();(async e=>new Promise((async(t,n)=>{const a=new MessageChannel;a.port1.onmessage=({data:e})=>{a.port1.close(),e.error?n(e.error):t(e.result)};const r={turdsize:parseInt(U[M.turdsize].value,10)};l.postMessage({imageData:e,config:r},[a.port2])})))(e).then(m).then((e=>p.innerHTML=e)),(async e=>new Promise((async(t,n)=>{const a=new MessageChannel;a.port1.onmessage=({data:e})=>{a.port1.close(),e.error?n(e.error):t(e.result)};const r={turdsize:parseInt(U[M.turdsize].value,10)};u.postMessage({imageData:e,config:r},[a.port2])})))(e).then(m).then((e=>g.innerHTML=e))};let h;const v={},y=["en","de"];const w=document.querySelector(".open"),L=document.querySelector(".save-image"),x=document.querySelector(".save-bw-svg"),b=document.querySelector(".save-color-svg"),E=document.querySelector(".drop");w.addEventListener("click",(async()=>{try{const t=await e({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(t);C.addEventListener("load",(()=>{URL.revokeObjectURL(n)}),{once:!0}),C.src=n}catch(t){console.error(t.name,t.message)}})),E.addEventListener("dragover",(e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"})),E.addEventListener("drop",(async e=>{e.preventDefault();const n=e.dataTransfer.items[0];if("file"===n.kind){let e;if(C.addEventListener("load",(()=>{URL.revokeObjectURL(e)}),{once:!0}),t){const t=await n.getAsFileSystemHandle();if("directory"===t.kind)return;{const n=await t.getFile();e=URL.createObjectURL(n),C.src=e}}else{const t=n.getAsFile();e=URL.createObjectURL(t),C.src=e}}})),L.addEventListener("click",(async()=>{try{const e=await(async(e,t="image/png")=>new Promise((n=>{e.toBlob((e=>{n(e)}),t)})))(s);await n(e,{fileName:"",description:"PNG file"})}catch(e){console.error(e.name,e.message)}})),x.addEventListener("click",(async()=>{try{const e=new Blob([p.innerHTML],{type:"image/svg+xml"});await n(e,{fileName:"",description:"SVG file"})}catch(e){console.error(e.name,e.message)}})),b.addEventListener("click",(async()=>{try{const e=new Blob([g.innerHTML],{type:"image/svg+xml"});await n(e,{fileName:"",description:"SVG file"})}catch(e){console.error(e.name,e.message)}}));const S=new class{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=y[0],this.translations=null}detectLanguageAndLocal(){var e;const t=localStorage.getItem("language");if(t)return JSON.parse(t);let[n,a=null]=null==(e=navigator.language)?void 0:e.split("-");n&&y.includes(n)||(n=y[0]);const r={language:n,locale:a};return localStorage.setItem("language",JSON.stringify(r)),r}async getTranslations(){const{language:e,locale:t}=this.currentLanguageAndLocale,n="/src/i18n/"+e+(t?"-"+t:"")+".js",a=(await function(e,t){if(!t)return e();if(void 0===h){const e=document.createElement("link").relList;h=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in v)return;v[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":h,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import(n)),void 0)).default;this.translations=a}t(e){return this.translations[e]}},k=document.querySelector(".preprocess"),j=document.querySelector(".posterize"),$=document.querySelector("[for=posterize]"),C=document.querySelector("img"),O=document.querySelector(".reset-all"),q=document.querySelector("footer"),T={red:"red",green:"green",blue:"blue",alpha:"alpha"},z={scale:"scale"},M={turdsize:"turdsize"},I={["brightness"]:{unit:"%",initial:100,min:0,max:200},["contrast"]:{unit:"%",initial:100,min:0,max:200},["grayscale"]:{unit:"%",initial:0,min:0,max:100},["hue-rotate"]:{unit:"deg",initial:0,min:0,max:360},["invert"]:{unit:"%",initial:0,min:0,max:100},["opacity"]:{unit:"%",initial:100,min:0,max:100},["saturate"]:{unit:"%",initial:100,min:0,max:200},["sepia"]:{unit:"%",initial:0,min:0,max:100}},R={[T.red]:{unit:"steps",initial:5,min:1,max:10},[T.green]:{unit:"steps",initial:5,min:1,max:10},[T.blue]:{unit:"steps",initial:5,min:1,max:10},[T.alpha]:{unit:"steps",initial:1,min:1,max:10}},H={[z.scale]:{unit:"%",initial:100,min:1,max:100}},P={[M.turdsize]:{unit:"pixels",initial:2,min:1,max:50}},U={},A={},F=(e,t)=>{const{unit:n,min:r,max:s,initial:o}=t,i=document.createElement("div");i.classList.add("preprocess-input");const c=document.createElement("label");c.textContent=S.t(e)||e,c.for=e;const l=document.createElement("span");A[e]=l,l.textContent=` (${n?`${o}${S.t(n)}`:o})`;const u=document.createElement("input");U[e]=u,u.id=e,u.type="range",u.class=e,u.min=r,u.max=s,u.value=o,n&&(u.dataset.unit=n),u.addEventListener("change",(()=>{l.textContent=` (${n?`${u.value}${S.t(n)}`:u.value})`})),Object.keys(T).includes(e)||Object.keys(M).includes(e),u.addEventListener("change",a((async()=>{await f()}),250));const d=document.createElement("button");d.type="button",d.textContent=S.t("reset"),d.addEventListener("click",(async()=>{u.value=o,u.dispatchEvent(new Event("change"))})),c.append(l),c.append(u),i.append(c),i.append(d),k.append(i)};j.addEventListener("change",(async()=>{f()}));const V=()=>{O.textContent=S.t("resetAll"),$.textContent=S.t("posterize"),w.textContent=S.t("openImage"),L.textContent=S.t("saveImage"),x.textContent=S.t("saveMonochromeSVG"),b.textContent=S.t("saveColorSVG"),E.textContent=S.t("dropFileHere"),q.innerHTML=S.t("footerNote")};O.addEventListener("click",(async()=>{const e=(e,t,n)=>{U[e].value=n,A[e].textContent=` (${t?`${n}${S.t(t)}`:n})`};for(const[t,n]of Object.entries(R))e(t,n.unit,n.initial);for(const[t,n]of Object.entries(H))e(t,n.unit,n.initial);for(const[t,n]of Object.entries(I))e(t,n.unit,n.initial);for(const[t,n]of Object.entries(P))e(t,n.unit,n.initial);f()})),(async()=>{await S.getTranslations(),V();for(const[e,t]of Object.entries(R))F(e,t);for(const[e,t]of Object.entries(H))F(e,t);for(const[e,t]of Object.entries(I))F(e,t);for(const[e,t]of Object.entries(P))F(e,t);C.addEventListener("load",(()=>{C.width=C.naturalWidth,C.height=C.naturalHeight,f()})),C.complete&&C.dispatchEvent(new Event("load"))})();
