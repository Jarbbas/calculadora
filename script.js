
/**
 * Inicialização de variaveis controlo para operadores
 */
let isDot = false; //inicializa a variavel de controlo para o estado do caracter "." (ponto)
let isZero = false //inicializa a variavel de controlo para o estado do caracter "0" (algarismo zero)
let isPlus = false; //inicializa a variavel de controlo para o estado do caracter "+" (operador soma)
let isMinus = false; //inicializa a variavel de controlo para o estado do caracter "-" (operador menos)
let isMulti = false; //inicializa a variavel de controlo para o estado do caracter "*" (operador multiplicação)
let isDiv = false; //inicializa a variavel de controlo para o estado do caracter "/" (operador divisão)

/** 
 * Declaração de uma variavel de controlo para controlo do "tamanho" 
 * do conteudo no ecrãn principal e ao mesmo tempo, inicializa a calculadora com o caracter 0 
 */
 let visor = document.getElementById('mainDisplay').innerHTML = '0'


/**
 * Função para Desligar a luz do ecrã e ligar a luz do ecrã da calculadora
 * "removendo" ou "adicionando" classes de CSS de forma a criar a
  * ilusão que o utilizador apagou a luz da sala.
  * Escurecendo o Fundo do Browser e ilumuninando o ecrã da calculadora
 */
function lightOn() {
 /**
  * Variaveis locais, para controlo do CSS do conteudo
  */
  let display = document.getElementById("display"); //Id do elemento HTML para o visor da calculadora
  display.classList.toggle("displayOn");
  let corpo = document.getElementById("fundo"); // Id do elemnto HTML body 
  corpo.classList.toggle("fundoEscuro");
  let onBtn = document.getElementById("toggle"); //Id do elemento que simula um botão "Toggle"

  /**
   * Condição de controlo para alternar o icon do toggle, dependendo do Id anterior 
   * Se o elemento onBtn tiver a class "fa-toggle-off"
   * adiciona a "fa-toggle-on" e remove a "fa-toggle-off"
   * Caso contrario, remove a "fa-toggle-on" e mantêm a "fa-toggle-off"
   */
  if (onBtn.classList.contains("fa-toggle-off")) { 
    onBtn.classList.remove("fa-toggle-off");
    onBtn.classList.add("fa-toggle-on");
  } else {
    onBtn.classList.remove("fa-toggle-on");
    onBtn.classList.add("fa-toggle-off");
  }
}

/** Função para efeitos de testes de variaveis */
function testes(value){
  let visor = document.getElementById('mainDisplay').innerHTML

  console.log("value :" + value);
  console.log("visor : "+ visor);
  console.log("visor.length : "+ visor.length);
  console.log("visor e value : "+visor+value);
  console.log("charAt : "+ visor.charAt(0));
  console.log("tamanho Real de chars no display : "+ (visor.length + 1));

}

