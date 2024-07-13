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