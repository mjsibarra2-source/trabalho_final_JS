const cards1 = document.querySelectorAll("#cursos .card");


const cardSemImagem = cards1[3]; 
const img = cardSemImagem.querySelector("img");

img.src = "girlsCanCode.jpg";
img.alt = "Imagem do curso Girls Can Code!";

const style = document.createElement("style");
style.textContent = `
    #cursos .card {
        // height: 100%;
        display: flex;
        flex-direction: column;
    }

    #cursos .card-img-top {
        height: 180px;
        object-fit: cover;
        width: 100%;
    }

    #cursos .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    #cursos .card-body .btn {
        margin-top: auto;
    }
`;
document.head.appendChild(style);



// Validação do formulário de contato

const form = document.getElementById("formulario-contato");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let contacto = document.getElementById("contatoFormulario").value;
  let escola = document.getElementById("regiao").value;
  let mensagem = document.getElementById("mensagem").value;

  if (nome == "" || email == "" || contacto == "" || mensagem == "") {
    alert("Por favor preencha todos os campos, são obrigatórios.");
  } else if (isNaN(contacto) || contacto.length < 9) {
    alert("Por favor, insira um número de contacto válido.");
  } else if (!email.includes("@")) {
    alert("Por favor, insira um email válido.");
  } else if (escola == "") {
    alert("Por favor, selecione uma região válida.");
  } else {
    // Ajax com Fetch API
    const dados = new FormData();
    dados.append("nome", nome);
    dados.append("email", email);
    dados.append("contacto", contacto);
    dados.append("mensagem", mensagem);
    dados.append("escola", escola);

    fetch("processa_formulario.php", {
      method: "POST",
      body: dados,
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Formulário enviado com sucesso!");

        form.reset();
      })
      .catch((error) => {
        console.error("Erro no envio do formulário:", error);
        alert(
          "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde."
        );
      });
  }
});

const ul = document.querySelector("#sobre ul");
const novaLi = document.createElement("li");
const novaL2 = document.createElement("li");
novaLi.textContent = "Comunicação Digital";
novaL2.textContent = "Formação de formadores";
ul.appendChild(novaLi);
ul.appendChild(novaL2);

const botao = document.createElement("button");
botao.textContent = "Voltar ao Topo";
document.body.appendChild(botao);

botao.style.position = "fixed";
botao.style.bottom = "20px";
botao.style.right = "20px";

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
});

botao.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const cards = document.querySelectorAll("#cursos .card");

const cursosInfo = [
  {
    descricao: "O curso de Software Developer prepara profissionais para desenvolver aplicações robustas...",
    duracao: "500 horas",
    preco: "1200€"
  },
  {
    descricao: "O curso de Web Developer foca em desenvolvimento web moderno, incluindo HTML, CSS e JavaScript...",
    duracao: "400 horas",
    preco: "900€"
  },
  {
    descricao: "O curso de Front-End Developer aprofunda frameworks, UI/UX e criação de interfaces modernas...",
    duracao: "350 horas",
    preco: "850€"
  },
  {
    descricao: "O programa Girls Can Code! incentiva mulheres a entrar no mundo da tecnologia...",
    duracao: "300 horas",
    preco: "Gratuito"
  }
];


cards.forEach((card, index) => {
    const div = card.querySelector(".card-body");
    const oldButton = card.querySelector(".btn.btn-primary");
    const p = card.querySelector(".card-text");

    
    p.dataset.originalText = p.textContent;

    
    const button = document.createElement("button");
    button.textContent = "Saiba Mais";
    button.className = "btn btn-primary";

    
    div.replaceChild(button, oldButton);

    
    button.addEventListener("click", () => {
        if (button.textContent === "Fechar") {
            p.textContent = p.dataset.originalText;
            button.textContent = "Saiba Mais";
        } else {
            const info = cursosInfo[index];

            p.textContent = info.descricao;

            const p2 = document.createElement("p");
            const p3 = document.createElement("p");

            p2.textContent = "Duração: " + info.duracao;
            p3.textContent = "Preço: " + info.preco;

            p.append(p2, p3);

            button.textContent = "Fechar";
        }
    });
});


