const chaveDaApi = "03f58dffa36a4b21ba920424232411";

const botaoDeBuscar = document.querySelector(".btn-busca");

botaoDeBuscar.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if (!cidade) return;

    const dados = await buscarDadosDaCidade(cidade);

    if (dados) preencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

    const response = await fetch(apiURL);

    if (response.status !== 200) return;

    const dados = response.json();

    return dados;
}

function preencherDadosNaTela(dados, cidade) {

    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;

    document.getElementById("cidade").textContent = cidade;
    document.getElementById("temperatura").textContent = `${temperatura} °C`;
    document.getElementById("condicao").textContent = condicao;
    document.getElementById("humidade").textContent = `${humidade}%`;
    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`;
    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);
}