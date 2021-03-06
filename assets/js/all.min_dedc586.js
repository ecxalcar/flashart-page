/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
	var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = "".trim, l = {}, m = "1.11.0", n = function (a, b) { return new n.fn.init(a, b) }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) { return b.toUpperCase() }; n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return n.each(this, a, b) }, map: function (a) { return this.pushStack(n.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === n.type(a) }, isArray: Array.isArray || function (a) { return "array" === n.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { return a - parseFloat(a) >= 0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function (a) { var b; if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (l.ownLast) for (b in a) return j.call(a, b); for (b in a); return void 0 === b || j.call(a, b) }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (b) { b && n.trim(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = s(a); if (c) { if (g) { for (; f > e; e++)if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: k && !k.call("\ufeff\xa0") ? function (a) { return null == a ? "" : k.call(a) } : function (a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { var d; if (b) { if (g) return g.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a) return c } return -1 }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = s(a), i = []; if (h) for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function () { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || n.guid++ , e) : void 0 }, now: function () { return +new Date }, support: l }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function s(a) { var b = a.length, c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date, t = a.document, u = 0, v = 0, w = eb(), x = eb(), y = eb(), z = function (a, b) { return a === b && (j = !0), 0 }, A = "undefined", B = 1 << 31, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = D.indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++)if (this[b] === a) return b; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", M = L.replace("w", "w#"), N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]", O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)", P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(O), U = new RegExp("^" + M + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = /'|\\/g, ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), bb = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }; try { G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType } catch (cb) { G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function db(a, b, d, e) { var f, g, h, i, j, m, p, q, u, v; if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d; if (1 !== (i = b.nodeType) && 9 !== i) return []; if (n && !e) { if (f = Z.exec(a)) if (h = f[1]) { if (9 === i) { if (g = b.getElementById(h), !g || !g.parentNode) return d; if (g.id === h) return d.push(g), d } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d } else { if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d } if (c.qsa && (!o || !o.test(a))) { if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) { m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length; while (j--) m[j] = q + pb(m[j]); u = $.test(a) && mb(b.parentNode) || b, v = m.join(",") } if (v) try { return G.apply(d, u.querySelectorAll(v)), d } catch (w) { } finally { p || b.removeAttribute("id") } } } return xb(a.replace(P, "$1"), b, d, e) } function eb() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function fb(a) { return a[s] = !0, a } function gb(a) { var b = l.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function hb(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function ib(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function jb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function kb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function lb(a) { return fb(function (b) { return b = +b, fb(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function mb(a) { return a && typeof a.getElementsByTagName !== A && a } c = db.support = {}, f = db.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, k = db.setDocument = function (a) { var b, e = a ? a.ownerDocument || a : t, g = e.defaultView; return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () { k() }, !1) : g.attachEvent && g.attachEvent("onunload", function () { k() })), c.attributes = gb(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = gb(function (a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = gb(function (a) { return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length }), c.getById ? (d.find.ID = function (a, b) { if (typeof b.getElementById !== A && n) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(ab, bb); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ab, bb); return function (a) { var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0 }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) { a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked") }), gb(function (a) { var b = e.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:") })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) { c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O) }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, z = b ? function (a, b) { if (a === b) return j = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return j = !0, 0; var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], k = [b]; if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0; if (f === g) return ib(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) k.unshift(c); while (h[d] === k[d]) d++; return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0 }, e) : l }, db.matches = function (a, b) { return db(a, null, null, b) }, db.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try { var d = q.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return db(b, l, null, [a]).length > 0 }, db.contains = function (a, b) { return (a.ownerDocument || a) !== l && k(a), r(a, b) }, db.attr = function (a, b) { (a.ownerDocument || a) !== l && k(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0; return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, db.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, db.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return i = null, a }, e = db.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = db.selectors = { cacheLength: 50, createPseudo: fb, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[5] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(ab, bb).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = w[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = db.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), t = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && t) { k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [u, n, m]; break } } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a); return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: fb(function (a) { var b = [], c = [], d = g(a.replace(P, "$1")); return d[s] ? fb(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() } }), has: fb(function (a) { return function (b) { return db(a, b).length > 0 } }), contains: fb(function (a) { return function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: fb(function (a) { return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), function (b) { var c; do if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === m }, focus: function (a) { return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return X.test(a.nodeName) }, input: function (a) { return W.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: lb(function () { return [0] }), last: lb(function (a, b) { return [b - 1] }), eq: lb(function (a, b, c) { return [0 > c ? c + b : c] }), even: lb(function (a, b) { for (var c = 0; b > c; c += 2)a.push(c); return a }), odd: lb(function (a, b) { for (var c = 1; b > c; c += 2)a.push(c); return a }), lt: lb(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d); return a }), gt: lb(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = jb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = kb(b); function nb() { } nb.prototype = d.filters = d.pseudos, d.setFilters = new nb; function ob(a, b) { var c, e, f, g, h, i, j, k = x[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? db.error(a) : x(a, i).slice(0) } function pb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value; return d } function qb(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = v++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [u, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function rb(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function sb(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function tb(a, b, c, d, e, f) { return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || wb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : sb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = sb(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ub(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) { return a === b }, i, !0), l = qb(function (a) { return I.call(b, a) > -1 }, i, !0), m = [function (a, c, d) { return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > j; j++)if (c = d.relative[a[j].type]) m = [qb(rb(m), c)]; else { if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) { for (e = ++j; f > e; e++)if (d.relative[a[e].type]) break; return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({ value: " " === a[j - 2].type ? "*" : "" })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a)) } m.push(c) } return rb(m) } function vb(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, i, j, k) { var m, n, o, p = 0, q = "0", r = f && [], s = [], t = h, v = f || e && d.find.TAG("*", k), w = u += null == t ? 1 : Math.random() || .1, x = v.length; for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) { if (e && m) { n = 0; while (o = a[n++]) if (o(m, g, i)) { j.push(m); break } k && (u = w) } c && ((m = !o && m) && p-- , f && r.push(m)) } if (p += q, c && q !== p) { n = 0; while (o = b[n++]) o(r, s, g, i); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = E.call(j)); s = sb(s) } G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j) } return k && (u = w, h = t), r }; return c ? fb(f) : f } g = db.compile = function (a, b) { var c, d = [], e = [], f = y[a + " "]; if (!f) { b || (b = ob(a)), c = b.length; while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f); f = y(a, vb(e, d)) } return f }; function wb(a, b, c) { for (var d = 0, e = b.length; e > d; d++)db(a, b[d], c); return c } function xb(a, b, e, f) { var h, i, j, k, l, m = ob(a); if (!f && 1 === m.length) { if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e; a = a.slice(i.shift().value.length) } h = V.needsContext.test(a) ? 0 : i.length; while (h--) { if (j = i[h], d.relative[k = j.type]) break; if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) { if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e; break } } } return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e } return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) { return 1 & a.compareDocumentPosition(l.createElement("div")) }), gb(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || hb("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && gb(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || hb("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), gb(function (a) { return null == a.getAttribute("disabled") }) || hb(J, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), db }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/; function x(a, b, c) { if (n.isFunction(b)) return n.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (w.test(b)) return n.filter(b, a, c); b = n.filter(b, a) } return n.grep(a, function (a) { return n.inArray(a, b) >= 0 !== c }) } n.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(n(a).filter(function () { for (b = 0; e > b; b++)if (n.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++)n.find(a, d[b], c); return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function (a) { return this.pushStack(x(this, a || [], !1)) }, not: function (a) { return this.pushStack(x(this, a || [], !0)) }, is: function (a) { return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length } }); var y, z = a.document, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, B = n.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } if (d = z.getElementById(c[2]), d && d.parentNode) { if (d.id !== c[2]) return y.find(a); this.length = 1, this[0] = d } return this.context = z, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) }; B.prototype = n.fn, y = n(z); var C = /^(?:parents|prev(?:Until|All))/, D = { children: !0, contents: !0, next: !0, prev: !0 }; n.extend({ dir: function (a, b, c) { var d = [], e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c } }), n.fn.extend({ has: function (a) { var b, c = n(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++)if (n.contains(this, c[b])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? n.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(n.unique(n.merge(this.get(), n(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function E(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } n.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return n.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return n.dir(a, "parentNode", c) }, next: function (a) { return E(a, "nextSibling") }, prev: function (a) { return E(a, "previousSibling") }, nextAll: function (a) { return n.dir(a, "nextSibling") }, prevAll: function (a) { return n.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return n.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return n.dir(a, "previousSibling", c) }, siblings: function (a) { return n.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return n.sibling(a.firstChild) }, contents: function (a) { return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function (a, b) { n.fn[a] = function (c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e) } }); var F = /\S+/g, G = {}; function H(a) { var b = G[a] = {}; return n.each(a.match(F) || [], function (a, c) { b[c] = !0 }), b } n.Callbacks = function (a) { a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) }, k = { add: function () { if (h) { var d = h.length; !function f(b) { n.each(b, function (b, c) { var d = n.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function () { return h && n.each(arguments, function (a, c) { var d; while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e-- , f >= d && f--) }), this }, has: function (a) { return a ? n.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], e = 0, this }, disable: function () { return h = i = c = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, c || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!d } }; return k }, n.extend({ Deferred: function (a) { var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return n.Deferred(function (c) { n.each(b, function (b, f) { var g = n.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? n.extend(a, d) : d } }, e = {}; return d.pipe = d.then, n.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var I; n.fn.ready = function (a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? n.readyWait++ : n.ready(!0) }, ready: function (a) { if (a === !0 ? !--n.readyWait : !n.isReady) { if (!z.body) return setTimeout(n.ready); n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready")) } } }); function J() { z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K)) } function K() { (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready()) } n.ready.promise = function (b) { if (!I) if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready); else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1); else { z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K); var c = !1; try { c = null == a.frameElement && z.documentElement } catch (d) { } c && c.doScroll && !function e() { if (!n.isReady) { try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) } J(), n.ready() } }() } return I.promise(b) }; var L = "undefined", M; for (M in n(l)) break; l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function () { var a, b, c = z.getElementsByTagName("body")[0]; c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null) }), function () { var a = z.createElement("div"); if (null == l.deleteExpando) { l.deleteExpando = !0; try { delete a.test } catch (b) { l.deleteExpando = !1 } } a = null }(), n.acceptData = function (a) { var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b }; var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g; function P(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(O, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) { } n.data(a, b, c) } else c = void 0 } return c } function Q(a) { var b; for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1; return !0 } function R(a, b, d, e) {
		if (n.acceptData(a)) {
			var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h; if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
		}
	} function S(a, b, c) { if (n.acceptData(a)) { var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !Q(d) : !n.isEmptyObject(d)) return } (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } } n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a) }, data: function (a, b, c) { return R(a, b, c) }, removeData: function (a, b) { return S(a, b) }, _data: function (a, b, c) { return R(a, b, c, !0) }, _removeData: function (a, b) { return S(a, b, !0) } }), n.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) { c = g.length; while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])); n._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { n.data(this, a) }) : arguments.length > 1 ? this.each(function () { n.data(this, a, b) }) : f ? P(f, a, n.data(f, a)) : void 0 }, removeData: function (a) { return this.each(function () { n.removeData(this, a) }) } }), n.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function () { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) } }), n.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = n.queue(this, a, b); n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { n.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++ , c.empty.add(h)); return h(), e.promise(b) } }); var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = ["Top", "Right", "Bottom", "Left"], V = function (a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) }, W = n.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) n.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(n(a), c) })), b)) for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, X = /^(?:checkbox|radio)$/i; !function () { var a = z.createDocumentFragment(), b = z.createElement("div"), c = z.createElement("input"); if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () { l.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == l.deleteExpando) { l.deleteExpando = !0; try { delete b.test } catch (d) { l.deleteExpando = !1 } } a = b = c = null }(), function () { var b, c, d = z.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1); d = null }(); var Y = /^(?:input|select|textarea)$/i, Z = /^key/, $ = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, ab = /^([^.]*)(?:\.(.+)|)$/; function bb() { return !0 } function cb() { return !1 } function db() { try { return z.activeElement } catch (a) { } } n.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(F) || [""], h = b.length; while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0); a = null } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a); if (r && (k = r.events)) { b = (b || "").match(F) || [""], j = b.length; while (j--) if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount-- , l.remove && l.remove.call(a, g)); i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]) } else for (o in k) n.event.remove(a, o + b[j], c, d, !0); n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, m, o = [d || z], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) { if (!e && !k.noBubble && !n.isWindow(d)) { for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h; l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a) } m = 0; while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault()); if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) { l = d[g], l && (d[g] = null), n.event.triggered = p; try { d[p]() } catch (r) { } n.event.triggered = void 0, l && (d[g] = l) } return b.result } }, dispatch: function (a) { a = n.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d); e.length && g.push({ elem: i, handlers: e }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function (a) { if (a[n.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== db() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === db() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = n.extend(new n.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = z.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { var d = "on" + b; a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c)) }, n.Event = function (a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { isDefaultPrevented: cb, isPropagationStopped: cb, isImmediatePropagationStopped: cb, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = bb, this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.submitBubbles || (n.event.special.submit = { setup: function () { return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0; c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function (a) { a._submit_bubble = !0 }), n._data(c, "submitBubbles", !0)) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit") } }), l.changeBubbles || (n.event.special.change = { setup: function () { return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), n.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0) })), !1) : void n.event.add(this, "beforeactivate._change", function (a) { var b = a.target; Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0) }), n._data(b, "changeBubbles", !0)) }) }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return n.event.remove(this, "._change"), !Y.test(this.nodeName) } }), l.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { n.event.simulate(b, a.target, n.event.fix(a), !0) }; n.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = n._data(d, b); e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = n._data(d, b) - 1; e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b)) } } }), n.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb; else if (!d) return this; return 1 === e && (g = d, d = function (a) { return n().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function () { n.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function () { n.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { n.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }); function eb(a) { var b = fb.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gb = / jQuery\d+="(?:null|\d+)"/g, hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"), ib = /^\s+/, jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, kb = /<([\w:]+)/, lb = /<tbody/i, mb = /<|&#?\w+;/, nb = /<(?:script|style|link)/i, ob = /checked\s*(?:[^=]|=\s*.checked.)/i, pb = /^$|\/(?:java|ecma)script/i, qb = /^true\/(.*)/, rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, tb = eb(z), ub = tb.appendChild(z.createElement("div")); sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td; function vb(a, b) { var c, d, e = 0, f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0; if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b)); return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f } function wb(a) { X.test(a.type) && (a.defaultChecked = a.checked) } function xb(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function yb(a) { return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a } function zb(a) { var b = qb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Ab(a, b) { for (var c, d = 0; null != (c = a[d]); d++)n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) } function Bb(a, b) { if (1 === b.nodeType && n.hasData(a)) { var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h) for (d = 0, e = h[c].length; e > d; d++)n.event.add(b, c, h[c][d]) } g.data && (g.data = n.extend({}, g.data)) } } function Cb(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) { e = n._data(b); for (d in e.events) n.removeEvent(b, d, e.handle); b.removeAttribute(n.expando) } "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } } n.extend({ clone: function (a, b, c) { var d, e, f, g, h, i = n.contains(a.ownerDocument, a); if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g)d[g] && Cb(e, d[g]); if (b) if (c) for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++)Bb(e, d[g]); else Bb(a, f); return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)if (f = a[q], f || 0 === f) if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f); else if (mb.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0]; while (e--) h = h.lastChild; if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) { f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) } n.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild); h = o.lastChild } else p.push(b.createTextNode(f)); h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0; while (f = p[q++]) if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) { e = 0; while (f = h[e++]) pb.test(f.type || "") && c.push(f) } return h = null, o }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) { if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle); j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), n.fn.extend({ text: function (a) { return W(this, function (a) { return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = xb(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = xb(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && n.cleanData(vb(a, !1)); while (a.firstChild) a.removeChild(a.firstChild); a.options && n.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return n.clone(this, a, b) }) }, html: function (a) { return W(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0; if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(jb, "<$1></$2>"); try { for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, k = this.length, m = this, o = k - 1, p = a[0], q = n.isFunction(p); if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function (c) { var d = m.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) { for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++)d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j); if (f) for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++)d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, ""))); i = c = null } return this } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { n.fn[a] = function (a) { for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } }); var Db, Eb = {}; function Fb(b, c) { var d = n(c.createElement(b)).appendTo(c.body), e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display"); return d.detach(), e } function Gb(a) { var b = z, c = Eb[a]; return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c } !function () { var a, b, c = z.createElement("div"), d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"; c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function () { var a, c, e, f; if (null == b) { if (a = z.getElementsByTagName("body")[0], !a) return; f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null } return b } }(); var Hb = /^margin/, Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Jb, Kb, Lb = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Jb = function (a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Kb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : z.documentElement.currentStyle && (Jb = function (a) { return a.currentStyle }, Kb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }); function Mb(a, b) { return { get: function () { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d, e, f, g, h = z.createElement("div"), i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"; h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, { reliableHiddenOffsets: function () { if (null != c) return c; var a, b, d, e = z.createElement("div"), f = z.getElementsByTagName("body")[0]; if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c }, boxSizing: function () { return null == d && k(), d }, boxSizingReliable: function () { return null == e && k(), e }, pixelPosition: function () { return null == f && k(), f }, reliableMarginRight: function () { var b, c, d, e; if (null == g && a.getComputedStyle) { if (b = z.getElementsByTagName("body")[0], !b) return; c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c) } return g } }); function k() { var b, c, h = z.getElementsByTagName("body")[0]; h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? { zoom: 1 } : {}, function () { d = 4 === c.offsetWidth }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || { width: "4px" }).width), h.removeChild(b), c = h = null) } }(), n.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var Nb = /alpha\([^)]*\)/i, Ob = /opacity\s*=\s*([^)]*)/, Pb = /^(none|table(?!-c[ea]).+)/, Qb = new RegExp("^(" + T + ")(.*)$", "i"), Rb = new RegExp("^([+-])=(" + T + ")", "i"), Sb = { position: "absolute", visibility: "hidden", display: "block" }, Tb = { letterSpacing: 0, fontWeight: 400 }, Ub = ["Webkit", "O", "Moz", "ms"]; function Vb(a, b) { if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ub.length; while (e--) if (b = Ub[e] + c, b in a) return b; return d } function Wb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } function Xb(a, b, c) { var d = Qb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Yb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g } function Zb(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Jb(a), g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e; d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px" } n.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Kb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b), i = a.style; if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = "", i[b] = c } catch (j) { } } }, css: function (a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f } }), n.each(["height", "width"], function (a, b) { n.cssHooks[b] = { get: function (a, c, d) { return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function () { return Zb(a, b, d) }) : Zb(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && Jb(a); return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = { get: function (a, b) { return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e) } }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function (a, b) { return b ? n.swap(a, { display: "inline-block" }, Kb, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) { n.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Hb.test(a) || (n.cssHooks[a + b].set = Xb) }), n.fn.extend({
		css: function (a, b) {
			return W(this, function (a, b, c) {
				var d, e, f = {}, g = 0; if (n.isArray(b)) { for (d = Jb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		}, show: function () { return Wb(this, !0) }, hide: function () { return Wb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { V(this) ? n(this).show() : n(this).hide() }) }
	}); function $b(a, b, c, d, e) { return new $b.prototype.init(a, b, c, d, e) } n.Tween = $b, $b.prototype = { constructor: $b, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function () { var a = $b.propHooks[this.prop]; return a && a.get ? a.get(this) : $b.propHooks._default.get(this) }, run: function (a) { var b, c = $b.propHooks[this.prop]; return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this } }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, n.fx = $b.prototype.init, n.fx.step = {}; var _b, ac, bc = /^(?:toggle|show|hide)$/, cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), dc = /queueHooks$/, ec = [jc], fc = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = cc.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function gc() { return setTimeout(function () { _b = void 0 }), _b = n.now() } function hc(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = U[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d } function ic(a, b, c) { for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a)) return d } function jc(a, b, c) { var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && V(a), r = n._data(a, "fxshow"); c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++ , m.always(function () { m.always(function () { h.unqueued-- , n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], bc.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue; q = !0 } o[d] = r && r[d] || n.style(a, d) } if (!n.isEmptyObject(o)) { r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () { n(a).hide() }), m.done(function () { var b; n._removeData(a, "fxshow"); for (b in o) n.style(a, b, o[b]) }); for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function kc(a, b) { var c, d, e, f, g; for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function lc(a, b, c) { var d, e, f = 0, g = ec.length, h = n.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: _b || gc(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++)j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (kc(k, j.opts.specialEasing); g > f; f++)if (d = ec[f].call(j, a, k, j.opts)) return d; return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } n.Animation = n.extend(lc, { tweener: function (a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++)c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b) }, prefilter: function (a, b) { b ? ec.unshift(a) : ec.push(a) } }), n.speed = function (a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () { var b = lc(this, n.extend({}, a), f); (e || n._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && n.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), n.each(["toggle", "show", "hide"], function (a, b) { var c = n.fn[b]; n.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e) } }), n.each({ slideDown: hc("show"), slideUp: hc("hide"), slideToggle: hc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { n.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function () { var a, b = n.timers, c = 0; for (_b = n.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || n.fx.stop(), _b = void 0 }, n.fx.timer = function (a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function () { ac || (ac = setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function () { clearInterval(ac), ac = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) { return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a, b, c, d, e = z.createElement("div"); e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null }(); var mc = /\r/g; n.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function (a) { var b = n.find.attr(a, "value"); return null != b ? b : n.text(a) } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = n.makeArray(b), g = e.length; while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1; return c || (a.selectedIndex = -1), e } } } }), n.each(["radio", "checkbox"], function () { n.valHooks[this] = { set: function (a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0 } }, l.checkOn || (n.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var nc, oc, pc = n.expr.attrHandle, qc = /^(?:checked|selected)$/i, rc = l.getSetAttribute, sc = l.input; n.fn.extend({ attr: function (a, b) { return W(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { n.removeAttr(this, a) }) } }), n.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b)) }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(F); if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d) }, attrHooks: { type: { set: function (a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), oc = { set: function (a, b, c) { return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = pc[b] || n.find.attr; pc[b] = sc && rc || !qc.test(b) ? function (a, b, d) { var e, f; return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e } : function (a, b, c) { return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null } }), sc && rc || (n.attrHooks.value = { set: function (a, b, c) { return n.nodeName(a, "input") ? void (a.defaultValue = b) : nc && nc.set(a, b, c) } }), rc || (nc = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, pc.id = pc.name = pc.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: nc.set }, n.attrHooks.contenteditable = { set: function (a, b, c) { nc.set(a, "" === b ? !1 : b, c) } }, n.each(["width", "height"], function (a, b) { n.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), l.style || (n.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var tc = /^(?:input|select|textarea|button|object)$/i, uc = /^(?:a|area)$/i; n.fn.extend({ prop: function (a, b) { return W(this, n.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return a = n.propFix[a] || a, this.each(function () { try { this[a] = void 0, delete this[a] } catch (b) { } }) } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1 } } } }), l.hrefNormalized || n.each(["href", "src"], function (a, b) { n.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding"); var vc = /[\t\r\n\f]/g; n.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (n.isFunction(a)) return this.each(function (b) { n(this).addClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(F) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = n.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (n.isFunction(a)) return this.each(function (b) { n(this).removeClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(F) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? n.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) { n(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = n(this), f = a.match(F) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0; return !1 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { n.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var wc = n.now(), xc = /\?/, yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; n.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null, e = n.trim(b + ""); return e && !n.trim(e.replace(yc, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b) }, n.parseXML = function (b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c }; var zc, Ac, Bc = /#.*$/, Cc = /([?&])_=[^&]*/, Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fc = /^(?:GET|HEAD)$/, Gc = /^\/\//, Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ic = {}, Jc = {}, Kc = "*/".concat("*"); try { Ac = location.href } catch (Lc) { Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href } zc = Hc.exec(Ac.toLowerCase()) || []; function Mc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(F) || []; if (n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Nc(a, b, c, d) { var e = {}, f = a === Jc; function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Oc(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && n.extend(!0, a, c), a } function Pc(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e) for (g in h) if (h[g] && h[g].test(e)) { i.unshift(g); break } if (i[0] in c) f = i[0]; else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break } d || (d = g) } f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Qc(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ac, type: "GET", isLocal: Ec.test(zc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a) }, ajaxPrefilter: Mc(Ic), ajaxTransport: Mc(Jc), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!j) { j = {}; while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2] } b = j[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? f : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return i && i.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v; h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers) v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]); if (i = Nc(Jc, k, b, v)) { v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, i.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, c, d) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return n.get(a, b, c, "json") }, getScript: function (a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function (a, b) { n[b] = function (a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { n.fn[b] = function (a) { return this.on(b, a) } }), n._evalUrl = function (a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function (a) { if (n.isFunction(a)) return this.each(function (b) { n(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = n(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { return this.each(n.isFunction(a) ? function (b) { n(this).wrapInner(a.call(this, b)) } : function () { var b = n(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = n.isFunction(a); return this.each(function (c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display")) }, n.expr.filters.visible = function (a) { return !n.expr.filters.hidden(a) }; var Rc = /%20/g, Sc = /\[\]$/, Tc = /\r?\n/g, Uc = /^(?:submit|button|image|reset|file)$/i, Vc = /^(?:input|select|textarea|keygen)/i; function Wc(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function (b, e) { c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Wc(a + "[" + e + "]", b[e], c, d) } n.param = function (a, b) { var c, d = [], e = function (a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () { e(this.name, this.value) }); else for (c in a) Wc(c, a[c], b, e); return d.join("&").replace(Rc, "+") }, n.fn.extend({ serialize: function () { return n.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a)) }).map(function (a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function (a) { return { name: b.name, value: a.replace(Tc, "\r\n") } }) : { name: b.name, value: c.replace(Tc, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c() } : $c; var Xc = 0, Yc = {}, Zc = n.ajaxSettings.xhr(); a.ActiveXObject && n(a).on("unload", function () { for (var a in Yc) Yc[a](void 0, !0) }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function (a) { if (!a.crossDomain || l.cors) { var b; return { send: function (c, d) { var e, f = a.xhr(), g = ++Xc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + ""); f.send(a.hasContent && a.data || null), b = function (c, e) { var h, i, j; if (b && (e || 4 === f.readyState)) if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort(); else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText); try { i = f.statusText } catch (k) { i = "" } h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 } j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b() }, abort: function () { b && b(void 0, !0) } } } }); function $c() { try { return new a.XMLHttpRequest } catch (b) { } } function _c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c = z.head || n("head")[0] || z.documentElement; return { send: function (d, e) { b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function () { b && b.onload(void 0, !0) } } } }); var ad = [], bd = /(=)\?(?=&|$)|\?\?/; n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = ad.pop() || n.expando + "_" + wc++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || z; var d = v.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes)) }; var cd = n.fn.load; n.fn.load = function (a, b, c) { if ("string" != typeof a && cd) return cd.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) { e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, n.expr.filters.animated = function (a) { return n.grep(n.timers, function (b) { return a === b.elem }).length }; var dd = a.document.documentElement; function ed(a) { return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } n.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { n.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function () { if (this[0]) { var a, b, c = { top: 0, left: 0 }, d = this[0]; return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || dd; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent; return a || dd }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); n.fn[a] = function (d) { return W(this, function (a, d, e) { var f = ed(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), n.each(["top", "left"], function (a, b) { n.cssHooks[b] = Mb(l.pixelPosition, function (a, c) { return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function (a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { n.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return W(this, function (b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.size = function () { return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return n }); var fd = a.jQuery, gd = a.$; return n.noConflict = function (b) { return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n }, typeof b === L && (a.jQuery = a.$ = n), n
});

if (typeof JSON !== "object") {
	JSON = {}
} (function () {
	function f(n) {
		return n < 10 ? "0" + n : n
	} if (typeof Date.prototype.toJSON !== "function") {
		Date.prototype.toJSON = function () {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
			return this.valueOf()
		}
	} var cx, escapable, gap, indent, meta, rep;
	function quote(string) {
	escapable.lastIndex = 0;
		return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
			var c = meta[a];
			return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + string + '"'
	} function str(key, holder) {
		var i, k, v, length, mind = gap, partial, value = holder[key];
		if (value && typeof value === "object" && typeof value.toJSON === "function") {
			value = value.toJSON(key)
		} if (typeof rep === "function") {
			value = rep.call(holder, key, value)
		} switch (typeof value) {
			case "string": return quote(value);
			case "number": return isFinite(value) ? String(value) : "null";
			case "boolean": case "null": return String(value);
			case "object": if (!value) {
				return "null"
			} gap += indent;
				partial = [];
				if (Object.prototype.toString.apply(value) === "[object Array]") {
					length = value.length;
					for (i = 0;
						i < length;
						i += 1) {
						partial[i] = str(i, value) || "null"
					} v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
					gap = mind;
					return v
				} if (rep && typeof rep === "object") {
					length = rep.length;
					for (i = 0;
						i < length;
						i += 1) {
							if (typeof rep[i] === "string") {
								k = rep[i];
								v = str(k, value);
								if (v) {
									partial.push(quote(k) + (gap ? ": " : ":") + v)
								}
							}
					}
				} else {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ": " : ":") + v)
							}
						}
					}
				} v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
				gap = mind;
				return v
		}
	} if (typeof JSON.stringify !== "function") {
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
		JSON.stringify = function (value, replacer, space) {
			var i;
			gap = "";
			indent = "";
			if (typeof space === "number") {
				for (i = 0;
					i < space;
					i += 1) {
						indent += " "
				}
			} else {
				if (typeof space === "string") {
					indent = space
				}
			} rep = replacer;
			if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
				throw new Error("JSON.stringify")
			} return str("", { "": value })
		}
	} if (typeof JSON.parse !== "function") {
		cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		JSON.parse = function (text, reviver) {
			var j;
			function walk(holder, key) {
				var k, v, value = holder[key];
				if (value && typeof value === "object") {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
							value[k] = v
							} else {
								delete value[k]
							}
						}
					}
				} return reviver.call(holder, key, value)
			} text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function (a) {
					return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
				})
			} if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
				j = eval("(" + text + ")");
				return typeof reviver === "function" ? walk({ "": j }, "") : j
			} throw new SyntaxError("JSON.parse")
		}
	}
}());
(function (b) {
	var c = Array.prototype.slice;
	var a = {
		dict: null, load: function (d) {
			if (this.dict !== null) {
				b.extend(this.dict, d)
			} else {
			this.dict = d
			}
		}, get: function (d) {
			dict = this.dict;
			if (dict && dict.hasOwnProperty(d)) {
				d = dict[d]
			} if (arguments.length == 1) {
				return d
			} args = c.call(arguments);
			args[0] = d;
			return this.printf.apply(this, args)
		}, printf: function (e, d) {
			if (arguments.length < 2) {
				return e
			} d = b.isArray(d) ? d : c.call(arguments, 1);
			return e.replace(/\{(\d+)\}/g, function (h, g, f) {
				if (d[parseInt(g)] !== undefined) {
					return d[parseInt(g)]
				} return h
			})
		}
	};
	b.i18n = a
})(jQuery);
(function (a) {
a.caretTo = function (d, c) {
	if (d.createTextRange) {
		var b = d.createTextRange();
		b.move("character", c);
		b.select()
	} else {
		if (d.selectionStart != null) {
			d.focus();
			d.setSelectionRange(c, c)
		}
	}
};
	a.caretPos = function (c) {
		if ("selection" in document) {
			var b = c.createTextRange();
			try {
				b.setEndPoint("EndToStart", document.selection.createRange())
			} catch (d) {
				return 0
			} return b.text.length
		} else {
			if (c.selectionStart != null) {
				return c.selectionStart
			}
		}
	};
	a.fn.caret = function (b, c) {
		if (typeof (b) === "undefined") {
			return a.caretPos(this.get(0))
		} return this.queue(function (e) {
			if (isNaN(b)) {
				var d = a(this).val().indexOf(b);
				if (c === true) {
					d += b.length
				} else {
					if (typeof (c) !== "undefined") {
						d += c
					}
				} a.caretTo(this, d)
			} else {
				a.caretTo(this, b)
			} e()
		})
	};
	a.fn.caretToStart = function () {
		return this.caret(0)
	};
	a.fn.caretToEnd = function () {
		return this.queue(function (b) {
			a.caretTo(this, a(this).val().length);
			b()
		})
	}
}(jQuery));
jQuery.cookie = function (b, j, m) {
	if (typeof j != "undefined") {
		m = m || {};
		if (j === null) {
			j = "";
			m.expires = -1
		} var e = "";
		if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
			var f;
			if (typeof m.expires == "number") {
				f = new Date();
				f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
			} else {
				f = m.expires
			} e = "; expires=" + f.toUTCString()
		} var l = m.path ? "; path=" + (m.path) : "";
		var g = m.domain ? "; domain=" + (m.domain) : "";
		var a = m.secure ? "; secure" : "";
		document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
	} else {
		var d = null;
		if (document.cookie && document.cookie != "") {
			var k = document.cookie.split(";");
			for (var h = 0;
				h < k.length;
				h++) {
					var c = jQuery.trim(k[h]);
				if (c.substring(0, b.length + 1) == (b + "=")) {
					d = decodeURIComponent(c.substring(b.length + 1));
					break
				}
			}
		} return d
	}
};
/*!
 * Bootstrap v3.3.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (a) { var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher") }(jQuery), +function (a) { "use strict"; function b() { var a = document.createElement("bootstrap"), b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] }; return !1 } a.fn.emulateTransitionEnd = function (b) { var c = !1, d = this; a(this).one("bsTransitionEnd", function () { c = !0 }); var e = function () { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function () { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function (b) { return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var c = a(this), e = c.data("bs.alert"); e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]', d = function (b) { a(b).on("click", c, this.close) }; d.VERSION = "3.3.0", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) { function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this), f = e.attr("data-target"); f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a(f); b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert; a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b; e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function (b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 }; c.VERSION = "3.3.0", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) { var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data(); b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c)) }, this), 0) }, c.prototype.toggle = function () { var a = !0, b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")); a && this.$element.toggleClass("active") }; var d = a.fn.button; a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) { var d = a(c.target); d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) { a(b.target).closest(".btn").toggleClass("focus", "focus" == b.type) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide; e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function (b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) }; c.VERSION = "3.3.0", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) { switch (a.which) { case 37: this.prev(); break; case 39: this.next(); break; default: return }a.preventDefault() }, c.prototype.cycle = function (b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function (a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function (a, b) { var c = "prev" == a ? -1 : 1, d = this.getItemIndex(b), e = (d + c) % this.$items.length; return this.$items.eq(e) }, c.prototype.to = function (a) { var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active")); return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function (b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function () { return this.sliding ? void 0 : this.slide("next") }, c.prototype.prev = function () { return this.sliding ? void 0 : this.slide("prev") }, c.prototype.slide = function (b, d) { var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = "next" == b ? "first" : "last", j = this; if (!f.length) { if (!this.options.wrap) return; f = this.$element.find(".item")[i]() } if (f.hasClass("active")) return this.sliding = !1; var k = f[0], l = a.Event("slide.bs.carousel", { relatedTarget: k, direction: h }); if (this.$element.trigger(l), !l.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var m = a(this.$indicators.children()[this.getItemIndex(f)]); m && m.addClass("active") } var n = a.Event("slid.bs.carousel", { relatedTarget: k, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), j.sliding = !1, setTimeout(function () { j.$element.trigger(n) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(n)), g && this.cycle(), this } }; var d = a.fn.carousel; a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () { return a.fn.carousel = d, this }; var e = function (c) { var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to"); h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } }; a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () { a('[data-ride="carousel"]').each(function () { var c = a(this); b.call(c, c.data()) }) }) }(jQuery), +function (a) { "use strict"; function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) } function c(b) { return this.each(function () { var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b); !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function (b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() }; d.VERSION = "3.3.0", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }, d.prototype.dimension = function () { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function () { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension(); this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function () { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-")); this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function () { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension(); this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function () { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function () { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function () { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) { var e = a(d); this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function (a, b) { var c = a.hasClass("in"); a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse; a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) { var e = a(this); e.attr("data-target") || d.preventDefault(); var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : a.extend({}, e.data(), { trigger: this }); c.call(f, h) }) }(jQuery), +function (a) { "use strict"; function b(b) { b && 3 === b.which || (a(e).remove(), a(f).each(function () { var d = a(this), e = c(d), f = { relatedTarget: this }; e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))) })) } function c(b) { var c = b.attr("data-target"); c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() } function d(b) { return this.each(function () { var c = a(this), d = c.data("bs.dropdown"); d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) { a(b).on("click.bs.dropdown", this.toggle) }; g.VERSION = "3.3.0", g.prototype.toggle = function (d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = c(e), g = f.hasClass("open"); if (b(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return; e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h) } return !1 } }, g.prototype.keydown = function (b) { if (/(38|40|27|32)/.test(b.which)) { var d = a(this); if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) { var e = c(d), g = e.hasClass("open"); if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h); if (i.length) { var j = i.index(b.target); 38 == b.which && j > 0 && j-- , 40 == b.which && j < i.length - 1 && j++ , ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown; a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown) }(jQuery), +function (a) { "use strict"; function b(b, d) { return this.each(function () { var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b); f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function (b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () { this.$element.trigger("loaded.bs.modal") }, this)) }; c.VERSION = "3.3.0", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function (b) { var d = this, e = a.Event("show.bs.modal", { relatedTarget: b }); this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () { var e = a.support.transition && d.$element.hasClass("fade"); d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b }); e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function () { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function (b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function () { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) { this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function () { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.hideModal = function () { var a = this; this.$element.hide(), this.backdrop(function () { a.$body.removeClass("modal-open"), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function () { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function (b) { var d = this, e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function (a) { a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return; f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function () { d.removeBackdrop(), b && b() }; a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.checkScrollbar = function () { this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function () { var a = parseInt(this.$body.css("padding-right") || 0, 10); this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function () { this.$body.css("padding-right", "") }, c.prototype.measureScrollbar = function () { if (document.body.clientWidth >= window.innerWidth) return 0; var a = document.createElement("div"); a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal; a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) { var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data()); d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function () { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b, g = f && f.selector; (e || "destroy" != b) && (g ? (e || d.data("bs.tooltip", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function (a, b) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b) }; c.VERSION = "3.3.0", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) { this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout"; this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } } this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function () { return c.DEFAULTS }, c.prototype.getOptions = function (b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function () { var b = {}, c = this.getDefaults(); return this._options && a.each(this._options, function (a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.leave = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function () { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this, f = this.tip(), g = this.getUID(this.type); this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h); j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element); var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight; if (j) { var n = h, o = this.options.container ? a(this.options.container) : this.$element.parent(), p = this.getPosition(o); h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h) } var q = this.getCalculatedOffset(h, k, l, m); this.applyPlacement(q, h); var r = function () { var a = e.hoverState; e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) }; a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r() } }, c.prototype.applyPlacement = function (b, c) { var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10); isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({ using: function (a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth, j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j); k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight"; d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function (a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(); a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function (b) { function d() { "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this, f = this.tip(), g = a.Event("hide.bs." + this.type); return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this) }, c.prototype.fixTitle = function () { var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function () { return this.getTitle() }, c.prototype.getPosition = function (b) { b = b || this.$element; var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect(); null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = d ? { top: 0, left: 0 } : b.offset(), g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() }, h = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, g, h, f) }, c.prototype.getCalculatedOffset = function (a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d; h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f, k = b.left + f + c; j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function () { var a, b = this.$element, c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function (a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function () { return this.$tip = this.$tip || a(this.options.template) }, c.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function () { this.enabled = !0 }, c.prototype.disable = function () { this.enabled = !1 }, c.prototype.toggleEnabled = function () { this.enabled = !this.enabled }, c.prototype.toggle = function (b) { var c = this; b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function () { var a = this; clearTimeout(this.timeout), this.hide(function () { a.$element.off("." + a.type).removeData("bs." + a.type) }) }; var d = a.fn.tooltip; a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () { return a.fn.tooltip = d, this } }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b, g = f && f.selector; (e || "destroy" != b) && (g ? (e || d.data("bs.popover", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function (a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js"); c.VERSION = "3.3.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () { return c.DEFAULTS }, c.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(), c = this.getContent(); a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function () { return this.getTitle() || this.getContent() }, c.prototype.getContent = function () { var a = this.$element, b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".arrow") }, c.prototype.tip = function () { return this.$tip || (this.$tip = a(this.options.template)), this.$tip }; var d = a.fn.popover; a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () { return a.fn.popover = d, this } }(jQuery), +function (a) { "use strict"; function b(c, d) { var e = a.proxy(this.process, this); this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process() } function c(c) { return this.each(function () { var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c; e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) } b.VERSION = "3.3.0", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function () { var b = "offset", c = 0; a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(); var d = this; this.$body.find(this.selector).map(function () { var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null }).sort(function (a, b) { return a[0] - b[0] }).each(function () { d.offsets.push(this[0]), d.targets.push(this[1]) }) }, b.prototype.process = function () { var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;)g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function (b) { this.activeTarget = b, this.clear(); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active"); d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy") }, b.prototype.clear = function () { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var d = a.fn.scrollspy; a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function () { a('[data-spy="scroll"]').each(function () { var b = a(this); c.call(b, b.data()) }) }) }(jQuery), +function (a) {
	"use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.tab"); e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function (b) { this.element = a(b) }; c.VERSION = "3.3.0", c.TRANSITION_DURATION = 150, c.prototype.show = function () { var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", { relatedTarget: b[0] }), g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d); this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function (b, d, e) { function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length); g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab; a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () { return a.fn.tab = d, this }; var e = function (c) { c.preventDefault(), b.call(a(this), "show") }; a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b; e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function (b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition() }; c.VERSION = "3.3.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) { var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height(); if (null != c && "top" == this.affixed) return c > e ? "top" : !1; if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom"; var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b; return null != c && c >= i ? "top" : null != d && i + j >= a - d ? "bottom" : !1 }, c.prototype.getPinnedOffset = function () { if (this.pinnedOffset) return this.pinnedOffset; this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(), b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function () { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function () { if (this.$element.is(":visible")) { var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a("body").height(); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return; this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix; a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () { return a.fn.affix = d, this }, a(window).on("load", function () { a('[data-spy="affix"]').each(function () { var c = a(this), d = c.data(); d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery);
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function (a) {
	a.extend(a.fn, {
		validate: function (b) {
			if (!this.length) {
				if (b && b.debug && window.console) {
					console.warn("Nothing selected, can't validate, returning nothing.")
				} return
			} var c = a.data(this[0], "validator");
			if (c) {
				return c
			} this.attr("novalidate", "novalidate");
			c = new a.validator(b, this[0]);
			a.data(this[0], "validator", c);
			if (c.settings.onsubmit) {
				this.validateDelegate(":submit", "click", function (d) {
					if (c.settings.submitHandler) {
					c.submitButton = d.target
					} if (a(d.target).hasClass("cancel")) {
					c.cancelSubmit = true
					} if (a(d.target).attr("formnovalidate") !== undefined) {
					c.cancelSubmit = true
					}
				});
				this.submit(function (d) {
					if (c.settings.debug) {
						d.preventDefault()
					} function e() {
						var f;
						if (c.settings.submitHandler) {
							if (c.submitButton) {
								f = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)
							} c.settings.submitHandler.call(c, c.currentForm, d);
							if (c.submitButton) {
								f.remove()
							} return false
						} return true
					} if (c.cancelSubmit) {
					c.cancelSubmit = false;
						return e()
					} if (c.form()) {
						if (c.pendingRequest) {
						c.formSubmitted = true;
							return false
						} return e()
					} else {
						c.focusInvalid();
						return false
					}
				})
			} return c
		}, valid: function () {
			if (a(this[0]).is("form")) {
				return this.validate().form()
			} else {
				var c = true;
				var b = a(this[0].form).validate();
				this.each(function () {
					c = c && b.element(this)
				});
				return c
			}
		}, removeAttrs: function (d) {
			var b = {}, c = this;
			a.each(d.split(/\s/), function (e, f) {
			b[f] = c.attr(f);
				c.removeAttr(f)
			});
			return b
		}, rules: function (e, b) {
			var g = this[0];
			if (e) {
				var d = a.data(g.form, "validator").settings;
				var i = d.rules;
				var j = a.validator.staticRules(g);
				switch (e) {
					case "add": a.extend(j, a.validator.normalizeRule(b));
						delete j.messages;
						i[g.name] = j;
						if (b.messages) {
						d.messages[g.name] = a.extend(d.messages[g.name], b.messages)
						} break;
					case "remove": if (!b) {
						delete i[g.name];
						return j
					} var h = {};
						a.each(b.split(/\s/), function (k, l) {
						h[l] = j[l];
							delete j[l]
						});
						return h
				}
			} var f = a.validator.normalizeRules(a.extend({}, a.validator.classRules(g), a.validator.attributeRules(g), a.validator.dataRules(g), a.validator.staticRules(g)), g);
			if (f.required) {
				var c = f.required;
				delete f.required;
				f = a.extend({ required: c }, f)
			} return f
		}
	});
	a.extend(a.expr[":"], {
		blank: function (b) {
			return !a.trim("" + a(b).val())
		}, filled: function (b) {
			return !!a.trim("" + a(b).val())
		}, unchecked: function (b) {
			return !a(b).prop("checked")
		}
	});
	a.validator = function (b, c) {
	this.settings = a.extend(true, {}, a.validator.defaults, b);
		this.currentForm = c;
		this.init()
	};
	a.validator.format = function (b, c) {
		if (arguments.length === 1) {
			return function () {
				var d = a.makeArray(arguments);
				d.unshift(b);
				return a.validator.format.apply(this, d)
			}
		} if (arguments.length > 2 && c.constructor !== Array) {
			c = a.makeArray(arguments).slice(1)
		} if (c.constructor !== Array) {
			c = [c]
		} a.each(c, function (d, e) {
			b = b.replace(new RegExp("\\{" + d + "\\}", "g"), function () {
				return e
			})
		});
		return b
	};
	a.extend(a.validator, {
		defaults: {
			messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: true, errorContainer: a([]), errorLabelContainer: a([]), onsubmit: true, ignore: ":hidden", ignoreTitle: false, onfocusin: function (b, c) {
			this.lastActive = b;
				if (this.settings.focusCleanup && !this.blockFocusCleanup) {
					if (this.settings.unhighlight) {
						this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass)
					} this.addWrapper(this.errorsFor(b)).hide()
				}
			}, onfocusout: function (b, c) {
				if (!this.checkable(b) && (b.name in this.submitted || !this.optional(b))) {
					this.element(b)
				}
			}, onkeyup: function (b, c) {
				if (c.which === 9 && this.elementValue(b) === "") {
					return
				} else {
					if (b.name in this.submitted || b === this.lastElement) {
						this.element(b)
					}
				}
			}, onclick: function (b, c) {
				if (b.name in this.submitted) {
					this.element(b)
				} else {
					if (b.parentNode.name in this.submitted) {
						this.element(b.parentNode)
					}
				}
			}, highlight: function (d, b, c) {
				if (d.type === "radio") {
					this.findByName(d.name).addClass(b).removeClass(c)
				} else {
					a(d).addClass(b).removeClass(c)
				}
			}, unhighlight: function (d, b, c) {
				if (d.type === "radio") {
					this.findByName(d.name).removeClass(b).addClass(c)
				} else {
					a(d).removeClass(b).addClass(c)
				}
			}
		}, setDefaults: function (b) {
			a.extend(a.validator.defaults, b)
		}, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: false, prototype: {
			init: function () {
			this.labelContainer = a(this.settings.errorLabelContainer);
				this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
				this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
				this.submitted = {};
				this.valueCache = {};
				this.pendingRequest = 0;
				this.pending = {};
				this.invalid = {};
				this.reset();
				var b = (this.groups = {});
				a.each(this.settings.groups, function (e, f) {
					if (typeof f === "string") {
						f = f.split(/\s/)
					} a.each(f, function (h, g) {
					b[g] = e
					})
				});
				var d = this.settings.rules;
				a.each(d, function (e, f) {
				d[e] = a.validator.normalizeRule(f)
				});
				function c(g) {
					var f = a.data(this[0].form, "validator"), e = "on" + g.type.replace(/^validate/, "");
					if (f.settings[e]) {
					f.settings[e].call(f, this[0], g)
					}
				} a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", c).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", c);
				if (this.settings.invalidHandler) {
					a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
				}
			}, form: function () {
				this.checkForm();
				a.extend(this.submitted, this.errorMap);
				this.invalid = a.extend({}, this.errorMap);
				if (!this.valid()) {
					a(this.currentForm).triggerHandler("invalid-form", [this])
				} this.showErrors();
				return this.valid()
			}, checkForm: function () {
				this.prepareForm();
				for (var b = 0, c = (this.currentElements = this.elements());
					c[b];
					b++) {
						this.check(c[b])
				} return this.valid()
			}, element: function (c) {
				c = this.validationTargetFor(this.clean(c));
				this.lastElement = c;
				this.prepareElement(c);
				this.currentElements = a(c);
				var b = this.check(c) !== false;
				if (b) {
					delete this.invalid[c.name]
				} else {
				this.invalid[c.name] = true
				} if (!this.numberOfInvalids()) {
				this.toHide = this.toHide.add(this.containers)
				} this.showErrors();
				return b
			}, showErrors: function (c) {
				if (c) {
					a.extend(this.errorMap, c);
					this.errorList = [];
					for (var b in c) {
						this.errorList.push({ message: c[b], element: this.findByName(b)[0] })
					} this.successList = a.grep(this.successList, function (d) {
						return !(d.name in c)
					})
				} if (this.settings.showErrors) {
					this.settings.showErrors.call(this, this.errorMap, this.errorList)
				} else {
					this.defaultShowErrors()
				}
			}, resetForm: function () {
				if (a.fn.resetForm) {
					a(this.currentForm).resetForm()
				} this.submitted = {};
				this.lastElement = null;
				this.prepareForm();
				this.hideErrors();
				this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			}, numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			}, objectLength: function (d) {
				var c = 0;
				for (var b in d) {
					c++
				} return c
			}, hideErrors: function () {
				this.addWrapper(this.toHide).hide()
			}, valid: function () {
				return this.size() === 0
			}, size: function () {
				return this.errorList.length
			}, focusInvalid: function () {
				if (this.settings.focusInvalid) {
					try {
						a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
					} catch (b) { }
				}
			}, findLastActive: function () {
				var b = this.lastActive;
				return b && a.grep(this.errorList, function (c) {
					return c.element.name === b.name
				}).length === 1 && b
			}, elements: function () {
				var c = this, b = {};
				return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
					if (!this.name && c.settings.debug && window.console) {
						console.error("%o has no name assigned", this)
					} if (this.name in b || !c.objectLength(a(this).rules())) {
						return false
					} b[this.name] = true;
					return true
				})
			}, clean: function (b) {
				return a(b)[0]
			}, errors: function () {
				var b = this.settings.errorClass.replace(" ", ".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			}, reset: function () {
			this.successList = [];
				this.errorList = [];
				this.errorMap = {};
				this.toShow = a([]);
				this.toHide = a([]);
				this.currentElements = a([])
			}, prepareForm: function () {
				this.reset();
				this.toHide = this.errors().add(this.containers)
			}, prepareElement: function (b) {
				this.reset();
				this.toHide = this.errorsFor(b)
			}, elementValue: function (b) {
				var c = a(b).attr("type"), d = a(b).val();
				if (c === "radio" || c === "checkbox") {
					return a("input[name='" + a(b).attr("name") + "']:checked").val()
				} if (typeof d === "string") {
					return d.replace(/\r/g, "")
				} return d
			}, check: function (c) {
				c = this.validationTargetFor(this.clean(c));
				var i = a(c).rules();
				var d = false;
				var h = this.elementValue(c);
				var b;
				for (var j in i) {
					var g = { method: j, parameters: i[j] };
					try {
						b = a.validator.methods[j].call(this, h, c, g.parameters);
						if (b === "dependency-mismatch") {
							d = true;
							continue
						} d = false;
						if (b === "pending") {
						this.toHide = this.toHide.not(this.errorsFor(c));
							return
						} if (!b) {
							this.formatAndAdd(c, g);
							return false
						}
					} catch (f) {
						if (this.settings.debug && window.console) {
							console.log("Exception occurred when checking element " + c.id + ", check the '" + g.method + "' method.", f)
						} throw f
					}
				} if (d) {
					return
				} if (this.objectLength(i)) {
					this.successList.push(c)
				} return true
			}, customDataMessage: function (b, c) {
				return a(b).data("msg-" + c.toLowerCase()) || (b.attributes && a(b).attr("data-msg-" + c.toLowerCase()))
			}, customMessage: function (c, d) {
				var b = this.settings.messages[c];
				return b && (b.constructor === String ? b : b[d])
			}, findDefined: function () {
				for (var b = 0;
					b < arguments.length;
					b++) {
						if (arguments[b] !== undefined) {
							return arguments[b]
						}
				} return undefined
			}, defaultMessage: function (b, c) {
				return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || undefined, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
			}, formatAndAdd: function (c, e) {
				var d = this.defaultMessage(c, e.method), b = /\$?\{(\d+)\}/g;
				if (typeof d === "function") {
					d = d.call(this, e.parameters, c)
				} else {
					if (b.test(d)) {
						d = a.validator.format(d.replace(b, "{$1}"), e.parameters)
					}
				} this.errorList.push({ message: d, element: c });
				this.errorMap[c.name] = d;
				this.submitted[c.name] = d
			}, addWrapper: function (b) {
				if (this.settings.wrapper) {
					b = b.add(b.parent(this.settings.wrapper))
				} return b
			}, defaultShowErrors: function () {
				var c, d;
				for (c = 0;
					this.errorList[c];
					c++) {
						var b = this.errorList[c];
					if (this.settings.highlight) {
						this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass)
					} this.showLabel(b.element, b.message)
				} if (this.errorList.length) {
				this.toShow = this.toShow.add(this.containers)
				} if (this.settings.success) {
					for (c = 0;
						this.successList[c];
						c++) {
							this.showLabel(this.successList[c])
					}
				} if (this.settings.unhighlight) {
					for (c = 0, d = this.validElements();
						d[c];
						c++) {
							this.settings.unhighlight.call(this, d[c], this.settings.errorClass, this.settings.validClass)
					}
				} this.toHide = this.toHide.not(this.toShow);
				this.hideErrors();
				this.addWrapper(this.toShow).show()
			}, validElements: function () {
				return this.currentElements.not(this.invalidElements())
			}, invalidElements: function () {
				return a(this.errorList).map(function () {
					return this.element
				})
			}, showLabel: function (c, d) {
				var b = this.errorsFor(c);
				if (b.length) {
					b.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
					b.html(d)
				} else {
					b = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(c)).addClass(this.settings.errorClass).html(d || "");
					if (this.settings.wrapper) {
						b = b.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
					} if (!this.labelContainer.append(b).length) {
						if (this.settings.errorPlacement) {
							this.settings.errorPlacement(b, a(c))
						} else {
							b.insertAfter(c)
						}
					}
				} if (!d && this.settings.success) {
					b.text("");
					if (typeof this.settings.success === "string") {
						b.addClass(this.settings.success)
					} else {
						this.settings.success(b, c)
					}
				} this.toShow = this.toShow.add(b)
			}, errorsFor: function (c) {
				var b = this.idOrName(c);
				return this.errors().filter(function () {
					return a(this).attr("for") === b
				})
			}, idOrName: function (b) {
				return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
			}, validationTargetFor: function (b) {
				if (this.checkable(b)) {
					b = this.findByName(b.name).not(this.settings.ignore)[0]
				} return b
			}, checkable: function (b) {
				return (/radio|checkbox/i).test(b.type)
			}, findByName: function (b) {
				return a(this.currentForm).find("[name='" + b + "']")
			}, getLength: function (c, b) {
				switch (b.nodeName.toLowerCase()) {
					case "select": return a("option:selected", b).length;
					case "input": if (this.checkable(b)) {
						return this.findByName(b.name).filter(":checked").length
					}
				}return c.length
			}, depend: function (c, b) {
				return this.dependTypes[typeof c] ? this.dependTypes[typeof c](c, b) : true
			}, dependTypes: {
				"boolean": function (c, b) {
					return c
				}, string: function (c, b) {
					return !!a(c, b.form).length
				}, "function": function (c, b) {
					return c(b)
				}
			}, optional: function (b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			}, startRequest: function (b) {
				if (!this.pending[b.name]) {
				this.pendingRequest++;
					this.pending[b.name] = true
				}
			}, stopRequest: function (b, c) {
			this.pendingRequest--;
				if (this.pendingRequest < 0) {
				this.pendingRequest = 0
				} delete this.pending[b.name];
				if (c && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
					a(this.currentForm).submit();
					this.formSubmitted = false
				} else {
					if (!c && this.pendingRequest === 0 && this.formSubmitted) {
						a(this.currentForm).triggerHandler("invalid-form", [this]);
						this.formSubmitted = false
					}
				}
			}, previousValue: function (b) {
				return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: true, message: this.defaultMessage(b, "remote") })
			}
		}, classRuleSettings: { required: { required: true }, email: { email: true }, url: { url: true }, date: { date: true }, dateISO: { dateISO: true }, number: { number: true }, digits: { digits: true }, creditcard: { creditcard: true } }, addClassRules: function (b, c) {
			if (b.constructor === String) {
			this.classRuleSettings[b] = c
			} else {
				a.extend(this.classRuleSettings, b)
			}
		}, classRules: function (c) {
			var d = {};
			var b = a(c).attr("class");
			if (b) {
				a.each(b.split(" "), function () {
					if (this in a.validator.classRuleSettings) {
						a.extend(d, a.validator.classRuleSettings[this])
					}
				})
			} return d
		}, attributeRules: function (c) {
			var f = {};
			var b = a(c);
			var d = b[0].getAttribute("type");
			for (var g in a.validator.methods) {
				var e;
				if (g === "required") {
					e = b.get(0).getAttribute(g);
					if (e === "") {
						e = true
					} e = !!e
				} else {
					e = b.attr(g)
				} if (/min|max/.test(g) && (d === null || /number|range|text/.test(d))) {
					e = Number(e)
				} if (e) {
				f[g] = e
				} else {
					if (d === g && d !== "range") {
					f[g] = true
					}
				}
			} if (f.maxlength && /-1|2147483647|524288/.test(f.maxlength)) {
				delete f.maxlength
			} return f
		}, dataRules: function (c) {
			var f, d, e = {}, b = a(c);
			for (f in a.validator.methods) {
				d = b.data("rule-" + f.toLowerCase());
				if (d !== undefined) {
				e[f] = d
				}
			} return e
		}, staticRules: function (c) {
			var d = {};
			var b = a.data(c.form, "validator");
			if (b.settings.rules) {
				d = a.validator.normalizeRule(b.settings.rules[c.name]) || {}
			} return d
		}, normalizeRules: function (c, b) {
			a.each(c, function (f, e) {
				if (e === false) {
					delete c[f];
					return
				} if (e.param || e.depends) {
					var d = true;
					switch (typeof e.depends) {
						case "string": d = !!a(e.depends, b.form).length;
							break;
						case "function": d = e.depends.call(b, b);
							break
					}if (d) {
					c[f] = e.param !== undefined ? e.param : true
					} else {
						delete c[f]
					}
				}
			});
			a.each(c, function (d, e) {
			c[d] = a.isFunction(e) ? e(b) : e
			});
			a.each(["minlength", "maxlength"], function () {
				if (c[this]) {
				c[this] = Number(c[this])
				}
			});
			a.each(["rangelength", "range"], function () {
				var d;
				if (c[this]) {
					if (a.isArray(c[this])) {
					c[this] = [Number(c[this][0]), Number(c[this][1])]
					} else {
						if (typeof c[this] === "string") {
							d = c[this].split(/[\s,]+/);
							c[this] = [Number(d[0]), Number(d[1])]
						}
					}
				}
			});
			if (a.validator.autoCreateRanges) {
				if (c.min && c.max) {
				c.range = [c.min, c.max];
					delete c.min;
					delete c.max
				} if (c.minlength && c.maxlength) {
				c.rangelength = [c.minlength, c.maxlength];
					delete c.minlength;
					delete c.maxlength
				}
			} return c
		}, normalizeRule: function (c) {
			if (typeof c === "string") {
				var b = {};
				a.each(c.split(/\s/), function () {
				b[this] = true
				});
				c = b
			} return c
		}, addMethod: function (b, d, c) {
			a.validator.methods[b] = d;
			a.validator.messages[b] = c !== undefined ? c : a.validator.messages[b];
			if (d.length < 3) {
				a.validator.addClassRules(b, a.validator.normalizeRule(b))
			}
		}, methods: {
			required: function (c, b, e) {
				if (!this.depend(e, b)) {
					return "dependency-mismatch"
				} if (b.nodeName.toLowerCase() === "select") {
					var d = a(b).val();
					return d && d.length > 0
				} if (this.checkable(b)) {
					return this.getLength(c, b) > 0
				} return a.trim(c).length > 0
			}, email: function (c, b) {
				return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(c)
			}, url: function (c, b) {
				return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)
			}, date: function (c, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(c).toString())
			}, dateISO: function (c, b) {
				return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(c)
			}, number: function (c, b) {
				return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(c)
			}, digits: function (c, b) {
				return this.optional(b) || /^\d+$/.test(c)
			}, creditcard: function (f, c) {
				if (this.optional(c)) {
					return "dependency-mismatch"
				} if (/[^0-9 \-]+/.test(f)) {
					return false
				} var g = 0, e = 0, b = false;
				f = f.replace(/\D/g, "");
				for (var h = f.length - 1;
					h >= 0;
					h--) {
						var d = f.charAt(h);
					e = parseInt(d, 10);
					if (b) {
						if ((e *= 2) > 9) {
							e -= 9
						}
					} g += e;
					b = !b
				} return (g % 10) === 0
			}, minlength: function (d, b, e) {
				var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
				return this.optional(b) || c >= e
			}, maxlength: function (d, b, e) {
				var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
				return this.optional(b) || c <= e
			}, rangelength: function (d, b, e) {
				var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
				return this.optional(b) || (c >= e[0] && c <= e[1])
			}, min: function (c, b, d) {
				return this.optional(b) || c >= d
			}, max: function (c, b, d) {
				return this.optional(b) || c <= d
			}, range: function (c, b, d) {
				return this.optional(b) || (c >= d[0] && c <= d[1])
			}, equalTo: function (c, b, e) {
				var d = a(e);
				if (this.settings.onfocusout) {
					d.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
						a(b).valid()
					})
				} return c === d.val()
			}, remote: function (f, c, g) {
				if (this.optional(c)) {
					return "dependency-mismatch"
				} var d = this.previousValue(c);
				if (!this.settings.messages[c.name]) {
					this.settings.messages[c.name] = {}
				} d.originalMessage = this.settings.messages[c.name].remote;
				this.settings.messages[c.name].remote = d.message;
				g = typeof g === "string" && { url: g } || g;
				if (d.old === f) {
					return d.valid
				} d.old = f;
				var b = this;
				this.startRequest(c);
				var e = {};
				e[c.name] = f;
				a.ajax(a.extend(true, {
					url: g, mode: "abort", port: "validate" + c.name, dataType: "json", data: e, success: function (i) {
						b.settings.messages[c.name].remote = d.originalMessage;
						var k = i === true || i === "true";
						if (k) {
							var h = b.formSubmitted;
							b.prepareElement(c);
							b.formSubmitted = h;
							b.successList.push(c);
							delete b.invalid[c.name];
							b.showErrors()
						} else {
							var l = {};
							var j = i || b.defaultMessage(c, "remote");
							l[c.name] = d.message = a.isFunction(j) ? j(f) : j;
							b.invalid[c.name] = true;
							b.showErrors(l)
						} d.valid = k;
						b.stopRequest(c, k)
					}
				}, g));
				return "pending"
			}
		}
	});
	a.format = a.validator.format
}(jQuery));
(function (c) {
	var a = {};
	if (c.ajaxPrefilter) {
		c.ajaxPrefilter(function (f, e, g) {
			var d = f.port;
			if (f.mode === "abort") {
				if (a[d]) {
					a[d].abort()
				} a[d] = g
			}
		})
	} else {
		var b = c.ajax;
		c.ajax = function (e) {
			var f = ("mode" in e ? e : c.ajaxSettings).mode, d = ("port" in e ? e : c.ajaxSettings).port;
			if (f === "abort") {
				if (a[d]) {
					a[d].abort()
				} a[d] = b.apply(this, arguments);
				return a[d]
			} return b.apply(this, arguments)
		}
	}
}(jQuery));
(function (a) {
	a.extend(a.fn, {
		validateDelegate: function (d, c, b) {
			return this.bind(c, function (e) {
				var f = a(e.target);
				if (f.is(d)) {
					return b.apply(f, arguments)
				}
			})
		}
	})
}(jQuery));
/*! http://mths.be/placeholder v2.0.8 by @mathias */
(function (i, k, f) {
	var b = Object.prototype.toString.call(i.operamini) == "[object OperaMini]";
	var a = "placeholder" in k.createElement("input") && !b;
	var g = "placeholder" in k.createElement("textarea") && !b;
	var l = f.fn;
	var e = f.valHooks;
	var c = f.propHooks;
	var n;
	var m;
	if (a && g) {
		m = l.placeholder = function () {
			return this
		};
		m.input = m.textarea = true
	} else {
		m = l.placeholder = function () {
			var p = this;
			p.filter((a ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({ "focus.placeholder": d, "blur.placeholder": h }).data("placeholder-enabled", true).trigger("blur.placeholder");
			return p
		};
		m.input = a;
		m.textarea = g;
		n = {
			get: function (q) {
				var p = f(q);
				var r = p.data("placeholder-password");
				if (r) {
					return r[0].value
				} return p.data("placeholder-enabled") && p.hasClass("placeholder") ? "" : q.value
			}, set: function (q, s) {
				var p = f(q);
				var r = p.data("placeholder-password");
				if (r) {
					return r[0].value = s
				} if (!p.data("placeholder-enabled")) {
					return q.value = s
				} if (s == "") {
				q.value = s;
					if (q != o()) {
						h.call(q)
					}
				} else {
					if (p.hasClass("placeholder")) {
						d.call(q, true, s) || (q.value = s)
					} else {
					q.value = s
					}
				} return p
			}
		};
		if (!a) {
		e.input = n;
			c.value = n
		} if (!g) {
		e.textarea = n;
			c.value = n
		} f(function () {
			f(k).delegate("form", "submit.placeholder", function () {
				var p = f(".placeholder", this).each(d);
				setTimeout(function () {
					p.each(h)
				}, 10)
			})
		});
		f(i).bind("beforeunload.placeholder", function () {
			f(".placeholder").each(function () {
			this.value = ""
			})
		})
	} function j(q) {
		var p = {};
		var r = /^jQuery\d+$/;
		f.each(q.attributes, function (t, s) {
			if (s.specified && !r.test(s.name)) {
			p[s.name] = s.value
			}
		});
		return p
	} function d(q, r) {
		var p = this;
		var s = f(p);
		if (p.value == s.attr("placeholder") && s.hasClass("placeholder")) {
			if (s.data("placeholder-password")) {
				s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
				if (q === true) {
					return s[0].value = r
				} s.focus()
			} else {
			p.value = "";
				s.removeClass("placeholder");
				p == o() && p.select()
			}
		}
	} function h() {
		var t;
		var p = this;
		var s = f(p);
		var r = this.id;
		if (p.value == "") {
			if (p.type == "password") {
				if (!s.data("placeholder-textinput")) {
					try {
						t = s.clone().attr({ type: "text" })
					} catch (q) {
						t = f("<input>").attr(f.extend(j(this), { type: "text" }))
					} t.removeAttr("name").data({ "placeholder-password": s, "placeholder-id": r }).bind("focus.placeholder", d);
					s.data({ "placeholder-textinput": t, "placeholder-id": r }).before(t)
				} s = s.removeAttr("id").hide().prev().attr("id", r).show()
			} s.addClass("placeholder");
			s[0].value = s.attr("placeholder")
		} else {
			s.removeClass("placeholder")
		}
	} function o() {
		try {
			return k.activeElement
		} catch (p) { }
	}
}(this, document, jQuery));
(function (a) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], a)
	} else {
		a(jQuery)
	}
}(function (e) {
	var h = [], f = e(document), c = navigator.userAgent.toLowerCase(), g = e(window), a = [];
	var b = { ieQuirks: null, msie: /msie/.test(c) && !/opera/.test(c), opera: /opera/.test(c) };
	b.ie6 = b.msie && /msie 6./.test(c) && typeof window.XMLHttpRequest !== "object";
	b.ie7 = b.msie && /msie 7.0/.test(c);
	b.boxModel = (document.compatMode === "CSS1Compat");
	e.modal = function (i, d) {
		return e.modal.impl.init(i, d)
	};
	e.modal.close = function () {
		e.modal.impl.close()
	};
	e.modal.focus = function (d) {
		e.modal.impl.focus(d)
	};
	e.modal.setContainerDimensions = function () {
		e.modal.impl.setContainerDimensions()
	};
	e.modal.setPosition = function () {
		e.modal.impl.setPosition()
	};
	e.modal.update = function (d, i) {
		e.modal.impl.update(d, i)
	};
	e.fn.modal = function (d) {
		return e.modal.impl.init(this, d)
	};
	e.modal.defaults = { appendTo: "body", focus: true, opacity: 50, overlayId: "simplemodal-overlay", overlayCss: {}, containerId: "simplemodal-container", containerCss: {}, dataId: "simplemodal-data", dataCss: {}, minHeight: null, minWidth: null, maxHeight: null, maxWidth: null, autoResize: false, autoPosition: true, zIndex: 1000, close: true, closeHTML: '<a class="modalCloseImg" title="Close"></a>', closeClass: "simplemodal-close", escClose: true, overlayClose: false, fixed: true, position: null, persist: false, modal: true, onOpen: null, onShow: null, onClose: null };
	e.modal.impl = {
		d: {}, init: function (j, d) {
			var i = this;
			if (i.d.data) {
				return false
			} b.ieQuirks = b.msie && !b.boxModel;
			i.o = e.extend({}, e.modal.defaults, d);
			i.zIndex = i.o.zIndex;
			i.occb = false;
			if (typeof j === "object") {
				j = j instanceof e ? j : e(j);
				i.d.placeholder = false;
				if (j.parent().parent().size() > 0) {
					j.before(e("<span></span>").attr("id", "simplemodal-placeholder").css({ display: "none" }));
					i.d.placeholder = true;
					i.display = j.css("display");
					if (!i.o.persist) {
						i.d.orig = j.clone(true)
					}
				}
			} else {
				if (typeof j === "string" || typeof j === "number") {
					j = e("<div></div>").html(j)
				} else {
					alert("SimpleModal Error: Unsupported data type: " + typeof j);
					return i
				}
			} i.create(j);
			j = null;
			i.open();
			if (e.isFunction(i.o.onShow)) {
				i.o.onShow.apply(i, [i.d])
			} return i
		}, create: function (i) {
			var d = this;
			d.getDimensions();
			if (d.o.modal && b.ie6) {
				d.d.iframe = e('<iframe src="javascript:false;"></iframe>').css(e.extend(d.o.iframeCss, { display: "none", opacity: 0, position: "fixed", height: a[0], width: a[1], zIndex: d.o.zIndex, top: 0, left: 0 })).appendTo(d.o.appendTo)
			} d.d.overlay = e("<div></div>").attr("id", d.o.overlayId).addClass("simplemodal-overlay").css(e.extend(d.o.overlayCss, { display: "none", opacity: d.o.opacity / 100, height: d.o.modal ? h[0] : 0, width: d.o.modal ? h[1] : 0, position: "fixed", left: 0, top: 0, zIndex: d.o.zIndex + 1 })).appendTo(d.o.appendTo);
			d.d.container = e("<div></div>").attr("id", d.o.containerId).attr("role", "alertdialog").addClass("simplemodal-container").css(e.extend({ position: d.o.fixed ? "fixed" : "absolute" }, d.o.containerCss, { display: "none", zIndex: d.o.zIndex + 2 })).append(d.o.close && d.o.closeHTML ? e(d.o.closeHTML).addClass(d.o.closeClass) : "").appendTo(d.o.appendTo);
			d.d.wrap = e("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({ height: "100%", outline: 0, width: "100%" }).appendTo(d.d.container);
			d.d.data = i.attr("id", i.attr("id") || d.o.dataId).addClass("simplemodal-data").css(e.extend(d.o.dataCss, { display: "none" })).appendTo("body");
			i = null;
			d.setContainerDimensions();
			d.d.data.appendTo(d.d.wrap);
			if (b.ie6 || b.ieQuirks) {
				d.fixIE()
			}
		}, bindEvents: function () {
			var d = this;
			e("." + d.o.closeClass).bind("click.simplemodal", function (i) {
				i.preventDefault();
				d.close()
			});
			if (d.o.modal && d.o.close && d.o.overlayClose) {
				d.d.overlay.bind("click.simplemodal", function (i) {
					i.preventDefault();
					d.close()
				})
			} f.bind("keydown.simplemodal", function (i) {
				if (d.o.modal && i.keyCode === 9) {
					d.watchTab(i)
				} else {
					if ((d.o.close && d.o.escClose) && i.keyCode === 27) {
						i.preventDefault();
						d.close()
					}
				}
			});
			g.bind("resize.simplemodal orientationchange.simplemodal", function () {
				d.getDimensions();
				d.o.autoResize ? d.setContainerDimensions() : d.o.autoPosition && d.setPosition();
				if (b.ie6 || b.ieQuirks) {
					d.fixIE()
				} else {
					if (d.o.modal) {
						d.d.iframe && d.d.iframe.css({ height: a[0], width: a[1] });
						d.d.overlay.css({ height: h[0], width: h[1] })
					}
				}
			})
		}, unbindEvents: function () {
			e("." + this.o.closeClass).unbind("click.simplemodal");
			f.unbind("keydown.simplemodal");
			g.unbind(".simplemodal");
			this.d.overlay.unbind("click.simplemodal")
		}, fixIE: function () {
			var d = this, i = d.o.position;
			e.each([d.d.iframe || null, !d.o.modal ? null : d.d.overlay, d.d.container.css("position") === "fixed" ? d.d.container : null], function (u, m) {
				if (m) {
					var r = "document.body.clientHeight", w = "document.body.clientWidth", y = "document.body.scrollHeight", v = "document.body.scrollLeft", p = "document.body.scrollTop", l = "document.body.scrollWidth", k = "document.documentElement.clientHeight", t = "document.documentElement.clientWidth", q = "document.documentElement.scrollLeft", z = "document.documentElement.scrollTop", A = m[0].style;
					A.position = "absolute";
					if (u < 2) {
						A.removeExpression("height");
						A.removeExpression("width");
						A.setExpression("height", "" + y + " > " + r + " ? " + y + " : " + r + ' + "px"');
						A.setExpression("width", "" + l + " > " + w + " ? " + l + " : " + w + ' + "px"')
					} else {
						var o, j;
						if (i && i.constructor === Array) {
							var x = i[0] ? typeof i[0] === "number" ? i[0].toString() : i[0].replace(/px/, "") : m.css("top").replace(/px/, "");
							o = x.indexOf("%") === -1 ? x + " + (t = " + z + " ? " + z + " : " + p + ') + "px"' : parseInt(x.replace(/%/, "")) + " * ((" + k + " || " + r + ") / 100) + (t = " + z + " ? " + z + " : " + p + ') + "px"';
							if (i[1]) {
								var n = typeof i[1] === "number" ? i[1].toString() : i[1].replace(/px/, "");
								j = n.indexOf("%") === -1 ? n + " + (t = " + q + " ? " + q + " : " + v + ') + "px"' : parseInt(n.replace(/%/, "")) + " * ((" + t + " || " + w + ") / 100) + (t = " + q + " ? " + q + " : " + v + ') + "px"'
							}
						} else {
							o = "(" + k + " || " + r + ") / 2 - (this.offsetHeight / 2) + (t = " + z + " ? " + z + " : " + p + ') + "px"';
							j = "(" + t + " || " + w + ") / 2 - (this.offsetWidth / 2) + (t = " + q + " ? " + q + " : " + v + ') + "px"'
						} A.removeExpression("top");
						A.removeExpression("left");
						A.setExpression("top", o);
						A.setExpression("left", j)
					}
				}
			})
		}, focus: function (k) {
			var i = this, j = k && e.inArray(k, ["first", "last"]) !== -1 ? k : "first";
			var d = e(":input:enabled:visible:" + j, i.d.wrap);
			setTimeout(function () {
			d.length > 0 ? d.focus() : i.d.wrap.focus()
			}, 10)
		}, getDimensions: function () {
			var i = this, d = typeof window.innerHeight === "undefined" ? g.height() : window.innerHeight;
			h = [f.height(), f.width()];
			a = [d, g.width()]
		}, getVal: function (i, j) {
			return i ? (typeof i === "number" ? i : i === "auto" ? 0 : i.indexOf("%") > 0 ? ((parseInt(i.replace(/%/, "")) / 100) * (j === "h" ? a[0] : a[1])) : parseInt(i.replace(/px/, ""))) : null
		}, update: function (d, j) {
			var i = this;
			if (!i.d.data) {
				return false
			} i.d.origHeight = i.getVal(d, "h");
			i.d.origWidth = i.getVal(j, "w");
			i.d.data.hide();
			d && i.d.container.css("height", d);
			j && i.d.container.css("width", j);
			i.setContainerDimensions();
			i.d.data.show();
			i.o.focus && i.focus();
			i.unbindEvents();
			i.bindEvents()
		}, setContainerDimensions: function () {
			var t = this, k = b.ie6 || b.ie7;
			var d = t.d.origHeight ? t.d.origHeight : b.opera ? t.d.container.height() : t.getVal(k ? t.d.container[0].currentStyle.height : t.d.container.css("height"), "h"), j = t.d.origWidth ? t.d.origWidth : b.opera ? t.d.container.width() : t.getVal(k ? t.d.container[0].currentStyle.width : t.d.container.css("width"), "w"), o = t.d.data.outerHeight(true), i = t.d.data.outerWidth(true);
			t.d.origHeight = t.d.origHeight || d;
			t.d.origWidth = t.d.origWidth || j;
			var l = t.o.maxHeight ? t.getVal(t.o.maxHeight, "h") : null, p = t.o.maxWidth ? t.getVal(t.o.maxWidth, "w") : null, n = l && l < a[0] ? l : a[0], r = p && p < a[1] ? p : a[1];
			var m = t.o.minHeight ? t.getVal(t.o.minHeight, "h") : "auto";
			if (!d) {
				if (!o) {
					d = m
				} else {
					if (o > n) {
						d = n
					} else {
						if (t.o.minHeight && m !== "auto" && o < m) {
							d = m
						} else {
							d = o
						}
					}
				}
			} else {
				d = t.o.autoResize && d > n ? n : d < m ? m : d
			} var q = t.o.minWidth ? t.getVal(t.o.minWidth, "w") : "auto";
			if (!j) {
				if (!i) {
					j = q
				} else {
					if (i > r) {
						j = r
					} else {
						if (t.o.minWidth && q !== "auto" && i < q) {
							j = q
						} else {
							j = i
						}
					}
				}
			} else {
				j = t.o.autoResize && j > r ? r : j < q ? q : j
			} t.d.genWidth = j;
			t.d.container.css({ height: d, width: j });
			t.d.wrap.css({ overflow: "visible" });
			t.o.autoPosition && t.setPosition()
		}, setPosition: function () {
			var i = parseInt(e(document.body).outerWidth(true));
			var o = this.d.container.outerWidth(true);
			if (i < 768) {
				o = i * 0.95;
				this.d.container.css({ width: o })
			} else {
				this.d.container.css({ width: this.d.genWidth })
			} var k = this, m, l, n = (a[0] / 2) - (k.d.container.outerHeight(true) / 2), j = (a[1] / 2) - (o / 2), d = k.d.container.css("position") !== "fixed" ? g.scrollTop() : 0;
			if (k.o.position && Object.prototype.toString.call(k.o.position) === "[object Array]") {
				m = d + (k.o.position[0] || n);
				l = k.o.position[1] || j
			} else {
				m = d + n;
				l = j
			} k.d.container.css({ left: l, top: m })
		}, watchTab: function (i) {
			var d = this;
			if (e(i.target).parents(".simplemodal-container").length > 0) {
			d.inputs = e(":input:enabled:visible:first, :input:enabled:visible:last", d.d.data[0]);
				if ((!i.shiftKey && i.target === d.inputs[d.inputs.length - 1]) || (i.shiftKey && i.target === d.inputs[0]) || d.inputs.length === 0) {
					i.preventDefault();
					var j = i.shiftKey ? "last" : "first";
					d.focus(j)
				}
			} else {
				i.preventDefault();
				d.focus()
			}
		}, open: function () {
			var d = this;
			d.d.iframe && d.d.iframe.show();
			if (e.isFunction(d.o.onOpen)) {
				d.o.onOpen.apply(d, [d.d])
			} else {
				d.d.overlay.show();
				d.d.container.show();
				d.d.data.show()
			} d.o.focus && d.focus();
			d.bindEvents()
		}, close: function () {
			var d = this;
			if (!d.d.data) {
				return false
			} d.unbindEvents();
			if (e.isFunction(d.o.onClose) && !d.occb) {
			d.occb = true;
				d.o.onClose.apply(d, [d.d])
			} else {
				if (d.d.placeholder) {
					var i = e("#simplemodal-placeholder");
					if (d.o.persist) {
						i.replaceWith(d.d.data.removeClass("simplemodal-data").css("display", d.display))
					} else {
						d.d.data.hide().remove();
						i.replaceWith(d.d.orig)
					}
				} else {
					d.d.data.hide().remove()
				} d.d.container.hide().remove();
				d.d.overlay.hide();
				d.d.iframe && d.d.iframe.hide().remove();
				d.d.overlay.remove();
				d.d = {}
			}
		}
	}
}));
/*! JsRender v1.0pre: http://github.com/BorisMoore/jsrender */
(function (b, v, m) {
	if (v && v.views || b.jsviews) {
		return
	} var Z = "v1.0pre", G, q, w, s, k = "{", j = "{", f = "}", e = "}", o = "!", O = {}, U = false, C = true, y = /^(?:null|true|false|\d[\d.]*|([\w$]+|~([\w$]+)|#(view|([\w$]+))?)([\w$.]*?)(?:[.[]([\w$]+)\]?)?|(['"]).*\8)$/g, Q = /(\()(?=|\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*([)\]])([([]?))|(\s+)/g, M = /\r?\n/g, d = /\\(['"])/g, Y = /\\?(['"])/g, l = /\x08(~)?([^\x08]+)\x08/g, aa = 0, R = { "&": "&amp;", "<": "&lt;", ">": "&gt;" }, N = "data-jsv-tmpl", V = "var j=j||" + (v ? "jQuery." : "js") + "views,", x = /[\x00"&'<>]/g, p = Array.prototype.slice, J = {}, H = {
		jsviews: Z, sub: O, debugMode: C, render: J, templates: E, tags: F, helpers: X, converters: a, delimiters: t, View: W, _convert: L, _err: function (ab) {
			return H.debugMode ? ("Error: " + (ab.message || ab)) + ". " : ""
		}, _tmplFn: A, _tag: c, error: D, Error: B
	};
	function B(ab) {
	this.name = "JsRender Error", this.message = ab || "JsRender error"
	} (B.prototype = new Error()).constructor = B;
	function t(ab, ac, ad) {
		if (!H.rTag || arguments.length) {
			k = ab ? "\\" + ab.charAt(0) : k;
			j = ab ? "\\" + ab.charAt(1) : j;
			f = ac ? "\\" + ac.charAt(0) : f;
			e = ac ? "\\" + ac.charAt(0) : e;
			ad = ad ? "\\" + ad : o;
			H.rTag = q = "(\\w*" + ad + ")?(?:(?:(\\w+(?=[\\/\\s" + f + "]))|(?:(\\w+)?(:)|(>)|(\\*)))\\s*((?:[^" + f + "]|" + f + "(?!" + e + "))*?)";
			q = new RegExp(k + j + q + "(\\/)?|(?:\\/(\\w+)))" + f + e, "g");
			w = new RegExp("<.*>|([^\\\\]|^)[{}]|" + k + j + ".*" + f + e)
		} return [k, j, f, e, o]
	} function P(ac) {
		var ab = this, ad = ab.tmpl.helpers || {};
		ac = (ab.dynCtx && ab.dynCtx[ac] !== m ? ab.dynCtx : ab.ctx[ac] !== m ? ab.ctx : ad[ac] !== m ? ad : X[ac] !== m ? X : {})[ac];
		return typeof ac !== "function" ? ac : function () {
			return ac.apply(ab, arguments)
		}
	} function L(af, ad, ae, ag) {
		var ac = !ae.markup && ae || m, ab = ad.tmpl.converters;
		ab = ab && ab[af] || a[af];
		return ab ? ab.call(ad, ag, ac) : (D("Unknown converter: {{" + af + ":"), ag)
	} function c(ao, al, am, ag, af) {
		var ah, ad = !am.markup && am, an = ad ? ad.view.tmpl : am, ae = an.tags, ac = an.templates, aj = af.props = af.props || {}, ak = aj.tmpl, ai = arguments.length > 5 ? p.call(arguments, 5) : [], ab = ae && ae[ao] || F[ao];
		if (!ab) {
			D("Unknown tag: {{" + ao + "}}");
			return ""
		} ag = ag && an.tmpls[ag - 1];
		ak = ak || ag || ab.template || m;
		af.view = al;
		ak = af.tmpl = "" + ak === ak ? ac && ac[ak] || E[ak] || E(ak) : ak;
		af.attr = am.attr = am.attr || ab.attr;
		af.tagName = ao;
		af.renderContent = i;
		if (ad) {
		ad.tagCtx = { args: ai, props: aj, path: af.path, tag: ab }
		} if (ab.render) {
			ah = ab.render.apply(af, ai)
		} return ah || (ah == m ? (ak ? af.renderContent(ai[0], m, al) : "") : ah.toString())
	} function W(ab, aj, ai, ac, ae, af, ak, ad) {
		var ag, ah = {
			data: ac, tmpl: ae, views: ad ? [] : {}, parent: ai, ctx: ab, path: aj, _useKey: ad ? 0 : 1, _onRender: ak, _hlp: P, renderLink: function (al) {
				var am = this.tmpl.tmpls[al];
				return am.render(ac, ab, this)
			}
		};
		if (ai) {
			ag = ai.views;
			if (ai._useKey) {
			ag[ah.key = "_" + ai._useKey++] = ah;
				ah.index = ai.index
			} else {
				ag.splice(ah.key = ah.index = af !== m ? af : ag.length, 0, ah)
			}
		} return ah
	} function T(ac, ab, ad, ag, ah) {
		var ae, af;
		if (ad && typeof ad === "object" && !ad.nodeType) {
			for (ae in ad) {
				ab(ae, ad[ae])
			} return ac
		} if (ag === m) {
			ag = ad;
			ad = m
		} if (af = O.onBeforeStoreItem) {
			ah = af(ab, ad, ag, ah) || ah
		} if (!ad) {
			ag = ah ? ah(ag) : ag
		} else {
			if ("" + ad === ad) {
				if (ag === null) {
					delete ab[ad]
				} else {
				ab[ad] = ah ? (ag = ah(ag, ad)) : ag
				}
			}
		} if (af = O.onStoreItem) {
			af(ab, ad, ag, ah)
		} return ag
	} function n(ac, ab) {
		ac = typeof ac === "function" ? { render: ac } : ac;
		ac.name = ab;
		ac.is = "tag";
		return ac
	} function E(ac, ab) {
		return T(this, E, ac, ab, h)
	} function F(ac, ab) {
		return T(this, F, ac, ab, n)
	} function X(ab, ac) {
		return T(this, X, ab, ac)
	} function a(ac, ab) {
		return T(this, a, ac, ab)
	} function i(av, ab, ad, aw, ai, ap, af) {
		var ar, aq, ak, au, an, ag, aj, ac, am, at, ae, ah, ao = this, al = "";
		if (aw === C) {
			am = C;
			aw = 0
		} if (ao.tagName) {
			aj = ao.tmpl;
			if (ab || ao.ctx) {
				at = {};
				if (ao.ctx) {
					s(at, ao.ctx)
				} if (ab) {
					s(at, ab)
				}
			} ab = at;
			ac = ao.props;
			if (ac && ac.link === U) {
				ab = ab || {};
				ab.link = U
			} ad = ad || ao.view;
			ap = ap || ao.path;
			aw = aw || ao.key;
			af = ad && ad._onRender
		} else {
			aj = ao.jquery && (ao[0] || D('Unknown template: "' + ao.selector + '"')) || ao;
			af = af || ad && ad._onRender
		} if (aj) {
			if (ad) {
				ag = ad.ctx;
				ae = ad.dynCtx;
				if (av === ad) {
					av = ad.data;
					ai = C
				}
			} else {
				ag = X
			} ah = (ab && ab !== ag);
			if (ae || ah) {
				ag = s({}, ag);
				if (ah) {
					s(ag, ab)
				} if (ae) {
					s(ag, ae)
				}
			} ab = ag;
			if (!aj.fn) {
				aj = E[aj] || E(aj)
			} if (aj) {
				af = ab.link !== U && af;
				if (G.isArray(av) && !ai) {
					au = am ? ad : (aw !== m && ad) || W(ab, ap, ad, av, aj, aw, af, C);
					for (ar = 0, aq = av.length;
						ar < aq;
						ar++) {
							ak = av[ar];
						an = aj.fn(ak, W(ab, ap, au, ak, aj, (aw || 0) + ar, af), H);
						al += af ? af(an, aj, ac) : an
					}
				} else {
					au = am ? ad : W(ab, ap, ad, av, aj, aw, af);
					au._onRender = af;
					al += aj.fn(av, au, H, r)
				} return af ? af(al, aj, ac, au.key, ap) : al
			}
		} D("No template found");
		return ""
	} function r(ab) {
		return ab
	} function D(ab) {
		if (H.debugMode) {
			throw new H.Error(ab)
		}
	} function K(ab) {
		D("Syntax error\n" + ab)
	} function A(an, ak, ai) {
		var al, ad = ak && ak.allowCode, ac = [], af = 0, aj = [], ah = ac, ag = [, , , ac];
		function ae(ao) {
			ao -= af;
			if (ao) {
				ah.push(an.substr(af, ao).replace(M, "\\n"))
			}
		} function am(ao) {
			ao && K('Unmatched or missing tag: "{{/' + ao + '}}" in template:\n' + an)
		} function ab(aC, ao, ar, at, az, ay, aq, av, aw, ap, aA) {
			if (ay) {
				az = ":";
				at = "html"
			} var aD, ax = "", aB = "", au = !aw && !az && !ai;
			ar = ar || az;
			ae(aA);
			af = aA + aC.length;
			if (aq) {
				if (ad) {
					ah.push(["*", av.replace(d, "$1")])
				}
			} else {
				if (ar) {
					if (ar === "else") {
					ag[5] = an.substring(ag[5], aA);
						ag = aj.pop();
						ah = ag[3];
						au = C
					} else {
						if (ao) {
							aj.push(ag);
							ag = ["!", , , [], , aA];
							ah.push(ag);
							ah = ag[3]
						}
					} av = (av ? u(av, ai, ao).replace(l, function (aE, aF, aG) {
						if (aF) {
							aB += aG + ","
						} else {
							ax += aG + ","
						} return ""
					}) : "");
					ax = ax.slice(0, -1);
					av = av.slice(0, -1);
					al = [ar, at || "", av, au && [], "{" + (ax ? ("props:{" + ax + "},") : "") + "data: data" + (aB ? ",ctx:{" + aB.slice(0, -1) + "}" : "") + "}"];
					ah.push(al);
					if (au) {
						aj.push(ag);
						ag = al;
						ag[5] = af
					} else {
						if (ao) {
						ag[5] = an.substring(ag[5], af);
							ag = aj.pop()
						}
					}
				} else {
					if (ap) {
						aD = ag[0];
						am(ap !== aD && !(ap === "if" && aD === "else") && aD);
						ag[5] = an.substring(ag[5], aA);
						if (aD === "!") {
						ag[5] = an.substring(ag[5], af);
							ag = aj.pop()
						} ag = aj.pop()
					}
				}
			} am(!ag && ap);
			ah = ag[3]
		} an = an.replace(Y, "\\$1");
		am(aj[0] && aj[0][3].pop()[0]);
		an.replace(q, ab);
		ae(an.length);
		return z(ac, ak)
	} function z(ai, al) {
		var an, aq, ao, ac, ay, ab, ad, af, ah, ax, av, au, ae, ag, aw, ap, am, at, ak = al ? { allowCode: aw = al.allowCode, debug: al.debug } : {}, aj = al && al.tmpls;
		ao = ai.length;
		ac = (ao ? "" : '"";');
		for (aq = 0;
			aq < ao;
			aq++) {
				an = ai[aq];
			if ("" + an === an) {
				ac += '"' + an + '"+'
			} else {
				ax = an[0];
				if (ax === "*") {
					ac = ac.slice(0, aq ? -1 : -3) + ";" + an[1] + (aq + 1 < ao ? "ret+=" : "")
				} else {
					av = an[1];
					au = an[2];
					ap = an[3];
					ae = an[4];
					markup = an[5];
					if (ax.slice(-1) === "!") {
						ag = g(markup, ak, al, aj.length);
						z(ap, ag);
						if (am = /\s+[\w-]*\s*\=\s*\\['"]$/.exec(ai[aq - 1])) {
							D("'{{!' in attribute:\n..." + ai[aq - 1] + "{{!...\nUse data-link")
						} ac += "view.renderLink(" + aj.length + ")+";
						ag.bound = C;
						ag.fn.attr = am || "leaf";
						aj.push(ag)
					} else {
						if (ap) {
							ag = g(markup, ak, al, aj.length);
							z(ap, ag);
							aj.push(ag)
						} ah = ah || ae.indexOf("view") > -1;
						ac += (ax === ":" ? (av === "html" ? (ab = C, "h(" + au) : av ? (af = C, 'c("' + av + '",view,this,' + au) : (ad = C, "((v=" + au + ')!=u?v:""')) : (ay = C, 't("' + ax + '",view,this,' + (ap ? aj.length : '""') + "," + ae + (au ? "," : "") + au)) + ")+"
					}
				}
			}
		} ac = V + (ad ? "v," : "") + (ay ? "t=j._tag," : "") + (af ? "c=j._convert," : "") + (ab ? "h=j.converters.html," : "") + "ret; try{\n\n" + (ak.debug ? "debugger;" : "") + (aw ? "ret=" : "return ") + ac.slice(0, -1) + ";\n\n" + (aw ? "return ret;" : "") + "}catch(e){return j._err(e);}";
		try {
			ac = new Function("data, view, j, b, u", ac)
		} catch (ar) {
			K("Compiled template code:\n\n" + ac, ar)
		} if (al) {
		al.fn = ac
		} return ac
	} function u(af, ai, ab) {
		var ag, ac = {}, ad = 0, ae = U, ah = U;
		function aj(al, aB, an, at, aq, ao, aC, ak, ar, aA, az, av, ay, ap, am, ax) {
			aq = aq || "";
			an = an || aB || az;
			at = at || ak;
			ar = ar || am || "";
			aq = aq || "";
			var aw = (ai || ab) && ar !== "(";
			function au(aL, aE, aD, aK, aI, aF, aG) {
				if (aE) {
					var aJ, aH = (aD ? 'view._hlp("' + aD + '")' : aK ? "view" : "data") + (aG ? (aI ? "." + aI : aD ? "" : (aK ? "" : "." + aE)) + (aF || "") : (aG = aD ? "" : aK ? aI || "" : aE, ""));
					aJ = (aG ? "." + aG : "");
					if (!aw) {
						aH = aH + aJ
					} aH = aH.slice(0, 9) === "view.data" ? aH.slice(5) : aH;
					if (aw) {
						aH = "b(" + aH + ',"' + aG + '")' + aJ
					} return aH
				} return aL
			} if (ao) {
				K(af)
			} else {
				return (ah ? (ah = !av, (ah ? al : '"')) : ae ? (ae = !ay, (ae ? al : '"')) : ((an ? (ad++ , an) : "") + (ax ? (ad ? "" : ag ? (ag = U, "\b") : ",") : aC ? (ad && K(af), ag = C, "\b" + at + ":") : at ? (at.replace(y, au) + (ar ? (ac[++ad] = C, ar) : aq)) : aq ? aq : ap ? ((ac[ad--] = U, ap) + (ar ? (ac[++ad] = C, ar) : "")) : aA ? (ac[ad] || K(af), ",") : aB ? "" : (ah = av, ae = ay, '"'))))
			}
		} af = (af + " ").replace(Q, aj);
		return af
	} function S(ab, af, ac) {
		var ad, ae;
		if (ab) {
			for (ad in ab) {
				ae = ab[ad];
				if (!ae.is) {
				ab[ad] = af(ae, ad, ac)
				}
			}
		}
	} function h(ab, ad, ae, ac) {
		var ag, af;
		function ah(ai) {
			if (("" + ai === ai) || ai.nodeType > 0) {
				try {
					af = ai.nodeType > 0 ? ai : !w.test(ai) && v && v(ai)[0]
				} catch (aj) { } if (af) {
					ai = E[af.getAttribute(N)];
					if (!ai) {
						ad = ad || "_" + aa++;
						af.setAttribute(N, ad);
						ai = h(af.innerHTML, ad, ae, ac);
						E[ad] = ai
					}
				} return ai
			}
		} ab = ab || "";
		ag = ah(ab);
		ac = ac || (ab.markup ? ab : {});
		ac.name = ad;
		ac.is = "tmpl";
		if (!ag && ab.markup && (ag = ah(ab.markup))) {
			if (ag.fn && (ag.debug !== ab.debug || ag.allowCode !== ab.allowCode)) {
				ag = ag.markup
			}
		} if (ag !== m) {
			if (ad && !ae) {
			J[ad] = function () {
				return ab.render.apply(ab, arguments)
			}
			} if (ag.fn || ab.fn) {
				if (ag.fn) {
					if (ad && ad !== ag.name) {
						ab = s(s({}, ag), ac)
					} else {
						ab = ag
					}
				}
			} else {
				ab = g(ag, ac, ae, 0);
				A(ag, ab)
			} S(ac.templates, h, ab);
			S(ac.tags, n);
			return ab
		}
	} function g(ac, ad, af, ae) {
		function ag(ah) {
			if (af[ah]) {
			ab[ah] = s(s({}, af[ah]), ad[ah])
			}
		} ad = ad || {};
		var ab = { markup: ac, tmpls: [], links: [], render: i };
		if (af) {
			if (af.templates) {
			ab.templates = s(s({}, af.templates), ad.templates)
			} ab.parent = af;
			ab.name = af.name + "[" + ae + "]";
			ab.key = ae
		} s(ab, ad);
		if (af) {
			ag("templates");
			ag("tags");
			ag("helpers");
			ag("converters")
		} return ab
	} if (v) {
		G = v;
		G.templates = E;
		G.render = J;
		G.views = H;
		G.fn.render = i
	} else {
		G = b.jsviews = H;
		G.extend = function (ad, ac) {
			var ab;
			ad = ad || {};
			for (ab in ac) {
			ad[ab] = ac[ab]
			} return ad
		};
		G.isArray = Array && Array.isArray || function (ab) {
			return Object.prototype.toString.call(ab) === "[object Array]"
		}
	} s = G.extend;
	function I(ab) {
		return R[ab] || (R[ab] = "&#" + ab.charCodeAt(0) + ";")
	} F({
		"if": function () {
			var ac = this, ab = ac.view;
			ab.onElse = function (ag, ae) {
				var af = 0, ad = ae.length;
				while (ad && !ae[af++]) {
					if (af === ad) {
						return ""
					}
				} ab.onElse = m;
				ag.path = "";
				return ag.renderContent(ab)
			};
			return ab.onElse(this, arguments)
		}, "else": function () {
			var ab = this.view;
			return ab.onElse ? ab.onElse(this, arguments) : ""
		}, "for": function () {
			var af, ad = this, ab = "", ae = arguments, ac = ae.length;
			if (ac === 0) {
				ac = 1
			} for (af = 0;
				af < ac;
				af++) {
					ab += ad.renderContent(ae[af])
			} return ab
		}, "*": function (ab) {
			return ab
		}
	});
	a({
		html: function (ab) {
			return ab != m ? String(ab).replace(x, I) : ""
		}
	});
	t()
})(this, this.jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad", swing: function (e, f, a, h, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
	}, easeInQuad: function (e, f, a, h, g) {
		return h * (f /= g) * f + a
	}, easeOutQuad: function (e, f, a, h, g) {
		return -h * (f /= g) * (f - 2) + a
	}, easeInOutQuad: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f + a
		} return -h / 2 * ((--f) * (f - 2) - 1) + a
	}, easeInCubic: function (e, f, a, h, g) {
		return h * (f /= g) * f * f + a
	}, easeOutCubic: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f + 1) + a
	}, easeInOutCubic: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f + a
		} return h / 2 * ((f -= 2) * f * f + 2) + a
	}, easeInQuart: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f + a
	}, easeOutQuart: function (e, f, a, h, g) {
		return -h * ((f = f / g - 1) * f * f * f - 1) + a
	}, easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f + a
		} return -h / 2 * ((f -= 2) * f * f * f - 2) + a
	}, easeInQuint: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f * f + a
	}, easeOutQuint: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f * f * f + 1) + a
	}, easeInOutQuint: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f * f + a
		} return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
	}, easeInSine: function (e, f, a, h, g) {
		return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
	}, easeOutSine: function (e, f, a, h, g) {
		return h * Math.sin(f / g * (Math.PI / 2)) + a
	}, easeInOutSine: function (e, f, a, h, g) {
		return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
	}, easeInExpo: function (e, f, a, h, g) {
		return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
	}, easeOutExpo: function (e, f, a, h, g) {
		return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
	}, easeInOutExpo: function (e, f, a, h, g) {
		if (f == 0) {
			return a
		} if (f == g) {
			return a + h
		} if ((f /= g / 2) < 1) {
			return h / 2 * Math.pow(2, 10 * (f - 1)) + a
		} return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
	}, easeInCirc: function (e, f, a, h, g) {
		return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
	}, easeOutCirc: function (e, f, a, h, g) {
		return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
	}, easeInOutCirc: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
		} return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
	}, easeInElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		} if ((h /= k) == 1) {
			return e + l
		} if (!j) {
			j = k * 0.3
		} if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		} return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
	}, easeOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		} if ((h /= k) == 1) {
			return e + l
		} if (!j) {
			j = k * 0.3
		} if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		} return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
	}, easeInOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		} if ((h /= k / 2) == 2) {
			return e + l
		} if (!j) {
			j = k * (0.3 * 1.5)
		} if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		} if (h < 1) {
			return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
		} return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
	}, easeInBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		} return i * (f /= h) * f * ((g + 1) * f - g) + a
	}, easeOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		} return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
	}, easeInOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		} if ((f /= h / 2) < 1) {
			return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
		} return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
	}, easeInBounce: function (e, f, a, h, g) {
		return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
	}, easeOutBounce: function (e, f, a, h, g) {
		if ((f /= g) < (1 / 2.75)) {
			return h * (7.5625 * f * f) + a
		} else {
			if (f < (2 / 2.75)) {
				return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
			} else {
				if (f < (2.5 / 2.75)) {
					return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
				} else {
					return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
				}
			}
		}
	}, easeInOutBounce: function (e, f, a, h, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
		} return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
	}
});
(function () {
	var a = {
		type: "POST", contentType: "application/x-www-form-urlencoded; charset=UTF-8", dataType: "json", error: function (v, t, u) {
			if (typeof console !== "undefined") {
				console.debug(u)
			}
		}
	};
	if (typeof (String.prototype.trim) !== "function") {
		String.prototype.trim = function () {
			return $.trim(this)
		}
	} var s = navigator.userAgent.toLowerCase();
	var g = /windows/.test(s);
	var n = /ipad/.test(s);
	var p = !n && /(iphone|ipod)/.test(s);
	var f = !n && !p && /macintosh/.test(s);
	var q = /android/.test(s);
	var h = !q && /linux (i686|x86_64)/.test(s);
	var c = /cros/.test(s);
	var d = /firefox/.test(s);
	var r = /opera|opr\/[\d]+/.test(s);
	var k = !r && /(msie|trident)/.test(s);
	var e = /edge\/(\d+)/.test(s);
	var b = !r && !e && /chrome/.test(s) && /webkit/.test(s);
	var o = !r && !e && !b && /safari/.test(s);
	var j = k && /(msie 8)/.test(s);
	var l = /x64|win64|amd64|x86_64/.test(s);
	var i = $("body").attr("data-cd");
	if (!i) {
		i = ".zoom.us"
	} var m = {
		closeClass: "simplemodal-close", closeHTML: null, minHeight: 171, opacity: 65, close: true, overlayClose: false, escClose: true, persist: false, modal: true, fixed: false, onClose: function (t) {
			t.container.fadeOut("fast", function () {
				t.overlay.fadeOut("fast", function () {
					$.modal.close()
				})
			})
		}
	};
	if (!n) {
		$.extend(m, {
			onOpen: function (t) {
				t.overlay.fadeIn("fast", function () {
					t.container.show();
					t.data.fadeIn("fast")
				})
			}
		})
	} $.extend(SB, {
		isWin: g, isMac: f, isIPad: n, isIPhone: p, isAndroid: q, isLinux: h, isChromeOS: c, isIE: k, isIE8: j, isEdge: e, isFirefox: d, isChrome: b, isOpera: r, isSafari: o, isBrowser64: l, cookieDomain: i, MODAL_DEFAULTS: m, jump: function (t, u) {
			if (u) {
				top.location.href = SB.baseUrl + SB.contextPath + t
			} else {
				window.location.href = SB.baseUrl + SB.contextPath + t
			}
		}, ajax: function (t) {
			return $.ajax($.extend({}, a, t))
		}, postForm: function (w, z, v) {
			var y = "sb_post_form_";
			if (v && v.postActionName) {
				y = y + v.postActionName
			} var t = $("<form>", { id: y, name: y, style: "display:none;", method: "POST", action: w });
			if (z) {
				for (var x in z) {
					t.append($("<input>", { type: "hidden", name: x, value: z[x] }))
				}
			} if (v && v.userIframe === true) {
				var u = "sb_post_iframe_";
				if (v && v.postActionName) {
					u = u + v.postActionName
				} var A = $("<iframe>", { id: u, name: u, style: "display:none;", src: "" });
				t.attr("target", u);
				$(document.body).append(A).append(t)
			} else {
				$(document.body).append(t)
			} t.submit()
		}, clearPostForm: function (t) {
			$("#sb_post_iframe_" + t).remove();
			$("#sb_post_form_" + t).remove()
		}, post: function (v, w, x, u, t) {
			if ($.isFunction(w)) {
				t = u;
				u = x;
				x = w;
				w = {}
			} return SB.ajax({ url: SB.contextPath + v, data: w, success: x, error: u, complete: t })
		}, post3: function (v) {
			var u, w, t = true, y = true, x;
			if (v.errorNode) {
				u = v.errorNode
			} else {
				u = v.error
			} if (v.btnContainer) {
				w = v.btnContainer
			} else {
				w = v.btn
			} if (typeof (v.showBusy) == "boolean") {
				t = v.showBusy
			} if (typeof (v.showBusyAfter) == "boolean") {
				y = v.showBusyAfter
			} if (v.busyNode) {
				x = v.busyNode
			} return SB.post2(v.url, v.data, v.success, u, w, t, y, x, v)
		}, post2: function (t, y, E, B, u, x, C, A, F) {
			var z = SB.getI18nText("Unknown Error!", "common.unknown_error");
			var w = SB.getI18nText("Error", "common.error");
			var v = $(), D;
			if (!$.isFunction(B)) {
				if (B && B.jquery) {
					D = B
				} else {
					D = $("#error_msg")
				} B = function (H, I, G) {
					if (H) {
						if (typeof (I) === "undefined") {
							I = z
						} D.text(I).show();
						if (F.errorCallBack && $.isFunction(F.errorCallBack)) {
							F.errorCallBack(I)
						}
					} else {
						D.empty().hide()
					}
				}
			} if (u) {
				u = $(u);
				if (u.is("a") || u.is("button") || u.is("input") || u.is("li")) {
					v = u
				} else {
					v = u.find("button[type=submit],input[type=submit],.submit")
				}
			} v.disableBtn();
			if (x) {
				if (A) {
					$(A).show()
				} else {
					if (C) {
						v.busy()
					} else {
						v.busyBefore()
					}
				}
			} B(false);
			return SB.ajax({
				url: SB.contextPath + t, data: y, dataType: F.dataType ? F.dataType : "json", headers: F.headers, success: function (G, I, H) {
					if (typeof (G.status) === "boolean") {
						if (G.status) {
							E(G, I, H)
						} else {
							if (G.errorCode === 201) {
								SB.jump("/signin")
							} else {
								B(true, G.errorMessage ? G.errorMessage : z, G.errorCode)
							}
						}
					} else {
						if (G.error) {
							B(true, G.error.message ? G.error.message : z, G.errorCode)
						} else {
							E(G, I, H)
						}
					}
				}, error: function (H, J, I) {
					var G = I.message ? I.message : H ? ((J ? J : w) + ": Http " + H.status + " " + H.statusText) : z;
					B(true, G)
				}, complete: function (G, H) {
					v.enableBtnDelay();
					if (x) {
						if (A) {
							$(A).hide()
						} else {
							if (C) {
								v.removeBusy()
							} else {
								v.removeBusyBefore()
							}
						}
					} if (F.complete && $.isFunction(F.complete)) {
						F.complete(G, H)
					}
				}
			})
		}, buildUrl: function (t) {
			return SB.contextPath + t
		}, initBtn: function (t) {
			if (!t) {
				t = window.body
			} $(".btn", t).click(function (u) {
				if ($(this).hasClass("disabled")) {
					u.preventDefault();
					u.stopImmediatePropagation()
				}
			})
		}, toISOString: function (u) {
			function t(v) {
				return v < 10 ? "0" + v : v
			} return u.getUTCFullYear() + "-" + t(u.getUTCMonth() + 1) + "-" + t(u.getUTCDate()) + "T" + t(u.getUTCHours()) + ":" + t(u.getUTCMinutes()) + ":" + t(u.getUTCSeconds()) + "Z"
		}, checkPlatform: function () {
			var t = $("#__platformCheck").val();
			if (t == "os" || t == "version") {
				SB.jump("/error/os");
				return false
			} return true
		}, alert: function (x, u) {
			var t = SB.getI18nText("Prompt", "common.title.prompt");
			var w = SB.getI18nText("Close", "common.btn_close");
			var v = $('<div id="alert-dialog" class="modaldialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header clearfix"><button class="close simplemodal-close">&times;</button><h3>' + t + '</h3></div><div class="modal-body"><p></p></div><div class="modal-footer"><button class="btn btn-default simplemodal-close">' + w + "</button></div></div></div></div>");
			v.find(".modal-body p").text(x);
			$.modal(v, $.extend({}, m, {
				overlayId: "alert-overlay", containerId: "alert-container", minHeight: 171, onClose: function (y) {
					y.container.fadeOut("fast", function () {
						y.overlay.fadeOut("fast", function () {
							$.modal.close();
							if ($.isFunction(u)) {
								setTimeout(function () {
									u()
								}, 10)
							}
						})
					})
				}
			}))
		}, confirm: function (E) {
			var u, t, A, B = 171, D;
			var C = SB.getI18nText("Yes", "common.btn_yes");
			var v = SB.getI18nText("No", "common.btn_no");
			var w = SB.getI18nText("Confirmation", "common.title.confirmation");
			var z = "";
			if (typeof (E) === "string") {
				u = arguments[0];
				t = arguments[1];
				A = arguments[2]
			} else {
				u = E.msg;
				t = E.yes;
				A = E.no;
				if (E.yesText) {
					C = E.yesText
				} if (E.noText) {
					v = E.noText
				} if (E.minHeight) {
					B = E.minHeight
				} if (E.beforeRender) {
					D = E.beforeRender
				} if (E.confirmation) {
					w = E.confirmation
				} if (E.css) {
					z = E.css
				}
			} var y = $('<div id="confirm-dialog" class="modaldialog ' + z + ' "><div class="modal-dialog"><div class="modal-content"><div class="modal-header clearfix"><button class="close simplemodal-close">&times;</button><h3>' + w + '</h3></div><div class="modal-body"><p></p></div><div class="modal-footer"><a role="button" href="javascript:;" class="btn btn-primary yes">' + C + '</a><a role="button" href="javascript:;" class="btn btn-default simplemodal-close no">' + v + "</a></div></div></div></div>");
			y.find(".modal-body p").html(u);
			if (D) {
				D(y)
			} var x = false;
			$.modal(y, $.extend({}, m, {
				overlayId: "confirm-overlay", containerId: "confirm-container", minHeight: B, onShow: function (F) {
					F.data.find("a.yes").click(function () {
						x = true;
						$.modal.close()
					})
				}, onClose: function (F) {
					F.container.fadeOut("fast", function () {
						F.overlay.fadeOut("fast", function () {
							if (x) {
								if ($.isFunction(t)) {
									t()
								}
							} else {
								if ($.isFunction(A)) {
									A()
								}
							} $.modal.close()
						})
					})
				}
			}))
		}, replaceUrl: function (v, w, u) {
			if (typeof (u) == "undefined") {
				u = window.location.href
			} var t = u;
			if (v.test(u)) {
				t = u.replace(v, w)
			} else {
				if (u.indexOf("?") >= 0) {
					t = u + "&" + w
				} else {
					t = u + "?" + w
				}
			} return t
		}, saveSuccessCookie: function (t, w, v, u) {
			$.cookie("__lsc", JSON.stringify(arguments), { path: "/" })
		}, getSuccessCookie: function (t) {
			var u = $.cookie("__lsc");
			if (typeof (u) !== "undefined") {
				if (!t) {
					SB.clearSuccessCookie()
				} return JSON.parse(u)
			} return null
		}, clearSuccessCookie: function () {
			$.cookie("__lsc", null, { path: "/" })
		}, showSuccessMsg: function (w, t, u, v) {
			v = v || false;
			t = t || $("#content_success_msg");
			u = u || 5000;
			if (v) {
				t.html(w)
			} else {
				t.text(w)
			} if (t[0] === $("#content_success_msg")[0]) {
				t.css("margin-left", -t.width() / 2)
			} if (SB.showSuccessTimer) {
				window.clearTimeout(SB.showSuccessTimer)
			} t.fadeIn("slow");
			SB.showSuccessTimer = window.setTimeout(function () {
				t.fadeOut("slow")
			}, u)
		}, validatePassword: function (x, v) {
			var E = x.val();
			var z = E.length;
			var B = 0, w = 0, D, C, u, y;
			if (z < 6) {
				w += 0
			} else {
				if (z < 8) {
					w += 5
				} else {
					if (z < 16) {
						w += 10
					} else {
						w += 15
					}
				} C = E.match(/[a-z]/g);
				if (C) {
					w += 1
				} D = E.match(/[A-Z]/g);
				if (D) {
					w += 5
				} if (D && C) {
					w += 2
				} u = E.match(/\d/g);
				if (u && u.length > 1) {
					w += 5
				} y = E.match(/\W/g);
				if (y) {
					w += (y.length > 1) ? 15 : 10
				} if (D && C && u && y) {
					w += 15
				} if (E.match(/\s/)) {
					w += 10
				}
			} if (w > 1 && w < 15) {
				B = 1
			} if (w >= 15 && w < 20) {
				B = 2
			} if (w >= 20 && w < 35) {
				B = 3
			} if (w >= 35) {
				B = 4
			} var t = SB.isOrderlyString(E) || SB.isSameString(E);
			if (B > 0 && !t) {
				v.find("span").css({ "background-color": "transparent" });
				for (var A = 1;
					A <= B;
					A++) {
						v.find("#meter" + A).css({ "background-color": "rgb(74, 232, 23)" })
				}
			} else {
				v.find("span").css({ "background-color": "transparent" });
				v.find("#meter1").css({ "background-color": "red" })
			}
		}, validateOneRepeatRule: function (u, v) {
			var t = u.val();
			if (SB.isSameString(t)) {
				v.removeClass("success").addClass("error")
			} else {
				v.removeClass("error").addClass("success")
			}
		}, validateConsecutiveRule: function (u, v) {
			var t = u.val();
			if (SB.isOrderlyString(t)) {
				v.removeClass("success").addClass("error")
			} else {
				v.removeClass("error").addClass("success")
			}
		}, validateLengthRule: function (w, x, v) {
			var u = w.val();
			var t = u.length;
			if (t < v) {
				x.removeClass("success").addClass("error")
			} else {
				x.removeClass("error").addClass("success")
			}
		}, validateAlpabetRule: function (u, v) {
			var t = u.val();
			if (!t.match(/[a-zA-Z]/g)) {
				v.removeClass("success").addClass("error")
			} else {
				v.removeClass("error").addClass("success")
			}
		}, validateNumberRule: function (u, v) {
			var t = u.val();
			if (!t.match(/\d/g)) {
				v.removeClass("success").addClass("error")
			} else {
				v.removeClass("error").addClass("success")
			}
		}, validateSpeicalRule: function (u, v) {
			var t = u.val();
			if (/^([a-zA-Z0-9]{1,})$/.test(t) || (t == "")) {
				v.removeClass("success").addClass("error")
			} else {
				v.removeClass("error").addClass("success")
			}
		}, validateCombineRule: function (u, v) {
			var t = u.val();
			if (t.match(/[a-z]/g) && t.match(/[A-Z]/g)) {
				v.removeClass("error").addClass("success")
			} else {
				v.removeClass("success").addClass("error")
			}
		}, isOrderlyString: function (x) {
			var w = true;
			for (var t = 0;
				t < x.length - 1;
				t++) {
					var v = x.charCodeAt(t);
				var u = x.charCodeAt(t + 1);
				if (isNaN(u) || isNaN(v)) {
					continue
				} else {
					if (Math.abs(v - u) != 1 || v == 47 || v == 57 || v == 64 || v == 90 || v == 96 || v > 122) {
						w = false;
						break
					}
				}
			} return w
		}, isSameString: function (x) {
			var w = true;
			for (var t = 0;
				t < x.length - 1;
				t++) {
					var v = x.charCodeAt(t);
				var u = x.charCodeAt(t + 1);
				if (isNaN(u) || isNaN(v)) {
					continue
				} else {
					if (Math.abs(v - u) != 0) {
						w = false;
						break
					}
				}
			} return w
		}, formatCurrency: function (u) {
			var t = "$";
			if (u < 0) {
				u = 0 - u;
				t = "-$"
			} return t + (u / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
		}, formatNumber: function (t) {
			return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}, htmlEncode: function (t) {
			return $("<div/>").text(t).html()
		}, htmlDecode: function (t) {
			return $("<div/>").html(t).text()
		}, hideHeader: function () {
			$("#header_container").hide();
			$("#content_container").removeClass("zoom-newcontent")
		}, formatConfNo: function (v, w, u) {
			w = w || " ";
			u = u || 11;
			v = $.trim(v).replace(/[^\d]/g, "");
			if (v.length > u) {
				v = v.substr(0, u)
			} var t = v.substr(0, 3);
			if (v.length == 11) {
				t += w + v.substr(3, 4) + w + v.substr(7)
			} else {
				if (v.length >= 3) {
					t += w + v.substr(3, 3)
				} if (v.length >= 6) {
					t += w + v.substr(6)
				}
			} return t
		}, initConfInput: function (u, v, x, t) {
			t = t || 11;
			var w = u.attr("confno");
			if (w) {
				u.val(SB.formatConfNo(w, x, t))
			} u.keyup(function (A) {
				var y = $(this);
				var z = y.val();
				if (z.length > 0) {
					window.setTimeout(function () {
						var B = y.caret();
						var C = SB.formatConfNo(z, x, t);
						if (B === 3 || B === 7) {
							if (A.keyCode == 8) {
								B--;
								C = SB.formatConfNo(C.substr(0, B) + C.substr(B + 2), x, t)
							} else {
								B++
							}
						} if (z !== C) {
							if (v) {
								v.hide()
							} y.removeClass("error");
							y.val(C);
							y.caret(B)
						}
					}, 10)
				} return false
			}).keypress(function (A) {
				if (A.ctrlKey || A.altKey || A.metaKey || A.which < 32) {
					return true
				} if (A.keyCode == 8 || A.keyCode == 46 || A.keyCode == 35 || A.keyCode == 36 || A.keyCode == 37 || A.keyCode == 39 || A.keyCode == 144) {
					return true
				} if (!/[0-9]/.test(String.fromCharCode(A.which))) {
					return false
				} var z = $(this);
				var y = z.caret();
				var B = z.val();
				if (B.length === t + 2 && y === t + 2) {
					return false
				}
			})
		}, isDigit: function (t) {
			return (t >= "0" && t <= "9")
		}, initNoAndUrlInput: function (u, v) {
			var t = 11;
			var w = " ";
			u.keyup(function (z) {
				var x = $(this);
				var y = x.val();
				if (y.length > 0) {
					if (SB.isDigit(y.charAt(0))) {
						window.setTimeout(function () {
							var B = x.caret();
							var C = SB.formatConfNo(y, w, t);
							if (B === 3 || B === 7) {
								if (z.keyCode == 8) {
									B--;
									C = SB.formatConfNo(C.substr(0, B) + C.substr(B + 2), w, t)
								} else {
									B++
								}
							} if (y !== C) {
								if (v) {
									v.hide()
								} x.removeClass("error");
								x.val(C);
								x.caret(B)
							}
						}, 10)
					} else {
						var A = $.trim(y).replace(/^\./, "").replace(/[^A-Za-z0-9\.]/g, "").toLowerCase();
						if (v) {
							v.hide()
						} x.removeClass("error");
						if (y !== A) {
							x.val(A)
						}
					} return false
				}
			}).keypress(function (z) {
				if (z.ctrlKey || z.altKey || z.metaKey || z.which < 32) {
					return true
				} if (z.keyCode == 8 || z.keyCode == 46 || z.keyCode == 35 || z.keyCode == 36 || z.keyCode == 37 || z.keyCode == 39 || z.keyCode == 144) {
					return true
				} var y = $(this);
				var x = y.caret();
				var A = y.val();
				if (A.length == 0 || !SB.isDigit(A.charAt(0))) {
					if (!/[A-Za-z0-9\.]/.test(String.fromCharCode(z.which))) {
						return false
					}
				} else {
					if (!/[0-9]/.test(String.fromCharCode(z.which))) {
						return false
					} if (A.length === t + 2 && x === t + 2) {
						return false
					}
				}
			})
		}, initLimitInput: function (u, t, v, w) {
			u.keyup(function (z) {
				if (z.ctrlKey || z.altKey || z.metaKey || z.which < 32) {
					return true
				} if (z.keyCode == 8 || z.keyCode == 46 || z.keyCode == 35 || z.keyCode == 36 || z.keyCode == 37 || z.keyCode == 39 || z.keyCode == 144 || z.keyCode == 38 || z.keyCode == 40) {
					return true
				} var x = $(this);
				var y = x.val();
				if (y.length > 0) {
					window.setTimeout(function () {
						var A = x.caret();
						if (z.keyCode == 8) {
							A--
						} var B = $.trim(y).replace(t, "").toLowerCase();
						if (w) {
							B = B.toLowerCase()
						} x.val(B);
						x.caret(A)
					}, 10)
				} if (v) {
					v.hide()
				} u.removeClass("error");
				return true
			})
		}, playVideo: function (v, w, t) {
			var u = $("#video_dialog");
			var x = u.find(".modal-header .modal-title");
			u.find(".modal-body-container").html('<div class="youtube-video-container"><iframe src="' + v + '" frameborder="0" title="Video Frame" allowfullscreen></iframe></div>');
			if (w && t) {
				x.html('<a href="' + t + '" target="_blank">' + w + "</a>")
			} else {
				if (w) {
					x.html(w)
				} else {
					x.html("")
				}
			} $.modal(u, $.extend({}, SB.MODAL_DEFAULTS, {
				overlayId: "video-dialog-overlay", containerId: "video-dialog-container", persist: true, minHeight: u.outerHeight(), overlayClose: true, onShow: function () { }, onClose: function () {
					$.modal.close();
					u.find(".modal-body-container").html("")
				}
			}))
		}, isNotValidPicFile: function (w, y, v, x) {
			var u = 0;
			var t = false;
			x = x || /.*\.(gif|jpe?g|png)$/i;
			v = v || 2 * 1024 * 1024;
			if (!x.test(w.name)) {
				u = 1;
				t = true
			} if ((w.size && w.size > v)) {
				u = 2;
				t = true
			} y(u, v);
			return t
		}, isNotValidAudioFile: function (w, y, v, x) {
			var u = 0;
			var t = false;
			x = x || /.*\.wav$/i;
			v = v || 2 * 1024 * 1024;
			if (!x.test(w.name)) {
				u = 1;
				t = true
			} if ((w.size && w.size > v)) {
				u = 2;
				t = true
			} y(u, v);
			return t
		}, sendJMF: function (t, u, w, x, y) {
			var v = { time: new Date().getTime(), mn: t, mi: u, id: w, reason: x, msg: y, ua: navigator.userAgent };
			SB.post("/wjmf", { msg: JSON.stringify(v) }, function (z) { })
		}, getI18nText: function (t, u, w) {
			if (typeof $.i18n == "undefined") {
				return !!t ? t : u
			} var v = $.i18n.get(u, w);
			if (!!v) {
				if (v != u) {
					return v
				}
			} return !!t ? t : u
		}, showPastDueMessage: function () {
			var t = $.cookie("_pastdue_msg_close");
			if (t && t == "true") { } else {
				SB.post("/past_due_message", {}, function (v) {
					if (v.status) {
						var y = $("#pastdue_msg");
						var u = $("#pastdue_msg_content");
						if (v.result && v.result != undefined) {
							var x = JSON.parse(v.result);
							if (typeof x != "undefined") {
								if (x.show_pastdue_msg && x.show_pastdue_msg == "true") {
									u.empty();
									var w = '<h4 class="alert-heading">' + $.i18n.get("billing.pastdue.notice") + "</h4>";
									w = w + $.i18n.get("billing.pastdue.balance_new", x.currency_flag, x.pastdue_balance);
									if (x.pastdue_date_show && x.pastdue_date_show == "true" && x.pastdue_terminate_date) {
										w = w + " " + $.i18n.get("billing.pastdue.terminate_time", x.pastdue_terminate_date)
									} else {
										w = w + " " + $.i18n.get("billing.pastdue.terminate_soon")
									} w = w + " " + $.i18n.get("billing.pastdue.this_means");
									if (x.pastdue_autopay && x.pastdue_autopay == "true") {
										w = w + " " + $.i18n.get("billing.pastdue.pay_online")
									} else {
										w = w + " " + $.i18n.get("billing.pastdue.contact_sales")
									} u.html(w);
									y.removeClass("hideme");
									y.removeAttr("style")
								}
							}
						}
					}
				})
			}
		}, sendUserBehavior: function (u) {
			var t = {};
			if (u != null) {
				t = { html_object_id: u.prop("id"), html_class: u.prop("class") }
			} SB.post("/sendUserBehavior", t, function () { }, function () { }, function () { })
		}, getFirstLanguage: function () {
			var v = window.navigator, t = ["language", "browserLanguage", "systemLanguage", "userLanguage"], u, w = null;
			if ($.isArray(v.languages)) {
				for (u = 0;
					u < v.languages.length;
					u++) {
						w = v.languages[u];
					if (w && w.indexOf("-") != -1) {
						return w
					}
				}
			} for (u = 0;
				u < t.length;
				u++) {
					w = v[t[u]];
				if (w && w.indexOf("-") != -1) {
					return w
				}
			} if (w == null) {
				return "en-US"
			}
		}, getDefCountry: function () {
			var u = "US";
			var t = SB.getFirstLanguage();
			if (t && t.indexOf("-") > 0) {
				u = t.split("-")[1]
			} return u.toUpperCase()
		}, getDefLanguage: function () {
			var u = "en";
			var t = SB.getFirstLanguage();
			if (t && t.indexOf("-") > 0) {
				u = t.split("-")[0]
			} return u
		}, sortObject: function (t) {
			return function (x, w) {
				var v, u;
				if (typeof x === "object" && typeof w === "object" && x && w) {
					v = x[t];
					u = w[t];
					if (v === u) {
						return 0
					} if (typeof v === typeof u) {
						return v < u ? -1 : 1
					} return typeof v < typeof u ? -1 : 1
				} else {
					return 0
				}
			}
		}
	});
	$.validator.setDefaults({
		errorClass: "help-block", errorElement: "span", errorClass: "has-error", highlight: function (u, t) {
			$(u).parents("div.form-group").addClass("has-error")
		}, unhighlight: function (u, t) {
			$(u).parents("div.form-group").removeClass("has-error")
		}, errorPlacement: function (u, t) {
			u.addClass("help-block").insertAfter(t)
		}
	});
	jQuery.validator.addMethod("time12hNB", function (u, t) {
		return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2})$/i.test(u)
	}, function () {
		return SB.getI18nText("Please enter a valid time in 12-hour", "common.enter_time_in_12_hour")
	});
	$.fn.busy = function () {
		return this.each(function () {
			var t = $(this).next();
			if (!t.is("i.busy")) {
				$(this).after('<i class="busy busy24"></i>')
			}
		})
	};
	$.fn.removeBusy = function () {
		return this.each(function () {
			var t = $(this).next();
			if (t.is("i.busy")) {
				t.remove()
			}
		})
	};
	$.fn.busyBefore = function () {
		return this.each(function () {
			var t = $(this).prev();
			if (!t.is("i.busy")) {
				$(this).before('<i class="busy busy24"></i>')
			}
		})
	};
	$.fn.removeBusyBefore = function () {
		return this.each(function () {
			var t = $(this).prev();
			if (t.is("i.busy")) {
				t.remove()
			}
		})
	};
	$.fn.disableBtn = function () {
		return this.each(function () {
			$(this).addClass("disabled").attr("disabled", "disabled")
		})
	};
	$.fn.enableBtn = function () {
		return this.each(function () {
			var t = $(this);
			t.removeClass("disabled").removeAttr("disabled")
		})
	};
	$.fn.enableBtnDelay = function () {
		return this.each(function () {
			var t = $(this);
			window.setTimeout(function () {
				t.enableBtn()
			}, 3000)
		})
	};
	$(function () {
		$("[placeholder]").placeholder();
		if (typeof ga == "undefined") {
			ga = function () { }
		} function W() {
			return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function (ac) {
				var ab = Math.random() * 16 | 0, aa = ac == "x" ? ab : (ab & 3 | 8);
				return aa.toString(16)
			})
		} $(".home-video-link").click(function (ab) {
			var ac = $(this);
			var aa = ac.attr("href");
			SB.playVideo(aa);
			ab.preventDefault()
		});
		SB.initBtn();
		$("form .submit").click(function () {
			if (!$(this).hasClass("disabled")) {
				$(this).parents("form").submit()
			} return false
		});
		$("#btnLogout").click(function () {
			if (!SB.loggedIn) {
				return
			} if (SB.stype == 0) {
				if (SB.token == "FAKE_TK") {
					SB.jump("/logout")
				} else {
					window.location.href = "https://www.facebook.com/logout.php?access_token=" + SB.token + "&next=" + SB.baseUrl + SB.contextPath + "/logout"
				}
			} else {
				if (SB.stype == 1) {
					if (SB.token == "FAKE_TK") {
						SB.jump("/logout")
					} else {
						var aa = $('<iframe src="https://accounts.google.com/Logout" frameborder="0" width="1" height="1"></iframe>');
						aa.load(function () {
							SB.jump("/logout")
						});
						$(document.body).append(aa)
					}
				} else {
					if (SB.stype == 101) {
						SB.jump("/saml/logout")
					} else {
						SB.jump("/logout")
					}
				}
			}
		});
		$("#btnOauth2NotMe").click(function () {
			if (!SB.loggedIn) {
				return
			} if (SB.stype == 0) {
				if (SB.token == "FAKE_TK") {
					SB.jump("/logout?type=notme")
				} else {
					window.location.href = "https://www.facebook.com/logout.php?access_token=" + SB.token + "&next=" + SB.baseUrl + SB.contextPath + encodeURIComponent("/logout?type=notme")
				}
			} else {
				if (SB.stype == 1) {
					if (SB.token == "FAKE_TK") {
						SB.jump("/logout?type=notme")
					} else {
						var aa = $('<iframe src="https://accounts.google.com/Logout" frameborder="0" width="1" height="1"></iframe>');
						aa.load(function () {
							SB.jump("/logout?type=notme")
						});
						$(document.body).append(aa)
					}
				} else {
					if (SB.stype == 101) {
						SB.jump("/saml/logout")
					} else {
						SB.jump("/logout?type=notme")
					}
				}
			}
		});
		$("#btnDevLogout").click(function () {
			if (!SB.loggedIn) {
				return
			} if (SB.stype == 0) {
				if (SB.token == "FAKE_TK") {
					SB.jump("/developer/logout")
				} else {
					window.location.href = "https://www.facebook.com/logout.php?access_token=" + SB.token + "&next=" + SB.baseUrl + SB.contextPath + "/developer/logout"
				}
			} else {
				if (SB.stype == 1) {
					if (SB.token == "FAKE_TK") {
						SB.jump("/developer/logout")
					} else {
						var aa = $('<iframe src="https://accounts.google.com/Logout" frameborder="0" width="1" height="1"></iframe>');
						aa.load(function () {
							SB.jump("/developer/logout")
						});
						$(document.body).append(aa)
					}
				} else {
					if (SB.stype == 101) {
						SB.jump("/saml/logout")
					} else {
						SB.jump("/developer/logout")
					}
				}
			}
		});
		$("#footerDownload").click(function () {
			if (!SB.checkPlatform()) {
				return false
			}
		});
		$(".adv-pagination input[name=page_input]").keypress(function (ab) {
			var ad = $(this);
			if (ab.which === 13) {
				var ac = parseInt(ad.val());
				if (!isNaN(ac) && ac > 0) {
					var aa = parseInt(ad.attr("data-total"));
					if (ac > aa) {
						ac = aa
					} ad.val(ac);
					window.location.href = SB.replaceUrl(/p=\d+/ig, "p=" + ac)
				} ab.preventDefault()
			} else {
				if (!(ab.which === 8 || ab.which === 0 || (ab.shiftKey === false && (ab.which > 47 && ab.which < 58)))) {
					ab.preventDefault()
				}
			}
		});
		$(".adv-pagination ul").delegate("a", "click", function () {
			var aa = $(this).parent();
			if (aa.hasClass("disabled") || aa.hasClass("active")) {
				return false
			} var ab = parseInt($(this).attr("p"), 10);
			window.location.href = SB.replaceUrl(/p=\d+/ig, "p=" + ab);
			return false
		});
		function E(aa) {
			var ab = aa.val();
			var ac = aa.data("cookie");
			$.cookie(ac, ab, { expires: 365, path: "/" });
			location.reload(true)
		} $(".adv-pagination input[name=page_size_input]").each(function () {
			var aa = $(this);
			new ComboBox(aa.attr("id"), {
				onChange: function () {
					E(aa)
				}
			});
			aa.change(function () {
				E(aa)
			})
		});
		$("body").delegate("[ui-cmd]", "click", function () {
			var ab = $(this);
			if (!ab.hasClass("disabled") && !ab.data("ui-cmd-sending")) {
				var ac = ab.attr("ui-cmd");
				var aa = ab.attr("ui-cat");
				SB.post("/wlog", { node: ac, cat: aa }, function (ad) { });
				ab.data("ui-cmd-sending", 1);
				window.setTimeout(function () {
					ab.removeData("ui-cmd-sending")
				}, 5000)
			}
		});
		if ($("#navbar ul.navbar-right").length > 0) {
			$("#navbar ul.navbar-right").append($("#header_outer #header_login>ul").children())
		} else {
			$("#header_login").removeClass("hideme").show()
		} var t = $("ul.zm-sidenav");
		t.find("li:last").addClass("last");
		t.parents(".row").css("min-height", "" + t.parents(".nav-menu").height() + "px");
		var A = $(".sidebar-menu a>span");
		A.text(t.find("li.active a").text().trim());
		var O = $(".category .itext");
		O.text(O.parents(".category").find("li.active a").text().trim());
		var u = $("#btnHostMeeting");
		var K = $("#btnMutipleJoinMeeting");
		var D = $("#btnSolutions");
		var M = $("#solutionsDropdown");
		var H1 = $('#btnResouces');
		var I1 = $('#resourcesDropdown');
		var Y = $("#hostMeetingDropdown");
		var y = $("#joinmeetingDropdown");
		if (Y.length && !("ontouchstart" in document.documentElement)) {
			var T = { x: 0, y: 0 };
			$(document).mousemove(function (aa) {
			T.x = aa.pageX;
				T.y = aa.pageY
			});
			function C(aa) {
				var ab = aa.offset();
				if (T.x > ab.left && T.x < ab.left + aa.outerWidth() && T.y > ab.top && T.y < ab.top + aa.outerHeight()) {
					return true
				} return false
			} function z(ab, aa) {
				window.setTimeout(function () {
					if (C(ab) || C(aa)) {
						return
					} ab.parent().removeClass("open")
				}, 500)
			} function N(aa) {
				aa.parent().removeClass("open")
			} u.hover(function () {
				N(K);
				u.parent().addClass("open")
			}, function () {
				z(u, Y)
			});
			K.hover(function () {
				N(u);
				K.parent().addClass("open")
			}, function () {
				z(K, y)
			});
			Y.mouseleave(function () {
				z(u, Y)
			});
			y.mouseleave(function () {
				z(K, y)
			})
		} if (M.length && !("ontouchstart" in document.documentElement)) {
			var T = { x: 0, y: 0 };
			$(document).mousemove(function (aa) {
			T.x = aa.pageX;
				T.y = aa.pageY
			});
			function C(aa) {
				var ab = aa.offset();
				if (T.x > ab.left && T.x < ab.left + aa.outerWidth() && T.y > ab.top && T.y < ab.top + aa.outerHeight()) {
					return true
				} return false
			} function z() {
				window.setTimeout(function () {
					if (C(D) || C(M)) {
						return
					} D.parent().removeClass("open")
				}, 500)
			} D.hover(function () {
				D.parent().addClass("open")
			}, function () {
				z()
			});
			M.mouseleave(function () {
				z()
			})
		} if (I1.length && !("ontouchstart" in document.documentElement)) {
			var T = { x: 0, y: 0 };
			$(document).mousemove(function (aa) {
			T.x = aa.pageX;
				T.y = aa.pageY
			});
			function C(aa) {
				var ab = aa.offset();
				if (T.x > ab.left && T.x < ab.left + aa.outerWidth() && T.y > ab.top && T.y < ab.top + aa.outerHeight()) {
					return true
				} return false
			} function z() {
				window.setTimeout(function () {
					if (C(H1) || C(I1)) {
						return
					} H1.parent().removeClass("open")
				}, 500)
			} H1.hover(function () {
				H1.parent().addClass("open")
			}, function () {
				z()
			});
			I1.mouseleave(function () {
				z()
			})
		} var G = $("div.lanuages");
		G.delegate("a", "click", function () {
			var aa = $(this);
			$.cookie("_zm_lang", aa.attr("data-lang"), { expires: 365, path: "/", domain: i, secure: true });
			location.reload(true)
		});
		var B = new RegExp("(^|&)MKTID=([^&]*)(&|$)");
		var L = window.location.search.substr(1).match(B);
		var X = /^\d*$/;
		var S = $.cookie("MKTID1");
		if (L != null && X.test(L[2])) {
			if (S == "" || S == null) {
				$.cookie("MKTID1", decodeURIComponent(L[2]), { expires: 30, path: "/" });
				$.cookie("MKTID2", decodeURIComponent(L[2]), { expires: 30, path: "/" })
			} else {
				$.cookie("MKTID1", S, { expires: 30, path: "/" });
				$.cookie("MKTID2", decodeURIComponent(L[2]), { expires: 30, path: "/" })
			}
		} var R = new RegExp("(^|&)utm_medium=([^&]*)(&|$)");
		var J = window.location.search.substr(1).match(R);
		if (J != null) {
			$.cookie("cj_utm_medium", decodeURIComponent(J[2]), { expires: 1, path: "/" })
		} var H = new RegExp("(^|&)utm_term=([^&]*)(&|$)");
		var Q = new RegExp("(^|&)utm_content=([^&]*)(&|$)");
		var F = new RegExp("(^|&)SID=([^&]*)(&|$)");
		var V = window.location.search.substr(1).match(H);
		var P = window.location.search.substr(1).match(Q);
		var x = window.location.search.substr(1).match(F);
		var w = {};
		if (V != null) {
		w.aid = decodeURIComponent(V[2])
		} if (P != null) {
		w.pid = decodeURIComponent(P[2])
		} if (x != null) {
		w.sid = decodeURIComponent(x[2])
		} if (jQuery.isEmptyObject(w)) { } else {
			$.cookie("_zm_cj_options", JSON.stringify(w), { expires: 1, path: "/" })
		} $(".dropdown-language").delegate(".dropdown-menu a", "click", function (ab) {
			var aa = $(this);
			if (aa.data("locale") != "") {
				$.cookie("_zm_lang", aa.data("locale"), { expires: 365, path: "/", domain: i, secure: true });
				var theName = location.pathname;
				var pageParameter = location.search;
				var pageName = "";
				var pageURL = "https://" + location.hostname;
				var destArray = ['/de-de', '/es-es', '/fr-fr', '/jp-jp', '/pt-pt', '/zh-cn', '/ru-ru', '/zh-tw'];
				var inotherLang = $.inArray(window.location.pathname.substring(0, 6), destArray) > -1;
				var endIndex = theName.lastIndexOf('.html');
				if (inotherLang) {
					pageName = theName.substring(6, endIndex);
				} else {
					pageName = theName.substring(0);
				}
				if ("en-US" != aa.data("locale")) {
					if (pageName.substr(-1) == '/') {
						pageName = pageName.substr(0, pageName.length - 1);
					}
					pageURL = pageURL + '/' + aa.data("locale").toLowerCase() + pageName + ".html"
				} else {
					pageURL = pageURL + pageName;
				}
				if (pageParameter.length != 0) {
					pageURL = pageURL + pageParameter
				}
				location.replace(pageURL);
			}
		});
		$("#past_due_msg_close").click(function () {
			$.cookie("_pastdue_msg_close", "true", { expires: 1, path: "/" })
		});
		var U = $.cookie("_zm_mtk_guid");
		if (!(U && "" != U)) {
			$.cookie("_zm_mtk_guid", W(), { expires: 36500, path: "/", domain: i, secure: true })
		} var I = window.location.search.substr(1).match(new RegExp("(^|&)zcid=([^&]*)(&|$)"));
		if (I != null && "" != I[2]) {
			SB.post3({ url: "/market_mapping", data: { url: window.location.href, campaignid: I[2] }, success: function (aa) { } })
		} function v(aa) {
			if (!aa.data("user-behavior-clicked")) {
				SB.sendUserBehavior(aa);
				aa.data("user-behavior-clicked", 1);
				window.setTimeout(function () {
					aa.removeData("user-behavior-clicked")
				}, 3000)
			}
		} $(document).on("click", "a,button,input[type=button],input[type=submit]", function () {
			v($(this))
		});
		$("a,button,input[type=button],input[type=submit]").on("click", function () {
			v($(this))
		});
	})
})();