function numberInput(value) {

  let array = Array.from(value);
  let visor = document.getElementById('mainDisplay').innerHTML

  // if (value != '' || typeof value !== 'undefined') {
  //     validation_value = true;
  //     validation_code = false;
  // } else {
  //   validation_value = false;
  //   validation_code = true;
  // }

  let screen = (visor+value);
  let parenthis_right = ')';
  let count_right = screen.split(parenthis_right).length - 1;
  let parenthis_left = '(';
  let count_left = screen.split(parenthis_left).length - 1;

  testes(value);

  switch (value) {

    case '0':

            if (visor.length >= 1 && visor.charAt(0) == 0) {
              value = '';
            } else {
              document.getElementById('mainDisplay').innerHTML += value;
            }
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
               
       isPlus = false; //inicializa a variavel de controlo para o estado do caracter "+" (operador soma)
       isMinus = false; //inicializa a variavel de controlo para o estado do caracter "-" (operador menos)
       isMulti = false; //inicializa a variavel de controlo para o estado do caracter "*" (operador multiplicação)
       isDiv = false; //inicializa a variavel de controlo para o estado do caracter "/" (operador divisão)

          if (visor === '0' && visor.length == 1) {
            document.getElementById('mainDisplay').innerHTML = visor.slice(1) + value;
          } else {
            document.getElementById("mainDisplay").innerHTML += value;
          }

    break;

    case '.':

          if (visor.length == 0 && array[0] == ".") {
            value = "";
          }

          if (isDot == false) {
            isDot = true;
          } else {
            value = '';
          }
          document.getElementById('mainDisplay').innerHTML += value;

    break;

    case '+':
          
        isDot = false;  
        let validation_frist_plus = (visor+value);

        if (visor.length == 1 && validation_frist_plus === "0+") {
          value = '0';
        }

        if (isPlus == false) {
          isPlus = true;
        } else {
          value.pop();
        }

        if (visor === '0' && visor.length == 1) {
          document.getElementById('mainDisplay').innerHTML = visor.slice(1) + value;
        } else {
          document.getElementById("mainDisplay").innerHTML += value;
        }

    break;

    case '-':
      isDot = false;
      if (isMinus == false) {
        isMinus = true;
      } else {
        value.pop();
      }

      if (visor === '0' && visor.length == 1) {
        document.getElementById('mainDisplay').innerHTML = visor.slice(1) + value;
      } else {
        document.getElementById("mainDisplay").innerHTML += value;
      }

      break;

    case '/':
      isDot = false;

      let validation_frist_div = (visor+value);

        if (visor.length == 1 && validation_frist_div === "0/") {
          value = '0';
        }

      if (isDiv == false) {
        isDiv = true;
      } else {
        value.pop();
      }

      if (visor === '0' && visor.length == 1) {
        document.getElementById('mainDisplay').innerHTML = visor.slice(1) + value;
      } else {
        document.getElementById("mainDisplay").innerHTML += value;
      }

      break;

    case '*':
      isDot = false;

      let validation_frist_multi = (visor+value);

      if (visor.length == 1 && validation_frist_multi === "0*") {
        value = '0';
      }

      if (isMulti == false) {
        isMulti = true;
      } else {
        value.pop();
      }

     if (visor === '0' && visor.length == 1) {
          document.getElementById('mainDisplay').innerHTML = visor.slice(1) + value;
        } else {
          document.getElementById("mainDisplay").innerHTML += value;
        }

      break;

    case '(':
      isDot = false;
      
      if (visor === '0' && visor.length == 1) {
        document.getElementById('mainDisplay').innerHTML = visor.slice(1) + value;
      } else {
        document.getElementById("mainDisplay").innerHTML += value;
      }

      break;

    case ')':
      isDot = false;
     
      // let check = visor.includes("("); 

      // console.log(check);
      console.log('count_right ' + count_right);
      console.log('count_leftt ' + count_left);
  
      let val =  (count_left >= count_right);

      console.log(val);

      if (screen.charAt(0) == '0' && screen.charAt(1) == ')') {
        // document.getElementById('mainDisplay').innerHTML = visor.slice(1) + value;
        document.getElementById('mainDisplay').innerHTML = '0';
        console.log('opção 1');
      } else if( val == true) { 
        document.getElementById('mainDisplay').innerHTML = screen;
        console.log('opção 2');
      } else {
        document.getElementById('mainDisplay').innerHTML = visor;
        console.log('opção 3');
        console.log(visor);
        console.log(screen);
      }
 
      break;

    default:
      break;
  }
  
}

// document.addEventListener(
//   "keydown", (event) => {
//     let code = event.key;
//     let array = Array.from(code);
//     let tamanho = document.getElementById('mainDisplay').innerHTML

//     switch (code) {
//       case '0':
      
//         isPlus = false;
//         isMinus = false;
//         isMulti = false;
//         isDiv = false;

//         if (tamanho.length >= 1 && array[tamanho.length - 1] == 0) {
//           code = '';
//         } else {
//           document.getElementById("mainDisplay").innerHTML += code;
//         }
//         break;

//       case '1':
//       case '2':
//       case '3':
//       case '4':
//       case '5':
//       case '6':
//       case '7':
//       case '8':
//       case '9':
//         console.log("array:" + tamanho);
//         console.log("size:" + tamanho.length);
//         if (tamanho === '0' && tamanho.length == 1) {
//           document.getElementById('mainDisplay').innerHTML = tamanho.slice(1) + code;
//         } else {
//           document.getElementById("mainDisplay").innerHTML += code;
//         }

