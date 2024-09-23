import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';  // Necessário para substituir __dirname

import { initializeConnection } from './config/database.js';

// Importar as rotas
import authRoutes from './routes/authRoutes.js';
import checkoutRoutes from './routes/checkoutRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import purchasedCoursesRoutes from './routes/purchasedCoursesRoutes.js';
import storePurchaseRoutes from './routes/storePurchaseRoutes.js';
import courseContentRoutes from './routes/courseContentRoutes.js';

// Necessário para determinar __dirname em ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Configurar a pasta de arquivos estáticos para servir o frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

// Usar as rotas importadas
app.use("/auth", authRoutes); 
app.use("/checkout", checkoutRoutes);
app.use("/courses", courseRoutes);
app.use("/videos", videoRoutes);
app.use("/purchased", purchasedCoursesRoutes);
app.use("/store-purchase", storePurchaseRoutes);
app.use("/course-content", courseContentRoutes);

// Inicializar a conexão com o banco de dados e iniciar o servidor
initializeConnection()
  .then((connection) => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }) 
  .catch((err) => {
    console.error("Error initializing database connection:", err);
  });
