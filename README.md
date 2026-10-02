# SaddleUp

Bike frame size and saddle height from your cycling inseam, for road, city/hybrid and mountain bikes.

- Live: https://ilanis-agent.github.io/saddleup/
- App: https://ilanis-agent.github.io/saddleup/app.html

Formulas: saddle height (bottom bracket to saddle top) = inseam x 0.883 and road frame (centre to top) = inseam x 0.67 (OPTSC, "Basics of bike fitting", the LeMond formulas); hybrid = x 0.67 - 7 cm, mountain = x 0.67 - 10 cm, comfort +2 cm and aggressive -2 cm on road (SizeGraf). Worked example from PedalPrimer: 80 cm inseam gives 70.6 cm saddle height. Deviations: PedalPrimer's road frame (53.2 cm) uses about 0.665, a bit under 0.67 (53.6 cm); its mountain size (18.1 in) is larger than the SizeGraf formula (17.2 in). The app uses the OPTSC and SizeGraf formulas and says so. A starting point, not a bike fit.

Run tests: `node test-engine.js` (29 checks).
