import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent {
  
  constructor() {

  }

  //Utilizando FormGroup e FormControl
  // profileForm =  new FormGroup({
  //   name: new FormControl(''),
  //   cpf: new FormControl(''),
  //   address: new FormGroup(
  //     {
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl('')
  //     }
  //   )
  // });

  formBuilder = inject(FormBuilder);

  //Utilizando FormBuilder
   profileForm = this.formBuilder.group({
     name: ['', Validators.required],
     cpf: ['', Validators.required],
     address: this.formBuilder.group({
       street: [''],
       city: [''],
       state: [''],
       zip: ['']
     }),
     nicknames: this.formBuilder.array([this.formBuilder.control('')])
  });

  get apelidos() {
    return this.profileForm.get('nicknames') as FormArray
  }

  preencherFormulario() {
    this.profileForm.patchValue({
      name: 'Jean',
      cpf:'3116119128',
      address: {
        street: 'Erica',
        city: 'Panambi',
        state: 'RS',
        zip: '98280-000'
      }
    })
  }
  
  adicionarApelido () {
    this.apelidos.push(this.formBuilder.control(''));
  }

  submitForm() {
    console.warn(this.profileForm.value);
  }
}
