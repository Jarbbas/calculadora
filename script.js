
/**
 * Inicialização de variaveis controlo para operadores
 */
let isDot = false; //inicializa a Falso a variavel de controlo para o estado do caracter "." (ponto)
let isZero = false //inicializa a Falso a variavel de controlo para o estado do caracter "0" (algarismo zero)
let isPlus = false; //inicializa a Falso a variavel de controlo para o estado do caracter "+" (operador soma)
let isMinus = false; //inicializa a Falso a variavel de controlo para o estado do caracter "-" (operador menos)
let isMulti = false; //inicializa a Falso a variavel de controlo para o estado do caracter "*" (operador multiplicação)
let isDiv = false; //inicializa a Falso a variavel de controlo para o estado do caracter "/" (operador divisão)

/** 
 * Declaração de uma variavel de controlo para controlo do "tamanho" 
 * do conteudo no ecrã principal e ao mesmo tempo, inicializa a calculadora com o caracter 0 
 */
 let visor = document.getElementById('mainDisplay').innerHTML = '0'


/**
 * Função para Desligar a luz de fundo e ligar a luz do ecrã da calculadora
 */
function lightOn() {
 /**
  * Variaveis locais, para controlo do CSS do conteudo
  */
  let display = document.getElementById("display"); //Recolhe o ID do elemento HTML para o visor da calculadora
  display.classList.toggle("displayOn"); // troca a class do elemento pela class - "displayOn"

  let corpo = document.getElementById("fundo"); // Id do elemnto HTML body 
  corpo.classList.toggle("fundoEscuro");  // troca a class do elemento pela class - "fundoEscuro"
  
  let onBtn = document.getElementById("toggle"); //Recolhe o Id do elemento que simula um botão "Toggle"
  let left_eye = document.getElementById("leftEye"); //Recolhe o ID do elemento HTML para o olho Escquerdo do Robo
  let right_eye = document.getElementById("rightEye"); //Recolhe o ID do elemento HTML para o olho Direiro do Robo
 
  /**
   * Condição de controlo para alternar o icon do toggle, dependendo do Id anterior 
   * Se o elemento onBtn tiver a class "fa-toggle-off"
   * adiciona a "fa-toggle-on" e remove a "fa-toggle-off"
   * Caso contrario, remove a "fa-toggle-on" e mantêm a "fa-toggle-off"
   * 
   * Ao mesmo tempo adiciona ou remove as classes dos olhos do Robo(Logo) 
   * para os mesmos se iluminarem
   */
  if (onBtn.classList.contains("fa-toggle-off")) { 
    onBtn.classList.remove("fa-toggle-off");
    onBtn.classList.add("fa-toggle-on");
    left_eye.classList.remove("robotEyeColorLight");
    right_eye.classList.remove("robotEyeColorLight");
    left_eye.classList.add("robotEyeColorDark");
    right_eye.classList.add("robotEyeColorDark");
  } else {
    onBtn.classList.remove("fa-toggle-on");
    onBtn.classList.add("fa-toggle-off");
    left_eye.classList.add("robotEyeColorLight");
    right_eye.classList.add("robotEyeColorLight");
    left_eye.classList.remove("robotEyeColorDark");
    right_eye.classList.remove("robotEyeColorDark");
  }
}

/** Função para efeitos de testes de variaveis */
function testes(value){
  let visor = document.getElementById('mainDisplay').innerHTML;

  /** Apresenta os prints na ferramenta DEV do browser 
   * para saber o valor das variaveis (controlo )
   */
  console.log("value :" + value);
  console.log("visor : "+ visor);
  console.log("visor.length : "+ visor.length);
  console.log("visor e value : "+visor+value);
  console.log("charAt : "+ visor.charAt(0));
  console.log("tamanho Real de chars no display : "+ (visor.length + 1));
  console.log("isDot : "+ isDot);
  console.log("isPlus : "+ isPlus);
  console.log("isMinus : "+ isMinus);
  console.log("isMulti : "+ isMulti);
  console.log("isDiv : "+ isDiv);

}

/** Função que vais trabalhar a lógica de todos os possiveis inputs da Calculadora  */
function numberInput(value) {

  /** Variaveis */
  let array = Array.from(value);
  let visor = document.getElementById('mainDisplay').innerHTML

  let screen = (visor+value);
  let parenthis_right = ')';
  let count_right = screen.split(parenthis_right).length - 1;
  let parenthis_left = '(';
  let count_left = screen.split(parenthis_left).length - 1;

  /** Inicio do ciclo switch para todas as possiveis combinações de inputs*/
  switch (value) {

    case '0':

       /**Validação para saber se o primeiro caracter no ecrã é "Zero"  
        * para não haver mais que algarismo zero, no inicio 00000x
        * QUE NÃO PODE ACONTECER
       */
        if (visor.length >= 1 && visor.charAt(0) == 0) {
          document.getElementById('mainDisplay').innerHTML += ''; 
        } else {
          document.getElementById('mainDisplay').innerHTML += value;
        }   

    break;
    
    /** Condições para os restantes algarismos do 1 ao 9 */
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      
        /** inicialização de todos a falso, para garantir que não temos operadores antes algraismos
         * A NÃO SER o operador menos (-) todos os outros são descartados
         */
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
          
      let validation_parenthis_before_dot = visor.slice(visor.length - 1);

          if ((visor.length == 0 && array[0] == '.') ) {
            value = '';
          } else if (validation_parenthis_before_dot == ')'){
            value = '';
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
        } else if(validation_frist_plus === "(+"){
          value.pop();
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
        } else if(validation_frist_div === "(/"){
          value.pop();
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
      } else if(validation_frist_multi === "(*"){
        value.pop();
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
     
      let parenthisValidation =  (count_left >= count_right);

      if (screen.charAt(0) == '0' && screen.charAt(1) == ')') {
        document.getElementById('mainDisplay').innerHTML = '0';
      } else if( parenthisValidation == true) { 
        document.getElementById('mainDisplay').innerHTML = screen;
      }  else {
        document.getElementById('mainDisplay').innerHTML = visor;
      }
 
      break;

      case 'Enter':
        isDot = false;

        solve();
        break;

      case 'Backspace':
        isDot = false;

        deleteInput();
        break;

      case 'Delete':
        isDot = false;

        clearScrean();
        break;

  } //fim do cliclo switch

  /**Chama a função de testes para validações */
  testes(value);
  
}

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

/**
 * Função que recebe os inputs do teclado
 */
 document.addEventListener(
  "keydown", (event) => {
    let key_name = event.key;
    numberInput(key_name);  //chama a função com regras todas.
  },
  false
);

