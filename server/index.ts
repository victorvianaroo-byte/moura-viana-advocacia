import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// A Vercel executa a partir da raiz do projeto. 
// O build do Vite coloca o site em dist/public.
const staticPath = path.join(process.cwd(), "dist", "public");

// Middleware para arquivos estáticos
app.use(express.static(staticPath));

// Rota coringa para o frontend (SPA)
app.get("*", (req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    // Se chegar aqui, o build do Vite falhou ou a pasta está errada
    res.status(404).send("Erro: index.html não encontrado em " + staticPath);
  }
});

// OBRIGATÓRIO PARA VERCEL: Exportar o app sem o .listen()
export default app;

// Execução local (fora da Vercel)
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Rodando localmente em http://localhost:${port}`);
  });
}