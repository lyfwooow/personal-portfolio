

function expand() {
  var msg = document.getElementById("message");
  var more = document.getElementById("more");
  var info = document.getElementById("moreinfo");

  if (more.style.display === "none") {
    info.innerHTML = "expand_less";
    more.style.display = "inline";
    msg.innerHTML = "close";
  } else {
    info.innerHTML = "expand_more";
    more.style.display = "none";
    msg.innerHTML = "click to read more";
  }
}



function changepage() {
  var x = document.getElementById("main-page");
  var y = document.getElementById("play-page");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function expand2() {
  var msg = document.getElementById("message2");
  var more = document.getElementById("more2");
  var info = document.getElementById("moreinfo2");

  if (more.style.display === "none") {
    info.innerHTML = "expand_less";
    more.style.display = "inline";
    msg.innerHTML = "close";
  } else {
    info.innerHTML = "expand_more";
    more.style.display = "none";
    msg.innerHTML = "click to read more";
  }
}


function expand3() {
  var msg = document.getElementById("message3");
  var more = document.getElementById("more3");
  var info = document.getElementById("moreinfo3");

  if (more.style.display === "none") {
    info.innerHTML = "expand_less";
    more.style.display = "inline";
    msg.innerHTML = "close";
  } else {
    info.innerHTML = "expand_more";
    more.style.display = "none";
    msg.innerHTML = "click to read more";
  }
}


function numberOnly(id) {
    var element = document.getElementById(id);
    var regex = /[^0-9]/gi;
    element.value = element.value.replace(regex, "");
}
