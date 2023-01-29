import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent {

  formAgregarEstudiante: FormGroup;

  constructor(){
    let fechaRegex:string = '^\d{2}\/\d{2}\/\d{4}$/';
    let controles: any = {
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      edad: new FormControl('',[Validators.required, Validators.min(10)]),
      fechaNacimiento: new FormControl('',[Validators.required, Validators.pattern(fechaRegex)]),
      calificacion: new FormControl('',[Validators.required, Validators.max(5), Validators.min(0)]),
      activo: new FormControl(false, []),
    };
    this.formAgregarEstudiante = new FormGroup(controles);
  }

  agregarEstudianteNota(){
    console.log(this.formAgregarEstudiante);

    // let form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    // if (form.checkValidity() === false) {
    //   $event.preventDefault();
    //   $event.stopPropagation();
    // }
    // form.classList.add('was-validated');
  }
}