//         isPlus = false;
//         isMinus = false;
//         isMulti = false;
//         isDiv = false;
//         break;

//       case '.':
//         // case 'Period':

//         if (tamanho.length == 0 && array[0] == ".") {
//           code = "";
//         }

//         if (isDot == false) {
//           isDot = true;
//         } else {
//           code = '';
//         }

//         document.getElementById("mainDisplay").innerHTML += code;
//         break;

//       case '+':
//         isDot = false;

//         if (tamanho.length == 0 && array[0] == "+") {
//           code = "";
//         }

//         if (isPlus == false) {
//           isPlus = true;
//         } else {
//           value.pop();
//         }
//         if (tamanho === '0' && tamanho.length == 1) {
//           document.getElementById('mainDisplay').innerHTML = tamanho.slice(1) + code;
//         } else {
//           document.getElementById("mainDisplay").innerHTML += code;
//         }
//         break;

//       case '-':
//         isDot = false;
//         if (isMinus == false) {
//           isMinus = true;
//         } else {
//           value.pop();
//         }

//         if (tamanho === '0' && tamanho.length == 1) {
//           document.getElementById('mainDisplay').innerHTML = tamanho.slice(1) + code;
//         } else {
//           document.getElementById("mainDisplay").innerHTML += code;
//         }
//         break;

//       case '/':
//         isDot = false;

//         if (tamanho.length == 0 && array[0] == "/") {
//           code = "";
//         }

//         if (isDiv == false) {
//           isDiv = true;
//         } else {
//           value.pop();
//         }
//         if (tamanho === '0' && tamanho.length == 1) {
//           document.getElementById('mainDisplay').innerHTML = tamanho.slice(1) + code;
//         } else {
//           document.getElementById("mainDisplay").innerHTML += code;
//         }
//         break;

//       case '*':
//         isDot = false;

//         if (tamanho.length == 0 && array[0] == "*") {
//           code = "";
//         }

//         if (isMulti == false) {
//           isMulti = true;
//         } else {
//           value.pop();
//         }

//         if (tamanho === '0' && tamanho.length == 1) {
//           document.getElementById('mainDisplay').innerHTML = tamanho.slice(1) + code;
//         } else {
//           document.getElementById("mainDisplay").innerHTML += code;
//         }
//         break;

//       case '(':
//         isDot = false;

//         if (tamanho === '0' && tamanho.length == 1) {
//           document.getElementById('mainDisplay').innerHTML = tamanho.slice(1) + code;
//         } else {
//           document.getElementById("mainDisplay").innerHTML += code;
//         }
//         break;

//       case ')':
//         isDot = false;

//         if (tamanho === '0' && tamanho.length == 1) {
//           document.getElementById('mainDisplay').innerHTML = tamanho.slice(1) + code;
//         } else {
//           document.getElementById("mainDisplay").innerHTML += code;
//         }
//         break;

//       case 'Enter':
//         isDot = false;

//         solve();
//         break;

//       case 'Backspace':
//         isDot = false;

//         deleteInput();
//         break;

//       case 'Delete':
//         isDot = false;

//         clearScrean();
//         break;

//       default:
//         break;
//     }
//   },
//   false
// );

/**
 * Função para efetuar calculos matemáticos
 */
function solve() {
  // ler valor do visor
  var input = document.getElementById("mainDisplay").innerHTML;
  // calcular o resultado
  if (input === '') {
    output = 0;
  } else {
    var output = (parseFloat(eval(input)) * 1000) / 1000;
  }

  if (output == "Infinity") {
    output = "Não é possivel dividir por zero!";
  }

  // escrever o resultado no visor
  document.getElementById("mainDisplay").innerHTML = output;
}

/**
 * Função que limpa o ecrã 
 */
function clearScrean() {
  // document.getElementById("mainDisplay").innerHTML = '0';
  // isDot = false;
  location.reload();
}

/**
 * Função que elimina o "ultimo" input do ecrã
 */
function deleteInput() {
  let value = document.getElementById("mainDisplay").innerHTML;
  isDot = false;

  if (value.length == 0) {
    document.getElementById("mainDisplay").innerHTML = '0';
  } else {
    document.getElementById("mainDisplay").innerHTML = value.substr(0, value.length - 1);
  }
}



