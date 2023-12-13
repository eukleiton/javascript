// funcao para lidar com erros nas solicitacoes fetch
export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};