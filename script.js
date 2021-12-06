/**
 * Inicialização de variaveis controlo para operadores
 */

let isOperator = false; /** inicializa a varivavel a false para aceitar operadores */
/**
 * Declaração de uma variavel de controlo para controlo do "tamanho"
 * do conteudo no ecrã principal e ao mesmo tempo, inicializa a calculadora com o caracter 0
 */
let visor = (document.getElementById("mainDisplay").innerHTML = "0");

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
  corpo.classList.toggle("fundoEscuro"); // troca a class do elemento pela class - "fundoEscuro"

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
function testes(value) {
  let visor = document.getElementById("mainDisplay").innerHTML;

  /** Apresenta os prints na ferramenta DEV do browser
   * para saber o valor das variaveis (controlo )
   */
  console.log("value :" + value);
  console.log("visor : " + visor);
  console.log("visor.length : " + visor.length);
  console.log("visor e value : " + visor + value);
  console.log("charAt : " + visor.charAt(0));
  console.log("tamanho Real de chars no display : " + (visor.length + 1));
  console.log("isOperator : " + isOperator);
}

function displayEcran(value) {
  let display = document.getElementById("mainDisplay").innerHTML;

  /**  Pre-validação se o primeiro caracter é Zero  */
  if (display === "0" && display.length == 1) {
    /**
     * Caso o tamanho do display seja 1 e "Zero 0"
     * usamos o slice para retriar o elemento da possição 1 que será o algarismo "Zero 0"
     */
    document.getElementById("mainDisplay").innerHTML = display.slice(1) + value;
  } else {
    /** Caso contrário "adiciona/incrementa" o algarismo selecionado */
    document.getElementById("mainDisplay").innerHTML += value;
  }
}

/** Função qu vai validar o estado da varivel responsável pelos operadores
 * de forma a que os mesmos não se repitam uns atrás de outros
 */
function operatorValidation() {
  if (isOperator == false) {
    isOperator = true;
  } else {
    value.pop();
  }
}

