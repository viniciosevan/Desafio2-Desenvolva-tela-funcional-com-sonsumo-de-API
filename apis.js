
async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('estado').value = data.localidade;
    

    } catch (error){
      alert  (error.mensage);

    }
    
    
}



async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        
        if (data.current_weather) {
            const temperature = data.current_weather.temperature;
            const windSpeed = data.current_weather.windspeed;
            document.getElementById('resposta').innerHTML = `Temperatura: ${temperature}°C<br>Velocidade do vento: ${windSpeed} m/s`;
        } else {
            document.getElementById('resposta').innerHTML = 'Dados de clima atual não disponíveis';
        }
    } catch (error) {
        alert(error.message);
    }
}
