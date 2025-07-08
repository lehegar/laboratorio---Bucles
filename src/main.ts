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
  return pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//100 PPM Y 39° TEMPERATURA //

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = pacientes.some(
    (paciente) =>
      paciente.temperatura >= 39 && paciente.frecuenciaCardiaca >= 100
  );

  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));

// PEDIATRIA A MEDICO DE FAMILIA //

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de familia",
      };
    }
    return paciente;
  });
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// PACIENTES EN PEDIATRIA //

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.every((paciente) => paciente.especialidad === "Pediatra");
};

console.log(HayPacientesDePediatria(pacientes));

// PACIENTES POR ESPECIALIDAD //

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let contadorEspecialidades: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  pacientes.forEach((paciente) => {
    const esp = paciente.especialidad;

    if (esp === "Medico de familia") {
      contadorEspecialidades.medicoDeFamilia += 1;
    } else if (esp === "Pediatra") {
      contadorEspecialidades.pediatria += 1;
    } else if (esp === "Cardiólogo") {
      contadorEspecialidades.cardiologia += 1;
    }
  });

  return contadorEspecialidades;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
