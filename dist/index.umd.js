(function(R,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],c):(R=typeof globalThis<"u"?globalThis:R||self,c(R.ReactCustomRoulette={},R.React,R.styled))})(this,(function(R,c,j){"use strict";var ue={exports:{}},ae={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function nt(){if(_e)return ae;_e=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function n(T,i,u){var w=null;if(u!==void 0&&(w=""+u),i.key!==void 0&&(w=""+i.key),"key"in i){u={};for(var D in i)D!=="key"&&(u[D]=i[D])}else u=i;return i=u.ref,{$$typeof:t,type:T,key:w,ref:i!==void 0?i:null,props:u}}return ae.Fragment=a,ae.jsx=n,ae.jsxs=n,ae}var re={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function at(){return pe||(pe=1,process.env.NODE_ENV!=="production"&&(function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case te:return"Profiler";case ee:return"StrictMode";case o:return"Suspense";case P:return"SuspenseList";case v:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case M:return"Portal";case V:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case s:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case I:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function a(e){return""+e}function n(e){try{a(e);var r=!1}catch{r=!0}if(r){r=console;var l=r.error,f=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",f),a(e)}}function T(e){if(e===k)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===I)return"<...>";try{var r=t(e);return r?"<"+r+">":"<...>"}catch{return"<...>"}}function i(){var e=H.A;return e===null?null:e.getOwner()}function u(){return Error("react-stack-top-frame")}function w(e){if(Z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function D(e,r){function l(){A||(A=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}function X(){var e=t(this.type);return _[e]||(_[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function U(e,r,l,f,p,E){var h=l.ref;return e={$$typeof:C,type:e,key:r,props:l,_owner:f},(h!==void 0?h:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:X}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:p}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:E}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function Y(e,r,l,f,p,E){var h=r.children;if(h!==void 0)if(f)if(se(h)){for(f=0;f<h.length;f++)J(h[f]);Object.freeze&&Object.freeze(h)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else J(h);if(Z.call(r,"key")){h=t(e);var G=Object.keys(r).filter(function(Se){return Se!=="key"});f=0<G.length?"{key: someKey, "+G.join(": ..., ")+": ...}":"{key: someKey}",g[h+f]||(G=0<G.length?"{"+G.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,f,h,G,h),g[h+f]=!0)}if(h=null,l!==void 0&&(n(l),h=""+l),w(r)&&(n(r.key),h=""+r.key),"key"in r){l={};for(var ie in r)ie!=="key"&&(l[ie]=r[ie])}else l=r;return h&&D(l,typeof e=="function"?e.displayName||e.name||"Unknown":e),U(e,h,l,i(),p,E)}function J(e){B(e)?e._store&&(e._store.validated=1):typeof e=="object"&&e!==null&&e.$$typeof===I&&(e._payload.status==="fulfilled"?B(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function B(e){return typeof e=="object"&&e!==null&&e.$$typeof===C}var b=c,C=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),V=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),o=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),H=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Object.prototype.hasOwnProperty,se=Array.isArray,x=console.createTask?console.createTask:function(){return null};b={react_stack_bottom_frame:function(e){return e()}};var A,_={},W=b.react_stack_bottom_frame.bind(b,u)(),K=x(T(u)),g={};re.Fragment=k,re.jsx=function(e,r,l){var f=1e4>H.recentlyCreatedOwnerStacks++;return Y(e,r,l,!1,f?Error("react-stack-top-frame"):W,f?x(T(e)):K)},re.jsxs=function(e,r,l){var f=1e4>H.recentlyCreatedOwnerStacks++;return Y(e,r,l,!0,f?Error("react-stack-top-frame"):W,f?x(T(e)):K)}})()),re}var Ne;function rt(){return Ne||(Ne=1,process.env.NODE_ENV==="production"?ue.exports=nt():ue.exports=at()),ue.exports}var q=rt();const ge=["darkgrey","lightgrey"],he=["black"],ot="black",st="black",it="black",ct=5,lt=0,ut=0,ft=5,mt=60,Le="Nunito",de=20,De="bold",ke="normal",Ie=1,gt=4,ht=!1,Fe=["arial","verdana","tahoma","trebuchet ms","times","garamond","brush script mt","courier new","georgia","helvetica","times new roman","serif","sans-serif","monospace","cursive","fantasy"],Re=(t,a,n=!0,T=4)=>{if(a<=0)return console.error("numberOfPrizes must be greater than 0"),0;if(t<0||t>=a)return console.error(`prizeNumber (${t}) must be between 0 and ${a-1}`),0;const i=360/a,u=43+i/2,w=n?(-1+Math.random()*2)*i*.35:0,U=i*(a-t)-u+w+360*T;return a-t>a/2?-360+U:U},Te=(t,a,n)=>(t>a&&(console.warn(`clamp: min (${t}) is greater than max (${a}), swapping`),[t,a]=[a,t]),Math.min(Math.max(t,+n),a)),Ee=t=>(t%360+360)%360,Ae=t=>{if(!t||typeof t!="string")return!1;const a=t.trim().toLowerCase();return a!==""&&!Fe.includes(a)},oe=t=>{if(!t||t.length===0)return console.warn("getQuantity: prizeMap is empty"),0;const a=t[t.length-1];return!a||a.length===0?(console.warn("getQuantity: last array in prizeMap is empty"),0):a[a.length-1]+1},xe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",dt=t=>{let a="";const n=xe.length;for(let T=0;T<t;T++)a+=xe.charAt(Math.floor(Math.random()*n));return a},Rt=t=>{if(!Array.isArray(t)||t.length===0)return console.error("Wheel data must be a non-empty array"),!1;for(let a=0;a<t.length;a++){const n=t[a];if(!n.option&&!n.image)return console.error(`Item ${a} must have either 'option' or 'image'`),!1;if(n.optionSize&&(n.optionSize<=0||!Number.isInteger(n.optionSize)))return console.error(`Item ${a} has invalid optionSize: ${n.optionSize}`),!1}return!0},Tt=(t,a)=>{if(a<=0)return-1;const n=Ee(t),T=360/a,i=Ee(360-n+90);return Math.floor(i/T)%a},Et="data:image/png;base64,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",Ue=new Image;Ue.src=Et;const At=j.img`
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
`;const St=j.div`
  position: relative;
  width: 80vw;
  max-width: 445px;
  height: 80vw;
  max-height: 445px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`,bt=j.div`
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
`,yt=j(At)`
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
`,Ce=(t,a,n,T,i,u)=>{t.beginPath(),t.moveTo(a+(T+1)*Math.cos(u),n+(T+1)*Math.sin(u)),t.lineTo(a+(i-1)*Math.cos(u),n+(i-1)*Math.sin(u)),t.closePath(),t.stroke()},wt=({width:t,height:a,data:n,outerBorderColor:T,outerBorderWidth:i,innerRadius:u,innerBorderColor:w,innerBorderWidth:D,radiusLineColor:X,radiusLineWidth:U,fontFamily:Y,fontWeight:J,fontSize:B,fontStyle:b,perpendicularText:C,prizeMap:M,rouletteUpdater:k,textDistance:ee})=>{const te=c.useRef(null),Q=c.useMemo(()=>oe(M),[M]),V=c.useCallback(()=>{const s=te.current;if(!s){console.warn("Canvas ref is not available");return}const o=s.getContext("2d");if(!o){console.error("Could not get 2D context from canvas");return}o.clearRect(0,0,s.width,s.height),o.strokeStyle="transparent",o.lineWidth=0;const P=i*2,z=D*2,I=U*2;let v=0;const F=s.width/2-10,H=Te(0,100,ee),Z=F*H/100,se=Te(0,100,u),x=F*se/100,A=s.width/2,_=s.height/2;if(!n||n.length===0){console.warn("No data provided to draw wheel");return}for(let W=0;W<n.length;W++){const{optionSize:K,style:g,option:e,image:r}=n[W],l=K&&K*(2*Math.PI)/Q||2*Math.PI/Q,f=v+l;o.fillStyle=(g==null?void 0:g.backgroundColor)||"#cccccc",o.beginPath(),o.arc(A,_,F,v,f,!1),o.arc(A,_,x,f,v,!0),o.stroke(),o.fill(),o.save(),o.strokeStyle=I<=0?"transparent":X,o.lineWidth=I,Ce(o,A,_,x,F,v),W===n.length-1&&Ce(o,A,_,x,F,f),o.strokeStyle=P<=0?"transparent":T,o.lineWidth=P,o.beginPath(),o.arc(A,_,F-o.lineWidth/2,0,2*Math.PI),o.closePath(),o.stroke(),o.strokeStyle=z<=0?"transparent":w,o.lineWidth=z,o.beginPath(),o.arc(A,_,x+o.lineWidth/2-1,0,2*Math.PI),o.closePath(),o.stroke(),o.translate(A+Math.cos(v+l/2)*Z,_+Math.sin(v+l/2)*Z);let p=v+l/2;if(r&&r._imageHTML){p+=r.landscape?0:Math.PI/2,o.rotate(p);const E=r._imageHTML;E.complete&&E.naturalWidth>0&&o.drawImage(E,(E.width+(r.offsetX||0))/-2,-(E.height-(r.landscape?0:90)+(r.offsetY||0))/2,E.width,E.height)}else if(e){p+=C?Math.PI/2:0,o.rotate(p);const E=e;o.font=`${(g==null?void 0:g.fontStyle)||b} ${(g==null?void 0:g.fontWeight)||J} ${((g==null?void 0:g.fontSize)||B)*2}px ${(g==null?void 0:g.fontFamily)||Y}, Helvetica, Arial`,o.fillStyle=(g==null?void 0:g.textColor)||"#000000",o.textBaseline="middle",o.fillText(E,-o.measureText(E).width/2,0)}o.restore(),v=f}},[n,T,i,u,w,D,X,U,Y,J,B,b,C,M,ee,Q]);return c.useEffect(()=>{const s=setTimeout(()=>{V()},0);return()=>clearTimeout(s)},[V,k]),q.jsx(vt,{ref:te,width:t,height:a},`canvas-${k}`)},_t="started-spinning",pt=2600,Nt=750,Lt=8e3,Dt=({mustStartSpinning:t,prizeNumber:a,data:n,onStopSpinning:T=()=>null,backgroundColors:i=ge,textColors:u=he,outerBorderColor:w=ot,outerBorderWidth:D=ct,innerRadius:X=lt,innerBorderColor:U=st,innerBorderWidth:Y=ut,radiusLineColor:J=it,radiusLineWidth:B=ft,fontFamily:b=Fe[0],fontSize:C=de,fontWeight:M=De,fontStyle:k=ke,perpendicularText:ee=!1,textDistance:te=mt,spinDuration:Q=Ie,startingOptionIndex:V=-1,pointerProps:s={},disableInitialAnimation:o=ht,onSpinStart:P,onTick:z,onSpinEnd:I,onRemoveWinner:v,removeWinnerOnStop:F=!1,spinRevolutions:H=4,easingFunction:Z})=>{const[se,x]=c.useState([...n]),[A,_]=c.useState([[0]]),[W,K]=c.useState(0),[g,e]=c.useState(0),[r,l]=c.useState(!1),[f,p]=c.useState(!1),[E,h]=c.useState(!1),[G,ie]=c.useState(!1),[Se,be]=c.useState(!1),[kt,It]=c.useState(0),[Me,Ft]=c.useState(0),[xt,We]=c.useState(!1),ye=c.useRef(!1),Ut=c.useRef(dt(5)),[je,Ct]=c.useState(-1),Oe=c.useRef(null),ce=Ut.current,ve=Math.max(.01,Q),Pe=pt*ve,ze=Nt*ve,He=Lt*ve,Mt=Pe+ze+He,Ke=c.useCallback(N=>{const S=(N%360+360)%360,y=oe(A);if(y===0)return-1;const O=360/y,L=(360-S+90)%360;return Math.floor(L/O)%y},[A]);c.useEffect(()=>{var ne,fe,$,Ge,Xe,Ye,Je,Be,Qe,Ve;let N=0;const S=[],y=(n==null?void 0:n.length)||0,O=[{option:"",optionSize:1}],L=Ae(b==null?void 0:b.trim())?[b]:[];for(let m=0;m<y;m++){let le=(($=(fe=(ne=n[m])==null?void 0:ne.style)==null?void 0:fe.fontFamily)==null?void 0:$.split(","))||[];le=le.map(d=>d.trim()).filter(Ae),L.push(...le),O[m]={...n[m],style:{backgroundColor:((Ge=n[m].style)==null?void 0:Ge.backgroundColor)||(i==null?void 0:i[m%(i==null?void 0:i.length)])||ge[0],fontFamily:((Xe=n[m].style)==null?void 0:Xe.fontFamily)||b||Le,fontSize:((Ye=n[m].style)==null?void 0:Ye.fontSize)||C||de,fontWeight:((Je=n[m].style)==null?void 0:Je.fontWeight)||M||De,fontStyle:((Be=n[m].style)==null?void 0:Be.fontStyle)||k||ke,textColor:((Qe=n[m].style)==null?void 0:Qe.textColor)||(u==null?void 0:u[m%(u==null?void 0:u.length)])||he[0]}},S.push([]);for(let d=0;d<(O[m].optionSize||1);d++)S[m][d]=N++;if(n[m].image){Ft(me=>me+1);const d=new Image;d.src=((Ve=n[m].image)==null?void 0:Ve.uri)||"",d.onload=()=>{var me,Ze,$e,qe,et,tt;d.height=200*(((me=n[m].image)==null?void 0:me.sizeMultiplier)||1),d.width=d.naturalWidth/d.naturalHeight*d.height,O[m].image={uri:((Ze=n[m].image)==null?void 0:Ze.uri)||"",offsetX:(($e=n[m].image)==null?void 0:$e.offsetX)||0,offsetY:((qe=n[m].image)==null?void 0:qe.offsetY)||0,landscape:((et=n[m].image)==null?void 0:et.landscape)||!1,sizeMultiplier:((tt=n[m].image)==null?void 0:tt.sizeMultiplier)||1,_imageHTML:d},It(we=>we+1),be(we=>!we)}}}(L==null?void 0:L.length)>0?import("webfontloader").then(m=>{const le=m.default;try{le.load({google:{families:Array.from(new Set(L.filter(d=>!!d)))},timeout:1e3,fontactive(){be(d=>!d)},active(){We(!0),be(d=>!d)}})}catch(d){console.error("Error loading webfonts:",d)}}):We(!0),x([...O]),_(S),jt(V,S),ie(!0)},[n,i,u,b,C,M,k,V]),c.useEffect(()=>{if(E&&z)return Oe.current=setInterval(()=>{const N=document.querySelector(`.rotation-${ce}`);if(N){const y=window.getComputedStyle(N).transform;if(y&&y!=="none"){const O=y.split("(")[1].split(")")[0].split(","),L=parseFloat(O[0]),ne=parseFloat(O[1]),fe=Math.atan2(ne,L)*(180/Math.PI),$=Ke(fe);$!==je&&$!==-1&&(Ct($),z($))}}},50),()=>{Oe.current&&clearInterval(Oe.current)}},[E,je,Ke,z,ce]),c.useEffect(()=>{var N,S;if(t&&!E){h(!0),Wt();const y=(S=A[a])==null?void 0:S[Math.floor(Math.random()*((N=A[a])==null?void 0:N.length))],O=Re(y,oe(A));e(O)}},[t,E,A,a,H]),c.useEffect(()=>{f&&(h(!1),K(g%360))},[f,g]);const Wt=()=>{l(!0),p(!1),ye.current=!0,P==null||P(),setTimeout(()=>{ye.current&&(ye.current=!1,l(!1),p(!0),I==null||I(a),T(),F&&v&&setTimeout(()=>{v(a)},500))},Mt)},jt=(N,S)=>{var y,O;if(N>=0&&S.length>0){const L=Math.floor(N)%S.length,ne=(O=S[L])==null?void 0:O[Math.floor(((y=S[L])==null?void 0:y.length)/2)];K(Re(ne,oe(S),!1))}},Pt=()=>(s==null?void 0:s.type)==="custom"&&(s!=null&&s.component)?q.jsx(Ot,{position:s.position||"right",size:s.size||17,offset:s.offset,style:s.style,children:s.component}):q.jsx(yt,{position:(s==null?void 0:s.position)||"right",size:(s==null?void 0:s.size)||17,offset:s==null?void 0:s.offset,style:s==null?void 0:s.style,src:(s==null?void 0:s.src)||Ue.src,alt:"roulette-pointer"}),zt=()=>r?`${_t} rotation-${ce}`:`rotation-${ce}`;return G?q.jsxs(St,{style:!xt||Me>0&&kt!==Me?{visibility:"hidden"}:{},children:[q.jsx(bt,{className:zt(),$classKey:ce,$startSpinningTime:Pe,$continueSpinningTime:ze,$stopSpinningTime:He,$startRotationDegrees:W,$finalRotationDegrees:g,$disableInitialAnimation:o,$spinRevolutions:H,$easingFunction:Z,children:q.jsx(wt,{width:"900",height:"900",data:se,outerBorderColor:w,outerBorderWidth:D,innerRadius:X,innerBorderColor:U,innerBorderWidth:Y,radiusLineColor:J,radiusLineWidth:B,fontFamily:b,fontWeight:M,fontStyle:k,fontSize:C,perpendicularText:ee,prizeMap:A,rouletteUpdater:Se,textDistance:te})}),Pt()]}):null};R.DEFAULT_BACKGROUND_COLORS=ge,R.DEFAULT_FONT_FAMILY=Le,R.DEFAULT_FONT_SIZE=de,R.DEFAULT_SPIN_DURATION=Ie,R.DEFAULT_SPIN_REVOLUTIONS=gt,R.DEFAULT_TEXT_COLORS=he,R.Wheel=Dt,R.calculateSegmentFromRotation=Tt,R.clamp=Te,R.getQuantity=oe,R.getRotationDegrees=Re,R.isCustomFont=Ae,R.normalizeAngle=Ee,R.validateWheelData=Rt,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})}));
//# sourceMappingURL=index.umd.js.map
