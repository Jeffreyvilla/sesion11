import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-11';
  formulario: FormGroup = new FormGroup({});
  submitted = false;
  resultado = '';
  constructor(private formBuilder: FormBuilder) {
    this.inicializarFormulario()
  }


  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      this.resultado = 'Todos los datos son válidos'
    }
  }
}
