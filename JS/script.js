function appendToDisplay(input){
      let display = document.getElementById("display");

      display.value = display.value+input;

    }
    function clearDisplay(){
      display.value = "";
    }
    function calculate(){
      display.value = eval(display.value);
    }
    function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}
