

const key = "fc4cd1d6bfb63c6189f150d609548169"

function colocarDadosNaTela(dados){
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "ºC"
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
  document.querySelector(".img-previsao").src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  console.log(dados)

}

async function buscarCidade(cidade){
  
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
  
    colocarDadosNaTela (dados)



  

}
                    
function CliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value 

    buscarCidade(cidade)
}

