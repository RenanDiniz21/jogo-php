function go_full_screen(){
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }

let cls = 0;
function toques() {
    cls += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function exit_fullscreen() {

        let elem = document.documentElement;
        if (elem.exitFullscreen) {
            elem.exitFullscreen();
        } else if (elem.msExitFullscreen) {
            elem.msExitFullscreen();
        } else if (elem.mozCancelFullScreen) {
            elem.mozCancelFullScreen();
        } else if (elem.webkitExitFullscreen) {
            elem.webkitExitFullscreen();
        }
    }


function all() {
    
}

function changevolume(amount) {
  var audioobject = document.getElementsByTagName("audio")[0];
  audioobject.volume = amount;
}

