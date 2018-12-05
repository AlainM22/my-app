import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup; //formulario para agrupar inputs == FormControl
  colores: FormArray; //Arrays de FormControl

  constructor(public frutaService : FrutaService) { 
    console.trace('FormularioComponent constructor');

    // agrupacion de controles == formulario
    this.formulario = new FormGroup({
      nombre: new FormControl(
        '', //valor inicial
        [ //validaciones
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ),
      precio: new FormControl(
        '0.1', //valor inicial
        [ //validaciones
          Validators.required,
          Validators.min(0.1),
          Validators.max(999)
        ]
      ),
      calorias: new FormControl(
        "25", //valor inicial
        [//validaciones
          Validators.required,
          Validators.min(0.1),
          Validators.max(600)
        ]
        ),
        oferta: new FormControl(false),
        descuento: new FormControl(
          "5", //valor inicial
          [//validaciones
            Validators.min(5),
            Validators.max(90)
          ]
        ),
        imagen: new FormControl(
          "https://i.pinimg.com/originals/c3/3e/a1/c33ea15a11c06ddb84fb8d9560d32808.png",//valor inicial
          [//validaciones
            Validators.required,
            Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')
          ]
        ),
        colores: new FormArray([this.crearColorFormGroup()], Validators.minLength(1))
    });

    this.colores = this.formulario.get('colores') as FormArray;
  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
  }

  cargarFormulario(){
    console.trace('FormularioComponent cargarFormulario');
    this.formulario.controls.nombre.setValue("Melocoton");
    this.formulario.controls.precio.setValue(4.5);
    this.formulario.controls.calorias.setValue(150);
    this.formulario.controls.oferta.setValue(true);
    this.formulario.controls.descuento.setValue(5);
    this.formulario.controls.imagen.setValue("http://www.frutaspoveda.com/wp-content/uploads/2018/04/Fruta-de-hueso.jpg");
  }

  sumitar(){
    console.trace('FormularioComponent sumitar %o', this.formulario);
    let fruta =  new Fruta();
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.oferta = this.formulario.controls.oferta.value;
    
    //Aplicamos el descuento si la oferta esta activa, si no se manda un 0
    if(this.formulario.controls.oferta.value){
      fruta.descuento = this.formulario.controls.descuento.value;
    }else{
      fruta.descuento = 0;
    }
    
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.cantidad = 0;
    fruta.colores = this.formulario.controls.colores.value;

    this.frutaService.add(fruta).subscribe(data =>{
      console.debug(data);
    });
  }

  crearColorFormGroup(): FormGroup{
    return new FormGroup({
      color: new FormControl('Verde', [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
    })
  }

  nuevoColor(){
    console.trace('FormularioComponent nuevoColor');
    let aColores = this.formulario.get('colores') as FormArray;
    aColores.push(this.crearColorFormGroup());
  }

  eliminarColor(index: number){
    console.trace('FormularioComponent eliminarColor');
    let arrayColores = this.formulario.get('colores') as FormArray;
    if(arrayColores.length > 1){
      arrayColores.removeAt(index);
    }
  }

}
