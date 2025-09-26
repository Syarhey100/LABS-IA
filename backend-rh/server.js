// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("💬 Servidor de RH con IA funcionando");
});

app.post("/api/rh", async (req, res) => {
  try {
    const { pregunta } = req.body;
    console.log("📩 Pregunta recibida:", pregunta);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Eres un asistente experto en Recursos Humanos. Ayuda en procesos de reclutamiento, capacitación y gestión de personal en empresas.",
        },
        { role: "user", content: pregunta },
      ],
    });

    const respuesta = completion.choices[0].message.content;
    console.log("✅ Respuesta generada:", respuesta);

    res.json({ respuesta });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
