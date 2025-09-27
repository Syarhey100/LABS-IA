import React from "react";

const empleados = [
  { id: 1, nombre: "Anel De Jesus Sanchez", puesto: "Directora de Recursos Humanos" },
  { id: 2, nombre: "Maria Guadalupe Solorzano Martinez", puesto: "Gerente de Finanzas" },
  { id: 3, nombre: "Brandon Gomez Garcia", puesto: "Líder de Proyectos" },
  { id: 4, nombre: "Sergio De La Luz Chavelas", puesto: "Desarrollador Sr." },
  { id: 5, nombre: "Mariana López", puesto: "Diseñadora UX/UI" },
  { id: 6, nombre: "Jorge Hernández", puesto: "Analista de Datos" },
  { id: 7, nombre: "Laura Fernández", puesto: "Reclutadora" },
  { id: 8, nombre: "Ricardo Sánchez", puesto: "Soporte Técnico" },
  { id: 9, nombre: "Valeria Castro", puesto: "Coordinadora de Marketing" },
  { id: 10, nombre: "Miguel Ortiz", puesto: "Asistente Administrativo" },
];

function Empleados() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">👥 Directorio de Empleados</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-blue-900 text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Puesto</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((emp, i) => (
              <tr
                key={emp.id}
                className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-3 font-medium">{emp.id}</td>
                <td className="px-4 py-3 truncate max-w-xs">{emp.nombre}</td>
                <td className="px-4 py-3 truncate max-w-xs">{emp.puesto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Empleados;
