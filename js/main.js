let alunos = [
    { 
        nome: "Guzman", 
        email: "guzman@gmail.com", 
        telefone: 21935484773, 
        profissao: "frontend" 
    },
    { nome: "Tony", email: "tony@gmail.com", telefone: 21974450073, profissao: "backend" },
    { nome: "Zambada", email: "zambada@msn.com", telefone: 21979984073, profissao: "fullstack" },
    { nome: "ismael", email: "ismael@hotmail.com", telefone: 21954454075, profissao: "mobile" },
    { nome: "montana", email: "montana@yahoo.com", telefone: 21977458473, profissao: "mobile" },
    { nome: "zacaraste", email: "zacaraste@hotmail.com", telefone: 21944488576, profissao: "frontend" },
    { nome: "obvio", email: "obvio@gmail.com", telefone: 2173484973, profissao: "frontend" },
    { nome: "notielk", email: "notielk@msn.com", telefone: 21975584073, profissao: "frontend" },
  
];


// carregar os dados do array na tabela
window.onload = (event)=> {
    let tbody = document.querySelector("#myTable");
alunos.forEach((aluno, index) => {
    let tr = document.createElement("tr");

    let tdCod = document.createElement("td");
    let tdNome = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdTelefone = document.createElement("td");
    let tdProfissao = document.createElement("td");
    let tdBotao = document.createElement("td");

    tdCod.textContent = index;
    tdNome.textContent = aluno.nome;
    tdEmail.textContent = aluno.email;
    tdTelefone.textContent = aluno.telefone;
    tdProfissao.textContent = aluno.profissao;
    tdBotao.innerHTML = `<button class="btn-remover" onclick="remover(this)" >Remover</button>`

    tr.appendChild(tdCod);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdProfissao);
    tr.appendChild(tdBotao);

    tbody.appendChild(tr);


});

}

// window.onload = function algo () {

// }