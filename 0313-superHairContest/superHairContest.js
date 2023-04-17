var clicks = 0;

function hairdropDays() {
  clicks += 1;
  document.getElementById("hairdropDaysNum").innerHTML = clicks;
}

function hairdropResult() {
  var array = []
  for (var i = 0; i <= 3; i++) {
    array[i] = Math.floor(Math.random() * 10);
      document.getElementById("hairdropResultNum").innerHTML = array;
    }
  }


function rehairdrop() {
  clicks = 0
  document.getElementById("hairdropDaysNum").innerHTML = clicks;
  document.getElementById("hairdropResultNum").innerHTML = " ";
}


var history = [];
document.getElementById("hairdrop").addEventListener("click", function() {
  var content = document.getElementById("myInput").value;
  history.push(content);
  document.getElementById("myInput").value = "";
  showHistory();
});
