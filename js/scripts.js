/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function toggleObjectiveDetails(index) {
  const details = document.getElementById(`objective-details-${index}`);
  const allDetails = document.querySelectorAll(".objective-details");

  allDetails.forEach((detail, i) => {
    if (i !== index) {
      detail.classList.remove("active");
      setTimeout(() => {
        detail.style.maxHeight = "0";
      }, 50);
    }
  });

  if (details.classList.contains("active")) {
    details.classList.remove("active");
    setTimeout(() => {
      details.style.maxHeight = "0";
    }, 50);
  } else {
    details.classList.add("active");
    details.style.maxHeight = details.scrollHeight + "px";
  }
}

window.addEventListener("resize", () => {
  const activeDetails = document.querySelector(".objective-details.active");
  if (activeDetails) {
    activeDetails.style.maxHeight = activeDetails.scrollHeight + "px";
  }
});

// Questões do quiz 1
const quiz1 = [
  {
    pergunta: "1. Qual palavra-chave é usada para declarar uma constante?",
    opcoes: ["let", "var", "const", "define"],
    correta: 2
  },
  {
    pergunta: "2. O que acontece se você tentar alterar uma constante?",
    opcoes: ["Ela muda normalmente", "Erro é lançado", "Ela zera", "Ela vira variável"],
    correta: 1
  },
  {
    pergunta: "3. Qual dessas NÃO é uma boa prática para nomes de variáveis?",
    opcoes: ["camelCase", "Iniciar com número", "Ser descritivo", "Evitar espaços"],
    correta: 1
  },
  {
    pergunta: "4. O que significa mutável?",
    opcoes: ["Não pode mudar", "Muda automaticamente", "Pode ser alterado", "É constante"],
    correta: 2
  },
  {
    pergunta: "5. Qual o valor padrão de uma variável sem inicialização?",
    opcoes: ["null", "0", "undefined", "false"],
    correta: 2
  },
  {
    pergunta: "6. Const é ideal para:",
    opcoes: ["Valores que mudam", "Funções dinâmicas", "Valores fixos", "Laços de repetição"],
    correta: 2
  }
];

// Gerar perguntas automaticamente ao abrir o modal
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-form-1");
  quiz1.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p class="fw-bold">${q.pergunta}</p>
      ${q.opcoes
        .map((op, idx) => `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="q${i}" id="q${i}opt${idx}" value="${idx}">
            <label class="form-check-label" for="q${i}opt${idx}">
              ${op}
            </label>
          </div>
        `).join("")}
    `;
    container.appendChild(div);
  });
});

// Corrigir quiz
function corrigirQuiz1() {
  let acertos = 0;
  quiz1.forEach((q, i) => {
    const selecionado = document.querySelector(`input[name="q${i}"]:checked`);
    if (selecionado && parseInt(selecionado.value) === q.correta) {
      acertos++;
    }
  });

  const feedback = document.getElementById("quiz-feedback-1");
  feedback.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${quiz1.length}</strong> questões!`;
  feedback.classList.add(acertos >= 5 ? "text-success" : "text-danger");
  feedback.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Questões do quiz 2
const quiz2 = [
  {
    pergunta: "1. Qual função em JavaScript é usada para solicitar informações do usuário?",
    opcoes: ["console.log()", "input()", "prompt()", "alert()"],
    correta: 2
  },
  {
    pergunta: "2. Qual comando imprime uma mensagem no console do navegador?",
    opcoes: ["display()", "console.log()", "print()", "show()"],
    correta: 1
  },
  {
    pergunta: "3. Ao usar `prompt(\"Digite seu nome:\")`, o que acontece?",
    opcoes: [
      "O texto é exibido no console.",
      "Uma janela de alerta é exibida.",
      "Uma caixa para digitar aparece.",
      "Nada acontece."
    ],
    correta: 2
  },
  {
    pergunta: "4. O que o seguinte código exibe no console: `console.log(\"Olá, mundo!\")`?",
    opcoes: [
      "Nada, pois falta prompt.",
      "Olá, mundo!",
      "Erro de sintaxe",
      "Uma caixa de digitação aparece."
    ],
    correta: 1
  },
  {
    pergunta: "5. Qual é o tipo de interação que o `prompt()` fornece?",
    opcoes: [
      "Saída de dados",
      "Execução de função",
      "Entrada de dados",
      "Impressão de texto"
    ],
    correta: 2
  },
  {
    pergunta: "6. Para mostrar o valor digitado pelo usuário com `prompt()` no console, qual é o código correto?",
    opcoes: [
      "console.log(prompt);",
      "console.log(\"Digite seu nome:\");",
      "console.log(prompt(\"Digite seu nome:\"));",
      "prompt(console.log(\"Digite seu nome:\"));"
    ],
    correta: 2
  }
];

