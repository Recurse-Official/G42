"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@kurkle";
exports.ids = ["vendor-chunks/@kurkle"];
exports.modules = {

/***/ "(ssr)/./node_modules/@kurkle/color/dist/color.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@kurkle/color/dist/color.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Color: () => (/* binding */ Color),\n/* harmony export */   b2n: () => (/* binding */ b2n),\n/* harmony export */   b2p: () => (/* binding */ b2p),\n/* harmony export */   \"default\": () => (/* binding */ index_esm),\n/* harmony export */   hexParse: () => (/* binding */ hexParse),\n/* harmony export */   hexString: () => (/* binding */ hexString),\n/* harmony export */   hsl2rgb: () => (/* binding */ hsl2rgb),\n/* harmony export */   hslString: () => (/* binding */ hslString),\n/* harmony export */   hsv2rgb: () => (/* binding */ hsv2rgb),\n/* harmony export */   hueParse: () => (/* binding */ hueParse),\n/* harmony export */   hwb2rgb: () => (/* binding */ hwb2rgb),\n/* harmony export */   lim: () => (/* binding */ lim),\n/* harmony export */   n2b: () => (/* binding */ n2b),\n/* harmony export */   n2p: () => (/* binding */ n2p),\n/* harmony export */   nameParse: () => (/* binding */ nameParse),\n/* harmony export */   p2b: () => (/* binding */ p2b),\n/* harmony export */   rgb2hsl: () => (/* binding */ rgb2hsl),\n/* harmony export */   rgbParse: () => (/* binding */ rgbParse),\n/* harmony export */   rgbString: () => (/* binding */ rgbString),\n/* harmony export */   rotate: () => (/* binding */ rotate),\n/* harmony export */   round: () => (/* binding */ round)\n/* harmony export */ });\n/*!\n * @kurkle/color v0.3.4\n * https://github.com/kurkle/color#readme\n * (c) 2024 Jukka Kurkela\n * Released under the MIT License\n */\nfunction round(v) {\n  return v + 0.5 | 0;\n}\nconst lim = (v, l, h) => Math.max(Math.min(v, h), l);\nfunction p2b(v) {\n  return lim(round(v * 2.55), 0, 255);\n}\nfunction b2p(v) {\n  return lim(round(v / 2.55), 0, 100);\n}\nfunction n2b(v) {\n  return lim(round(v * 255), 0, 255);\n}\nfunction b2n(v) {\n  return lim(round(v / 2.55) / 100, 0, 1);\n}\nfunction n2p(v) {\n  return lim(round(v * 100), 0, 100);\n}\n\nconst map$1 = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};\nconst hex = [...'0123456789ABCDEF'];\nconst h1 = b => hex[b & 0xF];\nconst h2 = b => hex[(b & 0xF0) >> 4] + hex[b & 0xF];\nconst eq = b => ((b & 0xF0) >> 4) === (b & 0xF);\nconst isShort = v => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);\nfunction hexParse(str) {\n  var len = str.length;\n  var ret;\n  if (str[0] === '#') {\n    if (len === 4 || len === 5) {\n      ret = {\n        r: 255 & map$1[str[1]] * 17,\n        g: 255 & map$1[str[2]] * 17,\n        b: 255 & map$1[str[3]] * 17,\n        a: len === 5 ? map$1[str[4]] * 17 : 255\n      };\n    } else if (len === 7 || len === 9) {\n      ret = {\n        r: map$1[str[1]] << 4 | map$1[str[2]],\n        g: map$1[str[3]] << 4 | map$1[str[4]],\n        b: map$1[str[5]] << 4 | map$1[str[6]],\n        a: len === 9 ? (map$1[str[7]] << 4 | map$1[str[8]]) : 255\n      };\n    }\n  }\n  return ret;\n}\nconst alpha = (a, f) => a < 255 ? f(a) : '';\nfunction hexString(v) {\n  var f = isShort(v) ? h1 : h2;\n  return v\n    ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f)\n    : undefined;\n}\n\nconst HUE_RE = /^(hsla?|hwb|hsv)\\(\\s*([-+.e\\d]+)(?:deg)?[\\s,]+([-+.e\\d]+)%[\\s,]+([-+.e\\d]+)%(?:[\\s,]+([-+.e\\d]+)(%)?)?\\s*\\)$/;\nfunction hsl2rgbn(h, s, l) {\n  const a = s * Math.min(l, 1 - l);\n  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);\n  return [f(0), f(8), f(4)];\n}\nfunction hsv2rgbn(h, s, v) {\n  const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);\n  return [f(5), f(3), f(1)];\n}\nfunction hwb2rgbn(h, w, b) {\n  const rgb = hsl2rgbn(h, 1, 0.5);\n  let i;\n  if (w + b > 1) {\n    i = 1 / (w + b);\n    w *= i;\n    b *= i;\n  }\n  for (i = 0; i < 3; i++) {\n    rgb[i] *= 1 - w - b;\n    rgb[i] += w;\n  }\n  return rgb;\n}\nfunction hueValue(r, g, b, d, max) {\n  if (r === max) {\n    return ((g - b) / d) + (g < b ? 6 : 0);\n  }\n  if (g === max) {\n    return (b - r) / d + 2;\n  }\n  return (r - g) / d + 4;\n}\nfunction rgb2hsl(v) {\n  const range = 255;\n  const r = v.r / range;\n  const g = v.g / range;\n  const b = v.b / range;\n  const max = Math.max(r, g, b);\n  const min = Math.min(r, g, b);\n  const l = (max + min) / 2;\n  let h, s, d;\n  if (max !== min) {\n    d = max - min;\n    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);\n    h = hueValue(r, g, b, d, max);\n    h = h * 60 + 0.5;\n  }\n  return [h | 0, s || 0, l];\n}\nfunction calln(f, a, b, c) {\n  return (\n    Array.isArray(a)\n      ? f(a[0], a[1], a[2])\n      : f(a, b, c)\n  ).map(n2b);\n}\nfunction hsl2rgb(h, s, l) {\n  return calln(hsl2rgbn, h, s, l);\n}\nfunction hwb2rgb(h, w, b) {\n  return calln(hwb2rgbn, h, w, b);\n}\nfunction hsv2rgb(h, s, v) {\n  return calln(hsv2rgbn, h, s, v);\n}\nfunction hue(h) {\n  return (h % 360 + 360) % 360;\n}\nfunction hueParse(str) {\n  const m = HUE_RE.exec(str);\n  let a = 255;\n  let v;\n  if (!m) {\n    return;\n  }\n  if (m[5] !== v) {\n    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);\n  }\n  const h = hue(+m[2]);\n  const p1 = +m[3] / 100;\n  const p2 = +m[4] / 100;\n  if (m[1] === 'hwb') {\n    v = hwb2rgb(h, p1, p2);\n  } else if (m[1] === 'hsv') {\n    v = hsv2rgb(h, p1, p2);\n  } else {\n    v = hsl2rgb(h, p1, p2);\n  }\n  return {\n    r: v[0],\n    g: v[1],\n    b: v[2],\n    a: a\n  };\n}\nfunction rotate(v, deg) {\n  var h = rgb2hsl(v);\n  h[0] = hue(h[0] + deg);\n  h = hsl2rgb(h);\n  v.r = h[0];\n  v.g = h[1];\n  v.b = h[2];\n}\nfunction hslString(v) {\n  if (!v) {\n    return;\n  }\n  const a = rgb2hsl(v);\n  const h = a[0];\n  const s = n2p(a[1]);\n  const l = n2p(a[2]);\n  return v.a < 255\n    ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})`\n    : `hsl(${h}, ${s}%, ${l}%)`;\n}\n\nconst map = {\n\tx: 'dark',\n\tZ: 'light',\n\tY: 're',\n\tX: 'blu',\n\tW: 'gr',\n\tV: 'medium',\n\tU: 'slate',\n\tA: 'ee',\n\tT: 'ol',\n\tS: 'or',\n\tB: 'ra',\n\tC: 'lateg',\n\tD: 'ights',\n\tR: 'in',\n\tQ: 'turquois',\n\tE: 'hi',\n\tP: 'ro',\n\tO: 'al',\n\tN: 'le',\n\tM: 'de',\n\tL: 'yello',\n\tF: 'en',\n\tK: 'ch',\n\tG: 'arks',\n\tH: 'ea',\n\tI: 'ightg',\n\tJ: 'wh'\n};\nconst names$1 = {\n\tOiceXe: 'f0f8ff',\n\tantiquewEte: 'faebd7',\n\taqua: 'ffff',\n\taquamarRe: '7fffd4',\n\tazuY: 'f0ffff',\n\tbeige: 'f5f5dc',\n\tbisque: 'ffe4c4',\n\tblack: '0',\n\tblanKedOmond: 'ffebcd',\n\tXe: 'ff',\n\tXeviTet: '8a2be2',\n\tbPwn: 'a52a2a',\n\tburlywood: 'deb887',\n\tcaMtXe: '5f9ea0',\n\tKartYuse: '7fff00',\n\tKocTate: 'd2691e',\n\tcSO: 'ff7f50',\n\tcSnflowerXe: '6495ed',\n\tcSnsilk: 'fff8dc',\n\tcrimson: 'dc143c',\n\tcyan: 'ffff',\n\txXe: '8b',\n\txcyan: '8b8b',\n\txgTMnPd: 'b8860b',\n\txWay: 'a9a9a9',\n\txgYF: '6400',\n\txgYy: 'a9a9a9',\n\txkhaki: 'bdb76b',\n\txmagFta: '8b008b',\n\txTivegYF: '556b2f',\n\txSange: 'ff8c00',\n\txScEd: '9932cc',\n\txYd: '8b0000',\n\txsOmon: 'e9967a',\n\txsHgYF: '8fbc8f',\n\txUXe: '483d8b',\n\txUWay: '2f4f4f',\n\txUgYy: '2f4f4f',\n\txQe: 'ced1',\n\txviTet: '9400d3',\n\tdAppRk: 'ff1493',\n\tdApskyXe: 'bfff',\n\tdimWay: '696969',\n\tdimgYy: '696969',\n\tdodgerXe: '1e90ff',\n\tfiYbrick: 'b22222',\n\tflSOwEte: 'fffaf0',\n\tfoYstWAn: '228b22',\n\tfuKsia: 'ff00ff',\n\tgaRsbSo: 'dcdcdc',\n\tghostwEte: 'f8f8ff',\n\tgTd: 'ffd700',\n\tgTMnPd: 'daa520',\n\tWay: '808080',\n\tgYF: '8000',\n\tgYFLw: 'adff2f',\n\tgYy: '808080',\n\thoneyMw: 'f0fff0',\n\thotpRk: 'ff69b4',\n\tRdianYd: 'cd5c5c',\n\tRdigo: '4b0082',\n\tivSy: 'fffff0',\n\tkhaki: 'f0e68c',\n\tlavFMr: 'e6e6fa',\n\tlavFMrXsh: 'fff0f5',\n\tlawngYF: '7cfc00',\n\tNmoncEffon: 'fffacd',\n\tZXe: 'add8e6',\n\tZcSO: 'f08080',\n\tZcyan: 'e0ffff',\n\tZgTMnPdLw: 'fafad2',\n\tZWay: 'd3d3d3',\n\tZgYF: '90ee90',\n\tZgYy: 'd3d3d3',\n\tZpRk: 'ffb6c1',\n\tZsOmon: 'ffa07a',\n\tZsHgYF: '20b2aa',\n\tZskyXe: '87cefa',\n\tZUWay: '778899',\n\tZUgYy: '778899',\n\tZstAlXe: 'b0c4de',\n\tZLw: 'ffffe0',\n\tlime: 'ff00',\n\tlimegYF: '32cd32',\n\tlRF: 'faf0e6',\n\tmagFta: 'ff00ff',\n\tmaPon: '800000',\n\tVaquamarRe: '66cdaa',\n\tVXe: 'cd',\n\tVScEd: 'ba55d3',\n\tVpurpN: '9370db',\n\tVsHgYF: '3cb371',\n\tVUXe: '7b68ee',\n\tVsprRggYF: 'fa9a',\n\tVQe: '48d1cc',\n\tVviTetYd: 'c71585',\n\tmidnightXe: '191970',\n\tmRtcYam: 'f5fffa',\n\tmistyPse: 'ffe4e1',\n\tmoccasR: 'ffe4b5',\n\tnavajowEte: 'ffdead',\n\tnavy: '80',\n\tTdlace: 'fdf5e6',\n\tTive: '808000',\n\tTivedBb: '6b8e23',\n\tSange: 'ffa500',\n\tSangeYd: 'ff4500',\n\tScEd: 'da70d6',\n\tpOegTMnPd: 'eee8aa',\n\tpOegYF: '98fb98',\n\tpOeQe: 'afeeee',\n\tpOeviTetYd: 'db7093',\n\tpapayawEp: 'ffefd5',\n\tpHKpuff: 'ffdab9',\n\tperu: 'cd853f',\n\tpRk: 'ffc0cb',\n\tplum: 'dda0dd',\n\tpowMrXe: 'b0e0e6',\n\tpurpN: '800080',\n\tYbeccapurpN: '663399',\n\tYd: 'ff0000',\n\tPsybrown: 'bc8f8f',\n\tPyOXe: '4169e1',\n\tsaddNbPwn: '8b4513',\n\tsOmon: 'fa8072',\n\tsandybPwn: 'f4a460',\n\tsHgYF: '2e8b57',\n\tsHshell: 'fff5ee',\n\tsiFna: 'a0522d',\n\tsilver: 'c0c0c0',\n\tskyXe: '87ceeb',\n\tUXe: '6a5acd',\n\tUWay: '708090',\n\tUgYy: '708090',\n\tsnow: 'fffafa',\n\tsprRggYF: 'ff7f',\n\tstAlXe: '4682b4',\n\ttan: 'd2b48c',\n\tteO: '8080',\n\ttEstN: 'd8bfd8',\n\ttomato: 'ff6347',\n\tQe: '40e0d0',\n\tviTet: 'ee82ee',\n\tJHt: 'f5deb3',\n\twEte: 'ffffff',\n\twEtesmoke: 'f5f5f5',\n\tLw: 'ffff00',\n\tLwgYF: '9acd32'\n};\nfunction unpack() {\n  const unpacked = {};\n  const keys = Object.keys(names$1);\n  const tkeys = Object.keys(map);\n  let i, j, k, ok, nk;\n  for (i = 0; i < keys.length; i++) {\n    ok = nk = keys[i];\n    for (j = 0; j < tkeys.length; j++) {\n      k = tkeys[j];\n      nk = nk.replace(k, map[k]);\n    }\n    k = parseInt(names$1[ok], 16);\n    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];\n  }\n  return unpacked;\n}\n\nlet names;\nfunction nameParse(str) {\n  if (!names) {\n    names = unpack();\n    names.transparent = [0, 0, 0, 0];\n  }\n  const a = names[str.toLowerCase()];\n  return a && {\n    r: a[0],\n    g: a[1],\n    b: a[2],\n    a: a.length === 4 ? a[3] : 255\n  };\n}\n\nconst RGB_RE = /^rgba?\\(\\s*([-+.\\d]+)(%)?[\\s,]+([-+.e\\d]+)(%)?[\\s,]+([-+.e\\d]+)(%)?(?:[\\s,/]+([-+.e\\d]+)(%)?)?\\s*\\)$/;\nfunction rgbParse(str) {\n  const m = RGB_RE.exec(str);\n  let a = 255;\n  let r, g, b;\n  if (!m) {\n    return;\n  }\n  if (m[7] !== r) {\n    const v = +m[7];\n    a = m[8] ? p2b(v) : lim(v * 255, 0, 255);\n  }\n  r = +m[1];\n  g = +m[3];\n  b = +m[5];\n  r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));\n  g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));\n  b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));\n  return {\n    r: r,\n    g: g,\n    b: b,\n    a: a\n  };\n}\nfunction rgbString(v) {\n  return v && (\n    v.a < 255\n      ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})`\n      : `rgb(${v.r}, ${v.g}, ${v.b})`\n  );\n}\n\nconst to = v => v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;\nconst from = v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);\nfunction interpolate(rgb1, rgb2, t) {\n  const r = from(b2n(rgb1.r));\n  const g = from(b2n(rgb1.g));\n  const b = from(b2n(rgb1.b));\n  return {\n    r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),\n    g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),\n    b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),\n    a: rgb1.a + t * (rgb2.a - rgb1.a)\n  };\n}\n\nfunction modHSL(v, i, ratio) {\n  if (v) {\n    let tmp = rgb2hsl(v);\n    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));\n    tmp = hsl2rgb(tmp);\n    v.r = tmp[0];\n    v.g = tmp[1];\n    v.b = tmp[2];\n  }\n}\nfunction clone(v, proto) {\n  return v ? Object.assign(proto || {}, v) : v;\n}\nfunction fromObject(input) {\n  var v = {r: 0, g: 0, b: 0, a: 255};\n  if (Array.isArray(input)) {\n    if (input.length >= 3) {\n      v = {r: input[0], g: input[1], b: input[2], a: 255};\n      if (input.length > 3) {\n        v.a = n2b(input[3]);\n      }\n    }\n  } else {\n    v = clone(input, {r: 0, g: 0, b: 0, a: 1});\n    v.a = n2b(v.a);\n  }\n  return v;\n}\nfunction functionParse(str) {\n  if (str.charAt(0) === 'r') {\n    return rgbParse(str);\n  }\n  return hueParse(str);\n}\nclass Color {\n  constructor(input) {\n    if (input instanceof Color) {\n      return input;\n    }\n    const type = typeof input;\n    let v;\n    if (type === 'object') {\n      v = fromObject(input);\n    } else if (type === 'string') {\n      v = hexParse(input) || nameParse(input) || functionParse(input);\n    }\n    this._rgb = v;\n    this._valid = !!v;\n  }\n  get valid() {\n    return this._valid;\n  }\n  get rgb() {\n    var v = clone(this._rgb);\n    if (v) {\n      v.a = b2n(v.a);\n    }\n    return v;\n  }\n  set rgb(obj) {\n    this._rgb = fromObject(obj);\n  }\n  rgbString() {\n    return this._valid ? rgbString(this._rgb) : undefined;\n  }\n  hexString() {\n    return this._valid ? hexString(this._rgb) : undefined;\n  }\n  hslString() {\n    return this._valid ? hslString(this._rgb) : undefined;\n  }\n  mix(color, weight) {\n    if (color) {\n      const c1 = this.rgb;\n      const c2 = color.rgb;\n      let w2;\n      const p = weight === w2 ? 0.5 : weight;\n      const w = 2 * p - 1;\n      const a = c1.a - c2.a;\n      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;\n      w2 = 1 - w1;\n      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;\n      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;\n      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;\n      c1.a = p * c1.a + (1 - p) * c2.a;\n      this.rgb = c1;\n    }\n    return this;\n  }\n  interpolate(color, t) {\n    if (color) {\n      this._rgb = interpolate(this._rgb, color._rgb, t);\n    }\n    return this;\n  }\n  clone() {\n    return new Color(this.rgb);\n  }\n  alpha(a) {\n    this._rgb.a = n2b(a);\n    return this;\n  }\n  clearer(ratio) {\n    const rgb = this._rgb;\n    rgb.a *= 1 - ratio;\n    return this;\n  }\n  greyscale() {\n    const rgb = this._rgb;\n    const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);\n    rgb.r = rgb.g = rgb.b = val;\n    return this;\n  }\n  opaquer(ratio) {\n    const rgb = this._rgb;\n    rgb.a *= 1 + ratio;\n    return this;\n  }\n  negate() {\n    const v = this._rgb;\n    v.r = 255 - v.r;\n    v.g = 255 - v.g;\n    v.b = 255 - v.b;\n    return this;\n  }\n  lighten(ratio) {\n    modHSL(this._rgb, 2, ratio);\n    return this;\n  }\n  darken(ratio) {\n    modHSL(this._rgb, 2, -ratio);\n    return this;\n  }\n  saturate(ratio) {\n    modHSL(this._rgb, 1, ratio);\n    return this;\n  }\n  desaturate(ratio) {\n    modHSL(this._rgb, 1, -ratio);\n    return this;\n  }\n  rotate(deg) {\n    rotate(this._rgb, deg);\n    return this;\n  }\n}\n\nfunction index_esm(input) {\n  return new Color(input);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGt1cmtsZS9jb2xvci9kaXN0L2NvbG9yLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxTQUFTO0FBQzNDLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTO0FBQ2pELGVBQWUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVrTSIsInNvdXJjZXMiOlsiRDpcXGhhY2F0aG9uMlxcRzQyXFxub2RlX21vZHVsZXNcXEBrdXJrbGVcXGNvbG9yXFxkaXN0XFxjb2xvci5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAa3Vya2xlL2NvbG9yIHYwLjMuNFxuICogaHR0cHM6Ly9naXRodWIuY29tL2t1cmtsZS9jb2xvciNyZWFkbWVcbiAqIChjKSAyMDI0IEp1a2thIEt1cmtlbGFcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICovXG5mdW5jdGlvbiByb3VuZCh2KSB7XG4gIHJldHVybiB2ICsgMC41IHwgMDtcbn1cbmNvbnN0IGxpbSA9ICh2LCBsLCBoKSA9PiBNYXRoLm1heChNYXRoLm1pbih2LCBoKSwgbCk7XG5mdW5jdGlvbiBwMmIodikge1xuICByZXR1cm4gbGltKHJvdW5kKHYgKiAyLjU1KSwgMCwgMjU1KTtcbn1cbmZ1bmN0aW9uIGIycCh2KSB7XG4gIHJldHVybiBsaW0ocm91bmQodiAvIDIuNTUpLCAwLCAxMDApO1xufVxuZnVuY3Rpb24gbjJiKHYpIHtcbiAgcmV0dXJuIGxpbShyb3VuZCh2ICogMjU1KSwgMCwgMjU1KTtcbn1cbmZ1bmN0aW9uIGIybih2KSB7XG4gIHJldHVybiBsaW0ocm91bmQodiAvIDIuNTUpIC8gMTAwLCAwLCAxKTtcbn1cbmZ1bmN0aW9uIG4ycCh2KSB7XG4gIHJldHVybiBsaW0ocm91bmQodiAqIDEwMCksIDAsIDEwMCk7XG59XG5cbmNvbnN0IG1hcCQxID0gezA6IDAsIDE6IDEsIDI6IDIsIDM6IDMsIDQ6IDQsIDU6IDUsIDY6IDYsIDc6IDcsIDg6IDgsIDk6IDksIEE6IDEwLCBCOiAxMSwgQzogMTIsIEQ6IDEzLCBFOiAxNCwgRjogMTUsIGE6IDEwLCBiOiAxMSwgYzogMTIsIGQ6IDEzLCBlOiAxNCwgZjogMTV9O1xuY29uc3QgaGV4ID0gWy4uLicwMTIzNDU2Nzg5QUJDREVGJ107XG5jb25zdCBoMSA9IGIgPT4gaGV4W2IgJiAweEZdO1xuY29uc3QgaDIgPSBiID0+IGhleFsoYiAmIDB4RjApID4+IDRdICsgaGV4W2IgJiAweEZdO1xuY29uc3QgZXEgPSBiID0+ICgoYiAmIDB4RjApID4+IDQpID09PSAoYiAmIDB4Rik7XG5jb25zdCBpc1Nob3J0ID0gdiA9PiBlcSh2LnIpICYmIGVxKHYuZykgJiYgZXEodi5iKSAmJiBlcSh2LmEpO1xuZnVuY3Rpb24gaGV4UGFyc2Uoc3RyKSB7XG4gIHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuICB2YXIgcmV0O1xuICBpZiAoc3RyWzBdID09PSAnIycpIHtcbiAgICBpZiAobGVuID09PSA0IHx8IGxlbiA9PT0gNSkge1xuICAgICAgcmV0ID0ge1xuICAgICAgICByOiAyNTUgJiBtYXAkMVtzdHJbMV1dICogMTcsXG4gICAgICAgIGc6IDI1NSAmIG1hcCQxW3N0clsyXV0gKiAxNyxcbiAgICAgICAgYjogMjU1ICYgbWFwJDFbc3RyWzNdXSAqIDE3LFxuICAgICAgICBhOiBsZW4gPT09IDUgPyBtYXAkMVtzdHJbNF1dICogMTcgOiAyNTVcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDcgfHwgbGVuID09PSA5KSB7XG4gICAgICByZXQgPSB7XG4gICAgICAgIHI6IG1hcCQxW3N0clsxXV0gPDwgNCB8IG1hcCQxW3N0clsyXV0sXG4gICAgICAgIGc6IG1hcCQxW3N0clszXV0gPDwgNCB8IG1hcCQxW3N0cls0XV0sXG4gICAgICAgIGI6IG1hcCQxW3N0cls1XV0gPDwgNCB8IG1hcCQxW3N0cls2XV0sXG4gICAgICAgIGE6IGxlbiA9PT0gOSA/IChtYXAkMVtzdHJbN11dIDw8IDQgfCBtYXAkMVtzdHJbOF1dKSA6IDI1NVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGFscGhhID0gKGEsIGYpID0+IGEgPCAyNTUgPyBmKGEpIDogJyc7XG5mdW5jdGlvbiBoZXhTdHJpbmcodikge1xuICB2YXIgZiA9IGlzU2hvcnQodikgPyBoMSA6IGgyO1xuICByZXR1cm4gdlxuICAgID8gJyMnICsgZih2LnIpICsgZih2LmcpICsgZih2LmIpICsgYWxwaGEodi5hLCBmKVxuICAgIDogdW5kZWZpbmVkO1xufVxuXG5jb25zdCBIVUVfUkUgPSAvXihoc2xhP3xod2J8aHN2KVxcKFxccyooWy0rLmVcXGRdKykoPzpkZWcpP1tcXHMsXSsoWy0rLmVcXGRdKyklW1xccyxdKyhbLSsuZVxcZF0rKSUoPzpbXFxzLF0rKFstKy5lXFxkXSspKCUpPyk/XFxzKlxcKSQvO1xuZnVuY3Rpb24gaHNsMnJnYm4oaCwgcywgbCkge1xuICBjb25zdCBhID0gcyAqIE1hdGgubWluKGwsIDEgLSBsKTtcbiAgY29uc3QgZiA9IChuLCBrID0gKG4gKyBoIC8gMzApICUgMTIpID0+IGwgLSBhICogTWF0aC5tYXgoTWF0aC5taW4oayAtIDMsIDkgLSBrLCAxKSwgLTEpO1xuICByZXR1cm4gW2YoMCksIGYoOCksIGYoNCldO1xufVxuZnVuY3Rpb24gaHN2MnJnYm4oaCwgcywgdikge1xuICBjb25zdCBmID0gKG4sIGsgPSAobiArIGggLyA2MCkgJSA2KSA9PiB2IC0gdiAqIHMgKiBNYXRoLm1heChNYXRoLm1pbihrLCA0IC0gaywgMSksIDApO1xuICByZXR1cm4gW2YoNSksIGYoMyksIGYoMSldO1xufVxuZnVuY3Rpb24gaHdiMnJnYm4oaCwgdywgYikge1xuICBjb25zdCByZ2IgPSBoc2wycmdibihoLCAxLCAwLjUpO1xuICBsZXQgaTtcbiAgaWYgKHcgKyBiID4gMSkge1xuICAgIGkgPSAxIC8gKHcgKyBiKTtcbiAgICB3ICo9IGk7XG4gICAgYiAqPSBpO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICByZ2JbaV0gKj0gMSAtIHcgLSBiO1xuICAgIHJnYltpXSArPSB3O1xuICB9XG4gIHJldHVybiByZ2I7XG59XG5mdW5jdGlvbiBodWVWYWx1ZShyLCBnLCBiLCBkLCBtYXgpIHtcbiAgaWYgKHIgPT09IG1heCkge1xuICAgIHJldHVybiAoKGcgLSBiKSAvIGQpICsgKGcgPCBiID8gNiA6IDApO1xuICB9XG4gIGlmIChnID09PSBtYXgpIHtcbiAgICByZXR1cm4gKGIgLSByKSAvIGQgKyAyO1xuICB9XG4gIHJldHVybiAociAtIGcpIC8gZCArIDQ7XG59XG5mdW5jdGlvbiByZ2IyaHNsKHYpIHtcbiAgY29uc3QgcmFuZ2UgPSAyNTU7XG4gIGNvbnN0IHIgPSB2LnIgLyByYW5nZTtcbiAgY29uc3QgZyA9IHYuZyAvIHJhbmdlO1xuICBjb25zdCBiID0gdi5iIC8gcmFuZ2U7XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgY29uc3QgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgbGV0IGgsIHMsIGQ7XG4gIGlmIChtYXggIT09IG1pbikge1xuICAgIGQgPSBtYXggLSBtaW47XG4gICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgIGggPSBodWVWYWx1ZShyLCBnLCBiLCBkLCBtYXgpO1xuICAgIGggPSBoICogNjAgKyAwLjU7XG4gIH1cbiAgcmV0dXJuIFtoIHwgMCwgcyB8fCAwLCBsXTtcbn1cbmZ1bmN0aW9uIGNhbGxuKGYsIGEsIGIsIGMpIHtcbiAgcmV0dXJuIChcbiAgICBBcnJheS5pc0FycmF5KGEpXG4gICAgICA/IGYoYVswXSwgYVsxXSwgYVsyXSlcbiAgICAgIDogZihhLCBiLCBjKVxuICApLm1hcChuMmIpO1xufVxuZnVuY3Rpb24gaHNsMnJnYihoLCBzLCBsKSB7XG4gIHJldHVybiBjYWxsbihoc2wycmdibiwgaCwgcywgbCk7XG59XG5mdW5jdGlvbiBod2IycmdiKGgsIHcsIGIpIHtcbiAgcmV0dXJuIGNhbGxuKGh3YjJyZ2JuLCBoLCB3LCBiKTtcbn1cbmZ1bmN0aW9uIGhzdjJyZ2IoaCwgcywgdikge1xuICByZXR1cm4gY2FsbG4oaHN2MnJnYm4sIGgsIHMsIHYpO1xufVxuZnVuY3Rpb24gaHVlKGgpIHtcbiAgcmV0dXJuIChoICUgMzYwICsgMzYwKSAlIDM2MDtcbn1cbmZ1bmN0aW9uIGh1ZVBhcnNlKHN0cikge1xuICBjb25zdCBtID0gSFVFX1JFLmV4ZWMoc3RyKTtcbiAgbGV0IGEgPSAyNTU7XG4gIGxldCB2O1xuICBpZiAoIW0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1bNV0gIT09IHYpIHtcbiAgICBhID0gbVs2XSA/IHAyYigrbVs1XSkgOiBuMmIoK21bNV0pO1xuICB9XG4gIGNvbnN0IGggPSBodWUoK21bMl0pO1xuICBjb25zdCBwMSA9ICttWzNdIC8gMTAwO1xuICBjb25zdCBwMiA9ICttWzRdIC8gMTAwO1xuICBpZiAobVsxXSA9PT0gJ2h3YicpIHtcbiAgICB2ID0gaHdiMnJnYihoLCBwMSwgcDIpO1xuICB9IGVsc2UgaWYgKG1bMV0gPT09ICdoc3YnKSB7XG4gICAgdiA9IGhzdjJyZ2IoaCwgcDEsIHAyKTtcbiAgfSBlbHNlIHtcbiAgICB2ID0gaHNsMnJnYihoLCBwMSwgcDIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcjogdlswXSxcbiAgICBnOiB2WzFdLFxuICAgIGI6IHZbMl0sXG4gICAgYTogYVxuICB9O1xufVxuZnVuY3Rpb24gcm90YXRlKHYsIGRlZykge1xuICB2YXIgaCA9IHJnYjJoc2wodik7XG4gIGhbMF0gPSBodWUoaFswXSArIGRlZyk7XG4gIGggPSBoc2wycmdiKGgpO1xuICB2LnIgPSBoWzBdO1xuICB2LmcgPSBoWzFdO1xuICB2LmIgPSBoWzJdO1xufVxuZnVuY3Rpb24gaHNsU3RyaW5nKHYpIHtcbiAgaWYgKCF2KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGEgPSByZ2IyaHNsKHYpO1xuICBjb25zdCBoID0gYVswXTtcbiAgY29uc3QgcyA9IG4ycChhWzFdKTtcbiAgY29uc3QgbCA9IG4ycChhWzJdKTtcbiAgcmV0dXJuIHYuYSA8IDI1NVxuICAgID8gYGhzbGEoJHtofSwgJHtzfSUsICR7bH0lLCAke2Iybih2LmEpfSlgXG4gICAgOiBgaHNsKCR7aH0sICR7c30lLCAke2x9JSlgO1xufVxuXG5jb25zdCBtYXAgPSB7XG5cdHg6ICdkYXJrJyxcblx0WjogJ2xpZ2h0Jyxcblx0WTogJ3JlJyxcblx0WDogJ2JsdScsXG5cdFc6ICdncicsXG5cdFY6ICdtZWRpdW0nLFxuXHRVOiAnc2xhdGUnLFxuXHRBOiAnZWUnLFxuXHRUOiAnb2wnLFxuXHRTOiAnb3InLFxuXHRCOiAncmEnLFxuXHRDOiAnbGF0ZWcnLFxuXHREOiAnaWdodHMnLFxuXHRSOiAnaW4nLFxuXHRROiAndHVycXVvaXMnLFxuXHRFOiAnaGknLFxuXHRQOiAncm8nLFxuXHRPOiAnYWwnLFxuXHROOiAnbGUnLFxuXHRNOiAnZGUnLFxuXHRMOiAneWVsbG8nLFxuXHRGOiAnZW4nLFxuXHRLOiAnY2gnLFxuXHRHOiAnYXJrcycsXG5cdEg6ICdlYScsXG5cdEk6ICdpZ2h0ZycsXG5cdEo6ICd3aCdcbn07XG5jb25zdCBuYW1lcyQxID0ge1xuXHRPaWNlWGU6ICdmMGY4ZmYnLFxuXHRhbnRpcXVld0V0ZTogJ2ZhZWJkNycsXG5cdGFxdWE6ICdmZmZmJyxcblx0YXF1YW1hclJlOiAnN2ZmZmQ0Jyxcblx0YXp1WTogJ2YwZmZmZicsXG5cdGJlaWdlOiAnZjVmNWRjJyxcblx0YmlzcXVlOiAnZmZlNGM0Jyxcblx0YmxhY2s6ICcwJyxcblx0YmxhbktlZE9tb25kOiAnZmZlYmNkJyxcblx0WGU6ICdmZicsXG5cdFhldmlUZXQ6ICc4YTJiZTInLFxuXHRiUHduOiAnYTUyYTJhJyxcblx0YnVybHl3b29kOiAnZGViODg3Jyxcblx0Y2FNdFhlOiAnNWY5ZWEwJyxcblx0S2FydFl1c2U6ICc3ZmZmMDAnLFxuXHRLb2NUYXRlOiAnZDI2OTFlJyxcblx0Y1NPOiAnZmY3ZjUwJyxcblx0Y1NuZmxvd2VyWGU6ICc2NDk1ZWQnLFxuXHRjU25zaWxrOiAnZmZmOGRjJyxcblx0Y3JpbXNvbjogJ2RjMTQzYycsXG5cdGN5YW46ICdmZmZmJyxcblx0eFhlOiAnOGInLFxuXHR4Y3lhbjogJzhiOGInLFxuXHR4Z1RNblBkOiAnYjg4NjBiJyxcblx0eFdheTogJ2E5YTlhOScsXG5cdHhnWUY6ICc2NDAwJyxcblx0eGdZeTogJ2E5YTlhOScsXG5cdHhraGFraTogJ2JkYjc2YicsXG5cdHhtYWdGdGE6ICc4YjAwOGInLFxuXHR4VGl2ZWdZRjogJzU1NmIyZicsXG5cdHhTYW5nZTogJ2ZmOGMwMCcsXG5cdHhTY0VkOiAnOTkzMmNjJyxcblx0eFlkOiAnOGIwMDAwJyxcblx0eHNPbW9uOiAnZTk5NjdhJyxcblx0eHNIZ1lGOiAnOGZiYzhmJyxcblx0eFVYZTogJzQ4M2Q4YicsXG5cdHhVV2F5OiAnMmY0ZjRmJyxcblx0eFVnWXk6ICcyZjRmNGYnLFxuXHR4UWU6ICdjZWQxJyxcblx0eHZpVGV0OiAnOTQwMGQzJyxcblx0ZEFwcFJrOiAnZmYxNDkzJyxcblx0ZEFwc2t5WGU6ICdiZmZmJyxcblx0ZGltV2F5OiAnNjk2OTY5Jyxcblx0ZGltZ1l5OiAnNjk2OTY5Jyxcblx0ZG9kZ2VyWGU6ICcxZTkwZmYnLFxuXHRmaVlicmljazogJ2IyMjIyMicsXG5cdGZsU093RXRlOiAnZmZmYWYwJyxcblx0Zm9Zc3RXQW46ICcyMjhiMjInLFxuXHRmdUtzaWE6ICdmZjAwZmYnLFxuXHRnYVJzYlNvOiAnZGNkY2RjJyxcblx0Z2hvc3R3RXRlOiAnZjhmOGZmJyxcblx0Z1RkOiAnZmZkNzAwJyxcblx0Z1RNblBkOiAnZGFhNTIwJyxcblx0V2F5OiAnODA4MDgwJyxcblx0Z1lGOiAnODAwMCcsXG5cdGdZRkx3OiAnYWRmZjJmJyxcblx0Z1l5OiAnODA4MDgwJyxcblx0aG9uZXlNdzogJ2YwZmZmMCcsXG5cdGhvdHBSazogJ2ZmNjliNCcsXG5cdFJkaWFuWWQ6ICdjZDVjNWMnLFxuXHRSZGlnbzogJzRiMDA4MicsXG5cdGl2U3k6ICdmZmZmZjAnLFxuXHRraGFraTogJ2YwZTY4YycsXG5cdGxhdkZNcjogJ2U2ZTZmYScsXG5cdGxhdkZNclhzaDogJ2ZmZjBmNScsXG5cdGxhd25nWUY6ICc3Y2ZjMDAnLFxuXHRObW9uY0VmZm9uOiAnZmZmYWNkJyxcblx0WlhlOiAnYWRkOGU2Jyxcblx0WmNTTzogJ2YwODA4MCcsXG5cdFpjeWFuOiAnZTBmZmZmJyxcblx0WmdUTW5QZEx3OiAnZmFmYWQyJyxcblx0WldheTogJ2QzZDNkMycsXG5cdFpnWUY6ICc5MGVlOTAnLFxuXHRaZ1l5OiAnZDNkM2QzJyxcblx0WnBSazogJ2ZmYjZjMScsXG5cdFpzT21vbjogJ2ZmYTA3YScsXG5cdFpzSGdZRjogJzIwYjJhYScsXG5cdFpza3lYZTogJzg3Y2VmYScsXG5cdFpVV2F5OiAnNzc4ODk5Jyxcblx0WlVnWXk6ICc3Nzg4OTknLFxuXHRac3RBbFhlOiAnYjBjNGRlJyxcblx0Wkx3OiAnZmZmZmUwJyxcblx0bGltZTogJ2ZmMDAnLFxuXHRsaW1lZ1lGOiAnMzJjZDMyJyxcblx0bFJGOiAnZmFmMGU2Jyxcblx0bWFnRnRhOiAnZmYwMGZmJyxcblx0bWFQb246ICc4MDAwMDAnLFxuXHRWYXF1YW1hclJlOiAnNjZjZGFhJyxcblx0VlhlOiAnY2QnLFxuXHRWU2NFZDogJ2JhNTVkMycsXG5cdFZwdXJwTjogJzkzNzBkYicsXG5cdFZzSGdZRjogJzNjYjM3MScsXG5cdFZVWGU6ICc3YjY4ZWUnLFxuXHRWc3ByUmdnWUY6ICdmYTlhJyxcblx0VlFlOiAnNDhkMWNjJyxcblx0VnZpVGV0WWQ6ICdjNzE1ODUnLFxuXHRtaWRuaWdodFhlOiAnMTkxOTcwJyxcblx0bVJ0Y1lhbTogJ2Y1ZmZmYScsXG5cdG1pc3R5UHNlOiAnZmZlNGUxJyxcblx0bW9jY2FzUjogJ2ZmZTRiNScsXG5cdG5hdmFqb3dFdGU6ICdmZmRlYWQnLFxuXHRuYXZ5OiAnODAnLFxuXHRUZGxhY2U6ICdmZGY1ZTYnLFxuXHRUaXZlOiAnODA4MDAwJyxcblx0VGl2ZWRCYjogJzZiOGUyMycsXG5cdFNhbmdlOiAnZmZhNTAwJyxcblx0U2FuZ2VZZDogJ2ZmNDUwMCcsXG5cdFNjRWQ6ICdkYTcwZDYnLFxuXHRwT2VnVE1uUGQ6ICdlZWU4YWEnLFxuXHRwT2VnWUY6ICc5OGZiOTgnLFxuXHRwT2VRZTogJ2FmZWVlZScsXG5cdHBPZXZpVGV0WWQ6ICdkYjcwOTMnLFxuXHRwYXBheWF3RXA6ICdmZmVmZDUnLFxuXHRwSEtwdWZmOiAnZmZkYWI5Jyxcblx0cGVydTogJ2NkODUzZicsXG5cdHBSazogJ2ZmYzBjYicsXG5cdHBsdW06ICdkZGEwZGQnLFxuXHRwb3dNclhlOiAnYjBlMGU2Jyxcblx0cHVycE46ICc4MDAwODAnLFxuXHRZYmVjY2FwdXJwTjogJzY2MzM5OScsXG5cdFlkOiAnZmYwMDAwJyxcblx0UHN5YnJvd246ICdiYzhmOGYnLFxuXHRQeU9YZTogJzQxNjllMScsXG5cdHNhZGROYlB3bjogJzhiNDUxMycsXG5cdHNPbW9uOiAnZmE4MDcyJyxcblx0c2FuZHliUHduOiAnZjRhNDYwJyxcblx0c0hnWUY6ICcyZThiNTcnLFxuXHRzSHNoZWxsOiAnZmZmNWVlJyxcblx0c2lGbmE6ICdhMDUyMmQnLFxuXHRzaWx2ZXI6ICdjMGMwYzAnLFxuXHRza3lYZTogJzg3Y2VlYicsXG5cdFVYZTogJzZhNWFjZCcsXG5cdFVXYXk6ICc3MDgwOTAnLFxuXHRVZ1l5OiAnNzA4MDkwJyxcblx0c25vdzogJ2ZmZmFmYScsXG5cdHNwclJnZ1lGOiAnZmY3ZicsXG5cdHN0QWxYZTogJzQ2ODJiNCcsXG5cdHRhbjogJ2QyYjQ4YycsXG5cdHRlTzogJzgwODAnLFxuXHR0RXN0TjogJ2Q4YmZkOCcsXG5cdHRvbWF0bzogJ2ZmNjM0NycsXG5cdFFlOiAnNDBlMGQwJyxcblx0dmlUZXQ6ICdlZTgyZWUnLFxuXHRKSHQ6ICdmNWRlYjMnLFxuXHR3RXRlOiAnZmZmZmZmJyxcblx0d0V0ZXNtb2tlOiAnZjVmNWY1Jyxcblx0THc6ICdmZmZmMDAnLFxuXHRMd2dZRjogJzlhY2QzMidcbn07XG5mdW5jdGlvbiB1bnBhY2soKSB7XG4gIGNvbnN0IHVucGFja2VkID0ge307XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhuYW1lcyQxKTtcbiAgY29uc3QgdGtleXMgPSBPYmplY3Qua2V5cyhtYXApO1xuICBsZXQgaSwgaiwgaywgb2ssIG5rO1xuICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIG9rID0gbmsgPSBrZXlzW2ldO1xuICAgIGZvciAoaiA9IDA7IGogPCB0a2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgayA9IHRrZXlzW2pdO1xuICAgICAgbmsgPSBuay5yZXBsYWNlKGssIG1hcFtrXSk7XG4gICAgfVxuICAgIGsgPSBwYXJzZUludChuYW1lcyQxW29rXSwgMTYpO1xuICAgIHVucGFja2VkW25rXSA9IFtrID4+IDE2ICYgMHhGRiwgayA+PiA4ICYgMHhGRiwgayAmIDB4RkZdO1xuICB9XG4gIHJldHVybiB1bnBhY2tlZDtcbn1cblxubGV0IG5hbWVzO1xuZnVuY3Rpb24gbmFtZVBhcnNlKHN0cikge1xuICBpZiAoIW5hbWVzKSB7XG4gICAgbmFtZXMgPSB1bnBhY2soKTtcbiAgICBuYW1lcy50cmFuc3BhcmVudCA9IFswLCAwLCAwLCAwXTtcbiAgfVxuICBjb25zdCBhID0gbmFtZXNbc3RyLnRvTG93ZXJDYXNlKCldO1xuICByZXR1cm4gYSAmJiB7XG4gICAgcjogYVswXSxcbiAgICBnOiBhWzFdLFxuICAgIGI6IGFbMl0sXG4gICAgYTogYS5sZW5ndGggPT09IDQgPyBhWzNdIDogMjU1XG4gIH07XG59XG5cbmNvbnN0IFJHQl9SRSA9IC9ecmdiYT9cXChcXHMqKFstKy5cXGRdKykoJSk/W1xccyxdKyhbLSsuZVxcZF0rKSglKT9bXFxzLF0rKFstKy5lXFxkXSspKCUpPyg/OltcXHMsL10rKFstKy5lXFxkXSspKCUpPyk/XFxzKlxcKSQvO1xuZnVuY3Rpb24gcmdiUGFyc2Uoc3RyKSB7XG4gIGNvbnN0IG0gPSBSR0JfUkUuZXhlYyhzdHIpO1xuICBsZXQgYSA9IDI1NTtcbiAgbGV0IHIsIGcsIGI7XG4gIGlmICghbSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobVs3XSAhPT0gcikge1xuICAgIGNvbnN0IHYgPSArbVs3XTtcbiAgICBhID0gbVs4XSA/IHAyYih2KSA6IGxpbSh2ICogMjU1LCAwLCAyNTUpO1xuICB9XG4gIHIgPSArbVsxXTtcbiAgZyA9ICttWzNdO1xuICBiID0gK21bNV07XG4gIHIgPSAyNTUgJiAobVsyXSA/IHAyYihyKSA6IGxpbShyLCAwLCAyNTUpKTtcbiAgZyA9IDI1NSAmIChtWzRdID8gcDJiKGcpIDogbGltKGcsIDAsIDI1NSkpO1xuICBiID0gMjU1ICYgKG1bNl0gPyBwMmIoYikgOiBsaW0oYiwgMCwgMjU1KSk7XG4gIHJldHVybiB7XG4gICAgcjogcixcbiAgICBnOiBnLFxuICAgIGI6IGIsXG4gICAgYTogYVxuICB9O1xufVxuZnVuY3Rpb24gcmdiU3RyaW5nKHYpIHtcbiAgcmV0dXJuIHYgJiYgKFxuICAgIHYuYSA8IDI1NVxuICAgICAgPyBgcmdiYSgke3Yucn0sICR7di5nfSwgJHt2LmJ9LCAke2Iybih2LmEpfSlgXG4gICAgICA6IGByZ2IoJHt2LnJ9LCAke3YuZ30sICR7di5ifSlgXG4gICk7XG59XG5cbmNvbnN0IHRvID0gdiA9PiB2IDw9IDAuMDAzMTMwOCA/IHYgKiAxMi45MiA6IE1hdGgucG93KHYsIDEuMCAvIDIuNCkgKiAxLjA1NSAtIDAuMDU1O1xuY29uc3QgZnJvbSA9IHYgPT4gdiA8PSAwLjA0MDQ1ID8gdiAvIDEyLjkyIDogTWF0aC5wb3coKHYgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbmZ1bmN0aW9uIGludGVycG9sYXRlKHJnYjEsIHJnYjIsIHQpIHtcbiAgY29uc3QgciA9IGZyb20oYjJuKHJnYjEucikpO1xuICBjb25zdCBnID0gZnJvbShiMm4ocmdiMS5nKSk7XG4gIGNvbnN0IGIgPSBmcm9tKGIybihyZ2IxLmIpKTtcbiAgcmV0dXJuIHtcbiAgICByOiBuMmIodG8ociArIHQgKiAoZnJvbShiMm4ocmdiMi5yKSkgLSByKSkpLFxuICAgIGc6IG4yYih0byhnICsgdCAqIChmcm9tKGIybihyZ2IyLmcpKSAtIGcpKSksXG4gICAgYjogbjJiKHRvKGIgKyB0ICogKGZyb20oYjJuKHJnYjIuYikpIC0gYikpKSxcbiAgICBhOiByZ2IxLmEgKyB0ICogKHJnYjIuYSAtIHJnYjEuYSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gbW9kSFNMKHYsIGksIHJhdGlvKSB7XG4gIGlmICh2KSB7XG4gICAgbGV0IHRtcCA9IHJnYjJoc2wodik7XG4gICAgdG1wW2ldID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odG1wW2ldICsgdG1wW2ldICogcmF0aW8sIGkgPT09IDAgPyAzNjAgOiAxKSk7XG4gICAgdG1wID0gaHNsMnJnYih0bXApO1xuICAgIHYuciA9IHRtcFswXTtcbiAgICB2LmcgPSB0bXBbMV07XG4gICAgdi5iID0gdG1wWzJdO1xuICB9XG59XG5mdW5jdGlvbiBjbG9uZSh2LCBwcm90bykge1xuICByZXR1cm4gdiA/IE9iamVjdC5hc3NpZ24ocHJvdG8gfHwge30sIHYpIDogdjtcbn1cbmZ1bmN0aW9uIGZyb21PYmplY3QoaW5wdXQpIHtcbiAgdmFyIHYgPSB7cjogMCwgZzogMCwgYjogMCwgYTogMjU1fTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCA+PSAzKSB7XG4gICAgICB2ID0ge3I6IGlucHV0WzBdLCBnOiBpbnB1dFsxXSwgYjogaW5wdXRbMl0sIGE6IDI1NX07XG4gICAgICBpZiAoaW5wdXQubGVuZ3RoID4gMykge1xuICAgICAgICB2LmEgPSBuMmIoaW5wdXRbM10pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2ID0gY2xvbmUoaW5wdXQsIHtyOiAwLCBnOiAwLCBiOiAwLCBhOiAxfSk7XG4gICAgdi5hID0gbjJiKHYuYSk7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5mdW5jdGlvbiBmdW5jdGlvblBhcnNlKHN0cikge1xuICBpZiAoc3RyLmNoYXJBdCgwKSA9PT0gJ3InKSB7XG4gICAgcmV0dXJuIHJnYlBhcnNlKHN0cik7XG4gIH1cbiAgcmV0dXJuIGh1ZVBhcnNlKHN0cik7XG59XG5jbGFzcyBDb2xvciB7XG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQ29sb3IpIHtcbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBpbnB1dDtcbiAgICBsZXQgdjtcbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHYgPSBmcm9tT2JqZWN0KGlucHV0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2ID0gaGV4UGFyc2UoaW5wdXQpIHx8IG5hbWVQYXJzZShpbnB1dCkgfHwgZnVuY3Rpb25QYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHRoaXMuX3JnYiA9IHY7XG4gICAgdGhpcy5fdmFsaWQgPSAhIXY7XG4gIH1cbiAgZ2V0IHZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuICBnZXQgcmdiKCkge1xuICAgIHZhciB2ID0gY2xvbmUodGhpcy5fcmdiKTtcbiAgICBpZiAodikge1xuICAgICAgdi5hID0gYjJuKHYuYSk7XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG4gIHNldCByZ2Iob2JqKSB7XG4gICAgdGhpcy5fcmdiID0gZnJvbU9iamVjdChvYmopO1xuICB9XG4gIHJnYlN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQgPyByZ2JTdHJpbmcodGhpcy5fcmdiKSA6IHVuZGVmaW5lZDtcbiAgfVxuICBoZXhTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkID8gaGV4U3RyaW5nKHRoaXMuX3JnYikgOiB1bmRlZmluZWQ7XG4gIH1cbiAgaHNsU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZCA/IGhzbFN0cmluZyh0aGlzLl9yZ2IpIDogdW5kZWZpbmVkO1xuICB9XG4gIG1peChjb2xvciwgd2VpZ2h0KSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBjb25zdCBjMSA9IHRoaXMucmdiO1xuICAgICAgY29uc3QgYzIgPSBjb2xvci5yZ2I7XG4gICAgICBsZXQgdzI7XG4gICAgICBjb25zdCBwID0gd2VpZ2h0ID09PSB3MiA/IDAuNSA6IHdlaWdodDtcbiAgICAgIGNvbnN0IHcgPSAyICogcCAtIDE7XG4gICAgICBjb25zdCBhID0gYzEuYSAtIGMyLmE7XG4gICAgICBjb25zdCB3MSA9ICgodyAqIGEgPT09IC0xID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcbiAgICAgIHcyID0gMSAtIHcxO1xuICAgICAgYzEuciA9IDB4RkYgJiB3MSAqIGMxLnIgKyB3MiAqIGMyLnIgKyAwLjU7XG4gICAgICBjMS5nID0gMHhGRiAmIHcxICogYzEuZyArIHcyICogYzIuZyArIDAuNTtcbiAgICAgIGMxLmIgPSAweEZGICYgdzEgKiBjMS5iICsgdzIgKiBjMi5iICsgMC41O1xuICAgICAgYzEuYSA9IHAgKiBjMS5hICsgKDEgLSBwKSAqIGMyLmE7XG4gICAgICB0aGlzLnJnYiA9IGMxO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBpbnRlcnBvbGF0ZShjb2xvciwgdCkge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgdGhpcy5fcmdiID0gaW50ZXJwb2xhdGUodGhpcy5fcmdiLCBjb2xvci5fcmdiLCB0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnJnYik7XG4gIH1cbiAgYWxwaGEoYSkge1xuICAgIHRoaXMuX3JnYi5hID0gbjJiKGEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNsZWFyZXIocmF0aW8pIHtcbiAgICBjb25zdCByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgcmdiLmEgKj0gMSAtIHJhdGlvO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdyZXlzY2FsZSgpIHtcbiAgICBjb25zdCByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgY29uc3QgdmFsID0gcm91bmQocmdiLnIgKiAwLjMgKyByZ2IuZyAqIDAuNTkgKyByZ2IuYiAqIDAuMTEpO1xuICAgIHJnYi5yID0gcmdiLmcgPSByZ2IuYiA9IHZhbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBvcGFxdWVyKHJhdGlvKSB7XG4gICAgY29uc3QgcmdiID0gdGhpcy5fcmdiO1xuICAgIHJnYi5hICo9IDEgKyByYXRpbztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBuZWdhdGUoKSB7XG4gICAgY29uc3QgdiA9IHRoaXMuX3JnYjtcbiAgICB2LnIgPSAyNTUgLSB2LnI7XG4gICAgdi5nID0gMjU1IC0gdi5nO1xuICAgIHYuYiA9IDI1NSAtIHYuYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsaWdodGVuKHJhdGlvKSB7XG4gICAgbW9kSFNMKHRoaXMuX3JnYiwgMiwgcmF0aW8pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRhcmtlbihyYXRpbykge1xuICAgIG1vZEhTTCh0aGlzLl9yZ2IsIDIsIC1yYXRpbyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2F0dXJhdGUocmF0aW8pIHtcbiAgICBtb2RIU0wodGhpcy5fcmdiLCAxLCByYXRpbyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZGVzYXR1cmF0ZShyYXRpbykge1xuICAgIG1vZEhTTCh0aGlzLl9yZ2IsIDEsIC1yYXRpbyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcm90YXRlKGRlZykge1xuICAgIHJvdGF0ZSh0aGlzLl9yZ2IsIGRlZyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZXhfZXNtKGlucHV0KSB7XG4gIHJldHVybiBuZXcgQ29sb3IoaW5wdXQpO1xufVxuXG5leHBvcnQgeyBDb2xvciwgYjJuLCBiMnAsIGluZGV4X2VzbSBhcyBkZWZhdWx0LCBoZXhQYXJzZSwgaGV4U3RyaW5nLCBoc2wycmdiLCBoc2xTdHJpbmcsIGhzdjJyZ2IsIGh1ZVBhcnNlLCBod2IycmdiLCBsaW0sIG4yYiwgbjJwLCBuYW1lUGFyc2UsIHAyYiwgcmdiMmhzbCwgcmdiUGFyc2UsIHJnYlN0cmluZywgcm90YXRlLCByb3VuZCB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@kurkle/color/dist/color.esm.js\n");

/***/ })

};
;