const divSelect = document.createElement("div");

const label1 = document.createElement("label");
label1.textContent = 'Quantos anos tem o Cesae?';
const select1 = document.createElement("select");
const option1 = document.createElement("option");
option1.textContent = "2";
option1.value = "2";
const option2 = document.createElement("option");
option2.textContent = "3";
option2.value = "3";
const option3 = document.createElement("option");
option3.textContent = "4";
option3.value = "4";
const option4 = document.createElement("option");
option4.textContent = "5";
option4.value = "5";        
const label2 = document.createElement("label");
label2.textContent = 'Quantos Polos tem o Cesae?';
const select2 = document.createElement("select");
const option5 = document.createElement("option");
option5.textContent = "5";
option5.value = "5";
const option6 = document.createElement("option");
option6.textContent = "4";
option6.value = "4";
const option7 = document.createElement("option");
option7.textContent = "2";
option7.value = "2";    
const option8 = document.createElement("option");
option8.textContent = "3";
option8.value = "3";    
const br = document.createElement("br");


const label3 = document.createElement("label");
label3.textContent = 'Quantos formandos por ano tem o Cesae em média?';
const select3 = document.createElement("select");
const option9 = document.createElement("option");
option9.textContent = "1500";
option9.value = "1500";
const option10 = document.createElement("option");
option10.textContent = "2000";
option10.value = "2000";
const option11 = document.createElement("option");
option11.textContent = "2500";
option11.value = "2500";
const option12 = document.createElement("option");
option12.textContent = "4000";
option12.value = "4000";

divSelect.appendChild(label1);
divSelect.appendChild(select1);
select1.appendChild(option1);
select1.appendChild(option2);
select1.appendChild(option3);
select1.appendChild(option4);

divSelect.appendChild(label2);
divSelect.appendChild(select2);
select2.appendChild(option5);
select2.appendChild(option6);
select2.appendChild(option7);
select2.appendChild(option8);

divSelect.appendChild(label3);
divSelect.appendChild(select3);
select3.appendChild(option9);
select3.appendChild(option10);
select3.appendChild(option11);
select3.appendChild(option12);

const quizButton = document.createElement("button");
quizButton.textContent = "Enviar Respostas";
divSelect.appendChild(br);
divSelect.appendChild(quizButton);

quizButton.addEventListener('click', ()=>{
    let resultado = 0;
    if(select1.value==='4'){
        resultado = 1;
    }else{
        resultado = resultado;
    }
     if(select2.value==='5'){
        resultado += 1;
    }else{
        resultado = resultado;
    }
        if(select3.value==='4000'){
        resultado += 1;
    }else{
        resultado = resultado;
    }

    const mostrarResultado = document.createElement('p');
    mostrarResultado.textContent= resultado + " pontos";
    divSelect.appendChild(mostrarResultado);
    

})

const sectionSelect = document.createElement("section");
sectionSelect.textContent = "Teste os seus conhecimentos sobre o Cesae: Cada resposta certa vale 1 ponto.";
sectionSelect.appendChild(divSelect);


const mapaSection = document.createElement('section');
mapaSection.className = 'container my-5';
mapaSection.innerHTML = `
    <h2>Nossa Localização</h2>
    <p>Visite o Cesae Digital no Porto:</p>
    <div style="width: 100%; height: 300px;">
        <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=Rua+Ciríaco+Cardoso+186,+4150-212+Porto&z=15&output=embed">
        </iframe>
    </div>
`;




const footer = document.querySelector('footer');

footer.insertAdjacentElement('beforebegin', sectionSelect);
sectionSelect.parentNode.insertBefore(mapaSection, sectionSelect);





// Animação dos cards dos cursos

// Estva a entrar em conflito com o CSS por isso esta comentado e as definições do hover prevalcem as que estao no CSS

//const cards = document.querySelectorAll('#cursos .card');

// cards.forEach(card => {
//     card.addEventListener('mouseover', () => {
//         card.style.transform = 'scale(1.1)';
//     })
//     card.addEventListener('mouseout', () => {
//         card.style.transform = 'scale(1.0)';
//     })
// });
