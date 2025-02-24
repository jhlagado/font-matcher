/*global FontFaceObserver resize */

var fallbacks = {};

async function setup() {
  const fonts = await (await fetch("./google-fonts.json")).json();
  let initial =
    new URLSearchParams(location.search).get("font") || "Fraunces";
  for (let name in fonts) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    document.getElementById("font-list").appendChild(option);
  }
  const selector = document.getElementById("font-selector");
  selector.value = initial;
  selector.onchange = function () {
    loadFont(fonts, this.value).catch(function (error) {
      console.error(error);
      alert("Loading font failed");
    });
  };
  selector.onchange.call(selector);
  document.getElementById("clear-button").addEventListener("click", function() {
    selector.value = "";
  });
  
  function loadFont(fonts, font) {
    if (!font) {
      return;
    }
    history.pushState(
      null,
      null,
      location.pathname + `?font=${encodeURIComponent(font)}`
    );
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      font
    )}`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
    let fallback = "Trebuchet MS";
    if (fonts[font].category == "serif") {
      fallback = "Georgia";
    }
    document.getElementById("font-style").textContent = `
      .font {
        font-family: '${font}', "fallback";
      }

      .fallback {
        font-family: "fallback";
      }
      
      .test-font {
        font-family: '${font}', "test-fallback";
      }

      .test-fallback {
        font-family: "test-fallback";
      }`;
    const face = new FontFaceObserver(font);
    return face.load().then(function () {
      const style = resize(document.getElementById("font"), document.getElementById("fallback"), fallback, font);
      fallbacks[font] = {
        style,
        fallback,
      };
    });
  }
}

setup();
