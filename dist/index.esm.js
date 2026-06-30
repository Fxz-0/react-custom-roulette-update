import mt, { useRef as Ae, useMemo as gt, useCallback as Ze, useEffect as ie, useState as w } from "react";
import ht from "webfontloader";
import H from "styled-components";
var ue = { exports: {} }, oe = {};
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
  if (Ue) return oe;
  Ue = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function n(h, l, u) {
    var p = null;
    if (u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), "key" in l) {
      u = {};
      for (var k in l)
        k !== "key" && (u[k] = l[k]);
    } else u = l;
    return l = u.ref, {
      $$typeof: t,
      type: h,
      key: p,
      ref: l !== void 0 ? l : null,
      props: u
    };
  }
  return oe.Fragment = r, oe.jsx = n, oe.jsxs = n, oe;
}
var se = {};
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
        case o:
          return "Suspense";
        case U:
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
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return a = e.displayName || null, a !== null ? a : t(e.type) || "Memo";
          case D:
            a = e._payload, e = e._init;
            try {
              return t(e(a));
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
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var c = a.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), r(e);
      }
    }
    function h(e) {
      if (e === L) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var a = t(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (q.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, a) {
      function c() {
        R || (R = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function G() {
      var e = t(this.type);
      return v[e] || (v[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, a, c, f, O, d) {
      var g = c.ref;
      return e = {
        $$typeof: F,
        type: e,
        key: a,
        props: c,
        _owner: f
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: G
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
        value: d
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function K(e, a, c, f, O, d) {
      var g = a.children;
      if (g !== void 0)
        if (f)
          if (ne(g)) {
            for (f = 0; f < g.length; f++)
              J(g[f]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else J(g);
      if (q.call(a, "key")) {
        g = t(e);
        var z = Object.keys(a).filter(function(me) {
          return me !== "key";
        });
        f = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", m[g + f] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          g,
          z,
          g
        ), m[g + f] = !0);
      }
      if (g = null, c !== void 0 && (n(c), g = "" + c), p(a) && (n(a.key), g = "" + a.key), "key" in a) {
        c = {};
        for (var re in a)
          re !== "key" && (c[re] = a[re]);
      } else c = a;
      return g && k(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(
        e,
        g,
        c,
        l(),
        O,
        d
      );
    }
    function J(e) {
      X(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === D && (e._payload.status === "fulfilled" ? X(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === F;
    }
    var E = mt, F = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), B = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), j = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, ne = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var R, v = {}, C = E.react_stack_bottom_frame.bind(
      E,
      u
    )(), P = x(h(u)), m = {};
    se.Fragment = L, se.jsx = function(e, a, c) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return K(
        e,
        a,
        c,
        !1,
        f ? Error("react-stack-top-frame") : C,
        f ? x(h(e)) : P
      );
    }, se.jsxs = function(e, a, c) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return K(
        e,
        a,
        c,
        !0,
        f ? Error("react-stack-top-frame") : C,
        f ? x(h(e)) : P
      );
    };
  })()), se;
}
var Pe;
function Tt() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? ue.exports = dt() : ue.exports = Rt()), ue.exports;
}
var te = Tt();
const ze = ["darkgrey", "lightgrey"], He = ["black"], Et = "black", At = "black", bt = "black", St = 5, yt = 0, wt = 0, pt = 5, vt = 60, Ot = "Nunito", Ge = 20, Ke = "bold", Je = "normal", Nt = 1, Kt = 4, _t = !1, et = [
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
], Xe = (t, r, n = !0, h = 4) => {
  if (r <= 0)
    return console.error("numberOfPrizes must be greater than 0"), 0;
  if (t < 0 || t >= r)
    return console.error(
      `prizeNumber (${t}) must be between 0 and ${r - 1}`
    ), 0;
  const l = 360 / r, u = 43 + l / 2, p = n ? (-1 + Math.random() * 2) * l * 0.35 : 0, M = l * (r - t) - u + p + 360 * h;
  return r - t > r / 2 ? -360 + M : M;
}, Ye = (t, r, n) => (t > r && (console.warn(`clamp: min (${t}) is greater than max (${r}), swapping`), [t, r] = [r, t]), Math.min(Math.max(t, +n), r)), Be = (t) => (t % 360 + 360) % 360, qe = (t) => {
  if (!t || typeof t != "string") return !1;
  const r = t.trim().toLowerCase();
  return r !== "" && !et.includes(r);
}, fe = (t) => {
  if (!t || t.length === 0)
    return console.warn("getQuantity: prizeMap is empty"), 0;
  const r = t[t.length - 1];
  return !r || r.length === 0 ? (console.warn("getQuantity: last array in prizeMap is empty"), 0) : r[r.length - 1] + 1;
}, Qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", kt = (t) => {
  let r = "";
  const n = Qe.length;
  for (let h = 0; h < t; h++)
    r += Qe.charAt(Math.floor(Math.random() * n));
  return r;
}, Jt = (t) => {
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
}, Xt = (t, r) => {
  if (r <= 0) return -1;
  const n = Be(t), h = 360 / r, l = Be(360 - n + 90);
  return Math.floor(l / h) % r;
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
`, Ve = (t, r, n, h, l, u) => {
  t.beginPath(), t.moveTo(
    r + (h + 1) * Math.cos(u),
    n + (h + 1) * Math.sin(u)
  ), t.lineTo(
    r + (l - 1) * Math.cos(u),
    n + (l - 1) * Math.sin(u)
  ), t.closePath(), t.stroke();
}, jt = ({
  width: t,
  height: r,
  data: n,
  outerBorderColor: h,
  outerBorderWidth: l,
  innerRadius: u,
  innerBorderColor: p,
  innerBorderWidth: k,
  radiusLineColor: G,
  radiusLineWidth: M,
  fontFamily: K,
  fontWeight: J,
  fontSize: X,
  fontStyle: E,
  perpendicularText: F,
  prizeMap: W,
  rouletteUpdater: L,
  textDistance: V
}) => {
  const Z = Ae(null), Y = gt(() => fe(W), [W]), B = Ze(() => {
    const s = Z.current;
    if (!s) {
      console.warn("Canvas ref is not available");
      return;
    }
    const o = s.getContext("2d");
    if (!o) {
      console.error("Could not get 2D context from canvas");
      return;
    }
    o.clearRect(0, 0, s.width, s.height), o.strokeStyle = "transparent", o.lineWidth = 0;
    const U = l * 2, $ = k * 2, D = M * 2;
    let y = 0;
    const I = s.width / 2 - 10, j = Ye(0, 100, V), q = I * j / 100, ne = Ye(0, 100, u), x = I * ne / 100, R = s.width / 2, v = s.height / 2;
    if (!n || n.length === 0) {
      console.warn("No data provided to draw wheel");
      return;
    }
    for (let C = 0; C < n.length; C++) {
      const { optionSize: P, style: m, option: e, image: a } = n[C], c = P && P * (2 * Math.PI) / Y || 2 * Math.PI / Y, f = y + c;
      o.fillStyle = (m == null ? void 0 : m.backgroundColor) || "#cccccc", o.beginPath(), o.arc(R, v, I, y, f, !1), o.arc(R, v, x, f, y, !0), o.stroke(), o.fill(), o.save(), o.strokeStyle = D <= 0 ? "transparent" : G, o.lineWidth = D, Ve(
        o,
        R,
        v,
        x,
        I,
        y
      ), C === n.length - 1 && Ve(
        o,
        R,
        v,
        x,
        I,
        f
      ), o.strokeStyle = U <= 0 ? "transparent" : h, o.lineWidth = U, o.beginPath(), o.arc(
        R,
        v,
        I - o.lineWidth / 2,
        0,
        2 * Math.PI
      ), o.closePath(), o.stroke(), o.strokeStyle = $ <= 0 ? "transparent" : p, o.lineWidth = $, o.beginPath(), o.arc(
        R,
        v,
        x + o.lineWidth / 2 - 1,
        0,
        2 * Math.PI
      ), o.closePath(), o.stroke(), o.translate(
        R + Math.cos(y + c / 2) * q,
        v + Math.sin(y + c / 2) * q
      );
      let O = y + c / 2;
      if (a && a._imageHTML) {
        O += a.landscape ? 0 : Math.PI / 2, o.rotate(O);
        const d = a._imageHTML;
        d.complete && d.naturalWidth > 0 && o.drawImage(
          d,
          (d.width + (a.offsetX || 0)) / -2,
          -(d.height - (a.landscape ? 0 : 90) + (a.offsetY || 0)) / 2,
          d.width,
          d.height
        );
      } else if (e) {
        O += F ? Math.PI / 2 : 0, o.rotate(O);
        const d = e;
        o.font = `${(m == null ? void 0 : m.fontStyle) || E} ${(m == null ? void 0 : m.fontWeight) || J} ${((m == null ? void 0 : m.fontSize) || X) * 2}px ${(m == null ? void 0 : m.fontFamily) || K}, Helvetica, Arial`, o.fillStyle = (m == null ? void 0 : m.textColor) || "#000000", o.textBaseline = "middle", o.fillText(
          d,
          -o.measureText(d).width / 2,
          0
        );
      }
      o.restore(), y = f;
    }
  }, [
    n,
    h,
    l,
    u,
    p,
    k,
    G,
    M,
    K,
    J,
    X,
    E,
    F,
    W,
    V,
    Y
  ]);
  return ie(() => {
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
}, Ct = "started-spinning", Ut = 2600, $t = 750, Pt = 8e3, Yt = ({
  mustStartSpinning: t,
  prizeNumber: r,
  data: n,
  onStopSpinning: h = () => null,
  backgroundColors: l = ze,
  textColors: u = He,
  outerBorderColor: p = Et,
  outerBorderWidth: k = St,
  innerRadius: G = yt,
  innerBorderColor: M = At,
  innerBorderWidth: K = wt,
  radiusLineColor: J = bt,
  radiusLineWidth: X = pt,
  fontFamily: E = et[0],
  fontSize: F = Ge,
  fontWeight: W = Ke,
  fontStyle: L = Je,
  perpendicularText: V = !1,
  textDistance: Z = vt,
  spinDuration: Y = Nt,
  startingOptionIndex: B = -1,
  pointerProps: s = {},
  disableInitialAnimation: o = _t,
  // New props
  onSpinStart: U,
  onTick: $,
  onSpinEnd: D,
  onRemoveWinner: y,
  removeWinnerOnStop: I = !1,
  spinRevolutions: j = 4,
  easingFunction: q
}) => {
  const [ne, x] = w([...n]), [R, v] = w([[0]]), [C, P] = w(0), [m, e] = w(0), [a, c] = w(!1), [f, O] = w(!1), [d, g] = w(!1), [z, re] = w(!1), [me, ge] = w(!1), [nt, rt] = w(0), [be, at] = w(0), [ot, Se] = w(!1), he = Ae(!1), [ye, st] = w(-1), de = Ae(null), ae = kt(5), Re = Math.max(0.01, Y), we = Ut * Re, pe = $t * Re, ve = Pt * Re, it = we + pe + ve, Oe = Ze(
    (N) => {
      const T = (N % 360 + 360) % 360, A = fe(R);
      if (A === 0) return -1;
      const b = 360 / A, _ = (360 - T + 90) % 360;
      return Math.floor(_ / b) % A;
    },
    [R]
  );
  ie(() => {
    var ee, le, Q, Ne, _e, ke, Le, De, Ie, xe;
    let N = 0;
    const T = [], A = (n == null ? void 0 : n.length) || 0, b = [{ option: "", optionSize: 1 }], _ = qe(E == null ? void 0 : E.trim()) ? [E] : [];
    for (let i = 0; i < A; i++) {
      let Te = ((Q = (le = (ee = n[i]) == null ? void 0 : ee.style) == null ? void 0 : le.fontFamily) == null ? void 0 : Q.split(",")) || [];
      Te = Te.map((S) => S.trim()).filter(qe), _.push(...Te), b[i] = {
        ...n[i],
        style: {
          backgroundColor: ((Ne = n[i].style) == null ? void 0 : Ne.backgroundColor) || (l == null ? void 0 : l[i % (l == null ? void 0 : l.length)]) || ze[0],
          fontFamily: ((_e = n[i].style) == null ? void 0 : _e.fontFamily) || E || Ot,
          fontSize: ((ke = n[i].style) == null ? void 0 : ke.fontSize) || F || Ge,
          fontWeight: ((Le = n[i].style) == null ? void 0 : Le.fontWeight) || W || Ke,
          fontStyle: ((De = n[i].style) == null ? void 0 : De.fontStyle) || L || Je,
          textColor: ((Ie = n[i].style) == null ? void 0 : Ie.textColor) || (u == null ? void 0 : u[i % (u == null ? void 0 : u.length)]) || He[0]
        }
      }, T.push([]);
      for (let S = 0; S < (b[i].optionSize || 1); S++)
        T[i][S] = N++;
      if (n[i].image) {
        at((ce) => ce + 1);
        const S = new Image();
        S.src = ((xe = n[i].image) == null ? void 0 : xe.uri) || "", S.onload = () => {
          var ce, Me, Fe, We, je, Ce;
          S.height = 200 * (((ce = n[i].image) == null ? void 0 : ce.sizeMultiplier) || 1), S.width = S.naturalWidth / S.naturalHeight * S.height, b[i].image = {
            uri: ((Me = n[i].image) == null ? void 0 : Me.uri) || "",
            offsetX: ((Fe = n[i].image) == null ? void 0 : Fe.offsetX) || 0,
            offsetY: ((We = n[i].image) == null ? void 0 : We.offsetY) || 0,
            landscape: ((je = n[i].image) == null ? void 0 : je.landscape) || !1,
            sizeMultiplier: ((Ce = n[i].image) == null ? void 0 : Ce.sizeMultiplier) || 1,
            _imageHTML: S
          }, rt((Ee) => Ee + 1), ge((Ee) => !Ee);
        };
      }
    }
    if ((_ == null ? void 0 : _.length) > 0)
      try {
        ht.load({
          google: {
            families: Array.from(new Set(_.filter((i) => !!i)))
          },
          timeout: 1e3,
          fontactive() {
            ge((i) => !i);
          },
          active() {
            Se(!0), ge((i) => !i);
          }
        });
      } catch (i) {
        console.error("Error loading webfonts:", i);
      }
    else
      Se(!0);
    x([...b]), v(T), ct(B, T), re(!0);
  }, [n, l, u, E, F, W, L, B]), ie(() => {
    if (d && $)
      return de.current = setInterval(() => {
        const N = document.querySelector(
          `.rotation-${ae}`
        );
        if (N) {
          const A = window.getComputedStyle(N).transform;
          if (A && A !== "none") {
            const b = A.split("(")[1].split(")")[0].split(","), _ = parseFloat(b[0]), ee = parseFloat(b[1]), le = Math.atan2(ee, _) * (180 / Math.PI), Q = Oe(le);
            Q !== ye && Q !== -1 && (st(Q), $(Q));
          }
        }
      }, 50), () => {
        de.current && clearInterval(de.current);
      };
  }, [d, ye, Oe, $, ae]), ie(() => {
    var N, T;
    if (t && !d) {
      g(!0), lt();
      const A = (T = R[r]) == null ? void 0 : T[Math.floor(Math.random() * ((N = R[r]) == null ? void 0 : N.length))], b = Xe(A, fe(R)) + 360 * j;
      e(b);
    }
  }, [t, d, R, r, j]), ie(() => {
    f && (g(!1), P(m));
  }, [f, m]);
  const lt = () => {
    c(!0), O(!1), he.current = !0, U == null || U(), setTimeout(() => {
      he.current && (he.current = !1, c(!1), O(!0), D == null || D(r), h(), I && y && setTimeout(() => {
        y(r);
      }, 500));
    }, it);
  }, ct = (N, T) => {
    var A, b;
    if (N >= 0 && T.length > 0) {
      const _ = Math.floor(N) % T.length, ee = (b = T[_]) == null ? void 0 : b[Math.floor(((A = T[_]) == null ? void 0 : A.length) / 2)];
      P(
        Xe(ee, fe(T), !1)
      );
    }
  }, ut = () => (s == null ? void 0 : s.type) === "custom" && (s != null && s.component) ? /* @__PURE__ */ te.jsx(
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
  ), ft = () => a ? `${Ct} rotation-${ae}` : `rotation-${ae}`;
  return z ? /* @__PURE__ */ te.jsxs(
    It,
    {
      style: !ot || be > 0 && nt !== be ? { visibility: "hidden" } : {},
      children: [
        /* @__PURE__ */ te.jsx(
          xt,
          {
            className: ft(),
            $classKey: ae,
            $startSpinningTime: we,
            $continueSpinningTime: pe,
            $stopSpinningTime: ve,
            $startRotationDegrees: C,
            $finalRotationDegrees: m,
            $disableInitialAnimation: o,
            $spinRevolutions: j,
            $easingFunction: q,
            children: /* @__PURE__ */ te.jsx(
              jt,
              {
                width: "900",
                height: "900",
                data: ne,
                outerBorderColor: p,
                outerBorderWidth: k,
                innerRadius: G,
                innerBorderColor: M,
                innerBorderWidth: K,
                radiusLineColor: J,
                radiusLineWidth: X,
                fontFamily: E,
                fontWeight: W,
                fontStyle: L,
                fontSize: F,
                perpendicularText: V,
                prizeMap: R,
                rouletteUpdater: me,
                textDistance: Z
              }
            )
          }
        ),
        ut()
      ]
    }
  ) : null;
};
export {
  ze as DEFAULT_BACKGROUND_COLORS,
  Ot as DEFAULT_FONT_FAMILY,
  Ge as DEFAULT_FONT_SIZE,
  Nt as DEFAULT_SPIN_DURATION,
  Kt as DEFAULT_SPIN_REVOLUTIONS,
  He as DEFAULT_TEXT_COLORS,
  Yt as Wheel,
  Xt as calculateSegmentFromRotation,
  Ye as clamp,
  fe as getQuantity,
  Xe as getRotationDegrees,
  qe as isCustomFont,
  Be as normalizeAngle,
  Jt as validateWheelData
};
//# sourceMappingURL=index.esm.js.map
