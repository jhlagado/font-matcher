function resize(input, target, fallbackFont, targetFont) {
  if (!("sizeAdjust" in FontFace.prototype)) {
    const code = $("code");
    code.textContent = "sizeAdjust not supported in this browser.";
    return {
      sizeAdjust: `sizeAdjust not supported in this browser.`,
      ascentOverride: `n/a`,
    };
  }
  const fontFace = document.styleSheets["fallback-font-face"].cssRules[1];
  fontFace.style.src = `local("${fallbackFont}")`;
  const sizeAdjust = resizeText(
    input,
    target,
    fontFace,
    "offsetWidth",
    "sizeAdjust",
    "%",
    100
  );
  const fontFaceWholePage =
    document.styleSheets["fallback-font-face"].cssRules[0];
  fontFaceWholePage.style.sizeAdjust = `${sizeAdjust}%`;
  fontFaceWholePage.style.src = `local('${fallbackFont}')`;
  console.log("Updated", fontFaceWholePage.style.sizeAdjust);

  const code = $("code");
  code.textContent = `@font-face {
    font-family: "${targetFont}-fallback";
    size-adjust: ${sizeAdjust}%;
    src: local("${fallbackFont}");
}`;
  return {
    sizeAdjust: `${sizeAdjust}%`,
  };
}

function resizeText(
  input,
  target,
  fontFace,
  dimProperty,
  cssProperty,
  unit,
  spacing
) {
  const baseDim = input[dimProperty];
  let increment = 10;
  let directionChanges = 0;
  let direction = 1;
  const startDim = target[dimProperty];
  if (startDim > baseDim) {
    direction = -1;
  }
  let iterations = 0;
  while (increment > 0.0001 && iterations++ < 1000) {
    spacing = spacing + increment * direction;
    fontFace.style[cssProperty] = `${spacing}${unit}`;
    const curDim = target[dimProperty];
    console.log(
      dimProperty,
      baseDim,
      curDim,
      cssProperty,
      target.style[cssProperty],
      spacing,
      increment,
      direction
    );
    if (curDim == baseDim) {
      console.log("Jackpot");
      return spacing;
    }
    if (
      (curDim > baseDim && direction == 1) ||
      (curDim < baseDim && direction == -1)
    ) {
      console.log("Direction change");
      direction *= -1;
      directionChanges++;
      increment *= 0.1;
    }
  }
  return spacing.toFixed(2);
}
