function navSetup() {
  if (new URLSearchParams(window.location.search).get("nav") == "1") {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("nav1").style.display = "none";
    document.getElementById("nav2").style.display = "block";
    document.body.style.cursor = "initial";
    document.getElementById("shatter").play();
  } else if (new URLSearchParams(window.location.search).get("nav") == "2") {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("nav1").style.display = "none";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("nav3").style.display = "block";
    document.body.style.filter = "invert(1)";
    document.body.style.cursor = "initial";
  } else if (new URLSearchParams(window.location.search).get("nav") == "3") {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("nav1").style.display = "none";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("nav3").style.display = "none";
    document.getElementById("nav4").style.display = "block";
    document.body.style.cursor = "initial";
    document.getElementById("breathing").play();
    document.getElementById("heartbeat").play();
    scanForInput();
  } else {
    dismissLoading();
  }
}

function dismissLoading() {
  setTimeout(() => {
    document.getElementById("loadingScreen").style.transform = "translateY(-100vh)";
    document.body.style.cursor = "initial";
    // typeWriteCode(0, '177013');
  }, 1000);
}

// function typeWriteCode(t, v) {
//   let vl = "'" + v + "'";
//   if (t < vl.length) {
//     document.getElementById("typeWrite") += vl.charAt(t);
//     t++;
//     setTimeout(typeWriteCode, 50);
//   }
// }

function fadeTranst(n) {
  document.getElementById("nav" + n).style.opacity = "0";
  if (n == 3) { document.body.style.filter = "invert(0)"; }
  setTimeout(() => {
    window.location.replace("?nav=" + n);
  }, 500);
}

function scanForInput() {
  document.addEventListener("keydown", (e) => {
    const target = "yoshida saki";
    if (!window.keysListen) {
      window.keysListen = {
        progress: 0,
        originalTitle: document.title,
      };
    }
    const expectedChar = target[window.keysListen.progress];
    if (e.key.length === 1 && e.key.toLowerCase() === expectedChar) {
      window.keysListen.progress++;
      document.title = target.slice(0, window.keysListen.progress);
      if (window.keysListen.progress === target.length) {
        window.keysListen.progress = 0;
        document.title = window.keysListen.originalTitle;
        document.body.style.opacity = "0";
        setTimeout(() => {
          window.location.replace("https://177013.github.io");
        }, 500);
      }
    } else if (e.key.length === 1) {
      window.keysListen.progress = 0;
      document.title = window.keysListen.originalTitle;
    }
  });
}