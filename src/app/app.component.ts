import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Añade esta línea
})

export class AppComponent {
  title = 'my-app';
  datosGenerales = {
    nombre: 'Líder Ingeniería',
    nivel: 'Manager',
    proceso: 'Ingeniería',
    jefe: 'Gerente de Fábrica de Calzado',
    supervisados: [
      'Ingeniero de Implementación y Procesos',
      'Ingeniero de Procesos',
      'Ingeniero de Programación y Nómina'
    ]
  };

  responsabilidades = [
    {
      titulo: '3.1 Liberación de la Factibilidad',
      descripcion1: 'Recibir del GERENTE DE ADMINISTRACIÓN DE PEDIDOS Y SERVICIO AL CLIENTE los compromisos pactados con los clientes, analizar la factibilidad, establecer los recursos necesarios para la producción como, cantidad de personal necesario, herramentales para la producción, maquinaria, equipos e instalaciones.',
      medidor1: 'Estudio de la factibilidad para la fabricación, documentado y firmado por todas las partes involucradas.Factibilidad en números %'
    },
    {
      titulo: '3.2 Paquete Técnico',
      descripcion2: 'Recibir del proceso INGENIERIA DE DESARROLLO el paquete técnico completo para iniciar la producción de los nuevos modelos.',
      medidor2: 'Validación y firma del check list del paquete técnico disponible para iniciar la producción. Paquete entregado conforme a fecha programada.'
    },
    {
      titulo: '3.3 Productos Liberados PDP',
      descripcion3: 'Validar, planear que los tiempos del proceso de implementación en el PDP se cumplan en tiempo con el objetivo de hacer factibles los nuevos proyectos en calidad, en tiempo, forma y la definición de los procesos, conforme requiere el GERENTE DE ADMINISTRACIÓN DE PEDIDOS Y SERVICIO AL CLIENTE fechas de entregas pactadas con los clientes.',
      medidor3: 'Indicador de puntualidad de PDP implementación Versus Análisis de Factibilidad. Indicador de puntualidad PDP.'
    },
    {
      titulo: '3.4 Programación de la Semana',
      descripcion4: 'Actuar sobre el proceso de SEMANA DE PROGRAMACIÓN para que se elabore la programación de las fábricas, contemplando todos los documentos de seguimiento de la producción, abastecimiento de los materiales, herramentales, maquinaria, fecha de entrega, Etc.',
      medidor4: 'Cumplimiento de los programas semanales y cierre de pedidos = < 3 programas abiertos. Pares producidos Versus pares programados'
    },
    {
      titulo: '3.5 Eficiencia',
      descripcion5: 'Medir diariamente el desempeño (eficiencias) de los procesos, asegurar y controlar los resultados de esta medición para generar el presupuesto compatible con los sueldos a pagar. Supervisar y validar la correcta asignación de salarios de acuerdo con las categorías establecidas por la empresa y la gestión de las plantillas de producción. (ESTRUCTURA DE PUESTOS Y FUNCIONES OPERATIVAS)',
      medidor5: 'Medir y gestionar las deviaciones en la nómina conforme a la política establecida. Pares producidos Versus Eficiencia lograda %'
    },
    {
      titulo: '3.6 Rutinas del Supervisor',
      descripcion6: 'Auditar los procesos de fabricación en conjunto con el líder del área Rutina del Supervisor y corroborar, en el documento de Rutinas del Supervisor que los procesos sean de acuerdo con lo implementado, conforme a las especificaciones de proceso y la muestra física.',
      medidor6: 'Aseguramiento de los procesos de fabricación y registro en el documento Rutinas del Supervisor. Cumplimiento de los % Establecidos  1)	Calidad 40%,  2)	Meta de Producción 30%,  3)	Programas abiertos =< 3 20%,  4)	Orden y Limpieza 10%'
    },
    {
      titulo: '3.7 Mejora Continua',
      descripcion7: 'Actuar continuamente como interlocutor para las acciones correctivas conforme sean necesarias para mejorar la satisfacción del cliente en todo lo que se refiere al proceso y mejora de la calidad, costos y productividad.',
      medidor7: 'Gestionar los procesos de mejora y nuevos proyectos para mejorar la satisfacción del cliente. Acciones correctivas cerradas, Círculos de Calidad cerrados.'
    }
  ];

  perfil = {
    nivelAcademico: 'Licenciatura/Ingeniería',
    experiencia: '2 a 5 años',
    idiomas: 'Inglés conversación',
    licencia: 'Tipo A'
  };

  competencias = {
    manufactura1: 'Planeación, programación y control de la producción',
    manufactura2:  'Administración de proyectos PDP',
    manufactura3:  'Cálculo de consumos de materiales directos e indirectos',
    manufactura4:  'Cálculo de costos de mano de obra y materia prima',
    manufactura5:  'Eliminación de desperdicios de manufactura',
    manufactura6:  'Sistema de gestión de la calidad',
    manufactura7:  'Implementación de nuevos productos',
    manufactura8:  'Lay out y proyectos de distribución física en la planta',
    manufactura9:  'Lean Manufacturing',
    manufactura10:  'MASP (Metodología para Análisis y Solución de Problemas)',
    manufactura11:  'Balanceo de líneas de producción',
    
    comportamentales1: 'Liderazgo',
    comportamentales2:  'Organización y planeación',
    comportamentales3:  'Comunicación',
    comportamentales4:  'Toma de decisiones',
    comportamentales5:  'Administración del tiempo',
    comportamentales6:  'Lograr resultados'
    
  };

  autoridades = {
    autoridad1: 'Modificar metas de producción.',
    autoridad2:'Modificar tiempos de operaciones y costos.',
    autoridad3:'Reacomodar personal operativo.',
    autoridad4:'Autorizar cambios de categoría de sueldos.',
    autoridad5:'Aceptar o rechazar candidatos a puestos de ingeniería.',
    autoridad6:'Detener procesos de fabricación fuera de especificación.'
  };

  controlDocumento = {
    elaboro: 'Gerente de Fábrica de Calzado',
    reviso: 'Gerente de Fábrica de Calzado',
    aprobo: 'CEO'
  };

  controlCambios = [
    {
      fecha: '05/07/2024',
      revision: '01',
      descripcion: 'Emisión y nueva estructura, ajustes en competencias y responsabilidades.'
    }
  ];

  chartOptions = {
    title:{
      text: "Ejemplo Gráfico"  
    },
    animationEnabled: true,
    data: [{        
      type: "column",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 95 },
        { x: 60, y: 68 },
        { x: 70, y: 28 },
        { x: 80, y: 34 },
        { x: 90, y: 14 }
      ]
    }]
  }	
}

@NgModule({

  imports: [
    CommonModule,
    CanvasJSAngularChartsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    // No es necesario importar BrowserModule aquí, solo en el AppModule
  ],
  
  providers: [],
  bootstrap: [AppComponent] // Asumiendo que AppComponent es tu componente raíz
})
export class AppModule {}

