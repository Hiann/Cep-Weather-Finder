// Cole sua chave da OpenWeatherMap aqui entre as aspas
const apiKey = 'ada4e13043f7f095b31d4794267c95d8'; 

const btnBuscar = document.querySelector("#btnBuscar");
const cepInput = document.querySelector("#cepInput");

// Seleciona as linhas inteiras do HTML para poder esconder/mostrar
const linhaRua = document.querySelector("#linha-logradouro");
const linhaBairro = document.querySelector("#linha-bairro");

// Função principal de busca
btnBuscar.addEventListener("click", async () => {
    // Limpa o CEP (deixa apenas números)
    const cep = cepInput.value.replace(/\D/g, '');

    // Validação básica de tamanho
    if (cep.length !== 8) {
        alert("Por favor, digite um CEP válido com 8 números.");
        return;
    }

    try {
        // --- PASSO 1: Busca Endereço (ViaCEP) ---
        const responseCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dataCep = await responseCep.json();

        // Verifica se o CEP é inexistente na base dos Correios
        if (dataCep.erro) {
            throw new Error("CEP não encontrado na base do ViaCEP.");
        }

        // --- LÓGICA DE VISUALIZAÇÃO INTELIGENTE ---
        
        // Verifica se veio o nome da rua (Logradouro)
        if (dataCep.logradouro) {
            // Se tem rua, mostra a linha e preenche o texto
            linhaRua.style.display = "block";
            document.querySelector("#logradouro").innerText = dataCep.logradouro;
        } else {
            // Se não tem (CEP Único/Genérico), esconde a linha inteira
            linhaRua.style.display = "none";
        }

        // Verifica se veio o bairro
        if (dataCep.bairro) {
            linhaBairro.style.display = "block";
            document.querySelector("#bairro").innerText = dataCep.bairro;
        } else {
            linhaBairro.style.display = "none";
        }

        // Cidade e UF sempre existem se o CEP for válido
        document.querySelector("#localidade").innerText = `${dataCep.localidade} - ${dataCep.uf}`;


        // --- PASSO 2: Busca Clima (OpenWeatherMap) ---
        // Usa a cidade retornada pelo CEP para buscar o clima
        const cidade = encodeURIComponent(dataCep.localidade);
        const responseWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
        );

        // Tratamento de erros específicos da API de Clima
        if (!responseWeather.ok) {
            const errorData = await responseWeather.json();
            console.error("Erro na API de Clima:", errorData); 
            
            if (responseWeather.status === 401) {
                throw new Error("Chave da API de Clima inválida ou ainda não ativada.");
            } else if (responseWeather.status === 404) {
                throw new Error("Clima não encontrado para esta cidade.");
            } else {
                throw new Error(`Erro no serviço de Clima: ${responseWeather.status}`);
            }
        }

        const dataWeather = await responseWeather.json();

        // Preenche os dados do clima na tela
        document.querySelector("#temp").innerText = `${Math.round(dataWeather.main.temp)}°C`;
        document.querySelector("#descricao").innerText = dataWeather.weather[0].description;

        // TUDO CERTO: Mostra o cartão de resultado e esconde mensagens de erro
        document.querySelector("#resultado").classList.remove("hidden");
        document.querySelector("#erro").classList.add("hidden");

    } catch (error) {
        console.error("ERRO:", error);
        
        // DEU ERRO: Esconde o resultado e mostra a mensagem de erro vermelha
        document.querySelector("#resultado").classList.add("hidden");
        const caixaErro = document.querySelector("#erro");
        caixaErro.classList.remove("hidden");
        caixaErro.innerText = error.message; 
    }
});