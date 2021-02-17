
function operate(op) {
    var num1 = document.getElementById("x").value;
    var num2 = document.getElementById("y").value;
    
    switch (op) {

        case '+': document.getElementById("result").innerHTML = parseFloat(num1) + parseFloat(num2);
            break;
        case '-': document.getElementById("result").innerHTML = parseFloat(num1) - parseFloat(num2);
            break;
        case '/': document.getElementById("result").innerHTML = parseFloat(num1) / parseFloat(num2);
            break;
        case '*': document.getElementById("result").innerHTML = parseFloat(num1) * parseFloat(num2);
            break;
        case '%':document.getElementById("result").innerHTML=parseFloat(num1)%parseFloat(num2);
            break;
       /* case '^':document.getElementById("result").innerHTML=parseFloat(num1)**(parseFloat(num2));
            
      break;*/
      case 'C':document.getElementById("result").innerHTML=0;
      break;

    }
}