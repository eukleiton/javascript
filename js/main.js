document.addEventListener('DOMContentLoaded', () => {

    const dataContainer = 
        document.getElementById('data-container');

    //funcao para tratar os erros das solicitacoes
    const handleErrors = (response) =>{
        if (!response.ok){
            throw Error(response.statusText);
        }
        return response;
    };

    // funcao para buscar od dados da API
    const fetchData = async () => {
        try {
            //fazendo uma requisicao GET
            const response = 
                await fetch('http://localhost:3000/filmes');
            
            // tratando o erro na rewsposta
            handleErrors(response);

            // converter os dodos para JSON
            const filmes = await response.json();
            console.log('>>>>>>>>>>> ', filmes)
        
            //exibindo os dados na pagina
            filmes.forEach(filme => {
                const filmeElement = 
                    document.createElement('div');
                filmeElement.innerHTML=`<strong>${filme.author}</strong><p>${filme.title}</p>`
                dataContainer.appendChild(filmeElement);
            });

            
        } catch (error) {
            console.log('erro ao buscar os dados', error);
        }
    };

    // chamendo a funcao para carregar os dados na tela
    fetchData();
});