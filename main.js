import express from "express";
const app = express();
app.use(express.json());

const PORT = 4000;


let quotes = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Nunca es tarde para empezar de nuevo.",
    "La disciplina vence al talento.",
    "Cree en ti y todo será posible.",
    "voy bajando con ema"
];


app.get("/random/quotes", (req, res) => {
    res.json(quotes);
});


app.get("/random/quotes/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ frase: quotes[randomIndex] });
});


app.post("/random/quotes", (req, res) => {
    const { frase } = req.body;
    if (!frase) return res.status(400).json({ error: "Debes enviar una frase" });

    quotes.push(frase);
    res.status(201).json({ mensaje: "Frase agregada", frases: quotes });
});

app.listen(PORT, () => {
    console.log(`Servidor de frases corriendo en http://localhost:${PORT}`);
});