import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// O Vercel executa a partir da raiz. Tentamos o caminho dist/public (seu padrão) 
// ou apenas dist (padrão do Vite) como segurança.
const root = process.cwd();
const staticPath = fs.existsSync(path.join(root, "dist", "public")) 
  ? path.join(root, "dist", "public") 
  : path.join(root, "dist");

// Middleware para arquivos estáticos
app.use(express.static(staticPath));

// Rota coringa para o frontend (SPA)
app.get("*", (req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Erro: index.html não encontrado em " + staticPath);
  }
});

// OBRIGATÓRIO PARA VERCEL: Exportar o app
export default app;

// Execução local
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Rodando localmente em http://localhost:${port}`);
  });
}