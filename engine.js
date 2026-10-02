(function (root) {
  'use strict';
  // Sources: OPTSC "Basics of bike fitting" (LeMond formulas: frame = inseam x 0.67, saddle = inseam x 0.883),
  // SizeGraf bike size calculator (hybrid = x0.67 - 7, mountain = x0.67 - 10, comfort +2 cm, aggressive -2 cm),
  // PedalPrimer saddle height calculator (80 cm inseam worked example).
  var CM_PER_IN = 2.54;
  var TYPES = { road: { label: 'Road, gravel or touring', off: 0, style: true }, hybrid: { label: 'City or hybrid', off: -7, style: false }, mtb: { label: 'Mountain', off: -10, style: false } };
  var STYLE = { comfort: 2, standard: 0, aggressive: -2 };
  function toCm(v, unit) { return unit === 'in' ? v * CM_PER_IN : v; }
  function saddleHeight(inseamCm) { return inseamCm * 0.883; }
  function frameSize(inseamCm, type, style) {
    var t = TYPES[type]; if (!t) return null;
    var adj = t.style ? (STYLE[style] || 0) : 0;
    return inseamCm * 0.67 + t.off + adj;
  }
  function analyze(inseam, unit, type, style) {
    var cm = toCm(inseam, unit);
    if (!(cm >= 55 && cm <= 105) || !TYPES[type]) return null;
    var fr = frameSize(cm, type, style), sd = saddleHeight(cm);
    return { inseamCm: cm, saddleCm: sd, saddleIn: sd / CM_PER_IN, frameCm: fr, frameIn: fr / CM_PER_IN, frameRound: Math.round(fr), oldFrameCm: cm * 0.65 + (TYPES[type].off), };
  }
  root.SaddleUp = { TYPES: TYPES, STYLE: STYLE, toCm: toCm, saddleHeight: saddleHeight, frameSize: frameSize, analyze: analyze };
  if (typeof module !== 'undefined') module.exports = root.SaddleUp;
})(typeof window !== 'undefined' ? window : globalThis);
