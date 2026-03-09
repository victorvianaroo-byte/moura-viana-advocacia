import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// A Vercel executa a partir da raiz (process.cwd())
const root = process.cwd();

// Verificação robusta do caminho da pasta dist
// Tentamos 'dist/public' primeiro, depois 'dist'
const possiblePaths = [
  path.join(root, "dist", "public"),
  path.join(root, "dist")
];

let staticPath = possiblePaths[0];
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    staticPath = p;
    break;
  }
}

// Middleware para arquivos estáticos
// Importante: isso deve vir ANTES da rota coringa '*'
app.use(express.static(staticPath));

// Rota coringa para o frontend (SPA)
app.get("*", (req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    // Fallback caso o build tenha uma estrutura diferente
    res.status(404).send(`Erro: index.html não encontrado. Verificado em: ${staticPath}`);
  }
});

// EXPORTAÇÃO PARA VERCEL
// No ambiente serveless, a Vercel gerencia o ciclo de vida do app
export default app;

// Execução local
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Rodando localmente em http://localhost:${port}`);
  });
}