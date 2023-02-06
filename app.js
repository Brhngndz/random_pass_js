function generatePassword() {
  let sifre = "";
  let symbols = "!@#$%^&*+~|}{[]:;?><,./-=_";
  let numbers = "0123456789";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cSet = [symbols, numbers, lowerCase, upperCase];

  for (let i = 0; i < 2; i++) {
    sifre += symbols[Math.floor(Math.random() * symbols.length)];
  }

  for (let i = 0; i < 3; i++) {
    sifre += numbers[Math.floor(Math.random() * numbers.length)];
  }

  sifre += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  sifre += upperCase[Math.floor(Math.random() * upperCase.length)];

  for (let i = sifre.length; i < 10; i++) {
    let rSet = cSet[Math.floor(Math.random() * 4)];
    sifre += rSet[Math.floor(Math.random() * rSet.length)];
  }

  let sArray = sifre.split("");
  for (let i = sArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sArray[i], sArray[j]] = [sArray[j], sArray[i]];
  }
  sifre = sArray.join("");

  let sifreC = document.getElementById("sifreC");
  sifreC.innerHTML = sifre;

  setTimeout(() => {
    sifreC.innerHTML = "";
  }, 10000);
  let timeleft = 9;
  let cd = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(cd);
    }

    document.getElementById("timer").innerHTML = `${timeleft}!`;
    timeleft -= 1;
    if (timeleft < 0) {
      document.getElementById("timer").innerHTML = "10";
    }
  }, 1000);
  btnDisable();
}

function btnDisable(id) {
  document.getElementById("myBtn").disabled = true;
  setTimeout(function () {
    document.getElementById("myBtn").disabled = false;
  }, 10000);
}

// http://ahrengot.com/tutorials/greensock-javascript-animation

var $cursor = $(".cursor");

function moveCursor(e) {
  $cursor.addClass("is-moving");

  TweenLite.to($cursor, 0.23, {
    left: e.pageX,
    top: e.pageY,
    ease: Power4.easOut,
  });

  clearTimeout(timer);

  var timer = setTimeout(function () {
    $cursor.removeClass("is-moving");
  }, 300);
}

$(window).on("mousemove", moveCursor);
