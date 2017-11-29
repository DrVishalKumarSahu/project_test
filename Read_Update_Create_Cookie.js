function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setTpgGroup(){
  if(!readCookie("tpgGroup")){
    var pg = (Math.random() < 0.5) ? "A" : "B";
    document.cookie = "the old code to set the cookie."; 
  }
  return readCookie("tpgGroup");
}

//then in angular JS just read 

$scope.tpgGroup = readCookie("tpgGroup");
