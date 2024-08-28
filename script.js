function sendData() {
    const film = document.getElementById('filmSelect').value;
    const horario = document.getElementById('horarioSelect').value;
    const cadeira = document.getElementById('cadeiraSelect').value;

    const horariopm = {
        'pm1': '13:40H',
        'pm2': '14:30H',
        'pm3': '15:10H'
    };

    const filmof = {
        'eAssimQueAcaba': 'É Assim Que Acaba',
        'deadpoolEWolverine': 'Deadpool e Wolverine',
        'meumalvadofavorito3': 'Meu Malvado Favorito 3'
    };

    const url = `index2.html?film=${encodeURIComponent(filmof[film])}&horario=${encodeURIComponent(horariopm[horario])}&cadeira=${encodeURIComponent(cadeira)}`;
    
    
    window.open(url, 'index2');
}


function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        film: params.get('film'),
        horario: params.get('horario'),
        cadeira: params.get('cadeira')
    };
}


function displayOrderDetails() {
    const params = getQueryParams();
    if (params.film && params.horario && params.cadeira) {
        const orderDetails = `
            <p><strong>Filme:</strong> ${decodeURIComponent(params.film)}</p>
            <p><strong>Horário:</strong> ${decodeURIComponent(params.horario)}</p>
            <p><strong>Cadeira:</strong> ${decodeURIComponent(params.cadeira)}</p>
        `;
        document.getElementById('orderDetails').innerHTML = orderDetails;
    }
}



document.addEventListener('DOMContentLoaded', function() {
    displayOrderDetails();
});

function sendData() {
    const film = document.getElementById('filmSelect').value;
    const horario = document.getElementById('horarioSelect').value;
    const cadeira = document.getElementById('cadeiraSelect').value;

    const horariopm = {
        'pm1': '13:40H',
        'pm2': '14:30H',
        'pm3': '15:10H'
    };

    const filmof = {
        'eAssimQueAcaba': 'É Assim Que Acaba',
        'deadpoolEWolverine': 'Deadpool e Wolverine',
        'meumalvadofavorito3': 'Meu Malvado Favorito 3'
    };

    const url = `index2.html?film=${encodeURIComponent(filmof[film])}&horario=${encodeURIComponent(horariopm[horario])}&cadeira=${encodeURIComponent(cadeira)}`;
    
    
    window.open(url, 'index2');
}


function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        film: params.get('film'),
        horario: params.get('horario'),
        cadeira: params.get('cadeira')
    };
}


function displayOrderDetails() {
    const params = getQueryParams();
    if (params.film && params.horario && params.cadeira) {
        const orderDetails = `
            <p><strong>Filme:</strong> ${decodeURIComponent(params.film)}</p>
            <p><strong>Horário:</strong> ${decodeURIComponent(params.horario)}</p>
            <p><strong>Cadeira:</strong> ${decodeURIComponent(params.cadeira)}</p>
        `;
        document.getElementById('orderDetails').innerHTML = orderDetails;
    }
}



document.addEventListener('DOMContentLoaded', function() {
    displayOrderDetails();
});
