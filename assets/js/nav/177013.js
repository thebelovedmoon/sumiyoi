function showHeaderLogoWhenSize() {
  if (window.innerWidth < 480) { document.querySelector('img[yoshidaLogo]').src = '/sumiyoi/assets/images/177013/Project177013_logo_mini.jpg'; }
  else { document.querySelector('img[yoshidaLogo]').src = '/sumiyoi/assets/images/177013/Project177013_logo.png'; }
}

function headerResize() {
  if (window.innerWidth < 480) { document.querySelector('img[yoshidaLogo]').src = '/sumiyoi/assets/images/177013/Project177013_logo_mini.jpg'; }
  else { document.querySelector('img[yoshidaLogo]').src = '/sumiyoi/assets/images/177013/Project177013_logo.png'; }
}

function breakScreen() {
  document.querySelector(".brokenGlass").setAttribute("style", "display: block;");
  document.querySelector(".brokenGlassBG").setAttribute("style", "display: block;");
  document.querySelector("span[onclick='breakScreen();']").remove();
  document.querySelector("audio").src = "/sumiyoi/assets/audio/breaking-glass-83809.mp3";
  document.querySelector("audio").play();
  setTimeout(() => {
    document.querySelector(".brokenGlassBG").setAttribute("style", "opacity: 0;");
    document.querySelector(".brokenGlassBG").remove();
  }, 5000);
}