import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  estudiantes: Array<any> = [
    { "nombre": 'David', 'edad': 19, "fechaNacimiento": new Date(2014,10,12), "calificacion": 2, "activo": true },
    { "nombre": "Danny", "edad": 20, "fechaNacimiento": new Date(2013,11,5), "calificacion": 3, "activo": true },
    { "nombre": "Camila", "edad": 18, "fechaNacimiento": new Date(2015,9,22), "calificacion": 5, "activo": true },
    { "nombre": "Jiss", "edad": 18, "fechaNacimiento": new Date(2015,8,14), "calificacion": 4, "activo": true }
  ];

  estudiante = true;
  profesor = false;
  mejorEstudiante = false;

  constructor(){}

  estudianteMasViejo(){
    const arrayEdad: any[] = [];
    this.estudiantes.forEach(estudiante => {
      arrayEdad.push(estudiante.edad);
    });

    const viejo = Math.max(...arrayEdad);
    return this.estudiantes.find(el => el.edad === viejo);
  }

  getMejorEstudiante(){
    const arrayCalificacion: any[] = [];
    this.estudiantes.forEach(estudiante => {
      arrayCalificacion.push(estudiante.calificacion);
    });
    const alto = Math.max(...arrayCalificacion);
    this.mejorEstudiante = true;
    return this.estudiantes.find(el => el.calificacion === alto);
  }
}
