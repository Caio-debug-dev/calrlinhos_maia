// Data do próximo grande evento (Exemplo: 15 de Dezembro de 2024, 18:00:00)
// Formato: Ano, Mês (0=Jan, 11=Dez), Dia, Hora, Minuto, Segundo
const targetDate = new Date(2025, 0, 15, 18, 0, 0).getTime();

// Atualiza a contagem a cada 1 segundo
const countdownInterval = setInterval(function() {

    // Pega a data e hora de hoje
    const now = new Date().getTime();

    // Encontra a distância entre hoje e a data alvo
    const distance = targetDate - now;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formata os números para ter sempre 2 dígitos (ex: 05, 12)
    const format = (num) => String(num).padStart(2, '0');

    // Insere os resultados nos elementos HTML
    document.getElementById("days").innerHTML = format(days);
    document.getElementById("hours").innerHTML = format(hours);
    document.getElementById("minutes").innerHTML = format(minutes);
    document.getElementById("seconds").innerHTML = format(seconds);

    // Se a contagem regressiva acabar
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>O EVENTO COMEÇOU!</h2>";
        // Você pode mudar o estilo ou adicionar um link direto para a live aqui.
    }
}, 1000); // Roda a cada 1000 milissegundos (1 segundo)