function HideReg(btn){
  document.getElementById("block_registration").style.display = "none";
  document.getElementById("login_page").style.display = "";

  btn.style.backgroundColor = "#ffe2b0";
  btn.style.color = "#cfab6b";

  document.getElementById("registration").style.backgroundColor = "#fcefd8";
  document.getElementById("registration").style.color = "#ffffff";
}

function HideLog(btn2){
  document.getElementById("block_registration").style.display = "inline";
  document.getElementById("login_page").style.display = "none";

  btn2.style.backgroundColor = "#ffe2b0";
  btn2.style.color = "#cfab6b";

  document.getElementById("log_in").style.backgroundColor = "#fcefd8";
  document.getElementById("log_in").style.color = "#ffffff";

}
