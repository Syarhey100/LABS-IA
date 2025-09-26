import React from "react";

const empleados = [
  { id: 1, nombre: "Ana Torres", puesto: "Directora de Recursos Humanos" },
  { id: 2, nombre: "Luis Martínez", puesto: "Gerente de Finanzas" },
  { id: 3, nombre: "Sofía Ramírez", puesto: "Líder de Proyectos" },
  { id: 4, nombre: "Carlos Gómez", puesto: "Desarrollador Sr." },
  { id: 5, nombre: "Mariana López", puesto: "Diseñadora UX/UI" },
  { id: 6, nombre: "Jorge Hernández", puesto: "Analista de Datos" },
  { id: 7, nombre: "Laura Fernández", puesto: "Reclutadora" },
  { id: 8, nombre: "Ricardo Sánchez", puesto: "Soporte Técnico" },
  { id: 9, nombre: "Valeria Castro", puesto: "Coordinadora de Marketing" },
  { id: 10, nombre: "Miguel Ortiz", puesto: "Asistente Administrativo" },
];

function Empleados() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">👥 Directorio de Empleados</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Nombre</th>
            <th className="p-3 text-left">Puesto</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp, i) => (
            <tr
              key={emp.id}
              className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-3">{emp.id}</td>
              <td className="p-3">{emp.nombre}</td>
              <td className="p-3">{emp.puesto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Empleados;
