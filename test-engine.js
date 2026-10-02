var S = require('./engine.js'), pass = 0, fail = 0;
function eq(n, a, b, t) { if (Math.abs(a - b) <= (t || 0.01)) pass++; else { fail++; console.log('FAIL', n, a, b); } }
function ok(n, c) { if (c) pass++; else { fail++; console.log('FAIL', n); } }
// PedalPrimer worked examples
eq('80 saddle', S.saddleHeight(80), 70.6, 0.05); eq('74 saddle', S.saddleHeight(74), 65.3, 0.05);
// OPTSC: frame = inseam x .67, seat = x .883
eq('frame road 80', S.frameSize(80, 'road', 'standard'), 53.6); eq('frame road 74', S.frameSize(74, 'road', 'standard'), 49.58);
eq('road within 0.5 of PedalPrimer 53.2', S.frameSize(80, 'road', 'standard'), 53.2, 0.5);
eq('road 74 within 0.5 of 49.2', S.frameSize(74, 'road', 'standard'), 49.2, 0.5);
// SizeGraf formulas
eq('hybrid 80', S.frameSize(80, 'hybrid', 'standard'), 46.6); eq('mtb 80', S.frameSize(80, 'mtb', 'standard'), 43.6);
eq('comfort +2', S.frameSize(80, 'road', 'comfort'), 55.6); eq('aggressive -2', S.frameSize(80, 'road', 'aggressive'), 51.6);
eq('style ignored on mtb', S.frameSize(80, 'mtb', 'comfort'), 43.6); eq('style ignored on hybrid', S.frameSize(80, 'hybrid', 'aggressive'), 46.6);
ok('bad type', S.frameSize(80, 'x', 'standard') === null);
// units
eq('in to cm', S.toCm(31.5, 'in'), 80.01, 0.01); eq('cm passthrough', S.toCm(80, 'cm'), 80);
var a = S.analyze(80, 'cm', 'road', 'standard');
eq('analyze saddle', a.saddleCm, 70.64); eq('analyze saddle in', a.saddleIn, 27.81, 0.01); eq('analyze frame in', a.frameIn, 21.1, 0.01); eq('analyze round', a.frameRound, 54);
eq('analyze old 0.65', a.oldFrameCm, 52);
var b = S.analyze(31.5, 'in', 'road', 'standard'); eq('inch input saddle', b.saddleCm, 70.65, 0.02);
ok('too small', S.analyze(40, 'cm', 'road', 'standard') === null); ok('too big', S.analyze(120, 'cm', 'road', 'standard') === null);
ok('too big in', S.analyze(50, 'in', 'road', 'standard') === null); ok('NaN', S.analyze(NaN, 'cm', 'road', 'standard') === null);
ok('bad type analyze', S.analyze(80, 'cm', 'zz', 'standard') === null);
eq('edge 55', S.analyze(55, 'cm', 'road', 'standard').inseamCm, 55); eq('edge 105', S.analyze(105, 'cm', 'road', 'standard').inseamCm, 105);
eq('frame mtb in 80', S.analyze(80, 'cm', 'mtb', 'standard').frameIn, 17.17, 0.01);
console.log(pass + '/' + (pass + fail) + ' pass'); process.exit(fail ? 1 : 0);
