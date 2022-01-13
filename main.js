const clock = () => {
    var date    = new Date();
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;
  
    hours     = updateTime(hours);
    minutes   = updateTime(minutes);
    seconds   = updateTime(seconds);
    var name  = "Bapak Ibu guru dan karyawan";
  
    // if else condition
  
    midday = (hours >= 12) ? "PM" : "AM";
  
    document.getElementById("clock").innerHTML =
      ""+hours+"" + ":" + ""+minutes+"" + ":" + ""+seconds+"" + ""+midday+"";
  
    var time = setTimeout(function () {
      clock();
    }, 1000);
  
    //   Good Morning and Good Night Conditions
  
    if (hours < 12) {
      var greeting = "Good Morning " + name + " selamat bekerja semoga Tuhan memberkati";
    }
  
    if (hours >= 12 && hours <= 18) {
      var greeting = "Good Afternoon " + name + " Jangan lupa minum biar ngga dehidrasi";
    }
  
    if (hours >= 18 && hours <= 24) {
      var greeting = "Good Evening " + name;
    }
  
    document.getElementById("greetings").innerHTML = greeting;
  }
  
  const updateTime = (k) => {
    if (k < 10) {
      return "0" + k;
    } else {
      return k;
    }
  }
  
  // call clock function 
  clock();