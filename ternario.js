let valor1 = "Teste";

let valor2 = "Show";

let valor3 = "Legal";

let arrayDePossibilidade = [valor1, valor2, valor3];

const padrao1 = "Show";

const padrao2 = "Nada";

arrayDePossibilidade.includes(padrao1) // expected: P1 true
  ? console.log("P1", true)
  : console.log("P1", false);

arrayDePossibilidade.includes(padrao2) // expected: P2 false
  ? console.log("P2", true)
  : console.log("P2", false);

// Usando ternários com o *includes* que retorna: true || false
