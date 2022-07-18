let delCount = 5;
let counter = null;

function deleteCount() {
  document.getElementById("delBtn").disabled = true;
  counter = setInterval(function () {
    if (delCount == 0) {
      clearInterval(counter);
      blinkText();
    } else {
      delCount--;
      document.getElementById("counter").innerHTML = delCount;
    }
  }, 1000);
}

function cancelDelete() {
  clearInterval(counter);
  document.getElementById("delBtn").disabled = false;
  delCount = 5;
  document.getElementById("counter").innerHTML = delCount;
}

let b = 3;
function blinkText() {
  let deleteText = document.getElementById("msg");
  deleteText.innerHTML = deleteText.innerHTML == "DELETED" ? "" : "DELETED";
  if (b == 0) {
    document.getElementById("msg").innerHTML = "DELETED";
  } else {
    b--;
    setTimeout("blinkText()", 1000);
  }
}
