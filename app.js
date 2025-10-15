const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
})

app.get("/bacheca", (req, res) => {
    
    const bacheca = [
        {
            titolo: "Ciambellone",
            contenuto: "Dolce classico, facile e veloce da preparare",
            image: "/img/ciambellone.jpeg",
            tags: [
                "dolce", "farina", "uova"
            ]
        },
        {
            titolo: "Cracker barbabietola",
            contenuto: "Uno snack alternativo e sallutare per uno spuntino",
            image: "/img/cracker_barbabietola.jpeg",
            tags: [
                "salato", "verdura", "crunchy"
            ]
        },
        {
            titolo: "Pane fritto dolce",
            contenuto: "Delizioso dolce super semplice da preparare",
            image: "/img/pane_fritto_dolce.jpeg",
            tags: [
                "dolce", "farina", "pane"
            ]
        },
        {
            titolo: "Pasta barbabietola",
            contenuto: "Un piatto dal gusto unico",
            image: "/img/pasta_barbabietola.jpeg",
            tags: [
                "salato", "pasta", "verdura"
            ]
        },
        {
            titolo: "Torta paesana",
            contenuto: "Immancabile dessert delle feste, deliziosa tipicità",
            image: "/img/torta_paesana.jpeg",
            tags: [
                "salato", "farina", "tipico" 
            ]
        }
    ];

    res.json(bacheca)

})

app.listen(port, () => {
    console.log(`Esempio app listening on port ${port}`)
})