// Gerar perguntas automaticamente ao abrir o modal
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-form-2");
  quiz2.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p class="fw-bold">${q.pergunta}</p>
      ${q.opcoes
        .map((op, idx) => `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="q2_${i}" id="q2_${i}_opt${idx}" value="${idx}">
            <label class="form-check-label" for="q2_${i}_opt${idx}">
              ${op}
            </label>
          </div>
        `).join("")}
    `;
    container.appendChild(div);
  });
});

// Corrigir quiz 2
function corrigirQuiz2() {
  let acertos = 0;
  quiz2.forEach((q, i) => {
    const selecionado = document.querySelector(`input[name="q2_${i}"]:checked`);
    if (selecionado && parseInt(selecionado.value) === q.correta) {
      acertos++;
    }
  });

  const feedback = document.getElementById("quiz-feedback-2");
  feedback.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${quiz2.length}</strong> questões!`;
  feedback.classList.remove("text-success", "text-danger");
  feedback.classList.add(acertos >= 5 ? "text-success" : "text-danger");
  feedback.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Questões do quiz 3 – Estruturas de Seleção
const quiz3 = [
  {
    pergunta: "1. O que a estrutura `if` faz em JavaScript?",
    opcoes: [
      "Repete comandos várias vezes.",
      "Verifica se uma condição é verdadeira.",
      "Executa todos os blocos de código.",
      "Finaliza o programa."
    ],
    correta: 1
  },
  {
    pergunta: "2. Dado `let idade = 20;`, qual mensagem será exibida?\n\n```js\nif (idade >= 18) {\n  console.log(\"Maior de idade\");\n}\n```",
    opcoes: [
      "Nada será exibido.",
      "Erro de sintaxe.",
      "\"Maior de idade\"",
      "\"Menor de idade\""
    ],
    correta: 2
  },
  {
    pergunta: "3. Qual é a função do comando `break` dentro de um `switch`?",
    opcoes: [
      "Ignorar todos os casos.",
      "Executar todos os blocos seguintes.",
      "Encerrar o programa.",
      "Evitar que os próximos `case` sejam executados."
    ],
    correta: 3
  },
  {
    pergunta: "4. O que acontece se nenhum `case` do `switch` for correspondente e não houver `default`?",
    opcoes: [
      "O último `case` é executado.",
      "O programa reinicia o switch.",
      "Nada é executado.",
      "É exibida uma mensagem automática de erro."
    ],
    correta: 2
  },
  {
    pergunta: "5. Qual alternativa representa corretamente o uso de `switch`?",
    opcoes: [
      "switch (condição) { if: ... }",
      "switch variável { case x: ... }",
      "switch(x) { case 1: ... break; default: ... }",
      "if (x == 1) { case: ... }"
    ],
    correta: 2
  },
  {
    pergunta: "6. Qual estrutura é mais adequada quando se tem muitas opções baseadas em valores fixos?",
    opcoes: ["if/else", "while", "switch", "for"],
    correta: 2
  }
];

// Gerar perguntas do quiz 3
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-form-3");
  quiz3.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p class="fw-bold">${q.pergunta.replace(/\n/g, "<br>").replace(/```js|```/g, "")}</p>
      ${q.opcoes.map((op, idx) => `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="q3_${i}" id="q3_${i}_opt${idx}" value="${idx}">
          <label class="form-check-label" for="q3_${i}_opt${idx}">
            ${op}
          </label>
        </div>
      `).join("")}
    `;
    container.appendChild(div);
  });
});

// Corrigir Quiz 3
function corrigirQuiz3() {
  let acertos = 0;
  quiz3.forEach((q, i) => {
    const selecionado = document.querySelector(`input[name="q3_${i}"]:checked`);
    if (selecionado && parseInt(selecionado.value) === q.correta) {
      acertos++;
    }
  });

  const feedback = document.getElementById("quiz-feedback-3");
  feedback.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${quiz3.length}</strong> questões!`;
  feedback.classList.remove("text-success", "text-danger");
  feedback.classList.add(acertos >= 5 ? "text-success" : "text-danger");
  feedback.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Questões do quiz 4 – Estruturas de Repetição
