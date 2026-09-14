import {
    a_ as _e,
    a$ as ne,
    b0 as W,
    b1 as ia,
    b2 as Go,
    b3 as ur,
    b4 as Yo,
    b5 as Xo,
    b6 as ht,
    b7 as ze,
    b8 as $e,
    b9 as Qo,
    ba as dr,
    bb as xn,
    bc as Jo,
    x as je,
    bd as Gt,
    be as _o,
    bf as el,
    bg as tl,
    bh as al,
    bi as nl,
    bj as rl,
    bk as jt,
    bl as ol,
    q as ee,
    bm as ll,
    al as cr,
    w as sl,
    t as il,
    y as ul,
    z as dl,
    B as vr,
    C as cl,
    bn as vl,
    d as B,
    o as p,
    c as x,
    r as I,
    u,
    a as b,
    b as U,
    m as _,
    e as Te,
    bo as Mt,
    bp as Ne,
    E as Pe,
    ai as A,
    aB as fr,
    aF as ke,
    aN as fl,
    ad as H,
    aJ as Ya,
    ap as Ze,
    aH as ml,
    aP as ua,
    bq as se,
    br as ue,
    bs as gt,
    F as E,
    bt as Se,
    bu as pl,
    bv as Xa,
    bw as hl,
    a4 as T,
    bx as ge,
    by as da,
    bz as pe,
    aa as de,
    bA as Ce,
    bB as gl,
    bC as wn,
    bD as yl,
    bE as An,
    bF as mr,
    bG as Yt,
    bH as Et,
    bI as bl,
    bJ as Sl,
    bK as xl,
    aZ as Qa,
    bL as wl,
    bM as Al,
    bN as Tl,
    a8 as Ja,
    bO as kl,
    bP as Cl,
    bQ as Hl,
    bR as Pl,
    ao as le,
    bS as pr,
    as as Ae,
    at as K,
    bT as Bl,
    ak as re,
    am as _a,
    bU as Ml,
    bV as hr,
    bW as Xt,
    bX as gr,
    bY as ce,
    bZ as yr,
    ag as S,
    ah as Y,
    ay as me,
    b_ as Ct,
    b$ as br,
    c0 as Tt,
    aD as El,
    av as Sr,
    au as xr,
    a3 as oe,
    c1 as Rl,
    c2 as Qt,
    aj as ye,
    c3 as Il,
    c4 as Ke,
    c5 as Rt,
    c6 as It,
    c7 as yt,
    aT as wr,
    c8 as Ge,
    c9 as Tn,
    aG as Ie,
    ca as en,
    an as Ol,
    cb as Vl,
    aq as Ar,
    cc as $l,
    cd as Ll,
    ce as Ul,
    cf as Dl,
    cg as zl,
    aU as be,
    ae as Zl,
    ch as $t,
    ci as Ht,
    cj as Nl,
    ck as Ra,
    cl as Fl,
    cm as ql,
    cn as Tr,
    co as Wl,
    cp as jl,
    cq as Kl,
    cr as Gl,
    aS as Ia,
    cs as bt,
    aY as Oe,
    aL as kr,
    ct as Yl,
    cu as Xl,
    cv as Le,
    cw as Ql,
    cx as Jl,
    cy as Cr,
    cz as kn,
    cA as Cn,
    cB as tn,
    cC as Hr,
    aV as _l,
    aO as Pr,
    cD as Br,
    cE as Mr,
    cF as es,
    cG as ts,
    aM as ga,
    cH as as,
    cI as Hn,
    cJ as ns,
    aA as Lt,
    cK as Kt,
    aC as rs,
    cL as os,
    cM as ls,
    cN as ss,
    cO as fe,
    cP as is,
    cQ as us,
    cR as ds,
    a9 as cs,
    cS as an,
    cT as Ot,
    cU as St,
    cV as vs,
    cW as fs,
    cX as Je,
    cY as Jt,
    cZ as Er,
    c_ as Rr,
    c$ as Oa,
    d0 as Ir,
    d1 as ms,
    d2 as ps,
    d3 as hs,
    aX as ca,
    d4 as xt,
    d5 as gs,
    d6 as Or,
    d7 as mt,
    d8 as at,
    d9 as Vr,
    da as ys,
    db as bs,
    dc as Ss,
    dd as xs,
    de as ws,
    df as As,
    dg as Ts,
    a5 as nn,
    dh as ks,
    di as Cs,
    dj as $r,
    dk as Hs,
    dl as Ps,
    dm as Pn,
    dn as Bs,
    dp as Ms,
    dq as Es,
    dr as Rs,
    ds as Is,
    dt as Os,
    du as Vs,
    af as Va,
    dv as $s,
    dw as $a,
    dx as Ls,
    dy as Us,
    dz as Ds,
    dA as Lr,
    ar as zs,
    dB as Zs,
    dC as Ns,
    dD as Fs,
    dE as qs,
    dF as Ws,
    dG as js,
    dH as Ks,
    dI as Gs,
    dJ as Bn,
    dK as Ur,
    dL as Ys,
    dM as Xs,
    a1 as Qs,
    a7 as Js
} from "./index-BwSyhzaO.js";
import "./index-DnuzNlT9.js";
var Re = {},
    Mn;

function _s() {
    if (Mn) return Re;
    Mn = 1, Object.defineProperty(Re, "__esModule", {
        value: !0
    }), Re.parseCookie = s, Re.parse = s, Re.stringifyCookie = i, Re.stringifySetCookie = c, Re.serialize = c, Re.parseSetCookie = f, Re.stringifySetCookie = c, Re.serialize = c;
    const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
        a = /^[\u0021-\u003A\u003C-\u007E]*$/,
        t = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        n = /^[\u0020-\u003A\u003D-\u007E]*$/,
        r = /^-?\d+$/,
        o = Object.prototype.toString,
        l = (() => {
            const h = function() {};
            return h.prototype = Object.create(null), h
        })();

    function s(h, w) {
        const P = new l,
            k = h.length;
        if (k < 2) return P;
        const D = (w == null ? void 0 : w.decode) || g;
        let Z = 0;
        do {
            const J = v(h, Z, k);
            if (J === -1) break;
            const G = d(h, Z, k);
            if (J > G) {
                Z = h.lastIndexOf(";", J - 1) + 1;
                continue
            }
            const ae = m(h, Z, J);
            P[ae] === void 0 && (P[ae] = D(m(h, J + 1, G))), Z = G + 1
        } while (Z < k);
        return P
    }

    function i(h, w) {
        const P = (w == null ? void 0 : w.encode) || encodeURIComponent,
            k = [];
        for (const D of Object.keys(h)) {
            const Z = h[D];
            if (Z === void 0) continue;
            if (!e.test(D)) throw new TypeError(`cookie name is invalid: ${D}`);
            const J = P(Z);
            if (!a.test(J)) throw new TypeError(`cookie val is invalid: ${Z}`);
            k.push(`${D}=${J}`)
        }
        return k.join("; ")
    }

    function c(h, w, P) {
        const k = typeof h == "object" ? h : {
                ...P,
                name: h,
                value: String(w)
            },
            D = typeof w == "object" ? w : P,
            Z = (D == null ? void 0 : D.encode) || encodeURIComponent;
        if (!e.test(k.name)) throw new TypeError(`argument name is invalid: ${k.name}`);
        const J = k.value ? Z(k.value) : "";
        if (!a.test(J)) throw new TypeError(`argument val is invalid: ${k.value}`);
        let G = k.name + "=" + J;
        if (k.maxAge !== void 0) {
            if (!Number.isInteger(k.maxAge)) throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);
            G += "; Max-Age=" + k.maxAge
        }
        if (k.domain) {
            if (!t.test(k.domain)) throw new TypeError(`option domain is invalid: ${k.domain}`);
            G += "; Domain=" + k.domain
        }
        if (k.path) {
            if (!n.test(k.path)) throw new TypeError(`option path is invalid: ${k.path}`);
            G += "; Path=" + k.path
        }
        if (k.expires) {
            if (!y(k.expires) || !Number.isFinite(k.expires.valueOf())) throw new TypeError(`option expires is invalid: ${k.expires}`);
            G += "; Expires=" + k.expires.toUTCString()
        }
        if (k.httpOnly && (G += "; HttpOnly"), k.secure && (G += "; Secure"), k.partitioned && (G += "; Partitioned"), k.priority) switch (typeof k.priority == "string" ? k.priority.toLowerCase() : void 0) {
            case "low":
                G += "; Priority=Low";
                break;
            case "medium":
                G += "; Priority=Medium";
                break;
            case "high":
                G += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${k.priority}`)
        }
        if (k.sameSite) switch (typeof k.sameSite == "string" ? k.sameSite.toLowerCase() : k.sameSite) {
            case !0:
            case "strict":
                G += "; SameSite=Strict";
                break;
            case "lax":
                G += "; SameSite=Lax";
                break;
            case "none":
                G += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)
        }
        return G
    }

    function f(h, w) {
        const P = (w == null ? void 0 : w.decode) || g,
            k = h.length,
            D = d(h, 0, k),
            Z = v(h, 0, D),
            J = Z === -1 ? {
                name: "",
                value: P(m(h, 0, D))
            } : {
                name: m(h, 0, Z),
                value: P(m(h, Z + 1, D))
            };
        let G = D + 1;
        for (; G < k;) {
            const ae = d(h, G, k),
                Q = v(h, G, ae),
                R = Q === -1 ? m(h, G, ae) : m(h, G, Q),
                N = Q === -1 ? void 0 : m(h, Q + 1, ae);
            switch (R.toLowerCase()) {
                case "httponly":
                    J.httpOnly = !0;
                    break;
                case "secure":
                    J.secure = !0;
                    break;
                case "partitioned":
                    J.partitioned = !0;
                    break;
                case "domain":
                    J.domain = N;
                    break;
                case "path":
                    J.path = N;
                    break;
                case "max-age":
                    N && r.test(N) && (J.maxAge = Number(N));
                    break;
                case "expires":
                    if (!N) break;
                    const V = new Date(N);
                    Number.isFinite(V.valueOf()) && (J.expires = V);
                    break;
                case "priority":
                    if (!N) break;
                    const L = N.toLowerCase();
                    (L === "low" || L === "medium" || L === "high") && (J.priority = L);
                    break;
                case "samesite":
                    if (!N) break;
                    const C = N.toLowerCase();
                    (C === "lax" || C === "strict" || C === "none") && (J.sameSite = C);
                    break
            }
            G = ae + 1
        }
        return J
    }

    function d(h, w, P) {
        const k = h.indexOf(";", w);
        return k === -1 ? P : k
    }

    function v(h, w, P) {
        const k = h.indexOf("=", w);
        return k < P ? k : -1
    }

    function m(h, w, P) {
        let k = w,
            D = P;
        do {
            const Z = h.charCodeAt(k);
            if (Z !== 32 && Z !== 9) break
        } while (++k < D);
        for (; D > k;) {
            const Z = h.charCodeAt(D - 1);
            if (Z !== 32 && Z !== 9) break;
            D--
        }
        return h.slice(k, D)
    }

    function g(h) {
        if (h.indexOf("%") === -1) return h;
        try {
            return decodeURIComponent(h)
        } catch {
            return h
        }
    }

    function y(h) {
        return o.call(h) === "[object Date]"
    }
    return Re
}
var ei = _s();
const ti = e => {
        const a = new WeakSet,
            t = new WeakMap,
            n = r => {
                if (!_e(r) && !Array.isArray(r)) return r;
                const o = ne(r, {
                    depth: 1
                });
                if (t.has(o)) return t.get(o);
                if (a.has(o)) return "[circular]";
                if (a.add(o), "$ref" in r) {
                    const s = W(r),
                        i = n(s);
                    return t.set(o, i), i
                }
                if (Array.isArray(r)) {
                    const s = r.map(n);
                    return t.set(o, s), s
                }
                const l = Object.fromEntries(Object.entries(r).map(([s, i]) => [s, n(i)]));
                return t.set(o, l), l
            };
        return n(e)
    },
    Dr = (e, a, t, n) => {
        var c;
        const r = (c = e.content) == null ? void 0 : c[a],
            o = ia(e, t, a);
        if (o) return o;
        const l = W(r == null ? void 0 : r.schema);
        if (!l) return null;
        const s = ti(l),
            i = Go(s, {
                mode: "write",
                compositionSelection: n
            }, {
                schemaPath: ["requestBody"]
            });
        return i ? {
            value: i
        } : null
    },
    zr = (e, a = "default") => {
        var t;
        return ((t = e == null ? void 0 : e["x-scalar-selected-content-type"]) == null ? void 0 : t[a]) ?? Object.keys((e == null ? void 0 : e.content) ?? {})[0] ?? null
    },
    ai = ({
        server: e,
        path: a,
        urlParams: t
    }) => {
        const n = ur(e);
        return Yo(Xo((e == null ? void 0 : e.url) ?? "", n), a, t)
    },
    ni = (e, a = "") => {
        const t = [];
        return e.forEach(n => {
            var r, o;
            if (n.type === "apiKey") {
                const l = n.name,
                    s = n["x-scalar-secret-token"] || a;
                if (n.in === "header") return t.push({
                    in: n.in,
                    name: l,
                    value: s
                });
                if (n.in === "query") return t.push({
                    in: "query",
                    name: l,
                    value: s
                });
                if (n.in === "cookie") return t.push({
                    in: "cookie",
                    name: l,
                    value: s
                })
            }
            if (n.type === "http") {
                if (n.scheme === "basic") {
                    const s = n["x-scalar-secret-username"],
                        i = n["x-scalar-secret-password"],
                        c = `${s}:${i}`;
                    return t.push({
                        in: "header",
                        name: "Authorization",
                        value: c === ":" ? "username:password" : c,
                        format: "basic"
                    })
                }
                const l = n["x-scalar-secret-token"];
                return t.push({
                    in: "header",
                    name: "Authorization",
                    value: l || a,
                    format: "bearer"
                })
            }
            if (n.type === "oauth2") {
                const s = ((r = Object.values((n == null ? void 0 : n.flows) ?? {}).filter(ht).find(i => i["x-scalar-secret-token"])) == null ? void 0 : r["x-scalar-secret-token"]) ?? "";
                return t.push({
                    in: "header",
                    name: "Authorization",
                    value: s || a,
                    format: "bearer"
                })
            }
            if (n.type === "openIdConnect") {
                const s = ((o = Object.values((n == null ? void 0 : n.flows) ?? {}).filter(ht).find(i => i["x-scalar-secret-token"])) == null ? void 0 : o["x-scalar-secret-token"]) ?? "";
                return t.push({
                    in: "header",
                    name: "Authorization",
                    value: s || a,
                    format: "bearer"
                })
            }
            return null
        }), t
    },
    rn = (e, a, t) => {
        const [n, ...r] = a;
        if (!n) return;
        if (ze(n), !r.length) {
            e[n] = t;
            return
        }
        const o = _e(e[n]) ? e[n] : {};
        e[n] = o, rn(o, r, t)
    },
    En = (e, a, t) => {
        var n, r, o;
        return (o = (r = (n = e.content[a]) == null ? void 0 : n.encoding) == null ? void 0 : r[t]) == null ? void 0 : o.contentType
    },
    ri = e => {
        const a = e ? W(e) : void 0;
        if (!a || !$e(a) || !a.properties) return (n, r) => !1;
        const t = new Set;
        for (const [n, r] of Object.entries(a.properties)) {
            const o = r ? W(r) : void 0;
            o && $e(o) && o.properties && t.add(n)
        }
        return (n, r) => {
            if (r instanceof File || !n.includes(".")) return !1;
            const o = n.split(".", 1)[0];
            return !!o && t.has(o)
        }
    },
    oi = (e, a = "default", t) => {
        var l;
        if (!e) return null;
        const n = zr(e, a);
        if (!n) return null;
        const r = Dr(e, n, a, t);
        if (!r) return null;
        if ((n === "multipart/form-data" || n === "application/x-www-form-urlencoded") && Array.isArray(r.value)) {
            const i = (Array.isArray(r.value) ? r.value : []).filter(m => !m.isDisabled),
                c = n === "multipart/form-data" ? {
                    mode: "formdata",
                    value: []
                } : {
                    mode: "urlencoded",
                    value: []
                },
                f = c.mode === "formdata" ? ri((l = e.content[n]) == null ? void 0 : l.schema) : () => !1,
                d = [],
                v = new Map;
            for (const m of i) {
                if (!f(m.name, m.value)) {
                    d.push(m);
                    continue
                }
                const g = m.name.split("."),
                    y = g[0];
                if (!y) continue;
                let h = v.get(y);
                h || (h = {}, v.set(y, h), d.push({
                    name: y,
                    value: h
                })), rn(h, g.slice(1), m.value)
            }
            return d.forEach(({
                name: m,
                value: g
            }) => {
                if (!m) return;
                const y = c.mode === "formdata" ? En(e, n, m) : void 0;
                if (g instanceof File && c.mode === "formdata") {
                    const h = ne(g),
                        w = y && y !== h.type ? new File([h], h.name, {
                            type: y,
                            lastModified: h.lastModified
                        }) : h;
                    return c.value.push({
                        type: "file",
                        key: m,
                        value: w,
                        contentType: y
                    })
                }
                if (g != null) {
                    const h = typeof g == "object" && g !== null ? JSON.stringify(ne(g)) : String(g);
                    return c.mode === "formdata" && y ? c.value.push({
                        type: "blob",
                        key: m,
                        value: new Blob([h], {
                            type: y
                        }),
                        contentType: y
                    }) : c.value.push({
                        type: "text",
                        key: m,
                        value: h
                    })
                }
            }), c
        }
        if (n === "application/x-www-form-urlencoded" && _e(r.value)) {
            const s = {
                mode: "urlencoded",
                value: []
            };
            for (const [i, c] of Object.entries(r.value))
                if (i && c !== void 0 && c !== null) {
                    const f = typeof c == "object" && c !== null ? JSON.stringify(ne(c)) : String(c);
                    s.value.push({
                        key: i,
                        value: f
                    })
                } return s
        }
        if (n === "multipart/form-data" && _e(r.value)) {
            const s = {
                mode: "formdata",
                value: []
            };
            for (const [i, c] of Object.entries(r.value)) {
                if (!i || c === void 0 || c === null) continue;
                const f = En(e, n, i);
                if (c instanceof File) {
                    const v = ne(c),
                        m = f && f !== v.type ? new File([v], v.name, {
                            type: f,
                            lastModified: v.lastModified
                        }) : v;
                    s.value.push({
                        type: "file",
                        key: i,
                        value: m,
                        contentType: f
                    });
                    continue
                }
                const d = typeof c == "object" && c !== null ? JSON.stringify(ne(c)) : String(c);
                if (f) {
                    s.value.push({
                        type: "blob",
                        key: i,
                        value: new Blob([d], {
                            type: f
                        }),
                        contentType: f
                    });
                    continue
                }
                s.value.push({
                    type: "text",
                    key: i,
                    value: d
                })
            }
            return s
        }
        const o = r.value !== null && typeof r.value == "object" ? ne(r.value) : r.value;
        return o instanceof File ? {
            mode: "raw",
            value: o,
            contentType: o.type
        } : typeof o == "object" ? {
            mode: "raw",
            value: JSON.stringify(o),
            contentType: "application/json"
        } : {
            mode: "raw",
            value: o
        }
    },
    ya = (e, a) => "explode" in e && e.explode !== void 0 ? e.explode : a,
    li = (e = [], a = "default") => {
        const t = {
            cookies: [],
            headers: {},
            pathVariables: {},
            allowReservedQueryParameters: new Set,
            urlParams: new URLSearchParams
        };
        if (e.length === 0) return t;
        for (const n of e) {
            const r = W(n),
                o = ia(r, a, void 0);
            if (!o || Qo(r, o)) continue;
            const l = o.value,
                s = dr(l, r),
                i = r.name;
            switch (r.in) {
                case "header": {
                    if (i.toLowerCase() === "content-type" && s === "multipart/form-data") break;
                    const f = xn(s, ya(r, !1));
                    if (!ht(f)) break;
                    const d = String(f);
                    t.headers[i] ? t.headers[i] = `${t.headers[i]},${d}` : t.headers[i] = d;
                    break
                }
                case "path": {
                    const c = xn(s, ya(r, !1));
                    t.pathVariables[i] = String(c);
                    break
                }
                case "query": {
                    ui(r, i, s, t.urlParams, t.allowReservedQueryParameters);
                    break
                }
                case "cookie": {
                    di(i, s, ya(r, !0), t.cookies);
                    break
                }
            }
        }
        return t
    },
    si = (e, a) => !("style" in e) || !e.style ? "form" : e.style === "deepObject" ? _e(a) ? "deepObject" : "form" : e.style,
    ii = e => "allowReserved" in e && e.allowReserved !== void 0 ? e.allowReserved : "schema" in e && e.schema && typeof e.schema == "object" && "allowReserved" in e.schema ? e.schema.allowReserved === !0 : !1,
    ct = (e, a, ...t) => {
        if (a)
            for (const n of t) e.add(n)
    },
    ui = (e, a, t, n, r) => {
        const o = "explode" in e && e.explode !== void 0 ? e.explode : !0,
            l = ii(e),
            s = si(e, t);
        if ("content" in e && e.content) {
            const c = Object.keys(e.content)[0] ?? "application/json",
                f = _o(t, c);
            n.set(a, f), ct(r, l, a);
            return
        }
        if (s === "deepObject" && o) {
            const c = el(a, t);
            for (const f of c) n.append(f.key, f.value), ct(r, l, a);
            return
        }
        if (s === "spaceDelimited") {
            const c = tl(t),
                f = n.get(a);
            n.set(a, f ? `${f} ${c}` : c), ct(r, l, a);
            return
        }
        if (s === "pipeDelimited") {
            const c = al(t),
                f = n.get(a);
            n.set(a, f ? `${f}|${c}` : c), ct(r, l, a);
            return
        }
        const i = nl(t, o);
        if (Array.isArray(i))
            for (const c of i) {
                const f = c.key || a;
                n.append(f, String(c.value)), ct(r, l, a)
            } else n.append(a, String(i)), ct(r, l, a)
    },
    di = (e, a, t, n) => {
        const r = Jo(a, t);
        if (Array.isArray(r))
            for (const o of r) {
                const l = o.key || e;
                n.push(je(Gt, {
                    name: l,
                    value: String(o.value),
                    path: "/"
                }))
            } else n.push(je(Gt, {
                name: e,
                value: String(r),
                path: "/"
            }))
    },
    Rn = ({
        exampleName: e,
        globalCookies: a,
        method: t,
        operation: n,
        path: r,
        proxyUrl: o,
        server: l,
        defaultHeaders: s,
        isElectron: i,
        selectedSecuritySchemes: c,
        requestBodyCompositionSelection: f
    }) => {
        var ae, Q;
        const d = W(n.requestBody),
            v = li(n.parameters ?? [], e),
            m = ni(c),
            g = new Headers({
                ...rl(n, e, s),
                ...v.headers
            }),
            y = jt(t) ? oi(d, e, f) : null;
        ((y == null ? void 0 : y.mode) === "formdata" || (y == null ? void 0 : y.mode) === "urlencoded") && g.delete("Content-Type");
        const h = ur(l),
            w = ol((l == null ? void 0 : l.url) ?? "", h),
            P = ((Q = (ae = n["x-scalar-disable-parameters"]) == null ? void 0 : ae["global-cookies"]) == null ? void 0 : Q[e]) ?? {},
            k = [...a.map(R => ({
                ...R,
                isDisabled: (R.isDisabled || P[R.name.toLowerCase()]) ?? !1
            })), ...v.cookies],
            D = g.get("Accept"),
            Z = (D == null ? void 0 : D.toLowerCase().includes("text/event-stream")) ?? !1,
            J = Z ? "no-store" : "default";
        return Z && (g.set("Cache-Control", "no-cache"), g.set("Pragma", "no-cache")), {
            request: {
                baseUrl: w,
                proxyUrl: o,
                path: {
                    variables: v.pathVariables,
                    raw: r
                },
                query: v.urlParams,
                method: t.toUpperCase(),
                headers: g,
                body: y,
                cookies: k,
                cache: J,
                security: m,
                options: {
                    isElectron: i
                },
                allowedReservedQueryParameters: v.allowReservedQueryParameters
            }
        }
    },
    ci = e => e === "web" ? "https://proxy.scalar.com" : null,
    Zr = (e, a) => e === void 0 ? ci(a) : e,
    vi = (e, a, t, n = {}) => {
        var ae, Q, R, N;
        const {
            path: r,
            method: o,
            exampleName: l
        } = t, s = e.workspace.documents[a] ?? n.fallbackDocument ?? void 0;
        if (!s) return {
            ok: !1,
            error: `Document ${a} not found`
        };
        if (!ee(s)) return {
            ok: !1,
            error: `Document ${a} is not an OpenAPI document`
        };
        const i = W((ae = s.paths) == null ? void 0 : ae[r]);
        if (!i) return {
            ok: !1,
            error: `Path ${r} not found`
        };
        const c = W(i[o]);
        if (!c) return {
            ok: !1,
            error: `Method ${o} not found on path ${r}`
        };
        const f = {
                ...c,
                parameters: ll(i.parameters, c.parameters ?? [])
            },
            d = cr(e, s),
            v = sl(n.servers ?? f.servers ?? s.servers, {
                baseServerUrl: n.baseServerUrl,
                documentUrl: s["x-scalar-original-source-url"]
            }),
            m = il(s, f, n.servers ?? null, v),
            g = e.auth.getAuthSelectedSchemas({
                type: "document",
                documentName: a
            }),
            y = e.auth.getAuthSelectedSchemas({
                type: "operation",
                documentName: a,
                path: r ?? "",
                method: o ?? "get"
            }),
            h = ul(((Q = s.components) == null ? void 0 : Q.securitySchemes) ?? {}, ((R = n.authentication) == null ? void 0 : R.securitySchemes) ?? {}, e.auth, a),
            w = dl(s.security, f.security),
            P = vr(g, y, w, h, (N = n.authentication) == null ? void 0 : N.preferredSecurityScheme),
            k = cl(h, P.selectedSchemes[P.selectedIndex] ?? {}),
            D = f.servers != null ? {
                type: "operation",
                path: r ?? "",
                method: o ?? "get"
            } : {
                type: "document"
            },
            Z = y !== void 0 ? {
                type: "operation",
                path: r ?? "",
                method: o ?? "get"
            } : {
                type: "document"
            },
            J = Zr(e.workspace["x-scalar-active-proxy"], n.layout ?? "other"),
            G = vl({
                method: o,
                operation: f,
                exampleName: l,
                options: {
                    appVersion: n.appVersion ?? "0.0.0",
                    isElectron: n.isElectron ?? !1
                }
            });
        return {
            ok: !0,
            data: {
                operation: f,
                environment: d,
                cookies: {
                    workspace: e.workspace["x-scalar-cookies"] ?? [],
                    document: s["x-scalar-cookies"] ?? []
                },
                headers: {
                    default: G
                },
                servers: {
                    list: v,
                    selected: m,
                    meta: D
                },
                proxy: {
                    url: J
                },
                security: {
                    schemes: h,
                    requirements: w,
                    selected: P,
                    selectedSchemes: k,
                    meta: Z
                }
            }
        }
    };

function fi() {
    const e = [],
        a = [],
        t = [],
        n = [];
    return {
        getEnvironment: () => e,
        getGlobals: () => t,
        getCollectionVariables: () => a,
        getData: () => ({}),
        getLocalVariables: () => n,
        setLocalVariables: r => {
            n.length = 0, n.push(...r)
        },
        setCollectionVariables: r => {
            a.length = 0, a.push(...r)
        },
        setEnvironment: r => {
            e.length = 0, e.push(...r)
        },
        setGlobals: r => {
            t.length = 0, t.push(...r)
        },
        getVariables: () => Object.fromEntries([...t, ...a, ...e, ...n].map(r => [r.key, r.value]))
    }
}
var mi = {
        key: 0
    },
    pi = {
        key: 1
    },
    hi = {
        key: 2
    },
    gi = {
        key: 3
    },
    yi = {
        key: 4
    },
    bi = {
        key: 5
    },
    Si = B({
        name: "ScalarIconBookOpenText",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", mi, [...r[0] || (r[0] = [b("path", {
                d: "M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60ZM164,96h32a12,12,0,0,1,0,24H164a12,12,0,0,1,0-24Zm44,52a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h32A12,12,0,0,1,208,148Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", pi, [...r[1] || (r[1] = [b("path", {
                d: "M232,56V200H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", hi, [...r[2] || (r[2] = [b("path", {
                d: "M232,48H168a32,32,0,0,0-32,32v87.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V80A32,32,0,0,0,88,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,23.94,7.9,7.9,0,0,0,5.12,7.55A8,8,0,0,0,136,232a24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM208,168H168.27a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h39.73a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,208,168Zm0-32H168.27a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h39.73a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,208,136Zm0-32H168.27A8.17,8.17,0,0,1,160,96.53,8,8,0,0,1,168,88h39.73A8.17,8.17,0,0,1,216,95.47,8,8,0,0,1,208,104Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", gi, [...r[3] || (r[3] = [b("path", {
                d: "M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66ZM160,90h40a6,6,0,0,1,0,12H160a6,6,0,0,1,0-12Zm46,38a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,128Zm0,32a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,160Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", yi, [...r[4] || (r[4] = [b("path", {
                d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", bi, [...r[5] || (r[5] = [b("path", {
                d: "M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.94,35.94,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68ZM160,92h40a4,4,0,0,1,0,8H160a4,4,0,0,1,0-8Zm44,36a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h40A4,4,0,0,1,204,128Zm0,32a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h40A4,4,0,0,1,204,160Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    xi = Si,
    wi = {
        key: 0
    },
    Ai = {
        key: 1
    },
    Ti = {
        key: 2
    },
    ki = {
        key: 3
    },
    Ci = {
        key: 4
    },
    Hi = {
        key: 5
    },
    Pi = B({
        name: "ScalarIconDiscordLogo",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", wi, [...r[0] || (r[0] = [b("path", {
                d: "M108,136a16,16,0,1,1-16-16A16,16,0,0,1,108,136Zm56-16a16,16,0,1,0,16,16A16,16,0,0,0,164,120Zm76.07,76.56-67,29.71A20.15,20.15,0,0,1,146,214.9l-8.54-23.13c-3.13.14-6.27.24-9.45.24s-6.32-.1-9.45-.24L110,214.9a20.19,20.19,0,0,1-27.08,11.37l-67-29.71A19.93,19.93,0,0,1,4.62,173.41L34.15,57A20,20,0,0,1,50.37,42.19l36.06-5.93A20.26,20.26,0,0,1,109.22,51.1l4.41,17.41c4.74-.33,9.52-.51,14.37-.51s9.63.18,14.37.51l4.41-17.41a20.25,20.25,0,0,1,22.79-14.84l36.06,5.93A20,20,0,0,1,221.85,57l29.53,116.38A19.93,19.93,0,0,1,240.07,196.56ZM227.28,176,199.23,65.46l-30.07-4.94-2.84,11.17c2.9.58,5.78,1.2,8.61,1.92a12,12,0,1,1-5.86,23.27A168.43,168.43,0,0,0,128,92a168.43,168.43,0,0,0-41.07,4.88,12,12,0,0,1-5.86-23.27c2.83-.72,5.71-1.34,8.61-1.92L86.85,60.52,56.77,65.46,28.72,176l60.22,26.7,5-13.57c-4.37-.76-8.67-1.65-12.88-2.71a12,12,0,0,1,5.86-23.28A168.43,168.43,0,0,0,128,168a168.43,168.43,0,0,0,41.07-4.88,12,12,0,0,1,5.86,23.28c-4.21,1.06-8.51,1.95-12.88,2.71l5,13.57Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", Ai, [...r[1] || (r[1] = [b("path", {
                d: "M235.21,185.59l-67,29.7a8.15,8.15,0,0,1-11-4.56L147,183.06a190.5,190.5,0,0,1-19,.94,190.5,190.5,0,0,1-19-.94L98.75,210.73a8.15,8.15,0,0,1-11,4.56l-67-29.7a8,8,0,0,1-4.55-9.24L45.77,60A8.08,8.08,0,0,1,52.31,54l36.06-5.92a8.1,8.1,0,0,1,9.21,6l5,19.63a192.32,192.32,0,0,1,50.88,0l5-19.63a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37A8,8,0,0,1,235.21,185.59Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.94,15.94,0,0,1-9.06-18.51L38,58A16.08,16.08,0,0,1,51,46.13l36.06-5.92a16.21,16.21,0,0,1,18.26,11.88l3.26,12.83Q118.11,64,128,64t19.4.92l3.26-12.83a16.22,16.22,0,0,1,18.26-11.88L205,46.13A16.08,16.08,0,0,1,218,58l29.53,116.38A15.94,15.94,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56a.21.21,0,0,0-.12,0h0L53.61,61.92a.24.24,0,0,0-.09,0L24,178.33,91,208a.21.21,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", Ti, [...r[2] || (r[2] = [b("path", {
                d: "M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", ki, [...r[3] || (r[3] = [b("path", {
                d: "M102,140a10,10,0,1,1-10-10A10,10,0,0,1,102,140Zm62-10a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm73.64,61.08-67,29.71a14.43,14.43,0,0,1-5.77,1.21,14.13,14.13,0,0,1-13.25-9.18L143,189.43c-4.93.37-9.92.58-15,.58s-10.06-.21-15-.58l-8.63,23.39A14.13,14.13,0,0,1,91.13,222a14.43,14.43,0,0,1-5.77-1.21l-67-29.71a14,14,0,0,1-7.93-16.2L40,58.5A14.07,14.07,0,0,1,51.34,48.11L87.4,42.19a14.19,14.19,0,0,1,16,10.39l3.69,14.53a197.5,197.5,0,0,1,41.82,0l3.69-14.53a14.19,14.19,0,0,1,16-10.39l36.06,5.92A14.07,14.07,0,0,1,216,58.5l29.53,116.38A14,14,0,0,1,237.64,191.08Zm-3.7-13.25L204.41,61.45a2.08,2.08,0,0,0-1.7-1.5L166.65,54a2.13,2.13,0,0,0-2.42,1.5l-3.36,13.24a169.28,169.28,0,0,1,16.75,3.76A6,6,0,0,1,176,84.31a5.71,5.71,0,0,1-1.62-.23A174.26,174.26,0,0,0,128,78a174.26,174.26,0,0,0-46.38,6.08,6,6,0,1,1-3.24-11.55,169.28,169.28,0,0,1,16.75-3.76L91.77,55.53A2.12,2.12,0,0,0,89.35,54L53.29,60a2.08,2.08,0,0,0-1.7,1.5L22.06,177.83a2,2,0,0,0,1.16,2.28l67,29.7a2.19,2.19,0,0,0,1.76,0,2.07,2.07,0,0,0,1.14-1.17l7.58-20.55a171.46,171.46,0,0,1-22.33-4.64,6,6,0,1,1,3.24-11.55A174.26,174.26,0,0,0,128,178a174.26,174.26,0,0,0,46.38-6.08,6,6,0,1,1,3.24,11.55,171.46,171.46,0,0,1-22.33,4.64l7.58,20.55a2.07,2.07,0,0,0,1.14,1.17,2.19,2.19,0,0,0,1.76,0l67-29.7A2,2,0,0,0,233.94,177.83Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", Ci, [...r[4] || (r[4] = [b("path", {
                d: "M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", Hi, [...r[5] || (r[5] = [b("path", {
                d: "M100,140a8,8,0,1,1-8-8A8,8,0,0,1,100,140Zm64-8a8,8,0,1,0,8,8A8,8,0,0,0,164,132Zm72.83,57.25-67,29.71a12.36,12.36,0,0,1-5,1,12.13,12.13,0,0,1-11.38-7.88l-9.15-24.81c-5.36.45-10.81.69-16.34.69s-11-.24-16.34-.69l-9.15,24.81A12.13,12.13,0,0,1,91.13,220a12.36,12.36,0,0,1-5-1l-67-29.71a12,12,0,0,1-6.8-13.88L41.9,59a12.06,12.06,0,0,1,9.77-8.91l36.06-5.92a12.18,12.18,0,0,1,13.73,8.91l4.12,16.22a195.47,195.47,0,0,1,44.84,0l4.12-16.22a12.18,12.18,0,0,1,13.73-8.91l36.06,5.92A12.06,12.06,0,0,1,214.1,59l29.53,116.38A12,12,0,0,1,236.83,189.25Zm-1-11.91L206.35,61A4.07,4.07,0,0,0,203,58L167,52.05a4.15,4.15,0,0,0-4.69,3L158.4,70.38a166.74,166.74,0,0,1,18.68,4.08,4,4,0,1,1-2.16,7.7A176.21,176.21,0,0,0,128,76a176.21,176.21,0,0,0-46.92,6.16,4,4,0,1,1-2.16-7.7A166.74,166.74,0,0,1,97.6,70.38L93.71,55a4.15,4.15,0,0,0-4.69-3L53,58a4.07,4.07,0,0,0-3.31,3L20.12,177.34a4,4,0,0,0,2.29,4.59l67,29.71a4.16,4.16,0,0,0,3.35,0A4,4,0,0,0,95,209.35l8.45-22.88a171.49,171.49,0,0,1-24.53-4.92,4,4,0,0,1,2.16-7.71A176.21,176.21,0,0,0,128,180a176.21,176.21,0,0,0,46.92-6.16,4,4,0,0,1,2.16,7.71,171.49,171.49,0,0,1-24.53,4.92L161,209.35a4,4,0,0,0,2.23,2.32,4.16,4.16,0,0,0,3.35,0l67-29.71A4,4,0,0,0,235.88,177.34Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    Bi = Pi,
    Mi = {
        key: 0
    },
    Ei = {
        key: 1
    },
    Ri = {
        key: 2
    },
    Ii = {
        key: 3
    },
    Oi = {
        key: 4
    },
    Vi = {
        key: 5
    },
    $i = B({
        name: "ScalarIconFileDashed",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", Mi, [...r[0] || (r[0] = [b("path", {
                d: "M84,224a12,12,0,0,1-12,12H56a20,20,0,0,1-20-20V184a12,12,0,0,1,24,0v28H72A12,12,0,0,1,84,224ZM220,88v48a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H120a12,12,0,0,1,0-24h32a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57ZM80,20H56A20,20,0,0,0,36,40V64a12,12,0,0,0,24,0V44H80a12,12,0,0,0,0-24ZM208,164a12,12,0,0,0-12,12v36h-4a12,12,0,0,0,0,24h8a20,20,0,0,0,20-20V176A12,12,0,0,0,208,164ZM48,156a12,12,0,0,0,12-12V104a12,12,0,0,0-24,0v40A12,12,0,0,0,48,156Zm104,56H112a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", Ei, [...r[1] || (r[1] = [b("path", {
                d: "M208,88H152V32Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", Ri, [...r[2] || (r[2] = [b("path", {
                d: "M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H120a8,8,0,0,0,0,16h24V88a8,8,0,0,0,8,8h48v40a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", Ii, [...r[3] || (r[3] = [b("path", {
                d: "M78,224a6,6,0,0,1-6,6H56a14,14,0,0,1-14-14V184a6,6,0,0,1,12,0v32a2,2,0,0,0,2,2H72A6,6,0,0,1,78,224ZM214,88v48a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H120a6,6,0,0,1,0-12h32a6,6,0,0,1,4.24,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.51L158,46.49ZM80,26H56A14,14,0,0,0,42,40V64a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2H80a6,6,0,0,0,0-12ZM208,170a6,6,0,0,0-6,6v40a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14V176A6,6,0,0,0,208,170ZM48,150a6,6,0,0,0,6-6V104a6,6,0,0,0-12,0v40A6,6,0,0,0,48,150Zm104,68H112a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", Oi, [...r[4] || (r[4] = [b("path", {
                d: "M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", Vi, [...r[5] || (r[5] = [b("path", {
                d: "M76,224a4,4,0,0,1-4,4H56a12,12,0,0,1-12-12V184a4,4,0,0,1,8,0v32a4,4,0,0,0,4,4H72A4,4,0,0,1,76,224ZM212,88v48a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H120a4,4,0,0,1,0-8h32a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.66ZM80,28H56A12,12,0,0,0,44,40V64a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4H80a4,4,0,0,0,0-8ZM208,172a4,4,0,0,0-4,4v40a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V176A4,4,0,0,0,208,172ZM48,148a4,4,0,0,0,4-4V104a4,4,0,0,0-8,0v40A4,4,0,0,0,48,148Zm104,72H112a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    Li = $i,
    Ui = {
        key: 0
    },
    Di = {
        key: 1
    },
    zi = {
        key: 2
    },
    Zi = {
        key: 3
    },
    Ni = {
        key: 4
    },
    Fi = {
        key: 5
    },
    qi = B({
        name: "ScalarIconFileText",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", Ui, [...r[0] || (r[0] = [b("path", {
                d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", Di, [...r[1] || (r[1] = [b("path", {
                d: "M208,88H152V32Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", zi, [...r[2] || (r[2] = [b("path", {
                d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", Zi, [...r[3] || (r[3] = [b("path", {
                d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", Ni, [...r[4] || (r[4] = [b("path", {
                d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", Fi, [...r[5] || (r[5] = [b("path", {
                d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    Wi = qi,
    ji = {
        key: 0
    },
    Ki = {
        key: 1
    },
    Gi = {
        key: 2
    },
    Yi = {
        key: 3
    },
    Xi = {
        key: 4
    },
    Qi = {
        key: 5
    },
    Ji = B({
        name: "ScalarIconGear",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", ji, [...r[0] || (r[0] = [b("path", {
                d: "M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", Ki, [...r[1] || (r[1] = [b("path", {
                d: "M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", Gi, [...r[2] || (r[2] = [b("path", {
                d: "M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", Yi, [...r[3] || (r[3] = [b("path", {
                d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82l2.63-23.63A94.28,94.28,0,0,1,100.86,38l18.57,14.86a6,6,0,0,0,4.11,1.3,78.07,78.07,0,0,1,8.92,0,6,6,0,0,0,4.11-1.3L155.13,38a94.13,94.13,0,0,1,17.34,7.17l2.63,23.64a6,6,0,0,0,2,3.82,75.14,75.14,0,0,1,6.31,6.31,6,6,0,0,0,3.82,2l23.63,2.63A94.28,94.28,0,0,1,218,100.86l-14.86,18.57a6,6,0,0,0-1.3,4.11,78.07,78.07,0,0,1,0,8.92,6,6,0,0,0,1.3,4.11L218,155.13A94.13,94.13,0,0,1,210.85,172.47Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", Xi, [...r[4] || (r[4] = [b("path", {
                d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", Qi, [...r[5] || (r[5] = [b("path", {
                d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm83.93-32.49q.13-3.51,0-7l15.83-19.79a4,4,0,0,0,.75-3.53A103.64,103.64,0,0,0,218,75.9a4,4,0,0,0-3-2l-25.19-2.8c-1.58-1.71-3.24-3.37-4.95-4.95L182.07,41a4,4,0,0,0-2-3A104,104,0,0,0,154.82,27.5a4,4,0,0,0-3.53.74L131.51,44.07q-3.51-.14-7,0L104.7,28.24a4,4,0,0,0-3.53-.75A103.64,103.64,0,0,0,75.9,38a4,4,0,0,0-2,3l-2.8,25.19c-1.71,1.58-3.37,3.24-4.95,4.95L41,73.93a4,4,0,0,0-3,2A104,104,0,0,0,27.5,101.18a4,4,0,0,0,.74,3.53l15.83,19.78q-.14,3.51,0,7L28.24,151.3a4,4,0,0,0-.75,3.53A103.64,103.64,0,0,0,38,180.1a4,4,0,0,0,3,2l25.19,2.8c1.58,1.71,3.24,3.37,4.95,4.95l2.8,25.2a4,4,0,0,0,2,3,104,104,0,0,0,25.28,10.46,4,4,0,0,0,3.53-.74l19.78-15.83q3.51.13,7,0l19.79,15.83a4,4,0,0,0,2.5.88,4,4,0,0,0,1-.13A103.64,103.64,0,0,0,180.1,218a4,4,0,0,0,2-3l2.8-25.19c1.71-1.58,3.37-3.24,4.95-4.95l25.2-2.8a4,4,0,0,0,3-2,104,104,0,0,0,10.46-25.28,4,4,0,0,0-.74-3.53Zm.17,42.83-24.67,2.74a4,4,0,0,0-2.55,1.32,76.2,76.2,0,0,1-6.48,6.48,4,4,0,0,0-1.32,2.55l-2.74,24.66a95.45,95.45,0,0,1-19.64,8.15l-19.38-15.51a4,4,0,0,0-2.5-.87h-.24a73.67,73.67,0,0,1-9.16,0,4,4,0,0,0-2.74.87l-19.37,15.5a95.33,95.33,0,0,1-19.65-8.13l-2.74-24.67a4,4,0,0,0-1.32-2.55,76.2,76.2,0,0,1-6.48-6.48,4,4,0,0,0-2.55-1.32l-24.66-2.74a95.45,95.45,0,0,1-8.15-19.64l15.51-19.38a4,4,0,0,0,.87-2.74,77.76,77.76,0,0,1,0-9.16,4,4,0,0,0-.87-2.74l-15.5-19.37A95.33,95.33,0,0,1,43.9,81.66l24.67-2.74a4,4,0,0,0,2.55-1.32,76.2,76.2,0,0,1,6.48-6.48,4,4,0,0,0,1.32-2.55l2.74-24.66a95.45,95.45,0,0,1,19.64-8.15l19.38,15.51a4,4,0,0,0,2.74.87,73.67,73.67,0,0,1,9.16,0,4,4,0,0,0,2.74-.87l19.37-15.5a95.33,95.33,0,0,1,19.65,8.13l2.74,24.67a4,4,0,0,0,1.32,2.55,76.2,76.2,0,0,1,6.48,6.48,4,4,0,0,0,2.55,1.32l24.66,2.74a95.45,95.45,0,0,1,8.15,19.64l-15.51,19.38a4,4,0,0,0-.87,2.74,77.76,77.76,0,0,1,0,9.16,4,4,0,0,0,.87,2.74l15.5,19.37A95.33,95.33,0,0,1,212.1,174.34Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    _i = Ji,
    eu = {
        key: 0
    },
    tu = {
        key: 1
    },
    au = {
        key: 2
    },
    nu = {
        key: 3
    },
    ru = {
        key: 4
    },
    ou = {
        key: 5
    },
    lu = B({
        name: "ScalarIconGearSix",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", eu, [...r[0] || (r[0] = [b("path", {
                d: "M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", tu, [...r[1] || (r[1] = [b("path", {
                d: "M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", au, [...r[2] || (r[2] = [b("path", {
                d: "M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", nu, [...r[3] || (r[3] = [b("path", {
                d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", ru, [...r[4] || (r[4] = [b("path", {
                d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", ou, [...r[5] || (r[5] = [b("path", {
                d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    su = lu,
    iu = {
        key: 0
    },
    uu = {
        key: 1
    },
    du = {
        key: 2
    },
    cu = {
        key: 3
    },
    vu = {
        key: 4
    },
    fu = {
        key: 5
    },
    mu = B({
        name: "ScalarIconGithubLogo",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", iu, [...r[0] || (r[0] = [b("path", {
                d: "M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", uu, [...r[1] || (r[1] = [b("path", {
                d: "M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", du, [...r[2] || (r[2] = [b("path", {
                d: "M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", cu, [...r[3] || (r[3] = [b("path", {
                d: "M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", vu, [...r[4] || (r[4] = [b("path", {
                d: "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", fu, [...r[5] || (r[5] = [b("path", {
                d: "M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    pu = mu,
    hu = {
        key: 0
    },
    gu = {
        key: 1
    },
    yu = {
        key: 2
    },
    bu = {
        key: 3
    },
    Su = {
        key: 4
    },
    xu = {
        key: 5
    },
    wu = B({
        name: "ScalarIconGlobe",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", hu, [...r[0] || (r[0] = [b("path", {
                d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,187a113.4,113.4,0,0,1-20.39-35h40.82a116.94,116.94,0,0,1-10,20.77A108.61,108.61,0,0,1,128,207Zm-26.49-59a135.42,135.42,0,0,1,0-40h53a135.42,135.42,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.25a160.63,160.63,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128Zm84-79a113.4,113.4,0,0,1,20.39,35H107.59a116.94,116.94,0,0,1,10-20.77A108.61,108.61,0,0,1,128,49Zm50.73,59h30.82a83.52,83.52,0,0,1,0,40H178.75a160.63,160.63,0,0,0,0-40Zm20.77-24H173.71a140.82,140.82,0,0,0-15.5-34.36A84.51,84.51,0,0,1,199.52,84ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.51,84.51,0,0,1,97.79,49.64ZM56.48,172H82.29a140.82,140.82,0,0,0,15.5,34.36A84.51,84.51,0,0,1,56.48,172Zm101.73,34.36A140.82,140.82,0,0,0,173.71,172h25.81A84.51,84.51,0,0,1,158.21,206.36Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", gu, [...r[1] || (r[1] = [b("path", {
                d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", yu, [...r[2] || (r[2] = [b("path", {
                d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm78.36,64H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM216,128a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM128,43a115.27,115.27,0,0,1,26,45H102A115.11,115.11,0,0,1,128,43ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48Zm50.35,61.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", bu, [...r[3] || (r[3] = [b("path", {
                d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm81.57,64H169.19a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90ZM218,128a89.7,89.7,0,0,1-3.83,26H171.81a155.43,155.43,0,0,0,0-52h42.36A89.7,89.7,0,0,1,218,128Zm-90,87.83a110,110,0,0,1-15.19-19.45A124.24,124.24,0,0,1,99.35,166h57.3a124.24,124.24,0,0,1-13.46,30.38A110,110,0,0,1,128,215.83ZM96.45,154a139.18,139.18,0,0,1,0-52h63.1a139.18,139.18,0,0,1,0,52ZM38,128a89.7,89.7,0,0,1,3.83-26H84.19a155.43,155.43,0,0,0,0,52H41.83A89.7,89.7,0,0,1,38,128Zm90-87.83a110,110,0,0,1,15.19,19.45A124.24,124.24,0,0,1,156.65,90H99.35a124.24,124.24,0,0,1,13.46-30.38A110,110,0,0,1,128,40.17Zm-15.46-.84A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33ZM46.43,166H86.81a132.58,132.58,0,0,0,25.73,50.67A90.29,90.29,0,0,1,46.43,166Zm97,50.67A132.58,132.58,0,0,0,169.19,166h40.38A90.29,90.29,0,0,1,143.46,216.67Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", Su, [...r[4] || (r[4] = [b("path", {
                d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", xu, [...r[5] || (r[5] = [b("path", {
                d: "M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54C151,194.2,134.33,212.52,128,218.61ZM94.82,156a140.42,140.42,0,0,1,0-56h66.36a140.42,140.42,0,0,1,0,56ZM128,37.39c6.33,6.09,23,24.41,31.27,54.61H96.73C105,61.8,121.67,43.48,128,37.39ZM169.41,100h46.23a92.09,92.09,0,0,1,0,56H169.41a152.65,152.65,0,0,0,0-56Zm43.25-8h-45a129.39,129.39,0,0,0-29.19-55.4A92.25,92.25,0,0,1,212.66,92ZM117.54,36.6A129.39,129.39,0,0,0,88.35,92h-45A92.25,92.25,0,0,1,117.54,36.6ZM40.36,100H86.59a152.65,152.65,0,0,0,0,56H40.36a92.09,92.09,0,0,1,0-56Zm3,64h45a129.39,129.39,0,0,0,29.19,55.4A92.25,92.25,0,0,1,43.34,164Zm95.12,55.4A129.39,129.39,0,0,0,167.65,164h45A92.25,92.25,0,0,1,138.46,219.4Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    Au = wu,
    Tu = {
        key: 0
    },
    ku = {
        key: 1
    },
    Cu = {
        key: 2
    },
    Hu = {
        key: 3
    },
    Pu = {
        key: 4
    },
    Bu = {
        key: 5
    },
    Mu = B({
        name: "ScalarIconHouse",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", Tu, [...r[0] || (r[0] = [b("path", {
                d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", ku, [...r[1] || (r[1] = [b("path", {
                d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", Cu, [...r[2] || (r[2] = [b("path", {
                d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", Hu, [...r[3] || (r[3] = [b("path", {
                d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", Pu, [...r[4] || (r[4] = [b("path", {
                d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", Bu, [...r[5] || (r[5] = [b("path", {
                d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    Eu = Mu,
    Ru = {
        key: 0
    },
    Iu = {
        key: 1
    },
    Ou = {
        key: 2
    },
    Vu = {
        key: 3
    },
    $u = {
        key: 4
    },
    Lu = {
        key: 5
    },
    Uu = B({
        name: "ScalarIconNotepad",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", Ru, [...r[0] || (r[0] = [b("path", {
                d: "M172,124a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,124Zm-12,28H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM220,40V200a36,36,0,0,1-36,36H72a36,36,0,0,1-36-36V40A12,12,0,0,1,48,28H72V24a12,12,0,0,1,24,0v4h20V24a12,12,0,0,1,24,0v4h20V24a12,12,0,0,1,24,0v4h24A12,12,0,0,1,220,40ZM196,52H184v4a12,12,0,0,1-24,0V52H140v4a12,12,0,0,1-24,0V52H96v4a12,12,0,0,1-24,0V52H60V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", Iu, [...r[1] || (r[1] = [b("path", {
                d: "M208,40V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V40Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", Ou, [...r[2] || (r[2] = [b("path", {
                d: "M208,32H184V24a8,8,0,0,0-16,0v8H136V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48a8,8,0,0,0-8,8V200a32,32,0,0,0,32,32H184a32,32,0,0,0,32-32V40A8,8,0,0,0,208,32ZM120,56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM80,72a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0v8A8,8,0,0,1,80,72Zm80,96H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm24-72a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", Vu, [...r[3] || (r[3] = [b("path", {
                d: "M166,128a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,128Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12ZM214,40V200a30,30,0,0,1-30,30H72a30,30,0,0,1-30-30V40a6,6,0,0,1,6-6H74V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h26A6,6,0,0,1,214,40Zm-12,6H182V56a6,6,0,0,1-12,0V46H134V56a6,6,0,0,1-12,0V46H86V56a6,6,0,0,1-12,0V46H54V200a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", $u, [...r[4] || (r[4] = [b("path", {
                d: "M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", Lu, [...r[5] || (r[5] = [b("path", {
                d: "M164,128a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,128Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM212,40V200a28,28,0,0,1-28,28H72a28,28,0,0,1-28-28V40a4,4,0,0,1,4-4H76V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h28A4,4,0,0,1,212,40Zm-8,4H180V56a4,4,0,0,1-8,0V44H132V56a4,4,0,0,1-8,0V44H84V56a4,4,0,0,1-8,0V44H52V200a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    Du = Uu,
    zu = {
        key: 0
    },
    Zu = {
        key: 1
    },
    Nu = {
        key: 2
    },
    Fu = {
        key: 3
    },
    qu = {
        key: 4
    },
    Wu = {
        key: 5
    },
    ju = B({
        name: "ScalarIconSwap",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", zu, [...r[0] || (r[0] = [b("path", {
                d: "M228,48V152a20,20,0,0,1-20,20H112.92a12,12,0,0,1-17.41,16.49l-20-20a12,12,0,0,1,0-17l20-20A12,12,0,0,1,112.92,148H204V52H100a12,12,0,0,1-24,0V48A20,20,0,0,1,96,28H208A20,20,0,0,1,228,48ZM168,192a12,12,0,0,0-12,12H52V108h91.08a12,12,0,0,0,17.41,16.49l20-20a12,12,0,0,0,0-17l-20-20A12,12,0,0,0,143.08,84H48a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20H160a20,20,0,0,0,20-20v-4A12,12,0,0,0,168,192Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", Zu, [...r[1] || (r[1] = [b("path", {
                d: "M216,48V152a8,8,0,0,1-8,8H168v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8H88V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", Nu, [...r[2] || (r[2] = [b("path", {
                d: "M224,48V152a16,16,0,0,1-16,16H112v16a8,8,0,0,1-13.66,5.66l-24-24a8,8,0,0,1,0-11.32l24-24A8,8,0,0,1,112,136v16h96V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104h96v16a8,8,0,0,0,13.66,5.66l24-24a8,8,0,0,0,0-11.32l-24-24A8,8,0,0,0,144,72V88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", Fu, [...r[3] || (r[3] = [b("path", {
                d: "M222,48V152a14,14,0,0,1-14,14H94.49l13.75,13.76a6,6,0,1,1-8.48,8.48l-24-24a6,6,0,0,1,0-8.48l24-24a6,6,0,0,1,8.48,8.48L94.49,154H208a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2v8a6,6,0,0,1-12,0V48A14,14,0,0,1,96,34H208A14,14,0,0,1,222,48ZM168,194a6,6,0,0,0-6,6v8a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V104a2,2,0,0,1,2-2H161.51l-13.75,13.76a6,6,0,1,0,8.48,8.48l24-24a6,6,0,0,0,0-8.48l-24-24a6,6,0,0,0-8.48,8.48L161.51,90H48a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14H160a14,14,0,0,0,14-14v-8A6,6,0,0,0,168,194Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", qu, [...r[4] || (r[4] = [b("path", {
                d: "M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", Wu, [...r[5] || (r[5] = [b("path", {
                d: "M220,48V152a12,12,0,0,1-12,12H89.66l17.17,17.17a4,4,0,0,1-5.66,5.66l-24-24a4,4,0,0,1,0-5.66l24-24a4,4,0,0,1,5.66,5.66L89.66,156H208a4,4,0,0,0,4-4V48a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4v8a4,4,0,0,1-8,0V48A12,12,0,0,1,96,36H208A12,12,0,0,1,220,48ZM168,196a4,4,0,0,0-4,4v8a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V104a4,4,0,0,1,4-4H166.34l-17.17,17.17a4,4,0,0,0,5.66,5.66l24-24a4,4,0,0,0,0-5.66l-24-24a4,4,0,0,0-5.66,5.66L166.34,92H48a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12H160a12,12,0,0,0,12-12v-8A4,4,0,0,0,168,196Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    Ku = ju,
    Gu = {
        key: 0
    },
    Yu = {
        key: 1
    },
    Xu = {
        key: 2
    },
    Qu = {
        key: 3
    },
    Ju = {
        key: 4
    },
    _u = {
        key: 5
    },
    e0 = B({
        name: "ScalarIconWarning",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", Gu, [...r[0] || (r[0] = [b("path", {
                d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", Yu, [...r[1] || (r[1] = [b("path", {
                d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", Xu, [...r[2] || (r[2] = [b("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", Qu, [...r[3] || (r[3] = [b("path", {
                d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", Ju, [...r[4] || (r[4] = [b("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", _u, [...r[5] || (r[5] = [b("path", {
                d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    t0 = e0,
    a0 = {
        key: 0
    },
    n0 = {
        key: 1
    },
    r0 = {
        key: 2
    },
    o0 = {
        key: 3
    },
    l0 = {
        key: 4
    },
    s0 = {
        key: 5
    },
    i0 = B({
        name: "ScalarIconWarningCircle",
        props: {
            label: {},
            weight: {}
        },
        setup(e) {
            const {
                bind: a,
                weight: t
            } = Te(e);
            return (n, r) => (p(), x("svg", _({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                fill: "currentColor"
            }, u(a)), [I(n.$slots, "default"), u(t) === "bold" ? (p(), x("g", a0, [...r[0] || (r[0] = [b("path", {
                d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z"
            }, null, -1)])])) : u(t) === "duotone" ? (p(), x("g", n0, [...r[1] || (r[1] = [b("path", {
                d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                opacity: "0.2"
            }, null, -1), b("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"
            }, null, -1)])])) : u(t) === "fill" ? (p(), x("g", r0, [...r[2] || (r[2] = [b("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"
            }, null, -1)])])) : u(t) === "light" ? (p(), x("g", o0, [...r[3] || (r[3] = [b("path", {
                d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"
            }, null, -1)])])) : u(t) === "regular" ? (p(), x("g", l0, [...r[4] || (r[4] = [b("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"
            }, null, -1)])])) : u(t) === "thin" ? (p(), x("g", s0, [...r[5] || (r[5] = [b("path", {
                d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z"
            }, null, -1)])])) : U("", !0)], 16))
        }
    }),
    u0 = i0,
    d0 = ["aria-label"],
    c0 = B({
        inheritAttrs: !1,
        __name: "ScalarSidebarSearchInput",
        props: gt({
            autofocus: {
                type: Boolean
            },
            loader: {},
            label: {}
        }, {
            modelValue: {},
            modelModifiers: {}
        }),
        emits: ["update:modelValue"],
        setup(e) {
            const a = E(null),
                t = Mt(e, "modelValue");

            function n() {
                t.value = "", a.value && a.value.focus()
            }
            const {
                stylingAttrsCx: r,
                otherAttrs: o
            } = Ne();
            return Pe(() => {
                var l;
                return e.autofocus && ((l = a.value) == null ? void 0 : l.focus())
            }), (l, s) => (p(), x("label", se(ue(u(r)("flex items-center rounded border text-base has-[:focus-visible]:bg-sidebar-b-1 has-[:focus-visible]:outline h-8 gap-1 pl-2 pr-1.5", "bg-sidebar-b-search border-sidebar-border-search", t.value ? "text-sidebar-c-1" : "text-sidebar-c-search"))), [A(u(fr), {
                class: "text-sidebar-c-search size-4"
            }), ke(b("input", _({
                ref_key: "inputRef",
                ref: a,
                "onUpdate:modelValue": s[0] || (s[0] = i => t.value = i),
                "aria-label": e.label ?? "Enter search query",
                autocapitalize: "off",
                autocomplete: "off",
                autocorrect: "off",
                class: "flex-1 appearance-none rounded border-none bg-transparent outline-none",
                placeholder: "Search...",
                spellcheck: "false",
                type: "search"
            }, u(o)), null, 16, d0), [
                [fl, t.value]
            ]), e.loader && e.loader.isActive ? (p(), H(u(Ya), {
                key: 0,
                class: "mr-3 self-center",
                loader: e.loader,
                size: "md"
            }, null, 8, ["loader"])) : t.value ? (p(), H(u(ua), {
                key: 1,
                class: "p-px size-4",
                icon: u(ml),
                label: "Clear Search",
                weight: "bold",
                onClick: Ze(n, ["stop", "prevent"])
            }, null, 8, ["icon"])) : U("", !0)], 16))
        }
    }),
    v0 = c0,
    Nr = (e, a) => {
        if (a.type === e) return a;
        if ("children" in a)
            for (const t of a.children ?? []) {
                const n = Nr(e, t);
                if (n) return n
            }
        return null
    };

function f0({
    container: e,
    accept: a,
    walk: t,
    enabled: n
}) {
    Se(() => {
        let r = e.value;
        if (!r || n !== void 0 && !n.value) return;
        let o = pl(e);
        if (!o) return;
        let l = Object.assign(i => a(i), {
                acceptNode: a
            }),
            s = o.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, l, !1);
        for (; s.nextNode();) t(s.currentNode)
    })
}
var m0 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(m0 || {}),
    p0 = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(p0 || {});

function h0(e) {
    requestAnimationFrame(() => requestAnimationFrame(e))
}
let Fr = Symbol("MenuContext");

function va(e) {
    let a = Ja(Fr, null);
    if (a === null) {
        let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, va), t
    }
    return a
}
let g0 = B({
        name: "Menu",
        props: {
            as: {
                type: [Object, String],
                default: "template"
            }
        },
        setup(e, {
            slots: a,
            attrs: t
        }) {
            let n = E(1),
                r = E(null),
                o = E(null),
                l = E([]),
                s = E(""),
                i = E(null),
                c = E(1);

            function f(v = m => m) {
                let m = i.value !== null ? l.value[i.value] : null,
                    g = Hl(v(l.value.slice()), h => ge(h.dataRef.domRef)),
                    y = m ? g.indexOf(m) : null;
                return y === -1 && (y = null), {
                    items: g,
                    activeItemIndex: y
                }
            }
            let d = {
                menuState: n,
                buttonRef: r,
                itemsRef: o,
                items: l,
                searchQuery: s,
                activeItemIndex: i,
                activationTrigger: c,
                closeMenu: () => {
                    n.value = 1, i.value = null
                },
                openMenu: () => n.value = 0,
                goToItem(v, m, g) {
                    let y = f(),
                        h = Tl(v === Ce.Specific ? {
                            focus: Ce.Specific,
                            id: m
                        } : {
                            focus: v
                        }, {
                            resolveItems: () => y.items,
                            resolveActiveIndex: () => y.activeItemIndex,
                            resolveId: w => w.id,
                            resolveDisabled: w => w.dataRef.disabled
                        });
                    s.value = "", i.value = h, c.value = g ?? 1, l.value = y.items
                },
                search(v) {
                    let m = s.value !== "" ? 0 : 1;
                    s.value += v.toLowerCase();
                    let g = (i.value !== null ? l.value.slice(i.value + m).concat(l.value.slice(0, i.value + m)) : l.value).find(h => h.dataRef.textValue.startsWith(s.value) && !h.dataRef.disabled),
                        y = g ? l.value.indexOf(g) : -1;
                    y === -1 || y === i.value || (i.value = y, c.value = 1)
                },
                clearSearch() {
                    s.value = ""
                },
                registerItem(v, m) {
                    let g = f(y => [...y, {
                        id: v,
                        dataRef: m
                    }]);
                    l.value = g.items, i.value = g.activeItemIndex, c.value = 1
                },
                unregisterItem(v) {
                    let m = f(g => {
                        let y = g.findIndex(h => h.id === v);
                        return y !== -1 && g.splice(y, 1), g
                    });
                    l.value = m.items, i.value = m.activeItemIndex, c.value = 1
                }
            };
            return bl([r, o], (v, m) => {
                var g;
                d.closeMenu(), Sl(m, xl.Loose) || (v.preventDefault(), (g = ge(r)) == null || g.focus())
            }, T(() => n.value === 0)), Qa(Fr, d), wl(T(() => Al(n.value, {
                0: Yt.Open,
                1: Yt.Closed
            }))), () => {
                let v = {
                    open: n.value === 0,
                    close: d.closeMenu
                };
                return da({
                    ourProps: {},
                    theirProps: e,
                    slot: v,
                    slots: a,
                    attrs: t,
                    name: "Menu"
                })
            }
        }
    }),
    y0 = B({
        name: "MenuButton",
        props: {
            disabled: {
                type: Boolean,
                default: !1
            },
            as: {
                type: [Object, String],
                default: "button"
            },
            id: {
                type: String,
                default: null
            }
        },
        setup(e, {
            attrs: a,
            slots: t,
            expose: n
        }) {
            var r;
            let o = (r = e.id) != null ? r : `headlessui-menu-button-${Xa()}`,
                l = va("MenuButton");
            n({
                el: l.buttonRef,
                $el: l.buttonRef
            });

            function s(d) {
                switch (d.key) {
                    case pe.Space:
                    case pe.Enter:
                    case pe.ArrowDown:
                        d.preventDefault(), d.stopPropagation(), l.openMenu(), de(() => {
                            var v;
                            (v = ge(l.itemsRef)) == null || v.focus({
                                preventScroll: !0
                            }), l.goToItem(Ce.First)
                        });
                        break;
                    case pe.ArrowUp:
                        d.preventDefault(), d.stopPropagation(), l.openMenu(), de(() => {
                            var v;
                            (v = ge(l.itemsRef)) == null || v.focus({
                                preventScroll: !0
                            }), l.goToItem(Ce.Last)
                        });
                        break
                }
            }

            function i(d) {
                switch (d.key) {
                    case pe.Space:
                        d.preventDefault();
                        break
                }
            }

            function c(d) {
                e.disabled || (l.menuState.value === 0 ? (l.closeMenu(), de(() => {
                    var v;
                    return (v = ge(l.buttonRef)) == null ? void 0 : v.focus({
                        preventScroll: !0
                    })
                })) : (d.preventDefault(), l.openMenu(), h0(() => {
                    var v;
                    return (v = ge(l.itemsRef)) == null ? void 0 : v.focus({
                        preventScroll: !0
                    })
                })))
            }
            let f = hl(T(() => ({
                as: e.as,
                type: a.type
            })), l.buttonRef);
            return () => {
                var d;
                let v = {
                        open: l.menuState.value === 0
                    },
                    {
                        ...m
                    } = e,
                    g = {
                        ref: l.buttonRef,
                        id: o,
                        type: f.value,
                        "aria-haspopup": "menu",
                        "aria-controls": (d = ge(l.itemsRef)) == null ? void 0 : d.id,
                        "aria-expanded": l.menuState.value === 0,
                        onKeydown: s,
                        onKeyup: i,
                        onClick: c
                    };
                return da({
                    ourProps: g,
                    theirProps: m,
                    slot: v,
                    attrs: a,
                    slots: t,
                    name: "MenuButton"
                })
            }
        }
    }),
    b0 = B({
        name: "MenuItems",
        props: {
            as: {
                type: [Object, String],
                default: "div"
            },
            static: {
                type: Boolean,
                default: !1
            },
            unmount: {
                type: Boolean,
                default: !0
            },
            id: {
                type: String,
                default: null
            }
        },
        setup(e, {
            attrs: a,
            slots: t,
            expose: n
        }) {
            var r;
            let o = (r = e.id) != null ? r : `headlessui-menu-items-${Xa()}`,
                l = va("MenuItems"),
                s = E(null);
            n({
                el: l.itemsRef,
                $el: l.itemsRef
            }), f0({
                container: T(() => ge(l.itemsRef)),
                enabled: T(() => l.menuState.value === 0),
                accept(v) {
                    return v.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : v.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                },
                walk(v) {
                    v.setAttribute("role", "none")
                }
            });

            function i(v) {
                var m;
                switch (s.value && clearTimeout(s.value), v.key) {
                    case pe.Space:
                        if (l.searchQuery.value !== "") return v.preventDefault(), v.stopPropagation(), l.search(v.key);
                    case pe.Enter:
                        if (v.preventDefault(), v.stopPropagation(), l.activeItemIndex.value !== null) {
                            let g = l.items.value[l.activeItemIndex.value];
                            (m = ge(g.dataRef.domRef)) == null || m.click()
                        }
                        l.closeMenu(), mr(ge(l.buttonRef));
                        break;
                    case pe.ArrowDown:
                        return v.preventDefault(), v.stopPropagation(), l.goToItem(Ce.Next);
                    case pe.ArrowUp:
                        return v.preventDefault(), v.stopPropagation(), l.goToItem(Ce.Previous);
                    case pe.Home:
                    case pe.PageUp:
                        return v.preventDefault(), v.stopPropagation(), l.goToItem(Ce.First);
                    case pe.End:
                    case pe.PageDown:
                        return v.preventDefault(), v.stopPropagation(), l.goToItem(Ce.Last);
                    case pe.Escape:
                        v.preventDefault(), v.stopPropagation(), l.closeMenu(), de(() => {
                            var g;
                            return (g = ge(l.buttonRef)) == null ? void 0 : g.focus({
                                preventScroll: !0
                            })
                        });
                        break;
                    case pe.Tab:
                        v.preventDefault(), v.stopPropagation(), l.closeMenu(), de(() => yl(ge(l.buttonRef), v.shiftKey ? An.Previous : An.Next));
                        break;
                    default:
                        v.key.length === 1 && (l.search(v.key), s.value = setTimeout(() => l.clearSearch(), 350));
                        break
                }
            }

            function c(v) {
                switch (v.key) {
                    case pe.Space:
                        v.preventDefault();
                        break
                }
            }
            let f = gl(),
                d = T(() => f !== null ? (f.value & Yt.Open) === Yt.Open : l.menuState.value === 0);
            return () => {
                var v, m;
                let g = {
                        open: l.menuState.value === 0
                    },
                    {
                        ...y
                    } = e,
                    h = {
                        "aria-activedescendant": l.activeItemIndex.value === null || (v = l.items.value[l.activeItemIndex.value]) == null ? void 0 : v.id,
                        "aria-labelledby": (m = ge(l.buttonRef)) == null ? void 0 : m.id,
                        id: o,
                        onKeydown: i,
                        onKeyup: c,
                        role: "menu",
                        tabIndex: 0,
                        ref: l.itemsRef
                    };
                return da({
                    ourProps: h,
                    theirProps: y,
                    slot: g,
                    attrs: a,
                    slots: t,
                    features: wn.RenderStrategy | wn.Static,
                    visible: d.value,
                    name: "MenuItems"
                })
            }
        }
    }),
    S0 = B({
        name: "MenuItem",
        inheritAttrs: !1,
        props: {
            as: {
                type: [Object, String],
                default: "template"
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            id: {
                type: String,
                default: null
            }
        },
        setup(e, {
            slots: a,
            attrs: t,
            expose: n
        }) {
            var r;
            let o = (r = e.id) != null ? r : `headlessui-menu-item-${Xa()}`,
                l = va("MenuItem"),
                s = E(null);
            n({
                el: s,
                $el: s
            });
            let i = T(() => l.activeItemIndex.value !== null ? l.items.value[l.activeItemIndex.value].id === o : !1),
                c = kl(s),
                f = T(() => ({
                    disabled: e.disabled,
                    get textValue() {
                        return c()
                    },
                    domRef: s
                }));
            Pe(() => l.registerItem(o, f)), Et(() => l.unregisterItem(o)), Se(() => {
                l.menuState.value === 0 && i.value && l.activationTrigger.value !== 0 && de(() => {
                    var w, P;
                    return (P = (w = ge(s)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : P.call(w, {
                        block: "nearest"
                    })
                })
            });

            function d(w) {
                if (e.disabled) return w.preventDefault();
                l.closeMenu(), mr(ge(l.buttonRef))
            }

            function v() {
                if (e.disabled) return l.goToItem(Ce.Nothing);
                l.goToItem(Ce.Specific, o)
            }
            let m = Cl();

            function g(w) {
                m.update(w)
            }

            function y(w) {
                m.wasMoved(w) && (e.disabled || i.value || l.goToItem(Ce.Specific, o, 0))
            }

            function h(w) {
                m.wasMoved(w) && (e.disabled || i.value && l.goToItem(Ce.Nothing))
            }
            return () => {
                let {
                    disabled: w,
                    ...P
                } = e, k = {
                    active: i.value,
                    disabled: w,
                    close: l.closeMenu
                };
                return da({
                    ourProps: {
                        id: o,
                        ref: s,
                        role: "menuitem",
                        tabIndex: w === !0 ? void 0 : -1,
                        "aria-disabled": w === !0 ? !0 : void 0,
                        onClick: d,
                        onFocus: v,
                        onPointerenter: g,
                        onMouseenter: g,
                        onPointermove: y,
                        onMousemove: y,
                        onPointerleave: h,
                        onMouseleave: h
                    },
                    theirProps: {
                        ...t,
                        ...P
                    },
                    slot: k,
                    attrs: t,
                    slots: a,
                    name: "MenuItem"
                })
            }
        }
    });
var x0 = ["id"],
    w0 = B({
        inheritAttrs: !1,
        __name: "ScalarTeleportRoot",
        props: {
            id: {}
        },
        setup(e) {
            const a = Pl(e.id);
            return (t, n) => (p(), x(le, null, [I(t.$slots, "default"), b("div", {
                id: u(a),
                class: "scalar-teleport-root contents"
            }, null, 8, x0)], 64))
        }
    }),
    A0 = w0,
    In = {
        "⌘": "Command",
        "^": "Control",
        ctrl: "Control",
        "⌥": "Option",
        alt: "Alt",
        "⇧": "Shift",
        "⇪": "Caps Lock",
        "↵": "Enter",
        "←": "Left Arrow",
        "→": "Right Arrow",
        "↑": "Up Arrow",
        "↓": "Down Arrow"
    },
    T0 = {
        Meta: "⌘",
        Shift: "⇧",
        Alt: "⌥",
        Control: "^"
    },
    k0 = {
        Meta: "ctrl",
        Shift: "⇧",
        Alt: "alt",
        Control: "ctrl"
    },
    C0 = () => {},
    H0 = () => {
        const e = C0();
        return e === "mac" ? !0 : e === "non-mac" ? !1 : pr()
    };

function P0(e) {
    return e === "default"
}

function B0(e) {
    const a = P0(e) ? "Meta" : e;
    return H0() ? T0[a] : k0[a]
}

function M0(e, a) {
    return [...a.map(t => B0(t)), e]
}

function E0(e) {
    return e in In ? In[e] : e
}
var R0 = {
        "aria-hidden": "true",
        class: "contents"
    },
    I0 = {
        class: "sr-only"
    },
    O0 = B({
        inheritAttrs: !1,
        __name: "ScalarHotkey",
        props: {
            hotkey: {},
            modifier: {
                default: () => ["Meta"]
            }
        },
        setup(e) {
            const {
                cx: a
            } = Ne(), t = T(() => M0(e.hotkey, e.modifier));
            return (n, r) => (p(), x("div", se(ue(u(a)("border-(--scalar-background-3) inline-flex gap-0.5 overflow-hidden rounded border text-xxs rounded-b p-1 font-medium uppercase leading-none"))), [(p(!0), x(le, null, Ae(t.value, (o, l) => (p(), x("div", {
                key: l
            }, [b("span", R0, K(o), 1), b("span", I0, K(u(E0)(o)), 1)]))), 128))], 16))
        }
    }),
    ba = O0,
    V0 = B({
        __name: "ScalarTooltip",
        props: {
            content: {
                default: ""
            },
            delay: {
                default: () => 300
            },
            placement: {
                default: "top"
            },
            offset: {
                default: () => 4
            }
        },
        setup(e) {
            const a = E(null);
            return Bl({
                content: T(() => e.content),
                delay: T(() => e.delay),
                placement: T(() => e.placement),
                offset: T(() => e.offset),
                targetRef: T(() => {
                    var t, n;
                    return ((n = (t = a.value) == null ? void 0 : t.children) == null ? void 0 : n[0]) || a.value || void 0
                })
            }), (t, n) => (p(), x("div", {
                ref_key: "wrapperRef",
                ref: a,
                class: re({
                    contents: !!t.$slots.default
                })
            }, [I(t.$slots, "default")], 2))
        }
    }),
    $0 = V0;
const L0 = (e, a) => a.on ? e.onAny(a.on) : () => {},
    Sa = async (e, a, t) => {
        var r;
        let n = e;
        for (const o of t) {
            const l = (r = o.hooks) == null ? void 0 : r[a];
            l && (n = await l(n) ?? n)
        }
        return n
    };
var on = e => "getSetCookie" in e && typeof e.getSetCookie == "function" ? e.getSetCookie() : [],
    qr = (e, a) => {
        for (const t of a)
            if (t.responseBody) {
                for (const n of t.responseBody)
                    if (U0(e, n.mimeTypes)) return n
            }
    },
    U0 = (e, a) => {
        const t = e.toLowerCase();
        for (const n of a) {
            const r = n.toLowerCase();
            if (r === t) return !0;
            if (r.includes("*")) {
                const o = r.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
                if (new RegExp(`^${o}$`).test(t)) return !0
            }
        }
        return !1
    },
    Wr = e => e ?? "text/plain;charset=UTF-8",
    jr = e => _a(Wr(e)),
    D0 = async (e, a, t) => {
        const n = _a(a);
        return t != null && t.decode ? await t.decode(e, a) : Ml(n.essence) ? new TextDecoder(n.parameters.get("charset")).decode(e) : new Blob([e], {
            type: n.essence
        })
    };
const Qe = {
        DEFAULT: "An unknown error has occurred.",
        INVALID_URL: "The URL seems to be invalid. Try adding a valid URL.",
        INVALID_URL_PROTOCOL: "The URL must start with http:// or https://.",
        INVALID_HEADER: "There is an invalid header present, please double check your params.",
        MISSING_FILE: "File uploads are not saved in history, you must re-upload the file.",
        REQUEST_ABORTED: "The request has been cancelled",
        REQUEST_FAILED: "An error occurred while making the request"
    },
    On = e => e === "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'." ? Qe.MISSING_FILE : e === "Failed to construct 'URL': Invalid URL" ? Qe.INVALID_URL : e.includes("Invalid URL protocol") ? Qe.INVALID_URL_PROTOCOL : e === "Failed to execute 'fetch' on 'Window': Invalid name" ? Qe.INVALID_HEADER : e,
    z0 = (e, a = Qe.DEFAULT) => (console.error(e), e instanceof Error ? (e.message = On(e.message), e) : typeof e == "string" ? new Error(On(e)) : new Error(a)),
    ln = {
        100: {
            name: "Continue",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100",
            color: "var(--scalar-color-blue)"
        },
        101: {
            name: "Switching Protocols",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101",
            color: "var(--scalar-color-blue)"
        },
        102: {
            name: "Processing",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102",
            color: "var(--scalar-color-blue)"
        },
        103: {
            name: "Early Hints",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103",
            color: "var(--scalar-color-blue)"
        },
        200: {
            name: "OK",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200",
            color: "var(--scalar-color-green)"
        },
        201: {
            name: "Created",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201",
            color: "var(--scalar-color-green)"
        },
        202: {
            name: "Accepted",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202",
            color: "var(--scalar-color-green)"
        },
        203: {
            name: "Non-Authoritative Information",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203",
            color: "var(--scalar-color-green)"
        },
        204: {
            name: "No Content",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204",
            color: "var(--scalar-color-green)"
        },
        205: {
            name: "Reset Content",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205",
            color: "var(--scalar-color-green)"
        },
        206: {
            name: "Partial Content",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206",
            color: "var(--scalar-color-green)"
        },
        207: {
            name: "Multi-Status",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207",
            color: "var(--scalar-color-green)"
        },
        208: {
            name: "Already Reported",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208",
            color: "var(--scalar-color-green)"
        },
        226: {
            name: "IM Used",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226",
            color: "var(--scalar-color-green)"
        },
        300: {
            name: "Multiple Choices",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300",
            color: "var(--scalar-color-yellow)"
        },
        301: {
            name: "Moved Permanently",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301",
            color: "var(--scalar-color-yellow)"
        },
        302: {
            name: "Found",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302",
            color: "var(--scalar-color-yellow)"
        },
        303: {
            name: "See Other",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303",
            color: "var(--scalar-color-yellow)"
        },
        304: {
            name: "Not Modified",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304",
            color: "var(--scalar-color-yellow)"
        },
        305: {
            name: "Use Proxy",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305",
            color: "var(--scalar-color-yellow)"
        },
        306: {
            name: "(Unused)",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306",
            color: "var(--scalar-color-yellow)"
        },
        307: {
            name: "Temporary Redirect",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307",
            color: "var(--scalar-color-yellow)"
        },
        308: {
            name: "Permanent Redirect",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308",
            color: "var(--scalar-color-yellow)"
        },
        400: {
            name: "Bad Request",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400",
            color: "var(--scalar-color-red)"
        },
        401: {
            name: "Unauthorized",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",
            color: "var(--scalar-color-red)"
        },
        402: {
            name: "Payment Required",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402",
            color: "var(--scalar-color-red)"
        },
        403: {
            name: "Forbidden",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403",
            color: "var(--scalar-color-red)"
        },
        404: {
            name: "Not Found",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404",
            color: "var(--scalar-color-red)"
        },
        405: {
            name: "Method Not Allowed",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405",
            color: "var(--scalar-color-red)"
        },
        406: {
            name: "Not Acceptable",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406",
            color: "var(--scalar-color-red)"
        },
        407: {
            name: "Proxy Authentication Required",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407",
            color: "var(--scalar-color-red)"
        },
        408: {
            name: "Request Timeout",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408",
            color: "var(--scalar-color-red)"
        },
        409: {
            name: "Conflict",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409",
            color: "var(--scalar-color-red)"
        },
        410: {
            name: "Gone",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410",
            color: "var(--scalar-color-red)"
        },
        411: {
            name: "Length Required",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411",
            color: "var(--scalar-color-red)"
        },
        412: {
            name: "Precondition Failed",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412",
            color: "var(--scalar-color-red)"
        },
        413: {
            name: "Content Too Large",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413",
            color: "var(--scalar-color-red)"
        },
        414: {
            name: "URI Too Long",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414",
            color: "var(--scalar-color-red)"
        },
        415: {
            name: "Unsupported Media Type",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415",
            color: "var(--scalar-color-red)"
        },
        416: {
            name: "Range Not Satisfiable",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416",
            color: "var(--scalar-color-red)"
        },
        417: {
            name: "Expectation Failed",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417",
            color: "var(--scalar-color-red)"
        },
        418: {
            name: "I'm a teapot",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418",
            color: "var(--scalar-color-red)"
        },
        421: {
            name: "Misdirected Request",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421",
            color: "var(--scalar-color-red)"
        },
        422: {
            name: "Unprocessable Content",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422",
            color: "var(--scalar-color-red)"
        },
        423: {
            name: "Locked",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423",
            color: "var(--scalar-color-red)"
        },
        424: {
            name: "Failed Dependency",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424",
            color: "var(--scalar-color-red)"
        },
        425: {
            name: "Too Early",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425",
            color: "var(--scalar-color-red)"
        },
        426: {
            name: "Upgrade Required",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426",
            color: "var(--scalar-color-red)"
        },
        428: {
            name: "Precondition Required",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428",
            color: "var(--scalar-color-red)"
        },
        429: {
            name: "Too Many Requests",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429",
            color: "var(--scalar-color-red)"
        },
        431: {
            name: "Request Header Fields Too Large",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431",
            color: "var(--scalar-color-red)"
        },
        451: {
            name: "Unavailable For Legal Reasons",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451",
            color: "var(--scalar-color-red)"
        },
        500: {
            name: "Internal Server Error",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500",
            color: "var(--scalar-color-red)"
        },
        501: {
            name: "Not Implemented",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501",
            color: "var(--scalar-color-red)"
        },
        502: {
            name: "Bad Gateway",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502",
            color: "var(--scalar-color-red)"
        },
        503: {
            name: "Service Unavailable",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503",
            color: "var(--scalar-color-red)"
        },
        504: {
            name: "Gateway Timeout",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504",
            color: "var(--scalar-color-red)"
        },
        505: {
            name: "HTTP Version Not Supported",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505",
            color: "var(--scalar-color-red)"
        },
        506: {
            name: "Variant Also Negotiates",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506",
            color: "var(--scalar-color-red)"
        },
        507: {
            name: "Insufficient Storage",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507",
            color: "var(--scalar-color-red)"
        },
        508: {
            name: "Loop Detected",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508",
            color: "var(--scalar-color-red)"
        },
        510: {
            name: "Not Extended",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510",
            color: "var(--scalar-color-red)"
        },
        511: {
            name: "Network Authentication Required",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511",
            color: "var(--scalar-color-red)"
        }
    },
    Z0 = (e, a = !1) => {
        var o, l;
        const t = Object.fromEntries(e);
        a && ["Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers"].map(i => i.toLowerCase()).forEach(i => delete t[i]), delete t[hr];
        const n = Object.keys(t).find(s => s.toLowerCase() === "x-scalar-modified-headers"),
            r = n ? ((l = (o = t[n]) == null ? void 0 : o.toString().split(", ")) == null ? void 0 : l.map(s => s.toLowerCase())) ?? [] : [];
        return Object.keys(t).forEach(s => {
            r.includes(s.toLowerCase()) && delete t[s]
        }), n && delete t[n], Object.keys(t).forEach(s => {
            const i = /^x-scalar-original-/i;
            if (i.test(s)) {
                const c = s.replace(i, "");
                t[s] && (t[c] = t[s], delete t[s])
            }
        }), Object.keys(t).forEach(s => {
            const i = N0(s);
            s !== i && t[s] && (t[i] = t[s], delete t[s])
        }), Object.fromEntries(Object.entries(t).sort(([s], [i]) => s.localeCompare(i)))
    },
    N0 = e => e.split("-").map(a => a.charAt(0).toUpperCase() + a.toLowerCase().slice(1)).join("-");
var _t = {
    decodeValues: !0,
    map: !1,
    silent: !1,
    split: "auto"
};

function La(e) {
    return typeof e != "string" || e in {}
}

function Ua() {
    return Object.create(null)
}

function Kr(e) {
    return typeof e == "string" && !!e.trim()
}

function Da(e, a) {
    var t = e.split(";").filter(Kr),
        n = t.shift(),
        r = F0(n),
        o = r.name,
        l = r.value;
    if (a = a ? Object.assign({}, _t, a) : _t, La(o)) return null;
    try {
        l = a.decodeValues ? decodeURIComponent(l) : l
    } catch (i) {
        console.error("set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.", i)
    }
    var s = Ua();
    return s.name = o, s.value = l, t.forEach(function(i) {
        var c = i.split("="),
            f = c.shift().trimLeft().toLowerCase();
        if (!La(f)) {
            var d = c.join("=");
            if (f === "expires") s.expires = new Date(d);
            else if (f === "max-age") {
                var v = parseInt(d, 10);
                Number.isNaN(v) || (s.maxAge = v)
            } else f === "secure" ? s.secure = !0 : f === "httponly" ? s.httpOnly = !0 : f === "samesite" ? s.sameSite = d : f === "partitioned" ? s.partitioned = !0 : f && (s[f] = d)
        }
    }), s
}

function F0(e) {
    var a = "",
        t = "",
        n = e.split("=");
    return n.length > 1 ? (a = n.shift(), t = n.join("=")) : t = e, {
        name: a,
        value: t
    }
}

function et(e, a) {
    if (a = a ? Object.assign({}, _t, a) : _t, !e) return a.map ? Ua() : [];
    if (e.headers)
        if (typeof e.headers.getSetCookie == "function") e = e.headers.getSetCookie();
        else if (e.headers["set-cookie"]) e = e.headers["set-cookie"];
    else {
        var t = e.headers[Object.keys(e.headers).find(function(l) {
            return l.toLowerCase() === "set-cookie"
        })];
        !t && e.headers.cookie && !a.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = t
    }
    var n = a.split,
        r = Array.isArray(e);
    if (n === "auto" && (n = !r), r || (e = [e]), e = e.filter(Kr), n && (e = e.map(Gr).flat()), a.map) {
        var o = Ua();
        return e.reduce(function(l, s) {
            var i = Da(s, a);
            return i && !La(i.name) && (l[i.name] = i), l
        }, o)
    } else return e.map(function(l) {
        return Da(l, a)
    }).filter(Boolean)
}

function Gr(e) {
    if (Array.isArray(e)) return e;
    if (typeof e != "string") return [];
    var a = [],
        t = 0,
        n, r, o, l, s;

    function i() {
        for (; t < e.length && /\s/.test(e.charAt(t));) t += 1;
        return t < e.length
    }

    function c() {
        return r = e.charAt(t), r !== "=" && r !== ";" && r !== ","
    }
    for (; t < e.length;) {
        for (n = t, s = !1; i();)
            if (r = e.charAt(t), r === ",") {
                for (o = t, t += 1, i(), l = t; t < e.length && c();) t += 1;
                t < e.length && e.charAt(t) === "=" ? (s = !0, t = l, a.push(e.substring(n, o)), n = t) : t = o + 1
            } else t += 1;
        (!s || t >= e.length) && a.push(e.substring(n, e.length))
    }
    return a
}
et.parseSetCookie = et;
et.parse = et;
et.parseString = Da;
et.splitCookiesString = Gr;
var q0 = [204, 205, 304],
    W0 = async ({
        isUsingProxy: e,
        requestPayload: a,
        plugins: t = [],
        customFetch: n = fetch
    }) => {
        var r;
        try {
            const o = performance.now(),
                l = Xt() ? await n(...a) : await n(gr(...a)),
                s = performance.now(),
                i = Date.now(),
                c = s - o,
                f = l.headers.get("content-type"),
                d = Z0(l.headers, e),
                v = new URL(l.url),
                m = v.pathname + v.search,
                g = l.statusText || ((r = ln[l.status]) == null ? void 0 : r.name) || "",
                y = a[1].method ?? "GET",
                h = q0.includes(l.status);
            return f != null && f.startsWith("text/event-stream") && l.body ? j0({
                response: l,
                requestPayload: a,
                timestamp: i,
                duration: c,
                responseHeaders: d,
                statusText: g,
                method: y,
                fullPath: m
            }) : K0({
                response: l,
                requestPayload: a,
                timestamp: i,
                duration: c,
                responseHeaders: d,
                statusText: g,
                method: y,
                fullPath: m,
                contentType: f,
                shouldSkipBody: h,
                plugins: t
            })
        } catch (o) {
            return [z0(o, Qe.REQUEST_FAILED), null]
        }
    }, Yr = e => {
        const a = et(e.headers.get(hr) ?? "").map(t => ei.serialize(t.name, t.value, {
            ...t,
            sameSite: t.sameSite,
            encode: n => n
        }));
        return a.length ? a : null
    }, j0 = ({
        response: e,
        requestPayload: a,
        timestamp: t,
        duration: n,
        responseHeaders: r,
        statusText: o,
        method: l,
        fullPath: s
    }) => {
        const i = new Response(null, {
                status: e.status,
                statusText: o,
                headers: e.headers
            }),
            c = Yr(i) ?? on(i.headers);
        return [null, {
            timestamp: t,
            requestPayload: a,
            response: {
                ...i,
                headers: r,
                cookieHeaderKeys: c,
                reader: e.body.getReader(),
                duration: n,
                method: l,
                path: s
            },
            originalResponse: i.clone()
        }]
    }, K0 = async ({
        response: e,
        requestPayload: a,
        timestamp: t,
        duration: n,
        responseHeaders: r,
        statusText: o,
        method: l,
        fullPath: s,
        contentType: i,
        shouldSkipBody: c,
        plugins: f
    }) => {
        const d = await e.clone().arrayBuffer(),
            v = Wr(i),
            m = jr(i).essence,
            g = await D0(d, v, qr(m, f)),
            y = new Response(c ? null : d, {
                status: e.status,
                statusText: o,
                headers: e.headers
            }),
            h = Yr(y) ?? on(y.headers);
        return [null, {
            timestamp: t,
            requestPayload: a,
            response: {
                ...y,
                headers: r,
                cookieHeaderKeys: h,
                data: g,
                size: d.byteLength,
                duration: n,
                method: l,
                status: e.status,
                path: s
            },
            originalResponse: e.clone()
        }]
    }, G0 = B({
        __name: "ViewLayout",
        setup(e) {
            const {
                cx: a
            } = Ne();
            return (t, n) => (p(), x("div", se(ue(u(a)("flex flex-col min-h-0 flex-1 *:border-t first:*:border-t-0 md:*:border-t-0 xl:overflow-hidden md:flex-row leading-5"))), [I(t.$slots, "default")], 16))
        }
    }), Y0 = G0, X0 = {}, Q0 = {
        class: "custom-scroll flex flex-col pr-0 *:border-t *:first:border-t-0 xl:flex-row *:xl:border-t-0 *:xl:border-l *:first:xl:border-l-0"
    };

function J0(e, a) {
    return p(), x("div", Q0, [I(e.$slots, "default")])
}
var _0 = ce(X0, [
        ["render", J0]
    ]),
    ed = ({
        harRequest: e
    }) => {
        const a = td(e),
            t = ad(e.postData);
        return [e.url, {
            method: e.method,
            headers: a,
            body: t
        }]
    },
    td = e => {
        var t;
        const a = new Headers;
        if (e.headers.forEach(({
                name: n,
                value: r
            }) => {
                a.append(n, r)
            }), (t = e.cookies) != null && t.length) {
            const n = e.cookies.map(({
                name: r,
                value: o
            }) => `${r}=${o}`).join("; ");
            a.append("Cookie", n)
        }
        return a
    },
    ad = e => {
        if (!e) return null;
        const {
            params: a,
            text: t,
            mimeType: n
        } = e;
        if (a != null && a.length) {
            const r = n != null && n.includes("multipart/form-data") ? new FormData : new URLSearchParams;
            return a.forEach(({
                name: o,
                value: l
            }) => {
                r.append(o, l || "")
            }), r
        }
        return t ? new TextEncoder().encode(t) : null
    },
    Vn = ({
        harResponse: e,
        url: a = "",
        method: t,
        path: n,
        duration: r = 0
    }) => {
        const o = nd(e),
            {
                body: l,
                data: s,
                size: i
            } = rd(e),
            c = on(o);
        return {
            ...new Response(l, {
                status: e.status,
                statusText: e.statusText,
                headers: o
            }),
            headers: Object.fromEntries(o.entries()),
            cookieHeaderKeys: c,
            duration: r,
            status: e.status,
            statusText: e.statusText,
            method: t,
            path: n,
            data: s,
            size: i,
            url: a
        }
    },
    nd = e => {
        const a = new Headers;
        return e.headers.forEach(({
            name: t,
            value: n
        }) => {
            a.append(t, n)
        }), a
    },
    rd = e => {
        if (!e.content.text) return {
            body: null,
            data: "",
            size: 0
        };
        const {
            text: a,
            encoding: t
        } = e.content;
        if (t) return {
            body: null,
            data: a,
            size: a.length
        };
        const n = new TextEncoder().encode(a).buffer;
        return {
            body: n,
            data: a,
            size: n.byteLength
        }
    },
    $n = new Map;

function za(e, a, t, n) {
    return [n, e, a, t].filter(ht).join("|")
}

function od(e) {
    return "reader" in e
}
var ld = e => e == null ? !0 : typeof e == "string" ? e.trim() === "" : !1,
    sd = (e = [], a = "default") => {
        const t = [];
        for (const n of e) {
            const r = W(n);
            if (r.in !== "path") continue;
            const o = ia(r, a, void 0);
            yr(r, o) || ld(o == null ? void 0 : o.value) && t.push(r.name)
        }
        return t.length > 0 ? {
            ok: !1,
            invalidParams: t
        } : {
            ok: !0
        }
    },
    id = {
        key: 0,
        class: "request-response-header bg-b-1 -mb-1/2 sticky top-0 z-1 flex min-h-11 items-center border-b px-2.5 text-base font-medium xl:rounded-none"
    },
    ud = B({
        inheritAttrs: !1,
        __name: "ViewLayoutSection",
        setup(e) {
            const {
                cx: a
            } = Ne();
            return (t, n) => (p(), x("section", se(ue(u(a)("xl:custom-scroll bg-b-1 flex flex-1 flex-col xl:h-full xl:min-w-0"))), [t.$slots.title ? (p(), x("div", id, [I(t.$slots, "title")])) : U("", !0), I(t.$slots, "default")], 16))
        }
    }),
    Xr = ud,
    dd = ["aria-controls", "aria-selected", "tabindex"],
    cd = B({
        __name: "SectionFilterButton",
        props: {
            selected: {
                type: Boolean
            },
            controls: {}
        },
        setup(e) {
            return (a, t) => (p(), x("button", {
                "aria-controls": e.controls ?? "",
                "aria-selected": !!e.selected,
                class: re(["hover:bg-b-2 flex w-fit cursor-pointer items-center rounded p-1 px-2 text-center font-medium whitespace-nowrap has-[:focus-visible]:outline", {
                    "text-c-1 pointer-events-none": e.selected
                }]),
                role: "tab",
                tabindex: e.selected ? 0 : -1,
                type: "button"
            }, [I(a.$slots, "default")], 10, dd))
        }
    }),
    vd = cd,
    fd = {
        class: "request-section-content request-section-content-filter fade-request-section-content text-c-3 pointer-events-auto relative hidden w-full justify-end gap-[1.5px] rounded py-1.75 text-xs xl:flex"
    },
    md = {
        class: "filter-button context-bar-group-hover:text-c-1 absolute -right-[30px] flex items-center"
    },
    pd = {
        class: "context-bar-group-hover:hidden mr-1.5"
    },
    hd = B({
        __name: "SectionFilter",
        props: gt({
            filters: {
                default: () => []
            },
            filterIds: {}
        }, {
            modelValue: {},
            modelModifiers: {}
        }),
        emits: ["update:modelValue"],
        setup(e) {
            const a = Mt(e, "modelValue"),
                t = E(),
                n = r => {
                    const o = r === "prev" ? -1 : 1,
                        l = a.value ? e.filters.indexOf(a.value) : 0,
                        s = e.filters.length,
                        i = (l + o + s) % s;
                    a.value = e.filters[i], de(() => {
                        if (t.value) {
                            const c = t.value.querySelector('button[aria-selected="true"]');
                            c && c.focus()
                        }
                    })
                };
            return (r, o) => (p(), x("div", {
                ref_key: "tablist",
                ref: t,
                class: "filter-hover context-bar-group ml-auto hidden lg:flex",
                role: "tablist",
                onKeydown: [o[0] || (o[0] = Ct(l => n("prev"), ["left"])), o[1] || (o[1] = Ct(l => n("next"), ["right"]))]
            }, [b("div", fd, [(p(!0), x(le, null, Ae(e.filters, l => {
                var s;
                return p(), H(vd, {
                    key: l,
                    class: "filter-hover-item",
                    controls: (s = e.filterIds) == null ? void 0 : s[l],
                    role: "tab",
                    selected: a.value === l,
                    onClick: i => a.value = l
                }, {
                    default: S(() => [Y(K(l), 1)]),
                    _: 2
                }, 1032, ["controls", "selected", "onClick"])
            }), 128)), b("div", md, [b("span", pd, K(a.value), 1), A(u(me), {
                icon: "FilterList",
                size: "md",
                thickness: "2"
            })])])], 544))
        }
    }),
    Qr = ce(hd, [
        ["__scopeId", "data-v-07ff8fc3"]
    ]);

function Jr({
    multiple: e,
    accept: a,
    onChange: t,
    onError: n
} = {}) {
    const r = E(null);
    let o;
    typeof document < "u" && (o = document.createElement("input"), o.type = "file", o.onchange = s => {
        r.value = s.target.files, t == null || t(r.value)
    }, o.onerror = () => n == null ? void 0 : n(), o.multiple = e, o.accept = a);
    const l = () => {
        if (!o) return n == null ? void 0 : n();
        o.click()
    };
    return {
        files: br(r),
        open: l
    }
}
var gd = B({
        __name: "DataTableHeader",
        setup(e) {
            const {
                cx: a
            } = Ne();
            return (t, n) => (p(), H(Tt, _({
                is: "th"
            }, u(a)("items-center font-medium px-2 min-w-0 -outline-offset-1")), {
                default: S(() => [I(t.$slots, "default")]),
                _: 3
            }, 16))
        }
    }),
    qe = gd,
    Za = e => {
        if (e instanceof File) return e.name
    },
    _r = (e, a) => {
        if (!e || !("type" in e) || typeof a != "string") return {
            ok: !0
        };
        if (e.type === "integer" || e.type === "number") {
            const t = Number(a);
            if (isNaN(t)) return {
                ok: !1,
                message: "Value must be a number (e.g., 42.5)"
            };
            if (e.type === "integer" && !Number.isInteger(t)) return {
                ok: !1,
                message: "Value must be a whole number (e.g., 42)"
            };
            if (e.minimum !== void 0 && t < e.minimum) return {
                ok: !1,
                message: `Value must be ${e.minimum} or greater`
            };
            if (e.maximum !== void 0 && t > e.maximum) return {
                ok: !1,
                message: `Value must be ${e.maximum} or less`
            }
        }
        if (e.type === "string" && e.format) {
            if (e.format === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(a ?? "")) return {
                ok: !1,
                message: "Please enter a valid date in YYYY-MM-DD format (e.g., 2024-03-20)"
            };
            if (e.format === "date-time" && !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/.test(a ?? "")) return {
                ok: !1,
                message: "Please enter a valid date and time in RFC 3339 format (e.g., 2024-03-20T13:45:30Z)"
            };
            if (e.format === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a ?? "")) return {
                ok: !1,
                message: "Please enter a valid email address (e.g., user@example.com)"
            };
            if (e.format === "uri" && !/^[a-zA-Z][a-zA-Z0-9+.-]*:.+$/.test(a ?? "")) return {
                ok: !1,
                message: "Please enter a valid URI (e.g., https://example.com)"
            }
        }
        return {
            ok: !0
        }
    },
    yd = ["aria-label", "role"],
    bd = {
        class: "text-xxs text-c-1 grid w-fit max-w-xs min-w-0 gap-1.5 rounded px-1.5 pt-2 pb-1.5 leading-none break-words",
        "data-testid": "request-table-tooltip-content"
    },
    Sd = {
        key: 0,
        class: "text-error-1"
    },
    xd = {
        key: 1,
        class: "schema text-c-2 truncate *:not-first:before:content-['_·_']"
    },
    wd = {
        key: 0
    },
    Ad = {
        key: 1
    },
    Td = {
        key: 2
    },
    kd = {
        key: 3
    },
    Cd = {
        key: 4
    },
    Hd = B({
        __name: "RequestTableTooltip",
        props: {
            schema: {},
            value: {},
            description: {}
        },
        setup(e) {
            const a = T(() => _r(e.schema, e.value)),
                t = T(() => a.value.ok === !1);
            return (n, r) => (p(), H(u(xr), {
                offset: 4,
                placement: "left",
                teleport: ""
            }, {
                popover: S(() => [b("div", bd, [a.value.ok === !1 ? (p(), x("div", Sd, K(a.value.message), 1)) : e.schema && ("type" in e.schema || "format" in e.schema || "minimum" in e.schema || "maximum" in e.schema || "default" in e.schema) ? (p(), x("div", xd, ["type" in e.schema ? (p(), x("span", wd, K(e.schema.type), 1)) : U("", !0), "format" in e.schema ? (p(), x("span", Ad, K(e.schema.format), 1)) : U("", !0), "minimum" in e.schema ? (p(), x("span", Td, "min: " + K(e.schema.minimum), 1)) : U("", !0), "maximum" in e.schema ? (p(), x("span", kd, "max: " + K(e.schema.maximum), 1)) : U("", !0), "default" in e.schema ? (p(), x("span", Cd, "default: " + K(e.schema.default), 1)) : U("", !0)])) : U("", !0), e.description && !t.value ? (p(), H(u(Sr), {
                    key: 2,
                    value: e.description
                }, null, 8, ["value"])) : U("", !0)])]),
                default: S(() => [b("button", {
                    "aria-label": t.value ? "Input is invalid" : "More Information",
                    class: "text-c-2 hover:text-c-1 hover:bg-b-2 rounded p-1",
                    role: t.value ? "alert" : "none",
                    type: "button"
                }, [t.value ? (p(), H(u(t0), {
                    key: 0,
                    class: "text-orange size-3.5 brightness-90 hover:brightness-75"
                })) : (p(), H(u(El), {
                    key: 1,
                    class: "text-c-2 hover:text-c-1 size-3.5"
                }))], 8, yd)]),
                _: 1
            }))
        }
    }),
    Ln = Hd,
    Pd = {
        class: "text-c-2 filemask flex w-full max-w-[100%] items-center justify-center overflow-hidden p-1"
    },
    Bd = {
        key: 1,
        class: "p-0.5"
    },
    Md = B({
        __name: "RequestTableRow",
        props: {
            data: {},
            hasCheckboxDisabled: {
                type: Boolean
            },
            invalidParams: {},
            label: {},
            environment: {},
            showUploadButton: {
                type: Boolean
            }
        },
        emits: ["upsertRow", "deleteRow", "uploadFile", "removeFile", "navigate"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = E(e.data.name ?? ""),
                r = E(ne(e.data.value) ?? ""),
                o = E(e.data.isDisabled ?? !1);
            oe(() => e.data.name, y => n.value = y ?? ""), oe(() => e.data.value, y => r.value = ne(y) ?? ""), oe(() => e.data.isDisabled, y => o.value = y ?? !1);
            const l = T(() => r.value instanceof File),
                s = T(() => (l.value ? Za(r.value) : r.value) ?? ""),
                i = T(() => {
                    var y;
                    return (y = e.data.schema) == null ? void 0 : y.default
                }),
                c = T(() => {
                    if (!e.data.schema) return [];
                    if (e.data.schema.enum) return e.data.schema.enum.map(y => String(y));
                    if ("items" in e.data.schema) {
                        const y = Rt.schema(e.data.schema.items);
                        if (y != null && y.enum) return y.enum.map(h => String(h))
                    }
                    return []
                }),
                f = T(() => e.data.schema && "minimum" in e.data.schema ? e.data.schema.minimum : void 0),
                d = T(() => e.data.schema && "maximum" in e.data.schema ? e.data.schema.maximum : void 0),
                v = T(() => e.data.schema && "type" in e.data.schema ? e.data.schema.type : void 0),
                m = T(() => _r(e.data.schema, r.value)),
                g = y => {
                    y.name !== void 0 && (n.value = y.name), y.value !== void 0 && (r.value = y.value), o.value = y.isDisabled ?? !1, t("upsertRow", {
                        name: n.value,
                        value: r.value,
                        isDisabled: o.value
                    })
                };
            return (y, h) => {
                var w;
                return p(), H(u(Ke), {
                    id: e.data.name,
                    class: re({
                        alert: m.value.ok === !1,
                        error: m.value.ok === !1 && ((w = e.invalidParams) == null ? void 0 : w.has(e.data.name))
                    })
                }, {
                    default: S(() => [A(u(Rl), {
                        class: "!border-r",
                        disabled: e.hasCheckboxDisabled ?? !1,
                        modelValue: !o.value,
                        "onUpdate:modelValue": h[0] || (h[0] = P => g({
                            isDisabled: !P
                        }))
                    }, null, 8, ["disabled", "modelValue"]), A(u(Tt), null, {
                        default: S(() => [A(u(Qt), {
                            "aria-label": `${e.label} Key`,
                            disableCloseBrackets: "",
                            disabled: e.data.isReadonly,
                            disableEnter: "",
                            disableTabIndent: "",
                            environment: e.environment,
                            lineWrapping: "",
                            modelValue: n.value,
                            placeholder: "Key",
                            required: !!e.data.isRequired,
                            onNavigate: h[1] || (h[1] = P => t("navigate", P)),
                            onSelectVariable: h[2] || (h[2] = P => g({
                                name: P
                            })),
                            "onUpdate:modelValue": h[3] || (h[3] = P => g({
                                name: P
                            }))
                        }, null, 8, ["aria-label", "disabled", "environment", "modelValue", "required"])]),
                        _: 1
                    }), A(u(Tt), null, {
                        default: S(() => {
                            var P, k;
                            return [A(u(Qt), {
                                "aria-label": `${e.label} Value`,
                                class: "pr-6 group-hover:pr-10 group-has-[.cm-focused]:pr-10",
                                default: i.value,
                                disableCloseBrackets: "",
                                disabled: e.data.isReadonly,
                                disableEnter: "",
                                disableTabIndent: "",
                                enum: c.value,
                                environment: e.environment,
                                examples: ((k = (P = e.data.schema) == null ? void 0 : P.examples) == null ? void 0 : k.map(D => String(D))) ?? [],
                                linethrough: e.data.isOverridden,
                                lineWrapping: "",
                                max: d.value,
                                min: f.value,
                                modelValue: s.value,
                                placeholder: "Value",
                                type: v.value,
                                withFakeData: "",
                                onNavigate: h[6] || (h[6] = D => t("navigate", D)),
                                "onUpdate:modelValue": h[7] || (h[7] = D => g({
                                    value: D
                                }))
                            }, {
                                icon: S(() => [(e.data.name || r.value) && !e.data.isRequired && e.data.isReadonly !== !0 ? (p(), H(u(ye), {
                                    key: 0,
                                    class: "text-c-2 hover:text-c-1 hover:bg-b-2 z-context -mr-0.5 hidden h-fit rounded p-1 group-hover:flex group-has-[.cm-focused]:flex",
                                    size: "sm",
                                    variant: "ghost",
                                    onClick: h[4] || (h[4] = D => t("deleteRow"))
                                }, {
                                    default: S(() => [A(u(Il), {
                                        class: "size-3.5"
                                    })]),
                                    _: 1
                                })) : U("", !0), e.data.globalRoute !== void 0 ? (p(), H(u(ua), {
                                    key: 1,
                                    class: "text-c-2 hover:text-c-1 hover:bg-b-2 z-context -mr-0.5 h-fit",
                                    icon: u(Au),
                                    label: "Global cookies are shared across the whole workspace. Click to navigate.",
                                    size: "xs",
                                    tooltip: "top",
                                    variant: "ghost",
                                    onClick: h[5] || (h[5] = D => t("navigate", e.data.globalRoute))
                                }, null, 8, ["icon"])) : U("", !0), e.data.isReadonly ? (p(), H(Ln, {
                                    key: 2,
                                    description: "This is a readonly property and you can not modify it! If you want to change it you have to override it or disable it using the checkbox",
                                    value: null
                                })) : e.data.schema ? (p(), H(Ln, {
                                    key: 3,
                                    description: e.data.description,
                                    schema: e.data.schema,
                                    value: r.value
                                }, null, 8, ["description", "schema", "value"])) : U("", !0)]),
                                _: 1
                            }, 8, ["aria-label", "default", "disabled", "enum", "environment", "examples", "linethrough", "max", "min", "modelValue", "type"])]
                        }),
                        _: 1
                    }), e.showUploadButton ? (p(), H(u(Tt), {
                        key: 0,
                        class: "group/upload flex items-center justify-center whitespace-nowrap"
                    }, {
                        default: S(() => [l.value ? (p(), x(le, {
                            key: 0
                        }, [b("div", Pd, [b("span", null, K(s.value), 1)]), b("button", {
                            class: "bg-b-2 mt-1 block rounded p-0.5 text-center text-xs font-medium md:pointer-events-none md:absolute md:inset-x-1 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:opacity-0 md:group-hover/upload:pointer-events-auto md:group-hover/upload:opacity-100",
                            type: "button",
                            onClick: h[8] || (h[8] = P => t("removeFile"))
                        }, " Delete ")], 64)) : (p(), x("div", Bd, [A(u(ye), {
                            class: "bg-b-2 hover:bg-b-3 text-c-2 h-fit border-0 py-px shadow-none",
                            size: "sm",
                            variant: "outlined",
                            onClick: h[9] || (h[9] = P => t("uploadFile"))
                        }, {
                            default: S(() => [h[10] || (h[10] = b("span", null, "Select File", -1)), A(u(me), {
                                class: "ml-1",
                                icon: "Upload",
                                size: "xs",
                                thickness: "2.5"
                            })]),
                            _: 1
                        })]))]),
                        _: 1
                    })) : U("", !0)]),
                    _: 1
                }, 8, ["id", "class"])
            }
        }
    }),
    Ed = Md,
    Rd = B({
        __name: "RequestTable",
        props: {
            data: {},
            hasCheckboxDisabled: {
                type: Boolean
            },
            invalidParams: {},
            label: {},
            showUploadButton: {
                type: Boolean
            },
            showAddRowPlaceholder: {
                type: Boolean,
                default: !0
            },
            environment: {}
        },
        emits: ["upsertRow", "deleteRow", "uploadFile", "removeFile", "navigate"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = T(() => e.showUploadButton ? ["36px", "", "", "auto"] : ["36px", "", ""]),
                r = T(() => {
                    if (!e.showAddRowPlaceholder) return e.data;
                    const o = e.data.at(-1);
                    return !o || o.name !== "" || o.value !== "" ? [...e.data, {
                        name: "",
                        value: "",
                        isDisabled: !0
                    }] : e.data
                });
            return (o, l) => (p(), H(u(It), {
                class: "group/table flex-1",
                columns: n.value
            }, {
                default: S(() => [A(u(Ke), {
                    class: "sr-only !block"
                }, {
                    default: S(() => [A(u(qe), null, {
                        default: S(() => [Y(K(e.label) + " Enabled", 1)]),
                        _: 1
                    }), A(u(qe), null, {
                        default: S(() => [Y(K(e.label) + " Key", 1)]),
                        _: 1
                    }), A(u(qe), null, {
                        default: S(() => [Y(K(e.label) + " Value", 1)]),
                        _: 1
                    })]),
                    _: 1
                }), (p(!0), x(le, null, Ae(r.value, (s, i) => (p(), H(Ed, {
                    key: i,
                    data: s,
                    environment: e.environment,
                    hasCheckboxDisabled: e.hasCheckboxDisabled,
                    invalidParams: e.invalidParams,
                    label: e.label,
                    showUploadButton: e.showUploadButton,
                    onDeleteRow: c => t("deleteRow", i),
                    onNavigate: l[0] || (l[0] = c => t("navigate", c)),
                    onRemoveFile: c => t("removeFile", i),
                    onUploadFile: c => t("uploadFile", i),
                    onUpsertRow: c => t("upsertRow", i, c)
                }, null, 8, ["data", "environment", "hasCheckboxDisabled", "invalidParams", "label", "showUploadButton", "onDeleteRow", "onRemoveFile", "onUploadFile", "onUpsertRow"]))), 128))]),
                _: 1
            }, 8, ["columns"]))
        }
    }),
    Na = ce(Rd, [
        ["__scopeId", "data-v-36811e28"]
    ]),
    Un = e => e instanceof File ? e.name : typeof e == "object" && e !== null ? JSON.stringify(e) : String(e),
    eo = (e, a = [], t = !0) => {
        if (!$e(e) || !e.properties) return [];
        const n = new Set(e.required ?? []),
            r = [];
        for (const [o, l] of yt(e.properties)) {
            const s = Rt.schema(l),
                i = [...a, String(o)],
                c = t && n.has(String(o));
            s && $e(s) && s.properties ? r.push(...eo(s, i, c)) : r.push({
                path: i,
                schema: s,
                isRequired: c
            })
        }
        return r
    },
    to = (e, a, t = []) => {
        const n = [],
            r = _e(e) ? yt(e) : [],
            o = new Map(r.map(([i, c]) => [String(i), c])),
            l = new Set,
            s = a && $e(a) ? a.properties ?? {} : {};
        for (const [i, c] of yt(s)) {
            const f = String(i);
            l.add(f);
            const d = Rt.schema(c),
                v = [...t, f],
                m = o.get(f);
            d && $e(d) && d.properties ? n.push(...to(m, d, v)) : n.push({
                path: v,
                value: m
            })
        }
        for (const [i, c] of r) {
            const f = String(i);
            l.has(f) || n.push({
                path: [...t, f],
                value: c
            })
        }
        return n
    },
    Id = (e, a, t) => {
        if (!(e != null && e.value) || a !== "multipart/form-data" && a !== "application/x-www-form-urlencoded") return [];
        const n = t && $e(t) ? t : void 0,
            r = n ? new Set(n.required ?? []) : void 0,
            o = new Map;
        if (n)
            for (const s of eo(n)) o.set(s.path.join("."), s);
        const l = ({
            name: s,
            value: i,
            isDisabled: c = !1
        }) => {
            var m;
            const f = {
                name: s,
                value: i,
                isDisabled: c
            };
            if (!n || !s) return f;
            const d = o.get(s),
                v = (d == null ? void 0 : d.schema) ?? Rt.schema((m = n.properties) == null ? void 0 : m[s]);
            return f.schema = v, f.description = v == null ? void 0 : v.description, f.isRequired = (d == null ? void 0 : d.isRequired) ?? (r == null ? void 0 : r.has(s)) ?? !1, f
        };
        return Array.isArray(e.value) ? e.value.map(s => _e(s) ? l({
            name: String(s.name),
            value: s.value instanceof File ? s.value : String(s.value),
            isDisabled: !!s.isDisabled
        }) : {
            name: "",
            value: s,
            isDisabled: !1
        }) : a === "multipart/form-data" && n && typeof e.value == "object" ? to(e.value, n).map(({
            path: s,
            value: i
        }) => {
            const c = i instanceof File ? i : i == null ? "" : Un(i);
            return l({
                name: s.join("."),
                value: c
            })
        }) : typeof e.value == "object" && e.value ? yt(e.value).map(([s, i]) => l({
            name: String(s),
            value: Un(i)
        })) : []
    },
    Od = B({
        __name: "RequestBodyForm",
        props: {
            example: {},
            bodySchema: {},
            selectedContentType: {},
            environment: {}
        },
        emits: ["update:formValue"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = E([]);
            oe(() => [e.example, e.bodySchema, e.selectedContentType], ([i, c, f]) => {
                n.value = Id(i, f, c)
            }, {
                immediate: !0
            });
            const r = i => {
                    t("update:formValue", i.map(c => ({
                        name: c.name,
                        value: c.value,
                        isDisabled: c.isDisabled ?? !1
                    })))
                },
                o = (i, c) => {
                    if (i >= n.value.length) {
                        n.value = [...n.value, {
                            name: "",
                            value: "",
                            ...c,
                            isDisabled: !1
                        }], r(n.value);
                        return
                    }
                    n.value = n.value.map((f, d) => d === i ? {
                        ...f,
                        ...c
                    } : f), r(n.value)
                },
                l = i => {
                    n.value = n.value.filter((c, f) => f !== i), r(n.value)
                },
                s = i => {
                    const {
                        open: c
                    } = Jr({
                        onChange: f => {
                            const d = f == null ? void 0 : f[0];
                            if (d) {
                                const v = n.value[i];
                                o(i, {
                                    name: (v == null ? void 0 : v.name) || d.name,
                                    value: d
                                })
                            }
                        },
                        multiple: !1,
                        accept: "*/*"
                    });
                    c()
                };
            return (i, c) => e.selectedContentType === "multipart/form-data" ? (p(), H(Na, {
                key: 0,
                data: n.value,
                environment: e.environment,
                showUploadButton: "",
                onDeleteRow: l,
                onRemoveFile: c[0] || (c[0] = f => o(f, {
                    value: void 0
                })),
                onUploadFile: s,
                onUpsertRow: o
            }, null, 8, ["data", "environment"])) : (p(), H(Na, {
                key: 1,
                data: n.value,
                environment: e.environment,
                onDeleteRow: l,
                onUpsertRow: o
            }, null, 8, ["data", "environment"]))
        }
    }),
    Vd = Od;
const Ut = {
    "multipart/form-data": "Multipart Form",
    "application/x-www-form-urlencoded": "Form URL Encoded",
    "application/octet-stream": "Binary File",
    "application/json": "JSON",
    "application/xml": "XML",
    "application/yaml": "YAML",
    "application/edn": "EDN",
    other: "Other",
    none: "None"
};
var $d = {
        key: 0,
        class: "text-c-3 flex min-h-10 w-full items-center justify-center border-t p-2 text-sm"
    },
    Ld = {
        key: 1,
        class: "flex items-center justify-center overflow-hidden border-t p-1.5"
    },
    Ud = {
        class: "text-c-2 w-full max-w-full overflow-hidden rounded border px-1.5 py-1 text-xs whitespace-nowrap"
    },
    Dd = B({
        __name: "RequestBody",
        props: {
            requestBody: {},
            exampleKey: {},
            title: {},
            environment: {},
            requestBodyCompositionSelection: {}
        },
        emits: ["update:contentType", "update:value", "update:formValue"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = {
                    "application/json": "json",
                    "application/xml": "xml",
                    "application/yaml": "yaml"
                },
                r = T(() => zr(e.requestBody, e.exampleKey) ?? "none"),
                o = v => _a(v).essence,
                l = T(() => {
                    var g;
                    const v = yt(Ut).map(([y, h]) => ({
                            id: y,
                            label: h
                        })),
                        m = Object.keys(((g = e.requestBody) == null ? void 0 : g.content) ?? {}).filter(y => y in Ut ? !1 : !(o(y) in Ut)).map(y => ({
                            id: y,
                            label: o(y)
                        }));
                    return [...v, ...m]
                }),
                s = T({
                    get: () => {
                        const v = l.value.find(y => y.id === r.value);
                        if (v) return v;
                        const m = o(r.value),
                            g = Ut[m] ?? m;
                        return {
                            id: r.value,
                            label: g
                        }
                    },
                    set: v => {
                        t("update:contentType", {
                            value: v.id
                        })
                    }
                });

            function i(v) {
                const {
                    open: m
                } = Jr({
                    onChange: g => {
                        const y = g == null ? void 0 : g[0];
                        y && v(y)
                    },
                    multiple: !1,
                    accept: "*/*"
                });
                m()
            }
            const c = T(() => e.requestBody && Dr(e.requestBody, r.value, e.exampleKey, e.requestBodyCompositionSelection)),
                f = T(() => {
                    if (!c.value) return "";
                    const v = c.value.value;
                    return typeof v == "string" ? v : JSON.stringify(v, null, 2)
                }),
                d = T(() => {
                    var v, m, g;
                    return Rt.schema((g = (m = (v = e.requestBody) == null ? void 0 : v.content) == null ? void 0 : m[r.value]) == null ? void 0 : g.schema)
                });
            return (v, m) => (p(), H(u(Ge), null, {
                title: S(() => [Y(K(e.title), 1)]),
                default: S(() => [A(u(It), {
                    columns: [""],
                    presentational: ""
                }, {
                    default: S(() => [A(u(qe), {
                        class: "relative col-span-full flex h-8 cursor-pointer items-center justify-between border-r-0 !p-0"
                    }, {
                        default: S(() => [A(u(wr), {
                            modelValue: s.value,
                            "onUpdate:modelValue": m[0] || (m[0] = g => s.value = g),
                            options: l.value,
                            teleport: ""
                        }, {
                            default: S(() => [A(u(ye), {
                                class: "text-c-2 hover:text-c-1 flex h-full w-fit gap-1.5 px-3 font-normal",
                                fullWidth: "",
                                variant: "ghost"
                            }, {
                                default: S(() => [b("span", null, K(s.value.label), 1), A(u(me), {
                                    icon: "ChevronDown",
                                    size: "md"
                                })]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["modelValue", "options"])]),
                        _: 1
                    }), A(u(Ke), null, {
                        default: S(() => {
                            var g, y;
                            return [r.value === "none" ? (p(), x("div", $d, [...m[5] || (m[5] = [b("span", null, "No Body", -1)])])) : r.value === "application/octet-stream" ? (p(), x("div", Ld, [u(Za)(u(ne)((g = c.value) == null ? void 0 : g.value)) !== void 0 ? (p(), x(le, {
                                key: 0
                            }, [b("span", Ud, K(u(Za)(u(ne)((y = c.value) == null ? void 0 : y.value))), 1), A(u(ye), {
                                class: "bg-b-2 hover:bg-b-3 text-c-2 ml-1 border-0 shadow-none",
                                size: "sm",
                                variant: "outlined",
                                onClick: m[1] || (m[1] = h => t("update:value", {
                                    payload: void 0,
                                    contentType: r.value
                                }))
                            }, {
                                default: S(() => [...m[6] || (m[6] = [Y(" Delete ", -1)])]),
                                _: 1
                            })], 64)) : (p(), H(u(ye), {
                                key: 1,
                                class: "bg-b-2 hover:bg-b-3 text-c-2 border-0 shadow-none",
                                size: "sm",
                                variant: "outlined",
                                onClick: m[2] || (m[2] = () => i(h => t("update:value", {
                                    payload: h,
                                    contentType: r.value
                                })))
                            }, {
                                default: S(() => [m[7] || (m[7] = b("span", null, "Select File", -1)), A(u(me), {
                                    class: "ml-1",
                                    icon: "Upload",
                                    size: "xs",
                                    thickness: "2.5"
                                })]),
                                _: 1
                            }))])) : r.value === "multipart/form-data" || r.value === "application/x-www-form-urlencoded" ? (p(), H(Vd, {
                                key: 2,
                                bodySchema: d.value,
                                environment: e.environment,
                                example: c.value,
                                selectedContentType: r.value,
                                "onUpdate:formValue": m[3] || (m[3] = h => t("update:formValue", {
                                    payload: h,
                                    contentType: r.value
                                }))
                            }, null, 8, ["bodySchema", "environment", "example", "selectedContentType"])) : (p(), H(u(Qt), {
                                key: 3,
                                class: "border-t px-3",
                                content: "",
                                environment: e.environment,
                                language: n[r.value] ?? "plaintext",
                                lineNumbers: "",
                                lint: "",
                                modelValue: f.value,
                                withFakeData: "",
                                "onUpdate:modelValue": m[4] || (m[4] = h => t("update:value", {
                                    payload: h,
                                    contentType: r.value
                                }))
                            }, null, 8, ["environment", "language", "modelValue"]))]
                        }),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    zd = ce(Dd, [
        ["__scopeId", "data-v-aff33ea6"]
    ]),
    Zd = {
        class: "flex flex-1"
    },
    Nd = {
        class: "overflow-hidden"
    },
    Fd = B({
        __name: "RequestCodeSnippet",
        props: {
            integration: {},
            clientOptions: {},
            selectedClient: {},
            selectedServer: {
                default: null
            },
            selectedContentType: {},
            selectedExample: {},
            eventBus: {},
            securitySchemes: {},
            method: {},
            path: {},
            operation: {},
            fallback: {
                type: Boolean
            },
            generateLabel: {
                type: Function
            },
            isWebhook: {
                type: Boolean
            },
            globalCookies: {},
            requestBodyCompositionSelection: {}
        },
        setup(e) {
            const a = T(() => Dl(e.operation)),
                t = T(() => $l(a.value, e.clientOptions)),
                n = E(Tn(t.value, e.selectedClient));
            oe(() => e.selectedClient, i => {
                const c = Tn(t.value, i);
                c && (n.value = c)
            });
            const r = T(() => Ll(e.securitySchemes ?? [])),
                o = i => {
                    n.value = i, i && !i.id.startsWith("custom") && e.eventBus.emit("workspace:update:selected-client", i.id)
                },
                l = T(() => {
                    var i;
                    return Ul({
                        defaultDisabledParameters: !0,
                        clientId: (i = n.value) == null ? void 0 : i.id,
                        customCodeSamples: a.value,
                        operation: e.operation,
                        method: e.method,
                        path: e.path,
                        contentType: e.selectedContentType,
                        server: e.selectedServer,
                        securitySchemes: e.securitySchemes,
                        example: e.selectedExample,
                        globalCookies: e.globalCookies,
                        includeDefaultHeaders: e.integration === "client"
                    })
                }),
                s = T(() => t.value.some(i => i.options.length > 0));
            return (i, c) => ke((p(), H(u(Ge), {
                class: "group/preview w-full border-t",
                defaultOpen: !1
            }, {
                title: S(() => [...c[1] || (c[1] = [Y("Code Snippet", -1)])]),
                actions: S(() => [b("div", Zd, [A(u(Vl), {
                    modelValue: n.value,
                    options: t.value,
                    placement: "bottom-end",
                    "onUpdate:modelValue": c[0] || (c[0] = f => o(f))
                }, {
                    default: S(({
                        open: f
                    }) => [A(u(ye), {
                        class: "text-c-2 hover:text-c-1 flex h-full w-fit gap-1.5 px-0.5 py-0 text-base font-normal",
                        "data-testid": "client-picker",
                        variant: "ghost"
                    }, {
                        default: S(() => {
                            var d;
                            return [Y(K((d = n.value) == null ? void 0 : d.title) + " ", 1), A(u(Ar), {
                                class: re(["mt-0.25 size-3 transition-transform duration-100", f && "rotate-180"]),
                                weight: "bold"
                            }, null, 8, ["class"])]
                        }),
                        _: 2
                    }, 1024)]),
                    _: 1
                }, 8, ["modelValue", "options"])])]),
                default: S(() => [A(u(en), null, {
                    default: S(() => [A(u(It), {
                        columns: [""],
                        presentational: ""
                    }, {
                        default: S(() => [A(u(Ke), null, {
                            default: S(() => {
                                var f;
                                return [b("div", Nd, [A(u(Ol), {
                                    class: "text-base",
                                    content: l.value,
                                    hideCredentials: r.value,
                                    lang: ((f = n.value) == null ? void 0 : f.lang) ?? "plaintext",
                                    lineNumbers: ""
                                }, null, 8, ["content", "hideCredentials", "lang"])])]
                            }),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }, 512)), [
                [Ie, s.value]
            ])
        }
    }),
    qd = Fd,
    Wd = {
        class: "text-c-2 request-meta-buttons flex whitespace-nowrap opacity-0 group-hover/params:opacity-100 has-[:focus-visible]:opacity-100"
    },
    jd = {
        class: "sr-only"
    },
    Kd = B({
        __name: "RequestParams",
        props: {
            rows: {},
            exampleKey: {},
            title: {},
            label: {},
            invalidParams: {},
            globalRoute: {},
            showAddRowPlaceholder: {
                type: Boolean,
                default: !0
            },
            environment: {},
            eventBus: {}
        },
        emits: ["upsert", "delete", "deleteAll"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = T(() => e.rows.length > 1),
                r = (o, l) => {
                    const {
                        value: s,
                        ...i
                    } = l;
                    s instanceof File || t("upsert", o, {
                        ...i,
                        value: s ?? ""
                    })
                };
            return (o, l) => (p(), H(u(Ge), {
                class: "group/params",
                itemCount: e.rows.length
            }, {
                title: S(() => [Y(K(e.title), 1)]),
                actions: S(() => [b("div", Wd, [n.value ? (p(), H(u($0), {
                    key: 0,
                    content: "Clear optional parameters",
                    placement: "left"
                }, {
                    default: S(() => [A(u(ye), {
                        class: "pr-0.75 pl-1 transition-none",
                        size: "sm",
                        variant: "ghost",
                        onClick: l[0] || (l[0] = Ze(s => t("deleteAll"), ["stop"]))
                    }, {
                        default: S(() => [l[3] || (l[3] = Y(" Clear ", -1)), b("span", jd, "All " + K(e.title), 1)]),
                        _: 1
                    })]),
                    _: 1
                })) : U("", !0)])]),
                default: S(() => [A(Na, {
                    class: "flex-1",
                    columns: ["32px", "", ""],
                    data: e.rows,
                    environment: e.environment,
                    exampleKey: e.exampleKey,
                    globalRoute: e.globalRoute,
                    invalidParams: e.invalidParams,
                    label: e.label,
                    showAddRowPlaceholder: e.showAddRowPlaceholder,
                    onDeleteRow: l[1] || (l[1] = s => t("delete", {
                        index: s
                    })),
                    onNavigate: l[2] || (l[2] = s => e.eventBus.emit("ui:navigate", s)),
                    onUpsertRow: r
                }, null, 8, ["data", "environment", "exampleKey", "globalRoute", "invalidParams", "label", "showAddRowPlaceholder"])]),
                _: 1
            }, 8, ["itemCount"]))
        }
    }),
    Dt = Kd,
    Gd = e => e == null || e === "",
    Dn = (e, a, t) => {
        var r;
        const n = {};
        for (const o of a) {
            if (o.originalParameter !== e.originalParameter || !o.sourceParameterValuePath || o === e && !t) continue;
            const l = o === e ? t == null ? void 0 : t.value : o.value;
            Gd(l) || rn(n, o.sourceParameterValuePath, l)
        }
        return {
            name: ((r = e.originalParameter) == null ? void 0 : r.name) ?? (t == null ? void 0 : t.name) ?? e.name,
            value: n,
            isDisabled: (t == null ? void 0 : t.isDisabled) ?? e.isDisabled ?? !1
        }
    },
    zt = (e, a, t, {
        context: n,
        defaultParameters: r = 0,
        globalParameters: o = 0,
        onDeleteExpandedRow: l
    }) => {
        const s = r + o;
        return {
            delete: i => {
                const c = n[i.index];
                if (c != null && c.originalParameter) {
                    if (c.sourceParameterValuePath) return l == null || l(c), a.emit("operation:upsert:parameter", {
                        type: e,
                        payload: Dn(c, n),
                        originalParameter: c.originalParameter,
                        meta: t
                    }, {
                        skipUnpackProxy: !0
                    });
                    a.emit("operation:delete:parameter", {
                        originalParameter: c.originalParameter,
                        meta: t
                    }, {
                        skipUnpackProxy: !0
                    })
                }
            },
            deleteAll: () => a.emit("operation:delete-all:parameters", {
                type: e,
                meta: t
            }),
            upsert: (i, c) => {
                var d, v;
                const f = n[i];
                if (i < r + o) {
                    const m = i < r ? "default" : "global";
                    return a.emit("operation:update:extra-parameters", {
                        type: m,
                        in: e,
                        meta: {
                            ...t,
                            name: ((v = (d = f == null ? void 0 : f.name) == null ? void 0 : d.toLowerCase) == null ? void 0 : v.call(d)) ?? "NON_VALID"
                        },
                        payload: {
                            isDisabled: c.isDisabled ?? !1
                        }
                    })
                }
                if (i >= s) {
                    const m = f != null && f.sourceParameterValuePath && f.originalParameter ? Dn(f, n, c) : c;
                    return a.emit("operation:upsert:parameter", {
                        type: e,
                        payload: m,
                        originalParameter: (f == null ? void 0 : f.originalParameter) ?? null,
                        meta: t
                    }, {
                        skipUnpackProxy: !0,
                        debounceKey: `update:parameter-${e}-${i-s}`
                    })
                }
            }
        }
    },
    Yd = e => {
        if ("content" in e && e.content) {
            const a = Object.keys(e.content);
            return a.length !== 1 ? void 0 : e.content[a[0]]
        }
    },
    Xd = e => {
        var a;
        return "schema" in e && e.schema ? W(e.schema) : W((a = Yd(e)) == null ? void 0 : a.schema)
    },
    Qd = e => "schema" in e && e.schema !== void 0,
    Jd = e => W(e),
    _d = e => {
        const a = "style" in e && e.style ? e.style : "form";
        return {
            style: a,
            explode: "explode" in e && e.explode !== void 0 ? e.explode : a === "form"
        }
    },
    ec = (e, a) => {
        if (e.in !== "query" || !Qd(e) || !a || !$e(a)) return null;
        const {
            style: t,
            explode: n
        } = _d(e);
        return n ? t === "form" ? "form" : t === "deepObject" ? "deepObject" : null : null
    },
    tc = e => e == null ? "" : Array.isArray(e) ? e.join(",") : typeof e == "object" ? JSON.stringify(e) : String(e),
    ao = e => e.join("\0"),
    no = ({
        parameter: e,
        name: a,
        value: t,
        description: n,
        schema: r,
        isRequired: o,
        isDisabled: l,
        sourceParameterValuePath: s
    }) => ({
        name: a,
        value: tc(t),
        description: n,
        schema: r,
        isRequired: o,
        isDisabled: l,
        originalParameter: e,
        sourceParameterValuePath: s
    }),
    zn = (e, a, t, n) => no({
        parameter: e,
        name: e.name,
        value: t,
        description: e.description,
        schema: a,
        isRequired: e.required,
        isDisabled: n
    }),
    ro = ({
        parameter: e,
        schema: a,
        value: t,
        pathPrefix: n,
        namePrefix: r,
        mode: o,
        isDisabled: l,
        hiddenValuePaths: s
    }) => {
        if (!a.properties) return [];
        const i = new Set(a.required ?? []);
        return Object.entries(a.properties).flatMap(([c, f]) => {
            const d = Jd(f);
            if (!d) return [];
            const v = [...n, c],
                m = r ? `${r}[${c}]` : c;
            return s.has(ao(v)) ? [] : o === "deepObject" && $e(d) && d.properties ? ro({
                parameter: e,
                schema: d,
                value: t,
                pathPrefix: v,
                namePrefix: m,
                mode: o,
                isDisabled: l,
                hiddenValuePaths: s
            }) : [no({
                parameter: e,
                name: m,
                value: zl(t, v),
                description: d.description ?? e.description,
                schema: d,
                isRequired: i.has(c),
                isDisabled: l,
                sourceParameterValuePath: v
            })]
        })
    },
    ac = (e, a, t = {}) => {
        var c;
        const n = ia(e, a, void 0),
            r = yr(e, n),
            o = Xd(e),
            l = ec(e, o);
        if (l === null || !o || !$e(o)) return [zn(e, o, n == null ? void 0 : n.value, r)];
        const s = (n == null ? void 0 : n.value) === void 0 ? void 0 : dr(n.value, e);
        if (!o.properties) return [zn(e, o, n == null ? void 0 : n.value, r)];
        const i = new Set(((c = t.hiddenValuePaths) == null ? void 0 : c.map(ao)) ?? []);
        return ro({
            parameter: e,
            schema: o,
            value: s,
            pathPrefix: [],
            namePrefix: l === "deepObject" ? e.name : "",
            mode: l,
            isDisabled: r,
            hiddenValuePaths: i
        })
    },
    Zn = (e, a, t) => e.reduce((n, r) => {
        var l;
        const o = t ? t(r) : r;
        return (n[l = r[a]] ?? (n[l] = [])).push(o), n
    }, {}),
    nc = {
        class: "group pointer-events-none flex flex-1 items-center gap-1 lg:pr-24"
    },
    rc = ["for"],
    oc = ["id", "placeholder", "value"],
    lc = {
        key: 2,
        class: "text-c-1 flex h-8 items-center"
    },
    sc = ["id", "role"],
    ic = B({
        __name: "RequestBlock",
        props: {
            authMeta: {
                default: () => ({
                    type: "document"
                })
            },
            clientOptions: {},
            environment: {},
            eventBus: {},
            exampleKey: {},
            workspaceCookies: {},
            documentCookies: {},
            layout: {},
            method: {},
            operation: {},
            path: {},
            plugins: {},
            proxyUrl: {},
            securityRequirements: {},
            securitySchemes: {},
            requestBodyCompositionSelection: {},
            selectedClient: {},
            selectedSecurity: {},
            selectedSecuritySchemes: {},
            server: {},
            defaultHeaders: {},
            options: {}
        },
        setup(e) {
            const a = T(() => ({
                    method: e.method,
                    path: e.path,
                    exampleKey: e.exampleKey
                })),
                t = E({}),
                n = V => `${V.in}:${V.name}`,
                r = V => t.value[n(V)] ?? [],
                o = T(() => {
                    var V;
                    return Zn(((V = e.operation.parameters) == null ? void 0 : V.map(L => W(L)).flatMap(L => ac(L, e.exampleKey, {
                        hiddenValuePaths: L.in === "query" ? r(L) : []
                    }).map(C => ({
                        ...C,
                        in: L.in
                    })))) ?? [], "in", ({
                        in: L,
                        ...C
                    }) => C)
                }),
                l = T(() => {
                    var V;
                    return Zn(((V = o.value.header) == null ? void 0 : V.map(L => ({
                        ...L,
                        name: L.name.toLowerCase()
                    }))) ?? [], "name")
                }),
                s = T(() => {
                    var C, M;
                    const V = ((M = (C = e.operation["x-scalar-disable-parameters"]) == null ? void 0 : C["default-headers"]) == null ? void 0 : M[e.exampleKey]) ?? {},
                        L = z => {
                            var $;
                            const X = ($ = l.value[z.toLowerCase()]) == null ? void 0 : $[0];
                            return X ? !X.isDisabled : !1
                        };
                    return Object.entries(e.defaultHeaders).map(([z, X]) => ({
                        name: z,
                        value: X,
                        schema: void 0,
                        isOverridden: L(z),
                        isReadonly: !0,
                        isDisabled: V[z.toLowerCase()] ?? !1
                    }))
                }),
                i = T(() => [...s.value, ...o.value.header ?? []]),
                c = T(() => {
                    var z, X;
                    const V = Ra(e.environment),
                        L = Fl(ai({
                            server: e.server,
                            path: e.path
                        }), V),
                        C = ((X = (z = e.operation["x-scalar-disable-parameters"]) == null ? void 0 : z["global-cookies"]) == null ? void 0 : X[e.exampleKey]) ?? {},
                        M = ($, O) => ({
                            name: $.name,
                            value: $.value,
                            globalRoute: {
                                page: O,
                                path: "cookies"
                            },
                            isReadonly: !0,
                            isDisabled: C[$.name.toLowerCase()] ?? !1
                        });
                    return [{
                        location: "workspace",
                        cookies: e.workspaceCookies
                    }, {
                        location: "document",
                        cookies: e.documentCookies
                    }].flatMap(({
                        location: $,
                        cookies: O
                    }) => O.filter(F => ql({
                        cookie: F,
                        url: L,
                        disabledGlobalCookies: {}
                    })).map(F => M(F, $)))
                }),
                f = T(() => [...c.value ?? [], ...o.value.cookie ?? []]),
                d = E("All"),
                v = ["Auth", "Variables", "Cookies", "Headers", "Query", "Body"],
                m = {
                    All: be(),
                    Auth: be(),
                    Variables: be(),
                    Cookies: be(),
                    Headers: be(),
                    Query: be(),
                    Body: be()
                },
                g = T(() => {
                    var L;
                    const V = new Set(["All", ...v]);
                    return (L = o.value.path) != null && L.length || V.delete("Variables"), jt(e.method) || V.delete("Body"), h.value && V.delete("Auth"), [...V]
                }),
                y = T(() => Object.fromEntries(g.value.map(V => [V, m[V]]))),
                h = T(() => e.layout === "modal" && !Object.keys(e.securitySchemes ?? {}).length),
                w = T(() => {
                    var V;
                    return e.layout !== "modal" || !!((V = e.securityRequirements) != null && V.length || e.selectedSecurity.selectedSchemes.length)
                }),
                P = T(() => e.operation.summary ? e.operation.summary : e.path.replace(Nl.PROTOCOL, "") || "Request Name"),
                k = V => d.value === "All" || d.value === V;
            oe(() => e.method, V => {
                d.value === "Body" && !jt(V) && (d.value = "All")
            }), oe(() => [e.method, e.path, e.exampleKey], () => {
                t.value = {}
            });
            const D = V => {
                    const L = V.target.value;
                    e.eventBus.emit("operation:update:meta", {
                        meta: a.value,
                        payload: {
                            summary: L.trim()
                        }
                    })
                },
                Z = T(() => ({
                    path: zt("path", e.eventBus, a.value, {
                        context: o.value.path ?? []
                    }),
                    cookie: zt("cookie", e.eventBus, a.value, {
                        context: f.value ?? [],
                        globalParameters: c.value.length
                    }),
                    header: zt("header", e.eventBus, a.value, {
                        context: i.value,
                        defaultParameters: s.value.length
                    }),
                    query: zt("query", e.eventBus, a.value, {
                        context: o.value.query ?? [],
                        onDeleteExpandedRow: V => {
                            if (!V.originalParameter || !V.sourceParameterValuePath) return;
                            const L = n(V.originalParameter);
                            t.value = {
                                ...t.value,
                                [L]: [...t.value[L] ?? [], V.sourceParameterValuePath]
                            }
                        }
                    })
                })),
                J = V => e.eventBus.emit("operation:update:requestBody:contentType", {
                    payload: {
                        contentType: V.value
                    },
                    meta: a.value
                }),
                G = ({
                    payload: V,
                    contentType: L
                }) => {
                    const C = typeof V == "string" ? `update:requestBody:value-${L}` : void 0;
                    e.eventBus.emit("operation:update:requestBody:value", {
                        payload: V,
                        contentType: L,
                        meta: a.value
                    }, {
                        debounceKey: C
                    })
                },
                ae = ({
                    payload: V,
                    contentType: L
                }) => {
                    const C = `update:requestBody:${L}-form-value`;
                    e.eventBus.emit("operation:update:requestBody:formValue", {
                        payload: V.map(M => ne(M, {
                            depth: 1
                        })),
                        contentType: L,
                        meta: a.value
                    }, {
                        debounceKey: C
                    })
                },
                Q = be(),
                R = T(() => [...e.workspaceCookies, ...e.documentCookies]),
                N = V => e.eventBus.emit("operation:update:extension", {
                    payload: V,
                    meta: a.value
                });
            return (V, L) => (p(), H(Xr, {
                "aria-label": `Request: ${e.operation.summary}`
            }, {
                title: S(() => [b("div", nc, [e.layout !== "modal" ? (p(), x("label", {
                    key: 0,
                    class: "pointer-events-auto absolute top-0 left-0 h-full w-full cursor-text opacity-0",
                    for: u(Q)
                }, null, 8, rc)) : U("", !0), e.layout !== "modal" ? (p(), x("input", {
                    key: 1,
                    id: u(Q),
                    class: "text-c-1 group-hover-input pointer-events-auto relative z-10 -ml-0.5 h-8 w-full rounded pl-1.25 has-[:focus-visible]:outline md:-ml-1.25",
                    placeholder: P.value,
                    value: e.operation.summary,
                    onBlur: D
                }, null, 40, oc)) : (p(), x("span", lc, K(e.operation.summary), 1))]), A(Qr, {
                    modelValue: d.value,
                    "onUpdate:modelValue": L[0] || (L[0] = C => d.value = C),
                    filterIds: y.value,
                    filters: g.value
                }, null, 8, ["modelValue", "filterIds", "filters"])]),
                default: S(() => {
                    var C, M, z;
                    return [b("div", {
                        id: y.value.All,
                        class: "request-section-content custom-scroll relative flex flex-1 flex-col",
                        role: d.value === "All" ? "tabpanel" : "none"
                    }, [ke(A(u(Zl), {
                        id: y.value.Auth,
                        createAnySecurityScheme: e.layout !== "modal",
                        defaultOpen: w.value,
                        environment: e.environment,
                        eventBus: e.eventBus,
                        meta: e.authMeta,
                        options: e.options,
                        proxyUrl: e.proxyUrl,
                        securityRequirements: e.securityRequirements,
                        securitySchemes: e.securitySchemes,
                        selectedSecurity: e.selectedSecurity,
                        selectedSecuritySchemes: e.selectedSecuritySchemes,
                        server: e.server,
                        title: "Authentication"
                    }, null, 8, ["id", "createAnySecurityScheme", "defaultOpen", "environment", "eventBus", "meta", "options", "proxyUrl", "securityRequirements", "securitySchemes", "selectedSecurity", "selectedSecuritySchemes", "server"]), [
                        [Ie, k("Auth") && !h.value]
                    ]), ke(A(Dt, _({
                        id: y.value.Variables,
                        environment: e.environment,
                        eventBus: e.eventBus,
                        exampleKey: e.exampleKey,
                        rows: o.value.path ?? [],
                        showAddRowPlaceholder: !1,
                        title: "Variables"
                    }, $t(Z.value.path)), null, 16, ["id", "environment", "eventBus", "exampleKey", "rows"]), [
                        [Ie, k("Variables") && ((C = o.value.path) == null ? void 0 : C.length)]
                    ]), ke(A(Dt, _({
                        id: y.value.Cookies,
                        environment: e.environment,
                        eventBus: e.eventBus,
                        exampleKey: e.exampleKey,
                        rows: f.value ?? [],
                        showAddRowPlaceholder: !0,
                        title: "Cookies"
                    }, $t(Z.value.cookie)), null, 16, ["id", "environment", "eventBus", "exampleKey", "rows"]), [
                        [Ie, k("Cookies")]
                    ]), ke(A(Dt, _({
                        id: y.value.Headers,
                        environment: e.environment,
                        eventBus: e.eventBus,
                        exampleKey: e.exampleKey,
                        rows: i.value ?? [],
                        title: "Headers"
                    }, $t(Z.value.header)), null, 16, ["id", "environment", "eventBus", "exampleKey", "rows"]), [
                        [Ie, k("Headers")]
                    ]), ke(A(Dt, _({
                        id: y.value.Query,
                        environment: e.environment,
                        eventBus: e.eventBus,
                        exampleKey: e.exampleKey,
                        rows: o.value.query ?? [],
                        title: "Query Parameters"
                    }, $t(Z.value.query)), null, 16, ["id", "environment", "eventBus", "exampleKey", "rows"]), [
                        [Ie, k("Query")]
                    ]), ke(A(zd, {
                        id: y.value.Body,
                        environment: e.environment,
                        exampleKey: e.exampleKey,
                        requestBody: u(W)(e.operation.requestBody),
                        requestBodyCompositionSelection: e.requestBodyCompositionSelection,
                        title: "Request Body",
                        "onUpdate:contentType": J,
                        "onUpdate:formValue": ae,
                        "onUpdate:value": G
                    }, null, 8, ["id", "environment", "exampleKey", "requestBody", "requestBodyCompositionSelection"]), [
                        [Ie, k("Body") && u(jt)(e.method)]
                    ]), (p(!0), x(le, null, Ae(e.plugins, (X, $) => (p(), H(u(en), {
                        key: $
                    }, {
                        default: S(() => {
                            var O;
                            return [(O = X == null ? void 0 : X.components) != null && O.request ? ke((p(), H(Ht(X.components.request.component), _({
                                key: 0,
                                operation: e.operation
                            }, {
                                ref_for: !0
                            }, X.components.request.additionalProps, {
                                "onOperation:update:extension": N
                            }), null, 16, ["operation"])), [
                                [Ie, d.value === "All"]
                            ]) : U("", !0)]
                        }),
                        _: 2
                    }, 1024))), 128)), L[1] || (L[1] = b("div", {
                        class: "flex grow"
                    }, null, -1)), ke(A(qd, {
                        clientOptions: e.clientOptions,
                        eventBus: e.eventBus,
                        globalCookies: R.value,
                        integration: "client",
                        method: e.method,
                        operation: e.operation,
                        path: e.path,
                        securitySchemes: e.selectedSecuritySchemes,
                        selectedClient: e.selectedClient,
                        selectedContentType: (z = (M = u(W)(e.operation.requestBody)) == null ? void 0 : M["x-scalar-selected-content-type"]) == null ? void 0 : z[e.exampleKey],
                        selectedServer: e.server ?? void 0
                    }, null, 8, ["clientOptions", "eventBus", "globalCookies", "method", "operation", "path", "securitySchemes", "selectedClient", "selectedContentType", "selectedServer"]), [
                        [Ie, d.value === "All"]
                    ])], 8, sc)]
                }),
                _: 1
            }, 8, ["aria-label"]))
        }
    }),
    uc = ce(ic, [
        ["__scopeId", "data-v-9ee5445b"]
    ]),
    dc = {
        class: "flex-1 px-2 py-1.5 whitespace-nowrap"
    },
    cc = B({
        __name: "DataTableText",
        props: {
            text: {}
        },
        setup(e) {
            return (a, t) => (p(), H(Tt, {
                class: "relative flex"
            }, {
                default: S(() => [b("span", dc, [I(a.$slots, "default", {}, () => [Y(K(e.text), 1)])])]),
                _: 3
            }))
        }
    }),
    ea = cc,
    vc = ["href"],
    fc = B({
        __name: "HelpfulLink",
        props: {
            href: {}
        },
        setup(e) {
            return (a, t) => (p(), x("a", {
                class: "decoration-c-3 cursor-help underline underline-offset-2",
                href: e.href,
                rel: "noopener noreferrer",
                target: "_blank"
            }, [I(a.$slots, "default")], 8, vc))
        }
    }),
    oo = fc;
const mc = {
    accept: {
        name: "Accept",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept"
    },
    "accept-ch": {
        name: "Accept-CH",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH"
    },
    "accept-ch-lifetime": {
        name: "Accept-CH-Lifetime",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH-Lifetime"
    },
    "accept-charset": {
        name: "Accept-Charset",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset"
    },
    "accept-encoding": {
        name: "Accept-Encoding",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"
    },
    "accept-language": {
        name: "Accept-Language",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"
    },
    "accept-patch": {
        name: "Accept-Patch",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Patch"
    },
    "accept-post": {
        name: "Accept-Post",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Post"
    },
    "accept-ranges": {
        name: "Accept-Ranges",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges"
    },
    "access-control-allow-credentials": {
        name: "Access-Control-Allow-Credentials",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials"
    },
    "access-control-allow-headers": {
        name: "Access-Control-Allow-Headers",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers"
    },
    "access-control-allow-methods": {
        name: "Access-Control-Allow-Methods",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods"
    },
    "access-control-allow-origin": {
        name: "Access-Control-Allow-Origin",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"
    },
    "access-control-expose-headers": {
        name: "Access-Control-Expose-Headers",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers"
    },
    "access-control-max-age": {
        name: "Access-Control-Max-Age",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age"
    },
    "access-control-request-headers": {
        name: "Access-Control-Request-Headers",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers"
    },
    "access-control-request-method": {
        name: "Access-Control-Request-Method",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method"
    },
    age: {
        name: "Age",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age"
    },
    allow: {
        name: "Allow",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow"
    },
    "alt-svc": {
        name: "Alt-Svc",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc"
    },
    "alt-used": {
        name: "Alt-Used",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Used"
    },
    authorization: {
        name: "Authorization",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"
    },
    "cache-control": {
        name: "Cache-Control",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"
    },
    "clear-site-data": {
        name: "Clear-Site-Data",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data"
    },
    connection: {
        name: "Connection",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection"
    },
    "content-disposition": {
        name: "Content-Disposition",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"
    },
    "content-dpr": {
        name: "Content-DPR",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-DPR"
    },
    "content-encoding": {
        name: "Content-Encoding",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding"
    },
    "content-language": {
        name: "Content-Language",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language"
    },
    "content-length": {
        name: "Content-Length",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length"
    },
    "content-location": {
        name: "Content-Location",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location"
    },
    "content-range": {
        name: "Content-Range",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range"
    },
    "content-security-policy": {
        name: "Content-Security-Policy",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"
    },
    "content-security-policy-report-only": {
        name: "Content-Security-Policy-Report-Only",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only"
    },
    "content-type": {
        name: "Content-Type",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"
    },
    cookie: {
        name: "Cookie",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie"
    },
    "critical-ch": {
        name: "Critical-CH",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Critical-CH"
    },
    "cross-origin-embedder-policy": {
        name: "Cross-Origin-Embedder-Policy",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"
    },
    "cross-origin-opener-policy": {
        name: "Cross-Origin-Opener-Policy",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy"
    },
    "cross-origin-resource-policy": {
        name: "Cross-Origin-Resource-Policy",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy"
    },
    date: {
        name: "Date",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date"
    },
    "device-memory": {
        name: "Device-Memory",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Device-Memory"
    },
    digest: {
        name: "Digest",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Digest"
    },
    dnt: {
        name: "DNT",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT"
    },
    downlink: {
        name: "Downlink",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Downlink"
    },
    dpr: {
        name: "DPR",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DPR"
    },
    "early-data": {
        name: "Early-Data",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Early-Data"
    },
    ect: {
        name: "ECT",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ECT"
    },
    etag: {
        name: "ETag",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"
    },
    expect: {
        name: "Expect",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect"
    },
    "expect-ct": {
        name: "Expect-CT",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT"
    },
    expires: {
        name: "Expires",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires"
    },
    forwarded: {
        name: "Forwarded",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded"
    },
    from: {
        name: "From",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From"
    },
    host: {
        name: "Host",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host"
    },
    "if-match": {
        name: "If-Match",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match"
    },
    "if-modified-since": {
        name: "If-Modified-Since",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since"
    },
    "if-none-match": {
        name: "If-None-Match",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match"
    },
    "if-range": {
        name: "If-Range",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range"
    },
    "if-unmodified-since": {
        name: "If-Unmodified-Since",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since"
    },
    "keep-alive": {
        name: "Keep-Alive",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive"
    },
    "large-allocation": {
        name: "Large-Allocation",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation"
    },
    "last-modified": {
        name: "Last-Modified",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified"
    },
    link: {
        name: "Link",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link"
    },
    location: {
        name: "Location",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location"
    },
    "max-forwards": {
        name: "Max-Forwards",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Max-Forwards"
    },
    nel: {
        name: "NEL",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/NEL"
    },
    origin: {
        name: "Origin",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin"
    },
    "permissions-policy": {
        name: "Permissions-Policy",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy"
    },
    pragma: {
        name: "Pragma",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma"
    },
    "proxy-authenticate": {
        name: "Proxy-Authenticate",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate"
    },
    "proxy-authorization": {
        name: "Proxy-Authorization",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization"
    },
    range: {
        name: "Range",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range"
    },
    referer: {
        name: "Referer",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer"
    },
    "referrer-policy": {
        name: "Referrer-Policy",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy"
    },
    "retry-after": {
        name: "Retry-After",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After"
    },
    rtt: {
        name: "RTT",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/RTT"
    },
    "save-data": {
        name: "Save-Data",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data"
    },
    "sec-ch-prefers-reduced-motion": {
        name: "Sec-CH-Prefers-Reduced-Motion",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion"
    },
    "sec-ch-prefers-reduced-transparency": {
        name: "Sec-CH-Prefers-Reduced-Transparency",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency"
    },
    "sec-ch-ua": {
        name: "Sec-CH-UA",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA"
    },
    "sec-ch-ua-arch": {
        name: "Sec-CH-UA-Arch",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Arch"
    },
    "sec-ch-ua-bitness": {
        name: "Sec-CH-UA-Bitness",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness"
    },
    "sec-ch-ua-full-version": {
        name: "Sec-CH-UA-Full-Version",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version"
    },
    "sec-ch-ua-full-version-list": {
        name: "Sec-CH-UA-Full-Version-List",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List"
    },
    "sec-ch-ua-mobile": {
        name: "Sec-CH-UA-Mobile",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile"
    },
    "sec-ch-ua-model": {
        name: "Sec-CH-UA-Model",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Model"
    },
    "sec-ch-ua-platform": {
        name: "Sec-CH-UA-Platform",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform"
    },
    "sec-ch-ua-platform-version": {
        name: "Sec-CH-UA-Platform-Version",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version"
    },
    "sec-fetch-dest": {
        name: "Sec-Fetch-Dest",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest"
    },
    "sec-fetch-mode": {
        name: "Sec-Fetch-Mode",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode"
    },
    "sec-fetch-site": {
        name: "Sec-Fetch-Site",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site"
    },
    "sec-fetch-user": {
        name: "Sec-Fetch-User",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User"
    },
    "sec-gpc": {
        name: "Sec-GPC",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-GPC"
    },
    "sec-purpose": {
        name: "Sec-Purpose",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Purpose"
    },
    "sec-websocket-accept": {
        name: "Sec-WebSocket-Accept",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Accept"
    },
    server: {
        name: "Server",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server"
    },
    "server-timing": {
        name: "Server-Timing",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing"
    },
    "service-worker-navigation-preload": {
        name: "Service-Worker-Navigation-Preload",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload"
    },
    "set-cookie": {
        name: "Set-Cookie",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"
    },
    sourcemap: {
        name: "SourceMap",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap"
    },
    "strict-transport-security": {
        name: "Strict-Transport-Security",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"
    },
    te: {
        name: "TE",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE"
    },
    "timing-allow-origin": {
        name: "Timing-Allow-Origin",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin"
    },
    tk: {
        name: "Tk",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Tk"
    },
    trailer: {
        name: "Trailer",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer"
    },
    "transfer-encoding": {
        name: "Transfer-Encoding",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding"
    },
    upgrade: {
        name: "Upgrade",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade"
    },
    "upgrade-insecure-requests": {
        name: "Upgrade-Insecure-Requests",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests"
    },
    "user-agent": {
        name: "User-Agent",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
    },
    vary: {
        name: "Vary",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary"
    },
    via: {
        name: "Via",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via"
    },
    "viewport-width": {
        name: "Viewport-Width",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Viewport-Width"
    },
    "want-digest": {
        name: "Want-Digest",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Want-Digest"
    },
    warning: {
        name: "Warning",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning"
    },
    width: {
        name: "Width",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Width"
    },
    "www-authenticate": {
        name: "WWW-Authenticate",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate"
    },
    "x-content-type-options": {
        name: "X-Content-Type-Options",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options"
    },
    "x-dns-prefetch-control": {
        name: "X-DNS-Prefetch-Control",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control"
    },
    "x-forwarded-for": {
        name: "X-Forwarded-For",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"
    },
    "x-forwarded-host": {
        name: "X-Forwarded-Host",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host"
    },
    "x-forwarded-proto": {
        name: "X-Forwarded-Proto",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto"
    },
    "x-frame-options": {
        name: "X-Frame-Options",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"
    },
    "x-xss-protection": {
        name: "X-XSS-Protection",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection"
    },
    "cf-cache-status": {
        name: "Cf-Cache-Status",
        url: "https://developers.cloudflare.com/cache/concepts/default-cache-behavior/#cloudflare-cache-responses"
    },
    "cf-ray": {
        name: "Cf-Ray",
        url: "https://developers.cloudflare.com/fundamentals/get-started/reference/http-request-headers/#cf-ray"
    },
    "report-to": {
        name: "Report-To",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to"
    },
    "x-cloud-trace-context": {
        name: "X-Cloud-Trace-Context",
        url: "https://cloud.google.com/trace/docs/trace-context#legacy-http-header"
    },
    "speculation-rules": {
        name: "Speculation-Rules",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Speculation-Rules"
    }
};
var pc = {
        key: 0,
        class: "max-h-[calc(100%-32px)] overflow-y-auto"
    },
    hc = {
        key: 1,
        class: "text-c-3 bg-b-1 flex min-h-[64px] items-center justify-center border-t px-4 text-sm"
    },
    gc = B({
        __name: "Headers",
        props: {
            headers: {}
        },
        setup(e) {
            const a = t => mc[t.toLowerCase()];
            return (t, n) => (p(), H(u(Ge), {
                class: "overflow-auto",
                defaultOpen: !1,
                itemCount: e.headers.length
            }, {
                title: S(() => [I(t.$slots, "title")]),
                default: S(() => [e.headers.length ? (p(), x("div", pc, [A(u(It), {
                    columns: ["minmax(auto, min-content)", "minmax(50%, 1fr)"],
                    scroll: ""
                }, {
                    default: S(() => [A(u(Ke), {
                        class: "sr-only !block"
                    }, {
                        default: S(() => [A(u(qe), null, {
                            default: S(() => [...n[0] || (n[0] = [Y("Header Key", -1)])]),
                            _: 1
                        }), A(u(qe), null, {
                            default: S(() => [...n[1] || (n[1] = [Y("Header Value", -1)])]),
                            _: 1
                        })]),
                        _: 1
                    }), (p(!0), x(le, null, Ae(e.headers, r => (p(), H(u(Ke), {
                        key: r.name,
                        class: "group/row text-c-1"
                    }, {
                        default: S(() => [A(u(ea), {
                            class: "bg-b-1 sticky left-0 z-1 max-w-full group-first/row:border-t-0"
                        }, {
                            default: S(() => {
                                var o;
                                return [typeof((o = a(r.name)) == null ? void 0 : o.url) == "string" ? (p(), H(oo, {
                                    key: 0,
                                    class: "decoration-c-3",
                                    href: a(r.name).url
                                }, {
                                    default: S(() => [Y(K(r.name), 1)]),
                                    _: 2
                                }, 1032, ["href"])) : (p(), x(le, {
                                    key: 1
                                }, [Y(K(r.name), 1)], 64))]
                            }),
                            _: 2
                        }, 1024), A(u(ea), {
                            class: "z-0 group-first/row:border-t-0",
                            text: r.value
                        }, null, 8, ["text"])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                })])) : (p(), x("div", hc, " No headers "))]),
                _: 3
            }, 8, ["itemCount"]))
        }
    }),
    Nn = gc,
    yc = e => {
        try {
            return decodeURIComponent(e)
        } catch {
            return e
        }
    };

function bc(e) {
    var t, n;
    let a = "";
    if (e) {
        const r = ((t = e.match(/filename\*=UTF-8''([^;]+)/)) == null ? void 0 : t[1]) ?? ((n = e.match(/filename\s*=\s*"?([^";]+)"?/)) == null ? void 0 : n[1]);
        r && (a = yc(r.trim()))
    }
    return a
}
var Sc = e => e instanceof Blob;

function lo({
    data: e,
    headers: a
}) {
    var n, r;
    const t = jr((n = a.find(o => o.name.toLowerCase() === "content-type")) == null ? void 0 : n.value);
    return {
        mimeType: t,
        attachmentFilename: bc(((r = a.find(o => o.name.toLowerCase() === "content-disposition")) == null ? void 0 : r.value) ?? ""),
        dataUrl: Sc(e) ? URL.createObjectURL(e) : typeof e == "string" ? URL.createObjectURL(new Blob([e], {
            type: t ? t.toString() : void 0
        })) : e instanceof Object && Object.keys(e).length ? URL.createObjectURL(new Blob([JSON.stringify(e)], {
            type: t ? t.toString() : void 0
        })) : ""
    }
}
var xc = ["download", "href"],
    wc = B({
        __name: "ResponseBodyDownload",
        props: {
            href: {},
            type: {},
            filename: {}
        },
        setup(e) {
            const a = e,
                t = T(() => {
                    var r;
                    const n = ((r = Tr(a.type ?? "")) == null ? void 0 : r.extension) ?? ".unknown";
                    return a.filename ? a.filename : `response${n}`
                });
            return (n, r) => (p(), x("a", {
                class: "text-c-3 text-xxs hover:bg-b-3 flex items-center gap-1 rounded px-1.5 py-0.5 no-underline",
                download: `${t.value}`,
                href: e.href,
                onClick: r[0] || (r[0] = Ze(() => {}, ["stop"]))
            }, [A(u(me), {
                icon: "Download",
                size: "xs"
            }), r[1] || (r[1] = b("span", null, [b("span", null, "Download"), b("span", {
                class: "sr-only"
            }, "Response Body")], -1))], 8, xc))
        }
    }),
    so = wc,
    Ac = {},
    Tc = {
        class: "flex justify-center px-2 py-3"
    },
    kc = {
        class: "text-c-3 p-2 text-sm"
    };

function Cc(e, a) {
    return p(), x("div", Tc, [b("div", kc, [I(e.$slots, "default")])])
}
var io = ce(Ac, [
        ["render", Cc]
    ]),
    Hc = {
        tabSize: 2,
        insertSpaces: !0,
        eol: `
`
    };

function Pc(e) {
    try {
        const a = Wl(e, void 0, Hc);
        if (a.length > 0) return jl(e, a)
    } catch {}
    return e
}
var Bc = {
        class: "scalar-code-block group/code-block relative grid min-h-0 overflow-hidden p-px outline-none has-focus-visible:outline",
        "data-testid": "response-body-raw"
    },
    Mc = {
        class: "custom-scroll relative pr-1",
        tabindex: "0"
    },
    Ec = B({
        __name: "ResponseBodyRaw",
        props: {
            content: {},
            language: {},
            prettyPrintJson: {
                type: Boolean
            }
        },
        setup(e) {
            const a = e,
                t = E(null),
                n = be(),
                {
                    codeMirror: r
                } = Kl({
                    codeMirrorRef: t,
                    readOnly: !0,
                    lineNumbers: !0,
                    content: Ia(T(() => {
                        const {
                            content: l,
                            language: s,
                            prettyPrintJson: i = !1
                        } = a;
                        return typeof l != "string" ? l == null ? "" : String(l) : i && s === "json" ? Pc(l) : l
                    })),
                    language: Ia(() => a.language),
                    forceFoldGutter: !0
                }),
                o = () => {
                    var l;
                    return ((l = r.value) == null ? void 0 : l.state.doc.toString()) || ""
                };
            return (l, s) => (p(), x("div", Bc, [b("div", Mc, [b("div", {
                ref_key: "codeMirrorRef",
                ref: t
            }, null, 512)]), o() ? (p(), H(u(Gl), {
                key: 0,
                "aria-controls": u(n),
                class: "absolute top-2 right-2",
                content: o()
            }, null, 8, ["aria-controls", "content"])) : U("", !0)]))
        }
    }),
    uo = ce(Ec, [
        ["__scopeId", "data-v-8c1df828"]
    ]),
    Rc = ["src"],
    Ic = ["src", "type"],
    Oc = ["src", "type"],
    Vc = ["src", "sandbox"],
    $c = B({
        __name: "ResponseBodyPreview",
        props: {
            src: {},
            type: {},
            mode: {},
            alpha: {
                type: Boolean,
                default: !1
            },
            content: {}
        },
        setup(e) {
            const a = T(() => {
                    const o = e.content;
                    return typeof o == "string" ? o : o == null ? "" : String(o)
                }),
                t = T(() => {
                    if (!e.src) return "";
                    if (/^data:/i.test(e.src)) return /^data:(?:(?:image|video|audio)\/[a-z0-9.+-]+|application\/pdf|application\/octet-stream)[;,]/i.test(e.src) ? e.src : "";
                    try {
                        const o = new URL(e.src);
                        if (o.protocol === "blob:" || o.protocol === "http:" || o.protocol === "https:") return e.src
                    } catch {}
                    return ""
                }),
                n = E(!1),
                r = T(() => e.type.trim().toLowerCase() === "application/pdf");
            return oe(() => e.src, () => n.value = !1), (o, l) => e.mode === "json" ? (p(), H(uo, {
                key: 0,
                content: a.value,
                language: "json",
                prettyPrintJson: ""
            }, null, 8, ["content"])) : !n.value && t.value ? (p(), x("div", {
                key: 1,
                class: re(["flex justify-center overflow-auto rounded-b", {
                    "bg-preview p-2": e.alpha
                }])
            }, [e.mode === "image" ? (p(), x("img", {
                key: 0,
                class: re(["h-full max-w-full", {
                    rounded: e.alpha
                }]),
                src: t.value,
                referrerpolicy: "no-referrer",
                onError: l[0] || (l[0] = s => n.value = !0)
            }, null, 42, Rc)) : e.mode === "video" ? (p(), x("video", {
                key: 1,
                autoplay: "",
                controls: "",
                referrerpolicy: "no-referrer",
                width: "100%",
                onError: l[1] || (l[1] = s => n.value = !0)
            }, [b("source", {
                src: t.value,
                type: e.type
            }, null, 8, Ic)], 32)) : e.mode === "audio" ? (p(), x("audio", {
                key: 2,
                class: "my-12",
                controls: "",
                referrerpolicy: "no-referrer",
                onError: l[2] || (l[2] = s => n.value = !0)
            }, [b("source", {
                src: t.value,
                type: e.type
            }, null, 8, Oc)], 32)) : (p(), x("iframe", {
                key: 3,
                class: "aspect-[4/3] w-full border-0",
                src: t.value,
                sandbox: r.value ? void 0 : "",
                referrerpolicy: "no-referrer"
            }, null, 8, Vc))], 2)) : (p(), H(io, {
                key: 2
            }, {
                default: S(() => [...l[3] || (l[3] = [Y("Preview unavailable", -1)])]),
                _: 1
            }))
        }
    }),
    Lc = ce($c, [
        ["__scopeId", "data-v-8bc927e4"]
    ]),
    Uc = {
        class: "text-c-3 text-xxs -my-1 flex justify-center gap-0.5 rounded p-0.5"
    },
    Dc = B({
        __name: "ResponseBodyToggle",
        props: {
            modelValue: {
                type: Boolean
            }
        },
        emits: ["update:modelValue"],
        setup(e) {
            return (a, t) => (p(), x("div", Uc, [b("button", {
                class: re(["hover:bg-b-3 rounded px-1", {
                    "bg-b-3 text-c-1 cursor-default": e.modelValue
                }]),
                type: "button",
                onClick: t[0] || (t[0] = Ze(n => a.$emit("update:modelValue", !0), ["stop"]))
            }, " Preview ", 2), b("button", {
                class: re(["hover:bg-b-3 rounded px-1", {
                    "bg-b-3 text-c-1 cursor-default": !e.modelValue
                }]),
                type: "button",
                onClick: t[1] || (t[1] = Ze(n => a.$emit("update:modelValue", !1), ["stop"]))
            }, " Raw ", 2)]))
        }
    }),
    zc = Dc,
    Zc = {
        key: 0,
        class: "bg-b-1 flex max-h-[calc(100%-32px)] flex-col overflow-hidden"
    },
    Nc = {
        class: "box-content flex min-h-8 items-center justify-between border-y px-3"
    },
    Fc = {
        class: "text-xxs font-code leading-5"
    },
    qc = B({
        __name: "ResponseBody",
        props: {
            title: {},
            layout: {},
            data: {},
            headers: {},
            plugins: {
                default: () => []
            }
        },
        setup(e) {
            const a = E(!0),
                t = T(() => lo({
                    data: e.data,
                    headers: e.headers
                })),
                n = T(() => t.value.mimeType.essence),
                r = T(() => Tr(n.value)),
                o = T(() => qr(n.value, e.plugins)),
                l = T(() => {
                    var v, m, g;
                    return !!((v = o.value) != null && v.rawComponent) || !!((m = o.value) != null && m.decode) || !!((g = r.value) != null && g.raw)
                }),
                s = T(() => {
                    var v, m;
                    return !!((v = o.value) != null && v.previewComponent) || !!((m = r.value) != null && m.preview)
                }),
                i = T(() => l.value && s.value),
                c = T(() => a.value || !i.value),
                f = T(() => !a.value || !i.value),
                d = T(() => {
                    var v, m;
                    return ((v = o.value) == null ? void 0 : v.language) ?? ((m = r.value) == null ? void 0 : m.language)
                });
            return (v, m) => (p(), H(u(Ge), {
                class: "max-h-content overflow-y-hidden",
                isStatic: e.layout === "reference"
            }, bt({
                title: S(() => [Y(K(e.title), 1)]),
                default: S(() => {
                    var g, y, h, w;
                    return [e.data ? (p(), x("div", Zc, [b("div", Nc, [b("span", Fc, K(n.value), 1), i.value ? (p(), H(zc, {
                        key: 0,
                        modelValue: a.value,
                        "onUpdate:modelValue": m[0] || (m[0] = P => a.value = P)
                    }, null, 8, ["modelValue"])) : U("", !0)]), (g = o.value) != null && g.previewComponent && s.value && c.value ? (p(), H(Ht(o.value.previewComponent), {
                        key: `plugin-preview-${t.value.dataUrl}`,
                        content: e.data,
                        contentType: n.value,
                        dataUrl: t.value.dataUrl
                    }, null, 8, ["content", "contentType", "dataUrl"])) : (y = r.value) != null && y.preview && c.value ? (p(), H(Lc, {
                        key: `preview-${t.value.dataUrl}`,
                        alpha: r.value.alpha,
                        content: e.data,
                        mode: r.value.preview,
                        src: t.value.dataUrl,
                        type: n.value
                    }, null, 8, ["alpha", "content", "mode", "src", "type"])) : U("", !0), (h = o.value) != null && h.rawComponent && l.value && f.value ? (p(), H(Ht(o.value.rawComponent), {
                        key: `plugin-raw-${t.value.dataUrl}`,
                        content: e.data,
                        contentType: n.value
                    }, null, 8, ["content", "contentType"])) : l.value && f.value && !((w = o.value) != null && w.rawComponent) ? (p(), H(uo, {
                        key: `raw-${t.value.dataUrl}`,
                        content: e.data,
                        language: d.value
                    }, null, 8, ["content", "language"])) : U("", !0), !l.value && !s.value ? (p(), H(io, {
                        key: 4
                    }, {
                        default: S(() => [...m[1] || (m[1] = [Y(" Binary file ", -1)])]),
                        _: 1
                    })) : U("", !0)])) : U("", !0)]
                }),
                _: 2
            }, [e.data && t.value.dataUrl ? {
                name: "actions",
                fn: S(() => {
                    var g;
                    return [A(so, {
                        filename: t.value.attachmentFilename,
                        href: t.value.dataUrl,
                        type: (g = t.value.mimeType) == null ? void 0 : g.essence
                    }, null, 8, ["filename", "href", "type"])]
                }),
                key: "0"
            } : void 0]), 1032, ["isStatic"]))
        }
    }),
    Wc = ce(qc, [
        ["__scopeId", "data-v-bb31ac6f"]
    ]),
    jc = {
        class: "flex w-full items-center justify-between"
    },
    Kc = {
        key: 0,
        class: "mr-2 flex items-center gap-2"
    },
    Gc = {
        key: 0,
        class: "text-red bg-b-danger sticky top-0 border-b p-2"
    },
    Yc = {
        key: 1,
        class: "p-2"
    },
    Xc = B({
        __name: "ResponseBodyStreaming",
        props: {
            reader: {}
        },
        setup(e) {
            const a = kr(),
                t = E(""),
                n = E(null),
                r = E(null),
                o = E(null),
                l = E(null),
                s = () => {
                    r.value && (r.value.scrollTop = r.value.scrollHeight)
                };
            oe(t, async () => {
                await de(s)
            });
            async function i(d) {
                try {
                    for (; a.isLoading && o.value === d;) {
                        const {
                            done: v,
                            value: m
                        } = await d.read();
                        if (o.value !== d) break;
                        if (v) {
                            a.clear();
                            break
                        }
                        m && l.value && (t.value += l.value.decode(m, {
                            stream: !0
                        }))
                    }
                } catch (v) {
                    o.value === d && (console.error("Error reading stream:", v), a.clear(), n.value = v)
                } finally {
                    o.value === d && l.value && (t.value += l.value.decode())
                }
            }
            const c = () => {
                    o.value && o.value.cancel(), o.value = e.reader, l.value = new TextDecoder, a.start(), t.value = "", n.value = null, i(e.reader)
                },
                f = () => {
                    o.value && (o.value.cancel(), o.value = null), a.clear()
                };
            return oe(() => e.reader, c, {
                immediate: !0
            }), Oe(f), (d, v) => (p(), H(u(Ge), {
                class: "max-h-content overflow-y-hidden"
            }, bt({
                title: S(() => [b("div", jc, [v[1] || (v[1] = b("div", null, "Body", -1)), u(a).isLoading ? (p(), x("div", Kc, [A(u(Ya), {
                    loadingState: u(a),
                    size: "xs"
                }, null, 8, ["loadingState"]), v[0] || (v[0] = b("span", {
                    class: "text-c-2"
                }, " Listening… ", -1))])) : U("", !0)])]),
                default: S(() => [b("div", {
                    ref_key: "contentContainer",
                    ref: r,
                    class: "text-xxs font-code h-full overflow-auto leading-6 whitespace-pre-wrap"
                }, [n.value ? (p(), x("div", Gc, K(n.value.message), 1)) : U("", !0), t.value ? (p(), x("div", Yc, K(t.value), 1)) : U("", !0)], 512)]),
                _: 2
            }, [u(a).isLoading ? {
                name: "actions",
                fn: S(() => [A(u(ye), {
                    size: "sm",
                    variant: "ghost",
                    onClick: f
                }, {
                    default: S(() => [...v[2] || (v[2] = [Y(" Cancel ", -1)])]),
                    _: 1
                })]),
                key: "0"
            } : void 0]), 1024))
        }
    }),
    Qc = Xc,
    Jc = B({
        __name: "ResponseBodyVirtual",
        props: {
            content: {},
            data: {},
            headers: {}
        },
        setup(e) {
            const a = T(() => Xl(e.content)),
                t = T(() => lo({
                    data: e.data,
                    headers: e.headers
                }));
            return (n, r) => (p(), H(u(Ge), {
                class: "!max-h-100% response-body-virtual overflow-x-auto"
            }, bt({
                title: S(() => [r[0] || (r[0] = Y("Body", -1))]),
                default: S(() => [r[1] || (r[1] = b("div", {
                    class: "font-code text-xxs rounded-t border-x border-t px-2.5 py-1.5"
                }, " This response body is massive! Syntax highlighting won't work here. ", -1)), A(u(Yl), {
                    containerClass: "custom-scroll scalar-code-block border rounded-b flex flex-1 max-h-screen",
                    contentClass: "language-plaintext whitespace-pre font-code text-base",
                    lineHeight: 20,
                    searchable: "",
                    text: a.value
                }, null, 8, ["text"])]),
                _: 2
            }, [t.value.dataUrl ? {
                name: "actions",
                fn: S(() => {
                    var o;
                    return [A(so, {
                        filename: t.value.attachmentFilename,
                        href: t.value.dataUrl,
                        type: (o = t.value.mimeType) == null ? void 0 : o.essence
                    }, null, 8, ["filename", "href", "type"])]
                }),
                key: "0"
            } : void 0]), 1024))
        }
    }),
    _c = Jc,
    e1 = {
        key: 0,
        class: "max-h-[calc(100%-32px)] overflow-y-auto"
    },
    t1 = {
        key: 1,
        class: "text-c-3 bg-b-1 flex min-h-[64px] items-center justify-center border-t px-4 text-sm"
    },
    a1 = B({
        __name: "ResponseCookies",
        props: {
            cookies: {}
        },
        setup(e) {
            return (a, t) => (p(), H(u(Ge), {
                class: "overflow-auto",
                defaultOpen: !1,
                itemCount: e.cookies.length
            }, {
                title: S(() => [...t[0] || (t[0] = [Y("Cookies", -1)])]),
                default: S(() => [e.cookies.length ? (p(), x("div", e1, [A(u(It), {
                    columns: ["minmax(auto, min-content)", "minmax(50%, 1fr)"],
                    scroll: ""
                }, {
                    default: S(() => [A(u(Ke), {
                        class: "sr-only !block"
                    }, {
                        default: S(() => [A(u(qe), null, {
                            default: S(() => [...t[1] || (t[1] = [Y("Cookie Name", -1)])]),
                            _: 1
                        }), A(u(qe), null, {
                            default: S(() => [...t[2] || (t[2] = [Y("Cookie Value", -1)])]),
                            _: 1
                        })]),
                        _: 1
                    }), (p(!0), x(le, null, Ae(e.cookies, (n, r) => (p(), H(u(Ke), {
                        key: n.name,
                        class: "group/row text-c-1"
                    }, {
                        default: S(() => [A(u(ea), {
                            class: re(["bg-b-1 sticky left-0 z-1 max-w-full", {
                                "border-t-0": r === 0
                            }]),
                            text: n.name
                        }, null, 8, ["class", "text"]), A(u(ea), {
                            class: re(["z-0", {
                                "border-t-0": r === 0
                            }]),
                            text: n.value
                        }, null, 8, ["class", "text"])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                })])) : (p(), x("div", t1, " No cookies "))]),
                _: 1
            }, 8, ["itemCount"]))
        }
    }),
    n1 = a1,
    Fn = 500,
    xa = 100,
    r1 = B({
        __name: "ScalarAsciiArt",
        props: {
            art: {},
            animate: {
                type: Boolean
            }
        },
        setup(e) {
            const a = e,
                t = T(() => a.art.split(`
`)),
                n = (r, o) => {
                    var l, s, i, c;
                    return {
                        animationDuration: `${r*xa}ms, ${Fn}ms`,
                        animationTimingFunction: `steps(${r}), step-end`,
                        animationDelay: `${o*xa}ms, 0ms`,
                        animationIterationCount: `1, ${((((l=t.value)==null?void 0:l.length)??0)+(((c=(i=t.value)==null?void 0:i[((s=t.value)==null?void 0:s.length)-1])==null?void 0:c.length)??0)+5)*xa/Fn}`
                    }
                };
            return (r, o) => (p(), x("div", {
                "aria-hidden": "true",
                class: re(["ascii-art font-code flex flex-col items-start text-[6px] leading-[7px]", {
                    "ascii-art-animate": e.animate
                }]),
                role: "presentation",
                inert: ""
            }, [(p(!0), x(le, null, Ae(t.value, (l, s) => (p(), x("span", {
                key: s,
                class: "inline-block",
                style: Le({
                    width: `calc(${l.length+1}ch)`
                })
            }, [b("span", {
                class: "inline-block whitespace-pre overflow-hidden",
                style: Le(n(l.length, s))
            }, K(l), 5)], 4))), 128))], 2))
        }
    }),
    o1 = ce(r1, [
        ["__scopeId", "data-v-9a695e58"]
    ]),
    l1 = `                         .,,uod8B8bou,,.
                ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
           ||||||||||||||!?TFPRBBBBBBBBBBBBBBB8m=,
           ||||   '""^^!!||||||||||TFPRBBBVT!:...!
           ||||            '""^^!!|||||?!:.......!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||,                    ||||.........\`
           |||||!!-._               ||||.......;.
           ':!|||||||||!!-._        ||||.....bBBBBWdou,.
         bBBBBB86foi!|||||||!!-..:|||!..bBBBBBBBBBBBBBBY!
         ::!?TFPRBBBBBB86foi!||||||||!!bBBBBBBBBBBBBBBY..!
         :::::::::!?TFPRBBBBBB86ftiaabBBBBBBBBBBBBBBY....!
         :::;\`"^!:;::::::!?TFPRBBBBBBBBBBBBBBBBBBBY......!
         ;::::::...''^::::::::::!?TFPRBBBBBBBBBBY........!
     .ob86foi;::::::::::::::::::::::::!?TFPRBY..........\`
    .b888888888886foi;:::::::::::::::::::::::..........\`
 .b888888888888888888886foi;::::::::::::::::..........
.b888888888888888888888888888886foi;:::::::::......\`
!Tf998888888888888888888888888888888886foi;:::....\`
  '"^!|Tf9988888888888888888888888888888888!::..\`
       '"^!|Tf998888888888888888888888889!! '\`
             '"^!|Tf9988888888888888888!!\`            iBBbo.
                  '"^!|Tf998888888889!\`             WBBBBbo.
                        '"^!|Tf9989!\`              YBBBP^'
                              '"^!\`               \`
`,
    s1 = {
        class: "flex-center relative flex flex-1 flex-col gap-6 p-2 capitalize"
    },
    i1 = {
        key: 0,
        class: "scalar-version-number"
    },
    u1 = {
        class: "text-c-3 right-4 mt-auto flex w-full flex-col items-end gap-2 text-sm"
    },
    d1 = B({
        __name: "ResponseEmpty",
        props: {
            layout: {},
            totalPerformedRequests: {},
            appVersion: {}
        },
        emits: ["addRequest", "sendRequest", "openCommandPalette"],
        setup(e, {
            emit: a
        }) {
            const t = a;
            return (n, r) => (p(), x("div", s1, [b("div", {
                class: re(["flex h-[calc(100%_-_50px)] flex-col items-center justify-center", {
                    "hidden opacity-0": e.totalPerformedRequests > 0 && e.layout !== "modal"
                }])
            }, [e.layout !== "modal" ? (p(), x("div", i1, [Y(" Scalar App V" + K(e.appVersion) + " Beta ", 1), r[3] || (r[3] = b("div", {
                class: "mt-2"
            }, [b("a", {
                href: "https://github.com/scalar/scalar/issues/2669",
                target: "_blank"
            }, " Roadmap ")], -1))])) : U("", !0), r[4] || (r[4] = b("a", {
                class: "gitbook-show scalar-version-number",
                href: "https://www.scalar.com",
                target: "_blank"
            }, " Powered By Scalar.com ", -1)), A(u(o1), {
                art: u(l1),
                class: "text-c-3"
            }, null, 8, ["art"])], 2), b("div", u1, [e.layout !== "modal" ? (p(), x("button", {
                key: 0,
                class: "flex items-center gap-1.5",
                type: "button",
                onClick: r[0] || (r[0] = o => t("openCommandPalette"))
            }, [r[5] || (r[5] = Y(" Get Started ", -1)), A(u(ba), {
                hotkey: "k",
                modifier: ["default"]
            })])) : U("", !0), e.layout === "desktop" ? (p(), x("button", {
                key: 1,
                class: "flex items-center gap-1.5",
                type: "button",
                onClick: r[1] || (r[1] = o => t("addRequest"))
            }, [r[6] || (r[6] = Y(" New Request ", -1)), A(u(ba), {
                hotkey: "N"
            })])) : U("", !0), b("button", {
                class: "flex items-center gap-1.5",
                type: "button",
                onClick: r[2] || (r[2] = o => t("sendRequest"))
            }, [r[7] || (r[7] = Y(" Send Request ", -1)), A(u(ba), {
                hotkey: "↵"
            })])])]))
        }
    }),
    c1 = ce(d1, [
        ["__scopeId", "data-v-0895623d"]
    ]),
    v1 = {
        key: 0,
        class: "bg-b-1 z-overlay absolute inset-0 flex flex-col items-center justify-center gap-6"
    },
    f1 = B({
        __name: "ResponseLoadingOverlay",
        props: {
            eventBus: {}
        },
        setup(e) {
            const a = kr(),
                t = E(),
                n = () => {
                    clearTimeout(t.value), t.value = setTimeout(() => a.start(), 1e3)
                },
                r = () => {
                    clearTimeout(t.value), t.value = void 0, a.clear()
                };
            return Pe(() => {
                e.eventBus.on("hooks:on:request:sent", n), e.eventBus.on("hooks:on:request:complete", r)
            }), Oe(() => {
                e.eventBus.off("hooks:on:request:sent", n), e.eventBus.off("hooks:on:request:complete", r), r()
            }), (o, l) => (p(), H(Ql, null, {
                default: S(() => [u(a).isActive ? (p(), x("div", v1, [A(u(Ya), {
                    class: "text-c-3",
                    loader: u(a),
                    size: "3xl"
                }, null, 8, ["loader"]), A(u(ye), {
                    variant: "ghost",
                    onClick: l[0] || (l[0] = s => e.eventBus.emit("operation:cancel:request"))
                }, {
                    default: S(() => [...l[1] || (l[1] = [Y(" Cancel ", -1)])]),
                    _: 1
                })])) : U("", !0)]),
                _: 1
            }))
        }
    }),
    m1 = ce(f1, [
        ["__scopeId", "data-v-b80db6e2"]
    ]);
const wa = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    p1 = (e, a = 3) => {
        if (!Number.isFinite(e) || e <= 0) return "0 B";
        let t = Math.max(0, Math.min(Math.floor(Math.log10(e) / 3), wa.length - 1));
        return Number((e / 1e3 ** t).toPrecision(a)) >= 1e3 && t < wa.length - 1 && (t += 1), `${Number((e/1e3**t).toPrecision(a))} ${wa[t]}`
    };
var qn = e => {
    var t, n;
    const a = Number.parseInt(((t = e.headers) == null ? void 0 : t["Content-Length"]) || ((n = e.headers) == null ? void 0 : n["content-length"]) || "0", 10);
    if (!(isNaN(a) || a <= 0)) return p1(a)
};
const Wn = e => Number.isFinite(e) ? e : 0;

function h1(e) {
    return {
        days: Math.trunc(e / 864e5),
        hours: Math.trunc(e / 36e5 % 24),
        minutes: Math.trunc(e / 6e4 % 60),
        seconds: Math.trunc(e / 1e3 % 60),
        milliseconds: Math.trunc(e % 1e3),
        microseconds: Math.trunc(Wn(e * 1e3) % 1e3),
        nanoseconds: Math.trunc(Wn(e * 1e6) % 1e3)
    }
}

function g1(e) {
    return {
        days: e / 86400000n,
        hours: e / 3600000n % 24n,
        minutes: e / 60000n % 60n,
        seconds: e / 1000n % 60n,
        milliseconds: e % 1000n,
        microseconds: 0n,
        nanoseconds: 0n
    }
}

function y1(e) {
    switch (typeof e) {
        case "number": {
            if (Number.isFinite(e)) return h1(e);
            break
        }
        case "bigint":
            return g1(e)
    }
    throw new TypeError("Expected a finite number or bigint")
}
const b1 = e => e === 0 || e === 0n,
    S1 = (e, a) => a === 1 || a === 1n ? e : `${e}s`,
    x1 = 1e-7,
    w1 = 24n * 60n * 60n * 1000n;

function jn(e, a) {
    const t = typeof e == "bigint";
    if (!t && !Number.isFinite(e)) throw new TypeError("Expected a finite number or bigint");
    a = {
        ...a
    };
    const n = e < 0 ? "-" : "";
    e = e < 0 ? -e : e, a.colonNotation && (a.compact = !1, a.formatSubMilliseconds = !1, a.separateMilliseconds = !1, a.verbose = !1), a.compact && (a.unitCount = 1, a.secondsDecimalDigits = 0, a.millisecondsDecimalDigits = 0);
    let r = [];
    const o = (f, d) => {
            const v = Math.floor(f * 10 ** d + x1);
            return (Math.round(v) / 10 ** d).toFixed(d)
        },
        l = (f, d, v, m) => {
            if (!((r.length === 0 || !a.colonNotation) && b1(f) && !(a.colonNotation && v === "m"))) {
                if (m ?? (m = String(f)), a.colonNotation) {
                    const g = m.includes(".") ? m.split(".")[0].length : m.length,
                        y = r.length > 0 ? 2 : 1;
                    m = "0".repeat(Math.max(0, y - g)) + m
                } else m += a.verbose ? " " + S1(d, f) : v;
                r.push(m)
            }
        },
        s = y1(e),
        i = BigInt(s.days);
    if (a.hideYearAndDays ? l(BigInt(i) * 24n + BigInt(s.hours), "hour", "h") : (a.hideYear ? l(i, "day", "d") : (l(i / 365n, "year", "y"), l(i % 365n, "day", "d")), l(Number(s.hours), "hour", "h")), l(Number(s.minutes), "minute", "m"), !a.hideSeconds)
        if (a.separateMilliseconds || a.formatSubMilliseconds || !a.colonNotation && e < 1e3 && !a.subSecondsAsDecimals) {
            const f = Number(s.seconds),
                d = Number(s.milliseconds),
                v = Number(s.microseconds),
                m = Number(s.nanoseconds);
            if (l(f, "second", "s"), a.formatSubMilliseconds) l(d, "millisecond", "ms"), l(v, "microsecond", "µs"), l(m, "nanosecond", "ns");
            else {
                const g = d + v / 1e3 + m / 1e6,
                    y = typeof a.millisecondsDecimalDigits == "number" ? a.millisecondsDecimalDigits : 0,
                    h = g >= 1 ? Math.round(g) : Math.ceil(g),
                    w = y ? g.toFixed(y) : h;
                l(Number.parseFloat(w), "millisecond", "ms", w)
            }
        } else {
            const f = (t ? Number(e % w1) : e) / 1e3 % 60,
                d = typeof a.secondsDecimalDigits == "number" ? a.secondsDecimalDigits : 1,
                v = o(f, d),
                m = a.keepDecimalsOnWholeSeconds ? v : v.replace(/\.0+$/, "");
            l(Number.parseFloat(m), "second", "s", m)
        } if (r.length === 0) return n + "0" + (a.verbose ? " milliseconds" : "ms");
    const c = a.colonNotation ? ":" : " ";
    return typeof a.unitCount == "number" && (r = r.slice(0, Math.max(a.unitCount, 1))), n + r.join(c)
}
var A1 = {
        class: "text-c-1 flex gap-1.5"
    },
    T1 = {
        key: 0
    },
    k1 = {
        key: 0
    },
    C1 = {
        key: 1
    },
    H1 = B({
        __name: "ResponseMetaInformation",
        props: {
            response: {},
            eventBus: {}
        },
        setup(e) {
            const a = E(),
                t = E(0),
                n = () => {
                    clearInterval(a.value), a.value = void 0, t.value = 0
                },
                r = () => {
                    a.value = setInterval(() => t.value += 1e3, 1e3)
                };
            Pe(() => {
                e.eventBus.on("hooks:on:request:sent", r), e.eventBus.on("hooks:on:request:complete", n)
            }), Oe(() => {
                e.eventBus.off("hooks:on:request:sent", r), e.eventBus.off("hooks:on:request:complete", n), n()
            });
            const o = T(() => {
                var s;
                const l = (s = e.response) == null ? void 0 : s.status;
                if (l) return ln[l] ?? void 0
            });
            return (l, s) => (p(), x("div", A1, [a.value && t.value ? (p(), x("span", T1, K(u(jn)(t.value)), 1)) : (p(), x(le, {
                key: 1
            }, [b("span", null, [s[0] || (s[0] = b("span", {
                class: "sr-only"
            }, "Response Information, Duration:", -1)), Y(" " + K(u(jn)(e.response.duration)), 1)]), u(qn)(e.response) ? (p(), x("span", k1, [s[1] || (s[1] = b("span", {
                class: "sr-only"
            }, ", Size:", -1)), Y(" " + K(u(qn)(e.response)), 1)])) : U("", !0), o.value ? (p(), x(le, {
                key: 1
            }, [s[2] || (s[2] = b("span", {
                class: "sr-only"
            }, ", Status:", -1)), o.value.url ? (p(), H(oo, {
                key: 0,
                class: "flex items-center gap-1.5",
                href: o.value.url
            }, {
                default: S(() => [Y(K(e.response.status) + " " + K(o.value.name) + " ", 1), b("span", {
                    class: "block h-1.5 w-1.5 rounded-full",
                    style: Le({
                        backgroundColor: o.value.color
                    })
                }, null, 4)]),
                _: 1
            }, 8, ["href"])) : (p(), x("span", C1, [Y(K(e.response.status) + " " + K(o.value.name) + " ", 1), b("span", {
                class: "block h-1.5 w-1.5 rounded-full",
                style: Le({
                    backgroundColor: o.value.color
                })
            }, null, 4)]))], 64)) : U("", !0)], 64))]))
        }
    }),
    P1 = H1,
    B1 = e => {
        if (!e || typeof e != "string") return null;
        const a = e.indexOf("=");
        if (a === -1) return null;
        const t = e.substring(0, a).trim(),
            n = e.substring(a + 1).trim();
        return t ? {
            name: t,
            value: n
        } : null
    },
    M1 = {
        class: "flex h-8 flex-1 items-center"
    },
    E1 = ["id", "role"],
    Kn = 2e5,
    R1 = B({
        __name: "ResponseBlock",
        props: {
            response: {},
            requestPayload: {},
            layout: {},
            totalPerformedRequests: {},
            appVersion: {},
            plugins: {},
            eventBus: {}
        },
        setup(e, {
            expose: a
        }) {
            const t = T(() => {
                    var v;
                    const d = (v = e.response) == null ? void 0 : v.headers;
                    return d ? Object.keys(d).map(m => ({
                        name: m,
                        value: d[m] ?? ""
                    })) : []
                }),
                n = T(() => {
                    var d;
                    return ((d = e.response) == null ? void 0 : d.cookieHeaderKeys.map(v => B1(v)).filter(ht)) ?? []
                }),
                r = ["Cookies", "Headers", "Body"],
                o = E("All"),
                l = T(() => ["All", ...r]),
                s = T(() => Object.fromEntries(l.value.map(d => [d, be()]))),
                i = T(() => {
                    var v, m;
                    if (!e.response || !("size" in e.response)) return !1;
                    const d = ((v = e.response.headers) == null ? void 0 : v["content-type"]) || ((m = e.response.headers) == null ? void 0 : m["Content-Type"]);
                    return !d || (e.response.size ?? 0) <= Kn || d.includes("text/html") ? !1 : Jl.some(g => d.includes(g)) && (e.response.size ?? 0) > Kn
                }),
                c = T(() => {
                    var v, m;
                    const d = (m = (v = e.requestPayload) == null ? void 0 : v[1]) == null ? void 0 : m.headers;
                    return d ? [...new Headers(d)].map(([g, y]) => ({
                        name: g,
                        value: y,
                        required: !1
                    })) : []
                }),
                f = d => o.value === "All" || o.value === d;
            return a({
                responseHeaders: t,
                responseCookies: n,
                requestHeaders: c,
                shouldVirtualize: i,
                activeFilter: o,
                filters: l
            }), (d, v) => (p(), H(Xr, {
                "aria-label": "Response"
            }, {
                title: S(() => [b("div", M1, [b("div", {
                    "aria-live": "polite",
                    class: re(["flex items-center", {
                        "animate-response-heading": e.response
                    }])
                }, [v[4] || (v[4] = b("span", {
                    class: "response-heading pointer-events-none absolute"
                }, " Response ", -1)), e.response ? (p(), H(P1, {
                    key: 0,
                    class: "animate-response-children",
                    eventBus: e.eventBus,
                    response: e.response
                }, null, 8, ["eventBus", "response"])) : U("", !0)], 2), A(Qr, {
                    modelValue: o.value,
                    "onUpdate:modelValue": v[0] || (v[0] = m => o.value = m),
                    filterIds: s.value,
                    filters: l.value
                }, null, 8, ["modelValue", "filterIds", "filters"])])]),
                default: S(() => {
                    var m, g, y;
                    return [b("div", {
                        id: s.value.All,
                        class: re(["custom-scroll response-section-content relative grid h-full justify-stretch", {
                            "content-start": e.response
                        }]),
                        role: o.value === "All" && e.response ? "tabpanel" : "none"
                    }, [e.response ? (p(), x(le, {
                        key: 1
                    }, [f("Cookies") ? (p(), H(n1, {
                        key: 0,
                        id: s.value.Cookies,
                        class: "response-section-content-cookies",
                        cookies: n.value,
                        role: o.value === "All" ? "none" : "tabpanel"
                    }, null, 8, ["id", "cookies", "role"])) : U("", !0), f("Headers") ? (p(), H(Nn, {
                        key: 1,
                        id: s.value.Headers,
                        class: "response-section-content-headers",
                        headers: c.value,
                        role: o.value === "All" ? "none" : "tabpanel"
                    }, {
                        title: S(() => [...v[5] || (v[5] = [Y("Request Headers", -1)])]),
                        _: 1
                    }, 8, ["id", "headers", "role"])) : U("", !0), f("Headers") ? (p(), H(Nn, {
                        key: 2,
                        id: s.value.Headers,
                        class: "response-section-content-headers",
                        headers: t.value,
                        role: o.value === "All" ? "none" : "tabpanel"
                    }, {
                        title: S(() => [...v[6] || (v[6] = [Y("Response Headers", -1)])]),
                        _: 1
                    }, 8, ["id", "headers", "role"])) : U("", !0), (p(!0), x(le, null, Ae(e.plugins, (h, w) => (p(), H(u(en), {
                        key: w
                    }, {
                        default: S(() => {
                            var P;
                            return [(P = h == null ? void 0 : h.components) != null && P.response ? ke((p(), H(Ht(h.components.response.component), _({
                                key: 0,
                                ref_for: !0
                            }, h.components.response.additionalProps), null, 16)), [
                                [Ie, o.value === "All"]
                            ]) : U("", !0)]
                        }),
                        _: 2
                    }, 1024))), 128)), o.value === "All" || o.value === "Body" ? (p(), x(le, {
                        key: 3
                    }, ["reader" in e.response ? (p(), H(Qc, {
                        key: 0,
                        id: s.value.Body,
                        class: "response-section-content-body",
                        reader: e.response.reader
                    }, null, 8, ["id", "reader"])) : i.value && typeof((m = e.response) == null ? void 0 : m.data) == "string" ? (p(), H(_c, {
                        key: 1,
                        id: s.value.Body,
                        content: e.response.data,
                        data: (g = e.response) == null ? void 0 : g.data,
                        headers: t.value,
                        role: o.value === "All" ? "none" : "tabpanel"
                    }, null, 8, ["id", "content", "data", "headers", "role"])) : (p(), H(Wc, {
                        key: 2,
                        id: s.value.Body,
                        active: !0,
                        class: "response-section-content-body",
                        data: (y = e.response) == null ? void 0 : y.data,
                        headers: t.value,
                        layout: "client",
                        plugins: e.plugins,
                        role: o.value === "All" ? "none" : "tabpanel",
                        title: "Body"
                    }, null, 8, ["id", "data", "headers", "plugins", "role"]))], 64)) : U("", !0)], 64)) : (p(), H(c1, {
                        key: 0,
                        appVersion: e.appVersion,
                        layout: e.layout,
                        totalPerformedRequests: e.totalPerformedRequests,
                        onAddRequest: v[1] || (v[1] = h => e.eventBus.emit("ui:open:command-palette", {
                            action: "create-request",
                            payload: void 0
                        })),
                        onOpenCommandPalette: v[2] || (v[2] = h => e.eventBus.emit("ui:open:command-palette")),
                        onSendRequest: v[3] || (v[3] = h => e.eventBus.emit("operation:send:request:hotkey"))
                    }, null, 8, ["appVersion", "layout", "totalPerformedRequests"])), A(m1, {
                        eventBus: e.eventBus
                    }, null, 8, ["eventBus"])], 10, E1)]
                }),
                _: 1
            }))
        }
    }),
    I1 = ce(R1, [
        ["__scopeId", "data-v-7a7c6611"]
    ]),
    O1 = B({
        __name: "HttpMethod",
        props: {
            isSquare: {
                type: Boolean,
                default: !1
            },
            method: {},
            isEditable: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["change"],
        setup(e, {
            emit: a
        }) {
            const t = e,
                n = a,
                r = T(() => kn(t.method)),
                o = yt(Cr).map(([c]) => ({
                    id: c,
                    label: c.toUpperCase(),
                    color: kn(c).colorClass
                })),
                l = T({
                    get: () => o.find(({
                        id: c
                    }) => c === t.method),
                    set: c => (c == null ? void 0 : c.id) && n("change", c.id)
                }),
                s = tn({
                    base: "text-center font-code text-3xs justify-center items-center flex",
                    variants: {
                        isSquare: {
                            true: "px-2.5 whitespace-nowrap font-bold border-r h-fit m-auto",
                            false: "rounded-full"
                        },
                        isEditable: {
                            true: "http-bg-gradient rounded-md border",
                            false: "cursor-auto"
                        }
                    }
                }),
                i = T(() => r.value.short);
            return (c, f) => e.isEditable ? (p(), H(u(wr), {
                key: 0,
                modelValue: l.value,
                "onUpdate:modelValue": f[0] || (f[0] = d => l.value = d),
                class: "font-code scalar-client mt-1 text-sm",
                options: u(o)
            }, {
                default: S(() => [b("div", {
                    class: re(["h-full", {
                        "pointer-events-none": !e.isEditable
                    }])
                }, [b("button", {
                    class: re(["relative h-full", u(Cn)(u(s)({
                        isSquare: e.isSquare,
                        isEditable: e.isEditable
                    }), r.value.colorClass)]),
                    type: "button"
                }, [b("span", null, K(i.value), 1)], 2)], 2)]),
                _: 1
            }, 8, ["modelValue", "options"])) : (p(), x("div", {
                key: 1,
                class: re(["relative gap-1 whitespace-nowrap", u(Cn)(u(s)({
                    isSquare: e.isSquare,
                    isEditable: e.isEditable
                }), r.value.colorClass)]),
                type: "button"
            }, K(r.value.short), 3))
        }
    }),
    Fa = ce(O1, [
        ["__scopeId", "data-v-86e2b3ea"]
    ]),
    V1 = /^\/_scalar_temp[a-f0-9]*$/i,
    $1 = (e, a) => a.toLowerCase() === "drafts" && e === "/" ? !0 : V1.test(e),
    L1 = e => {
        if (!e) return;
        const a = document.querySelector(e);
        if (a instanceof HTMLButtonElement) {
            a.click();
            return
        }(a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement || a instanceof HTMLElement && a.getAttribute("contenteditable") === "true") && a.focus()
    },
    co = 20,
    Gn = 100,
    U1 = 0,
    D1 = 15,
    z1 = 60,
    Z1 = 400 / co,
    N1 = () => {
        const e = E(Gn),
            a = E(0),
            t = E(!1),
            n = E(),
            r = () => {
                clearInterval(n.value), n.value = void 0, e.value = Gn, t.value = !1
            },
            o = () => {
                t.value ? e.value -= (e.value - D1) / z1 : e.value -= a.value / Z1, e.value <= U1 && r()
            };
        return {
            startLoading: () => {
                if (n.value) {
                    t.value = !0;
                    return
                }
                t.value = !0, n.value = setInterval(o, co)
            },
            stopLoading: () => {
                a.value = e.value, t.value = !1
            },
            percentage: e,
            isLoading: t
        }
    },
    F1 = ({
        isReady: e,
        operationKey: a,
        shouldMask: t,
        onMask: n
    }) => {
        oe([e, a], ([r]) => {
            r && t() && n()
        }, {
            flush: "post"
        })
    },
    q1 = ["aria-expanded"],
    W1 = {
        class: "overflow-hidden text-ellipsis whitespace-nowrap"
    },
    j1 = ["id"],
    K1 = {
        key: 0
    },
    G1 = {
        class: "description text-c-3 px-3 py-1.5"
    },
    Y1 = B({
        __name: "ServerDropdownItem",
        props: {
            server: {},
            serverOption: {}
        },
        emits: ["update:variable", "update:selectedServer"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = be(),
                r = () => {
                    var s;
                    return Object.keys(((s = e.server) == null ? void 0 : s.variables) ?? {}).length > 0
                },
                o = T(() => {
                    var s;
                    return e.serverOption.id === ((s = e.server) == null ? void 0 : s.url)
                }),
                l = T(() => o.value && r());
            return (s, i) => {
                var c, f;
                return p(), x("div", {
                    class: re(["group/item flex min-h-fit flex-col rounded border", {
                        "border-transparent": !o.value
                    }])
                }, [b("button", _(l.value ? {
                    "aria-controls": u(n)
                } : {}, {
                    "aria-expanded": l.value,
                    class: ["flex min-h-8 cursor-pointer items-center gap-1.5 rounded px-1.5", o.value ? "text-c-1 bg-b-2" : "hover:bg-b-2"],
                    type: "button",
                    onClick: i[0] || (i[0] = d => t("update:selectedServer"))
                }), [A(u(Hr), {
                    selected: o.value
                }, null, 8, ["selected"]), b("span", W1, K(e.serverOption.label), 1)], 16, q1), l.value ? (p(), x("div", {
                    key: 0,
                    id: u(n),
                    class: "bg-b-2 divide divide-y rounded-b border-t *:pl-4",
                    onClick: i[2] || (i[2] = Ze(() => {}, ["stop"]))
                }, [A(_l, {
                    variables: (c = e.server) == null ? void 0 : c.variables,
                    "onUpdate:variable": i[1] || (i[1] = (d, v) => t("update:variable", d, v))
                }, null, 8, ["variables"]), (f = e.server) != null && f.description ? (p(), x("div", K1, [b("div", G1, [A(u(Sr), {
                    value: e.server.description
                }, null, 8, ["value"])])])) : U("", !0)], 8, j1)) : U("", !0)], 2)
            }
        }
    }),
    X1 = ce(Y1, [
        ["__scopeId", "data-v-649f9a0d"]
    ]),
    Q1 = ["onClick"],
    J1 = {
        class: "flex items-center justify-center"
    },
    _1 = B({
        name: "ServerDropdown",
        props: {
            meta: {},
            servers: {},
            server: {},
            target: {},
            layout: {}
        },
        emits: ["update:selectedServer", "update:variable", "update:servers", "update:open"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = T(() => e.servers.map(o => ({
                    id: o.url,
                    label: o.url ?? "Unknown server"
                }))),
                r = T(() => {
                    var o, l, s;
                    return (l = (o = e.server) == null ? void 0 : o.url) != null && l.endsWith("/") ? e.server.url.slice(0, -1) : ((s = e.server) == null ? void 0 : s.url) || ""
                });
            return (o, l) => (p(), H(u(xr), {
                class: "max-h-[inherit] p-0 text-base",
                focus: "",
                offset: 0,
                placement: "bottom",
                resize: "",
                target: e.target,
                teleport: `#${e.target}`
            }, {
                popover: S(({
                    close: s
                }) => [b("div", {
                    class: "custom-scroll flex max-h-[inherit] flex-col gap-1 p-1",
                    onClick: s
                }, [(p(!0), x(le, null, Ae(n.value, (i, c) => (p(), H(X1, {
                    key: i.id,
                    server: e.server,
                    serverOption: i,
                    type: "request",
                    "onUpdate:selectedServer": f => t("update:selectedServer", {
                        url: i.id,
                        meta: e.meta
                    }),
                    "onUpdate:variable": (f, d) => t("update:variable", {
                        index: c,
                        key: f,
                        value: d,
                        meta: e.meta
                    })
                }, null, 8, ["server", "serverOption", "onUpdate:selectedServer", "onUpdate:variable"]))), 128)), e.layout !== "modal" ? (p(), x("button", {
                    key: 0,
                    class: "text-xxs hover:bg-b-2 flex cursor-pointer items-center gap-1.5 rounded p-1.75",
                    type: "button",
                    onClick: l[0] || (l[0] = i => t("update:servers"))
                }, [b("div", J1, [A(u(es), {
                    class: "size-4"
                })]), l[5] || (l[5] = b("span", null, "Update Servers", -1))])) : U("", !0)], 8, Q1)]),
                backdrop: S(({
                    open: s
                }) => [A(Br, {
                    value: s,
                    onChange: l[1] || (l[1] = i => t("update:open", i)),
                    onUnmount: l[2] || (l[2] = i => t("update:open", !1))
                }, null, 8, ["value"]), A(u(Mr), {
                    class: "inset-x-px rounded-none rounded-b-lg"
                })]),
                default: S(() => [A(u(ye), {
                    class: "hover:bg-b-2 font-code text-c-2 h-auto gap-0.75 rounded border px-1.5 text-base whitespace-nowrap @3xl:ml-0.75",
                    variant: "ghost"
                }, {
                    default: S(() => [e.server ? (p(), x(le, {
                        key: 0
                    }, [l[3] || (l[3] = b("span", {
                        class: "sr-only"
                    }, "Server:", -1)), Y(" " + K(r.value), 1)], 64)) : (p(), x(le, {
                        key: 1
                    }, [l[4] || (l[4] = b("span", {
                        class: "sr-only"
                    }, "Add Server", -1)), A(u(Pr), {
                        class: "size-3"
                    })], 64))]),
                    _: 1
                })]),
                _: 1
            }, 8, ["target", "teleport"]))
        }
    }),
    ev = _1,
    tv = {
        100: {
            color: "text-yellow"
        },
        200: {
            color: "text-green"
        },
        202: {
            color: "text-green"
        },
        300: {
            color: "text-blue"
        },
        304: {
            color: "text-blue"
        },
        400: {
            color: "text-red"
        },
        401: {
            color: "text-orange"
        },
        422: {
            color: "text-yellow"
        },
        423: {
            color: "text-purple"
        },
        505: {
            color: "text-orange"
        }
    },
    av = e => tv[e] || {
        color: "text-grey"
    };
const nv = (e, a = 2) => e > 1e3 ? (e / 1e3).toFixed(a) + "s" : e.toFixed(a) + "ms";
var rv = {
        class: "min-w-0"
    },
    ov = {
        class: "text-c-1 min-w-0 truncate"
    },
    lv = B({
        __name: "AddressBarHistory",
        props: {
            target: {},
            history: {}
        },
        emits: ["select:history:item", "update:open"],
        setup(e, {
            emit: a
        }) {
            const t = a;
            return (n, r) => (p(), H(u(g0), {
                as: "div"
            }, {
                default: S(({
                    open: o
                }) => [A(Br, {
                    value: o,
                    onChange: r[0] || (r[0] = l => t("update:open", l)),
                    onUnmount: r[1] || (r[1] = l => t("update:open", !1))
                }, null, 8, ["value"]), A(u(ts), {
                    offset: 0,
                    resize: "",
                    target: e.target
                }, bt({
                    default: S(() => [e.history.length ? (p(), H(u(y0), {
                        key: 0,
                        class: "address-bar-history-button text-c-3 focus:text-c-1 relative mr-1 rounded-lg p-1.5"
                    }, {
                        default: S(() => [A(u(me), {
                            icon: "History",
                            size: "sm",
                            thickness: "2.25"
                        }), r[2] || (r[2] = b("span", {
                            class: "sr-only"
                        }, "Request History", -1))]),
                        _: 1
                    })) : U("", !0)]),
                    _: 2
                }, [o ? {
                    name: "floating",
                    fn: S(({
                        width: l
                    }) => [A(u(b0), {
                        class: "custom-scroll grid max-h-[inherit] grid-cols-[44px_1fr_repeat(3,auto)] items-center p-0.75",
                        static: "",
                        style: Le({
                            width: l
                        })
                    }, {
                        default: S(() => [(p(!0), x(le, null, Ae(e.history, (s, i) => (p(), H(u(S0), {
                            key: i,
                            as: "button",
                            class: "font-code ui-active:*:bg-b-2 text-c-2 contents text-sm font-medium *:flex *:h-8 *:cursor-pointer *:items-center *:rounded-none *:px-1.5 *:first:rounded-l *:last:rounded-r",
                            value: i,
                            onClick: c => t("select:history:item", {
                                index: i
                            })
                        }, {
                            default: S(() => {
                                var c;
                                return [A(u(Fa), {
                                    class: "text-[11px]",
                                    method: s.method
                                }, null, 8, ["method"]), b("div", rv, [b("div", ov, K(s.path), 1)]), b("div", null, K(u(nv)(s.duration)), 1), b("div", {
                                    class: re([u(av)(s.status).color])
                                }, K(s.status), 3), b("div", null, K((c = u(ln)[s.status]) == null ? void 0 : c.name), 1)]
                            }),
                            _: 2
                        }, 1032, ["value", "onClick"]))), 128))]),
                        _: 1
                    }, 8, ["style"]), A(u(Mr), {
                        class: "inset-x-px rounded-none rounded-b-lg"
                    })]),
                    key: "0"
                } : void 0]), 1032, ["target"])]),
                _: 1
            }))
        }
    }),
    sv = ce(lv, [
        ["__scopeId", "data-v-12140f4f"]
    ]);
const iv = e => {
        if (!e || !(e instanceof Element)) return null;
        const a = [];
        let t = e;
        for (; t instanceof Element;) {
            const n = t.localName;
            let r = 1,
                o = t.previousElementSibling;
            for (; o;) o.localName === n && r++, o = o.previousElementSibling;
            a.unshift(r > 1 ? `${n}:nth-of-type(${r})` : n), t = t.parentElement
        }
        return a.join(" > ")
    },
    uv = (e = "") => {
        if (!e.trim()) return null;
        if (!e.startsWith("/") && !/^[a-z][a-z0-9+\-.]*:\/\//i.test(e)) {
            const a = e.search(/[/?#]/),
                t = a === -1 ? e : e.slice(0, a);
            if (t.includes(".")) try {
                const n = new URL(`https://${e}`);
                if (n.origin === "null") return null;
                let r = n.host;
                const o = t.match(/:(\d+)$/);
                o && !n.port && (r = `${n.hostname}:${o[1]}`);
                const l = decodeURIComponent(n.pathname) + n.search + n.hash;
                return [r, l]
            } catch {
                return null
            }
        }
        if (e.startsWith("//")) try {
            const a = new URL(`https:${e}`);
            if (a.origin === "null") return null;
            const t = a.origin.replace(/^https?:/, ""),
                n = decodeURIComponent(a.pathname) + a.search + a.hash;
            return [t, n]
        } catch {
            return null
        }
        try {
            const a = new URL(e);
            if (a.origin === "null") return null;
            const t = decodeURIComponent(a.pathname) + a.search + a.hash;
            return [a.origin, t]
        } catch {
            return null
        }
    };
var dv = {
        class: "order-last flex h-auto w-full max-w-3xl grow-3 flex-wrap items-stretch [--scalar-address-bar-height:32px] @3xl:order-0 @3xl:flex-nowrap"
    },
    cv = ["id"],
    vv = {
        class: "hidden @3xl:flex"
    },
    fv = {
        class: "scroll-timeline-x scroll-timeline-x-hidden relative flex w-full bg-blend-normal"
    },
    mv = {
        key: 0,
        class: "z-context absolute inset-x-0 top-[calc(100%+4px)] flex flex-col items-center rounded px-6"
    },
    pv = {
        class: "text-c-danger bg-b-danger border-c-danger flex items-center gap-1 rounded border p-1"
    },
    hv = {
        class: "min-w-0 flex-1"
    },
    gv = {
        "aria-hidden": "true",
        class: "inline-flex items-center gap-1"
    },
    yv = {
        class: "sr-only"
    },
    bv = {
        class: "mt-2 flex h-(--scalar-address-bar-height) w-full items-stretch gap-1 @3xl:hidden"
    },
    Sv = {
        "aria-hidden": "true",
        class: "inline-flex items-center gap-1"
    },
    xv = {
        class: "sr-only"
    },
    wv = B({
        name: "AddressBar",
        props: {
            path: {},
            method: {},
            documentSlug: {},
            exampleKey: {},
            server: {},
            servers: {},
            history: {},
            layout: {},
            eventBus: {},
            environment: {},
            serverMeta: {}
        },
        emits: ["execute", "select:history:item"],
        setup(e, {
            expose: a,
            emit: t
        }) {
            const n = t,
                r = be(),
                o = ga("sendButtonRef"),
                l = ga("mobileSendButtonRef"),
                s = ga("addressBarRef"),
                {
                    percentage: i,
                    startLoading: c,
                    stopLoading: f,
                    isLoading: d
                } = N1(),
                v = E(null),
                m = E(null),
                g = E(!1),
                y = E(!1),
                h = E(!1),
                w = as.scrollMargins.of(() => ({
                    right: 24
                })),
                P = T(() => ({
                    backgroundColor: `color-mix(in srgb, transparent 90%, ${Cr[e.method].colorVar})`,
                    transform: `translate3d(-${i.value}%,0,0)`
                })),
                k = T(() => m.value || v.value),
                D = T(() => y.value || h.value),
                Z = T(() => za(e.method, e.path, e.exampleKey, e.documentSlug));
            oe(Z, () => {
                v.value = null, m.value = null
            });
            const J = () => {
                    var F, q;
                    const $ = (F = o.value) == null ? void 0 : F.$el,
                        O = (q = l.value) == null ? void 0 : q.$el;
                    $ && $.offsetParent !== null ? $.focus() : O == null || O.focus()
                },
                G = $ => {
                    var O, F, q;
                    (O = s.value) != null && O.isFocused && e.layout !== "desktop" || ((F = s.value) == null || F.focus("end"), $ && "clear" in $ && $.clear && ((q = s.value) == null || q.setCodeMirrorContent("")), $ && "event" in $ && $.event.preventDefault())
                };
            F1({
                isReady: () => {
                    var $;
                    return ($ = s.value) == null ? void 0 : $.codeMirror
                },
                operationKey: () => Z.value,
                shouldMask: () => $1(e.path, e.documentSlug),
                onMask: () => requestAnimationFrame(() => {
                    var O, F;
                    const $ = (F = (O = s.value) == null ? void 0 : O.codeMirror) == null ? void 0 : F.state.doc.toString();
                    $ && $ !== e.path || G({
                        clear: !0
                    })
                })
            });
            const ae = $ => {
                    var te;
                    const O = uv($);
                    if (!O) return $;
                    const [F, q] = O;
                    return F === ((te = e.server) == null ? void 0 : te.url) || (e.servers.find(ve => ve.url === F) ? e.eventBus.emit("server:update:selected", {
                        url: F,
                        meta: e.serverMeta
                    }) : e.eventBus.emit("server:add:server", {
                        url: F,
                        select: !0,
                        meta: {
                            type: "operation",
                            path: e.path,
                            method: e.method
                        }
                    })), q
                },
                Q = $ => $.startsWith("/") ? $ : `/${$}`,
                R = ($, O, F = null) => {
                    var ve;
                    const q = ae(O),
                        te = Q(q);
                    (ve = s.value) == null || ve.setCodeMirrorContent(te), e.eventBus.emit("operation:update:pathMethod", {
                        meta: {
                            method: e.method,
                            path: e.path
                        },
                        blurTargetSelector: F,
                        payload: {
                            method: $,
                            path: te
                        },
                        callback: (he, xe) => {
                            var Ee, ut, dt;
                            if (he === "success" || he === "no-change") m.value = null, v.value = null;
                            else if (he === "conflict") {
                                $ !== e.method && (m.value = $), te !== e.path && (v.value = te);
                                return
                            }
                            const Ve = (ut = (Ee = s.value) == null ? void 0 : Ee.codeMirrorRef) == null ? void 0 : ut.textContent;
                            he === "no-change" && Ve && Ve !== q && ((dt = s.value) == null || dt.setCodeMirrorContent(q)), de(() => L1(xe))
                        }
                    })
                },
                N = $ => R($, v.value ?? e.path),
                V = ($, O) => {
                    const F = O.relatedTarget,
                        q = g.value || "sourceCapabilities" in O && O.sourceCapabilities === null ? null : iv(F);
                    g.value = !1, R(m.value ?? e.method, $, q)
                },
                L = ($, O) => {
                    O.stopPropagation(), R(m.value ?? e.method, $, '[data-addressbar-action="send"]')
                },
                C = $ => {
                    var O;
                    ((O = $.target) == null ? void 0 : O.innerText) === `
` && e.eventBus.emit("server:update:selected", {
                        url: "",
                        meta: e.serverMeta
                    })
                },
                M = () => {
                    e.eventBus.emit("copy-url:address-bar")
                },
                z = () => {
                    if (e.serverMeta.type === "operation") {
                        e.eventBus.emit("ui:navigate", {
                            page: "operation",
                            path: "servers",
                            operationPath: e.serverMeta.path,
                            method: e.serverMeta.method
                        });
                        return
                    }
                    e.eventBus.emit("ui:navigate", {
                        page: "document",
                        path: "servers"
                    })
                },
                X = [];
            return Pe(() => {
                X.push(e.eventBus.on("ui:focus:address-bar", G), e.eventBus.on("ui:focus:send-button", J), e.eventBus.on("hooks:on:request:sent", c), e.eventBus.on("hooks:on:request:complete", f))
            }), Oe(() => {
                for (const $ of X) $();
                f()
            }), a({
                methodConflict: m,
                pathConflict: v
            }), ($, O) => {
                var F;
                return p(), x("div", dv, [b("div", {
                    id: u(r),
                    class: re(["address-bar-bg-states text-xxs group relative flex h-(--scalar-address-bar-height) w-full flex-1 flex-row items-stretch rounded-lg p-0.75", {
                        "outline-c-danger outline": k.value,
                        "rounded-b-none": D.value
                    }])
                }, [b("div", {
                    class: re(["pointer-events-none absolute top-0 left-0 block h-full w-full overflow-hidden rounded-lg border", {
                        "rounded-b-none": D.value
                    }])
                }, [b("div", {
                    class: "absolute top-0 left-0 h-full w-full",
                    style: Le(P.value)
                }, null, 4)], 2), b("div", vv, [A(u(Fa), {
                    isEditable: e.layout !== "modal",
                    isSquare: "",
                    method: m.value ?? e.method,
                    teleport: "",
                    onChange: N
                }, null, 8, ["isEditable", "method"])]), b("div", fv, [e.servers.length ? (p(), H(u(ev), {
                    key: 0,
                    layout: e.layout,
                    meta: e.serverMeta,
                    server: e.server,
                    servers: e.servers,
                    target: u(r),
                    "onUpdate:open": O[0] || (O[0] = q => y.value = q),
                    "onUpdate:selectedServer": O[1] || (O[1] = q => e.eventBus.emit("server:update:selected", q)),
                    "onUpdate:servers": z,
                    "onUpdate:variable": O[2] || (O[2] = q => e.eventBus.emit("server:update:variables", q))
                }, null, 8, ["layout", "meta", "server", "servers", "target"])) : U("", !0), A(u(Qt), {
                    ref_key: "addressBarRef",
                    ref: s,
                    alwaysEmitChange: "",
                    "aria-label": "Path",
                    class: "ml-1 min-w-fit pl-px outline-none",
                    disableCloseBrackets: "",
                    disabled: e.layout === "modal",
                    disableEnter: "",
                    disableTabIndent: "",
                    emitOnBlur: !1,
                    environment: e.environment,
                    extensions: [u(w)],
                    importCurl: "",
                    layout: e.layout,
                    modelValue: e.path,
                    placeholder: e.server ? "" : "Enter a URL",
                    server: "",
                    onBlur: V,
                    onKeydown: [Ct(C, ["delete"]), O[3] || (O[3] = Ct(q => g.value = !0, ["tab"]))],
                    onSubmit: L
                }, null, 8, ["disabled", "environment", "extensions", "layout", "modelValue", "placeholder"])]), A(u(ye), {
                    class: "hover:bg-b-3 mx-1 hidden @3xl:flex",
                    size: "xs",
                    variant: "ghost",
                    onClick: M
                }, {
                    default: S(() => [A(u(Hn)), O[8] || (O[8] = b("span", {
                        class: "sr-only"
                    }, "Copy URL", -1))]),
                    _: 1
                }), A(sv, {
                    history: e.history,
                    target: u(r),
                    "onSelect:history:item": O[4] || (O[4] = q => n("select:history:item", q)),
                    "onUpdate:open": O[5] || (O[5] = q => h.value = q)
                }, null, 8, ["history", "target"]), k.value ? (p(), x("div", mv, [b("div", pv, [A(u(u0), {
                    size: "sm"
                }), b("div", hv, [O[9] || (O[9] = Y(" A ", -1)), b("em", null, K(((F = m.value) == null ? void 0 : F.toUpperCase()) ?? e.method.toUpperCase()), 1), O[10] || (O[10] = Y(" request to ", -1)), A(u(ns), {
                    text: v.value ?? e.path
                }, null, 8, ["text"]), O[11] || (O[11] = Y(" already exists in this document ", -1))])])])) : U("", !0), A(u(ye), {
                    ref_key: "sendButtonRef",
                    ref: o,
                    class: "relative hidden h-auto shrink-0 overflow-hidden py-1 pr-2.5 pl-2 font-bold @3xl:flex",
                    "data-addressbar-action": "send",
                    disabled: u(d),
                    onClick: O[6] || (O[6] = q => n("execute"))
                }, {
                    default: S(() => {
                        var q;
                        return [b("span", gv, [A(u(me), {
                            class: "relative shrink-0 fill-current",
                            icon: "Play",
                            size: "xs"
                        }), O[12] || (O[12] = b("span", {
                            class: "text-xxs flex"
                        }, "Send", -1))]), b("span", yv, " Send " + K(e.method) + " request to " + K(((q = e.server) == null ? void 0 : q.url) ?? "") + K(e.path), 1)]
                    }),
                    _: 1
                }, 8, ["disabled"])], 10, cv), b("div", bv, [A(u(Fa), {
                    isEditable: e.layout !== "modal",
                    isSquare: "",
                    method: m.value ?? e.method,
                    teleport: "",
                    onChange: N
                }, null, 8, ["isEditable", "method"]), A(u(ye), {
                    class: "hover:bg-b-3 ml-auto",
                    size: "xs",
                    variant: "ghost",
                    onClick: M
                }, {
                    default: S(() => [A(u(Hn)), O[13] || (O[13] = b("span", {
                        class: "sr-only"
                    }, "Copy URL", -1))]),
                    _: 1
                }), A(u(ye), {
                    ref_key: "mobileSendButtonRef",
                    ref: l,
                    class: "relative h-auto shrink-0 overflow-hidden py-1 pr-2.5 pl-2 font-bold",
                    "data-addressbar-action": "send",
                    disabled: u(d),
                    onClick: O[7] || (O[7] = q => n("execute"))
                }, {
                    default: S(() => {
                        var q;
                        return [b("span", Sv, [A(u(me), {
                            class: "relative shrink-0 fill-current",
                            icon: "Play",
                            size: "xs"
                        }), O[14] || (O[14] = b("span", {
                            class: "text-xxs"
                        }, "Send", -1))]), b("span", xv, " Send " + K(e.method) + " request to " + K(((q = e.server) == null ? void 0 : q.url) ?? "") + K(e.path), 1)]
                    }),
                    _: 1
                }, 8, ["disabled"])])])
            }
        }
    }),
    Av = ce(wv, [
        ["__scopeId", "data-v-372238a6"]
    ]),
    Tv = {
        class: "relative flex items-center"
    },
    kv = {
        class: "flex max-w-[220px] min-w-0 items-center gap-1.5"
    },
    Cv = {
        class: "text-xxs block max-w-[160px] min-w-0 truncate text-left font-medium"
    },
    Hv = {
        class: "min-w-0 flex-1 truncate"
    },
    Pv = {
        class: "bg-c-accent text-b-1 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full p-[3px]"
    },
    Bv = {
        class: "min-w-0 flex-1 text-left"
    },
    Mv = {
        class: "block truncate"
    },
    Ev = {
        class: "flex h-4 w-4 items-center justify-center"
    },
    Rv = {
        key: 5,
        class: "text-c-3 px-2 py-1.5 text-xs"
    },
    Iv = B({
        __name: "EnvironmentSelector",
        props: {
            environments: {
                default: () => []
            },
            activeEnvironment: {}
        },
        emits: ["select:environment", "add:environment"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = T(() => !!e.activeEnvironment),
                r = T(() => e.environments.length > 0),
                o = T(() => e.activeEnvironment ? e.environments.includes(e.activeEnvironment) : !1),
                l = T(() => n.value && !o.value),
                s = T(() => l.value ? `${e.activeEnvironment} (Unavailable)` : n.value ? e.activeEnvironment : r.value ? "Select Environment" : "Add Environment"),
                i = T(() => l.value ? "hover:bg-b-2 text-c-2 border-transparent" : n.value ? "bg-c-accent/10 text-c-accent hover:bg-c-accent/20 border-c-accent/30" : r.value ? "hover:bg-b-2 text-c-2 border-transparent" : "hover:bg-b-2 text-c-3 border-transparent"),
                c = () => {
                    t("add:environment")
                },
                f = d => {
                    t("select:environment", d)
                };
            return (d, v) => (p(), x("div", Tv, [A(u(rs), null, {
                items: S(() => [n.value ? (p(), H(u(Lt), {
                    key: 0,
                    class: "group/item flex w-full items-center gap-1.5",
                    onClick: v[0] || (v[0] = m => f(""))
                }, {
                    default: S(() => [b("div", {
                        class: re(["flex h-4 w-4 items-center justify-center rounded-full p-[3px]", e.activeEnvironment ? "shadow-border text-transparent" : "bg-c-accent text-b-1"])
                    }, [A(u(me), {
                        class: "size-2.5",
                        icon: "Checkmark",
                        thickness: "3"
                    })], 2), v[1] || (v[1] = b("span", {
                        class: "text-c-2"
                    }, "No Environment", -1))]),
                    _: 1
                })) : U("", !0), n.value && r.value ? (p(), H(u(Kt), {
                    key: 1
                })) : U("", !0), (p(!0), x(le, null, Ae(e.environments, m => (p(), H(u(Lt), {
                    key: m,
                    class: "group/item flex w-full min-w-0 items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap",
                    onClick: g => f(m)
                }, {
                    default: S(() => [b("div", {
                        class: re(["flex h-4 w-4 items-center justify-center rounded-full p-[3px]", e.activeEnvironment === m ? "bg-c-accent text-b-1" : "shadow-border text-transparent"])
                    }, [A(u(me), {
                        class: "size-2.5",
                        icon: "Checkmark",
                        thickness: "3"
                    })], 2), b("span", Hv, K(m), 1)]),
                    _: 2
                }, 1032, ["onClick"]))), 128)), l.value ? (p(), H(u(Kt), {
                    key: 2
                })) : U("", !0), l.value ? (p(), H(u(Lt), {
                    key: 3,
                    class: "group/item flex h-auto w-full min-w-0 items-start gap-1.5 overflow-hidden",
                    disabled: ""
                }, {
                    default: S(() => [b("div", Pv, [A(u(me), {
                        class: "size-2.5",
                        icon: "Checkmark",
                        thickness: "3"
                    })]), b("div", Bv, [b("span", Mv, K(e.activeEnvironment), 1), v[2] || (v[2] = b("span", {
                        class: "text-c-3 block truncate text-xs"
                    }, " Not available in this context ", -1))])]),
                    _: 1
                })) : U("", !0), r.value ? (p(), H(u(Kt), {
                    key: 4
                })) : U("", !0), A(u(Lt), {
                    class: "text-c-accent flex items-center gap-1.5",
                    onClick: c
                }, {
                    default: S(() => [b("div", Ev, [A(u(me), {
                        icon: "Add",
                        size: "sm"
                    })]), b("span", null, K(r.value ? "New Environment" : "Create Environment"), 1)]),
                    _: 1
                }), !r.value && !n.value ? (p(), x("div", Rv, [...v[3] || (v[3] = [b("p", {
                    class: "mb-1"
                }, " Environments let you manage variables like API keys and base URLs across different contexts. ", -1)])])) : U("", !0)]),
                default: S(() => [A(u(ye), {
                    "aria-label": `Current environment: ${s.value}`,
                    class: re(["line-clamp-1 h-full w-fit justify-start border px-2 py-1 font-normal transition-colors", i.value]),
                    size: "sm",
                    variant: "ghost"
                }, {
                    default: S(() => [b("div", kv, [A(u(me), {
                        class: re(["shrink-0", n.value && !l.value ? "text-c-accent" : "text-c-3"]),
                        icon: "Globe",
                        size: "sm"
                    }, null, 8, ["class"]), b("span", Cv, K(s.value), 1), A(u(me), {
                        class: "shrink-0",
                        icon: "ChevronDown",
                        size: "xs"
                    })])]),
                    _: 1
                }, 8, ["aria-label", "class"])]),
                _: 1
            })]))
        }
    }),
    Ov = Iv,
    Vv = {
        class: "lg:min-h-header t-app__top-container @container flex w-full flex-wrap items-center justify-center p-2"
    },
    $v = {
        class: "mb-2 flex flex-1 items-center justify-end gap-2 @3xl:mb-0"
    },
    Lv = B({
        __name: "Header",
        props: {
            path: {},
            method: {},
            layout: {},
            hideClientButton: {
                type: Boolean,
                default: !1
            },
            integration: {},
            documentSlug: {},
            exampleKey: {},
            documentUrl: {},
            source: {},
            server: {},
            servers: {},
            history: {},
            eventBus: {},
            environments: {},
            activeEnvironment: {},
            environment: {},
            serverMeta: {}
        },
        emits: ["execute", "select:history:item", "add:environment", "navigate:settings"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = o => {
                    e.eventBus.emit("workspace:update:active-environment", o)
                },
                r = () => {
                    e.eventBus.emit("ui:navigate", {
                        page: "document",
                        path: "environment"
                    })
                };
            return (o, l) => (p(), x("div", Vv, [l[8] || (l[8] = b("div", {
                class: "flex flex-1"
            }, null, -1)), A(u(Av), {
                activeEnvironment: e.activeEnvironment,
                documentSlug: e.documentSlug,
                environment: e.environment,
                environments: e.environments,
                eventBus: e.eventBus,
                exampleKey: e.exampleKey,
                history: e.history,
                layout: e.layout,
                method: e.method,
                path: e.path,
                server: e.server,
                serverMeta: e.serverMeta,
                servers: e.servers,
                "onAdd:environment": l[0] || (l[0] = s => t("add:environment")),
                onExecute: l[1] || (l[1] = s => t("execute")),
                "onSelect:history:item": l[2] || (l[2] = s => t("select:history:item", s))
            }, null, 8, ["activeEnvironment", "documentSlug", "environment", "environments", "eventBus", "exampleKey", "history", "layout", "method", "path", "server", "serverMeta", "servers"]), b("div", $v, [e.layout !== "modal" ? (p(), H(Ov, {
                key: 0,
                activeEnvironment: e.activeEnvironment,
                environments: e.environments,
                "onAdd:environment": r,
                "onSelect:environment": n
            }, null, 8, ["activeEnvironment", "environments"])) : U("", !0), e.layout !== "modal" ? (p(), H(u(ua), {
                key: 1,
                icon: u(su),
                label: "Operation settings",
                size: "sm",
                weight: "bold",
                onClick: l[3] || (l[3] = s => t("navigate:settings"))
            }, null, 8, ["icon"])) : U("", !0), e.layout === "modal" && e.documentUrl && !e.hideClientButton ? (p(), H(os, {
                key: 2,
                buttonSource: "modal",
                class: "!w-fit lg:-mr-1",
                integration: e.integration ?? null,
                operationMethod: e.method,
                operationPath: e.path,
                source: e.source ?? "api-reference",
                url: e.documentUrl
            }, null, 8, ["integration", "operationMethod", "operationPath", "source", "url"])) : U("", !0), e.layout === "modal" && e.source !== "gitbook" ? (p(), x("button", {
                key: 3,
                class: "app-exit-button zoomed:static zoomed:p-1 fixed top-2 right-2 rounded-full p-2",
                type: "button",
                onClick: l[4] || (l[4] = s => e.eventBus.emit("ui:close:client-modal"))
            }, [A(u(me), {
                icon: "Close",
                size: "lg",
                thickness: "2"
            }), l[6] || (l[6] = b("span", {
                class: "sr-only"
            }, "Close Client", -1))])) : U("", !0), e.layout === "modal" && e.source === "gitbook" ? (p(), x("button", {
                key: 4,
                class: "text-c-1 hover:bg-b-2 active:text-c-1 -mr-1.5 rounded p-2",
                type: "button",
                onClick: l[5] || (l[5] = s => e.eventBus.emit("ui:close:client-modal"))
            }, [A(u(me), {
                icon: "Close",
                size: "md",
                thickness: "1.75"
            }), l[7] || (l[7] = b("span", {
                class: "sr-only"
            }, "Close Client", -1))])) : U("", !0)])]))
        }
    }),
    Uv = ce(Lv, [
        ["__scopeId", "data-v-42c563b3"]
    ]),
    Dv = {
        class: "bg-b-1 flex h-full flex-col"
    },
    zv = {
        class: "lg:min-h-header flex w-full flex-wrap items-center justify-center p-2 lg:p-0"
    },
    Zv = B({
        name: "OperationBlock",
        props: {
            eventBus: {},
            appVersion: {},
            document: {},
            documentSlug: {},
            workspaceCookies: {
                default: () => []
            },
            documentCookies: {
                default: () => []
            },
            path: {},
            method: {},
            httpClients: {
                default: () => ls
            },
            history: {
                default: () => []
            },
            layout: {},
            server: {},
            selectedClient: {},
            servers: {},
            serverMeta: {},
            hideClientButton: {
                type: Boolean
            },
            integration: {},
            documentUrl: {},
            source: {},
            operation: {},
            exampleKey: {},
            authMeta: {},
            securitySchemes: {},
            plugins: {
                default: () => []
            },
            environments: {},
            activeEnvironment: {},
            environment: {},
            proxyUrl: {},
            selectedSecurity: {},
            selectedSecuritySchemes: {},
            securityRequirements: {},
            defaultHeaders: {},
            requestBodyCompositionSelection: {},
            options: {}
        },
        setup(e) {
            const a = T(() => is(e.httpClients)),
                {
                    toast: t
                } = cs(),
                {
                    copyToClipboard: n
                } = ss(),
                r = E(null),
                o = E(null),
                l = E(null),
                s = () => {
                    var m;
                    return (m = r.value) == null ? void 0 : m.abort(Qe.REQUEST_ABORTED)
                },
                i = async () => {
                    const {
                        request: m
                    } = Rn({
                        defaultHeaders: e.defaultHeaders,
                        environment: e.environment,
                        exampleName: e.exampleKey,
                        globalCookies: [...e.workspaceCookies, ...e.documentCookies],
                        method: e.method,
                        operation: e.operation,
                        path: e.path,
                        proxyUrl: e.proxyUrl,
                        server: e.server,
                        selectedSecuritySchemes: e.selectedSecuritySchemes,
                        isElectron: Xt(),
                        requestBodyCompositionSelection: e.requestBodyCompositionSelection
                    });
                    await n(us(m, Ra(e.environment)))
                }, c = async () => {
                    var k, D, Z;
                    if ((D = (k = e.eventBus).flushDebouncedEmits) == null || D.call(k), sd(e.operation.parameters ?? [], e.exampleKey).ok === !1) {
                        t("Path parameters must have values.", "error");
                        return
                    }
                    const m = [...e.workspaceCookies, ...e.documentCookies],
                        {
                            request: g
                        } = Rn({
                            defaultHeaders: e.defaultHeaders,
                            environment: e.environment,
                            exampleName: e.exampleKey,
                            globalCookies: m,
                            method: e.method,
                            operation: e.operation,
                            path: e.path,
                            proxyUrl: e.proxyUrl,
                            server: e.server,
                            selectedSecuritySchemes: e.selectedSecuritySchemes,
                            isElectron: Xt(),
                            requestBodyCompositionSelection: e.requestBodyCompositionSelection
                        });
                    o.value && "reader" in o.value && o.value.reader.cancel();
                    const y = fi();
                    await Sa({
                        requestBuilder: g,
                        document: e.document,
                        operation: e.operation,
                        variablesStore: y
                    }, "beforeRequest", e.plugins);
                    const h = ds(g, {
                        envVariables: {
                            ...Ra(e.environment),
                            ...y.getVariables()
                        },
                        allowMissingRequestServerBase: e.layout === "modal"
                    });
                    if (!h.ok) {
                        t(h.message ?? h.error, "error");
                        return
                    }
                    r.value = h.data.controller, e.eventBus.emit("hooks:on:request:sent", {
                        meta: {
                            method: e.method,
                            path: e.path,
                            exampleKey: e.exampleKey
                        }
                    });
                    const [w, P] = await W0({
                        isUsingProxy: h.data.isUsingProxy,
                        requestPayload: h.data.requestPayload,
                        plugins: e.plugins,
                        customFetch: (Z = fe(e.options)) == null ? void 0 : Z.customFetch
                    });
                    if (P && await Sa({
                            response: P.originalResponse.clone(),
                            requestBuilder: g,
                            request: gr(...P.requestPayload),
                            document: e.document,
                            operation: e.operation,
                            variablesStore: y
                        }, "responseReceived", e.plugins), e.eventBus.emit("hooks:on:request:complete", {
                            payload: P ? {
                                response: P.originalResponse.clone(),
                                requestPayload: P.requestPayload,
                                duration: P.response.duration,
                                timestamp: P.timestamp
                            } : void 0,
                            meta: {
                                method: e.method,
                                path: e.path,
                                exampleKey: e.exampleKey
                            }
                        }), w) {
                        o.value = null, l.value = null, r.value = null, t(w.message, "error");
                        return
                    }
                    o.value = P.response, l.value = P.requestPayload, od(P.response) || $n.set(za(e.method, e.path, e.exampleKey), {
                        response: P.response,
                        requestPayload: P.requestPayload
                    })
                };
            Pe(() => {
                e.eventBus.on("operation:send:request:hotkey", c), e.eventBus.on("operation:cancel:request", s), e.eventBus.on("copy-url:address-bar", i), Sa({
                    document: e.document,
                    operation: e.operation
                }, "onRequestMount", e.plugins)
            }), Oe(() => {
                e.eventBus.off("operation:send:request:hotkey", c), e.eventBus.off("operation:cancel:request", s), e.eventBus.off("copy-url:address-bar", i)
            });
            const f = T(() => e.history.map(m => ({
                    method: m.request.method,
                    path: m.request.url,
                    duration: m.time,
                    status: m.response.status
                })).reverse()),
                d = ({
                    index: m
                }) => {
                    const g = (e.history.length ?? 0) - m - 1,
                        y = e.history[g];
                    if (!y) return;
                    const h = () => e.eventBus.emit("ui:navigate", {
                        page: "example",
                        method: e.method,
                        path: e.path,
                        exampleName: "draft",
                        callback: w => {
                            if (w !== "success") return;
                            const P = Vn({
                                    harResponse: y.response,
                                    url: y.request.url,
                                    method: e.method,
                                    path: e.path,
                                    duration: y.time
                                }),
                                k = ed({
                                    harRequest: y.request
                                });
                            o.value = P, l.value = k
                        }
                    });
                    e.eventBus.emit("operation:reload:history", {
                        meta: {
                            path: e.path,
                            method: e.method
                        },
                        index: g,
                        callback: h
                    })
                },
                v = () => {
                    e.eventBus.emit("ui:navigate", {
                        page: "operation",
                        path: "overview",
                        operationPath: e.path,
                        method: e.method
                    })
                };
            return oe([() => e.path, () => e.method, () => e.exampleKey], ([m, g, y]) => {
                const h = $n.get(za(g, m, y));
                if (h) o.value = h.response, l.value = h.requestPayload;
                else {
                    const w = (() => {
                        for (let P = e.history.length - 1; P >= 0; P--) {
                            const k = e.history[P];
                            if ((k == null ? void 0 : k.meta.example) === y) return k
                        }
                    })();
                    w ? (o.value = Vn({
                        harResponse: w.response,
                        url: w.request.url,
                        method: g,
                        path: m,
                        duration: w.time
                    }), l.value = null) : (o.value = null, l.value = null)
                }
                s()
            }, {
                immediate: !0
            }), Oe(() => {
                s()
            }), (m, g) => (p(), x("div", Dv, [b("div", zv, [A(Uv, {
                activeEnvironment: e.activeEnvironment,
                documentSlug: e.documentSlug,
                documentUrl: e.documentUrl,
                environment: e.environment,
                environments: e.environments,
                eventBus: e.eventBus,
                exampleKey: e.exampleKey,
                hideClientButton: e.hideClientButton,
                history: f.value,
                integration: e.integration,
                layout: e.layout,
                method: e.method,
                path: e.path,
                server: e.server,
                serverMeta: e.serverMeta,
                servers: e.servers,
                source: e.source,
                onExecute: c,
                "onNavigate:settings": v,
                "onSelect:history:item": d
            }, null, 8, ["activeEnvironment", "documentSlug", "documentUrl", "environment", "environments", "eventBus", "exampleKey", "hideClientButton", "history", "integration", "layout", "method", "path", "server", "serverMeta", "servers", "source"])]), A(Y0, {
                class: "border-t"
            }, {
                default: S(() => [A(_0, {
                    class: "flex-1"
                }, {
                    default: S(() => [A(u(uc), {
                        authMeta: e.authMeta,
                        clientOptions: a.value,
                        defaultHeaders: e.defaultHeaders,
                        documentCookies: e.documentCookies,
                        environment: e.environment,
                        eventBus: e.eventBus,
                        exampleKey: e.exampleKey,
                        layout: e.layout,
                        method: e.method,
                        operation: e.operation,
                        options: fe(e.options),
                        path: e.path,
                        plugins: e.plugins,
                        proxyUrl: e.proxyUrl,
                        requestBodyCompositionSelection: e.requestBodyCompositionSelection,
                        securityRequirements: e.securityRequirements,
                        securitySchemes: e.securitySchemes,
                        selectedClient: e.selectedClient,
                        selectedSecurity: e.selectedSecurity,
                        selectedSecuritySchemes: e.selectedSecuritySchemes,
                        server: e.server,
                        workspaceCookies: e.workspaceCookies
                    }, null, 8, ["authMeta", "clientOptions", "defaultHeaders", "documentCookies", "environment", "eventBus", "exampleKey", "layout", "method", "operation", "options", "path", "plugins", "proxyUrl", "requestBodyCompositionSelection", "securityRequirements", "securitySchemes", "selectedClient", "selectedSecurity", "selectedSecuritySchemes", "server", "workspaceCookies"]), A(u(I1), {
                        appVersion: e.appVersion,
                        eventBus: e.eventBus,
                        layout: e.layout,
                        plugins: e.plugins,
                        requestPayload: l.value,
                        response: o.value,
                        totalPerformedRequests: f.value.length
                    }, null, 8, ["appVersion", "eventBus", "layout", "plugins", "requestPayload", "response", "totalPerformedRequests"])]),
                    _: 1
                })]),
                _: 1
            })]))
        }
    }),
    Nv = Zv;
const Pt = (e, a) => {
        if (a) return a.type === e ? a : Pt(e, a.parent)
    },
    Fv = e => e.type === "document" || e.type === "tag" || e.type === "operation",
    qv = ({
        store: e,
        entry: a
    }) => {
        var r, o, l;
        const t = Pt("document", a);
        if (!t) return null;
        const n = e.workspace.documents[t.name];
        return n ? a.type === "document" ? n : ee(n) ? a.type === "tag" ? ((r = n.tags) == null ? void 0 : r.find(s => s.name === a.name)) ?? null : a.type === "operation" ? W((l = (o = n.paths) == null ? void 0 : o[a.path]) == null ? void 0 : l[a.method]) ?? null : null : null : null
    },
    vo = e => {
        const a = new Map,
            t = (r, o) => {
                const l = a.get(r);
                l ? l.push(o) : a.set(r, [o])
            },
            n = (r, o) => {
                if (r)
                    for (const l of r)
                        if (l.type === "operation") {
                            const s = `${l.path}|${l.method}`;
                            t(s, {
                                ...l,
                                parent: o
                            })
                        } else if (l.type === "webhook") {
                    const s = `${l.name}|${l.method}`;
                    t(s, {
                        ...l,
                        parent: o
                    })
                } else "children" in l && l.children && n(l.children, {
                    ...l,
                    parent: o
                })
            };
        return n(e.children, e), a
    },
    Wv = e => {
        const a = new Map,
            t = (r, o) => {
                const l = a.get(r);
                l ? l.push(o) : a.set(r, [o])
            },
            n = (r, o) => {
                if (r)
                    for (const l of r) l.type === "tag" ? (t(l.name, {
                        ...l,
                        parent: o
                    }), n(l.children, {
                        ...l,
                        parent: o
                    })) : "children" in l && l.children && n(l.children, {
                        ...l,
                        parent: o
                    })
            };
        return n(e.children, e), a
    };
async function jv({
    defaultValue: e,
    validation: a,
    transformation: t,
    maxRetries: n = 5
}) {
    const r = (t == null ? void 0 : t(e)) ?? e;
    return await a(r) ? r : fo({
        value: [r, 1],
        validation: a,
        maxRetries: n,
        transformation: t
    })
}
async function fo({
    value: e,
    validation: a,
    maxRetries: t,
    attempts: n = 0,
    transformation: r
}) {
    if (n >= t) return;
    const o = e.join(" "),
        l = (r == null ? void 0 : r(o)) ?? o;
    return await a(l) ? l : fo({
        value: [e[0], e[1] + 1],
        validation: a,
        maxRetries: t,
        transformation: r,
        attempts: n + 1
    })
}
const Kv = async (e, a, {
    selectedRequirements: t,
    newSchemes: n,
    meta: r
}) => {
    var v;
    if (!ee(a)) return;
    const o = (v = a["x-scalar-navigation"]) == null ? void 0 : v.name;
    if (!o) return;
    const l = () => r.type === "document" ? e == null ? void 0 : e.auth.getAuthSelectedSchemas({
            type: "document",
            documentName: o
        }) : e == null ? void 0 : e.auth.getAuthSelectedSchemas({
            type: "operation",
            documentName: o,
            path: r.path,
            method: r.method
        }),
        i = (await Promise.all(n.map(async m => {
            const g = await jv({
                defaultValue: m.name,
                validation: y => {
                    var h, w;
                    return !((w = (h = a.components) == null ? void 0 : h.securitySchemes) != null && w[y])
                },
                maxRetries: 100
            });
            if (g) return a.components || (a.components = {}), a.components.securitySchemes || (a.components.securitySchemes = {}), a.components.securitySchemes[g] = m.scheme, {
                [g]: []
            }
        }))).filter(Boolean),
        c = l(),
        f = [...t, ...i],
        d = () => c != null && c.selectedIndex ? c.selectedIndex >= f.length ? f.length - 1 : c.selectedIndex : 0;
    return r.type === "document" ? e == null ? void 0 : e.auth.setAuthSelectedSchemas({
        type: "document",
        documentName: o
    }, {
        selectedIndex: d(),
        selectedSchemes: f
    }) : e == null ? void 0 : e.auth.setAuthSelectedSchemas({
        type: "operation",
        documentName: o,
        path: r.path,
        method: r.method
    }, {
        selectedIndex: d(),
        selectedSchemes: f
    })
}, Gv = (e, a, {
    meta: t
}) => {
    var r;
    if (!ee(a)) return;
    const n = (r = a["x-scalar-navigation"]) == null ? void 0 : r.name;
    if (n) return t.type === "document" ? e == null ? void 0 : e.auth.clearAuthSelectedSchemas({
        type: "document",
        documentName: n
    }) : e == null ? void 0 : e.auth.clearAuthSelectedSchemas({
        type: "operation",
        documentName: n,
        path: t.path,
        method: t.method
    })
}, Yv = (e, {
    payload: a,
    name: t
}) => {
    var r, o;
    if (!ee(e)) return;
    const n = W((o = (r = e.components) == null ? void 0 : r.securitySchemes) == null ? void 0 : o[t]);
    if (!n) {
        console.error(`Security scheme ${t} not found`);
        return
    }
    return n.type === a.type && Ot(n, a), n
}, Xv = (e, a, {
    payload: t,
    name: n,
    overwrite: r = !1
}) => {
    var i;
    if (!ee(a)) return;
    const o = (i = a["x-scalar-navigation"]) == null ? void 0 : i.name;
    if (!o) return;
    if (r) {
        e == null || e.auth.setAuthSecrets(o, n, t);
        return
    }
    const l = e == null ? void 0 : e.auth.getAuthSecrets(o, n),
        s = Ot(ne(l, {
            depth: 1
        }) ?? {}, t);
    e == null || e.auth.setAuthSecrets(o, n, s)
}, Qv = (e, a, {
    name: t
}) => {
    var r;
    if (!ee(a)) return;
    const n = (r = a["x-scalar-navigation"]) == null ? void 0 : r.name;
    n && (e == null || e.auth.clearAuthSecrets(n, t))
}, Jv = (e, a, {
    index: t,
    meta: n
}) => {
    var s, i, c;
    if (!ee(a)) return;
    const r = (s = a["x-scalar-navigation"]) == null ? void 0 : s.name;
    if (!r || n.type === "operation" && ((c = (i = a.paths) == null ? void 0 : i[n.path]) == null ? void 0 : c[n.method]) === void 0) return;
    const l = n.type === "document" ? e == null ? void 0 : e.auth.getAuthSelectedSchemas({
        type: "document",
        documentName: r
    }) : e == null ? void 0 : e.auth.getAuthSelectedSchemas({
        type: "operation",
        documentName: r,
        path: n.path,
        method: n.method
    });
    if (!l) return n.type === "document" ? e == null ? void 0 : e.auth.setAuthSelectedSchemas({
        type: "document",
        documentName: r
    }, {
        selectedIndex: t,
        selectedSchemes: []
    }) : e == null ? void 0 : e.auth.setAuthSelectedSchemas({
        type: "operation",
        documentName: r,
        path: n.path,
        method: n.method
    }, {
        selectedIndex: t,
        selectedSchemes: []
    });
    e == null || e.auth.setAuthSelectedSchemas(n.type === "document" ? {
        type: "document",
        documentName: r
    } : {
        type: "operation",
        documentName: r,
        path: n.path,
        method: n.method
    }, {
        selectedIndex: t,
        selectedSchemes: ne(l.selectedSchemes, {
            depth: null
        }) ?? []
    })
}, _v = (e, a) => {
    const t = [...Object.keys(e)].sort((r, o) => r.localeCompare(o)),
        n = [...a].sort((r, o) => r.localeCompare(o));
    return JSON.stringify(t) === JSON.stringify(n)
}, e2 = (e, a, {
    id: t,
    name: n,
    scopes: r,
    meta: o
}) => {
    var d, v;
    if (!ee(a)) return;
    const l = (d = a["x-scalar-navigation"]) == null ? void 0 : d.name;
    if (!l) return;
    const i = (o.type === "document" ? e == null ? void 0 : e.auth.getAuthSelectedSchemas({
            type: "document",
            documentName: l
        }) : e == null ? void 0 : e.auth.getAuthSelectedSchemas({
            type: "operation",
            documentName: l,
            path: o.path,
            method: o.method
        })) ?? vr(void 0, void 0, [], ((v = a.components) == null ? void 0 : v.securitySchemes) ?? {}, t.length === 1 ? t[0] : t),
        c = ne(i.selectedSchemes, {
            depth: 1
        }) ?? [],
        f = c.find(m => _v(m, t));
    an(f) && (f[n] = r, e == null || e.auth.setAuthSelectedSchemas(o.type === "document" ? {
        type: "document",
        documentName: l
    } : {
        type: "operation",
        documentName: l,
        path: o.path,
        method: o.method
    }, {
        selectedIndex: i.selectedIndex,
        selectedSchemes: c
    }))
}, mo = (e, a, t) => {
    var r, o, l;
    if (!ee(e)) return null;
    const n = W((o = (r = e.components) == null ? void 0 : r.securitySchemes) == null ? void 0 : o[a]);
    return !n || n.type !== "oauth2" && n.type !== "openIdConnect" ? null : ((l = n.flows) == null ? void 0 : l[t]) ?? null
}, po = (e, a, t) => {
    var o;
    if (!ee(a) || !e) return;
    const n = (o = a["x-scalar-navigation"]) == null ? void 0 : o.name;
    if (!n) return;
    const r = l => {
        const s = e.auth.getAuthSelectedSchemas(l);
        if (!s) return;
        const i = ne(s.selectedSchemes, {
            depth: 1
        }) ?? [];
        t(i), e.auth.setAuthSelectedSchemas(l, {
            selectedIndex: s.selectedIndex,
            selectedSchemes: i
        })
    };
    r({
        type: "document",
        documentName: n
    }), Object.entries(a.paths ?? {}).forEach(([l, s]) => {
        Object.entries(s).forEach(([i, c]) => {
            typeof c == "object" && r({
                type: "operation",
                documentName: n,
                path: l,
                method: i
            })
        })
    })
}, t2 = (e, a, {
    name: t,
    flowType: n,
    scope: r,
    description: o,
    oldScope: l,
    enable: s
}) => {
    if (!ee(a)) return;
    const i = mo(a, t, n);
    if (!i) return;
    i.scopes || (i.scopes = {});
    const c = !!l && l !== r;
    if (c) {
        if (!(l in i.scopes)) return;
        delete i.scopes[l]
    }
    i.scopes[r] = o, !(!c && !s) && po(e, a, f => {
        f.forEach(d => {
            if (!an(d)) return;
            const v = d[t];
            if (!Array.isArray(v)) return;
            let m = v;
            c && m.includes(l) && (m = m.map(g => g === l ? r : g)), s && !m.includes(r) && (m = [...m, r]), m !== v && (d[t] = m)
        })
    })
}, a2 = (e, a, {
    name: t,
    flowType: n,
    scope: r
}) => {
    if (!ee(a)) return;
    const o = mo(a, t, n);
    o != null && o.scopes && (delete o.scopes[r], po(e, a, l => {
        l.forEach(s => {
            if (!an(s)) return;
            const i = s[t];
            !Array.isArray(i) || !i.includes(r) || (s[t] = i.filter(c => c !== r))
        })
    }))
}, n2 = (e, a, {
    names: t
}) => {
    var i, c;
    if (!ee(a)) return;
    const n = (i = a["x-scalar-navigation"]) == null ? void 0 : i.name;
    if (!n) return;
    const r = W((c = a.components) == null ? void 0 : c.securitySchemes);
    if (!r) return;
    t.forEach(f => {
        delete r[f]
    });
    const o = (f, d) => Math.max(0, Math.min(f, d - 1)),
        l = f => (ne(f, {
            depth: 1
        }) ?? []).filter(v => !t.some(m => Object.keys(v).includes(m))),
        s = e == null ? void 0 : e.auth.getAuthSelectedSchemas({
            type: "document",
            documentName: n
        });
    if (s) {
        const f = l(s.selectedSchemes);
        e == null || e.auth.setAuthSelectedSchemas({
            type: "document",
            documentName: n
        }, {
            selectedIndex: o(s.selectedIndex, f.length),
            selectedSchemes: f
        })
    }
    a.security && (a.security = l(a.security)), Object.entries(a.paths ?? {}).forEach(([f, d]) => {
        Object.entries(d).forEach(([v, m]) => {
            if (typeof m != "object") return;
            const g = W(m);
            "security" in g && g.security && (g.security = l(g.security));
            const y = e == null ? void 0 : e.auth.getAuthSelectedSchemas({
                type: "operation",
                documentName: n,
                path: f,
                method: v
            });
            if (y) {
                const h = l(y.selectedSchemes);
                e == null || e.auth.setAuthSelectedSchemas({
                    type: "operation",
                    documentName: n,
                    path: f,
                    method: v
                }, {
                    selectedIndex: o(y.selectedIndex, h.length),
                    selectedSchemes: h
                })
            }
        })
    })
}, r2 = ({
    document: e,
    store: a
}) => ({
    updateSelectedSecuritySchemes: t => Kv(a, e, t),
    clearSelectedSecuritySchemes: t => Gv(a, e, t),
    updateSecurityScheme: t => Yv(e, t),
    updateSecuritySchemeSecrets: t => Xv(a, e, t),
    clearSecuritySchemeSecrets: t => Qv(a, e, t),
    updateSelectedAuthTab: t => Jv(a, e, t),
    updateSelectedScopes: t => e2(a, e, t),
    upsertScope: t => t2(a, e, t),
    deleteScope: t => a2(a, e, t),
    deleteSecurityScheme: t => n2(a, e, t)
}), o2 = (e, {
    payload: a,
    index: t
}) => {
    if (!e || St(e)) return;
    if (e["x-scalar-cookies"] || (e["x-scalar-cookies"] = []), t !== void 0) {
        if (t < 0 || t >= e["x-scalar-cookies"].length) return;
        const r = je(Gt, {
            ...e["x-scalar-cookies"][t],
            ...a
        });
        return e["x-scalar-cookies"][t] = r, r
    }
    const n = je(Gt, a);
    return e["x-scalar-cookies"].push(n), n
}, l2 = (e, {
    index: a
}) => !e || St(e) || !e["x-scalar-cookies"] || a < 0 || a >= e["x-scalar-cookies"].length ? !1 : (e["x-scalar-cookies"].splice(a, 1), !0), Yn = ({
    collection: e
}) => ({
    upsertCookie: a => o2(e, a),
    deleteCookie: a => l2(e, a)
}), s2 = (e, a) => {
    ee(e) && Ot(e, a)
}, i2 = (e, a) => {
    ee(e) && (e["x-scalar-watch-mode"] = a)
}, u2 = (e, a) => {
    var t;
    ee(e) && (Ot(e.info, a), e["x-scalar-navigation"] && a.title !== void 0 && (e["x-scalar-navigation"].title = ((t = a.title) == null ? void 0 : t.trim()) || "Untitled Document"))
}, d2 = (e, a) => {
    !ee(e) || !e["x-scalar-navigation"] || (e["x-scalar-icon"] = a, e["x-scalar-navigation"].icon = a)
}, c2 = async (e, a) => {
    var t, n;
    if (e) {
        if (e.workspace.documents[a.name]) {
            (t = a.callback) == null || t.call(a, !1);
            return
        }
        await e.addDocument({
            name: a.name,
            document: {
                openapi: "3.1.0",
                info: {
                    title: a.name,
                    version: "1.0.0"
                },
                paths: {
                    "/": {
                        get: {}
                    }
                },
                "x-scalar-icon": a.icon
            }
        }), (n = a.callback) == null || n.call(a, !0)
    }
}, v2 = (e, a) => {
    e && e.deleteDocument(a.name)
}, f2 = ({
    document: e,
    store: a
}) => ({
    updateDocumentExtension: t => s2(e, t),
    updateDocumentInfo: t => u2(e, t),
    updateWatchMode: t => i2(e, t),
    updateDocumentIcon: t => d2(e, t),
    createEmptyDocument: t => c2(a, t),
    deleteDocument: t => v2(a, t)
}), m2 = (e, a, {
    environmentName: t,
    payload: n,
    oldEnvironmentName: r
}) => {
    if (!a || !e || St(a)) return;
    a["x-scalar-environments"] || (a["x-scalar-environments"] = {});
    const o = !a["x-scalar-environments"][r ?? t],
        l = je(vs, {
            ...ne(a["x-scalar-environments"][r ?? t], {
                depth: 1
            }),
            ...n
        });
    return a["x-scalar-environments"][t] = l, r && r !== t && (delete a["x-scalar-environments"][r], e["x-scalar-active-environment"] === r && (e["x-scalar-active-environment"] = t)), o && (e["x-scalar-active-environment"] = t), l
}, p2 = (e, a, {
    environmentName: t
}) => {
    var n;
    !a || !e || St(a) || (n = a["x-scalar-environments"]) == null || delete n[t]
}, h2 = (e, {
    environmentName: a,
    variable: t,
    index: n
}) => {
    var o;
    if (!e || St(e)) return;
    if (!((o = e["x-scalar-environments"]) != null && o[a])) {
        console.error("Environment not found", a);
        return
    }
    const r = je(fs, t);
    if (n !== void 0) {
        if (r.name === "") {
            e["x-scalar-environments"][a].variables.splice(n, 1);
            return
        }
        e["x-scalar-environments"][a].variables[n] = r
    } else e["x-scalar-environments"][a].variables.push(r);
    return r
}, g2 = (e, {
    environmentName: a,
    index: t
}) => {
    var n, r, o;
    if (!(!e || St(e))) {
        if (!((n = e["x-scalar-environments"]) != null && n[a])) {
            console.error("Environment not found", a);
            return
        }(o = (r = e["x-scalar-environments"][a]) == null ? void 0 : r.variables) == null || o.splice(t, 1)
    }
}, Xn = ({
    workspace: e,
    collection: a
}) => ({
    upsertEnvironment: t => m2(e, a, t),
    deleteEnvironment: t => p2(e, a, t),
    upsertEnvironmentVariable: t => h2(a, t),
    deleteEnvironmentVariable: t => g2(a, t)
}), y2 = (e, a) => {
    if (!e) return null;
    const t = e.workspace.documents[a];
    return t || null
}, ho = (e, a, t) => {
    var l, s, i, c, f, d, v;
    if (!ee(e)) return null;
    const n = W((s = (l = e.paths) == null ? void 0 : l[t.path]) == null ? void 0 : s[t.method]);
    if (!n) return null;
    let r = W(n.requestBody);
    return r || (n.requestBody = {
        content: {}
    }, r = W(n.requestBody)), (i = r.content)[a] || (i[a] = {}), (c = r.content[a]).examples || (c.examples = {}), (f = r.content[a].examples)[d = t.exampleKey] || (f[d] = {}), W((v = r.content[a].examples) == null ? void 0 : v[t.exampleKey]) ?? null
}, b2 = (e, {
    meta: a,
    payload: t
}) => {
    var o, l;
    if (!ee(e)) return;
    const n = W((l = (o = e.paths) == null ? void 0 : o[a.path]) == null ? void 0 : l[a.method]);
    if (!n) return;
    let r = W(n.requestBody);
    r || (n.requestBody = {
        content: {}
    }, r = W(n.requestBody)), r["x-scalar-selected-content-type"] || (r["x-scalar-selected-content-type"] = {}), r["x-scalar-selected-content-type"][a.exampleKey] = t.contentType
}, S2 = (e, {
    meta: a,
    payload: t,
    contentType: n
}) => {
    const r = ho(e, n, a);
    if (!r) {
        console.error("Example not found", a.exampleKey);
        return
    }
    r.value = t
}, x2 = (e, {
    meta: a,
    payload: t,
    contentType: n
}) => {
    const r = ho(e, n, a);
    if (!r) {
        console.error("Example not found", a.exampleKey);
        return
    }
    r.value = ne(t, {
        depth: 3
    })
}, w2 = (e, {
    meta: a,
    payload: t
}) => {
    var r, o;
    if (!ee(e)) return;
    const n = W((o = (r = e.paths) == null ? void 0 : r[a.path]) == null ? void 0 : o[a.method]);
    n && Ot(n, t)
}, A2 = async ({
    requestPayload: e,
    includeBody: a = !0,
    httpVersion: t = "HTTP/1.1",
    bodySizeLimit: n = 1048576
}) => {
    var y, h;
    const [r, o] = e, l = new URL(r), s = Array.from(l.searchParams.entries()).map(([w, P]) => ({
        name: w,
        value: P
    })), i = new Headers(o.headers), c = ((h = (y = i.get("content-type")) == null ? void 0 : y.split(";")[0]) == null ? void 0 : h.trim()) ?? "text/plain", {
        headers: f,
        headersSize: d,
        cookies: v
    } = H2(i), m = await (async () => {
        if (a && o.body != null) {
            const w = await T2(o.body, c);
            if (w.size <= n) return w
        }
        return {
            text: "",
            size: -1
        }
    })();
    return {
        method: o.method ?? "GET",
        url: r,
        httpVersion: t,
        headers: f,
        cookies: v,
        queryString: s,
        headersSize: d,
        bodySize: m.size,
        postData: "params" in m ? {
            mimeType: c,
            params: m.params
        } : {
            mimeType: c,
            text: m.text
        }
    }
}, T2 = async (e, a) => {
    if (e instanceof FormData) return k2(e);
    if (e instanceof URLSearchParams) return C2(e);
    if (a.includes("application/octet-stream")) return {
        text: "",
        size: -1
    };
    if (typeof e == "string") {
        const t = new TextEncoder().encode(e).byteLength;
        return {
            text: e,
            size: t
        }
    }
    return e instanceof Blob ? {
        text: await e.text(),
        size: e.size
    } : e instanceof ArrayBuffer ? {
        text: new TextDecoder().decode(e),
        size: e.byteLength
    } : ArrayBuffer.isView(e) ? {
        text: new TextDecoder().decode(e),
        size: e.byteLength
    } : {
        text: "",
        size: -1
    }
}, k2 = e => Array.from(e.entries()).reduce((a, [t, n]) => {
    if (n instanceof File) {
        const r = `@${n.name}`;
        return a.params.push({
            name: t,
            value: r
        }), a.size += r.length, a
    }
    return a.params.push({
        name: t,
        value: n
    }), a.size += n.length, a
}, {
    params: [],
    size: 0
}), C2 = e => Array.from(e.entries()).reduce((a, [t, n]) => (a.params.push({
    name: t,
    value: n
}), a.size += t.length + n.length, a), {
    params: [],
    size: 0
}), H2 = e => Array.from(e.entries()).reduce((a, [t, n]) => {
    if (t.toLowerCase() === "cookie") {
        const r = P2(n);
        a.cookies.push(...r.cookies)
    } else a.headers.push({
        name: t,
        value: n
    }), a.headersSize += t.length + 2 + n.length + 2;
    return a
}, {
    headers: [],
    headersSize: 0,
    cookies: []
}), P2 = e => e.split(";").reduce((a, t) => {
    const n = t.trim(),
        r = n.indexOf("=");
    if (r === -1) return a;
    const o = n.substring(0, r).trim(),
        l = n.substring(r + 1).trim();
    return a.cookies.push({
        name: o,
        value: l
    }), a.size += o.length + 2 + l.length + 2, a
}, {
    cookies: [],
    size: 0
}), B2 = async ({
    response: e,
    includeBody: a = !0,
    httpVersion: t = "HTTP/1.1",
    bodySizeLimit: n = 1048576
}) => {
    const {
        headers: r,
        headersSize: o,
        cookies: l
    } = M2(e), s = e.headers.get("location") || "", i = e.headers.get("content-type") ?? "text/plain", c = await (async () => {
        if (a && e.body) {
            const d = await E2(e.clone());
            if (d.size <= n) return d
        }
        return {
            text: "",
            size: -1,
            encoding: void 0
        }
    })();
    return {
        status: e.status,
        statusText: e.statusText,
        httpVersion: t,
        headers: r,
        cookies: l,
        content: {
            size: c.size,
            mimeType: i,
            text: c.text,
            encoding: c.encoding
        },
        redirectURL: s,
        headersSize: o,
        bodySize: c.size
    }
}, M2 = e => Array.from(e.headers.entries()).reduce((a, [t, n]) => {
    if (a.headers.push({
            name: t,
            value: n
        }), a.headersSize += t.length + 2 + n.length + 2, t.toLowerCase() === "set-cookie") {
        const r = I2(n);
        r && a.cookies.push(r)
    }
    return a
}, {
    headers: [],
    headersSize: 0,
    cookies: []
}), E2 = async e => {
    const a = e.headers.get("content-type");
    if (!a || !R2(a)) return {
        text: "",
        size: -1,
        encoding: void 0
    };
    try {
        const t = await e.arrayBuffer(),
            n = t.byteLength;
        return {
            text: new TextDecoder("utf-8").decode(t),
            size: n,
            encoding: void 0
        }
    } catch {
        return {
            text: "",
            size: -1,
            encoding: void 0
        }
    }
}, R2 = e => {
    const a = e.toLowerCase();
    return !!(a.startsWith("text/") || a.includes("application/json") || a.includes("+json") || a.includes("application/xml") || a.includes("text/xml") || a.includes("+xml") || a.includes("application/javascript") || a.includes("application/x-javascript") || a.includes("application/x-www-form-urlencoded") || a.includes("application/graphql"))
}, I2 = e => {
    const a = e.split(";");
    if (a.length === 0 || !a[0]) return null;
    const t = a[0].trim(),
        n = t.indexOf("=");
    if (n === -1) return null;
    const r = t.substring(0, n).trim(),
        o = t.substring(n + 1).trim();
    return {
        name: r,
        value: o
    }
}, O2 = (e, a, t) => {
    e.forEach(n => {
        const r = W(n);
        Je(r) || ($2(W(n), t, !0), r.in === "path" && (r.examples || (r.examples = {}), r.examples[t] = {
            value: a[r.name] ?? "",
            "x-disabled": !1
        }))
    })
}, V2 = ({
    harRequest: e,
    exampleKey: a,
    baseOperation: t = {},
    pathVariables: n = {}
}) => {
    if (t.parameters || (t.parameters = []), O2(t.parameters, n, a), e.queryString && e.queryString.length > 0)
        for (const r of e.queryString) {
            const o = Aa(t.parameters, r.name, "query");
            !o || Je(o) || (o.examples || (o.examples = {}), o.examples[a] = {
                value: r.value,
                "x-disabled": !1
            })
        }
    if (e.headers && e.headers.length > 0)
        for (const r of e.headers) {
            const o = Aa(t.parameters, r.name, "header");
            !o || Je(o) || (o.examples || (o.examples = {}), o.examples[a] = {
                value: r.value,
                "x-disabled": !1
            })
        }
    if (e.cookies && e.cookies.length > 0)
        for (const r of e.cookies) {
            const o = Aa(t.parameters, r.name, "cookie");
            !o || Je(o) || (o.examples || (o.examples = {}), o.examples[a] = {
                value: r.value,
                "x-disabled": !1
            })
        }
    if (e.postData) {
        const {
            mimeType: r,
            text: o,
            params: l
        } = e.postData;
        t.requestBody || (t.requestBody = {
            content: {}
        });
        const s = W(t.requestBody);
        s.content[r] || (s.content[r] = {
            schema: {
                type: "object"
            }
        });
        const i = s.content[r];
        if (!i) return t;
        i.examples || (i.examples = {});
        let c;
        if (l && l.length > 0) {
            c = [];
            for (const f of l) c.push({
                name: f.name,
                value: f.value,
                "x-disabled": !1
            })
        } else c = o;
        i.examples[a] = {
            value: c,
            "x-disabled": !1
        }, s["x-scalar-selected-content-type"] || (s["x-scalar-selected-content-type"] = {}), s["x-scalar-selected-content-type"][a] = r
    }
    return t
}, $2 = (e, a, t) => {
    var n;
    Je(e) || (n = e.examples) != null && n[a] && (W(e.examples[a])["x-disabled"] = t)
}, Aa = (e, a, t) => {
    for (const r of e) {
        const o = W(r);
        if (Je(o) || o.in !== t) continue;
        if (t === "header" ? o.name.toLowerCase() === a.toLowerCase() : o.name === a) return o
    }
    const n = {
        name: a,
        in: t,
        schema: {
            type: "string"
        }
    };
    return e.push(n), n
}, L2 = async (e, a, {
    payload: t,
    meta: n
}) => {
    var f, d, v;
    if (!ee(a)) return;
    const r = (f = a["x-scalar-navigation"]) == null ? void 0 : f.name;
    if (!r || !t) return;
    const o = W((v = (d = a.paths) == null ? void 0 : d[n.path]) == null ? void 0 : v[n.method]);
    if (!o) return;
    const s = (o.parameters ?? []).reduce((m, g) => {
            var h, w;
            const y = W(g);
            return Je(y) || y.in === "path" && (m[y.name] = ((w = W((h = y.examples) == null ? void 0 : h[n.exampleKey])) == null ? void 0 : w.value) ?? ""), m
        }, {}),
        i = await A2({
            requestPayload: t.requestPayload
        }),
        c = await B2({
            response: t.response
        });
    e == null || e.history.addHistory(r, n.path, n.method, {
        response: c,
        request: i,
        meta: {
            example: n.exampleKey
        },
        time: t.duration,
        timestamp: t.timestamp,
        requestMetadata: {
            variables: s
        }
    })
}, U2 = (e, a, {
    meta: t,
    index: n,
    callback: r
}) => {
    var s, i, c, f;
    if (!ee(a)) {
        console.error("Document not found", t.path, t.method);
        return
    }
    const o = W((i = (s = a.paths) == null ? void 0 : s[t.path]) == null ? void 0 : i[t.method]);
    if (!o) {
        console.error("Operation not found", t.path, t.method);
        return
    }
    const l = (f = e == null ? void 0 : e.history.getHistory(((c = a["x-scalar-navigation"]) == null ? void 0 : c.name) ?? "", t.path, t.method)) == null ? void 0 : f[n];
    if (!l) {
        console.error("History item not found", n);
        return
    }
    V2({
        harRequest: l.request,
        exampleKey: "draft",
        baseOperation: o,
        pathVariables: l.requestMetadata.variables
    }), r("success")
}, go = ({
    store: e,
    generateId: a,
    ...t
}) => {
    var n;
    (n = t.entries) == null || n.forEach(r => {
        var c;
        if (!Fv(r.parent)) return;
        const o = qv({
            store: e,
            entry: r.parent
        });
        if (!o || !("x-scalar-order" in o)) return;
        const l = o["x-scalar-order"],
            s = l == null ? void 0 : l.indexOf(r.id);
        if (!Array.isArray(l) || typeof s != "number" || s < 0) return;
        if ("tag" in t) {
            const f = r.id,
                d = a({
                    type: "tag",
                    parentId: r.parent.id,
                    tag: t.tag
                });
            if (l[s] = d, f !== d) {
                const v = Pt("document", r),
                    m = v ? e.workspace.documents[v.name] : null,
                    g = ee(m) ? (c = m.tags) == null ? void 0 : c.find(h => h.name === t.tag.name) : void 0,
                    y = g == null ? void 0 : g["x-scalar-order"];
                if (g && Array.isArray(y)) {
                    const h = `${f}/`,
                        w = `${d}/`;
                    g["x-scalar-order"] = y.map(P => P.startsWith(h) ? w + P.slice(h.length) : P)
                }
            }
            return
        }
        const i = r.parent.type === "tag" && "name" in o ? {
            tag: o,
            id: r.parent.id
        } : void 0;
        l[s] = a({
            type: "operation",
            path: t.path,
            method: t.method,
            operation: t.operation,
            parentId: r.parent.id,
            parentTag: i
        })
    })
}, D2 = (e, a) => {
    var d, v, m;
    const t = e == null ? void 0 : e.workspace.documents[a.documentName];
    if (!ee(t)) {
        (d = a.callback) == null || d.call(a, !1);
        return
    }
    const {
        path: n,
        method: r,
        operation: o
    } = a, l = n.startsWith("/") ? n : `/${n}`;
    t.paths || (t.paths = {}), t.paths[l] || (t.paths[l] = {}), ze(l), ze(r), t.paths[l][r] = o;
    const {
        servers: s
    } = o, i = ne(s == null ? void 0 : s[0]);
    for (const g of s ?? [])(v = t.servers) != null && v.some(y => y.url === g.url) || (t.servers || (t.servers = []), t.servers.push(ne(g)));
    i && (t["x-scalar-selected-server"] = i.url);
    const c = o.parameters,
        f = Er(l, l, c ?? [], W);
    return (c !== void 0 || f.length > 0) && (o.parameters = f), (m = a.callback) == null || m.call(a, !0), l
}, z2 = (e, a, {
    meta: t,
    payload: n
}) => {
    var l, s, i;
    if (!e || !ee(a)) return;
    const r = (l = a["x-scalar-navigation"]) == null ? void 0 : l.name;
    if (r === void 0) return;
    const o = W((i = (s = a.paths) == null ? void 0 : s[t.path]) == null ? void 0 : i[t.method]);
    if (!o) {
        console.error("Operation not found", {
            meta: t,
            document: a
        });
        return
    }
    Object.assign(o, n), e.buildSidebar(r)
}, Z2 = (e, a, {
    meta: t,
    payload: {
        method: n,
        path: r
    },
    blurTargetSelector: o,
    callback: l
}) => {
    var w, P, k, D, Z;
    const s = t.method !== n,
        i = t.path !== r;
    if (!s && !i) {
        l("no-change", o);
        return
    }
    const c = s ? n : t.method,
        f = i ? r : t.path;
    if (!a || !ee(e)) {
        console.error("Document or workspace not found", {
            document: e
        });
        return
    }
    if ((P = (w = e.paths) == null ? void 0 : w[f]) != null && P[c]) {
        l("conflict", o);
        return
    }
    const d = e["x-scalar-navigation"];
    if (!d) {
        console.error("Document navigation missing", {
            document: e
        });
        return
    }
    const v = W((D = (k = e.paths) == null ? void 0 : k[t.path]) == null ? void 0 : D[t.method]);
    if (!v) {
        console.error("Operation not found", {
            meta: t,
            document: e
        });
        return
    }
    if (i) {
        const J = Jt(t.path, {
                includePath: !0,
                includeEnv: !1
            }).filter(ae => ae !== void 0),
            G = Jt(f, {
                includePath: !0,
                includeEnv: !1
            }).filter(ae => ae !== void 0);
        if (J.length > 0 || G.length > 0) {
            const ae = v.parameters ?? [],
                Q = Er(f, t.path, ae, W);
            v.parameters = Q
        }
    }
    const {
        generateId: m
    } = Rr(d.name), y = vo(d).get(`${t.path}|${t.method}`);
    y && go({
        store: a,
        operation: v,
        generateId: m,
        method: c,
        path: f,
        entries: y
    }), e.paths || (e.paths = {}), e.paths[f] || (e.paths[f] = {}), ze(f), ze(t.path), ze(c), e.paths[f][c] = ne(v);
    const h = e.paths[t.path];
    h && Oa(t.method) && (delete h[t.method], Object.keys(h).length === 0 && delete e.paths[t.path]), a.history.clearOperationHistory(((Z = e["x-scalar-navigation"]) == null ? void 0 : Z.name) ?? "", t.path, t.method), l("success", o)
}, N2 = (e, {
    meta: a,
    documentName: t
}) => {
    var r, o, l, s;
    const n = e == null ? void 0 : e.workspace.documents[t];
    ee(n) && (ze(a.path), ze(a.method), (o = (r = n.paths) == null ? void 0 : r[a.path]) == null || delete o[a.method], Object.keys(((l = n.paths) == null ? void 0 : l[a.path]) ?? {}).length === 0 && ((s = n.paths) == null || delete s[a.path]))
}, F2 = (e, {
    meta: {
        path: a,
        method: t
    },
    documentName: n,
    exampleName: r
}) => {
    var i, c;
    const o = e == null ? void 0 : e.workspace.documents[n];
    if (!ee(o)) {
        console.error("Document not found", {
            documentName: n
        });
        return
    }
    const l = W((c = (i = o.paths) == null ? void 0 : i[a]) == null ? void 0 : c[t]);
    if (!l) {
        console.error("Operation not found", {
            path: a,
            method: t
        });
        return
    }
    l["x-draft-examples"] ?? (l["x-draft-examples"] = []);
    const s = new Set(l["x-draft-examples"]);
    s.add(r), l["x-draft-examples"] = Array.from(s)
}, q2 = (e, {
    meta: {
        path: a,
        method: t,
        exampleKey: n
    },
    documentName: r
}) => {
    var c, f, d;
    const o = e == null ? void 0 : e.workspace.documents[r];
    if (!ee(o)) return;
    const l = W((f = (c = o.paths) == null ? void 0 : c[a]) == null ? void 0 : f[t]);
    if (!l) return;
    const s = new Set(l["x-draft-examples"] ?? []);
    s.delete(n), l["x-draft-examples"] !== void 0 && (l["x-draft-examples"] = Array.from(s)), (d = l.parameters) == null || d.forEach(v => {
        var g;
        const m = W(v);
        "content" in m && m.content && Object.values(m.content).forEach(y => {
            var h;
            (h = y.examples) == null || delete h[n]
        }), "examples" in m && m.examples && ((g = m.examples) == null || delete g[n])
    });
    const i = W(l.requestBody);
    i && Object.values(i.content ?? {}).forEach(v => {
        var m;
        (m = v.examples) == null || delete m[n]
    })
}, W2 = (e, {
    meta: {
        path: a,
        method: t,
        exampleKey: n
    },
    documentName: r,
    payload: o
}) => {
    var d, v, m, g;
    const l = e == null ? void 0 : e.workspace.documents[r];
    if (!ee(l)) return;
    const s = W((v = (d = l.paths) == null ? void 0 : d[a]) == null ? void 0 : v[t]);
    if (!s) return;
    const i = o.name.trim();
    if (!i || i === n) return;
    ze(i);
    const c = [];
    (m = s.parameters) == null || m.forEach(y => {
        const h = W(y);
        "examples" in h && h.examples && c.push(h.examples), "content" in h && h.content && Object.values(h.content).forEach(w => {
            w.examples && c.push(w.examples)
        })
    });
    const f = W(s.requestBody);
    f && (Object.values(f.content ?? {}).forEach(y => {
        y.examples && c.push(y.examples)
    }), f["x-scalar-selected-content-type"] && c.push(f["x-scalar-selected-content-type"])), !((g = s["x-draft-examples"]) != null && g.includes(i) || c.some(y => Object.hasOwn(y, i))) && (s["x-draft-examples"] && (s["x-draft-examples"] = s["x-draft-examples"].map(y => y === n ? i : y)), c.forEach(y => {
        Object.hasOwn(y, n) && (y[i] = ne(y[n]), delete y[n])
    }))
}, j2 = (e, {
    meta: a,
    type: t,
    payload: n,
    originalParameter: r
}) => {
    var l, s;
    if (r) {
        const i = r;
        i.name = n.name, i.examples || (i.examples = {}), i.examples[a.exampleKey] || (i.examples[a.exampleKey] = {});
        const c = W(i.examples[a.exampleKey]);
        c.value = n.value, c["x-disabled"] = n.isDisabled;
        return
    }
    if (!ee(e)) return;
    const o = W((s = (l = e.paths) == null ? void 0 : l[a.path]) == null ? void 0 : s[a.method]);
    if (!o) {
        console.error("Operation not found", {
            meta: a,
            document: e
        });
        return
    }
    o.parameters || (o.parameters = []), o.parameters.push({
        name: n.name,
        in: t,
        required: t === "path",
        examples: {
            [a.exampleKey]: {
                value: n.value,
                "x-disabled": !1
            }
        }
    })
}, K2 = (e, {
    type: a,
    meta: t,
    payload: n,
    in: r
}) => {
    var i, c, f;
    if (!ee(e)) return;
    const o = W((c = (i = e.paths) == null ? void 0 : i[t.path]) == null ? void 0 : c[t.method]);
    if (!o) return;
    o["x-scalar-disable-parameters"] || (o["x-scalar-disable-parameters"] = {});
    const s = (f = {
        global: {
            cookie: "global-cookies"
        },
        default: {
            header: "default-headers"
        }
    } [a]) == null ? void 0 : f[r];
    s && (o["x-scalar-disable-parameters"][s] || (o["x-scalar-disable-parameters"][s] = {}), o["x-scalar-disable-parameters"][s][t.exampleKey] = {
        ...o["x-scalar-disable-parameters"][s][t.exampleKey] ?? {},
        [t.name]: n.isDisabled ?? !1
    })
}, G2 = (e, {
    meta: a,
    originalParameter: t
}) => {
    var s, i, c, f, d, v, m;
    if (!ee(e)) return;
    const n = W((i = (s = e.paths) == null ? void 0 : s[a.path]) == null ? void 0 : i[a.method]),
        r = ((c = n == null ? void 0 : n.parameters) == null ? void 0 : c.findIndex(g => W(g) === t)) ?? -1;
    if (n && r >= 0) {
        n.parameters = ne((f = n.parameters) == null ? void 0 : f.filter((g, y) => y !== r), {
            depth: 1
        });
        return
    }
    const o = W((d = e.paths) == null ? void 0 : d[a.path]),
        l = ((v = o == null ? void 0 : o.parameters) == null ? void 0 : v.findIndex(g => W(g) === t)) ?? -1;
    o && l >= 0 && (o.parameters = ne((m = o.parameters) == null ? void 0 : m.filter((g, y) => y !== l), {
        depth: 1
    }))
}, Y2 = (e, {
    meta: a,
    type: t
}) => {
    var r, o, l;
    if (!ee(e)) return;
    const n = W((o = (r = e.paths) == null ? void 0 : r[a.path]) == null ? void 0 : o[a.method]);
    n && (n.parameters = ((l = n.parameters) == null ? void 0 : l.filter(s => W(s).in !== t)) ?? [])
}, X2 = ({
    document: e,
    store: a
}) => ({
    createOperation: t => D2(a, t),
    updateOperationMeta: t => z2(a, e, t),
    updateOperationPathMethod: t => Z2(e, a, t),
    deleteOperation: t => N2(a, t),
    createOperationDraftExample: t => F2(a, t),
    deleteOperationExample: t => q2(a, t),
    renameOperationExample: t => W2(a, t),
    updateOperationExtension: t => w2(e, t),
    updateOperationExtraParameters: t => K2(e, t),
    upsertOperationParameter: t => j2(e, t),
    deleteOperationParameter: t => G2(e, t),
    deleteAllOperationParameters: t => Y2(e, t),
    updateOperationRequestBodyContentType: t => b2(e, t),
    updateOperationRequestBodyExample: t => S2(e, t),
    updateOperationRequestBodyFormValue: t => x2(e, t),
    addResponseToHistory: t => L2(a, e, t),
    reloadOperationHistory: t => U2(a, e, t)
}), nt = (e, a) => {
    var t, n;
    return ee(e) ? a.type === "document" ? e : W((n = (t = e.paths) == null ? void 0 : t[a.path]) == null ? void 0 : n[a.method]) ?? null : null
}, Q2 = (e, {
    meta: a
}) => {
    const t = nt(e, a);
    if (!t) {
        console.error("Target not found", a);
        return
    }
    return t.servers = [], t.servers
}, J2 = (e, {
    url: a,
    select: t,
    meta: n
}) => {
    const r = nt(e, n);
    if (!r) {
        console.error("Target not found", n);
        return
    }
    const o = je(Ir, {
        url: a
    });
    return r.servers || (r.servers = []), r.servers.push(o), t && (r["x-scalar-selected-server"] = o.url), o
}, Qn = (e, a) => {
    const t = {};
    for (const n of a) {
        const r = e.indexOf(`{${n}}`);
        r !== -1 && (t[n] = r)
    }
    return t
}, _2 = (e, a, t) => {
    const n = Jt(a, {
            includePath: !0,
            includeEnv: !1
        }).filter(c => c !== void 0),
        r = Jt(e, {
            includePath: !0,
            includeEnv: !1
        }).filter(c => c !== void 0),
        o = Qn(a, n),
        l = Qn(e, r),
        s = new Set,
        i = {};
    for (const c of r) {
        if (t[c]) {
            i[c] = t[c], s.add(c);
            continue
        }
        const f = l[c],
            d = n.find(v => o[v] === f && !s.has(v));
        if (d && t[d]) {
            i[c] = t[d], s.add(d);
            continue
        }
        i[c] = {
            default: ""
        }
    }
    return i
}, ef = (e, {
    index: a,
    server: t,
    meta: n
}) => {
    var c;
    const r = nt(e, n);
    if (!r) return;
    const o = ne((c = r.servers) == null ? void 0 : c[a], {
        depth: 1
    });
    if (!o) {
        console.error("Server not found at index:", a);
        return
    }
    const l = o.url,
        s = je(Ir, {
            ...o,
            ...t
        });
    if (l && l !== s.url) {
        const f = s.variables ?? {};
        s.variables = _2(s.url, l, f), r["x-scalar-selected-server"] === l && (r["x-scalar-selected-server"] = s.url)
    }
    return r.servers ? r.servers[a] = s : r.servers = [s], s
}, tf = (e, {
    index: a,
    meta: t
}) => {
    var o, l;
    const n = nt(e, t);
    if (!(n != null && n.servers)) return;
    const r = (o = n.servers[a]) == null ? void 0 : o.url;
    n.servers.splice(a, 1), n["x-scalar-selected-server"] === r && (n["x-scalar-selected-server"] = ((l = n.servers[0]) == null ? void 0 : l.url) ?? void 0)
}, af = (e, {
    meta: a
}) => {
    const t = nt(e, a);
    t && (t.servers = void 0, t["x-scalar-selected-server"] = void 0)
}, nf = (e, {
    index: a,
    key: t,
    value: n,
    meta: r
}) => {
    var s, i, c;
    const o = nt(e, r),
        l = (c = (i = (s = o == null ? void 0 : o.servers) == null ? void 0 : s[a]) == null ? void 0 : i.variables) == null ? void 0 : c[t];
    if (!l) {
        console.error("Variable not found", t, a);
        return
    }
    return l.default = n, l
}, rf = (e, {
    url: a,
    meta: t
}) => {
    const n = nt(e, t);
    if (n) return a === "" ? (n["x-scalar-selected-server"] = "", "") : (n["x-scalar-selected-server"] = n["x-scalar-selected-server"] === a ? "" : a, n["x-scalar-selected-server"])
}, of = ({
    document: e
}) => ({
    initializeServers: a => Q2(e, a),
    addServer: a => J2(e, a),
    updateServer: a => ef(e, a),
    deleteServer: a => tf(e, a),
    clearServers: a => af(e, a),
    updateServerVariables: a => nf(e, a),
    updateSelectedServer: a => rf(e, a)
}), lf = 1, rt = e => e !== null && e["x-scalar-tabs"] !== void 0, wt = e => ne(e["x-scalar-tabs"], {
    depth: lf
}), fa = e => e["x-scalar-active-tab"] ?? 0, sf = (e, a) => {
    e && (a["x-scalar-tabs"] && (e["x-scalar-tabs"] = a["x-scalar-tabs"]), a["x-scalar-active-tab"] !== void 0 && (e["x-scalar-active-tab"] = a["x-scalar-active-tab"]))
}, uf = (e, a) => {
    if (!rt(e)) return !1;
    const t = wt(e),
        n = fa(e),
        r = t[n];
    if (!r) return !1;
    const o = [...t, {
        ...r
    }];
    return e["x-scalar-tabs"] = o, e["x-scalar-active-tab"] = o.length - 1, !0
}, df = (e, a) => {
    const t = () => "event" in a ? a.event.code.startsWith("Digit") ? Number.parseInt(a.event.key, 10) - 1 : Number.NaN : a.index;
    if (!rt(e)) return !1;
    const n = t(),
        r = fa(e),
        o = wt(e).filter((s, i) => i !== n);
    if (o.length <= 0) return !1;
    e["x-scalar-tabs"] = o;
    const l = n < r ? r - 1 : Math.min(r, o.length - 1);
    return e["x-scalar-active-tab"] = l, !0
}, cf = (e, a) => {
    if (!rt(e)) return !1;
    const t = wt(e);
    return t.length <= 1 ? !1 : (e["x-scalar-tabs"] = t.filter((n, r) => r === a.index), e["x-scalar-active-tab"] = 0, !0)
}, vf = (e, a) => {
    if (!rt(e)) return !1;
    const t = fa(e);
    return t <= 0 ? !1 : (e["x-scalar-active-tab"] = t - 1, !0)
}, ff = (e, a) => {
    if (!rt(e)) return !1;
    const t = wt(e),
        n = fa(e);
    return n >= t.length - 1 ? !1 : (e["x-scalar-active-tab"] = n + 1, !0)
}, mf = (e, a) => {
    if (!rt(e)) return !1;
    const t = () => "event" in a ? a.event.code.startsWith("Digit") ? Number.parseInt(a.event.key, 10) - 1 : Number.NaN : a.index,
        n = wt(e),
        r = t();
    return Number.isNaN(r) || r < 0 || r >= n.length ? !1 : (e["x-scalar-active-tab"] = r, !0)
}, pf = (e, a) => {
    if (!rt(e)) return !1;
    const t = wt(e);
    return t.length <= 1 ? !1 : (e["x-scalar-active-tab"] = t.length - 1, !0)
}, hf = ({
    workspace: e
}) => ({
    updateTabs: a => sf(e, a),
    addTab: a => uf(e),
    closeTab: a => df(e, a),
    closeOtherTabs: a => cf(e, a),
    navigatePreviousTab: a => vf(e),
    navigateNextTab: a => ff(e),
    focusTab: a => mf(e, a),
    focusLastTab: a => pf(e)
}), gf = (e, a) => {
    const t = e == null ? void 0 : e.workspace.documents[a.documentName];
    if (!ee(t)) {
        console.error("Document not found", {
            payload: a,
            store: e
        });
        return
    }
    t.tags || (t.tags = []), t.tags.push({
        name: a.name
    })
}, yf = (e, a) => {
    var c, f;
    const t = e == null ? void 0 : e.workspace.documents[a.documentName];
    if (!e || !ee(t)) {
        console.error("Document not found", {
            payload: a,
            store: e
        });
        return
    }
    const n = t["x-scalar-navigation"];
    if (!n) {
        console.error("Document navigation missing", {
            payload: a,
            store: e
        });
        return
    }
    const r = a.tag.name,
        o = a.newName;
    if ((c = t.tags) != null && c.length && (t.tags = t.tags.map(d => {
            const v = ne(d);
            return v.name === r ? {
                ...v,
                name: o
            } : v
        })), (f = a.tag.children) == null || f.forEach(d => {
            var v, m, g, y;
            if (d.type === "operation") {
                const h = W((m = (v = t.paths) == null ? void 0 : v[d.path]) == null ? void 0 : m[d.method]);
                if (h && "tags" in h) {
                    const w = ne(h.tags, {
                        depth: null
                    });
                    h.tags = w == null ? void 0 : w.map(P => P === r ? o : P)
                }
            } else if (d.type === "webhook") {
                const h = W((y = (g = t.webhooks) == null ? void 0 : g[d.name]) == null ? void 0 : y[d.method]);
                if (h && "tags" in h) {
                    const w = ne(h.tags, {
                        depth: null
                    });
                    h.tags = w == null ? void 0 : w.map(P => P === r ? o : P)
                }
            }
        }), t["x-tagGroups"]) {
        const d = ne(t["x-tagGroups"], {
            depth: null
        });
        t["x-tagGroups"] = d.map(v => ({
            ...v,
            tags: v.tags.map(m => m === r ? o : m)
        }))
    }
    const {
        generateId: l
    } = Rr(n.name), i = Wv(n).get(r);
    i && go({
        store: e,
        tag: {
            name: o
        },
        generateId: l,
        entries: i
    })
}, bf = (e, a) => {
    const t = e == null ? void 0 : e.workspace.documents[a.documentName];
    if (!ee(t)) return;
    Object.values(t.paths ?? {}).forEach(r => {
        Object.values(r).forEach(o => {
            if (typeof o != "object" || Array.isArray(o)) return;
            const l = W(o);
            if ("tags" in l) {
                const s = ne(l.tags, {
                    depth: 1
                });
                l.tags = s == null ? void 0 : s.filter(i => i !== a.name)
            }
        })
    }), Object.values(t.webhooks ?? {}).forEach(r => {
        Object.values(r).forEach(o => {
            if (typeof o != "object" || Array.isArray(o)) return;
            const l = W(o),
                s = ne(l.tags, {
                    depth: 1
                });
            l.tags = s == null ? void 0 : s.filter(i => i !== a.name)
        })
    });
    const n = ne(t.tags, {
        depth: null
    });
    t.tags = n == null ? void 0 : n.filter(r => r.name !== a.name)
}, Sf = ({
    store: e
}) => ({
    createTag: a => gf(e, a),
    editTag: a => yf(e, a),
    deleteTag: a => bf(e, a)
}), xf = (e, a) => {
    e && (e["x-scalar-active-proxy"] = a)
}, wf = (e, a) => {
    e && (e["x-scalar-color-mode"] = a)
}, Af = (e, a) => {
    e && (e["x-scalar-theme"] = a)
}, Tf = (e, a) => {
    e && (e["x-scalar-active-environment"] = a ?? void 0)
}, kf = (e, a) => {
    e && (e["x-scalar-default-client"] = a)
}, Cf = ({
    workspace: e
}) => ({
    updateActiveProxy: a => xf(e, a),
    updateColorMode: a => wf(e, a),
    updateTheme: a => Af(e, a),
    updateSelectedClient: a => kf(e, a),
    updateActiveEnvironment: a => Tf(e, a)
});

function Hf(e) {
    const a = n => ({
            auth: r2({
                store: e,
                document: n
            }),
            cookie: Yn({
                collection: n
            }),
            document: f2({
                document: n,
                store: e
            }),
            operation: X2({
                document: n,
                store: e
            }),
            server: of({
                document: n
            }),
            tag: Sf({
                store: e
            }),
            environment: Xn({
                workspace: (e == null ? void 0 : e.workspace) ?? null,
                collection: n
            })
        }),
        t = () => ({
            cookie: Yn({
                collection: (e == null ? void 0 : e.workspace) ?? null
            }),
            tabs: hf({
                workspace: (e == null ? void 0 : e.workspace) ?? null
            }),
            workspace: Cf({
                workspace: (e == null ? void 0 : e.workspace) ?? null
            }),
            environment: Xn({
                workspace: (e == null ? void 0 : e.workspace) ?? null,
                collection: (e == null ? void 0 : e.workspace) ?? null
            })
        });
    return {
        workspace: () => t(),
        active: () => a((e == null ? void 0 : e.workspace.activeDocument) ?? null),
        doc: n => a(y2(e, n))
    }
}
var j = (e, a, t) => async n => {
    var o, l, s, i;
    const r = await ((l = (o = t[e]) == null ? void 0 : o.onBeforeExecute) == null ? void 0 : l.call(o, n)) ?? n;
    return await a(r), await ((i = (s = t[e]) == null ? void 0 : s.onAfterExecute) == null ? void 0 : i.call(s, r)), r
};

function Pf({
    eventBus: e,
    store: a,
    hooks: t
}) {
    const n = T(() => Hf(a.value)),
        r = ({
            collectionType: o
        }) => o === "document" ? n.value.active() : n.value.workspace();
    e.on("workspace:update:active-proxy", o => j("workspace:update:active-proxy", n.value.workspace().workspace.updateActiveProxy, t)(o)), e.on("workspace:update:color-mode", o => j("workspace:update:color-mode", n.value.workspace().workspace.updateColorMode, t)(o)), e.on("workspace:update:theme", o => j("workspace:update:theme", n.value.workspace().workspace.updateTheme, t)(o)), e.on("workspace:update:selected-client", o => j("workspace:update:selected-client", n.value.workspace().workspace.updateSelectedClient, t)(o)), e.on("workspace:update:active-environment", o => j("workspace:update:active-environment", n.value.workspace().workspace.updateActiveEnvironment, t)(o)), e.on("document:update:extension", o => j("document:update:extension", n.value.active().document.updateDocumentExtension, t)(o)), e.on("document:update:icon", o => j("document:update:icon", n.value.active().document.updateDocumentIcon, t)(o)), e.on("document:update:info", o => j("document:update:info", n.value.active().document.updateDocumentInfo, t)(o)), e.on("document:update:watch-mode", o => j("document:update:watch-mode", n.value.active().document.updateWatchMode, t)(o)), e.on("document:create:empty-document", o => j("document:create:empty-document", n.value.active().document.createEmptyDocument, t)(o)), e.on("document:delete:document", o => j("document:delete:document", n.value.active().document.deleteDocument, t)(o)), e.on("environment:upsert:environment", o => j("environment:upsert:environment", r(o).environment.upsertEnvironment, t)(o)), e.on("environment:delete:environment", o => j("environment:delete:environment", r(o).environment.deleteEnvironment, t)(o)), e.on("environment:upsert:environment-variable", o => j("environment:upsert:environment-variable", r(o).environment.upsertEnvironmentVariable, t)(o)), e.on("environment:delete:environment-variable", o => j("environment:delete:environment-variable", r(o).environment.deleteEnvironmentVariable, t)(o)), e.on("cookie:upsert:cookie", async o => {
        await j("cookie:upsert:cookie", r(o).cookie.upsertCookie, t)(o)
    }), e.on("cookie:delete:cookie", async o => {
        await j("cookie:delete:cookie", r(o).cookie.deleteCookie, t)(o)
    }), e.on("auth:delete:security-scheme", o => j("auth:delete:security-scheme", n.value.active().auth.deleteSecurityScheme, t)(o)), e.on("auth:update:active-index", o => j("auth:update:active-index", n.value.active().auth.updateSelectedAuthTab, t)(o)), e.on("auth:update:security-scheme", o => j("auth:update:security-scheme", n.value.active().auth.updateSecurityScheme, t)(o)), e.on("auth:update:selected-scopes", o => j("auth:update:selected-scopes", n.value.active().auth.updateSelectedScopes, t)(o)), e.on("auth:upsert:scopes", o => j("auth:upsert:scopes", n.value.active().auth.upsertScope, t)(o)), e.on("auth:delete:scopes", o => j("auth:delete:scopes", n.value.active().auth.deleteScope, t)(o)), e.on("auth:update:selected-security-schemes", o => j("auth:update:selected-security-schemes", n.value.active().auth.updateSelectedSecuritySchemes, t)(o)), e.on("auth:clear:selected-security-schemes", o => j("auth:clear:selected-security-schemes", n.value.active().auth.clearSelectedSecuritySchemes, t)(o)), e.on("auth:update:security-scheme-secrets", o => j("auth:update:security-scheme-secrets", n.value.active().auth.updateSecuritySchemeSecrets, t)(o)), e.on("auth:clear:security-scheme-secrets", o => j("auth:clear:security-scheme-secrets", n.value.active().auth.clearSecuritySchemeSecrets, t)(o)), e.on("server:initialize:servers", o => j("server:initialize:servers", n.value.active().server.initializeServers, t)(o)), e.on("server:add:server", o => j("server:add:server", n.value.active().server.addServer, t)(o)), e.on("server:update:server", o => j("server:update:server", n.value.active().server.updateServer, t)(o)), e.on("server:delete:server", o => j("server:delete:server", n.value.active().server.deleteServer, t)(o)), e.on("server:clear:servers", o => j("server:clear:servers", n.value.active().server.clearServers, t)(o)), e.on("server:update:variables", o => j("server:update:variables", n.value.active().server.updateServerVariables, t)(o)), e.on("server:update:selected", o => j("server:update:selected", n.value.active().server.updateSelectedServer, t)(o)), e.on("operation:create:operation", o => j("operation:create:operation", n.value.active().operation.createOperation, t)(o)), e.on("operation:update:pathMethod", o => j("operation:update:pathMethod", n.value.active().operation.updateOperationPathMethod, t)(o)), e.on("operation:update:meta", o => j("operation:update:meta", n.value.active().operation.updateOperationMeta, t)(o)), e.on("operation:delete:operation", o => j("operation:delete:operation", n.value.active().operation.deleteOperation, t)(o)), e.on("operation:create:draft-example", o => j("operation:create:draft-example", n.value.active().operation.createOperationDraftExample, t)(o)), e.on("operation:delete:example", o => j("operation:delete:example", n.value.active().operation.deleteOperationExample, t)(o)), e.on("operation:rename:example", o => j("operation:rename:example", n.value.active().operation.renameOperationExample, t)(o)), e.on("operation:upsert:parameter", o => j("operation:upsert:parameter", n.value.active().operation.upsertOperationParameter, t)(o)), e.on("operation:update:extra-parameters", o => j("operation:update:extra-parameters", n.value.active().operation.updateOperationExtraParameters, t)(o)), e.on("operation:delete:parameter", o => j("operation:delete:parameter", n.value.active().operation.deleteOperationParameter, t)(o)), e.on("operation:delete-all:parameters", o => j("operation:delete-all:parameters", n.value.active().operation.deleteAllOperationParameters, t)(o)), e.on("operation:update:extension", o => j("operation:update:extension", n.value.active().operation.updateOperationExtension, t)(o)), e.on("operation:update:requestBody:contentType", o => j("operation:update:requestBody:contentType", n.value.active().operation.updateOperationRequestBodyContentType, t)(o)), e.on("operation:update:requestBody:value", o => j("operation:update:requestBody:value", n.value.active().operation.updateOperationRequestBodyExample, t)(o)), e.on("operation:update:requestBody:formValue", o => j("operation:update:requestBody:formValue", n.value.active().operation.updateOperationRequestBodyFormValue, t)(o)), e.on("operation:reload:history", o => j("operation:reload:history", n.value.active().operation.reloadOperationHistory, t)(o)), e.on("tag:create:tag", o => j("tag:create:tag", n.value.active().tag.createTag, t)(o)), e.on("tag:edit:tag", o => j("tag:edit:tag", n.value.active().tag.editTag, t)(o)), e.on("tag:delete:tag", o => j("tag:delete:tag", n.value.active().tag.deleteTag, t)(o)), e.on("tabs:add:tab", o => j("tabs:add:tab", n.value.workspace().tabs.addTab, t)(o)), e.on("tabs:close:tab", o => j("tabs:close:tab", n.value.workspace().tabs.closeTab, t)(o)), e.on("tabs:close:other-tabs", o => j("tabs:close:other-tabs", n.value.workspace().tabs.closeOtherTabs, t)(o)), e.on("tabs:focus:tab", o => j("tabs:focus:tab", n.value.workspace().tabs.focusTab, t)(o)), e.on("tabs:focus:tab-last", o => j("tabs:focus:tab-last", n.value.workspace().tabs.focusLastTab, t)(o)), e.on("tabs:navigate:previous", o => j("tabs:navigate:previous", n.value.workspace().tabs.navigatePreviousTab, t)(o)), e.on("tabs:navigate:next", o => j("tabs:navigate:next", n.value.workspace().tabs.navigateNextTab, t)(o)), e.on("tabs:update:tabs", o => j("tabs:update:tabs", n.value.workspace().tabs.updateTabs, t)(o)), e.on("hooks:on:request:complete", o => j("hooks:on:request:complete", n.value.active().operation.addResponseToHistory, t)(o))
}
var Bf = {};

function yo({
    eventBus: e,
    isSidebarOpen: a,
    requestBodyCompositionSelection: t,
    sidebarState: n,
    modalState: r,
    store: o
}) {
    Pf({
        eventBus: e,
        store: E(o),
        hooks: {}
    }), e.on("scroll-to:nav-item", ({
        id: l
    }) => n.handleSelectItem(l)), e.on("ui:toggle:sidebar", () => a.value = !a.value), e.on("ui:close:client-modal", () => r.hide()), e.on("ui:open:client-modal", l => {
        var s, i;
        if (t.value = l && "requestBodyCompositionSelection" in l && l.requestBodyCompositionSelection ? l.requestBodyCompositionSelection : Bf, !l) {
            r.show();
            return
        }
        if ("id" in l && l.id) {
            let c = l.id;
            if ("exampleName" in l && l.exampleName) {
                const f = n.state.getEntryById(l.id);
                if (f && "children" in f && f.children) {
                    const d = f.children.find(v => v.type === "example" && v.name === l.exampleName);
                    d && (c = d.id)
                }
            }
            n.handleSelectItem(c)
        } else if ("method" in l && "path" in l) {
            const c = o.workspace.activeDocument;
            n.handleSelectItem(((i = n.getEntryByLocation({
                document: ee(c) ? ((s = c["x-scalar-navigation"]) == null ? void 0 : s.id) ?? "" : "",
                path: l.path,
                method: l.method,
                example: l.exampleName
            })) == null ? void 0 : i.id) ?? "")
        }
        r.show()
    })
}
var Mf = e => e.type === "example",
    ma = e => {
        const a = e.store.workspace.documents[e.documentSlug ?? ""];
        return ee(a) ? a : void 0
    },
    Ef = (e, a) => {
        var n;
        if (a !== "default" || e.workspace.documents[a] !== void 0) return a;
        const t = e.workspace["x-scalar-active-document"];
        return t && ee(e.workspace.documents[t]) ? t : (n = Object.entries(e.workspace.documents).find(([, r]) => ee(r))) == null ? void 0 : n[0]
    },
    Rf = (e, a) => {
        const t = ma(e);
        if (t) return a === "default" ? Object.keys(t.paths ?? {})[0] : a
    },
    If = (e, a, t) => {
        var r;
        const n = ma(e);
        if (!(!n || !a)) return t === "default" ? Object.keys(((r = n.paths) == null ? void 0 : r[a]) ?? {}).find(Oa) : Oa(t) ? t : void 0
    },
    Of = (e, a, t) => {
        var o, l;
        if (!ma(e) || (a == null ? void 0 : a.type) !== "operation") return "default";
        const n = ((o = a.children) == null ? void 0 : o.filter(Mf)) ?? [],
            r = n.find(s => s.name === t);
        return r ? r.name : t === "default" ? ((l = n[0]) == null ? void 0 : l.name) ?? "default" : "default"
    },
    Vf = (e, a) => {
        var i, c;
        const t = Ef(e, a.documentSlug),
            n = {
                store: e,
                documentSlug: t
            },
            r = Rf(n, a.path),
            o = If(n, r, a.method),
            l = (i = ma(n)) == null ? void 0 : i["x-scalar-navigation"];
        if (!l) return {
            documentSlug: t,
            path: r,
            method: o,
            example: "default"
        };
        const s = (c = vo(l).get(`${r}|${o}`)) == null ? void 0 : c.find(f => f.type === "operation");
        return {
            documentSlug: t,
            path: r,
            method: o,
            example: Of(n, s, a.example)
        }
    },
    Ta = ({
        document: e,
        path: a,
        method: t,
        example: n
    }) => JSON.stringify([e, a, t, n].filter(ht)),
    $f = ({
        workspaceStore: e,
        documentSlug: a,
        path: t,
        method: n,
        exampleName: r,
        route: o
    }) => {
        const l = T(() => {
                var v;
                const d = e == null ? void 0 : e.workspace.documents[fe(a) ?? ""];
                return ee(d) ? ((v = d["x-scalar-navigation"]) == null ? void 0 : v.children) ?? [] : []
            }),
            s = ms(l),
            i = T(() => ps({
                items: l.value,
                nestedKey: "children",
                filter: d => d.type === "operation" || d.type === "example",
                getId: d => {
                    const v = Pt("operation", d);
                    return Ta({
                        document: fe(a) ?? "",
                        path: v == null ? void 0 : v.path,
                        method: v == null ? void 0 : v.method,
                        example: d.type === "example" ? d.name : void 0
                    })
                }
            })),
            c = d => {
                const v = i.value.get(Ta({
                    document: d.document,
                    path: d.path,
                    method: d.method,
                    example: d.example
                }));
                return v || i.value.get(Ta({
                    document: d.document,
                    path: d.path,
                    method: d.method
                }))
            },
            f = d => {
                const v = s.getEntryById(d);
                if (!v) {
                    console.warn(`Could not find sidebar entry with id ${d} to select`);
                    return
                }
                if (v.type === "operation" || v.type === "example") {
                    if (s.isSelected(d)) {
                        s.setExpanded(d, !s.isExpanded(d));
                        return
                    }
                    const m = Pt("operation", v),
                        g = Nr("example", v);
                    return g ? (s.setSelected(g.id), s.setExpanded(g.id, !0)) : s.setSelected(d), m ? o({
                        documentSlug: fe(a),
                        path: m.path,
                        method: m.method,
                        example: (g == null ? void 0 : g.name) ?? "default"
                    }) : void 0
                }
                s.setExpanded(d, !s.isExpanded(d))
            };
        return oe([a, t, n, r], ([d, v, m, g]) => {
            if (!d) {
                s.setSelected(null);
                return
            }
            const y = c({
                document: d,
                path: v,
                method: m,
                example: g
            });
            y && (s.setSelected(y.id), s.setExpanded(y.id, !0))
        }, {
            immediate: !0
        }), {
            handleSelectItem: f,
            state: s,
            getEntryByLocation: c
        }
    },
    ka = {
        Enter: {
            event: "operation:send:request:hotkey",
            modifiers: ["default"]
        },
        b: {
            event: "ui:toggle:sidebar",
            modifiers: ["default"]
        },
        k: {
            event: "ui:open:command-palette",
            modifiers: ["default"]
        },
        l: {
            event: "ui:focus:address-bar",
            modifiers: ["default"]
        },
        j: {
            event: "ui:focus:search",
            modifiers: ["default"]
        },
        i: {
            event: "ui:open:settings",
            modifiers: ["default"]
        },
        s: {
            event: "ui:save:local-document",
            modifiers: ["default"]
        }
    },
    Lf = {
        web: ka,
        modal: {
            ...ka,
            Escape: {
                event: "ui:close:client-modal",
                modifiers: []
            },
            l: {
                event: "ui:focus:send-button",
                modifiers: ["default"]
            }
        },
        desktop: {
            ...ka,
            n: {
                event: "ui:open:command-palette",
                modifiers: ["default"]
            },
            t: {
                event: "tabs:add:tab",
                modifiers: ["default"]
            },
            w: {
                event: "tabs:close:tab",
                modifiers: ["default"]
            },
            ArrowLeft: {
                event: "tabs:navigate:previous",
                modifiers: ["default", "altKey"]
            },
            ArrowRight: {
                event: "tabs:navigate:next",
                modifiers: ["default", "altKey"]
            },
            1: {
                event: "tabs:focus:tab",
                modifiers: ["default"]
            },
            2: {
                event: "tabs:focus:tab",
                modifiers: ["default"]
            },
            3: {
                event: "tabs:focus:tab",
                modifiers: ["default"]
            },
            4: {
                event: "tabs:focus:tab",
                modifiers: ["default"]
            },
            5: {
                event: "tabs:focus:tab",
                modifiers: ["default"]
            },
            6: {
                event: "tabs:focus:tab",
                modifiers: ["default"]
            },
            7: {
                event: "tabs:focus:tab",
                modifiers: ["default"]
            },
            8: {
                event: "tabs:focus:tab",
                modifiers: ["default"]
            },
            9: {
                event: "tabs:focus:tab-last",
                modifiers: ["default"]
            }
        }
    },
    Uf = new Set(["Escape", "ArrowDown", "ArrowUp", "Enter"]),
    Df = (e, a) => a.length > 0 && a.map(t => t === "default" ? pr() ? "metaKey" : "ctrlKey" : t).every(t => e[t] === !0),
    zf = (e, a) => {
        if (!(e.target instanceof HTMLElement)) return !1;
        const t = e.target;
        return t.tagName === "INPUT" ? !Uf.has(a) : t.tagName === "TEXTAREA" || t.contentEditable === "true" || t.hasAttribute("contenteditable")
    },
    Zf = (e, a, t) => {
        const n = e.key === " " ? "Space" : e.key,
            r = Lf[t][n];
        if (!r) return;
        const o = {
            event: e
        };
        if (n === "Escape") {
            a.emit(r.event, o, {
                skipUnpackProxy: !0
            });
            return
        }
        if (Df(e, r.modifiers)) {
            a.emit(r.event, o, {
                skipUnpackProxy: !0
            });
            return
        }
        r.modifiers.length > 0 || zf(e, n) || a.emit(r.event, o, {
            skipUnpackProxy: !0
        })
    },
    Nf = (e, a, t) => {
        const n = r => {
            fe(t) || Zf(r, e, a)
        };
        Pe(() => window.addEventListener("keydown", n)), Oe(() => window.removeEventListener("keydown", n))
    },
    Jn = "scalar-dragging",
    Ff = B({
        __name: "Resize",
        props: {
            width: {}
        },
        emits: ["update:width"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = E(!1),
                r = o => {
                    o.preventDefault();
                    const l = o.clientX,
                        s = e.width,
                        i = f => {
                            n.value = !0, document.body.classList.add(Jn);
                            let d = s + f.clientX - l;
                            d > 420 && (d = 420 + (d - 420) * .2), d < 240 && (d = 240), t("update:width", d)
                        },
                        c = () => {
                            n.value = !1, document.body.classList.remove(Jn), document.documentElement.removeEventListener("mousemove", i, !1), document.documentElement.removeEventListener("mouseup", c, !1), e.width > 420 ? t("update:width", 360) : e.width < 240 && t("update:width", 240)
                        };
                    document.documentElement.addEventListener("mousemove", i, !1), document.documentElement.addEventListener("mouseup", c, !1)
                };
            return (o, l) => (p(), x("div", {
                class: "relative",
                style: Le({
                    width: `${e.width}px`
                })
            }, [I(o.$slots, "default", {}, void 0, !0), b("div", {
                class: "resizer",
                onMousedown: r
            }, null, 32)], 4))
        }
    }),
    qf = ce(Ff, [
        ["__scopeId", "data-v-e2c54c18"]
    ]);

function Wf() {
    return new hs([], {
        keys: [{
            name: "title",
            weight: .7
        }, {
            name: "description",
            weight: .3
        }, {
            name: "operationId",
            weight: .6
        }, {
            name: "path",
            weight: .5
        }, {
            name: "tag",
            weight: .4
        }, {
            name: "method",
            weight: .3
        }, {
            name: "documentName",
            weight: .3
        }],
        threshold: .3,
        distance: 100,
        includeScore: !0,
        includeMatches: !0,
        ignoreLocation: !0,
        useExtendedSearch: !0,
        findAllMatches: !0
    })
}

function jf(e) {
    const a = [];

    function t(n, r) {
        n.forEach(o => {
            Kf(o, a, r), "children" in o && o.children && t(o.children, r)
        })
    }
    return e == null || e.forEach(n => {
        var r;
        return t(((r = n["x-scalar-navigation"]) == null ? void 0 : r.children) ?? [], n)
    }), a
}

function Kf(e, a, t) {
    var n, r;
    if (e.type === "operation") {
        const o = W((r = (n = t == null ? void 0 : t.paths) == null ? void 0 : n[e.path]) == null ? void 0 : r[e.method]) ?? {};
        a.push({
            type: "operation",
            title: e.title,
            id: e.id,
            description: o.description || "",
            method: e.method,
            path: e.path,
            operationId: o.operationId,
            entry: e,
            documentName: (t == null ? void 0 : t.info.title) ?? ""
        });
        return
    }
    if (e.type === "tag" && e.isGroup === !1) {
        a.push({
            id: e.id,
            title: e.title,
            description: e.description || "",
            type: "tag",
            entry: e,
            documentName: (t == null ? void 0 : t.info.title) ?? ""
        });
        return
    }
    if (e.type === "tag" && e.isGroup === !0) {
        a.push({
            id: e.id,
            title: e.title,
            description: "Tag Group",
            type: "tag",
            entry: e,
            documentName: (t == null ? void 0 : t.info.title) ?? ""
        });
        return
    }
    if (e.type === "text") {
        a.push({
            id: e.id,
            type: "heading",
            title: e.title ?? "",
            description: "Heading",
            entry: e,
            documentName: (t == null ? void 0 : t.info.title) ?? ""
        });
        return
    }
}
var Gf = 25,
    Yf = e => {
        const a = T(() => {
                const n = Wf();
                return n.setCollection(jf(fe(e))), n
            }),
            t = E("");
        return {
            results: T(() => t.value.length !== 0 ? a.value.search(t.value, {
                limit: Gf
            }).flatMap(n => n.item.entry.type !== "operation" ? [] : n.item.entry) : null),
            query: t
        }
    },
    Xf = B({
        inheritAttrs: !1,
        __name: "ScalarHeaderButton",
        props: {
            is: {
                default: "button"
            },
            cta: {
                type: Boolean
            }
        },
        setup(e) {
            const a = tn({
                    base: "group/button flex items-center rounded px-3 py-2 text-base/4 no-underline",
                    variants: {
                        cta: {
                            true: "font-bold bg-b-header-cta text-sm/4 text-c-header-cta hover:bg-h-header-cta",
                            false: "text-c-header-2 hover:text-c-header-1"
                        }
                    }
                }),
                {
                    cx: t
                } = Ne();
            return (n, r) => (p(), H(Ht(e.is), _({
                type: e.is === "button" ? "button" : void 0
            }, u(t)(u(a)({
                cta: e.cta
            }))), {
                default: S(() => [I(n.$slots, "default")]),
                _: 3
            }, 16, ["type"]))
        }
    }),
    Qf = Xf,
    Jf = {
        class: "h-5 w-auto"
    },
    _f = {
        key: 0,
        class: "ml-1 truncate text-sm font-medium"
    },
    em = {
        class: "sr-only"
    },
    tm = B({
        __name: "ScalarMenuButton",
        props: {
            open: {
                type: Boolean
            }
        },
        setup(e) {
            return (a, t) => (p(), H(u(Qf), {
                class: "gap-0.75 px-2 py-1.5 text-c-header-1 hover:bg-b-header-2"
            }, {
                default: S(() => [b("div", Jf, [I(a.$slots, "logo", {}, () => [A(u(me), {
                    icon: "Logo"
                })])]), a.$slots.title ? (p(), x("span", _f, [I(a.$slots, "title")])) : U("", !0), b("span", em, [I(a.$slots, "label", {}, () => [Y(K(e.open ? "Close Menu" : "Open Menu"), 1)])]), A(u(Ar), {
                    class: re(["shrink-0 text-c-header-2 group-hover/button:text-c-header-1 size-3.5", e.open ? "rotate-180" : ""]),
                    weight: "bold"
                }, null, 8, ["class"])]),
                _: 3
            }))
        }
    }),
    am = tm;

function Be(e, a) {
    const t = typeof e == "string" && !a ? `${e}Context` : a,
        n = Symbol(t);
    return [r => {
        const o = Ja(n, r);
        if (o || o === null) return o;
        throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)
    }, r => (Qa(n, r), r)]
}

function bo(e, a, t) {
    const n = t.originalEvent.target,
        r = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
        });
    a && n.addEventListener(e, a, {
        once: !0
    }), n.dispatchEvent(r)
}

function nm(e, a) {
    var t;
    const n = Va();
    return Se(() => {
        n.value = e()
    }, {
        ...a,
        flush: (t = void 0) != null ? t : "sync"
    }), br(n)
}

function sn(e) {
    return Os() ? (Vs(e), !0) : !1
}

function rm(e) {
    let a = !1,
        t;
    const n = $r(!0);
    return (...r) => (a || (t = n.run(() => e(...r)), a = !0), t)
}

function So(e) {
    let a = 0,
        t, n;
    const r = () => {
        a -= 1, n && a <= 0 && (n.stop(), t = void 0, n = void 0)
    };
    return (...o) => (a += 1, t || (n = $r(!0), t = n.run(() => e(...o))), sn(r), t)
}

function pt(e) {
    return typeof e == "function" ? e() : u(e)
}
const Ye = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const om = e => typeof e < "u",
    lm = Object.prototype.toString,
    sm = e => lm.call(e) === "[object Object]",
    im = () => {},
    _n = um();

function um() {
    var e, a;
    return Ye && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}

function dm(e) {
    return at()
}

function cm(e, a = 1e4) {
    return Hs((t, n) => {
        let r = pt(e),
            o;
        const l = () => setTimeout(() => {
            r = pt(e), n()
        }, pt(a));
        return sn(() => {
            clearTimeout(o)
        }), {
            get() {
                return t(), r
            },
            set(s) {
                r = s, n(), clearTimeout(o), o = l()
            }
        }
    })
}

function vm(e, a) {
    dm() && Oe(e, a)
}

function ot(e) {
    var a;
    const t = pt(e);
    return (a = t == null ? void 0 : t.$el) != null ? a : t
}
const un = Ye ? window : void 0;

function ta(...e) {
    let a, t, n, r;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, n, r] = e, a = un) : [a, t, n, r] = e, !a) return im;
    Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
    const o = [],
        l = () => {
            o.forEach(f => f()), o.length = 0
        },
        s = (f, d, v, m) => (f.addEventListener(d, v, m), () => f.removeEventListener(d, v, m)),
        i = oe(() => [ot(a), pt(r)], ([f, d]) => {
            if (l(), !f) return;
            const v = sm(d) ? {
                ...d
            } : d;
            o.push(...t.flatMap(m => n.map(g => s(f, m, g, v))))
        }, {
            immediate: !0,
            flush: "post"
        }),
        c = () => {
            i(), l()
        };
    return sn(c), c
}

function fm(e) {
    return typeof e == "function" ? e : typeof e == "string" ? a => a.key === e : Array.isArray(e) ? a => e.includes(a.key) : () => !0
}

function mm(...e) {
    let a, t, n = {};
    e.length === 3 ? (a = e[0], t = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (a = !0, t = e[0], n = e[1]) : (a = e[0], t = e[1]) : (a = !0, t = e[0]);
    const {
        target: r = un,
        eventName: o = "keydown",
        passive: l = !1,
        dedupe: s = !1
    } = n, i = fm(a);
    return ta(r, o, c => {
        c.repeat && pt(s) || i(c) && t(c)
    }, l)
}

function pm() {
    const e = E(!1),
        a = at();
    return a && Pe(() => {
        e.value = !0
    }, a), e
}

function hm(e) {
    return JSON.parse(JSON.stringify(e))
}

function lt(e, a, t, n = {}) {
    var r, o, l;
    const {
        clone: s = !1,
        passive: i = !1,
        eventName: c,
        deep: f = !1,
        defaultValue: d,
        shouldEmit: v
    } = n, m = at(), g = t || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((l = (o = m == null ? void 0 : m.proxy) == null ? void 0 : o.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
    let y = c;
    a || (a = "modelValue"), y = y || `update:${a.toString()}`;
    const h = k => s ? typeof s == "function" ? s(k) : hm(k) : k,
        w = () => om(e[a]) ? h(e[a]) : d,
        P = k => {
            v ? v(k) && g(y, k) : g(y, k)
        };
    if (i) {
        const k = w(),
            D = E(k);
        let Z = !1;
        return oe(() => e[a], J => {
            Z || (Z = !0, D.value = h(J), de(() => Z = !1))
        }), oe(D, J => {
            !Z && (J !== e[a] || f) && P(J)
        }, {
            deep: f
        }), D
    } else return T({
        get() {
            return w()
        },
        set(k) {
            P(k)
        }
    })
}

function dn(e) {
    return e ? e.flatMap(a => a.type === le ? dn(a.children) : [a]) : []
}

function He() {
    let e = document.activeElement;
    if (e == null) return null;
    for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;) e = e.shadowRoot.activeElement;
    return e
}
const gm = ["INPUT", "TEXTAREA"];

function ym(e, a, t, n = {}) {
    if (!a || n.enableIgnoredElement && gm.includes(a.nodeName)) return null;
    const {
        arrowKeyOptions: r = "both",
        attributeName: o = "[data-radix-vue-collection-item]",
        itemsArray: l = [],
        loop: s = !0,
        dir: i = "ltr",
        preventScroll: c = !0,
        focus: f = !1
    } = n, [d, v, m, g, y, h] = [e.key === "ArrowRight", e.key === "ArrowLeft", e.key === "ArrowUp", e.key === "ArrowDown", e.key === "Home", e.key === "End"], w = m || g, P = d || v;
    if (!y && !h && (!w && !P || r === "vertical" && P || r === "horizontal" && w)) return null;
    const k = t ? Array.from(t.querySelectorAll(o)) : l;
    if (!k.length) return null;
    c && e.preventDefault();
    let D = null;
    return P || w ? D = xo(k, a, {
        goForward: w ? g : i === "ltr" ? d : v,
        loop: s
    }) : y ? D = k.at(0) || null : h && (D = k.at(-1) || null), f && (D == null || D.focus()), D
}

function xo(e, a, t, n = e.length) {
    if (--n === 0) return null;
    const r = e.indexOf(a),
        o = t.goForward ? r + 1 : r - 1;
    if (!t.loop && (o < 0 || o >= e.length)) return null;
    const l = (o + e.length) % e.length,
        s = e[l];
    return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? xo(e, s, t, n) : s : null
}

function Ca(e) {
    if (e === null || typeof e != "object") return !1;
    const a = Object.getPrototypeOf(e);
    return a !== null && a !== Object.prototype && Object.getPrototypeOf(a) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function qa(e, a, t = ".", n) {
    if (!Ca(a)) return qa(e, {}, t);
    const r = Object.assign({}, a);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor") continue;
        const l = e[o];
        l != null && (Array.isArray(l) && Array.isArray(r[o]) ? r[o] = [...l, ...r[o]] : Ca(l) && Ca(r[o]) ? r[o] = qa(l, r[o], (t ? `${t}.` : "") + o.toString()) : r[o] = l)
    }
    return r
}

function bm(e) {
    return (...a) => a.reduce((t, n) => qa(t, n, ""), {})
}
const Sm = bm(),
    [cn] = Be("ConfigProvider");
let xm = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
    wm = (e = 21) => {
        let a = "",
            t = e;
        for (; t--;) a += xm[Math.random() * 64 | 0];
        return a
    };
const Am = So(() => {
    const e = E(new Map),
        a = E(),
        t = T(() => {
            for (const l of e.value.values())
                if (l) return !0;
            return !1
        }),
        n = cn({
            scrollBody: E(!0)
        });
    let r = null;
    const o = () => {
        document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = a.value ?? "", _n && (r == null || r()), a.value = void 0
    };
    return oe(t, (l, s) => {
        var i;
        if (!Ye) return;
        if (!l) {
            s && o();
            return
        }
        a.value === void 0 && (a.value = document.body.style.overflow);
        const c = window.innerWidth - document.documentElement.clientWidth,
            f = {
                padding: c,
                margin: 0
            },
            d = (i = n.scrollBody) != null && i.value ? typeof n.scrollBody.value == "object" ? Sm({
                padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
                margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
            }, f) : f : {
                padding: 0,
                margin: 0
            };
        c > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), _n && (r = ta(document, "touchmove", v => km(v), {
            passive: !1
        })), de(() => {
            document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden"
        })
    }, {
        immediate: !0,
        flush: "sync"
    }), e
});

function Tm(e) {
    const a = wm(6),
        t = Am();
    t.value.set(a, e ?? !1);
    const n = T({
        get: () => t.value.get(a) ?? !1,
        set: r => t.value.set(a, r)
    });
    return vm(() => {
        t.value.delete(a)
    }), n
}

function wo(e) {
    const a = window.getComputedStyle(e);
    if (a.overflowX === "scroll" || a.overflowY === "scroll" || a.overflowX === "auto" && e.clientWidth < e.scrollWidth || a.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
    {
        const t = e.parentNode;
        return !(t instanceof Element) || t.tagName === "BODY" ? !1 : wo(t)
    }
}

function km(e) {
    const a = e || window.event,
        t = a.target;
    return t instanceof Element && wo(t) ? !1 : a.touches.length > 1 ? !0 : (a.preventDefault && a.cancelable && a.preventDefault(), !1)
}
const Cm = "data-radix-vue-collection-item";

function Hm(e, a = Cm) {
    const t = Symbol();
    return {
        createCollection: n => {
            const r = E([]);

            function o() {
                const l = ot(n);
                return l ? r.value = Array.from(l.querySelectorAll(`[${a}]:not([data-disabled])`)) : r.value = []
            }
            return ks(() => {
                r.value = []
            }), Pe(o), Cs(o), oe(() => n == null ? void 0 : n.value, o, {
                immediate: !0
            }), Qa(t, r), r
        },
        injectCollection: () => Ja(t, E([]))
    }
}

function vn(e) {
    const a = cn({
        dir: E("ltr")
    });
    return T(() => {
        var t;
        return (e == null ? void 0 : e.value) || ((t = a.dir) == null ? void 0 : t.value) || "ltr"
    })
}

function pa(e) {
    const a = at(),
        t = a == null ? void 0 : a.type.emits,
        n = {};
    return t != null && t.length || console.warn(`No emitted event found. Please check component: ${a==null?void 0:a.type.__name}`), t == null || t.forEach(r => {
        n[gs(Or(r))] = (...o) => e(r, ...o)
    }), n
}
let Ha = 0;

function Pm() {
    Se(e => {
        if (!Ye) return;
        const a = document.querySelectorAll("[data-radix-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", a[0] ?? er()), document.body.insertAdjacentElement("beforeend", a[1] ?? er()), Ha++, e(() => {
            Ha === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Ha--
        })
    })
}

function er() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}

function Bm(e) {
    const a = at(),
        t = Object.keys((a == null ? void 0 : a.type.props) ?? {}).reduce((r, o) => {
            const l = (a == null ? void 0 : a.type.props[o]).default;
            return l !== void 0 && (r[o] = l), r
        }, {}),
        n = Ia(e);
    return T(() => {
        const r = {},
            o = (a == null ? void 0 : a.vnode.props) ?? {};
        return Object.keys(o).forEach(l => {
            r[Or(l)] = o[l]
        }), Object.keys({
            ...t,
            ...r
        }).reduce((l, s) => (n.value[s] !== void 0 && (l[s] = n.value[s]), l), {})
    })
}

function st(e, a) {
    const t = Bm(e),
        n = a ? pa(a) : {};
    return T(() => ({
        ...t.value,
        ...n
    }))
}

function ie() {
    const e = at(),
        a = E(),
        t = T(() => {
            var l, s;
            return ["#text", "#comment"].includes((l = a.value) == null ? void 0 : l.$el.nodeName) ? (s = a.value) == null ? void 0 : s.$el.nextElementSibling : ot(a)
        }),
        n = Object.assign({}, e.exposed),
        r = {};
    for (const l in e.props) Object.defineProperty(r, l, {
        enumerable: !0,
        configurable: !0,
        get: () => e.props[l]
    });
    if (Object.keys(n).length > 0)
        for (const l in n) Object.defineProperty(r, l, {
            enumerable: !0,
            configurable: !0,
            get: () => n[l]
        });
    Object.defineProperty(r, "$el", {
        enumerable: !0,
        configurable: !0,
        get: () => e.vnode.el
    }), e.exposed = r;

    function o(l) {
        a.value = l, l && (Object.defineProperty(r, "$el", {
            enumerable: !0,
            configurable: !0,
            get: () => l instanceof Element ? l : l.$el
        }), e.exposed = r)
    }
    return {
        forwardRef: o,
        currentRef: a,
        currentElement: t
    }
}
var Mm = function(e) {
        if (typeof document > "u") return null;
        var a = Array.isArray(e) ? e[0] : e;
        return a.ownerDocument.body
    },
    vt = new WeakMap,
    Zt = new WeakMap,
    Nt = {},
    Pa = 0,
    Ao = function(e) {
        return e && (e.host || Ao(e.parentNode))
    },
    Em = function(e, a) {
        return a.map(function(t) {
            if (e.contains(t)) return t;
            var n = Ao(t);
            return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(t) {
            return !!t
        })
    },
    Rm = function(e, a, t, n) {
        var r = Em(a, Array.isArray(e) ? e : [e]);
        Nt[t] || (Nt[t] = new WeakMap);
        var o = Nt[t],
            l = [],
            s = new Set,
            i = new Set(r),
            c = function(d) {
                !d || s.has(d) || (s.add(d), c(d.parentNode))
            };
        r.forEach(c);
        var f = function(d) {
            !d || i.has(d) || Array.prototype.forEach.call(d.children, function(v) {
                if (s.has(v)) f(v);
                else try {
                    var m = v.getAttribute(n),
                        g = m !== null && m !== "false",
                        y = (vt.get(v) || 0) + 1,
                        h = (o.get(v) || 0) + 1;
                    vt.set(v, y), o.set(v, h), l.push(v), y === 1 && g && Zt.set(v, !0), h === 1 && v.setAttribute(t, "true"), g || v.setAttribute(n, "true")
                } catch (w) {
                    console.error("aria-hidden: cannot operate on ", v, w)
                }
            })
        };
        return f(a), s.clear(), Pa++,
            function() {
                l.forEach(function(d) {
                    var v = vt.get(d) - 1,
                        m = o.get(d) - 1;
                    vt.set(d, v), o.set(d, m), v || (Zt.has(d) || d.removeAttribute(n), Zt.delete(d)), m || d.removeAttribute(t)
                }), Pa--, Pa || (vt = new WeakMap, vt = new WeakMap, Zt = new WeakMap, Nt = {})
            }
    },
    Im = function(e, a, t) {
        t === void 0 && (t = "data-aria-hidden");
        var n = Array.from(Array.isArray(e) ? e : [e]),
            r = Mm(e);
        return r ? (n.push.apply(n, Array.from(r.querySelectorAll("[aria-live]"))), Rm(n, r, t, "aria-hidden")) : function() {
            return null
        }
    };

function Om(e) {
    let a;
    oe(() => ot(e), t => {
        t ? a = Im(t) : a && a()
    }), Et(() => {
        a && a()
    })
}
let Vm = 0;

function ha(e, a = "radix") {
    const t = cn({
        useId: void 0
    });
    return be ? `${a}-${be()}` : t.useId ? `${a}-${t.useId()}` : `${a}-${++Vm}`
}

function $m(e) {
    const a = E(),
        t = T(() => {
            var r;
            return ((r = a.value) == null ? void 0 : r.width) ?? 0
        }),
        n = T(() => {
            var r;
            return ((r = a.value) == null ? void 0 : r.height) ?? 0
        });
    return Pe(() => {
        const r = ot(e);
        if (r) {
            a.value = {
                width: r.offsetWidth,
                height: r.offsetHeight
            };
            const o = new ResizeObserver(l => {
                if (!Array.isArray(l) || !l.length) return;
                const s = l[0];
                let i, c;
                if ("borderBoxSize" in s) {
                    const f = s.borderBoxSize,
                        d = Array.isArray(f) ? f[0] : f;
                    i = d.inlineSize, c = d.blockSize
                } else i = r.offsetWidth, c = r.offsetHeight;
                a.value = {
                    width: i,
                    height: c
                }
            });
            return o.observe(r, {
                box: "border-box"
            }), () => o.unobserve(r)
        } else a.value = void 0
    }), {
        width: t,
        height: n
    }
}

function Lm(e, a) {
    const t = E(e);

    function n(r) {
        return a[t.value][r] ?? t.value
    }
    return {
        state: t,
        dispatch: r => {
            t.value = n(r)
        }
    }
}
const Um = "data-item-text";

function Dm(e) {
    const a = cm("", 1e3);
    return {
        search: a,
        handleTypeaheadSearch: (t, n) => {
            if (!(e != null && e.value) && !n) return;
            a.value = a.value + t;
            const r = (e == null ? void 0 : e.value) ?? n,
                o = He(),
                l = r.map(d => {
                    var v;
                    return {
                        ref: d,
                        textValue: ((v = (d.querySelector(`[${Um}]`) ?? d).textContent) == null ? void 0 : v.trim()) ?? ""
                    }
                }),
                s = l.find(d => d.ref === o),
                i = l.map(d => d.textValue),
                c = Zm(i, a.value, s == null ? void 0 : s.textValue),
                f = l.find(d => d.textValue === c);
            return f && f.ref.focus(), f == null ? void 0 : f.ref
        },
        resetTypeahead: () => {
            a.value = ""
        }
    }
}

function zm(e, a) {
    return e.map((t, n) => e[(a + n) % e.length])
}

function Zm(e, a, t) {
    const n = a.length > 1 && Array.from(a).every(s => s === a[0]) ? a[0] : a,
        r = t ? e.indexOf(t) : -1;
    let o = zm(e, Math.max(r, 0));
    n.length === 1 && (o = o.filter(s => s !== t));
    const l = o.find(s => s.toLowerCase().startsWith(n.toLowerCase()));
    return l !== t ? l : void 0
}
const fn = B({
        name: "PrimitiveSlot",
        inheritAttrs: !1,
        setup(e, {
            attrs: a,
            slots: t
        }) {
            return () => {
                var n, r;
                if (!t.default) return null;
                const o = dn(t.default()),
                    l = o.findIndex(f => f.type !== bs);
                if (l === -1) return o;
                const s = o[l];
                (n = s.props) == null || delete n.ref;
                const i = s.props ? _(a, s.props) : a;
                a.class && (r = s.props) != null && r.class && delete s.props.class;
                const c = Ss(s, i);
                for (const f in i) f.startsWith("on") && (c.props || (c.props = {}), c.props[f] = i[f]);
                return o.length === 1 ? c : (o[l] = c, o)
            }
        }
    }),
    Me = B({
        name: "Primitive",
        inheritAttrs: !1,
        props: {
            asChild: {
                type: Boolean,
                default: !1
            },
            as: {
                type: [String, Object],
                default: "div"
            }
        },
        setup(e, {
            attrs: a,
            slots: t
        }) {
            const n = e.asChild ? "template" : e.as;
            return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => mt(n, a) : n !== "template" ? () => mt(e.as, a, {
                default: t.default
            }) : () => mt(fn, a, {
                default: t.default
            })
        }
    });

function To() {
    const e = E(),
        a = T(() => {
            var t, n;
            return ["#text", "#comment"].includes((t = e.value) == null ? void 0 : t.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : ot(e)
        });
    return {
        primitiveElement: e,
        currentElement: a
    }
}

function Nm(e, a) {
    var t;
    const n = E({}),
        r = E("none"),
        o = E(e),
        l = e.value ? "mounted" : "unmounted";
    let s;
    const i = ((t = a.value) == null ? void 0 : t.ownerDocument.defaultView) ?? un,
        {
            state: c,
            dispatch: f
        } = Lm(l, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        }),
        d = h => {
            var w;
            if (Ye) {
                const P = new CustomEvent(h, {
                    bubbles: !1,
                    cancelable: !1
                });
                (w = a.value) == null || w.dispatchEvent(P)
            }
        };
    oe(e, async (h, w) => {
        var P;
        const k = w !== h;
        if (await de(), k) {
            const D = r.value,
                Z = Ft(a.value);
            h ? (f("MOUNT"), d("enter"), Z === "none" && d("after-enter")) : Z === "none" || ((P = n.value) == null ? void 0 : P.display) === "none" ? (f("UNMOUNT"), d("leave"), d("after-leave")) : w && D !== Z ? (f("ANIMATION_OUT"), d("leave")) : (f("UNMOUNT"), d("after-leave"))
        }
    }, {
        immediate: !0
    });
    const v = h => {
            const w = Ft(a.value),
                P = w.includes(h.animationName),
                k = c.value === "mounted" ? "enter" : "leave";
            if (h.target === a.value && P && (d(`after-${k}`), f("ANIMATION_END"), !o.value)) {
                const D = a.value.style.animationFillMode;
                a.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
                    var Z;
                    ((Z = a.value) == null ? void 0 : Z.style.animationFillMode) === "forwards" && (a.value.style.animationFillMode = D)
                })
            }
            h.target === a.value && w === "none" && f("ANIMATION_END")
        },
        m = h => {
            h.target === a.value && (r.value = Ft(a.value))
        },
        g = oe(a, (h, w) => {
            h ? (n.value = getComputedStyle(h), h.addEventListener("animationstart", m), h.addEventListener("animationcancel", v), h.addEventListener("animationend", v)) : (f("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), w == null || w.removeEventListener("animationstart", m), w == null || w.removeEventListener("animationcancel", v), w == null || w.removeEventListener("animationend", v))
        }, {
            immediate: !0
        }),
        y = oe(c, () => {
            const h = Ft(a.value);
            r.value = c.value === "mounted" ? h : "none"
        });
    return Et(() => {
        g(), y()
    }), {
        isPresent: T(() => ["mounted", "unmountSuspended"].includes(c.value))
    }
}

function Ft(e) {
    return e && getComputedStyle(e).animationName || "none"
}
const mn = B({
        name: "Presence",
        props: {
            present: {
                type: Boolean,
                required: !0
            },
            forceMount: {
                type: Boolean
            }
        },
        slots: {},
        setup(e, {
            slots: a,
            expose: t
        }) {
            var n;
            const {
                present: r,
                forceMount: o
            } = xt(e), l = E(), {
                isPresent: s
            } = Nm(r, l);
            t({
                present: s
            });
            let i = a.default({
                present: s
            });
            i = dn(i || []);
            const c = at();
            if (i && (i == null ? void 0 : i.length) > 1) {
                const f = (n = c == null ? void 0 : c.parent) != null && n.type.name ? `<${c.parent.type.name} />` : "component";
                throw new Error([`Detected an invalid children for \`${f}\` for  \`Presence\` component.`, "", "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.", "You can apply a few solutions:", ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map(d => `  - ${d}`).join(`
`)].join(`
`))
            }
            return () => o.value || r.value || s.value ? mt(a.default({
                present: s
            })[0], {
                ref: f => {
                    const d = ot(f);
                    return typeof(d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-radix-popper-content-wrapper") ? l.value = d.firstElementChild : l.value = d), d
                }
            }) : null
        }
    }),
    Fm = B({
        __name: "Teleport",
        props: {
            to: {
                default: "body"
            },
            disabled: {
                type: Boolean
            },
            forceMount: {
                type: Boolean
            }
        },
        setup(e) {
            const a = pm();
            return (t, n) => u(a) || t.forceMount ? (p(), H(ys, {
                key: 0,
                to: t.to,
                disabled: t.disabled
            }, [I(t.$slots, "default")], 8, ["to", "disabled"])) : U("", !0)
        }
    }),
    qm = "dismissableLayer.pointerDownOutside",
    Wm = "dismissableLayer.focusOutside";

function ko(e, a) {
    const t = a.closest("[data-dismissable-layer]"),
        n = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"),
        r = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
    return !!(t && n === t || r.indexOf(n) < r.indexOf(t))
}

function jm(e, a) {
    var t;
    const n = ((t = a == null ? void 0 : a.value) == null ? void 0 : t.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
        r = E(!1),
        o = E(() => {});
    return Se(l => {
        if (!Ye) return;
        const s = async c => {
            const f = c.target;
            if (a != null && a.value) {
                if (ko(a.value, f)) {
                    r.value = !1;
                    return
                }
                if (c.target && !r.value) {
                    let d = function() {
                        bo(qm, e, v)
                    };
                    const v = {
                        originalEvent: c
                    };
                    c.pointerType === "touch" ? (n.removeEventListener("click", o.value), o.value = d, n.addEventListener("click", o.value, {
                        once: !0
                    })) : d()
                } else n.removeEventListener("click", o.value);
                r.value = !1
            }
        }, i = window.setTimeout(() => {
            n.addEventListener("pointerdown", s)
        }, 0);
        l(() => {
            window.clearTimeout(i), n.removeEventListener("pointerdown", s), n.removeEventListener("click", o.value)
        })
    }), {
        onPointerDownCapture: () => r.value = !0
    }
}

function Km(e, a) {
    var t;
    const n = ((t = a == null ? void 0 : a.value) == null ? void 0 : t.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
        r = E(!1);
    return Se(o => {
        if (!Ye) return;
        const l = async s => {
            a != null && a.value && (await de(), !(!a.value || ko(a.value, s.target)) && s.target && !r.value && bo(Wm, e, {
                originalEvent: s
            }))
        };
        n.addEventListener("focusin", l), o(() => n.removeEventListener("focusin", l))
    }), {
        onFocusCapture: () => r.value = !0,
        onBlurCapture: () => r.value = !1
    }
}
const Ue = nn({
        layersRoot: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Gm = B({
        __name: "DismissableLayer",
        props: {
            disableOutsidePointerEvents: {
                type: Boolean,
                default: !1
            },
            asChild: {
                type: Boolean
            },
            as: {}
        },
        emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
        setup(e, {
            emit: a
        }) {
            const t = e,
                n = a,
                {
                    forwardRef: r,
                    currentElement: o
                } = ie(),
                l = T(() => {
                    var g;
                    return ((g = o.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document
                }),
                s = T(() => Ue.layersRoot),
                i = T(() => o.value ? Array.from(s.value).indexOf(o.value) : -1),
                c = T(() => Ue.layersWithOutsidePointerEventsDisabled.size > 0),
                f = T(() => {
                    const g = Array.from(s.value),
                        [y] = [...Ue.layersWithOutsidePointerEventsDisabled].slice(-1),
                        h = g.indexOf(y);
                    return i.value >= h
                }),
                d = jm(async g => {
                    const y = [...Ue.branches].some(h => h == null ? void 0 : h.contains(g.target));
                    !f.value || y || (n("pointerDownOutside", g), n("interactOutside", g), await de(), g.defaultPrevented || n("dismiss"))
                }, o),
                v = Km(g => {
                    [...Ue.branches].some(y => y == null ? void 0 : y.contains(g.target)) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"))
                }, o);
            mm("Escape", g => {
                i.value === s.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"))
            });
            let m;
            return Se(g => {
                o.value && (t.disableOutsidePointerEvents && (Ue.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ue.layersWithOutsidePointerEventsDisabled.add(o.value)), s.value.add(o.value), g(() => {
                    t.disableOutsidePointerEvents && Ue.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m)
                }))
            }), Se(g => {
                g(() => {
                    o.value && (s.value.delete(o.value), Ue.layersWithOutsidePointerEventsDisabled.delete(o.value))
                })
            }), (g, y) => (p(), H(u(Me), {
                ref: u(r),
                "as-child": g.asChild,
                as: g.as,
                "data-dismissable-layer": "",
                style: Le({
                    pointerEvents: c.value ? f.value ? "auto" : "none" : void 0
                }),
                onFocusCapture: u(v).onFocusCapture,
                onBlurCapture: u(v).onBlurCapture,
                onPointerdownCapture: u(d).onPointerDownCapture
            }, {
                default: S(() => [I(g.$slots, "default")]),
                _: 3
            }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]))
        }
    }),
    Ba = "focusScope.autoFocusOnMount",
    Ma = "focusScope.autoFocusOnUnmount",
    tr = {
        bubbles: !1,
        cancelable: !0
    };

function Ym(e, {
    select: a = !1
} = {}) {
    const t = He();
    for (const n of e)
        if (Fe(n, {
                select: a
            }), He() !== t) return !0
}

function Xm(e) {
    const a = Co(e),
        t = ar(a, e),
        n = ar(a.reverse(), e);
    return [t, n]
}

function Co(e) {
    const a = [],
        t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: n => {
                const r = n.tagName === "INPUT" && n.type === "hidden";
                return n.disabled || n.hidden || r ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; t.nextNode();) a.push(t.currentNode);
    return a
}

function ar(e, a) {
    for (const t of e)
        if (!Qm(t, {
                upTo: a
            })) return t
}

function Qm(e, {
    upTo: a
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (a !== void 0 && e === a) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function Jm(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function Fe(e, {
    select: a = !1
} = {}) {
    if (e && e.focus) {
        const t = He();
        e.focus({
            preventScroll: !0
        }), e !== t && Jm(e) && a && e.select()
    }
}
const _m = rm(() => E([]));

function ep() {
    const e = _m();
    return {
        add(a) {
            const t = e.value[0];
            a !== t && (t == null || t.pause()), e.value = nr(e.value, a), e.value.unshift(a)
        },
        remove(a) {
            var t;
            e.value = nr(e.value, a), (t = e.value[0]) == null || t.resume()
        }
    }
}

function nr(e, a) {
    const t = [...e],
        n = t.indexOf(a);
    return n !== -1 && t.splice(n, 1), t
}

function tp(e) {
    return e.filter(a => a.tagName !== "A")
}
const ap = B({
        __name: "FocusScope",
        props: {
            loop: {
                type: Boolean,
                default: !1
            },
            trapped: {
                type: Boolean,
                default: !1
            },
            asChild: {
                type: Boolean
            },
            as: {}
        },
        emits: ["mountAutoFocus", "unmountAutoFocus"],
        setup(e, {
            emit: a
        }) {
            const t = e,
                n = a,
                {
                    currentRef: r,
                    currentElement: o
                } = ie(),
                l = E(null),
                s = ep(),
                i = nn({
                    paused: !1,
                    pause() {
                        this.paused = !0
                    },
                    resume() {
                        this.paused = !1
                    }
                });
            Se(f => {
                if (!Ye) return;
                const d = o.value;
                if (!t.trapped) return;

                function v(h) {
                    if (i.paused || !d) return;
                    const w = h.target;
                    d.contains(w) ? l.value = w : Fe(l.value, {
                        select: !0
                    })
                }

                function m(h) {
                    if (i.paused || !d) return;
                    const w = h.relatedTarget;
                    w !== null && (d.contains(w) || Fe(l.value, {
                        select: !0
                    }))
                }

                function g(h) {
                    d.contains(l.value) || Fe(d)
                }
                document.addEventListener("focusin", v), document.addEventListener("focusout", m);
                const y = new MutationObserver(g);
                d && y.observe(d, {
                    childList: !0,
                    subtree: !0
                }), f(() => {
                    document.removeEventListener("focusin", v), document.removeEventListener("focusout", m), y.disconnect()
                })
            }), Se(async f => {
                const d = o.value;
                if (await de(), !d) return;
                s.add(i);
                const v = He();
                if (!d.contains(v)) {
                    const m = new CustomEvent(Ba, tr);
                    d.addEventListener(Ba, g => n("mountAutoFocus", g)), d.dispatchEvent(m), m.defaultPrevented || (Ym(tp(Co(d)), {
                        select: !0
                    }), He() === v && Fe(d))
                }
                f(() => {
                    d.removeEventListener(Ba, y => n("mountAutoFocus", y));
                    const m = new CustomEvent(Ma, tr),
                        g = y => {
                            n("unmountAutoFocus", y)
                        };
                    d.addEventListener(Ma, g), d.dispatchEvent(m), setTimeout(() => {
                        m.defaultPrevented || Fe(v ?? document.body, {
                            select: !0
                        }), d.removeEventListener(Ma, g), s.remove(i)
                    }, 0)
                })
            });

            function c(f) {
                if (!t.loop && !t.trapped || i.paused) return;
                const d = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
                    v = He();
                if (d && v) {
                    const m = f.currentTarget,
                        [g, y] = Xm(m);
                    g && y ? !f.shiftKey && v === y ? (f.preventDefault(), t.loop && Fe(g, {
                        select: !0
                    })) : f.shiftKey && v === g && (f.preventDefault(), t.loop && Fe(y, {
                        select: !0
                    })) : v === m && f.preventDefault()
                }
            }
            return (f, d) => (p(), H(u(Me), {
                ref_key: "currentRef",
                ref: r,
                tabindex: "-1",
                "as-child": f.asChild,
                as: f.as,
                onKeydown: c
            }, {
                default: S(() => [I(f.$slots, "default")]),
                _: 3
            }, 8, ["as-child", "as"]))
        }
    }),
    np = "menu.itemSelect",
    Wa = ["Enter", " "],
    rp = ["ArrowDown", "PageUp", "Home"],
    Ho = ["ArrowUp", "PageDown", "End"],
    op = [...rp, ...Ho],
    lp = {
        ltr: [...Wa, "ArrowRight"],
        rtl: [...Wa, "ArrowLeft"]
    },
    sp = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    };

function Po(e) {
    return e ? "open" : "closed"
}

function aa(e) {
    return e === "indeterminate"
}

function pn(e) {
    return aa(e) ? "indeterminate" : e ? "checked" : "unchecked"
}

function ip(e) {
    const a = He();
    for (const t of e)
        if (t === a || (t.focus(), He() !== a)) return
}

function up(e, a) {
    const {
        x: t,
        y: n
    } = e;
    let r = !1;
    for (let o = 0, l = a.length - 1; o < a.length; l = o++) {
        const s = a[o].x,
            i = a[o].y,
            c = a[l].x,
            f = a[l].y;
        i > n != f > n && t < (c - s) * (n - i) / (f - i) + s && (r = !r)
    }
    return r
}

function dp(e, a) {
    if (!a) return !1;
    const t = {
        x: e.clientX,
        y: e.clientY
    };
    return up(t, a)
}

function Bt(e) {
    return e.pointerType === "mouse"
}
const [Bo, cp] = Be("PopperRoot"), Mo = B({
    inheritAttrs: !1,
    __name: "PopperRoot",
    setup(e) {
        const a = E();
        return cp({
            anchor: a,
            onAnchorChange: t => a.value = t
        }), (t, n) => I(t.$slots, "default")
    }
}), vp = B({
    __name: "PopperAnchor",
    props: {
        element: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e,
            {
                forwardRef: t,
                currentElement: n
            } = ie(),
            r = Bo();
        return Se(() => {
            r.onAnchorChange(a.element ?? n.value)
        }), (o, l) => (p(), H(u(Me), {
            ref: u(t),
            as: o.as,
            "as-child": o.asChild
        }, {
            default: S(() => [I(o.$slots, "default")]),
            _: 3
        }, 8, ["as", "as-child"]))
    }
});

function fp(e) {
    return e !== null
}

function mp(e) {
    return {
        name: "transformOrigin",
        options: e,
        fn(a) {
            var t, n, r;
            const {
                placement: o,
                rects: l,
                middlewareData: s
            } = a, i = ((t = s.arrow) == null ? void 0 : t.centerOffset) !== 0, c = i ? 0 : e.arrowWidth, f = i ? 0 : e.arrowHeight, [d, v] = ja(o), m = {
                start: "0%",
                center: "50%",
                end: "100%"
            } [v], g = (((n = s.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, y = (((r = s.arrow) == null ? void 0 : r.y) ?? 0) + f / 2;
            let h = "",
                w = "";
            return d === "bottom" ? (h = i ? m : `${g}px`, w = `${-f}px`) : d === "top" ? (h = i ? m : `${g}px`, w = `${l.floating.height+f}px`) : d === "right" ? (h = `${-f}px`, w = i ? m : `${y}px`) : d === "left" && (h = `${l.floating.width+f}px`, w = i ? m : `${y}px`), {
                data: {
                    x: h,
                    y: w
                }
            }
        }
    }
}

function ja(e) {
    const [a, t = "center"] = e.split("-");
    return [a, t]
}
const Eo = {
        side: "bottom",
        sideOffset: 0,
        align: "center",
        alignOffset: 0,
        arrowPadding: 0,
        avoidCollisions: !0,
        collisionBoundary: () => [],
        collisionPadding: 0,
        sticky: "partial",
        hideWhenDetached: !1,
        updatePositionStrategy: "optimized",
        prioritizePosition: !1
    },
    [pp, hp] = Be("PopperContent"),
    gp = B({
        inheritAttrs: !1,
        __name: "PopperContent",
        props: Vr({
            side: {},
            sideOffset: {},
            align: {},
            alignOffset: {},
            avoidCollisions: {
                type: Boolean
            },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            sticky: {},
            hideWhenDetached: {
                type: Boolean
            },
            updatePositionStrategy: {},
            prioritizePosition: {
                type: Boolean
            },
            asChild: {
                type: Boolean
            },
            as: {}
        }, {
            ...Eo
        }),
        emits: ["placed"],
        setup(e, {
            emit: a
        }) {
            const t = e,
                n = a,
                r = Bo(),
                {
                    forwardRef: o,
                    currentElement: l
                } = ie(),
                s = E(),
                i = E(),
                {
                    width: c,
                    height: f
                } = $m(i),
                d = T(() => t.side + (t.align !== "center" ? `-${t.align}` : "")),
                v = T(() => typeof t.collisionPadding == "number" ? t.collisionPadding : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...t.collisionPadding
                }),
                m = T(() => Array.isArray(t.collisionBoundary) ? t.collisionBoundary : [t.collisionBoundary]),
                g = T(() => ({
                    padding: v.value,
                    boundary: m.value.filter(fp),
                    altBoundary: m.value.length > 0
                })),
                y = nm(() => [Ps({
                    mainAxis: t.sideOffset + f.value,
                    alignmentAxis: t.alignOffset
                }), t.prioritizePosition && t.avoidCollisions && Pn({
                    ...g.value
                }), t.avoidCollisions && Bs({
                    mainAxis: !0,
                    crossAxis: !!t.prioritizePosition,
                    limiter: t.sticky === "partial" ? Ms() : void 0,
                    ...g.value
                }), !t.prioritizePosition && t.avoidCollisions && Pn({
                    ...g.value
                }), Es({
                    ...g.value,
                    apply: ({
                        elements: R,
                        rects: N,
                        availableWidth: V,
                        availableHeight: L
                    }) => {
                        const {
                            width: C,
                            height: M
                        } = N.reference, z = R.floating.style;
                        z.setProperty("--radix-popper-available-width", `${V}px`), z.setProperty("--radix-popper-available-height", `${L}px`), z.setProperty("--radix-popper-anchor-width", `${C}px`), z.setProperty("--radix-popper-anchor-height", `${M}px`)
                    }
                }), i.value && Rs({
                    element: i.value,
                    padding: t.arrowPadding
                }), mp({
                    arrowWidth: c.value,
                    arrowHeight: f.value
                }), t.hideWhenDetached && Is({
                    strategy: "referenceHidden",
                    ...g.value
                })]),
                {
                    floatingStyles: h,
                    placement: w,
                    isPositioned: P,
                    middlewareData: k
                } = ws(r.anchor, s, {
                    strategy: "fixed",
                    placement: d,
                    whileElementsMounted: (...R) => As(...R, {
                        animationFrame: t.updatePositionStrategy === "always"
                    }),
                    middleware: y
                }),
                D = T(() => ja(w.value)[0]),
                Z = T(() => ja(w.value)[1]);
            Ts(() => {
                P.value && n("placed")
            });
            const J = T(() => {
                    var R;
                    return ((R = k.value.arrow) == null ? void 0 : R.centerOffset) !== 0
                }),
                G = E("");
            Se(() => {
                l.value && (G.value = window.getComputedStyle(l.value).zIndex)
            });
            const ae = T(() => {
                    var R;
                    return ((R = k.value.arrow) == null ? void 0 : R.x) ?? 0
                }),
                Q = T(() => {
                    var R;
                    return ((R = k.value.arrow) == null ? void 0 : R.y) ?? 0
                });
            return hp({
                placedSide: D,
                onArrowChange: R => i.value = R,
                arrowX: ae,
                arrowY: Q,
                shouldHideArrow: J
            }), (R, N) => {
                var V, L, C;
                return p(), x("div", {
                    ref_key: "floatingRef",
                    ref: s,
                    "data-radix-popper-content-wrapper": "",
                    style: Le({
                        ...u(h),
                        transform: u(P) ? u(h).transform : "translate(0, -200%)",
                        minWidth: "max-content",
                        zIndex: G.value,
                        "--radix-popper-transform-origin": [(V = u(k).transformOrigin) == null ? void 0 : V.x, (L = u(k).transformOrigin) == null ? void 0 : L.y].join(" "),
                        ...((C = u(k).hide) == null ? void 0 : C.referenceHidden) && {
                            visibility: "hidden",
                            pointerEvents: "none"
                        }
                    })
                }, [A(u(Me), _({
                    ref: u(o)
                }, R.$attrs, {
                    "as-child": t.asChild,
                    as: R.as,
                    "data-side": D.value,
                    "data-align": Z.value,
                    style: {
                        animation: u(P) ? void 0 : "none"
                    }
                }), {
                    default: S(() => [I(R.$slots, "default")]),
                    _: 3
                }, 16, ["as-child", "as", "data-side", "data-align", "style"])], 4)
            }
        }
    }),
    yp = b("polygon", {
        points: "0,0 30,0 15,10"
    }, null, -1),
    bp = B({
        __name: "Arrow",
        props: {
            width: {
                default: 10
            },
            height: {
                default: 5
            },
            asChild: {
                type: Boolean
            },
            as: {
                default: "svg"
            }
        },
        setup(e) {
            const a = e;
            return ie(), (t, n) => (p(), H(u(Me), _(a, {
                width: t.width,
                height: t.height,
                viewBox: t.asChild ? void 0 : "0 0 30 10",
                preserveAspectRatio: t.asChild ? void 0 : "none"
            }), {
                default: S(() => [I(t.$slots, "default", {}, () => [yp])]),
                _: 3
            }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]))
        }
    }),
    Sp = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    xp = B({
        inheritAttrs: !1,
        __name: "PopperArrow",
        props: {
            width: {},
            height: {},
            asChild: {
                type: Boolean
            },
            as: {
                default: "svg"
            }
        },
        setup(e) {
            const {
                forwardRef: a
            } = ie(), t = pp(), n = T(() => Sp[t.placedSide.value]);
            return (r, o) => {
                var l, s, i, c;
                return p(), x("span", {
                    ref: f => {
                        u(t).onArrowChange(f)
                    },
                    style: Le({
                        position: "absolute",
                        left: (l = u(t).arrowX) != null && l.value ? `${(s=u(t).arrowX)==null?void 0:s.value}px` : void 0,
                        top: (i = u(t).arrowY) != null && i.value ? `${(c=u(t).arrowY)==null?void 0:c.value}px` : void 0,
                        [n.value]: 0,
                        transformOrigin: {
                            top: "",
                            right: "0 0",
                            bottom: "center 0",
                            left: "100% 0"
                        } [u(t).placedSide.value],
                        transform: {
                            top: "translateY(100%)",
                            right: "translateY(50%) rotate(90deg) translateX(-50%)",
                            bottom: "rotate(180deg)",
                            left: "translateY(50%) rotate(-90deg) translateX(50%)"
                        } [u(t).placedSide.value],
                        visibility: u(t).shouldHideArrow.value ? "hidden" : void 0
                    })
                }, [A(bp, _(r.$attrs, {
                    ref: u(a),
                    style: {
                        display: "block"
                    },
                    as: r.as,
                    "as-child": r.asChild,
                    width: r.width,
                    height: r.height
                }), {
                    default: S(() => [I(r.$slots, "default")]),
                    _: 3
                }, 16, ["as", "as-child", "width", "height"])], 4)
            }
        }
    }),
    wp = "data-radix-vue-collection-item",
    [hn, Ap] = Be("CollectionProvider");

function Tp(e = wp) {
    const a = E(new Map),
        t = E(),
        n = Ap({
            collectionRef: t,
            itemMap: a,
            attrName: e
        }),
        {
            getItems: r
        } = Hp(n),
        o = T(() => Array.from(n.itemMap.value.values())),
        l = T(() => n.itemMap.value.size);
    return {
        getItems: r,
        reactiveItems: o,
        itemMapSize: l
    }
}
const kp = B({
        name: "CollectionSlot",
        setup(e, {
            slots: a
        }) {
            const t = hn(),
                {
                    primitiveElement: n,
                    currentElement: r
                } = To();
            return oe(r, () => {
                t.collectionRef.value = r.value
            }), () => mt(fn, {
                ref: n
            }, a)
        }
    }),
    Cp = B({
        name: "CollectionItem",
        inheritAttrs: !1,
        props: {
            value: {
                validator: () => !0
            }
        },
        setup(e, {
            slots: a,
            attrs: t
        }) {
            const n = hn(),
                {
                    primitiveElement: r,
                    currentElement: o
                } = To();
            return Se(l => {
                if (o.value) {
                    const s = xs(o.value);
                    n.itemMap.value.set(s, {
                        ref: o.value,
                        value: e.value
                    }), l(() => n.itemMap.value.delete(s))
                }
            }), () => mt(fn, {
                ...t,
                [n.attrName]: "",
                ref: r
            }, a)
        }
    });

function Hp(e) {
    const a = e ?? hn();
    return {
        getItems: () => {
            const t = a.collectionRef.value;
            if (!t) return [];
            const n = Array.from(t.querySelectorAll(`[${a.attrName}]`));
            return Array.from(a.itemMap.value.values()).sort((r, o) => n.indexOf(r.ref) - n.indexOf(o.ref))
        }
    }
}
const Ro = B({
        __name: "MenuAnchor",
        props: {
            element: {},
            asChild: {
                type: Boolean
            },
            as: {}
        },
        setup(e) {
            const a = e;
            return (t, n) => (p(), H(u(vp), se(ue(a)), {
                default: S(() => [I(t.$slots, "default")]),
                _: 3
            }, 16))
        }
    }),
    Pp = B({
        __name: "MenuArrow",
        props: {
            width: {},
            height: {},
            asChild: {
                type: Boolean
            },
            as: {}
        },
        setup(e) {
            const a = e;
            return (t, n) => (p(), H(u(xp), se(ue(a)), {
                default: S(() => [I(t.$slots, "default")]),
                _: 3
            }, 16))
        }
    });

function Bp() {
    const e = E(!1);
    return Pe(() => {
        ta("keydown", () => {
            e.value = !0
        }, {
            capture: !0,
            passive: !0
        }), ta(["pointerdown", "pointermove"], () => {
            e.value = !1
        }, {
            capture: !0,
            passive: !0
        })
    }), e
}
const Mp = So(Bp),
    [it, Io] = Be(["MenuRoot", "MenuSub"], "MenuContext"),
    [Vt, Ep] = Be("MenuRoot"),
    Rp = B({
        __name: "MenuRoot",
        props: {
            open: {
                type: Boolean,
                default: !1
            },
            dir: {},
            modal: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:open"],
        setup(e, {
            emit: a
        }) {
            const t = e,
                n = a,
                {
                    modal: r,
                    dir: o
                } = xt(t),
                l = vn(o),
                s = lt(t, "open", n),
                i = E(),
                c = Mp();
            return Io({
                open: s,
                onOpenChange: f => {
                    s.value = f
                },
                content: i,
                onContentChange: f => {
                    i.value = f
                }
            }), Ep({
                onClose: () => {
                    s.value = !1
                },
                isUsingKeyboardRef: c,
                dir: l,
                modal: r
            }), (f, d) => (p(), H(u(Mo), null, {
                default: S(() => [I(f.$slots, "default")]),
                _: 3
            }))
        }
    }),
    Ip = "rovingFocusGroup.onEntryFocus",
    Op = {
        bubbles: !1,
        cancelable: !0
    };

function Vp(e, a = !1) {
    const t = He();
    for (const n of e)
        if (n === t || (n.focus({
                preventScroll: a
            }), He() !== t)) return
}
const [O4, $p] = Be("RovingFocusGroup"), Lp = B({
    __name: "RovingFocusGroup",
    props: {
        orientation: {
            default: void 0
        },
        dir: {},
        loop: {
            type: Boolean,
            default: !1
        },
        currentTabStopId: {},
        defaultCurrentTabStopId: {},
        preventScrollOnEntryFocus: {
            type: Boolean,
            default: !1
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["entryFocus", "update:currentTabStopId"],
    setup(e, {
        expose: a,
        emit: t
    }) {
        const n = e,
            r = t,
            {
                loop: o,
                orientation: l,
                dir: s
            } = xt(n),
            i = vn(s),
            c = lt(n, "currentTabStopId", r, {
                defaultValue: n.defaultCurrentTabStopId,
                passive: n.currentTabStopId === void 0
            }),
            f = E(!1),
            d = E(!1),
            v = E(0),
            {
                getItems: m
            } = Tp();

        function g(h) {
            const w = !d.value;
            if (h.currentTarget && h.target === h.currentTarget && w && !f.value) {
                const P = new CustomEvent(Ip, Op);
                if (h.currentTarget.dispatchEvent(P), r("entryFocus", P), !P.defaultPrevented) {
                    const k = m().map(G => G.ref).filter(G => G.dataset.disabled !== ""),
                        D = k.find(G => G.getAttribute("data-active") === "true"),
                        Z = k.find(G => G.id === c.value),
                        J = [D, Z, ...k].filter(Boolean);
                    Vp(J, n.preventScrollOnEntryFocus)
                }
            }
            d.value = !1
        }

        function y() {
            setTimeout(() => {
                d.value = !1
            }, 1)
        }
        return a({
            getItems: m
        }), $p({
            loop: o,
            dir: i,
            orientation: l,
            currentTabStopId: c,
            onItemFocus: h => {
                c.value = h
            },
            onItemShiftTab: () => {
                f.value = !0
            },
            onFocusableItemAdd: () => {
                v.value++
            },
            onFocusableItemRemove: () => {
                v.value--
            }
        }), (h, w) => (p(), H(u(kp), null, {
            default: S(() => [A(u(Me), {
                tabindex: f.value || v.value === 0 ? -1 : 0,
                "data-orientation": u(l),
                as: h.as,
                "as-child": h.asChild,
                dir: u(i),
                style: {
                    outline: "none"
                },
                onMousedown: w[0] || (w[0] = P => d.value = !0),
                onMouseup: y,
                onFocus: g,
                onBlur: w[1] || (w[1] = P => f.value = !1)
            }, {
                default: S(() => [I(h.$slots, "default")]),
                _: 3
            }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])]),
            _: 3
        }))
    }
}), [gn, Up] = Be("MenuContent"), yn = B({
    __name: "MenuContentImpl",
    props: Vr({
        loop: {
            type: Boolean
        },
        disableOutsidePointerEvents: {
            type: Boolean
        },
        disableOutsideScroll: {
            type: Boolean
        },
        trapFocus: {
            type: Boolean
        },
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        updatePositionStrategy: {},
        prioritizePosition: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {}
    }, {
        ...Eo
    }),
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = a,
            r = it(),
            o = Vt(),
            {
                trapFocus: l,
                disableOutsidePointerEvents: s,
                loop: i
            } = xt(t);
        Pm(), Tm(s.value);
        const c = E(""),
            f = E(0),
            d = E(0),
            v = E(null),
            m = E("right"),
            g = E(0),
            y = E(null),
            {
                createCollection: h
            } = Hm(),
            {
                forwardRef: w,
                currentElement: P
            } = ie(),
            k = h(P);
        oe(P, R => {
            r.onContentChange(R)
        });
        const {
            handleTypeaheadSearch: D
        } = Dm(k);
        Et(() => {
            window.clearTimeout(f.value)
        });

        function Z(R) {
            var N, V;
            return m.value === ((N = v.value) == null ? void 0 : N.side) && dp(R, (V = v.value) == null ? void 0 : V.area)
        }
        async function J(R) {
            var N;
            n("openAutoFocus", R), !R.defaultPrevented && (R.preventDefault(), (N = P.value) == null || N.focus({
                preventScroll: !0
            }))
        }

        function G(R) {
            if (R.defaultPrevented) return;
            const N = R.target.closest("[data-radix-menu-content]") === R.currentTarget,
                V = R.ctrlKey || R.altKey || R.metaKey,
                L = R.key.length === 1,
                C = ym(R, He(), P.value, {
                    loop: i.value,
                    arrowKeyOptions: "vertical",
                    dir: o == null ? void 0 : o.dir.value,
                    focus: !0,
                    attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
                });
            if (C) return C == null ? void 0 : C.focus();
            if (R.code === "Space" || (N && (R.key === "Tab" && R.preventDefault(), !V && L && D(R.key)), R.target !== P.value) || !op.includes(R.key)) return;
            R.preventDefault();
            const M = k.value;
            Ho.includes(R.key) && M.reverse(), ip(M)
        }

        function ae(R) {
            var N, V;
            (V = (N = R == null ? void 0 : R.currentTarget) == null ? void 0 : N.contains) != null && V.call(N, R.target) || (window.clearTimeout(f.value), c.value = "")
        }

        function Q(R) {
            var N;
            if (!Bt(R)) return;
            const V = R.target,
                L = g.value !== R.clientX;
            if ((N = R == null ? void 0 : R.currentTarget) != null && N.contains(V) && L) {
                const C = R.clientX > g.value ? "right" : "left";
                m.value = C, g.value = R.clientX
            }
        }
        return Up({
            onItemEnter: R => !!Z(R),
            onItemLeave: R => {
                var N;
                Z(R) || ((N = P.value) == null || N.focus(), y.value = null)
            },
            onTriggerLeave: R => !!Z(R),
            searchRef: c,
            pointerGraceTimerRef: d,
            onPointerGraceIntentChange: R => {
                v.value = R
            }
        }), (R, N) => (p(), H(u(ap), {
            "as-child": "",
            trapped: u(l),
            onMountAutoFocus: J,
            onUnmountAutoFocus: N[7] || (N[7] = V => n("closeAutoFocus", V))
        }, {
            default: S(() => [A(u(Gm), {
                "as-child": "",
                "disable-outside-pointer-events": u(s),
                onEscapeKeyDown: N[2] || (N[2] = V => n("escapeKeyDown", V)),
                onPointerDownOutside: N[3] || (N[3] = V => n("pointerDownOutside", V)),
                onFocusOutside: N[4] || (N[4] = V => n("focusOutside", V)),
                onInteractOutside: N[5] || (N[5] = V => n("interactOutside", V)),
                onDismiss: N[6] || (N[6] = V => n("dismiss"))
            }, {
                default: S(() => [A(u(Lp), {
                    "current-tab-stop-id": y.value,
                    "onUpdate:currentTabStopId": N[0] || (N[0] = V => y.value = V),
                    "as-child": "",
                    orientation: "vertical",
                    dir: u(o).dir.value,
                    loop: u(i),
                    onEntryFocus: N[1] || (N[1] = V => {
                        n("entryFocus", V), u(o).isUsingKeyboardRef.value || V.preventDefault()
                    })
                }, {
                    default: S(() => [A(u(gp), {
                        ref: u(w),
                        role: "menu",
                        as: R.as,
                        "as-child": R.asChild,
                        "aria-orientation": "vertical",
                        "data-radix-menu-content": "",
                        "data-state": u(Po)(u(r).open.value),
                        dir: u(o).dir.value,
                        side: R.side,
                        "side-offset": R.sideOffset,
                        align: R.align,
                        "align-offset": R.alignOffset,
                        "avoid-collisions": R.avoidCollisions,
                        "collision-boundary": R.collisionBoundary,
                        "collision-padding": R.collisionPadding,
                        "arrow-padding": R.arrowPadding,
                        "prioritize-position": R.prioritizePosition,
                        sticky: R.sticky,
                        "hide-when-detached": R.hideWhenDetached,
                        onKeydown: G,
                        onBlur: ae,
                        onPointermove: Q
                    }, {
                        default: S(() => [I(R.$slots, "default")]),
                        _: 3
                    }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])]),
                    _: 3
                }, 8, ["current-tab-stop-id", "dir", "loop"])]),
                _: 3
            }, 8, ["disable-outside-pointer-events"])]),
            _: 3
        }, 8, ["trapped"]))
    }
}), Oo = B({
    inheritAttrs: !1,
    __name: "MenuItemImpl",
    props: {
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e,
            t = gn(),
            {
                forwardRef: n
            } = ie(),
            r = E(!1);
        async function o(s) {
            if (!s.defaultPrevented && Bt(s)) {
                if (a.disabled) t.onItemLeave(s);
                else if (!t.onItemEnter(s)) {
                    const i = s.currentTarget;
                    i == null || i.focus({
                        preventScroll: !0
                    })
                }
            }
        }
        async function l(s) {
            await de(), !s.defaultPrevented && Bt(s) && t.onItemLeave(s)
        }
        return (s, i) => (p(), H(u(Cp), {
            value: {
                textValue: s.textValue
            }
        }, {
            default: S(() => [A(u(Me), _({
                ref: u(n),
                role: "menuitem",
                tabindex: "-1"
            }, s.$attrs, {
                as: s.as,
                "as-child": s.asChild,
                "data-radix-vue-collection-item": "",
                "aria-disabled": s.disabled || void 0,
                "data-disabled": s.disabled ? "" : void 0,
                "data-highlighted": r.value ? "" : void 0,
                onPointermove: o,
                onPointerleave: l,
                onFocus: i[0] || (i[0] = async c => {
                    await de(), !(c.defaultPrevented || s.disabled) && (r.value = !0)
                }),
                onBlur: i[1] || (i[1] = async c => {
                    await de(), !c.defaultPrevented && (r.value = !1)
                })
            }), {
                default: S(() => [I(s.$slots, "default")]),
                _: 3
            }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])]),
            _: 3
        }, 8, ["value"]))
    }
}), bn = B({
    __name: "MenuItem",
    props: {
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["select"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = a,
            {
                forwardRef: r,
                currentElement: o
            } = ie(),
            l = Vt(),
            s = gn(),
            i = E(!1);
        async function c() {
            const f = o.value;
            if (!t.disabled && f) {
                const d = new CustomEvent(np, {
                    bubbles: !0,
                    cancelable: !0
                });
                n("select", d), await de(), d.defaultPrevented ? i.value = !1 : l.onClose()
            }
        }
        return (f, d) => (p(), H(Oo, _(t, {
            ref: u(r),
            onClick: c,
            onPointerdown: d[0] || (d[0] = () => {
                i.value = !0
            }),
            onPointerup: d[1] || (d[1] = async v => {
                var m;
                await de(), !v.defaultPrevented && (i.value || (m = v.currentTarget) == null || m.click())
            }),
            onKeydown: d[2] || (d[2] = async v => {
                const m = u(s).searchRef.value !== "";
                f.disabled || m && v.key === " " || u(Wa).includes(v.key) && (v.currentTarget.click(), v.preventDefault())
            })
        }), {
            default: S(() => [I(f.$slots, "default")]),
            _: 3
        }, 16))
    }
}), [Dp, Vo] = Be(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext"), zp = B({
    __name: "MenuItemIndicator",
    props: {
        forceMount: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {
            default: "span"
        }
    },
    setup(e) {
        const a = Dp({
            checked: E(!1)
        });
        return (t, n) => (p(), H(u(mn), {
            present: t.forceMount || u(aa)(u(a).checked.value) || u(a).checked.value === !0
        }, {
            default: S(() => [A(u(Me), {
                as: t.as,
                "as-child": t.asChild,
                "data-state": u(pn)(u(a).checked.value)
            }, {
                default: S(() => [I(t.$slots, "default")]),
                _: 3
            }, 8, ["as", "as-child", "data-state"])]),
            _: 3
        }, 8, ["present"]))
    }
}), Zp = B({
    __name: "MenuCheckboxItem",
    props: {
        checked: {
            type: [Boolean, String],
            default: !1
        },
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["select", "update:checked"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = a,
            r = lt(t, "checked", n);
        return Vo({
            checked: r
        }), (o, l) => (p(), H(bn, _({
            role: "menuitemcheckbox"
        }, t, {
            "aria-checked": u(aa)(u(r)) ? "mixed" : u(r),
            "data-state": u(pn)(u(r)),
            onSelect: l[0] || (l[0] = async s => {
                n("select", s), u(aa)(u(r)) ? r.value = !0 : r.value = !u(r)
            })
        }), {
            default: S(() => [I(o.$slots, "default", {
                checked: u(r)
            })]),
            _: 3
        }, 16, ["aria-checked", "data-state"]))
    }
}), Np = B({
    __name: "MenuRootContentModal",
    props: {
        loop: {
            type: Boolean
        },
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        updatePositionStrategy: {},
        prioritizePosition: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = a,
            r = st(t, n),
            o = it(),
            {
                forwardRef: l,
                currentElement: s
            } = ie();
        return Om(s), (i, c) => (p(), H(yn, _(u(r), {
            ref: u(l),
            "trap-focus": u(o).open.value,
            "disable-outside-pointer-events": u(o).open.value,
            "disable-outside-scroll": !0,
            onDismiss: c[0] || (c[0] = f => u(o).onOpenChange(!1)),
            onFocusOutside: c[1] || (c[1] = Ze(f => n("focusOutside", f), ["prevent"]))
        }), {
            default: S(() => [I(i.$slots, "default")]),
            _: 3
        }, 16, ["trap-focus", "disable-outside-pointer-events"]))
    }
}), Fp = B({
    __name: "MenuRootContentNonModal",
    props: {
        loop: {
            type: Boolean
        },
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        updatePositionStrategy: {},
        prioritizePosition: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
    setup(e, {
        emit: a
    }) {
        const t = st(e, a),
            n = it();
        return (r, o) => (p(), H(yn, _(u(t), {
            "trap-focus": !1,
            "disable-outside-pointer-events": !1,
            "disable-outside-scroll": !1,
            onDismiss: o[0] || (o[0] = l => u(n).onOpenChange(!1))
        }), {
            default: S(() => [I(r.$slots, "default")]),
            _: 3
        }, 16))
    }
}), qp = B({
    __name: "MenuContent",
    props: {
        forceMount: {
            type: Boolean
        },
        loop: {
            type: Boolean
        },
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        updatePositionStrategy: {},
        prioritizePosition: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
    setup(e, {
        emit: a
    }) {
        const t = st(e, a),
            n = it(),
            r = Vt();
        return (o, l) => (p(), H(u(mn), {
            present: o.forceMount || u(n).open.value
        }, {
            default: S(() => [u(r).modal.value ? (p(), H(Np, se(_({
                key: 0
            }, {
                ...o.$attrs,
                ...u(t)
            })), {
                default: S(() => [I(o.$slots, "default")]),
                _: 3
            }, 16)) : (p(), H(Fp, se(_({
                key: 1
            }, {
                ...o.$attrs,
                ...u(t)
            })), {
                default: S(() => [I(o.$slots, "default")]),
                _: 3
            }, 16))]),
            _: 3
        }, 8, ["present"]))
    }
}), $o = B({
    __name: "MenuGroup",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e;
        return (t, n) => (p(), H(u(Me), _({
            role: "group"
        }, a), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), Wp = B({
    __name: "MenuLabel",
    props: {
        asChild: {
            type: Boolean
        },
        as: {
            default: "div"
        }
    },
    setup(e) {
        const a = e;
        return (t, n) => (p(), H(u(Me), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), jp = B({
    __name: "MenuPortal",
    props: {
        to: {},
        disabled: {
            type: Boolean
        },
        forceMount: {
            type: Boolean
        }
    },
    setup(e) {
        const a = e;
        return (t, n) => (p(), H(u(Fm), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), [Kp, Gp] = Be("MenuRadioGroup"), Yp = B({
    __name: "MenuRadioGroup",
    props: {
        modelValue: {
            default: ""
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["update:modelValue"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = lt(t, "modelValue", a);
        return Gp({
            modelValue: n,
            onValueChange: r => {
                n.value = r
            }
        }), (r, o) => (p(), H($o, se(ue(t)), {
            default: S(() => [I(r.$slots, "default", {
                modelValue: u(n)
            })]),
            _: 3
        }, 16))
    }
}), Xp = B({
    __name: "MenuRadioItem",
    props: {
        value: {},
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["select"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = a,
            {
                value: r
            } = xt(t),
            o = Kp(),
            l = T(() => o.modelValue.value === (r == null ? void 0 : r.value));
        return Vo({
            checked: l
        }), (s, i) => (p(), H(bn, _({
            role: "menuitemradio"
        }, t, {
            "aria-checked": l.value,
            "data-state": u(pn)(l.value),
            onSelect: i[0] || (i[0] = async c => {
                n("select", c), u(o).onValueChange(u(r))
            })
        }), {
            default: S(() => [I(s.$slots, "default")]),
            _: 3
        }, 16, ["aria-checked", "data-state"]))
    }
}), Qp = B({
    __name: "MenuSeparator",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e;
        return (t, n) => (p(), H(u(Me), _(a, {
            role: "separator",
            "aria-orientation": "horizontal"
        }), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), [Lo, Jp] = Be("MenuSub"), _p = B({
    __name: "MenuSub",
    props: {
        open: {
            type: Boolean,
            default: void 0
        }
    },
    emits: ["update:open"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = lt(t, "open", a, {
                defaultValue: !1,
                passive: t.open === void 0
            }),
            r = it(),
            o = E(),
            l = E();
        return Se(s => {
            (r == null ? void 0 : r.open.value) === !1 && (n.value = !1), s(() => n.value = !1)
        }), Io({
            open: n,
            onOpenChange: s => {
                n.value = s
            },
            content: l,
            onContentChange: s => {
                l.value = s
            }
        }), Jp({
            triggerId: "",
            contentId: "",
            trigger: o,
            onTriggerChange: s => {
                o.value = s
            }
        }), (s, i) => (p(), H(u(Mo), null, {
            default: S(() => [I(s.$slots, "default")]),
            _: 3
        }))
    }
}), e8 = B({
    __name: "MenuSubContent",
    props: {
        forceMount: {
            type: Boolean
        },
        loop: {
            type: Boolean
        },
        sideOffset: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        updatePositionStrategy: {},
        prioritizePosition: {
            type: Boolean,
            default: !0
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
    setup(e, {
        emit: a
    }) {
        const t = st(e, a),
            n = it(),
            r = Vt(),
            o = Lo(),
            {
                forwardRef: l,
                currentElement: s
            } = ie();
        return o.contentId || (o.contentId = ha(void 0, "radix-vue-menu-sub-content")), (i, c) => (p(), H(u(mn), {
            present: i.forceMount || u(n).open.value
        }, {
            default: S(() => [A(yn, _(u(t), {
                id: u(o).contentId,
                ref: u(l),
                "aria-labelledby": u(o).triggerId,
                align: "start",
                side: u(r).dir.value === "rtl" ? "left" : "right",
                "disable-outside-pointer-events": !1,
                "disable-outside-scroll": !1,
                "trap-focus": !1,
                onOpenAutoFocus: c[0] || (c[0] = Ze(f => {
                    var d;
                    u(r).isUsingKeyboardRef.value && ((d = u(s)) == null || d.focus())
                }, ["prevent"])),
                onCloseAutoFocus: c[1] || (c[1] = Ze(() => {}, ["prevent"])),
                onFocusOutside: c[2] || (c[2] = f => {
                    f.defaultPrevented || f.target !== u(o).trigger.value && u(n).onOpenChange(!1)
                }),
                onEscapeKeyDown: c[3] || (c[3] = f => {
                    u(r).onClose(), f.preventDefault()
                }),
                onKeydown: c[4] || (c[4] = f => {
                    var d, v;
                    const m = (d = f.currentTarget) == null ? void 0 : d.contains(f.target),
                        g = u(sp)[u(r).dir.value].includes(f.key);
                    m && g && (u(n).onOpenChange(!1), (v = u(o).trigger.value) == null || v.focus(), f.preventDefault())
                })
            }), {
                default: S(() => [I(i.$slots, "default")]),
                _: 3
            }, 16, ["id", "aria-labelledby", "side"])]),
            _: 3
        }, 8, ["present"]))
    }
}), t8 = B({
    __name: "MenuSubTrigger",
    props: {
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e,
            t = it(),
            n = Vt(),
            r = Lo(),
            o = gn(),
            l = E(null);
        r.triggerId || (r.triggerId = ha(void 0, "radix-vue-menu-sub-trigger"));

        function s() {
            l.value && window.clearTimeout(l.value), l.value = null
        }
        Et(() => {
            s()
        });

        function i(d) {
            !Bt(d) || o.onItemEnter(d) || !a.disabled && !t.open.value && !l.value && (o.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
                t.onOpenChange(!0), s()
            }, 100))
        }
        async function c(d) {
            var v, m;
            if (!Bt(d)) return;
            s();
            const g = (v = t.content.value) == null ? void 0 : v.getBoundingClientRect();
            if (g != null && g.width) {
                const y = (m = t.content.value) == null ? void 0 : m.dataset.side,
                    h = y === "right",
                    w = h ? -5 : 5,
                    P = g[h ? "left" : "right"],
                    k = g[h ? "right" : "left"];
                o.onPointerGraceIntentChange({
                    area: [{
                        x: d.clientX + w,
                        y: d.clientY
                    }, {
                        x: P,
                        y: g.top
                    }, {
                        x: k,
                        y: g.top
                    }, {
                        x: k,
                        y: g.bottom
                    }, {
                        x: P,
                        y: g.bottom
                    }],
                    side: y
                }), window.clearTimeout(o.pointerGraceTimerRef.value), o.pointerGraceTimerRef.value = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300)
            } else {
                if (o.onTriggerLeave(d)) return;
                o.onPointerGraceIntentChange(null)
            }
        }
        async function f(d) {
            var v;
            const m = o.searchRef.value !== "";
            a.disabled || m && d.key === " " || lp[n.dir.value].includes(d.key) && (t.onOpenChange(!0), await de(), (v = t.content.value) == null || v.focus(), d.preventDefault())
        }
        return (d, v) => (p(), H(Ro, {
            "as-child": ""
        }, {
            default: S(() => [A(Oo, _(a, {
                id: u(r).triggerId,
                ref: m => {
                    var g;
                    (g = u(r)) == null || g.onTriggerChange(m == null ? void 0 : m.$el)
                },
                "aria-haspopup": "menu",
                "aria-expanded": u(t).open.value,
                "aria-controls": u(r).contentId,
                "data-state": u(Po)(u(t).open.value),
                onClick: v[0] || (v[0] = async m => {
                    a.disabled || m.defaultPrevented || (m.currentTarget.focus(), u(t).open.value || u(t).onOpenChange(!0))
                }),
                onPointermove: i,
                onPointerleave: c,
                onKeydown: f
            }), {
                default: S(() => [I(d.$slots, "default")]),
                _: 3
            }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])]),
            _: 3
        }))
    }
}), [Uo, a8] = Be("DropdownMenuRoot"), n8 = B({
    __name: "DropdownMenuRoot",
    props: {
        defaultOpen: {
            type: Boolean
        },
        open: {
            type: Boolean,
            default: void 0
        },
        dir: {},
        modal: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["update:open"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = a;
        ie();
        const r = lt(t, "open", n, {
                defaultValue: t.defaultOpen,
                passive: t.open === void 0
            }),
            o = E(),
            {
                modal: l,
                dir: s
            } = xt(t),
            i = vn(s);
        return a8({
            open: r,
            onOpenChange: c => {
                r.value = c
            },
            onOpenToggle: () => {
                r.value = !r.value
            },
            triggerId: "",
            triggerElement: o,
            contentId: "",
            modal: l,
            dir: i
        }), (c, f) => (p(), H(u(Rp), {
            open: u(r),
            "onUpdate:open": f[0] || (f[0] = d => ca(r) ? r.value = d : null),
            dir: u(i),
            modal: u(l)
        }, {
            default: S(() => [I(c.$slots, "default", {
                open: u(r)
            })]),
            _: 3
        }, 8, ["open", "dir", "modal"]))
    }
}), r8 = B({
    __name: "DropdownMenuTrigger",
    props: {
        disabled: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {
            default: "button"
        }
    },
    setup(e) {
        const a = e,
            t = Uo(),
            {
                forwardRef: n,
                currentElement: r
            } = ie();
        return Pe(() => {
            t.triggerElement = r
        }), t.triggerId || (t.triggerId = ha(void 0, "radix-vue-dropdown-menu-trigger")), (o, l) => (p(), H(u(Ro), {
            "as-child": ""
        }, {
            default: S(() => [A(u(Me), {
                id: u(t).triggerId,
                ref: u(n),
                type: o.as === "button" ? "button" : void 0,
                "as-child": a.asChild,
                as: o.as,
                "aria-haspopup": "menu",
                "aria-expanded": u(t).open.value,
                "aria-controls": u(t).open.value ? u(t).contentId : void 0,
                "data-disabled": o.disabled ? "" : void 0,
                disabled: o.disabled,
                "data-state": u(t).open.value ? "open" : "closed",
                onClick: l[0] || (l[0] = async s => {
                    var i;
                    !o.disabled && s.button === 0 && s.ctrlKey === !1 && ((i = u(t)) == null || i.onOpenToggle(), await de(), u(t).open.value && s.preventDefault())
                }),
                onKeydown: l[1] || (l[1] = Ct(s => {
                    o.disabled || (["Enter", " "].includes(s.key) && u(t).onOpenToggle(), s.key === "ArrowDown" && u(t).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault())
                }, ["enter", "space", "arrow-down"]))
            }, {
                default: S(() => [I(o.$slots, "default")]),
                _: 3
            }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])]),
            _: 3
        }))
    }
}), o8 = B({
    __name: "DropdownMenuPortal",
    props: {
        to: {},
        disabled: {
            type: Boolean
        },
        forceMount: {
            type: Boolean
        }
    },
    setup(e) {
        const a = e;
        return (t, n) => (p(), H(u(jp), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), l8 = B({
    __name: "DropdownMenuContent",
    props: {
        forceMount: {
            type: Boolean
        },
        loop: {
            type: Boolean
        },
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        updatePositionStrategy: {},
        prioritizePosition: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
    setup(e, {
        emit: a
    }) {
        const t = st(e, a);
        ie();
        const n = Uo(),
            r = E(!1);

        function o(l) {
            l.defaultPrevented || (r.value || setTimeout(() => {
                var s;
                (s = n.triggerElement.value) == null || s.focus()
            }, 0), r.value = !1, l.preventDefault())
        }
        return n.contentId || (n.contentId = ha(void 0, "radix-vue-dropdown-menu-content")), (l, s) => {
            var i;
            return p(), H(u(qp), _(u(t), {
                id: u(n).contentId,
                "aria-labelledby": (i = u(n)) == null ? void 0 : i.triggerId,
                style: {
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                },
                onCloseAutoFocus: o,
                onInteractOutside: s[0] || (s[0] = c => {
                    var f;
                    if (c.defaultPrevented) return;
                    const d = c.detail.originalEvent,
                        v = d.button === 0 && d.ctrlKey === !0,
                        m = d.button === 2 || v;
                    (!u(n).modal.value || m) && (r.value = !0), (f = u(n).triggerElement.value) != null && f.contains(c.target) && c.preventDefault()
                })
            }), {
                default: S(() => [I(l.$slots, "default")]),
                _: 3
            }, 16, ["id", "aria-labelledby"])
        }
    }
}), s8 = B({
    __name: "DropdownMenuArrow",
    props: {
        width: {
            default: 10
        },
        height: {
            default: 5
        },
        asChild: {
            type: Boolean
        },
        as: {
            default: "svg"
        }
    },
    setup(e) {
        const a = e;
        return ie(), (t, n) => (p(), H(u(Pp), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), i8 = B({
    __name: "DropdownMenuItem",
    props: {
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["select"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = pa(a);
        return ie(), (r, o) => (p(), H(u(bn), se(ue({
            ...t,
            ...u(n)
        })), {
            default: S(() => [I(r.$slots, "default")]),
            _: 3
        }, 16))
    }
}), u8 = B({
    __name: "DropdownMenuGroup",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e;
        return ie(), (t, n) => (p(), H(u($o), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), d8 = B({
    __name: "DropdownMenuSeparator",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e;
        return ie(), (t, n) => (p(), H(u(Qp), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), c8 = B({
    __name: "DropdownMenuCheckboxItem",
    props: {
        checked: {
            type: [Boolean, String]
        },
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["select", "update:checked"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = pa(a);
        return ie(), (r, o) => (p(), H(u(Zp), se(ue({
            ...t,
            ...u(n)
        })), {
            default: S(() => [I(r.$slots, "default")]),
            _: 3
        }, 16))
    }
}), v8 = B({
    __name: "DropdownMenuItemIndicator",
    props: {
        forceMount: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e;
        return ie(), (t, n) => (p(), H(u(zp), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), f8 = B({
    __name: "DropdownMenuLabel",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e;
        return ie(), (t, n) => (p(), H(u(Wp), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
}), m8 = B({
    __name: "DropdownMenuRadioGroup",
    props: {
        modelValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["update:modelValue"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = pa(a);
        return ie(), (r, o) => (p(), H(u(Yp), se(ue({
            ...t,
            ...u(n)
        })), {
            default: S(() => [I(r.$slots, "default")]),
            _: 3
        }, 16))
    }
}), p8 = B({
    __name: "DropdownMenuRadioItem",
    props: {
        value: {},
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["select"],
    setup(e, {
        emit: a
    }) {
        const t = st(e, a);
        return ie(), (n, r) => (p(), H(u(Xp), se(ue(u(t))), {
            default: S(() => [I(n.$slots, "default")]),
            _: 3
        }, 16))
    }
}), h8 = B({
    __name: "DropdownMenuSub",
    props: {
        defaultOpen: {
            type: Boolean
        },
        open: {
            type: Boolean,
            default: void 0
        }
    },
    emits: ["update:open"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = lt(t, "open", a, {
                passive: t.open === void 0,
                defaultValue: t.defaultOpen ?? !1
            });
        return ie(), (r, o) => (p(), H(u(_p), {
            open: u(n),
            "onUpdate:open": o[0] || (o[0] = l => ca(n) ? n.value = l : null)
        }, {
            default: S(() => [I(r.$slots, "default", {
                open: u(n)
            })]),
            _: 3
        }, 8, ["open"]))
    }
}), g8 = B({
    __name: "DropdownMenuSubContent",
    props: {
        forceMount: {
            type: Boolean
        },
        loop: {
            type: Boolean
        },
        sideOffset: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        updatePositionStrategy: {},
        prioritizePosition: {
            type: Boolean
        },
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
    setup(e, {
        emit: a
    }) {
        const t = st(e, a);
        return ie(), (n, r) => (p(), H(u(e8), _(u(t), {
            style: {
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }), {
            default: S(() => [I(n.$slots, "default")]),
            _: 3
        }, 16))
    }
}), y8 = B({
    __name: "DropdownMenuSubTrigger",
    props: {
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(e) {
        const a = e;
        return ie(), (t, n) => (p(), H(u(t8), se(ue(a)), {
            default: S(() => [I(t.$slots, "default")]),
            _: 3
        }, 16))
    }
});

function b8() {
    if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine"
}
b8();
const we = {
    Root: n8,
    Trigger: r8,
    Portal: o8,
    Content: l8,
    Arrow: s8,
    Item: i8,
    Group: u8,
    Separator: d8,
    CheckboxItem: c8,
    ItemIndicator: v8,
    Label: f8,
    RadioGroup: m8,
    RadioItem: p8,
    Sub: h8,
    SubContent: g8,
    SubTrigger: y8
};
var S8 = {
        key: 1,
        class: "size-3"
    },
    x8 = B({
        inheritAttrs: !1,
        __name: "ScalarMenuLink",
        props: {
            is: {
                default: "a"
            },
            icon: {
                type: [Object, Function]
            },
            strong: {
                type: Boolean
            },
            submenu: {
                type: Boolean
            }
        },
        setup(e) {
            const {
                cx: a
            } = Ne();
            return (t, n) => (p(), H(u($a), _(u(a)("flex items-center"), {
                is: e.submenu ? u(we).SubTrigger : u(we).Item,
                as: e.is
            }), {
                default: S(() => [e.icon ? (p(), H(u($s), {
                    key: 0,
                    class: re([e.strong ? "text-c-1" : "text-c-2", typeof e.icon == "string" ? "size-3" : "size-3.5 -mx-px"]),
                    icon: e.icon,
                    thickness: e.strong ? "2.5" : "2",
                    weight: e.strong ? "bold" : "regular"
                }, null, 8, ["class", "icon", "thickness", "weight"])) : (p(), x("div", S8)), b("div", {
                    class: re(["flex items-center flex-1 min-w-0 truncate", e.strong ? "font-medium" : "font-normal"])
                }, [I(t.$slots, "default")], 2)]),
                _: 3
            }, 16, ["is", "as"]))
        }
    }),
    We = x8,
    w8 = B({
        inheritAttrs: !1,
        __name: "ScalarMenuProduct",
        props: {
            is: {
                default: "a"
            },
            selected: {
                type: Boolean
            },
            icon: {
                type: [Object, Function]
            }
        },
        setup(e) {
            const {
                cx: a
            } = Ne(), t = tn({
                base: "gap-1.5",
                variants: {
                    selected: {
                        true: "pointer-events-none bg-b-2 dark:bg-b-3",
                        false: "cursor-pointer hover:bg-b-2 dark:hover:bg-b-3"
                    }
                }
            });
            return (n, r) => (p(), H(u(We), _({
                is: e.is,
                icon: e.icon,
                strong: "",
                target: "_blank"
            }, u(a)(u(t)({
                selected: e.selected
            }))), {
                default: S(() => [I(n.$slots, "default")]),
                _: 3
            }, 16, ["is", "icon"]))
        }
    }),
    qt = w8,
    A8 = B({
        inheritAttrs: !1,
        __name: "ScalarMenuProducts",
        props: {
            selected: {},
            showDocs: {
                type: Boolean
            },
            hrefs: {}
        },
        emits: ["open"],
        setup(e) {
            const {
                cx: a
            } = Ne();
            return (t, n) => {
                var r, o, l, s;
                return p(), x("div", se(ue(u(a)("flex flex-col"))), [A(qt, {
                    href: ((r = e.hrefs) == null ? void 0 : r.dashboard) ?? "https://dashboard.scalar.com",
                    icon: u(Eu),
                    selected: e.selected === "dashboard",
                    onClick: n[0] || (n[0] = i => t.$emit("open", i, "dashboard"))
                }, {
                    default: S(() => [...n[4] || (n[4] = [Y(" Dashboard ", -1)])]),
                    _: 1
                }, 8, ["href", "icon", "selected"]), e.showDocs || e.selected === "docs" ? (p(), H(qt, {
                    key: 0,
                    href: ((o = e.hrefs) == null ? void 0 : o.docs) ?? "https://docs.scalar.com",
                    icon: u(Ls),
                    selected: e.selected === "docs",
                    onClick: n[1] || (n[1] = i => t.$emit("open", i, "docs"))
                }, {
                    default: S(() => [...n[5] || (n[5] = [Y(" Docs ", -1)])]),
                    _: 1
                }, 8, ["href", "icon", "selected"])) : U("", !0), A(qt, {
                    href: ((l = e.hrefs) == null ? void 0 : l.editor) ?? "https://editor.scalar.com",
                    icon: u(Du),
                    selected: e.selected === "editor",
                    onClick: n[2] || (n[2] = i => t.$emit("open", i, "editor"))
                }, {
                    default: S(() => [...n[6] || (n[6] = [Y(" Editor ", -1)])]),
                    _: 1
                }, 8, ["href", "icon", "selected"]), A(qt, {
                    href: ((s = e.hrefs) == null ? void 0 : s.client) ?? "https://client.scalar.com",
                    icon: u(Us),
                    selected: e.selected === "client",
                    onClick: n[3] || (n[3] = i => t.$emit("open", i, "client"))
                }, {
                    default: S(() => [...n[7] || (n[7] = [Y(" Client ", -1)])]),
                    _: 1
                }, 8, ["href", "icon", "selected"])], 16)
            }
        }
    }),
    Do = A8,
    T8 = B({
        inheritAttrs: !1,
        __name: "ScalarMenuSection",
        setup(e) {
            return (a, t) => (p(), x(le, null, [A(u(Kt)), I(a.$slots, "default")], 64))
        }
    }),
    Sn = T8,
    k8 = B({
        __name: "ScalarMenuResources",
        setup(e) {
            return (a, t) => (p(), H(Sn, null, {
                title: S(() => [...t[0] || (t[0] = [Y("Resources", -1)])]),
                default: S(() => [A(We, {
                    href: "mailto:support@scalar.com",
                    icon: u(Ds),
                    target: "_blank"
                }, {
                    default: S(() => [...t[1] || (t[1] = [Y(" Sales & Support ", -1)])]),
                    _: 1
                }, 8, ["icon"]), A(We, {
                    href: "https://scalar.com/terms-and-conditions",
                    icon: u(Wi),
                    target: "_blank"
                }, {
                    default: S(() => [...t[2] || (t[2] = [Y(" Terms & Conditions ", -1)])]),
                    _: 1
                }, 8, ["icon"]), A(We, {
                    href: "https://scalar.com/privacy-policy",
                    icon: u(xi),
                    target: "_blank"
                }, {
                    default: S(() => [...t[3] || (t[3] = [Y(" Privacy Policy ", -1)])]),
                    _: 1
                }, 8, ["icon"])]),
                _: 1
            }))
        }
    }),
    zo = k8,
    C8 = B({
        inheritAttrs: !1,
        __name: "ScalarMenu",
        setup(e) {
            const a = E(!1);

            function t() {
                a.value = !1
            }
            return (n, r) => (p(), H(u(we).Root, {
                open: a.value,
                "onUpdate:open": r[0] || (r[0] = o => a.value = o)
            }, {
                default: S(() => [A(u(we).Trigger, {
                    asChild: ""
                }, {
                    default: S(() => [I(n.$slots, "button", {
                        open: a.value
                    }, () => [A(am, {
                        class: "min-w-0",
                        open: a.value
                    }, bt({
                        _: 2
                    }, [n.$slots.logo ? {
                        name: "logo",
                        fn: S(() => [I(n.$slots, "logo")]),
                        key: "0"
                    } : void 0, n.$slots.title ? {
                        name: "title",
                        fn: S(() => [I(n.$slots, "title")]),
                        key: "1"
                    } : void 0, n.$slots.label ? {
                        name: "label",
                        fn: S(() => [I(n.$slots, "label")]),
                        key: "2"
                    } : void 0]), 1032, ["open"])])]),
                    _: 3
                }), A(u(we).Content, _({
                    align: "start",
                    as: u(Lr),
                    class: "max-h-radix-popper z-context",
                    sideOffset: 5
                }, n.$attrs), {
                    default: S(() => [I(n.$slots, "products", {
                        close: t
                    }, () => [A(Do)]), I(n.$slots, "profile", {
                        close: t
                    }), I(n.$slots, "sections", {
                        close: t
                    }, () => [A(zo)])]),
                    _: 3
                }, 16, ["as"])]),
                _: 3
            }, 8, ["open"]))
        }
    }),
    H8 = C8,
    P8 = B({
        __name: "ScalarMenuSupport",
        setup(e) {
            return (a, t) => (p(), H(Sn, null, {
                title: S(() => [...t[0] || (t[0] = [Y("Resources", -1)])]),
                default: S(() => [A(We, {
                    href: "https://discord.gg/scalar",
                    icon: u(Bi),
                    target: "_blank"
                }, {
                    default: S(() => [...t[1] || (t[1] = [Y(" Discord ", -1)])]),
                    _: 1
                }, 8, ["icon"]), A(We, {
                    href: "https://github.com/scalar/scalar",
                    icon: u(pu),
                    target: "_blank"
                }, {
                    default: S(() => [...t[2] || (t[2] = [Y(" GitHub ", -1)])]),
                    _: 1
                }, 8, ["icon"])]),
                _: 1
            }))
        }
    }),
    B8 = P8,
    M8 = {
        class: "flex h-full items-center gap-1 flex-1 truncate"
    },
    E8 = B({
        inheritAttrs: !1,
        __name: "ScalarMenuWorkspacePicker",
        props: gt({
            workspaceOptions: {}
        }, {
            modelValue: {},
            modelModifiers: {}
        }),
        emits: gt(["createWorkspace"], ["update:modelValue"]),
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = Mt(e, "modelValue");
            return (r, o) => (p(), H(u(we).Sub, null, {
                default: S(() => [A(We, _({
                    icon: u(Ku),
                    submenu: ""
                }, r.$attrs), {
                    default: S(() => [o[2] || (o[2] = b("div", null, "Change workspace", -1)), A(u(zs), {
                        class: "ml-auto text-c-2 -mr-px size-3",
                        weight: "bold"
                    })]),
                    _: 1
                }, 16, ["icon"]), A(u(we).Portal, null, {
                    default: S(() => [A(u(we).SubContent, {
                        as: u(Lr),
                        class: "max-h-radix-popper z-context-plus",
                        sideOffset: 3
                    }, {
                        default: S(() => [A(u(we).RadioGroup, {
                            modelValue: n.value,
                            "onUpdate:modelValue": o[0] || (o[0] = l => n.value = l),
                            class: "contents"
                        }, {
                            default: S(() => [(p(!0), x(le, null, Ae(e.workspaceOptions, (l, s) => (p(), x(le, {
                                key: s
                            }, [l.label ? (p(), H(u(we).Label, {
                                key: 0,
                                class: "px-3 py-1.5 text-xs font-medium text-c-3 select-none"
                            }, {
                                default: S(() => [Y(K(l.label), 1)]),
                                _: 2
                            }, 1024)) : U("", !0), (p(!0), x(le, null, Ae(l.options, i => (p(), H(u(we).RadioItem, {
                                key: i.id,
                                as: u($a),
                                class: "group/item flex items-center",
                                value: i.id
                            }, {
                                default: S(() => [b("div", M8, K(i.label), 1), A(u(Hr), {
                                    class: "ml-auto",
                                    selected: i.id === n.value
                                }, null, 8, ["selected"])]),
                                _: 2
                            }, 1032, ["as", "value"]))), 128)), s < e.workspaceOptions.length - 1 ? (p(), H(u(we).Separator, {
                                key: 1,
                                class: "h-px bg-b-3 my-1.5"
                            })) : U("", !0)], 64))), 128))]),
                            _: 1
                        }, 8, ["modelValue"]), A(u(we).Item, {
                            as: u($a),
                            class: "flex items-center",
                            onClick: o[1] || (o[1] = l => t("createWorkspace"))
                        }, {
                            default: S(() => [A(u(Pr), {
                                class: "bg-b-3 -ml-0.75 rounded p-1 size-5 text-c-3",
                                weight: "bold"
                            }), o[3] || (o[3] = Y(" Create workspace ", -1))]),
                            _: 1
                        }, 8, ["as"])]),
                        _: 1
                    }, 8, ["as"])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    R8 = E8,
    I8 = B({
        __name: "SidebarMenu",
        props: {
            activeWorkspace: {},
            workspaces: {}
        },
        emits: ["create:workspace", "select:workspace", "navigate:to:settings"],
        setup(e, {
            emit: a
        }) {
            const t = a;
            return (n, r) => (p(), H(u(H8), null, {
                products: S(() => [A(u(Do), {
                    selected: "client"
                })]),
                sections: S(({
                    close: o
                }) => [A(u(Sn), null, {
                    default: S(() => [I(n.$slots, "sidebarMenuActions", {}, () => [A(u(R8), {
                        modelValue: e.activeWorkspace.id,
                        workspaceOptions: e.workspaces,
                        onCreateWorkspace: r[0] || (r[0] = l => t("create:workspace")),
                        "onUpdate:modelValue": r[1] || (r[1] = l => t("select:workspace", l))
                    }, null, 8, ["modelValue", "workspaceOptions"]), A(u(We), {
                        is: "button",
                        icon: u(_i),
                        onClick: () => {
                            o(), t("navigate:to:settings")
                        }
                    }, {
                        default: S(() => [...r[2] || (r[2] = [Y(" Settings ", -1)])]),
                        _: 1
                    }, 8, ["icon", "onClick"])])]),
                    _: 2
                }, 1024), A(u(zo)), A(u(B8))]),
                _: 3
            }))
        }
    }),
    O8 = I8,
    V8 = {
        key: 1
    },
    $8 = B({
        __name: "Sidebar",
        props: gt({
            sidebarState: {},
            layout: {},
            activeWorkspace: {},
            workspaces: {},
            documents: {},
            isDroppable: {
                type: [Boolean, Function]
            }
        }, {
            sidebarWidth: {
                required: !0,
                default: 288
            },
            sidebarWidthModifiers: {}
        }),
        emits: gt(["selectItem", "select:workspace", "create:workspace", "reorder", "navigate:to:settings"], ["update:sidebarWidth"]),
        setup(e, {
            emit: a
        }) {
            const t = a,
                n = Zs(),
                r = E(!1),
                o = Mt(e, "sidebarWidth"),
                l = d => d.type === "example" && d.title === "draft",
                {
                    query: s,
                    results: i
                } = Yf(() => e.documents.filter(ee)),
                c = T(() => i.value ?? e.sidebarState.items.value),
                f = d => {
                    t("selectItem", d), s.value = "", r.value = !1
                };
            return (d, v) => (p(), H(u(qf), {
                width: o.value,
                "onUpdate:width": v[6] || (v[6] = m => o.value = m),
                class: "flex flex-col"
            }, {
                default: S(() => [A(u(Ns), {
                    class: "flex w-auto flex-1",
                    indent: 20,
                    isDraggable: e.layout !== "modal",
                    isDroppable: e.isDroppable,
                    isExpanded: e.sidebarState.isExpanded,
                    isSelected: e.sidebarState.isSelected,
                    items: c.value,
                    layout: "client",
                    options: {
                        hideOperationDefaultExamples: e.layout === "modal"
                    },
                    onReorder: v[5] || (v[5] = (m, g) => t("reorder", m, g)),
                    onSelectItem: f
                }, bt({
                    header: S(() => [v[7] || (v[7] = b("div", {
                        class: "mac:h-12 mac:app-drag-region h-2"
                    }, null, -1)), b("div", {
                        class: re(["bg-sidebar-b-1 z-1 flex flex-col gap-1.5 px-3 pb-1.5", {
                            "max-md:pt-12": e.layout === "desktop",
                            "max-md:pt-2 max-md:pl-4!": e.layout === "modal",
                            "pt-1 max-md:pt-2 max-md:pl-14": e.layout === "web"
                        }])
                    }, [e.layout !== "web" ? (p(), x("div", {
                        key: 0,
                        class: re(["flex items-center justify-between", {
                            "max-md:pl-10": e.layout === "desktop"
                        }])
                    }, [e.layout !== "modal" ? (p(), H(O8, {
                        key: 0,
                        activeWorkspace: e.activeWorkspace,
                        workspaces: e.workspaces,
                        "onCreate:workspace": v[0] || (v[0] = m => t("create:workspace")),
                        "onNavigate:to:settings": v[1] || (v[1] = m => t("navigate:to:settings")),
                        "onSelect:workspace": v[2] || (v[2] = m => t("select:workspace", m))
                    }, {
                        sidebarMenuActions: S(() => [I(d.$slots, "sidebarMenuActions")]),
                        _: 3
                    }, 8, ["activeWorkspace", "workspaces"])) : e.layout === "modal" ? (p(), x("div", V8)) : U("", !0), A(u(ua), {
                        class: "hover:bg-b-2 active:text-c-1 size-8 rounded p-2",
                        icon: u(fr),
                        label: "Search",
                        size: "sm",
                        onClick: v[3] || (v[3] = m => r.value = !r.value)
                    }, null, 8, ["icon"])], 2)) : U("", !0), r.value || e.layout === "web" ? (p(), H(u(v0), {
                        key: 1,
                        modelValue: u(s),
                        "onUpdate:modelValue": v[4] || (v[4] = m => ca(s) ? s.value = m : null),
                        autofocus: e.layout !== "web"
                    }, null, 8, ["modelValue", "autofocus"])) : U("", !0)], 2)]),
                    spacer: S(() => [v[8] || (v[8] = b("div", {
                        class: "flex-1"
                    }, null, -1))]),
                    icon: S(m => [n.icon || l(m.item) ? (p(), x(le, {
                        key: 0
                    }, [l(m.item) ? (p(), H(u(Li), {
                        key: 0
                    })) : U("", !0), I(d.$slots, "icon", se(ue(m)))], 64)) : U("", !0)]),
                    before: S(() => [I(d.$slots, "workspaceButton")]),
                    footer: S(() => [I(d.$slots, "footer")]),
                    _: 2
                }, [n.decorator ? {
                    name: "decorator",
                    fn: S(m => [I(d.$slots, "decorator", se(ue(m)))]),
                    key: "0"
                } : void 0, n.empty ? {
                    name: "empty",
                    fn: S(m => [I(d.$slots, "empty", se(ue(m)))]),
                    key: "1"
                } : void 0]), 1032, ["isDraggable", "isDroppable", "isExpanded", "isSelected", "items", "options"])]),
                _: 3
            }, 8, ["width"]))
        }
    }),
    L8 = $8,
    U8 = ["aria-pressed"],
    D8 = {
        class: "sr-only"
    },
    z8 = {
        class: "size-4",
        fill: "none",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Z8 = {
        "clip-path": "url(#mask)"
    },
    N8 = B({
        __name: "SidebarToggle",
        props: {
            modelValue: {
                type: Boolean,
                required: !0
            },
            modelModifiers: {}
        },
        emits: ["update:modelValue"],
        setup(e) {
            const a = Mt(e, "modelValue");
            return (t, n) => (p(), x("button", {
                "aria-pressed": a.value,
                class: "scalar-sidebar-toggle text-c-3 hover:bg-b-2 active:text-c-1 rounded p-2",
                type: "button",
                onClick: n[0] || (n[0] = r => a.value = !a.value)
            }, [b("span", D8, K(a.value ? "Hide" : "Show") + " sidebar", 1), (p(), x("svg", z8, [n[1] || (n[1] = b("defs", null, [b("clipPath", {
                id: "mask"
            }, [b("path", {
                "clip-rule": "evenodd",
                d: "M9 3.2H4c-1.7 0-3 1.3-3 3v11.5c0 1.7 1.3 3 3 3h5V3.2z"
            })])], -1)), b("g", Z8, [b("path", {
                class: re(["transition-transform duration-300", a.value ? "translate-x-0" : "-translate-x-1/2"]),
                d: "M1 3.2h8v17.5H1z",
                fill: "currentColor"
            }, null, 2)]), n[2] || (n[2] = b("path", {
                d: "M20 20.8H4c-1.7 0-3-1.3-3-3V6.2c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v11.5c0 1.7-1.3 3-3 3zM9 3.2v17.5",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2"
            }, null, -1))]))], 8, U8))
        }
    }),
    F8 = N8;
/*!
 * tabbable 6.5.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var Zo = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"],
    na = Zo.join(","),
    No = typeof Element > "u",
    tt = No ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    ra = !No && Element.prototype.getRootNode ? function(e) {
        var a;
        return e == null || (a = e.getRootNode) === null || a === void 0 ? void 0 : a.call(e)
    } : function(e) {
        return e == null ? void 0 : e.ownerDocument
    },
    oa = function(a, t) {
        var n;
        t === void 0 && (t = !0);
        var r = a == null || (n = a.getAttribute) === null || n === void 0 ? void 0 : n.call(a, "inert"),
            o = r === "" || r === "true",
            l = o || t && a && (typeof a.closest == "function" ? a.closest("[inert]") : oa(a.parentNode));
        return l
    },
    q8 = function(a) {
        var t, n = a == null || (t = a.getAttribute) === null || t === void 0 ? void 0 : t.call(a, "contenteditable");
        return n === "" || n === "true"
    },
    Fo = function(a, t, n) {
        if (oa(a)) return [];
        var r = Array.prototype.slice.apply(a.querySelectorAll(na));
        return t && tt.call(a, na) && r.unshift(a), r = r.filter(n), r
    },
    la = function(a, t, n) {
        for (var r = [], o = Array.from(a); o.length;) {
            var l = o.shift();
            if (!oa(l, !1))
                if (l.tagName === "SLOT") {
                    var s = l.assignedElements(),
                        i = s.length ? s : l.children,
                        c = la(i, !0, n);
                    n.flatten ? r.push.apply(r, c) : r.push({
                        scopeParent: l,
                        candidates: c
                    })
                } else {
                    var f = tt.call(l, na);
                    f && n.filter(l) && (t || !a.includes(l)) && r.push(l);
                    var d = l.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(l),
                        v = !oa(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(l));
                    if (d && v) {
                        var m = la(d === !0 ? l.children : d.children, !0, n);
                        n.flatten ? r.push.apply(r, m) : r.push({
                            scopeParent: l,
                            candidates: m
                        })
                    } else o.unshift.apply(o, l.children)
                }
        }
        return r
    },
    qo = function(a) {
        return !isNaN(parseInt(a.getAttribute("tabindex"), 10))
    },
    Xe = function(a) {
        if (!a) throw new Error("No node provided");
        return a.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(a.tagName) || q8(a)) && !qo(a) ? 0 : a.tabIndex
    },
    W8 = function(a, t) {
        var n = Xe(a);
        return n < 0 && t && !qo(a) ? 0 : n
    },
    j8 = function(a, t) {
        return a.tabIndex === t.tabIndex ? a.documentOrder - t.documentOrder : a.tabIndex - t.tabIndex
    },
    Wo = function(a) {
        return a.tagName === "INPUT"
    },
    K8 = function(a) {
        return Wo(a) && a.type === "hidden"
    },
    G8 = function(a) {
        var t = a.tagName === "DETAILS" && Array.prototype.slice.apply(a.children).some(function(n) {
            return n.tagName === "SUMMARY"
        });
        return t
    },
    Y8 = function(a, t) {
        for (var n = 0; n < a.length; n++)
            if (a[n].checked && a[n].form === t) return a[n]
    },
    X8 = function(a) {
        if (!a.name) return !0;
        var t = a.form || ra(a),
            n = function(s) {
                return t.querySelectorAll('input[type="radio"][name="' + s + '"]')
            },
            r;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") r = n(window.CSS.escape(a.name));
        else try {
            r = n(a.name)
        } catch (l) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", l.message), !1
        }
        var o = Y8(r, a.form);
        return !o || o === a
    },
    Q8 = function(a) {
        return Wo(a) && a.type === "radio"
    },
    J8 = function(a) {
        return Q8(a) && !X8(a)
    },
    _8 = function(a) {
        var t, n = a && ra(a),
            r = (t = n) === null || t === void 0 ? void 0 : t.host,
            o = !1;
        if (n && n !== a) {
            var l, s, i;
            for (o = !!((l = r) !== null && l !== void 0 && (s = l.ownerDocument) !== null && s !== void 0 && s.contains(r) || a != null && (i = a.ownerDocument) !== null && i !== void 0 && i.contains(a)); !o && r;) {
                var c, f, d;
                n = ra(r), r = (c = n) === null || c === void 0 ? void 0 : c.host, o = !!((f = r) !== null && f !== void 0 && (d = f.ownerDocument) !== null && d !== void 0 && d.contains(r))
            }
        }
        return o
    },
    rr = function(a) {
        var t = a.getBoundingClientRect(),
            n = t.width,
            r = t.height;
        return n === 0 && r === 0
    },
    e4 = function(a, t) {
        var n = t.displayCheck,
            r = t.getShadowRoot;
        if (n === "full-native" && "checkVisibility" in a) {
            var o = a.checkVisibility({
                checkOpacity: !1,
                opacityProperty: !1,
                contentVisibilityAuto: !0,
                visibilityProperty: !0,
                checkVisibilityCSS: !0
            });
            return !o
        }
        var l = getComputedStyle(a),
            s = l.visibility;
        if (s === "hidden" || s === "collapse") return !0;
        var i = tt.call(a, "details>summary:first-of-type"),
            c = i ? a.parentElement : a;
        if (tt.call(c, "details:not([open]) *")) return !0;
        if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
            if (typeof r == "function") {
                for (var f = a; a;) {
                    var d = a.parentElement,
                        v = ra(a);
                    if (d && !d.shadowRoot && r(d) === !0) return rr(a);
                    a.assignedSlot ? a = a.assignedSlot : !d && v !== a.ownerDocument ? a = v.host : a = d
                }
                a = f
            }
            if (_8(a)) return !a.getClientRects().length;
            if (n !== "legacy-full") return !0
        } else if (n === "non-zero-area") return rr(a);
        return !1
    },
    t4 = function(a) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(a.tagName))
            for (var t = a.parentElement; t;) {
                if (t.tagName === "FIELDSET" && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                        var r = t.children.item(n);
                        if (r.tagName === "LEGEND") return tt.call(t, "fieldset[disabled] *") ? !0 : !r.contains(a)
                    }
                    return !0
                }
                t = t.parentElement
            }
        return !1
    },
    sa = function(a, t) {
        return !(t.disabled || K8(t) || e4(t, a) || G8(t) || t4(t))
    },
    Ka = function(a, t) {
        return !(J8(t) || Xe(t) < 0 || !sa(a, t))
    },
    a4 = function(a) {
        var t = parseInt(a.getAttribute("tabindex"), 10);
        return !!(isNaN(t) || t >= 0)
    },
    jo = function(a) {
        var t = [],
            n = [];
        return a.forEach(function(r, o) {
            var l = !!r.scopeParent,
                s = l ? r.scopeParent : r,
                i = W8(s, l),
                c = l ? jo(r.candidates) : s;
            i === 0 ? l ? t.push.apply(t, c) : t.push(s) : n.push({
                documentOrder: o,
                tabIndex: i,
                item: r,
                isScope: l,
                content: c
            })
        }), n.sort(j8).reduce(function(r, o) {
            return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r
        }, []).concat(t)
    },
    n4 = function(a, t) {
        t = t || {};
        var n;
        return t.getShadowRoot ? n = la([a], t.includeContainer, {
            filter: Ka.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: a4
        }) : n = Fo(a, t.includeContainer, Ka.bind(null, t)), jo(n)
    },
    r4 = function(a, t) {
        t = t || {};
        var n;
        return t.getShadowRoot ? n = la([a], t.includeContainer, {
            filter: sa.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
        }) : n = Fo(a, t.includeContainer, sa.bind(null, t)), n
    },
    ft = function(a, t) {
        if (t = t || {}, !a) throw new Error("No node provided");
        return tt.call(a, na) === !1 ? !1 : Ka(t, a)
    },
    o4 = Zo.concat("iframe:not([inert]):not([inert] *)").join(","),
    Ea = function(a, t) {
        if (t = t || {}, !a) throw new Error("No node provided");
        return tt.call(a, o4) === !1 ? !1 : sa(t, a)
    };
/*!
 * focus-trap 7.8.0
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */
function Ga(e, a) {
    (a == null || a > e.length) && (a = e.length);
    for (var t = 0, n = Array(a); t < a; t++) n[t] = e[t];
    return n
}

function l4(e) {
    if (Array.isArray(e)) return Ga(e)
}

function or(e, a) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (!t) {
        if (Array.isArray(e) || (t = Ko(e)) || a) {
            t && (e = t);
            var n = 0,
                r = function() {};
            return {
                s: r,
                n: function() {
                    return n >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[n++]
                    }
                },
                e: function(i) {
                    throw i
                },
                f: r
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var o, l = !0,
        s = !1;
    return {
        s: function() {
            t = t.call(e)
        },
        n: function() {
            var i = t.next();
            return l = i.done, i
        },
        e: function(i) {
            s = !0, o = i
        },
        f: function() {
            try {
                l || t.return == null || t.return()
            } finally {
                if (s) throw o
            }
        }
    }
}

function s4(e, a, t) {
    return (a = v4(a)) in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e
}

function i4(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function u4() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function lr(e, a) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        a && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), t.push.apply(t, n)
    }
    return t
}

function sr(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a] != null ? arguments[a] : {};
        a % 2 ? lr(Object(t), !0).forEach(function(n) {
            s4(e, n, t[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : lr(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        })
    }
    return e
}

function d4(e) {
    return l4(e) || i4(e) || Ko(e) || u4()
}

function c4(e, a) {
    if (typeof e != "object" || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var n = t.call(e, a);
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (a === "string" ? String : Number)(e)
}

function v4(e) {
    var a = c4(e, "string");
    return typeof a == "symbol" ? a : a + ""
}

function Ko(e, a) {
    if (e) {
        if (typeof e == "string") return Ga(e, a);
        var t = {}.toString.call(e).slice(8, -1);
        return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ga(e, a) : void 0
    }
}
var De = {
        getActiveTrap: function(a) {
            return (a == null ? void 0 : a.length) > 0 ? a[a.length - 1] : null
        },
        activateTrap: function(a, t) {
            var n = De.getActiveTrap(a);
            t !== n && De.pauseTrap(a);
            var r = a.indexOf(t);
            r === -1 || a.splice(r, 1), a.push(t)
        },
        deactivateTrap: function(a, t) {
            var n = a.indexOf(t);
            n !== -1 && a.splice(n, 1), De.unpauseTrap(a)
        },
        pauseTrap: function(a) {
            var t = De.getActiveTrap(a);
            t == null || t._setPausedState(!0)
        },
        unpauseTrap: function(a) {
            var t = De.getActiveTrap(a);
            t && !t._isManuallyPaused() && t._setPausedState(!1)
        }
    },
    f4 = function(a) {
        return a.tagName && a.tagName.toLowerCase() === "input" && typeof a.select == "function"
    },
    m4 = function(a) {
        return (a == null ? void 0 : a.key) === "Escape" || (a == null ? void 0 : a.key) === "Esc" || (a == null ? void 0 : a.keyCode) === 27
    },
    kt = function(a) {
        return (a == null ? void 0 : a.key) === "Tab" || (a == null ? void 0 : a.keyCode) === 9
    },
    p4 = function(a) {
        return kt(a) && !a.shiftKey
    },
    h4 = function(a) {
        return kt(a) && a.shiftKey
    },
    ir = function(a) {
        return setTimeout(a, 0)
    },
    At = function(a) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return typeof a == "function" ? a.apply(void 0, n) : a
    },
    Wt = function(a) {
        return a.target.shadowRoot && typeof a.composedPath == "function" ? a.composedPath()[0] : a.target
    },
    g4 = [],
    y4 = function(a, t) {
        var n = (t == null ? void 0 : t.document) || document,
            r = (t == null ? void 0 : t.trapStack) || g4,
            o = sr({
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                delayInitialFocus: !0,
                isolateSubtrees: !1,
                isKeyForward: p4,
                isKeyBackward: h4
            }, t),
            l = {
                containers: [],
                containerGroups: [],
                tabbableGroups: [],
                adjacentElements: new Set,
                alreadySilent: new Set,
                nodeFocusedBeforeActivation: null,
                mostRecentlyFocusedNode: null,
                active: !1,
                paused: !1,
                manuallyPaused: !1,
                delayInitialFocusTimer: void 0,
                recentNavEvent: void 0
            },
            s, i = function(C, M, z) {
                return C && C[M] !== void 0 ? C[M] : o[z || M]
            },
            c = function(C, M) {
                var z = typeof(M == null ? void 0 : M.composedPath) == "function" ? M.composedPath() : void 0;
                return l.containerGroups.findIndex(function(X) {
                    var $ = X.container,
                        O = X.tabbableNodes;
                    return $.contains(C) || (z == null ? void 0 : z.includes($)) || O.find(function(F) {
                        return F === C
                    })
                })
            },
            f = function(C) {
                var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    z = M.hasFallback,
                    X = z === void 0 ? !1 : z,
                    $ = M.params,
                    O = $ === void 0 ? [] : $,
                    F = o[C];
                if (typeof F == "function" && (F = F.apply(void 0, d4(O))), F === !0 && (F = void 0), !F) {
                    if (F === void 0 || F === !1) return F;
                    throw new Error("`".concat(C, "` was specified but was not a node, or did not return a node"))
                }
                var q = F;
                if (typeof F == "string") {
                    try {
                        q = n.querySelector(F)
                    } catch (te) {
                        throw new Error("`".concat(C, '` appears to be an invalid selector; error="').concat(te.message, '"'))
                    }
                    if (!q && !X) throw new Error("`".concat(C, "` as selector refers to no known node"))
                }
                return q
            },
            d = function() {
                var C = f("initialFocus", {
                    hasFallback: !0
                });
                if (C === !1) return !1;
                if (C === void 0 || C && !Ea(C, o.tabbableOptions))
                    if (c(n.activeElement) >= 0) C = n.activeElement;
                    else {
                        var M = l.tabbableGroups[0],
                            z = M && M.firstTabbableNode;
                        C = z || f("fallbackFocus")
                    }
                else C === null && (C = f("fallbackFocus"));
                if (!C) throw new Error("Your focus-trap needs to have at least one focusable element");
                return C
            },
            v = function() {
                if (l.containerGroups = l.containers.map(function(C) {
                        var M = n4(C, o.tabbableOptions),
                            z = r4(C, o.tabbableOptions),
                            X = M.length > 0 ? M[0] : void 0,
                            $ = M.length > 0 ? M[M.length - 1] : void 0,
                            O = z.find(function(te) {
                                return ft(te)
                            }),
                            F = z.slice().reverse().find(function(te) {
                                return ft(te)
                            }),
                            q = !!M.find(function(te) {
                                return Xe(te) > 0
                            });
                        return {
                            container: C,
                            tabbableNodes: M,
                            focusableNodes: z,
                            posTabIndexesFound: q,
                            firstTabbableNode: X,
                            lastTabbableNode: $,
                            firstDomTabbableNode: O,
                            lastDomTabbableNode: F,
                            nextTabbableNode: function(ve) {
                                var he = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                                    xe = M.indexOf(ve);
                                return xe < 0 ? he ? z.slice(z.indexOf(ve) + 1).find(function(Ve) {
                                    return ft(Ve)
                                }) : z.slice(0, z.indexOf(ve)).reverse().find(function(Ve) {
                                    return ft(Ve)
                                }) : M[xe + (he ? 1 : -1)]
                            }
                        }
                    }), l.tabbableGroups = l.containerGroups.filter(function(C) {
                        return C.tabbableNodes.length > 0
                    }), l.tabbableGroups.length <= 0 && !f("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                if (l.containerGroups.find(function(C) {
                        return C.posTabIndexesFound
                    }) && l.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            m = function(C) {
                var M = C.activeElement;
                if (M) return M.shadowRoot && M.shadowRoot.activeElement !== null ? m(M.shadowRoot) : M
            },
            g = function(C) {
                if (C !== !1 && C !== m(document)) {
                    if (!C || !C.focus) {
                        g(d());
                        return
                    }
                    C.focus({
                        preventScroll: !!o.preventScroll
                    }), l.mostRecentlyFocusedNode = C, f4(C) && C.select()
                }
            },
            y = function(C) {
                var M = f("setReturnFocus", {
                    params: [C]
                });
                return M || (M === !1 ? !1 : C)
            },
            h = function(C) {
                var M = C.target,
                    z = C.event,
                    X = C.isBackward,
                    $ = X === void 0 ? !1 : X;
                M = M || Wt(z), v();
                var O = null;
                if (l.tabbableGroups.length > 0) {
                    var F = c(M, z),
                        q = F >= 0 ? l.containerGroups[F] : void 0;
                    if (F < 0) $ ? O = l.tabbableGroups[l.tabbableGroups.length - 1].lastTabbableNode : O = l.tabbableGroups[0].firstTabbableNode;
                    else if ($) {
                        var te = l.tabbableGroups.findIndex(function(ut) {
                            var dt = ut.firstTabbableNode;
                            return M === dt
                        });
                        if (te < 0 && (q.container === M || Ea(M, o.tabbableOptions) && !ft(M, o.tabbableOptions) && !q.nextTabbableNode(M, !1)) && (te = F), te >= 0) {
                            var ve = te === 0 ? l.tabbableGroups.length - 1 : te - 1,
                                he = l.tabbableGroups[ve];
                            O = Xe(M) >= 0 ? he.lastTabbableNode : he.lastDomTabbableNode
                        } else kt(z) || (O = q.nextTabbableNode(M, !1))
                    } else {
                        var xe = l.tabbableGroups.findIndex(function(ut) {
                            var dt = ut.lastTabbableNode;
                            return M === dt
                        });
                        if (xe < 0 && (q.container === M || Ea(M, o.tabbableOptions) && !ft(M, o.tabbableOptions) && !q.nextTabbableNode(M)) && (xe = F), xe >= 0) {
                            var Ve = xe === l.tabbableGroups.length - 1 ? 0 : xe + 1,
                                Ee = l.tabbableGroups[Ve];
                            O = Xe(M) >= 0 ? Ee.firstTabbableNode : Ee.firstDomTabbableNode
                        } else kt(z) || (O = q.nextTabbableNode(M))
                    }
                } else O = f("fallbackFocus");
                return O
            },
            w = function(C) {
                var M = Wt(C);
                if (!(c(M, C) >= 0)) {
                    if (At(o.clickOutsideDeactivates, C)) {
                        s.deactivate({
                            returnFocus: o.returnFocusOnDeactivate
                        });
                        return
                    }
                    At(o.allowOutsideClick, C) || C.preventDefault()
                }
            },
            P = function(C) {
                var M = Wt(C),
                    z = c(M, C) >= 0;
                if (z || M instanceof Document) z && (l.mostRecentlyFocusedNode = M);
                else {
                    C.stopImmediatePropagation();
                    var X, $ = !0;
                    if (l.mostRecentlyFocusedNode)
                        if (Xe(l.mostRecentlyFocusedNode) > 0) {
                            var O = c(l.mostRecentlyFocusedNode),
                                F = l.containerGroups[O].tabbableNodes;
                            if (F.length > 0) {
                                var q = F.findIndex(function(te) {
                                    return te === l.mostRecentlyFocusedNode
                                });
                                q >= 0 && (o.isKeyForward(l.recentNavEvent) ? q + 1 < F.length && (X = F[q + 1], $ = !1) : q - 1 >= 0 && (X = F[q - 1], $ = !1))
                            }
                        } else l.containerGroups.some(function(te) {
                            return te.tabbableNodes.some(function(ve) {
                                return Xe(ve) > 0
                            })
                        }) || ($ = !1);
                    else $ = !1;
                    $ && (X = h({
                        target: l.mostRecentlyFocusedNode,
                        isBackward: o.isKeyBackward(l.recentNavEvent)
                    })), g(X || l.mostRecentlyFocusedNode || d())
                }
                l.recentNavEvent = void 0
            },
            k = function(C) {
                var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                l.recentNavEvent = C;
                var z = h({
                    event: C,
                    isBackward: M
                });
                z && (kt(C) && C.preventDefault(), g(z))
            },
            D = function(C) {
                (o.isKeyForward(C) || o.isKeyBackward(C)) && k(C, o.isKeyBackward(C))
            },
            Z = function(C) {
                m4(C) && At(o.escapeDeactivates, C) !== !1 && (C.preventDefault(), s.deactivate())
            },
            J = function(C) {
                var M = Wt(C);
                c(M, C) >= 0 || At(o.clickOutsideDeactivates, C) || At(o.allowOutsideClick, C) || (C.preventDefault(), C.stopImmediatePropagation())
            },
            G = function() {
                if (l.active) return De.activateTrap(r, s), l.delayInitialFocusTimer = o.delayInitialFocus ? ir(function() {
                    g(d())
                }) : g(d()), n.addEventListener("focusin", P, !0), n.addEventListener("mousedown", w, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("touchstart", w, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("click", J, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("keydown", D, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("keydown", Z), s
            },
            ae = function(C) {
                l.active && !l.paused && s._setSubtreeIsolation(!1), l.adjacentElements.clear(), l.alreadySilent.clear();
                var M = new Set,
                    z = new Set,
                    X = or(C),
                    $;
                try {
                    for (X.s(); !($ = X.n()).done;) {
                        var O = $.value;
                        M.add(O);
                        for (var F = typeof ShadowRoot < "u" && O.getRootNode() instanceof ShadowRoot, q = O; q;) {
                            M.add(q);
                            var te = q.parentElement,
                                ve = [];
                            te ? ve = te.children : !te && F && (ve = q.getRootNode().children, te = q.getRootNode().host, F = typeof ShadowRoot < "u" && te.getRootNode() instanceof ShadowRoot);
                            var he = or(ve),
                                xe;
                            try {
                                for (he.s(); !(xe = he.n()).done;) {
                                    var Ve = xe.value;
                                    z.add(Ve)
                                }
                            } catch (Ee) {
                                he.e(Ee)
                            } finally {
                                he.f()
                            }
                            q = te
                        }
                    }
                } catch (Ee) {
                    X.e(Ee)
                } finally {
                    X.f()
                }
                M.forEach(function(Ee) {
                    z.delete(Ee)
                }), l.adjacentElements = z
            },
            Q = function() {
                if (l.active) return n.removeEventListener("focusin", P, !0), n.removeEventListener("mousedown", w, !0), n.removeEventListener("touchstart", w, !0), n.removeEventListener("click", J, !0), n.removeEventListener("keydown", D, !0), n.removeEventListener("keydown", Z), s
            },
            R = function(C) {
                var M = C.some(function(z) {
                    var X = Array.from(z.removedNodes);
                    return X.some(function($) {
                        return $ === l.mostRecentlyFocusedNode
                    })
                });
                M && g(d())
            },
            N = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(R) : void 0,
            V = function() {
                N && (N.disconnect(), l.active && !l.paused && l.containers.map(function(C) {
                    N.observe(C, {
                        subtree: !0,
                        childList: !0
                    })
                }))
            };
        return s = {
            get active() {
                return l.active
            },
            get paused() {
                return l.paused
            },
            activate: function(C) {
                if (l.active) return this;
                var M = i(C, "onActivate"),
                    z = i(C, "onPostActivate"),
                    X = i(C, "checkCanFocusTrap"),
                    $ = De.getActiveTrap(r),
                    O = !1;
                if ($ && !$.paused) {
                    var F;
                    (F = $._setSubtreeIsolation) === null || F === void 0 || F.call($, !1), O = !0
                }
                try {
                    X || v(), l.active = !0, l.paused = !1, l.nodeFocusedBeforeActivation = m(n), M == null || M();
                    var q = function() {
                        X && v(), G(), V(), o.isolateSubtrees && s._setSubtreeIsolation(!0), z == null || z()
                    };
                    if (X) return X(l.containers.concat()).then(q, q), this;
                    q()
                } catch (ve) {
                    if ($ === De.getActiveTrap(r) && O) {
                        var te;
                        (te = $._setSubtreeIsolation) === null || te === void 0 || te.call($, !0)
                    }
                    throw ve
                }
                return this
            },
            deactivate: function(C) {
                if (!l.active) return this;
                var M = sr({
                    onDeactivate: o.onDeactivate,
                    onPostDeactivate: o.onPostDeactivate,
                    checkCanReturnFocus: o.checkCanReturnFocus
                }, C);
                clearTimeout(l.delayInitialFocusTimer), l.delayInitialFocusTimer = void 0, l.paused || s._setSubtreeIsolation(!1), l.alreadySilent.clear(), Q(), l.active = !1, l.paused = !1, V(), De.deactivateTrap(r, s);
                var z = i(M, "onDeactivate"),
                    X = i(M, "onPostDeactivate"),
                    $ = i(M, "checkCanReturnFocus"),
                    O = i(M, "returnFocus", "returnFocusOnDeactivate");
                z == null || z();
                var F = function() {
                    ir(function() {
                        O && g(y(l.nodeFocusedBeforeActivation)), X == null || X()
                    })
                };
                return O && $ ? ($(y(l.nodeFocusedBeforeActivation)).then(F, F), this) : (F(), this)
            },
            pause: function(C) {
                return l.active ? (l.manuallyPaused = !0, this._setPausedState(!0, C)) : this
            },
            unpause: function(C) {
                return l.active ? (l.manuallyPaused = !1, r[r.length - 1] !== this ? this : this._setPausedState(!1, C)) : this
            },
            updateContainerElements: function(C) {
                var M = [].concat(C).filter(Boolean);
                return l.containers = M.map(function(z) {
                    return typeof z == "string" ? n.querySelector(z) : z
                }), o.isolateSubtrees && ae(l.containers), l.active && (v(), o.isolateSubtrees && !l.paused && s._setSubtreeIsolation(!0)), V(), this
            }
        }, Object.defineProperties(s, {
            _isManuallyPaused: {
                value: function() {
                    return l.manuallyPaused
                }
            },
            _setPausedState: {
                value: function(C, M) {
                    if (l.paused === C) return this;
                    if (l.paused = C, C) {
                        var z = i(M, "onPause"),
                            X = i(M, "onPostPause");
                        z == null || z(), Q(), V(), s._setSubtreeIsolation(!1), X == null || X()
                    } else {
                        var $ = i(M, "onUnpause"),
                            O = i(M, "onPostUnpause");
                        $ == null || $(), s._setSubtreeIsolation(!0), v(), G(), V(), O == null || O()
                    }
                    return this
                }
            },
            _setSubtreeIsolation: {
                value: function(C) {
                    o.isolateSubtrees && l.adjacentElements.forEach(function(M) {
                        var z;
                        if (C) switch (o.isolateSubtrees) {
                            case "aria-hidden":
                                (M.ariaHidden === "true" || ((z = M.getAttribute("aria-hidden")) === null || z === void 0 ? void 0 : z.toLowerCase()) === "true") && l.alreadySilent.add(M), M.setAttribute("aria-hidden", "true");
                                break;
                            default:
                                (M.inert || M.hasAttribute("inert")) && l.alreadySilent.add(M), M.setAttribute("inert", !0);
                                break
                        } else if (!l.alreadySilent.has(M)) switch (o.isolateSubtrees) {
                            case "aria-hidden":
                                M.removeAttribute("aria-hidden");
                                break;
                            default:
                                M.removeAttribute("inert");
                                break
                        }
                    })
                }
            }
        }), s.updateContainerElements(a), s
    };

function b4(e, a = {}) {
    let t;
    const {
        immediate: n,
        ...r
    } = a, o = Va(!1), l = Va(!1), s = v => t && t.activate(v), i = v => t && t.deactivate(v), c = () => {
        t && (t.pause(), l.value = !0)
    }, f = () => {
        t && (t.unpause(), l.value = !1)
    }, d = T(() => {
        const v = fe(e);
        return qs(v).map(m => {
            const g = fe(m);
            return typeof g == "string" ? g : Ws(g)
        }).filter(js)
    });
    return oe(d, v => {
        if (v.length)
            if (!t) t = y4(v, {
                ...r,
                onActivate() {
                    o.value = !0, a.onActivate && a.onActivate()
                },
                onDeactivate() {
                    o.value = !1, a.onDeactivate && a.onDeactivate()
                }
            }), n && s();
            else {
                const m = t == null ? void 0 : t.active;
                t == null || t.updateContainerElements(v), !m && n && s()
            }
    }, {
        flush: "post"
    }), Fs(() => i()), {
        hasFocus: o,
        isPaused: l,
        activate: s,
        deactivate: i,
        pause: c,
        unpause: f
    }
}
var S4 = {
        class: "scalar scalar-app z-overlay relative"
    },
    x4 = B({
        __name: "ModalClientContainer",
        props: {
            modalState: {}
        },
        emits: ["open", "close"],
        setup(e, {
            emit: a
        }) {
            const t = e,
                n = a,
                r = E(null),
                {
                    activate: o,
                    deactivate: l
                } = b4(r, {
                    allowOutsideClick: !0,
                    fallbackFocus: () => r.value
                });
            return Ks(() => Gs()), oe(() => t.modalState.open, async s => {
                s ? (await de(), o(), n("open")) : (l(), n("close"))
            }, {
                immediate: !1
            }), Oe(() => {
                l()
            }), (s, i) => (p(), x("div", S4, [b("div", {
                class: re(["scalar-container", {
                    "scalar-client--open": e.modalState.open
                }])
            }, [b("div", _({
                ref_key: "client",
                ref: r,
                "aria-label": "API Client",
                "aria-modal": "true"
            }, s.$attrs, {
                class: "scalar-app-layout scalar-client",
                role: "dialog",
                tabindex: "-1"
            }), [A(u(A0), null, {
                default: S(() => [I(s.$slots, "default", {}, void 0, !0)]),
                _: 3
            })], 16), b("div", {
                class: "scalar-app-exit",
                onClick: i[0] || (i[0] = c => e.modalState.hide())
            })], 2)]))
        }
    }),
    w4 = ce(x4, [
        ["__scopeId", "data-v-77897d1c"]
    ]),
    A4 = {
        key: 1,
        class: "flex h-full w-full items-center justify-center"
    },
    T4 = B({
        __name: "Operation",
        props: {
            documentSlug: {},
            document: {},
            eventBus: {},
            layout: {},
            path: {},
            method: {},
            exampleName: {},
            environment: {},
            workspaceStore: {},
            plugins: {},
            options: {},
            requestBodyCompositionSelection: {}
        },
        setup(e) {
            const a = T(() => {
                    var w, P, k;
                    if (!e.path || !e.method || !e.exampleName || !e.document) return null;
                    const h = vi(e.workspaceStore, e.documentSlug, {
                        path: e.path,
                        method: e.method,
                        exampleName: e.exampleName
                    }, {
                        baseServerUrl: (w = fe(e.options)) == null ? void 0 : w.baseServerURL,
                        fallbackDocument: e.document,
                        isElectron: Xt(),
                        layout: e.layout === "web" ? "web" : "other",
                        servers: (P = fe(e.options)) == null ? void 0 : P.servers,
                        appVersion: Bn,
                        authentication: (k = fe(e.options)) == null ? void 0 : k.authentication
                    });
                    return h.ok ? h.data : null
                }),
                t = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.operation) ?? null
                }),
                n = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.cookies.workspace) ?? []
                }),
                r = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.cookies.document) ?? []
                }),
                o = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.servers.list) ?? []
                }),
                l = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.servers.selected) ?? null
                }),
                s = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.servers.meta) ?? {
                        type: "document"
                    }
                }),
                i = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.security.schemes) ?? {}
                }),
                c = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.security.selected) ?? {
                        selectedIndex: -1,
                        selectedSchemes: []
                    }
                }),
                f = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.security.selectedSchemes) ?? []
                }),
                d = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.security.requirements) ?? []
                }),
                v = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.security.meta) ?? {
                        type: "document"
                    }
                }),
                m = T(() => {
                    var h;
                    return ((h = a.value) == null ? void 0 : h.headers.default) ?? {}
                }),
                g = T(() => {
                    var h;
                    return Array.from(new Set(Object.keys({
                        ...(h = e.document) == null ? void 0 : h["x-scalar-environments"],
                        ...e.workspaceStore.workspace["x-scalar-environments"]
                    })))
                }),
                y = T(() => {
                    var h;
                    return Ur((h = fe(e.options)) == null ? void 0 : h.hiddenClients)
                });
            return (h, w) => {
                var P, k, D;
                return e.path && e.method && e.exampleName && t.value && e.document ? (p(), H(u(Nv), {
                    key: 0,
                    activeEnvironment: e.workspaceStore.workspace["x-scalar-active-environment"],
                    appVersion: u(Bn),
                    authMeta: v.value,
                    defaultHeaders: m.value,
                    document: e.document,
                    documentCookies: r.value,
                    documentSecurity: ((P = e.document) == null ? void 0 : P.security) ?? [],
                    documentSlug: e.documentSlug,
                    documentUrl: (k = e.document) == null ? void 0 : k["x-scalar-original-source-url"],
                    environment: e.environment,
                    environments: g.value,
                    eventBus: e.eventBus,
                    exampleKey: e.exampleName,
                    hideClientButton: ((D = fe(e.options)) == null ? void 0 : D.hideClientButton) ?? !1,
                    history: e.workspaceStore.history.getHistory(e.documentSlug, e.path, e.method),
                    httpClients: y.value,
                    layout: e.layout,
                    method: e.method,
                    operation: t.value,
                    options: e.options,
                    path: e.path,
                    plugins: e.plugins,
                    proxyUrl: u(Zr)(e.workspaceStore.workspace["x-scalar-active-proxy"], e.layout === "web" ? "web" : "other") ?? "",
                    requestBodyCompositionSelection: e.requestBodyCompositionSelection,
                    securityRequirements: d.value,
                    securitySchemes: i.value,
                    selectedClient: e.workspaceStore.workspace["x-scalar-default-client"],
                    selectedSecurity: c.value,
                    selectedSecuritySchemes: f.value,
                    server: l.value,
                    serverMeta: s.value,
                    servers: o.value,
                    workspaceCookies: n.value
                }, null, 8, ["activeEnvironment", "appVersion", "authMeta", "defaultHeaders", "document", "documentCookies", "documentSecurity", "documentSlug", "documentUrl", "environment", "environments", "eventBus", "exampleKey", "hideClientButton", "history", "httpClients", "layout", "method", "operation", "options", "path", "plugins", "proxyUrl", "requestBodyCompositionSelection", "securityRequirements", "securitySchemes", "selectedClient", "selectedSecurity", "selectedSecuritySchemes", "server", "serverMeta", "servers", "workspaceCookies"])) : (p(), x("div", A4, [...w[0] || (w[0] = [b("span", {
                    class: "text-c-3"
                }, "Select an operation to view details", -1)])]))
            }
        }
    }),
    k4 = T4,
    C4 = e => {
        const a = E(""),
            t = E(!1),
            n = () => {
                const l = fe(e);
                l && (a.value = l.style.overflow, l.style.overflow = "hidden")
            },
            r = () => {
                const l = fe(e);
                l && (a.value !== "" ? l.style.overflow = a.value : l.style.removeProperty("overflow"))
            },
            o = T({
                get: () => t.value,
                set: l => {
                    t.value = l, l ? n() : r()
                }
            });
        return Oe(() => {
            t.value && r()
        }), o
    },
    H4 = {
        key: 0,
        class: "relative flex h-full min-h-0 w-full flex-1"
    },
    P4 = {
        key: 1,
        class: "flex h-full w-full items-center justify-center"
    },
    B4 = B({
        __name: "Modal",
        props: {
            workspaceStore: {},
            document: {},
            path: {},
            eventBus: {},
            method: {},
            exampleName: {},
            requestBodyCompositionSelection: {},
            modalState: {},
            sidebarState: {},
            plugins: {},
            options: {}
        },
        setup(e, {
            expose: a
        }) {
            const t = {
                    label: "default",
                    id: "default"
                },
                n = E(!1);
            yo({
                eventBus: e.eventBus,
                isSidebarOpen: n,
                requestBodyCompositionSelection: e.requestBodyCompositionSelection,
                sidebarState: e.sidebarState,
                modalState: e.modalState,
                store: e.workspaceStore
            }), Nf(e.eventBus, "modal", () => !e.modalState.open);
            const r = () => {
                    e.eventBus.emit("operation:cancel:request")
                },
                o = C4(() => typeof window < "u" ? window.document.body : null);
            oe(() => e.modalState.open, f => {
                o.value = f, f || r()
            }), Oe(() => r());
            const l = 288,
                s = T(() => {
                    var f, d;
                    return ((d = (f = e.workspaceStore) == null ? void 0 : f.workspace) == null ? void 0 : d["x-scalar-sidebar-width"]) ?? l
                }),
                i = f => {
                    var d;
                    return (d = e.workspaceStore) == null ? void 0 : d.update("x-scalar-sidebar-width", f)
                },
                c = T(() => cr(e.workspaceStore, e.document.value).environment);
            return a({
                sidebarWidth: s,
                environment: c
            }), (f, d) => (p(), H(w4, {
                modalState: e.modalState
            }, {
                default: S(() => {
                    var v, m, g, y, h, w;
                    return [A(u(Ys)), e.document.value && ((v = e.path) != null && v.value) && ((m = e.method) != null && m.value) ? (p(), x("main", H4, [A(u(F8), {
                        modelValue: n.value,
                        "onUpdate:modelValue": d[0] || (d[0] = P => n.value = P),
                        class: "absolute top-2 left-4 z-10 max-md:top-4"
                    }, null, 8, ["modelValue"]), ke(A(u(L8), {
                        sidebarWidth: s.value,
                        "onUpdate:sidebarWidth": [d[1] || (d[1] = P => s.value = P), i],
                        activeWorkspace: t,
                        class: "h-full max-md:absolute! max-md:z-5 max-md:w-full!",
                        documents: [e.document.value],
                        eventBus: e.eventBus,
                        isDroppable: () => !1,
                        layout: "modal",
                        sidebarState: e.sidebarState.state,
                        workspaces: [],
                        onSelectItem: e.sidebarState.handleSelectItem
                    }, null, 8, ["sidebarWidth", "documents", "eventBus", "sidebarState", "onSelectItem"]), [
                        [Ie, n.value]
                    ]), A(k4, {
                        activeWorkspace: t,
                        class: "flex-1",
                        document: e.document.value,
                        documentSlug: ((g = e.document.value["x-scalar-navigation"]) == null ? void 0 : g.id) ?? "",
                        environment: c.value,
                        eventBus: e.eventBus,
                        exampleName: (y = e.exampleName) == null ? void 0 : y.value,
                        layout: "modal",
                        method: (h = e.method) == null ? void 0 : h.value,
                        options: e.options,
                        path: (w = e.path) == null ? void 0 : w.value,
                        plugins: e.plugins,
                        requestBodyCompositionSelection: e.requestBodyCompositionSelection.value,
                        workspaceStore: e.workspaceStore
                    }, null, 8, ["document", "documentSlug", "environment", "eventBus", "exampleName", "method", "options", "path", "plugins", "requestBodyCompositionSelection", "workspaceStore"])])) : (p(), x("div", P4, [...d[2] || (d[2] = [b("span", {
                        class: "text-c-3"
                    }, "No document selected", -1)])]))]
                }),
                _: 1
            }, 8, ["modalState"]))
        }
    }),
    M4 = B4,
    E4 = ({
        el: e,
        eventBus: a = Qs({
            debug: !1
        }),
        mountOnInitialize: t = !0,
        plugins: n = [],
        workspaceStore: r,
        options: o = {}
    }) => {
        var G, ae;
        const l = E({}),
            s = ca(o) ? o : E(fe(o)),
            i = {
                path: "default",
                method: "default",
                example: "default",
                documentSlug: r.workspace["x-scalar-active-document"] || "default"
            },
            c = nn({
                ...i
            }),
            f = Q => {
                Object.assign(c, i, Q)
            },
            d = T(() => Vf(r, c)),
            v = T(() => d.value.documentSlug),
            m = T(() => d.value.path),
            g = T(() => d.value.method),
            y = T(() => d.value.example),
            h = T(() => {
                const Q = r.workspace.documents[v.value ?? ""];
                return ee(Q) ? Q : null
            }),
            w = $f({
                workspaceStore: r,
                documentSlug: v,
                path: m,
                method: g,
                exampleName: y,
                route: f
            }),
            P = Js(),
            k = Xs(M4, {
                document: h,
                eventBus: a,
                exampleName: y,
                method: g,
                modalState: P,
                path: m,
                plugins: n,
                requestBodyCompositionSelection: l,
                sidebarState: w,
                workspaceStore: r,
                options: s
            }),
            D = () => {
                l.value = {}
            },
            Z = [];
        for (const Q of n)(ae = (G = Q.lifecycle) == null ? void 0 : G.onInit) == null || ae.call(G), Z.push(L0(a, Q));
        k.onUnmount(() => {
            var Q, R;
            for (const N of Z) N();
            for (const N of n)(R = (Q = N.lifecycle) == null ? void 0 : Q.onDestroy) == null || R.call(Q)
        }), oe(() => P.open, Q => Q ? null : D()), oe(() => fe(s).proxyUrl, Q => r.update("x-scalar-active-proxy", Q), {
            immediate: !0
        }), k.config.idPrefix = "scalar-client";
        const J = (Q = e) => {
            if (!Q) {
                console.error("[@scalar/api-client] Could not create the API client Modal.", "Invalid HTML element provided.", "Read more: https://github.com/scalar/scalar/tree/main/packages/api-client");
                return
            }
            k.mount(Q)
        };
        return t && J(), {
            app: k,
            open: Q => {
                P.open = !0, Q && f(Q)
            },
            mount: J,
            route: f,
            modalState: P,
            updateOptions: (Q, R = !1) => {
                s.value = R ? Q : {
                    ...s.value,
                    ...Q
                }
            }
        }
    };
const V4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    createApiClientModal: E4,
    initializeModalEvents: yo,
    mapHiddenClientsConfig: Ur
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    $0 as S, ni as b, E4 as c, ai as g, V4 as i
};