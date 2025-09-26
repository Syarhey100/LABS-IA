import React, { useState } from "react";
import Empleados from "./Empleados";

function App() {
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const enviarPregunta = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/rh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pregunta }),
      });
      const data = await res.json();
      setRespuesta(data.respuesta);
    } catch (err) {
      setRespuesta("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col shadow-lg">
        <div className="p-6 text-3xl font-bold border-b border-blue-800 tracking-wide">
          RH Corp.
        </div>
        <nav className="flex flex-col p-4 space-y-3 text-lg">
          <button className="flex items-center gap-2 text-left px-3 py-2 rounded-lg hover:bg-blue-800 transition">
            🤖 <span>Consultar IA</span>
          </button>
          <button className="flex items-center gap-2 text-left px-3 py-2 rounded-lg hover:bg-blue-800 transition">
            📘 <span>Políticas</span>
          </button>
          <button className="flex items-center gap-2 text-left px-3 py-2 rounded-lg hover:bg-blue-800 transition">
            📊 <span>Capacitación</span>
          </button>
          <button className="flex items-center gap-2 text-left px-3 py-2 rounded-lg hover:bg-blue-800 transition">
            ☎ <span>Contacto RH</span>
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 overflow-y-auto bg-gray-50">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-1">Panel de Recursos Humanos</h1>
          <p className="text-gray-600 text-lg">Empresa patito</p>
        </header>

        {/* Dashboard cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-1">👥 Colaboradores</h2>
            <p className="text-4xl font-bold text-blue-900">10</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">📅 Tareas RH</h2>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Evaluación trimestral</li>
              <li>Capacitación en liderazgo</li>
              <li>Encuesta de clima laboral</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">🧾 Última consulta</h2>
            <p className="text-gray-600">{respuesta || "Sin consultas aún"}</p>
          </div>
        </section>

        {/* Chat with AI */}
        <section className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🤖 Consultar a la IA</h2>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-4"
            rows="3"
            placeholder="Escribe tu consulta de RH..."
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
          />
          <button
            onClick={enviarPregunta}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
          {respuesta && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <strong className="text-gray-700">Respuesta IA:</strong>
              <p className="text-gray-700 mt-1">{respuesta}</p>
            </div>
          )}
        </section>

        {/* Componente de Empleados */}
        <Empleados />
      </main>
    </div>
  );
}

export default App;