const quiz4 = [
  {
    pergunta: "1. Qual estrutura é usada quando sabemos exatamente quantas vezes o código deve repetir?",
    opcoes: ["if", "while", "switch", "for"],
    correta: 3
  },
  {
    pergunta: "2. O que a estrutura `while` verifica antes de iniciar a repetição?",
    opcoes: [
      "A quantidade de linhas de código",
      "A declaração da variável",
      "Se a condição é verdadeira",
      "Se o número é par"
    ],
    correta: 2
  },
  {
    pergunta: "3. Dado o código abaixo, qual será o valor final de `n`?\n\n```js\nlet n = 0;\nwhile (n <= 2) {\n  n++;\n}\nconsole.log(n);\n```",
    opcoes: ["0", "1", "2", "3"],
    correta: 3
  },
  {
    pergunta: "4. Qual é a saída do seguinte código?\n\n```js\nfor (let i = 1; i <= 3; i++) {\n  console.log(i);\n}\n```",
    opcoes: [
      "0 1 2",
      "1 2 3",
      "2 3 4",
      "1 2 3 4"
    ],
    correta: 1
  },
  {
    pergunta: "5. O que acontece se a condição no `while` nunca for falsa?",
    opcoes: [
      "O código repete para sempre (loop infinito)",
      "Nada acontece",
      "Executa apenas uma vez",
      "Gera erro de sintaxe"
    ],
    correta: 0
  },
  {
    pergunta: "6. Em qual situação o `for` é mais indicado que o `while`?",
    opcoes: [
      "Quando não sabemos quantas repetições teremos",
      "Quando a repetição depende de resposta do usuário",
      "Quando temos número fixo de repetições",
      "Quando usamos switch"
    ],
    correta: 2
  }
];

// Gerar perguntas do quiz 4
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-form-4");
  quiz4.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p class="fw-bold">${q.pergunta.replace(/\n/g, "<br>").replace(/```js|```/g, "")}</p>
      ${q.opcoes.map((op, idx) => `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="q4_${i}" id="q4_${i}_opt${idx}" value="${idx}">
          <label class="form-check-label" for="q4_${i}_opt${idx}">
            ${op}
          </label>
        </div>
      `).join("")}
    `;
    container.appendChild(div);
  });
});

// Corrigir quiz 4
function corrigirQuiz4() {
  let acertos = 0;
  quiz4.forEach((q, i) => {
    const selecionado = document.querySelector(`input[name="q4_${i}"]:checked`);
    if (selecionado && parseInt(selecionado.value) === q.correta) {
      acertos++;
    }
  });

  const feedback = document.getElementById("quiz-feedback-4");
  feedback.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${quiz4.length}</strong> questões!`;
  feedback.classList.remove("text-success", "text-danger");
  feedback.classList.add(acertos >= 5 ? "text-success" : "text-danger");
  feedback.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Questões do quiz 5 – Vetores
const quiz5 = [
  {
    pergunta: "1. O que é um vetor em JavaScript?",
    opcoes: [
      "Um tipo de dado que armazena uma única variável.",
      "Um bloco de repetição.",
      "Uma estrutura que guarda múltiplos valores em índices numerados.",
      "Um número aleatório gerado automaticamente."
    ],
    correta: 2
  },
  {
    pergunta: "2. Qual é o índice do primeiro elemento em um vetor?",
    opcoes: ["1", "0", "-1", "10"],
    correta: 1
  },
  {
    pergunta: "3. O que será exibido por `console.log(vet[2])` se `let vet = [10, 20, 30, 40]`?",
    opcoes: ["10", "20", "30", "40"],
    correta: 2
  },
  {
    pergunta: "4. Como percorremos um vetor usando um laço `for`?",
    opcoes: [
      "for (let i in vetor) { console.log(i); }",
      "for (let i = 0; i <= vetor.length; i++)",
      "for (let i = 1; i < vetor.length; i++)",
      "for (let i = 0; i < vetor.length; i++)"
    ],
    correta: 3
  },
  {
    pergunta: "5. Dado `let frutas = ['maçã', 'banana', 'laranja']`, qual comando imprime 'banana'?",
    opcoes: [
      "console.log(frutas[0]);",
      "console.log(frutas[1]);",
      "console.log(frutas[2]);",
      "console.log(frutas[3]);"
    ],
    correta: 1
  },
  {
    pergunta: "6. Qual vantagem de usar vetores?",
    opcoes: [
      "Eles substituem funções.",
      "Eles reduzem o número de operadores.",
      "Permitem armazenar e acessar muitos dados de forma organizada.",
      "Tornam os dados aleatórios por padrão."
    ],
    correta: 2
  }
];

