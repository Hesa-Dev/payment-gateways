// Importando o express
const express = require('express');
import { router } from "./router";

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para interpretar dados JSON
app.use(cors());
app.use(express.json());

app.use(router)

// Iniciando o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


