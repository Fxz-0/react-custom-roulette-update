(function(h,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react"),require("webfontloader"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","webfontloader","styled-components"],u):(h=typeof globalThis<"u"?globalThis:h||self,u(h.ReactCustomRoulette={},h.React,h.WebFont,h.styled))})(this,(function(h,u,nt,j){"use strict";var le={exports:{}},ae={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function at(){if(_e)return ae;_e=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function n(R,c,f){var v=null;if(f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),"key"in c){f={};for(var D in c)D!=="key"&&(f[D]=c[D])}else f=c;return c=f.ref,{$$typeof:t,type:R,key:v,ref:c!==void 0?c:null,props:f}}return ae.Fragment=a,ae.jsx=n,ae.jsxs=n,ae}var re={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function rt(){return pe||(pe=1,process.env.NODE_ENV!=="production"&&(function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case te:return"Profiler";case ee:return"StrictMode";case o:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case M:return"Portal";case V:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case s:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case I:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function a(e){return""+e}function n(e){try{a(e);var r=!1}catch{r=!0}if(r){r=console;var l=r.error,m=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",m),a(e)}}function R(e){if(e===k)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===I)return"<...>";try{var r=t(e);return r?"<"+r+">":"<...>"}catch{return"<...>"}}function c(){var e=H.A;return e===null?null:e.getOwner()}function f(){return Error("react-stack-top-frame")}function v(e){if($.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function D(e,r){function l(){E||(E=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}function X(){var e=t(this.type);return _[e]||(_[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function U(e,r,l,m,p,T){var d=l.ref;return e={$$typeof:C,type:e,key:r,props:l,_owner:m},(d!==void 0?d:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:X}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:p}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:T}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function Y(e,r,l,m,p,T){var d=r.children;if(d!==void 0)if(m)if(se(d)){for(m=0;m<d.length;m++)J(d[m]);Object.freeze&&Object.freeze(d)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else J(d);if($.call(r,"key")){d=t(e);var K=Object.keys(r).filter(function(Ae){return Ae!=="key"});m=0<K.length?"{key: someKey, "+K.join(": ..., ")+": ...}":"{key: someKey}",g[d+m]||(K=0<K.length?"{"+K.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,m,d,K,d),g[d+m]=!0)}if(d=null,l!==void 0&&(n(l),d=""+l),v(r)&&(n(r.key),d=""+r.key),"key"in r){l={};for(var ie in r)ie!=="key"&&(l[ie]=r[ie])}else l=r;return d&&D(l,typeof e=="function"?e.displayName||e.name||"Unknown":e),U(e,d,l,c(),p,T)}function J(e){B(e)?e._store&&(e._store.validated=1):typeof e=="object"&&e!==null&&e.$$typeof===I&&(e._payload.status==="fulfilled"?B(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function B(e){return typeof e=="object"&&e!==null&&e.$$typeof===C}var S=u,C=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),V=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),o=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),H=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=Object.prototype.hasOwnProperty,se=Array.isArray,x=console.createTask?console.createTask:function(){return null};S={react_stack_bottom_frame:function(e){return e()}};var E,_={},W=S.react_stack_bottom_frame.bind(S,f)(),G=x(R(f)),g={};re.Fragment=k,re.jsx=function(e,r,l){var m=1e4>H.recentlyCreatedOwnerStacks++;return Y(e,r,l,!1,m?Error("react-stack-top-frame"):W,m?x(R(e)):G)},re.jsxs=function(e,r,l){var m=1e4>H.recentlyCreatedOwnerStacks++;return Y(e,r,l,!0,m?Error("react-stack-top-frame"):W,m?x(R(e)):G)}})()),re}var Ne;function ot(){return Ne||(Ne=1,process.env.NODE_ENV==="production"?le.exports=at():le.exports=rt()),le.exports}var q=ot();const me=["darkgrey","lightgrey"],ge=["black"],st="black",it="black",ct="black",lt=5,ut=0,ft=0,mt=5,gt=60,Le="Nunito",he=20,De="bold",ke="normal",Ie=1,ht=4,dt=!1,Fe=["arial","verdana","tahoma","trebuchet ms","times","garamond","brush script mt","courier new","georgia","helvetica","times new roman","serif","sans-serif","monospace","cursive","fantasy"],de=(t,a,n=!0,R=4)=>{if(a<=0)return console.error("numberOfPrizes must be greater than 0"),0;if(t<0||t>=a)return console.error(`prizeNumber (${t}) must be between 0 and ${a-1}`),0;const c=360/a,f=43+c/2,v=n?(-1+Math.random()*2)*c*.35:0,U=c*(a-t)-f+v+360*R;return a-t>a/2?-360+U:U},Re=(t,a,n)=>(t>a&&(console.warn(`clamp: min (${t}) is greater than max (${a}), swapping`),[t,a]=[a,t]),Math.min(Math.max(t,+n),a)),Te=t=>(t%360+360)%360,Ee=t=>{if(!t||typeof t!="string")return!1;const a=t.trim().toLowerCase();return a!==""&&!Fe.includes(a)},oe=t=>{if(!t||t.length===0)return console.warn("getQuantity: prizeMap is empty"),0;const a=t[t.length-1];return!a||a.length===0?(console.warn("getQuantity: last array in prizeMap is empty"),0):a[a.length-1]+1},xe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",Rt=t=>{let a="";const n=xe.length;for(let R=0;R<t;R++)a+=xe.charAt(Math.floor(Math.random()*n));return a},Tt=t=>{if(!Array.isArray(t)||t.length===0)return console.error("Wheel data must be a non-empty array"),!1;for(let a=0;a<t.length;a++){const n=t[a];if(!n.option&&!n.image)return console.error(`Item ${a} must have either 'option' or 'image'`),!1;if(n.optionSize&&(n.optionSize<=0||!Number.isInteger(n.optionSize)))return console.error(`Item ${a} has invalid optionSize: ${n.optionSize}`),!1}return!0},Et=(t,a)=>{if(a<=0)return-1;const n=Te(t),R=360/a,c=Te(360-n+90);return Math.floor(c/R)%a},At="data:image/png;base64,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",Ue=new Image;Ue.src=At;const St=j.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;j.div`
  box-sizing: border-box;
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
`,j.div`
  transition: all 0.3s ease-in-out;
  will-change: transform, opacity;
`;const bt=j.div`
  position: relative;
  width: 80vw;
  max-width: 445px;
  height: 80vw;
  max-height: 445px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`,yt=j.div`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${t=>t.$startRotationDegrees}deg);

  &.started-spinning {
    animation: 
      spin-${({$classKey:t})=>t} 
      ${({$startSpinningTime:t})=>t/1e3}s 
      ${t=>t.$easingFunction||`cubic-bezier(
        0.71,
        ${t.$disableInitialAnimation?0:-.29},
        0.96,
        0.9
      )`} 
      0s 1 normal forwards running,
      
      continueSpin-${({$classKey:t})=>t} 
      ${({$continueSpinningTime:t})=>t/1e3}s 
      linear 
      ${({$startSpinningTime:t})=>t/1e3}s 
      1 normal forwards running,
      
      stopSpin-${({$classKey:t})=>t} 
      ${({$stopSpinningTime:t})=>t/1e3}s 
      ${t=>t.$easingFunction||"cubic-bezier(0, 0, 0.35, 1.02)"} 
      ${({$startSpinningTime:t,$continueSpinningTime:a})=>(t+a)/1e3}s 
      1 normal forwards running;
  }

  @keyframes spin-${({$classKey:t})=>t} {
    from {
      transform: rotate(${t=>t.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${t=>t.$startRotationDegrees+360}deg);
    }
  }
  
  @keyframes continueSpin-${({$classKey:t})=>t} {
    from {
      transform: rotate(${t=>t.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${t=>t.$startRotationDegrees+360}deg);
    }
  }
  
  @keyframes stopSpin-${({$classKey:t})=>t} {
    from {
      transform: rotate(${t=>t.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${t=>360*(t.$spinRevolutions||4)+t.$finalRotationDegrees}deg);
    }
  }
`,wt=j(St)`
  position: absolute;
  z-index: 5;
  width: ${t=>t.size||17}%;
  
  ${t=>{const a=t.position||"right",n=t.offset||{x:0,y:0};switch(a){case"top":return`
          top: ${6+n.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(-90deg);
        `;case"right":return`
          right: ${6+n.x}px;
          top: ${15+n.y}px;
        `;case"bottom":return`
          bottom: ${6+n.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `;case"left":return`
          left: ${6+n.x}px;
          top: ${15+n.y}px;
          transform: rotate(180deg);
        `;default:return`
          right: ${6+n.x}px;
          top: ${15+n.y}px;
        `}}}
`,Ot=j.div`
  position: absolute;
  z-index: 5;
  width: ${t=>t.size||17}%;
  
  ${t=>{const a=t.position||"right",n=t.offset||{x:0,y:0};switch(a){case"top":return`
          top: ${6+n.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(-90deg);
        `;case"right":return`
          right: ${6+n.x}px;
          top: ${15+n.y}px;
        `;case"bottom":return`
          bottom: ${6+n.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `;case"left":return`
          left: ${6+n.x}px;
          top: ${15+n.y}px;
          transform: rotate(180deg);
        `;default:return`
          right: ${6+n.x}px;
          top: ${15+n.y}px;
        `}}}
`,vt=j.canvas`
  width: 100%;
  height: 100%;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`,Ce=(t,a,n,R,c,f)=>{t.beginPath(),t.moveTo(a+(R+1)*Math.cos(f),n+(R+1)*Math.sin(f)),t.lineTo(a+(c-1)*Math.cos(f),n+(c-1)*Math.sin(f)),t.closePath(),t.stroke()},_t=({width:t,height:a,data:n,outerBorderColor:R,outerBorderWidth:c,innerRadius:f,innerBorderColor:v,innerBorderWidth:D,radiusLineColor:X,radiusLineWidth:U,fontFamily:Y,fontWeight:J,fontSize:B,fontStyle:S,perpendicularText:C,prizeMap:M,rouletteUpdater:k,textDistance:ee})=>{const te=u.useRef(null),Q=u.useMemo(()=>oe(M),[M]),V=u.useCallback(()=>{const s=te.current;if(!s){console.warn("Canvas ref is not available");return}const o=s.getContext("2d");if(!o){console.error("Could not get 2D context from canvas");return}o.clearRect(0,0,s.width,s.height),o.strokeStyle="transparent",o.lineWidth=0;const P=c*2,z=D*2,I=U*2;let O=0;const F=s.width/2-10,H=Re(0,100,ee),$=F*H/100,se=Re(0,100,f),x=F*se/100,E=s.width/2,_=s.height/2;if(!n||n.length===0){console.warn("No data provided to draw wheel");return}for(let W=0;W<n.length;W++){const{optionSize:G,style:g,option:e,image:r}=n[W],l=G&&G*(2*Math.PI)/Q||2*Math.PI/Q,m=O+l;o.fillStyle=(g==null?void 0:g.backgroundColor)||"#cccccc",o.beginPath(),o.arc(E,_,F,O,m,!1),o.arc(E,_,x,m,O,!0),o.stroke(),o.fill(),o.save(),o.strokeStyle=I<=0?"transparent":X,o.lineWidth=I,Ce(o,E,_,x,F,O),W===n.length-1&&Ce(o,E,_,x,F,m),o.strokeStyle=P<=0?"transparent":R,o.lineWidth=P,o.beginPath(),o.arc(E,_,F-o.lineWidth/2,0,2*Math.PI),o.closePath(),o.stroke(),o.strokeStyle=z<=0?"transparent":v,o.lineWidth=z,o.beginPath(),o.arc(E,_,x+o.lineWidth/2-1,0,2*Math.PI),o.closePath(),o.stroke(),o.translate(E+Math.cos(O+l/2)*$,_+Math.sin(O+l/2)*$);let p=O+l/2;if(r&&r._imageHTML){p+=r.landscape?0:Math.PI/2,o.rotate(p);const T=r._imageHTML;T.complete&&T.naturalWidth>0&&o.drawImage(T,(T.width+(r.offsetX||0))/-2,-(T.height-(r.landscape?0:90)+(r.offsetY||0))/2,T.width,T.height)}else if(e){p+=C?Math.PI/2:0,o.rotate(p);const T=e;o.font=`${(g==null?void 0:g.fontStyle)||S} ${(g==null?void 0:g.fontWeight)||J} ${((g==null?void 0:g.fontSize)||B)*2}px ${(g==null?void 0:g.fontFamily)||Y}, Helvetica, Arial`,o.fillStyle=(g==null?void 0:g.textColor)||"#000000",o.textBaseline="middle",o.fillText(T,-o.measureText(T).width/2,0)}o.restore(),O=m}},[n,R,c,f,v,D,X,U,Y,J,B,S,C,M,ee,Q]);return u.useEffect(()=>{const s=setTimeout(()=>{V()},0);return()=>clearTimeout(s)},[V,k]),q.jsx(vt,{ref:te,width:t,height:a},`canvas-${k}`)},pt="started-spinning",Nt=2600,Lt=750,Dt=8e3,kt=({mustStartSpinning:t,prizeNumber:a,data:n,onStopSpinning:R=()=>null,backgroundColors:c=me,textColors:f=ge,outerBorderColor:v=st,outerBorderWidth:D=lt,innerRadius:X=ut,innerBorderColor:U=it,innerBorderWidth:Y=ft,radiusLineColor:J=ct,radiusLineWidth:B=mt,fontFamily:S=Fe[0],fontSize:C=he,fontWeight:M=De,fontStyle:k=ke,perpendicularText:ee=!1,textDistance:te=gt,spinDuration:Q=Ie,startingOptionIndex:V=-1,pointerProps:s={},disableInitialAnimation:o=dt,onSpinStart:P,onTick:z,onSpinEnd:I,onRemoveWinner:O,removeWinnerOnStop:F=!1,spinRevolutions:H=4,easingFunction:$})=>{const[se,x]=u.useState([...n]),[E,_]=u.useState([[0]]),[W,G]=u.useState(0),[g,e]=u.useState(0),[r,l]=u.useState(!1),[m,p]=u.useState(!1),[T,d]=u.useState(!1),[K,ie]=u.useState(!1),[Ae,Se]=u.useState(!1),[It,Ft]=u.useState(0),[Me,xt]=u.useState(0),[Ut,We]=u.useState(!1),be=u.useRef(!1),[je,Ct]=u.useState(-1),ye=u.useRef(null),ce=Rt(5),we=Math.max(.01,Q),Pe=Nt*we,ze=Lt*we,He=Dt*we,Mt=Pe+ze+He,Ge=u.useCallback(N=>{const A=(N%360+360)%360,b=oe(E);if(b===0)return-1;const y=360/b,L=(360-A+90)%360;return Math.floor(L/y)%b},[E]);u.useEffect(()=>{var ne,ue,Z,Ke,Xe,Ye,Je,Be,Qe,Ve;let N=0;const A=[],b=(n==null?void 0:n.length)||0,y=[{option:"",optionSize:1}],L=Ee(S==null?void 0:S.trim())?[S]:[];for(let i=0;i<b;i++){let Oe=((Z=(ue=(ne=n[i])==null?void 0:ne.style)==null?void 0:ue.fontFamily)==null?void 0:Z.split(","))||[];Oe=Oe.map(w=>w.trim()).filter(Ee),L.push(...Oe),y[i]={...n[i],style:{backgroundColor:((Ke=n[i].style)==null?void 0:Ke.backgroundColor)||(c==null?void 0:c[i%(c==null?void 0:c.length)])||me[0],fontFamily:((Xe=n[i].style)==null?void 0:Xe.fontFamily)||S||Le,fontSize:((Ye=n[i].style)==null?void 0:Ye.fontSize)||C||he,fontWeight:((Je=n[i].style)==null?void 0:Je.fontWeight)||M||De,fontStyle:((Be=n[i].style)==null?void 0:Be.fontStyle)||k||ke,textColor:((Qe=n[i].style)==null?void 0:Qe.textColor)||(f==null?void 0:f[i%(f==null?void 0:f.length)])||ge[0]}},A.push([]);for(let w=0;w<(y[i].optionSize||1);w++)A[i][w]=N++;if(n[i].image){xt(fe=>fe+1);const w=new Image;w.src=((Ve=n[i].image)==null?void 0:Ve.uri)||"",w.onload=()=>{var fe,$e,Ze,qe,et,tt;w.height=200*(((fe=n[i].image)==null?void 0:fe.sizeMultiplier)||1),w.width=w.naturalWidth/w.naturalHeight*w.height,y[i].image={uri:(($e=n[i].image)==null?void 0:$e.uri)||"",offsetX:((Ze=n[i].image)==null?void 0:Ze.offsetX)||0,offsetY:((qe=n[i].image)==null?void 0:qe.offsetY)||0,landscape:((et=n[i].image)==null?void 0:et.landscape)||!1,sizeMultiplier:((tt=n[i].image)==null?void 0:tt.sizeMultiplier)||1,_imageHTML:w},Ft(ve=>ve+1),Se(ve=>!ve)}}}if((L==null?void 0:L.length)>0)try{nt.load({google:{families:Array.from(new Set(L.filter(i=>!!i)))},timeout:1e3,fontactive(){Se(i=>!i)},active(){We(!0),Se(i=>!i)}})}catch(i){console.error("Error loading webfonts:",i)}else We(!0);x([...y]),_(A),jt(V,A),ie(!0)},[n,c,f,S,C,M,k,V]),u.useEffect(()=>{if(T&&z)return ye.current=setInterval(()=>{const N=document.querySelector(`.rotation-${ce}`);if(N){const b=window.getComputedStyle(N).transform;if(b&&b!=="none"){const y=b.split("(")[1].split(")")[0].split(","),L=parseFloat(y[0]),ne=parseFloat(y[1]),ue=Math.atan2(ne,L)*(180/Math.PI),Z=Ge(ue);Z!==je&&Z!==-1&&(Ct(Z),z(Z))}}},50),()=>{ye.current&&clearInterval(ye.current)}},[T,je,Ge,z,ce]),u.useEffect(()=>{var N,A;if(t&&!T){d(!0),Wt();const b=(A=E[a])==null?void 0:A[Math.floor(Math.random()*((N=E[a])==null?void 0:N.length))],y=de(b,oe(E));e(y)}},[t,T,E,a,H]),u.useEffect(()=>{m&&(d(!1),G(g))},[m,g]);const Wt=()=>{l(!0),p(!1),be.current=!0,P==null||P(),setTimeout(()=>{be.current&&(be.current=!1,l(!1),p(!0),I==null||I(a),R(),F&&O&&setTimeout(()=>{O(a)},500))},Mt)},jt=(N,A)=>{var b,y;if(N>=0&&A.length>0){const L=Math.floor(N)%A.length,ne=(y=A[L])==null?void 0:y[Math.floor(((b=A[L])==null?void 0:b.length)/2)];G(de(ne,oe(A),!1))}},Pt=()=>(s==null?void 0:s.type)==="custom"&&(s!=null&&s.component)?q.jsx(Ot,{position:s.position||"right",size:s.size||17,offset:s.offset,style:s.style,children:s.component}):q.jsx(wt,{position:(s==null?void 0:s.position)||"right",size:(s==null?void 0:s.size)||17,offset:s==null?void 0:s.offset,style:s==null?void 0:s.style,src:(s==null?void 0:s.src)||Ue.src,alt:"roulette-pointer"}),zt=()=>r?`${pt} rotation-${ce}`:`rotation-${ce}`;return K?q.jsxs(bt,{style:!Ut||Me>0&&It!==Me?{visibility:"hidden"}:{},children:[q.jsx(yt,{className:zt(),$classKey:ce,$startSpinningTime:Pe,$continueSpinningTime:ze,$stopSpinningTime:He,$startRotationDegrees:W,$finalRotationDegrees:g,$disableInitialAnimation:o,$spinRevolutions:H,$easingFunction:$,children:q.jsx(_t,{width:"900",height:"900",data:se,outerBorderColor:v,outerBorderWidth:D,innerRadius:X,innerBorderColor:U,innerBorderWidth:Y,radiusLineColor:J,radiusLineWidth:B,fontFamily:S,fontWeight:M,fontStyle:k,fontSize:C,perpendicularText:ee,prizeMap:E,rouletteUpdater:Ae,textDistance:te})}),Pt()]}):null};h.DEFAULT_BACKGROUND_COLORS=me,h.DEFAULT_FONT_FAMILY=Le,h.DEFAULT_FONT_SIZE=he,h.DEFAULT_SPIN_DURATION=Ie,h.DEFAULT_SPIN_REVOLUTIONS=ht,h.DEFAULT_TEXT_COLORS=ge,h.Wheel=kt,h.calculateSegmentFromRotation=Et,h.clamp=Re,h.getQuantity=oe,h.getRotationDegrees=de,h.isCustomFont=Ee,h.normalizeAngle=Te,h.validateWheelData=Tt,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})}));
//# sourceMappingURL=index.umd.js.map
