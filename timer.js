function countTimer() {
  // related code: https://www.w3schools.com/howto/howto_js_countdown.asp

  // Set the date we're counting down to
  let countDownDate = new Date("January 1, 2027 00:00:00 GMT+09:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(() => {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.querySelector(".ctr > div > h1.timer").innerHTML =
      `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".ctr > div > h1.timer").innerHTML = "00:00:00:00";
      setTimeout(() => {
        document.body.innerHTML = `
          <div class="ctr">
            <div>
              <p>this website is now closed. see you all on the other side!!</p>
              <p>click anywhere to visit the new website..</p>
            </div>
          </div>
        `;
        document.body.onclick = () => { window.open("https://177013.github.io"); }
      }, 0);
    }
  }, 1000);
}