import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/** * Na Vercel, o build do Vite coloca os arquivos em dist/public.
 * O servidor compilado fica em dist/index.js, então voltamos um nível (..) para achar a public.
 */
const staticPath = path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

// Rota para o frontend (SPA)
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// ISSO É O MAIS IMPORTANTE: A Vercel precisa do export default para funcionar
export default app;

// O servidor só "ouve" a porta se não estiver na produção (Vercel)
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor rodando localmente em http://localhost:${port}`);
  });
}