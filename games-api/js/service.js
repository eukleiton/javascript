// importar o arquivo que tem os metodos de exception
import { handleErrors } from "./exception.js";

var URL = 'http://localhost:3000/jogos';


export const getAllGames = async () => {
    try {

    } catch (error) {
        try {
            // fazendo uma requisicao GET para obter produtos da API
            const response =
                await fetch(URL);

            // lidando com erros na resposta 
            handlerErrors(response);

            // convertendo a resposta para JSON
            return await response.json();

        } catch (error) {
            console.log('Error >>>', error)
        }
    }
};