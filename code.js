function checkBin1(x){
    var y = x.split("");
    var z = y.length;
    var s;
    var t
    for(i = 0; i < z;){
      s = Number(y[i]);
      if (s != 1 && s!= 0){
         t = 0;
        break;
      }else{
          i++;
      }
    }
    if(t == undefined){
       t = 1;
    }
    return t;
    }
    function bin2dec(x){
      return parseInt(x,2).toString(10);
    }
    function bin2hex(x){
      return parseInt(x,2).toString(16);
    }
    function bin2oct(x){
      return parseInt(x,2).toString(8);
    }
    
    function hex2dec(x){
      return parseInt(x,16).toString(10);
    }
    function hex2oct(x){
      return parseInt(x,16).toString(8);
    }
    function hex2bin(x){
      return parseInt(x,16).toString(2);
    }
    
    function oct2dec(x){
      return parseInt(x,8).toString(10);
    }
    function oct2hex(x){
      return parseInt(x,8).toString(16);
    }
    function oct2bin(x){
      return parseInt(x,8).toString(2);
    }
    
    function dec2bin(x){
      return parseInt(x,10).toString(2);
    }
    function dec2hex(x){
      return parseInt(x,10).toString(16);
    }
    function dec2oct(x){
      return parseInt(x,10).toString(8);
    }
    function resultBin(){
      var b = document.getElementById("bin").value;
      var i = parseInt(b,2);
      var j = i.toString(10);
      var k = Number(j);
      if(isNaN(k)){
        alert("It is not a binary number");
        reset();
      }
      else{
        if(checkBin1(b) == 0){
          alert("It's not binary number");
          reset();
        }else {
        document.getElementById("hex").value = bin2hex(b);
        document.getElementById("oct").value = bin2oct(b);
        document.getElementById("dec").value = bin2dec(b);
        }
      }
    
    }
    function resultDec(){
      var d = document.getElementById("dec").value;
      var i = parseInt(d,10);
      var j = i.toString(10);
      var k = Number(j);
      if(isNaN(k)){
        alert("It is not a decimel number")
        reset();
      }
      else{
        document.getElementById("hex").value = dec2hex(d);
        document.getElementById("oct").value = dec2oct(d);
        document.getElementById("bin").value = dec2bin(d);
      }
    }
    function resultHex(){
      var h = document.getElementById("hex").value;
      var i = parseInt(h,16);
      var j = i.toString(10);
      var k = Number(j);
      if(isNaN(k)){
        alert("It is not a hexadecimel number")
        reset();
      }
      else{
        document.getElementById("dec").value = hex2dec(h);
        document.getElementById("oct").value = hex2oct(h);
        document.getElementById("bin").value = hex2bin(h);
      }
    }
    function resultOct(){
      var o = document.getElementById("oct").value;
      var i = parseInt(o,8);
      var j = i.toString(10);
      var k = Number(j);
      if(isNaN(k)){
        alert("It is not an octal number")
        reset();
      }
      else{
        document.getElementById("dec").value = oct2dec(o);
        document.getElementById("hex").value = oct2hex(o);
        document.getElementById("bin").value = oct2bin(o);
      }
    }
    function reset(){
      document.getElementById("bin").value = "";
      document.getElementById("hex").value = "";
      document.getElementById("oct").value = "";
      document.getElementById("dec").value = "";
    }
    
    