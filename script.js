
  let isDot = false; //limpa o estado o caracter do ponto
  let isPlus = false; //limpa o estado o caracter do +
  let isMinus = false; //limpa o estado o caracter do -
  let isMulti = false; //limpa o estado o caracter do *
  let isDiv = false; //limpa o estado o caracter do /
 

//funcção para ligar e desligar a luz do visor
function lightOn() {
  //variaveis
  var display = document.getElementById("display"); //varivavel do visor
  display.classList.toggle("displayOn");
  var corpo = document.getElementById("fundo");
  corpo.classList.toggle("fundoEscuro");
  var onBtn = document.getElementById("toggle"); //varivavel do botão

  if (onBtn.classList.contains("fa-toggle-off")) {
    onBtn.classList.remove("fa-toggle-off");
    onBtn.classList.add("fa-toggle-on");
  } else {
    onBtn.classList.remove("fa-toggle-on");
    onBtn.classList.add("fa-toggle-off");
  }
}

//função para calcular

function calculation(value) {

      let zero = Array.from(value);
      
    switch (value) {

      case '0':
        
        for (let zeroCount = 1; zeroCount <= 2; zeroCount++) {
          if (zero[0] == 0 && zeroCount >=2) {
          console.log(zero);
          console.log(zeroCount);
          document.getElementById("mainDisplay").innerHTML = value.pop();  
          }      
        }

        isPlus = false; 
        isMinus = false; 
        isMulti = false; 
        isDiv = false; 
      break;
        case '1':
          case '2':
            case '3':
              case '4':
                case '5':
                  case '6':
                    case '7':
                      case '8':
                        case '9':
                      zeroCount = 0; 
                      isPlus = false; 
                      isMinus = false; 
                      isMulti = false; 
                      isDiv = false; 
      break;
      case '.':
        zeroCount = 0;
        if (isDot == false) {
          isDot = true;
        } else {
          value = '';
        } 
        break;

      case '+':
        isDot = false;
        if (isPlus == false) {
          isPlus = true;       
        } else {
          value.pop();
        } 
        break;

      case '-':
        isDot = false;
        if (isMinus == false) {
          isMinus = true;       
        } else {
          value.pop();
        } 
      break;

      case '/':
        isDot = false;
        if (isDiv == false) {
          isDiv = true;       
        } else {
          value.pop();
        } 
      break;

      case '*':
        isDot = false;
        if (isMulti == false) {
          isMulti = true;       
        } else {
          value.pop();
        } 
      break;

      case '(':
        isDot = false;
      break;

      case ')':
        isDot = false;
      break;
    
      default:
        break;
    }
        document.getElementById('mainDisplay').innerHTML += value ;

}
    document.addEventListener(
      "keydown",
      (event) => {
        console.log(isDot);
        let code = event.key;
        console.log(code);
        switch (code.toString()) {
          case '0':
            case '1':
              case '2':
                case '3':
                  case '4':
                    case '5':
                      case '6':
                        case '7':
                          case '8':
                            case '9':
                            isPlus = false; 
                            isMinus = false; 
                            isMulti = false; 
                            isDiv = false; 
            document.getElementById("mainDisplay").innerHTML += code;
          break;
            
          case '.':
            // case 'Period':
            if (isDot == false) {
              isDot = true;              
            } else {
              code = '';          
            } 
            document.getElementById("mainDisplay").innerHTML += code;
          break;

          case '+':
            isDot = false;
            if (isPlus == false) {
              isPlus = true;       
            } else {
              value.pop();
            } 
            document.getElementById("mainDisplay").innerHTML += code;
          break;

          case '-':
            isDot = false;
            if (isMinus == false) {
              isMinus = true;       
            } else {
              value.pop();
            } 
            document.getElementById("mainDisplay").innerHTML += code;
          break;

          case '/':
            isDot = false;
            if (isDiv == false) {
              isDiv = true;       
            } else {
              value.pop();
            } 
            document.getElementById("mainDisplay").innerHTML += code;
          break;

          case '*':
            isDot = false;
            if (isMulti == false) {
              isMulti = true;       
            } else {
              value.pop();
            } 
            document.getElementById("mainDisplay").innerHTML += code;
          break;

          case '(':
            isDot = false;
            
            document.getElementById("mainDisplay").innerHTML += code;
          break;

          case ')':
            isDot = false;
            
            document.getElementById("mainDisplay").innerHTML += code;
          break;

          case 'Enter':
            isDot = false;
            
            solve();          
          break;

          case 'Backspace':
            isDot = false;
            
            back();       
          break;

          case 'Delete':
            isDot = false;
            
            clearScrean();       
          break;

          default:
            break;
        }
      },
      false
    );

// calcula os valores e mostra no display
function solve() {
  // ler valor do visor
  var x = document.getElementById("mainDisplay").innerHTML;
  // calcular o resultado
  if (x === '') {
    y = 0;
  } else {
    var y = (parseFloat(eval(x)) * 10) / 10;
  }
  
  
  // escrever o resultado no visor
  document.getElementById("mainDisplay").innerHTML = y;
}

function clearScrean() {
  document.getElementById("mainDisplay").innerHTML = "";
  isDot = false;
}

function back() {
  var z = document.getElementById("mainDisplay").innerHTML;
  isDot = false;
  document.getElementById("mainDisplay").innerHTML = z.substr(0, z.length - 1);
}
