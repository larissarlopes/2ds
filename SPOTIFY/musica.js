const musicas = [
{id: 1, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYY36A5fODnllPBSTAsP7lSl6KOxbPeC5qC6HggmmgXA&s=10' ,
        banda: 'mc kvein',
        nome: 'passado e presente'
},
{id: 2, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs4rFmGyGDC_a7y3So1zHL9RLEzp7tTGAhoNvniNESQ&s=10' ,
        banda: 'mc negao original',
        nome: 'Mais uma vez'
},
{id: 3, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeDP6NI1iIBNbhttQ_68ikXRvTtEYaODEHaGCzwcs9g&s=10' ,
        banda: 'mc paiva',
        nome: 'meia noite'
},
{id: 4, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzf9oHA0b1bDOM2d45plV34IMqCh9GzQRXi9yfZbBWNQ&s=10' , 
        banda: 'chorao',
        nome: 'meu novo mundo'
},
{id: 5, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0x-MTarKt0TjFute0pGxd7aJu5TjZFWHg_RLCoQ6sw&s' , 
        banda: 'mc tutu',
        nome: '2T na levada'
}
]
const lista = document.getElementById('listaMusicas');

musicas.forEach(function(musica) {
    const item = document.createElement('li');

    item.className = 'list-group-item';

    item.innerHTML = `
        <img src="${musica.url}" width="60" height="60"
        s="me-3 rounded"> 

        <div class="fw-bold">${musica.nome}</div>
        <div class="text-muted">${musica.banda}</div>
    </div>
    `;

    lista.appendChild(item); 
});
