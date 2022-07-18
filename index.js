let delCount = 5;
let counter = null;

// Function to handle delete 
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

// Function to cancel delete
function cancelDelete() {
  clearInterval(counter);
  document.getElementById("delBtn").disabled = false;
  delCount = 5;
  document.getElementById("msg").innerHTML =""
  document.getElementById("counter").innerHTML = delCount;
}

// function to make text blink
let b = 5;
function blinkText() {
  let deleteText = document.getElementById("msg");
  deleteText.innerHTML = deleteText.innerHTML == "DELETED" ? "" : "DELETED";
  if (b == 0) {
    document.getElementById("msg").innerHTML = "DELETED";
  } else {
    b--;
    setTimeout("blinkText()", 800);
  }
}



// SECOND ===========================
let num =0
let clicks = document.getElementById('counter2')
let timeOut

function counter2(){
    clearTimeout(timeOut)
    num ++
    clicks.innerHTML = num
}

function resetCount(){
  timeOut = setTimeout(function(){
        num = 0
        clicks.innerHTML = 0
      
    }, 4000);

}

