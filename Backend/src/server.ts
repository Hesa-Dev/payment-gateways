// Importando o express
const express = require('express');
import  {Request , Response} from "express"

const app = express();

// Definindo uma porta (padrão 3000)
const PORT = process.env.PORT || 3001;

// Middleware para interpretar dados JSON
app.use(express.json());

// Rota GET para a raiz
app.get('/', (req:Request, res:Response) => {
  res.send('Hello, World!');
});

// Rota POST de exemplo
app.post('/data', (req:Request, res:Response) => {
  const receivedData = req.body;
  res.send(`Você enviou: ${JSON.stringify(receivedData)}`);
});

// Iniciando o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