/** Função que vais trabalhar a lógica de todos os possiveis inputs da Calculadora  */
function numberInput(value) {
  /** Variaveis */
  let visor = document.getElementById("mainDisplay").innerHTML;
  /** Variaveis relacionadas com os parenthis */
  let screen = visor + value;
  let parenthis_right = ")";
  let count_right = screen.split(parenthis_right).length - 1;
  let parenthis_left = "(";
  let count_left = screen.split(parenthis_left).length - 1;

  /** Inicio do ciclo switch para todas as possiveis combinações de inputs*/
  switch (value) {
    case "0":
      /**Validação para saber se o primeiro caracter no ecrã é "Zero"
       * para não haver mais que algarismo zero, no inicio 00000x
       * QUE NÃO PODE ACONTECER
       */
      if (visor.length >= 1 && visor.charAt(0) == 0) {
        document.getElementById("mainDisplay").innerHTML += "";
      } else {
        document.getElementById("mainDisplay").innerHTML += value;
      }

      break;

    /** Condições para os restantes algarismos do 1 ao 9 */
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      /**
       * Inicialização de todos os "operadores" a falso, para garantir que não temos operadores antes dos algarismos
       * A NÃO SER o operador menos (-)
       * todos os outros são descartados
       */
      isOperator = false;

      /** Mostrar o conteudo no ecran */
      displayEcran(value);

      break;

    case ".":
      /**
       * Variavel para perceber se o primeiro input
       * é um parenthis ??
       */
      let validation_parenthis_before_dot = visor.slice(visor.length - 1);

      /**
       * Se o tamanho do visor for Zero e o primeiro caracter for um "ponto ."
       * Valor passa a vazio,
       * caso contrario se o primeiro caracter for um ")"
       * valor passa também a vazio
       */
      if (visor.length == 0 && visor.charAt(0) == ".") {
        value = "";
      } else if (validation_parenthis_before_dot == ")") {
        value = "";
      }

      /**
       * Validação se temos um "ponto"
       */
      if (isDot == false) {
        isDot = true;
      } else {
        value = "";
      }

      /**
       * No final das validações incrementa o input à variavel value
       */
      document.getElementById("mainDisplay").innerHTML += value;

      break;

    case "+":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio
      /**
       * Varivavel para validar o conteudo no ecrã se o primeiro caracater é o operador pretendido
       */
      let validation_frist_plus = visor + value;

      /**
       * Condições de validação para "Zero" antes do operador
       */
      if (visor.length == 1 && validation_frist_plus === "0+") {
        value = "0";
      } else if (validation_frist_plus === "(+") {
        //validação do parenthis antes do operador
        value.pop();
      }

      /** Validação se temos um "Operador" */
      operatorValidation();

      /** Mostrar o conteudo no ecran */
      displayEcran(value);

      break;

    case "-":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

      /** Validação se temos um "Operador" */
      operatorValidation();

      /** Mostrar o conteudo no ecran */
      displayEcran(value);

      break;

    case "/":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

      /**
       * Validação dos primeiros caracateres de forma a evitar
       * que surjam operadores da divisão antes de um algarismo
       */
      let validation_frist_div = visor + value;

      if (visor.length == 1 && validation_frist_div === "0/") {
        value = "0";
      } else if (validation_frist_div === "(/") {
        value.pop();
      }

      /** Validação se temos um "Operador" */
      operatorValidation();

      /** Mostrar o conteudo no ecran */
      displayEcran(value);

      break;

    case "*":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

      /**
       * Validação dos primeiros caracateres de forma a evitar
       * que surjam operadores da multiplicação antes de um algarismo
       */
      let validation_frist_multi = visor + value;

      if (visor.length == 1 && validation_frist_multi === "0*") {
        value = "0";
      } else if (validation_frist_multi === "(*") {
        value.pop();
      }

      /** Validação se temos um "Operador" */
      operatorValidation();

      /** Mostrar o conteudo no ecran */
      displayEcran(value);

      break;

    case "(":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

      /** Mostrar o conteudo no ecran */
      displayEcran(value);

      break;

    case ")":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

      /**
       * Contabilização de quantos parenthis abertos temos e respetivas regras
       * não podemos ter um parethis aberto no inicio
       * não podemos ter parenthis abertos se o nª de fechados não for igual ou superior
       */
      let parenthisValidation = count_left >= count_right;

      if (screen.charAt(0) == "0" && screen.charAt(1) == ")") {
        document.getElementById("mainDisplay").innerHTML = "0";
      } else if (parenthisValidation == true) {
        document.getElementById("mainDisplay").innerHTML = screen;
      } else {
        document.getElementById("mainDisplay").innerHTML = visor;
      }

      break;

    case "Enter":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

      /** Realiza operações matemáticas */
      solve();
      break;

    case "Backspace":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

      /** Elimina o ultimo caracter do ecrã */
      deleteInput();
      break;

    case "Delete":
      isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

      /** Limpa o ecrã */
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
  /*
   * Valida se o input for vazio, se sim atribui o algarismo Zero,
   * Se não faz a conta
   */
  if (input === "") {
    output = 0;
  } else {
    /**
     * Função parseFloat "converte a string para numero"
     * A função eval() computa um código JavaScript representado como uma string.
     */
    var output = (parseFloat(eval(input)) * 1000) / 1000;
  }

  /**
   * validação para eliminar o Aviso da divisão por Zero
   */
  if (output == "Infinity") {
    output = "Não é possivel dividir por zero!";
  }

  /* Escreve o resultado no visor */
  document.getElementById("mainDisplay").innerHTML = output;
}

/**
 * Função que limpa o ecrã
 */
function clearScrean() {
  /**
   * Faz refresh à pagina, "limpando assim todo o conteudo"
   */
  location.reload();
}

/**
 * Função que elimina o "ultimo" input do ecrã
 */
function deleteInput() {
  let value = document.getElementById("mainDisplay").innerHTML;
  isDot = false; //inicializa a variavel como false, para que não possamos por um ponto ao lado de um operador no incio

  if (value.length == 0) {
    document.getElementById("mainDisplay").innerHTML = "0";
  } else {
    document.getElementById("mainDisplay").innerHTML = value.substr(
      0,
      value.length - 1
    );
  }
}

/**
 * Função que recebe os inputs do teclado
 */
document.addEventListener(
  "keydown",
  (event) => {
    let key_name = event.key;
    numberInput(key_name); //chama a função com regras todas.
  },
  false
);
