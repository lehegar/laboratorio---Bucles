type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// ESPECIALIDAD PEDIATRIA Y MENORES DE 10 AÑOS//

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      resultado.push(pacientes[i]);
    }
  }

  return resultado;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//100 PPM Y 39° TEMPERATURA //

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProtolo = true;
      break;
    }
  }

  return activarProtolo;
};
console.log(
  "Activar protocolo de urgencia:",
  activarProtocoloUrgencia(pacientes)
);

// PEDIATRIA A MEDICO DE FAMILIA //

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }
  }
  return pacientes;
};

console.log(
  "Pacientes reasignados a Medico de familia:",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// PACIENTES EN PEDIATRIA //

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return true;
    }
  }
  return false;
};
console.log("¿Hay pacientes de Pediatría?", HayPacientesDePediatria(pacientes));

// PACIENTES POR ESPECIALIDAD //

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let cuentaMedicoDeFamilia = 0;
  let cuentaPediatria = 0;
  let cuentaCardiologia = 0;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      cuentaMedicoDeFamilia++;
    } else if (pacientes[i].especialidad === "Pediatra") {
      cuentaPediatria++;
    } else if (pacientes[i].especialidad === "Cardiólogo") {
      cuentaCardiologia++;
    }
  }

  return {
    medicoDeFamilia: cuentaMedicoDeFamilia,
    pediatria: cuentaPediatria,
    cardiologia: cuentaCardiologia,
  };
};

console.log(
  "Número de pacientes por especialidad:",
  cuentaPacientesPorEspecialidad(pacientes)
);
