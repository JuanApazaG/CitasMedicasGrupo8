//Comenzamos creando las clases para las citas medicas en el backend

class Paciente {
    constructor(nombre, apellido, edad, genero, direccion, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.genero = genero;
      this.direccion = direccion;
      this.telefono = telefono;
      this.historialMedico = new HistorialMedico();
      this.citas = [];
    }
  
    agregarCita(cita) {
      this.citas.push(cita);
    }
  }
  
  class Medico {
    constructor(nombre, especialidad, direccionConsultorio, telefono) {
      this.nombre = nombre;
      this.especialidad = especialidad;
      this.direccionConsultorio = direccionConsultorio;
      this.telefono = telefono;
      this.citas = [];
    }
  
    agregarCita(cita) {
      this.citas.push(cita);
    }
  }
  
  class Cita {
    constructor(fecha, hora, medico, paciente, motivo) {
      this.fecha = fecha;
      this.hora = hora;
      this.medico = medico;
      this.paciente = paciente;
      this.motivo = motivo;
      this.consultaMedica = null;
    }
  
    asignarConsulta(consulta) {
      this.consultaMedica = consulta;
    }
  }
  
  class ConsultaMedica {
    constructor(sintomas, diagnostico, medicamentos, recomendaciones) {
      this.sintomas = sintomas;
      this.diagnostico = diagnostico;
      this.medicamentos = medicamentos;
      this.recomendaciones = recomendaciones;
    }
  }
  
  class HistorialMedico {
    constructor() {
      this.enfermedadesAnteriores = [];
      this.tratamientos = [];
      this.alergias = [];
    }
  
    agregarEnfermedad(enfermedad) {
      this.enfermedadesAnteriores.push(enfermedad);
    }
  
    agregarTratamiento(tratamiento) {
      this.tratamientos.push(tratamiento);
    }
  
    agregarAlergia(alergia) {
      this.alergias.push(alergia);
    }
  }
  
  class Administrador {
    constructor(nombreUsuario, contraseña) {
      this.nombreUsuario = nombreUsuario;
      this.contraseña = contraseña;
    }
  }
  
  class Usuario {
    constructor(nombreUsuario, contraseña) {
      this.nombreUsuario = nombreUsuario;
      this.contraseña = contraseña;
    }
  }
  
  class EspecialidadMedica {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  