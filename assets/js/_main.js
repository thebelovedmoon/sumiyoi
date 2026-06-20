function init() { // root init (functions only!!)

  // .. functions must be initted before pageInit() and removeSplash()
  
  pageInit(); // per-page init
  removeSplash();

}

function removeSplash() {
  setTimeout(() => {
    document.querySelector(".loadingScr").setAttribute("style", "transform: translateY(-100vh); opacity: 0; pointer-events: none;");
    setTimeout(() => { document.querySelector(".loadingScr").remove(); }, 750);
  }, 1250);
}