document.addEventListener('DOMContentLoaded', () => {
    // pegando a div com id="data-container"
   const dataContainer = 
        document.getElementById('data-container'); 
    
    // funcao para lidar com erros nas solicitacoes fetch
    const handlerErrors = (response) => {
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response;
    };
    // funcao para buscar e exibir dados da API 
    const fetchData = async () => {
        try {
            // fazendo uma requisicao GET para obter produtos da API
            const response = 
                await fetch('http://localhost:3000/jogos');

            // lidando com erros na resposta 
            handlerErrors(response);

            // convertendo a resposta para JSON
            const data = await response.json();

            // exibindo os dados na pagina HTML
            data.forEach(jogo => {
                const tagDiv = 
                    document.createElement('div');
                        tagDiv.innerHTML = `<strong> ${jogo.nome} </strong> <p> ${jogo.preco} </p>`;

                        dataContainer.appendChild(tagDiv);
            });

        } catch (error) {
            console.log('Error >>>', error)
        }
    };
    // chamando a funcao para buscar e ebibir os dados na tela
    fetchData();
});


const createGame = () => {
    const jogoTeste = {
        
        "nome": "The legend of Zelda",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 100
        
      };
fetch('http://localhost:3000/jogos', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(jogoTeste)

})
.then(response => response.json())
.then(data => console.log('sucesso: ', data))
.catch((error) => console.log('Erro: ', error));




};