// Gerar perguntas do quiz 5
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-form-5");
  quiz5.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p class="fw-bold">${q.pergunta}</p>
      ${q.opcoes.map((op, idx) => `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="q5_${i}" id="q5_${i}_opt${idx}" value="${idx}">
          <label class="form-check-label" for="q5_${i}_opt${idx}">
            ${op}
          </label>
        </div>
      `).join("")}
    `;
    container.appendChild(div);
  });
});

// Corrigir quiz 5
function corrigirQuiz5() {
  let acertos = 0;
  quiz5.forEach((q, i) => {
    const selecionado = document.querySelector(`input[name="q5_${i}"]:checked`);
    if (selecionado && parseInt(selecionado.value) === q.correta) {
      acertos++;
    }
  });

  const feedback = document.getElementById("quiz-feedback-5");
  feedback.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${quiz5.length}</strong> questões!`;
  feedback.classList.remove("text-success", "text-danger");
  feedback.classList.add(acertos >= 5 ? "text-success" : "text-danger");
  feedback.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Questões do quiz 6 – Funções
const quiz6 = [
  {
    pergunta: "1. O que é uma função em JavaScript?",
    opcoes: [
      "Uma estrutura que repete valores.",
      "Um tipo de variável especial.",
      "Um bloco de código que pode ser reutilizado.",
      "Um operador lógico avançado."
    ],
    correta: 2
  },
  {
    pergunta: "2. Qual comando usamos para devolver um valor de dentro da função?",
    opcoes: ["break", "continue", "return", "console.log"],
    correta: 2
  },
  {
    pergunta: "3. Dado o código abaixo, o que será impresso no console?\n\n```js\nfunction impMessage() {\n  console.log(\"Hello World\");\n}\nimpMessage();\n```",
    opcoes: ["Erro de sintaxe", "Hello World", "Nada", "impMessage"],
    correta: 1
  },
  {
    pergunta: "4. Em `function ehPar(n) { return n % 2 === 0 ? \"par\" : \"impar\"; }`, qual será o retorno de `ehPar(4)`?",
    opcoes: ["impar", "Erro", "undefined", "par"],
    correta: 3
  },
  {
    pergunta: "5. Quando devemos usar funções em um programa?",
    opcoes: [
      "Apenas ao declarar variáveis.",
      "Quando queremos repetir um mesmo bloco de código.",
      "Somente em loops.",
      "Para substituir condicionais."
    ],
    correta: 1
  },
  {
    pergunta: "6. Como definimos corretamente uma função que recebe um número e retorna o dobro?",
    opcoes: [
      "function dobro(n) { return n * 2; }",
      "dobro = function { return n * 2; }",
      "let dobro = n => n + n + n;",
      "function dobro() return n * 2;"
    ],
    correta: 0
  }
];

// Gerar perguntas do quiz 6
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-form-6");
  quiz6.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p class="fw-bold">${q.pergunta.replace(/\n/g, "<br>").replace(/```js|```/g, "")}</p>
      ${q.opcoes.map((op, idx) => `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="q6_${i}" id="q6_${i}_opt${idx}" value="${idx}">
          <label class="form-check-label" for="q6_${i}_opt${idx}">
            ${op}
          </label>
        </div>
      `).join("")}
    `;
    container.appendChild(div);
  });
});

// Corrigir quiz 6
function corrigirQuiz6() {
  let acertos = 0;
  quiz6.forEach((q, i) => {
    const selecionado = document.querySelector(`input[name="q6_${i}"]:checked`);
    if (selecionado && parseInt(selecionado.value) === q.correta) {
      acertos++;
    }
  });

  const feedback = document.getElementById("quiz-feedback-6");
  feedback.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${quiz6.length}</strong> questões!`;
  feedback.classList.remove("text-success", "text-danger");
  feedback.classList.add(acertos >= 5 ? "text-success" : "text-danger");
  feedback.scrollIntoView({ behavior: "smooth", block: "center" });
}
