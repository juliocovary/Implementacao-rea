
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

