// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var volume = 3;
//0 for status: stoping
//1 for status: playing
var status = 0;
var currentTime = 0;
var iter = 6;

function init() {
  //initial the <input> element
  var temp = document.getElementById("player-time");
  temp.value = 0;
  temp.step = "1";
  temp.min = 0;
  temp.max = 180;
  //initial the first three volume level to have color
  for (i = 0; i < 3; i++) {
    document.getElementById("vl" + i).style.backgroundColor = "#9f5cc4";
  }

}

function volUp() {
  document.getElementById("vl" + volume).style.backgroundColor = "#9f5cc4";
  //handle the corner case
  if (volume == 5) {
    return;
  }
  volume++;
}

function volDown() {
  document.getElementById("vl" + volume).style.backgroundColor = "white";
  if (volume == 0) {
    return;
  }
  volume--;
}

function switchPlay() {
  //switch the icon
  var switchIcon = document.getElementById("switch");
  if (status == 0) {
    switchIcon.innerHTML = "<i class=\"material-icons\">pause</i> ";
    status = 1;
  } else {
    switchIcon.innerHTML = "<i class=\"material-icons\">play_arrow</i> ";
    status = 0;
  }
}

function nextSong() {
  currentTime = 0;
  status = 1;
  document.getElementById("switch").innerHTML = "<i class=\"material-icons\">pause</i> ";
  var Name = document.getElementById("player-song-name");
  var newsong;
  if (iter == 9) {
    iter = 0;
  } else {
    iter++;
  }
  var newsong = tracklist[iter];
  Name.innerText = newsong;

}

function prevSong() {
  currentTime = 0;
  status = 1;
  document.getElementById("switch").innerHTML = "<i class=\"material-icons\">pause</i> ";
  var Name = document.getElementById("player-song-name");
  var newsong;
  if (iter == 0) {
    iter = 9;
  } else {
    iter--;
  }
  var newsong = tracklist[iter];
  Name.innerText = newsong;
}

function secondsToMs(d) {
  d = Number(d);

  var min = Math.floor(d / 60);
  var sec = Math.floor(d % 60);

  return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

function updateTime() {
  if (status == 0) {
    return;
  }
  var temp = document.getElementById("player-time");
  temp.value = currentTime;
  var timeElapsed = document.getElementById("time-elapsed");
  timeElapsed.innerText = secondsToMs(currentTime);
  if (currentTime == 180) {
    nextSong();
  }
  currentTime++;

}


init();
var seconds = setInterval(function() {
  updateTime()
}, 1000);
var slider = document.getElementById("player-time");

//if move the slider, update the "time-elapsed"
slider.oninput = function() {
  currentTime = this.value;
  var timeElapsed = document.getElementById("time-elapsed");
  timeElapsed.innerText = secondsToMs(currentTime);
  if (currentTime == 180) {
    nextSong();
  }
}
