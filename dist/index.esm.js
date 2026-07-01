import gt, { useRef as me, useMemo as ht, useCallback as Ze, useEffect as ce, useState as w } from "react";
import H from "styled-components";
var fe = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function dt() {
  if (Ue) return se;
  Ue = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function n(d, i, l) {
    var p = null;
    if (l !== void 0 && (p = "" + l), i.key !== void 0 && (p = "" + i.key), "key" in i) {
      l = {};
      for (var k in i)
        k !== "key" && (l[k] = i[k]);
    } else l = i;
    return i = l.ref, {
      $$typeof: t,
      type: d,
      key: p,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return se.Fragment = r, se.jsx = n, se.jsxs = n, se;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Rt() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === I ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case L:
          return "Fragment";
        case Z:
          return "Profiler";
        case V:
          return "StrictMode";
        case a:
          return "Suspense";
        case C:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case B:
            return e.displayName || "Context";
          case Y:
            return (e._context.displayName || "Context") + ".Consumer";
          case s:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return o = e.displayName || null, o !== null ? o : t(e.type) || "Memo";
          case D:
            o = e._payload, e = e._init;
            try {
              return t(e(o));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function n(e) {
      try {
        r(e);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var c = o.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), r(e);
      }
    }
    function d(e) {
      if (e === L) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var o = t(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = $.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (q.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, o) {
      function c() {
        T || (T = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function K() {
      var e = t(this.type);
      return v[e] || (v[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, o, c, u, O, R) {
      var g = c.ref;
      return e = {
        $$typeof: F,
        type: e,
        key: o,
        props: c,
        _owner: u
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: K
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function G(e, o, c, u, O, R) {
      var g = o.children;
      if (g !== void 0)
        if (u)
          if (ne(g)) {
            for (u = 0; u < g.length; u++)
              J(g[u]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else J(g);
      if (q.call(o, "key")) {
        g = t(e);
        var z = Object.keys(o).filter(function(he) {
          return he !== "key";
        });
        u = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", m[g + u] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          g,
          z,
          g
        ), m[g + u] = !0);
      }
      if (g = null, c !== void 0 && (n(c), g = "" + c), p(o) && (n(o.key), g = "" + o.key), "key" in o) {
        c = {};
        for (var re in o)
          re !== "key" && (c[re] = o[re]);
      } else c = o;
      return g && k(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(
        e,
        g,
        c,
        i(),
        O,
        R
      );
    }
    function J(e) {
      X(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === D && (e._payload.status === "fulfilled" ? X(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === F;
    }
    var A = gt, F = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), B = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), $ = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, ne = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var T, v = {}, j = A.react_stack_bottom_frame.bind(
      A,
      l
    )(), P = x(d(l)), m = {};
    ie.Fragment = L, ie.jsx = function(e, o, c) {
      var u = 1e4 > $.recentlyCreatedOwnerStacks++;
      return G(
        e,
        o,
        c,
        !1,
        u ? Error("react-stack-top-frame") : j,
        u ? x(d(e)) : P
      );
    }, ie.jsxs = function(e, o, c) {
      var u = 1e4 > $.recentlyCreatedOwnerStacks++;
      return G(
        e,
        o,
        c,
        !0,
        u ? Error("react-stack-top-frame") : j,
        u ? x(d(e)) : P
      );
    };
  })()), ie;
}
var Pe;
function Tt() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? fe.exports = dt() : fe.exports = Rt()), fe.exports;
}
var te = Tt();
const ze = ["darkgrey", "lightgrey"], He = ["black"], Et = "black", At = "black", bt = "black", St = 5, yt = 0, wt = 0, pt = 5, vt = 60, Ot = "Nunito", Ke = 20, Ge = "bold", Je = "normal", Nt = 1, Kt = 4, _t = !1, et = [
  "arial",
  "verdana",
  "tahoma",
  "trebuchet ms",
  "times",
  "garamond",
  "brush script mt",
  "courier new",
  "georgia",
  "helvetica",
  "times new roman",
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy"
], Xe = (t, r, n = !0, d = 4) => {
  if (r <= 0)
    return console.error("numberOfPrizes must be greater than 0"), 0;
  if (t < 0 || t >= r)
    return console.error(
      `prizeNumber (${t}) must be between 0 and ${r - 1}`
    ), 0;
  const i = 360 / r, l = 43 + i / 2, p = n ? (-1 + Math.random() * 2) * i * 0.35 : 0, M = i * (r - t) - l + p + 360 * d;
  return r - t > r / 2 ? -360 + M : M;
}, Ye = (t, r, n) => (t > r && (console.warn(`clamp: min (${t}) is greater than max (${r}), swapping`), [t, r] = [r, t]), Math.min(Math.max(t, +n), r)), Be = (t) => (t % 360 + 360) % 360, qe = (t) => {
  if (!t || typeof t != "string") return !1;
  const r = t.trim().toLowerCase();
  return r !== "" && !et.includes(r);
}, ge = (t) => {
  if (!t || t.length === 0)
    return console.warn("getQuantity: prizeMap is empty"), 0;
  const r = t[t.length - 1];
  return !r || r.length === 0 ? (console.warn("getQuantity: last array in prizeMap is empty"), 0) : r[r.length - 1] + 1;
}, Qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", kt = (t) => {
  let r = "";
  const n = Qe.length;
  for (let d = 0; d < t; d++)
    r += Qe.charAt(Math.floor(Math.random() * n));
  return r;
}, Gt = (t) => {
  if (!Array.isArray(t) || t.length === 0)
    return console.error("Wheel data must be a non-empty array"), !1;
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (!n.option && !n.image)
      return console.error(`Item ${r} must have either 'option' or 'image'`), !1;
    if (n.optionSize && (n.optionSize <= 0 || !Number.isInteger(n.optionSize)))
      return console.error(`Item ${r} has invalid optionSize: ${n.optionSize}`), !1;
  }
  return !0;
}, Jt = (t, r) => {
  if (r <= 0) return -1;
  const n = Be(t), d = 360 / r, i = Be(360 - n + 90);
  return Math.floor(i / d) % r;
}, Lt = "data:image/png;base64,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", tt = new Image();
tt.src = Lt;
const Dt = H.img`
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
`;
H.div`
  box-sizing: border-box;
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
H.div`
  transition: all 0.3s ease-in-out;
  will-change: transform, opacity;
`;
const It = H.div`
  position: relative;
  width: 80vw;
  max-width: 445px;
  height: 80vw;
  max-height: 445px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`, xt = H.div`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(t) => t.$startRotationDegrees}deg);

  &.started-spinning {
    animation: 
      spin-${({ $classKey: t }) => t} 
      ${({ $startSpinningTime: t }) => t / 1e3}s 
      ${(t) => t.$easingFunction || `cubic-bezier(
        0.71,
        ${t.$disableInitialAnimation ? 0 : -0.29},
        0.96,
        0.9
      )`} 
      0s 1 normal forwards running,
      
      continueSpin-${({ $classKey: t }) => t} 
      ${({ $continueSpinningTime: t }) => t / 1e3}s 
      linear 
      ${({ $startSpinningTime: t }) => t / 1e3}s 
      1 normal forwards running,
      
      stopSpin-${({ $classKey: t }) => t} 
      ${({ $stopSpinningTime: t }) => t / 1e3}s 
      ${(t) => t.$easingFunction || "cubic-bezier(0, 0, 0.35, 1.02)"} 
      ${({ $startSpinningTime: t, $continueSpinningTime: r }) => (t + r) / 1e3}s 
      1 normal forwards running;
  }

  @keyframes spin-${({ $classKey: t }) => t} {
    from {
      transform: rotate(${(t) => t.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(t) => t.$startRotationDegrees + 360}deg);
    }
  }
  
  @keyframes continueSpin-${({ $classKey: t }) => t} {
    from {
      transform: rotate(${(t) => t.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(t) => t.$startRotationDegrees + 360}deg);
    }
  }
  
  @keyframes stopSpin-${({ $classKey: t }) => t} {
    from {
      transform: rotate(${(t) => t.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(t) => 360 * (t.$spinRevolutions || 4) + t.$finalRotationDegrees}deg);
    }
  }
`, Mt = H(Dt)`
  position: absolute;
  z-index: 5;
  width: ${(t) => t.size || 17}%;
  
  ${(t) => {
  const r = t.position || "right", n = t.offset || { x: 0, y: 0 };
  switch (r) {
    case "top":
      return `
          top: ${6 + n.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(-90deg);
        `;
    case "right":
      return `
          right: ${6 + n.x}px;
          top: ${15 + n.y}px;
        `;
    case "bottom":
      return `
          bottom: ${6 + n.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `;
    case "left":
      return `
          left: ${6 + n.x}px;
          top: ${15 + n.y}px;
          transform: rotate(180deg);
        `;
    default:
      return `
          right: ${6 + n.x}px;
          top: ${15 + n.y}px;
        `;
  }
}}
`, Ft = H.div`
  position: absolute;
  z-index: 5;
  width: ${(t) => t.size || 17}%;
  
  ${(t) => {
  const r = t.position || "right", n = t.offset || { x: 0, y: 0 };
  switch (r) {
    case "top":
      return `
          top: ${6 + n.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(-90deg);
        `;
    case "right":
      return `
          right: ${6 + n.x}px;
          top: ${15 + n.y}px;
        `;
    case "bottom":
      return `
          bottom: ${6 + n.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `;
    case "left":
      return `
          left: ${6 + n.x}px;
          top: ${15 + n.y}px;
          transform: rotate(180deg);
        `;
    default:
      return `
          right: ${6 + n.x}px;
          top: ${15 + n.y}px;
        `;
  }
}}
`, Wt = H.canvas`
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
`, Ve = (t, r, n, d, i, l) => {
  t.beginPath(), t.moveTo(
    r + (d + 1) * Math.cos(l),
    n + (d + 1) * Math.sin(l)
  ), t.lineTo(
    r + (i - 1) * Math.cos(l),
    n + (i - 1) * Math.sin(l)
  ), t.closePath(), t.stroke();
}, jt = ({
  width: t,
  height: r,
  data: n,
  outerBorderColor: d,
  outerBorderWidth: i,
  innerRadius: l,
  innerBorderColor: p,
  innerBorderWidth: k,
  radiusLineColor: K,
  radiusLineWidth: M,
  fontFamily: G,
  fontWeight: J,
  fontSize: X,
  fontStyle: A,
  perpendicularText: F,
  prizeMap: W,
  rouletteUpdater: L,
  textDistance: V
}) => {
  const Z = me(null), Y = ht(() => ge(W), [W]), B = Ze(() => {
    const s = Z.current;
    if (!s) {
      console.warn("Canvas ref is not available");
      return;
    }
    const a = s.getContext("2d");
    if (!a) {
      console.error("Could not get 2D context from canvas");
      return;
    }
    a.clearRect(0, 0, s.width, s.height), a.strokeStyle = "transparent", a.lineWidth = 0;
    const C = i * 2, U = k * 2, D = M * 2;
    let y = 0;
    const I = s.width / 2 - 10, $ = Ye(0, 100, V), q = I * $ / 100, ne = Ye(0, 100, l), x = I * ne / 100, T = s.width / 2, v = s.height / 2;
    if (!n || n.length === 0) {
      console.warn("No data provided to draw wheel");
      return;
    }
    for (let j = 0; j < n.length; j++) {
      const { optionSize: P, style: m, option: e, image: o } = n[j], c = P && P * (2 * Math.PI) / Y || 2 * Math.PI / Y, u = y + c;
      a.fillStyle = (m == null ? void 0 : m.backgroundColor) || "#cccccc", a.beginPath(), a.arc(T, v, I, y, u, !1), a.arc(T, v, x, u, y, !0), a.stroke(), a.fill(), a.save(), a.strokeStyle = D <= 0 ? "transparent" : K, a.lineWidth = D, Ve(
        a,
        T,
        v,
        x,
        I,
        y
      ), j === n.length - 1 && Ve(
        a,
        T,
        v,
        x,
        I,
        u
      ), a.strokeStyle = C <= 0 ? "transparent" : d, a.lineWidth = C, a.beginPath(), a.arc(
        T,
        v,
        I - a.lineWidth / 2,
        0,
        2 * Math.PI
      ), a.closePath(), a.stroke(), a.strokeStyle = U <= 0 ? "transparent" : p, a.lineWidth = U, a.beginPath(), a.arc(
        T,
        v,
        x + a.lineWidth / 2 - 1,
        0,
        2 * Math.PI
      ), a.closePath(), a.stroke(), a.translate(
        T + Math.cos(y + c / 2) * q,
        v + Math.sin(y + c / 2) * q
      );
      let O = y + c / 2;
      if (o && o._imageHTML) {
        O += o.landscape ? 0 : Math.PI / 2, a.rotate(O);
        const R = o._imageHTML;
        R.complete && R.naturalWidth > 0 && a.drawImage(
          R,
          (R.width + (o.offsetX || 0)) / -2,
          -(R.height - (o.landscape ? 0 : 90) + (o.offsetY || 0)) / 2,
          R.width,
          R.height
        );
      } else if (e) {
        O += F ? Math.PI / 2 : 0, a.rotate(O);
        const R = e;
        a.font = `${(m == null ? void 0 : m.fontStyle) || A} ${(m == null ? void 0 : m.fontWeight) || J} ${((m == null ? void 0 : m.fontSize) || X) * 2}px ${(m == null ? void 0 : m.fontFamily) || G}, Helvetica, Arial`, a.fillStyle = (m == null ? void 0 : m.textColor) || "#000000", a.textBaseline = "middle", a.fillText(
          R,
          -a.measureText(R).width / 2,
          0
        );
      }
      a.restore(), y = u;
    }
  }, [
    n,
    d,
    i,
    l,
    p,
    k,
    K,
    M,
    G,
    J,
    X,
    A,
    F,
    W,
    V,
    Y
  ]);
  return ce(() => {
    const s = setTimeout(() => {
      B();
    }, 0);
    return () => clearTimeout(s);
  }, [B, L]), /* @__PURE__ */ te.jsx(
    Wt,
    {
      ref: Z,
      width: t,
      height: r
    },
    `canvas-${L}`
  );
}, Ct = "started-spinning", Ut = 2600, $t = 750, Pt = 8e3, Xt = ({
  mustStartSpinning: t,
  prizeNumber: r,
  data: n,
  onStopSpinning: d = () => null,
  backgroundColors: i = ze,
  textColors: l = He,
  outerBorderColor: p = Et,
  outerBorderWidth: k = St,
  innerRadius: K = yt,
  innerBorderColor: M = At,
  innerBorderWidth: G = wt,
  radiusLineColor: J = bt,
  radiusLineWidth: X = pt,
  fontFamily: A = et[0],
  fontSize: F = Ke,
  fontWeight: W = Ge,
  fontStyle: L = Je,
  perpendicularText: V = !1,
  textDistance: Z = vt,
  spinDuration: Y = Nt,
  startingOptionIndex: B = -1,
  pointerProps: s = {},
  disableInitialAnimation: a = _t,
  // New props
  onSpinStart: C,
  onTick: U,
  onSpinEnd: D,
  onRemoveWinner: y,
  removeWinnerOnStop: I = !1,
  spinRevolutions: $ = 4,
  easingFunction: q
}) => {
  const [ne, x] = w([...n]), [T, v] = w([[0]]), [j, P] = w(0), [m, e] = w(0), [o, c] = w(!1), [u, O] = w(!1), [R, g] = w(!1), [z, re] = w(!1), [he, de] = w(!1), [nt, rt] = w(0), [be, ot] = w(0), [at, Se] = w(!1), Re = me(!1), st = me(kt(5)), [ye, it] = w(-1), Te = me(null), oe = st.current, Ee = Math.max(0.01, Y), we = Ut * Ee, pe = $t * Ee, ve = Pt * Ee, ct = we + pe + ve, Oe = Ze(
    (N) => {
      const E = (N % 360 + 360) % 360, b = ge(T);
      if (b === 0) return -1;
      const S = 360 / b, _ = (360 - E + 90) % 360;
      return Math.floor(_ / S) % b;
    },
    [T]
  );
  ce(() => {
    var ee, le, Q, Ne, _e, ke, Le, De, Ie, xe;
    let N = 0;
    const E = [], b = (n == null ? void 0 : n.length) || 0, S = [{ option: "", optionSize: 1 }], _ = qe(A == null ? void 0 : A.trim()) ? [A] : [];
    for (let f = 0; f < b; f++) {
      let ae = ((Q = (le = (ee = n[f]) == null ? void 0 : ee.style) == null ? void 0 : le.fontFamily) == null ? void 0 : Q.split(",")) || [];
      ae = ae.map((h) => h.trim()).filter(qe), _.push(...ae), S[f] = {
        ...n[f],
        style: {
          backgroundColor: ((Ne = n[f].style) == null ? void 0 : Ne.backgroundColor) || (i == null ? void 0 : i[f % (i == null ? void 0 : i.length)]) || ze[0],
          fontFamily: ((_e = n[f].style) == null ? void 0 : _e.fontFamily) || A || Ot,
          fontSize: ((ke = n[f].style) == null ? void 0 : ke.fontSize) || F || Ke,
          fontWeight: ((Le = n[f].style) == null ? void 0 : Le.fontWeight) || W || Ge,
          fontStyle: ((De = n[f].style) == null ? void 0 : De.fontStyle) || L || Je,
          textColor: ((Ie = n[f].style) == null ? void 0 : Ie.textColor) || (l == null ? void 0 : l[f % (l == null ? void 0 : l.length)]) || He[0]
        }
      }, E.push([]);
      for (let h = 0; h < (S[f].optionSize || 1); h++)
        E[f][h] = N++;
      if (n[f].image) {
        ot((ue) => ue + 1);
        const h = new Image();
        h.src = ((xe = n[f].image) == null ? void 0 : xe.uri) || "", h.onload = () => {
          var ue, Me, Fe, We, je, Ce;
          h.height = 200 * (((ue = n[f].image) == null ? void 0 : ue.sizeMultiplier) || 1), h.width = h.naturalWidth / h.naturalHeight * h.height, S[f].image = {
            uri: ((Me = n[f].image) == null ? void 0 : Me.uri) || "",
            offsetX: ((Fe = n[f].image) == null ? void 0 : Fe.offsetX) || 0,
            offsetY: ((We = n[f].image) == null ? void 0 : We.offsetY) || 0,
            landscape: ((je = n[f].image) == null ? void 0 : je.landscape) || !1,
            sizeMultiplier: ((Ce = n[f].image) == null ? void 0 : Ce.sizeMultiplier) || 1,
            _imageHTML: h
          }, rt((Ae) => Ae + 1), de((Ae) => !Ae);
        };
      }
    }
    (_ == null ? void 0 : _.length) > 0 ? import("webfontloader").then((f) => {
      const ae = f.default;
      try {
        ae.load({
          google: {
            families: Array.from(new Set(_.filter((h) => !!h)))
          },
          timeout: 1e3,
          fontactive() {
            de((h) => !h);
          },
          active() {
            Se(!0), de((h) => !h);
          }
        });
      } catch (h) {
        console.error("Error loading webfonts:", h);
      }
    }) : Se(!0), x([...S]), v(E), ut(B, E), re(!0);
  }, [n, i, l, A, F, W, L, B]), ce(() => {
    if (R && U)
      return Te.current = setInterval(() => {
        const N = document.querySelector(
          `.rotation-${oe}`
        );
        if (N) {
          const b = window.getComputedStyle(N).transform;
          if (b && b !== "none") {
            const S = b.split("(")[1].split(")")[0].split(","), _ = parseFloat(S[0]), ee = parseFloat(S[1]), le = Math.atan2(ee, _) * (180 / Math.PI), Q = Oe(le);
            Q !== ye && Q !== -1 && (it(Q), U(Q));
          }
        }
      }, 50), () => {
        Te.current && clearInterval(Te.current);
      };
  }, [R, ye, Oe, U, oe]), ce(() => {
    var N, E;
    if (t && !R) {
      g(!0), lt();
      const b = (E = T[r]) == null ? void 0 : E[Math.floor(Math.random() * ((N = T[r]) == null ? void 0 : N.length))], S = Xe(b, ge(T));
      e(S);
    }
  }, [t, R, T, r, $]), ce(() => {
    u && (g(!1), P(m % 360));
  }, [u, m]);
  const lt = () => {
    c(!0), O(!1), Re.current = !0, C == null || C(), setTimeout(() => {
      Re.current && (Re.current = !1, c(!1), O(!0), D == null || D(r), d(), I && y && setTimeout(() => {
        y(r);
      }, 500));
    }, ct);
  }, ut = (N, E) => {
    var b, S;
    if (N >= 0 && E.length > 0) {
      const _ = Math.floor(N) % E.length, ee = (S = E[_]) == null ? void 0 : S[Math.floor(((b = E[_]) == null ? void 0 : b.length) / 2)];
      P(
        Xe(ee, ge(E), !1)
      );
    }
  }, ft = () => (s == null ? void 0 : s.type) === "custom" && (s != null && s.component) ? /* @__PURE__ */ te.jsx(
    Ft,
    {
      position: s.position || "right",
      size: s.size || 17,
      offset: s.offset,
      style: s.style,
      children: s.component
    }
  ) : /* @__PURE__ */ te.jsx(
    Mt,
    {
      position: (s == null ? void 0 : s.position) || "right",
      size: (s == null ? void 0 : s.size) || 17,
      offset: s == null ? void 0 : s.offset,
      style: s == null ? void 0 : s.style,
      src: (s == null ? void 0 : s.src) || tt.src,
      alt: "roulette-pointer"
    }
  ), mt = () => o ? `${Ct} rotation-${oe}` : `rotation-${oe}`;
  return z ? /* @__PURE__ */ te.jsxs(
    It,
    {
      style: !at || be > 0 && nt !== be ? { visibility: "hidden" } : {},
      children: [
        /* @__PURE__ */ te.jsx(
          xt,
          {
            className: mt(),
            $classKey: oe,
            $startSpinningTime: we,
            $continueSpinningTime: pe,
            $stopSpinningTime: ve,
            $startRotationDegrees: j,
            $finalRotationDegrees: m,
            $disableInitialAnimation: a,
            $spinRevolutions: $,
            $easingFunction: q,
            children: /* @__PURE__ */ te.jsx(
              jt,
              {
                width: "900",
                height: "900",
                data: ne,
                outerBorderColor: p,
                outerBorderWidth: k,
                innerRadius: K,
                innerBorderColor: M,
                innerBorderWidth: G,
                radiusLineColor: J,
                radiusLineWidth: X,
                fontFamily: A,
                fontWeight: W,
                fontStyle: L,
                fontSize: F,
                perpendicularText: V,
                prizeMap: T,
                rouletteUpdater: he,
                textDistance: Z
              }
            )
          }
        ),
        ft()
      ]
    }
  ) : null;
};
export {
  ze as DEFAULT_BACKGROUND_COLORS,
  Ot as DEFAULT_FONT_FAMILY,
  Ke as DEFAULT_FONT_SIZE,
  Nt as DEFAULT_SPIN_DURATION,
  Kt as DEFAULT_SPIN_REVOLUTIONS,
  He as DEFAULT_TEXT_COLORS,
  Xt as Wheel,
  Jt as calculateSegmentFromRotation,
  Ye as clamp,
  ge as getQuantity,
  Xe as getRotationDegrees,
  qe as isCustomFont,
  Be as normalizeAngle,
  Gt as validateWheelData
};
//# sourceMappingURL=index.esm.js.map
