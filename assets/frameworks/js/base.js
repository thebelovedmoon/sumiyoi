let accessCode = "c3mt8+lv8+No8TEyMw==";

function init() {
  pageInit(); // perpage exec
}

function redir(r, p) {
  if ((r != null) && (p == null) && (r.startsWith("https://", 0))) {
    if ((r.startsWith("hanime", 8)) || (r.startsWith("fansly", 8))) {
      let r18 =
        "THIS IS AN 18+ SITE!!\n" +
        "are you sure to proceed?";
      if (confirm(r18) == true) {
        // let code = prompt("enter the access code:"),
        //   val = new Array();
        // do {
        //   val = prompt("enter three characters: ");
        //   if (val.length != 3) {
        //     alert("must EXACTLY be three chars.");
        //   }
        // } while (val.length != 3) {}
        window.open(r, "_blank")
      } else {
        alert("please be sure that you are 18 y/o to access the website.")
      }
    } else {
      window.open(r, "_blank");
    }
  } else if ((r != null) && (p.toLowerCase() == "nutaku")) {
    alert("Nutaku (18+) ID: " + r);
  } else if ((r != null) && (p.toLowerCase() == "johren")) {
    alert("Johren (18+) ID: " + r);
  } else {
    alert("under development!!");
  }
}

function to256(ec) {
  const utf8 = new TextEncoder().encode(ec);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}

// adapted from https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
function replAll(s, o) {
  for (const t in o) {
    s = s.replace(new RegExp(t, "g"), o[t])
  }
  return s;
}