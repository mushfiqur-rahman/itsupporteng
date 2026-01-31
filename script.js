(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Set your launch date here!
  let targetDate = "Mar 31, 2026 00:00:00";

  const countDown = new Date(targetDate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour,
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute,
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second,
      );

      // Action when date is reached
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML =
          "<h3>We are Live!</h3>";
      }
    }, 0);
})();
